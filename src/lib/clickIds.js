// Reads ad-click identifiers from first-party cookies set on landing.
// Cookies are written by the inline capture script in src/app/layout.js
// when a visitor arrives with ?gclid / ?gbraid / ?wbraid / ?fbclid / ?msclkid.
// SSR-safe: returns nulls when document is unavailable.

export const CLICK_ID_KEYS = ['gclid', 'gbraid', 'wbraid', 'fbclid', 'msclkid'];

function readCookie(name) {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : null;
}

export function getClickIds() {
  return CLICK_ID_KEYS.reduce((acc, key) => {
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
