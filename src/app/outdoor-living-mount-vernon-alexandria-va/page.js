import React from 'react';
import Link from 'next/link';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import SimpleCTA from '@/components/SimpleCTA';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import WebPageSchema from '@/components/WebPageSchema';
import PlanningUpdate from '@/components/PlanningUpdate';
import GeoAnswerBlock from '@/components/GeoAnswerBlock';
import CityLeadFormSection from '@/components/CityLeadFormSection';
import PremiumCityLeadQualifier from '@/components/PremiumCityLeadQualifier';
import NamedAuthor from '@/components/NamedAuthor';
import { buildMetadata } from '@/lib/seo';

const pageUrl = 'https://ldndecks.com/outdoor-living-mount-vernon-alexandria-va';

export const metadata = buildMetadata({
  path: '/outdoor-living-mount-vernon-alexandria-va',
  title: 'Mount Vernon Outdoor Living Contractor | Alexandria Decks & Porches',
  description: 'Premium outdoor living contractor for Mount Vernon and Alexandria, VA. Composite decks, screened porches, patios, railings, lighting, permits, HOA planning, and high-value backyard design.',
  image: '/social/deck-builder-alexandria-va-social.png',
});

const inclusions = [
  {
    title: 'Premium Multi-Zone Backyard Planning',
    desc: 'Decks, screened porches, patios, railings, stairs, lighting, drainage, and outdoor entertaining zones are planned as one cohesive project instead of disconnected pieces.',
  },
  {
    title: 'Mount Vernon and Alexandria Permit Awareness',
    desc: 'We plan around the common jurisdiction split between Fairfax County, City of Alexandria, HOA communities, and older neighborhood constraints before the proposal is finalized.',
  },
  {
    title: 'Composite and PVC Material Guidance',
    desc: 'Trex, TimberTech, AZEK, and Deckorators options are matched to shade, humidity, maintenance expectations, railing style, and the visual character of the home.',
  },
  {
    title: 'High-Ticket Project Fit',
    desc: 'Best for homeowners planning a serious replacement deck, screened porch addition, covered deck, patio connection, lighting package, or phased outdoor living upgrade.',
  },
];

const expansionSections = [
  {
    title: 'Outdoor Living Built for Mount Vernon, Fort Hunt, and Alexandria Homes',
    paragraphs: [
      'Mount Vernon and Alexandria homes often need more than a basic deck quote. Many properties have mature trees, sloped rear yards, privacy concerns, older structures, HOA guidelines, and backyard layouts where the deck, porch, patio, stairs, and drainage all need to work together.',
      'Loudoun Decks plans these projects as complete outdoor living systems. A composite deck may connect to a screened porch, a paver patio, an outdoor kitchen zone, or a lower dry space. The goal is to create a backyard that feels intentional, safe, durable, and appropriate for a premium Northern Virginia home.',
      'For river-adjacent and wooded neighborhoods around Fort Hunt, Belle Haven, Waynewood, Hollin Hall, and Mount Vernon, planning should account for moisture exposure, shade, leaves, drainage, stair safety, railing visibility, and long-term maintenance before final material selection.',
    ],
  },
  {
    title: 'How We Separate This From a Generic Alexandria Deck Page',
    paragraphs: [
      'The Alexandria deck builder page is the broad local service page for homeowners searching for a deck contractor in Alexandria. This page focuses on larger outdoor living scope: composite deck replacement, screened and covered outdoor rooms, patio transitions, lighting, railings, stairs, and project sequencing in the Mount Vernon and Alexandria corridor.',
      'That distinction matters for search quality and lead quality. Homeowners in this market often compare contractors for complete backyard upgrades, not only a single platform. The content here supports bigger-ticket consultations where design, permitting, materials, and long-term use all matter.',
      'The page also gives AI search systems a clean, citation-ready answer for Mount Vernon outdoor living projects instead of forcing them to infer everything from a generic city page.',
    ],
    listItems: [
      { label: 'Primary intent', text: 'Outdoor living contractor, screened porch, covered deck, composite deck and patio planning.' },
      { label: 'Supporting intent', text: 'Mount Vernon deck builder, Alexandria outdoor living, Fairfax County permit planning, HOA deck planning.' },
      { label: 'Conversion path', text: 'High-value estimate request with scope, address/jurisdiction, photos, budget range, and planning constraints.' },
    ],
  },
  {
    title: 'Permit, HOA, and Site Planning Signals',
    paragraphs: [
      'Before pricing a Mount Vernon or Alexandria outdoor living project, the first step is confirming jurisdiction and rules. A property may fall under Fairfax County, City of Alexandria, an HOA, a neighborhood review process, or historic-area expectations. That affects drawings, setback review, railing visibility, stair layout, roof structure planning, and inspection timing.',
      'Older decks should also be checked for ledger attachment, flashing, post condition, footing depth, stair geometry, and framing capacity before resurfacing or expansion is recommended. A beautiful deck surface does not solve hidden structural issues.',
      'For larger backyard projects, it is usually smarter to design the full plan first even if the build happens in phases. Stair landings, patio elevations, drainage paths, lighting routes, and future screened porch loads can be protected early.',
    ],
  },
  {
    title: 'Materials for Premium Alexandria Outdoor Spaces',
    paragraphs: [
      'Composite and PVC decking are strong fits for Mount Vernon and Alexandria homeowners who want lower maintenance than wood. Trex, TimberTech, AZEK, and Deckorators each have different board profiles, color ranges, heat behavior, warranty language, and trim details. The best choice depends on exposure, budget, home style, and how the space will be used.',
      'Black aluminum railings, cable railing, low-voltage lighting, PVC trim, fascia details, and properly planned stairs can make the project feel more like an outdoor room than a basic deck. For screened porches and covered decks, roof tie-in details, drainage, airflow, fan placement, and lighting become just as important as decking color.',
      'We avoid making unsupported claims about completed projects. Verified project photos, addresses, and client approvals should be used before presenting a build as a Loudoun Decks case study.',
    ],
  },
];

