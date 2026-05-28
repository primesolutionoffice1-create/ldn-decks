import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Surfaces a named project lead on commercial service pages.
// AI Overviews extract named-provider snippets when they exist; Person schema is
// emitted once globally from TeamGrid so this byline references that @id only.
//
// lastUpdated: optional freshness signal (e.g. "May 2026"). When present,
// renders a small "Last reviewed/updated" line for AI citation confidence.
export default function NamedAuthor({ context = 'Northern Virginia', lastUpdated = null }) {
  return (
    <aside
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        background: '#f8f8f6',
        border: '1px solid #ececec',
        borderRadius: 8,
        padding: '1rem 1.25rem',
        marginBottom: '2rem',
      }}
      itemScope
      itemType="https://schema.org/Person"
      itemID="https://ldndecks.com/#founder"
    >
      <div style={{ position: 'relative', width: 64, height: 64, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
        <Image
          src="/team/Nick.jpg"
          alt="Nick — Owner, Loudoun Decks"
          fill
          sizes="64px"
          style={{ objectFit: 'cover' }}
          itemProp="image"
        />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ margin: 0, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#888', fontWeight: 600 }}>
          Project Lead
        </p>
        <p style={{ margin: '0.15rem 0 0.25rem', fontSize: '1rem', fontWeight: 700 }}>
          <span itemProp="name">Nick</span>
          {' — '}
          <span style={{ fontWeight: 500, color: '#555' }} itemProp="jobTitle">Owner &amp; Lead Designer, Loudoun Decks</span>
        </p>
        <p style={{ margin: 0, fontSize: '0.85rem', color: '#555', lineHeight: 1.55 }} itemProp="description">
          Virginia Class A Licensed Contractor. Trex Platinum Partner and TimberTech Certified Installer.
          10+ years building custom composite decks in {context}. {' '}
          <Link href="/team" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Meet the team</Link>
        </p>
        {lastUpdated && (
          <p style={{ margin: '0.4rem 0 0', fontSize: '0.75rem', color: '#888', fontStyle: 'italic' }}>
            Last reviewed / updated: <time dateTime={lastUpdated}>{lastUpdated}</time>
          </p>
        )}
      </div>
    </aside>
  );
}
