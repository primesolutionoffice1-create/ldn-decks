import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ArticleSchema from '@/components/ArticleSchema';
import SimpleCTA from '@/components/SimpleCTA';
import TrustBanner from '@/components/TrustBanner';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import NamedAuthor from '@/components/NamedAuthor';
import AboveFoldCTA from '@/components/AboveFoldCTA';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/composite-deck-cost-by-size',
  title: 'Composite Deck Cost by Size: 300, 400, 500, 600 Sq Ft Examples',
  description: 'Composite deck cost by size — real 2026 pricing for 300, 400, 500, and 600 sqft decks in Northern Virginia. Per-tier breakdown plus monthly payment.',
  image: '/showcase/img09.jpeg',
});

const PATH = '/composite-deck-cost-by-size';

const sizes = [
  {
    sqft: 300,
    label: '300 sqft (e.g. 15×20)',
    use: 'Standard family deck for a townhouse or smaller single-family yard.',
    budget: '$16,500–$24,000',
    mid: '$22,000–$32,000',
    premium: '$28,000–$38,000+',
    monthlyMid: '$278–$405 /mo (10y)',
  },
  {
    sqft: 400,
    label: '400 sqft (e.g. 20×20)',
    use: 'Mid-size deck with seating zone, grill area, and dining table.',
    budget: '$20,000–$30,000',
    mid: '$27,000–$38,000',
    premium: '$34,000–$46,000+',
    monthlyMid: '$342–$481 /mo (10y)',
  },
  {
    sqft: 500,
    label: '500 sqft (e.g. 25×20)',
    use: 'Large entertaining deck with multiple zones, pergola-ready.',
    budget: '$24,000–$35,000',
    mid: '$32,000–$45,000',
    premium: '$40,000–$55,000+',
    monthlyMid: '$405–$570 /mo (10y)',
  },
  {
    sqft: 600,
    label: '600 sqft (e.g. 20×30 or 24×25)',
    use: 'Premium outdoor living space — two zones, often two stair flights, room for built-ins.',
    budget: '$28,000–$42,000',
    mid: '$38,000–$55,000',
    premium: '$48,000–$70,000+',
    monthlyMid: '$481–$696 /mo (10y)',
  },
];

