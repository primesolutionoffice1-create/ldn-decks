// src/lib/tracking.js
// GTM dataLayer helpers for ldndecks.com - SSR safe

import { recordDedupHit } from '@/lib/attribution-debug';
import { getClickIds, getUtmParams } from '@/lib/clickIds';
import { BUSINESS } from '@/lib/business';

const GOOGLE_ADS_LEAD_CONVERSION_SEND_TO =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_CONVERSION_SEND_TO ||
  'AW-16888402136/1VhbCLSqreIcENihgvU-';
const GOOGLE_ADS_LEAD_CONVERSION_VALUE = 1;
const GOOGLE_ADS_LEAD_CONVERSION_CURRENCY = 'USD';

/**
 * Push event to GTM dataLayer - no-ops on server render
 */
function push(event) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

function hasSessionEventFired(key) {
  if (typeof window === 'undefined' || !key) return false;
  try {
    if (!window.sessionStorage) return false;
    if (window.sessionStorage.getItem(key)) return true;
    window.sessionStorage.setItem(key, '1');
    return false;
  } catch {
    return false;
  }
}

function leadPendingKey(eventId) {
  return eventId ? `lead_pending_${eventId}` : null;
}

function leadFiredKey(eventId) {
  return eventId ? `lead_fired_${eventId}` : null;
}

function googleAdsLeadFiredKey(eventId) {
  return eventId ? `google_ads_lead_fired_${eventId}` : null;
}

function leadAttributionKey(eventId) {
  return eventId ? `lead_attribution_${eventId}` : null;
}

function getPendingLeadSet() {
  if (typeof window === 'undefined') return null;
  window.__ldnPendingLeadIds = window.__ldnPendingLeadIds || new Set();
  return window.__ldnPendingLeadIds;
}

function getGoogleAdsLeadFiredSet() {
  if (typeof window === 'undefined') return null;
  window.__ldnGoogleAdsLeadFiredIds = window.__ldnGoogleAdsLeadFiredIds || new Set();
  return window.__ldnGoogleAdsLeadFiredIds;
}

function adsDebug(event, details = {}) {
  if (
    typeof process === 'undefined' ||
    process.env.NEXT_PUBLIC_ADS_DEBUG !== '1' ||
    typeof console === 'undefined'
  ) {
    return;
  }
  console.info('[ldnAds]', event, details);
}

export function markLeadConfirmationPending(eventId) {
  if (typeof window === 'undefined' || !eventId) return;
  const pendingSet = getPendingLeadSet();
  if (pendingSet) pendingSet.add(eventId);
  try {
    if (window.sessionStorage) {
      window.sessionStorage.setItem(leadPendingKey(eventId), '1');
    }
  } catch {
    // Browser storage can fail in private/embedded contexts; the in-memory
    // pending set still protects the same SPA submission flow.
  }
}

function storeLeadAttributionPayload(eventId, payload) {
  if (typeof window === 'undefined' || !eventId || !payload) return;
  try {
    if (window.sessionStorage) {
      window.sessionStorage.setItem(leadAttributionKey(eventId), JSON.stringify(payload));
    }
  } catch {
    // Enhanced-conversion enrichment is best effort. The conversion event still
    // fires without it when browser storage is unavailable or blocked.
  }
}

