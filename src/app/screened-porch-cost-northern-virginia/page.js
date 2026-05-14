import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import TrustBanner from '@/components/TrustBanner';
import NamedAuthor from '@/components/NamedAuthor';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/screened-porch-cost-northern-virginia',
  title: '2026 Screened Porch Cost NoVA | See Real Project Prices',
  description: 'Screened porches in Northern Virginia cost $25,000-$70,000+. See 2026 price tables, EZE-Breeze costs & project examples. Get a free itemized quote today!',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a screened porch cost in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "A screened porch costs $25,000-$70,000+ depending on size, materials, and features. Basic 150 sqft starts at $25,000. Mid-range 250 sqft with composite floor and EZE-Breeze: $40k-$55k. Premium 300+ sqft with fireplace: $60k-$80k+." } },
    { "@type": "Question", name: "Is a screened porch worth the investment?", acceptedAnswer: { "@type": "Answer", text: "Yes. Screened porches recoup 70-85% at resale and extend usable outdoor season from 5 months to 9-10 months." } },
    { "@type": "Question", name: "Can you add a screened porch to an existing deck?", acceptedAnswer: { "@type": "Answer", text: "In many cases yes if the existing framing and footings support the added weight. We inspect the structure before quoting." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, h3: { fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function ScreenedPorchCostPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>How Much Does a Screened Porch Cost in Northern Virginia?</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>2026 pricing guide with real project examples</p>
        </div>
      </section>
      <TrustBanner />

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p>A screened porch in Northern Virginia costs <strong>$25,000–$70,000+</strong>. Basic 150 sqft: $25k. Mid-range 250 sqft with EZE-Breeze: $40k–$55k. Premium 300+ sqft with fireplace: $60k–$80k+.</p>
        </div>
      </section>

      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Loudoun, Fairfax, and Prince William counties" lastUpdated="May 2026" />
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img23.jpeg"
              alt="Custom screened-in porch with EZE-Breeze windows in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>

          <h2 style={S.h2}>Screened Porch Cost by Size and Tier</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  {['Size', 'Basic', 'Mid-Range', 'Premium'].map(h => <th key={h} style={S.th}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['150 sqft (10×15)', '$25k–$30k', '$30k–$40k', '$40k–$50k'],
                  ['250 sqft (12×20)', '$35k–$45k', '$45k–$55k', '$55k–$70k'],
                  ['400+ sqft (16×25+)', '$50k–$60k', '$60k–$75k', '$75k–$100k+'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 2 ? 600 : 400, color: j === 2 ? 'var(--color-primary)' : 'inherit' }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>What&apos;s Included in Each Tier</h2>
          <h3 style={S.h3}>Basic</h3>
          <p style={S.p}>Pressure-treated wood frame and floor, fiberglass screen panels, standard ceiling fan, one electrical outlet. Functional and clean.</p>
          <h3 style={S.h3}>Mid-Range (Most Popular)</h3>
          <p style={S.p}>Composite flooring (Trex or TimberTech), EZE-Breeze vinyl windows (converts to 3-season room), tongue-and-groove ceiling, recessed lighting, multiple outlets, upgraded railing. Our most-requested configuration.</p>
          <h3 style={S.h3}>Premium</h3>
          <p style={S.p}>All mid-range features plus: mahogany or AZEK flooring, retractable screen walls, built-in fireplace or heater, TV mount with hidden wiring, custom trim, stained beadboard ceiling. Year-round use.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Screened Porch vs Open Deck</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Feature', 'Open Deck (250 sqft)', 'Screened Porch (250 sqft)'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Cost', '$18k–$35k', '$35k–$55k'],
                  ['Usable months/year', '5–6', '9–10'],
                  ['Bug protection', 'None', 'Full'],
                  ['Rain use', 'No', 'Yes (with roof)'],
                  ['Resale ROI', '60–75%', '70–85%'],
                  ['Best for', 'Grilling, sunbathing', 'Dining, entertaining'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 || j === 2 ? 600 : 400, color: j === 2 ? 'var(--color-primary)' : 'inherit' }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.p}><strong>Pro tip:</strong> Many clients combine both an open section for grilling and a screened section for dining. Costs 30–40% less than two separate structures.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Real Projects: What Our Clients Paid</h2>
          {[
            { price: '$34,000', desc: '180 sqft Screened Porch, Sterling', detail: 'Added to existing deck. Composite floor, EZE-Breeze windows, beadboard ceiling, 2 ceiling fans. Loudoun County permit. 3-week build.' },
            { price: '$52,000', desc: '280 sqft Porch + 200 sqft Deck, Centreville', detail: 'New construction. Trex Transcend floor, retractable screens, pine ceiling, electric heater, TV mount. Connected to open deck. 5-week build.' },
            { price: '$68,000', desc: '350 sqft Premium Porch, Great Falls', detail: 'AZEK floor, floor-to-ceiling retractable screens, stone fireplace, custom lighting, stained cedar ceiling, built-in bar. 6-week build.' },
          ].map((p, i) => (
            <div key={i} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{p.price} {p.desc}</h3>
              <p style={{ lineHeight: 1.7 }}>{p.detail}</p>
            </div>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {[
            { q: "How much does a screened porch cost in Northern Virginia?", a: "$25,000-$70,000+ depending on size, materials, and features." },
            { q: "Is a screened porch worth it?", a: "Yes 70-85% ROI at resale and extends outdoor season from 5 to 9-10 months." },
            { q: "Can you add screens to an existing deck?", a: "Often yes, if the framing supports the added weight. We inspect before quoting." },
            { q: "What are EZE-Breeze windows?", a: "Vinyl panels that convert a screened porch into a 3-season room. Slide up for airflow, close for wind/rain protection. Our most-requested upgrade." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/services/porches/screened-porch', 'Screened Porch Builder Services'],
              ['/how-much-does-a-deck-cost-northern-virginia', 'How Much Does a Deck Cost?'],
              ['/composite-deck-cost-northern-virginia', 'Composite Deck Cost Brand-by-Brand'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood Deck'],
              ['/services/porches', 'Our Porch Building Services'],
              ['/deck-cost-calculator', 'NoVA Deck Cost Calculator'],
              ['/deck-financing-northern-virginia', 'Financing in Northern Virginia'],
              ['/how-tariffs-affect-deck-prices-2026', '2026 Tariff Impact on Deck Prices'],
              ['/does-a-deck-add-value-to-your-home', 'Does a Deck Add Value?'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>

      <SimpleCTA title="Get Your Screened Porch Quote" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </>
  );
}