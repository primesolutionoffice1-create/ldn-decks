import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const read = (path) => fs.readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const source = (path) => read(path)
  .replace(/^\s*import[\s\S]*?;\n/gm, '')
  .replace(/^export \{[^}]*\};?$/gm, '')
  .replace(/\bexport (?=(?:async )?function|const)/g, '');

function storage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {
    get length() { return values.size; },
    key(index) { return [...values.keys()][index] ?? null; },
    getItem(key) { return values.get(key) ?? null; },
    setItem(key, value) { values.set(key, String(value)); },
    removeItem(key) { values.delete(key); },
  };
}

function makeBrowser({ choice, blockedLocal = false, blockedSession = false, badCookies = false } = {}) {
  const listeners = new Map();
  const jar = new Map();
  const writes = [];
  const timers = [];
  const document = { referrer: 'https://example.com/path?private=hidden' };
  Object.defineProperty(document, 'cookie', {
    get() { if (badCookies) throw new Error('blocked cookies'); return [...jar].map(([k, v]) => `${k}=${v}`).join('; '); },
    set(value) {
      if (badCookies) throw new Error('blocked cookies');
      writes.push(value);
      const [key, ...rest] = value.split(';')[0].split('=');
      if (/max-age=0(?:;|$)/i.test(value)) jar.delete(key);
      else jar.set(key, rest.join('='));
    },
  });
  const context = vm.createContext({
    URL, Event, console, document, Date,
    process: { env: {} },
    location: new URL('https://ldndecks.com/deck-project-estimate?gclid=synthetic-click&utm_source=google'),
    dataLayer: [],
    addEventListener(type, fn) { if (!listeners.has(type)) listeners.set(type, []); listeners.get(type).push(fn); },
    dispatchEvent(event) { for (const fn of listeners.get(event.type) || []) fn(event); },
    setTimeout(fn) { timers.push(fn); },
    recordDedupHit() {},
    BUSINESS: { telephone: '+12025550147' },
  });
  context.window = context;
  for (const [name, blocked, initial] of [
    ['localStorage', blockedLocal, choice ? { ldn_cookie_consent: choice } : {}],
    ['sessionStorage', blockedSession, {}],
  ]) {
    const store = storage(initial);
    Object.defineProperty(context, name, { get() { if (blocked) throw new Error(`blocked ${name}`); return store; } });
  }
  vm.runInContext(source('src/lib/trackingConsent.js'), context);
  vm.runInContext(source('src/lib/clickIds.js'), context);
  const layout = read('src/app/layout.js');
  for (const id of ['gtm-consent-defaults', 'click-id-capture']) {
    const start = layout.indexOf(`<Script id="${id}"`);
    assert.ok(start >= 0, `${id} present`);
    const scriptStart = layout.indexOf('{`', start) + 2;
    const scriptEnd = layout.indexOf('`}', scriptStart);
    vm.runInContext(layout.slice(scriptStart, scriptEnd), context);
  }
  return { context, jar, writes, timers };
}

function loadTracking(context) {
  vm.runInContext(source('src/lib/tracking.js'), context);
}

const checks = [];
async function check(name, fn) { await fn(); checks.push(name); }

await check('unknown/declined/invalid consent never captures ad identifiers', () => {
  for (const choice of [undefined, 'declined', 'invalid']) {
    const { context: c, writes } = makeBrowser({ choice });
    assert.equal(writes.length, 0);
    assert.equal(c.hasTrackingConsent(), false);
    assert.ok(Object.values(c.getClickIds()).every((v) => v === null));
    assert.equal(c.dataLayer[0][2].ad_storage, 'denied');
  }
});

await check('grant captures identifiers; SPA reads persist; expiry is not renewed on each read', () => {
  const { context: c, writes, jar } = makeBrowser();
  c.applyTrackingConsent('accepted');
  assert.equal(jar.get('gclid'), 'synthetic-click');
  const firstWrites = writes.length;
  c.getClickIds();
  assert.equal(writes.length, firstWrites);
  c.location = new URL('https://ldndecks.com/contact');
  assert.equal(c.getClickIds().gclid, 'synthetic-click');
  c.location = new URL('https://ldndecks.com/contact?gclid=second-synthetic-click');
  assert.equal(c.getClickIds().gclid, 'second-synthetic-click');
  assert.ok(writes.some((value) => value.includes('; Secure')));
});

