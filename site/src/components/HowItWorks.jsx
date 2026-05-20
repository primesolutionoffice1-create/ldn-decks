import React from 'react';
import styles from './HowItWorks.module.css';

const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    desc: 'We visit your property to discuss your vision, evaluate the site, and take precise measurements.'
  },
  {
    number: '02',
    title: 'Custom Design',
    desc: 'Our experts create a detailed plan and 3D rendering tailored to your home and lifestyle.'
  },
  {
    number: '03',
    title: 'Expert Build',
    desc: 'Our licensed craftsmen construct your deck with precision, meeting all local codes and standards.'
  },
  {
    number: '04',
    title: 'Enjoy & Warranty',
    desc: 'We hand over your dream deck backed by our 2-year workmanship warranty, plus 25\u201350 year manufacturer warranties on all composite materials.'
  }
];

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Our Process</span>
          <h2 className={styles.title}>How We Bring Your Dream Deck To Life</h2>
        </div>
        
        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
