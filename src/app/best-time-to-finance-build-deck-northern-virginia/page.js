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

const PATH = '/best-time-to-finance-build-deck-northern-virginia';
const PAGE_TITLE = 'When to Finance and Build a Deck in Northern Virginia (2026)';
const PAGE_DESCRIPTION = 'Best time to finance and build a deck in Northern Virginia: late winter and early fall usually offer more choice of start dates.';
const UPDATED = '2026-10-28';

export const metadata = buildMetadata({
  path: PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  image: '/social/best-time-to-finance-build-deck-northern-virginia-social.png',
});

const LENDER_LINE = 'Lenders set rates and any promotional offers; check current offers with a soft-credit pre-qualification.';

const seasons = [
  {
    name: 'Late Winter (Feb–Mar)',
    rating: 'BEST OVERALL',
    color: '#2e7d32',
    pricing: 'Lowest demand of the year — most choice of start dates',
    permit: 'County queues are often the lightest.',
    hoa: 'Committees often catch up after a winter break.',
    build: 'Projects often start in late February through early April.',
  },
  {
    name: 'Spring (Apr–May)',
    rating: 'GOOD',
    color: '#1976d2',
    pricing: 'Demand is climbing',
    permit: 'Review queues often grow as more homeowners submit.',
    hoa: 'This is a busy submission season.',
    build: 'Start dates fill sooner as demand climbs.',
  },
  {
    name: 'Summer (Jun–Aug)',
    rating: 'COMPETITIVE',
    color: '#f57c00',
    pricing: 'Busiest season — start dates fill up sooner',
    permit: 'Counties are busiest, and review times still vary by jurisdiction.',
    hoa: 'Committees are often fullest.',
    build: 'Calendars are fullest; construction starts after HOA review and the permit.',
  },
  {
    name: 'Fall (Sep–Nov)',
    rating: 'EXCELLENT',
    color: '#2e7d32',
    pricing: 'Demand eases after summer',
    permit: 'Queues often ease after Labor Day, and review times still vary by county.',
    hoa: 'Schedules often settle after summer.',
    build: 'Projects often start in September or October.',
  },
  {
    name: 'Winter (Dec–Jan)',
    rating: 'AVAILABLE',
    color: '#757575',
    pricing: 'Calm calendar — build days limited by weather',
    permit: 'Holiday office closures can pause review.',
    hoa: 'Many committees pause in December.',
    build: 'Build days are limited by weather; many homeowners use this window for design and permit work.',
  },
];

