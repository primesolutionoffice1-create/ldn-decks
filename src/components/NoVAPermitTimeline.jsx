import React from 'react';
import Link from 'next/link';

// Information Gain section — surfaces verified NoVA permit timelines and fees
// alongside primary-source guide links. Built per BEAST plan §9: passage-level
// chunks for AI Overview extraction, each H3 reads as a standalone answer.
const jurisdictions = [
  {
    name: 'Loudoun County',
    timeline: '2–4 weeks',
    fee: '$150–$500',
    portal: 'LOLA online portal',
    note: 'Decks over 256 sqft, attached to a house, or more than 16.5″ above grade require a permit. Plan review runs faster in winter, slower at spring peak.',
    href: '/deck-permit-loudoun-county-virginia',
  },
  {
    name: 'Fairfax County',
    timeline: '3–5 weeks',
    fee: '$200–$650',
    portal: 'PLUS / Building Development Division',
    note: 'The most documentation-heavy jurisdiction in NoVA. Sealed structural drawings, ledger bolt schedules and footing depths required up front.',
    href: '/deck-permit-fairfax-county-virginia',
  },
  {
    name: 'City of Fairfax',
    timeline: '2–3 weeks',
    fee: '$150–$450',
    portal: 'City Building Department',
    note: 'Independent jurisdiction from Fairfax County. Smaller queue, faster revision cycles. Verify which department covers your parcel before drawing plans.',
    href: '/deck-builder-fairfax-va',
  },
  {
    name: 'Prince William County',
    timeline: '2–4 weeks',
    fee: '$150–$525',
    portal: 'ePortal',
    note: 'Decks attached to a single-family home require a permit regardless of size. Setback rules vary by zoning district.',
    href: '/deck-permit-prince-william-county-virginia',
  },
];

export default function NoVAPermitTimeline() {
  return (
    <section
      style={{ padding: '3.5rem 1.5rem', background: '#fafafa', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}
      aria-labelledby="nova-permit-timeline"
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>
            Permit timelines &amp; fees, 2026
          </p>
          <h2 id="nova-permit-timeline" style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '0.6rem' }} data-speakable>
            How long does a deck permit take in Northern Virginia?
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#444', maxWidth: 800 }}>
            Plan review timing and fees in the four NoVA jurisdictions we file in every week. Numbers reflect current 2026 residential deck-permit queues — we update this table when county fee schedules change. Loudoun Decks handles every submission for our clients; you never log into a county portal.
          </p>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem', background: '#fff', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <thead>
              <tr style={{ background: '#f0efea' }}>
                <th style={{ padding: '0.85rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Jurisdiction</th>
                <th style={{ padding: '0.85rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Plan review</th>
                <th style={{ padding: '0.85rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Permit fee</th>
                <th style={{ padding: '0.85rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Submission</th>
                <th style={{ padding: '0.85rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {jurisdictions.map((j, i) => (
                <tr key={j.name} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                  <td style={{ padding: '0.85rem', borderBottom: '1px solid #eee', fontWeight: 600 }}>
                    <Link href={j.href} style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>{j.name}</Link>
                  </td>
                  <td style={{ padding: '0.85rem', borderBottom: '1px solid #eee' }}>{j.timeline}</td>
                  <td style={{ padding: '0.85rem', borderBottom: '1px solid #eee' }}>{j.fee}</td>
                  <td style={{ padding: '0.85rem', borderBottom: '1px solid #eee' }}>{j.portal}</td>
                  <td style={{ padding: '0.85rem', borderBottom: '1px solid #eee', color: '#555', lineHeight: 1.55 }}>{j.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ marginTop: '1.25rem', fontSize: '0.82rem', color: '#888', fontStyle: 'italic' }}>
          Sources: Loudoun County Department of Building and Development (LOLA portal), Fairfax County Building Development Division (PLUS), City of Fairfax Building Department, Prince William County Office of Building Development. Fees vary with project valuation; ranges reflect typical residential deck builds of 250–550 sqft.
        </p>
      </div>
    </section>
  );
}
