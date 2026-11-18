// ChatGPT Ads website measurement. Our calls pass no form fields/match keys;
// the vendor SDK can automatically collect/hash supported fields (AAM).
// Build-time flags deliberately keep unfinished/unreviewed setup inert.
const PIXEL_ID = process.env.NEXT_PUBLIC_OPENAI_PIXEL_ID || '';
const ENABLED = process.env.NEXT_PUBLIC_OPENAI_MEASUREMENT_ENABLED === 'true';
const PRIVACY_REVIEWED = process.env.NEXT_PUBLIC_OPENAI_AAM_PRIVACY_APPROVED === 'true';
const SDK_URL = 'https://bzrcdn.openai.com/sdk/oaiq.min.js';
export const OPENAI_CONSENT_KEY = 'ldn_openai_measurement_consent_v1';

export function hasOpenAIConsent() {
  if (typeof window === 'undefined') return false;
  // An explicit choice still applies when localStorage is unavailable.
  if (typeof window.ldnOpenAIConsentGranted === 'boolean') return window.ldnOpenAIConsentGranted;
  try { return window.localStorage.getItem(OPENAI_CONSENT_KEY) === 'accepted'; } catch { return false; }
}

export function isOpenAIMeasurementAllowed() {
  if (!ENABLED || !PRIVACY_REVIEWED || !/^[A-Za-z0-9_-]{6,200}$/.test(PIXEL_ID)) return false;
  if (typeof window === 'undefined' || window.ldnConsentGranted !== true || !hasOpenAIConsent()) return false;
  if (!['ldndecks.com', 'www.ldndecks.com'].includes(window.location.hostname)) return false;
  if (/^\/(admin|api)(\/|$)/.test(window.location.pathname)) return false;
  const params = new URLSearchParams(window.location.search);
  return !params.has('proof') && !params.has('eid');
}

function state() {
  return window.__ldnOpenAI || (window.__ldnOpenAI = {
    loading: null, ready: false, owner: null, leads: new Set(),
  });
}

// Fail closed if another tag already owns oaiq. Do not initialize a duplicate.
function load() {
  if (!isOpenAIMeasurementAllowed()) return Promise.resolve(false);
  const s = state();
  if (s.ready) return Promise.resolve(s.owner === window.oaiq && typeof window.oaiq === 'function');
  if (s.loading) return s.loading;
  if (window.oaiq) return Promise.resolve(false);
  s.loading = new Promise((resolve) => {
    const queue = function (...args) { queue.q.push(args); };
    queue.q = [];
    window.oaiq = queue;
    s.owner = queue;
    // The documented SDK defaults to consent=true. Override before init.
    queue('consent', false);
    queue('init', { pixelId: PIXEL_ID });
    const script = document.createElement('script');
    script.async = true;
    script.src = SDK_URL;
    script.referrerPolicy = 'no-referrer';
    script.onload = () => {
      s.ready = true;
      s.owner = window.oaiq;
      if (typeof window.oaiq !== 'function') { resolve(false); return; }
      window.oaiq('consent', isOpenAIMeasurementAllowed());
      resolve(isOpenAIMeasurementAllowed());
    };
    // No automatic retry: a blocked SDK must not affect form completion.
    script.onerror = () => { resolve(false); };
    document.head.appendChild(script);
  });
  return s.loading;
}

export function denyOpenAIMeasurement() {
  if (typeof window === 'undefined') return;
  const s = window.__ldnOpenAI;
  if (s?.owner === window.oaiq && typeof window.oaiq === 'function') {
    window.oaiq('consent', false);
  }
}

// Captures the SDK attribution cookie after consent; does not emit page views.
export async function initializeOpenAIMeasurement() {
  if (!isOpenAIMeasurementAllowed()) { denyOpenAIMeasurement(); return false; }
  if (!(await load()) || !isOpenAIMeasurementAllowed()) { denyOpenAIMeasurement(); return false; }
  if (state().owner !== window.oaiq || typeof window.oaiq !== 'function') return false;
  window.oaiq('consent', true);
  return true;
}

// Call only from trackLeadConfirmed after server receipt verification.
// Unknown/declined consent drops the event; it is not replayed later.
export async function trackOpenAIConfirmedLead({ eventId } = {}) {
  if (typeof eventId !== 'string' || !/^[A-Za-z0-9_-]{1,200}$/.test(eventId)) return false;
  if (!isOpenAIMeasurementAllowed() || !(await initializeOpenAIMeasurement()) || !isOpenAIMeasurementAllowed()) return false;
  const s = state();
  const key = `ldn_openai_lead_${PIXEL_ID}_${eventId}`;
  if (s.leads.has(eventId)) return false;
  try { if (window.sessionStorage.getItem(key)) return false; } catch {}
  // Claim before dispatch. An SDK queue call is not a delivery receipt.
  s.leads.add(eventId);
  try { window.sessionStorage.setItem(key, '1'); } catch {}
  window.oaiq('measure', 'lead_created', { type: 'customer_action' }, {
    event_id: eventId,
    opt_out: true,
  });
  return true;
}
