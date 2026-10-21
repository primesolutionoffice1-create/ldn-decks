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
import EnhancifyPaymentCalculator from '@/components/EnhancifyPaymentCalculator';
import NamedAuthor from '@/components/NamedAuthor';
import AboveFoldCTA from '@/components/AboveFoldCTA';
import { buildMetadata } from '@/lib/seo';
import { COMPOSITE_PLANNING_ROWS, NEW_COMPOSITE_ANSWER } from '@/lib/externalPlanningRanges';

const PATH = '/monthly-payment-composite-deck-northern-virginia';
const PAGE_TITLE = 'Monthly Payment on a Composite Deck in Northern Virginia';
const UPDATED = '2026-10-21';
const DESCRIPTION = 'A composite deck in Northern Virginia is priced in a written estimate. Dollar figures here are external benchmarks, not a Loudoun Decks price or an APR.';

const paymentNote = 'This page does not publish a monthly payment or an example APR. Enter the amount from your written estimate in the deck payment estimator. The lender sets the rate and the term. The result is planning math, not a lender quote.';

const benchmarkNote = `${NEW_COMPOSITE_ANSWER} Sources: https://remodelcalculators.com/deck-cost and https://www.angi.com/articles/how-much-does-it-cost-build-deck.htm. These benchmarks are context for the project amount. They are not a monthly payment, and the rows in the table below are not added together.`;

const quickAnswer = [DESCRIPTION, paymentNote, benchmarkNote].join(' ');

const scopeItems = [
  'Composite or PVC decking, using the collection named in the estimate',
  'Framing, either kept when the structure is confirmed sound or replaced',
  'Fasteners and joist tape when they are part of the scope',
  'Railings and stairs',
  'Lighting, when it is part of the scope',
  'Demolition and haul-away, when an old deck is removed',
  'Permit fees for the county where the deck is built',
  'HOA submission, when the community requires it',
  'Design, project management, and cleanup included in the estimate',
];

const faqs = [
  {
    q: 'How much is the monthly payment on a composite deck?',
    a: `${paymentNote} ${NEW_COMPOSITE_ANSWER}`,
  },
  {
    q: 'What APR should I use for a composite deck?',
    a: 'This page does not publish an example APR. The lender sets the rate after reviewing the application. The estimator can show planning math after you enter a rate the lender has given you.',
  },
  {
    q: 'Can I use home equity instead of another loan?',
    a: 'A home equity loan or a HELOC is a separate product, and it uses the home as collateral. The lender sets the rate, the term, and the closing steps. This page does not compare those rates with any other loan.',
  },
  {
    q: 'Does the monthly payment include permits, HOA review, and railings?',
    a: 'Put the full written estimate into the estimator. That amount should include the decking, framing, railings, stairs, lighting, demolition, permits, and HOA submission when those items are in the scope. Entering only the deck boards leaves those items out of the planning math.',
  },
  {
    q: 'How does financing change the cost compared with paying cash?',
    a: 'Financing adds interest over the life of the loan. The lender calculates that interest from the rate and the term. This page does not publish an interest total.',
  },
  {
    q: 'Will the estimator check my credit?',
    a: 'The estimator on this page does not check credit. Whether a lender uses a soft credit check, and when a hard inquiry happens, is set by that lender.',
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
  image: '/social/monthly-payment-composite-deck-northern-virginia-social.png',
});

