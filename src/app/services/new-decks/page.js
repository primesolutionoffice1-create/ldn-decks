import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import WebPageSchema from '@/components/WebPageSchema';
import ServiceSchema from '@/components/ServiceSchema';
import SimpleCTA from '@/components/SimpleCTA';
import NamedAuthor from '@/components/NamedAuthor';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: "/services/new-decks",
  title: "Custom Deck Builder Northern Virginia | Design & Build | Loudoun Decks",
  description: "Custom deck design and construction in Northern Virginia. Trex, TimberTech, wood, permit planning, HOA support, footings and framing from $15,000+.",
  image: "/social/new-decks-social.png",
});

const expansionSections = [
  {
    title: "How a custom deck build works — from first call to final inspection",
    paragraphs: [
      "Every deck project starts with a property walkthrough. We check the house-to-grade relationship, ledger attachment conditions, soil type, drainage patterns, utility locations, sun exposure and how the homeowner plans to use the space. These details drive the structural plan before any board selection happens.",
      "After the site review, we produce a dimensioned design with material specifications, a structural framing plan, and a written scope of work. If the home is in an [HOA-governed community](/hoa-deck-rules-northern-virginia), we prepare the architectural review submission concurrently with the county permit package so both approvals move in parallel.",
      "Construction typically follows the inspection sequence required by the local jurisdiction, which may include layout, footing, framing, railing/guard, and final review. We schedule required inspections with the county and do not proceed past inspection hold points until the prior phase clears. The homeowner gets closeout documentation, manufacturer warranty information, and a maintenance guide.",
    ],
  },
  {
    title: "Footings, framing and structural integrity",
    paragraphs: [
      "The visible deck surface is only as good as what is underneath it. Every deck we build starts with engineered footings sized to Virginia's 30-inch frost depth requirement. We pour concrete footings to bear on undisturbed soil below the frost line — not on compacted backfill — because a footing that heaves in January will rack the frame and pop fasteners by March.",
      "Framing follows IRC residential code with species-graded lumber sized to the actual span. A 16-foot joist span on a Trex Transcend surface calls for 2×10 joists at 12-inch spacing — not the 2×8 at 16-inch spacing that works for pressure-treated boards. We match joist size and spacing to the decking manufacturer's deflection tables, not to a generic framing rule. For more on this, use the [Deck Joist Span Calculator Virginia](/tools/deck-joist-span-calculator-virginia), read our guide to [deck joist sizing](/blog/2x8-vs-2x10-deck-joists), then check [Virginia footing depth requirements](/deck-footing-code-northern-virginia), the [Deck Footing Depth Calculator Virginia](/tools/deck-footing-depth-calculator-virginia), and the [Deck Beam Span Calculator Virginia](/tools/deck-beam-span-calculator-virginia).",
      "Ledger attachment is the single most common point of structural failure in residential decks. We bolt the ledger through the rim joist with half-inch lag screws on a staggered pattern, install flashing tape over the top edge, and use a standoff system that prevents moisture trapping between the ledger and the house band. Read our [ledger flashing education guide](/education/ledger-board-flashing-deck-attachment-virginia) for the full detail.",
    ],
  },
  {
    title: "Material selection — composite, PVC and wood",
    paragraphs: [
      "Northern Virginia's climate — 90°F+ summers with 70%+ humidity, 50–80 freeze-thaw cycles per winter, heavy pollen in spring — punishes low-quality decking. Material selection is not a style decision; it is a performance decision. We install three categories of decking and guide homeowners to the right one based on budget, maintenance tolerance and aesthetic goals.",
    ],
    listItems: [
      { label: "Trex composite", text: "A common premium composite choice. Capped polymer shell resists scratching, staining and fading. Transcend, Enhance and Select tiers from $15,000+. 25-year residential warranty. See the full [Trex product guide](/trex-decks)." },
      { label: "TimberTech / AZEK", text: "Premium PVC and composite lines with deeper wood-grain textures and the lowest moisture absorption in the category. AZEK Vintage is the gold standard for shaded or wooded lots. See our [TimberTech page](/timbertech-decks)." },
      { label: "Pressure-treated wood", text: "Still the right choice for budget-conscious projects where the homeowner accepts annual staining. We use #1 grade Southern Yellow Pine with ground-contact-rated posts and hot-dipped galvanized hardware. See our [composite vs wood comparison](/composite-deck-vs-wood-deck-virginia)." },
    ],
  },
  {
    title: "Permits, inspections and HOA approvals in Northern Virginia",
    paragraphs: [
      "Most attached decks in Northern Virginia require a building permit. We help homeowners plan the permit lifecycle: structural drawing needs, application requirements, inspection milestones, and plan-review questions before construction begins.",
      "Permit timelines vary by jurisdiction. [Loudoun County](/deck-permit-loudoun-county-virginia) processes through the LOLA portal in 2–4 weeks for standard residential decks. [Fairfax County](/deck-permit-fairfax-county-virginia) uses FIDO and typically runs 3–5 weeks. [Prince William County](/deck-permit-prince-william-county-virginia) processes in a similar window through their online portal. Screened porch and multi-level projects that require structural engineering review add 1–2 weeks.",
      "For HOA-governed communities — Brambleton, Broadlands, Ashburn Village, Reston Association, South Riding and dozens more — we help prepare the architectural review committee (ARC) package with CAD drawings, color samples, material cut sheets and a project narrative. Where appropriate, HOA review can run concurrently with county permit planning so you are not waiting months through sequential queues.",
    ],
  },
  {
    title: "What a custom deck costs in Northern Virginia",
    paragraphs: [
      "Deck pricing depends on size, elevation, materials, railing, stairs, lighting, demolition scope and site access. We publish transparent cost data because homeowners deserve pricing context before the first conversation — not after three appointments. Here is how our recent Northern Virginia projects have landed:",
    ],
    listItems: [
      { label: "Entry composite (300–400 sq ft)", text: "$15,000–$24,000. Single-level Trex Enhance or TimberTech Pro, aluminum railing, basic low-voltage lighting. The starting point for most first-time deck buyers." },
      { label: "Mid-range composite (400–600 sq ft)", text: "$24,000–$45,000. Trex Transcend or TimberTech AZEK, picture-frame border, upgraded railing, full lighting package, multi-level option." },
      { label: "Premium outdoor living", text: "$45,000–$90,000+. Large multi-level deck with [screened porch](/screened-porch-builder-northern-virginia), [pergola](/louvered-pergola-northern-virginia), [outdoor kitchen](/outdoor-kitchen-builder-northern-virginia), built-in seating, or full electrical package." },
    ],
  },
  {
    title: "Drainage, water management and under-deck systems",
    paragraphs: [
      "Water is the primary enemy of any deck structure. We manage it at every layer: gravel drainage beds under footings, positive slope away from the house at the ledger, and gap spacing calibrated to the decking manufacturer's thermal expansion spec. For elevated decks, we install [under-deck ceiling systems](/under-deck-ceiling-ideas) that channel water into gutters and create dry, usable space below — effectively doubling the outdoor square footage at minimal additional cost.",
      "Composite boards expand and contract with temperature. Trex Transcend moves roughly 1/8 inch over 20 feet between a 30°F winter night and a 100°F summer afternoon. We set gap spacing at installation to the manufacturer's published expansion table for the expected temperature at install, not to a generic 3/16-inch rule. Getting this right prevents buckling in summer and gap complaints in winter.",
    ],
  },
  {
    title: "Upgrade paths — railings, lighting, stairs and connected spaces",
    paragraphs: [
      "Most homeowners start with the deck platform and add features as budget allows. Our modular design approach makes it straightforward to add components later without rework. Common upgrade paths include:",
    ],
    listItems: [
      { label: "Railing upgrades", text: "From standard aluminum to [cable railing](/cable-railing-for-decks-northern-virginia), Trex Signature, or custom wood-and-metal combinations. Railing is the most visible element and the easiest upgrade to add later." },
      { label: "Lighting", text: "Low-voltage LED systems integrated into posts, stair risers, fascia and railings. We pre-wire conduit during framing so adding lighting later does not require ripping up finished surfaces." },
      { label: "Screened porch addition", text: "A [screened porch](/screened-porch-builder-northern-virginia) can be added to a new deck if the footings are engineered for roof load from the start. We recommend planning this at design phase even if the build is phased." },
      { label: "Pergola or shade structure", text: "A [louvered pergola](/louvered-pergola-northern-virginia) or traditional open-rafter cedar pergola mounted to the deck for sun control. Requires structural posts to independent footings." },
    ],
  },
  {
    title: "Timeline — how long a deck project takes",
    paragraphs: [
      "A standard 400–600 sq ft composite deck takes 7–12 days of on-site construction after permits are in hand. Multi-level projects, screened porches, or builds with significant demolition of an existing structure run 3–5 weeks. The typical end-to-end timeline from signed contract to final inspection is 6–10 weeks, with 2–4 weeks consumed by permitting and the remainder by construction.",
      "We build year-round in Northern Virginia when weather, footing conditions, material handling requirements, and inspection availability support the schedule. Winter builds can sometimes offer earlier scheduling windows, but permit timing still depends on the county and project complexity. For seasonal guidance, see [the best time to build a deck in Northern Virginia](/best-time-to-build-a-deck-northern-virginia).",
    ],
  },
  {
    title: "Warranty and long-term protection",
    paragraphs: [
      "Every deck proposal should clarify two layers of protection: manufacturer material coverage for the selected Trex, TimberTech, or AZEK product line, and written workmanship warranty terms from the contractor. We review both before construction so homeowners understand what is covered, what is excluded, and what documentation should be kept.",
      "Manufacturer warranties depend on product selection and installation according to the manufacturer's published guide. Our process is built around documented installation standards, product-specific requirements, and clear project paperwork. Homeowners should verify current manufacturer profile and warranty details directly with Trex, TimberTech, AZEK, or the selected brand. For more detail, read our [deck warranty guide](/deck-warranty-guide-northern-virginia).",
    ],
  },
];

