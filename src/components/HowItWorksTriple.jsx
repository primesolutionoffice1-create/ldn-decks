"use client";
import React from 'react';
import styles from './HowItWorksTriple.module.css';

const OrangeCheckIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#f15a24" />
    <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const steps = [
  {
    title: "Request a Free Estimate",
    desc: "Submit your project details, and our team will respond quickly to schedule your consultation."
  },
  {
    title: "On-Site Visit, Measurements & Design",
    desc: "We meet with you, discuss your goals, review materials, and create a custom plan."
  },
  {
    title: "We Handle Permits & Build Your Deck",
    desc: "Once approved, we manage the permitting process and begin building with expert craftsmanship."
  }
];

import { useContact } from '@/context/ContactContext';

export default function HowItWorksTriple() {
  const { openContact } = useContact();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>How It Works</h2>
        <div className={styles.grid}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconWrapper}>
                <OrangeCheckIcon />
              </div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDesc}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <button onClick={openContact} className={styles.ctaButton}>
            Get Free Estimate Now
          </button>
        </div>
      </div>
    </section>
  );
}
