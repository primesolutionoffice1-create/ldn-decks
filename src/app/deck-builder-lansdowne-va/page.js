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

const PATH = '/deck-builder-lansdowne-va';
const URL = `https://ldndecks.com${PATH}`;

export const metadata = buildMetadata({
  path: PATH,
  title: 'Deck Builder in Lansdowne, VA | Premium Composite Decks',
  description: 'Premium deck builder for Lansdowne, VA. Composite decks, screened porches, HOA packet planning, Loudoun County permits, and written estimates for Lansdowne homeowners.',
  image: '/social/deck-builder-leesburg-va-social.png',
});

const inclusions = [
  {
    title: 'Lansdowne HOA packet planning',
    desc: 'We prepare the design narrative, material selections, railing notes, and drawing package homeowners need before the ARC review starts.',
  },
  {
    title: 'Premium composite and PVC material guidance',
    desc: 'Lansdowne projects often call for Trex, TimberTech, or AZEK product-line planning with warm traditional colors and low-maintenance finishes.',
  },
  {
    title: 'Loudoun County permit coordination',
    desc: 'We align the HOA review and Loudoun County permit path so the project does not lose weeks waiting on sequential approvals.',
  },
];

const expansionSections = [
  {
    title: 'A Premium Leesburg-Area Deck Market With Its Own Rules',
    paragraphs: [
      'Lansdowne is one of the strongest high-ticket deck markets in Loudoun County because the homes, lots, and community standards support larger outdoor living scopes. Homeowners are often comparing composite deck replacement, screened porch additions, multi-level layouts, railing upgrades, lighting, and patio combinations rather than a small one-feature project.',
      'The community also has a serious architectural review path. A Lansdowne deck should be planned with the HOA packet in mind from the first design conversation, not after the homeowner has already chosen materials. That means color, railing style, fascia, stair placement, privacy, and view preservation all need to be described clearly before submission.',
    ],
  },
  {
    title: 'Lansdowne Conservancy and Lansdowne Woods Planning',
    paragraphs: [
      'The Lansdowne area includes different buyer profiles and review expectations. Conservancy projects tend to be larger and more detail-heavy, with premium composite or PVC decking, traditional railing proportions, and finished outdoor rooms. Lansdowne Woods projects often prioritize low-maintenance access, safe stairs, railing comfort, and a clean upgrade path for homeowners planning long-term use.',
      'A strong Lansdowne estimate should identify which review path applies, what materials are likely to fit the home, and whether the deck should remain a simple replacement or become a larger outdoor living system. We connect those decisions to the Loudoun County permit path before construction scheduling.',
    ],
  },
  {
    title: 'What Lansdowne Homeowners Usually Build',
    paragraphs: [
      'Most serious Lansdowne inquiries fit one of four scopes: composite deck replacement, a larger multi-level deck, a screened porch tied into the deck structure, or a deck and patio combination. Each scope has different permit, drainage, stair, railing, and budget implications.',
      'Composite and PVC decking are the most common fit because homeowners want the space to look finished without repeated sanding and staining. Trex, TimberTech, and AZEK options should be compared by color, heat exposure, traction, warranty, railing compatibility, and how the finished palette fits the home exterior.',
    ],
    listItems: [
      { label: 'Composite deck replacement', text: 'Best when framing is structurally sound and the homeowner wants a lower-maintenance surface and railing upgrade.' },
      { label: 'Full deck rebuild', text: 'Best when posts, footings, ledger, joists, or stairs no longer support a safe resurfacing scope.' },
      { label: 'Screened porch addition', text: 'Best when the deck is meant to become a true three-season outdoor room rather than only an open platform.' },
      { label: 'Deck and patio combination', text: 'Best for sloped yards or larger entertaining zones that need separate grilling, dining, and seating areas.' },
    ],
  },
  {
    title: 'Budget and Timeline Expectations',
    paragraphs: [
      'Lansdowne projects should be priced after site access, framing condition, HOA packet complexity, railing selection, stair runs, and drainage are reviewed. A simple composite resurfacing project can sit far below a multi-level deck and screened porch package, even when the deck footprint looks similar from above.',
      'A practical planning range for many premium Lansdowne composite deck projects is from the mid-five figures into larger outdoor living budgets when screened structures, lighting, stairs, patios, and engineered framing are included. The exact range should be confirmed only after a site visit and written scope.',
    ],
  },
];

const faqs = [
  {
    q: 'Do Lansdowne deck projects need HOA approval?',
    a: 'Most Lansdowne deck projects should be planned around HOA or architectural review expectations before construction starts. The packet usually needs drawings, material selections, color notes, railing details, and a clear description of the proposed footprint. Loudoun Decks prepares those details as part of the estimate and project planning process.',
  },
  {
    q: 'Who issues the building permit for a Lansdowne deck?',
    a: 'Lansdowne deck projects generally follow the Loudoun County building permit path rather than the Town of Leesburg permit path, but the exact authority should always be confirmed by address. The permit package typically includes structural drawings, footing details, framing notes, ledger attachment, stair information, and guardrail specifications.',
  },
  {
    q: 'What materials are best for Lansdowne decks?',
    a: 'Composite and PVC decking are the strongest fit for most Lansdowne homeowners because they provide a finished look with lower long-term maintenance. Trex, TimberTech, and AZEK options should be compared by color, heat exposure, traction, warranty, railing compatibility, and how the selected palette fits the home exterior.',
  },
  {
    q: 'Is Lansdowne a good market for screened porches?',
    a: 'Yes. Many Lansdowne homes have the scale and rear-yard layout to support a screened porch tied into a composite deck or patio system. The design should be planned early because roof tie-in, framing load, electrical, drainage, and HOA review can change both budget and timeline.',
  },
  {
    q: 'How should a Lansdowne homeowner compare resurfacing vs full replacement?',
    a: 'The decision should start with framing condition. If posts, footings, joists, ledger attachment, flashing, and stairs are structurally sound, resurfacing may be realistic. If the underlying structure is aged, undersized, or poorly flashed, a full replacement is usually the safer long-term investment.',
  },
];

