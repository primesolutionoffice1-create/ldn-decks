import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import TrustBanner from '@/components/TrustBanner';
import NamedAuthor from '@/components/NamedAuthor';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

export const metadata = buildMetadata({
  path: '/screened-porch-cost-northern-virginia',
  title: '2026 Screened Porch Cost NoVA | Pricing Scenarios',
  description: 'Screened porches in Northern Virginia are priced in a written estimate. See 2026 price tables, EZE-Breeze costs, and planning scenarios before requesting an itemized quote.',
  image: '/social/screened-porch-cost-northern-virginia-social.png',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a screened porch cost in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "A screened porch is priced in a written estimate depending on size, materials, and features. Basic 150 sqft starts at a written estimate. Mid-range 250 sqft with composite floor and EZE-Breeze: a written estimate. Premium 300+ sqft with fireplace: a written estimate." } },
    { "@type": "Question", name: "Is a screened porch worth the investment?", acceptedAnswer: { "@type": "Answer", text: "Yes. Screened porches recoup not a fixed percentage at resale and extend usable outdoor season from 5 months to 9-10 months." } },
    { "@type": "Question", name: "Can you add a screened porch to an existing deck?", acceptedAnswer: { "@type": "Answer", text: "In many cases yes if the existing framing and footings support the added weight. We inspect the structure before quoting." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, h3: { fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function ScreenedPorchCostPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema dateModified="2026-10-18" url="https://ldndecks.com/screened-porch-cost-northern-virginia" name="2026 Screened Porch Cost NoVA | Pricing Scenarios" description="Screened porches in Northern Virginia are priced in a written estimate. See 2026 price tables, EZE-Breeze costs, and planning scenarios before requesting an itemized quote." speakable />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>How Much Does a Screened Porch Cost in Northern Virginia?</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>2026 pricing guide with sample planning scenarios</p>
        </div>
      </section>
      <TrustBanner />

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }} data-speakable="true">
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p data-speakable>A screened porch in Northern Virginia costs <strong>a written estimate</strong>. Basic 150 sqft: a written estimate. Mid-range 250 sqft with EZE-Breeze: a written estimate. Premium 300+ sqft with fireplace: a written estimate.</p>
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
              quality={70}
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
                  ['150 sqft (10×15)', 'a written estimate', 'a written estimate', 'a written estimate'],
                  ['250 sqft (12×20)', 'a written estimate', 'a written estimate', 'a written estimate'],
                  ['400+ sqft (16×25+)', 'a written estimate', 'a written estimate', 'a written estimate'],
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
                  ['Cost', 'a written estimate', 'a written estimate'],
                  ['Usable months/year', '5–6', '9–10'],
                  ['Bug protection', 'None', 'Full'],
                  ['Rain use', 'No', 'Yes (with roof)'],
                  ['Resale ROI', '60–75%', 'not a fixed percentage'],
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

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Sample Cost Scenarios</h2>
          <p style={S.p}>
            These examples are planning scenarios, not published client case studies. Final pricing should be confirmed after site access, structural support, electrical scope, county permit requirements, HOA review, and material selections are reviewed.
          </p>
          {[
            { price: 'a written estimate', desc: '180 sqft screened porch planning scenario', detail: 'Composite floor, EZE-Breeze-style window package, beadboard-style ceiling finish, two ceiling fans, and standard permit coordination.' },
            { price: 'a written estimate', desc: '280 sqft porch plus open deck planning scenario', detail: 'Trex Transcend-level flooring, retractable screen package, finished ceiling, electric heater allowance, TV blocking/wiring allowance, and an attached open deck zone.' },
            { price: 'a written estimate', desc: '350 sqft premium porch planning scenario', detail: 'Premium PVC or capped-composite floor, larger screen/window openings, fireplace or heater allowance, upgraded lighting, stained ceiling finish, and custom trim details.' },
          ].map((p, i) => (
            <div key={i} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{p.price} {p.desc}</h3>
              <p style={{ lineHeight: 1.7 }}>{p.detail}</p>
            </div>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {[
            { q: "How much does a screened porch cost in Northern Virginia?", a: "a written estimate depending on size, materials, and features." },
            { q: "Is a screened porch worth it?", a: "Yes not a fixed percentage ROI at resale and extends outdoor season from 5 to 9-10 months." },
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
              ['/screened-porch-builder-northern-virginia', 'Screened Porch Builder Services'],
              ['/covered-deck-cost-northern-virginia', 'Covered Deck Cost &amp; Payment Planning Guide'],
              ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost?'],
              ['/composite-deck-cost-northern-virginia', 'Composite Deck Cost Brand-by-Brand'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood Deck'],
              ['/services/porches', 'Our Porch Building Services'],
              ['/deck-cost-calculator', 'NoVA Deck Cost Calculator'],
              ['/deck-financing', 'Financing in Northern Virginia'],
              ['/how-tariffs-affect-deck-prices-2026', '2026 Tariff Impact on Deck Prices'],
              ['/does-a-deck-add-value-to-your-home', 'Does a Deck Add Value?'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>

      <SimpleCTA title="Get Your Screened Porch Quote" buttonText="Get Free Estimate" link="/get-estimate" />
      
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Resources</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Customer Reviews (Google reviews) →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/about" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>About Loudoun Decks →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/get-estimate" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Get a Free Estimate →</Link></li>
        </ul>
      </section>
      <RelatedGuides currentPath="/screened-porch-cost-northern-virginia" />
      <ContactHome />
    </>
  );
}
