import React from 'react';
import Link from 'next/link';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ProcessSteps from '@/components/ProcessSteps';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import ServiceSchema from '@/components/ServiceSchema';
import JsonLd from '@/components/JsonLd';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import ServicesCallToAction from '@/components/ServicesCallToAction';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import GeoAnswerBlock from '@/components/GeoAnswerBlock';
import DecisionSupportSection from '@/components/DecisionSupportSection';
import ArticleSchema from '@/components/ArticleSchema';

export const metadata = buildMetadata({
  path: '/services/deck-repair',
  title: 'Deck Repair Near Me Northern VA | Structural Deck Contractor',
  description: 'Need deck repair near you in Northern Virginia? We inspect rotted posts, sinking decks, railings, ledgers, and failed-inspection issues before recommending repair or replacement.',
  image: '/social/deck-repair-social.png',
});

const repairInclusions = [
  {
    title: "Structural Post Replacement",
    desc: "We replace rotted 6x6 support posts with code-compliant, pressure-treated lumber and reinforced concrete footings."
  },
  {
    title: "Sinking Deck Leveling",
    desc: "Advanced shimming and structural reinforcement to correct sinking or uneven decks in Loudoun and Fairfax soils."
  },
  {
    title: "Inspection Failure Fixes",
    desc: "Surgical repairs to railings, stairs, and ledgers specifically designed to meet strict Northern Virginia county building codes."
  },
  {
    title: "Rot Prevention & Sealing",
    desc: "Surface preparation and appropriate sealing for exposed framing where it is part of the approved repair scope."
  },
  {
    title: "Joist & Ledger Repair",
    desc: "Correction or reinforcement of critical connection points where the deck meets the house, based on inspection findings."
  }
];

const repairFAQs = [
  {
    q: "Can a rotted deck post be replaced without tearing down the whole deck?",
    a: "Yes. We use temporary structural bracing to support the deck while we remove the rotted post and install a new, code-compliant support system."
  },
  {
    q: "How much does structural deck repair cost in Northern Virginia?",
    a: "Structural deck repair pricing should be confirmed after an on-site inspection. The final scope depends on what the inspection finds in the posts, ledger, joists, stairs, railings, access, and any permit or inspection requirements. Loudoun Decks separates repair recommendations from replacement recommendations so you can compare the safest practical option before approving work."
  },
  {
    q: "My deck failed inspection. Can you help me pass?",
    a: "Yes. We review the inspector's notes and prepare a repair scope for the items needed to address Loudoun, Fairfax, or other Northern Virginia county requirements."
  },
  {
    q: "How do I know if my deck is structurally unsafe?",
    a: "Warning signs include a 'spongy' feel when walking, visible rot at the base of posts, rusted ledger flashing, or railings that wobble when pushed."
  }
];

const repairDecisionColumns = [
  {
    title: "Repair is the right first quote when",
    items: [
      "The issue is isolated to one post, one railing run, one stair set, a localized ledger detail, or a short list of failed inspection items.",
      "The deck is still level, the main framing is not soft or bouncy, and the load path can be corrected without rebuilding the whole structure.",
      "You need a written structural repair scope before deciding whether resurfacing or replacement is necessary.",
    ],
  },
  {
    title: "Do not buy a patch when",
    items: [
      "Multiple joists, beams, posts, stairs, or the ledger connection show rot, movement, or unsafe fastening.",
      "The deck is pulling away from the house, footings are shifting, or the frame cannot safely support new composite boards.",
      "Repair costs are trending toward replacement without resetting permits, framing, railings, and long-term deck value.",
    ],
  },
  {
    title: "Best next step",
    items: [
      "Inspect stairs, ledger flashing, posts, footings, and railings before choosing repair, resurfacing, or replacement.",
      "Use the calculator and decision guides for planning, then request a site-specific written scope.",
      "Keep proof claims out of the public case-study layer until photos, scope, warranty terms, and outcomes are verified.",
    ],
  },
];

