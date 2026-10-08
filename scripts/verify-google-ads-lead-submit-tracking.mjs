import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const LEAD_SUBMIT_PATH = new URL('../src/hooks/useLeadSubmit.js', import.meta.url);

function stripImports(source) {
  return source.replace(/^\s*import[\s\S]*?;\n/gm, '');
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
    getOptionalTrackingConsent() {
      return 'declined';
    },
    sanitizeLeadUrl(value) {
      if (!value) return '';
      const parsed = new URL(value);
      return `${parsed.origin}${parsed.pathname}`;
    },
    markLeadConfirmationPending() {},
    storeLeadConfirmationReceipt() {
      return true;
    },
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

async function testSuccessfulSubmitDefersAdsConversion() {
  const googleAdsCalls = [];
  const { context } = loadLeadSubmit({
    sendResult: { success: true, confirmationToken: 'proof-token' },
    googleAdsCalls,
  });

  const submit = context.__leadSubmitExports.useLeadSubmit({ formType: 'quote' });
  const result = await submit(leadForm());

  assert.equal(result.success, true);
  assert.equal(
    googleAdsCalls.length,
    0,
    'Google Ads conversion must wait for the proof-verified lead_confirmed event'
  );
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

await testSuccessfulSubmitDefersAdsConversion();
await testFailedSubmitDoesNotFire();

console.log('Google Ads pre-confirmation suppression checks passed.');