const faqs = [
  {
    q: 'Do Mount Vernon and Alexandria outdoor living projects need permits?',
    a: 'Decks, screened porches, covered decks, roof structures, stairs, railings, and electrical work often require permit review. The exact path depends on whether the property is in Fairfax County, the City of Alexandria, an HOA-controlled community, or a special review area. A professional estimate should confirm jurisdiction before final pricing.',
  },
  {
    q: 'How much does a premium outdoor living project cost in Mount Vernon or Alexandria?',
    a: 'A serious composite deck replacement may start around the mid-five figures, while projects that combine a deck, screened porch, patio, railings, lighting, drainage, and premium materials can move significantly higher. Final cost depends on size, structure, access, materials, permit needs, and whether the work is phased.',
  },
  {
    q: 'Is this page different from the Alexandria deck builder page?',
    a: 'Yes. The Alexandria deck builder page supports broad deck-building searches. This page is focused on larger outdoor living intent in the Mount Vernon and Alexandria corridor, including composite decks, screened porches, covered decks, patios, lighting, railing upgrades, privacy, drainage, and phased backyard planning.',
  },
  {
    q: 'What materials work best near wooded or river-adjacent Alexandria neighborhoods?',
    a: 'Composite and PVC decking are usually easier to maintain than wood in shaded, humid, or leaf-heavy backyards. Aluminum railings, PVC trim, proper flashing, drainage planning, and low-voltage lighting can also help the project hold up better over time. Material selection should be matched to exposure and budget rather than chosen only by color.',
  },
  {
    q: 'Can a screened porch and deck be planned together?',
    a: 'Yes. Planning the screened porch and deck together is often better because roof loads, door locations, stairs, drainage, electrical needs, traffic flow, and future patio connections can be coordinated before construction. Even if the project is built in phases, the full layout should be mapped early.',
  },
  {
    q: 'What should homeowners prepare before requesting an estimate?',
    a: 'Helpful details include the address, photos of the current deck or backyard, the desired scope, HOA documents if available, whether the home is in Fairfax County or the City of Alexandria, preferred materials, budget range, and any concerns about drainage, privacy, stairs, or existing framing.',
  },
];

