"use client";
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { trackLeadConfirmed } from '@/lib/tracking';

// Fires the authoritative conversion event on /thank-you page-view.
// /thank-you is only reached after sendContactEmail succeeds, so this event
// is proof-of-conversion — more reliable than the pre-navigation form_submit
// event in ContactForm.jsx, which can be dropped if GTM hasn't loaded yet.
//
// event_id is forwarded from ContactForm via URL query param so GTM can
// deduplicate this against the earlier form_submit event (and against any
// future server-side CAPI calls that share the same event_id).
export default function ThankYouTracking() {
  const searchParams = useSearchParams();
  useEffect(() => {
    const eventId = searchParams.get('eid') || null;
    trackLeadConfirmed({ eventId });
  }, [searchParams]);
  return null;
}