function consumeLeadAttributionPayload(eventId) {
  if (typeof window === 'undefined' || !eventId) return {};
  try {
    const key = leadAttributionKey(eventId);
    const raw = window.sessionStorage?.getItem(key);
    if (!raw) return {};
    window.sessionStorage.removeItem(key);
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function consumeLeadConfirmationPending(eventId) {
  if (typeof window === 'undefined' || !eventId) return false;
  const pendingSet = getPendingLeadSet();
  if (pendingSet?.has(eventId)) {
    pendingSet.delete(eventId);
    try {
      if (window.sessionStorage) window.sessionStorage.removeItem(leadPendingKey(eventId));
    } catch {}
    return true;
  }
  try {
    if (window.sessionStorage?.getItem(leadPendingKey(eventId))) {
      window.sessionStorage.removeItem(leadPendingKey(eventId));
      return true;
    }
  } catch {}
  return false;
}

/**
 * Track deck payment estimator interactions.
 * These events are GA4/GTM friendly and intentionally stay separate from
 * lead-conversion events. They describe calculator engagement only.
 */
export function trackEstimatorEvent(eventName, {
  amount,
  apr,
  years,
  monthlyPayment,
  totalInterest,
  ctaLocation,
  optionType,
  dedupeKey,
} = {}) {
  if (typeof window === 'undefined' || !eventName) return;
  const eventKey = dedupeKey ? `estimator_${eventName}_${dedupeKey}` : null;
  if (hasSessionEventFired(eventKey)) return;

  push({
    event: eventName,
    tool_name: 'deck_payment_estimator',
    project_amount: typeof amount === 'number' ? amount : null,
    estimated_apr: typeof apr === 'number' ? apr : null,
    loan_term_years: typeof years === 'number' ? years : null,
    estimated_monthly_payment: typeof monthlyPayment === 'number' ? Math.round(monthlyPayment) : null,
    estimated_total_interest: typeof totalInterest === 'number' ? Math.round(totalInterest) : null,
    cta_location: ctaLocation || null,
    financing_option: optionType || null,
    page_location: window.location.href,
    page_path: window.location.pathname,
  });
}

function trackPinterestLead({ eventId } = {}) {
  if (typeof window === 'undefined') {
    return;
  }

  const payload = { event_id: eventId || undefined };
  let attempts = 0;

  function sendWhenReady() {
    if (typeof window.pintrk === 'function') {
      window.pintrk('track', 'lead', payload);
      return;
    }

    attempts += 1;
    if (attempts < 10) {
      window.setTimeout(sendWhenReady, 500);
    }
  }

  sendWhenReady();
}

function trackMetaLead({ eventId } = {}) {
  if (typeof window === 'undefined') {
    return;
  }

  let attempts = 0;

  function sendWhenReady() {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', {}, eventId ? { eventID: eventId } : undefined);
      return;
    }

    attempts += 1;
    if (attempts < 10) {
      window.setTimeout(sendWhenReady, 500);
    }
  }

  sendWhenReady();
}

function trackGoogleAdsLead({ eventId, attributionPayload = {} } = {}) {
  if (typeof window === 'undefined') {
    adsDebug('google_ads_lead_skipped', { eventId: eventId || null, reason: 'server_render' });
    return;
  }

  if (!eventId) {
    adsDebug('google_ads_lead_skipped', { reason: 'missing_event_id' });
    return;
  }

  if (!GOOGLE_ADS_LEAD_CONVERSION_SEND_TO) {
    adsDebug('google_ads_lead_skipped', { eventId, reason: 'missing_send_to' });
    return;
  }

  const payload = {
    send_to: GOOGLE_ADS_LEAD_CONVERSION_SEND_TO,
    transaction_id: eventId,
    event_id: eventId,
    value: GOOGLE_ADS_LEAD_CONVERSION_VALUE,
    currency: GOOGLE_ADS_LEAD_CONVERSION_CURRENCY,
    page_location: window.location.href,
    page_path: window.location.pathname,
    form_location: attributionPayload.form_location || null,
    form_type: attributionPayload.form_type || null,
    service: attributionPayload.service || null,
    city: attributionPayload.city || null,
    state: attributionPayload.state || null,
  };

  let attempts = 0;

  function sendWhenReady() {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', payload);
      adsDebug('google_ads_lead_sent', {
        eventId,
        send_to: GOOGLE_ADS_LEAD_CONVERSION_SEND_TO,
        transaction_id: eventId,
      });
      return;
    }

    attempts += 1;
    if (attempts < 10) {
      window.setTimeout(sendWhenReady, 500);
      return;
    }

    adsDebug('google_ads_lead_skipped', {
      eventId,
      reason: 'gtag_unavailable_after_retries',
      attempts,
    });
  }

  sendWhenReady();
}

function reserveGoogleAdsLeadConversion(eventId) {
  if (typeof window === 'undefined') {
    return { shouldSend: false, reason: 'server_render' };
  }

  if (!eventId) {
    return { shouldSend: false, reason: 'missing_event_id' };
  }

  const firedSet = getGoogleAdsLeadFiredSet();
  if (firedSet?.has(eventId)) {
    return { shouldSend: false, reason: 'memory_dedup' };
  }

  const firedKey = googleAdsLeadFiredKey(eventId);
  let storageStatus = 'unavailable';

  try {
    if (window.sessionStorage) {
      storageStatus = 'available';
      if (window.sessionStorage.getItem(firedKey)) {
        recordDedupHit();
        return { shouldSend: false, reason: 'session_storage_dedup' };
      }
    }
  } catch (error) {
    storageStatus = 'read_error';
    adsDebug('google_ads_lead_storage_error', {
      eventId,
      phase: 'read',
      message: error?.message || String(error),
    });
  }

  if (firedSet) firedSet.add(eventId);

  try {
    if (window.sessionStorage) {
      window.sessionStorage.setItem(firedKey, '1');
      storageStatus = 'reserved';
    }
  } catch (error) {
    storageStatus = 'write_error';
    adsDebug('google_ads_lead_storage_error', {
      eventId,
      phase: 'write',
      message: error?.message || String(error),
    });
  }

  return { shouldSend: true, reason: 'reserved', storageStatus };
}

