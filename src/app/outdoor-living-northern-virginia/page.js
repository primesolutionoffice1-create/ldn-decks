import React from 'react';
import Link from 'next/link';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import ServiceSchema from '@/components/ServiceSchema';
import RelatedGuides from '@/components/RelatedGuides';
import ServicesCallToAction from '@/components/ServicesCallToAction';
import AboveFoldCTA from '@/components/AboveFoldCTA';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';

export const metadata = buildMetadata({
  path: '/outdoor-living-northern-virginia',
  title: 'Outdoor Living Contractor Northern Virginia | Decks, Patios, Porches',
  description: 'Outdoor living design and build in Northern Virginia. Custom decks, screened porches, patios, pergolas, outdoor kitchens and under-deck spaces.',
  image: '/home-page-ldn.webp',
});

const inclusions = [
  {
    title: 'One Integrated Outdoor Plan',
    desc: 'Deck, porch, patio, shade, lighting, drainage, and traffic flow are planned together so the backyard feels intentional instead of pieced together.',
  },
  {
    title: 'Premium Deck Platforms',
    desc: 'Trex, TimberTech, AZEK, and low-maintenance composite systems for the main outdoor living surface.',
  },
  {
    title: 'Porches, Pergolas & Shade',
    desc: 'Screened porches, open porches, pergolas, gazebos, and louvered structures that make the space usable in real Virginia weather.',
  },
  {
    title: 'Patios & Under-Deck Rooms',
    desc: 'Paver patios, dry under-deck ceiling systems, fire features, and outdoor kitchen planning for multi-zone backyards.',
  },
  {
    title: 'Permits, HOA & Timeline',
    desc: 'We help coordinate the approval path across Loudoun, Fairfax, and Prince William County so the project can move cleanly.',
  },
];

const expansionSections = [
  {
    title: 'Outdoor Living Built Around How Northern Virginia Families Actually Use Their Yards',
    paragraphs: [
      'A strong outdoor living project is not just a deck. It is a system: where people cook, where they sit, how shade moves across the yard, how guests circulate, where stairs land, where lighting belongs, and how the space connects back to the house. In Loudoun, Fairfax, and Prince William County, the best projects usually combine a deck with at least one second zone: screened porch, patio, pergola, under-deck room, or outdoor kitchen.',
      'Loudoun Decks designs outdoor living spaces for premium residential use. That means we think about structure, code, drainage, traffic flow, material durability, and HOA presentation before the build starts. A beautiful backyard should also be practical: comfortable in humid summer evenings, easy to clean after pollen season, safe on stairs, and built with materials that do not demand annual staining.',
      'For homeowners comparing multiple contractors, the difference is coordination. A deck builder might only quote the platform. A patio contractor might only quote stone. We look at the whole outdoor living plan so each phase supports the next one.',
    ],
  },
  {
    title: 'The Core Zones of a High-End Outdoor Living Project',
    paragraphs: [
      'The main deck is usually the anchor. It creates the transition from the house into the backyard and sets the material language for railings, stairs, lighting, and trim. From there, screened porches add bug-free comfort, patios create ground-level seating, pergolas add shade, and under-deck systems turn wasted lower-level space into a dry room.',
      'Premium Northern Virginia projects often need a blend of these zones. A second-story composite deck may connect to a dry under-deck patio. A screened porch may open onto a paver patio with a fire feature. A TimberTech or Trex deck may include stairs that land on a grill zone, not in the middle of the yard.',
      'This is why outdoor living work should start with a layout conversation, not just a material quote. The best money is spent on the structure and flow that make the backyard easier to use every week.',
    ],
    listItems: [
      { label: 'Deck zone', text: 'Composite or PVC surface, railing, stairs, lighting, and connection to the home.' },
      { label: 'Covered zone', text: 'Screened porch, open porch, gazebo, pergola, or louvered roof for shade and weather control.' },
      { label: 'Ground zone', text: 'Paver or stone patio, fire feature, seating wall, grill station, or outdoor kitchen.' },
      { label: 'Lower zone', text: 'Under-deck ceiling, drainage, lighting, fans, storage, and dry patio use.' },
    ],
  },
  {
    title: 'Materials That Hold Up in NoVA Weather',
    paragraphs: [
      'Northern Virginia outdoor living spaces need materials that handle humidity, pollen, hard summer sun, winter freeze-thaw cycles, and shaded yards. Pressure-treated wood can still work for certain budgets, but high-end projects usually move toward Trex, TimberTech, AZEK, aluminum railing, PVC trim, and durable paver systems.',
      'Composite and PVC decking reduce the maintenance burden that makes older wood decks expensive over time. Aluminum railings, low-voltage lighting, and properly managed drainage also help the project age cleanly. If the space includes a patio or under-deck room, water movement and grading become just as important as color selection.',
      'We help homeowners choose materials based on exposure, budget, home value, HOA expectations, and how much maintenance they realistically want to do.',
    ],
  },
];

