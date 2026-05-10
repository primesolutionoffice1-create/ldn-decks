import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/trex-vs-timbertech-vs-azek',
  title: '2026 Trex vs TimberTech vs AZEK | NoVA Comparison & Costs',
  description: 'Which composite decking is best for Virginia? Trex vs TimberTech vs AZEK side-by-side comparison. See 2026 pricing, heat resistance & warranty info!',
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Which composite decking is best for Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "Trex Transcend offers the best balance of durability, heat resistance, and value at $45-$65/sqft. TimberTech AZEK is the premium pick at $50-$75/sqft with a 50-year warranty. Trex Enhance is the best budget option at $30-$50/sqft." } },
    { "@type": "Question", name: "Which composite decking stays coolest in the sun?", acceptedAnswer: { "@type": "Answer", text: "TimberTech AZEK and Trex Transcend stay 20-30°F cooler than standard composites in direct sun. Important for Virginia summers where temps exceed 90°F." } },
    { "@type": "Question", name: "Is TimberTech better than Trex?", acceptedAnswer: { "@type": "Answer", text: "TimberTech AZEK has a longer warranty (50yr vs 25yr) and better scratch resistance, but costs 15-25% more. Trex Transcend matches TimberTech PRO in performance at a lower price." } },
    { "@type": "Question", name: "Which composite decking has the longest warranty?", acceptedAnswer: { "@type": "Answer", text: "TimberTech AZEK at 50 years. Trex Transcend/Select: 25 years. TimberTech PRO: 30 years." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, h3: { fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function TrexVsTimberTechPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Trex vs TimberTech vs AZEK</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Which composite decking is best for your Virginia home? Complete 2026 comparison.</p>
        </div>
      </section>

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Our Recommendation:</p>
          <p><strong>Best overall:</strong> Trex Transcend ($45–$65/sqft). <strong>Best premium:</strong> TimberTech AZEK ($50–$75/sqft, 50-yr warranty). <strong>Best value:</strong> Trex Enhance ($30–$50/sqft). We install all three <a href="tel:+15716557207" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>call for samples</a>.</p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img05.jpeg"
              alt="High-quality Trex and TimberTech composite decking comparison detail"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>

          <h2 style={S.h2}>Side-by-Side Comparison</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  {['Feature', 'Trex Enhance', 'Trex Transcend', 'TimberTech PRO', 'TimberTech AZEK'].map(h => (
                    <th key={h} style={S.th}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Price/sqft', '$30–$50', '$45–$65', '$40–$60', '$50–$75'],
                  ['Warranty', '25 years', '25 years', '30 years', '50 years'],
                  ['Material', 'Capped composite', 'Capped (enhanced shell)', 'Capped composite', 'Capped PVC'],
                  ['Heat resistance', 'Good', 'Very Good', 'Good', 'Excellent'],
                  ['Scratch resistance', 'Good', 'Very Good', 'Good', 'Excellent'],
                  ['Color options', '6', '12', '8', '20+'],
                  ['Fade resistance', 'Good', 'Excellent', 'Very Good', 'Excellent'],
                  ['Recycled content', '95%', '95%', 'Mixed', 'None (PVC)'],
                  ['Best for', 'Budget builds', 'Most homeowners', 'Mid-range', 'Premium'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : (j === 2 ? 600 : 400), color: j === 2 ? 'var(--color-primary)' : 'inherit' }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>Why Material Matters in Virginia&apos;s Climate</h2>
          <h3 style={S.h3}>Freeze-Thaw Cycles (December–March)</h3>
          <p style={S.p}>Northern Virginia experiences 50–80 freeze-thaw cycles per winter. Water seeps into uncapped materials, freezes, expands, and cracks the surface. All four options above are fully capped moisture cannot penetrate.</p>
          <h3 style={S.h3}>Summer Heat (90°F+ for 60+ Days)</h3>
          <p style={S.p}>Dark composite surfaces can reach 130–150°F in direct sun. AZEK and Trex Transcend stay 20–30°F cooler due to shell technology. Important for barefoot comfort on south/west-facing decks.</p>
          <h3 style={S.h3}>Humidity and Mold</h3>
          <p style={S.p}>Virginia summers bring 70–90% humidity. Capped composites resist mold growth. AZEK&apos;s fully synthetic composition has the highest mold resistance of all options.</p>
          <h3 style={S.h3}>UV Fade</h3>
          <p style={S.p}>All brands fade slightly in the first 6–12 months, then stabilize. Trex Transcend and AZEK use multi-tonal color technology that makes fading virtually undetectable. Lighter colors hide fading better.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Our Recommendation for Northern Virginia</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem' }}>
              <p style={{ fontSize: '0.85rem', color: '#888', marginBottom: '0.25rem' }}>Budget under $25k</p>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Trex Enhance</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>Solid performance at the lowest price. 6 colors, 25-year warranty. Great for single-level decks.</p>
            </div>
            <div style={{ background: '#fff3e0', border: '2px solid var(--color-primary)', borderRadius: 8, padding: '1.5rem' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.25rem' }}>Best Overall</p>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Trex Transcend</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>Best balance of appearance, durability, and cost. 12 colors, superior fade resistance. Our most-requested product.</p>
            </div>
            <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem' }}>
              <p style={{ fontSize: '0.85rem', color: '#888', marginBottom: '0.25rem' }}>Premium / No compromise</p>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>TimberTech AZEK</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>50-year warranty, 20+ colors, best scratch and heat resistance. Worth it for high-use decks and pool surrounds.</p>
            </div>
          </div>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {[
            { q: "Which composite decking is best for Northern Virginia?", a: "Trex Transcend for most homeowners best balance of performance and price. TimberTech AZEK for premium budgets. Trex Enhance for value." },
            { q: "Which stays coolest in the sun?", a: "TimberTech AZEK and Trex Transcend stay 20-30°F cooler than standard composites. Critical for south-facing decks in Virginia summers." },
            { q: "Is TimberTech better than Trex?", a: "AZEK has a longer warranty (50yr) and better scratch resistance but costs 15-25% more. Trex Transcend matches TimberTech PRO at a lower price." },
            { q: "Can you mix brands on the same deck?", a: "Yes for different components (e.g., Trex boards + TimberTech rails). Not recommended for mixing board brands on the same surface." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/how-much-does-a-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite Deck vs Wood Deck Complete Comparison'],
              ['/trex-decks', 'Our Trex Decking Services'],
              ['/does-a-deck-add-value-to-your-home', 'Does a Deck Add Value to Your Home?'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}>
                <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <SimpleCTA title="See Samples at Our Centreville Showroom" buttonText="Book Showroom Visit" link="/contact" />
      <ContactHome />
    </>
  );
}
