import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const TRACKING_PATH = new URL('../src/lib/tracking.js', import.meta.url);
const LEAD_SUBMIT_PATH = new URL('../src/hooks/useLeadSubmit.js', import.meta.url);
const LAYOUT_PATH = new URL('../src/app/layout.js', import.meta.url);
const THANK_YOU_PAGE_PATH = new URL('../src/app/thank-you/page.js', import.meta.url);
const THANK_YOU_TRACKING_PATH = new URL('../src/components/ThankYouTracking.jsx', import.meta.url);
const LEAD_CONFIRMATION_CLIENT_PATH = new URL('../src/lib/leadConfirmationClient.js', import.meta.url);

function stripImports(source) {
  return source.replace(/^\s*import[\s\S]*?;\n/gm, '');
}

function makeSessionStorage() {
  const store = new Map();
  return {
    getItem(key) {
      return store.has(key) ? store.get(key) : null;
    },
    setItem(key, value) {
      store.set(key, String(value));
    },
    removeItem(key) {
      store.delete(key);
    },
  };
}

function loadTracking({ gtagCalls = [], sessionStorage = makeSessionStorage() } = {}) {
  const source = stripImports(fs.readFileSync(TRACKING_PATH, 'utf8'))
    .replaceAll('export function ', 'function ');
  const vercelEvents = [];
  const context = {
    BUSINESS: { telephone: '+17035550123' },
    console,
    process: { env: { NODE_ENV: 'test' } },
    recordDedupHit() {},
    getClickIds() { return {}; },
    getUtmParams() { return {}; },
    async trackRedditConfirmedLead() {},
    trackVercelEvent(name, properties) { vercelEvents.push({ name, properties }); },
    window: {
      dataLayer: [],
      gtag(...args) { gtagCalls.push(args); },
      location: {
        href: 'https://ldndecks.com/thank-you?eid=event-123',
        pathname: '/thank-you',
      },
      sessionStorage,
      setTimeout(fn) { fn(); },
    },
    __vercelEvents: vercelEvents,
  };

  vm.runInNewContext(
    `${source}\nglobalThis.__trackingExports = {\n  markLeadConfirmationPending,\n  trackFormSubmit,\n  trackLeadConfirmed,\n};`,
    context,
    { filename: 'src/lib/tracking.js' }
  );
  return context;
}

class TestFormData {
  constructor(formElement) {
    this.values = new Map(Object.entries(formElement?.fields || {}));
  }
  append(key, value) { this.values.set(key, value); }
  get(key) { return this.values.get(key) || ''; }
}

function loadLeadSubmit({ formLocation, googleAdsCalls = [], sessionStorage = makeSessionStorage() } = {}) {
  const source = stripImports(fs.readFileSync(LEAD_SUBMIT_PATH, 'utf8'))
    .replaceAll('export function ', 'function ');
  const confirmationClientSource = fs.readFileSync(LEAD_CONFIRMATION_CLIENT_PATH, 'utf8')
    .replaceAll('export async function ', 'async function ')
    .replaceAll('export function ', 'function ');
  const routerDestinations = [];
  const context = {
    CLICK_ID_KEYS: [],
    UTM_KEYS: [],
    FormData: TestFormData,
    crypto: { randomUUID() { return 'event-123'; } },
    document: { referrer: '' },
    getClickIds() { return {}; },
    getFbp() { return ''; },
    getUtmParams() { return {}; },
    getOptionalTrackingConsent() { return 'declined'; },
    sanitizeLeadUrl(value) {
      if (!value) return '';
      const parsed = new URL(value);
      return `${parsed.origin}${parsed.pathname}`;
    },
    markLeadConfirmationPending() {},
    async sendContactEmail() {
      return { success: true, confirmationToken: 'proof-token' };
    },
    trackFormSubmit({ eventId, formType }) {
      return {
        eventId,
        attributionPayload: { form_type: formType, form_location: formLocation },
      };
    },
    trackGoogleAdsLeadOnConfirmedSubmit(payload) { googleAdsCalls.push(payload); },
    useRef(initialValue) { return { current: initialValue }; },
    useRouter() { return { push(destination) { routerDestinations.push(destination); } }; },
    window: {
      location: { href: 'https://ldndecks.com/deck-project-estimate' },
      sessionStorage,
    },
    __routerDestinations: routerDestinations,
  };

  vm.runInNewContext(
    `${confirmationClientSource}\n${source}\nglobalThis.__leadSubmitExports = { useLeadSubmit };`,
    context,
    { filename: 'src/hooks/useLeadSubmit.js' }
  );

  return {
    context,
    form: {
      dataset: { formLocation },
      fields: {
        name: 'Internal Test',
        email: 'internal@example.com',
        phone: '202-555-0147',
      },
    },
  };
}

