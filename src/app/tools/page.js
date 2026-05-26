import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import WebPageSchema from '@/components/WebPageSchema';
import { buildMetadata } from '@/lib/seo';
import { BUSINESS } from '@/lib/business';

const path = '/tools';
const pageUrl = `${BUSINESS.url}${path}`;

export const metadata = buildMetadata({
  path,
  title: 'Deck Planning Tools | Loudoun Decks',
  description: 'Free deck planning tools from Loudoun Decks for Northern Virginia homeowners, including stair rise-run planning and project calculators.',
});

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${pageUrl}#tools`,
  name: 'Deck Planning Tools',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Virginia Deck Stair Calculator',
      url: `${BUSINESS.url}/tools/deck-stair-calculator`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Deck Cost Calculator',
      url: `${BUSINESS.url}/deck-cost-calculator`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Deck Payment Estimator',
      url: `${BUSINESS.url}/deck-payment-estimator`,
    },
  ],
};

const tools = [
  {
    href: '/tools/deck-stair-calculator',
    title: 'Virginia Deck Stair Calculator',
    desc: 'Estimate stair rise, run, step count, tread depth and angle before inspection or rebuild planning.',
  },
  {
    href: '/deck-cost-calculator',
    title: 'Deck Cost Calculator',
    desc: 'Estimate deck project cost by size, material and add-ons for Northern Virginia planning.',
  },
  {
    href: '/deck-payment-estimator',
    title: 'Deck Payment Estimator',
    desc: 'Model monthly payments for a custom deck, composite upgrade or larger outdoor living project.',
  },
];

export default function DeckToolsPage() {
  return (
    <main>
      <JsonLd data={itemListSchema} />
      <WebPageSchema
        url={pageUrl}
        name="Deck Planning Tools"
        description="Free deck planning tools from Loudoun Decks for Northern Virginia homeowners."
        speakable
      />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0 3rem' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Free homeowner tools
          </p>
          <h1 style={{ fontSize: '2.5rem', lineHeight: 1.1, fontWeight: 800, maxWidth: 720, margin: '0 0 1rem' }}>
            Deck Planning Tools
          </h1>
          <p style={{ maxWidth: 700, color: 'rgba(255,255,255,0.82)', fontSize: '1.08rem', lineHeight: 1.65, margin: 0 }}>
            Practical calculators and planning tools for Northern Virginia homeowners comparing deck stairs, costs, financing, inspections and rebuild decisions.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0', background: '#f8fafc' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                style={{
                  display: 'block',
                  minHeight: 170,
                  padding: '1.25rem',
                  background: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 8,
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                <strong style={{ display: 'block', color: 'var(--color-primary)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                  {tool.title}
                </strong>
                <span style={{ color: '#475569', lineHeight: 1.6 }}>{tool.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div style={{ maxWidth: 840, margin: '0 auto', padding: '0 1.5rem', lineHeight: 1.75 }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: '1rem' }}>Use Tools as a Starting Point</h2>
          <p style={{ color: '#475569' }}>
            These tools help homeowners frame better questions before a consultation. They do not replace local permit review, engineering judgment, manufacturer instructions or a professional inspection. For final planning, Loudoun Decks can confirm measurements, structure, materials, permits, HOA requirements and safety details on site.
          </p>
          <p>
            <Link href="/contact" style={{ color: 'var(--color-primary)', fontWeight: 800 }}>
              Request a professional deck estimate
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
