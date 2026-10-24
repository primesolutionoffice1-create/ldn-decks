import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ArticleSchema from '@/components/ArticleSchema';
import WebPageSchema from '@/components/WebPageSchema';
import SimpleCTA from '@/components/SimpleCTA';
import TrustBanner from '@/components/TrustBanner';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import NamedAuthor from '@/components/NamedAuthor';
import AboveFoldCTA from '@/components/AboveFoldCTA';
import { buildMetadata } from '@/lib/seo';

const PATH = '/composite-deck-cost-by-size';
const DESCRIPTION = 'Composite deck cost by size in Northern Virginia: external 2026 benchmark $35–$80/sq ft, about $14,000–$32,000 for 400 sq ft. Written estimate = price.';
const TITLE = 'Composite Deck Cost by Size: 300, 400, 500, 600 Sq Ft Examples';
const UPDATED = '2026-10-24';

export const metadata = buildMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  image: '/social/composite-deck-cost-by-size-social.png',
});

const sizes = [
  {
    sqft: 300,
    label: '300 sqft (e.g. 15×20)',
    use: 'Standard family deck for a townhouse or smaller single-family yard.',
    benchmark: '$10,500–$24,000',
  },
  {
    sqft: 400,
    label: '400 sqft (e.g. 20×20)',
    use: 'Mid-size deck with seating zone, grill area, and dining table.',
    benchmark: '$14,000–$32,000',
  },
  {
    sqft: 500,
    label: '500 sqft (e.g. 25×20)',
    use: 'Large entertaining deck with multiple zones, pergola-ready.',
    benchmark: '$17,500–$40,000',
  },
  {
    sqft: 600,
    label: '600 sqft (e.g. 20×30 or 24×25)',
    use: 'Premium outdoor living space — two zones, often two stair flights, room for built-ins.',
    benchmark: '$21,000–$48,000',
  },
];

function sizeFaqAnswer(sqft, total) {
  return `For a simple, low-height composite deck with standard railing and no complex stairs, external 2026 benchmarks put installed cost at $35–$80 per square foot (RemodelCalculators, reviewed October 11, 2026; Angi lists $30–$60 per square foot for deck construction, updated September 24, 2026). Applied to ${sqft} sq ft, the simple arithmetic of $35–$80 per square foot times the floor area is about ${total}. Permits, demolition, elevation and complex stairs are excluded. These are external benchmarks, not Loudoun Decks prices, and a written estimate is the only project price.`;
}

