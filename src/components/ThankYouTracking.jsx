"use client";
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { trackLeadConfirmed } from '@/lib/tracking';

// Fires the authoritative conversion event on /thank-you page-view.
// /thank-you is only reached after sendContactEmail succeeds, so this event
// is proof-of-conversion — more reliable than the pre-navigation form_submit
// event in ContactForm.jsx, which can be dropped if GTM hasn't loaded yet.
//
// event_id and proof token are forwarded only after the server action
// succeeds. The token is verified before dataLayer receives lead_confirmed.
export default function ThankYouTracking() {
  const searchParams = useSearchParams();
  useEffect(() => {
    let cancelled = false;
    const eventId = searchParams.get('eid');
    const token = searchParams.get('proof');

    async function confirmAndTrack() {
      if (!eventId || !token) return;

      try {
        const response = await fetch('/api/lead-confirmation/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          cache: 'no-store',
          body: JSON.stringify({ eventId, token }),
        });
        const result = await response.json();
        if (!cancelled && result?.ok) {
          trackLeadConfirmed({ eventId });
        }
      } catch {
        // Fail closed: no server-confirmed proof means no lead_confirmed event.
      }
    }

    confirmAndTrack();
    return () => {
      cancelled = true;
    };
  }, [searchParams]);
  return null;
}
