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
  path: '/best-time-to-finance-build-deck-northern-virginia',
  title: 'When to Finance and Build a Deck in Northern Virginia (2026)',
  description: 'Best time of year to finance and build a deck in Northern Virginia. Pricing by season, permit timing, lender promotions, and material lead times.',
  image: '/showcase/img07.jpeg',
});

const PATH = '/best-time-to-finance-build-deck-northern-virginia';

const seasons = [
  {
    name: 'Late Winter (Feb–Mar)',
    rating: 'BEST OVERALL',
    color: '#2e7d32',
    pricing: '10–15% better builder pricing — lowest demand of the year',
    permit: '~1 week — county queues are shortest',
    hoa: '2–3 weeks — committees often catch up after winter break',
    lender: 'Standard rates; some 0% promotional offers begin',
    build: 'Build kicks off late Feb through early April',
  },
  {
    name: 'Spring (Apr–May)',
    rating: 'GOOD',
    color: '#1976d2',
    pricing: 'Standard pricing; demand is climbing',
    permit: '2–3 weeks — review times start lengthening',
    hoa: '3–5 weeks — peak HOA submission season',
    lender: 'Peak lender promotional season — strong 0% and rate-buydown offers',
    build: '3–6 week wait on most builders',
  },
  {
    name: 'Summer (Jun–Aug)',
    rating: 'COMPETITIVE',
    color: '#f57c00',
    pricing: 'Peak season pricing — 5–10% above winter rates',
    permit: '3–6 weeks — Fairfax County backed up',
    hoa: '4–6 weeks — committees overloaded',
    lender: 'Standard rates; promotional offers still common',
    build: '6–10 week wait on most builders',
  },
  {
    name: 'Fall (Sep–Nov)',
    rating: 'EXCELLENT',
    color: '#2e7d32',
    pricing: 'Second-best window — 5–8% better than peak summer',
    permit: '2–3 weeks — queues shorten after Labor Day',
    hoa: '3–4 weeks — committees normalize',
    lender: 'Year-end promotional push — strong rates and incentives',
    build: 'Build kicks off Sept–Oct, often wraps before Thanksgiving',
  },
  {
    name: 'Winter (Dec–Jan)',
    rating: 'AVAILABLE',
    color: '#757575',
    pricing: 'Best pricing of the year (15%+ off peak) — limited build days',
    permit: 'Fast review but holiday closures',
    hoa: 'Often slow — many committees pause in December',
    lender: 'Standard rates; some year-end clearance offers',
    build: 'Weather-dependent; many builders book design/permit work for spring',
  },
];

