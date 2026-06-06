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

export const metadata = buildMetadata({
  path: '/monthly-payment-composite-deck-northern-virginia',
  title: 'Monthly Payment on a Composite Deck in Northern Virginia',
  description: 'See realistic monthly payments for a composite deck in Northern Virginia. $15k–$70k planning examples at 8–10% APR over 10 and 15 years. Free estimator.',
  image: '/social/monthly-payment-composite-deck-northern-virginia-social.png',
});

const PATH = '/monthly-payment-composite-deck-northern-virginia';

const faqs = [
  {
    q: 'How much is the monthly payment on a $30,000 composite deck?',
    a: 'At a sample 8.99% APR, a $30,000 composite deck financed over 10 years is roughly $380/month and roughly $304/month over 15 years. The longer term lowers the monthly payment but raises total interest. Your real rate and term come from a lender pre-qualification, not from the estimator.',
  },
  {
    q: 'What APR should I model for deck financing in Northern Virginia?',
    a: 'Most home-improvement financing in Northern Virginia for credit scores in the 680–740 range models in the 8–11% APR band. Promotional 0% interest options exist for shorter payoff windows. Pre-qualification through a soft credit check returns the real number without affecting your credit score.',
  },
  {
    q: 'Can I use home equity instead of unsecured deck financing?',
    a: 'Yes. Home equity loans and HELOCs typically carry lower APRs than unsecured home-improvement loans, but they take longer to close and put the home as collateral. Many Northern Virginia homeowners use unsecured financing for speed (project starts in days, not weeks), then refinance later if needed.',
  },
  {
    q: 'Does the monthly payment include permits, HOA, and railings?',
    a: 'It should. The project amount you enter into the estimator should reflect the full written estimate — decking material, framing reuse or replacement, railings, stairs, lighting, demolition, permits, and HOA submission. Modeling only the deck boards understates the real monthly payment.',
  },
  {
    q: 'How quickly can a financed composite deck project start?',
    a: 'Pre-qualification through a soft credit check usually returns offers in 60 seconds. Once a lender is selected and the loan funds, the construction timeline is the same as a cash project — typically 4–8 weeks from contract to finished deck, including permit review and HOA approval.',
  },
  {
    q: 'Does financing add cost vs paying cash?',
    a: 'Yes. Financing adds interest cost over the life of the loan. The trade-off is keeping cash reserves intact and building the deck during the right season. Many homeowners model both: total interest over the term vs the opportunity cost of paying cash upfront.',
  },
  {
    q: 'Will checking my financing options affect my credit?',
    a: 'Pre-qualification uses a soft credit pull and does not affect your credit score. A hard inquiry only happens if you choose a specific lender offer and move forward with a full application. The estimator on this site does not check credit at all.',
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
  h3: { fontSize: '1.25rem', fontWeight: 700, margin: '1.5rem 0 0.6rem' },
  p: { marginBottom: '1rem', lineHeight: 1.75, fontSize: '1rem' },
  th: { padding: '0.85rem', textAlign: 'left', borderBottom: '2px solid #ddd', fontSize: '0.92rem', background: '#f5f5f5' },
  td: { padding: '0.85rem', borderBottom: '1px solid #eee', fontSize: '0.92rem' },
  container: { maxWidth: 960, margin: '0 auto', padding: '0 1.5rem' },
};

// Monthly figures use the same amortization math as the estimator at 8.99% APR
// ($12.66/mo per $1k over 10 years, $10.14/mo per $1k over 15 years).
// Total interest = (monthly × months) − principal.
const scenarios = [
  { amount: '$15,000', use: 'Composite resurfacing on existing frame', ten: '$190', fifteen: '$152', interest10: '$7,800' },
  { amount: '$22,000', use: '250 sqft composite deck, mid tier', ten: '$278', fifteen: '$223', interest10: '$11,360' },
  { amount: '$30,000', use: '350 sqft composite, mid tier, railings', ten: '$380', fifteen: '$304', interest10: '$15,600' },
  { amount: '$40,000', use: '450 sqft composite, premium tier', ten: '$506', fifteen: '$406', interest10: '$20,720' },
  { amount: '$55,000', use: '600 sqft composite + lighting + stairs', ten: '$696', fifteen: '$558', interest10: '$28,520' },
  { amount: '$70,000', use: 'Covered composite deck w/ premium railings', ten: '$886', fifteen: '$709', interest10: '$36,320' },
];

export default function MonthlyPaymentCompositeDeckPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ArticleSchema
        title="Monthly Payment on a Composite Deck in Northern Virginia"
        description="See realistic monthly payments for a composite deck in Northern Virginia. $15k–$70k planning examples at 8–10% APR over 10 and 15 years."
        path={PATH}
        image="/showcase/img15.jpeg"
        datePublished="2026-05-27"
        dateModified="2026-05-27"
      />
      <WebPageSchema dateModified="2026-06-01" url={`https://ldndecks.com${PATH}`} name="Monthly Payment on a Composite Deck in Northern Virginia" description="See realistic monthly payments for a composite deck in Northern Virginia. $15k–$70k planning examples at 8–10% APR over 10 and 15 years. Free estimator." speakable />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={S.container}>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Financing &middot; Northern Virginia
          </p>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
            How Much Is a Monthly Payment on a Composite Deck in Northern Virginia?
          </h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Real-world monthly payment examples for composite decks $15,000–$70,000, modeled at a typical 8–10% APR
            over 10- and 15-year terms.
          </p>
        </div>
      </section>

      <TrustBanner />

      <AboveFoldCTA
        headline="Want the monthly payment on your written estimate amount? Run the numbers in seconds with the deck payment estimator."
        estimateHref="/deck-payment-estimator"
        estimateLabel="Estimate Monthly Payment"
      />

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }} className="quick-answer">
        <div style={S.container}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p data-speakable>
            A <strong>$30,000 composite deck</strong> in Northern Virginia financed at a sample 8.99% APR runs roughly{' '}
            <strong>$380/month over 10 years</strong> or <strong>$304/month over 15 years</strong>. Pricing depends on
            credit profile, lender, and term. Use the{' '}
            <Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>
              deck payment estimator
            </Link>{' '}
            to model your written estimate amount.
          </p>
        </div>
      </section>

      <section style={{ background: '#f6f9fc', borderLeft: '4px solid #2b6cb0', padding: '1.5rem 0' }}>
        <div style={S.container}>
          <p style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#2b6cb0', fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            What We See on Loudoun &amp; Fairfax Financing
          </p>
          <p data-speakable style={{ marginBottom: 0, lineHeight: 1.7 }}>
            Most of our financed deck clients in Loudoun and Fairfax counties land in the{' '}
            <strong>$25,000–$45,000 project range</strong>, with monthly payments typically{' '}
            <strong>$315–$570 at ~9% APR over 10 years</strong>. The <strong>10-year term is the most popular choice</strong>,
            followed by 15-year terms for homeowners prioritizing lower monthly payment and short 5-year terms for cash-
            flow flexible buyers who want to minimize total interest. Resurfacing projects (existing-frame composite
            upgrades) tend to start around $15,000; covered decks with premium railings and lighting can reach $80,000+.
          </p>
        </div>
      </section>

      <section style={{ background: '#fafafa', padding: '3rem 0', borderBottom: '1px solid #eee' }}>
        <div style={{ ...S.container, maxWidth: 920 }}>
          <h2 style={{ ...S.h2, marginTop: 0, textAlign: 'center', marginBottom: '0.5rem' }}>
            Estimate Your Monthly Payment
          </h2>
          <p style={{ textAlign: 'center', color: '#666', maxWidth: 640, margin: '0 auto 2rem', fontSize: '1rem', lineHeight: 1.6 }}>
            Enter your project amount, term, and rate to see an estimated monthly payment. For illustration only —
            actual rate and term depend on the lender and your credit profile.
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
              alt="Composite deck financing options in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 960px) 100vw, 960px"
              quality={70}
              priority
            />
          </div>

          <h2 style={{ ...S.h2, marginTop: 0 }}>Composite Deck Monthly Payment by Project Size</h2>
          <p style={S.p}>
            Below are typical monthly payment scenarios for composite deck projects in Loudoun, Fairfax, Prince William,
            Arlington, and Alexandria. Figures use a sample 8.99% APR — slide the{' '}
            <Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              deck payment estimator
            </Link>{' '}
            for your specific APR and term.
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={S.th}>Project Amount</th>
                  <th style={S.th}>Typical Use Case</th>
                  <th style={S.th}>10-Year /mo</th>
                  <th style={S.th}>15-Year /mo</th>
                  <th style={S.th}>Total Interest (10y)</th>
                </tr>
              </thead>
              <tbody>
                {scenarios.map((row, i) => (
                  <tr key={row.amount} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ ...S.td, fontWeight: 700 }}>{row.amount}</td>
                    <td style={S.td}>{row.use}</td>
                    <td style={S.td}>{row.ten}</td>
                    <td style={{ ...S.td, color: 'var(--color-primary)', fontWeight: 700 }}>{row.fifteen}</td>
                    <td style={{ ...S.td, color: '#555' }}>{row.interest10}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ background: '#fff8f1', border: '1px solid #f4d2bd', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.25rem' }}>
            <p data-speakable style={{ margin: 0, fontWeight: 600 }}>
              At 8.99% APR over 10 years, a $30,000 composite deck costs approximately $45,600 total — $15,600 in
              interest over the life of the loan. A 15-year term lowers the monthly payment to $304 but raises total
              interest to roughly $24,720.
            </p>
          </div>
          <p style={{ ...S.p, fontSize: '0.85rem', color: '#777', fontStyle: 'italic' }}>
            Illustrative only at a sample 8.99% APR. The longer term lowers the monthly payment but raises total
            interest. Actual rate, term, and monthly payment are determined by your lender.
          </p>

          <h2 style={S.h2}>What Drives the Monthly Payment Up or Down</h2>
          <p style={S.p}>
            Three variables move the monthly number: <strong>project amount, APR, and term</strong>. APR is set by the
            lender based on your credit profile. Term is your choice — most home-improvement loans run 5, 10, or 15
            years. Project amount is the part you control by scoping the deck correctly. For accurate pricing per
            material tier, see our{' '}
            <Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              composite deck cost guide for Northern Virginia
            </Link>.
          </p>

          <h2 style={S.h2}>What the Project Amount Should Include</h2>
          <p style={S.p}>
            The biggest source of error in a monthly payment estimate is a project amount that only covers the deck
            boards. The number you put into the calculator should reflect a complete written estimate:
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', lineHeight: 1.85 }}>
            <li>Composite or PVC decking material (Trex, TimberTech, Fiberon)</li>
            <li>Framing — either reuse on a sound frame or new pressure-treated lumber</li>
            <li>Hidden fasteners and joist tape</li>
            <li>Railings (composite, aluminum, or cable) and stairs</li>
            <li>Lighting (post-cap, riser, recessed deck lights)</li>
            <li>Demolition and haul-away of the old deck</li>
            <li>Permits for your county (Loudoun, Fairfax, Prince William, Arlington, Alexandria)</li>
            <li>HOA submission package and revisions</li>
            <li>Project management, design, and final cleanup</li>
          </ul>

          <h2 style={S.h2}>Composite vs Wood: Long-Term Cost Matters More Than Monthly</h2>
          <p style={S.p}>
            A composite deck typically costs 20–40% more upfront than pressure-treated wood, which raises the monthly
            payment slightly. Over 15 years the math reverses: composite avoids the $8,000–$15,000+ in cumulative
            stain, seal, sand, and board replacement cost that pressure-treated wood requires. The{' '}
            <Link href="/composite-deck-vs-wood-deck-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              composite vs wood comparison
            </Link>{' '}
            covers 15-year total cost in detail.
          </p>

          <h2 style={S.h2}>Soft-Pull Pre-Qualification (No Credit Impact)</h2>
          <p style={S.p}>
            The estimator on this site is a model — your real rate and term come from a lender pre-qualification. We
            work with Enhancify, which returns multiple lender offers in roughly 60 seconds using a soft credit pull
            that does not affect your credit score. See the full process on our{' '}
            <Link href="/deck-financing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              deck financing page
            </Link>.
          </p>

          <h2 style={S.h2}>How Northern Virginia Homeowners Typically Plan a Financed Deck</h2>
          <ol style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', lineHeight: 1.85 }}>
            <li>Use the estimator to find a monthly payment that fits the household budget.</li>
            <li>Request a free on-site visit and a written, itemized project estimate.</li>
            <li>Pre-qualify through Enhancify (soft credit pull) to confirm the real APR and term.</li>
            <li>Compare offers — many homeowners pick the offer with the lowest total interest, not the lowest /mo.</li>
            <li>Sign the contract and start the permit + HOA process while financing closes.</li>
            <li>Build begins; final invoice is paid by the lender directly when the deck is complete.</li>
          </ol>

          <h2 style={S.h2}>FAQ</h2>
          {faqs.map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 10, padding: '1.25rem', marginBottom: '0.75rem', background: '#fff' }}>
              <summary style={{ fontWeight: 700, cursor: 'pointer', fontSize: '1rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.75, color: '#555', fontSize: '0.95rem' }}>{faq.a}</p>
            </details>
          ))}

          <div style={{ background: 'var(--color-dark)', borderRadius: 14, padding: '2.5rem 2rem', textAlign: 'center', margin: '3rem 0 1rem' }}>
            <h2 style={{ fontSize: '1.7rem', fontWeight: 800, color: '#fff', marginTop: 0, marginBottom: '0.75rem' }}>
              Model Your Real Monthly Payment
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 560, margin: '0 auto 1.75rem', fontSize: '1.02rem', lineHeight: 1.6 }}>
              Move three sliders — project amount, APR, term — and the estimator returns your monthly payment in seconds.
            </p>
            <Link
              href="/deck-payment-estimator"
              style={{ display: 'inline-block', background: 'var(--color-primary)', color: '#fff', padding: '1rem 2rem', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: '1.02rem' }}
            >
              Open the Deck Payment Estimator →
            </Link>
          </div>
        </div>
      </article>

      <section style={{ padding: '2rem 1.5rem', maxWidth: 960, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Financing &amp; Planning Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck Payment Estimator →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/credit-score-deck-financing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>What Credit Score Do You Need for Deck Financing? →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/best-time-to-finance-build-deck-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Best Time of Year to Finance &amp; Build a Deck →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/trex-deck-cost-monthly-payment" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Trex Deck Cost vs Monthly Payment →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/timbertech-azek-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>TimberTech &amp; AZEK Deck Cost →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/composite-deck-cost-by-size" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Composite Deck Cost by Size (300/400/500/600 sqft) →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/deck-lighting-railings-stairs-addon-cost" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Lighting, Railings &amp; Stairs Add-On Cost →</Link></li>
        </ul>
      </section>

      <SimpleCTA
        title="Plan Your Composite Deck Monthly Payment"
        buttonText="Get Free Written Estimate"
        link="/get-estimate"
      />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-27" />
      <RelatedGuides currentPath={PATH} />
      <ContactHome />
    </>
  );
}
