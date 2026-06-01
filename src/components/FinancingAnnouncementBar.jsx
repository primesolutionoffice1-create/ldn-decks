import React from 'react';
import Link from 'next/link';
import styles from './FinancingAnnouncementBar.module.css';

// Site-wide "Financing Available" announcement bar.
// Sits above the Header so it is the first thing every visitor sees.
// Server-rendered, no client JS — keeps LCP/CLS clean.
export default function FinancingAnnouncementBar() {
  return (
    <Link
      href="/deck-payment-estimator"
      className={styles.bar}
      aria-label="Deck financing available — see monthly payment options"
    >
      <span className={styles.inner}>
        <span className={styles.icon} aria-hidden="true">💳</span>
        <span className={styles.text}>
          <strong className={styles.headline}>Financing Available</strong>
          <span className={styles.divider} aria-hidden="true">·</span>
          <span className={styles.sub}>Low monthly payments &mdash; soft credit pull, no score impact</span>
        </span>
        <span className={styles.cta}>
          See Monthly Options
          <span className={styles.arrow} aria-hidden="true">→</span>
        </span>
      </span>
    </Link>
  );
}
