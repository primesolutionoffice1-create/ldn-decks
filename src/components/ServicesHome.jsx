'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ServicesHome.module.css';
import CallLink from '@/components/CallLink';

const servicesData = [
  {
    id: 1,
    title: 'Custom Deck Builder',
    description: 'Transform your backyard with a custom-designed deck using Trex, TimberTech, wood, or PVC materials matched to your budget, HOA rules, and maintenance goals.',
    image: '/images/img58.jpeg',
    link: '/services/new-decks'
  },
  {
    id: 2,
    title: 'Deck Resurfacing',
    description: 'Premium wood-to-composite resurfacing for structurally sound frames. Full surface conversions start from $15k with boards, railings, fascia, and safety review.',
    image: '/showcase/img04.jpg',
    link: '/services/deck-resurfacing'
  },
  {
    id: 3,
    title: 'Patio Contractor Services',
    description: 'Professional bluestone and paver patio installation. We create durable, beautiful ground-level outdoor living spaces that last a lifetime.',
    image: '/homeimg4.webp',
    link: '/services/patios'
  }
];

export default function ServicesHome() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.bgTop}></div>
      <div className={styles.bgBottom}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <div className={styles.subtextWrapper}>
              <span className={styles.subtext}>What We&apos;re Offering</span>
              <span className={styles.line}></span>
            </div>
            <h2 className={styles.title}>Everything Your Outdoor<br /> Space Needs</h2>
          </div>
          <div className={styles.descArea}>
            <p>From ground-up deck construction to full outdoor living spaces, every project is custom-designed for your home with permit planning, material guidance, and written workmanship terms.</p>
          </div>
        </div>
        <div className={styles.cardsGrid}>
          {servicesData.map(service => (
            <Link key={service.id} href={service.link} className={styles.card}>
              <div className={styles.imgWrapper}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={styles.cardImg}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={styles.cardContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.btnWrapper} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <CallLink className={styles.ctaButton}>
            Call To Discuss Properties
          </CallLink>
          <Link
            href="/services"
            className={styles.ctaButton}
            style={{ backgroundColor: 'transparent', border: '2px solid var(--site-color)', color: 'var(--site-color)' }}
          >
            More Services
          </Link>
        </div>
      </div>
    </section>
  );
}
