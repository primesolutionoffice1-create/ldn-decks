import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import WebPageSchema from '@/components/WebPageSchema';
import RelatedGuides from '@/components/RelatedGuides';
import NamedAuthor from '@/components/NamedAuthor';
import DeckCostCalculatorWidget from '@/components/DeckCostCalculatorWidget';
import { buildMetadata } from '@/lib/seo';
import { BUSINESS, ORG_ID, WEBSITE_ID } from '@/lib/business';
import { OPEN_DECK_RANGE, QUOTE_LABEL, QUOTE_SOURCE, RESURFACE_QUOTED } from '@/lib/quotedPrices';

const path = '/tools/deck-cost-estimator-northern-virginia';
const pageUrl = `${BUSINESS.url}${path}`;
const pageTitle = 'Deck Cost Estimator Northern Virginia';
const pageDescription =
  'Recent Northern Virginia quotes: new open decks about $61–$102 per sq ft, most $64–$68. Describe your deck scope, then request a written estimate.';

export const metadata = buildMetadata({
  path,
  title: 'Deck Cost Estimator Northern Virginia | LDN Decks',
  description: pageDescription,
  image: '/social/deck-cost-estimator-northern-virginia-social.png',
});

const faqs = [
  {
    q: 'How accurate is this deck cost estimator?',
    a: `The planner does not calculate a price; it records size, material and add-ons so the written estimate starts from the right scope. For a price reference, ${OPEN_DECK_RANGE} The written estimate after a site visit is the only project price.`,
  },
  {
    q: 'What makes Northern Virginia deck pricing different?',
    a: 'Deck pricing in Loudoun, Fairfax, Arlington and Prince William is affected by labor costs, permit review, HOA requirements, elevation, clay soil, footing conditions, composite material selection and inspection expectations.',
  },
  {
    q: 'Does the estimate include permits and cleanup?',
    a: 'Permits, demolition, structure, stairs, railings and cleanup are scoped and priced in the written estimate.',
  },
  {
    q: 'Can this estimator price Trex and TimberTech decks?',
    a: 'You can select pressure-treated, cedar, Trex and TimberTech options to describe scope; the planner does not output a price for them.',
  },
  {
    q: 'What should I do after using the estimator?',
    a: 'Request a written estimate so Loudoun Decks can verify size, structure, access, permits, HOA requirements and material details. The planner records scope; it does not calculate a price.',
  },
  {
    q: 'What have recent Northern Virginia deck quotes cost?',
    a: `${OPEN_DECK_RANGE} ${RESURFACE_QUOTED} ${QUOTE_SOURCE}`,
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
  ['/composite-deck-cost-northern-virginia', 'composite deck cost in Northern Virginia'],
  ['/deck-financing', 'Deck Financing in Northern Virginia'],
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
      <WebPageSchema dateModified="2026-11-08" url={pageUrl} name={pageTitle} description={pageDescription} speakable />

      <section style={{ background: '#17202a', color: '#fff', padding: '4rem 0 3rem' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ color: '#f97316', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Free planning tool
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', lineHeight: 1.08, fontWeight: 800, margin: '0 0 1rem', maxWidth: 780 }}>
            Deck Cost Estimator Northern Virginia
          </h1>
          <p style={{ maxWidth: 740, color: 'rgba(255,255,255,0.84)', fontSize: '1.08rem', lineHeight: 1.65, margin: 0 }} data-speakable="true">
            {QUOTE_LABEL}: {OPEN_DECK_RANGE} The written estimate after a site visit is the only project price. Use the planner below to describe scope (size, material, add-ons) before you request that estimate.
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
            This planner does not calculate a price. It records size, material and add-ons. Final pricing depends on field measurements, structure, access, permitting, HOA review, site conditions and selected materials.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div style={{ maxWidth: 940, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>What Changes a Deck Estimate in Northern Virginia?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1rem' }}>
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
            Start with a realistic deck size and the material level you would actually consider. You can select Trex or TimberTech to describe the material. The planner does not output a price for them. Payment options are on the <Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>deck payment estimator</Link>.
          </p>
          <p>
            If your deck will be elevated, attached to the house, built on a slope, or connected to stairs, railings, lighting, a screened porch or outdoor kitchen, describe that scope in the planner. The permit-ready scope should also account for <Link href="/tools/deck-footing-depth-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>footings</Link>, <Link href="/tools/deck-beam-span-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>beam spans</Link>, <Link href="/tools/deck-joist-span-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>joist spans</Link> and local inspection requirements.
          </p>
          <p>
            For the most useful next step, send your photos, approximate dimensions and city through the <Link href="/get-estimate" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>deck estimate form</Link>. Loudoun Decks prepares a written estimate for the property, materials and approvals.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0', background: '#f8fafc' }}>
        <div style={{ maxWidth: 940, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>Related Cost and Planning Resources</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '0.8rem' }}>
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
        <NamedAuthor context="Northern Virginia deck cost planning" lastUpdated="2026-11-08" />
      </div>
      <RelatedGuides currentPath={path} />
    </main>
  );
}
