import React from 'react';
import styles from './FAQHeader.module.css';

export default function FAQHeader() {
  return (
    <section className={styles.headerSection}>
      <div className={styles.container}>
        <div className={styles.labelWrapper}>
            <span className={styles.label}>COMMONLY ASKED QUESTIONS</span>
            <div className={styles.line}></div>
        </div>
        <h1 className={styles.title}>Deck Building FAQs</h1>
        <p className={styles.desc}>
          Find answers to common questions about deck building and outdoor living projects with Loudoun Decks, serving homeowners in Loudoun County, Fairfax County, and Prince William County.
        </p>
      </div>
    </section>
  );
}
