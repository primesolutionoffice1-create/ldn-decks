import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Testimonials.module.css';

const reviewProfiles = [
  {
    id: 1,
    name: "Google Business Profile",
    detail: "Public Google review profile. Verify current count, rating, and review text directly on Google Maps.",
    href: "https://www.google.com/maps/place/Loudoun+Decks/",
    image: "/images/img01.jpeg"
  },
  {
    id: 2,
    name: "BBB Business Profile",
    detail: "Verify current accreditation, rating, licensing references, and profile details directly on bbb.org.",
    href: "https://www.bbb.org/us/va/centreville/profile/deck-builder/loudoun-decks-0241-236091241",
    image: "/images/img13.jpeg"
  },
  {
    id: 3,
    name: "Houzz Portfolio",
    detail: "Review public portfolio details, photos, and profile information on the Houzz listing.",
    href: "https://www.houzz.com/pro/webuser-782541997/loudoun-decks",
    image: "/images/img21.jpeg"
  }
];

export default function Testimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.subtextWrapper}>
            <span className={styles.line}></span>
            <span className={styles.subtext}>Public Reputation</span>
            <span className={styles.line}></span>
          </div>
          <h2 className={styles.title}>Verify Loudoun Decks Reviews at the Source</h2>
        </div>

        <div className={styles.cardsGrid}>
          {reviewProfiles.map(t => (
            <div key={t.id} className={styles.card}>
              <div className={styles.quoteIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--site-color)" opacity="0.2">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              <div className={styles.stars}>Public profile</div>
              <p className={styles.reviewText}>{t.detail}</p>
              
              <div className={styles.clientProfile}>
                <div className={styles.avatarWrapper}>
                  <Image src={t.image} alt={`${t.name} verification resource for Loudoun Decks`} fill className={styles.avatar} sizes="65px" />
                </div>
                <div className={styles.clientInfo}>
                  <h4>{t.name}</h4>
                  <a href={t.href} target="_blank" rel="noopener noreferrer">Open public profile &#8599;</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.reviewsCta}>
          <Link href="/reviews" className={styles.reviewsButton}>
            Verify Public Review Profiles &rarr;
          </Link>
          <Link href="/review" className={styles.googleLink}>
            Google Review Guidance &rarr;
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
