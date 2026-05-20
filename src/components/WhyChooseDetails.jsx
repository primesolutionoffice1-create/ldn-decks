import React from 'react';
import styles from './WhyChooseDetails.module.css';

export default function WhyChooseDetails() {
  return (
    <section className={styles.detailsSection}>
       <div className={styles.container}>
          <div className={styles.grid}>
             <div className={styles.column}>
                <h2>Why Homeowners Contact Loudoun Decks</h2>
                <p>Homeowners reach out to Loudoun Decks because they are looking for:</p>
                <ul className={styles.list}>
                   <li>A local deck builder serving Northern Virginia</li>
                   <li>Clear explanations and project planning</li>
                   <li>Outdoor living solutions designed for their home</li>
                   <li>A free, no‑obligation consultation</li>
                </ul>
                <p className={styles.footerText}>We focus on being a reliable local option for deck and outdoor living projects.</p>
             </div>
             <div className={styles.column}>
                <h2>Clear Communication From Start to Finish</h2>
                <p>We believe homeowners should have clear information before moving forward with an outdoor project. From the initial conversation through construction, we focus on communication and realistic planning.</p>
                <p>Our goal is to help homeowners make informed decisions about their outdoor living investment.</p>
             </div>
          </div>
       </div>
    </section>
  );
}
