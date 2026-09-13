// Reads ad-click identifiers from first-party cookies set on landing.
// Cookies are written only after consent by the inline capture script in src/app/layout.js
// when a visitor arrives with ?gclid / ?gbraid / ?wbraid / ?fbclid / ?msclkid.
// SSR-safe: returns nulls when document is unavailable.

import { CLICK_ID_KEYS, UTM_KEYS, hasTrackingConsent } from './trackingConsent';
export { CLICK_ID_KEYS, UTM_KEYS };

function readCookie(name) {
  if (typeof document === 'undefined' || !hasTrackingConsent()) return null;
  try {
    const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : null;
  } catch {
    return null;
  }
}

export function getClickIds() {
  if (hasTrackingConsent()) {
    try { window.ldnCaptureClickIds?.(); } catch {}
  }
  return CLICK_ID_KEYS.reduce((acc, key) => {
    acc[key] = readCookie(key);
    return acc;
  }, {});
}

export function getUtmParams() {
  return UTM_KEYS.reduce((acc, key) => {
    acc[key] = readCookie(key);
    return acc;
  }, {});
}

// _fbp is Meta's browser ID cookie — set by the Meta Pixel client-side
// (if/when a Pixel is added) and consumed by Meta's Conversions API as a
// match-quality signal. Returning null when absent is correct: Meta's
// Graph API rejects payloads that include a null _fbp field, so the
// server-side caller must omit it entirely when this returns null.
export function getFbp() {
  return readCookie('_fbp');
}
