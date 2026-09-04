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
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import GeoAnswerBlock from '@/components/GeoAnswerBlock';
import ArticleSchema from '@/components/ArticleSchema';

export const metadata = buildMetadata({
  path: '/deck-resurfacing-vs-replacement',
  title: 'Deck Resurfacing vs Replacement',
  description: 'Resurface $15k-$30k+ (keep frame) or replace $20k-$50k+. When each makes sense, inspection guide, and Northern Virginia cost examples.',
  image: '/social/deck-resurfacing-vs-replacement-social.png',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is deck resurfacing?", acceptedAnswer: { "@type": "Answer", text: "Deck resurfacing means removing old deck boards and often railings while keeping the existing joists, beams, posts, and footings. New composite boards and railings are installed only if the existing structure is sound, properly flashed, and suitable for the selected decking system." } },
    { "@type": "Question", name: "When should I resurface vs replace my deck?", acceptedAnswer: { "@type": "Answer", text: "Resurface if joists are solid, posts are straight, footings are stable, and the ledger board is secure. Replace if joists are soft or rotting, posts lean, footings have moved, the deck feels bouncy, or the ledger is pulling away from the house. An inspection should decide the path." } },
    { "@type": "Question", name: "How much does deck resurfacing cost vs replacement?", acceptedAnswer: { "@type": "Answer", text: "In Northern Virginia: premium resurfacing projects usually start around $15,000 and often land between $15,000 and $30,000+ for a typical 300-400 sqft deck. Full replacement usually costs $20,000-$50,000+ for the same size. Resurfacing saves money when the existing frame is structurally sound." } },
    { "@type": "Question", name: "How long does resurfacing take vs replacement?", acceptedAnswer: { "@type": "Answer", text: "Resurfacing can be faster when no footing or framing work is needed. Full replacement usually takes longer because it can include demolition, new footings, framing, decking, railings, and inspections. Permit and HOA timing depends on county rules and the final scope." } },
  ],
};

const resurfaceGeoAnswers = [
  {
    id: 'when-deck-resurfacing-works',
    q: 'When does resurfacing make sense?',
    a: 'Resurfacing can make sense when the deck boards and railings are worn but the underlying frame is still strong, dry, level, and code-compliant. It may reduce project scope compared with full replacement, but it should not be used to cover hidden structural problems or extend unsafe framing.',
  },
  {
    id: 'when-full-replacement-is-safer',
    q: 'When is full replacement the safer choice?',
    a: 'Full replacement is usually safer when there is widespread rot, soft joists, poor ledger attachment, failing footings, unstable stairs, leaning rail posts, or layout issues that no longer meet current expectations. In those cases, new decking over old framing can create future safety and warranty problems.',
  },
  {
    id: 'deck-resurfacing-cost-savings',
    q: 'Does resurfacing save money?',
    a: 'Resurfacing can reduce cost when the existing structure is sound enough to keep, because less demolition and framing work may be needed. The savings depend on inspection results, railing changes, stair work, permit requirements, and the decking selected. It is not automatically cheaper if hidden repairs are required.',
  },
  {
    id: 'composite-over-old-frame',
    q: 'Can composite boards go on an old wood frame?',
    a: 'Composite boards can sometimes be installed over an existing wood frame if the frame is structurally sound, properly spaced, dry, secure, and compatible with the manufacturer installation requirements. If the frame is uneven, rotted, over-spanned, or poorly flashed, replacement or structural repair should happen first.',
  },
  {
    id: 'deck-resurfacing-permits',
    q: 'Do resurfacing projects need permits?',
    a: 'Permit requirements depend on the scope. Replacing surface boards only may be treated differently than changing stairs, railings, structural framing, footings, or deck size. In Northern Virginia, homeowners should confirm county and HOA rules before assuming resurfacing avoids permits or inspections.',
  },
];

const repairTriageSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://ldndecks.com/deck-resurfacing-vs-replacement#repair-triage-path",
  name: "Deck repair, resurfacing, and replacement decision path",
  description: "Inspection-first sequence for deciding whether an older Northern Virginia deck needs targeted repair, composite resurfacing, or full replacement.",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: 7,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Check stair geometry and load path",
      url: "https://ldndecks.com/education/deck-stair-construction-diagram"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Screen for stair safety and inspection failures",
      url: "https://ldndecks.com/education/deck-stair-safety-inspection-checklist"
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Verify ledger flashing and house attachment",
      url: "https://ldndecks.com/education/ledger-board-flashing-deck-attachment-virginia"
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Confirm footing code and load risk",
      url: "https://ldndecks.com/deck-footing-code-northern-virginia"
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Choose repair, resurfacing, or replacement path",
      url: "https://ldndecks.com/services/deck-repair"
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Confirm county permit triggers",
      url: "https://ldndecks.com/deck-permit-loudoun-county-virginia"
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Request an inspection-first written estimate",
      url: "https://ldndecks.com/get-estimate"
    }
  ]
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function ResurfacingVsReplacementPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={repairTriageSchema} />
      <WebPageSchema dateModified="2026-09-04" url="https://ldndecks.com/deck-resurfacing-vs-replacement" name="Deck Resurfacing vs Replacement" description="Resurface when the frame can be reused safely or replace when structure, stairs, ledger, posts, or footings need a reset. Northern Virginia inspection-first guide." speakable />
      <ArticleSchema
        title="Deck Resurfacing vs Replacement in Northern Virginia"
        description="Inspection-first guide for deciding whether an older deck should be repaired, resurfaced with composite boards, or fully replaced."
        path="/deck-resurfacing-vs-replacement"
        image="/social/deck-resurfacing-vs-replacement-social.png"
        datePublished="2025-01-15"
        dateModified="2026-09-04"
        speakable={[
          '[data-speakable]',
          '.quick-answer',
          '#resurface-replace-answer',
          '#inspection-first-comparison',
          '#resurface-replace-cost-table',
          '#repair-resurface-replacement-links',
        ]}
        citableParts={[
          {
            id: 'resurface-replace-answer',
            name: 'Resurfacing vs Replacement Quick Answer',
            text: 'Resurface if the frame is solid and the homeowner wants a full surface conversion with composite boards, railings, fascia, and stairs; replace when joists, posts, footings, bounce, or structural movement make the frame unsafe.',
          },
          ...resurfaceGeoAnswers.map((item) => ({
            id: item.id,
            name: item.q,
            text: item.a,
          })),
          {
            id: 'inspection-first-comparison',
            name: 'Inspection-First Resurface or Replace Comparison',
            text: 'The page compares resurfacing and replacement by inspecting joist span, joist spacing, hangers, blocking, footing stability, stairs, ledger flashing, and whether the frame can safely accept new composite boards.',
          },
          {
            id: 'resurface-replace-cost-table',
            name: 'Resurfacing vs Replacement Cost Table',
            text: 'The comparison table separates resurfacing and full replacement by scope, 300-square-foot and 500-square-foot budget ranges, savings, build time, frame requirements, permit and HOA handling, warranty framing, and when to choose each path.',
          },
          {
            id: 'repair-resurface-replacement-links',
            name: 'Repair Resurfacing Replacement Links',
            text: 'Related links route homeowners to inspection service, deck repair, deck replacement, deck resurfacing, stair safety, ledger flashing, footing code, load calculator, permit guides, cost calculators, material comparison, and estimate requests.',
          },
        ]}
      />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Deck Resurfacing vs Replacement</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Resurface when the frame passes inspection, or rebuild when the structure needs a safer reset</p>
        </div>
      </section>
      <TrustBanner />
      <AboveFoldCTA
        headline="Not sure whether to resurface or replace? Call for a free structural inspection before you spend money in the wrong place."
        estimateHref="/get-estimate"
        estimateLabel="Schedule Free Inspection"
      />
      <section id="resurface-replace-answer" data-speakable="resurface-replace-answer" style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p><strong>Resurface</strong> ($15k–$30k+) if your frame is solid and you want a full surface conversion with composite boards, railings, fascia, and stairs. <strong>Replace</strong> ($20k–$50k+) if joists are rotting, posts are leaning, footings shifted, or the deck feels bouncy. <strong>Small board, railing, or rot repairs are separate</strong> see our <Link href="/services/deck-repair" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>deck repair service</Link>.</p>
        </div>
      </section>
      <div id="inspection-first-comparison" data-speakable="inspection-first-comparison">
        <GeoAnswerBlock
          question="Should I resurface or replace my deck in Northern Virginia?"
          answer="Resurfacing is the better choice when the existing frame, ledger, posts, beams, joists, stairs, and footings pass inspection and the homeowner mainly wants new composite boards and railings. Replacement is safer when the structure is rotten, bouncy, leaning, underbuilt, unpermitted, or unable to support the new surface. Loudoun Decks separates repair, resurfacing, and replacement so homeowners do not pay for a cosmetic upgrade over unsafe framing."
          facts={[
            'Resurfacing path: frame passes structural inspection',
            'Replacement path: ledger, footing, post, joist, stair, or railing risk',
          ]}
          links={[
            { href: '/services/deck-inspection', label: 'Deck inspection' },
            { href: '/services/deck-repair', label: 'Deck repair' },
            { href: '/services/deck-replacement', label: 'Deck replacement' },
            { href: '/deck-safety-inspection-checklist', label: 'Safety checklist' },
            { href: '/deck-permit-loudoun-county-virginia', label: 'Loudoun permits' },
            { href: '/deck-permit-fairfax-county-virginia', label: 'Fairfax permits' },
          ]}
        />
      </div>
      <section style={{ padding: '2.5rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {resurfaceGeoAnswers.map((item) => (
              <section key={item.id} id={item.id} data-speakable={item.id} style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: '1rem', background: '#fbfdff' }}>
                <h2 style={{ fontSize: '1.08rem', fontWeight: 800, marginBottom: '0.55rem' }}>{item.q}</h2>
                <p style={{ margin: 0, lineHeight: 1.65, color: '#334155' }}>{item.a}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img26.jpeg"
              alt="Deck resurfacing process in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>
          <h2 style={S.h2}>Standard vs. Premium Resurfacing Option</h2>
          <div id="resurface-replace-cost-table" data-speakable="resurface-replace-cost-table" style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Factor', 'Resurfacing', 'Full Replacement'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['What happens', 'Remove old boards + railings, keep frame, install composite', 'Demolish everything, pour new footings, build from scratch'],
                  ['Cost (300 sqft)', '$15,000–$24,000+', '$25,000–$45,000+'],
                  ['Cost (500 sqft)', '$20,000–$30,000+', '$35,000–$55,000+'],
                  ['Savings', 'Can reduce scope and cost when the frame passes inspection', '—'],
                  ['Build time', '1–2 weeks', '2–4 weeks'],
                  ['Requires', 'Solid frame (joists, posts, footings)', 'Nothing all new'],
                  ['Result', 'Looks 100% new on surface', 'New structure + surface'],
                  ['Permit & HOA', 'Often required we handle permits + HOA approval', 'Always required we handle permits + HOA approval'],
                  ['Warranty', 'Workmanship and manufacturer terms depend on the approved written scope', 'Workmanship and manufacturer terms depend on the approved written scope'],
                  ['When to choose', 'Frame is solid and you want a full premium surface upgrade', 'Structural issues, unsafe, or want new layout'],
                  ['Not this page', 'Small board swaps, railing tightening, or isolated rot repairs', 'Minor repair-only work'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{row[0]}</td>
                    <td style={{ ...S.td, fontWeight: i === 1 || i === 2 || i === 3 ? 600 : 400, color: i === 3 ? '#2e7d32' : 'inherit' }}>{row[1]}</td>
                    <td style={S.td}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>How We Determine: Resurface or Replace?</h2>
          <p style={S.p}>We offer <strong>free deck inspections</strong>. During the inspection, we check every structural component, including joist span, joist spacing, hangers, blocking, footing stability and whether the frame can safely accept new composite boards. For homeowner planning before the visit, use the <Link href="/tools/deck-joist-span-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck Joist Span Calculator Virginia</Link> and the <Link href="/tools/deck-footing-depth-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck Footing Depth Calculator Virginia</Link>.</p>
          <p style={S.p}>
            Stairs and ledgers often decide whether a deck is a safe resurfacing candidate. Before reusing an existing frame, we model stair layout with the{' '}
            <Link href="/tools/deck-stair-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Virginia deck stair calculator</Link>
            {', then check the stair load path described in our '}
            <Link href="/education/deck-stair-construction-diagram" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck stair construction diagram</Link>
            {', the pass/fail warning signs in our '}
            <Link href="/education/deck-stair-safety-inspection-checklist" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck stair safety checklist</Link>
            {', and the inspection patterns in our '}
            <Link href="/education/common-deck-stair-inspection-failures-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>common deck stair inspection failures guide</Link>
            {'. We also check the house connection explained in our '}
            <Link href="/education/ledger-board-flashing-deck-attachment-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>ledger board flashing guide</Link>.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ background: '#e8f5e9', borderRadius: 8, padding: '1.5rem' }}>
              <h3 style={{ fontWeight: 700, color: '#2e7d32', marginBottom: '0.75rem' }}>RESURFACE ✓ (frame passes)</h3>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.95rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Joists: firm, no sag, poke test solid</li>
                <li style={{ marginBottom: '0.5rem' }}>Posts: straight, bases not rotting</li>
                <li style={{ marginBottom: '0.5rem' }}>Footings: stable, not shifting/heaving</li>
                <li style={{ marginBottom: '0.5rem' }}>Ledger: secure, flashing intact</li>
                <li style={{ marginBottom: '0.5rem' }}>Beams: no cracks, no sag</li>
              </ul>
              <p style={{ fontSize: '0.9rem', fontWeight: 600, marginTop: '0.75rem' }}>Cost: $15k–$30k+ | Time: 1–2 weeks | Permits + HOA handled</p>
            </div>
            <div style={{ background: '#ffebee', borderRadius: 8, padding: '1.5rem' }}>
              <h3 style={{ fontWeight: 700, color: '#c62828', marginBottom: '0.75rem' }}>REPLACE ✗ (frame fails)</h3>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.95rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Joists: soft, saggy, rotting</li>
                <li style={{ marginBottom: '0.5rem' }}>Posts: leaning, base rot</li>
                <li style={{ marginBottom: '0.5rem' }}>Footings: shifted, cracked, heaved</li>
                <li style={{ marginBottom: '0.5rem' }}>Ledger: pulling away from house</li>
                <li style={{ marginBottom: '0.5rem' }}>Deck: bounces when walked on</li>
              </ul>
              <p style={{ fontSize: '0.9rem', fontWeight: 600, marginTop: '0.75rem' }}>Cost: $20k–$50k | Time: 2–4 weeks | Permits + HOA handled</p>
            </div>
          </div>

          <h2 style={S.h2}>Planning Scenarios to Verify Before Case Study Use</h2>
          <p style={S.p}>
            The examples below are budgeting scenarios for homeowner planning, not published formal case studies. Before any example is reused as a source-verified example, it must be matched to owner/source evidence: city, month/year, signed scope, photos, permit or HOA status, and final invoice or estimate record.
          </p>
          {[
            { type: 'Resurfacing scenario', price: '$19,500 planning range', loc: 'South Riding-style scope', detail: '280 sqft deck, sound frame after inspection, old pressure-treated boards removed, Trex Enhance-style boards, aluminum railing, and stair lighting. Verify with source evidence before presenting as a source-verified example.' },
            { type: 'Resurfacing scenario', price: '$22,000 planning range', loc: 'Brambleton-style scope', detail: '300 sqft deck, frame suitable for reuse, Trex Transcend-style boards, and Trex Select-style railings. Verify HOA status and source records before presenting as a source-verified example.' },
            { type: 'Replacement scenario', price: '$38,000 planning range', loc: 'Leesburg-style scope', detail: '480 sqft replacement path where joists, footings, or ledger conditions make resurfacing inappropriate. New framing, composite boards, premium railing, and lighting. Verify records before case-study use.' },
            { type: 'Replacement scenario', price: '$28,000 planning range', loc: 'Sterling-style scope', detail: '320 sqft replacement path where post rot, stair instability, or frame movement makes full rebuild the safer decision. Verify source evidence before formal case-study use.' },
          ].map((p, i) => (
            <div key={i} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '1rem', borderLeft: `4px solid ${p.type === 'Resurfacing' ? '#2e7d32' : '#c62828'}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontWeight: 700, color: p.type === 'Resurfacing' ? '#2e7d32' : '#c62828' }}>{p.type}</span>
                <span style={{ fontWeight: 600 }}>{p.price} {p.loc}</span>
              </div>
              <p style={{ lineHeight: 1.7, fontSize: '0.95rem' }}>{p.detail}</p>
            </div>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "What is deck resurfacing?", a: "Remove old boards and often railings, keep the frame only if it passes inspection, then install new composite or approved surface materials." },
            { q: "When to resurface vs replace?", a: "Resurface: frame is solid (joists, posts, footings OK). Replace: structural issues (rot, lean, bounce, shifting)." },
            { q: "Cost difference?", a: "Resurface: $15k-$30k+. Replace: $20k-$50k+. Same size deck the difference is whether the frame stays and whether the work is a premium full-surface conversion or a structural rebuild." },
            { q: "How long?", a: "Resurfacing can be faster when no framing or footing work is required. Replacement usually takes longer because demolition, framing, inspections, permits, and HOA timing may be involved." },
            { q: "Is small deck repair included?", a: "No. Small board swaps, railing tightening, and isolated rot repairs belong on the deck repair service, not the replacement or resurfacing path." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <div id="repair-resurface-replacement-links" data-speakable="repair-resurface-replacement-links">
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/resurface-or-replace-deck-financing', 'Resurface or Replace Before Financing? (decision math)'],
              ['/services/deck-inspection', 'Professional Deck Inspection Service'],
              ['/deck-resurfacing-northern-virginia', 'Deck Resurfacing in Northern Virginia (service area)'],
              ['/services/deck-repair', 'Deck Repair Service'],
              ['/services/deck-replacement', 'Deck Replacement Service'],
              ['/services/deck-resurfacing', 'Deck Resurfacing Services'],
              ['/composite-decks', 'Composite Deck Builder for Resurfacing Upgrades'],
              ['/education/deck-stair-safety-inspection-checklist', 'Deck Stair Safety Checklist PDF'],
              ['/education/common-deck-stair-inspection-failures-virginia', 'Common Deck Stair Inspection Failures'],
              ['/education/deck-stair-construction-diagram', 'Deck Stair Construction Diagram'],
              ['/education/ledger-board-flashing-deck-attachment-virginia', 'Ledger Board Flashing Guide'],
              ['/deck-footing-code-northern-virginia', 'Deck Footing Code Guide'],
              ['/tools/deck-load-calculator-virginia', 'Deck Load Calculator Virginia'],
              ['/deck-permit-loudoun-county-virginia', 'Loudoun County Deck Permit Guide'],
              ['/deck-permit-fairfax-county-virginia', 'Fairfax County Deck Permit Guide'],
              ['/deck-cost-calculator', 'Deck Cost Calculator'],
              ['/composite-deck-cost-northern-virginia', 'Deck Cost Guide'],
              ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK Material Comparison'],
              ['/deck-safety-inspection-checklist', 'Deck Safety Inspection Checklist'],
              ['/get-estimate', 'Get an Inspection-First Estimate'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
          </div>
        </div>
      </article>
      <ServicesCallToAction />
      <SimpleCTA title="Free Deck Inspection Resurface or Replace?" buttonText="Schedule Free Inspection" link="/get-estimate" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-09-04" />

      <RelatedGuides currentPath="/deck-resurfacing-vs-replacement" category="ai-retrieval" />

      <ContactHome />
    </>
  );
}
