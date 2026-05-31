import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';

export const metadata = buildMetadata({
  path: '/what-size-deck-should-i-build',
  title: 'What Size Deck Should I Build? (Guide by Use + Budget)',
  description: 'Deck size guide: 150-200 sqft for couples, 300-400 for families, 500+ for entertaining. Recommendations by use and Northern Virginia lot sizes.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the average deck size?", acceptedAnswer: { "@type": "Answer", text: "The average deck in Northern Virginia is 300-400 square feet. This fits a dining table for 6, a grill zone, and a seating area comfortably. Smaller decks (150-200 sqft) work for couples. Larger decks (500+ sqft) are common for families who entertain frequently." } },
    { "@type": "Question", name: "How big should my deck be for a dining table?", acceptedAnswer: { "@type": "Answer", text: "Allow 12x12 feet (144 sqft) minimum for a 6-person dining table with chairs and walking room. For 8 people, plan 12x14 (168 sqft). Always add 3-4 feet around the table for comfortable chair pull-out." } },
    { "@type": "Question", name: "How much of my yard should a deck take up?", acceptedAnswer: { "@type": "Answer", text: "A good rule: the deck should not exceed 20-25% of your total backyard area. In most Northern Virginia neighborhoods, this means 300-500 sqft on a typical quarter-acre lot. Check your county's lot coverage limits and HOA setback requirements." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function DeckSizePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/what-size-deck-should-i-build" name="What Size Deck Should I Build? (Guide by Use + Budget)" description="Deck size guide: 150-200 sqft for couples, 300-400 for families, 500+ for entertaining. Recommendations by use and Northern Virginia lot sizes." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>What Size Deck Should I Build?</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Size recommendations by use case, household size, and Northern Virginia lot constraints</p>
        </div>
      </section>
      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p><strong>Couples:</strong> 150–200 sqft. <strong>Families of 4:</strong> 300–400 sqft. <strong>Entertainers:</strong> 500+ sqft. The average Northern Virginia deck is 300–400 sqft. Don&apos;t exceed 20–25% of your backyard area.</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img26.jpeg"
              alt="Planning the perfect deck size for a Northern Virginia home"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>
          <h2 style={S.h2}>The 20% Rule Finding Your Perfect Deck Size</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Use Case', 'Min Size', 'Recommended', 'What Fits'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Bistro/couples retreat', '100 sqft (10x10)', '150–200 sqft', '2 chairs + small table + planter'],
                  ['Grill zone only', '80 sqft (8x10)', '120–160 sqft', 'Grill + prep counter + 2 stools'],
                  ['Family dining (4-6)', '150 sqft (12x12)', '250–300 sqft', 'Dining table + grill zone + walking space'],
                  ['Family dining (6-8) + grill', '250 sqft (12x20)', '300–400 sqft', 'Large table + grill + seating nook'],
                  ['Full entertaining space', '400 sqft (16x25)', '500–600 sqft', 'Dining + lounge + grill + bar area'],
                  ['Multi-level (dining + lounge)', '400 sqft min', '500–700 sqft', 'Upper dining, lower lounge, stairs between'],
                  ['Deck + screened porch combo', '400 sqft total', '500–700 sqft', 'Open deck (300) + porch (200-400)'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>Space Needed for Common Furniture</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Item', 'Space Required', 'Notes'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Dining table (6 people)', '10x10 ft (100 sqft)', 'Include 3-4 ft around table for chairs'],
                  ['Grill station', '6x4 ft (24 sqft)', 'Plus 3 ft clearance from railings/walls'],
                  ['Lounge set (sofa + 2 chairs)', '10x8 ft (80 sqft)', 'Coffee table in center'],
                  ['Adirondack chairs (2)', '6x4 ft (24 sqft)', 'Plus side table'],
                  ['Hot tub', '10x10 ft (100 sqft)', 'Reinforced framing required tell us early'],
                  ['Fire pit (portable)', '8x8 ft (64 sqft)', 'Clearance from railings and roof'],
                  ['Bar/counter seating (4)', '8x3 ft (24 sqft)', 'Often built into railing or island'],
                  ['Walking path', '3 ft wide minimum', 'Main traffic lanes around furniture'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>Northern Virginia Lot Constraints</h2>
          <p style={S.p}><strong>Setback requirements:</strong> Loudoun County typically requires 25–35 ft from rear property line and 10–15 ft from sides. Fairfax County varies by zoning district. This limits maximum deck size on smaller lots.</p>
          <p style={S.p}><strong>Lot coverage limits:</strong> Most NoVA jurisdictions limit total impervious surface (house + driveway + deck + patio) to 30–50% of lot area. Your deck counts toward this.</p>
          <p style={S.p}><strong>HOA restrictions:</strong> Some communities limit deck size as a percentage of the home&apos;s footprint or impose maximum dimensions. <Link href="/hoa-deck-rules-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Check our HOA guide</Link>.</p>
          <p style={S.p}><strong>Our recommendation:</strong> The deck should complement your yard, not consume it. Aim for 20–25% of your total backyard area. On a typical NoVA quarter-acre lot, that&apos;s 300–500 sqft.</p>

          <h2 style={S.h2}>Cost by Deck Size</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Size', 'PT Wood', 'Trex Transcend', 'TimberTech AZEK'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['150 sqft', '$3k–$5k', '$7k–$10k', '$8k–$12k'],
                  ['250 sqft', '$5k–$9k', '$11k–$16k', '$13k–$19k'],
                  ['350 sqft', '$7k–$12k', '$16k–$23k', '$18k–$26k'],
                  ['500 sqft', '$9k–$18k', '$23k–$33k', '$25k–$38k'],
                  ['700 sqft (multi-level)', '$13k–$25k', '$32k–$46k', '$35k–$53k'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#888', fontStyle: 'italic' }}>Includes materials, labor, standard railings, basic stairs. <Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)' }}>Full pricing guide →</Link></p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "What's the average deck size?", a: "300-400 sqft in Northern Virginia. Fits dining for 6, grill, and seating." },
            { q: "How big for a dining table?", a: "12x12 ft (144 sqft) minimum for 6 people. 12x14 for 8. Add 3-4 ft around table for chairs." },
            { q: "How much yard should a deck use?", a: "20-25% of your backyard. On a typical NoVA quarter-acre: 300-500 sqft." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/composite-deck-cost-northern-virginia', 'Deck Cost Guide'],
              ['/deck-vs-patio-which-is-right', 'Deck vs Patio'],
              ['/hoa-deck-rules-northern-virginia', 'HOA Rules'],
              ['/how-long-to-build-a-deck-northern-virginia', 'Build Timeline'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (Google reviews) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
          </ul>
        </div>
      </article>
      <SimpleCTA title="Let's Design Your Perfect Size Deck" buttonText="Get Free Estimate" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <RelatedGuides currentPath="/what-size-deck-should-i-build" />

      <ContactHome />
    </>
  );
}
