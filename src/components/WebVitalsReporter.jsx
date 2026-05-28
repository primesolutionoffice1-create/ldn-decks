'use client';

import { useReportWebVitals } from 'next/web-vitals';
import { usePathname } from 'next/navigation';

// Next.js exposes browser-measured Core Web Vitals via `useReportWebVitals`.
// We sample to /api/web-vitals so the readings land in Vercel runtime logs
// (search `[web-vitals]` to inspect) alongside the SpeedInsights dashboard.
//
// Sampling rule:
//   - Every "poor" reading is sent (those are the ones we want to fix).
//   - "needs-improvement" + "good" readings: 10% sample so log budget stays
//     predictable as traffic scales. Skipping in dev so console stays clean.
//
// Uses sendBeacon when available so the report still lands on hard nav-away,
// falling back to fetch+keepalive elsewhere.

const SAMPLE_RATE = 0.1;

function shouldSample(rating) {
  if (rating === 'poor') return true;
  return Math.random() < SAMPLE_RATE;
}

export default function WebVitalsReporter() {
  const path = usePathname();

  useReportWebVitals((metric) => {
    if (typeof window === 'undefined') return;
    if (process.env.NODE_ENV !== 'production') return;
    if (!shouldSample(metric.rating)) return;

    const conn = navigator.connection || {};
    const payload = JSON.stringify({
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      id: metric.id,
      navigationType: metric.navigationType,
      path,
      device: /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
      connection: conn.effectiveType || null,
    });

    try {
      if (navigator.sendBeacon) {
        const ok = navigator.sendBeacon(
          '/api/web-vitals',
          new Blob([payload], { type: 'application/json' }),
        );
        if (ok) return;
      }
      fetch('/api/web-vitals', {
        method: 'POST',
        body: payload,
        headers: { 'Content-Type': 'application/json' },
        keepalive: true,
      });
    } catch {
      // Swallow — reporting failures must never affect the user.
    }
  });

  return null;
}