export default function MountVernonAlexandriaOutdoorLivingPage() {
  return (
    <main>
      <LocalBusinessSchema
        city="Mount Vernon and Alexandria"
        description="Premium outdoor living contractor serving Mount Vernon and Alexandria, Virginia with composite decks, screened porches, covered decks, patios, railings, lighting, permit planning, and backyard upgrades."
        url={pageUrl}
      />
      <WebPageSchema
        datePublished="2026-07-20"
        dateModified="2026-07-20"
        url={pageUrl}
        name="Mount Vernon Outdoor Living Contractor | Alexandria Decks & Porches"
        description="Premium outdoor living contractor for Mount Vernon and Alexandria, VA. Composite decks, screened porches, patios, railings, lighting, permits, HOA planning, and high-value backyard design."
        speakable
      />

      <ServicesHeader
        subtext="Mount Vernon + Alexandria Premium Outdoor Living"
        title="Outdoor Living Contractor for Mount Vernon and Alexandria, VA"
        description="Composite decks, screened porches, covered decks, patios, railings, lighting, and permit-aware planning for homeowners building a high-value backyard in the Mount Vernon and Alexandria corridor."
      />

      <ServiceMain
        subtitle="Premium Backyard Planning"
        title="Decks, Porches, Patios, and Outdoor Rooms Planned Together"
        description="Loudoun Decks helps Mount Vernon and Alexandria homeowners turn older decks, wooded backyards, and underused patio areas into durable outdoor living spaces with clear scope, premium materials, and code-aware planning."
        listItems={[
          'Composite and PVC decking options from Trex, TimberTech, AZEK, and Deckorators',
          'Screened porch, covered deck, and patio coordination',
          'Fairfax County, City of Alexandria, HOA, and site-planning awareness',
          'Stairs, railings, privacy, lighting, and drainage included in the layout conversation',
          'High-ticket estimate path for serious replacement and outdoor living projects',
        ]}
        image1="/images/homepage-intro-timbertech-deck.jpg"
        image2="/images/img36.jpeg"
      />

      <PlanningUpdate
        market="Mount Vernon and Alexandria outdoor living"
        notes={[
          'Confirm whether the property is governed by Fairfax County, City of Alexandria, HOA, or historic-area requirements before finalizing drawings or pricing.',
          'For wooded and river-adjacent homes, review moisture exposure, shade, drainage, railing visibility, stair safety, and long-term maintenance early.',
          'For larger projects, plan the full deck, porch, patio, lighting, and drainage system before phasing the build so today’s work does not block the next upgrade.',
        ]}
        links={[
          { href: '/deck-builder-alexandria-va', label: 'Alexandria deck builder' },
          { href: '/deck-permit-fairfax-county-virginia', label: 'Fairfax permit guide' },
          { href: '/outdoor-living-northern-virginia', label: 'Outdoor living hub' },
        ]}
      />

      <GeoAnswerBlock
        question="Who is a good fit for a Mount Vernon or Alexandria outdoor living estimate?"
        answer="The best fit is a homeowner planning a serious outdoor living project, not a minor repair: composite deck replacement, screened porch, covered deck, patio connection, stairs, railings, lighting, privacy, drainage, or a phased backyard upgrade. The estimate should start with jurisdiction, existing deck condition, photos, desired scope, and budget range."
        facts={[
          'Primary local market: Mount Vernon, Fort Hunt, Belle Haven, Waynewood, Hollin Hall, Old Town-adjacent Alexandria, Del Ray, and Kingstowne.',
          'Primary buyer intent: premium outdoor living, composite deck replacement, screened porch, covered deck, patio connection, and permit-aware planning.',
        ]}
        links={[
          { href: '/get-estimate', label: 'Request an outdoor living estimate' },
          { href: '/screened-porch-builder-northern-virginia', label: 'Screened porch planning' },
          { href: '/composite-deck-cost-northern-virginia', label: 'Composite deck cost guide' },
        ]}
      />

      <PremiumCityLeadQualifier
        city="Mount Vernon and Alexandria"
        county="Fairfax County and the City of Alexandria"
        intro="This market produces stronger leads when the first conversation confirms jurisdiction, existing structure, site access, HOA or historic-area rules, and whether the homeowner wants a deck-only rebuild or a larger outdoor living plan."
        projectTypes={[
          'Composite deck replacement with premium railing and lighting',
          'Screened porch or covered-deck additions tied into the home',
          'Deck and patio combinations for entertaining-focused backyards',
          'Older elevated decks needing structural review before resurfacing',
          'Phased outdoor living projects with future porch, kitchen, or patio zones',
        ]}
        planningSignals={[
          'Address and jurisdiction: Fairfax County, City of Alexandria, or HOA community',
          'Current deck photos, stair condition, railing condition, and visible framing concerns',
          'Preferred materials: Trex, TimberTech, AZEK, Deckorators, aluminum railing, lighting, or PVC trim',
          'Budget range and whether the project should be built all at once or phased',
        ]}
        links={[
          { href: '/get-estimate', label: 'Request premium estimate', primary: true },
          { href: '/deck-resurfacing-vs-replacement', label: 'Resurface vs replace' },
          { href: '/deck-safety-inspection-checklist', label: 'Safety checklist' },
        ]}
      />

      <ServiceContentExpansion sections={expansionSections} />

      <section style={{ background: '#f7f4ed', padding: '64px 20px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3vw, 2.55rem)', margin: '0 0 16px', color: '#111', textAlign: 'center' }}>
            Strong Internal Paths for Serious Homeowners
          </h2>
          <p style={{ maxWidth: 780, margin: '0 auto 32px', textAlign: 'center', color: '#555', lineHeight: 1.65 }}>
            These guides help homeowners compare scope, cost, permits, structure, and material choices before requesting a high-quality estimate.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(235px, 1fr))', gap: 16 }}>
            {[
              ['/deck-builder-alexandria-va', 'Alexandria Deck Builder', 'Broad local service page for Alexandria deck and porch searches.'],
              ['/outdoor-living-northern-virginia', 'Outdoor Living Hub', 'Full backyard planning across decks, patios, porches, lighting, and shade.'],
              ['/screened-porch-builder-northern-virginia', 'Screened Porches', 'Bug-free outdoor rooms for dining, relaxing, and entertaining.'],
              ['/covered-deck-builder-northern-virginia', 'Covered Decks', 'Roofed deck planning for shade, rain protection, and higher-value outdoor space.'],
              ['/services/patios', 'Patios', 'Ground-level outdoor living zones that connect with elevated decks and stairs.'],
              ['/trex-vs-timbertech-vs-azek', 'Material Comparison', 'Compare composite and PVC decking options before selecting a product line.'],
              ['/deck-permit-fairfax-county-virginia', 'Fairfax Permit Guide', 'Permit planning for many Mount Vernon, Fort Hunt, and Belle Haven properties.'],
              ['/deck-safety-inspection-checklist', 'Deck Safety Checklist', 'Review older deck structure before resurfacing or expanding the platform.'],
            ].map(([href, title, text]) => (
              <Link
                key={href}
                href={href}
                style={{ background: '#fff', border: '1px solid #e8dfd1', borderRadius: 8, padding: 20, color: '#111', textDecoration: 'none' }}
              >
                <h3 style={{ margin: '0 0 8px', fontSize: '1.05rem' }}>{title}</h3>
                <p style={{ margin: 0, color: '#555', lineHeight: 1.55 }}>{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceInclusions
        title="What the Estimate Should Clarify"
        description="The best Mount Vernon and Alexandria outdoor living estimates define scope, structure, permit path, materials, and phasing before work begins."
        items={inclusions}
      />

      <CityLeadFormSection
        city="Mount Vernon and Alexandria"
        county="Fairfax County and City of Alexandria"
        service="outdoor living, deck, porch, or patio project"
        formLocation="local_seo_mount_vernon_alexandria_outdoor_living"
        heading="Request a Mount Vernon or Alexandria outdoor living estimate"
        pageType="premium_local_outdoor_living_page"
      />

      <ServicesFAQ
        title="Mount Vernon and Alexandria Outdoor Living FAQs"
        faqs={faqs}
        canonicalUrl={pageUrl}
        withSpeakable
      />

      <SimpleCTA
        title="Planning a serious outdoor living project near Mount Vernon or Alexandria?"
        buttonText="Request Premium Estimate"
        link="/get-estimate"
      />

      <RelatedGuides currentPath="/outdoor-living-mount-vernon-alexandria-va" />
      <NamedAuthor context="Mount Vernon, Alexandria, and Northern Virginia outdoor living" lastUpdated="2026-07-20" />
      <ContactHome />
    </main>
  );
}
