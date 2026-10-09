import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import crypto from 'node:crypto';

const LAYOUT = new URL('../src/app/layout.js', import.meta.url);
const CONSENT = new URL('../src/components/ConsentBanner.jsx', import.meta.url);
const CLICK_IDS = new URL('../src/lib/clickIds.js', import.meta.url);
const LEAD_SUBMIT = new URL('../src/hooks/useLeadSubmit.js', import.meta.url);
const SEND_EMAIL = new URL('../src/server/sendEmail.js', import.meta.url);
const META_CAPI = new URL('../src/server/metaCapi.js', import.meta.url);
const LEAD_PRIVACY = new URL('../src/lib/leadPrivacy.js', import.meta.url);

const layout = fs.readFileSync(LAYOUT, 'utf8');
const consent = fs.readFileSync(CONSENT, 'utf8');
const clickIds = fs.readFileSync(CLICK_IDS, 'utf8');
const leadSubmit = fs.readFileSync(LEAD_SUBMIT, 'utf8');
const sendEmail = fs.readFileSync(SEND_EMAIL, 'utf8');
const metaCapi = fs.readFileSync(META_CAPI, 'utf8');
const leadPrivacySource = fs.readFileSync(LEAD_PRIVACY, 'utf8')
  .replaceAll('export function ', 'function ');
const leadPrivacyContext = { URL };
vm.runInNewContext(
  `${leadPrivacySource}\nglobalThis.__leadPrivacy = { sanitizeLeadUrl, getOptionalTrackingConsent, deriveServerLeadSource };`,
  leadPrivacyContext,
  { filename: 'src/lib/leadPrivacy.js' }
);
const {
  sanitizeLeadUrl,
  getOptionalTrackingConsent,
  deriveServerLeadSource,
} = leadPrivacyContext.__leadPrivacy;

function stripImports(source) {
  return source.replace(/^\s*import[\s\S]*?;\n/gm, '');
}

class TestFormData {
  constructor(formElement) {
    this.values = new Map(Object.entries(formElement?.fields || {}));
  }
  append(key, value) { this.values.set(key, value); }
  get(key) { return this.values.get(key) || ''; }
}

async function captureLeadSubmission(consentValue, receiptStored = true) {
  const source = stripImports(fs.readFileSync(LEAD_SUBMIT, 'utf8'))
    .replaceAll('export function ', 'function ');
  let submittedFormData;
  const confirmationOrder = [];
  const localStorage = {
    getItem(key) {
      return key === 'ldn_cookie_consent' ? consentValue : null;
    },
  };
  const context = {
    CLICK_ID_KEYS: [], UTM_KEYS: [], FormData: TestFormData,
    crypto: { randomUUID() { return 'event-consent'; } },
    document: { referrer: 'https://search.example/results?q=private#fragment' },
    getClickIds() { return {}; }, getFbp() { return ''; }, getUtmParams() { return {}; },
    getOptionalTrackingConsent() { return consentValue === 'accepted' ? 'accepted' : 'declined'; },
    sanitizeLeadUrl,
    markLeadConfirmationPending() { confirmationOrder.push('pending'); },
    trackFormSubmit() {},
    storeLeadConfirmationReceipt() {
      confirmationOrder.push('receipt');
      return receiptStored;
    },
    async sendConfirmedMetaLeadEvent(_formData, token) {
      assert.equal(token, 'proof', 'the stored confirmation proof must reach the Meta server action');
      confirmationOrder.push('meta');
    },
    async sendContactEmail(formData) {
      submittedFormData = formData;
      return { success: true, confirmationToken: 'proof' };
    },
    useRef(initialValue) { return { current: initialValue }; },
    useRouter() { return { push() { confirmationOrder.push('navigation'); } }; },
    window: {
      localStorage,
      location: { href: 'https://ldndecks.com/contact?email=private%40example.com#quote' },
    },
  };
  vm.runInNewContext(
    `${source}\nglobalThis.__exports = { useLeadSubmit };`,
    context,
    { filename: 'src/hooks/useLeadSubmit.js' }
  );
  const result = await context.__exports.useLeadSubmit()({ fields: {}, dataset: {} });
  return { submittedFormData, confirmationOrder, result };
}

