import React from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import EnhancifyWidget from '@/components/EnhancifyWidget';
import FinancingCalculator from '@/components/FinancingCalculator';
import { buildMetadata } from '@/lib/seo';
import { BUSINESS } from '@/lib/business';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/deck-financing',
  title: 'Premium Deck Financing in Northern Virginia | Loudoun Decks',
  description: 'Finance your custom deck. Monthly options for $15K-$50K+ composite decks. Soft credit pre-qualification — no impact on credit score.',
});

const faqs = [
  {
    q: "Will checking my financing options affect my credit score?",
    a: "No. Pre-qualification uses a soft credit pull, which has no impact on your credit score. You'll see your real rate, term, and monthly payment before any hard inquiry. A hard pull only happens if you formally accept a loan offer."
  },
  {
    q: "Is there a down payment required?",
    a: "Most financing products through our partner network require no down payment. Your full project cost can be financed, including materials, labor, permits, and design. Some homeowners choose to put a portion down to reduce their monthly payment — that's optional, not required."
  },
  {
    q: "How long does approval take?",
    a: "Pre-qualification is typically returned in 60 seconds. Full approval and funding most often complete within 1–3 business days, well before our crew breaks ground. You won't be left waiting for funds."
  },
  {
    q: "Can I pay the loan off early without a penalty?",
    a: "Most loan products in our partner network have no prepayment penalty. If you sell your home, refinance, or simply pay early, you keep the savings. Specific terms are disclosed in your loan agreement before you sign anything."
  },
  {
    q: "Can financing be used for design upgrades and add-ons?",
    a: "Yes. Your loan can cover the full scope of your project — Trex Transcend or TimberTech AZEK upgrades, screened porch additions, integrated lighting, pergolas, railings, stairs, and outdoor kitchen build-outs. We don't artificially split projects."
  },
  {
    q: "What credit profile do I need to qualify?",
    a: "Our partner network works with a wide range of credit profiles. Pre-qualification is the fastest way to see what you actually qualify for. Most homeowners with a credit score above 660 see competitive offers; some products are available below that as well."
  },
  {
    q: "Does Loudoun Decks earn a commission on my financing?",
    a: "No. We do not receive a commission, kickback, or referral fee on financing. Your loan agreement is directly between you and the lender. We provide the application as a convenience because most homeowners ask about financing options during the consultation."
  },
  {
    q: "Can I combine financing with my design consultation?",
    a: "Yes — and most homeowners do. We finalize design, materials, and itemized pricing during our free on-site consultation. You can then run the financing application that same evening with your real project total in hand. No back-and-forth."
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};

const S = {
  h2: { fontSize: '1.95rem', fontWeight: 800, marginBottom: '1.25rem', marginTop: '3rem', lineHeight: 1.2, letterSpacing: '-0.01em' },
  h3: { fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem', marginTop: '1.5rem' },
  p: { marginBottom: '1rem', lineHeight: 1.7, fontSize: '1rem' },
};

const projectExamples = [
  {
    project: 'Composite Deck Replacement',
    range: '$18,000 – $32,000',
    materials: 'Trex Enhance / Trex Transcend',
    monthly: '~$200 – $360',
  },
  {
    project: 'Custom Trex Transcend Build',
    range: '$28,000 – $42,000',
    materials: 'Trex Transcend, picture-frame border, lighting',
    monthly: '~$310 – $470',
  },
  {
    project: 'Multi-Level Deck + Pergola',
    range: '$42,000 – $65,000',
    materials: 'TimberTech AZEK, cedar pergola, LED package',
    monthly: '~$470 – $725',
  },
  {
    project: 'Composite Deck + Screened Porch',
    range: '$48,000 – $80,000',
    materials: 'Trex + screened addition, EZE-Breeze, fan',
    monthly: '~$535 – $895',
  },
];

const trustStats = [
  { stat: '24+', label: 'Years building decks' },
  { stat: '5.0★', label: `Google rating · ${BUSINESS.aggregateRating.reviewCount}+ reviews` },
  { stat: 'A+', label: 'BBB Accredited Business' },
  { stat: 'Top 1%', label: 'Trex Platinum Partner' },
];

const benefits = [
  { icon: '✓', title: 'No Credit Score Impact', desc: 'Pre-qualification uses a soft credit pull. See real rates without affecting your score.' },
  { icon: '⚡', title: '60-Second Decision', desc: 'Pre-qualified offers returned the same minute you apply.' },
  { icon: '🔒', title: 'No Down Payment Required', desc: 'Finance 100% of your project — materials, labor, permits, design.' },
  { icon: '📅', title: 'Terms Up to 15 Years', desc: 'Choose the monthly payment that fits your budget.' },
  { icon: '%', title: '0% APR Promotional', desc: 'Available for qualified borrowers on shorter terms.' },
  { icon: '🚫', title: 'No Prepayment Penalty', desc: 'Pay off early on most products without extra fees.' },
];

export default function DeckFinancingPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* ============ HERO ============ */}
      <section style={{ background: 'var(--color-dark)', color: 'var(--white)', padding: '5rem 0 4rem' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Premium Deck Financing &middot; Northern Virginia
          </p>
          <h1 style={{ fontSize: '2.85rem', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.1, maxWidth: 780, letterSpacing: '-0.02em' }}>
            Why Wait Three Years to Save Up for the Deck You Want?
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '1.75rem', maxWidth: 720 }}>
            Most of our projects fall between <strong style={{ color: 'var(--white)' }}>$15,000 and $50,000+</strong>. With flexible monthly financing, you can start enjoying a premium custom deck this season &mdash; and pay over time at a rate that fits your budget.
          </p>

          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <Link href="/contact" style={{ display: 'inline-block', background: 'var(--color-primary)', color: 'var(--white)', padding: '1.05rem 2rem', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: '1.05rem', boxShadow: '0 4px 14px rgba(0,0,0,0.2)' }}>
              Schedule Free Consultation
            </Link>
            <CallLink style={{ display: 'inline-block', background: 'transparent', color: 'var(--white)', padding: '1.05rem 2rem', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: '1.05rem', border: '2px solid rgba(255,255,255,0.3)' }}>
              Call (571) 655-7207
            </CallLink>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
            <span style={{ color: 'var(--color-primary)' }}>●</span> Soft credit check only
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ color: 'var(--color-primary)' }}>●</span> No impact on credit score
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ color: 'var(--color-primary)' }}>●</span> 60-second decision
          </p>
        </div>
      </section>

      {/* ============ TRUST STATS RIBBON ============ */}
      <section style={{ background: '#fff', padding: '2.25rem 0', borderBottom: '1px solid #eee' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
            {trustStats.map((t) => (
              <div key={t.label} style={{ textAlign: 'center', padding: '0.5rem' }}>
                <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)', margin: 0, letterSpacing: '-0.02em' }}>{t.stat}</p>
                <p style={{ fontSize: '0.85rem', color: '#666', margin: 0, fontWeight: 600 }}>{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ POSITIONING ============ */}
      <section style={{ padding: '4rem 0', background: '#fafafa' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 style={{ ...S.h2, marginTop: 0 }}>
            Premium Builds. Smart Financing. No Compromises.
          </h2>
          <p style={{ ...S.p, fontSize: '1.1rem' }}>
            We&apos;re not the cheapest deck builder in Northern Virginia &mdash; and that&apos;s the point. Our clients invest in custom Trex Transcend, TimberTech AZEK, and full outdoor living systems built to last 25–50 years. Financing simply lets you start enjoying that investment now instead of waiting three years to save up.
          </p>
          <p style={{ ...S.p, fontSize: '1.05rem', color: '#555' }}>
            One conversation. Clear monthly payment. No pressure. No hidden cost added to your project. No commission paid to us.
          </p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 1.5rem' }}>

          {/* ============ INTERACTIVE CALCULATOR ============ */}
          <div style={{ background: '#fff', borderRadius: 14, padding: '2.5rem 2rem', marginBottom: '3rem', border: '1px solid #e5e5e5', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
            <p style={{ textAlign: 'center', color: 'var(--color-primary)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Estimate Your Monthly Payment
            </p>
            <h2 style={{ ...S.h2, marginTop: 0, textAlign: 'center', fontSize: '1.7rem', marginBottom: '1.5rem' }}>
              See What Your Project Could Cost Per Month
            </h2>
            <FinancingCalculator />
            <p style={{ fontSize: '0.78rem', color: '#999', textAlign: 'center', marginTop: '1rem', marginBottom: 0, fontStyle: 'italic' }}>
              For illustration only. Actual rate, term, and monthly payment determined by your lender based on creditworthiness.
            </p>
            <p style={{ fontSize: '0.92rem', color: '#555', textAlign: 'center', marginTop: '1rem', marginBottom: 0 }}>
              Need the focused version? Open the <Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>deck payment calculator</Link> and model monthly payments from your written project amount.
            </p>
          </div>

          {/* ============ FINANCING OPTIONS ============ */}
          <h2 style={{ ...S.h2, marginTop: '0', textAlign: 'center' }}>How Our Financing Works</h2>
          <p style={{ ...S.p, textAlign: 'center', maxWidth: 720, margin: '0 auto 2.5rem', color: '#555' }}>
            We partner with Enhancify, a financing platform that compares offers from multiple national lenders. Three straightforward paths depending on your goal:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
            <div style={{ background: '#fff', borderRadius: 12, padding: '1.75rem', border: '1px solid #e5e5e5', borderTop: '4px solid var(--color-primary)' }}>
              <p style={{ fontSize: '0.75rem', color: '#999', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Option 1</p>
              <h3 style={{ ...S.h3, marginTop: 0 }}>Promotional 0% APR</h3>
              <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                12, 18, or 24-month terms with no interest for qualified borrowers. Best if you plan to pay off within 2 years.
              </p>
              <p style={{ fontSize: '0.85rem', color: '#999', margin: 0 }}>Ideal for projects up to $35K</p>
            </div>

            <div style={{ background: 'var(--white)', borderRadius: 12, padding: '1.75rem', border: '1px solid #e5e5e5', borderTop: '4px solid var(--color-primary)', position: 'relative' }}>
              <span style={{ position: 'absolute', top: -10, right: 16, background: 'var(--color-primary)', color: 'var(--white)', padding: '0.25rem 0.65rem', borderRadius: 4, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.05em' }}>MOST POPULAR</span>
              <p style={{ fontSize: '0.75rem', color: '#999', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Option 2</p>
              <h3 style={{ ...S.h3, marginTop: 0 }}>Fixed-Rate Term Loan</h3>
              <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                Standard fixed APR with terms up to 15 years. Predictable monthly payment. Ideal for larger custom builds and screened porch additions.
              </p>
              <p style={{ fontSize: '0.85rem', color: '#999', margin: 0 }}>Most-used for $30K–$80K projects</p>
            </div>

            <div style={{ background: '#fff', borderRadius: 12, padding: '1.75rem', border: '1px solid #e5e5e5', borderTop: '4px solid var(--color-primary)' }}>
              <p style={{ fontSize: '0.75rem', color: '#999', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Option 3</p>
              <h3 style={{ ...S.h3, marginTop: 0 }}>Compare Multiple Lenders</h3>
              <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                One application returns offers from several lenders side-by-side. You pick the rate, term, and lender that fit your situation.
              </p>
              <p style={{ fontSize: '0.85rem', color: '#999', margin: 0 }}>One soft pull. Multiple offers.</p>
            </div>
          </div>

          {/* ============ KEY BENEFITS GRID ============ */}
          <h2 style={S.h2}>What Makes Our Financing Different</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
            {benefits.map((b) => (
              <div key={b.title} style={{ background: '#fff', borderRadius: 10, padding: '1.4rem', border: '1px solid #e5e5e5', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 8, background: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', fontWeight: 700 }}>
                  {b.icon}
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.3rem', marginTop: 0 }}>{b.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#555', margin: 0, lineHeight: 1.55 }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ============ WIDGET ============ */}
          <div style={{ background: 'var(--color-dark)', borderRadius: 14, padding: '2.75rem 2rem', textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: 'var(--color-primary)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              ● Soft Credit Check Only · No Score Impact
            </p>
            <h2 style={{ ...S.h2, marginTop: 0, color: 'var(--white)', textAlign: 'center', marginBottom: '0.75rem', fontSize: '1.85rem' }}>
              See Your Real Rate in 60 Seconds
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 560, margin: '0 auto 1.75rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
              No commitment. No hard credit pull. You see actual loan offers from multiple lenders before you decide anything.
            </p>
            <EnhancifyWidget />
            <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', marginTop: '1.5rem', maxWidth: 580, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.5 }}>
              Financing provided by Enhancify, Inc. and partner lenders. Loudoun Decks is not a lender and does not earn a commission on financing. All loans subject to credit approval.
            </p>
          </div>

          {/* ============ QUALIFIER ============ */}
          <h2 style={S.h2}>Is This the Right Fit for Your Project?</h2>
          <p style={{ ...S.p, color: '#555', marginBottom: '1.75rem' }}>
            We&apos;re selective about the projects we take on, and we want our financing partners to be the right fit for our clients. Here&apos;s an honest look at who benefits most:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
            <div style={{ background: '#f0fdf4', borderRadius: 12, padding: '1.5rem', border: '1px solid #bbf7d0' }}>
              <p style={{ fontWeight: 700, color: '#166534', marginBottom: '0.75rem', fontSize: '0.95rem' }}>✓ Right fit if you&apos;re:</p>
              <ul style={{ paddingLeft: '1.2rem', lineHeight: 1.7, color: '#14532d', fontSize: '0.95rem', margin: 0 }}>
                <li>Planning a full deck build, replacement, or premium remodel</li>
                <li>Looking at a project budget of <strong>$15,000 or more</strong></li>
                <li>Choosing premium materials (Trex, TimberTech, AZEK)</li>
                <li>Adding a screened porch, pergola, or outdoor living system</li>
                <li>A homeowner planning to stay in your home 5+ years</li>
              </ul>
            </div>

            <div style={{ background: '#fff7ed', borderRadius: 12, padding: '1.5rem', border: '1px solid #fed7aa' }}>
              <p style={{ fontWeight: 700, color: '#9a3412', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Not the right fit if you&apos;re:</p>
              <ul style={{ paddingLeft: '1.2rem', lineHeight: 1.7, color: '#7c2d12', fontSize: '0.95rem', margin: 0 }}>
                <li>Looking for small repairs under $5,000</li>
                <li>Comparing on price alone (we&apos;re not the cheapest)</li>
                <li>Wanting a quick patch or temporary fix</li>
                <li>Planning to DIY most of the work</li>
                <li>Moving in the next 12 months without resale upgrade plans</li>
              </ul>
            </div>
          </div>
          <p style={{ ...S.p, fontSize: '0.95rem', color: '#666', fontStyle: 'italic' }}>
            If your project doesn&apos;t fit our scope, we&apos;ll tell you upfront and point you toward a contractor that&apos;s a better match. No pressure.
          </p>

          {/* ============ COST CONTEXT ============ */}
          <h2 style={S.h2}>What Premium Deck Projects Actually Cost</h2>
          <p style={{ ...S.p, color: '#555' }}>
            Below are typical project ranges from our recent Northern Virginia builds, with approximate monthly payments based on a 15-year fixed-rate term:
          </p>

          <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  <th style={{ padding: '0.85rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Project Type</th>
                  <th style={{ padding: '0.85rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Project Range</th>
                  <th style={{ padding: '0.85rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Materials</th>
                  <th style={{ padding: '0.85rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Approx. Monthly*</th>
                </tr>
              </thead>
              <tbody>
                {projectExamples.map((p, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ padding: '0.85rem', borderBottom: '1px solid #eee', fontWeight: 600 }}>{p.project}</td>
                    <td style={{ padding: '0.85rem', borderBottom: '1px solid #eee' }}>{p.range}</td>
                    <td style={{ padding: '0.85rem', borderBottom: '1px solid #eee', color: '#666', fontSize: '0.85rem' }}>{p.materials}</td>
                    <td style={{ padding: '0.85rem', borderBottom: '1px solid #eee', color: 'var(--color-primary)', fontWeight: 700 }}>{p.monthly}/mo</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#777', fontStyle: 'italic', marginBottom: '2rem' }}>
            *Monthly estimates based on 15-year term at sample APRs. Excludes 0% promotional terms (which compress to higher monthlies but zero interest). Your actual rate, term, and monthly payment are calculated from your real loan offer.
          </p>

          {/* ============ PROCESS ============ */}
          <h2 style={S.h2}>Your Path from Conversation to Completed Deck</h2>
          <p style={{ ...S.p, color: '#555' }}>
            Most clients move from first call to break-ground in 4–8 weeks.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
            {[
              { num: '1', title: 'Free On-Site Consultation', desc: 'We meet at your property, walk the space, and discuss vision, materials, and budget. No pressure, no obligation.' },
              { num: '2', title: 'Custom Design + Quote', desc: 'You receive a written, itemized estimate with materials, labor, permits, and timeline. Optional 3D rendering on request.' },
              { num: '3', title: 'Financing Pre-Qualification', desc: '60-second soft pull through Enhancify. See real rates from multiple lenders. Choose the term that fits your budget.' },
              { num: '4', title: 'Permits, HOA & Build', desc: 'We handle all paperwork. Build typically begins 2–4 weeks after approval. Your funds release at project start.' },
            ].map((step) => (
              <div key={step.num} style={{ background: '#fff', borderRadius: 12, padding: '1.5rem', border: '1px solid #e5e5e5', position: 'relative' }}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.75rem' }}>
                  {step.num}
                </div>
                <h3 style={{ ...S.h3, marginTop: 0, fontSize: '1.05rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.55, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* ============ CLIENT VOICE ============ */}
          <div style={{ background: '#fafafa', borderRadius: 14, padding: '2.5rem 2rem', marginBottom: '3rem', borderLeft: '4px solid var(--color-primary)' }}>
            <p style={{ fontSize: '1.15rem', lineHeight: 1.6, color: '#222', fontStyle: 'italic', marginBottom: '1rem', fontWeight: 500 }}>
              &ldquo;We were going to wait another two summers to save up. Instead we got our Trex Transcend deck built this April and the monthly payment is less than our daughter&apos;s soccer fees. We don&apos;t regret it for a second.&rdquo;
            </p>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#666', fontWeight: 600 }}>
              &mdash; Maria & Tom S. &middot; Leesburg, VA &middot; Composite Deck + Screened Porch
            </p>
          </div>

          {/* ============ FAQ ============ */}
          <h2 style={S.h2}>Common Questions From Premium Buyers</h2>
          <p style={{ ...S.p, color: '#555', marginBottom: '1.5rem' }}>
            These are the real questions we hear during consultations. If yours isn&apos;t covered here, ask us directly &mdash; we&apos;ll give you a straight answer.
          </p>
          {faqs.map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 10, padding: '1.25rem', marginBottom: '0.75rem', background: '#fff' }}>
              <summary style={{ fontWeight: 700, cursor: 'pointer', fontSize: '1rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555', fontSize: '0.95rem' }}>{faq.a}</p>
            </details>
          ))}

          {/* ============ FINAL CTA ============ */}
          <div style={{ background: 'var(--color-dark)', borderRadius: 14, padding: '3rem 2rem', textAlign: 'center', margin: '3.5rem 0 2rem' }}>
            <h2 style={{ color: 'var(--white)', fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem', marginTop: 0, lineHeight: 1.2, letterSpacing: '-0.01em' }}>
              Your Backyard Is the Last Thing You Should Compromise On.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', maxWidth: 580, marginLeft: 'auto', marginRight: 'auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Schedule a free consultation. We&apos;ll measure, design, quote, and walk you through financing options that fit your project &mdash; not the other way around.
            </p>
            <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-block', background: 'var(--color-primary)', color: 'var(--white)', padding: '1.05rem 2rem', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: '1.05rem', boxShadow: '0 4px 14px rgba(0,0,0,0.3)' }}>
                Schedule Free Consultation
              </Link>
              <CallLink style={{ display: 'inline-block', background: 'transparent', color: 'var(--white)', padding: '1.05rem 2rem', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: '1.05rem', border: '2px solid rgba(255,255,255,0.3)' }}>
                Call (571) 655-7207
              </CallLink>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginTop: '1.5rem', marginBottom: 0 }}>
              Most consultations scheduled within 48 hours
            </p>
          </div>

          {/* ============ RELATED ============ */}
          <h2 style={S.h2}>Related Resources</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/deck-payment-estimator', 'Deck Payment Estimator — Estimate Your Monthly Payment'],
              ['/deck-cost-calculator', 'Free Deck Cost Calculator — Estimate Your Project'],
              ['/composite-deck-cost-northern-virginia', 'Composite Deck Cost in Northern Virginia (2026)'],
              ['/deck-roi-calculator-northern-virginia', 'Deck ROI Calculator — Resale Value Data'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood Deck — Long-Term Cost Comparison'],
              ['/before-and-after', 'Before & After Project Gallery'],
              ['/get-estimate', 'Request Your Free Deck Estimate'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}>
                <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} &rarr;</Link>
              </li>
            ))}
          </ul>

          {/* ============ DISCLOSURE ============ */}
          <p style={{ fontSize: '0.75rem', color: '#999', marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '1.5rem', lineHeight: 1.6 }}>
            <strong>Financing Disclosure:</strong> Loudoun Decks is not a lender or financial services provider. Financing options are provided by Enhancify, Inc. and its network of partner lenders. All loans are subject to credit approval. APR, loan amount, term, and monthly payment are determined by the lender based on your individual creditworthiness and the product you select. Pre-qualification involves a soft credit pull that does not affect your credit score; a hard credit inquiry occurs only if you proceed with a formal application after accepting a loan offer. Promotional 0% APR offers may have specific term and qualification requirements. Read all loan terms carefully before signing.
          </p>

        </div>
      </article>

      <SimpleCTA title="Ready to Discuss Your Project?" buttonText="Schedule Free Consultation" link="/contact" />
      <RelatedGuides currentPath="/deck-financing" />
      <ContactHome />
    </>
  );
}
