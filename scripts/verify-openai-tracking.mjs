import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

// Offline behavioral tests. No SDK is downloaded or evaluated; network is forbidden.
const source = fs.readFileSync('src/lib/openaiTracking.js', 'utf8').replace(/export /g, '');
const bannerSource = fs.readFileSync('src/components/ConsentBanner.jsx', 'utf8');
const confirmationSource = fs.readFileSync('src/components/ThankYouTracking.jsx', 'utf8');
const trackingSource = fs.readFileSync('src/lib/tracking.js', 'utf8');
const tests = [];
function test(name, run) { tests.push({ name, run }); }
const clone = (value) => JSON.parse(JSON.stringify(value));
const networkDenied = () => { throw Error('Network forbidden in OpenAI offline tests'); };

function fixture({ enabled = true, approved = true, pixelId = 'pixel_test_local', consent = true,
  openAIConsent = true, storageBlocked = false, hostname = 'ldndecks.com',
  pathname = '/get-estimate', search = '', storedLeads = new Map() } = {}) {
  const scripts = [], events = [], choices = new Map(), emitted = [];
  if (openAIConsent !== undefined) choices.set('ldn_openai_measurement_consent_v1', openAIConsent ? 'accepted' : 'declined');
  choices.set('ldn_cookie_consent', consent ? 'accepted' : 'declined');
  const storage = (map) => ({
    getItem(key) { if (storageBlocked) throw Error('storage blocked'); return map.get(key) ?? null; },
    setItem(key, value) { if (storageBlocked) throw Error('storage blocked'); map.set(key, value); },
    removeItem(key) { if (storageBlocked) throw Error('storage blocked'); map.delete(key); },
  });
  const window = {
    ldnConsentGranted: consent, location: { hostname, pathname, search },
    localStorage: storage(choices), sessionStorage: storage(storedLeads),
    fetch: networkDenied, navigator: { sendBeacon: networkDenied },
    dispatchEvent: (event) => emitted.push(event.type),
    setTimeout: (fn) => { fn(); return 1; }, clearTimeout() {},
  };
  const env = {
    NEXT_PUBLIC_OPENAI_PIXEL_ID: pixelId,
    NEXT_PUBLIC_OPENAI_MEASUREMENT_ENABLED: String(enabled),
    NEXT_PUBLIC_OPENAI_AAM_PRIVACY_APPROVED: String(approved),
  };
  const ctx = vm.createContext({
    window, URLSearchParams, process: { env }, fetch: networkDenied,
    XMLHttpRequest: networkDenied, WebSocket: networkDenied,
    document: { createElement: () => ({}), head: { appendChild: (script) => scripts.push(script) } },
  });
  vm.runInContext(source + '\nthis.api={initializeOpenAIMeasurement,trackOpenAIConfirmedLead,denyOpenAIMeasurement,hasOpenAIConsent};', ctx);
  function finishSDK() {
    assert.equal(scripts.length, 1);
    const queue = window.oaiq.q;
    assert.deepEqual(clone(queue[0]), ['consent', false]);
    assert.deepEqual(clone(queue[1]), ['init', { pixelId }]);
    events.push(...clone(queue));
    window.oaiq = (...args) => events.push(clone(args));
    scripts[0].onload();
  }
  return { window, ctx, api: ctx.api, scripts, events, choices, emitted, storedLeads, finishSDK,
    measures: () => events.filter((entry) => entry[0] === 'measure') };
}

test('disabled, unapproved and missing pixel settings make no script or event', async () => {
  for (const settings of [{ enabled: false }, { approved: false }, { pixelId: '' }]) {
    const f = fixture(settings);
    assert.equal(await f.api.initializeOpenAIMeasurement(), false);
    assert.equal(await f.api.trackOpenAIConfirmedLead({ eventId: 'lead-1' }), false);
    assert.equal(f.scripts.length, 0);
  }
});

test('generic prior acceptance does not authorize new AAM', async () => {
  const f = fixture();
  f.choices.delete('ldn_openai_measurement_consent_v1');
  assert.equal(f.api.hasOpenAIConsent(), false);
  assert.equal(await f.api.initializeOpenAIMeasurement(), false);
  assert.equal(f.scripts.length, 0);
});

test('declined site or OpenAI choice blocks loading', async () => {
  for (const settings of [{ consent: false }, { openAIConsent: false }]) {
    const f = fixture(settings);
    assert.equal(await f.api.trackOpenAIConfirmedLead({ eventId: 'lead-2' }), false);
    assert.equal(f.scripts.length, 0);
  }
});

