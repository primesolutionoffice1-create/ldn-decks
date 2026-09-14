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
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import RelatedGuides from '@/components/RelatedGuides';
import SimpleCTA from '@/components/SimpleCTA';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import AboveFoldCTA from '@/components/AboveFoldCTA';
import GeoAnswerBlock from '@/components/GeoAnswerBlock';
import ArticleSchema from '@/components/ArticleSchema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: "/screened-porch-builder-northern-virginia",
  title: "Screened Porch Builder in Northern Virginia | Loudoun Decks",
  description: "Screened porch contractor serving Loudoun, Fairfax and Prince William counties. Custom screened-in porches, EZE-Breeze panels, permit planning, and written estimates.",
  image: "/social/screened-porch-builder-northern-virginia-social.png",
});

const PATH = '/screened-porch-builder-northern-virginia';

const inclusions = [
  {
    title: "Insect & Weather Protection",
    desc: "Screening helps reduce insects while maintaining airflow. Shade, exposure and weather affect comfort; standard mesh does not make a porch climate-controlled or reliably exclude pollen and wind-driven rain."
  },
  {
    title: "EZE-Breeze Window Systems",
    desc: "Upgrade your screened porch to a 3-season room with EZE-Breeze sliding panels, offering the protection of glass with the ventilation of screens."
  },
  {
    title: "Structural Engineering",
    desc: "Engineered to support heavy roof loads, ceiling fans, and integrate seamlessly with your existing roofline for a flawless architectural match."
  }
];

const screenedPorchGeoAnswers = [
  {
    id: 'screened-porch-cost-answer',
    q: 'How much does a screened porch cost in Northern Virginia?',
    a: 'Screened porch cost depends on size, roof design, foundation or deck condition, electrical work, railing, flooring, screens, doors, trim, permits, and HOA requirements. A simple screened enclosure costs less than a custom roofed porch or three-season room. Final pricing requires design scope and site evaluation.',
  },
  {
    id: 'screened-porch-timeline',
    q: 'How long does a screened porch project take?',
    a: 'Screened porch timelines depend on design, permit review, HOA approval, material availability, inspections, weather, and whether the porch is built on a new or existing deck structure. A roofed porch or enclosure generally requires more planning than a simple screen system because structural and electrical details are involved.',
  },
  {
    id: 'screened-porch-permits',
    q: 'Does a screened porch need a permit?',
    a: 'Many screened porch projects need permits when they include a roof, structural framing, electrical work, new footings, or changes to an existing deck. Requirements vary by Northern Virginia county and project scope. HOA approval may also be needed before construction starts.',
  },
  {
    id: 'screened-porch-vs-covered-deck',
    q: 'Screened porch vs covered deck: which is better?',
    a: 'A screened porch is better when insect control, shade, and a more enclosed outdoor room are priorities. A covered deck is better when the homeowner wants shade and rain protection while keeping a more open-air feel. The best choice depends on budget, structure, lifestyle, and HOA limits.',
  },
  {
    id: 'eze-breeze-three-season-fit',
    q: 'Is EZE-Breeze or a three-season porch worth it?',
    a: 'EZE-Breeze or three-season porch systems may be worth considering when homeowners want more weather flexibility than standard screens but do not need a fully conditioned addition. The fit depends on budget, exposure, ventilation goals, winter expectations, and whether the existing structure can support the enclosure.',
  },
  {
    id: 'screened-porch-on-existing-deck',
    q: 'Can a screened porch be built on an existing deck?',
    a: 'A screened porch can sometimes be built on an existing deck, but the deck must be evaluated for load capacity, footing condition, ledger attachment, framing, rail layout, and code compliance. Adding a roof or enclosure changes structural demands, so inspection should happen before design assumptions are finalized.',
  },
];

