import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import FinancingCTA from '@/components/FinancingCTA';
import { buildMetadata } from '@/lib/seo';

// ============================================================================
// BEAST Days 31-45 — Deck Repair Hub (Finalization Pass)
//
// Production-ready framework. Every claim that depends on owner-supplied
// evidence (technician identity, certifications, real before/after photos,
// dated project examples, customer stories, permit outcomes, structural test
// results, warranty terms) renders as a visible <EvidenceSlot> placeholder
// with a data-evidence-needed attribute. Page MUST NOT be published until
// every placeholder is filled or removed.
//
// Find every placeholder:
//   grep -rn "data-evidence-needed" src/app/services/deck-repair/
//
// Find cost figures needing verification:
//   grep -n "VERIFY FINAL COST" src/app/services/deck-repair/page.js
//
// Find DO-NOT-PUBLISH gates:
//   grep -n "DO NOT PUBLISH" src/app/services/deck-repair/page.js
// ============================================================================

export const metadata = buildMetadata({
  path: '/services/deck-repair',
  title: 'Deck Repair Northern Virginia | Structural, Boards & Rails',
  description: 'Licensed Virginia Class A deck repair contractor in Loudoun, Fairfax, Prince William. Ledger flashing, post rot, joist sistering, stair & railing code repair, composite resurfacing. Free safety inspection.',
  image: '/torndeck.webp',
});

// ----------------------------------------------------------------------------
// Placeholder primitives — visible, grep-able, hard to miss in QA
// ----------------------------------------------------------------------------
function EvidenceSlot({ label, hint }) {
  return (
    <span
      data-evidence-needed
      style={{
        display: 'inline-block',
        background: '#fff3cd',
        border: '1px dashed #c79100',
        color: '#7a4f00',
        padding: '0.15rem 0.55rem',
        margin: '0 0.15rem',
        borderRadius: 4,
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
        fontSize: '0.85em',
        fontWeight: 600,
      }}
      title={hint || ''}
    >
      [INSERT {label}]
    </span>
  );
}

function CostNote() {
  return (
    <span
      data-evidence-needed
      style={{
        display: 'inline-block',
        background: '#fde2e2',
        border: '1px dashed #b03a3a',
        color: '#7a1f1f',
        padding: '0.15rem 0.55rem',
        marginLeft: '0.4rem',
        borderRadius: 4,
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
        fontSize: '0.78em',
        fontWeight: 600,
      }}
    >
      [VERIFY FINAL COST RANGE BEFORE PUBLISHING]
    </span>
  );
}

function DoNotPublish({ note }) {
  return (
    <span
      data-evidence-needed
      style={{
        display: 'inline-block',
        background: '#fde2e2',
        border: '2px dashed #b03a3a',
        color: '#7a1f1f',
        padding: '0.2rem 0.7rem',
        borderRadius: 4,
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
        fontSize: '0.85em',
        fontWeight: 700,
      }}
    >
      [DO NOT PUBLISH UNTIL FILLED] {note}
    </span>
  );
}

// ----------------------------------------------------------------------------
const S = {
  h2: { fontSize: '1.95rem', fontWeight: 700, marginBottom: '1.1rem', letterSpacing: '-0.01em', scrollMarginTop: '6rem' },
  h3: { fontSize: '1.2rem', fontWeight: 700, margin: '1.4rem 0 0.55rem' },
  p: { marginBottom: '1rem', lineHeight: 1.75, color: '#2d3748' },
  pMuted: { marginBottom: '1rem', lineHeight: 1.7, color: '#555' },
  th: { padding: '0.85rem', textAlign: 'left', borderBottom: '2px solid #ddd', fontSize: '0.92rem', background: '#f0efea' },
  td: { padding: '0.85rem', borderBottom: '1px solid #eee', fontSize: '0.92rem' },
  container: { maxWidth: 960, margin: '0 auto', padding: '0 1.5rem' },
  callout: { borderLeft: '4px solid var(--color-primary)', background: '#fff8f1', padding: '1.5rem 1.75rem', borderRadius: 8, marginBottom: '1.5rem' },
  safety: { borderLeft: '4px solid #b03a3a', background: '#fdebeb', padding: '1.5rem 1.75rem', borderRadius: 8, marginBottom: '1.5rem' },
  evidenceBox: { borderLeft: '4px solid #c79100', background: '#fff8e0', padding: '1.5rem 1.75rem', borderRadius: 8, marginBottom: '1.5rem' },
};

// ============================================================================
// COST RANGES BY REPAIR TYPE
// Calculator-grounded items use shipped numbers; non-calculator items carry
// <CostNote /> markers for owner verification before publish.
// ============================================================================
const repairCosts = [
  {
    type: 'Composite board resurface (boards only, framing reused)',
    range: '$16,000–$28,000 for a 300–400 sqft deck',
    note: null,
    detail: 'Replace surface boards on existing pressure-treated framing with new composite. Includes fasteners, picture-frame border at perimeter, removal/disposal of old boards.',
  },
  {
    type: 'Single stair flight replacement',
    range: '$1,500–$4,000',
    note: null,
    detail: 'Per-flight cost from our standard calculator. Includes stringers, treads, risers, code-compliant rail attachment.',
  },
  {
    type: 'Composite railing replacement (per typical run)',
    range: '$3,000–$8,000',
    note: null,
    detail: 'Total run cost from our standard calculator. Includes posts, post-to-deck connectors, top rail, balusters or composite infill.',
  },
  {
    type: 'Cable railing upgrade (per typical run)',
    range: '$5,000–$12,000',
    note: null,
    detail: 'Premium upgrade from composite or wood baluster. Includes tensioned stainless cable, sealed terminations, code-compliant post spacing.',
  },
  {
    type: 'Joist sistering (per joist)',
    range: null,
    note: <CostNote />,
    detail: 'Adds a new joist alongside a partially compromised one. Per-joist labor + lumber. Cost varies with joist size, access constraints, and whether decking must be lifted.',
  },
  {
    type: 'Ledger re-flashing & re-bolt to IRC R507',
    range: null,
    note: <CostNote />,
    detail: 'Open siding above ledger, inspect rim joist, install proper Z-flashing + drip cap, replace lag bolts with through-bolts where required by code, lateral-load connectors.',
  },
  {
    type: 'Post replacement (per post, with footing inspection)',
    range: null,
    note: <CostNote />,
    detail: 'Excavate around base, evaluate footing depth + bell, install new pressure-treated 6×6 (or composite-wrapped) with proper standoff base.',
  },
  {
    type: 'Full structural rebuild (frame + boards + railings)',
    range: '$24,000–$48,000 for a typical 300–400 sqft deck',
    note: null,
    detail: 'When repair scope exceeds the framing. Includes new footings, framing, decking, railings, and permit.',
  },
  {
    type: 'Emergency stabilization / safety shoring',
    range: null,
    note: <CostNote />,
    detail: 'Short-term temporary support to make a failing deck safe while a permanent repair scope is engineered.',
  },
];

