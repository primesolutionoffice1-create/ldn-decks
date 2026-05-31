"use client";

import Link from 'next/link';
import CallLink, { BUSINESS_PHONE_DISPLAY } from '@/components/CallLink';

export default function FinancingCTA({
  title = 'Need financing for your deck project?',
  body = 'Ask us about current financing options for eligible new decks, resurfacing, repair, and composite decking upgrades. Subject to approval. Terms may vary.',
}) {
  return (
    <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '3rem 0' }}>
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.25rem', alignItems: 'center' }}>
        <div>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 0.6rem' }}>
            Deck Financing
          </p>
          <h2 style={{ fontSize: 'clamp(1.55rem, 3vw, 2rem)', lineHeight: 1.15, fontWeight: 900, margin: '0 0 0.6rem' }}>
            {title}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.65, margin: 0, maxWidth: 680 }}>
            {body}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          <Link href="/deck-financing" style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.9rem 1.1rem', borderRadius: 8, fontWeight: 800, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Check Financing Options
          </Link>
          <CallLink style={{ background: '#fff', color: 'var(--color-dark)', padding: '0.9rem 1.1rem', borderRadius: 8, fontWeight: 800, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Call {BUSINESS_PHONE_DISPLAY}
          </CallLink>
        </div>
      </div>
    </section>
  );
}
