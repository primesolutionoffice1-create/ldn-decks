import React from 'react';
import styles from './TrustBanner.module.css';

export default function TrustBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.item}>
        <div className={styles.icon} aria-hidden="true">🏆</div>
        <div className={styles.text}>
          <strong>Trex Platinum Partner</strong>
          <span>Profile and credential details available for review</span>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.item}>
        <div className={styles.icon} aria-hidden="true">⭐</div>
        <div className={styles.text}>
          <strong>Google Reviews</strong>
          <span>Public Google review profile</span>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.item}>
        <div className={styles.icon} aria-hidden="true">🛡️</div>
        <div className={styles.text}>
          <strong>Written Warranty Terms</strong>
          <span>Review workmanship coverage in the project agreement</span>
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