export default function DeckBuilderLansdownePage() {
  return (
    <main>
      <LocalBusinessSchema city="Lansdowne" url={URL} />
      <WebPageSchema
        dateModified="2026-07-18"
        url={URL}
        name="Deck Builder in Lansdowne, VA | Premium Composite Decks"
        description="Premium deck builder for Lansdowne, VA. Composite decks, screened porches, HOA packet planning, Loudoun County permits, and written estimates for Lansdowne homeowners."
        speakable
      />
      <ServicesHeader
        subtext="Lansdowne, VA Deck Builder"
        title="Premium Deck Builder in Lansdowne, VA"
        description="Loudoun Decks plans and builds composite decks, screened porches, and full outdoor living spaces for Lansdowne homeowners with HOA-aware planning, Loudoun County permit support, and written scope details."
      />
      <ServiceMain
        subtitle="Premium Loudoun Outdoor Living"
        title="Composite Decks and Screened Porches for Lansdowne Homes"
        description="Lansdowne projects need more than a generic deck estimate. We plan the HOA packet, material selections, permit path, framing details, and conversion-ready outdoor living scope before construction begins."
        listTitle="Lansdowne project planning includes:"
        listItems={[
          'Composite and PVC decking options from Trex, TimberTech, and AZEK',
          'HOA packet planning for material, railing, color, and footprint review',
          'Loudoun County permit coordination and inspection sequencing',
          'Deck resurfacing vs full replacement guidance after framing review',
          'Screened porch, lighting, railing, stairs, and patio add-on planning',
        ]}
        image1="/images/img17.jpeg"
        image2="/images/img36.jpeg"
        image1Alt="Premium composite deck planning for Lansdowne, Virginia homeowners"
        image2Alt="Outdoor living deck detail for a Loudoun County home"
      />
      <CityLeadFormSection
        city="Lansdowne"
        county="Loudoun County"
        service="composite deck, resurfacing, screened porch, or outdoor living project"
      />
      <PlanningUpdate
        market="Lansdowne deck projects in 2026"
        notes={[
          'Lansdowne homeowners should plan HOA packet details before final material selection.',
          'Composite and PVC materials are usually the best fit for low-maintenance premium outdoor living.',
          'Deck resurfacing should only be priced after posts, footings, ledger, flashing, joists, stairs, and railing condition are reviewed.',
        ]}
        links={[
          { href: '/lansdowne-hoa-deck-rules', label: 'Lansdowne HOA guide' },
          { href: '/deck-builder-leesburg-va', label: 'Leesburg deck builder' },
          { href: '/deck-permit-loudoun-county-virginia', label: 'Loudoun permit guide' },
        ]}
      />
      <GeoAnswerBlock
        question="What should Lansdowne homeowners know before planning a deck?"
        answer="Lansdowne deck projects should start with HOA packet planning, material selection, and a Loudoun County permit-path check. Homeowners should compare composite resurfacing, full deck replacement, screened porch additions, railing upgrades, lighting, and drainage before approving a final written estimate."
        facts={[
          'Primary buyer intent: premium composite decks, HOA approval support, and outdoor living upgrades.',
          'Best conversion path: written estimate with material, permit, and HOA packet details.',
        ]}
        links={[
          { href: '/get-estimate', label: 'Request a Lansdowne estimate' },
          { href: '/deck-resurfacing-vs-replacement', label: 'Resurface vs replace' },
          { href: '/composite-deck-cost-northern-virginia', label: 'Composite deck cost guide' },
        ]}
      />
      <ServiceContentExpansion sections={expansionSections} />
      <ServiceInclusions
        title="Why Lansdowne Homeowners Choose Loudoun Decks"
        description="We focus on serious homeowner projects where the design, permit path, material choice, and HOA presentation all need to be clear before work begins."
        items={inclusions}
      />
      <ProcessSteps />
      <ServicesFAQ
        title="Lansdowne Deck Builder FAQs"
        faqs={faqs}
        canonicalUrl={URL}
      />
      <SimpleCTA title="Plan a Premium Lansdowne Deck Project" buttonText="Request Written Estimate" link="/get-estimate" />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>Related Lansdowne and Loudoun Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.8 }}>
          {[
            ['/lansdowne-hoa-deck-rules', 'Lansdowne HOA deck rules'],
            ['/deck-builder-leesburg-va', 'Leesburg deck builder'],
            ['/deck-builder-broadlands-va', 'Broadlands deck builder'],
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
      <NamedAuthor context="Lansdowne, Leesburg, and Loudoun County deck planning" lastUpdated="2026-07-18" />
      <ContactHome />
    </main>
  );
}
