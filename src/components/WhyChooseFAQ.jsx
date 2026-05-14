"use client";
import React, { useState } from 'react';
import styles from '@/components/ContactFAQ.module.css';

const faqData = [
  {
    q: "Why should I choose a local deck builder?",
    a: "Working with a local builder helps ensure better communication and familiarity with the area where your home is located."
  },
  {
    q: "What areas does Loudoun Decks serve?",
    a: "We serve Loudoun County, Fairfax County, and Prince William County in Northern Virginia."
  },
  {
    q: "Do you offer free consultations?",
    a: "Yes. We offer free consultations to discuss outdoor living projects and answer questions."
  },
  {
    q: "What types of projects do you handle?",
    a: "We build decks, resurface decks, and create patios, porches, and pergolas or gazebos."
  }
];

export default function WhyChooseFAQ({ withSchema = true }) {
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
      {withSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div className={styles.container}>
         <h2 className={styles.title}>Why Choose Loudoun Decks — FAQs</h2>
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