assert.match(
  layout,
  /if\(c!==['"]accepted['"]\)return/,
  'click and campaign IDs must not be persisted before consent'
);
assert.equal(layout.includes('googletagmanager.com/ns.html'), false, 'GTM noscript bypass must be removed');
assert.equal(layout.includes('facebook.com/tr?id='), false, 'Meta noscript bypass must be removed');
assert.equal(layout.includes('ct.pinterest.com/v3/'), false, 'Pinterest noscript bypass must be removed');
assert.match(consent, /persistAttributionCookies\(\)/, 'accepting consent must persist current attribution');
assert.match(consent, /clearAttributionCookies\(\)/, 'declining consent must clear attribution storage');
assert.match(clickIds, /hasAnalyticsConsent/, 'attribution reads must be consent-aware');

for (const consentValue of ['accepted', 'declined']) {
  leadPrivacyContext.window = {
    localStorage: { getItem() { return consentValue; } },
  };
  assert.equal(
    getOptionalTrackingConsent(),
    consentValue,
    `consent helper must preserve exact ${consentValue} state`
  );
  const { submittedFormData: submitted, confirmationOrder } = await captureLeadSubmission(consentValue);
  assert.equal(
    submitted.get('optional_tracking_consent'),
    consentValue,
    `the client must pass the exact ${consentValue} consent state`
  );
  assert.equal(submitted.get('source_url'), 'https://ldndecks.com/contact');
  assert.equal(submitted.get('referrer'), 'https://search.example/results');
  assert.deepEqual(
    confirmationOrder,
    consentValue === 'accepted'
      ? ['receipt', 'meta', 'pending', 'navigation']
      : ['receipt', 'pending', 'navigation'],
    'Meta CAPI may start only after the browser stores the confirmation receipt'
  );
}
const unavailableStorage = await captureLeadSubmission('accepted', false);
assert.deepEqual(
  unavailableStorage.confirmationOrder,
  ['receipt'],
  'Meta CAPI and confirmation navigation must remain suppressed when receipt storage fails'
);
assert.equal(unavailableStorage.result.confirmationReady, false);

assert.equal(
  deriveServerLeadSource({
    requestReferrer: 'https://ldndecks.com/server-path?secret=1#private',
    submittedSourceUrl: 'https://evil.example/client-label',
  }),
  'https://ldndecks.com/server-path',
  'server request context must win over client-provided source labels'
);
assert.equal(
  deriveServerLeadSource({
    submittedSourceUrl: 'https://ldndecks.com/fallback?secret=1#private',
  }),
  'https://ldndecks.com/fallback',
  'sanitized client source is only a request-context fallback'
);

assert.match(
  leadSubmit,
  /sendConfirmedMetaLeadEvent\(formData,\s*result\.confirmationToken\)/,
  'the client must pass the signed receipt proof to the post-confirmation Meta action'
);
assert.match(
  sendEmail,
  /verifyLeadConfirmationToken\(eventId,\s*confirmationToken\)/,
  'the post-confirmation Meta server boundary must verify proof against event_id'
);
assert.match(
  sendEmail,
  /sendConfirmedMetaLeadEvent[\s\S]*optionalTrackingConsent\s*!==\s*['"]accepted['"]/,
  'the post-confirmation server boundary must reject every state except exact accepted consent'
);
assert.match(
  metaCapi,
  /optionalTrackingConsent\s*!==\s*['"]accepted['"]/,
  'the Meta CAPI transport boundary must reject every state except exact accepted consent'
);

const sendEmailSource = stripImports(sendEmail)
  .replaceAll('export async function ', 'async function ');
const callerMetaEvents = [];
const sendEmailContext = {
  console,
  process: { env: { EMAIL_TO: 'office@example.com', EMAIL_FROM: 'office@example.com' } },
  async headers() {
    return {
      get(name) {
        if (name === 'referer') return 'https://ldndecks.com/contact?private=1';
        if (name === 'user-agent') return 'test-agent';
        if (name === 'x-forwarded-for') return '192.0.2.1';
        return null;
      },
    };
  },
  async sendMetaLeadEvent(lead) { callerMetaEvents.push(lead); return { success: true }; },
  verifyLeadConfirmationToken(eventId, token) {
    return token === `proof-${eventId}`
      ? { ok: true }
      : { ok: false, reason: 'signature_mismatch' };
  },
  createLeadConfirmationToken() { return 'signed-proof'; },
  async sendGhlLead() { return { ok: false, skipped: true }; },
  async sendN8nWebsiteLead() { return { ok: false, skipped: true }; },
  async sendLeadNotificationEmail() { return { ok: true }; },
  deriveServerLeadSource,
  sanitizeLeadUrl,
};
vm.runInNewContext(
  `${sendEmailSource}\nglobalThis.__sendEmail = { sendContactEmail, sendConfirmedMetaLeadEvent };`,
  sendEmailContext,
  { filename: 'src/server/sendEmail.js' }
);
for (const consentValue of ['declined', 'accepted']) {
  const result = await sendEmailContext.__sendEmail.sendContactEmail(new TestFormData({
    fields: {
      event_id: `event-${consentValue}`,
      email: `${consentValue}@example.com`,
      phone: '202-555-0147',
      optional_tracking_consent: consentValue,
      source_url: 'https://ldndecks.com/contact?private=1',
    },
  }));
  assert.equal(result.success, true, `${consentValue} consent must not block operational lead delivery`);
}
assert.equal(
  callerMetaEvents.length,
  0,
  'operational lead delivery must not invoke Meta before receipt storage succeeds'
);
const makeConfirmedMetaForm = (consentValue, eventId = `event-${consentValue}`) => new TestFormData({
  fields: {
    event_id: eventId,
    email: `${consentValue}@example.com`,
    phone: '202-555-0147',
    optional_tracking_consent: consentValue,
    source_url: 'https://ldndecks.com/contact?private=1',
  },
});
await sendEmailContext.__sendEmail.sendConfirmedMetaLeadEvent(
  makeConfirmedMetaForm('declined'),
  'proof-event-declined'
);
await sendEmailContext.__sendEmail.sendConfirmedMetaLeadEvent(
  makeConfirmedMetaForm('accepted'),
  'invalid-proof'
);
await sendEmailContext.__sendEmail.sendConfirmedMetaLeadEvent(
  makeConfirmedMetaForm('accepted'),
  ''
);
assert.equal(
  callerMetaEvents.length,
  0,
  'declined consent and missing or invalid proof must never invoke Meta CAPI'
);
await sendEmailContext.__sendEmail.sendConfirmedMetaLeadEvent(
  makeConfirmedMetaForm('accepted'),
  'proof-event-accepted'
);
assert.equal(callerMetaEvents.length, 1, 'only the accepted proof-verified lead may invoke Meta CAPI');
assert.equal(callerMetaEvents[0].optionalTrackingConsent, 'accepted');
assert.equal(callerMetaEvents[0].eventSourceUrl, 'https://ldndecks.com/contact');

const capiSource = stripImports(metaCapi)
  .replaceAll('export async function ', 'async function ');
const capiFetches = [];
const capiContext = {
  crypto,
  console,
  Date,
  process: { env: { META_PIXEL_ID: 'pixel-test', META_CAPI_ACCESS_TOKEN: 'token-test' } },
  async fetch(url, options) {
    capiFetches.push({ url, options });
    return { ok: true, async json() { return { events_received: 1 }; } };
  },
};
vm.runInNewContext(
  `${capiSource}\nglobalThis.__capi = { sendMetaLeadEvent };`,
  capiContext,
  { filename: 'src/server/metaCapi.js' }
);
await capiContext.__capi.sendMetaLeadEvent({
  email: 'declined@example.com',
  optionalTrackingConsent: 'declined',
});
assert.equal(capiFetches.length, 0, 'declined consent must not reach the Meta transport');
await capiContext.__capi.sendMetaLeadEvent({
  email: 'accepted@example.com',
  optionalTrackingConsent: 'accepted',
});
assert.equal(capiFetches.length, 1, 'accepted consent may reach the Meta transport');

console.log('Consent-safe tracking checks passed.');