const newDeckFAQs = [
  {
    q: "How much does a custom deck cost in Northern Virginia?",
    a: "Most custom composite deck projects in Northern Virginia range from $15,000 to $45,000 for a single-level build and $45,000 to $90,000+ for multi-level outdoor living packages with screened porches, pergolas or outdoor kitchens. Final pricing depends on size, materials, elevation, railing, lighting and site conditions. We provide itemized written estimates after a property walkthrough.",
  },
  {
    q: "How long does it take to build a custom deck?",
    a: "A standard 400–600 sq ft composite deck takes 7–12 days of on-site construction after permits clear. Permitting adds 2–4 weeks depending on the county. Total timeline from contract to final inspection is typically 6–10 weeks. Multi-level or screened porch projects may extend to 10–14 weeks.",
  },
  {
    q: "Do you help with deck permits and HOA approvals?",
    a: "Yes. We help homeowners identify permit triggers, structural drawing needs, site plan requirements, material specifications, and county/HOA review steps for Loudoun County, Fairfax County, Prince William County, Arlington, and Stafford. Responsibilities and fees are confirmed in the written project scope.",
  },
  {
    q: "What is better — Trex, TimberTech or wood?",
    a: "Each serves a different need. Trex is a common premium composite choice with excellent scratch resistance and a wide color range. TimberTech/AZEK offers premium PVC options with the lowest moisture absorption, ideal for shaded lots. Pressure-treated wood is right for budget-conscious projects where annual maintenance is acceptable. We guide material selection based on your budget, maintenance tolerance and yard conditions.",
  },
  {
    q: "Can you build a deck on a sloped yard?",
    a: "Yes. Sloped and walkout-basement lots are among our most common project types in Northern Virginia. Multi-level designs, stepped platforms and elevated structures are engineered to the grade, with footings at varying depths to reach undisturbed soil below the frost line. The grade often creates an opportunity for under-deck living space.",
  },
  {
    q: "What makes your framing different from a general contractor?",
    a: "We size joists to the specific decking material's deflection table, not to a generic span chart. Composite boards often require tighter joist spacing than wood. Ledger attachment, flashing, footing depth, corrosion-resistant hardware, railing connections, and inspection hold points are documented in the permit and build plan for the specific jurisdiction.",
  },
  {
    q: "Do you build year-round?",
    a: "Yes, when weather, footing conditions, material requirements, and inspection availability allow it. Winter can sometimes open earlier scheduling windows, but permit timing still depends on the county. We adjust installation details such as board spacing around the manufacturer's temperature and expansion guidance.",
  },
  {
    q: "What warranty do I get?",
    a: "Two layers should be reviewed before signing: the current manufacturer material warranty for the selected Trex, TimberTech or AZEK product line, and Loudoun Decks' written workmanship warranty terms in the project paperwork. Coverage, exclusions, registration requirements and remedies vary by product and program, so we document the relevant warranty links and terms with the proposal.",
  },
];

