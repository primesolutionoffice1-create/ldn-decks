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
  path: '/credit-score-deck-financing',
  title: 'What Credit Score Do You Need for Deck Financing? (2026)',
  description: 'Credit score requirements for deck financing in Northern Virginia. Typical APR by score band, soft-pull pre-qualification process, and approval tips.',
  image: '/images/deck_financing_contract.png',
});

const PATH = '/credit-score-deck-financing';

const scoreBands = [
  { band: '760+', tier: 'Excellent', apr: '6.99–8.99%', approval: 'Most flexible — promotional 0% offers, longer terms, higher loan amounts', monthly30k: '$348–$380 /mo (10y)' },
  { band: '700–759', tier: 'Good', apr: '8.99–11.99%', approval: 'Strong approval odds across most lenders; mid-range APR', monthly30k: '$380–$430 /mo (10y)' },
  { band: '660–699', tier: 'Fair', apr: '11.99–15.99%', approval: 'Approval likely but at higher APR; some lenders may cap loan size', monthly30k: '$430–$486 /mo (10y)' },
  { band: '620–659', tier: 'Below Average', apr: '15.99–22.99%', approval: 'Limited lender options; longer terms may help monthly payment', monthly30k: '$486–$571 /mo (10y)' },
  { band: 'Below 620', tier: 'Subprime', apr: '22.99%+', approval: 'Conventional home-improvement lenders typically decline; HELOC, co-signer, or cash plan recommended', monthly30k: '$571+ /mo (10y)' },
];

