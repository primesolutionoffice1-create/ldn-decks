import React from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import EnhancifyWidget from '@/components/EnhancifyWidget';
import FinancingCalculator from '@/components/FinancingCalculator';
import EstimatorTrackedLink from '@/components/EstimatorTrackedLink';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import ArticleSchema from '@/components/ArticleSchema';
import ServiceSchema from '@/components/ServiceSchema';
import CallLink from '@/components/CallLink';
import { BUSINESS } from '@/lib/business';

export const metadata = buildMetadata({
  path: '/deck-payment-estimator',
  title: 'Deck Payment Estimator | Monthly Cost Calculator | Loudoun Decks',
  description: 'Estimate the monthly payment on a custom deck. Free deck loan calculator — adjust project amount, APR and term to see your monthly cost. Northern Virginia.',
});

const pageUrl = 'https://ldndecks.com/deck-payment-estimator';

// Tool-focused FAQs — about how the estimator works (the math), deliberately
// distinct from the financing-policy FAQs on /deck-financing.
const faqs = [
  {
    q: "How much does deck financing usually cost per month?",
    a: "Monthly deck payments depend on the project amount, APR, and repayment term. A smaller resurfacing project will model very differently from a full composite deck replacement with stairs, railings, lighting, and permits. Use the estimator to test a realistic project amount, then confirm the final number with a written Loudoun Decks estimate and a soft-pull lender pre-qualification.",
  },
  {
    q: "Can I use this tool for composite deck cost planning?",
    a: "Yes. The estimator is built for larger deck projects, including composite deck replacement, Trex, TimberTech, AZEK/PVC, covered decks, and outdoor living upgrades. Start with a cost range from the deck cost calculator or your written estimate, then use this page to understand the monthly payment side of the decision.",
  },
  {
    q: "Will checking financing approval affect my credit score?",
    a: "The estimator itself does not check credit. When you move from this model to a financing application, pre-qualification is typically a soft credit pull, which lets you review available offers without affecting your credit score. A hard inquiry may happen only if you choose to move forward with a specific lender offer.",
  },
  {
    q: "Is Trex more expensive than wood over the long term?",
    a: "Trex and other composite products usually cost more upfront than pressure-treated wood, but they avoid repeated staining, sealing, sanding, and early board replacement. For homeowners planning to stay in the home, the long-term cost comparison often favors composite once maintenance and usable life are included.",
  },
  {
    q: "Should permit and HOA costs be included in the project amount?",
    a: "Yes. The project amount should model the whole job, not just deck boards. For Northern Virginia homeowners, that can include framing, railings, stairs, lighting, demolition, permits, HOA documentation, drawings, and cleanup. A complete written estimate is the best number to enter into the calculator.",
  },
  {
    q: "How long does a financed deck project take?",
    a: "Financing decisions can be quick, but the full project timeline depends on design, product selection, permits, HOA review, material availability, and construction complexity. Many homeowners use this estimator early so they can make budget decisions before final drawings and permit work begin.",
  },
  {
    q: "Does a deck improve home value in Northern Virginia?",
    a: "A well-built deck can improve resale appeal, usable outdoor living space, and buyer confidence, especially in higher-value Northern Virginia homes. The return depends on material quality, design fit, permit compliance, maintenance needs, and how well the deck connects to the home and yard.",
  },
  {
    q: "What should I do after using the estimator?",
    a: "Save the monthly payment range that feels comfortable, then request a free on-site estimate. Loudoun Decks can confirm the actual project scope, separate must-do structural work from optional upgrades, and give you a written number to compare against financing offers.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,
  "url": pageUrl,
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

const trustSignals = [
  `${BUSINESS.reviewSummary.ratingValue} Google rating with ${BUSINESS.reviewSummary.reviewCount} reviews`,
  'A+ BBB Accredited Business',
  'Virginia DPOR licensed contractor',
  'Written, itemized estimates',
  'Soft-pull financing path available',
];

export default function DeckPaymentEstimatorPage() {
  return (
    <>
      <WebPageSchema url="https://ldndecks.com/deck-payment-estimator" name="Deck Payment Estimator | Monthly Cost Calculator" description="Estimate the monthly payment on a custom deck. Free deck loan calculator — adjust project amount, APR and term to see your monthly cost. Northern Virginia." speakable />
      <ArticleSchema
        title="Deck Payment Estimator | Monthly Cost Calculator"
        description="Estimate the monthly payment on a custom deck. Free deck loan calculator — adjust project amount, APR and term to see your monthly cost. Northern Virginia."
        path="/deck-payment-estimator"
        image="/showcase/img09.jpeg"
        datePublished="2026-04-12"
        dateModified="2026-05-28"
      />
      <ServiceSchema
        name="Deck Payment Estimator Tool"
        description="Free interactive deck payment estimator for Northern Virginia homeowners. Model project amount, APR, and term to estimate monthly payment before contacting a contractor. Loudoun Decks does not extend credit; financing is offered through Enhancify, Inc. and partner lenders."
        url="https://ldndecks.com/deck-payment-estimator"
        serviceType="Home Improvement Payment Estimation"
        category="Financial Services"
        lowPrice="15000"
        highPrice="120000"
        relatedServices={['https://ldndecks.com/deck-financing', 'https://ldndecks.com/services/new-decks', 'https://ldndecks.com/deck-cost-calculator']}
      />
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
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.12rem', lineHeight: 1.6, marginBottom: '0.75rem', maxWidth: 680 }}>
            See the monthly payment on a custom deck in seconds. Move the three sliders &mdash; project amount, APR and term &mdash; and the estimator does the amortization math for you.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: 0, maxWidth: 680, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: 'var(--color-primary)' }} />
            <span><strong>Checking your rate does not affect your credit score.</strong> Pre-qualification uses a soft credit pull through Enhancify.</span>
          </p>
          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
            <EstimatorTrackedLink
              href="#payment-estimator"
              ctaLocation="hero_jump_to_estimator"
              style={{ display: 'inline-block', background: 'var(--color-primary)', color: 'var(--white)', padding: '0.95rem 1.5rem', borderRadius: 10, fontWeight: 700, textDecoration: 'none' }}
            >
              Estimate My Monthly Payment
            </EstimatorTrackedLink>
            <EstimatorTrackedLink
              href="/contact"
              ctaLocation="hero_free_estimate"
              style={{ display: 'inline-block', background: 'transparent', color: 'var(--white)', padding: '0.95rem 1.5rem', borderRadius: 10, fontWeight: 700, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.25)' }}
            >
              Get a Written Estimate
            </EstimatorTrackedLink>
          </div>
        </div>
      </section>

      {/* ============ THE CALCULATOR (reason the page exists) ============ */}
      <section id="payment-estimator" style={{ background: '#fafafa', padding: '3rem 0', scrollMarginTop: '6rem' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ background: '#fff', borderRadius: 14, padding: '2.5rem 2rem', border: '1px solid #e5e5e5', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <FinancingCalculator />
            <p style={{ fontSize: '0.78rem', color: '#999', textAlign: 'center', marginTop: '1.25rem', marginBottom: 0, fontStyle: 'italic' }}>
              For illustration only. Actual rate, term and monthly payment are determined by your lender based on creditworthiness.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', marginTop: '1.5rem' }}>
              {trustSignals.map((signal) => (
                <div key={signal} style={{ background: '#fafafa', border: '1px solid #eee', borderRadius: 8, padding: '0.8rem', textAlign: 'center', fontSize: '0.86rem', color: '#444', fontWeight: 600 }}>
                  {signal}
                </div>
              ))}
            </div>
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

          <div style={{ background: '#fff8f1', border: '1px solid #f4d2bd', borderRadius: 14, padding: '1.5rem', margin: '2rem 0 0' }}>
            <h2 style={{ fontSize: '1.35rem', margin: '0 0 0.65rem', fontWeight: 800 }}>
              Use the Payment Number as a Planning Filter
            </h2>
            <p style={{ ...S.p, marginBottom: '1rem', color: '#555' }}>
              A monthly payment model helps you compare project size, material level, and timeline before you overbuild or under-spec the deck. After the estimator gives you a comfortable range, the next step is a written project estimate that accounts for framing condition, permits, stairs, railings, and site access.
            </p>
            <EstimatorTrackedLink
              href="/contact"
              ctaLocation="planning_filter_written_estimate"
              style={{ color: 'var(--color-primary)', fontWeight: 700 }}
            >
              Request the written estimate to confirm the real project amount
            </EstimatorTrackedLink>
          </div>

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

          {/* ============ WHAT HAPPENS NEXT ============ */}
          <h2 style={S.h2}>What Happens After You Click &ldquo;Check My Rate&rdquo;</h2>
          <p style={{ ...S.p, color: '#555' }}>
            The financing-curious homeowner&apos;s most-asked question. Three steps, ~60 seconds total, no commitment:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { n: 1, title: 'Soft credit check', body: 'Enter income, address, and project amount. Enhancify runs a soft pull — your credit score is not affected. Multiple lender offers return in ~60 seconds.' },
              { n: 2, title: 'Compare offers', body: 'Review APR, term, and monthly payment side-by-side. Pick the one that fits your budget. Still no hard inquiry, still no commitment.' },
              { n: 3, title: 'Build starts', body: 'Once you accept an offer and sign with the lender, your funds release on a schedule that matches the build. We coordinate the timing with permit + HOA approval.' },
            ].map(step => (
              <div key={step.n} style={{ background: '#fff', borderRadius: 12, padding: '1.4rem', border: '1px solid #e5e5e5', borderTop: '4px solid var(--color-primary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                  <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 6, background: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 800 }}>{step.n}</span>
                  <h3 style={{ fontWeight: 700, fontSize: '1.05rem', margin: 0 }}>{step.title}</h3>
                </div>
                <p style={{ fontSize: '0.92rem', color: '#555', margin: 0, lineHeight: 1.6 }}>{step.body}</p>
              </div>
            ))}
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
          <h2 style={S.h2}>Deck Payment, Cost, and Financing FAQ</h2>
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
              <EstimatorTrackedLink href="/contact" ctaLocation="final_free_estimate" style={{ display: 'inline-block', background: 'var(--color-primary)', color: 'var(--white)', padding: '1rem 2rem', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: '1.02rem' }}>
                Get My Free Estimate
              </EstimatorTrackedLink>
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
              ['/credit-score-deck-financing', 'What Credit Score Do You Need for Deck Financing?'],
              ['/best-time-to-finance-build-deck-northern-virginia', 'Best Time of Year to Finance & Build a Deck'],
              ['/monthly-payment-composite-deck-northern-virginia', 'Monthly Payment on a Composite Deck — Project Examples'],
              ['/deck-lighting-railings-stairs-addon-cost', 'Lighting, Railings & Stairs Add-On Cost Impact'],
              ['/deck-cost-calculator', 'Free Deck Cost Calculator — Estimate Your Project'],
              ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
              ['/composite-deck-cost-by-size', 'Composite Deck Cost by Size (300/400/500/600 sqft)'],
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
      
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Resources</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Customer Reviews (5.0★ Google) →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/about" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>About Loudoun Decks →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/contact" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Get a Free Estimate →</Link></li>
        </ul>
      </section>
      <ContactHome />
    </>
  );
}
