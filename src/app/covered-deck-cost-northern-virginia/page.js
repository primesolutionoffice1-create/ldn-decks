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

export const metadata = buildMetadata({
  path: '/covered-deck-cost-northern-virginia',
  title: 'Covered Deck Cost in Northern Virginia: 2026 Budget Guide',
  description: 'Covered deck cost in Northern Virginia: $35,000–$85,000+ depending on roof type, size, and finishes. Per-tier pricing plus monthly payment examples.',
  image: '/showcase/img09.jpeg',
});

const PATH = '/covered-deck-cost-northern-virginia';

const roofTypes = [
  {
    name: 'Open Pergola',
    desc: 'Slatted roof — shade and architecture, no full weather protection',
    range: '$8,000–$18,000 add-on',
    notes: 'Often added to an existing deck or as part of a new build',
  },
  {
    name: 'Solid Pergola (Louvered or Shingle)',
    desc: 'Full overhead protection with louvered (adjustable) or fixed shingle roof',
    range: '$15,000–$35,000 add-on',
    notes: 'Best balance of weather coverage and architectural appeal',
  },
  {
    name: 'Covered Deck (Hip or Gable Roof)',
    desc: 'Full pitched roof matching the house — feels like an extension of the home',
    range: '$25,000–$55,000 add-on',
    notes: 'Premium choice — adds the most resale value and weather coverage',
  },
  {
    name: 'Screened Porch Conversion',
    desc: 'Covered deck enclosed with screens and optional EZE-Breeze windows',
    range: '$15,000–$45,000 above the cover',
    notes: 'Extends usable season from 5 months to 9–10 months',
  },
];

const totals = [
  ['300 sqft covered deck (mid composite + solid pergola)', '$35,000–$50,000', '$443–$633 /mo (10y)'],
  ['400 sqft covered deck (mid composite + hip roof)', '$48,000–$68,000', '$608–$861 /mo (10y)'],
  ['500 sqft covered deck (premium composite + hip roof)', '$60,000–$85,000+', '$759–$1,076 /mo (10y)'],
  ['350 sqft covered deck + screened porch conversion', '$55,000–$75,000', '$696–$949 /mo (10y)'],
];

