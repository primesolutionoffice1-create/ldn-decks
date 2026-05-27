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
  path: '/eco-friendly-composite-decking',
  title: 'Eco-Friendly Composite Decking | Sustainable Deck Materials (2026)',
  description: 'Trex is made from 95% recycled materials. Composite decking diverts 500M+ lbs of plastic from landfills yearly. Build green without sacrificing quality.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is composite decking eco-friendly?", acceptedAnswer: { "@type": "Answer", text: "Yes. Trex composite decking is made from 95% recycled materials reclaimed wood fibers and recycled plastic film (grocery bags, newspaper sleeves). Trex alone diverts 500+ million pounds of plastic and wood from landfills each year. And because composite lasts 25-50 years vs 10-15 for wood, fewer decks end up in landfills over time." } },
    { "@type": "Question", name: "Is composite decking better for the environment than wood?", acceptedAnswer: { "@type": "Answer", text: "Yes, in several ways: composite uses recycled materials instead of harvesting new timber, lasts 2-3x longer (fewer replacements), requires no chemical stains or sealants (no toxic runoff), and is itself recyclable at end of life. Pressure-treated wood uses chromated copper arsenate and must be disposed of as hazardous waste." } },
    { "@type": "Question", name: "Can composite decking be recycled?", acceptedAnswer: { "@type": "Answer", text: "Some composite decking brands can be recycled at end of life. Trex operates a recycling program for its own products. Additionally, unused scraps from installation can be recycled. Check with the specific manufacturer for their recycling program." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function EcoFriendlyDeckingPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/eco-friendly-composite-decking" name="Eco-Friendly Composite Decking | Sustainable Deck Materials (2026)" description="Trex is made from 95% recycled materials. Composite decking diverts 500M+ lbs of plastic from landfills yearly. Build green without sacrificing quality." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img44.jpeg"
              alt="Eco-friendly composite decking project by LDN Decks"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Sustainable Outdoor Living Modern Composite Decking</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Build a beautiful deck and reduce your environmental footprint 95% recycled materials</p>
        </div>
      </section>
      <section style={{ background: '#e8f5e9', borderLeft: '4px solid #2e7d32', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#2e7d32' }}>The Green Choice:</p>
          <p>Trex composite decking is made from <strong>95% recycled materials</strong> recycled plastic bags and reclaimed wood. Every 500 sqft Trex deck diverts ~140,000 plastic bags from landfills. Zero-maintenance = no chemical stains polluting your soil and waterways.</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={S.h2}>Environmental Impact: Composite vs Wood</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Factor', 'Pressure-Treated Wood', 'Trex Composite'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Raw materials', 'Harvested timber (deforestation)', '95% recycled plastic + wood'],
                  ['Chemical treatment', 'Copper-based preservatives (toxic)', 'None'],
                  ['Maintenance chemicals', 'Stain, sealant, stripper (annual)', 'Soap and water only'],
                  ['Lifespan', '10-15 years → landfill', '25-50 years'],
                  ['End of life', 'Cannot recycle (chemical-treated)', 'Recyclable (some brands)'],
                  ['Plastic diverted from landfill', 'None', '500M+ lbs/year (Trex)'],
                  ['Carbon footprint (lifecycle)', 'Higher (short life + chemicals)', 'Lower (long life + recycled input)'],
                  ['Soil/water contamination', 'Stain runoff, wood treatment leaching', 'None'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{row[0]}</td>
                    <td style={S.td}>{row[1]}</td>
                    <td style={{ ...S.td, fontWeight: 600, color: '#2e7d32' }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>How Trex Makes Decking from Recycled Materials</h2>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Collection:</strong> Trex partners with retailers and communities to collect used plastic film grocery bags, newspaper sleeves, dry cleaning bags, and sandwich bags. They also collect reclaimed sawdust from woodworking operations.</li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Processing:</strong> Plastic film is cleaned, shredded, and melted. Sawdust is dried and refined. Both streams are combined into a composite blend.</li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Extrusion:</strong> The blend is extruded into deck board profiles with a protective polymer cap (the outer shell that resists fading, staining, and scratching).</li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Result:</strong> A deck board that is 95% recycled content, requires zero chemical maintenance, and lasts 25+ years turning waste into outdoor living space.</li>
          </ol>

          <h2 style={S.h2}>Sustainability by the Numbers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { stat: '500M+', label: 'Pounds of plastic and wood diverted from landfills each year by Trex' },
              { stat: '95%', label: 'Recycled content in every Trex deck board' },
              { stat: '140,000', label: 'Plastic bags diverted per average 500 sqft deck' },
              { stat: '25-50', label: 'Year lifespan vs 10-15 for wood fewer replacements over time' },
              { stat: '0', label: 'Gallons of chemical stain/sealant needed over the deck\'s lifetime' },
              { stat: '0', label: 'Trees harvested for your Trex deck (reclaimed wood only)' },
            ].map((item) => (
              <div key={item.label} style={{ background: '#f0fdf4', borderRadius: 8, padding: '1.25rem', textAlign: 'center' }}>
                <p style={{ fontSize: '2rem', fontWeight: 700, color: '#2e7d32' }}>{item.stat}</p>
                <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.5 }}>{item.label}</p>
              </div>
            ))}
          </div>

          <h2 style={S.h2}>Which Composite Brands Are Most Sustainable?</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Brand', 'Recycled Content', 'Manufacturing', 'Recyclable?'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Trex', '95% recycled (plastic + wood)', 'USA Winchester, VA & Fernley, NV', 'Yes (Trex recycling program)'],
                  ['TimberTech PRO', 'Partial recycled content', 'USA', 'Check with manufacturer'],
                  ['TimberTech AZEK', 'PVC-based (not recycled input)', 'USA', 'PVC is recyclable'],
                  ['Deckorators', 'Mineral-based composite', 'USA', 'Limited'],
                  ['Fiberon', 'Recycled content varies by line', 'USA', 'Check with manufacturer'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400, color: i === 0 && j > 0 ? '#2e7d32' : 'inherit' }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.p}><strong>Our pick for sustainability:</strong> Trex highest recycled content (95%), USA-manufactured (two facilities including one in Virginia), and an active recycling program. As a certified Trex Pro installer, we&apos;re proud to build with the industry&apos;s most sustainable product. <Link href="/trex-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Learn more about our Trex services</Link>.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "Is composite decking eco-friendly?", a: "Yes. Trex is 95% recycled (plastic bags + reclaimed wood). Diverts 500M+ lbs from landfills yearly. Zero chemical maintenance." },
            { q: "Better for environment than wood?", a: "Yes recycled inputs, 2-3x longer lifespan, no chemical stains, no timber harvesting, recyclable at end of life." },
            { q: "Can composite be recycled?", a: "Some brands yes. Trex has a recycling program. Installation scraps can also be recycled." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood Deck'],
              ['/composite-deck-cost-northern-virginia', 'Deck Cost Guide'],
              ['/trex-decks', 'Our Trex Decking Services'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (5.0★ Google) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
          </ul>
        </div>
      </article>
      <SimpleCTA title="Build Green Get Your Free Estimate" buttonText="Get Free Estimate" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <ContactHome />
    </>
  );
}
