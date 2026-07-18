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

const PATH = '/deck-builder-aldie-va';
const URL = `https://ldndecks.com${PATH}`;

export const metadata = buildMetadata({
  path: PATH,
  title: 'Deck Builder in Aldie, VA | Stone Ridge & Willowsford Decks',
  description: 'Aldie, VA deck builder for Stone Ridge, Willowsford, Route 50 communities, composite decks, screened porches, HOA packets, and Loudoun County permits.',
  image: '/social/deck-builder-leesburg-va-social.png',
});

const inclusions = [
  {
    title: 'Stone Ridge and Willowsford planning',
    desc: 'We plan deck materials, railing style, footprint, and HOA packet details around the review expectations of Aldie-area planned communities.',
  },
  {
    title: 'Premium composite and outdoor living design',
    desc: 'Aldie projects often fit Trex, TimberTech, and AZEK/PVC decking with screened porch, railing, lighting, stair, and patio upgrades.',
  },
  {
    title: 'Loudoun County permit coordination',
    desc: 'We align the HOA review path with Loudoun County structural permit requirements before the construction schedule is finalized.',
  },
];

const expansionSections = [
  {
    title: 'Aldie Is a Planned-Community Deck Market',
    paragraphs: [
      'Aldie deck demand is driven less by the historic crossroads village and more by the surrounding Route 50 growth corridor. Stone Ridge, Willowsford, Virginia Oaks, Kirkpatrick Farms, and nearby planned communities have thousands of homes where homeowners are now investing in low-maintenance composite decks, screened porches, railings, stairs, and larger backyard systems.',
      'That makes Aldie a strong high-intent market for premium deck work. Homeowners are often comparing HOA-approved composite materials, whether a deck should connect to a patio, how stairs affect the yard, and whether a screened porch or covered section should be planned at the same time as the deck.',
    ],
  },
  {
    title: 'Stone Ridge and Willowsford HOA Review',
    paragraphs: [
      'Stone Ridge projects need a clean architectural packet with the proposed footprint, material selections, railing details, colors, elevation drawings, and site context. The deck should be designed with the association review in mind before the homeowner chooses final colors.',
      'Willowsford is more distinctive. Many homes have farmhouse, craftsman, or estate-style architecture, and material choices should support that character. Warm natural composite colors, traditional railing proportions, and careful screened porch integration are usually stronger fits than generic deck packages.',
    ],
  },
  {
    title: 'What Aldie Homeowners Usually Build',
    paragraphs: [
      'The most common serious Aldie inquiries involve new composite deck additions, composite replacement of builder-grade pressure-treated decks, deck and patio combinations, screened porches, and multi-zone outdoor living plans for larger lots.',
      'Some Aldie-area homes sit on flatter planned-community lots, while others move toward rural or semi-rural conditions. That affects stair placement, privacy, drainage, patio integration, and whether the project should remain a simple deck or become a larger outdoor room.',
    ],
    listItems: [
      { label: 'Composite deck additions', text: 'Best for newer planned-community homes that were delivered with a small patio or no usable deck.' },
      { label: 'Deck replacement', text: 'Best when older builder-grade pressure-treated structures are no longer worth repairing repeatedly.' },
      { label: 'Screened porch combinations', text: 'Best for families who want shade, insect protection, and a longer outdoor season.' },
      { label: 'Deck and patio systems', text: 'Best for larger Aldie yards where grilling, dining, seating, and fire features need separate zones.' },
    ],
  },
  {
    title: 'Budget and Timeline Expectations',
    paragraphs: [
      'Aldie homeowners should budget after the HOA path, Loudoun County permit requirements, site access, material choice, railing system, stairs, and any covered or screened structure are understood. A Stone Ridge deck addition and a Willowsford screened porch combination can sit in very different ranges even if the deck footprint looks similar.',
      'A practical planning range for many Aldie composite deck projects starts in the high five figures and increases when premium PVC decking, screened structures, lighting, patios, wider stairs, or engineered framing are included. A written estimate should separate the must-have scope from optional upgrades so the homeowner can approve the right investment level.',
    ],
  },
];

const faqs = [
  {
    q: 'Do Aldie deck projects need HOA approval?',
    a: 'Most Aldie-area deck projects need HOA or architectural review because many homes are in planned communities such as Stone Ridge, Willowsford, Virginia Oaks, or Kirkpatrick Farms. The packet should usually include the proposed footprint, drawings, material selections, colors, railing details, and photos before the Loudoun County permit path begins.',
  },
  {
    q: 'Who issues the building permit for an Aldie deck?',
    a: 'Aldie-area deck permits generally follow the Loudoun County building permit process because most properties are in unincorporated Loudoun County. The permit package usually includes structural drawings, footing details, framing layout, ledger attachment, stair information, and guardrail specifications. Requirements should always be confirmed by address and final scope.',
  },
  {
    q: 'Is composite decking a good fit for Stone Ridge and Willowsford?',
    a: 'Yes. Composite and PVC decking are strong fits for Stone Ridge and Willowsford because homeowners want low-maintenance outdoor spaces that still match the community character. Trex, TimberTech, and AZEK choices should be compared by color, heat exposure, texture, railing compatibility, warranty, and HOA presentation quality.',
  },
  {
    q: 'Should Aldie homeowners build a deck, screened porch, or deck and patio combination?',
    a: 'The answer depends on how the family wants to use the yard. A deck works well for elevated dining and grilling, a screened porch adds shade and insect protection, and a deck plus patio system creates separate zones for seating, fire features, and entertaining. Larger Aldie lots often support a combined outdoor living plan.',
  },
  {
    q: 'How should an Aldie homeowner compare resurfacing vs full replacement?',
    a: 'The decision should start with the structure. If posts, footings, beams, joists, ledger attachment, flashing, stairs, and railings are sound, resurfacing may be realistic. If the frame is undersized, water-damaged, poorly flashed, or not a good fit for the new layout, full replacement is usually the better long-term investment.',
  },
];