await check('blocked local storage still updates all four consent signals and dispatches acceptance', () => {
  const { context: c, jar } = makeBrowser({ blockedLocal: true });
  c.applyTrackingConsent('accepted');
  assert.equal(c.hasTrackingConsent(), true);
  const update = c.dataLayer.find((entry) => entry[0] === 'consent' && entry[1] === 'update');
  assert.deepEqual(Object.values(update[2]), ['granted', 'granted', 'granted', 'granted']);
  assert.equal(jar.get('gclid'), 'synthetic-click');
  c.applyTrackingConsent('declined');
  assert.equal(c.hasTrackingConsent(), false);
  assert.equal(jar.size, 0);
});

await check('blocked and malformed cookies cannot break lead attribution reads', () => {
  const blocked = makeBrowser({ choice: 'accepted', badCookies: true }).context;
  assert.doesNotThrow(() => blocked.getClickIds());
  const { context: c, jar } = makeBrowser({ choice: 'accepted' });
  c.location = new URL('https://ldndecks.com/contact');
  jar.set('gclid', '%E0%A4%A');
  assert.equal(c.getClickIds().gclid, null);
});

await check('declined enrichment stays out of receipts/dataLayer; minimal conversion survives and deduplicates', () => {
  const { context: c } = makeBrowser({ choice: 'declined', blockedSession: true });
  loadTracking(c);
  let metaCalls = 0;
  c.fbq = () => { metaCalls += 1; };
  c.pintrk = () => { metaCalls += 1; };
  c.trackFormSubmit({ eventId: 'synthetic-lead', formLocation: 'paid_social_deck_project_estimate', email: 'person@example.test', phone: '2025550147', clickIds: { gclid: 'should-not-leak' } });
  c.markLeadConfirmationPending('synthetic-lead');
  c.trackLeadConfirmed({ eventId: 'synthetic-lead' });
  c.trackLeadConfirmed({ eventId: 'synthetic-lead' });
  const serialized = JSON.stringify(c.dataLayer);
  assert.ok(!serialized.includes('person@example.test') && !serialized.includes('should-not-leak'));
  assert.equal(c.dataLayer.filter((entry) => entry.event === 'lead_confirmed').length, 1);
  assert.equal(c.dataLayer.filter((entry) => entry[0] === 'event' && entry[1] === 'conversion').length, 1);
  assert.equal(metaCalls, 0);
});

await check('revocation clears stored PII and blocks pending platform retries', () => {
  const { context: c, timers } = makeBrowser({ choice: 'accepted' });
  loadTracking(c);
  c.trackFormSubmit({ eventId: 'synthetic-lead', email: 'person@example.test', formLocation: 'paid_social_deck_project_estimate' });
  assert.ok(c.sessionStorage.getItem('lead_attribution_synthetic-lead').includes('person@example.test'));
  c.markLeadConfirmationPending('synthetic-lead');
  c.trackMetaPageView();
  c.applyTrackingConsent('declined');
  assert.ok(!c.sessionStorage.getItem('lead_attribution_synthetic-lead').includes('person@example.test'));
  assert.ok(!JSON.stringify([...c.__ldnLeadAttribution.values()]).includes('person@example.test'));
  let calls = 0;
  c.fbq = () => { calls += 1; };
  timers.forEach((fn) => fn());
  c.trackLeadConfirmed({ eventId: 'synthetic-lead' });
  assert.equal(calls, 0);
  const confirmed = c.dataLayer.find((entry) => entry.event === 'lead_confirmed');
  assert.equal(confirmed.email, undefined);
});

