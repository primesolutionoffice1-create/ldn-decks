"use client";
import React, { useState } from 'react';
import styles from './FAQ.module.css';

const faqsData = [
  {
    question: "How long does it typically take to build a new deck in Northern Virginia?",
    answer: "The timeline depends on the size and complexity of the deck, as well as weather conditions. On average, a standard deck builder project in Northern Virginia takes about 1 to 2 weeks from the day construction begins. We always provide a clear timeline during our consultation."
  },
  {
    question: "Do I need a permit to build a deck or fence?",
    answer: "In most counties like Fairfax and Loudoun, yes. But don't worry—LDN Decks handles the entire permitting and HOA approval process for you. We ensure all plans are compliant with local Virginia building codes."
  },
  {
    question: "What decking materials do you recommend for longevity?",
    answer: "As a Trex Platinum Partner, we highly recommend composite or PVC decking for maximum durability and zero maintenance. These materials are perfect for the humid Virginia climate and come with 25-50 year warranties."
  },
  {
    question: "Can you resurface my existing deck instead of replacing it?",
    answer: "Absolutely! As a leading deck contractor, we often resurface sound frames to save homeowners up to 40% on costs. We remove old surface boards and replace them with premium Trex or TimberTech composite."
  },
  {
    question: "What is the average cost to build a deck in NoVA?",
    answer: "Deck building costs in Northern Virginia typically range from $15,000 to $45,000 depending on size and materials. We provide free, itemized estimates within 24 hours to give you an exact price for your specific vision."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Open first one by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer },
    })),
  };

  return (
    <section className={styles.faqSection}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.subtextWrapper}>
            <span className={styles.line}></span>
            <span className={styles.subtext}>Find Your Answers</span>
            <span className={styles.line}></span>
          </div>
          <h2 className={styles.title}>Frequently Asked<br /> Questions</h2>
        </div>

        <div className={styles.accordionContainer}>
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}
              >
                <div
                  className={styles.questionBlock}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3>{faq.question}</h3>
                  <button className={styles.iconButton} aria-label="Toggle answer">
                    {isOpen ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    )}
                  </button>
                </div>

                <div
                  className={styles.answerBlock}
                  style={{ maxHeight: isOpen ? '250px' : '0px' }}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
