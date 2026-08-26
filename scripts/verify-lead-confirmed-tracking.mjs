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

function loadTracking({ gtagCalls = [] } = {}) {
  const source = stripImports(fs.readFileSync(TRACKING_PATH, 'utf8'))
    .replaceAll('export function ', 'function ');
  const sessionStorage = makeSessionStorage();
  const context = {
    BUSINESS: { telephone: '+17035550123' },
    console,
    process: { env: { NODE_ENV: 'test' } },
    recordDedupHit() {},
    getClickIds() { return {}; },
    getUtmParams() { return {}; },
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

function loadLeadSubmit({ formLocation, googleAdsCalls = [] } = {}) {
  const source = stripImports(fs.readFileSync(LEAD_SUBMIT_PATH, 'utf8'))
    .replaceAll('export function ', 'function ');
  const context = {
    CLICK_ID_KEYS: [],
    UTM_KEYS: [],
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

await verifyRouteDefersUntilConfirmation();
await verifyOtherFormsKeepCurrentBehavior();
console.log('Server-confirmed lead tracking checks passed.');
