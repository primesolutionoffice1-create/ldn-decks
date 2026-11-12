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

const TREX_SUSTAINABILITY_URL = 'https://www.trex.com/why-trex/sustainability/sustainable-products/';
const PAGE_PATH = '/eco-friendly-composite-decking';
const PAGE_TITLE = 'Eco-Friendly Composite Decking | Sustainable Deck Materials (2026)';
const PAGE_DESCRIPTION = 'In 2025, Trex reports sourcing about 379 million pounds of plastic film and about 588 million pounds of reclaimed wood.';
const UPDATED = '2026-11-12';

const faqs = [
  {
    q: 'Is composite decking eco-friendly?',
    a: 'Yes. Trex decking is made with 95% recycled and reclaimed materials, including plastic film such as grocery bags and pallet wrap. In 2025, Trex reports sourcing about 379 million pounds of plastic film and about 588 million pounds of reclaimed wood. And because composite lasts 25-50 years vs 10-15 for wood, fewer decks end up in landfills over time.',
  },
  {
    q: 'Is composite decking better for the environment than wood?',
    a: 'Yes, in several ways: composite uses recycled materials instead of harvesting new timber, lasts 2-3x longer (fewer replacements), requires no chemical stains or sealants (no toxic runoff), and is itself recyclable at end of life. Residential pressure-treated wood relies on copper-based chemical preservatives, and treated scraps should never be burned.',
  },
  {
    q: 'Can composite decking be recycled?',
    a: 'Some composite decking brands can be recycled at end of life. Trex operates a recycling program for its own products. Additionally, unused scraps from installation can be recycled. Check with the specific manufacturer for their recycling program.',
  },
];

export const metadata = buildMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  image: '/social/eco-friendly-composite-decking-social.png',
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

function TrexSourceLink() {
  return (
    <a href={TREX_SUSTAINABILITY_URL} target="_blank" rel="noopener" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
      Trex sustainable products
    </a>
  );
}

export default function EcoFriendlyDeckingPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema dateModified={UPDATED} url="https://ldndecks.com/eco-friendly-composite-decking" name={PAGE_TITLE} description={PAGE_DESCRIPTION} speakable />
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
          <p>Trex decking is made with 95% recycled and reclaimed materials, including plastic film such as grocery bags and pallet wrap. In 2025, Trex reports sourcing about 379 million pounds of plastic film and about 588 million pounds of reclaimed wood. Zero-maintenance means no chemical stains polluting your soil and waterways. Source: <TrexSourceLink />.</p>
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
                  ['Material Trex reports sourcing in 2025', 'None', 'About 379 million pounds of plastic film and about 588 million pounds of reclaimed wood'],
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1rem', marginBottom: '1rem' }}>
            {[
              { stat: '~379M lb', label: 'Plastic film Trex reports sourcing in 2025' },
              { stat: '~588M lb', label: 'Reclaimed wood Trex reports sourcing in 2025' },
              { stat: '95%', label: 'Recycled content in every Trex deck board' },
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
          <p style={S.p}>Source: <TrexSourceLink />.</p>

          <h2 style={S.h2}>Which Composite Brands Are Most Sustainable?</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Brand', 'Recycled Content', 'Manufacturing', 'Recyclable?'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Trex', '95% recycled (plastic + wood)', 'USA (incl. Winchester, VA)', 'Yes (Trex recycling program)'],
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
          <p style={S.p}><strong>Our pick for sustainability:</strong> Trex highest recycled content (95%), USA-manufactured, including in Winchester, Virginia, and an active recycling program. As a Trex product-line planner, we&apos;re proud to build with the industry&apos;s most sustainable product. <Link href="/trex-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Learn more about our Trex services</Link>.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {faqs.map((faq) => (
            <details key={faq.q} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
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
          
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (Google reviews) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
          </ul>
        </div>
      </article>
      <SimpleCTA title="Build Green Get Your Free Estimate" buttonText="Get Free Estimate" link="/get-estimate" />
      <NamedAuthor context="Northern Virginia" lastUpdated={UPDATED} />

      <RelatedGuides currentPath="/eco-friendly-composite-decking" />

      <ContactHome />
    </>
  );
}
