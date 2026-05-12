'use client';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { sendContactEmail } from '@/server/sendEmail';
import { trackFormSubmit } from '@/lib/tracking';
import { getClickIds, CLICK_ID_KEYS } from '@/lib/clickIds';

// Shared submission pipeline for every lead form on the site.
// Owns: click-ID forwarding to server, event_id generation, dedup guard,
// dataLayer push, and SPA navigation to /thank-you?eid=<event_id>.
//
// Returning the same shape from every form means GTM, Meta CAPI, and the
// /thank-you proof-of-conversion event all see a single, deduplicatable
// lead — regardless of which form the user submitted.
export function useLeadSubmit({ formType = 'quote' } = {}) {
  const router = useRouter();
  const hasTracked = useRef(false);

  return async function submit(formElement) {
    const formData = new FormData(formElement);

    const clickIds = getClickIds();
    CLICK_ID_KEYS.forEach((k) => {
      if (clickIds[k]) formData.append(k, clickIds[k]);
    });

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
    const zip = formData.get('zip') || '';

    const result = await sendContactEmail(formData);

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
          zip,
          formType,
          clickIds,
          eventId,
        });
      }
      router.push(`/thank-you?eid=${encodeURIComponent(eventId)}`);
      return { success: true, eventId };
    }
    return { success: false };
  };
}
