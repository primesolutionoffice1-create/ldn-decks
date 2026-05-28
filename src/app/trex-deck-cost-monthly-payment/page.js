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
  path: '/trex-deck-cost-monthly-payment',
  title: 'Trex Deck Cost vs Monthly Payment: 2026 Budget Guide',
  description: 'Real Trex deck costs by tier (Enhance, Transcend, Signature) and monthly payment examples at 8–10% APR. Plan a Trex deck budget in Northern Virginia.',
  image: '/showcase/img09.jpeg',
});

const PATH = '/trex-deck-cost-monthly-payment';

const faqs = [
  {
    q: 'How much does a Trex deck cost in Northern Virginia?',
    a: 'A Trex deck in Northern Virginia typically runs $35–$70 per square foot installed, depending on tier. A 350 sqft Trex Enhance project lands $18,000–$26,000; Trex Transcend usually runs $22,000–$32,000; Trex Signature (premium PVC-capped) usually runs $28,000–$40,000+ for the same size.',
  },
  {
    q: 'What is the monthly payment on a $25,000 Trex deck?',
    a: 'At a sample 8.99% APR, a $25,000 Trex deck financed over 10 years is roughly $317/month and roughly $254/month over 15 years. Promotional 0% interest options exist for shorter payoff windows. Pre-qualification through a soft credit pull returns your real number without affecting your credit score.',
  },
  {
    q: 'Which Trex tier gives the best long-term value?',
    a: 'For most homeowners staying in the home 10+ years, Trex Transcend (mid tier) is the sweet spot — 25-year fade & stain warranty, full PVC shell, and a price that lands $4–$8/sqft over Enhance. Signature (full PVC) is the long-term winner if you want the deepest grain pattern, lightest color palette, and the longest manufacturer warranty.',
  },
  {
    q: 'Does Trex come with a warranty?',
    a: 'Yes. Trex Enhance carries a 25-year limited residential warranty plus a 25-year fade & stain warranty. Trex Transcend carries 25-year limited residential plus 25-year fade & stain. Trex Signature carries a 50-year limited residential plus 50-year fade & stain warranty. Loudoun Decks adds a 5-year workmanship warranty on top of the manufacturer coverage.',
  },
  {
    q: 'Is Trex better than wood for Northern Virginia humidity?',
    a: 'Yes. Northern Virginia humid summers and freeze-thaw winters cause pressure-treated wood to cup, split, and rot faster than the manufacturer rating. Trex is impervious to moisture penetration on all four sides of the board (PVC cap), eliminating most maintenance and most early board failures.',
  },
  {
    q: 'How long does a Trex deck installation take?',
    a: 'On-site build for a 300–500 sqft Trex deck is 1–2 weeks. Permit review in NoVA usually adds 1–4 weeks; HOA approval adds 2–6 weeks. Total project timeline from contract to finished deck is 4–8 weeks for most projects.',
  },
  {
    q: 'Can I finance just the Trex upgrade and pay cash for the frame?',
    a: 'Yes. Many Northern Virginia homeowners cash-pay for the framing portion (which is mostly labor and pressure-treated lumber) and finance only the composite material and railings. This lowers the loan principal and the monthly payment. Pre-qualification is the same soft credit pull regardless of project amount.',
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

const tiers = [
  {
    name: 'Trex Enhance',
    sub: 'Naturals & Basics — budget tier',
    range: '$35–$45 /sqft installed',
    warranty: '25-yr residential + 25-yr fade & stain',
    project350: '$18,000–$26,000',
    project500: '$25,000–$33,000',
    monthly: '$229–$330 /mo over 10y',
  },
  {
    name: 'Trex Transcend',
    sub: 'Mid tier — full PVC shell, deeper grain',
    range: '$45–$60 /sqft installed',
    warranty: '25-yr residential + 25-yr fade & stain',
    project350: '$22,000–$32,000',
    project500: '$30,000–$42,000',
    monthly: '$279–$405 /mo over 10y',
  },
  {
    name: 'Trex Signature',
    sub: 'Premium tier — full PVC, exotic grain palette',
    range: '$60–$80 /sqft installed',
    warranty: '50-yr residential + 50-yr fade & stain',
    project350: '$28,000–$40,000+',
    project500: '$38,000–$52,000+',
    monthly: '$354–$506 /mo over 10y',
  },
];

const paymentMatrix = [
  ['$18,000', '$228', '$183'],
  ['$25,000', '$317', '$254'],
  ['$32,000', '$405', '$324'],
  ['$40,000', '$506', '$406'],
  ['$50,000', '$633', '$507'],
];

export default function TrexDeckCostMonthlyPaymentPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ArticleSchema
        title="Trex Deck Cost vs Monthly Payment: 2026 Budget Guide"
        description="Real Trex deck costs by tier and monthly payment examples at 8–10% APR. Plan a Trex deck budget in Northern Virginia."
        path={PATH}
        image="/showcase/img09.jpeg"
        datePublished="2026-05-27"
        dateModified="2026-05-27"
      />
      <WebPageSchema url={`https://ldndecks.com${PATH}`} name="Trex Deck Cost vs Monthly Payment: 2026 Budget Guide" description="Real Trex deck costs by tier (Enhance, Transcend, Signature) and monthly payment examples at 8–10% APR. Plan a Trex deck budget in Northern Virginia." speakable />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={S.container}>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Trex Decks &middot; Financing
          </p>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
            Trex Deck Cost vs Monthly Payment: What Northern Virginia Homeowners Should Budget
          </h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Trex cost by tier (Enhance, Transcend, Signature) and matching monthly payment examples. Compare payment
            options before you commit to a project amount.
          </p>
        </div>
      </section>

      <TrustBanner />

      <AboveFoldCTA
        headline="See the monthly payment on your real Trex project amount with the deck payment estimator."
        estimateHref="/deck-payment-estimator"
        estimateLabel="Compare Payment Options"
      />

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }} className="quick-answer">
        <div style={S.container}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p data-speakable>
            A <strong>350 sqft Trex deck</strong> in Northern Virginia runs <strong>$18,000–$40,000+</strong>{' '}
            depending on tier. At 8.99% APR over 10 years that&apos;s roughly <strong>$229–$506/month</strong>.
            Run your real project amount through the{' '}
            <Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>
              deck payment estimator
            </Link>{' '}
            for an exact monthly number.
          </p>
        </div>
      </section>

      <article style={{ padding: '3.5rem 0' }}>
        <div style={S.container}>
          <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/showcase/img09.jpeg"
              alt="Trex composite deck project in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 960px) 100vw, 960px"
              quality={70}
              priority
            />
          </div>

          <h2 style={{ ...S.h2, marginTop: 0 }}>Trex Cost by Tier — Northern Virginia (2026)</h2>
          <p style={S.p}>
            Trex sells three main residential tiers. Each tier has a different price per square foot, warranty length,
            and capping technology. The chart below shows installed cost in Northern Virginia, plus typical project
            totals for 350 and 500 sqft decks and the matching monthly payment range at 8.99% APR over 10 years.
          </p>

          {tiers.map((t, i) => (
            <div key={t.name} style={{ background: i === 1 ? '#fff8f1' : '#f9f9f9', border: `1px solid ${i === 1 ? '#f4d2bd' : '#e5e5e5'}`, borderRadius: 12, padding: '1.5rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <h3 style={{ ...S.h3, margin: 0 }}>{t.name}</h3>
                <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>{t.range}</span>
              </div>
              <p style={{ ...S.p, color: '#666', fontSize: '0.95rem', marginBottom: '0.75rem' }}>{t.sub}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.5rem 1rem', fontSize: '0.9rem' }}>
                <div><strong>350 sqft project:</strong> {t.project350}</div>
                <div><strong>500 sqft project:</strong> {t.project500}</div>
                <div><strong>Warranty:</strong> {t.warranty}</div>
                <div><strong>Monthly (10y):</strong> {t.monthly}</div>
              </div>
            </div>
          ))}

          <h2 style={S.h2}>Monthly Payment by Project Amount (Trex)</h2>
          <p style={S.p}>
            The table below converts common Trex project amounts into monthly payments at a sample 8.99% APR. Longer
            term = lower monthly, higher total interest.
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={S.th}>Project Amount</th>
                  <th style={S.th}>10-Year /mo</th>
                  <th style={S.th}>15-Year /mo</th>
                </tr>
              </thead>
              <tbody>
                {paymentMatrix.map((row, i) => (
                  <tr key={row[0]} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ ...S.td, fontWeight: 700 }}>{row[0]}</td>
                    <td style={S.td}>{row[1]}</td>
                    <td style={{ ...S.td, color: 'var(--color-primary)', fontWeight: 700 }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ ...S.p, fontSize: '0.85rem', color: '#777', fontStyle: 'italic' }}>
            Illustrative only at 8.99% APR. Your real APR and term come from a lender pre-qualification.
          </p>

          <h2 style={S.h2}>How Trex Compares to Other Composite Brands</h2>
          <p style={S.p}>
            Trex is one of three premium composite brands we install regularly in Northern Virginia. TimberTech (AZEK
            Vintage) and Fiberon are the others. Trex Transcend and TimberTech PRO are usually within $1–$3/sqft of
            each other. For a side-by-side brand comparison, see{' '}
            <Link href="/trex-vs-timbertech-vs-azek" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              Trex vs TimberTech vs AZEK
            </Link>{' '}
            and the{' '}
            <Link href="/timbertech-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              TimberTech & AZEK deck guide
            </Link>.
          </p>

          <h2 style={S.h2}>What Drives the Trex Project Amount</h2>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', lineHeight: 1.85 }}>
            <li><strong>Tier:</strong> Enhance vs Transcend vs Signature — biggest single driver</li>
            <li><strong>Size:</strong> Per-square-foot cost is roughly linear up to ~500 sqft</li>
            <li><strong>Railings:</strong> Trex Select composite vs Signature aluminum vs cable — $40–$150 per linear foot</li>
            <li><strong>Stairs:</strong> Each stair flight adds $1,500–$4,000 depending on width and rise</li>
            <li><strong>Lighting:</strong> Post-cap + riser + recessed adds $1,500–$5,000</li>
            <li><strong>Frame condition:</strong> Reusing a sound frame saves $4,000–$10,000+</li>
            <li><strong>Picture-frame border:</strong> $400–$900 per typical deck</li>
            <li><strong>Permits & HOA:</strong> $300–$1,500 depending on county and HOA process</li>
          </ul>

          <h2 style={S.h2}>Trex Deck Financing in Northern Virginia</h2>
          <p style={S.p}>
            We work with Enhancify for soft-pull pre-qualification — multiple lender offers in roughly 60 seconds with
            no credit score impact. Many Northern Virginia homeowners use unsecured financing to start the project
            quickly (project starts in days, not weeks like a HELOC), then refinance to a home-equity product later if
            the math favors it. Full process on the{' '}
            <Link href="/deck-financing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              deck financing page
            </Link>.
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
              Compare Trex Payment Options
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 560, margin: '0 auto 1.75rem', fontSize: '1.02rem', lineHeight: 1.6 }}>
              Plug your Trex project amount into the deck payment estimator and see monthly options across 10 and 15-year terms.
            </p>
            <Link
              href="/deck-payment-estimator"
              style={{ display: 'inline-block', background: 'var(--color-primary)', color: '#fff', padding: '1rem 2rem', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: '1.02rem' }}
            >
              Open the Deck Payment Estimator →
            </Link>
          </div>

          <h2 style={S.h2}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/trex-decks', 'Trex Composite Decks — Service Overview'],
              ['/deck-payment-estimator', 'Deck Payment Estimator'],
              ['/composite-deck-cost-northern-virginia', 'Composite Deck Cost in Northern Virginia'],
              ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood Deck'],
              ['/deck-financing', 'Deck Financing in Northern Virginia'],
              ['/credit-score-deck-financing', 'Credit Score Required for Deck Financing'],
              ['/best-time-to-finance-build-deck-northern-virginia', 'Best Time to Finance &amp; Build'],
              ['/monthly-payment-composite-deck-northern-virginia', 'Monthly Payment on a Composite Deck'],
              ['/before-and-after', 'Before & After Deck Transformations'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}>
                <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <SimpleCTA
        title="Plan Your Trex Deck Monthly Payment"
        buttonText="Get Free Written Estimate"
        link="/contact"
      />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-27" />
      <RelatedGuides currentPath={PATH} />
      <ContactHome />
    </>
  );
}
