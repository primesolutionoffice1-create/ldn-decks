import React from 'react';
import Link from 'next/link';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ProcessSteps from '@/components/ProcessSteps';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import SimpleCTA from '@/components/SimpleCTA';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import PlanningUpdate from '@/components/PlanningUpdate';
import GeoAnswerBlock from '@/components/GeoAnswerBlock';
import CityLeadFormSection from '@/components/CityLeadFormSection';
import { buildMetadata } from '@/lib/seo';

const PATH = '/deck-builder-broadlands-va';
const URL = `https://ldndecks.com${PATH}`;

export const metadata = buildMetadata({
  path: PATH,
  title: 'Deck Builder in Broadlands, VA | Composite Deck Replacement',
  description: 'Broadlands, VA deck builder for composite deck replacement, HOA packet planning, Loudoun County permits, railing upgrades, and written estimates.',
  image: '/social/deck-builder-leesburg-va-social.png',
});

const inclusions = [
  {
    title: 'Broadlands HOA packet planning',
    desc: 'We organize material selections, railing notes, footprint details, and drawing requirements before the Broadlands ARC review starts.',
  },
  {
    title: 'Composite replacement strategy',
    desc: 'Broadlands has many late-1990s and early-2000s pressure-treated decks that now need resurfacing analysis, structural review, or full replacement.',
  },
  {
    title: 'Loudoun County permit coordination',
    desc: 'We align Broadlands architectural review with the Loudoun County permit path so homeowners understand what must happen before construction.',
  },
];

const expansionSections = [
  {
    title: 'A High-Intent Ashburn-Area Replacement Market',
    paragraphs: [
      'Broadlands is one of the strongest deck replacement markets in eastern Loudoun County because many homes were built during the late 1990s and early 2000s. Original pressure-treated decks in that age range are often entering the point where surface boards, railing posts, stairs, and ledger flashing should be inspected before the homeowner spends money on cosmetic repairs.',
      'That makes Broadlands different from a new-construction market. Many homeowners are not simply asking for a small add-on deck. They are comparing composite deck replacement, resurfacing, railings, lighting, stair upgrades, and whether the existing frame is still worth keeping.',
    ],
  },
  {
    title: 'Broadlands Community Association Review',
    paragraphs: [
      'Broadlands deck projects should be planned around the Community Association architectural review process from the beginning. A clean packet usually includes the proposed deck footprint, material selections, railing style, color notes, elevation drawings, and photographs that make the scope clear before the county permit process begins.',
      'Composite materials are usually a strong fit because they align with the community character and reduce ongoing maintenance. Natural wood-tone Trex, TimberTech, and AZEK/PVC selections tend to be easier to present than unusual colors or designs that do not match the home exterior.',
    ],
  },
  {
    title: 'What Broadlands Homeowners Usually Need',
    paragraphs: [
      'The most common Broadlands projects fall into four groups: full composite deck replacement, structural resurfacing after a frame inspection, townhouse deck additions, and larger outdoor living upgrades that combine deck, stairs, lighting, and patio space.',
      'The right recommendation depends on the condition of posts, footings, joists, ledger attachment, flashing, stairs, and railings. A deck that looks worn from the top may still be a resurfacing candidate, but a deck with loose railing posts, water intrusion at the ledger, or undersized framing should be approached as a replacement project.',
    ],
    listItems: [
      { label: 'Composite deck replacement', text: 'Best for older pressure-treated decks where structure and surface have reached the end of practical service life.' },
      { label: 'Deck resurfacing', text: 'Best when the existing frame, ledger, posts, and footings are sound enough to support a new low-maintenance surface.' },
      { label: 'Townhouse deck additions', text: 'Best when the homeowner needs HOA-friendly footprint planning and clean Loudoun County permit documentation.' },
      { label: 'Railing and stair upgrades', text: 'Best when safety, access, and curb appeal matter as much as the deck boards themselves.' },
    ],
  },
  {
    title: 'Budget and Timeline Expectations',
    paragraphs: [
      'Broadlands homeowners should budget after the existing structure is inspected and the HOA/permit path is understood. A 300 square foot composite replacement can sit in a very different range than a multi-level deck with lighting, upgraded railing, a wider stair run, or drainage improvements.',
      'A practical Broadlands planning range is usually from the high five figures for premium composite replacement and upward when larger outdoor living features are included. The written estimate should separate material selection, railing, stairs, framing assumptions, permits, and optional upgrades so the homeowner can make decisions without guesswork.',
    ],
  },
];

