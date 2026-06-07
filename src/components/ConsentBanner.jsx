"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './ConsentBanner.module.css';

const CONSENT_KEY = 'ldn_cookie_consent';

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        setVisible(!localStorage.getItem(CONSENT_KEY));
      } catch {
        setVisible(false);
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  function updateConsent(value) {
    try {
      localStorage.setItem(CONSENT_KEY, value);
      window.ldnConsentGranted = value === 'accepted';
      if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
          ad_storage: value === 'accepted' ? 'granted' : 'denied',
          ad_user_data: value === 'accepted' ? 'granted' : 'denied',
          ad_personalization: value === 'accepted' ? 'granted' : 'denied',
          analytics_storage: value === 'accepted' ? 'granted' : 'denied',
        });
      }
      if (value === 'accepted') {
        window.dispatchEvent(new Event('ldn:consent-accepted'));
      }
    } catch {
      // If storage is blocked, keep the user's immediate choice in memory.
      window.ldnConsentGranted = value === 'accepted';
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