export function trackGoogleAdsLeadOnConfirmedSubmit({ eventId, attributionPayload = {} } = {}) {
  const reservation = reserveGoogleAdsLeadConversion(eventId);
  if (!reservation.shouldSend) {
    adsDebug('google_ads_lead_deduplicated', {
      eventId: eventId || null,
      reason: reservation.reason,
    });
    return;
  }

  adsDebug('google_ads_lead_send_queued', {
    eventId,
    reason: reservation.reason,
    storageStatus: reservation.storageStatus,
  });
  trackGoogleAdsLead({ eventId, attributionPayload });
}

export function trackMetaPageView() {
  if (typeof window === 'undefined') {
    return;
  }

  let attempts = 0;

  function sendWhenReady() {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
      return;
    }

    attempts += 1;
    if (attempts < 10) {
      window.setTimeout(sendWhenReady, 500);
    }
  }

  sendWhenReady();
}

/**
 * Track quote form submission
 * Fires: GA4 generate_lead + form_submit attribution payload.
 * Google Ads direct conversion fires after the server confirms the submit in
 * useLeadSubmit, using the same event_id and attribution payload.
 * Click IDs (gclid/gbraid/wbraid/fbclid/msclkid) are pushed to dataLayer so GTM
 * can forward them to Google Ads conversion tags and store for offline import.
 *
 * firstName/lastName/zip carry user-provided data for Google Ads Enhanced
 * Conversions for Web. GTM's Google Ads conversion tag template hashes
 * these client-side before the conversion request leaves the browser; no
 * plaintext PII reaches Google.
 */
