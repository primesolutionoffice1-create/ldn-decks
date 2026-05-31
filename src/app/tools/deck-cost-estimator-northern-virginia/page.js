import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import WebPageSchema from '@/components/WebPageSchema';
import RelatedGuides from '@/components/RelatedGuides';
import NamedAuthor from '@/components/NamedAuthor';
import DeckCostCalculatorWidget from '@/components/DeckCostCalculatorWidget';
import { buildMetadata } from '@/lib/seo';
import { BUSINESS, ORG_ID, WEBSITE_ID } from '@/lib/business';

const path = '/tools/deck-cost-estimator-northern-virginia';
const pageUrl = `${BUSINESS.url}${path}`;
const pageTitle = 'Deck Cost Estimator Northern Virginia';
const pageDescription =
  'Estimate custom deck cost in Northern Virginia by size, material and add-ons, then compare next steps for permits, financing and a written deck estimate.';

export const metadata = buildMetadata({
  path,
  title: 'Deck Cost Estimator Northern Virginia | LDN Decks',
  description: pageDescription,
});

const faqs = [
  {
    q: 'How accurate is this deck cost estimator?',
    a: 'It gives a planning range based on common Northern Virginia deck sizes, materials and add-ons. A written estimate still requires site measurements, access review, structural conditions, permit scope, HOA needs and final material selections.',
  },
  {
    q: 'What makes Northern Virginia deck pricing different?',
    a: 'Deck pricing in Loudoun, Fairfax, Arlington and Prince William is affected by labor costs, permit review, HOA requirements, elevation, clay soil, footing conditions, composite material selection and inspection expectations.',
  },
  {
    q: 'Does the estimate include permits and cleanup?',
    a: 'The planning range is intended to reflect professional installed deck pricing with normal labor, materials, permits and cleanup. Unusual site conditions, engineering, demolition, roofs, kitchens or hot tubs can change the final scope.',
  },
  {
    q: 'Can this estimator price Trex and TimberTech decks?',
    a: 'Yes. The estimator includes common pressure-treated, cedar, Trex and TimberTech AZEK planning ranges so homeowners can compare wood, standard composite and premium PVC options.',
  },
  {
    q: 'What should I do after using the estimator?',
    a: 'Save the range, compare monthly payment options if needed, then request a professional estimate so Loudoun Decks can verify size, structure, access, permits, HOA requirements and material details.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${pageUrl}#faq`,
  url: pageUrl,
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: a,
    },
  })),
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  '@id': `${pageUrl}#webapplication`,
  name: pageTitle,
  url: pageUrl,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  browserRequirements: 'Requires JavaScript in a modern web browser',
  description: pageDescription,
  isAccessibleForFree: true,
  inLanguage: 'en-US',
  publisher: { '@id': ORG_ID },
  provider: { '@id': ORG_ID },
  isPartOf: { '@id': WEBSITE_ID },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

const relatedResources = [
  ['/deck-cost-calculator', 'Detailed Deck Cost Calculator'],
  ['/deck-payment-estimator', 'Deck Payment Estimator'],
  ['/composite-deck-cost-northern-virginia', 'Composite Deck Cost Guide'],
  ['/deck-financing-northern-virginia', 'Deck Financing in Northern Virginia'],
  ['/deck-permit-loudoun-county-virginia', 'Loudoun County Deck Permit Guide'],
  ['/deck-permit-fairfax-county-virginia', 'Fairfax County Deck Permit Guide'],
  ['/tools/deck-footing-depth-calculator-virginia', 'Deck Footing Depth Calculator'],
  ['/tools/deck-beam-span-calculator-virginia', 'Deck Beam Span Calculator'],
];

const costDrivers = [
  ['Size and shape', 'Larger decks cost more, but complex shapes, picture-frame borders and multi-level layouts can matter as much as square footage.'],
  ['Elevation', 'Second-story and walkout-basement decks need taller posts, stairs, bracing, inspections and more labor than low ground-level layouts.'],
  ['Material choice', 'Pressure-treated wood has lower upfront cost. Trex, TimberTech and AZEK usually cost more initially but reduce maintenance and replacement risk.'],
  ['Railings and stairs', 'Composite railings, cable railings, stair runs, landings and lighting often move a project from a basic deck to a premium outdoor living build.'],
  ['Permits and HOA', 'County review, HOA architectural packages, drawings and inspection coordination affect both timeline and professional project cost.'],
  ['Site conditions', 'Access, demolition, drainage, clay soil, footing depth, slope and ledger conditions can change the final written estimate.'],
];