const faqs = [
  {
    q: 'How much does a 300 sqft composite deck cost in Northern Virginia?',
    a: 'A 300 sqft composite deck in Northern Virginia runs $16,500–$38,000+ depending on tier. Budget composite (Trex Enhance, Fiberon Good Life) lands $16,500–$24,000. Mid-tier (Trex Transcend, TimberTech PRO) runs $22,000–$32,000. Premium (Trex Signature, AZEK Vintage) runs $28,000–$38,000+.',
  },
  {
    q: 'How much does a 400 sqft composite deck cost?',
    a: 'A 400 sqft composite deck in Northern Virginia typically runs $20,000–$46,000+. Pricing scales roughly linearly with size, but a 400 sqft deck often includes an extra stair flight, deeper joists, and more railing — which adds $2,000–$5,000 over a strict per-square-foot calculation.',
  },
  {
    q: 'What does a 500 sqft composite deck cost installed?',
    a: 'A 500 sqft composite deck in Northern Virginia runs $24,000–$55,000+. At this size, picture-frame borders, multi-zone layouts, lighting packages, and railings become a larger share of the total cost. Most 500 sqft projects land in the mid-tier $32,000–$45,000 range.',
  },
  {
    q: 'How much does a 600 sqft composite deck cost?',
    a: 'A 600 sqft composite deck in Northern Virginia runs $28,000–$70,000+ installed. Decks this size almost always include two stair flights, a more complex framing plan, full railing system, and often built-in seating or planter benches that add to the project amount.',
  },
  {
    q: 'Does the cost scale linearly with size?',
    a: 'No. Larger decks have proportionally more railing, more stairs, deeper framing requirements, and more lighting. A 600 sqft deck typically costs ~1.7–1.9× a 300 sqft deck of the same tier, not 2× — but it also adds features that smaller decks rarely include.',
  },
  {
    q: 'What size deck do most Northern Virginia homeowners build?',
    a: 'Most new builds and replacements in Loudoun, Fairfax, and Prince William counties land in the 300–500 sqft range. Townhouse decks cluster at 200–300 sqft. Single-family backyards typically go 400–600 sqft. Custom estate properties build 600–1,000+ sqft.',
  },
  {
    q: 'How do I estimate the monthly payment for my size?',
    a: 'Pick the size + tier from the table above to find the project amount range, then run that number through the deck payment estimator. Most lenders run 8–11% APR over 10 or 15 years for home-improvement financing in this credit range.',
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
};

export default function CompositeDeckCostBySizePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ArticleSchema
        title="Composite Deck Cost by Size: 300, 400, 500, 600 Sq Ft Examples"
        description="Composite deck cost by size — real 2026 pricing for 300, 400, 500, and 600 sqft decks in Northern Virginia."
        path={PATH}
        image="/showcase/img09.jpeg"
        datePublished="2026-05-27"
        dateModified="2026-05-27"
      />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={S.container}>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Cost Guide &middot; Northern Virginia
          </p>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
            Composite Deck Cost by Size: 300, 400, 500, and 600 Sq Ft Examples
          </h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Real 2026 pricing for composite decks in Northern Virginia by size and material tier, plus matching monthly
            payment ranges.
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
            In Northern Virginia, composite decks land in these ranges by size:{' '}
            <strong>300 sqft $16.5k–$38k+</strong>, <strong>400 sqft $20k–$46k+</strong>,{' '}
            <strong>500 sqft $24k–$55k+</strong>, <strong>600 sqft $28k–$70k+</strong>. The wide ranges reflect material
            tier (budget vs mid vs premium). Run your project amount through the{' '}
            <Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>
              payment estimator
            </Link>{' '}
            for the monthly number.
          </p>
        </div>
      </section>

      <article style={{ padding: '3.5rem 0' }}>
        <div style={S.container}>
          <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/showcase/img09.jpeg"
              alt="Composite deck cost by size in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 960px) 100vw, 960px"
              quality={70}
              priority
            />
          </div>

          <h2 style={{ ...S.h2, marginTop: 0 }}>Composite Deck Cost by Size and Tier</h2>
          <p style={S.p}>
            Below are full installed costs for the four most common composite deck sizes in Loudoun, Fairfax, Prince
            William, Arlington, and Alexandria. Tiers are budget (Trex Enhance / Fiberon Good Life), mid (Trex
            Transcend / TimberTech PRO), and premium (Trex Signature / TimberTech AZEK Vintage).
          </p>

          {sizes.map((s) => (
            <div key={s.sqft} style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <h3 style={{ ...S.h3, margin: 0 }}>{s.label}</h3>
                <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>{s.monthlyMid}</span>
              </div>
              <p style={{ ...S.p, color: '#666', fontSize: '0.95rem', marginBottom: '0.75rem' }}>{s.use}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.5rem 1rem', fontSize: '0.9rem' }}>
                <div><strong>Budget:</strong> {s.budget}</div>
                <div><strong>Mid:</strong> {s.mid}</div>
                <div><strong>Premium:</strong> {s.premium}</div>
              </div>
            </div>
          ))}

          <h2 style={S.h2}>Why Cost Doesn&apos;t Scale Strictly Per Square Foot</h2>
          <p style={S.p}>
            A 600 sqft deck does not cost 2× a 300 sqft deck. Larger decks add features that smaller decks rarely need
            — more railing linear feet, two stair flights, deeper framing, more concrete footings, and often built-in
            seating or planters. Conversely, the per-square-foot cost on small decks (under 250 sqft) is often higher
            because permits, mobilization, and design overhead are roughly fixed regardless of size.
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', lineHeight: 1.85 }}>
            <li><strong>Railings:</strong> $40–$150 per linear foot — bigger decks have proportionally more</li>
            <li><strong>Stairs:</strong> $1,500–$4,000 per flight — bigger decks often need a second flight</li>
            <li><strong>Lighting:</strong> $1,500–$5,000 — scales with deck perimeter, not surface area</li>
            <li><strong>Footings:</strong> One additional footing per ~100 sqft of new deck</li>
            <li><strong>Permits:</strong> Roughly flat $300–$1,500 across all sizes</li>
          </ul>

          <h2 style={S.h2}>What Drives the Tier Choice</h2>
          <p style={S.p}>
            The tier (budget vs mid vs premium) is usually the biggest single driver of total cost. For Northern
            Virginia homeowners staying in the home 10+ years, mid-tier is the sweet spot — Trex Transcend or
            TimberTech PRO Reserve carry 25-30 year fade & stain warranties and look indistinguishable from premium
            tiers at normal viewing distance. Premium pays off if you want the 50-year AZEK Vintage warranty or the
            deepest grain pattern. See the{' '}
            <Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              full composite deck cost guide
            </Link>{' '}
            for tier detail.
          </p>

          <h2 style={S.h2}>Size-Specific Cost Guides</h2>
          <p style={S.p}>
            We publish dedicated cost pages for the most common Northern Virginia deck sizes:
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
            Once you have a size + tier picked, drop the project amount into the{' '}
            <Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              deck payment estimator
            </Link>{' '}
            to see the monthly payment at different APRs and terms. Use the{' '}
            <Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              deck cost calculator
            </Link>{' '}
            first to refine the project amount itself.
          </p>

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

      <SimpleCTA title="Get a Written Estimate by Deck Size" buttonText="Get Free Estimate" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-27" />
      <RelatedGuides currentPath={PATH} />
      <ContactHome />
    </>
  );
}