export function trackFormSubmit({
  email,
  phone,
  firstName,
  lastName,
  address,
  zip,
  city,
  state,
  service,
  timeline,
  budgetRange,
  materialInterest,
  homeownerStatus,
  hoa,
  formLocation,
  formType = 'quote',
  clickIds = {},
  utmParams = {},
  eventId,
  pageContext,
} = {}) {
  if (typeof window === 'undefined') return;
  const leadEventId = eventId || `lead_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
  const attributionPayload = {
    form_type: formType,
    form_location: formLocation || formType,
    email: email || null,
    phone: phone || null,
    first_name: firstName || null,
    last_name: lastName || null,
    street: address || null,
    zip: zip || null,
    city: city || null,
    state: state || null,
    country: 'US',
    service: service || null,
    timeline: timeline || null,
    budget_range: budgetRange || null,
    material_interest: materialInterest || null,
    homeowner_status: homeownerStatus || null,
    hoa_permit_status: hoa || null,
    ...pageContextPayload(pageContext),
    gclid: clickIds.gclid || null,
    gbraid: clickIds.gbraid || null,
    wbraid: clickIds.wbraid || null,
    fbclid: clickIds.fbclid || null,
    msclkid: clickIds.msclkid || null,
    utm_source: utmParams.utm_source || null,
    utm_medium: utmParams.utm_medium || null,
    utm_campaign: utmParams.utm_campaign || null,
    utm_content: utmParams.utm_content || null,
    utm_term: utmParams.utm_term || null,
  };
  storeLeadAttributionPayload(leadEventId, attributionPayload);

  push({
    event: 'generate_lead',
    form_type: formType,
    form_location: formLocation || formType,
    lead_source: 'website_contact_form',
    event_id: leadEventId,
    transaction_id: leadEventId,
    value: GOOGLE_ADS_LEAD_CONVERSION_VALUE,
    currency: GOOGLE_ADS_LEAD_CONVERSION_CURRENCY,
    email: email || null,
    phone: phone || null,
    ...pageContextPayload(pageContext),
    page_location: window.location.href,
    page_path: window.location.pathname,
  });
  push({
    event: 'form_submit',
    event_id: leadEventId,
    transaction_id: leadEventId,
    ...attributionPayload,
    page: window.location.pathname,
  });

  return { eventId: leadEventId, attributionPayload };
}

/**
 * Track phone number click
 * Fires: GA4 phone_call_click (engagement signal).
 *
 * Note: phone_click is a vanity event — click != actual call. Use Google
 * Ads call asset + website call-tracking forwarding numbers as the real
 * phone-conversion signal. Keep this event for GA4 reporting and
 * audience building only.
 */
export function trackPhoneClick(event) {
  if (typeof window === 'undefined') return;
  const clickIds = getClickIds();
  const utmParams = getUtmParams();
  const currentTarget = event?.currentTarget;
  const linkText = currentTarget?.textContent?.replace(/\s+/g, ' ').trim().slice(0, 120) || null;
  const ctaLocation =
    currentTarget?.dataset?.ctaLocation ||
    currentTarget?.getAttribute?.('aria-label') ||
    null;

  push({
    event: 'phone_click',
    event_id: `phone_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`,
    phone_source: 'tel_link',
    phone_number: BUSINESS.telephone,
    link_text: linkText,
    cta_location: ctaLocation,
    page_location: window.location.href,
    page_path: window.location.pathname,
    page: window.location.pathname,
    gclid: clickIds.gclid || null,
    gbraid: clickIds.gbraid || null,
    wbraid: clickIds.wbraid || null,
    fbclid: clickIds.fbclid || null,
    msclkid: clickIds.msclkid || null,
    utm_source: utmParams.utm_source || null,
    utm_medium: utmParams.utm_medium || null,
    utm_campaign: utmParams.utm_campaign || null,
    utm_content: utmParams.utm_content || null,
    utm_term: utmParams.utm_term || null,
  });
}

function pageContextPayload(pageContext = {}) {
  return {
    city: pageContext.city || null,
    county: pageContext.county || null,
    service: pageContext.service || null,
    page_type: pageContext.pageType || null,
  };
}

export function trackPhoneClickWithContext({ ctaLocation, pageContext } = {}) {
  if (typeof window === 'undefined') return;
  push({
    event: 'phone_click',
    phone_source: 'tel_link',
    cta_location: ctaLocation || null,
    ...pageContextPayload(pageContext),
    page_location: window.location.href,
    page_path: window.location.pathname,
    page: window.location.pathname,
  });
}

export function trackEmailClick({ ctaLocation, email, pageContext } = {}) {
  if (typeof window === 'undefined') return;
  push({
    event: 'email_click',
    email_source: 'mailto_link',
    cta_location: ctaLocation || null,
    email: email || null,
    ...pageContextPayload(pageContext),
    page_location: window.location.href,
    page_path: window.location.pathname,
  });
}

export function trackCtaClick({ ctaLocation, ctaLabel, href, pageContext } = {}) {
  if (typeof window === 'undefined') return;
  push({
    event: 'cta_click',
    cta_location: ctaLocation || null,
    cta_label: ctaLabel || null,
    cta_href: href || null,
    ...pageContextPayload(pageContext),
    page_location: window.location.href,
    page_path: window.location.pathname,
  });
}

/**
 * Fires the authoritative lead conversion event on /thank-you page-view
 * after ThankYouTracking verifies the server-issued confirmation token.
 * GTM may map this event for tags that depend on lead_confirmed. The paid-social
 * deck estimate route also defers its direct Google Ads fallback until this
 * server-confirmed point; other form routes retain their existing behavior.
 *
 * event_id matches the one passed into ContactForm's form_submit event,
 * enabling client-side dedup in GTM and server-side dedup if CAPI/Google
 * Ads Conversions API is added later.
 *
 * Anti-replay: useEffect re-runs on /thank-you reload or back-forward
 * navigation; without a guard, each re-mount fires another conversion
 * with the same event_id. GTM transaction_id dedup catches this in the
 * tag layer, but we block at the source too — belt-and-braces. The
 * sessionStorage key is scoped to event_id, so legitimate new
 * submissions (different event_id, even from the same user) still fire.
 */
export function trackLeadConfirmed({ eventId } = {}) {
  if (typeof window === 'undefined') return;
  if (!eventId) return;

  const firedKey = leadFiredKey(eventId);
  try {
    if (window.sessionStorage && window.sessionStorage.getItem(firedKey)) {
      recordDedupHit();
      return;
    }
  } catch {
    // sessionStorage unavailable; continue with the pending-lead guard below.
  }

  if (!consumeLeadConfirmationPending(eventId)) {
    return;
  }

  try {
    if (window.sessionStorage) window.sessionStorage.setItem(firedKey, '1');
  } catch (e) {
    // sessionStorage unavailable (Safari private mode, embedded contexts).
    // The pending-lead guard already confirmed this came from this SPA flow.
  }

  const attributionPayload = consumeLeadAttributionPayload(eventId);

  push({
    event: 'lead_confirmed',
    event_id: eventId,
    transaction_id: eventId,
    value: GOOGLE_ADS_LEAD_CONVERSION_VALUE,
    currency: GOOGLE_ADS_LEAD_CONVERSION_CURRENCY,
    ...attributionPayload,
    page_location: window.location.href,
    page_path: window.location.pathname,
    page: window.location.pathname,
  });
  if (attributionPayload.form_location === 'paid_social_deck_project_estimate') {
    trackGoogleAdsLeadOnConfirmedSubmit({ eventId, attributionPayload });
  }
  trackMetaLead({ eventId });
  trackPinterestLead({ eventId });
}
