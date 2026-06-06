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
  path: '/paver-vs-flagstone-patio-northern-virginia',
  title: 'Paver Patio vs Flagstone Patio Northern Virginia | 2026',
  description: 'Paver patio contractor vs flagstone — cost, durability, maintenance, freeze-thaw performance in NoVA. 2026 installed pricing for Loudoun, Fairfax, Prince William. We build both.',
  image: '/social/paver-vs-flagstone-patio-northern-virginia-social.png',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is a paver or flagstone patio cheaper?", acceptedAnswer: { "@type": "Answer", text: "Concrete pavers are 30-50% cheaper than natural flagstone. Pavers: $25-$40/sqft installed. Flagstone: $35-$65/sqft installed. For a 300 sqft patio, that's $7,500-$12,000 for pavers vs $10,500-$19,500 for flagstone." } },
    { "@type": "Question", name: "Which lasts longer pavers or flagstone?", acceptedAnswer: { "@type": "Answer", text: "Both last 25-50+ years with proper installation and base prep. Pavers are more uniform and easier to replace individually. Flagstone is natural stone that won't fade but can crack in severe freeze-thaw if not properly set." } },
    { "@type": "Question", name: "Which is better for Virginia's climate?", acceptedAnswer: { "@type": "Answer", text: "Both perform well. Pavers have slight edge for freeze-thaw because interlocking joints flex with ground movement. Flagstone set in mortar can crack; dry-set flagstone is more forgiving. We recommend proper base depth (8-12 inches) for both in Virginia." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function PaverVsFlagstonePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/paver-vs-flagstone-patio-northern-virginia" name="Paver Patio vs Flagstone Patio Northern Virginia | 2026" description="Paver patio contractor vs flagstone — cost, durability, maintenance, freeze-thaw performance in NoVA. 2026 installed pricing for Loudoun, Fairfax, Prince William. We build both." speakable />
      {/* Full-width Hero Image Section */}
      <section style={{ position: 'relative', width: '100%', height: '70vh', minHeight: '500px', overflow: 'hidden' }}>
        <Image
          src="/showcase/img22.jpg"
          alt="Premium custom flagstone patio design in Northern Virginia"
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
            Pavers vs. Flagstone: Choosing the Right Hardscape
          </h1>
          <p style={{ color: '#444', fontSize: '1.25rem', lineHeight: 1.6, maxWidth: '700px' }}>
            A comprehensive guide to cost, durability, and aesthetics for Northern Virginia homeowners.
          </p>
        </div>
      </section>
      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p><strong>Pavers</strong> for: budget, uniform look, easy repair, pool surrounds ($25–$40/sqft). <strong>Flagstone</strong> for: natural aesthetic, unique character, premium properties ($35–$65/sqft). Both last 25–50+ years. We build both.</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={S.h2}>Head-to-Head Comparison</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Factor', 'Concrete Pavers', 'Natural Flagstone'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Cost/sqft installed', '$25–$40', '$35–$65'],
                  ['300 sqft total', '$7,500–$12,000', '$10,500–$19,500'],
                  ['Look', 'Uniform, geometric, modern', 'Natural, organic, unique'],
                  ['Color options', 'Dozens (manufactured)', 'Limited (natural stone)'],
                  ['Durability', '25–50+ years', '25–50+ years'],
                  ['Freeze-thaw', 'Excellent (joints flex)', 'Good (dry-set) / Fair (mortared)'],
                  ['Maintenance', 'Re-sand joints every 3-5 yrs, re-level as needed', 'Weed control, occasional re-setting'],
                  ['Slip resistance', 'Excellent (textured surface)', 'Good (varies by stone type)'],
                  ['Repair', 'Easy lift and replace individual pavers', 'Harder each piece is unique'],
                  ['Heat retention', 'Moderate lighter colors stay cooler', 'Cool natural stone absorbs less heat'],
                  ['Drainage', 'Good (permeable options available)', 'Good (natural gaps between stones)'],
                  ['Best for', 'Driveways, walkways, pool decks, patios', 'Garden paths, patios, natural landscapes'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{row[0]}</td>
                    <td style={S.td}>{row[1]}</td>
                    <td style={S.td}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>When to Choose Pavers</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Budget priority:</strong> 30–50% less than flagstone for the same area</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Pool surrounds:</strong> Uniform surface, excellent slip resistance, cool underfoot in lighter colors</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Driveway extensions:</strong> Designed for vehicle weight, easy to repair</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Modern/contemporary home:</strong> Geometric patterns complement clean architectural lines</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Permeable drainage needs:</strong> Permeable paver systems manage stormwater (important for NoVA lot coverage rules)</li>
          </ul>

          <h2 style={S.h2}>When to Choose Flagstone</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Natural aesthetic:</strong> No two pieces are alike organic, timeless beauty</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Premium property:</strong> Flagstone signals quality on high-end homes (Great Falls, McLean, Vienna estates)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Garden integration:</strong> Blends seamlessly with landscaping, ground cover, and natural settings</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Heat sensitivity:</strong> Natural stone stays cooler than manufactured pavers in direct sun</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Traditional/colonial home:</strong> Complements classic Virginia architecture</li>
          </ul>

          <h2 style={S.h2}>Popular Stone Types in Northern Virginia</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Stone', 'Cost/sqft', 'Color', 'Best For'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['PA Bluestone', '$35–$50', 'Blue-gray, natural', 'Most popular in NoVA classic, versatile'],
                  ['Travertine', '$40–$65', 'Cream, tan, ivory', 'Pool surrounds, elegant patios'],
                  ['Tennessee Fieldstone', '$30–$45', 'Tan, brown, warm', 'Rustic patios, garden paths'],
                  ['Quartzite', '$35–$55', 'Gray, silver, gold', 'Modern natural look, very durable'],
                  ['Concrete Pavers (Belgard/Unilock)', '$25–$40', 'Dozens of options', 'Best value, widest selection'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "Is a paver or flagstone patio cheaper?", a: "Pavers: $25-$40/sqft. Flagstone: $35-$65/sqft. Pavers are 30-50% cheaper for the same area." },
            { q: "Which lasts longer?", a: "Both last 25-50+ years. Pavers are easier to repair individually. Flagstone won't fade but can crack if improperly set." },
            { q: "Which is better for Virginia's climate?", a: "Both work well. Pavers have a slight edge for freeze-thaw due to flexible interlocking joints." },
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
              ['/pool-deck-builder-northern-virginia', 'Pool Deck Builder'],
              ['/composite-deck-cost-northern-virginia', 'Deck Cost Guide'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Design Your Dream Patio" buttonText="Get Free Estimate" link="/get-estimate" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <RelatedGuides currentPath="/paver-vs-flagstone-patio-northern-virginia" />

      <ContactHome />
    </>
  );
}