await check('success/confirmation use the same transaction ID without query/proof disclosure', () => {
  const { context: c } = makeBrowser({ choice: 'accepted' });
  loadTracking(c);
  c.location = new URL('https://ldndecks.com/thank-you?eid=synthetic-lead&proof=secret-proof');
  c.trackGoogleAdsLeadOnConfirmedSubmit({ eventId: 'synthetic-lead' });
  c.trackGoogleAdsLeadOnConfirmedSubmit({ eventId: 'synthetic-lead' });
  c.trackFormSubmit({ eventId: 'synthetic-lead', formLocation: 'contact_page' });
  c.markLeadConfirmationPending('synthetic-lead');
  c.trackLeadConfirmed({ eventId: 'synthetic-lead' });
  c.trackLeadConfirmed({ eventId: 'synthetic-lead' });
  const conversions = c.dataLayer.filter((entry) => entry[0] === 'event' && entry[1] === 'conversion');
  assert.equal(conversions.length, 1);
  assert.equal(conversions[0][2].transaction_id, 'synthetic-lead');
  assert.ok(!JSON.stringify(c.dataLayer).includes('secret-proof'));
});

class TestFormData {
  constructor(form) { this.values = new Map(Object.entries(form?.fields || {})); }
  get(key) { return this.values.get(key) ?? null; }
  set(key, value) { this.values.set(key, String(value)); }
  append(key, value) { this.set(key, value); }
  delete(key) { this.values.delete(key); }
}

await check('double submit is single-flight; failed request retries keep event ID; denied form still succeeds', async () => {
  const { context: c } = makeBrowser({ choice: 'declined' });
  loadTracking(c);
  c.FormData = TestFormData;
  let idCounter = 0;
  c.crypto = { randomUUID: () => `synthetic-lead-${++idCounter}` };
  c.useRef = (value) => ({ current: value });
  const navigation = [];
  c.useRouter = () => ({ push: (url) => navigation.push(url) });
  const sent = [];
  let release;
  c.sendContactEmail = (form) => { sent.push(form); return new Promise((resolve) => { release = resolve; }); };
  vm.runInContext(source('src/hooks/useLeadSubmit.js'), c);
  const submit = c.useLeadSubmit();
  const form = { dataset: { formLocation: 'contact_page' }, fields: { name: 'Synthetic Test', phone: '2025550147', email: 'person@example.test', gclid: 'stale-hidden-id', _fbp: 'stale-cookie' } };
  const first = submit(form);
  const duplicate = submit(form);
  assert.equal(first, duplicate);
  assert.equal(sent.length, 1);
  release({ success: false });
  assert.equal((await first).success, false);
  const retry = submit(form);
  assert.equal(sent[0].get('event_id'), sent[1].get('event_id'));
  assert.equal(sent[1].get('gclid'), null);
  assert.equal(sent[1].get('_fbp'), null);
  assert.equal(sent[1].get('ad_consent'), 'denied');
  assert.equal(sent[1].get('email'), 'person@example.test');
  release({ success: true, confirmationToken: 'synthetic-proof' });
  assert.equal((await retry).success, true);
  assert.equal(navigation.length, 1);
  const next = submit({ ...form, fields: { ...form.fields, service: 'New inquiry after success' } });
  assert.notEqual(sent[2].get('event_id'), sent[1].get('event_id'));
  release({ success: true });
  assert.equal((await next).success, true);
});

await check('denied-consent reload preserves minimal deferred-conversion routing', () => {
  const { context: first } = makeBrowser({ choice: 'declined' });
  loadTracking(first);
  first.trackFormSubmit({ eventId: 'synthetic-lead', formLocation: 'paid_social_deck_project_estimate', email: 'person@example.test' });
  first.markLeadConfirmationPending('synthetic-lead');
  const { context: reload } = makeBrowser({ choice: 'declined' });
  loadTracking(reload);
  reload.sessionStorage.setItem('lead_attribution_synthetic-lead', first.sessionStorage.getItem('lead_attribution_synthetic-lead'));
  reload.sessionStorage.setItem('lead_pending_synthetic-lead', '1');
  reload.clearLeadAttribution();
  reload.trackLeadConfirmed({ eventId: 'synthetic-lead' });
  reload.trackLeadConfirmed({ eventId: 'synthetic-lead' });
  const conversions = reload.dataLayer.filter((entry) => entry[0] === 'event' && entry[1] === 'conversion');
  assert.equal(conversions.length, 1);
  assert.ok(!JSON.stringify(reload.dataLayer).includes('person@example.test'));
});

