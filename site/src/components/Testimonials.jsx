import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Testimonials.module.css';

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFC107" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
  </svg>
);

const testimonialsData = [
  {
    id: 1,
    name: "James R.",
    location: "Ashburn, VA",
    project: "Trex Composite Deck, 500 sqft",
    text: "Nick and his team built us a 500 sqft Trex Transcend deck in Ashburn, from permit to final walkthrough in under 3 weeks. Every neighbor has asked who did it. Honest pricing, zero surprises, and they left the yard cleaner than they found it.",
    image: "/showcase/img01.jpg"
  },
  {
    id: 2,
    name: "Maria & Tom S.",
    location: "Leesburg, VA",
    project: "Composite Deck + Screened Porch",
    text: "We got 4 quotes. Loudoun Decks wasn\u2019t the cheapest, but Nick came to the house, explained everything in detail, and showed us exactly why composite is worth it long-term. Two years later, our deck still looks brand new. Worth every penny.",
    image: "/showcase/img13.jpg"
  },
  {
    id: 3,
    name: "David K.",
    location: "South Riding, VA",
    project: "Deck Replacement + Railings",
    text: "They handled the HOA submission and Loudoun County permit themselves \u2014 I didn\u2019t lift a finger on the paperwork. Deck was done in 10 days. The Trex Calm Shell color we chose looks incredible against our siding.",
    image: "/showcase/img21.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.subtextWrapper}>
            <span className={styles.line}></span>
            <span className={styles.subtext}>Client Feedback</span>
            <span className={styles.line}></span>
          </div>
          <h2 className={styles.title}>What Our Clients Say</h2>
        </div>

        <div className={styles.cardsGrid}>
          {testimonialsData.map(t => (
            <div key={t.id} className={styles.card}>
              <div className={styles.quoteIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--site-color)" opacity="0.2">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              <div className={styles.stars}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <p className={styles.reviewText}>&quot;{t.text}&quot;</p>
              
              <div className={styles.clientProfile}>
                <div className={styles.avatarWrapper}>
                  <Image src={t.image} alt={`${t.project} — ${t.location}`} fill className={styles.avatar} sizes="65px" />
                </div>
                <div className={styles.clientInfo}>
                  <h4>{t.name}</h4>
                  <span>{t.location} &middot; {t.project}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.reviewsCta}>
          <Link href="/reviews" className={styles.reviewsButton}>
            Read All 41 Google Reviews &rarr;
          </Link>
          <a
            href="https://www.google.com/maps/place/Loudoun+Decks/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.googleLink}
          >
            View on Google Maps &#8599;
          </a>
        </div>
      </div>
    </section>
  );
}
