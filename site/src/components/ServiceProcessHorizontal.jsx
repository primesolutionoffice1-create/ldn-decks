"use client";
import React from 'react';
import styles from './ServiceProcessHorizontal.module.css';
import Link from 'next/link';

const OrangeCheckIcon = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#f15a24" />
    <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

import { useContact } from '@/context/ContactContext';

export default function ServiceProcessHorizontal({ title, steps }) {
  const { openContact } = useContact();
  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>{title}</h2>
        
        <div className={styles.stepsGrid}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.stepCard}>
              <div className={styles.iconWrapper}>
                <OrangeCheckIcon />
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.ctaText}>
            Get Started Today! Ready to enhance your property with us? Contact us to schedule your <strong>Free consultation</strong>.
          </p>
          <button onClick={openContact} className={styles.ctaButton}>
            Contacts
          </button>
        </div>
      </div>
    </section>
  );
}