test('production host, private paths and proof query guards', async () => {
  for (const settings of [
    { hostname: 'preview.vercel.app' }, { hostname: 'ldndecks.com.evil.test' },
    { pathname: '/admin' }, { pathname: '/admin/leads' }, { pathname: '/api/test' },
    { search: '?proof=sensitive' }, { search: '?eid=lead-1' },
  ]) {
    const f = fixture(settings);
    assert.equal(await f.api.initializeOpenAIMeasurement(), false);
    assert.equal(await f.api.trackOpenAIConfirmedLead({ eventId: 'lead-3' }), false);
    assert.equal(f.scripts.length, 0);
  }
});

test('initialization is shared and emits no page-view event', async () => {
  const f = fixture({ hostname: 'www.ldndecks.com' });
  const pending = [f.api.initializeOpenAIMeasurement(), f.api.initializeOpenAIMeasurement()];
  assert.equal(f.scripts.length, 1);
  assert.equal(f.scripts[0].src, 'https://bzrcdn.openai.com/sdk/oaiq.min.js');
  assert.equal(f.scripts[0].referrerPolicy, 'no-referrer');
  f.finishSDK();
  assert.deepEqual(await Promise.all(pending), [true, true]);
  assert.equal(f.events.filter((event) => event[0] === 'init').length, 1);
  assert.equal(f.measures().length, 0);
});

test('concurrent duplicate leads dispatch once with exact minimal payload', async () => {
  const f = fixture({ pathname: '/thank-you' });
  const pending = Array.from({ length: 3 }, () => f.api.trackOpenAIConfirmedLead({ eventId: 'verified-1' }));
  f.finishSDK();
  assert.equal((await Promise.all(pending)).filter(Boolean).length, 1);
  assert.deepEqual(f.measures(), [['measure', 'lead_created', { type: 'customer_action' }, { event_id: 'verified-1', opt_out: true }]]);
  assert.equal(await f.api.trackOpenAIConfirmedLead({ eventId: 'verified-1' }), false);
});

test('session dedup survives a new module/page instance', async () => {
  const storedLeads = new Map([['ldn_openai_lead_pixel_test_local_verified-2', '1']]);
  const f = fixture({ storedLeads });
  const pending = f.api.trackOpenAIConfirmedLead({ eventId: 'verified-2' });
  f.finishSDK();
  assert.equal(await pending, false);
  assert.equal(f.measures().length, 0);
});

test('explicit fresh consent works when browser storage throws', async () => {
  const f = fixture({ storageBlocked: true });
  assert.equal(await f.api.initializeOpenAIMeasurement(), false);
  f.window.ldnOpenAIConsentGranted = true;
  const pending = f.api.trackOpenAIConfirmedLead({ eventId: 'verified-3' });
  f.finishSDK();
  assert.equal(await pending, true);
  assert.equal(await f.api.trackOpenAIConfirmedLead({ eventId: 'verified-3' }), false);
  assert.equal(f.measures().length, 1);
});

test('revocation during deferred SDK load suppresses pending conversion', async () => {
  const f = fixture();
  const pending = f.api.trackOpenAIConfirmedLead({ eventId: 'verified-4' });
  f.window.ldnConsentGranted = false;
  f.window.ldnOpenAIConsentGranted = false;
  f.api.denyOpenAIMeasurement();
  f.finishSDK();
  assert.equal(await pending, false);
  assert.equal(f.events.some((event) => event[0] === 'consent' && event[1] === true), false);
  assert.equal(f.measures().length, 0);
  f.window.ldnConsentGranted = true;
  f.window.ldnOpenAIConsentGranted = true;
  assert.equal(await f.api.initializeOpenAIMeasurement(), true);
  assert.equal(f.measures().length, 0, 'acceptance must not replay the dropped lead');
});

test('revocation after SDK ready blocks later leads and sends SDK denial', async () => {
  const f = fixture();
  const pending = f.api.initializeOpenAIMeasurement(); f.finishSDK(); await pending;
  f.window.ldnConsentGranted = false;
  f.api.denyOpenAIMeasurement();
  assert.deepEqual(f.events.at(-1), ['consent', false]);
  assert.equal(await f.api.trackOpenAIConfirmedLead({ eventId: 'verified-5' }), false);
  assert.equal(f.measures().length, 0);
});

test('foreign oaiq is not taken over or reinitialized', async () => {
  const f = fixture(); const foreignCalls = [];
  f.window.oaiq = (...args) => foreignCalls.push(args);
  assert.equal(await f.api.initializeOpenAIMeasurement(), false);
  f.api.denyOpenAIMeasurement();
  assert.equal(f.scripts.length, 0); assert.equal(foreignCalls.length, 0);
});