export default function DeckBuilderAldiePage() {
  return (
    <main>
      <LocalBusinessSchema city="Aldie" url={URL} />
      <WebPageSchema
        dateModified="2026-07-18"
        url={URL}
        name="Deck Builder in Aldie, VA | Stone Ridge & Willowsford Decks"
        description="Aldie, VA deck builder for Stone Ridge, Willowsford, Route 50 communities, composite decks, screened porches, HOA packets, and Loudoun County permits."
        speakable
      />
      <ServicesHeader
        subtext="Aldie, VA Deck Builder"
        title="Premium Deck Builder in Aldie, VA"
        description="Loudoun Decks plans composite decks, screened porches, and outdoor living spaces for Aldie homeowners in Stone Ridge, Willowsford, and the Route 50 corridor with HOA-aware planning and Loudoun County permit support."
      />
      <ServiceMain
        subtitle="Aldie Outdoor Living"
        title="Composite Decks, Screened Porches, and HOA-Ready Planning for Aldie"
        description="Aldie projects need a clear plan for community review, county permits, materials, stairs, railing, and how the new outdoor space connects to the yard. We turn those details into a written scope before construction begins."
        listTitle="Aldie project planning includes:"
        listItems={[
          'Composite and PVC decking options from Trex, TimberTech, and AZEK',
          'Stone Ridge, Willowsford, and Route 50 HOA packet planning',
          'Loudoun County permit coordination and inspection sequencing',
          'Deck addition, resurfacing, or full replacement guidance',
          'Screened porch, patio, railing, lighting, and stair planning',
        ]}
        image1="/images/img17.jpeg"
        image2="/images/img36.jpeg"
        image1Alt="Composite deck planning for Aldie, Virginia homeowners"
        image2Alt="Premium outdoor living deck detail for a Loudoun County home"
      />
      <CityLeadFormSection
        city="Aldie"
        county="Loudoun County"
        service="composite deck, screened porch, patio, resurfacing, or outdoor living project"
      />
      <PlanningUpdate
        market="Aldie deck projects in 2026"
        notes={[
          'Stone Ridge and Willowsford deck projects should be planned around HOA packet expectations before final material selection.',
          'Composite and PVC decking are usually the strongest fit for low-maintenance Aldie outdoor living.',
          'Deck, screened porch, and patio combinations should be scoped together when stairs, drainage, and yard layout affect the final design.',
        ]}
        links={[
          { href: '/stone-ridge-hoa-deck-rules', label: 'Stone Ridge HOA guide' },
          { href: '/deck-builder-broadlands-va', label: 'Broadlands deck builder' },
          { href: '/deck-permit-loudoun-county-virginia', label: 'Loudoun permit guide' },
        ]}
      />
      <GeoAnswerBlock
        question="What should Aldie homeowners know before planning a deck?"
        answer="Aldie homeowners should start with HOA packet planning, Loudoun County permit requirements, and a clear decision between a deck addition, composite replacement, screened porch, or deck and patio combination. Stone Ridge, Willowsford, and Route 50 communities often need material and railing choices documented early."
        facts={[
          'Primary buyer intent: premium composite decks, planned-community HOA support, and outdoor living upgrades.',
          'Best conversion path: written estimate with material, permit, HOA packet, and optional upgrade details.',
        ]}
        links={[
          { href: '/get-estimate', label: 'Request an Aldie estimate' },
          { href: '/deck-resurfacing-vs-replacement', label: 'Resurface vs replace' },
          { href: '/screened-porch-builder-northern-virginia', label: 'Screened porch options' },
        ]}
      />
      <ServiceContentExpansion sections={expansionSections} />
      <ServiceInclusions
        title="Why Aldie Homeowners Choose Loudoun Decks"
        description="We focus on serious outdoor living projects where material choices, HOA review, county permits, and long-term usability all matter."
        items={inclusions}
      />
      <ProcessSteps />
      <ServicesFAQ
        title="Aldie Deck Builder FAQs"
        faqs={faqs}
        canonicalUrl={URL}
      />
      <SimpleCTA title="Plan an Aldie Deck or Screened Porch Project" buttonText="Request Written Estimate" link="/get-estimate" />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>Related Aldie and Loudoun Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.8 }}>
          {[
            ['/stone-ridge-hoa-deck-rules', 'Stone Ridge HOA deck rules'],
            ['/deck-builder-ashburn-va', 'Ashburn deck builder'],
            ['/deck-builder-broadlands-va', 'Broadlands deck builder'],
            ['/deck-builder-brambleton-va', 'Brambleton deck builder'],
            ['/near-you/loudoun-county', 'Loudoun County deck builder hub'],
            ['/deck-permit-loudoun-county-virginia', 'Loudoun County deck permit guide'],
            ['/services/deck-replacement', 'Deck replacement services'],
            ['/services/deck-resurfacing', 'Deck resurfacing services'],
            ['/screened-porch-builder-northern-virginia', 'Screened porch builder Northern Virginia'],
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
      <NamedAuthor context="Aldie, Stone Ridge, Willowsford, and Loudoun County deck planning" lastUpdated="2026-07-18" />
      <ContactHome />
    </main>
  );
}
