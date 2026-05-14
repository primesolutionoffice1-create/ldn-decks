// Attribution debug surface — exposes the attribution-layer state on
// `window.__ldnAttr` in development builds only. Helps GTM Preview Mode
// operators inspect what the page currently knows about click IDs,
// event_id, and the most recent tracking events without instrumenting
// the page manually.
//
// Production builds: this module no-ops entirely. The window key is
// never created, the dataLayer is not monkey-patched, no listeners
// attached. No bundle-size or runtime cost on prod.
//
// Usage in DevTools console (dev/preview only):
//   window.__ldnAttr            -> { clickIds, history, dedupHits }
//   window.__ldnAttr.snapshot() -> pretty-printed current state
//   window.__ldnAttr.clear()    -> reset history (NOT dedup flags)

import { getClickIds } from '@/lib/clickIds';

const TRACKED_EVENTS = new Set([
  'form_submit',
  'lead_confirmed',
  'phone_click',
]);

function isDev() {
  // Mirrors Next.js convention: NODE_ENV is 'development' for `next dev`
  // and 'production' for `next build` / `next start`. The bundler also
  // dead-code-eliminates the body when this check is false.
  return typeof process !== 'undefined' && process.env.NODE_ENV !== 'production';
}

export function installAttributionDebug() {
  if (typeof window === 'undefined') return;
  if (!isDev()) return;
  if (window.__ldnAttr) return; // idempotent — survives HMR

  const state = {
    installedAt: new Date().toISOString(),
    clickIds: getClickIds(),
    history: [], // ring buffer of tracked events
    dedupHits: 0, // count of lead_fired_<id> sessionStorage cache hits
  };

  window.dataLayer = window.dataLayer || [];

  // Wrap dataLayer.push so we can mirror tracked events into history.
  const originalPush = window.dataLayer.push.bind(window.dataLayer);
  window.dataLayer.push = function patchedPush(payload) {
    if (payload && typeof payload === 'object' && TRACKED_EVENTS.has(payload.event)) {
      state.history.push({
        ts: new Date().toISOString(),
        event: payload.event,
        event_id: payload.event_id || null,
        form_type: payload.form_type || null,
        page: payload.page || (typeof location !== 'undefined' ? location.pathname : null),
      });
      // Keep last 50 events
      if (state.history.length > 50) state.history.shift();
    }
    return originalPush(payload);
  };

  window.__ldnAttr = {
    ...state,
    get clickIdsLive() {
      // Re-read cookies on demand — useful if user navigates and click
      // IDs change (e.g., second paid visit with new gclid).
      return getClickIds();
    },
    snapshot() {
      const snap = {
        clickIds: getClickIds(),
        history: state.history.slice(),
        dedupHits: state.dedupHits,
        dataLayerLength: window.dataLayer ? window.dataLayer.length : 0,
      };
      console.table(snap.history);
      return snap;
    },
    clear() {
      state.history.length = 0;
      state.dedupHits = 0;
    },
    _state: state, // escape hatch for tests
  };

  console.info(
    '[ldnAttr] attribution debug installed. Try window.__ldnAttr.snapshot()'
  );
}

// Called by trackLeadConfirmed when sessionStorage anti-replay fires.
// Lets the operator confirm dedup is working without instrumenting GTM.
export function recordDedupHit() {
  if (typeof window === 'undefined') return;
  if (window.__ldnAttr && window.__ldnAttr._state) {
    window.__ldnAttr._state.dedupHits += 1;
  }
}
