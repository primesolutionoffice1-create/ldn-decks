import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HandCraftedDecks.module.css';

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={styles.checkIcon}>
    <rect width="24" height="24" rx="4" fill="var(--site-color, #E65C2B)" />
    <path d="M7 12.5L10.5 16L17 8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const cards = [
  {
    title: 'New Decks',
    description: 'Transform your outdoor living space with a custom-designed deck built to last.',
    image: '/homeimg1.webp',
    href: '/services/new-decks'
  },
  {
    title: 'Deck Resurfacing',
    description: 'Revitalize your old deck with premium materials, making it look brand new without the cost of a full rebuild.',
    image: '/homeimg2.webp',
    href: '/services/deck-resurfacing'
  },
  {
    title: 'Gazebo and\nPergola',
    description: 'Add functionality to your yard with a custom gazebo or pergola.',
    image: '/homeimg3.webp',
    href: '/services/gazebo-pergola'
  },
  {
    title: 'Custom\nPorches',
    description: 'Extend your living space with a beautiful, weather-protected screened-in porch.',
    image: '/images/img23.jpeg',
    href: '/services/porches'
  }
];

export default function HandCraftedDecks() {
  return (
    <section className={styles.section}>
      <Image 
        src="/showcase/img14.jpg"
        alt="Custom custom engineered deck project in Northern Virginia"
        fill
        style={{ objectFit: 'cover' }}
        sizes="100vw"
      />
      <div className={styles.bgOverlay}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Professional Deck Building & Design</h2>
          <div className={styles.checkmarks}>
            <span className={styles.checkItem}><CheckIcon /> Trex Platinum Partner</span>
            <span className={styles.checkItem}><CheckIcon /> Custom Deck Designer</span>
            <span className={styles.checkItem}><CheckIcon /> Licensed & Insured Contractor</span>
          </div>
        </div>

        <div className={styles.grid}>
          {cards.map((card, idx) => (
            <Link key={idx} href={card.href} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={card.image}
                  alt={card.title.replace('\n', ' ')}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>
                  {card.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < card.title.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
              </div>
              <div className={styles.hoverContent}>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
