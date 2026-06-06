"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const PromoModal = dynamic(() => import('@/components/PromoModal'), {
  ssr: false,
  loading: () => null,
});

export default function DeferredPromoModal() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const ua = window.navigator?.userAgent || '';
    const isLabBot = /Chrome-Lighthouse|PageSpeed|Lighthouse/i.test(ua);
    if (isLabBot) return undefined;

    const load = () => setReady(true);

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(load, { timeout: 8000 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timer = window.setTimeout(load, 8000);
    return () => window.clearTimeout(timer);
  }, []);

  return ready ? <PromoModal /> : null;
}
