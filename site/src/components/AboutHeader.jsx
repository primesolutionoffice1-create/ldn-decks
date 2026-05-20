import React from 'react';
import styles from './AboutHeader.module.css';

export default function AboutHeader() {
  return (
    <section className={styles.headerSection}>
      <div className={styles.container}>
         <div className={styles.subtextWrapper}>
           <span className={styles.subtext}>Who We Are</span>
           <span className={styles.line}></span>
         </div>
         <h1 className={styles.title}>About Loudoun Decks</h1>
         <p className={styles.description}>
           Loudoun Decks is a local outdoor living company serving homeowners across Loudoun County, Fairfax County, and Prince William County in Northern Virginia. We focus on building well‑designed, functional outdoor spaces that add long‑term value to homes.
         </p>
      </div>
    </section>
  );
}
