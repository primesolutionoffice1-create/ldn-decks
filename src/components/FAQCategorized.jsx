"use client";
import React, { useState } from 'react';
import JsonLd from './JsonLd';
import styles from './FAQCategorized.module.css';
import { buildFAQSchema, publicFaqCategories } from '@/lib/faqSchema';

const faqData = publicFaqCategories;

export default function FAQCategorized({ withSchema = true }) {
  const [openStates, setOpenStates] = useState({});

  const toggleAccordion = (catIdx, itemIdx) => {
    const key = `${catIdx}-${itemIdx}`;
    setOpenStates(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const faqSchema = buildFAQSchema();

  return (
    <section className={styles.faqSection}>
      {withSchema && <JsonLd data={faqSchema} />}
      <div className={styles.container}>
        {faqData.map((cat, catIdx) => (
          <div key={catIdx} className={styles.categoryRow}>
            {/* Part 1: Section Title */}
            <div className={styles.categorySide}>
              <h2 className={styles.categoryTitle}>{cat.category}</h2>
              <div className={styles.categoryLine}></div>
            </div>

            {/* Part 2: Accordions */}
            <div className={styles.faqMain}>
              <div className={styles.accordionContainer}>
                {cat.items.map((item, itemIdx) => {
                  const isOpen = openStates[`${catIdx}-${itemIdx}`];
                  return (
                    <div key={itemIdx} className={styles.accordionItem}>
                      <button
                        className={styles.accordionBtn}
                        onClick={() => toggleAccordion(catIdx, itemIdx)}
                      >
                        <span className={styles.questionText}>{item.q}</span>
                        <span className={styles.icon}>
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      <div 
                        className={`${styles.accordionContent} ${isOpen ? styles.open : ''}`}
                      >
                        <div className={styles.answerText}>{item.a}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