const faqs = [
  {
    q: "How much does a screened porch cost in Northern Virginia?",
    a: "Screened porch cost depends on size, roof design, foundation or deck condition, electrical work, railing, flooring, screens, doors, trim, permits, and HOA requirements. A simple screened enclosure costs less than a custom roofed porch or three-season room. Final pricing requires design scope and site evaluation."
  },
  {
    q: "Do I need a permit to build a screened porch in Virginia?",
    a: "Many screened porch projects in Northern Virginia require a building permit because they include a roofed structure, footings, ledger attachment, electrical work, or structural framing. Loudoun County permit intake runs through LandMARC, Fairfax County applications start in PLUS, and Prince William County uses its ePortal path. Permit handling should be confirmed in the written scope."
  },
  {
    q: "Can you build a screened porch over an existing deck?",
    a: "A screened porch can sometimes be built on an existing deck, but the deck must be evaluated for load capacity, footing condition, ledger attachment, framing, rail layout, and code compliance. Adding a roof or enclosure changes structural demands, so inspection should happen before design assumptions are finalized."
  },
  {
    q: "What is the difference between a screened porch and a three-season room?",
    a: "A screened porch uses mesh for insect control and open airflow. A three-season room adds enclosure panels that can reduce weather exposure when closed. Planning a later conversion requires checking the selected panel system, opening sizes, structure and permit scope; it should not be assumed to need no additional construction."
  },
  {
    q: "What are EZE-Breeze windows and are they worth it?",
    a: "EZE-Breeze is a sliding vinyl panel system that looks like glass but is lighter than traditional glass panels. The panels open for screen-only airflow or close to block rain, wind and pollen. It may be a strong upgrade when homeowners want more seasonal flexibility without converting the porch into a fully conditioned addition."
  },
  {
    q: "How long does it take to build a screened porch?",
    a: "Timing depends on design, permit review, HOA approval, material availability, inspections, weather, and whether the porch is built on a new or existing deck. A roofed porch or deck-plus-porch package usually needs more planning than a simple screen system."
  },
  {
    q: "Do you handle the HOA approval for screened porches?",
    a: "HOA approval is common in communities like Brambleton, Broadlands, Ashburn Village, Reston Association and South Riding. The written scope should clarify who prepares drawings, color samples, material cut sheets, and the project description for the architectural review committee."
  },
  {
    q: "Can I add a fireplace to my screened porch?",
    a: "A fireplace may be possible, depending on the porch design and the appliance's listed installation requirements. Confirm structural support, clearances, venting, fuel supply and applicable permits before selecting a unit. Request a separate allowance for the appliance and installation; do not assume a fireplace makes an open porch suitable for year-round use."
  },
];

