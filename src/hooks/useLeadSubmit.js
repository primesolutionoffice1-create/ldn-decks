'use client';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { sendContactEmail } from '@/server/sendEmail';
import { markLeadConfirmationPending, trackFormSubmit } from '@/lib/tracking';
import { getClickIds, getFbp, getUtmParams, CLICK_ID_KEYS, UTM_KEYS } from '@/lib/clickIds';

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

  return async function submit(formElement) {
    const formData = new FormData(formElement);

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
    const eventId = (typeof crypto !== 'undefined' && crypto.randomUUID)
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    formData.append('event_id', eventId);

    if (typeof window !== 'undefined') {
      formData.append('source_url', window.location.href);
      if (document.referrer) formData.append('referrer', document.referrer);
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

    // ContactHome collects a single `name` field. Normalize it into
    // firstName/lastName before the server action so Meta CAPI gets the
    // same match-quality fields as GTM Enhanced Conversions.
    if (firstName && !formData.get('firstName')) formData.append('firstName', firstName);
    if (lastName && !formData.get('lastName')) formData.append('lastName', lastName);

    const result = await sendContactEmail(formData);

    // Honeypot-triggered submissions return { success: true, skipped: true }.
    // Tell the form it succeeded (no error UI) but DO NOT fire analytics
    // and DO NOT navigate to /thank-you (which would fire lead_confirmed).
    if (result?.skipped) {
      return { success: true, skipped: true };
    }

    if (result?.success) {
      // hasTracked guards against React Strict Mode double-fire and
      // any future double-submit edge cases. Same-instance only;
      // cross-component / re-mount dedup happens via event_id downstream.
      if (!hasTracked.current) {
        hasTracked.current = true;
        trackFormSubmit({
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
      }
      if (result.confirmationToken) {
        markLeadConfirmationPending(eventId);
        router.push(
          `/thank-you?eid=${encodeURIComponent(eventId)}&proof=${encodeURIComponent(result.confirmationToken)}`
        );
      } else {
        // Fail conversion tracking closed but keep the homeowner experience
        // successful if email delivery worked and token signing is misconfigured.
        router.push('/thank-you');
      }
      return { success: true, eventId };
    }
    return { success: false };
  };
}
