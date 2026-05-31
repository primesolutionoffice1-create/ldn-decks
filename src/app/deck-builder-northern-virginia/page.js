import React from 'react';
import Link from 'next/link';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import ServiceSchema from '@/components/ServiceSchema';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import SimpleCTA from '@/components/SimpleCTA';
import JsonLd from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/deck-builder-northern-virginia',
  title: 'Custom Deck Builder Northern Virginia | LDN Decks',
  description: 'Custom deck builder in Northern Virginia for composite decks, Trex, TimberTech, deck replacement, permits and HOA approvals across Loudoun and Fairfax.',
  image: '/images/img36.jpeg',
});

const inclusions = [
  {
    title: 'Permit-ready planning',
    desc: 'Structural drawings, county permit coordination, footing inspections, framing inspections and final approval are handled as part of the build.',
  },
  {
    title: 'Composite and PVC expertise',
    desc: 'Trex, TimberTech and AZEK deck systems selected for Northern Virginia heat, humidity, freeze-thaw cycles and HOA standards.',
  },
  {
    title: 'Local code and HOA support',
    desc: 'Design packages account for county requirements, setbacks, railing rules, stair safety and HOA architectural review.',
  },
];

const serviceFAQs = [
  {
    q: 'What areas do you serve as a Northern Virginia deck builder?',
    a: 'Loudoun Decks serves homeowners across Loudoun County, Fairfax County, Prince William County, Arlington County and Stafford County, including Ashburn, Leesburg, Reston, McLean, Vienna, Fairfax, Centreville, Manassas and Woodbridge.',
  },
  {
    q: 'Do you handle deck permits and HOA approvals?',
    a: 'Yes. We prepare the permit-ready scope, coordinate county inspections and help assemble HOA architectural packages with the drawings, materials, colors and project details needed for review.',
  },
  {
    q: 'What types of decks do you build?',
    a: 'We build custom composite decks, PVC decks, wood decks, multi-level decks, second-story decks, pool decks, deck replacements and full outdoor living projects with railings, stairs, lighting and under-deck options.',
  },
  {
    q: 'How much does a custom deck cost in Northern Virginia?',
    a: 'Project cost depends on size, elevation, materials, railing, stairs, lighting, demolition and site conditions. Most professional composite deck projects in Northern Virginia fall into a mid-to-premium investment range, and we provide a written estimate after reviewing the property and scope.',
  },
  {
    q: 'Why choose a local deck builder instead of a general contractor?',
    a: 'Decks are structural exterior systems. A local deck specialist knows the county permit process, frost-depth footing expectations, ledger attachment details, HOA rules, composite manufacturer requirements and the design patterns that work in Northern Virginia yards.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://ldndecks.com/deck-builder-northern-virginia#faq',
  mainEntity: serviceFAQs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const expansionSections = [
  {
    title: 'A Northern Virginia deck builder focused on the full system',
    paragraphs: [
      'A great deck is not just boards and railings. It is a permitted structure that has to work with your house, grade, drainage, HOA rules, material warranties and the way your family uses the yard. Loudoun Decks builds custom decks across Northern Virginia with the planning discipline those details require.',
      'Our work covers new deck construction, [composite decks](/composite-decks), [wood decks](/wood-decks), [deck replacement](/services/deck-replacement), resurfacing, railings, stairs, lighting, screened porches and connected outdoor living spaces. The goal is simple: a deck that looks intentional on day one and still feels solid years later.',
    ],
  },
  {
    title: 'Local counties, local constraints',
    paragraphs: [
      'Northern Virginia deck projects often move through more than one approval layer. A homeowner may need county permit approval, HOA architectural approval, utility awareness, site access planning and inspection scheduling before the first board is installed. That process is different in Loudoun, Fairfax, Prince William, Arlington and Stafford.',
      'We plan around those local constraints from the first conversation. For deeper planning, start with the [Northern Virginia deck building guide](/northern-virginia-deck-building-guide), then compare county-specific permit notes for [Loudoun County](/deck-permit-loudoun-county-virginia), [Fairfax County](/deck-permit-fairfax-county-virginia) and [Prince William County](/deck-permit-prince-william-county-virginia).',
    ],
    listItems: [
      { label: 'Loudoun County', text: 'Ashburn, Leesburg, Sterling, Brambleton, South Riding, Purcellville and nearby communities.' },
      { label: 'Fairfax County', text: 'Reston, Herndon, Vienna, McLean, Fairfax, Oakton, Chantilly, Burke and Falls Church.' },
      { label: 'Prince William County', text: 'Manassas, Gainesville, Haymarket, Bristow and Woodbridge.' },
      { label: 'Northern Virginia homes', text: 'Colonials, townhomes, estate homes, walkout basements, sloped lots and HOA-governed communities.' },
    ],
  },
  {
    title: 'Materials chosen for Virginia weather',
    paragraphs: [
      'Northern Virginia decks deal with humidity, fast temperature swings, pollen, leaf debris, heavy summer sun and winter freeze-thaw cycles. That is why material selection matters. Composite and PVC decking reduce maintenance, resist staining and hold up better than basic pressure-treated boards when the homeowner wants a low-maintenance outdoor space.',
      'For homeowners comparing materials, we connect the deck design to real performance questions: Trex vs TimberTech, PVC vs composite, wood vs composite, railing durability, stair safety and long-term maintenance. See our [Trex vs TimberTech vs AZEK comparison](/trex-vs-timbertech-vs-azek) and [composite vs wood deck guide](/composite-deck-vs-wood-deck-virginia).',
    ],
  },
  {
    title: 'What a Northern Virginia deck project costs',
    paragraphs: [
      'Deck pricing in Northern Virginia varies by size, materials, elevation and site conditions. Most homeowners invest between $18,000 and $65,000 for a professionally built composite deck. A straightforward 300 sq ft Trex Enhance deck starts around $18,000–$24,000, a mid-range 400–500 sq ft Trex Transcend build lands in the $28,000–$45,000 range, and larger multi-level projects or outdoor living packages with screened porches, pergolas and lighting can reach $55,000–$90,000+.',
      'We publish transparent [cost data for Northern Virginia decks](/composite-deck-cost-northern-virginia), a [composite deck cost breakdown](/composite-deck-cost-northern-virginia) and a [monthly payment estimator](/deck-payment-estimator) so you can plan before the first conversation. Every written estimate from Loudoun Decks includes materials, labor, permits, inspections and cleanup — no surprise line items.',
    ],
  },
  {
    title: 'Screened porches, outdoor kitchens and full outdoor living',
    paragraphs: [
      'Many Northern Virginia homeowners start with a deck and expand into a connected outdoor living space. A [screened porch](/screened-porch-builder-northern-virginia) turns a three-season deck into a year-round room, free from Loudoun and Fairfax County insects and pollen. [Covered decks](/covered-deck-builder-northern-virginia), [louvered pergolas](/louvered-pergola-northern-virginia) and [outdoor kitchens](/outdoor-kitchen-builder-northern-virginia) are the most common additions we design alongside new deck builds.',
      'For homeowners focused on composite materials specifically, our [composite deck builder in Loudoun County](/composite-deck-builder-loudoun) page covers material selection, HOA handling and real project pricing in the communities where we build most often.',
    ],
  },
];

function ServiceLinkGrid() {
  const links = [
    ['/deck-builder-ashburn-va', 'Ashburn'],
    ['/deck-builder-leesburg-va', 'Leesburg'],
    ['/deck-builder-reston-va', 'Reston'],
    ['/deck-builder-mclean-va', 'McLean'],
    ['/deck-builder-vienna-va', 'Vienna'],
    ['/deck-builder-fairfax-va', 'Fairfax'],
    ['/deck-builder-centreville-va', 'Centreville'],
    ['/deck-builder-manassas-va', 'Manassas'],
    ['/deck-builder-great-falls-va', 'Great Falls'],
    ['/deck-builder-herndon-va', 'Herndon'],
    ['/deck-builder-sterling-va', 'Sterling'],
    ['/deck-builder-chantilly-va', 'Chantilly'],
  ];

  return (
    <section style={{ background: '#fff', padding: '3rem 0' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 1.5rem' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>
          Deck Builder Service Areas in Northern Virginia
        </h2>
        <p style={{ color: '#555', lineHeight: 1.7, maxWidth: 760, marginBottom: '1.5rem' }}>
          Use these local pages when you want city-specific examples, permit notes and neighborhood context.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              style={{
                border: '1px solid #e5e5e5',
                borderRadius: 8,
                padding: '0.9rem 1rem',
                color: 'var(--color-primary)',
                fontWeight: 700,
                textDecoration: 'none',
                background: '#fafafa',
              }}
            >
              {label} deck builder
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectProcessSection() {
  const steps = [
    ['01', 'Consultation', 'We review the project goals, rough size, material preferences, access, timing and whether the home is likely to need HOA approval.'],
    ['02', 'Site review', 'The property is checked for elevation, ledger conditions, stairs, drainage, utilities, access and county-specific constraints.'],
    ['03', 'Scope and approvals', 'The design, materials, permit path, HOA package needs, timeline and written estimate are aligned before construction starts.'],
    ['04', 'Permitted build', 'Construction moves through footing, framing and final inspection milestones with a clean closeout and homeowner handoff.'],
  ];

  return (
    <section style={{ background: '#111', color: '#fff', padding: '4rem 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem' }}>
        <h2 style={{ fontSize: '1.9rem', fontWeight: 800, marginBottom: '0.75rem' }}>
          How the Deck Build Moves
        </h2>
        <p style={{ color: '#d6d6d6', lineHeight: 1.7, maxWidth: 760, marginBottom: '2rem' }}>
          The process is designed to remove uncertainty before materials arrive: scope first, approvals second, construction third.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {steps.map(([number, title, desc]) => (
            <div key={number} style={{ border: '1px solid rgba(255,255,255,0.16)', borderRadius: 8, padding: '1.25rem', background: 'rgba(255,255,255,0.04)' }}>
              <p style={{ color: 'var(--color-primary)', fontSize: '0.8rem', fontWeight: 800, marginBottom: '0.75rem' }}>{number}</p>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.5rem' }}>{title}</h3>
              <p style={{ color: '#d6d6d6', lineHeight: 1.6, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section style={{ background: '#f7f7f5', padding: '4rem 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <h2 style={{ fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem' }}>
          Northern Virginia Deck Builder FAQs
        </h2>
        <div style={{ display: 'grid', gap: '0.75rem' }}>
          {serviceFAQs.map((item) => (
            <details key={item.q} style={{ background: '#fff', border: '1px solid #e3e3df', borderRadius: 8, padding: '1rem 1.15rem' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 800, color: '#111' }}>{item.q}</summary>
              <p style={{ margin: '0.85rem 0 0', color: '#555', lineHeight: 1.7 }}>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function DeckBuilderNorthernVirginiaPage() {
  return (
    <main>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/deck-builder-northern-virginia" name="Custom Deck Builder in Northern Virginia" description="Custom deck builder in Northern Virginia for composite, PVC, wood, replacement, permits and HOA approvals. Serving Loudoun, Fairfax and Prince William." speakable />
      <ServiceSchema
        url="https://ldndecks.com/deck-builder-northern-virginia"
        name="Custom Deck Builder in Northern Virginia"
        description="Custom composite, PVC and wood deck construction, deck replacement, permits, HOA support and outdoor living design across Northern Virginia."
        areaServed={[
          { '@type': 'Place', name: 'Northern Virginia' },
          { '@type': 'AdministrativeArea', name: 'Loudoun County, VA' },
          { '@type': 'AdministrativeArea', name: 'Fairfax County, VA' },
          { '@type': 'AdministrativeArea', name: 'Prince William County, VA' },
          { '@type': 'AdministrativeArea', name: 'Arlington County, VA' },
          { '@type': 'AdministrativeArea', name: 'Stafford County, VA' },
        ]}
      />
      <ServicesHeader
        subtext="Northern Virginia Deck Builder"
        title="Custom Deck Builder in Northern Virginia"
        description="Loudoun Decks designs and builds permitted custom decks for homeowners across Loudoun, Fairfax, Prince William, Arlington and Stafford counties."
      />
      <ServiceMain
        subtitle="Design, permits and build"
        title="Decks Built for Northern Virginia Homes"
        description="From a simple composite replacement to a multi-level outdoor living space, we plan the structure, materials, approvals and finish details together so the finished deck fits the home and the county requirements."
        listTitle="Core deck services"
        listItems={[
          'Custom composite, PVC and wood deck construction',
          'Deck replacement, resurfacing and structural upgrades',
          'Trex, TimberTech and AZEK material guidance',
          'County permits, inspections and HOA package support',
          'Railings, stairs, lighting, privacy screens and under-deck options',
        ]}
        image1="/images/img36.jpeg"
        image2="/images/img25.jpeg"
      />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-16" />
      </div>
      <ServiceInclusions
        title="What Homeowners Get With Loudoun Decks"
        description="A deck project should be clear before construction starts: scope, materials, permits, approvals, inspections, cost and timeline."
        items={inclusions}
      />
      <ServiceContentExpansion sections={expansionSections} />
      <ServiceLinkGrid />
      <ProjectProcessSection />
      <FaqSection />
      <ServiceAreasGrid />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (Google reviews) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
            <li key="/services/new-decks" style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
        </ul>
      </section>

      <SimpleCTA title="Ready to Build Your Northern Virginia Deck?" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-northern-virginia" />
      <ContactHome />
    </main>
  );
}
