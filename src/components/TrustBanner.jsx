import React from 'react';
import styles from './TrustBanner.module.css';
import { BUSINESS } from '@/lib/business';

export default function TrustBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.item}>
        <div className={styles.icon} aria-hidden="true">🏆</div>
        <div className={styles.text}>
          <strong>Trex Platinum Partner</strong>
          <span>Top 1% in North America</span>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.item}>
        <div className={styles.icon} aria-hidden="true">⭐</div>
        <div className={styles.text}>
          <strong>Google Reviews</strong>
          <span>{BUSINESS.aggregateRating.reviewCount}+ Google reviews</span>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.item}>
        <div className={styles.icon} aria-hidden="true">🛡️</div>
        <div className={styles.text}>
          <strong>2-Year Warranty</strong>
          <span>Workmanship Guaranteed</span>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.item}>
        <div className={styles.icon} aria-hidden="true">✅</div>
        <div className={styles.text}>
          <strong>Licensed & Insured</strong>
          <span>VA Class A Contractor</span>
        </div>
      </div>
    </div>
  );
}
