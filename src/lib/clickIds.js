import { resolveLeadAttribution, safeCampaign, safePagePath } from './leadAttribution';
// Shared attribution helpers for forms, analytics, and offline conversion imports.
export const CLICK_ID_KEYS = ['gclid', 'gbraid', 'wbraid', 'fbclid', 'msclkid'];
export const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

const ATTRIBUTION_KEYS = [...CLICK_ID_KEYS, ...UTM_KEYS];
const CONSENT_KEY = 'ldn_cookie_consent';
const ATTRIBUTION_TTL_SECONDS = 60 * 60 * 24 * 90;

export function hasAnalyticsConsent() {
  if (typeof window === 'undefined') return false;
  if (typeof window.ldnConsentGranted === 'boolean') return window.ldnConsentGranted;
  try {
    return window.localStorage?.getItem(CONSENT_KEY) === 'accepted';
  } catch {
    return false;
  }
}

function readCookie(name) {
  if (typeof document === 'undefined') return '';
  const safeName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  try {
    const match = document.cookie.match(new RegExp(`(?:^|; )${safeName}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : '';
  } catch { return ''; }
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
  const current = currentTouch() || window.__ldnArrivalContext?.touch;
  if (current) return current[name] || '';
  return readCookie(name);
}

function writeAttributionCookie(name, value) {
  if (typeof document === 'undefined' || !value) return;
  const secure = typeof window !== 'undefined' && window.location?.protocol === 'https:' ? '; Secure' : '';
  try { document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${ATTRIBUTION_TTL_SECONDS}; path=/; SameSite=Lax${secure}`; } catch {}
}

export function persistAttributionCookies() {
  if (!hasAnalyticsConsent() || typeof window === 'undefined') return;

  const touch = currentTouch();
  if (!touch) return;
  // Replace the entire touch, never mix yesterday's source with today's campaign.
  ATTRIBUTION_KEYS.forEach((key) => {
    try { document.cookie = `${key}=; max-age=0; path=/; SameSite=Lax`; } catch {}
    if (touch[key]) writeAttributionCookie(key, touch[key]);
  });
}

export function clearAttributionCookies() {
  if (typeof document !== 'undefined') {
    ATTRIBUTION_KEYS.forEach((key) => {
      try { document.cookie = `${key}=; max-age=0; path=/; SameSite=Lax`; } catch {}
    });
  }
  if (typeof window !== 'undefined') {
    window.__ldnPendingAttribution = {};
    window.__ldnArrivalContext = null;
    try { window.sessionStorage.removeItem('ldn_attribution_session'); } catch {}
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
  const context = typeof window === 'undefined' ? null : window.__ldnArrivalContext;
  if (context && !context.touch && resolveLeadAttribution({ referrer: context.referrer, consent: hasAnalyticsConsent() }).channel === 'chatgpt_organic') return {};
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

// One consented session snapshot. No durable new identifier or cookie family.
const SESSION_KEY = 'ldn_attribution_session';
const SESSION_MS = 30 * 60 * 1000;
function currentTouch() {
  const urlValues = Object.fromEntries(ATTRIBUTION_KEYS.map(k => [k, readCurrentUrlValue(k)]).filter(([,v]) => v));
  if (Object.keys(urlValues).length) return urlValues;
  const pending = Object.fromEntries(ATTRIBUTION_KEYS.map(k => [k, readPendingValue(k)]).filter(([,v]) => v));
  return Object.keys(pending).length ? pending : null;
}
function saveContext(context) {
  window.__ldnArrivalContext = context;
  try { window.sessionStorage.setItem(SESSION_KEY, JSON.stringify(context)); } catch {}
}
export function captureAttributionContext() {
  if (!hasAnalyticsConsent()) return null;
  const now = Date.now();
  let context = window.__ldnArrivalContext;
  if (!context) { try { context = JSON.parse(window.sessionStorage.getItem(SESSION_KEY)); } catch {} }
  if (!context || !Number.isFinite(context.captured_at) || now < context.captured_at || now - context.captured_at >= SESSION_MS) {
    const expired = Boolean(context);
    if (expired) window.__ldnPendingAttribution = {};
    let referral = '';
    try { referral = new URL(document.referrer).origin; } catch {}
    context = { captured_at: now, first_landing_path: safePagePath(expired ? window.location.href : window.__ldnFirstLanding || window.location.href), referrer: referral, arrival_recorded: false };
  }
  const touch = currentTouch();
  if (touch) {
    if (JSON.stringify(touch) !== JSON.stringify(context.touch)) persistAttributionCookies();
    context.touch = touch;
    context.basis = 'utm_session';
    window.__ldnPendingAttribution = { ...touch };
  }
  saveContext(context);
  return context;
}
export function getLeadAttributionContext() {
  const context = captureAttributionContext();
  if (!context) return {};
  const utm = getUtmParams();
  const resolved = resolveLeadAttribution({ source: utm.utm_source, medium: utm.utm_medium, referrer: context.referrer, consent: true, basis: context.touch ? context.basis : 'legacy_cookie' });
  return { arrival_referrer: context.referrer || '', arrival_campaign: context.arrival?.campaign || 'unknown', arrival_channel: context.arrival?.channel || 'unknown', arrival_observed: context.arrival_recorded === true, attribution_channel: resolved.channel, attribution_basis: resolved.basis, campaign: safeCampaign(utm.utm_campaign), first_landing_path: safePagePath(context.first_landing_path), submit_page_path: safePagePath(window.location.href) };
}
export function claimChatGPTArrival() {
  const context = captureAttributionContext();
  if (!context || context.arrival_recorded) return null;
  // Persisted campaign cookies alone do not establish a new paid arrival.
  const utm = context.touch || {};
  const resolved = resolveLeadAttribution({ source: utm.utm_source, medium: utm.utm_medium, referrer: context.referrer, consent: true });
  if (!resolved.channel.startsWith('chatgpt_')) return null;
  context.arrival_recorded = true;
  context.arrival = { channel: resolved.channel, campaign: safeCampaign(utm.utm_campaign), first_landing_path: safePagePath(context.first_landing_path) };
  saveContext(context);
  return { ...context.arrival };
}