async function verifyRouteDefersUntilConfirmation() {
  const preConfirmationCalls = [];
  const { context, form } = loadLeadSubmit({
    formLocation: 'paid_social_deck_project_estimate',
    googleAdsCalls: preConfirmationCalls,
  });
  const submit = context.__leadSubmitExports.useLeadSubmit({ formType: 'paid_social' });
  const result = await submit(form);
  assert.equal(result.confirmationReady, true);
  assert.equal(preConfirmationCalls.length, 0);
  assert.deepEqual(context.__routerDestinations, ['/thank-you']);
  assert.equal(
    context.__routerDestinations[0].includes('eid=') || context.__routerDestinations[0].includes('proof='),
    false,
    'navigation must never expose confirmation credentials in the URL'
  );
  assert.deepEqual(
    JSON.parse(context.window.sessionStorage.getItem('ldn_lead_confirmation_receipt')),
    { eventId: 'event-123', proof: 'proof-token' },
    'the confirmation receipt must be handed off through one narrow session key'
  );

  const gtagCalls = [];
  const tracking = loadTracking({ gtagCalls });
  const api = tracking.__trackingExports;
  api.trackFormSubmit({
    eventId: 'event-123',
    formType: 'paid_social',
    formLocation: 'paid_social_deck_project_estimate',
  });
  const preConfirmationLeads = tracking.window.dataLayer.filter(
    (event) => event.event === 'generate_lead'
  );
  const formSubmits = tracking.window.dataLayer.filter(
    (event) => event.event === 'form_submit'
  );
  assert.equal(preConfirmationLeads.length, 0);
  assert.equal(formSubmits.length, 1);
  assert.equal(formSubmits[0].event_id, 'event-123');
  assert.equal(formSubmits[0].transaction_id, 'event-123');

  api.markLeadConfirmationPending('event-123');
  api.trackLeadConfirmed({ eventId: 'event-123' });
  api.trackLeadConfirmed({ eventId: 'event-123' });

  const confirmed = tracking.window.dataLayer.filter((event) => event.event === 'lead_confirmed');
  assert.equal(confirmed.length, 1);
  assert.equal(confirmed[0].event_id, 'event-123');
  assert.equal(confirmed[0].transaction_id, 'event-123');
  assert.equal('value' in confirmed[0], false, 'lead must not carry an artificial $1 value');
  assert.equal('currency' in confirmed[0], false, 'lead value is assigned only after Jobber outcome data');
  assert.equal(gtagCalls.length, 0, 'lead_confirmed must have a single GTM-owned Ads path');
  assert.equal(tracking.__vercelEvents.length, 1);
  assert.equal(tracking.__vercelEvents[0].name, 'lead_confirmed');
  assert.equal(tracking.__vercelEvents[0].properties.path, '/thank-you');
}

async function verifyStorageFailureKeepsSuccessInline() {
  const unavailableStorage = {
    getItem() { throw new Error('storage unavailable'); },
    setItem() { throw new Error('storage unavailable'); },
    removeItem() { throw new Error('storage unavailable'); },
  };
  const { context, form } = loadLeadSubmit({
    formLocation: 'contact_page',
    sessionStorage: unavailableStorage,
  });
  const submit = context.__leadSubmitExports.useLeadSubmit({ formType: 'quote' });
  const result = await submit(form);

  assert.equal(result.success, true, 'operational delivery must still succeed');
  assert.equal(result.confirmationReady, false, 'conversion confirmation must fail closed');
  assert.deepEqual(context.__routerDestinations, [], 'storage failure must not navigate to a confirmation page');
}

function verifyInMemoryDedupWhenStorageThrows() {
  const unavailableStorage = {
    getItem() { throw new Error('storage unavailable'); },
    setItem() { throw new Error('storage unavailable'); },
    removeItem() { throw new Error('storage unavailable'); },
  };
  const tracking = loadTracking({ sessionStorage: unavailableStorage });
  tracking.__trackingExports.trackLeadConfirmed({ eventId: 'event-storage-error' });
  tracking.__trackingExports.trackLeadConfirmed({ eventId: 'event-storage-error' });

  const confirmed = tracking.window.dataLayer.filter((event) => event.event === 'lead_confirmed');
  assert.equal(confirmed.length, 1, 'in-memory dedup must survive sessionStorage failures');
}

