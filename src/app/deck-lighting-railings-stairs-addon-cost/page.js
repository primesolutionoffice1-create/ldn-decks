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
  path: '/deck-lighting-railings-stairs-addon-cost',
  title: 'Deck Lighting, Railings & Stairs: Add-On Cost Guide (2026)',
  description: 'Real cost for deck lighting, railings, and stairs in Northern Virginia. Per-linear-foot pricing, full package examples, and impact on monthly payment.',
  image: '/social/deck-lighting-railings-stairs-addon-cost-social.png',
});

const PATH = '/deck-lighting-railings-stairs-addon-cost';

const railings = [
  { name: 'Composite (Trex Select / TimberTech RadianceRail)', range: 'a written estimate /linear ft', notes: 'Most popular; HOA-friendly; matches deck color' },
  { name: 'Aluminum (Trex Signature / TimberTech Impression)', range: 'a written estimate /linear ft', notes: 'Modern look; thin profile; durable; common in McLean / Great Falls' },
  { name: 'Cable Rail', range: 'a written estimate /linear ft', notes: 'View-preserving; some HOAs restrict; high-end aesthetic' },
  { name: 'Glass Panel', range: 'a written estimate /linear ft', notes: 'Premium; unobstructed view; HOA-restricted in some Loudoun communities' },
  { name: 'Pressure-Treated Wood', range: 'a written estimate /linear ft', notes: 'Cheapest; requires annual stain/seal; ages poorly in NoVA climate' },
];

const stairs = [
  { type: 'Single straight flight (3–4 risers)', range: 'a written estimate', notes: 'Most common — backyard ground transition' },
  { type: 'Single straight flight (5–7 risers)', range: 'a written estimate', notes: 'Elevated deck with longer drop to grade' },
  { type: 'L-shape stairs with landing', range: 'a written estimate', notes: 'Multi-direction descent; common for side-yard exits' },
  { type: 'Wide entertainment stairs (6+ ft)', range: 'a written estimate', notes: 'Architectural focal point; doubles as casual seating' },
  { type: 'Wraparound or cascading stairs', range: 'a written estimate', notes: 'Premium feature; common in McLean / Great Falls / Belmont' },
];

const lighting = [
  { name: 'Post-cap LED lights (4 corners)', range: 'a written estimate', notes: 'Basic safety/aesthetic lighting' },
  { name: 'Riser lights (full stair set)', range: 'a written estimate', notes: 'Safety lighting for stairs; significant nighttime improvement' },
  { name: 'Under-rail LED strip', range: 'a written estimate', notes: 'Continuous accent lighting around perimeter' },
  { name: 'Recessed deck lights (8–16 fixtures)', range: 'a written estimate', notes: 'Premium ambient lighting in the deck surface' },
  { name: 'Smart-controlled system w/ app', range: 'a written estimate', notes: 'Multi-zone control; color-changing; integrates with home automation' },
];

const faqs = [
  {
    q: 'How much do composite railings cost per linear foot in Northern Virginia?',
    a: 'Composite railings (Trex Select, TimberTech RadianceRail) are priced in a written estimate per linear foot installed in Northern Virginia. A 300 sqft deck typically needs 60–80 linear feet of railing, so the railing portion is usually a written estimate of the total project. Aluminum is priced in a written estimate; cable is priced in a written estimate.',
  },
  {
    q: 'How much do deck stairs cost?',
    a: 'A standard 3–4 riser stair flight is priced in a written estimate in Northern Virginia. A 5–7 riser flight (for elevated decks) is priced in a written estimate. L-shape stairs with a landing are priced in a written estimate. Wide entertainment stairs (6+ ft) are priced in a written estimate and become an architectural feature.',
  },
  {
    q: 'How much does deck lighting cost?',
    a: 'Basic post-cap lighting (4 corners) is priced in a written estimate. A full stair riser-light set is priced in a written estimate. A premium package with under-rail LED, recessed deck lights, and smart control is priced in a written estimate. Lighting is 30–50% cheaper installed during the initial build than retrofitted later.',
  },
  {
    q: 'Which add-on changes the monthly payment the most?',
    a: 'Lighting packages and premium railing upgrades each add a written estimate to project amount — about a lender-calculated paymentnth in financing at typical rates. Wraparound or cascading stairs can add a written estimate, which moves monthly payment a written estimate. Plan add-ons knowing the financing impact upfront.',
  },
  {
    q: 'Should I add lighting at build time or wait?',
    a: 'Add at build time. Retrofitting lighting after the deck is built requires opening the deck boards or running surface-mounted wiring. Installation cost is 30–50% higher post-build, and the result is rarely as clean. The exception: smart-control systems can be upgraded later because the wiring infrastructure stays the same.',
  },
  {
    q: 'Are HOA-restricted railing styles common in Northern Virginia?',
    a: 'Yes, in some communities. Ashburn Village, Brambleton, and some Belmont sections restrict cable and glass railings to preserve neighborhood consistency. Loudoun&apos;s older communities (Lansdowne, parts of Sterling) restrict modern aluminum profiles. We submit material samples with every HOA package and confirm approval before ordering.',
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

function CostList({ items }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      {items.map((it) => (
        <div key={it.name || it.type} style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: 10, padding: '1rem 1.25rem', marginBottom: '0.6rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.3rem' }}>
            <strong style={{ fontSize: '0.98rem' }}>{it.name || it.type}</strong>
            <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>{it.range}</span>
          </div>
          <p style={{ fontSize: '0.88rem', color: '#666', margin: 0, lineHeight: 1.5 }}>{it.notes}</p>
        </div>
      ))}
    </div>
  );
}

