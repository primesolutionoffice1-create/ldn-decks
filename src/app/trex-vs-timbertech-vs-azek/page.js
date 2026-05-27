import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import NamedAuthor from '@/components/NamedAuthor';
import CallLink from '@/components/CallLink';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

export const metadata = buildMetadata({
  path: '/trex-vs-timbertech-vs-azek',
  title: '2026 Trex vs TimberTech vs AZEK vs Fiberon | NoVA Guide',
  description: 'Which composite decking is best for Virginia? Side-by-side comparison of Trex, TimberTech AZEK, and Fiberon with 2026 pricing, heat, warranty and NoVA installer notes.',
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Which composite decking is best for Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "Trex Transcend offers the best balance of durability, heat resistance, and value at $45-$65/sqft. TimberTech AZEK is the premium pick at $50-$75/sqft with a 50-year warranty. Trex Enhance is the best budget option at $30-$50/sqft." } },
    { "@type": "Question", name: "Which composite decking stays coolest in the sun?", acceptedAnswer: { "@type": "Answer", text: "TimberTech AZEK and Trex Transcend stay 20-30°F cooler than standard composites in direct sun. Important for Virginia summers where temps exceed 90°F." } },
    { "@type": "Question", name: "Is TimberTech better than Trex?", acceptedAnswer: { "@type": "Answer", text: "TimberTech AZEK has a longer warranty (50yr vs 25yr) and better scratch resistance, but costs 15-25% more. Trex Transcend matches TimberTech PRO in performance at a lower price." } },
    { "@type": "Question", name: "Which composite decking has the longest warranty?", acceptedAnswer: { "@type": "Answer", text: "TimberTech AZEK at 50 years. Trex Transcend/Select: 25 years. TimberTech PRO: 30 years. Fiberon Concordia: 25 years residential plus a lifetime structural warranty." } },
    { "@type": "Question", name: "Where does Fiberon fit against Trex and TimberTech?", acceptedAnswer: { "@type": "Answer", text: "Fiberon is the fourth major US capped-composite brand. Concordia is its premium line, comparable to Trex Transcend or TimberTech PRO on price and performance, with 4-sided PermaTech capping and a 25-year stain & fade warranty. Sanctuary is mid-tier. ArmorGuard is the budget line. Fiberon is owned by Fortune Brands and manufactured in North Carolina and Iowa." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, h3: { fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function TrexVsTimberTechPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/trex-vs-timbertech-vs-azek" name="2026 Trex vs TimberTech vs AZEK vs Fiberon | NoVA Guide" description="Which composite decking is best for Virginia? Side-by-side comparison of Trex, TimberTech AZEK, and Fiberon with 2026 pricing, heat, warranty and NoVA installer notes." speakable />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Trex vs TimberTech vs AZEK vs Fiberon</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>The four major composite decking brands compared head-to-head for Northern Virginia. 2026 pricing, warranties, heat performance and installer notes.</p>
        </div>
      </section>

      <section data-speakable="true" style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Our Recommendation:</p>
          <p data-speakable><strong>Best overall:</strong> Trex Transcend ($45–$65/sqft). <strong>Best premium:</strong> TimberTech AZEK ($50–$75/sqft, 50-yr warranty). <strong>Best value:</strong> Trex Enhance ($30–$50/sqft). <strong>Best Trex alternative:</strong> Fiberon Concordia ($48–$70/sqft). We install all four <CallLink style={{ color: 'var(--color-primary)', fontWeight: 600 }}>call for samples</CallLink>.</p>
        </div>
      </section>

      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Loudoun, Fairfax, Prince William, and Arlington counties" lastUpdated="May 2026" />
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
              quality={70}
              priority
            />
          </div>

          <h2 style={S.h2}>Side-by-Side Comparison</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  {['Feature', 'Trex Enhance', 'Trex Transcend', 'TimberTech PRO', 'TimberTech AZEK', 'Fiberon Concordia'].map(h => (
                    <th key={h} style={S.th}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Price/sqft', '$30–$50', '$45–$65', '$40–$60', '$50–$75', '$48–$70'],
                  ['Warranty', '25 yr', '25 yr', '30 yr', '50 yr', '25 yr + lifetime structural'],
                  ['Material', 'Capped composite', 'Capped (enhanced shell)', 'Capped composite', 'Capped PVC', 'Capped composite (PermaTech)'],
                  ['Heat resistance', 'Good', 'Very Good', 'Good', 'Excellent', 'Very Good'],
                  ['Scratch resistance', 'Good', 'Very Good', 'Good', 'Excellent', 'Very Good'],
                  ['Color options', '6', '12', '8', '20+', '12'],
                  ['Fade resistance', 'Good', 'Excellent', 'Very Good', 'Excellent', 'Excellent'],
                  ['Recycled content', '95%', '95%', 'Mixed', 'None (PVC)', '94% (Concordia)'],
                  ['Made in', 'NV, GA, USA', 'NV, GA, USA', 'OH, PA, USA', 'OH, PA, USA', 'NC, IA, USA'],
                  ['Best for', 'Budget builds', 'Most homeowners', 'Mid-range', 'Premium', 'Trex alternative'],
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

          <h2 style={S.h2}>Where Fiberon Fits</h2>
          <p style={S.p}>Fiberon is the fourth major US capped-composite brand and the most common cross-shop against Trex Transcend in the NoVA market. Owned by Fortune Brands Innovations since 2021 and manufactured in New London, North Carolina and Meridian, Idaho, it sits in the same price-and-performance band as Transcend with a slightly different look and feel.</p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Concordia (premium):</strong> 4-sided PermaTech capping, 25-year stain &amp; fade warranty, lifetime structural warranty, 12 colors including the deep Horizon and Symmetry tones. Direct competitor to Trex Transcend.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Sanctuary (mid-range):</strong> 3-sided capping, 25-year stain &amp; fade warranty, narrower color palette. Mid-tier alternative to Trex Select or TimberTech PRO.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>ArmorGuard (budget):</strong> Single-sided capping, 25-year stain &amp; fade warranty. The Fiberon equivalent to Trex Enhance Basics.</li>
          </ul>
          <p style={S.p}>For Virginia homeowners, the practical difference between Trex Transcend and Fiberon Concordia is mostly aesthetic — the Concordia grain pattern is slightly more pronounced and the color blends lean a touch warmer. Performance, warranty terms and installed cost are functionally identical. We carry both and bring samples to every estimate.</p>

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
            <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem' }}>
              <p style={{ fontSize: '0.85rem', color: '#888', marginBottom: '0.25rem' }}>Trex Transcend alternative</p>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Fiberon Concordia</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>4-sided PermaTech cap, lifetime structural warranty, 12 colors. Cross-shop with Trex Transcend on warmer-toned grain patterns.</p>
            </div>
          </div>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {[
            { q: "Which composite decking is best for Northern Virginia?", a: "Trex Transcend for most homeowners best balance of performance and price. TimberTech AZEK for premium budgets. Trex Enhance for value." },
            { q: "Which stays coolest in the sun?", a: "TimberTech AZEK and Trex Transcend stay 20-30°F cooler than standard composites. Critical for south-facing decks in Virginia summers." },
            { q: "Is TimberTech better than Trex?", a: "AZEK has a longer warranty (50yr) and better scratch resistance but costs 15-25% more. Trex Transcend matches TimberTech PRO at a lower price." },
            { q: "Can you mix brands on the same deck?", a: "Yes for different components (e.g., Trex boards + TimberTech rails). Not recommended for mixing board brands on the same surface." },
            { q: "Trex vs Fiberon — which should I pick?", a: "Functionally identical at the premium tier: Trex Transcend and Fiberon Concordia carry the same 25-year stain & fade warranty, similar installed cost ($45–$70/sqft), and comparable heat and scratch resistance. Pick by board appearance — Trex Transcend leans cooler-toned, Fiberon Concordia leans warmer-toned. We bring samples of both to every NoVA estimate." },
            { q: "Is Fiberon cheaper than TimberTech AZEK?", a: "Yes. Fiberon Concordia (premium) installs at $48–$70/sqft in Northern Virginia. TimberTech AZEK installs at $50–$75/sqft. AZEK's PVC core and 50-year warranty justify the premium for pool decks and high-use surfaces; for shaded or moderate-use decks Fiberon Concordia is the better price-to-performance pick." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
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
      
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Brand Pages &amp; Services</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/trex-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Trex Decks — Platinum Partner →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/timbertech-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>TimberTech AZEK Decks →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/composite-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Composite Deck Installation →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/about" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>About Loudoun Decks →</Link></li>
        </ul>
      </section>
      <ContactHome />
    </>
  );
}
