"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CONSENT_KEY, applyTrackingConsent, clearAttributionCookies, clearLeadAttribution, getConsentChoice } from '@/lib/trackingConsent';
import styles from './ConsentBanner.module.css';

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const choice = getConsentChoice();
      setVisible(!choice);
      if (choice !== 'accepted') {
        clearAttributionCookies();
        clearLeadAttribution();
      }
    }, 0);

    function onStorage(event) {
      if (event.key !== CONSENT_KEY && event.key !== null) return;
      applyTrackingConsent(event.newValue, { persist: false });
      setVisible(event.newValue !== 'accepted' && event.newValue !== 'declined');
    }
    window.addEventListener('storage', onStorage);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  function updateConsent(value) {
    applyTrackingConsent(value);
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