// ============================================================================
// PERMITS BY COUNTY — all grounded to existing permit guides on this site
// ============================================================================
const permitsByCounty = [
  {
    county: 'Loudoun County',
    permitTriggers: 'Structural repair (joist, beam, ledger, post replacement); railing height/load upgrade; stair stringer replacement.',
    surfaceOnlyOK: 'Pure surface board swap with no framing or railing change is generally not permitted.',
    timeline: '2–4 weeks via LOLA portal',
    fee: '$150–$500 depending on valuation',
    guide: '/deck-permit-loudoun-county-virginia',
  },
  {
    county: 'Fairfax County',
    permitTriggers: 'Any structural repair; ledger re-flashing; stair stringer work; post or footing replacement.',
    surfaceOnlyOK: 'Surface board swap typically does not require a permit.',
    timeline: '3–5 weeks with sealed structural drawings',
    fee: '$200–$650 depending on valuation',
    guide: '/deck-permit-fairfax-county-virginia',
  },
  {
    county: 'Prince William County',
    permitTriggers: 'Structural repair including ledger, joists, beams, posts, footings; stair replacement.',
    surfaceOnlyOK: 'Surface board swap generally exempt.',
    timeline: '2–4 weeks via ePortal',
    fee: '$150–$525 depending on valuation',
    guide: '/deck-permit-prince-william-county-virginia',
  },
  {
    county: 'City of Fairfax',
    permitTriggers: 'Same triggers as Fairfax County; independent department.',
    surfaceOnlyOK: 'Surface board swap typically exempt.',
    timeline: '2–3 weeks',
    fee: '$150–$450 depending on valuation',
    guide: '/deck-builder-fairfax-va',
  },
];

// ============================================================================
// VIRGINIA DECK CODE FAILURES — for EEAT / AI Overview value.
// All claims map to current IRC sections (Virginia Residential Code basis).
// ============================================================================
const codeFailures = [
  {
    name: 'Ledger attachment problems',
    code: 'IRC R507.9',
    failure: 'Older decks attached to brick veneer instead of structural framing, missing through-bolts, lag bolts in single shear, or attachment to band joist with no engineered connector.',
    fix: 'Open the siding above the ledger, inspect the rim joist, install code-compliant through-bolts or lateral-load connectors per current IRC R507.9 schedules.',
  },
  {
    name: 'Missing or deteriorated flashing',
    code: 'IRC R703.4 / R507.2.3',
    failure: 'Original deck built without metal Z-flashing or drip cap, or flashing damaged by 20+ years of weather. Water reaches the rim joist behind the ledger and rots it silently.',
    fix: 'Strip siding, install proper Z-flashing with drip edge, integrate with house WRB.',
  },
  {
    name: 'Shallow footings / frost-line failure',
    code: 'IRC R403.1.4 (Virginia frost line: 18–24″)',
    failure: 'Pre-2008 footings dug to 12 inches or set in shallow gravel, freeze-thaw cycles heave the structure. Decks tilt or pull away from the house over winters.',
    fix: 'Bell-bottom footings to current Virginia frost-depth requirement (typically 24″ in NoVA), reset post bases.',
  },
  {
    name: 'Guardrail height non-compliance',
    code: 'IRC R312.1.2',
    failure: 'Decks 30+ inches above grade with rails under 36″. Common on pre-2009 builds.',
    fix: 'Rebuild rails to 36″ minimum (residential) or 42″ (commercial-adjacent). Re-engineer post-to-deck connections for current 200-lbf concentrated-load test.',
  },
  {
    name: 'Stair rise / run inconsistency',
    code: 'IRC R311.7.5',
    failure: 'Treads cut inconsistently (>3/8″ variation across the run), excessive rise per step, missing landings, no graspable handrail.',
    fix: 'Tear out and rebuild stair to consistent rise (max 7-3/4″) and run (min 10″), with graspable handrail per R311.7.8.',
  },
  {
    name: 'Missing lateral-load connectors',
    code: 'IRC R507.9.2',
    failure: 'Most pre-2008 decks have zero lateral-load connectors. The connection between ledger and rim joist fails under sustained lateral load (a crowd shifting weight, wind, snow drift).',
    fix: 'Install two DTT2Z or equivalent lateral-load tension devices per IRC R507.9.2.',
  },
  {
    name: 'Undersized posts or beams',
    code: 'IRC R507.4 / R507.5 (per AWC DCA 6 tables)',
    failure: 'Original framing sized for live load that no longer reflects current code or current homeowner use (hot tubs, outdoor kitchens, large gatherings). 4×4 posts where 6×6 is now required for height.',
    fix: 'Resize per AWC DCA 6 span tables, replace posts and beams as required.',
  },
  {
    name: 'Improper fasteners / corrosion',
    code: 'IRC R507.2 (fastener corrosion resistance for ACQ-treated lumber)',
    failure: 'Galvanized fasteners used with modern ACQ pressure-treated lumber corrode within 5–10 years. Joist hangers, lag bolts, and connectors degrade in contact with treated wood.',
    fix: 'Replace with hot-dipped galvanized G185 or stainless fasteners rated for ACQ-treated contact.',
  },
  {
    name: 'Unsafe railing spacing',
    code: 'IRC R312.1.3 (4″ sphere rule)',
    failure: 'Wider balusters that allow a 4″ sphere to pass — child safety failure. Common on pre-2000 builds.',
    fix: 'Replace balusters to current spacing (less than 4″ between members), confirm with sphere gauge.',
  },
];

// ============================================================================
// DECISION FRAMEWORK ROWS — used inside Repair vs Replace section
// ============================================================================
const decisionRows = [
  {
    signal: 'Surface board fade, splintering, or stain failure',
    framing: 'Sound',
    typical: 'Resurface',
    rebuild: 'Only if other defects coexist',
  },
  {
    signal: 'Wobbly railing, post-to-rim attachment loose',
    framing: 'Sound',
    typical: 'Localized repair: rebolt, replace post-to-deck connectors',
    rebuild: 'If 30%+ of rail posts fail',
  },
  {
    signal: 'Stair stringer cracked, treads soft, riser sag',
    framing: 'Sound stringers',
    typical: 'Tread + railing replacement',
    rebuild: 'If stringers themselves are split / rotted',
  },
  {
    signal: 'Joist edge rot at ledger or beam-to-joist hangers',
    framing: 'Partial',
    typical: 'Joist sistering (new joist alongside affected member)',
    rebuild: 'If 25%+ of joists are compromised',
  },
  {
    signal: 'Ledger flashing missing or deteriorated, water stain behind ledger',
    framing: 'Often hidden damage',
    typical: 'Open siding, inspect rim joist, re-flash, re-bolt to code',
    rebuild: 'If rim joist is rotted — structural rebuild required',
  },
  {
    signal: 'Post base in contact with grade or buried',
    framing: 'Compromised',
    typical: 'Excavate, install standoff base, replace if rot present',
    rebuild: 'If 25%+ of posts fail bottom inspection',
  },
  {
    signal: 'Deck built before current IRC ledger / lateral-load standards',
    framing: 'Varies',
    typical: 'Add IRC R507-compliant lateral-load connectors, re-flash',
    rebuild: 'If retrofit not feasible within existing framing geometry',
  },
];

