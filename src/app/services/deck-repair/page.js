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
    desc: "Sanding and industrial-grade sealing for exposed framing to prevent future wood rot and carpenter bee damage."
  },
  {
    title: "Joist & Ledger Repair",
    desc: "Reinforcement of critical connection points where your deck meets your house to ensure maximum safety."
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
    a: "Absolutely. We specialize in fixing 'red-tagged' projects. We review the inspector's notes and perform the exact repairs needed to satisfy Loudoun or Fairfax county requirements."
  },
  {
    q: "How do I know if my deck is structurally unsafe?",
    a: "Warning signs include a 'spongy' feel when walking, visible rot at the base of posts, rusted ledger flashing, or railings that wobble when pushed."
  }
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
      "Loudoun Decks is a trusted contractor serving Loudoun, Fairfax, and Prince William counties. We specialize in identifying these 'hidden' failures. Our structural repair process involves more than just a quick fix; we use engineered solutions that often make the deck stronger than it was when originally built. Whether it's replacing a single rotted post or reinforcing an entire joist system, we prioritize safety and code compliance above all else.",
      "If you've noticed your deck is sinking, pulling away from the house, or feels 'bouncy' during social gatherings, it's time for a professional structural assessment. We provide detailed reports and clear, fixed-price estimates for all necessary repairs."
    ]
  },
  {
    title: "Fixing Failed Inspections in Fairfax and Loudoun Counties",
    paragraphs: [
      "One of the most stressful situations a homeowner can face is a failed county building inspection. Whether it was a DIY project or a previous contractor's negligence, a 'red tag' can stall your property sale or prevent you from using your outdoor space. County codes in Northern Virginia are some of the strictest in the country, particularly regarding railing height, stair rise/run, and ledger board attachment.",
      "We are experts at code-compliant remediation. We work directly with the inspection reports from Fairfax, Loudoun, and Prince William counties to perform 'surgical' repairs that meet or exceed local standards. From fascia-mounted railing conversions to lateral load connector installations, we know exactly what local inspectors are looking for. Our goal is to get your project across the finish line with a clean final approval."
    ]
  }
];

export default function DeckRepairPage() {
  return (
    <main>
      <JsonLd data={structuralRepairTriageSchema} />
      <WebPageSchema dateModified="2026-06-02" url="https://ldndecks.com/services/deck-repair" name="Deck Repair Near Me Northern VA | Structural Deck Contractor" description="Need deck repair near you in Northern Virginia? We inspect rotted posts, sinking decks, railings, ledgers, and failed-inspection issues before recommending repair or replacement." speakable />
      <ServiceSchema
        name="Deck Repair & Structural Maintenance"
        description="Specialized structural deck repair in Northern Virginia. Fix rotted posts, sinking decks, and code violations. Expert remediation for failed inspections."
        url="https://ldndecks.com/services/deck-repair"
        category="Deck Repair"
        relatedServices={['https://ldndecks.com/services/deck-inspection', 'https://ldndecks.com/services/deck-replacement', 'https://ldndecks.com/services/deck-resurfacing']}
      />
      <ServicesHeader
        subtext="Structural Integrity Specialist"
        title="Deck Repair & Structural Maintenance"
        description="Don't let rot compromise your safety. We specialize in high-stakes structural repairs, post replacements, and code compliance for Northern Virginia homeowners."
      />

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
          "Licensed & Insured Class A Contractor"
        ]}
        image1="/images/img04.jpeg"
        image2="/images/img53.jpeg"
      />

      <ServiceContentExpansion sections={expansionSections} />

      <section style={{ maxWidth: 980, margin: '0 auto', padding: '20px 20px 60px', lineHeight: 1.75 }}>
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

      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Repair Decision Resources</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            ['/blog/how-to-restore-faded-composite-decking', 'How to Restore Faded Composite Decking'],
            ['/blog/why-composite-trex-decking-fades-sun-solutions', 'Why Composite and Trex Decking Fades in the Sun'],
            ['/blog/resurface-vs-replace-composite-deck-guide', 'Resurface vs Replace a Composite Deck'],
            ['/deck-resurfacing-vs-replacement', 'Resurfacing vs Full Replacement'],
            ['/blog/resurface-vs-replace-composite-deck-guide', 'When to Resurface vs Replace Composite Decking'],
            ['/blog/why-composite-trex-decking-fades-sun-solutions', 'Composite Deck Fading: Causes and Solutions'],
            ['/services/deck-replacement', 'Full Deck Replacement'],
            ['/services/deck-resurfacing', 'Deck Resurfacing'],
            ['/deck-cost-calculator', 'Free Deck Cost Calculator'],
            ['/deck-payment-estimator', 'Deck Payment Estimator'],
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

      <RelatedGuides currentPath="/services/deck-repair" category="structural-repair" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-06-01" />

      <ContactHome />
    </main>
  );
}
