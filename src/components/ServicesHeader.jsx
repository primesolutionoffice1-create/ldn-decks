'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './ServicesHeader.module.css';
import CallLink from '@/components/CallLink';
import MobileProofStrip from '@/components/MobileProofStrip';

function showsDeckPlanningFacts(pathname = '') {
  return /deck|trex|timbertech|porch|pergola|patio|gazebo|outdoor-living|composite|fiberon|azek|railing/i.test(pathname)
    || pathname.startsWith('/near-you');
}

export default function ServicesHeader({
  subtext = "What We DO",
  title = "Deck & Outdoor Living Services",
  description = "Loudoun Decks provides residential deck and outdoor living services for homeowners in Loudoun County, Fairfax County, and Prince William County. Our focus is on planning and building outdoor spaces that fit each home and lifestyle.",
  estimateHref = "/get-estimate",
}) {
  const pathname = usePathname() || '';
  return (
    <section className={styles.headerSection}>
      <div className={styles.container}>
        <div className={styles.subtextWrapper}>
          <span className={styles.subtext}>{subtext}</span>
          <span className={styles.line}></span>
        </div>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.ctaWrapper}>
          <Link
            href={estimateHref}
            className={styles.ctaPrimary}
            aria-label="Get a free estimate"
          >
            Get a Free Estimate
          </Link>
          <CallLink
            className={styles.ctaSecondary}
            aria-label="Call Loudoun Decks"
          >
            Call (571) 655-7207
          </CallLink>
        </div>
      </div>
      {showsDeckPlanningFacts(pathname) ? <MobileProofStrip /> : null}
      <div className={styles.container}>
        <p className={styles.description}>{description}</p>
        <p className={styles.trustText}>Free estimate &bull; No obligation &bull; Permit-ready planning</p>
      </div>
    </section>
  );
}
