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
  path: '/stamped-concrete-patio-northern-virginia',
  title: 'Stamped Concrete Patio Contractor Northern Virginia | 2026',
  description: 'Stamped concrete patio contractor in Northern Virginia. 2026 cost: $40-$70/sqft installed across Loudoun, Fairfax & Prince William. Slate, flagstone, brick, wood plank patterns. Freeze-thaw realities explained.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a stamped concrete patio cost in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "Stamped concrete patios cost $15-$30 per square foot installed in Northern Virginia. A typical 300 sqft patio: $4,500-$9,000. This is 30-50% less than pavers and the most affordable patio option for budget-conscious homeowners." } },
    { "@type": "Question", name: "How long does stamped concrete last in Virginia?", acceptedAnswer: { "@type": "Answer", text: "Stamped concrete lasts 20-30 years with proper installation and maintenance. Reseal every 2-3 years to protect against Virginia's freeze-thaw cycles. Without resealing, the surface can crack and the color can fade within 5-8 years." } },
    { "@type": "Question", name: "Stamped concrete vs pavers which is better?", acceptedAnswer: { "@type": "Answer", text: "Stamped concrete is 30-50% cheaper upfront but has higher maintenance (resealing) and is harder to repair (can't replace one section). Pavers cost more but are more durable in freeze-thaw, individual pavers are replaceable, and they don't need resealing. For budget: stamped concrete. For longevity: pavers." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function StampedConcretePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/stamped-concrete-patio-northern-virginia" name="Stamped Concrete Patio Contractor Northern Virginia | 2026" description="Stamped concrete patio contractor in Northern Virginia. 2026 cost: $40-$70/sqft installed across Loudoun, Fairfax &amp; Prince William. Slate, flagstone, brick, wood plank patterns. Freeze-thaw realities explained." speakable />
      {/* Full-width Hero Image Section */}
      <section style={{ position: 'relative', width: '100%', height: '70vh', minHeight: '500px', overflow: 'hidden' }}>
        <Image
          src="/showcase/img14.jpg"
          alt="Premium stamped concrete patio installation in Northern Virginia"
          fill
          style={{ objectFit: 'cover' }}
          sizes="100vw"
          priority
        />
      </section>

      {/* Title Section below Hero */}
      <section style={{ padding: '4rem 0 2rem', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '1.5rem', color: '#111', lineHeight: 1.2 }}>
            Stamped Concrete Patio in Northern Virginia
          </h1>
          <p style={{ color: '#444', fontSize: '1.25rem', lineHeight: 1.6, maxWidth: '700px' }}>
            The most affordable patio option patterns, colors, costs, and what to know before you build.
          </p>
        </div>
      </section>
      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p>Stamped concrete: <strong>$15–$30/sqft installed</strong> ($4,500–$9,000 for 300 sqft). Most affordable patio option 30-50% less than pavers. Patterns mimic slate, flagstone, brick, or wood plank. Reseal every 2-3 years for Virginia climate. Lasts 20-30 years.</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={S.h2}>Stamped Concrete Cost by Size</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Size', 'Basic (1 color)', 'Standard (2 colors)', 'Premium (borders + accents)'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['200 sqft', '$3,000–$4,000', '$4,000–$5,000', '$5,000–$6,000'],
                  ['300 sqft', '$4,500–$6,000', '$6,000–$7,500', '$7,500–$9,000'],
                  ['400 sqft', '$6,000–$8,000', '$8,000–$10,000', '$10,000–$12,000'],
                  ['500 sqft', '$7,500–$10,000', '$10,000–$12,500', '$12,500–$15,000'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>Popular Stamp Patterns</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { name: 'Ashlar Slate', desc: 'Most popular in NoVA. Natural stone look with irregular rectangles. Pairs with earth-tone colors.' },
              { name: 'Random Flagstone', desc: 'Mimics natural flagstone layout. Organic, irregular shapes. Great for garden-adjacent patios.' },
              { name: 'Herringbone Brick', desc: 'Classic brick pattern. Traditional homes. Available in red, brown, and gray tones.' },
              { name: 'Wood Plank', desc: 'Mimics wooden boardwalk. Modern/rustic. Popular for pool surrounds and walkways.' },
              { name: 'Cobblestone', desc: 'Old-world European look. Small rounded stones. Formal gardens and entries.' },
              { name: 'Seamless Texture', desc: 'No pattern lines just textured surface. Most affordable. Clean, modern look.' },
            ].map((p) => (
              <div key={p.name} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.25rem' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '1rem' }}>{p.name}</h3>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={S.h2}>Stamped Concrete vs Pavers vs Natural Stone</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Factor', 'Stamped Concrete', 'Concrete Pavers', 'Natural Flagstone'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Cost/sqft', '$15–$30', '$25–$40', '$35–$65'],
                  ['300 sqft total', '$4,500–$9,000', '$7,500–$12,000', '$10,500–$19,500'],
                  ['Lifespan', '20–30 years', '25–50 years', '25–50+ years'],
                  ['Maintenance', 'Reseal every 2-3 yrs', 'Re-sand joints, minimal', 'Weed control, minimal'],
                  ['Freeze-thaw', 'Fair (can crack)', 'Excellent (joints flex)', 'Good (dry-set)'],
                  ['Repair', 'Hard (patch visible)', 'Easy (replace 1 paver)', 'Medium (unique pieces)'],
                  ['Heat', 'Gets hot in sun', 'Moderate', 'Cool'],
                  ['Customization', 'Patterns + colors', 'Shapes + patterns', 'Natural variation'],
                  ['Best for', 'Budget patios', 'Most patios', 'Premium aesthetic'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400, color: j === 1 && i < 2 ? '#2e7d32' : 'inherit' }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>Virginia Climate Considerations</h2>
          <p style={S.p}><strong>Freeze-thaw:</strong> Stamped concrete&apos;s biggest weakness in Virginia. Water enters micro-cracks, freezes, expands. Regular resealing (every 2-3 years) is essential to prevent this. Without it, cracks appear within 5-8 years.</p>
          <p style={S.p}><strong>Comparison:</strong> Pavers handle freeze-thaw better because the joints flex with ground movement. Stamped concrete is a rigid slab it cracks rather than flexing. This is why we recommend pavers for most NoVA patios, but stamped concrete remains the best budget option.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "Cost of stamped concrete in NoVA?", a: "$15-$30/sqft. 300 sqft: $4,500-$9,000. Most affordable patio option." },
            { q: "How long does it last?", a: "20-30 years with resealing every 2-3 years. Without maintenance: 10-15 years in Virginia." },
            { q: "Stamped concrete vs pavers?", a: "Stamped: 30-50% cheaper but needs resealing, harder to repair. Pavers: more durable in freeze-thaw, replaceable, no resealing." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/paver-vs-flagstone-patio-northern-virginia', 'Paver vs Flagstone Patio'],
              ['/deck-vs-patio-which-is-right', 'Deck vs Patio'],
              ['/services/patios', 'Patio Building Services'],
              ['/pool-deck-builder-northern-virginia', 'Pool Deck Builder'],
              ['/how-much-does-a-deck-cost-northern-virginia', 'Deck Cost Guide'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Design Your Patio" buttonText="Get Free Estimate" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <ContactHome />
    </>
  );
}