test('SDK failure stays inert without automatic retry', async () => {
  const f = fixture();
  const pending = f.api.trackOpenAIConfirmedLead({ eventId: 'verified-6' });
  f.scripts[0].onerror();
  assert.equal(await pending, false);
  assert.equal(await f.api.trackOpenAIConfirmedLead({ eventId: 'verified-6' }), false);
  assert.equal(f.scripts.length, 1); assert.equal(f.measures().length, 0);
});

test('invalid event identifiers do not load SDK', async () => {
  const f = fixture();
  for (const eventId of [undefined, '', 'customer@example.test', 'a'.repeat(201), 123]) {
    assert.equal(await f.api.trackOpenAIConfirmedLead({ eventId }), false);
  }
  assert.equal(f.scripts.length, 0);
});

function bannerFixture({ choice = 'accepted', openAIChoice, blockedStorage = false } = {}) {
  const f = fixture({ storageBlocked: blockedStorage });
  f.choices.set('ldn_cookie_consent', choice);
  if (openAIChoice) f.choices.set('ldn_openai_measurement_consent_v1', openAIChoice);
  else f.choices.delete('ldn_openai_measurement_consent_v1');
  const effects = []; let visible;
  const code = bannerSource.slice(bannerSource.indexOf('const CONSENT_KEY'), bannerSource.indexOf('  if (!visible) return null;'))
    .replace('export default function', 'function') + '\nthis.choose=updateConsent; }\nConsentBanner();';
  Object.assign(f.ctx, {
    localStorage: f.window.localStorage, Event: class { constructor(type) { this.type = type; } },
    useEffect: (effect) => effects.push(effect), useState: () => [false, (value) => { visible = value; }],
    persistAttributionCookies() {}, clearAttributionCookies() {},
  });
  vm.runInContext(code, f.ctx);
  for (const effect of effects) effect();
  return { ...f, visible: () => visible };
}

test('banner requests a new OpenAI choice only from old accepted users', () => {
  assert.equal(bannerFixture().visible(), true);
  assert.equal(bannerFixture({ openAIChoice: 'accepted' }).visible(), false);
  assert.equal(bannerFixture({ choice: 'declined' }).visible(), false);
});

test('banner explicit choices update both consent signals despite storage failure', () => {
  const f = bannerFixture({ blockedStorage: true });
  f.ctx.choose('accepted');
  assert.equal(f.window.ldnConsentGranted, true); assert.equal(f.api.hasOpenAIConsent(), true);
  assert.equal(f.emitted.at(-1), 'ldn:consent-accepted');
  f.ctx.choose('declined');
  assert.equal(f.window.ldnConsentGranted, false); assert.equal(f.api.hasOpenAIConsent(), false);
  assert.equal(f.emitted.at(-1), 'ldn:consent-declined');
});

test('only server-verified thank-you path reaches confirmed conversion dispatcher', async () => {
  // Execute the actual confirmation effect with fake server replies, not a URL match.
  const effectCode = confirmationSource.slice(confirmationSource.indexOf('export default function'), confirmationSource.indexOf("  if (status === 'verified')"))
    .replace('export default function', 'function') + '}\nThankYouTracking();';
  for (const result of ['missing', false, true, 'reject']) {
    const effects = [], confirmed = [];
    const ctx = vm.createContext({
      useState: () => ['neutral', () => {}], useRef: () => ({ current: undefined }),
      useEffect: (effect) => effects.push(effect), queueMicrotask,
      consumeLeadConfirmationReceipt: () => result === 'missing' ? null : ({ eventId: 'verified-only', proof: 'local-proof' }),
      verifyLeadConfirmation: async () => { if (result === 'reject') throw Error('local failure'); return result; },
      trackLeadConfirmed: (value) => confirmed.push(value), fetch: networkDenied,
    });
    vm.runInContext(effectCode, ctx);
    effects.forEach((effect) => effect());
    await new Promise((resolve) => setImmediate(resolve));
    assert.equal(confirmed.length, result === true ? 1 : 0);
  }
  const call = 'void trackOpenAIConfirmedLead({ eventId }).catch(() => {});';
  assert.equal(trackingSource.split(call).length - 1, 1);
  assert(trackingSource.indexOf(call) > trackingSource.indexOf('export function trackLeadConfirmed'));
});

let passed = 0;
for (const { name, run } of tests) {
  await run(); passed += 1; console.log(`PASS ${passed}: ${name}`);
}
console.log(`PASS: ${passed} offline OpenAI measurement cases. No network, SDK download, real leads, or platform events.`);
