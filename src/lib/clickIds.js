// Shared attribution helpers for forms, analytics, and offline conversion imports.
export const CLICK_ID_KEYS = ['gclid', 'gbraid', 'wbraid', 'fbclid', 'msclkid'];
export const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

const ATTRIBUTION_KEYS = [...CLICK_ID_KEYS, ...UTM_KEYS];
const CONSENT_KEY = 'ldn_cookie_consent';
const ATTRIBUTION_TTL_SECONDS = 60 * 60 * 24 * 90;

export function hasAnalyticsConsent() {
  if (typeof window === 'undefined') return false;
  try {
    return window.localStorage?.getItem(CONSENT_KEY) === 'accepted';
  } catch {
    return false;
  }
}

function readCookie(name) {
  if (typeof document === 'undefined') return '';
  const safeName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = document.cookie.match(new RegExp(`(?:^|; )${safeName}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : '';
}

function readCurrentUrlValue(name) {
  if (typeof window === 'undefined') return '';
  try {
    return new URL(window.location.href).searchParams.get(name) || '';
  } catch {
    return '';
  }
}

function readPendingValue(name) {
  if (typeof window === 'undefined') return '';
  return window.__ldnPendingAttribution?.[name] || '';
}

function readAttributionValue(name) {
  if (!hasAnalyticsConsent()) return '';
  return readCookie(name) || readPendingValue(name) || readCurrentUrlValue(name);
}

function writeAttributionCookie(name, value) {
  if (typeof document === 'undefined' || !value) return;
  const secure = typeof window !== 'undefined' && window.location?.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${ATTRIBUTION_TTL_SECONDS}; path=/; SameSite=Lax${secure}`;
}

export function persistAttributionCookies() {
  if (!hasAnalyticsConsent() || typeof window === 'undefined') return;

  ATTRIBUTION_KEYS.forEach((key) => {
    const value = readPendingValue(key) || readCurrentUrlValue(key);
    if (value) writeAttributionCookie(key, value);
  });
}

export function clearAttributionCookies() {
  if (typeof document !== 'undefined') {
    ATTRIBUTION_KEYS.forEach((key) => {
      document.cookie = `${key}=; max-age=0; path=/; SameSite=Lax`;
    });
  }
  if (typeof window !== 'undefined') {
    window.__ldnPendingAttribution = {};
  }
}

export function getClickIds() {
  return CLICK_ID_KEYS.reduce((acc, key) => {
    const value = readAttributionValue(key);
    if (value) acc[key] = value;
    return acc;
  }, {});
}

export function getUtmParams() {
  return UTM_KEYS.reduce((acc, key) => {
    const value = readAttributionValue(key);
    if (value) acc[key] = value;
    return acc;
  }, {});
}

export function getFbp() {
  if (!hasAnalyticsConsent()) return '';
  return readCookie('_fbp');
}
