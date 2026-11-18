"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { clearAttributionCookies, persistAttributionCookies } from '@/lib/clickIds';
import { hasOpenAIConsent, OPENAI_CONSENT_KEY } from '@/lib/openaiTracking';
import styles from './ConsentBanner.module.css';

const CONSENT_KEY = 'ldn_cookie_consent';
const OPENAI_MEASUREMENT_ENABLED = process.env.NEXT_PUBLIC_OPENAI_MEASUREMENT_ENABLED === 'true'
  && process.env.NEXT_PUBLIC_OPENAI_AAM_PRIVACY_APPROVED === 'true';

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const choice = localStorage.getItem(CONSENT_KEY);
        const needsOpenAIChoice = OPENAI_MEASUREMENT_ENABLED && choice === 'accepted' && !hasOpenAIConsent();
        setVisible((choice !== 'accepted' && choice !== 'declined') || needsOpenAIChoice);
      } catch {
        setVisible(true);
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  function updateConsent(value) {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      // The explicit choice still applies to this page when storage is blocked.
    }

    const accepted = value === 'accepted';
    window.ldnConsentGranted = accepted;
    window.ldnOpenAIConsentGranted = accepted && OPENAI_MEASUREMENT_ENABLED;
    if (OPENAI_MEASUREMENT_ENABLED || !accepted) {
      try { localStorage.setItem(OPENAI_CONSENT_KEY, accepted ? 'accepted' : 'declined'); } catch {}
    }
    const state = accepted ? 'granted' : 'denied';
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        ad_storage: state,
        ad_user_data: state,
        ad_personalization: state,
        analytics_storage: state,
      });
    }

    try {
      if (accepted) {
        persistAttributionCookies();
      } else {
        clearAttributionCookies();
      }
    } catch {
      // Cookie access can also fail. Keep the consent choice and UI usable.
    }

    if (accepted) {
      window.dispatchEvent(new Event('ldn:consent-accepted'));
    } else {
      window.dispatchEvent(new Event('ldn:consent-declined'));
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside className={styles.banner} aria-label="Cookie consent">
      <div className={styles.copy}>
        <strong>Privacy choices</strong>
        <span>
          We use cookies for analytics, ads attribution, and site improvement. You can accept or decline optional tracking.
          {OPENAI_MEASUREMENT_ENABLED && ' Optional OpenAI ad measurement can also detect and hash contact details entered on this site to match estimate requests to ads.'}
        </span>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
      <div className={styles.actions}>
        <button type="button" className={styles.secondary} onClick={() => updateConsent('declined')}>
          Decline
        </button>
        <button type="button" className={styles.primary} onClick={() => updateConsent('accepted')}>
          Accept
        </button>
      </div>
    </aside>
  );
}