const faqs = [
  {
    q: 'How much does a 300 sqft composite deck cost in Northern Virginia?',
    a: sizeFaqAnswer(300, '$10,500–$24,000'),
  },
  {
    q: 'How much does a 400 sqft composite deck cost?',
    a: sizeFaqAnswer(400, '$14,000–$32,000'),
  },
  {
    q: 'What does a 500 sqft composite deck cost installed?',
    a: sizeFaqAnswer(500, '$17,500–$40,000'),
  },
  {
    q: 'How much does a 600 sqft composite deck cost?',
    a: sizeFaqAnswer(600, '$21,000–$48,000'),
  },
  {
    q: 'Does the cost scale linearly with size?',
    a: 'No. Larger decks have proportionally more railing, more stairs, deeper framing requirements, and more lighting, and they often include features that smaller decks rarely include. The size totals on this page are only the simple arithmetic of the external $35–$80 per square foot benchmark times the floor area, so those extras sit outside that arithmetic. A written estimate is the only project price.',
  },
  {
    q: 'What size deck do most Northern Virginia homeowners build?',
    a: 'The right size depends on the lot, HOA rules, setbacks, and use.',
  },
  {
    q: 'How do I estimate the monthly payment for my size?',
    a: 'The lender sets the rate and the term. Use the deck payment estimator after you have a written project amount.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `https://ldndecks.com${PATH}#faq`,
  url: `https://ldndecks.com${PATH}`,
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const S = {
  h2: { fontSize: '1.85rem', fontWeight: 800, marginBottom: '1.1rem', marginTop: '2.5rem', lineHeight: 1.2 },
  h3: { fontSize: '1.2rem', fontWeight: 700, margin: '1.5rem 0 0.6rem' },
  p: { marginBottom: '1rem', lineHeight: 1.75, fontSize: '1rem' },
  th: { padding: '0.85rem', textAlign: 'left', borderBottom: '2px solid #ddd', fontSize: '0.92rem', background: '#f5f5f5' },
  td: { padding: '0.85rem', borderBottom: '1px solid #eee', fontSize: '0.92rem' },
  container: { maxWidth: 960, margin: '0 auto', padding: '0 1.5rem' },
  link: { color: 'var(--color-primary)', fontWeight: 600 },
};

export default function CompositeDeckCostBySizePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ArticleSchema
        title={TITLE}
        description={DESCRIPTION}
        path={PATH}
        image="/showcase/img18.jpeg"
        datePublished="2026-05-27"
        dateModified={UPDATED}
      />
      <WebPageSchema dateModified={UPDATED} url={`https://ldndecks.com${PATH}`} name={TITLE} description={DESCRIPTION} speakable />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={S.container}>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Cost Guide &middot; Northern Virginia
          </p>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
            Composite Deck Cost by Size: 300, 400, 500, and 600 Sq Ft Examples
          </h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: 1.6 }}>
            External 2026 benchmarks for common composite deck sizes in Northern Virginia. These are not Loudoun Decks prices, and a written estimate is the only project price.
          </p>
        </div>
      </section>

      <TrustBanner />

      <AboveFoldCTA
        headline="Estimate the monthly payment on your size + tier in seconds with the deck payment estimator."
        estimateHref="/deck-payment-estimator"
        estimateLabel="Estimate Project Payment"
      />

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }} className="quick-answer">
        <div style={S.container}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p data-speakable>
            For a simple, low-height composite deck with standard railing and no complex stairs, external 2026 benchmarks put installed cost at $35–$80 per square foot (
            <a href="https://remodelcalculators.com/deck-cost" style={S.link}>RemodelCalculators</a>
            , reviewed October 11, 2026;{' '}
            <a href="https://www.angi.com/articles/how-much-does-it-cost-build-deck.htm" style={S.link}>Angi</a>
            {' '}lists $30–$60 per square foot for deck construction, updated September 24, 2026). Applied to common sizes, that simple arithmetic of $35–$80 per square foot times the floor area is about $10,500–$24,000 for 300 sq ft, $14,000–$32,000 for 400 sq ft, $17,500–$40,000 for 500 sq ft and $21,000–$48,000 for 600 sq ft. Permits, demolition, elevation and complex stairs are excluded; these are external benchmarks, not Loudoun Decks prices (see{' '}
            <Link href="/composite-deck-cost-northern-virginia" style={S.link}>
              composite deck cost in Northern Virginia
            </Link>
            ), and a written estimate is the only project price.
          </p>
        </div>
      </section>

      <article style={{ padding: '3.5rem 0' }}>
        <div style={S.container}>
          <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/showcase/img18.jpeg"
              alt="Composite deck cost by size in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 960px) 100vw, 960px"
              quality={70}
              priority
            />
          </div>

          <h2 style={{ ...S.h2, marginTop: 0 }}>Composite Deck Cost by Size</h2>
          <p style={S.p}>
            Each total below is the simple arithmetic of $35–$80 per square foot times that floor area (RemodelCalculators, reviewed October 11, 2026). These are external benchmarks, not Loudoun Decks prices.
          </p>

          {sizes.map((s) => (
            <div key={s.sqft} style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem' }}>
              <h3 style={{ ...S.h3, margin: 0 }}>{s.label}</h3>
              <p style={{ ...S.p, color: '#666', fontSize: '0.95rem', marginBottom: '0.75rem', marginTop: '0.5rem' }}>{s.use}</p>
              <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>
                <strong>External benchmark, $35–$80/sq ft (RemodelCalculators 2026):</strong> {s.benchmark}
              </p>
            </div>
          ))}

          <p style={S.p}>
            RemodelCalculators places Trex Enhance at $35–$60 per sq ft and Transcend at $45–$80 per sq ft.
          </p>

          <h2 style={S.h2}>Why Cost Doesn&apos;t Scale Strictly Per Square Foot</h2>
          <p style={S.p}>
            A larger deck adds more than deck boards. It can add railing length, another stair flight, deeper framing, more footings, and sometimes built-in seating or planters. On a smaller deck, permits, mobilization, and design work are a larger share of the project because those items do not shrink with the floor area.
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', lineHeight: 1.85 }}>
            <li><strong>Railings:</strong> priced by linear foot, so larger perimeters add more railing</li>
            <li><strong>Stairs:</strong> each additional flight adds cost</li>
            <li><strong>Lighting:</strong> scales with perimeter</li>
            <li><strong>Footings:</strong> more area usually means more footings, as set by the approved plan</li>
            <li>
              <strong>Permits:</strong> county fees are listed on{' '}
              <Link href="/composite-deck-cost-northern-virginia" style={S.link}>/composite-deck-cost-northern-virginia</Link>
              {' '}(
              <a href="https://www.loudoun.gov/1166/Decks" style={S.link}>Loudoun Typical Deck $265</a>
              ;{' '}
              <a href="https://www.fairfaxcounty.gov/landdevelopment/sites/landdevelopment/files/assets/documents/fee-schedule.pdf" style={S.link}>Fairfax minimum base fee $141.75</a>
              {' '}plus levy and surcharge, 2026) and are excluded from the ranges above
            </li>
          </ul>

          <h2 style={S.h2}>What Drives the Tier Choice</h2>
          <p style={S.p}>
            The material tier is a major cost driver. See the{' '}
            <Link href="/trex-vs-timbertech-vs-azek" style={S.link}>
              material comparison guide
            </Link>{' '}
            for product-specific warranty sources, and the{' '}
            <Link href="/composite-deck-cost-northern-virginia" style={S.link}>
              full composite deck cost guide
            </Link>{' '}
            for the published external benchmarks.
          </p>

          <h2 style={S.h2}>Size-Specific Cost Guides</h2>
          <p style={S.p}>
            Dedicated cost pages for these Northern Virginia deck sizes:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/400-square-foot-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                400 sq ft deck cost in Northern Virginia →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/600-square-foot-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                600 sq ft deck cost in Northern Virginia →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/800-square-foot-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                800 sq ft deck cost in Northern Virginia →
              </Link>
            </li>
          </ul>

          <h2 style={S.h2}>Estimate Your Monthly Payment</h2>
          <p style={S.p}>
            After you have a written project amount, use the{' '}
            <Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              deck payment estimator
            </Link>
            . The lender sets the rate and the term. Use the{' '}
            <Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              deck cost calculator
            </Link>{' '}
            to organize size and scope before you request that estimate.
          </p>

          <h2 style={S.h2}>Related Cost & Material Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                composite deck cost in Northern Virginia
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/wood-vs-composite-deck-long-term-cost" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Wood vs Composite: 15-Year Cost Analysis →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/trex-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Trex Decks →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/timbertech-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                TimberTech & AZEK Decks →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/deck-financing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Deck Financing Options →
              </Link>
            </li>
          </ul>

          <h2 style={S.h2}>FAQ</h2>
          {faqs.map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 10, padding: '1.25rem', marginBottom: '0.75rem', background: '#fff' }}>
              <summary style={{ fontWeight: 700, cursor: 'pointer', fontSize: '1rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.75, color: '#555', fontSize: '0.95rem' }}>{faq.a}</p>
            </details>
          ))}

          <div style={{ background: 'var(--color-dark)', borderRadius: 14, padding: '2.5rem 2rem', textAlign: 'center', margin: '3rem 0 1rem' }}>
            <h2 style={{ fontSize: '1.7rem', fontWeight: 800, color: '#fff', marginTop: 0, marginBottom: '0.75rem' }}>
              Estimate Project Payment by Size
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 560, margin: '0 auto 1.75rem', fontSize: '1.02rem', lineHeight: 1.6 }}>
              Drop the project amount for your size + tier into the payment estimator.
            </p>
            <Link href="/deck-payment-estimator" style={{ display: 'inline-block', background: 'var(--color-primary)', color: '#fff', padding: '1rem 2rem', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: '1.02rem' }}>
              Open the Deck Payment Estimator →
            </Link>
          </div>
        </div>
      </article>

      <SimpleCTA title="Get a Written Estimate by Deck Size" buttonText="Get Free Estimate" link="/get-estimate" />
      <NamedAuthor context="Northern Virginia" lastUpdated={UPDATED} />
      <RelatedGuides currentPath={PATH} />
      <ContactHome />
    </>
  );
}