const faqs = [
  {
    q: 'What credit score do I need to finance a deck in Northern Virginia?',
    a: 'Most home-improvement lenders require a minimum credit score of 620–660 for unsecured deck financing. Best APRs are reserved for 720+ scores. Pre-qualification through a soft credit pull returns offers from multiple lenders in roughly 60 seconds without affecting your credit score.',
  },
  {
    q: 'Will checking deck financing options hurt my credit?',
    a: 'No. Pre-qualification uses a soft credit pull that does not affect your credit score. Multiple lender offers come back from a single soft pull. A hard inquiry only happens if you choose a specific lender offer and move forward with a full application — and the impact is usually small and temporary.',
  },
  {
    q: 'What APR can I expect for deck financing with a 720 credit score?',
    a: 'A 720 credit score in Northern Virginia typically qualifies for 8.99–11.99% APR on home-improvement financing. Some lenders offer 0% promotional rates for shorter terms (12–24 months). A HELOC against home equity typically runs 2–4 points below unsecured rates for the same credit profile.',
  },
  {
    q: 'Can I finance a deck with a 650 credit score?',
    a: 'Yes, often. Many home-improvement lenders work with credit scores in the 620–680 range, though APR will be higher (12–18%). The monthly payment difference can be material — a $30,000 deck at 16% APR is roughly $50–$80/month more than the same loan at 9%.',
  },
  {
    q: 'Does my income matter as much as my credit score?',
    a: 'Both matter. Lenders look at debt-to-income (DTI) ratio along with credit score. A strong credit score with high existing debt may still see APR penalties or loan amount caps. Pre-qualification reveals what each lender will actually offer based on your full profile.',
  },
  {
    q: 'What if my credit score is below 620?',
    a: 'Unsecured deck financing becomes limited below 620. Alternative paths: (1) HELOC against home equity, often available at lower credit thresholds because the home is collateral, (2) co-signer with stronger credit, (3) wait 6–12 months while improving credit through on-time payments and lower utilization, (4) phase the project — start with smaller scope, finance a smaller amount.',
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

export default function CreditScoreDeckFinancingPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ArticleSchema
        title="What Credit Score Do You Need for Deck Financing? (2026)"
        description="Credit score requirements for deck financing in Northern Virginia. Typical APR by score band, soft-pull pre-qualification process, and approval tips."
        path={PATH}
        image="/images/deck_financing_contract.png"
        datePublished="2026-05-27"
        dateModified="2026-05-27"
      />
      <WebPageSchema url={`https://ldndecks.com${PATH}`} name="What Credit Score Do You Need for Deck Financing? (2026)" description="Credit score requirements for deck financing in Northern Virginia. Typical APR by score band, soft-pull pre-qualification process, and approval tips." speakable />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={S.container}>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Financing &middot; Credit &amp; Approval
          </p>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
            What Credit Score Do You Need for Deck Financing?
          </h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: 1.6 }}>
            APR by credit score band, soft-pull pre-qualification process, and what to do if your score is below the
            comfort threshold.
          </p>
        </div>
      </section>

      <TrustBanner />

      <AboveFoldCTA
        headline="Start with a written project estimate — a real project amount makes pre-qualification more accurate."
        estimateHref="/contact"
        estimateLabel="Start with a Written Estimate"
      />

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }} className="quick-answer">
        <div style={S.container}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p data-speakable>
            Most home-improvement lenders require a credit score of <strong>620–660 minimum</strong> for unsecured deck
            financing. Best APRs (<strong>6.99–8.99%</strong>) are reserved for <strong>760+</strong>.{' '}
            <strong>700–759</strong> typically gets <strong>8.99–11.99% APR</strong>. Soft-pull pre-qualification
            returns multiple lender offers in roughly 60 seconds without affecting your credit score.
          </p>
        </div>
      </section>

      <article style={{ padding: '3.5rem 0' }}>
        <div style={S.container}>
          <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/deck_financing_contract.png"
              alt="Deck financing credit score guide for Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 960px) 100vw, 960px"
              quality={70}
              priority
            />
          </div>

          <h2 style={{ ...S.h2, marginTop: 0 }}>APR and Approval by Credit Score Band</h2>
          <p style={S.p}>
            The table below shows typical 2026 home-improvement APR ranges by FICO credit score band, plus the
            corresponding monthly payment on a $30,000 deck at the lower end of each band&apos;s APR range, financed
            over 10 years. These are typical Northern Virginia lender ranges via aggregators like Enhancify.
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={S.th}>Credit Score</th>
                  <th style={S.th}>Tier</th>
                  <th style={S.th}>Typical APR</th>
                  <th style={S.th}>$30k Monthly (10y)</th>
                </tr>
              </thead>
              <tbody>
                {scoreBands.map((row, i) => (
                  <tr key={row.band} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ ...S.td, fontWeight: 700 }}>{row.band}</td>
                    <td style={S.td}>{row.tier}</td>
                    <td style={S.td}>{row.apr}</td>
                    <td style={{ ...S.td, color: 'var(--color-primary)', fontWeight: 600 }}>{row.monthly30k}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>What Soft-Pull Pre-Qualification Returns</h2>
          <p style={S.p}>
            A soft-pull pre-qualification through Enhancify or a similar aggregator returns multiple lender offers
            within ~60 seconds without affecting your credit score. Each offer typically includes:
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', lineHeight: 1.85 }}>
            <li>Lender name and terms</li>
            <li>Pre-qualified APR for your credit profile</li>
            <li>Maximum loan amount</li>
            <li>Available term lengths (typically 5, 10, 15 years)</li>
            <li>Whether promotional 0% offers apply to your profile</li>
            <li>Estimated monthly payment at each term</li>
          </ul>

          <h2 style={S.h2}>Approval Considerations Beyond Credit Score</h2>
          <p style={S.p}>
            Lenders look at multiple factors, not just credit score:
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', lineHeight: 1.85 }}>
            <li><strong>Debt-to-income ratio (DTI)</strong> — total monthly debt vs gross monthly income. Most lenders want DTI under 43%.</li>
            <li><strong>Length of credit history</strong> — older accounts in good standing help.</li>
            <li><strong>Recent credit inquiries</strong> — too many recent hard pulls can lower offers.</li>
            <li><strong>Income stability</strong> — W-2 income with 2+ year history is preferred over recent self-employment.</li>
            <li><strong>Existing home equity</strong> — opens the HELOC option at lower rates regardless of unsecured offers.</li>
          </ul>

          <h2 style={S.h2}>What to Do If Your Credit Score Is Below the Comfort Threshold</h2>
          <ol style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', lineHeight: 1.85 }}>
            <li><strong>HELOC against home equity</strong> — collateral lets lenders accept lower credit thresholds, usually at much lower APR.</li>
            <li><strong>Co-signer with stronger credit</strong> — improves APR and approval odds; co-signer assumes equal liability.</li>
            <li><strong>Wait 6–12 months</strong> — pay down credit card balances to under 30% utilization, no missed payments, no new accounts. Most homeowners see 40–80 point improvements.</li>
            <li><strong>Phase the project</strong> — smaller initial scope (e.g., resurface first, add cover later) means a smaller financed amount.</li>
            <li><strong>Cash + small loan</strong> — finance just the portion you cannot cash-fund, reducing total loan size and improving lender confidence.</li>
          </ol>

          <h2 style={S.h2}>How to Use the Estimator With Your Credit Profile</h2>
          <p style={S.p}>
            The{' '}
            <Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              deck payment estimator
            </Link>{' '}
            lets you input an APR you expect to qualify for. Use the table above to pick a starting APR by your credit
            band. After pre-qualification returns your real number, re-run the estimator with the actual APR for an
            accurate monthly payment.
          </p>

          <h2 style={S.h2}>Related Financing Pages</h2>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/deck-financing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Deck Financing in Northern Virginia (full process) →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Deck Payment Estimator →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/monthly-payment-composite-deck-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Monthly Payment on a Composite Deck →
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

      <SimpleCTA title="Start with a Written Estimate" buttonText="Get Free Written Estimate" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-27" />
      <RelatedGuides currentPath={PATH} />
      <ContactHome />
    </>
  );
}
