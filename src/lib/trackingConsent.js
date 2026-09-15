export const CONSENT_KEY = 'ldn_cookie_consent';
export const CONSENT_VERSION = '2026-09-13';
export const CLICK_ID_KEYS = ['gclid', 'gbraid', 'wbraid', 'fbclid', 'msclkid'];
export const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
export const AD_ATTRIBUTION_FIELDS = [...CLICK_ID_KEYS, ...UTM_KEYS, '_fbp', '_fbc'];
export const LEAD_PERSONAL_FIELDS = ['email', 'phone', 'first_name', 'last_name', 'street', 'zip', 'city', 'state', 'country'];

export function getConsentChoice() {
  if (typeof window === 'undefined') return null;
  const valid = (value) => value === 'accepted' || value === 'declined' ? value : null;
  if (Object.prototype.hasOwnProperty.call(window, 'ldnConsentChoice')) {
    return valid(window.ldnConsentChoice);
  }
  try {
    return valid(window.localStorage.getItem(CONSENT_KEY));
  } catch {
    return null;
  }
}

export function hasTrackingConsent() {
  return getConsentChoice() === 'accepted';
}

// URLs can contain ad identifiers, contact data or a signed thank-you proof.
export function trackingPageUrl(value) {
  try {
    const url = new URL(value);
    if (!['http:', 'https:'].includes(url.protocol)) return '';
    return url.origin + url.pathname;
  } catch {
    return '';
  }
}

export function clearLeadAttribution() {
  if (typeof window === 'undefined') return;
  window.__ldnLeadAttribution?.forEach((receipt) => {
    receipt.payload = {
      form_type: receipt.payload?.form_type,
      form_location: receipt.payload?.form_location,
    };
  });
  try {
    const storage = window.sessionStorage;
    for (let index = storage.length - 1; index >= 0; index -= 1) {
      const key = storage.key(index);
      if (!key?.startsWith('lead_attribution_')) continue;
      try {
        const receipt = JSON.parse(storage.getItem(key));
        if (!(receipt?.expiresAt > Date.now()) || !receipt.payload) {
          storage.removeItem(key);
          continue;
        }
        storage.setItem(key, JSON.stringify({
          expiresAt: receipt.expiresAt,
          payload: {
            form_type: receipt.payload.form_type,
            form_location: receipt.payload.form_location,
          },
        }));
      } catch {
        storage.removeItem(key);
      }
    }
  } catch {
    // Storage failure must never prevent a consent change or a lead submission.
  }
}

export function clearAttributionCookies() {
  if (typeof document === 'undefined') return;
  try {
    const host = window.location.hostname;
    const domains = ['', host];
    if (host === 'ldndecks.com' || host.endsWith('.ldndecks.com')) domains.push('ldndecks.com');
    const names = new Set(AD_ATTRIBUTION_FIELDS);
    document.cookie.split(';').forEach((entry) => {
      const name = entry.trim().split('=')[0];
      if (/^(_ga(?:_|$)|_gcl_|_clck$|_clsk$|_pin_unauth$)/.test(name)) names.add(name);
    });
    for (const name of names) {
      for (const domain of domains) {
        document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax${domain ? `; Domain=${domain}` : ''}`;
      }
    }
  } catch {
    // Some browsers prohibit all cookie access. Readers also fail closed.
  }
}

export function applyTrackingConsent(value, { persist = true } = {}) {
  if (typeof window === 'undefined') return;
  const choice = value === 'accepted' ? 'accepted' : 'declined';
  const granted = choice === 'accepted';
  window.ldnConsentChoice = choice;
  window.ldnConsentGranted = granted;
  try {
    if (persist) window.localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // The immediate choice still applies for this page/SPA session.
  }

  const state = granted ? 'granted' : 'denied';
  try {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'update', {
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
      analytics_storage: state,
    });
  } catch {
    // Ad blockers must not break the consent UI.
  }
  if (!granted) {
    clearAttributionCookies();
    clearLeadAttribution();
    try { window.gtag?.('set', 'user_data', null); } catch {}
    try {
      window.dataLayer.push(Object.fromEntries([...AD_ATTRIBUTION_FIELDS, ...LEAD_PERSONAL_FIELDS, 'user_data'].map((key) => [key, null])));
    } catch {}
    try { window.fbq?.('consent', 'revoke'); } catch {}
  } else {
    try { window.fbq?.('consent', 'grant'); } catch {}
  }
  window.dispatchEvent(new Event(granted ? 'ldn:consent-accepted' : 'ldn:consent-declined'));
}

// Advertising permission is separate from processing a requested estimate.
// Old clients without a consent snapshot can still submit, without ad enrichment.
export function sanitizeLeadAdvertisingData(formData) {
  const granted = formData.get('ad_consent') === 'granted';
  formData.set('ad_consent', granted ? 'granted' : 'denied');
  if (!granted) {
    AD_ATTRIBUTION_FIELDS.forEach((key) => formData.delete(key));
  }
  for (const key of ['source_url', 'referrer']) {
    const value = formData.get(key);
    if (value) formData.set(key, trackingPageUrl(String(value)));
  }
  return granted;
}
