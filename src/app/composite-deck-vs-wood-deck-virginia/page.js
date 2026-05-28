import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ArticleSchema from '@/components/ArticleSchema';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';

export const metadata = buildMetadata({
  path: '/composite-deck-vs-wood-deck-virginia',
  title: 'Composite vs Wood Deck: 2026 Virginia Cost Comparison',
  description: 'Is composite decking cheaper than wood? 15-year total cost analysis for Northern Virginia homeowners. See lifespan, maintenance & ROI head-to-head.',
  image: '/images/img16.jpeg',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is a composite deck cheaper than wood in the long run?", acceptedAnswer: { "@type": "Answer", text: "Yes. Over 15 years, composite costs $3,000-$5,000 in total maintenance vs $8,000-$15,000+ for wood. The upfront premium is recovered within 5-7 years." } },
    { "@type": "Question", name: "How long does a composite deck last vs wood?", acceptedAnswer: { "@type": "Answer", text: "Composite: 25-50 years. Pressure-treated wood: 10-15 years with annual maintenance. Cedar: 15-20 years with maintenance." } },
    { "@type": "Question", name: "Which is better for Virginia's climate?", acceptedAnswer: { "@type": "Answer", text: "Composite. Virginia's freeze-thaw cycles and humid summers accelerate wood deterioration. Capped composites are impervious to moisture penetration." } },
    { "@type": "Question", name: "Does composite or wood have better resale value?", acceptedAnswer: { "@type": "Answer", text: "Composite recoups 65-80% at resale vs 50-65% for wood. Buyers prefer composite because it signals low maintenance." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, h3: { fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function CompositeVsWoodPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/composite-deck-vs-wood-deck-virginia" name="Composite vs Wood Deck: 2026 Virginia Cost Comparison" description="Is composite decking cheaper than wood? 15-year total cost analysis for Northern Virginia homeowners. See lifespan, maintenance &amp; ROI head-to-head." speakable />
      <ArticleSchema
        title="Composite Deck vs Wood Deck: Complete Virginia Comparison (2026)"
        description="Composite vs wood deck cost, maintenance, lifespan, ROI compared for Virginia homeowners. 15-year total cost analysis."
        path="/composite-deck-vs-wood-deck-virginia"
        datePublished="2025-05-01"
        dateModified="2026-04-23"
      />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Composite Deck vs Wood Deck</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Complete comparison for Virginia homeowners cost, maintenance, lifespan, and ROI</p>
        </div>
      </section>

      <section data-speakable="true" style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Bottom Line:</p>
          <p data-speakable>Wood costs less upfront ($18–$35/sqft vs $30–$75/sqft), but composite is cheaper over 15 years when you add maintenance. Composite lasts 2–3x longer, requires zero staining, and has better resale value. For Virginia&apos;s climate, composite wins.</p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img11.jpeg"
              alt="Composite vs pressure-treated wood deck comparison in Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>

          <h2 style={S.h2}>Head-to-Head Comparison</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Factor', 'Pressure-Treated Wood', 'Composite (Trex/TimberTech)'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Upfront cost', '$18–$35/sqft', '$30–$75/sqft'],
                  ['Annual maintenance', '$300–$800/year', '$0–$50/year'],
                  ['15-year total (300 sqft)', '$15,000–$25,000+', '$12,000–$23,000'],
                  ['Lifespan', '10–15 years', '25–50 years'],
                  ['Maintenance', 'Stain/seal every 1–2 yrs, sand, replace rotted boards', 'Occasional soap & water wash'],
                  ['Splinters', 'Yes (worsens with age)', 'Never'],
                  ['Warping/cracking', 'Common after 3–5 years', 'Rare (capped technology)'],
                  ['Mold/rot resistance', 'Low without annual treatment', 'High (impervious cap)'],
                  ['Color retention', 'Fades to gray in 1–2 years', 'Minimal fade, stabilizes at 6 months'],
                  ['Resale ROI', '50–65%', '65–80%'],
                  ['Warranty', 'None (labor only)', '25–50 years (manufacturer)'],
                  ['Environmental', 'Chemical treatment, shorter life', 'Trex = 95% recycled materials'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{row[0]}</td>
                    <td style={S.td}>{row[1]}</td>
                    <td style={{ ...S.td, fontWeight: 600, color: 'var(--color-primary)' }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>15-Year Total Cost of Ownership</h2>
          <p style={S.p}>This is the number that matters. What a 300 sqft deck actually costs over 15 years including maintenance:</p>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Cost Component', 'PT Wood', 'Trex Transcend'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Initial build (300 sqft)', '$8,000', '$16,000'],
                  ['Staining/sealing (every 2 yrs × 7)', '$4,200', '$0'],
                  ['Board replacement (yr 8–12)', '$2,500', '$0'],
                  ['Power washing (annual)', '$2,250', '$750'],
                  ['Your time (weekends maintaining)', '100+ hours', '~5 hours'],
                  ['15-Year Total', '$16,950', '$16,750'],
                ].map((row, i) => {
                  const isTotal = i === 5;
                  return (
                    <tr key={i} style={{ background: isTotal ? '#f0f0f0' : (i % 2 ? '#fafafa' : '#fff') }}>
                      <td style={{ ...S.td, fontWeight: isTotal ? 700 : 600 }}>{row[0]}</td>
                      <td style={{ ...S.td, fontWeight: isTotal ? 700 : 400 }}>{row[1]}</td>
                      <td style={{ ...S.td, fontWeight: isTotal ? 700 : 400, color: 'var(--color-primary)' }}>{row[2]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p style={S.p}>At year 15, the wood deck needs full replacement ($8,000+). The composite deck has 10–35 years of life remaining.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Virginia Climate: Why It Matters</h2>
          <p style={S.p}><strong>Freeze-thaw (Dec–Mar):</strong> Wood absorbs water. When it freezes, it expands and cracks. After 50–80 cycles per winter, untreated boards split within 3–4 years. Composite&apos;s capped surface prevents moisture entry entirely.</p>
          <p style={S.p}><strong>Humidity (Jun–Sep):</strong> 70–90% humidity breeds mold and accelerates rot. Annual sealing helps but never fully stops it. Composite resists surface mold.</p>
          <p style={S.p}><strong>UV exposure:</strong> 200+ sunny days/year. Untreated wood grays within 12 months. Composite uses UV-resistant pigments that stabilize after initial settling.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>When Wood Still Makes Sense</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Tight budget (under $10k):</strong> If budget is the primary constraint and you need a functional deck now.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Temporary (under 5 years):</strong> Selling soon or planning to replace later.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Natural wood preference:</strong> Some homeowners genuinely prefer real wood and are willing to maintain it. Cedar is better than PT in this case.</li>
          
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (5.0★ Google) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
          </ul>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {[
            { q: "Is composite cheaper than wood long-term?", a: "Yes. Over 15 years, composite costs $3,000-$5,000 in maintenance vs $8,000-$15,000+ for wood. The upfront premium is recovered within 5-7 years." },
            { q: "How long does composite last vs wood?", a: "Composite: 25-50 years. PT wood: 10-15 years with annual maintenance, 5-8 years without. Cedar: 15-20 years." },
            { q: "Which has better resale value?", a: "Composite recoups 65-80% vs 50-65% for wood. Buyers prefer composite because it signals low maintenance." },
            { q: "Which is better for Virginia?", a: "Composite. Freeze-thaw cycles and humidity accelerate wood deterioration. Capped composites are impervious to moisture." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/composite-deck-cost-northern-virginia', 'Composite Deck Cost in Northern Virginia (2026)'],
              ['/wood-vs-composite-deck-long-term-cost', 'Wood vs Composite — Full 15-Year Cost Analysis'],
              ['/composite-deck-cost-by-size', 'Composite Deck Cost by Size (300/400/500/600 sqft)'],
              ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK'],
              ['/does-a-deck-add-value-to-your-home', 'Does a Deck Add Value to Your Home?'],
              ['/hoa-deck-rules-northern-virginia', 'HOA Deck Rules in Northern Virginia'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>

      <SimpleCTA title="Not Sure Which Material Fits Your Budget?" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/composite-deck-vs-wood-deck-virginia" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      
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