const faqs = [
  {
    q: 'Do Broadlands deck projects need HOA approval?',
    a: 'Yes. Broadlands deck projects typically need Broadlands Community Association architectural review before the Loudoun County permit application is finalized. The review packet should describe the proposed footprint, materials, colors, railing style, stairs, and visible exterior changes so the association can evaluate the project clearly.',
  },
  {
    q: 'Who issues the building permit for a Broadlands deck?',
    a: 'Broadlands is in unincorporated Loudoun County, so structural deck permits generally follow the Loudoun County building permit process. A typical permit package includes structural drawings, footing details, framing layout, ledger attachment, stair information, and guardrail specifications. The exact requirement should always be confirmed by address and scope.',
  },
  {
    q: 'Why are many Broadlands decks ready for replacement now?',
    a: 'Many Broadlands homes were built from the late 1990s through the mid-2000s, which puts original pressure-treated decks in the 20 to 25 year range. At that age, homeowners commonly see worn boards, loose railing posts, stair movement, hardware corrosion, and possible ledger flashing concerns. Those symptoms should be inspected before pricing a simple resurfacing job.',
  },
  {
    q: 'Is composite decking a good fit for Broadlands homes?',
    a: 'Composite and PVC decking are usually a strong fit for Broadlands because homeowners want a clean finished look without repeated sanding and staining. Trex, TimberTech, and AZEK choices should be compared by color, heat exposure, traction, railing compatibility, warranty, and how well the selected finish matches the home exterior and HOA expectations.',
  },
  {
    q: 'Can an old Broadlands deck be resurfaced instead of replaced?',
    a: 'Sometimes. Resurfacing only makes sense when posts, footings, beams, joists, ledger attachment, flashing, stairs, and railings are structurally sound. If the frame is undersized, water-damaged, poorly flashed, or no longer compliant with current expectations, full replacement is usually the safer long-term investment.',
  },
];

