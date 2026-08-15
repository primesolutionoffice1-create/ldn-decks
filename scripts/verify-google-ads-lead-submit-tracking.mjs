import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const TRACKING_PATH = new URL('../src/lib/tracking.js', import.meta.url);
const LEAD_SUBMIT_PATH = new URL('../src/hooks/useLeadSubmit.js', import.meta.url);

function stripImports(source) {
  return source.replace(/^\s*import[\s\S]*?;\n/gm, '');
}

function makeSessionStorage({ throws = false } = {}) {
  const store = new Map();
  return {
    getItem(key) {
      if (throws) throw new Error('sessionStorage read blocked');
      return store.has(key) ? store.get(key) : null;
    },
    setItem(key, value) {
      if (throws) throw new Error('sessionStorage write blocked');
      store.set(key, String(value));
    },
    removeItem(key) {
      if (throws) throw new Error('sessionStorage remove blocked');
      store.delete(key);
    },
  };
}

function loadTracking({ env = {}, sessionStorage = makeSessionStorage(), gtagCalls = [] } = {}) {
  const source = stripImports(fs.readFileSync(TRACKING_PATH, 'utf8'))
    .replaceAll('export function ', 'function ');

  const context = {
    BUSINESS: { telephone: '+17035550123' },
    console,
    process: {
      env: {
        NODE_ENV: 'test',
        ...env,
      },
    },
    recordDedupHit() {},
    getClickIds() {
      return {};
    },
    getUtmParams() {
      return {};
    },
    window: {
      dataLayer: [],
      gtag(...args) {
        gtagCalls.push(args);
      },
      location: {
        href: 'https://ldndecks.com/contact?gclid=test',
        pathname: '/contact',
      },
      sessionStorage,
      setTimeout(fn) {
        fn();
      },
    },
  };

  vm.runInNewContext(
    `${source}
globalThis.__trackingExports = {
  trackGoogleAdsLeadOnConfirmedSubmit,
  trackFormSubmit,
  trackLeadConfirmed,
  markLeadConfirmationPending,
};`,
    context,
    { filename: 'src/lib/tracking.js' }
  );

  return context;
}

class TestFormData {
  constructor(formElement) {
    this.values = new Map(Object.entries(formElement?.fields || {}));
  }

  append(key, value) {
    this.values.set(key, value);
  }

  get(key) {
    return this.values.get(key) || '';
  }
}

function loadLeadSubmit({ sendResult, googleAdsCalls = [], eventId = 'event-123' } = {}) {
  const source = stripImports(fs.readFileSync(LEAD_SUBMIT_PATH, 'utf8'))
    .replaceAll('export function ', 'function ');

  const routerPushes = [];
  const context = {
    CLICK_ID_KEYS: [],
    UTM_KEYS: [],
    FormData: TestFormData,
    crypto: {
      randomUUID() {
        return eventId;
      },
    },
    document: { referrer: '' },
    getClickIds() {
      return {};
    },
    getFbp() {
      return '';
    },
    getUtmParams() {
      return {};
    },
    markLeadConfirmationPending() {},
    async sendContactEmail() {
      return sendResult;
    },
    trackFormSubmit({ eventId: trackedEventId, formType }) {
      return {
        eventId: trackedEventId,
        attributionPayload: {
          form_type: formType,
          form_location: formType,
        },
      };
    },
    trackGoogleAdsLeadOnConfirmedSubmit(payload) {
      googleAdsCalls.push(payload);
    },
    useRef(initialValue) {
      return { current: initialValue };
    },
    useRouter() {
      return {
        push(path) {
          routerPushes.push(path);
        },
      };
    },
    window: {
      location: {
        href: 'https://ldndecks.com/contact',
      },
    },
  };

  vm.runInNewContext(
    `${source}
globalThis.__leadSubmitExports = { useLeadSubmit };`,
    context,
    { filename: 'src/hooks/useLeadSubmit.js' }
  );

  return { context, routerPushes };
}

function leadForm() {
  return {
    dataset: { formLocation: 'contact_page' },
    fields: {
      name: 'Test Lead',
      email: 'lead@example.com',
      phone: '703-555-0123',
      service: 'Composite Deck',
    },
  };
}

async function testSuccessfulSubmitFiresOnce() {
  const googleAdsCalls = [];
  const { context } = loadLeadSubmit({
    sendResult: { success: true, confirmationToken: 'proof-token' },
    googleAdsCalls,
  });

  const submit = context.__leadSubmitExports.useLeadSubmit({ formType: 'quote' });
  const result = await submit(leadForm());

  assert.equal(result.success, true);
  assert.equal(googleAdsCalls.length, 1);
  assert.equal(googleAdsCalls[0].eventId, 'event-123');
}

async function testFailedSubmitDoesNotFire() {
  const googleAdsCalls = [];
  const { context } = loadLeadSubmit({
    sendResult: { success: false },
    googleAdsCalls,
  });

  const submit = context.__leadSubmitExports.useLeadSubmit({ formType: 'quote' });
  const result = await submit(leadForm());

  assert.equal(result.success, false);
  assert.equal(googleAdsCalls.length, 0);
}

function testIdenticalEventIdDedups() {
  const gtagCalls = [];
  const context = loadTracking({ gtagCalls });

  context.__trackingExports.trackGoogleAdsLeadOnConfirmedSubmit({ eventId: 'same-event-id' });
  context.__trackingExports.trackGoogleAdsLeadOnConfirmedSubmit({ eventId: 'same-event-id' });

  assert.equal(gtagCalls.length, 1);
  assert.equal(gtagCalls[0][0], 'event');
  assert.equal(gtagCalls[0][1], 'conversion');
  assert.equal(gtagCalls[0][2].transaction_id, 'same-event-id');
}

function testSessionStorageFailureStillFires() {
  const gtagCalls = [];
  const context = loadTracking({
    sessionStorage: makeSessionStorage({ throws: true }),
    gtagCalls,
  });

  context.__trackingExports.trackGoogleAdsLeadOnConfirmedSubmit({ eventId: 'storage-blocked' });

  assert.equal(gtagCalls.length, 1);
  assert.equal(gtagCalls[0][2].transaction_id, 'storage-blocked');
}

function testEnvOverridesDefaultSendTo() {
  const gtagCalls = [];
  const context = loadTracking({
    env: {
      NEXT_PUBLIC_GOOGLE_ADS_LEAD_CONVERSION_SEND_TO: 'AW-TEST/NEW_LABEL',
    },
    gtagCalls,
  });

  context.__trackingExports.trackGoogleAdsLeadOnConfirmedSubmit({ eventId: 'env-test' });

  assert.equal(gtagCalls.length, 1);
  assert.equal(gtagCalls[0][2].send_to, 'AW-TEST/NEW_LABEL');
}

await testSuccessfulSubmitFiresOnce();
await testFailedSubmitDoesNotFire();
testIdenticalEventIdDedups();
testSessionStorageFailureStillFires();
testEnvOverridesDefaultSendTo();

console.log('Google Ads lead submit tracking checks passed.');
