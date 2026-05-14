"use client";
import React, { useState } from 'react';
import styles from './FAQCategorized.module.css';

const faqData = [
  {
    category: "About Loudoun Decks",
    items: [
      {
        q: "What type of company is Loudoun Decks?",
        a: "Loudoun Decks is a local outdoor living company specializing in deck construction and related outdoor projects for residential properties."
      },
      {
        q: "Where is Loudoun Decks located?",
        a: "We are based in Centreville, Virginia, and serve homeowners throughout Northern Virginia."
      },
      {
        q: "What areas do you serve?",
        a: "We serve Loudoun County, Fairfax County, and Prince William County."
      }
    ]
  },
  {
    category: "Deck & Outdoor Living Services",
    items: [
      {
        q: "What services do you offer?",
        a: "We provide custom deck construction, deck resurfacing, patios, porches, and pergolas or gazebos."
      },
      {
        q: "Do you only work on residential properties?",
        a: "Yes. Loudoun Decks focuses on residential outdoor living projects."
      },
      {
        q: "Can you help with updating an existing deck?",
        a: "Yes. We offer deck resurfacing for homeowners looking to update or improve an existing deck."
      }
    ]
  },
  {
    category: "Our Process",
    items: [
      {
        q: "How do I get started with a project?",
        a: "You can start by contacting us to request a free consultation."
      },
      {
        q: "Do you offer free consultations?",
        a: "Yes. We offer free consultations to discuss your outdoor living project and answer questions."
      },
      {
        q: "What happens during the consultation?",
        a: "We discuss your ideas, review your outdoor space, and talk through potential next steps."
      }
    ]
  },
  {
    category: "Project Planning Questions",
    items: [
      {
        q: "Do you visit the property before starting a project?",
        a: "Yes. An on‑site visit allows us to better understand the space and project requirements."
      },
      {
        q: "How do you help homeowners plan their projects?",
        a: "We focus on clear communication and planning so homeowners understand the scope of work before construction begins."
      },
      {
        q: "Do you help homeowners understand next steps?",
        a: "Yes. We explain the process and what to expect before moving forward."
      }
    ]
  },
  {
    category: "Service Area Questions",
    items: [
      {
        q: "Do you work throughout Northern Virginia?",
        a: "Yes. We work with homeowners in Loudoun County, Fairfax County, and Prince William County."
      },
      {
        q: "Do you serve cities like Ashburn or Leesburg?",
        a: "Yes. We regularly work in cities such as Ashburn, Leesburg, Sterling, Centreville, Reston, Woodbridge, and Manassas."
      }
    ]
  },
  {
    category: "Estimates & Contact",
    items: [
      {
        q: "How can I contact Loudoun Decks?",
        a: "You can contact us by phone, email, or through the contact form on our website."
      },
      {
        q: "Do you provide free estimates?",
        a: "Yes. We provide free consultations and estimates for homeowners in our service area."
      },
      {
        q: "Is there an obligation to move forward after contacting you?",
        a: "No. Contacting us is simply a way to get information and discuss your project."
      }
    ]
  }
];

export default function FAQCategorized({ withSchema = true }) {
  const [openStates, setOpenStates] = useState({});

  const toggleAccordion = (catIdx, itemIdx) => {
    const key = `${catIdx}-${itemIdx}`;
    setOpenStates(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.flatMap(cat =>
      cat.items.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": { "@type": "Answer", "text": item.a },
      }))
    ),
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
