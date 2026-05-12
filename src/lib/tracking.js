// src/lib/tracking.js
// GTM dataLayer helpers for ldndecks.com - SSR safe

/**
 * Push event to GTM dataLayer - no-ops on server render
 */
function push(event) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

/**
 * Track quote form submission
 * Fires: GA4 generate_lead + Google Ads Form Lead + Enhanced Conversions.
 * Click IDs (gclid/gbraid/wbraid/fbclid/msclkid) are pushed to dataLayer so GTM
 * can forward them to Google Ads conversion tags and store for offline import.
 */
export function trackFormSubmit({ email, phone, formType = 'quote', clickIds = {}, eventId } = {}) {
  if (typeof window === 'undefined') return;
  push({
    event: 'form_submit',
    event_id: eventId || null,
    form_type: formType,
    email: email,
    phone: phone,
    gclid: clickIds.gclid || null,
    gbraid: clickIds.gbraid || null,
    wbraid: clickIds.wbraid || null,
    fbclid: clickIds.fbclid || null,
    msclkid: clickIds.msclkid || null,
    page: window.location.pathname,
  });
}

/**
 * Track phone number click
 * Fires: GA4 phone_call_click + Google Ads Call Lead
 */
export function trackPhoneClick() {
  push({
    event: 'phone_click',
    phone: '+15716557207',
  });
}

/**
 * Fires the authoritative lead conversion event on /thank-you page-view.
 * GTM should map this event (not form_submit) to the Google Ads Lead
 * conversion action — /thank-you is only reached after sendContactEmail
 * succeeds, so this event is proof-of-conversion.
 *
 * event_id matches the one passed into ContactForm's form_submit event,
 * enabling client-side dedup in GTM and server-side dedup if CAPI/Google
 * Ads Conversions API is added later.
 */
export function trackLeadConfirmed({ eventId } = {}) {
  if (typeof window === 'undefined') return;
  push({
    event: 'lead_confirmed',
    event_id: eventId || null,
    page: window.location.pathname,
  });
}

// Analytics tracking helper alias for compatibility
export function trackEvent(action, category, label, value) {
  push({
    event: action,
    event_category: category,
    event_label: label,
    value: value || 1
  });
}
