import React from 'react';
import styles from './WhyChooseHeader.module.css';

export default function WhyChooseHeader() {
  return (
    <section className={styles.headerSection}>
      <div className={styles.container}>
        <div className={styles.subtextWrapper}>
           <span className={styles.subtext}>Why Choose Loudoun Decks</span>
           <span className={styles.line}></span>
        </div>
        
        <h1 className={styles.title}>
          Homeowners across Loudoun County, Fairfax County, and Prince William County choose Loudoun Decks for clear communication, local service, and well‑planned outdoor living projects.
        </h1>
        
        <div className={styles.contentBlock}>
           <h2>A Local Deck Builder Focused on Northern Virginia</h2>
           <p>Choosing the right deck builder is an important decision. Loudoun Decks works with homeowners throughout Northern Virginia to plan and build outdoor living spaces that fit their homes, needs, and lifestyle.</p>
           <p>Our focus is on providing straightforward information, local expertise, and a clear process from consultation to completion.</p>
        </div>
      </div>
    </section>
  );
}
