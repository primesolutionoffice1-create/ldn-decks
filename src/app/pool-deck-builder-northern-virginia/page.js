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
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/pool-deck-builder-northern-virginia',
  title: 'Pool Deck Builder in Northern Virginia | Composite & Paver Pool Decks',
  description: 'Custom pool decks NoVA: composite ($35-$75/sqft), pavers ($25-$50/sqft), stamped concrete ($15-$30/sqft). Code-compliant. Free estimate.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a pool deck cost in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "Pool deck costs in Northern Virginia: composite decking $35-$75/sqft, paver patios $25-$50/sqft, stamped concrete $15-$30/sqft. A typical 400-600 sqft pool deck runs $15,000-$45,000 depending on material and complexity." } },
    { "@type": "Question", name: "What is the best material for a pool deck?", acceptedAnswer: { "@type": "Answer", text: "For barefoot comfort and heat: pavers or light-colored composite (Trex Transcend or TimberTech AZEK stay 20-30°F cooler). For budget: stamped concrete. Avoid dark-colored materials they absorb heat and become uncomfortable in Virginia summers." } },
    { "@type": "Question", name: "Do I need a fence around my pool deck in Virginia?", acceptedAnswer: { "@type": "Answer", text: "Yes. Virginia building code requires a barrier (fence, wall, or approved railing) at least 48 inches high around all residential pools. Gates must be self-closing and self-latching. Your pool deck design must incorporate code-compliant barriers." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function PoolDeckPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/pool-deck-builder-northern-virginia" name="Pool Deck Builder in Northern Virginia | Composite &amp; Paver Pool Decks" description="Custom pool decks NoVA: composite ($35-$75/sqft), pavers ($25-$50/sqft), stamped concrete ($15-$30/sqft). Code-compliant. Free estimate." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img56.jpeg"
              alt="Premium custom pool deck built by LDN Decks in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>Pool Deck Builder in Northern Virginia</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Custom pool decks: composite, pavers, and stamped concrete heat-resistant, code-compliant, built to last</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
          </div>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={S.h2}>Pool Deck Materials Compared</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Material', 'Cost/sqft', '500 sqft Total', 'Heat', 'Slip Resistance', 'Maintenance'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Pavers (concrete/brick)', '$25–$50', '$12k–$25k', 'Cool–moderate', 'Excellent', 'Re-level every 5-10 yrs'],
                  ['Natural stone (bluestone/travertine)', '$35–$65', '$18k–$33k', 'Cool', 'Good', 'Seal every 2-3 yrs'],
                  ['Composite (Trex/TimberTech)', '$35–$75', '$18k–$38k', 'Moderate (AZEK best)', 'Good', 'Occasional wash'],
                  ['Stamped concrete', '$15–$30', '$8k–$15k', 'Hot', 'Fair (add non-slip finish)', 'Reseal every 2-3 yrs'],
                  ['Wood (PT/cedar)', '$18–$35', '$9k–$18k', 'Moderate', 'Fair (when wet)', 'Stain/seal yearly, splinter risk'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>Our Recommendation for Pool Decks</h2>
          <p style={S.p}><strong>Best overall: Pavers.</strong> Cool underfoot, excellent drainage (permeable options available), slip-resistant texture, and they can be individually replaced if damaged. Concrete pavers in a running bond or herringbone pattern are our most-specified pool deck material.</p>
          <p style={S.p}><strong>Best premium: Natural stone (travertine).</strong> Naturally cool, non-slip when wet, elegant appearance. Higher cost but stunning around a pool.</p>
          <p style={S.p}><strong>Best for elevated pool decks: TimberTech AZEK.</strong> If your pool is above grade and needs a raised deck structure, AZEK stays cooler than other composites and is 100% moisture-resistant.</p>
          <p style={S.p}><strong>Best budget: Stamped concrete.</strong> Affordable and versatile patterns, but gets hot in direct sun. Add non-slip texture finish and choose lighter colors.</p>

          <h2 style={S.h2}>Virginia Pool Barrier Requirements</h2>
          <p style={S.p}>Virginia building code requires:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Barrier height:</strong> Minimum 48 inches around all residential pools</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Gate:</strong> Self-closing and self-latching, opening outward from pool</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Openings:</strong> No gap larger than 4 inches (same as deck railing code)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Deck railing as barrier:</strong> If your elevated deck overlooks the pool, the deck railing can serve as the barrier if it meets the 48-inch height and 4-inch spacing requirements</li>
          </ul>
          <p style={S.p}>We design pool decks with code-compliant barriers integrated into the design not as an afterthought. <Link href="/deck-railing-options-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>See our railing options</Link>.</p>

          <h2 style={S.h2}>Pool Deck + Living Space Combos</h2>
          <p style={S.p}>The most impactful pool deck projects combine the pool surround with outdoor living features:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'Pool Deck + Outdoor Kitchen', range: '$55k–$100k+', desc: 'Grill island with bar seating overlooking the pool' },
              { title: 'Pool Deck + Pergola', range: '$40k–$75k', desc: 'Shade structure for lounging near the pool' },
              { title: 'Pool Deck + Fire Pit', range: '$30k–$55k', desc: 'Evening gathering spot next to the pool area' },
              { title: 'Pool Deck + Composite Deck', range: '$45k–$85k', desc: 'Elevated composite dining deck connected to ground-level pool surround' },
            ].map((combo) => (
              <div key={combo.title} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.25rem' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '1rem' }}>{combo.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>{combo.range}</p>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6 }}>{combo.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "How much does a pool deck cost?", a: "Pavers: $25-$50/sqft. Composite: $35-$75/sqft. Stamped concrete: $15-$30/sqft. Typical 500 sqft pool deck: $15k-$38k." },
            { q: "Best material for a pool deck?", a: "Pavers for most cool, slip-resistant, replaceable. AZEK for elevated pool decks. Stamped concrete for budget." },
            { q: "Do I need a fence around my pool?", a: "Yes Virginia requires 48\" barrier with self-closing/self-latching gate. We integrate barriers into the deck design." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/deck-vs-patio-which-is-right', 'Deck vs Patio'],
              ['/services/patios', 'Patio Building Services'],
              ['/deck-railing-options-northern-virginia', 'Railing Options'],
              ['/outdoor-kitchen-builder-northern-virginia', 'Outdoor Kitchen Builder'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Design Your Pool Deck" buttonText="Get Free Estimate" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <RelatedGuides currentPath="/pool-deck-builder-northern-virginia" />

      <ContactHome />
    </>
  );
}