const expansionSections = [
  {
    title: "How to choose a screened porch contractor in Northern Virginia",
    paragraphs: [
      "Selecting a screened porch contractor in Northern Virginia is different from hiring a standard deck crew. A screened porch is a roofed structure tied to the house framing, so the project can involve structural drawings, roof load calculations, ledger attachment details, county permit review, and HOA approval.",
      "Ask any screened porch contractor these three questions before signing a contract: (1) Who prepares the structural drawings? (2) Does the estimate include permit fees and inspection coordination, or are those billed separately? (3) What happens if the county requests plan revisions? The answers should be clear in the written scope.",
      "For LDN projects, the proposal should separate structural drawings, site plans, material specs, HOA package needs, permit handling, and any revision assumptions so homeowners understand what is included before construction begins.",
    ],
    listItems: [
      { label: "Verify licensing", text: "Check current Virginia contractor licensing before signing. Structural porch work should be handled by a properly licensed contractor for the project scope." },
      { label: "Confirm permit handling", text: "A qualified screened porch contractor submits the full permit package — drawings, site plan, and footing schedule — not just a simple deck permit application." },
      { label: "Require itemized estimates", text: "Written, line-item estimates protect against scope creep. Ask for a breakdown of materials, labor, permit fees, and drawing costs before committing." },
      { label: "Check HOA experience", text: "In Ashburn, Brambleton, Broadlands, Reston and South Riding, HOA ARC approval runs parallel to the county permit. Your contractor should prepare both packages." },
    ]
  },
  {
    title: "Why Northern Virginia homeowners build screened porches",
    paragraphs: [
      "Northern Virginia weather gives homeowners many useful outdoor days, but humid summers, mosquitoes, pollen, and sudden afternoon storms can limit open-deck use. A screened porch helps reduce those interruptions while keeping an outdoor feel.",
      "A screened porch can be a high-value outdoor living upgrade when it matches the home, neighborhood expectations, and buyer use patterns. ROI should be evaluated with current local market data, project cost, and the quality of the final design rather than treated as a universal guarantee.",
      "At Loudoun Decks, we build screened porches that look like they were part of the original house — matched rooflines, continuous siding, and architectural trim that tie the addition into the existing structure rather than bolting it on as an afterthought."
    ]
  },
  {
    title: "Screened porch vs. three-season room vs. sunroom",
    paragraphs: [
      "A screened porch uses mesh and a roof for shade, airflow and insect control. A [three-season room](/three-season-room-northern-virginia) adds enclosure panels that can reduce weather exposure when closed. A conditioned sunroom involves insulation, suitable windows and heating or cooling. Compare the specific design and intended use rather than assuming a fixed number of comfortable months.",
      "Many Northern Virginia homeowners choose a screened porch with the option to add EZE-Breeze panels later, which can create a clearer upgrade path without starting from scratch. A full sunroom addition requires HVAC, insulation, and a more intensive permit review.",
    ],
    listItems: [
      { label: "Screened porch", text: "Screening plus roof. Good fit for airflow, shade, and insect control. Permit path depends on structure and county rules." },
      { label: "Three-season room", text: "EZE-Breeze or glass-style panels. Better weather flexibility than screens, without becoming a fully conditioned addition." },
      { label: "Sunroom addition", text: "Full HVAC, insulation, and conditioned interior space. Usually a materially different budget and permit path." },
    ]
  },
  {
    title: "Screened porch cost breakdown for Northern Virginia",
    paragraphs: [
      "Screened porch pricing in Northern Virginia depends on square footage, roof complexity, flooring material, electrical scope, permit and HOA requirements, and whether the structure ties into an existing deck or starts from new footings. The following scope examples help organize a written site-specific estimate:",
    ],
    listItems: [
      { label: "Standard screened porch", text: "Smaller roofed porch with standard screening, basic electrical, and straightforward framing conditions." },
      { label: "Mid-range screened porch", text: "Larger porch with roofline integration, upgraded flooring, lighting, fan, and possible EZE-Breeze planning." },
      { label: "Premium outdoor living package", text: "Large screened porch plus open deck, vaulted ceiling, fireplace allowance, lighting package, and drainage or lower-patio planning." },
    ]
  },
  {
    title: "Permits, structural engineering and HOA approvals",
    paragraphs: [
      "Confirm the permit category with the authority responsible for the property. A new roofed porch can require building and zoning review, structural drawings and separate electrical or fuel-gas permits. Whether a registered design professional is needed depends on the design and jurisdiction. HOA approval, when applicable, is separate from county approval.",
      "In [Loudoun County](/deck-permit-loudoun-county-virginia), screened porch permits should be matched to the LandMARC building and zoning permit path before submission. [Fairfax County](/deck-permit-fairfax-county-virginia) starts building applications in PLUS, while [Prince William County](/deck-permit-prince-william-county-virginia) routes residential deck and porch work through zoning approval and ePortal-backed building review. Permit package responsibilities should be stated in the written estimate.",
      "For [HOA-governed communities](/hoa-deck-rules-northern-virginia) in Ashburn, Brambleton, Broadlands, Reston and South Riding, the architectural review committee (ARC) may require a separate submission with drawings, color samples, and material cut sheets. The HOA and county permit timing should be planned together."
    ]
  },
  {
    title: "The deck and screened porch combination",
    paragraphs: [
      "A [composite deck](/composite-deck-builder-loudoun) can be planned alongside a screened porch to provide both open and enclosed outdoor space. For a walkout basement, discuss drainage and a lower patio as separate scope items. Compare the costs of the porch, open deck, stairs and drainage system rather than assuming one is included with another.",
      "The design must account for the roof, porch and deck loads through the framing, connections, posts and footings. Existing deck members should not be assumed adequate for added roof loads. A qualified designer should establish the load path and required supports; the permitting authority determines whether plans and construction satisfy applicable requirements.",
      "Deck-plus-screened-porch packages in Northern Virginia vary widely depending on total square footage, materials, roof complexity, structural requirements, and feature level. Use the [full cost guide for Northern Virginia decks](/composite-deck-cost-northern-virginia) and [monthly payment estimator](/deck-payment-estimator) for planning before requesting a written estimate."
    ]
  },
  {
    title: "Custom features and materials",
    paragraphs: [
      "Every screened porch we build is designed for the specific home and homeowner. Standard features include high-visibility fiberglass screening (pet-resistant upgrade available), composite flooring from [Trex](/trex-decks) or [TimberTech](/timbertech-decks), and a roof structure that matches the existing house pitch, soffit and fascia.",
    ],
    listItems: [
      { label: "EZE-Breeze enclosures", text: "Sliding vinyl panels that look like glass. Convert a screened porch into a three-season room. Open fully for airflow or close for rain and wind protection." },
      { label: "Vaulted ceilings", text: "Cathedral or exposed-beam ceilings that add volume and architectural interest. Beadboard or tongue-and-groove finish options." },
      { label: "Ceiling fans and lighting", text: "Wet-rated ceiling fans, recessed LED downlights, and perimeter rope lighting for evening ambiance. All electrical is pre-wired during framing." },
      { label: "Outdoor fireplaces", text: "Gas or wood-burning stone fireplaces built into the screened porch for fall and winter use. Requires gas line and additional structural support." },
    ]
  },
];