export default function DeckAddOnCostPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ArticleSchema
        title="Deck Lighting, Railings & Stairs: Add-On Cost Guide (2026)"
        description="Real cost for deck lighting, railings, and stairs in Northern Virginia. Per-linear-foot pricing and full package examples."
        path={PATH}
        image="/showcase/light-img.jpeg"
        datePublished="2026-05-27"
        dateModified="2026-10-18"
      />
      <WebPageSchema dateModified="2026-10-18" url={`https://ldndecks.com${PATH}`} name="Deck Lighting, Railings &amp; Stairs: Add-On Cost Guide (2026)" description="Real cost for deck lighting, railings, and stairs in Northern Virginia. Per-linear-foot pricing, full package examples, and impact on monthly payment." speakable />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={S.container}>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Add-On Cost &middot; Northern Virginia
          </p>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
            Deck Lighting, Railings, and Stairs: Add-On Costs That Change the Monthly Payment
          </h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Real 2026 per-linear-foot and per-feature pricing for the three biggest add-on cost categories in a
            Northern Virginia deck project.
          </p>
        </div>
      </section>

      <TrustBanner />

      <AboveFoldCTA
        headline="See how add-ons affect monthly payment by tier with the deck payment estimator."
        estimateHref="/deck-payment-estimator"
        estimateLabel="Build a Realistic Budget"
      />

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }} className="quick-answer">
        <div style={S.container}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p data-speakable>
            In Northern Virginia: <strong>railings</strong> are priced in a written estimate per linear ft depending on material (composite,
            aluminum, cable, glass). <strong>Stairs</strong> are priced in a written estimate depending on configuration.{' '}
            <strong>Lighting packages</strong> are priced in a written estimate from basic post-caps to full smart-controlled systems.
            These add-ons are 30–50% cheaper installed at build time than retrofitted.
          </p>
        </div>
      </section>

      <article style={{ padding: '3.5rem 0' }}>
        <div style={S.container}>
          <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/showcase/light-img.jpeg"
              alt="Deck lighting, railings, and stairs add-on cost in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 960px) 100vw, 960px"
              quality={70}
              priority
            />
          </div>

          <h2 style={{ ...S.h2, marginTop: 0 }}>Railing Cost by Material</h2>
          <p style={S.p}>
            Railing is usually the second-biggest line item on a deck project (after decking material). A 300 sqft deck
            typically needs 60–80 linear feet of railing.
          </p>
          <CostList items={railings} />

          <h2 style={S.h2}>Stair Cost by Configuration</h2>
          <p style={S.p}>
            Stair pricing depends on rise (number of risers), tread depth, width, and configuration. Premium
            configurations like wraparound or cascading stairs add structural complexity and material cost.
          </p>
          <p style={S.p}>
            Before finalizing a stair allowance, use the <Link href="/tools/deck-stair-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Virginia deck stair calculator</Link> to estimate
            step count and total run, then compare the plan against the <Link href="/education/deck-stair-code-rise-run-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Virginia deck stair code guide</Link> and
            the <Link href="/education/deck-stair-construction-diagram" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck stair construction diagram</Link>. That keeps the budget tied to real rise/run,
            landing, handrail, and stringer requirements instead of a generic stair line item.
          </p>
          <CostList items={stairs} />

          <h2 style={S.h2}>Lighting Package Pricing</h2>
          <p style={S.p}>
            Lighting transforms a deck&apos;s nighttime usability. Most Northern Virginia homeowners regret skipping
            lighting at build time — retrofit cost runs 30–50% higher and the result is rarely as clean as
            built-in wiring.
          </p>
          <CostList items={lighting} />

          <h2 style={S.h2}>How Add-Ons Move the Monthly Payment</h2>
          <p style={S.p}>
            Each add-on category typically adds a written estimate to project amount, which translates to roughly
            a lender-calculated paymentnth in financing at typical rates over 10 years. A premium package (upgraded railings + full
            lighting + entertainment stairs) can add a written estimate, which is a lender-calculated paymentnth. Build the budget
            knowing the financing impact, not just the sticker price.
          </p>

          <h2 style={S.h2}>Build-Time vs Retrofit</h2>
          <p style={S.p}>
            Three things are dramatically cheaper to install during the initial build:
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', lineHeight: 1.85 }}>
            <li><strong>Recessed deck lighting</strong> — requires opening deck boards if added later</li>
            <li><strong>Riser lights and under-rail LED</strong> — wiring runs cleanly during framing</li>
            <li><strong>Picture-frame borders and pattern inlays</strong> — must be planned with deck board layout</li>
          </ul>
          <p style={S.p}>
            Two things can wait:
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', lineHeight: 1.85 }}>
            <li><strong>Smart-control upgrades</strong> — wiring is the same; controller swaps in later</li>
            <li><strong>Outdoor heaters and fans on covered decks</strong> — usually plug-and-play after rough-in</li>
          </ul>

          <h2 style={S.h2}>Related Cost &amp; Material Pages</h2>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/deck-railing-options-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Deck Railing Options in Northern Virginia →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/deck-lighting-ideas-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Deck Lighting Ideas in Northern Virginia →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Deck Payment Estimator →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Composite Deck Cost in Northern Virginia →
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

      <SimpleCTA title="Plan Realistic Add-On Budget" buttonText="Get Free Written Estimate" link="/get-estimate" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-10-18" />
      <RelatedGuides currentPath={PATH} />
      <ContactHome />
    </>
  );
}
