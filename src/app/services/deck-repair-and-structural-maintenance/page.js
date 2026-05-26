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
import RelatedGuides from '@/components/RelatedGuides';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import ServicesCallToAction from '@/components/ServicesCallToAction';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/services/deck-repair-and-structural-maintenance',
  title: 'Deck Repair Near Me Northern VA | Structural Deck Contractor',
  description: 'Need deck repair near you in Northern Virginia? We fix rotted posts, sinking decks, railings, ledgers, and failed inspections. 5.0 Google rated.',
  image: '/images/img04.jpeg',
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
    a: "Minor repairs start at $1,500. Major structural post replacement typically ranges from $2,500 to $5,000 depending on the number of posts and accessibility."
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
      "We are experts at code-compliant remediation. We work directly with the inspection reports from Fairfax, Loudoun, and Prince William counties to perform 'surgical' repairs that meet or exceed local standards. From fascia-mounted railing conversions to lateral load connector installations, we know exactly what local inspectors are looking for. Our goal is to get your project across the finish line with a 5-star final approval."
    ]
  }
];

export default function DeckRepairPage() {
  return (
    <main>
      <ServiceSchema 
        name="Deck Repair & Structural Maintenance" 
        description="Specialized structural deck repair in Northern Virginia. Fix rotted posts, sinking decks, and code violations. Expert remediation for failed inspections." 
        price="2500" 
      />
      <ServicesHeader 
        subtext="Structural Integrity Specialist"
        title="Deck Repair & Structural Maintenance"
        description="Don't let rot compromise your safety. We specialize in high-stakes structural repairs, post replacements, and code compliance for Northern Virginia homeowners."
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
          <Link href="/education/deck-stair-construction-diagram" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>deck stair construction diagram</Link>
          {' '}for stringers, treads, risers and landing support, then compare the house attachment against our{' '}
          <Link href="/education/ledger-board-flashing-deck-attachment-virginia" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>ledger board flashing guide</Link>.
        </p>
        <p style={{ fontSize: '18px', color: '#444' }}>
          If either area is loose, rotted, over-notched, under-supported or missing proper exterior hardware, the safer path may be structural repair or replacement instead of surface-only work.
        </p>
      </section>

      <ServiceInclusions 
        title="Our Structural Repair Capabilities"
        description="We focus on the critical load-bearing components that keep your deck safe for your family and guests."
        items={repairInclusions}
      />

      <ProcessSteps />

      <ServicesFAQ canonicalUrl="https://ldndecks.com/services/deck-repair-and-structural-maintenance"
        title="Deck Repair & Safety FAQs"
        faqs={repairFAQs}
      />

      <ServiceAreasGrid />

      <ServicesCallToAction />

      <RelatedGuides currentPath="/services/deck-repair-and-structural-maintenance" />
      <ContactHome />
    </main>
  );
}