export default function ScreenedPorchBuilderNovaPage() {
  return (
    <main>
      <WebPageSchema dateModified="2026-09-13" url={`https://ldndecks.com${PATH}`} name="Screened Porch Contractor & Builder Northern Virginia" description="Screened porch contractor serving Loudoun, Fairfax and Prince William counties. Custom screened-in porches, EZE-Breeze planning, permit coordination, and written estimates." speakable />
      <ArticleSchema
        title="Screened Porch Contractor and Builder in Northern Virginia"
        description="Screened porch contractor guidance for Northern Virginia homeowners comparing roof loads, permits, EZE-Breeze upgrades, open deck combinations, HOA approvals, and written estimates."
        path={PATH}
        image="/images/img01.jpeg"
        datePublished="2026-05-26"
        dateModified="2026-09-13"
        speakable={[
          '#screened-porch-builder-answer',
          '#screened-porch-contractor-selection',
          '#screened-porch-weather-roi',
          '#screened-porch-room-comparison',
          '#screened-porch-permit-hoa',
          '#screened-porch-deck-combination',
          '#screened-porch-estimate-routing',
        ]}
        citableParts={[
          {
            id: 'screened-porch-builder-answer',
            name: 'Screened porch builder quick answer',
            text: 'A screened porch contractor in Northern Virginia should handle roof framing, footings, ledger attachment, county permits, HOA packets, screening systems, electrical rough-in, and final inspection coordination.',
          },
          ...screenedPorchGeoAnswers.map((item) => ({
            id: item.id,
            name: item.q,
            text: item.a,
          })),
          {
            id: 'screened-porch-contractor-selection',
            name: 'Screened porch contractor selection',
            text: 'Homeowners should verify licensing, insurance, structural drawing ownership, permit handling, revision handling, and itemized estimate detail before choosing a screened porch contractor.',
          },
          {
            id: 'screened-porch-weather-roi',
            name: 'Screened porch weather and value fit',
            text: 'Screened porches provide shade and reduce insect exposure while retaining outdoor airflow. Temperature, pollen and wind-driven rain remain relevant when selecting screens or enclosure panels.',
          },
          {
            id: 'screened-porch-room-comparison',
            name: 'Screened porch versus three-season room',
            text: 'A screened porch uses mesh and a roof for airflow; a three-season room adds vinyl or glass panels; a sunroom adds conditioned interior space and a more intensive permit path.',
          },
          {
            id: 'screened-porch-permit-hoa',
            name: 'Screened porch permit and HOA planning',
            text: 'Screened porches are roofed structures, so county review can include roof loads, ledger attachment, footings, wind uplift, electrical work, and HOA architectural approval.',
          },
          {
            id: 'screened-porch-deck-combination',
            name: 'Deck and screened porch combination',
            text: 'A deck and screened porch combination requires a designed load path through adequate framing, connections, posts and footings. Plan the porch, open deck, stairs and lower patio together.',
          },
          {
            id: 'screened-porch-estimate-routing',
            name: 'Screened porch estimate routing',
            text: 'A screened porch estimate should capture roof style, square footage, EZE-Breeze or screen selection, flooring, electrical scope, fireplace allowance, permit path, HOA needs, and open deck tie-ins.',
          },
        ]}
      />
      <ServiceSchema
        name="Screened Porch Construction"
        description="Custom screened porches and 3-season rooms in Northern Virginia. EZE-Breeze planning, structural scope review, permit coordination, and HOA planning."
        url="https://ldndecks.com/screened-porch-builder-northern-virginia"
        category="Porch Construction"
        relatedServices={['https://ldndecks.com/three-season-room-northern-virginia', 'https://ldndecks.com/covered-deck-builder-northern-virginia', 'https://ldndecks.com/services/porches']}
      />

      <ServicesHeader
        subtext="Northern Virginia's Premier Porch Contractor"
        title="Screened Porch Contractor & Builder — Northern Virginia"
        description="Screened porch contractor serving Loudoun, Fairfax and Prince William counties. Custom screened-in porches, EZE-Breeze planning, structural scope review, and permit or HOA coordination in the written proposal."
      />
      <AboveFoldCTA headline="Need a screened porch contractor in Northern Virginia? Get a written itemized estimate after structure, permits, and HOA needs are reviewed." />

      <section id="screened-porch-builder-answer" data-speakable="screened-porch-builder-answer">
        <GeoAnswerBlock
          question="What should a screened porch contractor handle in Northern Virginia?"
          answer="A screened porch contractor in Northern Virginia should manage more than the screen panels. The scope should include roof framing, roof-to-house integration, footing and post load paths, ledger attachment, county permit documents, HOA architectural packets, electrical rough-in, EZE-Breeze or screen-system details, and inspection coordination. That is why screened porches should be scoped as structural additions, not simple deck accessories."
          facts={[
            'Best fit: shaded dining, reduced insect exposure, and an outdoor room with open airflow',
            'Key structural items: roof loads, footings, ledger attachment, wind uplift, and electrical rough-in',
            'Decision path: compare screened porch, covered deck, three-season room, and open deck combinations',
          ]}
          links={[
            { href: '/screened-porch-cost-northern-virginia', label: 'Screened porch cost guide' },
            { href: '/covered-deck-builder-northern-virginia', label: 'Covered deck builder' },
            { href: '/deck-permit-loudoun-county-virginia', label: 'Loudoun permit guide' },
            { href: '/deck-permit-fairfax-county-virginia', label: 'Fairfax permit guide' },
            { href: '/get-estimate', label: 'Get a written estimate' },
          ]}
        />
      </section>
      <section style={{ padding: '2.5rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {screenedPorchGeoAnswers.map((item) => (
              <section key={item.id} id={item.id} data-speakable={item.id} style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: '1rem', background: '#fbfdff' }}>
                <h2 style={{ fontSize: '1.08rem', fontWeight: 800, marginBottom: '0.55rem' }}>{item.q}</h2>
                <p style={{ margin: 0, lineHeight: 1.65, color: '#334155' }}>{item.a}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
      
      <ServiceMain
        subtitle="Bug-Free Outdoor Living"
        title="Expert Screened Porch Construction"
        description="A screened porch combines a roof and mesh screening for shaded outdoor living with fewer insects. It remains an outdoor space: temperature, pollen and wind-driven rain can still affect comfort. Discuss screen selection, optional enclosure panels and structural requirements before choosing the design."
        listTitle="Custom Features:"
        listItems={[
          "High-visibility and pet-resistant screening",
          "EZE-Breeze 3-season window systems",
          "Vaulted ceilings with exposed beams",
          "Integrated electrical, lighting & ceiling fans",
          "Full HOA & County Permit management"
        ]}
        image1="/images/img01.jpeg"
        image2="/images/img11.jpeg"
      />
      
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <NamedAuthor context="Loudoun, Fairfax and Prince William counties" lastUpdated="2026-09-13" />
      </div>
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1.5rem 0' }}>
        <h2 id="screened-porch-contractor-selection" data-speakable="screened-porch-contractor-selection" style={{ fontSize: '1.55rem', fontWeight: 800, marginBottom: '0.8rem' }}>
          Screened porch contractor checks before you sign
        </h2>
        <p style={{ lineHeight: 1.7, marginBottom: '1rem' }}>
          Before hiring a screened porch builder, confirm who owns the structural drawings, whether permit fees and
          revision cycles are included, and how the contractor handles HOA architectural packets. The project should
          be priced from a written scope that separates porch size, roof shape, flooring, screening system, electrical
          work, fireplace or heater allowance, and open-deck tie-ins.
        </p>
        <h2 id="screened-porch-weather-roi" data-speakable="screened-porch-weather-roi" style={{ fontSize: '1.55rem', fontWeight: 800, marginBottom: '0.8rem' }}>
          Why screened porches fit Northern Virginia weather
        </h2>
        <p style={{ lineHeight: 1.7, marginBottom: '1rem' }}>
          A screened porch provides shade and helps reduce insect exposure while retaining outdoor airflow.
          It does not control temperature or reliably exclude pollen and wind-driven rain. Compare screening
          and enclosure options against the property's exposure and the seasons when you expect to use it.
        </p>
        <h2 id="screened-porch-room-comparison" data-speakable="screened-porch-room-comparison" style={{ fontSize: '1.55rem', fontWeight: 800, marginBottom: '0.8rem' }}>
          Screened porch, three-season room, or sunroom
        </h2>
        <p style={{ lineHeight: 1.7, marginBottom: '1rem' }}>
          A screened porch keeps airflow and bug protection. A three-season room adds EZE-Breeze-style vinyl or glass
          panels for wind and rain control. A sunroom becomes conditioned interior space, so the budget, insulation,
          HVAC, and permit path are materially different.
        </p>
        <h2 id="screened-porch-permit-hoa" data-speakable="screened-porch-permit-hoa" style={{ fontSize: '1.55rem', fontWeight: 800, marginBottom: '0.8rem' }}>
          Permit and HOA path for a roofed porch
        </h2>
        <p style={{ lineHeight: 1.7, marginBottom: '1rem' }}>
          Because a screened porch is a roofed structure, the county review can include roof loads, ledger attachment,
          footings, wind uplift, and electrical work. For most Loudoun and Fairfax neighborhoods, the HOA packet should
          move in parallel with the county permit so color, roofline, trim, and material decisions do not delay the build.
        </p>
        <h2 id="screened-porch-deck-combination" data-speakable="screened-porch-deck-combination" style={{ fontSize: '1.55rem', fontWeight: 800, marginBottom: '0.8rem' }}>
          Deck plus screened porch combinations
        </h2>
        <p style={{ lineHeight: 1.7 }}>
          Plan a verified load path through adequate framing, connections, posts and footings before adding a roof.
          Coordinate stairs, railing, lighting, drainage and lower patio use in the same design. Existing deck
          components may require changes; the assessment and written scope should identify those requirements.
        </p>
      </section>
      <ServiceContentExpansion sections={expansionSections} />

      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Screened Porch Resources</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            ['/screened-porch-cost-northern-virginia', 'Screened Porch Cost Guide for Northern Virginia'],
            ['/three-season-room-northern-virginia', 'Three-Season Room Options in Northern Virginia'],
            ['/covered-deck-builder-northern-virginia', 'Covered Deck Builder in Northern Virginia'],
            ['/deck-enclosure-ideas-northern-virginia', 'Deck Enclosure Ideas for Northern Virginia Homes'],
            ['/composite-deck-builder-loudoun', 'Composite Deck Builder in Loudoun County'],
            ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
          ].map(([href, text]) => (
            <li key={href} style={{ marginBottom: '0.5rem' }}>
              <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link>
            </li>
          ))}
        </ul>
      </section>
      
      <ServiceInclusions
        title="What Our Porch Building Team Delivers"
        description="We focus on creating a space that matches your lifestyle and enhances your home's architecture."
        items={inclusions}
      />
      
      <ProcessSteps />
      
      <ServicesFAQ
        title="Screened Porch FAQs"
        faqs={faqs}
        canonicalUrl="https://ldndecks.com/screened-porch-builder-northern-virginia"
      />
      
      <ServiceAreasGrid />
      
      <section id="screened-porch-estimate-routing" data-speakable="screened-porch-estimate-routing">
        <SimpleCTA
          title="Start Your Screened Porch Project"
          buttonText="Get Free Estimate"
          link="/get-estimate"
        />
      </section>
      
      <RelatedGuides currentPath="/screened-porch-builder-northern-virginia" category="ai-retrieval" />
      <ContactHome />
    </main>
  );
}
