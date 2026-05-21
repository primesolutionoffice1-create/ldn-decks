import React from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import EnhancifyWidget from '@/components/EnhancifyWidget';
import FinancingCalculator from '@/components/FinancingCalculator';
import { buildMetadata } from '@/lib/seo';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/deck-payment-estimator',
  title: 'Deck Payment Estimator | Monthly Cost Calculator | Loudoun Decks',
  description: 'Estimate the monthly payment on a custom deck. Free deck loan calculator — adjust project amount, APR and term to see your monthly cost. Northern Virginia.',
});

// Tool-focused FAQs — about how the estimator works (the math), deliberately
// distinct from the financing-policy FAQs on /deck-financing.
const faqs = [
  {
    q: "How is the monthly payment calculated?",
    a: "The estimator uses the standard amortized-loan formula. It takes your project amount, divides the APR into a monthly rate, and spreads the balance evenly across every month of the term so each payment is identical. Early payments are mostly interest; later payments are mostly principal — but the monthly amount stays flat.",
  },
  {
    q: "What APR should I use in the estimator?",
    a: "If you do not yet have a loan offer, 8–10% is a reasonable middle-of-the-road APR to model for a home-improvement loan in 2026. Strong-credit borrowers often see less, and promotional 0% APR terms exist for shorter payoff windows. Slide the APR field to see best-case and worst-case payments — your real rate comes from a soft-pull pre-qualification.",
  },
  {
    q: "Why does a longer term lower my monthly payment but cost more overall?",
    a: "A longer term spreads the same balance across more payments, so each month is smaller — but interest accrues for more years, so the total interest is higher. The estimator shows both numbers (monthly payment and total interest) so you can weigh a comfortable monthly against the lifetime cost.",
  },
  {
    q: "Is this estimate a loan offer or a quote?",
    a: "No. The estimator is an illustration only. Your actual APR, term and monthly payment are set by the lender based on your creditworthiness, and your project amount is set by our written, itemized estimate. Use this tool to get in the right ballpark before you talk to anyone.",
  },
  {
    q: "How do I turn this estimate into a real number?",
    a: "Two steps. First, get an accurate project amount — book a free on-site consultation and we provide a written estimate. Second, run a 60-second soft-pull pre-qualification through Enhancify to see your real rate and term. Neither step affects your credit score, and neither commits you to anything.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a },
  })),
};

const S = {
  h2: { fontSize: '1.85rem', fontWeight: 800, marginBottom: '1rem', marginTop: '3rem', lineHeight: 1.2, letterSpacing: '-0.01em' },
  p: { marginBottom: '1rem', lineHeight: 1.7, fontSize: '1rem' },
};

// Quick-reference rows. Monthly figures use the same amortization math as the
// calculator at a sample 8.99% APR — ~$12.66 per $1,000 over 10 years and
// ~$10.14 per $1,000 over 15 years.
const scenarios = [
  { amount: '$20,000', ten: '$253', fifteen: '$203' },
  { amount: '$30,000', ten: '$380', fifteen: '$304' },
  { amount: '$40,000', ten: '$506', fifteen: '$406' },
  { amount: '$55,000', ten: '$696', fifteen: '$558' },
  { amount: '$70,000', ten: '$886', fifteen: '$709' },
];

const inputs = [
  {
    label: 'Project Amount',
    desc: 'The total cost of your deck — materials, labor, permits and design. If you do not have a number yet, our deck cost calculator or a free estimate will give you one.',
  },
  {
    label: 'Estimated APR',
    desc: 'The annual interest rate on the loan. Model 8–10% if you have no offer yet; promotional 0% terms exist for shorter payoff windows.',
  },
  {
    label: 'Loan Term',
    desc: 'How many years you spread the balance over. A longer term means a lower monthly payment but more total interest — the estimator shows both.',
  },
];

export default function DeckPaymentEstimatorPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* ============ HERO ============ */}
      <section style={{ background: 'var(--color-dark)', color: 'var(--white)', padding: '4rem 0 3rem' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Free Tool &middot; Northern Virginia
          </p>
          <h1 style={{ fontSize: '2.7rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1, maxWidth: 760, letterSpacing: '-0.02em' }}>
            Deck Payment Estimator
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.12rem', lineHeight: 1.6, marginBottom: 0, maxWidth: 680 }}>
            See the monthly payment on a custom deck in seconds. Move the three sliders &mdash; project amount, APR and term &mdash; and the estimator does the amortization math for you.
          </p>
        </div>
      </section>

      {/* ============ THE CALCULATOR (reason the page exists) ============ */}
      <section style={{ background: '#fafafa', padding: '3rem 0' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ background: '#fff', borderRadius: 14, padding: '2.5rem 2rem', border: '1px solid #e5e5e5', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <FinancingCalculator />
            <p style={{ fontSize: '0.78rem', color: '#999', textAlign: 'center', marginTop: '1.25rem', marginBottom: 0, fontStyle: 'italic' }}>
              For illustration only. Actual rate, term and monthly payment are determined by your lender based on creditworthiness.
            </p>
          </div>
        </div>
      </section>

      <article style={{ padding: '3rem 0' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 1.5rem' }}>

          {/* ============ HOW THE THREE INPUTS WORK ============ */}
          <h2 style={{ ...S.h2, marginTop: 0 }}>What Each Slider Changes</h2>
          <p style={{ ...S.p, color: '#555' }}>
            The estimator has three inputs. Understanding what each one does makes the result far more useful than a single number:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
            {inputs.map((item, i) => (
              <div key={item.label} style={{ background: '#fff', borderRadius: 10, padding: '1.4rem', border: '1px solid #e5e5e5' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 6, background: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 800 }}>{i + 1}</span>
                  <h3 style={{ fontWeight: 700, fontSize: '1.02rem', margin: 0 }}>{item.label}</h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#555', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* ============ QUICK-REFERENCE SCENARIOS ============ */}
          <h2 style={S.h2}>Monthly Payment at a Glance</h2>
          <p style={{ ...S.p, color: '#555' }}>
            A quick reference for common project amounts, showing how the term changes the monthly payment. Figures use a sample 8.99% APR &mdash; slide the estimator above for your own numbers.
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '0.75rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  <th style={{ padding: '0.85rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Project Amount</th>
                  <th style={{ padding: '0.85rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>~10-Year Term</th>
                  <th style={{ padding: '0.85rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>~15-Year Term</th>
                </tr>
              </thead>
              <tbody>
                {scenarios.map((row, i) => (
                  <tr key={row.amount} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ padding: '0.85rem', borderBottom: '1px solid #eee', fontWeight: 600 }}>{row.amount}</td>
                    <td style={{ padding: '0.85rem', borderBottom: '1px solid #eee' }}>{row.ten}<span style={{ color: '#999', fontSize: '0.85rem' }}>/mo</span></td>
                    <td style={{ padding: '0.85rem', borderBottom: '1px solid #eee', color: 'var(--color-primary)', fontWeight: 700 }}>{row.fifteen}<span style={{ color: '#999', fontSize: '0.85rem', fontWeight: 400 }}>/mo</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#777', fontStyle: 'italic', marginBottom: 0 }}>
            Illustrative only at a sample 8.99% APR. The longer term lowers the monthly payment but raises total interest. Your real rate and term come from a soft-pull pre-qualification.
          </p>

          {/* ============ FROM ESTIMATE TO REAL RATE ============ */}
          <div style={{ background: 'var(--color-dark)', borderRadius: 14, padding: '2.75rem 2rem', textAlign: 'center', margin: '3rem 0' }}>
            <p style={{ color: 'var(--color-primary)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              ● Soft Credit Check Only · No Score Impact
            </p>
            <h2 style={{ ...S.h2, marginTop: 0, color: 'var(--white)', textAlign: 'center', marginBottom: '0.75rem', fontSize: '1.8rem' }}>
              Turn Your Estimate Into a Real Rate
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 560, margin: '0 auto 1.75rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
              The slider above is a model. A 60-second pre-qualification through Enhancify returns your actual rate, term and monthly payment from multiple lenders &mdash; with no impact on your credit score.
            </p>
            <EnhancifyWidget />
            <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', marginTop: '1.5rem', maxWidth: 580, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.5 }}>
              Financing provided by Enhancify, Inc. and partner lenders. Loudoun Decks is not a lender and does not earn a commission on financing. All loans subject to credit approval.
            </p>
          </div>

          {/* ============ TWO INPUTS YOU NEED ============ */}
          <h2 style={S.h2}>Make the Estimate Accurate</h2>
          <p style={{ ...S.p, color: '#555' }}>
            An estimate is only as good as the two numbers you feed it. Tighten both and the monthly payment becomes genuinely useful:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '1rem' }}>
            <div style={{ background: '#fff', borderRadius: 12, padding: '1.6rem', border: '1px solid #e5e5e5', borderTop: '4px solid var(--color-primary)' }}>
              <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginTop: 0, marginBottom: '0.5rem' }}>1. A real project amount</h3>
              <p style={{ fontSize: '0.93rem', color: '#555', lineHeight: 1.6, margin: 0 }}>
                Guessing the project cost is the biggest source of error. Use our <Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck cost calculator</Link> for a data-backed range, or book a free on-site visit for a written, itemized estimate.
              </p>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, padding: '1.6rem', border: '1px solid #e5e5e5', borderTop: '4px solid var(--color-primary)' }}>
              <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginTop: 0, marginBottom: '0.5rem' }}>2. A real APR</h3>
              <p style={{ fontSize: '0.93rem', color: '#555', lineHeight: 1.6, margin: 0 }}>
                The estimator&apos;s APR is a guess until you pre-qualify. See how the full process works on our <Link href="/deck-financing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck financing page</Link>, then run the soft-pull check for your actual rate.
              </p>
            </div>
          </div>

          {/* ============ FAQ ============ */}
          <h2 style={S.h2}>How the Estimator Works — FAQ</h2>
          {faqs.map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 10, padding: '1.25rem', marginBottom: '0.75rem', background: '#fff' }}>
              <summary style={{ fontWeight: 700, cursor: 'pointer', fontSize: '1rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555', fontSize: '0.95rem' }}>{faq.a}</p>
            </details>
          ))}

          {/* ============ FINAL CTA ============ */}
          <div style={{ background: '#fafafa', borderRadius: 14, padding: '2.5rem 2rem', textAlign: 'center', margin: '3rem 0 2rem', border: '1px solid #e5e5e5' }}>
            <h2 style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: '0.75rem', marginTop: 0, lineHeight: 1.2 }}>
              Ready for a Real Project Number?
            </h2>
            <p style={{ color: '#555', marginBottom: '1.75rem', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto', fontSize: '1.02rem', lineHeight: 1.6 }}>
              Book a free on-site consultation. We measure, design and hand you a written, itemized estimate &mdash; the accurate number to drop into this calculator.
            </p>
            <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-block', background: 'var(--color-primary)', color: 'var(--white)', padding: '1rem 2rem', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: '1.02rem' }}>
                Get My Free Estimate
              </Link>
              <CallLink style={{ display: 'inline-block', background: 'transparent', color: 'var(--color-dark)', padding: '1rem 2rem', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: '1.02rem', border: '2px solid #ddd' }}>
                Call (571) 655-7207
              </CallLink>
            </div>
          </div>

          {/* ============ RELATED ============ */}
          <h2 style={S.h2}>Related Resources</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/deck-financing', 'Deck Financing in Northern Virginia — Options & Pre-Qualification'],
              ['/deck-cost-calculator', 'Free Deck Cost Calculator — Estimate Your Project'],
              ['/how-much-does-a-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
              ['/composite-deck-cost-northern-virginia', 'Composite Deck Cost in Northern Virginia (2026)'],
              ['/get-estimate', 'Request Your Free Deck Estimate'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}>
                <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} &rarr;</Link>
              </li>
            ))}
          </ul>

          {/* ============ DISCLOSURE ============ */}
          <p style={{ fontSize: '0.75rem', color: '#999', marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '1.5rem', lineHeight: 1.6 }}>
            <strong>Estimator Disclosure:</strong> This deck payment estimator is an illustrative tool, not a loan offer, quote or financial advice. Monthly payment figures are calculated with a standard amortization formula from the values you enter and do not reflect any specific lender&apos;s terms. Loudoun Decks is not a lender. Financing is provided by Enhancify, Inc. and its network of partner lenders; APR, term, loan amount and monthly payment are determined by the lender based on your creditworthiness and the product you select. Pre-qualification uses a soft credit pull that does not affect your credit score.
          </p>

        </div>
      </article>

      <SimpleCTA title="Build the Deck — Pay Monthly" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-payment-estimator" />
      <ContactHome />
    </>
  );
}