const authorityLinks = [
  { text: "Loudoun County Residential Deck Details", url: "https://www.loudoun.gov/DocumentCenter/View/1183/Typical-Residential-Deck-Detail" },
  { text: "Fairfax County Typical Deck Guide", url: "https://www.fairfaxcounty.gov/landdevelopment/typical-deck-details" },
  { text: "Official Trex Warranty & Care", url: "https://www.trex.com/customer-support/trex-owners/warranty/" },
];

export default function NewDecksPage() {
  return (
    <main>
      <WebPageSchema dateModified="2026-06-01"
        url="https://ldndecks.com/services/new-decks"
        name="Custom Deck Builder Northern Virginia | Loudoun Decks"
        description="Custom deck design and construction in Northern Virginia. Trex, TimberTech, wood, permit planning, HOA support, footings and framing from $15,000+."
        speakable
      />
      <ServiceSchema
        name="Custom Deck Construction"
        description="Custom residential deck design and construction in Northern Virginia. Composite, PVC and wood decks with permit planning, HOA support, structural planning and manufacturer warranty review."
        url="https://ldndecks.com/services/new-decks"
        category="Deck Construction"
        price="15000"
        relatedServices={['https://ldndecks.com/services/deck-replacement', 'https://ldndecks.com/services/deck-resurfacing', 'https://ldndecks.com/composite-decks', 'https://ldndecks.com/trex-decks']}
      />
      <ServicesHeader
        subtext="Northern Virginia's Full-Service Deck Builder"
        title="Custom Deck Design & Construction"
        description="From structural planning to final inspection — we design and build custom decks tailored to your home, yard and budget across Loudoun, Fairfax and Prince William counties."
      />

      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Loudoun, Fairfax and Prince William counties" lastUpdated="2026-06-01" />
      </section>

      <section style={{ backgroundColor: '#fff5f2', padding: '24px 20px', borderBottom: '1px solid #ffdbd1' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p data-speakable="true" style={{ fontSize: '16px', color: '#d14817', margin: 0, fontWeight: '500' }}>
            <strong style={{ color: '#111', fontSize: '18px' }}>Custom deck projects from $15,000+</strong>
            <br />
            Materials, size, elevation and design complexity affect pricing.{' '}
            <Link href="/deck-payment-estimator" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>Estimate monthly payments</Link>{' · '}
            <Link href="/deck-cost-calculator" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>Use the cost calculator</Link>{' · '}
            <Link href="/composite-deck-cost-northern-virginia" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>Full cost guide</Link>{' · '}
            <strong style={{ color: '#111' }}>Free in-home estimate included.</strong>
          </p>
        </div>
      </section>

      <ServiceMain
        subtitle="Designed for your home, not from a template"
        title="What a Custom Deck Build Includes"
        description="A custom deck is a structural addition designed for your specific house, yard, grade and lifestyle. We help coordinate design, materials, permit planning, construction and inspections so the homeowner has one project team from first conversation to final walkthrough."
        listTitle="Full-service scope"
        listItems={[
          "Structural design and dimensioned layout",
          "Material selection — Trex, TimberTech, AZEK, wood",
          "County permits and inspection coordination",
          "HOA architectural review package preparation",
          "Footing, framing, railing, stairs, lighting",
          "Manufacturer warranty registration and handoff",
        ]}
        image1="/showcase/img08.jpeg"
        image2="/showcase/img09.jpeg"
      />

      <ServiceContentExpansion sections={expansionSections} />

      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>See the Transformation</h2>
        <p style={{ marginBottom: '40px', fontSize: '18px', color: '#555' }}>
          From empty backyard to finished outdoor living space.{' '}
          <Link href="/before-and-after" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Before &amp; After gallery →</Link>
          {' · '}
          <Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Read client reviews →</Link>
        </p>
        <div style={{ position: 'relative', height: '500px', borderRadius: '8px', overflow: 'hidden' }}>
          <Image src="/showcase/img10.jpeg" alt="Custom Trex Transcend deck built by Loudoun Decks in Northern Virginia" fill style={{ objectFit: 'cover' }} sizes="(max-width: 1200px) 100vw, 1200px" />
        </div>
      </section>

      <SimpleCTA title="Ready to Start Your Custom Deck?" buttonText="Get Free Estimate" link="/get-estimate" />

      <section style={{ padding: '40px 20px', backgroundColor: '#f9f9f9', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Official Resources & Safety Standards</h3>
          <p style={{ marginBottom: '20px', color: '#666' }}>We build to exceed Virginia residential building codes and manufacturer installation requirements.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {authorityLinks.map((link, idx) => (
              <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--site-color)', fontWeight: '600', textDecoration: 'underline', fontSize: '14px' }}>
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </section>

      <ServicesFAQ
        title="Custom Deck Building FAQs"
        faqs={newDeckFAQs}
        canonicalUrl="https://ldndecks.com/services/new-decks"
      />

      <ServiceAreasGrid />

      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            ['/trex-decks', 'Trex Deck Builder — Product Lines & Warranty'],
            ['/timbertech-decks', 'TimberTech & AZEK Deck Builder'],
            ['/composite-deck-builder-loudoun', 'Composite Deck Builder in Loudoun County'],
            ['/screened-porch-builder-northern-virginia', 'Screened Porch Builder Northern Virginia'],
            ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
            ['/composite-deck-cost-northern-virginia', 'Composite Deck Cost Breakdown'],
            ['/deck-permit-loudoun-county-virginia', 'Loudoun County Deck Permit Guide'],
            ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK Comparison'],
            ['/deck-footing-code-northern-virginia', 'Virginia Deck Footing Code Guide'],
            ['/tools/deck-footing-depth-calculator-virginia', 'Deck Footing Depth Calculator Virginia'],
            ['/deck-warranty-guide-northern-virginia', 'Deck Warranty Guide'],
            ['/wood-decks', 'Wood Decks — Cedar, IPE & Pressure-Treated'],
            ['/deck-builder-northern-virginia', 'Deck Builder in Northern Virginia'],
            ['/outdoor-living-northern-virginia', 'Outdoor Living in Northern Virginia'],
            ['/deck-cost-calculator', 'Free Deck Cost Calculator'],
            ['/deck-payment-estimator', 'Deck Payment Estimator'],
            ['/before-and-after', 'Before & After Deck Projects'],
            ['/reviews', 'Customer Reviews'],
            ['/bbb-accredited-deck-builder-virginia', 'BBB Accredited Deck Builder'],
            ['/get-estimate', 'Request a Written Estimate'],
          ].map(([href, text]) => (
            <li key={href} style={{ marginBottom: '0.5rem' }}>
              <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link>
            </li>
          ))}
        </ul>
      </section>

      <RelatedGuides currentPath="/services/new-decks" />
      <ContactHome />
    </main>
  );
}