const faqs = [
  {
    q: 'How much does a covered deck cost in Northern Virginia?',
    a: 'A covered deck in Northern Virginia typically runs $35,000–$85,000+ depending on size, roof type, and finish level. The roof structure adds $15,000–$55,000 to a comparable open deck. Solid pergolas land in the middle; full pitched roofs are the premium option.',
  },
  {
    q: 'What is the monthly payment on a $55,000 covered deck?',
    a: 'At a sample 8.99% APR, a $55,000 covered deck financed over 10 years is roughly $696/month and roughly $558/month over 15 years. Many homeowners model 15-year terms on covered decks because the project amount is higher.',
  },
  {
    q: "What's the difference between a pergola, covered deck, and screened porch?",
    a: 'A pergola adds shade and architecture but only partial weather protection. A covered deck adds a full roof (louvered, shingle, hip, or gable) for complete weather coverage. A screened porch encloses a covered deck with screens (and optional EZE-Breeze windows) to extend usable season and keep insects out.',
  },
  {
    q: 'Does a covered deck need a different permit?',
    a: 'Yes. Loudoun, Fairfax, and Prince William counties treat covered decks as a roofed structure with different load calculations than an open deck. The permit fee is higher and structural drawings are often required. We handle the permit and engineering coordination.',
  },
  {
    q: 'Does a covered deck add more home value than an open deck?',
    a: 'Generally yes. A covered deck adds roughly 70–85% of its cost to home resale value vs 65–80% for an open deck, because it functions as a true outdoor room. Screened porches recoup at the high end of that range in Northern Virginia.',
  },
  {
    q: 'Can I add a cover to my existing deck?',
    a: 'Often yes, if the existing frame and footings can support the added load. A structural inspection determines whether the existing deck can handle a roof — sometimes posts need to be upgraded or new footings added. We quote both options after a free on-site visit.',
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

export default function CoveredDeckCostPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ArticleSchema
        title="Covered Deck Cost in Northern Virginia: 2026 Budget Guide"
        description="Covered deck cost in Northern Virginia: $35,000–$85,000+ depending on roof type, size, and finishes."
        path={PATH}
        image="/showcase/img09.jpeg"
        datePublished="2026-05-27"
        dateModified="2026-05-27"
      />
      <WebPageSchema url={`https://ldndecks.com${PATH}`} name="Covered Deck Cost in Northern Virginia: 2026 Budget Guide" description="Covered deck cost in Northern Virginia: $35,000–$85,000+ depending on roof type, size, and finishes. Per-tier pricing plus monthly payment examples." speakable />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={S.container}>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Covered Decks &middot; Northern Virginia
          </p>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
            Covered Deck Cost and Payment Planning in Northern Virginia
          </h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Pergola, solid roof, full hip roof, or screened porch — pricing by roof type, total project examples, and
            matching monthly payment ranges for Northern Virginia homeowners.
          </p>
        </div>
      </section>

      <TrustBanner />

      <AboveFoldCTA
        headline="Plan your covered deck monthly payment with the deck payment estimator."
        estimateHref="/deck-payment-estimator"
        estimateLabel="Estimate Covered Deck Payment"
      />

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }} className="quick-answer">
        <div style={S.container}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p data-speakable>
            A <strong>covered deck</strong> in Northern Virginia runs <strong>$35,000–$85,000+</strong> depending on
            size, roof type, and finish. The roof adds $15,000–$55,000 over a comparable open deck. At 8.99% APR over
            10 years, that&apos;s roughly <strong>$443–$1,076/month</strong>. Run your project amount through the{' '}
            <Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>
              deck payment estimator
            </Link>{' '}
            for the exact monthly number.
          </p>
        </div>
      </section>

      <article style={{ padding: '3.5rem 0' }}>
        <div style={S.container}>
          <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/showcase/img09.jpeg"
              alt="Covered deck construction in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 960px) 100vw, 960px"
              quality={70}
              priority
            />
          </div>

          <h2 style={{ ...S.h2, marginTop: 0 }}>Cover Type Cost Breakdown</h2>
          <p style={S.p}>
            The roof structure is the biggest single driver of covered deck cost. Below are typical 2026 add-on prices
            in Northern Virginia for each roof type — added on top of the deck itself.
          </p>
          {roofTypes.map((r, i) => (
            <div key={r.name} style={{ background: i === 2 ? '#fff8f1' : '#f9f9f9', border: `1px solid ${i === 2 ? '#f4d2bd' : '#e5e5e5'}`, borderRadius: 12, padding: '1.5rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <h3 style={{ ...S.h3, margin: 0 }}>{r.name}</h3>
                <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>{r.range}</span>
              </div>
              <p style={{ ...S.p, color: '#666', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{r.desc}</p>
              <p style={{ ...S.p, fontSize: '0.85rem', color: '#999', marginBottom: 0, fontStyle: 'italic' }}>{r.notes}</p>
            </div>
          ))}

          <h2 style={S.h2}>Total Project Examples (Deck + Cover)</h2>
          <p style={S.p}>
            The table below combines deck and roof to show total project amount and matching monthly payment at 8.99%
            APR over 10 years. Use these as planning anchors — your real number comes from a written estimate.
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={S.th}>Project Scenario</th>
                  <th style={S.th}>Total Project</th>
                  <th style={S.th}>Monthly (10y)</th>
                </tr>
              </thead>
              <tbody>
                {totals.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ ...S.td, fontWeight: 700 }}>{row[0]}</td>
                    <td style={S.td}>{row[1]}</td>
                    <td style={{ ...S.td, color: 'var(--color-primary)', fontWeight: 700 }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>Why Covered Decks Cost More to Permit</h2>
          <p style={S.p}>
            A covered deck is treated as a roofed structure by Loudoun, Fairfax, and Prince William county building
            departments. Load calculations include snow load, wind load, and post-to-beam capacity at the cover
            connection points. Structural drawings are often required, which adds $500–$1,500 in engineering cost. We
            coordinate the structural review and handle the permit submission.
          </p>

          <h2 style={S.h2}>Adding a Cover to an Existing Deck</h2>
          <p style={S.p}>
            Many Northern Virginia homeowners want to add a roof to a deck they built 5–10 years ago. The decision
            depends on three things: (1) can the existing posts and footings support the added load, (2) is the deck
            elevation high enough for headroom under the new roof, and (3) is the house attachment point still sound.
            A free inspection answers all three.
          </p>

          <h2 style={S.h2}>Financing a Covered Deck Project</h2>
          <p style={S.p}>
            Covered decks usually finance well because the project amount is high enough to make the lender review
            efficient. Soft-pull pre-qualification through Enhancify returns multiple lender offers in roughly 60
            seconds. Many homeowners model 15-year terms on covered decks because the lower monthly payment frees up
            cash for landscaping or interior projects. Full process on the{' '}
            <Link href="/deck-financing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              deck financing page
            </Link>.
          </p>

          <h2 style={S.h2}>Related Services and Cost Pages</h2>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/covered-deck-builder-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Covered Deck Builder in Northern Virginia →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/screened-porch-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Screened Porch Cost Guide →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/services/gazebo-pergola" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Gazebo & Pergola Service →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Composite Deck Cost in Northern Virginia →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/louvered-pergola-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Louvered Pergola in Northern Virginia →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/three-season-room-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Three-Season Room Builder →
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
        </div>
      </article>

      <SimpleCTA title="Plan a Covered Deck Budget" buttonText="Get Free Written Estimate" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-27" />
      <RelatedGuides currentPath={PATH} />
      <ContactHome />
    </>
  );
}
