"use client";
import React, { useState } from 'react';
import JsonLd from './JsonLd';
import styles from './ContactFAQ.module.css';

const faqData = [
  {
    q: "How do I contact Loudoun Decks?",
    a: "You can contact us by phone, email, or by filling out the form on this page."
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes. We offer free consultations and estimates for homeowners in our service area."
  },
  {
    q: "What areas do you serve?",
    a: "We serve Loudoun County, Fairfax County, and Prince William County in Northern Virginia."
  },
  {
    q: "How soon will someone respond?",
    a: "Our team reviews inquiries as they come in and responds as soon as possible during business hours."
  }
];

export default function ContactFAQ({ withSchema = true }) {
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
      {withSchema && <JsonLd data={faqSchema} />}
      <div className={styles.container}>
         <h2 className={styles.title}>Contact &amp; Consultation FAQs</h2>
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
