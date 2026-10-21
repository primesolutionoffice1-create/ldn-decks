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
import { NEW_COMPOSITE_ANSWER, REPLACEMENT_RANGE_ANSWER } from '@/lib/externalPlanningRanges';

const PATH = '/resurface-or-replace-deck-financing';
const PAGE_TITLE = 'Resurface or Replace Before Financing? 2026 Decision Guide';
const UPDATED = '2026-10-21';
const DESCRIPTION = 'Resurface a sound frame or replace a failed one. This page does not publish a savings percentage. A written estimate is the only project price.';

const paymentNote = 'This page does not publish a monthly payment or an example APR. Enter the written estimate for the scope you choose in the deck payment estimator. The lender sets the rate and the term.';

const savingsNote = 'This page does not publish a savings percentage for resurfacing. The external benchmarks below are different scopes. Do not subtract them to create a savings figure, and do not add them together.';

const quickAnswer = [DESCRIPTION, savingsNote, REPLACEMENT_RANGE_ANSWER, paymentNote].join(' ');

const faqs = [
  {
    q: 'Is resurfacing cheaper to finance than full replacement?',
    a: `${savingsNote} ${REPLACEMENT_RANGE_ANSWER} ${paymentNote}`,
  },
  {
    q: 'Can the same lender review either scope?',
    a: 'A lender reviews an approved project amount. Resurfacing and replacement are different scopes, so the written estimate amount can differ. The rate and the term come from the lender. This page does not publish an APR.',
  },
  {
    q: 'What disqualifies a deck from resurfacing?',
    a: 'Soft or rotting joists, leaning or rotting posts, shifted or heaved footings, a ledger pulling away from the house, or a deck that bounces underfoot mean the frame needs structural work. Resurfacing those conditions is not a substitute for replacement.',
  },
  {
    q: 'Does replacement always cost more to finance?',
    a: 'Replacement includes structure that resurfacing leaves in place, so the written estimate is often higher. This page does not publish that difference as a percentage or as a monthly payment. If the frame is unsafe, replacement is the scope that gets financed.',
  },
  {
    q: 'How do I know which scope I need?',
    a: 'An on-site inspection checks joists, beams, posts, footings, the ledger, and flashing. The written estimate prices the scope that inspection supports. Use that amount in the deck payment estimator.',
  },
  {
    q: 'Does either option require a permit in Northern Virginia?',
    a: 'Loudoun, Fairfax, Prince William, Arlington, and Alexandria can require a permit when the work changes the deck surface, the railings, or the structure. The written estimate identifies the permit path for the address. Loudoun Decks prepares the permit submission for the projects it builds.',
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

export const metadata = buildMetadata({
  path: PATH,
  title: PAGE_TITLE,
  description: DESCRIPTION,
  image: '/social/resurface-or-replace-deck-financing-social.png',
});

const S = {
  h2: { fontSize: '1.85rem', fontWeight: 800, marginBottom: '1.1rem', marginTop: '2.5rem', lineHeight: 1.2 },
  h3: { fontSize: '1.2rem', fontWeight: 700, margin: '1.5rem 0 0.6rem' },
  p: { marginBottom: '1rem', lineHeight: 1.75, fontSize: '1rem', overflowWrap: 'anywhere' },
  container: { maxWidth: 960, margin: '0 auto', padding: '0 1.5rem' },
  link: { color: 'var(--color-primary)', fontWeight: 600 },
};

function LinkedText({ text }) {
  const urlRe = /https:\/\/[^\s),]+/g;
  const nodes = [];
  let last = 0;
  let match;
  let i = 0;
  while ((match = urlRe.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const url = match[0];
    nodes.push(
      <a key={`${i}-${url}`} href={url} target="_blank" rel="noopener noreferrer" style={S.link}>
        {url}
      </a>
    );
    last = match.index + url.length;
    i += 1;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

const resurfaceChecks = [
  'Joists are firm, with no soft spots',
  'Posts are straight and the bases are sound',
  'Footings are stable',
  'The ledger is mechanically attached',
  'The deck does not bounce underfoot',
];

const replaceChecks = [
  'Joists are soft, sagging, or rotting',
  'Posts lean or the bases are rotting',
  'Footings have shifted or heaved',
  'The ledger is pulling away from the house',
  'The deck bounces under load',
];

export default function ResurfaceOrReplaceFinancingPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ArticleSchema
        title="Resurface or Replace Before Financing? Decision Guide"
        description={DESCRIPTION}
        path={PATH}
        image="/images/img26.jpeg"
        datePublished="2026-05-27"
        dateModified={UPDATED}
      />
      <WebPageSchema
        dateModified={UPDATED}
        url={`https://ldndecks.com${PATH}`}
        name={PAGE_TITLE}
        description={DESCRIPTION}
        speakable
      />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={S.container}>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Decision Support &middot; Financing
          </p>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
            Is It Better to Resurface or Replace a Deck Before Financing?
          </h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Resurfacing keeps a frame that passes inspection. Replacement is the path when the frame does not. This page does not publish a savings percentage.
          </p>
        </div>
      </section>

      <TrustBanner />

      <AboveFoldCTA
        headline="Not sure if your frame passes? Schedule an on-site inspection before you commit to a project amount."
        estimateHref="/get-estimate"
        estimateLabel="Schedule an Inspection"
      />

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }} className="quick-answer">
        <div style={S.container}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p data-speakable style={S.p}>
            <LinkedText text={quickAnswer} />
          </p>
          <p style={S.p}>
            Sources:{' '}
            <a href="https://latestcost.com/composite-decking-cost-comparison-material-size-installation/" target="_blank" rel="noopener noreferrer" style={S.link}>
              https://latestcost.com/composite-decking-cost-comparison-material-size-installation/
            </a>
            {' '}and{' '}
            <a href="https://www.angi.com/articles/how-much-does-composite-decking-cost.htm" target="_blank" rel="noopener noreferrer" style={S.link}>
              https://www.angi.com/articles/how-much-does-composite-decking-cost.htm
            </a>
            .
          </p>
        </div>
      </section>

      <article style={{ padding: '3.5rem 0' }}>
        <div style={S.container}>
          <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img26.jpeg"
              alt="Deck resurfacing and replacement decision in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 960px) 100vw, 960px"
              quality={70}
              priority
            />
          </div>

          <h2 style={{ ...S.h2, marginTop: 0 }}>External benchmarks, not a savings percentage</h2>
          <p style={S.p}><LinkedText text={REPLACEMENT_RANGE_ANSWER} /></p>
          <p style={S.p}><LinkedText text={NEW_COMPOSITE_ANSWER} /></p>
          <p style={S.p}>{savingsNote}</p>

          <h2 style={S.h2}>The frame decides the scope</h2>
          <p style={S.p}>
            Resurfacing is the smaller scope when the existing frame passes inspection. Reusing a failing frame is a safety problem. The inspection, not a percentage of the project, decides which list below applies.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ background: '#e8f5e9', borderRadius: 8, padding: '1.5rem' }}>
              <h3 style={{ fontWeight: 700, color: '#2e7d32', marginTop: 0, marginBottom: '0.75rem' }}>Resurface when</h3>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.95rem', margin: 0 }}>
                {resurfaceChecks.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div style={{ background: '#ffebee', borderRadius: 8, padding: '1.5rem' }}>
              <h3 style={{ fontWeight: 700, color: '#c62828', marginTop: 0, marginBottom: '0.75rem' }}>Replace when</h3>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.95rem', margin: 0 }}>
                {replaceChecks.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>

          <h2 style={S.h2}>Financing follows the written estimate</h2>
          <p style={S.p}>
            The rate a lender offers comes from the application, not from the project type. {paymentNote}{' '}
            <Link href="/deck-payment-estimator" style={S.link}>Open the deck payment estimator</Link>
            {' '}after the inspection.
          </p>

          <h2 style={S.h2}>When replacement is the scope</h2>
          <p style={S.p}>
            A full replacement includes new framing, footings, and ledger work. This page does not state a warranty term and does not publish how many years a resurfaced frame will last. An older deck with a marginal frame may need replacement. A newer deck with a sound frame may be a resurfacing scope. The inspection decides.
          </p>

          <h2 style={S.h2}>Inspection before the application</h2>
          <p style={S.p}>
            Schedule an on-site inspection before applying for financing. The visit documents the frame and prices the scope that is safe. When both scopes are viable, the written estimate can price both so you can enter each amount in the estimator. See the{' '}
            <Link href="/deck-resurfacing-vs-replacement" style={S.link}>resurfacing vs replacement comparison</Link>
            {' '}for the construction difference.
          </p>

          <h2 style={S.h2}>FAQ</h2>
          {faqs.map((faq) => (
            <details key={faq.q} style={{ border: '1px solid #e5e5e5', borderRadius: 10, padding: '1.25rem', marginBottom: '0.75rem', background: '#fff' }}>
              <summary style={{ fontWeight: 700, cursor: 'pointer', fontSize: '1rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.75, color: '#555', fontSize: '0.95rem', overflowWrap: 'anywhere' }}>
                <LinkedText text={faq.a} />
              </p>
            </details>
          ))}

          <h2 style={S.h2}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/deck-resurfacing-vs-replacement', 'Deck resurfacing vs replacement'],
              ['/services/deck-resurfacing', 'Deck resurfacing service'],
              ['/services/deck-replacement', 'Deck replacement service'],
              ['/deck-resurfacing-northern-virginia', 'Deck resurfacing in Northern Virginia'],
              ['/deck-payment-estimator', 'Deck payment estimator'],
              ['/deck-financing', 'Deck financing in Northern Virginia'],
              ['/deck-safety-inspection-checklist', 'Deck safety inspection checklist'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}>
                <Link href={href} style={S.link}>{text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <SimpleCTA title="Price the Right Scope: Resurface or Replace?" buttonText="Schedule an Inspection" link="/get-estimate" />
      <NamedAuthor context="Northern Virginia" lastUpdated={UPDATED} />
      <RelatedGuides currentPath={PATH} />
      <ContactHome />
    </>
  );
}