const repairGeoAnswers = [
  {
    id: 'when-deck-repair-is-enough',
    q: 'When is deck repair enough?',
    a: 'Deck repair may be enough when damage is isolated to specific boards, rail sections, fasteners, stairs, or limited framing members and the rest of the structure is sound. The key question is whether the deck can be repaired safely without hiding deeper ledger, footing, joist, or beam problems.',
  },
  {
    id: 'when-repair-becomes-replacement',
    q: 'When should repair turn into replacement?',
    a: 'Repair should turn into replacement when structural problems are widespread, repeated, or tied to the deck main load path. Serious ledger issues, failing footings, extensive rot, unstable stairs, leaning rail posts, or major framing movement usually point toward replacement or substantial rebuilding rather than cosmetic repair.',
  },
  {
    id: 'common-structural-deck-repairs',
    q: 'What structural deck repairs are common?',
    a: 'Common structural deck repairs include joist replacement, beam reinforcement, stair repair, railing-post correction, ledger flashing repairs, fastener replacement, footing evaluation, and localized framing correction. The right repair depends on how the deck was built, how water moved through the structure, and whether the issue affects safety.',
  },
  {
    id: 'deck-repair-permits',
    q: 'Do deck repairs need permits?',
    a: 'Some deck repairs may not need permits when they are minor and non-structural, but structural repairs can trigger permit or inspection requirements. Ledger work, footings, stairs, guardrails, framing changes, and major load-bearing corrections should be reviewed carefully under local county requirements before work begins.',
  },
  {
    id: 'deck-repair-timeline',
    q: 'How fast can deck repair be completed?',
    a: 'Deck repair timing depends on inspection findings, material availability, weather, permit needs, and whether the damage is cosmetic or structural. Small repairs may be completed faster, while ledger, footing, stair, or framing work needs more careful planning because safety and code compliance matter more than speed.',
  },
  {
    id: 'damaged-deck-safety',
    q: 'Is it safe to use a damaged deck?',
    a: 'A damaged deck should be treated cautiously until the cause is known. Loose railings, soft boards, sagging stairs, ledger separation, severe rot, or visible movement can indicate structural risk. Homeowners should limit use and schedule an inspection before assuming the deck is safe for normal activity.',
  },
];

const structuralRepairTriageSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://ldndecks.com/services/deck-repair#structural-repair-triage",
  name: "Northern Virginia structural deck repair triage path",
  description: "Inspection-first path for unsafe stairs, loose railings, ledger rot, failed inspections, and repair-vs-replacement decisions.",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: 7,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Identify the visible safety symptom",
      url: "https://ldndecks.com/deck-safety-inspection-checklist"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Review stair construction and common stair failures",
      url: "https://ldndecks.com/education/deck-stair-construction-diagram"
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Check ledger flashing and deck-to-house attachment risk",
      url: "https://ldndecks.com/education/ledger-board-flashing-deck-attachment-virginia"
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Estimate footing and support review needs",
      url: "https://ldndecks.com/tools/deck-footing-depth-calculator-virginia"
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Compare repair, resurfacing, and replacement paths",
      url: "https://ldndecks.com/deck-resurfacing-vs-replacement"
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Confirm permit-sensitive structural work by county",
      url: "https://ldndecks.com/deck-permit-fairfax-county-virginia"
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Request a structural repair inspection and written scope",
      url: "https://ldndecks.com/get-estimate"
    }
  ]
};

const expansionSections = [
  {
    title: "Structural Integrity: Beyond Just Surface Aesthetics",
    paragraphs: [
      "Many Northern Virginia homeowners focus on the 'surface' of their deck, but the real danger often lies beneath. In humid climates like Ashburn, Leesburg, and Herndon, moisture trapped against wood structural members leads to 'dry rot'—a fungus that eats away at the load-bearing capacity of your deck. A deck that looks beautiful on top can be a safety hazard underneath if the 6x6 posts or ledger boards are compromised.",
      "Loudoun Decks serves Loudoun, Fairfax, and Prince William counties with inspection-first structural repair planning. Our repair process looks beyond a quick surface fix and focuses on the specific load-path issue found during inspection. Whether the scope is a single rotted post or a larger joist-system correction, safety and local code requirements guide the recommendation.",
      "If you've noticed your deck is sinking, pulling away from the house, or feels 'bouncy' during social gatherings, it's time for a professional structural assessment. We provide written repair scopes after inspection so homeowners can compare repair, resurfacing, and replacement options."
    ]
  },
  {
    title: "Fixing Failed Inspections in Fairfax and Loudoun Counties",
    paragraphs: [
      "One of the most stressful situations a homeowner can face is a failed county building inspection. Whether it was a DIY project or a previous contractor's mistake, a red tag can stall your property sale or prevent you from using your outdoor space. Northern Virginia counties pay close attention to railing height, stair rise and run, and ledger board attachment.",
      "We review inspection reports from Fairfax, Loudoun, and Prince William counties and prepare targeted repairs intended to address the listed issues. From fascia-mounted railing conversions to lateral load connector installations, the goal is a clear repair scope that supports the next inspection step."
    ]
  }
];