const faqs = [
  {
    q: 'When is the cheapest time to build a deck in Northern Virginia?',
    a: 'Late winter (February–March) typically offers the best builder pricing — 10–15% below peak summer rates. December and January also offer strong pricing but build days are limited by weather. The trade-off: peak savings months have shorter usable-deck seasons that year.',
  },
  {
    q: 'When is the best time to start the permit and HOA process?',
    a: 'February or early September. Both windows precede the heavy submission seasons and county/HOA queues are shortest. A February submission gives you a deck built and ready for spring entertaining; a September submission gets ahead of the spring rush for next year.',
  },
  {
    q: 'Do lenders run promotional rates at certain times of year?',
    a: 'Yes. Home-improvement lenders typically run their strongest promotional rates (including 0% intro offers) in April–May and again in September–November. Soft-pull pre-qualification shows what current promotional offers apply to your profile in real time.',
  },
  {
    q: 'How does timing affect monthly payment?',
    a: 'Promotional 0% APR offers cut interest cost to zero for the introductory period (typically 12–24 months). On a $25,000 deck, 12 months at 0% saves ~$1,500 in interest vs an 8.99% loan. If you pay off during the intro period, you avoid all interest. After the intro, the rate jumps to the lender\'s standard APR.',
  },
  {
    q: 'How long is the full timeline from financing decision to finished deck?',
    a: 'Typically 4–8 weeks if you start in late winter or early fall. 6–10 weeks during peak spring/summer due to permit and HOA queues. Pre-qualification takes ~60 seconds. Written estimate takes 3–7 days. Permit review runs concurrent with HOA submission. Build itself is 1–4 weeks depending on size.',
  },
  {
    q: 'Should I wait if my preferred season is far out?',
    a: 'No, in most cases. Material prices rise 5–8% per year and lender promotional rates shift. Starting the design and permit process today often locks in current pricing and current rates, even if construction is months out. Most builders can scope a build window months in advance.',
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
  container: { maxWidth: 960, margin: '0 auto', padding: '0 1.5rem' },
};

export default function BestTimeToFinanceBuildPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ArticleSchema
        title="When to Finance and Build a Deck in Northern Virginia (2026)"
        description="Best time of year to finance and build a deck in Northern Virginia. Pricing by season, permit timing, lender promotions, and material lead times."
        path={PATH}
        image="/showcase/img07.jpeg"
        datePublished="2026-05-27"
        dateModified="2026-05-27"
      />
      <WebPageSchema url={`https://ldndecks.com${PATH}`} name="When to Finance and Build a Deck in Northern Virginia (2026)" description="Best time of year to finance and build a deck in Northern Virginia. Pricing by season, permit timing, lender promotions, and material lead times." speakable />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={S.container}>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Timing &amp; Seasonality &middot; Northern Virginia
          </p>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
            When Is the Best Time to Finance and Build a Deck in Northern Virginia?
          </h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Season-by-season breakdown of builder pricing, permit timing, HOA queue length, and lender promotional
            rates — so the deck is finished when you want to use it.
          </p>
        </div>
      </section>

      <TrustBanner />

      <AboveFoldCTA
        headline="Want to time your build for the right season? Schedule a project estimate to start the planning timeline."
        estimateHref="/contact"
        estimateLabel="Schedule Project Estimate"
      />

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }} className="quick-answer">
        <div style={S.container}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p data-speakable>
            <strong>Late winter (February–March)</strong> is the best overall window: 10–15% better builder pricing,
            shortest county and HOA queues, and a build that wraps before peak entertaining season.{' '}
            <strong>Early fall (September–October)</strong> is the second-best window with strong lender promotional
            rates. Avoid June–August if possible — peak demand stacks builder, permit, and HOA delays.
          </p>
        </div>
      </section>

      <article style={{ padding: '3.5rem 0' }}>
        <div style={S.container}>
          <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/showcase/img07.jpeg"
              alt="Best time of year to finance and build a deck in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 960px) 100vw, 960px"
              quality={70}
              priority
            />
          </div>

          <h2 style={{ ...S.h2, marginTop: 0 }}>Season-By-Season Breakdown</h2>
          <p style={S.p}>
            Northern Virginia deck pricing and timeline shift significantly by season. The four variables that move:
            builder demand (drives pricing), permit queue length, HOA committee availability, and lender promotional
            rates.
          </p>

          {seasons.map((s) => (
            <div key={s.name} style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <h3 style={{ ...S.h3, margin: 0 }}>{s.name}</h3>
                <span style={{ fontWeight: 700, color: s.color, fontSize: '0.85rem', letterSpacing: '0.05em' }}>{s.rating}</span>
              </div>
              <div style={{ display: 'grid', gap: '0.4rem', fontSize: '0.92rem' }}>
                <div><strong>Pricing:</strong> {s.pricing}</div>
                <div><strong>Permit:</strong> {s.permit}</div>
                <div><strong>HOA:</strong> {s.hoa}</div>
                <div><strong>Lender:</strong> {s.lender}</div>
                <div><strong>Build window:</strong> {s.build}</div>
              </div>
            </div>
          ))}

          <h2 style={S.h2}>Lender Promotional Rate Calendar</h2>
          <p style={S.p}>
            Home-improvement lenders run their strongest promotional rates twice a year:
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', lineHeight: 1.85 }}>
            <li><strong>April–May:</strong> Spring home-improvement push. Common 0% intro APR offers for 12–24 months. Best for homeowners planning to pay off during the intro period.</li>
            <li><strong>September–November:</strong> Year-end clearance and Q4 lender targets. Lowest standard APRs of the year for longer-term financing (10–15 year).</li>
            <li><strong>February–March:</strong> Tax refund season. Lenders compete for refund-funded deposits; rates are mid-pack but approval is fast.</li>
          </ul>

          <h2 style={S.h2}>Timing the Build for When You&apos;ll Use It</h2>
          <p style={S.p}>
            Most Northern Virginia homeowners want the deck ready for May–September entertaining. To finish by early May:
            start design, financing, and permit work in <strong>late January or early February</strong>. To finish by
            June for July 4 entertaining: start in March. To have a fall-ready deck for tailgating and pumpkin season:
            start in July with September completion as target.
          </p>

          <h2 style={S.h2}>Material Lead Times</h2>
          <p style={S.p}>
            Premium composite (AZEK Vintage, Trex Signature, exotic colorways) ships in 4–8 weeks during peak season
            and 2–4 weeks in off-season. Standard composite (Trex Enhance, Transcend in popular colors) is in-stock
            year-round. Color and tier choice can be a hidden delay if you wait until peak season — choose early to
            avoid sequencing problems.
          </p>

          <h2 style={S.h2}>Building Step-By-Step Timeline</h2>
          <ol style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', lineHeight: 1.85 }}>
            <li><strong>Week 0:</strong> Free in-home consultation and design</li>
            <li><strong>Weeks 1–2:</strong> Material selection, written estimate, financing pre-qualification</li>
            <li><strong>Weeks 2–4:</strong> HOA submission (in parallel with material order)</li>
            <li><strong>Weeks 3–6:</strong> County permit review</li>
            <li><strong>Weeks 6–8:</strong> Build kickoff — demolition (if applicable), framing</li>
            <li><strong>Weeks 7–10:</strong> Decking, railings, stairs, lighting</li>
            <li><strong>Week 10–12:</strong> Final inspection and walkthrough</li>
          </ol>

          <h2 style={S.h2}>Related Planning Pages</h2>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/best-time-to-build-a-deck-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Best Time to Build a Deck in Northern Virginia (month-by-month) →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Deck Payment Estimator →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/deck-financing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Deck Financing in Northern Virginia →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/credit-score-deck-financing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                What Credit Score Do You Need for Deck Financing? →
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

      <SimpleCTA title="Schedule a Project Estimate" buttonText="Get Free Estimate" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-27" />
      <RelatedGuides currentPath={PATH} />
      <ContactHome />
    </>
  );
}
