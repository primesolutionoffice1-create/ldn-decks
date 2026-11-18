"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { denyOpenAIMeasurement, initializeOpenAIMeasurement, hasOpenAIConsent } from '@/lib/openaiTracking';

import { captureAttributionContext } from '@/lib/clickIds';
import { trackChatGPTArrival } from '@/lib/tracking';

export default function OpenAIMeasurement() {
  const pathname = usePathname();
  useEffect(() => {
    const initialize = () => {
      captureAttributionContext();
      if (process.env.NEXT_PUBLIC_OPENAI_MEASUREMENT_ENABLED === 'true'
          && process.env.NEXT_PUBLIC_OPENAI_AAM_PRIVACY_APPROVED === 'true' && hasOpenAIConsent()) {
        trackChatGPTArrival();
      }
      void initializeOpenAIMeasurement().catch(() => {});
    };
    initialize();
    window.addEventListener('ldn:consent-accepted', initialize);
    window.addEventListener('ldn:consent-declined', denyOpenAIMeasurement);
    return () => {
      window.removeEventListener('ldn:consent-accepted', initialize);
      window.removeEventListener('ldn:consent-declined', denyOpenAIMeasurement);
    };
  }, [pathname]);
  return null;
}