const faqs = [
  {
    q: 'When is the cheapest time to build a deck in Northern Virginia?',
    a: 'Late winter (February–March) usually gives the most scheduling flexibility for a deck in Northern Virginia. Loudoun Decks does not publish a seasonal discount; the written estimate is the price. December and January can also leave more open start dates, but build days are limited by weather.',
  },
  {
    q: 'When is the best time to start the permit and HOA process?',
    a: 'February or early September. Both windows precede the heavy submission seasons and county/HOA queues are shortest. A February submission gives you a deck built and ready for spring entertaining; a September submission gets ahead of the spring rush for next year.',
  },
  {
    q: 'Do lenders run promotional rates at certain times of year?',
    a: 'The lender sets the rate, the term, and any promotional or introductory offer. Offers change through the year, so this page does not publish a seasonal rate. A soft-credit pre-qualification shows what applies to your project.',
  },
  {
    q: 'How does timing affect monthly payment?',
    a: 'This page does not publish promotional rates, an example APR, or an interest savings figure. The lender sets the rate, the term, and any introductory period.',
  },
  {
    q: 'How long is the full timeline from financing decision to finished deck?',
    a: 'HOA review and the county permit usually take longer than construction. How long the full project takes depends on the county, the HOA, and the size of the deck. The written estimate states the schedule.',
  },
  {
    q: 'Should I wait if my preferred season is far out?',
    a: 'No, in most cases. Starting design, HOA review, and the permit early gives you more choice of start dates, even when construction is months away. Pricing is set in the written estimate, and the lender sets the rate.',
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
  link: { color: 'var(--color-primary)', fontWeight: 600 },
};

function PermitGuides() {
  return (
    <>
      Review times vary by county and season — see the{' '}
      <Link href="/deck-permit-loudoun-county-virginia" style={S.link}>Loudoun</Link>,{' '}
      <Link href="/deck-permit-fairfax-county-virginia" style={S.link}>Fairfax</Link>, and{' '}
      <Link href="/deck-permit-prince-william-county-virginia" style={S.link}>Prince William</Link>{' '}
      permit guides.
    </>
  );
}

function HoaGuide() {
  return (
    <>
      Review runs on the association&apos;s own committee schedule — see the{' '}
      <Link href="/hoa-deck-rules-northern-virginia" style={S.link}>HOA deck rules guide</Link>.
    </>
  );
}

export default function BestTimeToFinanceBuildPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ArticleSchema
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path={PATH}
        image="/showcase/img07.jpeg"
        datePublished="2026-05-27"
        dateModified={UPDATED}
      />
      <WebPageSchema dateModified={UPDATED} url={`https://ldndecks.com${PATH}`} name={PAGE_TITLE} description={PAGE_DESCRIPTION} speakable />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={S.container}>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Timing &amp; Seasonality &middot; Northern Virginia
          </p>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
            When Is the Best Time to Finance and Build a Deck in Northern Virginia?
          </h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Season-by-season breakdown of builder demand, permit timing, HOA review, and when to line up
            financing — so the deck is finished when you want to use it.
          </p>
        </div>
      </section>

      <TrustBanner />

      <AboveFoldCTA
        headline="Want to time your build for the right season? Schedule a project estimate to start the planning timeline."
        estimateHref="/get-estimate"
        estimateLabel="Schedule Project Estimate"
      />

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }} className="quick-answer">
        <div style={S.container}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p data-speakable>
            In Northern Virginia, late winter (February–March) is usually the best time to line up financing and book a deck: builder calendars are lighter, and HOA review and the county permit can finish before spring. Early fall (September–October) is the second good window. Summer is the busiest season, so start dates fill up sooner. Loudoun Decks does not publish seasonal discounts; the written estimate is the only project price, and the lender sets any rate or promotional terms.
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
            Demand, county permit review, and HOA committee schedules shift by season in Northern Virginia.
            Loudoun Decks does not publish a seasonal discount; the written estimate is the project price, and
            the lender sets any rate or promotional terms.
          </p>

          {seasons.map((s) => (
            <div key={s.name} style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <h3 style={{ ...S.h3, margin: 0 }}>{s.name}</h3>
                <span style={{ fontWeight: 700, color: s.color, fontSize: '0.85rem', letterSpacing: '0.05em' }}>{s.rating}</span>
              </div>
              <div style={{ display: 'grid', gap: '0.4rem', fontSize: '0.92rem' }}>
                <div><strong>Pricing:</strong> {s.pricing}</div>
                <div><strong>Permit:</strong> {s.permit} <PermitGuides /></div>
                <div><strong>HOA:</strong> {s.hoa} <HoaGuide /></div>
                <div><strong>Lender:</strong> {LENDER_LINE}</div>
                <div><strong>Build window:</strong> {s.build}</div>
              </div>
            </div>
          ))}

          <h2 style={S.h2}>Lender Promotional Rate Calendar</h2>
          <p style={S.p}>
            The lender sets the rate, the term, and any introductory period. Offers change through the year, and a
            soft-credit pre-qualification shows what applies to your project. Model a payment on the{' '}
            <Link href="/deck-payment-estimator" style={S.link}>deck payment estimator</Link>
            {' '}or review options on the{' '}
            <Link href="/deck-financing" style={S.link}>deck financing page</Link>.
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', lineHeight: 1.85 }}>
            <li><strong>April–May:</strong> A common time to line up financing with a spring or summer build. The rate, term, and any introductory period come from the lender, not from a seasonal figure on this page.</li>
            <li><strong>September–November:</strong> Offers can change in the fall. A soft-credit pre-qualification shows the terms that apply then.</li>
            <li><strong>February–March:</strong> A common time to line up financing while builder calendars are lighter. Pre-qualification shows the rate, term, and any introductory period that apply.</li>
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
            Specific colors and lines, including AZEK Vintage, Trex Signature, and less common colorways, can have
            longer lead times in busy months. Availability is confirmed when the estimate is written.
          </p>

          <h2 style={S.h2}>Building Step-By-Step Timeline</h2>
          <ol style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', lineHeight: 1.85 }}>
            <li><strong>Step 1:</strong> Consultation and design</li>
            <li><strong>Step 2:</strong> Material selection, written estimate, and financing pre-qualification</li>
            <li><strong>Step 3:</strong> HOA submission</li>
            <li><strong>Step 4:</strong> County permit review</li>
            <li><strong>Step 5:</strong> Build</li>
            <li><strong>Step 6:</strong> Final inspection and walkthrough</li>
          </ol>
          <p style={S.p}>The written estimate states the schedule for your project.</p>

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

      <SimpleCTA title="Schedule a Project Estimate" buttonText="Get Free Estimate" link="/get-estimate" />
      <NamedAuthor context="Northern Virginia" lastUpdated={UPDATED} />
      <RelatedGuides currentPath={PATH} />
      <ContactHome />
    </>
  );
}
