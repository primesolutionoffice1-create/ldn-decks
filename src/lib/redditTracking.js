// Reddit receives no form fields or customer match keys from this integration.
export const REDDIT_PIXEL_ID = 'a2_iwh4hjnt917a';

function allowed() {
  if (typeof window === 'undefined' || window.ldnConsentGranted !== true) return false;
  if (/^\/(admin|api)(\/|$)/.test(window.location.pathname)) return false;
  const params = new URLSearchParams(window.location.search);
  // Never load or dispatch while a confirmation credential is in the URL.
  return !params.has('proof') && !params.has('eid');
}

function state() {
  return window.__ldnReddit || (window.__ldnReddit = {
    loading: null, ready: false, initialized: false, page: null, leads: new Set(),
  });
}

function load() {
  if (!allowed()) return Promise.resolve(false);
  const s = state();
  if (s.ready) return Promise.resolve(true);
  if (s.loading) return s.loading;
  s.loading = new Promise((resolve) => {
    // Do not take over another integration or risk initializing this pixel twice.
    if (window.rdt) { resolve(false); return; }
    const queue = function (...args) {
      if (queue.sendEvent) queue.sendEvent(...args);
      else queue.callQueue.push(args);
    };
    queue.callQueue = [];
    window.rdt = queue;
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.redditstatic.com/ads/pixel.js?pixel_id=${REDDIT_PIXEL_ID}`;
    script.onload = () => {
      s.ready = true;
      resolve(true);
    };
    script.onerror = () => { resolve(false); };
    document.head.appendChild(script);
  });
  return s.loading;
}

function initialize() {
  const s = state();
  if (!s.initialized) {
    window.rdt('init', REDDIT_PIXEL_ID);
    s.initialized = true;
  }
}

export async function trackRedditPageVisit() {
  if (!allowed() || !(await load()) || !allowed()) return false;
  initialize();
  const s = state();
  const page = window.location.pathname;
  if (s.page === page) return false;
  window.rdt('track', 'PageVisit');
  s.page = page;
  return true;
}

// Called exclusively from the existing server-verified lead_confirmed path.
export async function trackRedditConfirmedLead({ eventId } = {}) {
  if (!eventId || !allowed()) return false;
  if (!(await load()) || !allowed()) return false;
  initialize();
  const s = state();
  const key = `ldn_reddit_lead_${eventId}`;
  if (s.leads.has(eventId)) return false;
  try { if (window.sessionStorage.getItem(key)) return false; } catch {}
  window.rdt('track', 'Lead', { conversionId: eventId });
  s.leads.add(eventId);
  try { window.sessionStorage.setItem(key, '1'); } catch {}
  return true;
}
