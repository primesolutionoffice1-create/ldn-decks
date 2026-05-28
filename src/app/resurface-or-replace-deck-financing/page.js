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
  path: '/resurface-or-replace-deck-financing',
  title: 'Resurface or Replace Before Financing? 2026 Decision Guide',
  description: 'Should you resurface or replace your deck before financing? Cost comparison, structural inspection criteria, and monthly payment math for Northern Virginia.',
  image: '/images/img26.jpeg',
});

const PATH = '/resurface-or-replace-deck-financing';

const faqs = [
  {
    q: 'Is resurfacing cheaper to finance than full replacement?',
    a: 'Yes, when the existing frame passes inspection. A 350 sqft composite resurfacing typically runs $18,000–$28,000, while a full replacement runs $25,000–$45,000+. Lower project amount = lower monthly payment at the same APR and term.',
  },
  {
    q: 'Can I finance just the resurfacing portion?',
    a: 'Yes. Many lenders fund the full project amount regardless of whether you are resurfacing or replacing. The decision drives the project amount, not the financing eligibility. Soft-pull pre-qualification returns the same APR offers either way.',
  },
  {
    q: 'What disqualifies a deck from resurfacing?',
    a: 'Rotting or soft joists, leaning or rotting posts, shifted or heaved footings, a pulling ledger board, or a deck that bounces when walked on. Any of these mean structural work is required — financing the full replacement is the correct decision.',
  },
  {
    q: 'Does replacement always cost more to finance?',
    a: 'Total project amount is higher for replacement, so total interest paid over the loan term is higher. Monthly payment is also higher at the same term. However, replacement may be the only safe option — financing a resurface over an unsafe frame is not a real saving.',
  },
  {
    q: 'How do I know which one I need?',
    a: 'Free on-site structural inspection. We check joists, beams, posts, footings, ledger, and flashing against current Virginia residential code. The inspection report tells you which path is safe and which monthly payment range you should model in the estimator.',
  },
  {
    q: 'Does either option require a permit in Northern Virginia?',
    a: 'Both. Loudoun, Fairfax, Prince William, Arlington, and Alexandria all require permits when you replace the deck surface, railings, or structure. We handle the permit application and HOA submission for both resurfacing and replacement projects.',
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

const rows = [
  ['350 sqft project', '$18,000–$28,000', '$25,000–$38,000', '$7,000–$10,000 saved'],
  ['450 sqft project', '$22,000–$34,000', '$32,000–$46,000', '$10,000–$12,000 saved'],
  ['600 sqft project', '$28,000–$42,000', '$42,000–$58,000', '$14,000–$16,000 saved'],
  ['Monthly /mo @ 8.99% 10y (350 sqft mid)', '$278/mo (resurface $22k)', '$405/mo (replace $32k)', '$127/mo less'],
];

export default function ResurfaceOrReplaceFinancingPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ArticleSchema
        title="Resurface or Replace Before Financing? Decision Guide"
        description="Should you resurface or replace your deck before financing? Cost comparison, structural inspection criteria, and monthly payment math for Northern Virginia."
        path={PATH}
        image="/images/img26.jpeg"
        datePublished="2026-05-27"
        dateModified="2026-05-27"
      />
      <WebPageSchema url={`https://ldndecks.com${PATH}`} name="Resurface or Replace Before Financing? 2026 Decision Guide" description="Should you resurface or replace your deck before financing? Cost comparison, structural inspection criteria, and monthly payment math for Northern Virginia." speakable />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={S.container}>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Decision Support &middot; Financing
          </p>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
            Is It Better to Resurface or Replace a Deck Before Financing?
          </h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Resurfacing keeps the frame and saves 30–40% on the project amount. Replacement is the right call when the
            frame fails inspection. Here&apos;s how the financing math compares.
          </p>
        </div>
      </section>

      <TrustBanner />

      <AboveFoldCTA
        headline="Not sure if your frame passes? Schedule a free structural inspection before you commit to a project amount."
        estimateHref="/contact"
        estimateLabel="Schedule Free Inspection"
      />

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }} className="quick-answer">
        <div style={S.container}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p data-speakable>
            <strong>Resurface</strong> if the existing frame passes structural inspection — saves $7,000–$16,000+ and
            lowers the monthly payment by $100–$200/mo. <strong>Replace</strong> if joists, posts, footings, or ledger
            fail — financing a resurface on an unsafe frame is not a real saving. Free inspection at{' '}
            <Link href="/contact" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>
              /contact
            </Link>.
          </p>
        </div>
      </section>

      <article style={{ padding: '3.5rem 0' }}>
        <div style={S.container}>
          <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img26.jpeg"
              alt="Deck resurfacing vs replacement decision in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 960px) 100vw, 960px"
              quality={70}
              priority
            />
          </div>

          <h2 style={{ ...S.h2, marginTop: 0 }}>Project Amount: Resurfacing vs Replacement</h2>
          <p style={S.p}>
            The decision drives the project amount, which drives the monthly payment. Below is the cost difference at
            three common sizes for a mid-tier composite (Trex Transcend / TimberTech PRO Reserve) in Northern Virginia.
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={S.th}>Scenario</th>
                  <th style={S.th}>Resurfacing</th>
                  <th style={S.th}>Replacement</th>
                  <th style={S.th}>Difference</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ ...S.td, fontWeight: 700 }}>{row[0]}</td>
                    <td style={S.td}>{row[1]}</td>
                    <td style={S.td}>{row[2]}</td>
                    <td style={{ ...S.td, color: '#2e7d32', fontWeight: 700 }}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>The Frame Decides — Not the Budget</h2>
          <p style={S.p}>
            We don&apos;t recommend resurfacing because it&apos;s cheaper. We recommend it when the existing frame
            passes structural inspection. Reusing a failing frame is a warranty problem and a safety risk — saving
            $10,000 on the project amount means nothing if the deck fails inspection two years later. The decision tree
            is binary:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ background: '#e8f5e9', borderRadius: 8, padding: '1.5rem' }}>
              <h3 style={{ fontWeight: 700, color: '#2e7d32', marginTop: 0, marginBottom: '0.75rem' }}>RESURFACE ✓</h3>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.95rem', margin: 0 }}>
                <li>Joists firm, no soft spots</li>
                <li>Posts straight, bases sound</li>
                <li>Footings stable</li>
                <li>Ledger mechanically attached</li>
                <li>Deck does not bounce</li>
              </ul>
            </div>
            <div style={{ background: '#ffebee', borderRadius: 8, padding: '1.5rem' }}>
              <h3 style={{ fontWeight: 700, color: '#c62828', marginTop: 0, marginBottom: '0.75rem' }}>REPLACE ✗</h3>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.95rem', margin: 0 }}>
                <li>Joists soft, sagging, rotting</li>
                <li>Posts leaning, base rot</li>
                <li>Footings shifted or heaved</li>
                <li>Ledger pulling from house</li>
                <li>Deck bounces under load</li>
              </ul>
            </div>
          </div>

          <h2 style={S.h2}>Financing Math: Same APR, Different Principal</h2>
          <p style={S.p}>
            The APR a lender offers is based on your credit profile, not the project type. So a $22,000 resurface and a
            $32,000 replacement, financed at the same APR over the same term, differ only in monthly payment and total
            interest. At 8.99% over 10 years: resurface is $278/mo with ~$11,200 total interest; replacement is $405/mo
            with ~$16,600 total interest. Same loan terms, different principal.
          </p>

          <h2 style={S.h2}>When Replacement Pays Off Long-Term</h2>
          <p style={S.p}>
            A full replacement adds new framing, footings, and ledger work — all of which carry warranty coverage and
            reset the clock on structural lifespan. For a 25-year-old deck with marginal frame condition, the cost
            premium of replacement often makes sense because resurfacing buys 5–10 years before the frame fails anyway.
            For a 10-year-old deck with a sound frame, resurfacing usually wins.
          </p>

          <h2 style={S.h2}>Free Structural Inspection Before You Commit</h2>
          <p style={S.p}>
            Before you pre-qualify for financing on either path, schedule a free on-site inspection. We document frame
            condition with photos and a written report, then quote both options when both are viable. That gives you
            two real project amounts to run through the{' '}
            <Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              deck payment estimator
            </Link>{' '}
            before picking the path. Detailed breakdown of both services:{' '}
            <Link href="/deck-resurfacing-vs-replacement" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              resurfacing vs replacement comparison
            </Link>.
          </p>

          <h2 style={S.h2}>FAQ</h2>
          {faqs.map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 10, padding: '1.25rem', marginBottom: '0.75rem', background: '#fff' }}>
              <summary style={{ fontWeight: 700, cursor: 'pointer', fontSize: '1rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.75, color: '#555', fontSize: '0.95rem' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={S.h2}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/deck-resurfacing-vs-replacement', 'Deck Resurfacing vs Replacement (full comparison)'],
              ['/services/deck-resurfacing', 'Deck Resurfacing Service'],
              ['/services/deck-replacement', 'Deck Replacement Service'],
              ['/deck-resurfacing-northern-virginia', 'Deck Resurfacing in Northern Virginia'],
              ['/deck-payment-estimator', 'Deck Payment Estimator'],
              ['/deck-financing', 'Deck Financing in Northern Virginia'],
              ['/deck-safety-inspection-checklist', 'Deck Safety Inspection Checklist'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}>
                <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <SimpleCTA title="Price the Right Scope: Resurface or Replace?" buttonText="Schedule Free Inspection" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-27" />
      <RelatedGuides currentPath={PATH} />
      <ContactHome />
    </>
  );
}
