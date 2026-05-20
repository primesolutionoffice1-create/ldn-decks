import React from 'react';
import styles from './ContactHeader.module.css';

export default function ContactHeader() {
  return (
    <section className={styles.headerSection}>
      <div className={styles.container}>
         <div className={styles.subtextWrapper}>
           <span className={styles.subtext}>Contact Loudoun Decks</span>
           <span className={styles.line}></span>
         </div>
         <h1 className={styles.title}>Get in Touch With a Local Deck Builder</h1>
         <p className={styles.description}>
           Get in touch with Loudoun Decks to discuss your deck or outdoor living project in Northern Virginia. We offer free consultations for homeowners in Loudoun County, Fairfax County, and Prince William County.
         </p>
         <p className={styles.descriptionText}>
           Loudoun Decks works with homeowners across Northern Virginia to plan and build outdoor living spaces. If you have questions about a project, pricing, or timelines, our team is available to help. You can contact us by phone, email, or by submitting the form below. A member of our team will respond to discuss your needs and schedule a free consultation.
         </p>
      </div>
    </section>
  );
}