async function verifyOtherFormsAlsoDeferUntilConfirmation() {
  const googleAdsCalls = [];
  const { context, form } = loadLeadSubmit({
    formLocation: 'contact_page',
    googleAdsCalls,
  });
  const submit = context.__leadSubmitExports.useLeadSubmit({ formType: 'quote' });
  await submit(form);
  assert.equal(
    googleAdsCalls.length,
    0,
    'all forms must wait for the proof-verified lead_confirmed event'
  );
}

function verifyGtmIsTheSingleGoogleAdsOwner() {
  const layout = fs.readFileSync(LAYOUT_PATH, 'utf8');
  assert.equal(
    layout.includes('google-ads-base-tag'),
    false,
    'layout must not load a second direct Google Ads tag alongside GTM'
  );
  assert.equal(
    layout.includes('google-ads-config'),
    false,
    'layout must not configure Google Ads outside GTM'
  );
}

async function verifyThankYouSuccessWaitsForEndpoint() {
  const page = fs.readFileSync(THANK_YOU_PAGE_PATH, 'utf8');
  const tracking = fs.readFileSync(THANK_YOU_TRACKING_PATH, 'utf8');
  const clientSource = fs.readFileSync(LEAD_CONFIRMATION_CLIENT_PATH, 'utf8')
    .replaceAll('export async function ', 'async function ')
    .replaceAll('export function ', 'function ');
  const clientContext = { window: { sessionStorage: makeSessionStorage() } };
  vm.runInNewContext(
    `${clientSource}\nglobalThis.__confirmationClient = { consumeLeadConfirmationReceipt, verifyLeadConfirmation };`,
    clientContext,
    { filename: 'src/lib/leadConfirmationClient.js' }
  );

  assert.equal(
    page.includes("hasConfirmationProof ? 'Message Received!'"),
    false,
    'query-string presence must never render a visible success state'
  );
  assert.match(clientSource, /response\.ok\s*&&\s*result\?\.ok/, 'success requires an ok endpoint response');
  assert.match(tracking, /setStatus\(['"]verified['"]\)/, 'valid proof must render a verified state');
  assert.match(tracking, /setStatus\(['"]error['"]\)/, 'invalid proof must render an error state');

  assert.equal(tracking.includes('useSearchParams'), false, 'the thank-you page must not read confirmation proof from the URL');
  const consumeIndex = tracking.indexOf('consumeLeadConfirmationReceipt()');
  const fetchIndex = tracking.indexOf('verifyLeadConfirmation(receipt.eventId, receipt.proof)');
  const trackIndex = tracking.indexOf('trackLeadConfirmed({ eventId: receipt.eventId })');
  assert.ok(consumeIndex >= 0 && consumeIndex < fetchIndex, 'the receipt must be consumed before verification I/O');
  assert.ok(trackIndex > fetchIndex, 'lead_confirmed must fire only after endpoint verification');

  const verify = clientContext.__confirmationClient.verifyLeadConfirmation;
  const consume = clientContext.__confirmationClient.consumeLeadConfirmationReceipt;
  const operationOrder = [];
  const receiptStorage = {
    getItem(key) {
      operationOrder.push('get');
      return key === 'ldn_lead_confirmation_receipt'
        ? JSON.stringify({ eventId: 'event-123', proof: 'valid-proof' })
        : null;
    },
    removeItem() { operationOrder.push('remove'); },
  };
  const receipt = consume(receiptStorage);
  assert.deepEqual({ ...receipt }, { eventId: 'event-123', proof: 'valid-proof' });
  await verify(receipt.eventId, receipt.proof, async () => {
    operationOrder.push('fetch');
    return { ok: true, async json() { return { ok: true }; } };
  });
  assert.deepEqual(operationOrder, ['get', 'remove', 'fetch'], 'receipt removal must happen before fetch');

  assert.equal(consume(makeSessionStorage()), null, 'a direct /thank-you visit without a receipt stays neutral');
  assert.match(tracking, /useState\(['"]neutral['"]\)/, 'thank-you rendering must start neutral');
  assert.equal(
    await verify('event-123', 'valid-proof', async () => ({
      ok: true,
      async json() { return { ok: true }; },
    })),
    true,
    'a valid proof response must verify'
  );
  assert.equal(
    await verify('event-123', 'invalid-proof', async () => ({
      ok: true,
      async json() { return { ok: false, reason: 'signature_mismatch' }; },
    })),
    false,
    'an invalid proof response must fail closed'
  );
}

await verifyRouteDefersUntilConfirmation();
await verifyStorageFailureKeepsSuccessInline();
verifyInMemoryDedupWhenStorageThrows();
await verifyOtherFormsAlsoDeferUntilConfirmation();
verifyGtmIsTheSingleGoogleAdsOwner();
await verifyThankYouSuccessWaitsForEndpoint();
console.log('Server-confirmed lead tracking checks passed.');