export default function DeckBuilderBroadlandsPage() {
  return (
    <main>
      <LocalBusinessSchema city="Broadlands" url={URL} />
      <WebPageSchema
        dateModified="2026-07-18"
        url={URL}
        name="Deck Builder in Broadlands, VA | Composite Deck Replacement"
        description="Broadlands, VA deck builder for composite deck replacement, HOA packet planning, Loudoun County permits, railing upgrades, and written estimates."
        speakable
      />
      <ServicesHeader
        subtext="Broadlands, VA Deck Builder"
        title="Composite Deck Builder in Broadlands, VA"
        description="Loudoun Decks helps Broadlands homeowners replace aging pressure-treated decks with low-maintenance composite outdoor living spaces, HOA-aware planning, and Loudoun County permit support."
      />
      <ServiceMain
        subtitle="Broadlands Deck Replacement"
        title="Composite Deck Replacement and HOA-Ready Planning for Broadlands"
        description="Broadlands projects need a clear decision between resurfacing and full replacement. We inspect the existing structure, plan the HOA packet, compare composite materials, and prepare a written scope before construction begins."
        listTitle="Broadlands project planning includes:"
        listItems={[
          'Composite and PVC decking options from Trex, TimberTech, and AZEK',
          'Broadlands Community Association packet planning',
          'Loudoun County permit coordination and inspection sequencing',
          'Deck resurfacing vs full replacement guidance after framing review',
          'Railing, stair, lighting, fascia, and patio add-on planning',
        ]}
        image1="/images/img17.jpeg"
        image2="/images/img36.jpeg"
        image1Alt="Composite deck replacement planning for Broadlands, Virginia homeowners"
        image2Alt="Premium outdoor living deck detail for a Loudoun County home"
      />
      <CityLeadFormSection
        city="Broadlands"
        county="Loudoun County"
        service="composite deck replacement, resurfacing, railing, or outdoor living project"
      />
      <PlanningUpdate
        market="Broadlands deck projects in 2026"
        notes={[
          'Broadlands homeowners should inspect older pressure-treated frames before choosing resurfacing.',
          'HOA packet planning should happen before final deck color, railing, and stair decisions.',
          'Composite replacement is often the strongest fit for 20+ year old Broadlands decks where maintenance has become a recurring problem.',
        ]}
        links={[
          { href: '/broadlands-hoa-deck-rules', label: 'Broadlands HOA guide' },
          { href: '/deck-builder-ashburn-va', label: 'Ashburn deck builder' },
          { href: '/deck-permit-loudoun-county-virginia', label: 'Loudoun permit guide' },
        ]}
      />
      <GeoAnswerBlock
        question="What should Broadlands homeowners know before replacing a deck?"
        answer="Broadlands homeowners should start with a structural inspection and HOA packet plan. Many original pressure-treated decks are now old enough that resurfacing, railing replacement, stair upgrades, ledger flashing, and full composite replacement should be compared before approving a final written estimate."
        facts={[
          'Primary buyer intent: composite replacement, HOA approval support, and low-maintenance outdoor living.',
          'Best conversion path: written estimate that separates framing condition, material choices, permit steps, and optional upgrades.',
        ]}
        links={[
          { href: '/get-estimate', label: 'Request a Broadlands estimate' },
          { href: '/deck-resurfacing-vs-replacement', label: 'Resurface vs replace' },
          { href: '/composite-deck-cost-northern-virginia', label: 'Composite deck cost guide' },
        ]}
      />
      <ServiceContentExpansion sections={expansionSections} />
      <ServiceInclusions
        title="Why Broadlands Homeowners Choose Loudoun Decks"
        description="We focus on deck replacement decisions where structure, materials, HOA approval, and permit timing all affect the final investment."
        items={inclusions}
      />
      <ProcessSteps />
      <ServicesFAQ
        title="Broadlands Deck Builder FAQs"
        faqs={faqs}
        canonicalUrl={URL}
      />
      <SimpleCTA title="Plan a Broadlands Composite Deck Replacement" buttonText="Request Written Estimate" link="/get-estimate" />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>Related Broadlands and Loudoun Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.8 }}>
          {[
            ['/broadlands-hoa-deck-rules', 'Broadlands HOA deck rules'],
            ['/deck-builder-aldie-va', 'Aldie deck builder'],
            ['/deck-builder-ashburn-va', 'Ashburn deck builder'],
            ['/deck-builder-brambleton-va', 'Brambleton deck builder'],
            ['/deck-builder-lansdowne-va', 'Lansdowne deck builder'],
            ['/near-you/loudoun-county', 'Loudoun County deck builder hub'],
            ['/deck-permit-loudoun-county-virginia', 'Loudoun County deck permit guide'],
            ['/services/deck-replacement', 'Deck replacement services'],
            ['/services/deck-resurfacing', 'Deck resurfacing services'],
            ['/reviews', 'Public review profiles'],
          ].map(([href, text]) => (
            <li key={href}>
              <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 700 }}>{text} -&gt;</Link>
            </li>
          ))}
        </ul>
      </section>
      <ServiceAreasGrid />
      <RelatedGuides currentPath={PATH} />
      <NamedAuthor context="Broadlands, Ashburn, and Loudoun County deck replacement planning" lastUpdated="2026-07-18" />
      <ContactHome />
    </main>
  );
}