const S = {
  h2: { fontSize: '1.85rem', fontWeight: 800, marginBottom: '1.1rem', marginTop: '2.5rem', lineHeight: 1.2 },
  h3: { fontSize: '1.2rem', fontWeight: 700, margin: '1.5rem 0 0.6rem' },
  p: { marginBottom: '1rem', lineHeight: 1.75, fontSize: '1rem', overflowWrap: 'anywhere' },
  th: { padding: '0.85rem', textAlign: 'left', borderBottom: '2px solid #ddd', fontSize: '0.92rem', background: '#f5f5f5', verticalAlign: 'top' },
  td: { padding: '0.85rem', borderBottom: '1px solid #eee', fontSize: '0.92rem', verticalAlign: 'top', overflowWrap: 'anywhere' },
  container: { maxWidth: 960, margin: '0 auto', padding: '0 1.5rem' },
  link: { color: 'var(--color-primary)', fontWeight: 600, overflowWrap: 'anywhere' },
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

export default function MonthlyPaymentCompositeDeckPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ArticleSchema
        title={PAGE_TITLE}
        description={DESCRIPTION}
        path={PATH}
        image="/showcase/img15.jpeg"
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
            Financing &middot; Northern Virginia
          </p>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
            {PAGE_TITLE}
          </h1>
        </div>
      </section>

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }} className="quick-answer">
        <div style={S.container}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p data-speakable style={S.p}>
            <LinkedText text={quickAnswer} />
          </p>
          <p style={S.p}>
            <Link href="/deck-payment-estimator" style={S.link}>
              Open the deck payment estimator
            </Link>
            {' '}
            after you have a written estimate.
          </p>
        </div>
      </section>

      <TrustBanner />

      <AboveFoldCTA
        headline="Start with a written estimate, then model the payment."
        estimateHref="/deck-payment-estimator"
        estimateLabel="Open Deck Payment Estimator"
      />

      <section style={{ background: '#fafafa', padding: '3rem 0', borderBottom: '1px solid #eee' }}>
        <div style={{ ...S.container, maxWidth: 920 }}>
          <h2 style={{ ...S.h2, marginTop: 0, textAlign: 'center', marginBottom: '0.5rem' }}>
            Estimate a monthly payment
          </h2>
          <p style={{ textAlign: 'center', color: '#444', maxWidth: 680, margin: '0 auto 2rem', fontSize: '1rem', lineHeight: 1.6 }}>
            {paymentNote}
          </p>
          <div style={{ background: '#fff', borderRadius: 14, padding: '2rem 1.5rem', border: '1px solid #e5e5e5', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <EnhancifyPaymentCalculator />
          </div>
        </div>
      </section>

      <article style={{ padding: '3.5rem 0' }}>
        <div style={S.container}>
          <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/showcase/img15.jpeg"
              alt="Composite deck in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 960px) 100vw, 960px"
              quality={70}
              priority
            />
          </div>

          <h2 style={{ ...S.h2, marginTop: 0 }}>What the written estimate should include</h2>
          <p style={S.p}>
            The project amount is the number you enter in the estimator. It should be the full written estimate, not the deck boards alone.
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', lineHeight: 1.85 }}>
            {scopeItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 style={S.h2}>External benchmarks for the project amount</h2>
          <p style={S.p}>
            Each row is a different scope. Do not add the rows together, and do not turn a row into a monthly payment. None of these figures is a Loudoun Decks price. The same composite figures are cited on the{' '}
            <Link href="/composite-deck-cost-northern-virginia" style={S.link}>composite deck cost</Link>
            {' '}page.
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <caption style={{ textAlign: 'left', padding: '0 0 0.75rem', fontWeight: 600 }}>
                External planning benchmarks and Loudoun County permit fees. Not Loudoun Decks prices and not monthly payments.
              </caption>
              <thead>
                <tr>
                  <th style={S.th} scope="col">Benchmark</th>
                  <th style={S.th} scope="col">Figure</th>
                  <th style={S.th} scope="col">16×20 (320 sq ft)</th>
                  <th style={S.th} scope="col">20×20 (400 sq ft)</th>
                  <th style={S.th} scope="col">Source</th>
                </tr>
              </thead>
              <tbody>
                {COMPOSITE_PLANNING_ROWS.map((row, i) => (
                  <tr key={row.scenario} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <th style={{ ...S.td, fontWeight: 700 }} scope="row">{row.scenario}</th>
                    <td style={S.td}>{row.rate}</td>
                    <td style={S.td}>{row.size16}</td>
                    <td style={S.td}>{row.size20}</td>
                    <td style={S.td}>
                      <a href={row.sourceUrl} target="_blank" rel="noopener noreferrer" style={S.link}>{row.sourceLabel}</a>
                      {row.corroboration ? (
                        <p style={{ ...S.p, margin: '0.5rem 0 0', fontSize: '0.85rem' }}>
                          <LinkedText text={row.corroboration} />
                          {row.corroborationUrl ? (
                            <>
                              {' '}
                              <a href={row.corroborationUrl} target="_blank" rel="noopener noreferrer" style={S.link}>{row.corroborationUrl}</a>
                            </>
                          ) : null}
                          {row.corroborationUrl2 ? (
                            <>
                              {' '}
                              <a href={row.corroborationUrl2} target="_blank" rel="noopener noreferrer" style={S.link}>
                                {row.corroborationLabel2 || row.corroborationUrl2}
                              </a>
                            </>
                          ) : null}
                        </p>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.p}>
            The 320 sq ft and 400 sq ft totals are the published per-square-foot bounds times those areas. They assume the conditions named in each row. A written estimate after a site visit is the only project price.
          </p>

          <h2 style={S.h2}>What changes the monthly payment</h2>
          <p style={S.p}>
            Three inputs change the planning math: the project amount, the rate, and the term. The project amount comes from the written estimate. The lender sets the rate and the term. This page does not publish a sample rate.
          </p>

          <h2 style={S.h2}>Composite and wood</h2>
          <p style={S.p}>
            Composite and pressure-treated wood differ in upfront cost and in upkeep. This page does not publish a percentage difference. Maintenance depends on exposure, cleaning, and how long you own the deck. The{' '}
            <Link href="/composite-deck-vs-wood-deck-virginia" style={S.link}>composite vs wood comparison</Link>
            {' '}covers that decision.
          </p>

          <h2 style={S.h2}>How to plan a financed deck</h2>
          <ol style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', lineHeight: 1.85 }}>
            <li>Request an on-site visit and a written estimate.</li>
            <li>Enter that amount in the deck payment estimator.</li>
            <li>Ask the lender for the rate and the term. This page does not publish either one.</li>
            <li>Use the lender&apos;s figures for interest. The lender calculates them.</li>
            <li>Permit review and HOA review, when they apply, are separate from the financing application.</li>
          </ol>
          <p style={S.p}>
            <Link href="/deck-financing" style={S.link}>Deck financing</Link>
            {' '}explains the application path.
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
        </div>
      </article>

      <section style={{ padding: '2rem 1.5rem', maxWidth: 960, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related financing and planning guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/deck-payment-estimator" style={S.link}>Deck payment estimator</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/credit-score-deck-financing" style={S.link}>Credit score and deck financing</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/best-time-to-finance-build-deck-northern-virginia" style={S.link}>Best time of year to finance and build a deck</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/trex-deck-cost-monthly-payment" style={S.link}>Trex deck cost and monthly payment</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/timbertech-azek-deck-cost-northern-virginia" style={S.link}>TimberTech and AZEK deck cost</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/composite-deck-cost-by-size" style={S.link}>Composite deck cost by size</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/deck-lighting-railings-stairs-addon-cost" style={S.link}>Lighting, railings, and stairs</Link></li>
        </ul>
      </section>

      <SimpleCTA
        title="Plan Your Composite Deck Monthly Payment"
        buttonText="Get Free Written Estimate"
        link="/get-estimate"
      />
      <NamedAuthor context="Northern Virginia" lastUpdated={UPDATED} />
      <RelatedGuides currentPath={PATH} />
      <ContactHome />
    </>
  );
}