// ============================================================================
// FAQS — code-anchored, NOT customer-story-anchored. No fabricated stories.
// All requested SERP variants covered.
// ============================================================================
const faqs = [
  {
    q: 'Can my deck be repaired instead of replaced?',
    a: 'Most decks can be repaired if the framing (joists, beams, posts, ledger, footings) is structurally sound and less than ~25% of any one element is compromised. Surface-only damage — faded boards, loose railings, soft stair treads — is almost always a repair, not a replacement. We start every job with a free on-site inspection that produces photo evidence of every connection and a written go/no-go recommendation on each component.',
  },
  {
    q: 'Do deck repairs require permits in Virginia?',
    a: 'Surface-only board replacement is typically exempt. Any structural work — ledger re-flashing, joist or beam repair, post replacement, footing work, stair stringer replacement, railing load upgrades — requires a permit in Loudoun, Fairfax, and Prince William counties. Fairfax County is the most documentation-heavy jurisdiction; Loudoun runs submissions through the LOLA portal; Prince William uses the ePortal. We file every permit on behalf of our clients. See the Permits by County section below for fee and timeline ranges.',
  },
  {
    q: 'How much does deck repair cost in Northern Virginia?',
    a: 'Repair cost depends on whether the work is surface-only or structural. Composite board resurface on sound framing runs $16,000–$28,000 for a 300–400 sqft deck. Localized repairs (single stair flight, single railing run, individual joist sistering) typically land in the $1,500–$8,000 range per element. Full structural rebuild when the framing is compromised runs $24,000–$48,000 for the same footprint. Every estimate we deliver is itemized and free — no obligation, no high-pressure scope creep.',
  },
  {
    q: 'Is composite resurfacing cheaper than rebuilding?',
    a: 'Yes, when the framing is sound. Composite resurfacing on existing pressure-treated framing runs roughly 35–45% of full-rebuild cost. The math only works if the joists, beams, ledger, and footings pass structural inspection. We never resurface over compromised framing — the new composite would mask hidden damage and create a safety liability. The inspection comes first; the resurface decision follows the photo evidence.',
  },
  {
    q: 'What are signs a deck is unsafe?',
    a: 'Stop using a deck immediately if any of these appear: visible separation between the deck ledger and the house siding, sagging beam or noticeable bounce under load, wobbly railing that moves under hand pressure, soft or spongy boards over joists or hangers, water stains on the siding directly below the deck ledger, or visible rot at post bases or ledger connections. These are the failure signatures that precede partial or full collapse. We offer same-day or next-day emergency safety shoring for actively failing decks.',
  },
  {
    q: 'Can you repair only the stairs or railings without touching the rest of the deck?',
    a: 'Yes. Stair-only and railing-only repairs are some of our most common scopes. Stairs see concentrated load and fail first — replacing a single stair flight runs $1,500–$4,000. Railing-only replacement runs $3,000–$8,000 for a typical composite run. The caveat: if stair or railing work triggers a permit (most do), the inspector will look at adjacent components. If the deck overall is below current code, the inspector can require broader scope.',
  },
  {
    q: 'How long does a repaired deck last?',
    a: 'A properly executed structural repair on sound framing typically extends deck life 15–25 years — comparable to a new build. Composite resurfacing on sound framing extends life to the warranty term of the new boards (25 years on Trex Transcend, 50 years on TimberTech AZEK Vintage). The framing under the new surface is the limiting factor: if the joists are 20 years old and pass inspection now, they may need attention in 10–15 years even with new surface boards. We document the framing condition at install so future inspections have a baseline.',
  },
  {
    q: 'Do you inspect the framing before quoting?',
    a: 'Always. Every deck repair quote starts with an on-site inspection — we walk the deck under load, probe every connection point, photograph every failure mode, and check the ledger flashing visually and the rim joist by access where possible. The written assessment includes photo evidence of each finding, a recommended scope, and a clear repair-vs-rebuild call. Inspection is free and carries no obligation. We do not quote sight-unseen.',
  },
  {
    q: 'What is ledger board failure, and why does it matter?',
    a: 'The ledger board is the structural connection between your deck and the house — it carries the live and dead load of the deck into the rim joist. Failure modes include missing or deteriorated flashing (water rots the rim joist behind the ledger), under-sized or missing lag bolts vs current IRC R507.9 standards, missing lateral-load connectors, and ledger attached to brick veneer instead of structural framing. Ledger failure is the most common cause of deck collapses and the single most important inspection point on any aging Northern Virginia deck.',
  },
];

// ============================================================================
// SCHEMA — FAQPage + Service. Inherits #organization (GeneralContractor) from
// global layout. No AggregateRating emitted here — the page inherits the
// honest 5.0/41 from lib/business.js via the global org schema.
// ============================================================================
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Deck Repair — Northern Virginia',
  serviceType: 'Residential Deck Repair, Restoration, and Structural Rebuild',
  provider: { '@id': 'https://ldndecks.com/#organization' },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Loudoun County, VA' },
    { '@type': 'AdministrativeArea', name: 'Fairfax County, VA' },
    { '@type': 'AdministrativeArea', name: 'Prince William County, VA' },
    { '@type': 'AdministrativeArea', name: 'Arlington County, VA' },
    { '@type': 'AdministrativeArea', name: 'Stafford County, VA' },
  ],
  description:
    'Licensed Virginia Class A deck repair contractor handling structural repair (ledger flashing, joist sistering, post replacement), composite resurfacing, stair and railing code upgrades across Northern Virginia. Serving Ashburn, Leesburg, Sterling, Brambleton, South Riding, Reston, Herndon, Fairfax, Vienna, McLean, Manassas, Gainesville, and Haymarket.',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: '500',
    highPrice: '48000',
    seller: { '@id': 'https://ldndecks.com/#organization' },
  },
};

