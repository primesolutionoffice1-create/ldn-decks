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
  title: "Screened Porch Contractor & Builder Northern Virginia | Loudoun Decks",
  description: "Screened porch contractor serving Loudoun, Fairfax and Prince William counties. Custom screened-in porches, EZE-Breeze panels, permit planning, and written estimates.",
  image: "/social/screened-porch-builder-northern-virginia-social.png",
});

const PATH = '/screened-porch-builder-northern-virginia';

const inclusions = [
  {
    title: "Insect & Weather Protection",
    desc: "Extend your outdoor season to 9-10 months. We use high-durability screening materials that provide maximum airflow while keeping Virginia's mosquitoes and gnats out."
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
    a: "A custom screened porch in Northern Virginia typically ranges from $25,000 to $55,000+ depending on size, roof complexity, flooring material, and upgrades like EZE-Breeze panels or fireplaces. A deck-plus-screened-porch combination usually runs $45,000 to $90,000+. We provide itemized written estimates after a site evaluation."
  },
  {
    q: "Do I need a permit to build a screened porch in Virginia?",
    a: "Many screened porch projects in Northern Virginia require a building permit because they include a roofed structure, footings, ledger attachment, electrical work, or structural framing. Loudoun County permit intake runs through LandMARC, Fairfax County applications start in PLUS, and Prince William County uses its ePortal path. Permit handling should be confirmed in the written scope."
  },
  {
    q: "Can you build a screened porch over an existing deck?",
    a: "Sometimes. If the existing deck footings and frame were originally engineered to support a roof load, we can add a screened porch structure on top. Most standard residential decks, however, were not designed for vertical load, so the footings and posts need reinforcement or replacement. We assess the existing structure during the site evaluation and give an honest recommendation."
  },
  {
    q: "What is the difference between a screened porch and a three-season room?",
    a: "A screened porch uses fine-mesh screening for insect protection and open airflow. A three-season room adds glass or vinyl panels — like EZE-Breeze — that block wind, rain and pollen while still ventilating. Many of our clients start with a screened porch and add EZE-Breeze panels later to extend usability into the colder months without a second construction project."
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
    a: "Yes. We install both gas and wood-burning stone fireplaces in screened porches. A gas fireplace requires a gas line run (typically $1,500–$3,000 for the line itself) plus the unit, stone surround and structural support. Wood-burning fireplaces require a chimney and additional clearance from combustible screening. Both options make a screened porch usable well into December in Northern Virginia."
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
      "Homeowners often ask which enclosed outdoor space is right for their home. The choice comes down to usage season, budget and permit complexity. A screened porch uses fine-mesh screening and a roof to create a bug-free outdoor room that works from late March through November in Northern Virginia. A [three-season room](/three-season-room-northern-virginia) adds glass or vinyl panels (like EZE-Breeze) that block wind, rain and pollen while still ventilating in warm weather. A full sunroom is a conditioned addition with insulated walls, HVAC and windows — essentially a new room of the house.",
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
      "Screened porch pricing in Northern Virginia depends on square footage, roof complexity, flooring material, electrical scope, permit and HOA requirements, and whether the structure ties into an existing deck or starts from new footings. These planning ranges should be confirmed with a written site-specific estimate:",
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
      "A screened porch is a roofed structure, and every jurisdiction in Northern Virginia treats it as a building addition — not a simple deck. That means a structural engineering plan, a building permit, and in most cases an HOA architectural review. The permit process is more involved than a standard deck because the county reviews roof load calculations, ledger attachment to the house, footing depth for roof-bearing posts, and wind uplift resistance.",
      "In [Loudoun County](/deck-permit-loudoun-county-virginia), screened porch permits should be matched to the LandMARC building and zoning permit path before submission. [Fairfax County](/deck-permit-fairfax-county-virginia) starts building applications in PLUS, while [Prince William County](/deck-permit-prince-william-county-virginia) routes residential deck and porch work through zoning approval and ePortal-backed building review. Permit package responsibilities should be stated in the written estimate.",
      "For [HOA-governed communities](/hoa-deck-rules-northern-virginia) in Ashburn, Brambleton, Broadlands, Reston and South Riding, the architectural review committee (ARC) may require a separate submission with drawings, color samples, and material cut sheets. The HOA and county permit timing should be planned together."
    ]
  },
  {
    title: "The deck and screened porch combination",
    paragraphs: [
      "Our most-requested project type in Loudoun and Fairfax counties is the [composite deck](/composite-deck-builder-loudoun) with an attached screened porch. This design gives homeowners both a covered, insect-free dining area and an open sun deck for grilling and lounging. If the home has a walkout basement, we build the screened porch on the upper level and install a dry-space ceiling system underneath, creating a shaded patio on the lower level at no additional square-footage cost.",
      "Multi-level deck-and-porch combinations require careful structural planning because the roof posts must carry down through the deck frame to independent footings — they cannot transfer roof load through the deck joists. We engineer these connections from the start so the structure meets Virginia's IRC residential code requirements and passes the framing and final inspections without revision.",
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
      <WebPageSchema dateModified="2026-09-04" url={`https://ldndecks.com${PATH}`} name="Screened Porch Contractor & Builder Northern Virginia" description="Screened porch contractor serving Loudoun, Fairfax and Prince William counties. Custom screened-in porches, EZE-Breeze planning, permit coordination, and written estimates." speakable />
      <ArticleSchema
        title="Screened Porch Contractor and Builder in Northern Virginia"
        description="Screened porch contractor guidance for Northern Virginia homeowners comparing roof loads, permits, EZE-Breeze upgrades, open deck combinations, HOA approvals, and written estimates."
        path={PATH}
        image="/images/img01.jpeg"
        datePublished="2026-05-26"
        dateModified="2026-09-04"
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
            text: 'Screened porches solve Northern Virginia mosquito, pollen, rain, and humidity problems while extending the useful outdoor season beyond an open deck.',
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
            text: 'A deck and screened porch combination works best when roof posts carry loads to independent footings and the open deck, stairs, and lower patio are planned together.',
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
        lowPrice="25000"
        highPrice="70000"
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
            'Best fit: bug-free dining, shaded entertaining, pollen control, and longer seasonal use',
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
        description="A screened-in porch is the ultimate Virginia outdoor living space. It offers the perfect venue for morning coffee or evening dinners, protected from insects, pollen, and rain. We specialize in high-end, structurally integrated screened porch builds."
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
        <NamedAuthor context="Loudoun, Fairfax and Prince William counties" lastUpdated="2026-09-04" />
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
          Northern Virginia screened porches are valuable because they solve the problems that limit open decks:
          mosquitoes, pollen, humid summer evenings, sudden rain, and shoulder-season comfort. Homeowners usually
          get the strongest use from a screened dining or lounge zone paired with an open deck for grilling.
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
          The best deck-and-porch packages carry roof loads down to independent footings and plan stair landings,
          railing, lighting, drainage, and lower patio use at the same time. That prevents the screened porch from
          forcing expensive structural changes after the open deck is already built.
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
