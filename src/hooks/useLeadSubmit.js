'use client';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { sendContactEmail } from '@/server/sendEmail';
import {
  markLeadConfirmationPending,
  trackFormSubmit,
  trackGoogleAdsLeadOnConfirmedSubmit,
} from '@/lib/tracking';
import { getClickIds, getFbp, getUtmParams, CLICK_ID_KEYS, UTM_KEYS } from '@/lib/clickIds';
import { CONSENT_VERSION, hasTrackingConsent, sanitizeLeadAdvertisingData, trackingPageUrl } from '@/lib/trackingConsent';

// Shared submission pipeline for every lead form on the site.
// Owns: click-ID forwarding to server, event_id generation, dedup guard,
// dataLayer push, and SPA navigation to /thank-you?eid=<event_id>.
//
// Returning the same shape from every form means GTM, Meta CAPI, and the
// /thank-you proof-of-conversion event all see a single, deduplicatable
// lead — regardless of which form the user submitted.
export function useLeadSubmit({ formType = 'quote', pageContext } = {}) {
  const router = useRouter();
  const hasTracked = useRef(false);
  const inFlight = useRef(null);
  const eventIdRef = useRef(null);

  async function submitOnce(formElement) {
    const formData = new FormData(formElement);
    formData.set('ad_consent', hasTrackingConsent() ? 'granted' : 'denied');
    formData.set('ad_consent_version', CONSENT_VERSION);
    formData.set('ad_consent_recorded_at', new Date().toISOString());

    const clickIds = getClickIds();
    CLICK_ID_KEYS.forEach((k) => {
      if (clickIds[k]) formData.append(k, clickIds[k]);
    });

    const utmParams = getUtmParams();
    UTM_KEYS.forEach((k) => {
      if (utmParams[k]) formData.append(k, utmParams[k]);
    });

    // Meta _fbp browser ID — only present after a Meta Pixel has set it
    // client-side. Sent server-side to Meta CAPI to raise match quality.
    // Present after the direct Meta Pixel fallback or a future GTM Pixel sets
    // the _fbp cookie. If consent is denied or the pixel is blocked, this
    // stays absent and CAPI still degrades gracefully.
    const fbp = getFbp();
    if (fbp) formData.append('_fbp', fbp);

    // event_id anchors dedup across:
    //   - client form_submit dataLayer event (this submit)
    //   - client lead_confirmed dataLayer event (/thank-you mount)
    //   - server Meta CAPI Lead event (fired inside sendContactEmail)
    //   - any future Google Ads server-side conversion API call
    const eventId = eventIdRef.current || ((typeof crypto !== 'undefined' && crypto.randomUUID)
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`);
    eventIdRef.current = eventId;
    formData.set('event_id', eventId);

    if (typeof window !== 'undefined') {
      formData.set('source_url', trackingPageUrl(window.location.href));
      if (document.referrer) formData.set('referrer', trackingPageUrl(document.referrer));
    }
    if (formElement?.dataset?.formLocation && !formData.get('form_name')) {
      formData.append('form_name', formElement.dataset.formLocation);
    }

    // Read PII for Enhanced Conversions hashing in GTM. The dataLayer
    // push carries plaintext; GTM's Google Ads tag template hashes
    // client-side before the conversion request leaves the browser.
    const email = formData.get('email') || '';
    const phone = formData.get('phone') || '';
    const rawName = formData.get('name') || '';
    const firstName = formData.get('firstName') || rawName.split(' ')[0] || '';
    const lastName =
      formData.get('lastName') || rawName.split(' ').slice(1).join(' ') || '';
    const address = formData.get('address') || '';
    const zip = formData.get('zip') || '';
    // city + state lift Enhanced Conversions match rate from ~70% to
    // ~80%+. ContactForm collects both; ContactHome collects city plus
    // hidden state=VA, so Google Ads still receives partial user_data.
    const city = formData.get('city') || '';
    const state = formData.get('state') || '';
    const service = formData.get('service') || '';
    const timeline = formData.get('timeline') || '';
    const budgetRange = formData.get('budgetRange') || formData.get('budget') || '';
    const materialInterest = formData.get('materialInterest') || '';
    const homeownerStatus = formData.get('homeownerStatus') || '';
    const hoa = formData.get('hoa') || '';
    const formLocation = formElement?.dataset?.formLocation || formType;
    const requiresServerConfirmedGoogleAds =
      formLocation === 'paid_social_deck_project_estimate';

    // ContactHome collects a single `name` field. Normalize it into
    // firstName/lastName before the server action so Meta CAPI gets the
    // same match-quality fields as GTM Enhanced Conversions.
    if (firstName && !formData.get('firstName')) formData.append('firstName', firstName);
    if (lastName && !formData.get('lastName')) formData.append('lastName', lastName);

    sanitizeLeadAdvertisingData(formData);
    const result = await sendContactEmail(formData);

    // Honeypot-triggered submissions return { success: true, skipped: true }.
    // Tell the form it succeeded (no error UI) but DO NOT fire analytics
    // and DO NOT navigate to /thank-you (which would fire lead_confirmed).
    if (result?.skipped) {
      return { success: true, skipped: true };
    }

    if (result?.success) {
      // Track once per successful request. Cross-route dedup uses event_id;
      // the in-flight guard below prevents concurrent delivery attempts.
      if (!hasTracked.current) {
        hasTracked.current = true;
        try {
          const trackingReceipt = trackFormSubmit({
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
            formType,
            clickIds,
            utmParams,
            eventId,
            pageContext,
          });
          if (!requiresServerConfirmedGoogleAds) {
            trackGoogleAdsLeadOnConfirmedSubmit({
              eventId,
              attributionPayload: trackingReceipt?.attributionPayload || {},
            });
          }
        } catch {
          // A delivered estimate request must not appear failed because a tag is blocked.
        }
      }
      if (result.confirmationToken) {
        try { markLeadConfirmationPending(eventId); } catch {}
        router.push(
          `/thank-you?eid=${encodeURIComponent(eventId)}&proof=${encodeURIComponent(result.confirmationToken)}`
        );
        return { success: true, eventId, confirmationReady: true };
      } else {
        // Fail conversion tracking closed if token signing is misconfigured.
        // Do not navigate to /thank-you without server-confirmed proof because
        // path-based GTM tags could treat that page view as a conversion.
        return { success: true, eventId, confirmationReady: false };
      }
    }
    return { success: false };
  }

  return function submit(formElement) {
    if (inFlight.current) return inFlight.current;
    const request = submitOnce(formElement);
    inFlight.current = request.then((result) => {
      if (result?.success) {
        // Retries share an ID; a later inquiry after success is a new lead.
        eventIdRef.current = null;
        hasTracked.current = false;
      }
      return result;
    }).finally(() => { inFlight.current = null; });
    return inFlight.current;
  };
}
