import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const TRACKING_PATH = new URL('../src/lib/tracking.js', import.meta.url);
const LEAD_SUBMIT_PATH = new URL('../src/hooks/useLeadSubmit.js', import.meta.url);

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

function loadTracking({ gtagCalls = [], storageBlocked = false, omitGtag = false, sendTo } = {}) {
  const source = stripImports(fs.readFileSync(TRACKING_PATH, 'utf8'))
    .replaceAll('export function ', 'function ');
  const sessionStorage = makeSessionStorage();
  const context = {
    BUSINESS: { telephone: '+17035550123' },
    console,
    process: { env: { NODE_ENV: 'test', ...(sendTo ? { NEXT_PUBLIC_GOOGLE_ADS_LEAD_CONVERSION_SEND_TO: sendTo } : {}) } },
    recordDedupHit() {},
    getClickIds() { return {}; },
    getUtmParams() { return {}; },
    hasTrackingConsent() { return true; },
    trackingPageUrl(value) { const url = new URL(value); return url.origin + url.pathname; },
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
  };

  if (storageBlocked) {
    Object.defineProperty(context.window, 'sessionStorage', {
      get() { throw new Error('Storage blocked'); },
    });
  }
  if (omitGtag) delete context.window.gtag;

  vm.runInNewContext(
    `${source}\nglobalThis.__trackingExports = {\n  markLeadConfirmationPending,\n  trackFormSubmit,\n  trackLeadConfirmed,\n  trackGoogleAdsLeadOnConfirmedSubmit,\n};`,
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
  set(key, value) { this.values.set(key, value); }
  delete(key) { this.values.delete(key); }
  get(key) { return this.values.get(key) || ''; }
}

function loadLeadSubmit({ formLocation, googleAdsCalls = [] } = {}) {
  const source = stripImports(fs.readFileSync(LEAD_SUBMIT_PATH, 'utf8'))
    .replaceAll('export function ', 'function ');
  const context = {
    CLICK_ID_KEYS: [],
    UTM_KEYS: [],
    CONSENT_VERSION: 'test',
    hasTrackingConsent() { return true; },
    sanitizeLeadAdvertisingData() {},
    trackingPageUrl(value) { const url = new URL(value); return url.origin + url.pathname; },
    FormData: TestFormData,
    crypto: { randomUUID() { return 'event-123'; } },
    document: { referrer: '' },
    getClickIds() { return {}; },
    getFbp() { return ''; },
    getUtmParams() { return {}; },
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
    useRouter() { return { push() {} }; },
    window: { location: { href: 'https://ldndecks.com/deck-project-estimate' } },
  };

  vm.runInNewContext(
    `${source}\nglobalThis.__leadSubmitExports = { useLeadSubmit };`,
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
  assert.equal(gtagCalls.length, 1);
  assert.equal(gtagCalls[0][1], 'conversion');
  assert.equal(gtagCalls[0][2].event_id, 'event-123');
  assert.equal(gtagCalls[0][2].transaction_id, 'event-123');
}

async function verifyOtherFormsKeepCurrentBehavior() {
  const googleAdsCalls = [];
  const { context, form } = loadLeadSubmit({
    formLocation: 'contact_page',
    googleAdsCalls,
  });
  const submit = context.__leadSubmitExports.useLeadSubmit({ formType: 'quote' });
  await submit(form);
  assert.equal(googleAdsCalls.length, 1);
  assert.equal(googleAdsCalls[0].eventId, 'event-123');
}

function verifyConfirmedFallbackWithoutPendingState() {
  for (const storageBlocked of [false, true]) {
    const gtagCalls = [];
    const context = loadTracking({ gtagCalls, storageBlocked });
    const api = context.__trackingExports;
    // These calls represent ThankYouTracking after server proof verification.
    api.trackLeadConfirmed({ eventId: 'verified-without-local-receipt' });
    api.trackLeadConfirmed({ eventId: 'verified-without-local-receipt' });
    api.trackLeadConfirmed({ eventId: 'second-verified-lead' });
    assert.equal(context.window.dataLayer.filter(e => e.event === 'lead_confirmed').length, 2);
    assert.equal(gtagCalls.length, 2);
    assert.equal(gtagCalls[0][2].send_to, 'AW-16888402136/KNF1CJur4tIbENihgvU-');
  }
}

function verifySubmitAndThankYouShareReservation() {
  const gtagCalls = [];
  const context = loadTracking({ gtagCalls, storageBlocked: true });
  const api = context.__trackingExports;
  api.trackGoogleAdsLeadOnConfirmedSubmit({ eventId: 'ordinary-confirmed-lead' });
  api.trackLeadConfirmed({ eventId: 'ordinary-confirmed-lead' });
  assert.equal(gtagCalls.length, 1);
  assert.equal(context.window.dataLayer.filter(e => e.event === 'lead_confirmed').length, 1);
}

function verifyMissingGtagQueuesOneConversion() {
  const sendTo = 'AW-123456789/test-only-label';
  const context = loadTracking({ omitGtag: true, storageBlocked: true, sendTo });
  const api = context.__trackingExports;
  const consentCommand = ['consent', 'default', { ad_storage: 'denied' }];
  context.window.dataLayer.push(consentCommand);
  api.trackLeadConfirmed({ eventId: 'queued-verified-lead' });
  api.trackLeadConfirmed({ eventId: 'queued-verified-lead' });
  const queued = context.window.dataLayer.filter(e => e[0] === 'event' && e[1] === 'conversion');
  assert.equal(queued.length, 1);
  assert.equal(queued[0][2].transaction_id, 'queued-verified-lead');
  assert.equal(queued[0][2].send_to, sendTo);
  assert.equal(context.window.dataLayer[0], consentCommand);
  assert.equal(context.window.dataLayer.filter(e => e.event === 'lead_confirmed').length, 1);
}

function verifyRestrictedTagLayerDoesNotThrow() {
  for (const key of ['dataLayer', 'gtag', 'fbq', 'pintrk']) {
    const context = loadTracking();
    Object.defineProperty(context.window, key, {
      get() { throw new Error('Tag global blocked'); },
    });
    assert.doesNotThrow(() => context.__trackingExports.trackLeadConfirmed({ eventId: 'restricted-tag-lead' }), key);
  }
}

await verifyRouteDefersUntilConfirmation();
await verifyOtherFormsKeepCurrentBehavior();
verifyConfirmedFallbackWithoutPendingState();
verifySubmitAndThankYouShareReservation();
verifyMissingGtagQueuesOneConversion();
verifyRestrictedTagLayerDoesNotThrow();
console.log('Server-confirmed lead tracking checks passed.');
