const CONSENT_KEY = 'ldn_cookie_consent';

export function sanitizeLeadUrl(value, baseUrl) {
  if (!value) return '';

  try {
    const parsed = baseUrl ? new URL(String(value), baseUrl) : new URL(String(value));
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return '';
    return `${parsed.origin}${parsed.pathname}`;
  } catch {
    return '';
  }
}

export function getOptionalTrackingConsent() {
  if (typeof window === 'undefined') return 'declined';

  try {
    return window.localStorage?.getItem(CONSENT_KEY) === 'accepted'
      ? 'accepted'
      : 'declined';
  } catch {
    return 'declined';
  }
}

export function deriveServerLeadSource({ requestReferrer, submittedSourceUrl } = {}) {
  return sanitizeLeadUrl(requestReferrer) || sanitizeLeadUrl(submittedSourceUrl);
}
