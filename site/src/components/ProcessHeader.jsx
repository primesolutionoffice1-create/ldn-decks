import React from 'react';
import styles from './ProcessHeader.module.css';

export default function ProcessHeader() {
  return (
    <section className={styles.headerSection}>
      <div className={styles.container}>
        <div className={styles.labelWrapper}>
            <span className={styles.label}>OUR PROCESS</span>
            <div className={styles.line}></div>
        </div>
        <h1 className={styles.title}>At Loudoun Decks, we follow a clear and structured process to help homeowners in Northern Virginia plan and build outdoor living projects with confidence.</h1>
        
        <div className={styles.introBox}>
            <h2>A Clear Process for Outdoor Living Projects</h2>
            <p>Starting an outdoor living project can feel overwhelming without a clear plan. Loudoun Decks uses a straightforward process designed to help homeowners understand each step before construction begins.</p>
            <p>From the first conversation to the completion of the project, we focus on communication, planning, and clear next steps.</p>
        </div>
      </div>
    </section>
  );
}
