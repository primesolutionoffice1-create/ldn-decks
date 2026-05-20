import React from 'react';
import styles from './BlogHeader.module.css';

export default function BlogHeader() {
  return (
    <section className={styles.headerSection}>
      <div className={styles.container}>
         <div className={styles.subtextWrapper}>
           <span className={styles.subtext}>News & Insights</span>
           <span className={styles.line}></span>
         </div>
         <h1 className={styles.title}>Loudoun Decks Blog</h1>
         <p className={styles.description}>
           Read our latest articles on outdoor living, deck maintenance tips, material comparisons, and inspiration for your next backyard project.
         </p>
      </div>
    </section>
  );
}