export default function DeckRepairPage() {
  return (
    <main>
      <JsonLd data={structuralRepairTriageSchema} />
      <WebPageSchema dateModified="2026-09-04" url="https://ldndecks.com/services/deck-repair" name="Deck Repair Near Me Northern VA | Structural Deck Contractor" description="Need deck repair near you in Northern Virginia? We inspect rotted posts, sinking decks, railings, ledgers, and failed-inspection issues before recommending repair or replacement." speakable />
      <ArticleSchema
        title="Deck Repair in Northern Virginia"
        description="Inspection-first deck repair guide for deciding when an unsafe or aging deck needs targeted structural repair, resurfacing, or full replacement."
        path="/services/deck-repair"
        image="/social/deck-repair-social.png"
        datePublished="2026-06-02"
        dateModified="2026-09-04"
        speakable={[
          '[data-speakable]',
          '#deck-repair-answer',
          '#deck-repair-triage',
          '#deck-repair-structural-guides',
          '#deck-repair-decision-resources',
        ]}
        citableParts={[
          {
            id: 'deck-repair-answer',
            name: 'Deck Repair Quick Answer',
            text: 'Deck repair is enough when the issue is isolated to a post, railing, stair, ledger-flashing correction, or failed inspection item on an otherwise sound structure.',
          },
          ...repairGeoAnswers.map((item) => ({
            id: item.id,
            name: item.q,
            text: item.a,
          })),
          {
            id: 'deck-repair-triage',
            name: 'Deck Repair Triage Decision Support',
            text: 'Homeowners should inspect the load path before choosing repair, resurfacing, or replacement, and avoid cosmetic patching when rot, movement, weak footings, or unsafe ledger attachment affect the whole structure.',
          },
          {
            id: 'deck-repair-structural-guides',
            name: 'Structural Guides Before Deck Repair',
            text: 'The page routes repair decisions through stair calculators, stair construction diagrams, stair safety checks, common inspection failures, ledger flashing guidance, and footing-depth planning.',
          },
          {
            id: 'deck-repair-decision-resources',
            name: 'Deck Repair Decision Resources',
            text: 'Repair decision links connect homeowners to stair code, ledger flashing, footing code, resurfacing versus replacement, inspection service, deck replacement, deck resurfacing, permit guides, reviews, and estimate routing.',
          },
        ]}
      />
      <ServiceSchema
        name="Deck Repair & Structural Maintenance"
        description="Inspection-first structural deck repair in Northern Virginia for rotted posts, sinking decks, unsafe railings, ledger issues, and failed-inspection items."
        url="https://ldndecks.com/services/deck-repair"
        category="Deck Repair"
        relatedServices={['https://ldndecks.com/services/deck-inspection', 'https://ldndecks.com/services/deck-replacement', 'https://ldndecks.com/services/deck-resurfacing']}
      />
      <ServicesHeader
        subtext="Structural Integrity Specialist"
        title="Deck Repair & Structural Maintenance"
        description="Do not let rot, loose railings, or failing stairs go unreviewed. We inspect structural repair issues, post replacements, and code-sensitive corrections for Northern Virginia homeowners."
      />

      <div id="deck-repair-answer" data-speakable="deck-repair-answer">
        <GeoAnswerBlock
          question="When is deck repair enough, and when does repair become replacement?"
          answer="Deck repair is enough when the problem is isolated: one rotted post, a loose railing, a stair issue, a ledger-flashing correction, or a failed inspection item on an otherwise sound structure. Repair becomes replacement when rot, movement, poor footings, weak ledger attachment, bouncy framing, or unsafe stairs affect the overall load path. Loudoun Decks inspects the structure first so the recommendation is repair, resurfacing, or replacement based on safety rather than guesswork."
          facts={[
            'Repair path: isolated structural or safety issue',
            'Replacement path: system-wide load-path or framing failure',
            'Proof status: no repair outcome should be cited as a case study without source records',
          ]}
          links={[
            { href: '/deck-resurfacing-vs-replacement', label: 'Resurface vs replace' },
            { href: '/services/deck-replacement', label: 'Deck replacement' },
            { href: '/deck-safety-inspection-checklist', label: 'Deck safety checklist' },
          ]}
        />
      </div>

      <section style={{ padding: '2.5rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {repairGeoAnswers.map((item) => (
              <section key={item.id} id={item.id} data-speakable={item.id} style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: '1rem', background: '#fbfdff' }}>
                <h2 style={{ fontSize: '1.08rem', fontWeight: 800, marginBottom: '0.55rem' }}>{item.q}</h2>
                <p style={{ margin: 0, lineHeight: 1.65, color: '#334155' }}>{item.a}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <div id="deck-repair-triage" data-speakable="deck-repair-triage">
        <DecisionSupportSection
          eyebrow="Repair triage"
          title="When deck repair is smart, and when it is not"
          intro="This page is for inspection-first structural repair, not cosmetic patching over a failing frame. The goal is to help Northern Virginia homeowners avoid paying for the wrong scope before a contractor has checked the load path."
          columns={repairDecisionColumns}
          links={[
            { href: '/deck-footing-code-northern-virginia', label: 'Check footing code basics' },
            { href: '/tools/deck-load-calculator-virginia', label: 'Check deck load planning' },
            { href: '/tools/deck-beam-span-calculator-virginia', label: 'Review beam span planning' },
            { href: '/get-estimate', label: 'Request an inspection-first scope' },
          ]}
        />
      </div>

      <ServiceMain
        subtitle="Safety First"
        title="Expert Structural Deck Repair Contractor"
        description="From rotted support posts to failed county inspections, we provide the technical expertise needed to restore your deck's safety and integrity."
        listItems={[
          "Replacement of rotted 6x6 support posts",
          "Correction of sinking or uneven decks",
          "Remediation for failed building inspections",
          "Ledger board and joist reinforcement",
          "Railing and stair structural repairs",
          "Rot prevention and wood sealing",
          "Inspection-first written repair scope"
        ]}
        image1="/images/img04.jpeg"
        image2="/images/img53.jpeg"
      />

      <ServiceContentExpansion sections={expansionSections} />

      <section id="deck-repair-structural-guides" data-speakable="deck-repair-structural-guides" style={{ maxWidth: 980, margin: '0 auto', padding: '20px 20px 60px', lineHeight: 1.75 }}>
        <h2 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '16px', color: '#222' }}>Structural Guides Before You Repair</h2>
        <p style={{ fontSize: '18px', color: '#444', marginBottom: '14px' }}>
          The fastest way to separate a small repair from a true structural risk is to inspect the stair system and the deck-to-house connection. Review our{' '}
          <Link href="/tools/deck-stair-calculator" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Virginia deck stair calculator</Link>
          {' '}to model rise, run and step count, compare it with the{' '}
          <Link href="/education/deck-stair-construction-diagram" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>deck stair construction diagram</Link>
          {' '}for stringers, treads, risers and landing support, use the{' '}
          <Link href="/education/deck-stair-safety-inspection-checklist" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>deck stair safety checklist</Link>
          {' '}to spot red flags, review{' '}
          <Link href="/education/common-deck-stair-inspection-failures-virginia" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>common stair inspection failures</Link>
          {', then compare the house attachment against our '}
          <Link href="/education/ledger-board-flashing-deck-attachment-virginia" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>ledger board flashing guide</Link>.
        </p>
        <p style={{ fontSize: '18px', color: '#444' }}>
          If either area is loose, rotted, over-notched, under-supported or missing proper exterior hardware, the safer path may be structural repair or replacement instead of surface-only work. When posts, piers or settlement are part of the concern, use the{' '}
          <Link href="/tools/deck-footing-depth-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Deck Footing Depth Calculator Virginia</Link>
          {' '}to review footing depth, diameter and frost-depth planning before the repair conversation.
        </p>
      </section>

      <ServiceInclusions
        title="Our Structural Repair Capabilities"
        description="We focus on the critical load-bearing components that keep your deck safe for your family and guests."
        items={repairInclusions}
      />

      <ProcessSteps />

      <ServicesFAQ canonicalUrl="https://ldndecks.com/services/deck-repair"
        title="Deck Repair & Safety FAQs"
        faqs={repairFAQs}
      />

      <ServiceAreasGrid />

      <ServicesCallToAction />

      <section id="deck-repair-decision-resources" data-speakable="deck-repair-decision-resources" style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Repair Decision Resources</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            ['/education/deck-stair-code-rise-run-virginia', 'Virginia Deck Stair Code Guide'],
            ['/education/ledger-board-flashing-deck-attachment-virginia', 'Ledger Board Flashing Guide'],
            ['/deck-footing-code-northern-virginia', 'Deck Footing Code in Northern Virginia'],
            ['/deck-resurfacing-vs-replacement', 'Resurfacing vs Full Replacement'],
            ['/services/deck-inspection', 'Professional Deck Inspection Service'],
            ['/deck-repair-loudoun-county', 'Deck Repair in Loudoun County'],
            ['/services/deck-replacement', 'Full Deck Replacement'],
            ['/services/deck-resurfacing', 'Deck Resurfacing'],
            ['/deck-cost-calculator', 'Free Deck Cost Calculator'],
            ['/deck-permit-fairfax-county-virginia', 'Fairfax County Deck Permit Guide'],
            ['/deck-permit-loudoun-county-virginia', 'Loudoun County Deck Permit Guide'],
            ['/reviews', 'Customer Reviews'],
            ['/bbb-accredited-deck-builder-virginia', 'BBB Accredited Deck Builder'],
            ['/get-estimate', 'Request a Structural Repair Estimate'],
          ].map(([href, text]) => (
            <li key={href} style={{ marginBottom: '0.5rem' }}>
              <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link>
            </li>
          ))}
        </ul>
      </section>

      <RelatedGuides currentPath="/services/deck-repair" category="ai-retrieval" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-09-04" />

      <ContactHome />
    </main>
  );
}