const faqs = [
  {
    q: 'What is included in an outdoor living project?',
    a: 'Outdoor living can include a custom deck, screened porch, open porch, paver patio, pergola, gazebo, outdoor kitchen, under-deck ceiling, lighting, drainage, stairs, railings, and permit or HOA support.',
  },
  {
    q: 'How much does an outdoor living project cost in Northern Virginia?',
    a: 'Most serious outdoor living projects start around $25,000 and can reach $75,000-$150,000+ when combining decks, porches, patios, kitchens, lighting, and premium materials.',
  },
  {
    q: 'Should I build everything at once or in phases?',
    a: 'Either can work. The key is to design the full plan first so Phase 1 does not block Phase 2. We often plan deck structure, stair landings, patio location, and drainage with future additions in mind.',
  },
  {
    q: 'Do outdoor living projects need permits?',
    a: 'Decks, porches, roof structures, electrical work, and many structural additions usually need permits. Patios may not always need a building permit, but grading, electrical, gas, and HOA rules can still apply.',
  },
  {
    q: 'What counties do you serve?',
    a: 'We serve Loudoun County, Fairfax County, Prince William County, and nearby Northern Virginia communities including Ashburn, Leesburg, Reston, McLean, Vienna, Manassas, and Woodbridge.',
  },
];

export default function OutdoorLivingNorthernVirginiaPage() {
  return (
    <main>
      <WebPageSchema url="https://ldndecks.com/outdoor-living-northern-virginia" name="Outdoor Living Contractor Northern Virginia | Decks, Patios, Porches" description="Outdoor living design and build in Northern Virginia. Custom decks, screened porches, patios, pergolas, outdoor kitchens and under-deck spaces." speakable />
      <ServiceSchema
        name="Outdoor Living Design and Build"
        description="Outdoor living contractor in Northern Virginia for decks, porches, patios, pergolas, outdoor kitchens, under-deck spaces, permits, and HOA-ready backyard planning."
        price="25000"
      />
      <ServicesHeader
        subtext="Outdoor Living Contractor NoVA"
        title="Outdoor Living Design & Build in Northern Virginia"
        description="Create a complete backyard system with custom decks, screened porches, patios, pergolas, outdoor kitchens, under-deck rooms, lighting, drainage, permits, and HOA support."
      />

      <AboveFoldCTA headline="Planning a serious outdoor living project in Northern Virginia? Talk to a deck, porch, and patio specialist today." />

      <section style={{ backgroundColor: '#fff5f2', padding: '24px 20px', borderBottom: '1px solid #ffdbd1' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#d14817', margin: 0, fontWeight: 500 }}>
            <strong style={{ color: '#111', fontSize: '18px' }}>Outdoor living projects typically start around $25,000+</strong>
            <br />
            Best fit for homeowners planning <strong style={{ color: '#111' }}>full backyard upgrades</strong>: decks, porches, patios, shade structures, lighting, and multi-zone outdoor spaces.
          </p>
        </div>
      </section>

      <ServiceMain
        subtitle="Decks, Porches, Patios & Shade"
        title="One Contractor for the Whole Backyard"
        description="We help Northern Virginia homeowners plan outdoor living projects that connect the deck, patio, porch, stairs, railings, shade, drainage, and lighting into one polished space."
        listItems={[
          'Composite and PVC decks from Trex, TimberTech, and AZEK',
          'Screened porches, open porches, pergolas, and gazebos',
          'Paver patios, fire features, and outdoor kitchen planning',
          'Under-deck dry spaces with ceiling, lighting, and fans',
          'Permit, HOA, and project sequencing support',
          'Premium materials selected for NoVA weather',
          'Phase-ready planning for larger backyard transformations',
        ]}
        image1="/home-page-ldn.webp"
        image2="/images/img97.jpeg"
      />

      <ServiceContentExpansion sections={expansionSections} />

      <section style={{ background: '#f7f4ed', padding: '64px 20px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', margin: '0 0 16px', color: '#111', textAlign: 'center' }}>
            Outdoor Living Services We Connect
          </h2>
          <p style={{ maxWidth: 760, margin: '0 auto 32px', textAlign: 'center', color: '#555', lineHeight: 1.65 }}>
            Each service can stand alone, but the highest-value projects are planned as one system.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 16 }}>
            {[
              ['/composite-decks', 'Composite Decks', 'Low-maintenance Trex, TimberTech, and AZEK deck platforms.'],
              ['/services/deck-replacement', 'Deck Replacement', 'Full tear-down and rebuild for aging or unsafe wood decks.'],
              ['/services/porches/screened-porch', 'Screened Porches', 'Bug-free covered living space for dining, relaxing, and entertaining.'],
              ['/services/patios', 'Patios', 'Paver, bluestone, and hardscape zones that complete the backyard.'],
              ['/services/gazebo-pergola', 'Pergolas & Gazebos', 'Shade, structure, louvered roofs, and architectural definition.'],
              ['/services/under-deck-patios', 'Under-Deck Spaces', 'Dry lower patios with drainage, ceilings, fans, and lighting.'],
            ].map(([href, title, text]) => (
              <Link key={href} href={href} style={{ background: '#fff', border: '1px solid #e8dfd1', borderRadius: 8, padding: 20, textDecoration: 'none', color: '#111' }}>
                <h3 style={{ margin: '0 0 8px', fontSize: '1.08rem' }}>{title}</h3>
                <p style={{ margin: 0, color: '#555', lineHeight: 1.55 }}>{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceInclusions
        title="What Makes the Plan Professional"
        description="The best outdoor living spaces are engineered, sequenced, and finished like part of the home."
        items={inclusions}
      />

      <ServicesFAQ canonicalUrl="https://ldndecks.com/outdoor-living-northern-virginia" title="Outdoor Living FAQs" faqs={faqs} />
      <ServiceAreasGrid />
      <ServicesCallToAction />
      <RelatedGuides currentPath="/outdoor-living-northern-virginia" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <ContactHome />
    </main>
  );
}
