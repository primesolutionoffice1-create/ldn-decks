// Shared, bounded attribution for reporting; tagged traffic is not native attribution.
export const CHATGPT_CAMPAIGNS = ['ldn_deck_replacement', 'ldn_screened_porches', 'ldn_deck_post_replacement'];
export function safeCampaign(value) {
  return CHATGPT_CAMPAIGNS.includes(value) ? value : 'unknown';
}
export function safePagePath(value) {
  if (typeof value !== 'string' || !value.trim()) return '';
  try {
    const url = new URL(String(value || ''), 'https://ldndecks.com');
    if (!['https:', 'http:'].includes(url.protocol) || !['ldndecks.com', 'www.ldndecks.com'].includes(url.hostname)) return '';
    // Only bounded public route characters; no query, proof, identifiers or free text.
    const routes = ['/', '/get-estimate', '/thank-you', '/contact', '/services/deck-replacement', '/screened-porch-builder-northern-virginia', '/services/deck-post-replacement'];
    return routes.includes(url.pathname) ? url.pathname : '/other';
  } catch { return ''; }
}
export function resolveLeadAttribution({ source = '', medium = '', referrer = '', consent = false, basis = 'utm_session' } = {}) {
  if (!consent) return { channel: 'consent_not_granted', basis: 'unknown' };
  const s = String(source).trim().toLowerCase();
  const m = String(medium).trim().toLowerCase();
  if (['chatgpt', 'openai', 'chatgpt.com'].includes(s)) {
    if (['paid', 'cpc', 'ppc', 'paid_social'].includes(m)) return { channel: 'chatgpt_paid', basis };
    if (['organic', 'referral', 'social'].includes(m)) return { channel: 'chatgpt_organic', basis };
    return { channel: 'direct_or_unknown', basis: 'unknown' };
  }
  // An explicit different campaign always takes precedence over external referrer.
  if (s) return { channel: 'other_tagged', basis };
  try {
    const host = new URL(referrer).hostname;
    if (['chatgpt.com', 'chat.openai.com'].includes(host)) return { channel: 'chatgpt_organic', basis: 'external_referral' };
  } catch {}
  return { channel: 'direct_or_unknown', basis: 'unknown' };
}
export function normalizeLeadAttribution(formData) {
  const consent = formData.get('optional_tracking_consent') === 'accepted';
  for (const key of ['source_url', 'referrer', 'arrival_referrer']) {
    try {
      const u = new URL(String(formData.get(key) || ''));
      formData.set(key, ['http:', 'https:'].includes(u.protocol) ? `${u.origin}${u.pathname}`.slice(0,500) : '');
    } catch { formData.set(key, ''); }
  }
  for (const key of ['first_landing_path', 'submit_page_path']) formData.set(key, consent ? safePagePath(formData.get(key)) : '');
  for (const key of ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid','gbraid','wbraid','fbclid','msclkid']) {
    formData.set(key, consent ? String(formData.get(key) || '').replace(/[\u0000-\u001f\u007f]/g, '').slice(0,200) : '');
  }
  const basis = ['utm_session', 'persisted_last_non_direct', 'legacy_cookie'].includes(formData.get('attribution_basis')) ? formData.get('attribution_basis') : 'utm_session';
  const resolved = resolveLeadAttribution({ source: formData.get('utm_source'), medium: formData.get('utm_medium'), referrer: formData.get('arrival_referrer') || formData.get('referrer'), consent, basis });
  formData.set('attribution_channel', resolved.channel);
  formData.set('attribution_basis', resolved.basis);
  return resolved;
}
