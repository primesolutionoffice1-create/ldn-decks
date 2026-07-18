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

const PATH = '/deck-builder-one-loudoun-va';
const URL = `https://ldndecks.com${PATH}`;

export const metadata = buildMetadata({
  path: PATH,
  title: 'Deck Builder in One Loudoun, VA | Ashburn Decks',
  description: 'One Loudoun deck builder for modern composite decks, townhome decks, rooftop terraces, HOA packets, Loudoun County permits, railings, lighting, and written estimates.',
  image: '/social/one-loudoun-hoa-deck-rules-social.png',
});

const inclusions = [
  {
    title: 'One Loudoun ARC packet planning',
    desc: 'We organize footprint, material, railing, color, lighting, and exterior-context details before the One Loudoun architectural review starts.',
  },
  {
    title: 'Townhome, rooftop, and detached-home scopes',
    desc: 'One Loudoun projects can involve compact rear decks, rooftop terraces, detached-home outdoor living, and premium railing or lighting upgrades.',
  },
  {
    title: 'Loudoun County permit coordination',
    desc: 'We align the community review path with Loudoun County permit requirements for framing, ledger attachment, stairs, railings, and inspections.',
  },
];

const expansionSections = [
  {
    title: 'One Loudoun Is a Premium Ashburn Outdoor Living Market',
    paragraphs: [
      'One Loudoun is not a generic Ashburn subdivision. It is a mixed-use, walkable community with townhomes, detached homes, rooftop terraces, compact rear yards, modern exterior palettes, and a homeowner base that often wants a finished outdoor space that matches the architecture.',
      'That makes the deck planning process different from a standard backyard build. The best One Loudoun projects consider HOA review, Loudoun County permits, structural details, material colors, railing style, lighting, privacy, and how the deck or terrace will be used for daily living.',
    ],
  },
  {
    title: 'Modern Materials and Clean Design Matter Here',
    paragraphs: [
      'One Loudoun homes often support a more modern deck vocabulary: composite or PVC decking, darker or warm-gray tones, black aluminum railing, cable railing where appropriate, integrated low-voltage lighting, clean fascia, and picture-frame borders.',
      'Trex, TimberTech, and AZEK options should be compared by color, heat exposure, warranty, texture, railing compatibility, and how the final palette will read against the home exterior. A strong material plan is also easier to explain in the architectural packet.',
    ],
  },
  {
    title: 'Common One Loudoun Deck Project Types',
    paragraphs: [
      'The most common serious One Loudoun scopes fall into several buckets: compact townhome decks, detached-home composite decks, rooftop terrace planning, deck resurfacing after a frame inspection, railing upgrades, stair improvements, and lighting packages.',
      'Townhome and rooftop work especially need clean documentation. Access, neighbor proximity, drainage, ledger attachment, waterproofing transitions, railing height, privacy, and inspection access should all be discussed before pricing is finalized.',
    ],
    listItems: [
      { label: 'Townhome rear decks', text: 'Best with a clean footprint, HOA-ready material selections, and neighbor-aware construction access planning.' },
      { label: 'Rooftop terrace work', text: 'Best when structural, waterproofing, railing, and access details are reviewed before design approval.' },
      { label: 'Detached-home composite decks', text: 'Best for larger outdoor living plans with dining, grilling, stairs, lighting, and upgraded railings.' },
      { label: 'Resurfacing or replacement', text: 'Best decided after posts, footings, joists, ledger attachment, flashing, stairs, and railings are inspected.' },
    ],
  },
  {
    title: 'Budget and Timeline Expectations',
    paragraphs: [
      'One Loudoun budgets depend heavily on project type. A compact townhome rear deck, a rooftop terrace, and a detached-home outdoor living package are different scopes even when the visible square footage is similar.',
      'A practical estimate should separate base build scope from optional upgrades such as premium PVC boards, cable railing, lighting, privacy elements, stair changes, fascia, and screened or covered outdoor living features. That helps the homeowner approve the right investment without mixing must-have structural work with optional design upgrades.',
    ],
  },
];

const faqs = [
  {
    q: 'Do One Loudoun deck projects need HOA approval?',
    a: 'Most One Loudoun deck projects need architectural review before construction. The packet typically includes a site plan or footprint, drawings or elevations, material selections, color notes, railing details, lighting details when applicable, and exterior photos. Requirements should be confirmed for the specific property and final scope.',
  },
  {
    q: 'Who issues the building permit for a One Loudoun deck?',
    a: 'One Loudoun is in Loudoun County, so deck permits generally follow the Loudoun County building permit process. A typical structural permit package includes footing details, framing layout, ledger attachment, stair information, guardrail specifications, and inspection sequencing. Final requirements should be confirmed by address.',
  },
  {
    q: 'Is composite decking a good fit for One Loudoun?',
    a: 'Yes. Composite and PVC decking are strong fits for One Loudoun because homeowners usually want low maintenance, clean detailing, and a finish that matches the modern Ashburn community character. Trex, TimberTech, and AZEK should be compared by color, heat exposure, railing compatibility, warranty, and HOA presentation quality.',
  },
  {
    q: 'Can Loudoun Decks build One Loudoun townhome decks?',
    a: 'Yes. Townhome decks need careful planning for HOA rules, footprint limits, neighbor proximity, rear access, railing style, stairs, and Loudoun County permit requirements. A complete packet reduces back-and-forth before construction scheduling.',
  },
  {
    q: 'Should a One Loudoun homeowner build a standard deck or rooftop terrace?',
    a: 'The right answer depends on the home type and structure. Some One Loudoun homes are better suited to compact rear decks, while rooftop terrace work requires careful attention to structure, waterproofing, guardrails, access, drainage, and architectural review. The estimate should identify which path is feasible before design decisions are finalized.',
  },
];

