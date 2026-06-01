import React from 'react';
import Link from 'next/link';
import styles from './HomeQuickLinks.module.css';
import { BUSINESS } from '@/lib/business';

const links = [
  {
    href: '/get-estimate',
    title: 'Request a Deck Estimate',
    desc: 'Share your deck, repair, porch, or replacement project.',
  },
  {
    href: '/deck-repair-loudoun-county',
    title: 'Deck Repair Near Me',
    desc: 'Structural repairs, unsafe stairs, resurfacing, and inspections.',
  },
  {
    href: '/deck-cost-calculator',
    title: 'Deck Cost Calculator',
    desc: 'Estimate project size, material tier, and budget range.',
  },
  {
    href: '/deck-financing',
    title: 'Deck Financing Options',
    desc: 'Ask about current options for new decks, resurfacing, repair, and composite upgrades.',
  },
  {
    href: '/deck-builder-northern-virginia',
    title: 'Deck Builder Northern Virginia',
    desc: 'Custom decks, permits and HOA-ready planning across NoVA.',
  },
  {
    href: '/composite-decks',
    title: 'Composite Deck Builder',
    desc: 'Trex, TimberTech and AZEK decks for NoVA homes.',
  },
  {
    href: '/services/deck-replacement',
    title: 'Deck Replacement',
    desc: 'Tear-down, resurfacing and wood-to-composite upgrades.',
  },
  {
    href: '/before-and-after',
    title: 'Before & After',
    desc: 'See real deck transformations with costs and timelines.',
  },
  {
    href: '/composite-deck-cost-northern-virginia',
    title: 'Composite Deck Pricing',
    desc: '2026 cost guide — Trex, TimberTech & AZEK compared.',
  },
  {
    href: '/reviews',
    title: `${BUSINESS.aggregateRating.reviewCount}+ Google Reviews`,
    desc: 'Read what Northern Virginia homeowners say about us.',
  },
  {
    href: '/areas-we-serve',
    title: 'Areas We Serve',
    desc: '70+ cities across Loudoun, Fairfax & Prince William.',
  },
  {
    href: '/screened-porch-builder-northern-virginia',
    title: 'Screened Porch Builder',
    desc: 'Cost, timeline and design guidance for porch projects.',
  },
  {
    href: '/deck-builder-ashburn-va',
    title: 'Deck Builder in Ashburn',
    desc: 'Composite deck replacements and HOA-ready plans in Ashburn.',
  },
  {
    href: '/deck-builder-leesburg-va',
    title: 'Deck Builder in Leesburg',
    desc: 'Decks, porches and outdoor living projects in Leesburg.',
  },
  {
    href: '/deck-builder-herndon-va',
    title: 'Deck Builder in Herndon',
    desc: 'Replacement decks and composite upgrades near Herndon.',
  },
  {
    href: '/deck-builder-reston-va',
    title: 'Deck Builder in Reston',
    desc: 'Low-maintenance decks for Reston homes and townhomes.',
  },
  {
    href: '/deck-builder-mclean-va',
    title: 'Deck Builder in McLean',
    desc: 'Premium composite decks for high-end McLean properties.',
  },
  {
    href: '/deck-builder-vienna-va',
    title: 'Deck Builder in Vienna',
    desc: 'Town of Vienna deck planning, permits and construction.',
  },
  {
    href: '/team',
    title: 'Meet Our Team',
    desc: '10+ years of deck building expertise in NoVA.',
  },
  {
    href: '/press',
    title: 'Press & Company News',
    desc: 'Company updates, citations and local authority signals.',
  },
  {
    href: '/social',
    title: 'Social Proof & Profiles',
    desc: 'Verified profiles, reviews and third-party trust links.',
  },
];

export default function HomeQuickLinks() {
  return (
    <section style={{ padding: '4rem 0', background: '#f9f9f9' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, textAlign: 'center', marginBottom: '0.5rem' }}>
          Plan Your Deck Project
        </h2>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '2.5rem', fontSize: '1rem' }}>
          Fast paths for estimates, repairs, costs, permits, reviews, and local deck builder pages.
        </p>
        <div className={styles.grid}>
          {links.map(({ href, title, desc }) => (
            <Link
              key={href}
              href={href}
              className={styles.card}
            >
              <h3 className={styles.title}>
                {title}
              </h3>
              <p className={styles.desc}>
                {desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
