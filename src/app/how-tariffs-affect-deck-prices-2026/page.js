import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/how-tariffs-affect-deck-prices-2026',
  title: 'How Tariffs Affect Deck Prices in 2026 | What Homeowners Should Know',
  description: 'Tariffs have increased composite decking costs 8-15% in 2026. How this affects your project, which materials are impacted, and how to save. Expert analysis.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Have tariffs increased deck prices in 2026?", acceptedAnswer: { "@type": "Answer", text: "Yes. Tariffs on imported lumber, steel, and aluminum have increased material costs 8-15% in 2026 compared to 2025. Composite decking has seen smaller increases (5-10%) because brands like Trex manufacture domestically using recycled materials. Pressure-treated lumber has been less affected." } },
    { "@type": "Question", name: "Which deck materials are affected by tariffs?", acceptedAnswer: { "@type": "Answer", text: "Most affected: aluminum railings and hardware (10-20% increase), imported hardwood decking (15-25%), and stainless steel fasteners (10-15%). Least affected: Trex composite (made in USA from recycled materials, 5-8% increase), pressure-treated lumber (domestic, 3-5%)." } },
    { "@type": "Question", name: "Should I build my deck now or wait for tariffs to drop?", acceptedAnswer: { "@type": "Answer", text: "Build now. Material costs have historically only gone up waiting rarely saves money. Tariff reductions are unpredictable and may take years. Meanwhile, labor costs rise 3-5% annually regardless. Locking in today's price is almost always the better financial decision." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function TariffsDeckPricesPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>How Tariffs Affect Deck Prices in 2026</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>What&apos;s changed, which materials cost more, and how to protect your budget</p>
        </div>
      </section>
      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Bottom Line:</p>
          <p>Tariffs have pushed deck material costs up <strong>8–15% in 2026</strong>. Aluminum and imported hardwoods are hit hardest. <strong>Domestic composites (Trex, TimberTech) are least affected</strong> another reason composite is the smart choice. Building now locks in current prices before further increases.</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img11.jpeg"
              alt="Deck construction materials impacted by tariffs in 2026"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>
          <h2 style={S.h2}>The 2026 Deck Pricing Reality</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Material', '2025 Price/sqft', '2026 Price/sqft', 'Increase', 'Why'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Aluminum railings', '$35–$55/ft', '$40–$65/ft', '10–20%', 'Aluminum tariffs on imports'],
                  ['Stainless steel hardware', '$0.50–$1.50/pc', '$0.55–$1.70/pc', '10–15%', 'Steel tariffs'],
                  ['Imported hardwood (Ipe, Cumaru)', '$12–$20/sqft', '$14–$25/sqft', '15–25%', 'Lumber tariffs + supply chain'],
                  ['Trex Composite', '$8–$16/sqft', '$8.50–$17/sqft', '5–8%', 'Domestic, recycled minimal impact'],
                  ['TimberTech AZEK', '$14–$20/sqft', '$15–$22/sqft', '5–10%', 'Mostly domestic PVC'],
                  ['Pressure-treated lumber', '$2–$4/sqft', '$2.10–$4.20/sqft', '3–5%', 'Domestic supply, steady'],
                  ['Cedar', '$6–$10/sqft', '$6.50–$11/sqft', '5–10%', 'Canadian supply, some tariff impact'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400, color: j === 3 && parseInt(cell) > 10 ? '#c62828' : (j === 3 && parseInt(cell) <= 8 ? '#2e7d32' : 'inherit') }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>How This Affects Your Project Cost</h2>
          <p style={S.p}>For a typical $35,000 composite deck project in Northern Virginia:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Materials (~50% of cost):</strong> $17,500 → now $18,500–$19,250 (+$1,000–$1,750)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Labor (~40% of cost):</strong> $14,000 → up 3–5% regardless of tariffs (+$420–$700)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Permits/overhead (~10%):</strong> $3,500 → relatively stable</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Total impact:</strong> $1,500–$2,500 more than the same project in 2025 (4–7% overall increase)</li>
          </ul>

          <h2 style={S.h2}>How to Minimize Tariff Impact</h2>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Choose domestic composite over imported hardwood.</strong> Trex and TimberTech are manufactured in the USA from recycled materials least tariff exposure. Imported Ipe and Cumaru are 15–25% more expensive than last year.</li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Lock in material pricing early.</strong> We purchase materials at contract signing, not at construction start. This protects you from mid-project price increases. If materials go up between your quote and signing, we honor the quoted price.</li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Consider composite railings over aluminum.</strong> Trex Select or Signature composite railings avoid the aluminum tariff entirely while providing the same zero-maintenance benefit. <Link href="/deck-railing-options-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Compare railing options</Link>.</li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Build now, not later.</strong> Material costs have increased every year for the past decade. Waiting for tariff reductions is a gamble. Labor costs rise 3–5% annually regardless. Today&apos;s price is almost certainly lower than next year&apos;s.</li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Bundle projects.</strong> Deck + fence, deck + patio, or deck + porch as one project saves on mobilization, site prep, and permits vs building separately. <Link href="/deck-financing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Financing available</Link>.</li>
          </ol>

          <h2 style={S.h2}>Should You Wait for Prices to Drop?</h2>
          <p style={S.p}><strong>No.</strong> Here&apos;s the historical reality:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Deck material prices have increased every single year since 2019</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Tariff reductions are political decisions unpredictable and may take years</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Even if tariffs drop, manufacturers rarely reduce prices they maintain margins</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Labor costs rise 3–5% annually regardless of material prices</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Every year you wait = one fewer year enjoying your deck</li>
          </ul>
          <p style={S.p}><strong>The best time to build a deck was last year. The second best time is now.</strong></p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "Have tariffs increased deck prices?", a: "Yes 8-15% on materials overall. Aluminum and imported wood hit hardest. Domestic composites (Trex, TimberTech) least affected at 5-8%." },
            { q: "Which materials are most affected?", a: "Aluminum railings (10-20%), imported hardwood (15-25%), steel hardware (10-15%). Domestic composite and PT lumber: minimal impact." },
            { q: "Should I wait for prices to drop?", a: "No. Material prices have only gone up since 2019. Tariff reductions are unpredictable. Labor rises 3-5% annually. Lock in today's price." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/how-much-does-a-deck-cost-northern-virginia', 'Deck Cost Guide (2026 Prices)'],
              ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK'],
              ['/deck-financing', 'Deck Financing Options'],
              ['/best-time-to-build-a-deck-northern-virginia', 'Best Time to Build'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Lock In Today's Prices Get Your Free Estimate" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </>
  );
}
