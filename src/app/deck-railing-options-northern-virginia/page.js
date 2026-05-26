import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';

export const metadata = buildMetadata({
  path: '/deck-railing-options-northern-virginia',
  title: 'Deck Railing Options for Northern Virginia',
  description: 'Compare deck railing options: composite, aluminum, cable, glass, and wood. Prices from $30-$150/linear ft installed. Virginia code requirements included.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the most popular deck railing in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "Composite railings (Trex Signature, TimberTech) are the most popular they match composite decking, require zero maintenance, and meet all Virginia building codes. Aluminum is the second most popular for modern/clean aesthetics." } },
    { "@type": "Question", name: "How much do deck railings cost?", acceptedAnswer: { "@type": "Answer", text: "Deck railing costs in Northern Virginia: pressure-treated wood $20-$35/linear ft, composite $40-$70/linear ft, aluminum $35-$60/linear ft, cable rail $60-$100/linear ft, glass panel $80-$150/linear ft. For a typical 60 linear ft deck, railings add $2,000-$9,000." } },
    { "@type": "Question", name: "What is the Virginia building code for deck railings?", acceptedAnswer: { "@type": "Answer", text: "Virginia requires railings on any deck surface 30 inches or more above grade. Minimum railing height: 36 inches (42 inches if deck is more than 30 inches above grade in some jurisdictions). Baluster spacing: maximum 4 inches apart (no sphere larger than 4 inches can pass through)." } },
    { "@type": "Question", name: "Are cable railings allowed in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "Cable railings meet Virginia building code if cables are spaced no more than 3 inches apart and the system passes a 200-lb load test. However, some HOAs restrict cable railings for aesthetic reasons. We check your HOA guidelines before recommending cable rail." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, h3: { fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function DeckRailingPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/deck-railing-options-northern-virginia" name="Deck Railing Options for Northern Virginia" description="Compare deck railing options: composite, aluminum, cable, glass, and wood. Prices from $30-$150/linear ft installed. Virginia code requirements included." speakable />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img57.jpeg"
              alt="Premium deck railing options by LDN Decks in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>Deck Railing Options in Northern Virginia</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Compare styles, costs, and Virginia code requirements find the right railing for your deck</p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={S.h2}>Railing Options Compared</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Railing Type', 'Cost/linear ft', '60 ft Total', 'Maintenance', 'Look', 'HOA Friendly'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Pressure-treated wood', '$20–$35', '$1,200–$2,100', 'Stain every 1-2 yrs', 'Traditional', 'Yes'],
                  ['Composite (Trex/TimberTech)', '$40–$70', '$2,400–$4,200', 'None', 'Modern/traditional', 'Yes most popular'],
                  ['Aluminum', '$35–$60', '$2,100–$3,600', 'None', 'Clean, modern', 'Yes'],
                  ['Cable rail', '$60–$100', '$3,600–$6,000', 'Re-tension yearly', 'Modern, open view', 'Some restrict'],
                  ['Glass panel', '$80–$150', '$4,800–$9,000', 'Clean glass 2x/yr', 'Contemporary, unobstructed', 'Some restrict'],
                  ['Wrought iron', '$50–$80', '$3,000–$4,800', 'Paint every 3-5 yrs', 'Classic, ornate', 'Yes'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400, color: i === 1 && j === 0 ? 'var(--color-primary)' : 'inherit' }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>Our Top Picks</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { label: 'Best Overall', name: 'Trex Signature Aluminum', why: 'Slim profile, matches Trex decking perfectly, 25-yr warranty, zero maintenance. Available in Charcoal Black and Bronze.' },
              { label: 'Best Value', name: 'Trex Select Composite', why: 'Same durability as Signature at 30% lower cost. Great if you want railing to match your composite deck boards.' },
              { label: 'Best View', name: 'Cable Railing (Feeney/CableRail)', why: 'Maximizes view for hillside and elevated decks. Horizontal cables nearly invisible from 10+ feet. Premium look.' },
              { label: 'Best Premium', name: 'Glass Panel (aluminum frame)', why: 'Completely unobstructed view, windbreak effect, modern aesthetic. Best for second-story decks and pool surrounds.' },
            ].map((pick) => (
              <div key={pick.name} style={{ background: pick.label === 'Best Overall' ? '#fff3e0' : '#f9f9f9', border: pick.label === 'Best Overall' ? '2px solid var(--color-primary)' : '1px solid #eee', borderRadius: 8, padding: '1.25rem' }}>
                <p style={{ fontSize: '0.8rem', color: pick.label === 'Best Overall' ? 'var(--color-primary)' : '#888', fontWeight: 600, marginBottom: '0.25rem' }}>{pick.label}</p>
                <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>{pick.name}</h3>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6 }}>{pick.why}</p>
              </div>
            ))}
          </div>

          <h2 style={S.h2}>Virginia Building Code Requirements</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Railing required:</strong> On any deck surface 30 inches or more above grade</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Minimum height:</strong> 36 inches (some Fairfax County areas require 42 inches for decks over 30&quot; above grade)</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Baluster spacing:</strong> Maximum 4 inches apart (the &quot;4-inch sphere rule&quot; no child&apos;s head can pass through)</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Load rating:</strong> Must withstand 200 lbs of concentrated force at the top rail</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Graspable handrail:</strong> Required on all stairs 1.25&quot; to 2&quot; diameter, continuous. For tread, riser, stringer, and landing planning, see our <Link href="/education/deck-stair-construction-diagram" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck stair construction diagram</Link>.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Cable rail:</strong> Maximum 3&quot; spacing between cables, must pass 200-lb load test</li>
          </ul>
          <p style={S.p}><strong>HOA note:</strong> Many Northern Virginia HOAs have additional restrictions beyond building code specific railing profiles, colors, or style requirements. We check your HOA guidelines before recommending a railing system. <Link href="/hoa-deck-rules-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Read our HOA guide</Link>.</p>
          <p style={S.p}>On attached decks, railing and stair safety also depends on the structural connection at the house. Homeowners comparing repair or rebuild options should understand <Link href="/education/ledger-board-flashing-deck-attachment-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>ledger board flashing and deck attachment</Link> before approving a scope.</p>

          <h2 style={S.h2}>Choosing the Right Railing for Your Deck</h2>
          <h3 style={S.h3}>For a view deck (elevated, scenic lot)</h3>
          <p style={S.p}>Cable rail or glass panels. Both maximize the view and create a modern, open feeling. Cable is more affordable; glass blocks wind.</p>
          <h3 style={S.h3}>For a traditional home</h3>
          <p style={S.p}>Composite or aluminum railings in white, bronze, or black. Match the home&apos;s trim color. Trex Signature in Charcoal Black is our most-specified option for colonial and transitional homes.</p>
          <h3 style={S.h3}>For a pool surround</h3>
          <p style={S.p}>Glass panels (meet most pool barrier codes) or aluminum with self-closing gates. Check your county&apos;s pool fence requirements they&apos;re separate from deck railing codes.</p>
          <h3 style={S.h3}>For budget-conscious builds</h3>
          <p style={S.p}>Aluminum railings offer the best value for a modern, maintenance-free look. $35–$60/linear ft is significantly less than cable or glass, with zero upkeep.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {[
            { q: "What's the most popular railing in Northern Virginia?", a: "Composite (Trex Signature/TimberTech) matches decking, zero maintenance, HOA-friendly. Aluminum is second for modern looks." },
            { q: "How much do railings cost?", a: "Wood: $20-$35/ft. Composite: $40-$70/ft. Aluminum: $35-$60/ft. Cable: $60-$100/ft. Glass: $80-$150/ft. Typical 60ft deck: $2,000-$9,000." },
            { q: "What's the code for deck railings in Virginia?", a: "Required if 30\"+ above grade. Min height 36\" (42\" in some areas). Baluster spacing max 4\". Must withstand 200 lbs." },
            { q: "Are cable railings HOA-approved?", a: "They meet building code if properly spaced, but some HOAs restrict them. We check your guidelines first." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/services/trex-railings', 'Trex Railing Installation'],
              ['/education/deck-stair-construction-diagram', 'Deck Stair Construction Diagram'],
              ['/education/ledger-board-flashing-deck-attachment-virginia', 'Ledger Board Flashing and Deck Attachment'],
              ['/how-much-does-a-deck-cost-northern-virginia', 'How Much Does a Deck Cost?'],
              ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK'],
              ['/deck-lighting-ideas-northern-virginia', 'Deck Lighting Ideas'],
              ['/hoa-deck-rules-northern-virginia', 'HOA Deck Rules'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>

      <SimpleCTA title="See Railing Samples at Our Showroom" buttonText="Get Free Estimate" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <ContactHome />
    </>
  );
}