await check('optional tracking errors cannot turn a delivered lead into a failed submission', async () => {
  const { context: c } = makeBrowser({ choice: 'accepted' });
  c.FormData = TestFormData;
  c.crypto = { randomUUID: () => 'synthetic-lead' };
  c.useRef = (value) => ({ current: value });
  const navigation = [];
  c.useRouter = () => ({ push: (url) => navigation.push(url) });
  c.sendContactEmail = async () => ({ success: true, confirmationToken: 'synthetic-proof' });
  c.trackFormSubmit = () => { throw new Error('blocked tag'); };
  c.markLeadConfirmationPending = () => { throw new Error('blocked storage'); };
  vm.runInContext(source('src/hooks/useLeadSubmit.js'), c);
  const result = await c.useLeadSubmit()({ dataset: {}, fields: { name: 'Synthetic Test', phone: '2025550147' } });
  assert.equal(result.success, true);
  assert.equal(navigation.length, 1);
});

await check('server strips advertising data before lead delivery; Meta refuses absent consent even with credentials', async () => {
  const { context: c } = makeBrowser();
  const destinations = [];
  const meta = [];
  let headerReads = 0;
  c.headers = () => { headerReads += 1; throw new Error('Request headers must not be read without advertising consent'); };
  c.sendLeadNotificationEmail = async () => ({ ok: true });
  c.sendGhlLead = async (form) => { destinations.push(form); return { ok: true }; };
  c.sendN8nWebsiteLead = async (form, headers) => { destinations.push(form); assert.equal(headers.ipAddress, null); return { ok: true }; };
  c.sendMetaLeadEvent = async (lead) => { meta.push(lead); return { skipped: true }; };
  c.createLeadConfirmationToken = () => 'synthetic-proof';
  vm.runInContext(source('src/server/sendEmail.js'), c);
  const form = new TestFormData({ fields: { name: 'Synthetic Test', email: 'person@example.test', phone: '2025550147', event_id: 'synthetic-lead', gclid: 'stale-click', source_url: 'https://ldndecks.com/contact?gclid=stale-click' } });
  assert.equal((await c.sendContactEmail(form)).success, true);
  assert.equal(destinations.length, 2);
  assert.equal(headerReads, 0);
  assert.equal(form.get('email'), 'person@example.test');
  assert.equal(form.get('gclid'), null);
  assert.equal(form.get('source_url'), 'https://ldndecks.com/contact');
  assert.equal(meta[0].advertisingConsent, 'denied');
  vm.runInContext(source('src/server/metaCapi.js'), c);
  c.process.env = { META_PIXEL_ID: 'synthetic', META_CAPI_ACCESS_TOKEN: 'synthetic' };
  c.fetch = () => { throw new Error('No external requests allowed'); };
  assert.equal((await c.sendMetaLeadEvent({ email: 'person@example.test' })).skipped, true);
  c.process.env = {};
  assert.equal((await c.sendMetaLeadEvent({ advertisingConsent: 'granted' })).skipped, true);
});

await check('SSR is safe and no unconditional noscript advertising beacons remain', () => {
  const c = vm.createContext({ URL });
  vm.runInContext(source('src/lib/trackingConsent.js'), c);
  vm.runInContext(source('src/lib/clickIds.js'), c);
  assert.equal(c.hasTrackingConsent(), false);
  assert.ok(Object.values(c.getClickIds()).every((value) => value === null));
  assert.ok(!read('src/app/layout.js').includes('noscript=1'));
  assert.ok(!read('src/app/layout.js').includes('googletagmanager.com/ns.html'));
});

console.log(`Consent/attribution checks passed (${checks.length}):\n${checks.map((name) => `- ${name}`).join('\n')}`);
