import React from 'react';
import styles from './TeamHeader.module.css';

export default function TeamHeader() {
  return (
    <section className={styles.headerSection}>
      <div className={styles.container}>
        <div className={styles.labelWrapper}>
            <span className={styles.label}>OUR TEAM</span>
            <div className={styles.line}></div>
        </div>
        <h1 className={styles.title}>Meet the Experts Behind Loudoun Decks</h1>
        <p className={styles.subtitle}>
          A dedicated team of local craftsmen focused on building premium outdoor living spaces in Northern Virginia.
        </p>
      </div>
    </section>
  );
}
