import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ServicesCallToAction from '@/components/ServicesCallToAction';
import TrustBanner from '@/components/TrustBanner';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import AboveFoldCTA from '@/components/AboveFoldCTA';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/deck-resurfacing-northern-virginia',
  title: 'Deck Resurfacing in Northern Virginia',
  description: 'Premium deck resurfacing in Northern Virginia. Keep your existing frame, install new composite boards & railings. Typical projects $15k–$30k+. Free inspection.',
  image: '/social/deck-resurfacing-northern-virginia-social.png',
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does deck resurfacing cost in Northern Virginia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Premium deck resurfacing in Northern Virginia typically runs $15,000–$30,000+ for a 300–400 sqft deck. Pricing depends on board tier (Trex Enhance, Transcend, Signature or TimberTech AZEK), railing system, stair count, and lighting. Resurfacing usually saves 40–60% vs a full rebuild because the existing frame stays.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in a Northern Virginia deck resurfacing project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Removal of old deck boards and railings, structural inspection of the existing frame, installation of new composite or PVC decking, new railings (composite, aluminum, or cable), fascia, stair treads and risers, hidden fasteners, permits, and HOA submission packages where required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you need a permit to resurface a deck in Loudoun, Fairfax, or Prince William County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Loudoun, Fairfax, and Prince William counties generally require a permit when you change the deck surface material, replace railings, or alter structural elements. Replacing like-for-like boards sometimes does not require a permit, but railings almost always do. We handle the permit application and HOA paperwork as part of every project.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can my existing deck frame be resurfaced?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer a free structural inspection. Joists, beams, posts, footings, ledger, and flashing are checked. If joists are firm, posts are straight, footings are stable, and the ledger is sound, the deck is a good resurfacing candidate. If the frame fails inspection, we recommend full replacement instead.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does deck resurfacing take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On-site build is usually 1–2 weeks for a typical 300–500 sqft deck. Permit review (1–4 weeks in NoVA) and HOA approval (2–6 weeks) happen before the build starts, so total project timeline from contract to finished deck is usually 4–8 weeks.',
      },
    },
  ],
};

const S = {
  h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', scrollMarginTop: '6rem' },
  h3: { fontSize: '1.25rem', fontWeight: 700, margin: '1.5rem 0 0.6rem' },
  p: { marginBottom: '1rem', lineHeight: 1.75 },
  th: { padding: '0.85rem', textAlign: 'left', borderBottom: '2px solid #ddd', fontSize: '0.95rem', background: '#f5f5f5' },
  td: { padding: '0.85rem', borderBottom: '1px solid #eee', fontSize: '0.95rem' },
  container: { maxWidth: 960, margin: '0 auto', padding: '0 1.5rem' },
};

const counties = [
  { name: 'Loudoun County', cities: 'Ashburn, Leesburg, Brambleton, South Riding, Sterling, Purcellville' },
  { name: 'Fairfax County', cities: 'Fairfax, Reston, Herndon, Vienna, McLean, Great Falls, Oakton, Centreville, Chantilly' },
  { name: 'Prince William County', cities: 'Haymarket, Gainesville, Bristow, Manassas' },
  { name: 'Arlington & Alexandria', cities: 'Arlington, Alexandria, Falls Church' },
];

const costRows = [
  ['250 sqft (10×25)', '$15,000–$22,000', '$18,000–$26,000', '$22,000–$30,000+'],
  ['350 sqft (14×25)', '$18,000–$26,000', '$22,000–$32,000', '$28,000–$38,000+'],
  ['450 sqft (15×30)', '$22,000–$30,000', '$28,000–$38,000', '$34,000–$46,000+'],
  ['600 sqft (20×30)', '$26,000–$36,000', '$34,000–$46,000', '$42,000–$58,000+'],
];

export default function DeckResurfacingNorthernVirginiaPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema dateModified="2026-06-01"
        url="https://ldndecks.com/deck-resurfacing-northern-virginia"
        name="Deck Resurfacing in Northern Virginia"
        description="Premium deck resurfacing in Northern Virginia. Keep your existing frame, install new composite boards & railings. Typical projects $15k–$30k+. Free inspection."
        speakable
      />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={S.container}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
            Deck Resurfacing in Northern Virginia
          </h1>
          <p style={{ color: '#ccc', fontSize: '1.15rem', lineHeight: 1.6 }}>
            Keep your existing deck frame, install new composite boards and railings, and save 40–60% vs a full
            rebuild. Serving Loudoun, Fairfax, Prince William, Arlington, and Alexandria.
          </p>
        </div>
      </section>

      <TrustBanner />

      <AboveFoldCTA
        headline="Want to know if your deck is a resurfacing candidate? Schedule a free structural inspection before you commit."
        estimateHref="/get-estimate"
        estimateLabel="Schedule Free Inspection"
        showQuickForm
        quickFormService="Deck Resurfacing"
        quickFormLocation="paid_search_resurfacing_above_fold"
        quickFormHeading="Want to know if your frame can be resurfaced? Send the basics and we will call back."
      />

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={S.container}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p>
            <strong>Deck resurfacing</strong> in Northern Virginia typically runs <strong>$15,000–$30,000+</strong>{' '}
            for a 300–400 sqft deck. We strip the old boards and railings, inspect the frame, then install new{' '}
            composite or PVC decking with new railings, fascia, and stairs. If the frame fails inspection, we recommend{' '}
            <Link href="/deck-resurfacing-vs-replacement" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>
              full replacement
            </Link>{' '}
            instead. This service is for installed resurfacing projects, not board-only retail purchases.
          </p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={S.container}>
          <div style={{ position: 'relative', width: '100%', height: '420px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/deck-resurfacing-screened-porch-railings.jpg"
              alt="Composite deck resurfacing with white stairs, lattice skirting, and black railings in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 960px) 100vw, 960px"
              quality={70}
              priority
            />
          </div>

          <h2 style={S.h2}>What Deck Resurfacing Means in Northern Virginia</h2>
          <p style={S.p}>
            Deck resurfacing means removing the existing deck boards, railings, fascia, and stair treads, then
            installing new composite or PVC surface materials on the existing structural frame. The joists, beams,
            posts, footings, and ledger stay in place — provided they pass inspection. In Northern Virginia, where many
            decks were built between 2005 and 2015 with pressure-treated lumber, the frame is often still structurally
            sound while the surface boards have weathered, cupped, or split. Resurfacing is the right project for those
            homeowners.
          </p>
          <p style={S.p}>
            We do not resurface decks with structural problems. If joists are soft, posts are leaning, footings have
            shifted, or the deck bounces when walked on, we recommend{' '}
            <Link href="/services/deck-replacement" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              full deck replacement
            </Link>{' '}
            instead. Resurfacing a failing frame is a safety risk and a warranty problem.
          </p>

          <h2 style={S.h2}>Northern Virginia Deck Resurfacing Cost</h2>
          <p style={S.p}>
            Pricing depends on deck size, decking tier, railing system, stair count, and lighting. The table below
            shows typical 2026 resurfacing pricing in Loudoun, Fairfax, and Prince William counties. Material tiers:
            Trex Enhance / Fiberon Good Life (budget), Trex Transcend / TimberTech PRO (mid), Trex Signature /
            TimberTech AZEK Vintage (premium).
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  {['Deck Size', 'Budget Tier', 'Mid Tier', 'Premium Tier'].map((h) => (
                    <th key={h} style={S.th}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {costRows.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ ...S.p, fontSize: '0.9rem', color: '#666' }}>
            Pricing includes demolition of old surface, frame inspection, new composite decking with hidden fasteners,
            new railings, fascia, stair treads and risers, permit planning, and HOA submission. Lighting, picture-frame
            borders, multi-color inlays, and structural reinforcement are priced separately.
          </p>

          <h2 style={S.h2}>What&apos;s Included in Our Resurfacing Service</h2>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '2rem', lineHeight: 1.85 }}>
            <li>Free on-site structural inspection of the existing frame, ledger, and footings</li>
            <li>Removal and haul-away of old boards, railings, fascia, and stair treads</li>
            <li>New composite or PVC decking (Trex, TimberTech, Fiberon) with hidden fastener system</li>
            <li>New railings — composite, aluminum, or cable — to current Virginia code</li>
            <li>Picture-frame border and breaker board options</li>
            <li>New fascia, stair treads, risers, and stringers as needed</li>
            <li>Permit application (Loudoun, Fairfax, Prince William, Arlington, Alexandria)</li>
            <li>HOA submission packages including drawings, material spec, and color samples</li>
            <li>Written workmanship warranty terms plus manufacturer material warranty information</li>
          </ul>

          <h2 style={S.h2}>Counties &amp; Cities We Cover</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {counties.map((c) => (
              <div key={c.name} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.25rem' }}>
                <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>{c.name}</h3>
                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.6 }}>{c.cities}</p>
              </div>
            ))}
          </div>

          <h2 style={S.h2}>How We Inspect Before Resurfacing</h2>
          <p style={S.p}>
            Every resurfacing project starts with a free structural inspection. We check joist condition with a poke
            test, look for rot at post bases, verify footings are not heaving or shifting, and confirm the ledger board
            is mechanically attached with proper flashing. Stairs and railings are checked against current Virginia
            residential code. Reusing a frame that does not meet code is not allowed — we will tell you upfront if
            structural work is required before the new surface goes on.
          </p>
          <p style={S.p}>
            For details on what we check, see our{' '}
            <Link href="/deck-safety-inspection-checklist" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              deck safety inspection checklist
            </Link>{' '}
            and the{' '}
            <Link href="/education/ledger-board-flashing-deck-attachment-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              ledger board flashing guide
            </Link>.
          </p>

          <h2 style={S.h2}>Resurfacing Planning Scenarios to Verify Before Case Study Use</h2>
          <p style={S.p}>
            The examples below are planning scenarios for budgeting and scope comparison, not formal case studies.
            Before reusing any scenario as a source-verified example, match it to owner/source evidence: city,
            month/year, signed scope, before/after photos, permit or HOA status, and final estimate or invoice.
          </p>
          {[
            { price: '$18,000-$22,000', loc: 'South Riding-style scope', detail: '280 sqft resurfacing scenario for an older pressure-treated surface with a sound frame after inspection. Budget assumes Trex Enhance Naturals, aluminum railings, stair-light allowance, and permit/HOA/timeline verification after scope review.' },
            { price: '$21,000-$25,000', loc: 'Brambleton-style scope', detail: '300 sqft resurfacing scenario with mid-tier composite decking and composite railings. Use this for budget planning only until HOA status, inspection notes, and final material selections are verified.' },
            { price: '$26,000-$31,000', loc: 'Ashburn-style scope', detail: '380 sqft premium resurfacing scenario using TimberTech AZEK Vintage-style PVC, black aluminum railing, recessed stair lighting, and a picture-frame border. Verify site access, framing condition, HOA status, and material quote before publishing as a source-verified example.' },
            { price: '$30,000-$36,000', loc: 'Fairfax-style scope', detail: '420 sqft resurfacing scenario with two stair flights and mixed railing zones. County permit triggers, final inspection path, and project timeline must be confirmed from owner evidence before this becomes a formal case study.' },
          ].map((p, i) => (
            <div key={i} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '1rem', borderLeft: '4px solid var(--color-primary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>Planning scenario</span>
                <span style={{ fontWeight: 600 }}>{p.price} · {p.loc}</span>
              </div>
              <p style={{ lineHeight: 1.7, fontSize: '0.95rem' }}>{p.detail}</p>
            </div>
          ))}

          <h2 style={S.h2}>FAQ</h2>
          {[
            { q: 'How much does deck resurfacing cost in Northern Virginia?', a: 'Typical 300–400 sqft projects run $15,000–$30,000+ depending on board tier, railing system, and stair count. Bigger or premium-tier projects go higher.' },
            { q: "What's included?", a: 'Demolition of old boards and railings, frame inspection, new composite or PVC decking, new railings, fascia, stair treads, hidden fasteners, permits, and HOA submission.' },
            { q: 'Do I need a permit?', a: 'In Loudoun, Fairfax, Prince William, Arlington, and Alexandria, replacing the deck surface, railings, or stairs generally requires a permit. We handle the permit and HOA paperwork.' },
            { q: 'Can my deck be resurfaced?', a: 'Only if the frame passes structural inspection. Joists, beams, posts, footings, and ledger must all be sound. We offer free inspections.' },
            { q: 'How long does the build take?', a: 'On-site: 1–2 weeks for a typical 300–500 sqft deck. Total project timeline including permit and HOA: 4–8 weeks.' },
            { q: 'What warranty do I get?', a: 'Loudoun Decks provides written workmanship warranty terms with the project agreement, plus manufacturer warranty information for the selected decking material.' },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.75, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/blog/resurface-vs-replace-composite-deck-guide', 'Resurface vs Replace a Faded Composite Deck'],
              ['/blog/how-to-restore-faded-composite-decking', 'How to Restore Faded Composite Decking'],
              ['/blog/why-composite-trex-decking-fades-sun-solutions', 'Why Composite Decking Fades in the Sun'],
              ['/services/deck-resurfacing', 'Deck Resurfacing Service Details'],
              ['/deck-resurfacing-vs-replacement', 'Resurfacing vs Full Replacement'],
              ['/blog/how-to-restore-faded-composite-decking', 'How to Restore Faded Composite Decking'],
              ['/blog/resurface-vs-replace-composite-deck-guide', 'When to Resurface vs Replace a Composite Deck'],
              ['/blog/why-composite-trex-decking-fades-sun-solutions', 'Why Composite Decking Fades in the Sun'],
              ['/resurface-or-replace-deck-financing', 'Resurface or Replace Before Financing? (cost math)'],
              ['/services/deck-replacement', 'Full Deck Replacement'],
              ['/composite-deck-cost-northern-virginia', 'Composite Deck Cost in Northern Virginia'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood Decking'],
              ['/before-and-after', 'Before & After Deck Transformations'],
              ['/deck-safety-inspection-checklist', 'Deck Safety Inspection Checklist'],
              ['/areas-we-serve', 'Areas We Serve in Northern Virginia'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}>
                <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                  {text} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <ServicesCallToAction />
      <SimpleCTA
        title="Free Deck Resurfacing Inspection in Northern Virginia"
        buttonText="Schedule Free Inspection"
        link="/get-estimate"
      />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-27" />
      <RelatedGuides currentPath="/deck-resurfacing-northern-virginia" />
      <ContactHome />
    </>
  );
}
