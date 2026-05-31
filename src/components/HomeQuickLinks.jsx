"use client";
import React from 'react';
import Link from 'next/link';

const links = [
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
    title: '41+ Five-Star Reviews',
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
    desc: 'Targeted page for screened porch builder searches.',
  },
  {
    href: '/team',
    title: 'Meet Our Team',
    desc: '10+ years of deck building expertise in NoVA.',
  },
  {
    href: '/deck-cost-calculator',
    title: 'Instant Cost Calculator',
    desc: 'Get a ballpark estimate in 60 seconds.',
  },
  {
    href: '/deck-financing',
    title: 'Deck Financing Options',
    desc: 'Build now, pay over time. Subject to approval.',
  },
];

export default function HomeQuickLinks() {
  return (
    <section style={{ padding: '4rem 0', background: '#f9f9f9' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, textAlign: 'center', marginBottom: '0.5rem' }}>
          Explore Loudoun Decks
        </h2>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '2.5rem', fontSize: '1rem' }}>
          Everything you need to plan your deck project in Northern Virginia
        </p>
        <div className="quick-links-grid">
          {links.map(({ href, title, desc }) => (
            <Link
              key={href}
              href={href}
              className="quick-link-card"
            >
              <h3 className="quick-link-title">
                {title}
              </h3>
              <p className="quick-link-desc">
                {desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <style jsx>{`
        .quick-links-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.25rem;
        }
        @media (min-width: 768px) {
          .quick-links-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .quick-links-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .quick-link-card {
          display: block;
          background: #fff;
          border-radius: 10px;
          padding: 1.5rem;
          text-decoration: none;
          color: inherit;
          border: 1px solid #e5e5e5;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .quick-link-card:hover {
          border-color: var(--color-primary);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .quick-link-title {
          font-size: 1.05rem;
          font-weight: 600;
          margin-bottom: 0.4rem;
          color: var(--color-dark);
        }
        .quick-link-desc {
          font-size: 0.85rem;
          color: #666;
          line-height: 1.5;
          margin: 0;
        }
      `}</style>
    </section>
  );
}
