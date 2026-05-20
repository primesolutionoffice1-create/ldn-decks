import React from 'react';
import styles from './BlogHeader.module.css';

export default function EducationHeader() {
  return (
    <section className={styles.headerSection}>
      <div className={styles.container}>
         <div className={styles.subtextWrapper}>
           <span className={styles.subtext}>Learn & Discover</span>
           <span className={styles.line}></span>
         </div>
         <h1 className={styles.title}>Education Center</h1>
         <p className={styles.description}>
           Deep dive into structural guidelines, material comparisons, and expert outdoor living advice for your Northern Virginia home.
         </p>
      </div>
    </section>
  );
}