export default function DeckCostEstimatorNorthernVirginiaPage() {
  return (
    <main style={{ background: '#fff' }}>
      <JsonLd data={faqSchema} />
      <JsonLd data={webApplicationSchema} />
      <WebPageSchema url={pageUrl} name={pageTitle} description={pageDescription} speakable />

      <section style={{ background: '#17202a', color: '#fff', padding: '4rem 0 3rem' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ color: '#f97316', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Free planning tool
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', lineHeight: 1.08, fontWeight: 800, margin: '0 0 1rem', maxWidth: 780 }}>
            Deck Cost Estimator Northern Virginia
          </h1>
          <p style={{ maxWidth: 740, color: 'rgba(255,255,255,0.84)', fontSize: '1.08rem', lineHeight: 1.65, margin: 0 }} data-speakable="true">
            Estimate a professional deck project range by size, material and add-ons, then use the result to plan permits, financing and a written estimate with Loudoun Decks.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: '1.5rem' }}>
            <Link href="#estimator" style={{ background: '#d14817', color: '#fff', padding: '0.85rem 1.15rem', borderRadius: 8, fontWeight: 800, textDecoration: 'none' }}>
              Use Estimator
            </Link>
            <Link href="/get-estimate" style={{ background: '#fff', color: '#17202a', padding: '0.85rem 1.15rem', borderRadius: 8, fontWeight: 800, textDecoration: 'none' }}>
              Request Written Estimate
            </Link>
          </div>
        </div>
      </section>

      <section id="estimator" style={{ padding: '3rem 0', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1040, margin: '0 auto', padding: '0 1.5rem' }}>
          <DeckCostCalculatorWidget
            defaultMaterial={3}
            defaultSqft={420}
            ctaLabel="Request a Written Deck Estimate"
            ctaHref="/get-estimate"
          />
          <p style={{ marginTop: '1rem', color: '#64748b', lineHeight: 1.65, fontSize: '0.9rem' }}>
            Planning ranges are educational. Final pricing depends on field measurements, structure, access, permitting, HOA review, site conditions and selected materials.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div style={{ maxWidth: 940, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>What Changes a Deck Estimate in Northern Virginia?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {costDrivers.map(([title, desc]) => (
              <div key={title} style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: '1.1rem', background: '#fff' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#17202a', margin: '0 0 0.45rem' }}>{title}</h3>
                <p style={{ color: '#475569', lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 3rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem', lineHeight: 1.75 }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>How to Use the Estimate</h2>
          <p>
            Start with a realistic deck size and the material level you would actually consider. If you are comparing a low-maintenance outdoor living upgrade, run the estimate once with Trex Transcend and once with TimberTech AZEK, then compare the range with the <Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>deck payment estimator</Link>.
          </p>
          <p>
            If your deck will be elevated, attached to the house, built on a slope, or connected to stairs, railings, lighting, a screened porch or outdoor kitchen, use the estimate as a starting point. The permit-ready scope should also account for <Link href="/tools/deck-footing-depth-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>footings</Link>, <Link href="/tools/deck-beam-span-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>beam spans</Link>, <Link href="/tools/deck-joist-span-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>joist spans</Link> and local inspection requirements.
          </p>
          <p>
            For the most useful next step, send the estimate range with your photos, approximate dimensions and city through the <Link href="/get-estimate" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>deck estimate form</Link>. Loudoun Decks can turn the planning range into a scope that reflects your property, materials, approvals and timeline.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0', background: '#f8fafc' }}>
        <div style={{ maxWidth: 940, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>Related Cost and Planning Resources</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.8rem' }}>
            {relatedResources.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: 'block',
                  padding: '1rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: 8,
                  background: '#fff',
                  color: 'var(--color-primary)',
                  fontWeight: 800,
                  textDecoration: 'none',
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>Deck Cost Estimator FAQs</h2>
          {faqs.map(({ q, a }) => (
            <details key={q} style={{ borderTop: '1px solid #e2e8f0', padding: '1rem 0' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 800, color: '#17202a' }}>{q}</summary>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: 0 }}>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section style={{ background: '#17202a', color: '#fff', padding: '3rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.75rem' }}>Ready to Price the Real Project?</h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
            Share your rough size, material preference, city and photos. Loudoun Decks will review the details and prepare the next step for a custom deck estimate.
          </p>
          <Link href="/get-estimate" style={{ display: 'inline-block', background: '#d14817', color: '#fff', padding: '0.9rem 1.25rem', borderRadius: 8, fontWeight: 800, textDecoration: 'none' }}>
            Get a Deck Estimate
          </Link>
        </div>
      </section>

      <div style={{ maxWidth: 900, margin: '2rem auto 0', padding: '0 1.5rem' }}>
        <NamedAuthor context="Northern Virginia deck cost planning" lastUpdated="2026-05-31" />
      </div>
      <RelatedGuides currentPath={path} />
    </main>
  );
}
