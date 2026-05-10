"use client";
import React, { useState } from 'react';
import styles from './ContactFAQ.module.css';

const faqData = [
  {
    q: "How do I start a project with Loudoun Decks?",
    a: "You can start by contacting us to schedule a free consultation."
  },
  {
    q: "Do you offer free consultations?",
    a: "Yes. We offer free consultations for homeowners in our service area."
  },
  {
    q: "What areas do you serve?",
    a: "We serve Loudoun County, Fairfax County, and Prince William County in Northern Virginia."
  },
  {
    q: "What types of projects do you handle?",
    a: "We work on decks, deck resurfacing, patios, porches, and pergolas or gazebos."
  }
];

export default function ProcessFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a },
    })),
  };

  return (
    <section className={styles.faqSection}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className={styles.container}>
        <h2 className={styles.title}>Our Process FAQs</h2>
        <div className={styles.accordionContainer}>
          {faqData.map((item, idx) => (
            <div key={idx} className={styles.accordionItem}>
              <button
                className={styles.accordionBtn}
                onClick={() => toggleAccordion(idx)}
              >
                <span className={styles.questionText}>{item.q}</span>
                <span className={styles.icon}>
                  {openIndex === idx ? '−' : '+'}
                </span>
              </button>
              <div
                className={`${styles.accordionContent} ${openIndex === idx ? styles.open : ''}`}
              >
                <div className={styles.answerText}>{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