// ============================================================================
// PAGE
// ============================================================================
export default function DeckRepairHubPage() {
  return (
    <main>
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />

      {/* ====================== HERO ====================== */}
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={S.container}>
          <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.6rem' }}>
            Deck Repair Services  ·  Northern Virginia
          </p>
          <h1 style={{ fontSize: '2.6rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.015em' }}>
            Deck Repair in Northern Virginia
          </h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem', maxWidth: 720 }}>
            Structural repair, ledger flashing, joist sistering, stair and railing code upgrades, and composite resurfacing across Loudoun, Fairfax, Prince William, and Arlington counties. Inspection-first scoping — we tell you exactly what needs to be replaced, what can be repaired, and what the math is on each.
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:+15716557207" style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.85rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</a>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.85rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Free Safety Inspection</Link>
          </div>
        </div>
      </section>

      <FinancingCTA title="Need financing for deck repair or safety improvements?" />

      {/* ====================== QUICK ANSWER ====================== */}
      <section data-speakable="true" style={{ padding: '2rem 1.5rem 0' }}>
        <div style={S.container}>
          <div style={S.callout}>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '1.05rem' }}>Quick Answer</p>
            <p style={{ margin: 0, lineHeight: 1.75, fontSize: '1.02rem' }}>
              <strong>Deck repair in Northern Virginia</strong> ranges from a $1,500–$4,000 single stair-flight replacement to a $16,000–$28,000 composite resurfacing job on sound framing, up to a $24,000–$48,000 full structural rebuild when the framing itself is compromised. The decision turns on three things: (1) is the ledger flashing intact and the rim joist sound, (2) what percentage of joists or rail posts are compromised, (3) was the deck built before current IRC R507 standards. Loudoun Decks is a Virginia Class A licensed deck contractor — every repair starts with a free on-site inspection and an itemized written scope.
            </p>
          </div>

          {/* Jump links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', color: '#666', fontWeight: 600, marginRight: '0.5rem' }}>Jump to:</span>
            {[
              ['#repair-vs-replace', 'Repair vs Replace'],
              ['#common-failures', 'Common failures'],
              ['#va-code-failures', 'VA code failures'],
              ['#cost-ranges', 'Cost ranges'],
              ['#permits', 'Permits'],
              ['#process', 'Process & timeline'],
              ['#safety', 'Safety & code'],
              ['#resurfacing', 'Composite resurfacing'],
              ['#not-worth-repair', 'When repair isn\'t worth it'],
              ['#projects', 'Local projects'],
              ['#faqs', 'FAQs'],
            ].map(([href, label]) => (
              <a key={href} href={href} style={{ fontSize: '0.88rem', padding: '0.4rem 0.9rem', background: '#f0efea', borderRadius: 20, color: '#333', textDecoration: 'none', fontWeight: 500 }}>
                {label}
              </a>
            ))}
            <Link href="/contact" style={{ marginLeft: 'auto', fontSize: '0.92rem', padding: '0.5rem 1.1rem', background: 'var(--color-primary)', color: '#fff', borderRadius: 6, fontWeight: 600, textDecoration: 'none' }}>
              Free Safety Inspection →
            </Link>
          </div>

          {/* Inline named-author byline. Nick is the verified owner identity (TeamGrid.jsx).
              No fabricated technician claims, no fabricated review counts. */}
          <aside style={{ display: 'flex', gap: '1rem', alignItems: 'center', background: '#f8f8f6', border: '1px solid #ececec', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '2rem' }}>
            <div style={{ position: 'relative', width: 64, height: 64, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
              <Image src="/team/Nick.jpg" alt="Nick — Owner, Loudoun Decks" fill sizes="64px" style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ margin: 0, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#888', fontWeight: 600 }}>Project Lead</p>
              <p style={{ margin: '0.15rem 0 0.25rem', fontSize: '1rem', fontWeight: 700 }}>
                Nick <span style={{ fontWeight: 500, color: '#555' }}>— Owner &amp; Lead Designer, Loudoun Decks</span>
              </p>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#555', lineHeight: 1.55 }}>
                Virginia Class A Licensed Contractor. Trex Platinum Partner and TimberTech Certified Installer.
                10+ years building custom decks in Loudoun, Fairfax, Prince William, and Arlington counties.
                {' '}<Link href="/team" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Meet the team</Link>
              </p>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.75rem', color: '#888', fontStyle: 'italic' }}>
                Last reviewed / updated: <time dateTime="2026-05">May 2026</time>
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ====================== HERO IMAGE ====================== */}
      <section style={{ padding: '0 1.5rem 1.5rem' }}>
        <div style={S.container}>
          <div style={{ position: 'relative', width: '100%', height: '420px', borderRadius: '12px', overflow: 'hidden' }}>
            <Image
              src="/torndeck.webp"
              alt="Deck damage — substructure rot exposed during structural assessment"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 960px) 100vw, 960px"
              priority
            />
          </div>
          <p style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: '#666' }}>
            <EvidenceSlot label="HERO PROJECT — preferred: named NoVA before/after with city, scope, completion date" hint="Replace generic damage photo with a real Loudoun Decks repair project" />
          </p>
        </div>
      </section>

      {/* ====================== REPAIR VS REPLACE — DECISION FRAMEWORK ====================== */}
      <section id="repair-vs-replace" style={{ padding: '3rem 1.5rem' }}>
        <div style={S.container}>
          <h2 style={S.h2}>Repair vs Replace — The Decision Framework</h2>
          <p style={S.p}>
            The single most useful thing a deck repair contractor can give you is an honest answer to whether your deck should be repaired, partially rebuilt, or fully replaced. The framework below is how we triage every inspection. The right answer almost always comes from the framing and the ledger — not from what the surface looks like.
          </p>

          {/* Conversion-focused decision blocks */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ background: '#f0fff4', border: '1px solid #9ae6b4', borderRadius: 8, padding: '1.25rem 1.5rem' }}>
              <p style={{ margin: 0, fontWeight: 700, color: '#2f855a', marginBottom: '0.6rem', fontSize: '1.05rem' }}>Repair likely makes sense when…</p>
              <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.92rem', lineHeight: 1.7, color: '#333' }}>
                <li>Surface boards are faded, splintering, or stained but framing is sound</li>
                <li>Less than ~25% of joists or rail posts are compromised</li>
                <li>Ledger flashing is intact and rim joist is sound on inspection</li>
                <li>Damage is concentrated (one stair flight, one rail run, one joist)</li>
                <li>Deck was built to current IRC standards or close to it</li>
              </ul>
            </div>
            <div style={{ background: '#fff5f5', border: '1px solid #feb2b2', borderRadius: 8, padding: '1.25rem 1.5rem' }}>
              <p style={{ margin: 0, fontWeight: 700, color: '#c53030', marginBottom: '0.6rem', fontSize: '1.05rem' }}>Replacement likely makes sense when…</p>
              <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.92rem', lineHeight: 1.7, color: '#333' }}>
                <li>Rim joist behind the ledger is rotted</li>
                <li>More than 25% of joists or rail posts are compromised</li>
                <li>Footings are non-conforming and require multi-element rebuild</li>
                <li>Deck predates current IRC R507 and retrofit isn&apos;t geometrically feasible</li>
                <li>Repair quote approaches 60–70% of new-build cost</li>
              </ul>
            </div>
            <div style={{ background: '#fffaf0', border: '1px solid #f6ad55', borderRadius: 8, padding: '1.25rem 1.5rem' }}>
              <p style={{ margin: 0, fontWeight: 700, color: '#9c4221', marginBottom: '0.6rem', fontSize: '1.05rem' }}>Inspection needed before deciding…</p>
              <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.92rem', lineHeight: 1.7, color: '#333' }}>
                <li>You cannot see the rim joist or ledger flashing from outside the house</li>
                <li>Deck shows visible bounce, sag, or lean</li>
                <li>Last inspection or build documentation is older than 10 years</li>
                <li>Hidden damage is suspected (soft spots, water staining)</li>
                <li>Any HOA or insurance compliance question is unresolved</li>
              </ul>
              <p style={{ marginTop: '0.85rem', marginBottom: 0 }}>
                <Link href="/contact" style={{ display: 'inline-block', background: 'var(--color-primary)', color: '#fff', padding: '0.55rem 1.1rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none', fontSize: '0.92rem' }}>
                  Schedule a Free Safety Inspection →
                </Link>
              </p>
            </div>
          </div>

          <p style={S.p}>
            The detail table below shows how we triage common visible signals against framing condition:
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
              <thead>
                <tr>
                  <th style={S.th}>Visible signal</th>
                  <th style={S.th}>Framing state</th>
                  <th style={S.th}>Typical scope</th>
                  <th style={S.th}>Full rebuild trigger</th>
                </tr>
              </thead>
              <tbody>
                {decisionRows.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{row.signal}</td>
                    <td style={S.td}>{row.framing}</td>
                    <td style={S.td}>{row.typical}</td>
                    <td style={{ ...S.td, color: '#555' }}>{row.rebuild}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.pMuted}>
            For deeper background on the resurface-versus-rebuild math: <Link href="/deck-resurfacing-vs-replacement" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>resurfacing vs replacement decision guide</Link>. For inspection scope and what we check on site: <Link href="/services/deck-inspection" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck safety inspection</Link>.
          </p>
        </div>
      </section>

      {/* ====================== COMMON STRUCTURAL FAILURES IN NoVA ====================== */}
      <section id="common-failures" style={{ padding: '3rem 1.5rem', background: '#fafafa', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
        <div style={S.container}>
          <h2 style={S.h2}>Common Structural Failures in Northern Virginia Decks</h2>
          <p style={S.p}>
            Northern Virginia is a particularly tough climate for deck framing. 50–80 freeze-thaw cycles per winter, 70–90% summer humidity, heavy spring pollen and tree-litter loads on horizontal surfaces, and a residential housing stock dominated by 1980s–2000s pressure-treated decks that predate current ledger-flashing and lateral-load standards. The same failure modes appear in our inspections in Ashburn, Leesburg, Sterling, Brambleton, South Riding, Reston, Herndon, Fairfax, Vienna, McLean, Manassas, Gainesville, and Haymarket again and again.
          </p>

          <h3 style={S.h3}>1. Ledger flashing failure</h3>
          <p style={S.p}>
            The single most consequential failure point on any deck. The ledger board carries the deck&apos;s load into the rim joist of the house; if water reaches the rim joist behind the ledger (because flashing is missing, was never installed, or has deteriorated), the rim joist rots silently for years and the connection fails — sometimes catastrophically. Look for: water staining on the siding directly below the ledger, dark streaks on the rim joist visible from inside the basement, soft wood at the ledger-to-house junction when probed.
          </p>

          <h3 style={S.h3}>2. Post-base rot</h3>
          <p style={S.p}>
            Pre-2008 decks routinely had posts set directly into concrete or in contact with grade. Water wicks up, freeze-thaw cycles split the grain, and the bottom 6–18 inches of the post rots over 15–25 years. Current code requires a metal standoff base that keeps the post off the concrete or grade. Repair scope: excavate around the base, evaluate the footing itself for depth and bell, replace the post and install a standoff. If the footing is non-conforming, the footing rebuild is separate scope.
          </p>

          <h3 style={S.h3}>3. Joist edge rot (ledger and beam connections)</h3>
          <p style={S.p}>
            Water that gets past the ledger flashing, or that pools at a beam-to-joist hanger, rots the joist at its end-grain. The middle of the joist looks fine; the last 3–6 inches at the connection is mush. Repair scope: joist sistering — bolt a new full-length joist alongside the affected one, sharing the load. Sister-joist work is the most cost-effective structural repair when the rot is localized.
          </p>

          <h3 style={S.h3}>4. Stair stringer instability</h3>
          <p style={S.p}>
            Stairs see more concentrated load than the deck surface itself. Common failures: tread softness from water penetration, cracked or split stringers (especially at the top stair-to-deck connection), riser sag from missing or under-sized hangers. Stair work also frequently triggers railing rebuilding because old stair rails predate current IRC R311.7 graspability and load standards.
          </p>

          <h3 style={S.h3}>5. Railing code failures</h3>
          <p style={S.p}>
            Pre-2008 deck railings often have post-to-deck attachments that fail current IRC R507.10 lateral-load standards. The 200-lbf concentrated-load test at the top rail will move the rail visibly on most older decks. Railing height also changed in 2009 — residential decks 30+ inches above grade now require 36-inch minimum rail height. Older decks may need full railing replacement to comply.
          </p>

          <h3 style={S.h3}>6. Flashing problems at the wall intersection</h3>
          <p style={S.p}>
            Adjacent to the ledger flashing issue but distinct: the kick-out flashing where the deck meets the siding can be missing or improperly lapped, directing water behind the siding instead of out and over the ledger flashing.
          </p>

          <h3 style={S.h3}>7. Composite resurfacing problems</h3>
          <p style={S.p}>
            Surface-board issues are usually solvable without touching the framing. Common scope: replace splintered or stain-failed wood boards with new composite (Trex, TimberTech, Fiberon) using hidden fasteners; install picture-frame border at the perimeter; re-attach to existing joists. Two caveats — joist spacing for composite is tighter than for wood (12-inch on-center for diagonal patterns, 16-inch on-center for parallel patterns), and the existing joists must be visually inspected before new boards go down.
          </p>

          <h3 style={S.h3}>8. Moisture exposure unique to the NoVA climate</h3>
          <p style={S.p}>
            Tree-canopy lots in Vienna, McLean, Great Falls, Fairfax Station, Reston, and Loudoun&apos;s western edge see prolonged surface moisture from leaf litter, pollen, and shaded north-facing exposures. North-facing decks under tree cover dry slowly after rain. Combined with NoVA&apos;s freeze-thaw cycle count, this is the worst-case framing exposure scenario — every joist hanger and lateral connector becomes a moisture trap. Decks in this exposure regime show structural decay 5–10 years sooner than south-facing decks on open lots.
          </p>
        </div>
      </section>

      {/* ====================== VIRGINIA CODE FAILURES — EEAT BLOCK ====================== */}
      <section id="va-code-failures" style={{ padding: '3rem 1.5rem' }}>
        <div style={S.container}>
          <h2 style={S.h2}>Common Virginia Deck Code Failures</h2>
          <p style={S.p}>
            The Virginia Residential Code (VRC) is based on the International Residential Code (IRC). Most code failures on aging Northern Virginia decks fall into nine recurring categories. We catch all nine during inspection — the table below shows each failure, the IRC section it falls under, and the standard fix.
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '1.25rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
              <thead>
                <tr>
                  <th style={S.th}>Code failure</th>
                  <th style={S.th}>IRC section</th>
                  <th style={S.th}>What goes wrong</th>
                  <th style={S.th}>The fix</th>
                </tr>
              </thead>
              <tbody>
                {codeFailures.map((cf, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{cf.name}</td>
                    <td style={{ ...S.td, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: '0.85em', color: '#555' }}>{cf.code}</td>
                    <td style={{ ...S.td, color: '#555' }}>{cf.failure}</td>
                    <td style={S.td}>{cf.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.pMuted}>
            County-specific permit guidance for repair scopes that touch these code items:{' '}
            <Link href="/deck-permit-loudoun-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun County permits</Link>{' · '}
            <Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Fairfax County permits</Link>{' · '}
            <Link href="/deck-safety-inspection-checklist" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>NoVA deck safety inspection checklist</Link>{' · '}
            <Link href="/services/deck-inspection" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Schedule a deck inspection</Link>.
          </p>
        </div>
      </section>

      {/* ====================== COST RANGES ====================== */}
      <section id="cost-ranges" style={{ padding: '3rem 1.5rem', background: '#fafafa', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
        <div style={S.container}>
          <h2 style={S.h2}>Deck Repair Cost Ranges in Northern Virginia</h2>
          <p style={S.p}>
            Ranges below ground to our own 2026 Northern Virginia project data on items in our standard cost calculator; items not yet covered in the calculator are marked for verification before publish. Every estimate is itemized and free.
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
              <thead>
                <tr>
                  <th style={S.th}>Repair scope</th>
                  <th style={S.th}>Installed range</th>
                  <th style={S.th}>Detail</th>
                </tr>
              </thead>
              <tbody>
                {repairCosts.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{row.type}</td>
                    <td style={S.td}>
                      {row.range ? <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{row.range}</span> : null}
                      {row.note}
                    </td>
                    <td style={{ ...S.td, color: '#555' }}>{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.pMuted}>
            Full project cost context:{' '}
            <Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>composite deck cost (2026)</Link>{' · '}
            <Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>NoVA deck cost calculator</Link>.
          </p>
        </div>
      </section>

      {/* ====================== PERMITS BY COUNTY ====================== */}
      <section id="permits" style={{ padding: '3rem 1.5rem' }}>
        <div style={S.container}>
          <h2 style={S.h2}>Permit Requirements by County</h2>
          <p style={S.p}>
            What triggers a permit during a deck repair is different from what triggers one on a new build. Short version: surface-only board swap is generally exempt; anything that touches structure, code-compliance railings, or stair stringers requires a permit. We handle every submission for our clients.
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
              <thead>
                <tr>
                  <th style={S.th}>Jurisdiction</th>
                  <th style={S.th}>What triggers a permit</th>
                  <th style={S.th}>Surface-only?</th>
                  <th style={S.th}>Review</th>
                  <th style={S.th}>Fee</th>
                  <th style={S.th}>Full guide</th>
                </tr>
              </thead>
              <tbody>
                {permitsByCounty.map((p, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{p.county}</td>
                    <td style={{ ...S.td, color: '#555' }}>{p.permitTriggers}</td>
                    <td style={S.td}>{p.surfaceOnlyOK}</td>
                    <td style={S.td}>{p.timeline}</td>
                    <td style={S.td}>{p.fee}</td>
                    <td style={S.td}><Link href={p.guide} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Read →</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ ...S.pMuted, fontSize: '0.88rem', fontStyle: 'italic' }}>
            Permit fees vary with project valuation. Ranges above ground to current 2026 fee schedules; verify against the linked county guides for live numbers.
          </p>
        </div>
      </section>

      {/* ====================== PROCESS & TIMELINE ====================== */}
      <section id="process" style={{ padding: '3rem 1.5rem', background: '#fafafa', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
        <div style={S.container}>
          <h2 style={S.h2}>Our Deck Repair Process & Timeline</h2>
          <ol style={{ paddingLeft: '1.25rem' }}>
            <li style={{ marginBottom: '1rem', lineHeight: 1.75 }}>
              <strong>Free on-site safety inspection (Day 0).</strong> We arrive on site, walk the deck under load, probe every connection point, photograph every failure mode, and produce a written assessment with photo evidence the same week. No charge, no obligation.
            </li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.75 }}>
              <strong>Itemized repair scope (Days 1–5).</strong> We deliver a written estimate that separates structural-required scope from optional upgrades. Every line item carries its own price. If we recommend full replacement instead of repair, the photo evidence shows you exactly why.
            </li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.75 }}>
              <strong>Permit submission (Days 5–10).</strong> Where the scope triggers a permit, we file with the appropriate county building department. Loudoun via LOLA, Fairfax via Building Development Division, Prince William via ePortal.
            </li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.75 }}>
              <strong>Permit review (2–5 weeks depending on county).</strong> See the permit table above. We respond to any correction notices through the same portal.
            </li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.75 }}>
              <strong>HOA architectural review (1–4 weeks, parallel).</strong> Where applicable. Brambleton, Lansdowne, Reston, Burke Centre, South Riding, Belmont, Broadlands, and most planned NoVA communities require architectural review for material or color changes. Like-for-like repairs are usually exempt — but we confirm in writing.
            </li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.75 }}>
              <strong>Construction (varies by scope).</strong> Surface-only resurfacing 3–7 days. Localized structural repair 2–5 days. Full ledger work 4–10 days. We protect surrounding landscaping and clean up daily.
            </li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.75 }}>
              <strong>Final inspection and walkthrough.</strong> County inspector for permitted work, then a written punch-list walkthrough on-site. Photo documentation filed to your project record.
            </li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.75 }}>
              <strong>Workmanship warranty.</strong> We back every structural and resurfacing repair we perform.{' '}
              <DoNotPublish note="Confirm exact workmanship warranty term + scope before publish — see Warranty section below" />
            </li>
          </ol>
        </div>
      </section>

      {/* ====================== SAFETY & CODE ====================== */}
      <section id="safety" style={{ padding: '3rem 1.5rem' }}>
        <div style={S.container}>
          <h2 style={S.h2}>Safety, Code, and When to Stop Using a Deck</h2>
          <div style={S.safety}>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '1.05rem' }}>Stop using your deck immediately if you notice any of the following:</p>
            <ul style={{ marginBottom: 0, paddingLeft: '1.25rem' }}>
              <li style={{ marginBottom: '0.4rem', lineHeight: 1.65 }}>Visible separation between the deck ledger and the house siding</li>
              <li style={{ marginBottom: '0.4rem', lineHeight: 1.65 }}>Sagging beam or noticeable bounce when more than one person is on the deck</li>
              <li style={{ marginBottom: '0.4rem', lineHeight: 1.65 }}>Wobbly railing that moves under hand pressure</li>
              <li style={{ marginBottom: '0.4rem', lineHeight: 1.65 }}>Soft, spongy boards over joists or hangers (rot underneath)</li>
              <li style={{ marginBottom: '0.4rem', lineHeight: 1.65 }}>Water stains on the siding directly below the deck ledger</li>
              <li style={{ marginBottom: '0.4rem', lineHeight: 1.65 }}>Visible rot at post bases or ledger connections</li>
            </ul>
          </div>
          <p style={S.p}>
            Loudoun Decks offers same-day or next-day emergency stabilization for actively failing decks. <a href="tel:+15716557207" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Call (571) 655-7207</a> for emergency safety shoring. For a self-check before the visit: <Link href="/deck-safety-inspection-checklist" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>NoVA deck safety inspection checklist</Link>.
          </p>

          <h3 style={S.h3}>Code references we repair to</h3>
          <p style={S.p}>
            Every structural repair we perform meets or exceeds the current Virginia Residential Code (based on the International Residential Code, IRC). Key sections:
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.45rem', lineHeight: 1.7 }}><strong>IRC R507.2</strong> — Materials (pressure-treated species, fastener corrosion resistance)</li>
            <li style={{ marginBottom: '0.45rem', lineHeight: 1.7 }}><strong>IRC R507.3</strong> — Footings (depth, bell, frost line)</li>
            <li style={{ marginBottom: '0.45rem', lineHeight: 1.7 }}><strong>IRC R507.4–5</strong> — Posts and beams</li>
            <li style={{ marginBottom: '0.45rem', lineHeight: 1.7 }}><strong>IRC R507.6–8</strong> — Joists, joist hangers, decking attachment</li>
            <li style={{ marginBottom: '0.45rem', lineHeight: 1.7 }}><strong>IRC R507.9</strong> — Deck ledger connection (flashing, bolt schedules, lateral-load connectors)</li>
            <li style={{ marginBottom: '0.45rem', lineHeight: 1.7 }}><strong>IRC R507.10</strong> — Guards and rails (height, opening spacing, load tests)</li>
            <li style={{ marginBottom: '0.45rem', lineHeight: 1.7 }}><strong>IRC R311.7</strong> — Stairways (rise, run, headroom, handrail graspability)</li>
          </ul>
          <p style={S.pMuted}>
            Reference: <a href="https://www.awc.org/codes-standards/publications/dca6" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>AWC DCA 6 — Prescriptive Residential Wood Deck Construction Guide</a> is the industry-standard design document the IRC references for typical residential decks.
          </p>
        </div>
      </section>

      {/* ====================== COMPOSITE RESURFACING (UPGRADED) ====================== */}
      <section id="resurfacing" style={{ padding: '3rem 1.5rem', background: '#fafafa', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
        <div style={S.container}>
          <h2 style={S.h2}>Composite Resurfacing — When the Substructure Is Sound</h2>
          <p style={S.p}>
            The most cost-effective deck repair in the Northern Virginia market is composite resurfacing — replacing tired pressure-treated boards on existing sound framing with new Trex, TimberTech, or Fiberon composite. The math only works if the framing is structurally sound: resurfacing on a compromised substructure masks hidden damage and is a safety liability we will not take on.
          </p>

          <h3 style={S.h3}>When resurfacing is the right call</h3>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Substructure is sound on inspection.</strong> Joists, beams, posts, ledger, and footings all pass — no rot, no insect damage, no code violations that require structural rebuild.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Surface damage dominates.</strong> Splintering boards, stain failure, color fade, soft spots in surface boards only.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Wood-to-composite upgrade.</strong> Moving from a pressure-treated deck to Trex Transcend, TimberTech AZEK, or Fiberon Concordia — without a full rebuild.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Cost saving matters.</strong> Resurfacing runs roughly 35–45% the cost of a full structural rebuild on the same footprint.</li>
          </ul>

          <h3 style={S.h3}>What we include in a resurface scope</h3>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>New composite boards</strong> with hidden fasteners (Trex Hideaway / TigerClaw, TimberTech CONCEALoc, or Cortex)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Picture-frame border</strong> at the perimeter for finished edge</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Optional new railing system</strong> — composite, cable, or aluminum picket</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Stair tread replacement</strong> matched to deck surface</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>New fascia and skirting</strong> in matching composite</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Joist-top tape</strong> on existing joists to extend their service life</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Disposal of old boards and fasteners</strong></li>
          </ul>

          <h3 style={S.h3}>What we verify before resurfacing</h3>
          <p style={S.p}>
            Framing condition (no rot, no insect damage), ledger flashing, joist spacing (12-inch o.c. required for diagonal composite patterns, 16-inch o.c. for parallel), railing code compliance, footing depth where exposed. Photo documentation of every connection, then a written go/no-go decision before any boards come off.
          </p>

          <p style={S.pMuted}>
            Deeper resources:{' '}
            <Link href="/services/deck-resurfacing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>composite deck resurfacing services</Link>{' · '}
            <Link href="/deck-resurfacing-vs-replacement" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>resurfacing vs replacement decision framework</Link>{' · '}
            <Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>composite deck cost (2026 pricing)</Link>{' · '}
            <Link href="/trex-vs-timbertech-vs-azek" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Trex vs TimberTech vs AZEK</Link>.
          </p>
        </div>
      </section>

      {/* ====================== WHEN REPAIR ISN'T WORTH IT ====================== */}
      <section id="not-worth-repair" style={{ padding: '3rem 1.5rem' }}>
        <div style={S.container}>
          <h2 style={S.h2}>When Repair Is NOT Worth It</h2>
          <p style={S.p}>
            Honest scoping means we tell you when repair is the wrong answer. There are real situations where the repair quote approaches replacement cost, the warranty math doesn&apos;t work, or the safety risk is unacceptable — and in those cases we will recommend full replacement, even if you came in expecting a repair.
          </p>

          <h3 style={S.h3}>Major joist rot</h3>
          <p style={S.p}>
            When more than 25% of the deck&apos;s joists show structural compromise — rot, insect damage, splitting at the ledger or beam connections — joist sistering stops being economical. Per-joist labor cost approaches the per-joist cost of a new build, but without the benefits of new fastener systems, current-code lateral connectors, and a reset warranty on the whole structure.
          </p>

          <h3 style={S.h3}>Ledger board failure with rim joist damage</h3>
          <p style={S.p}>
            The most consequential rebuild trigger. If the rim joist behind the ledger is rotted, replacing the ledger by itself solves nothing — the structural attachment to the house is already compromised. Exposing and repairing the rim joist is a meaningful share of the framing work in a new build, and the discovery of additional hidden damage during that work is the rule, not the exception. Full replacement is typically cleaner and costs marginally more for a much longer service life.
          </p>

          <h3 style={S.h3}>Failing footings</h3>
          <p style={S.p}>
            Footings that are shallower than the Virginia frost line (18–24 inches in NoVA), bell-less, or set in disturbed fill cannot be cost-effectively retrofitted. They require excavation and new pours under each affected post. When more than 25% of footings need replacement, the labor and material cost approaches a full new framing build and the new footings still sit under old framing.
          </p>

          <h3 style={S.h3}>Unsafe stairs that cannot be repaired in isolation</h3>
          <p style={S.p}>
            Some stair failures (cracked stringers across multiple flights, riser height inconsistencies across the whole run, or stair landings with no engineered support) cannot be selectively repaired. Rebuilding the stair from scratch is required, and once that&apos;s on the scope, code review of the adjacent deck rails is often mandatory under the same permit.
          </p>

          <h3 style={S.h3}>Widespread railing and code violations</h3>
          <p style={S.p}>
            When the railing system fails at height (under 36″ on a 30+ inch deck), spacing (allows a 4″ sphere), lateral-load test (200-lbf concentrated load), AND graspability — replacing pieces of it produces a Frankenstein rail that still fails inspection. Full railing replacement at that point makes the deck safer, gives you a single material/color/system, and avoids the per-element repair labor multiplication.
          </p>

          <h3 style={S.h3}>Framing older than practical repair</h3>
          <p style={S.p}>
            Pre-2000 decks frequently have post layouts, joist spacing, beam sizing, or ledger geometry that cannot be made code-compliant without dismantling the framing. At that point a new permitted build is faster, cleaner, and safer than a forced retrofit. We will show you the geometry that won&apos;t accept current-code retrofit and explain why a new build is the better economic and safety call.
          </p>

          <h3 style={S.h3}>Repair cost approaches replacement cost</h3>
          <p style={S.p}>
            The economic threshold most homeowners care about most: when the repair quote lands above 60–70% of full-replacement cost, full replacement almost always wins on lifetime cost. A new build resets the warranty clock to 25–50 years on the surface and 5+ years on workmanship, with current-code framing, new fasteners, and (importantly) the upgrade to composite that most NoVA homeowners want anyway. We&apos;ll show you both quotes side-by-side and let you decide.
          </p>

          <p style={S.pMuted}>
            When replacement is the right call:{' '}
            <Link href="/services/deck-replacement" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>full deck replacement services</Link>{' · '}
            <Link href="/services/deck-resurfacing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>resurfacing services</Link>{' · '}
            <Link href="/deck-resurfacing-vs-replacement" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>decision framework</Link>.
          </p>
        </div>
      </section>

      {/* ====================== WARRANTY PLACEHOLDER BLOCK ====================== */}
      <section style={{ padding: '3rem 1.5rem', background: '#fafafa', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
        <div style={S.container}>
          <h2 style={S.h2}>Workmanship Warranty</h2>
          <div style={S.evidenceBox}>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '1.05rem' }}>Loudoun Decks Workmanship Warranty</p>
            <p style={{ margin: 0, lineHeight: 1.7 }}>
              We back every structural and resurfacing repair we perform with a Loudoun Decks workmanship warranty. The exact warranty term and scope is{' '}
              <EvidenceSlot label="VERIFIED REPAIR WORKMANSHIP WARRANTY TERM" hint="Owner must confirm — typical industry range 1–10 years. Do NOT guess." />
              {' '}— pending final owner confirmation.
            </p>
            <p style={{ margin: '0.75rem 0 0', lineHeight: 1.7 }}>
              <strong>Separate from our workmanship warranty:</strong> the composite manufacturer warranty travels with the boards — typically 25 years on Trex Transcend stain & fade, 30 years on TimberTech PRO, 50 years on TimberTech AZEK Vintage, 25 years on Fiberon Concordia plus a lifetime structural warranty. We register the manufacturer warranty in your name at install.
            </p>
          </div>
          <p style={S.pMuted}>
            For details on manufacturer warranty differences:{' '}
            <Link href="/trex-vs-timbertech-vs-azek" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Trex vs TimberTech vs AZEK comparison</Link>.
          </p>
        </div>
      </section>

      {/* ====================== PHOTO REQUIREMENTS CHECKLIST ====================== */}
      <section style={{ padding: '3rem 1.5rem' }}>
        <div style={S.container}>
          <h2 style={S.h2}>Photo Requirements Before Publish (Editor Reference)</h2>
          <div style={S.evidenceBox}>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '1.05rem' }}>This section is visible to editors only — strip before going live.</p>
            <p style={{ margin: 0, lineHeight: 1.7 }}>
              The page needs the following photos to reach publish-ready state. All photos must be Loudoun Decks projects (no stock, no AI). Per BEAST plan §10 — no fabricated evidence.
            </p>
            <ul style={{ marginTop: '0.85rem', paddingLeft: '1.25rem' }}>
              <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Hero image (1 photo):</strong> a representative before/after split — preferred over the current generic <code>/torndeck.webp</code></li>
              <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Ledger failure (1 photo):</strong> ideally water staining or rim-joist rot exposed during ledger repair work</li>
              <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Post rot (1 photo):</strong> excavated post base showing rot at grade contact</li>
              <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Stair rebuild (1 photo):</strong> before and after of a stair stringer replacement</li>
              <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Railing repair (1 photo):</strong> code-compliant rail replacement, ideally with visible lateral-load hardware</li>
              <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Composite resurfacing before/after (2 photos):</strong> wood-to-composite resurface, same deck, before + after</li>
              <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Joist sistering / framing repair (1 photo):</strong> new joist bolted alongside existing</li>
              <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Optional: permit or inspection screenshot</strong> with all PII (homeowner name, address, parcel ID) redacted</li>
            </ul>
            <p style={{ marginTop: '1rem', marginBottom: 0, fontSize: '0.88rem', color: '#7a4f00' }}>
              Total photos needed: <strong>9 minimum</strong> (8 project + 1 hero) to satisfy BEAST plan §4 evidence requirement.
            </p>
          </div>
        </div>
      </section>

      {/* ====================== PROJECT EVIDENCE SLOTS (UPGRADED) ====================== */}
      <section id="projects" style={{ padding: '3rem 1.5rem', background: '#fafafa', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
        <div style={S.container}>
          <h2 style={S.h2}>Recent NoVA Deck Repair Projects</h2>
          <p style={S.p}>
            Six project slots are scaffolded with full field structure (city, date, repair type, failure found, work performed, permit status, before/after photo paths, evidence status). Until each slot is populated with verified evidence, do not publish.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            {[
              { id: 1, repairType: 'Structural stair rebuild + railing code upgrade' },
              { id: 2, repairType: 'Ledger re-flashing + joist sistering on north-facing deck' },
              { id: 3, repairType: 'Composite resurface on sound pressure-treated framing' },
              { id: 4, repairType: 'Post-base replacement + footing bell rebuild' },
              { id: 5, repairType: 'Full railing replacement to current IRC R507.10' },
              { id: 6, repairType: 'Emergency stabilization → permitted structural rebuild' },
            ].map((proj) => (
              <div key={proj.id} style={{ background: '#fff', border: '2px dashed #c79100', borderRadius: 8, padding: '1.25rem' }}>
                <p style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#c79100', fontWeight: 700, marginBottom: '0.4rem' }}>
                  Project slot #{proj.id}  ·  <DoNotPublish note="" />
                </p>
                <p style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.55rem' }}>{proj.repairType}</p>
                <dl style={{ margin: 0, fontSize: '0.85rem', lineHeight: 1.55 }}>
                  <dt style={{ fontWeight: 600, color: '#444', marginTop: '0.4rem' }}>City / neighborhood</dt>
                  <dd style={{ margin: 0 }}><EvidenceSlot label={`CITY · NEIGHBORHOOD`} /></dd>
                  <dt style={{ fontWeight: 600, color: '#444', marginTop: '0.4rem' }}>Month / year</dt>
                  <dd style={{ margin: 0 }}><EvidenceSlot label="MONTH YEAR" /></dd>
                  <dt style={{ fontWeight: 600, color: '#444', marginTop: '0.4rem' }}>Failure found</dt>
                  <dd style={{ margin: 0 }}><EvidenceSlot label="FAILURE FOUND (1 line)" /></dd>
                  <dt style={{ fontWeight: 600, color: '#444', marginTop: '0.4rem' }}>Work performed</dt>
                  <dd style={{ margin: 0 }}><EvidenceSlot label="WORK PERFORMED (1–2 lines)" /></dd>
                  <dt style={{ fontWeight: 600, color: '#444', marginTop: '0.4rem' }}>Permit / inspection required</dt>
                  <dd style={{ margin: 0 }}><EvidenceSlot label="PERMIT? Y/N — JURISDICTION" /></dd>
                  <dt style={{ fontWeight: 600, color: '#444', marginTop: '0.4rem' }}>Photo (before)</dt>
                  <dd style={{ margin: 0 }}><EvidenceSlot label="PHOTO PATH /showcase/repair-NN-before.jpg" /></dd>
                  <dt style={{ fontWeight: 600, color: '#444', marginTop: '0.4rem' }}>Photo (after)</dt>
                  <dd style={{ margin: 0 }}><EvidenceSlot label="PHOTO PATH /showcase/repair-NN-after.jpg" /></dd>
                  <dt style={{ fontWeight: 600, color: '#444', marginTop: '0.4rem' }}>Evidence status</dt>
                  <dd style={{ margin: 0 }}><EvidenceSlot label="STATUS: draft / verified / approved" /></dd>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== SERVICE AREA ====================== */}
      <section style={{ padding: '3rem 1.5rem' }}>
        <div style={S.container}>
          <h2 style={S.h2}>Deck Repair Service Area</h2>
          <p style={S.p}>
            We repair decks across Northern Virginia. Cluster density is heaviest in Loudoun County (Ashburn, Leesburg, Sterling, Brambleton, South Riding), Fairfax County (Reston, Herndon, Fairfax, Vienna, McLean), and Prince William County (Manassas, Gainesville, Haymarket). We also serve Arlington and Stafford on a case-by-case basis.
          </p>
          <p style={S.p}>
            For Loudoun-specific repair guidance: <Link href="/deck-repair-loudoun-county" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun County deck repair</Link>. For our general Northern Virginia repair landing page: <Link href="/deck-repair" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>NoVA deck repair</Link>.
          </p>
        </div>
      </section>
      <ServiceAreasGrid />

      {/* ====================== FAQS ====================== */}
      <section id="faqs" style={{ padding: '3rem 1.5rem', background: '#fafafa', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
        <div style={S.container}>
          <h2 style={S.h2}>Deck Repair FAQs</h2>
          {faqs.map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.1rem 1.25rem', marginBottom: '0.75rem', background: '#fff' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.02rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '0.85rem', lineHeight: 1.75, color: '#444', marginBottom: 0 }}>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ====================== FINANCING + INTERNAL LINK HUB ====================== */}
      <section style={{ padding: '3rem 1.5rem' }}>
        <div style={S.container}>
          <h2 style={S.h2}>Financing Your Deck Repair</h2>
          <p style={S.p}>
            Structural deck repair can range from smaller board and railing repairs to larger safety-driven rebuild scopes. For mid-to-large repair jobs, financing options may be available so homeowners can address safety work without delaying the project unnecessarily. Approval is not guaranteed, and terms may vary.
          </p>
          <p style={S.pMuted}>
            <Link href="/deck-financing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck financing options</Link>
            {' · '}
            <Link href="/contact" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Request a repair estimate</Link>
          </p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related Deck Repair Resources</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem' }}>
            {[
              ['/deck-repair', 'NoVA Deck Repair Landing', 'Concise repair-services overview'],
              ['/deck-repair-loudoun-county', 'Loudoun County Deck Repair', 'County-specific guidance'],
              ['/services/deck-inspection', 'Deck Safety Inspection', 'Free on-site assessment'],
              ['/services/deck-maintenance', 'Deck Maintenance', 'Annual care that prevents repair work'],
              ['/services/deck-replacement', 'Full Deck Replacement', 'When repair is no longer the right answer'],
              ['/services/deck-resurfacing', 'Deck Resurfacing', 'New surface on sound framing'],
              ['/deck-resurfacing-vs-replacement', 'Resurfacing vs Replacement', 'Decision framework with cost comparisons'],
              ['/deck-safety-inspection-checklist', 'Safety Inspection Checklist', 'NoVA-specific self-check'],
              ['/deck-cost-calculator', 'NoVA Deck Cost Calculator', 'Instant estimate'],
              ['/composite-deck-cost-northern-virginia', 'Composite Deck Cost', '2026 NoVA pricing'],
              ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK', 'Brand comparison'],
              ['/deck-permit-loudoun-county-virginia', 'Loudoun Permits', 'LOLA process'],
              ['/deck-permit-fairfax-county-virginia', 'Fairfax Permits', 'Building Development Division'],
              ['/deck-permit-prince-william-county-virginia', 'Prince William Permits', 'ePortal'],
              ['/team', 'Our Team', 'Meet the licensed crew'],
              ['/contact', 'Free Safety Inspection', 'On-site assessment, no obligation'],
            ].map(([href, title, desc]) => (
              <li key={href}>
                <Link href={href} style={{ display: 'block', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 8, textDecoration: 'none', color: 'inherit', height: '100%' }}>
                  <p style={{ fontWeight: 700, color: 'var(--color-primary)', margin: 0, marginBottom: '0.3rem' }}>{title}</p>
                  <p style={{ fontSize: '0.88rem', color: '#4a5568', margin: 0 }}>{desc}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SimpleCTA title="Schedule Your Free Deck Safety Inspection" buttonText="Request Free Inspection" link="/contact" />
      <RelatedGuides currentPath="/services/deck-repair" />
      <ContactHome />
    </main>
  );
}