export default function DeckBuilderOneLoudounPage() {
  return (
    <main>
      <LocalBusinessSchema city="One Loudoun" url={URL} />
      <WebPageSchema
        dateModified="2026-07-18"
        url={URL}
        name="Deck Builder in One Loudoun, VA | Ashburn Decks"
        description="One Loudoun deck builder for modern composite decks, townhome decks, rooftop terraces, HOA packets, Loudoun County permits, railings, lighting, and written estimates."
        speakable
      />
      <ServicesHeader
        subtext="One Loudoun Deck Builder"
        title="Modern Composite Deck Builder in One Loudoun, VA"
        description="Loudoun Decks plans composite decks, townhome decks, rooftop terraces, railings, lighting, and outdoor living upgrades for One Loudoun homeowners with HOA-aware planning and Loudoun County permit support."
      />
      <ServiceMain
        subtitle="One Loudoun Outdoor Living"
        title="HOA-Ready Decks, Rooftop Terraces, and Modern Composite Planning"
        description="One Loudoun projects need a clean plan for community review, county permits, modern material selections, railing style, lighting, stairs, privacy, and how the outdoor space fits the home."
        listTitle="One Loudoun project planning includes:"
        listItems={[
          'Composite and PVC decking options from Trex, TimberTech, and AZEK',
          'One Loudoun ARC packet planning for footprint, color, railing, and materials',
          'Townhome rear deck, rooftop terrace, and detached-home deck planning',
          'Loudoun County permit coordination and inspection sequencing',
          'Lighting, cable railing, fascia, stairs, privacy, and outdoor living upgrade options',
        ]}
        image1="/images/img17.jpeg"
        image2="/images/img36.jpeg"
        image1Alt="Modern composite deck planning for One Loudoun homeowners"
        image2Alt="Premium outdoor living deck detail in Loudoun County"
      />
      <CityLeadFormSection
        city="One Loudoun"
        county="Loudoun County"
        service="composite deck, townhome deck, rooftop terrace, railing, lighting, or outdoor living project"
      />
      <PlanningUpdate
        market="One Loudoun deck projects in 2026"
        notes={[
          'One Loudoun projects should start with ARC packet planning before final material and railing selections.',
          'Modern composite and PVC materials are usually the strongest fit for low-maintenance Ashburn outdoor living.',
          'Townhome and rooftop terrace projects need especially clear structural, drainage, railing, and access details before pricing is finalized.',
        ]}
        links={[
          { href: '/one-loudoun-hoa-deck-rules', label: 'One Loudoun HOA guide' },
          { href: '/deck-builder-ashburn-va', label: 'Ashburn deck builder' },
          { href: '/deck-permit-loudoun-county-virginia', label: 'Loudoun permit guide' },
        ]}
      />
      <GeoAnswerBlock
        question="What should One Loudoun homeowners know before planning a deck?"
        answer="One Loudoun homeowners should start with architectural review requirements, Loudoun County permit needs, material selection, and the right project type: compact townhome rear deck, detached-home composite deck, rooftop terrace, resurfacing, railing upgrade, or lighting package. A complete written scope should separate structural requirements from optional design upgrades."
        facts={[
          'Primary buyer intent: modern composite deck planning, HOA packet support, townhome decks, rooftop terraces, and premium outdoor living.',
          'Best conversion path: written estimate with ARC packet, permit, material, railing, lighting, and optional upgrade details.',
        ]}
        links={[
          { href: '/get-estimate', label: 'Request a One Loudoun estimate' },
          { href: '/one-loudoun-hoa-deck-rules', label: 'One Loudoun HOA rules' },
          { href: '/rooftop-deck-builder-northern-virginia', label: 'Rooftop deck planning' },
        ]}
      />
      <ServiceContentExpansion sections={expansionSections} />
      <ServiceInclusions
        title="Why One Loudoun Homeowners Choose Loudoun Decks"
        description="We focus on serious outdoor living projects where community review, structural safety, material selection, and modern finish details all matter."
        items={inclusions}
      />
      <ProcessSteps />
      <ServicesFAQ
        title="One Loudoun Deck Builder FAQs"
        faqs={faqs}
        canonicalUrl={URL}
      />
      <SimpleCTA title="Plan a One Loudoun Deck or Rooftop Terrace" buttonText="Request Written Estimate" link="/get-estimate" />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>Related One Loudoun and Ashburn Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.8 }}>
          {[
            ['/one-loudoun-hoa-deck-rules', 'One Loudoun HOA deck rules'],
            ['/deck-builder-ashburn-va', 'Ashburn deck builder'],
            ['/deck-builder-broadlands-va', 'Broadlands deck builder'],
            ['/deck-builder-brambleton-va', 'Brambleton deck builder'],
            ['/near-you/loudoun-county', 'Loudoun County deck builder hub'],
            ['/deck-permit-loudoun-county-virginia', 'Loudoun County deck permit guide'],
            ['/rooftop-deck-builder-northern-virginia', 'Rooftop deck builder Northern Virginia'],
            ['/cable-railing-for-decks-northern-virginia', 'Cable railing for decks'],
            ['/composite-deck-cost-northern-virginia', 'Composite deck cost guide'],
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
      <NamedAuthor context="One Loudoun, Ashburn, and Loudoun County deck planning" lastUpdated="2026-07-18" />
      <ContactHome />
    </main>
  );
}
