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
  description: "Custom deck design and construction in Northern Virginia. Trex, TimberTech, wood. Permits, HOA, footings, framing — full-service builds from $15,000+. Free estimate.",
});

const expansionSections = [
  {
    title: "How a custom deck build works — from first call to final inspection",
    paragraphs: [
      "Every deck project starts with a property walkthrough. We check the house-to-grade relationship, ledger attachment conditions, soil type, drainage patterns, utility locations, sun exposure and how the homeowner plans to use the space. These details drive the structural plan before any board selection happens.",
      "After the site review, we produce a dimensioned design with material specifications, a structural framing plan, and a written scope of work. If the home is in an [HOA-governed community](/hoa-deck-rules-northern-virginia), we prepare the architectural review submission concurrently with the county permit package so both approvals move in parallel.",
      "Construction follows a four-inspection sequence: layout and footing, framing, railing/guard, and final. We schedule each inspection with the county and do not proceed to the next phase until the previous one clears. The homeowner gets a clean closeout with a passed final inspection, manufacturer warranty registration, and a maintenance guide.",
    ],
  },
  {
    title: "Footings, framing and structural integrity",
    paragraphs: [
      "The visible deck surface is only as good as what is underneath it. Every deck we build starts with engineered footings sized to Virginia's 30-inch frost depth requirement. We pour concrete footings to bear on undisturbed soil below the frost line — not on compacted backfill — because a footing that heaves in January will rack the frame and pop fasteners by March.",
      "Framing follows IRC residential code with species-graded lumber sized to the actual span. A 16-foot joist span on a Trex Transcend surface calls for 2×10 joists at 12-inch spacing — not the 2×8 at 16-inch spacing that works for pressure-treated boards. We match joist size and spacing to the decking manufacturer's deflection tables, not to a generic framing rule. For more on this, read our guide to [deck joist sizing](/blog/2x8-vs-2x10-deck-joists) and [Virginia footing depth requirements](/deck-footing-code-northern-virginia).",
      "Ledger attachment is the single most common point of structural failure in residential decks. We bolt the ledger through the rim joist with half-inch lag screws on a staggered pattern, install flashing tape over the top edge, and use a standoff system that prevents moisture trapping between the ledger and the house band. Read our [ledger flashing education guide](/education/ledger-flashing-why-it-matters) for the full detail.",
    ],
  },
  {
    title: "Material selection — composite, PVC and wood",
    paragraphs: [
      "Northern Virginia's climate — 90°F+ summers with 70%+ humidity, 50–80 freeze-thaw cycles per winter, heavy pollen in spring — punishes low-quality decking. Material selection is not a style decision; it is a performance decision. We install three categories of decking and guide homeowners to the right one based on budget, maintenance tolerance and aesthetic goals.",
    ],
    listItems: [
      { label: "Trex composite", text: "Our most-installed material. Capped polymer shell resists scratching, staining and fading. Transcend, Enhance and Select tiers from $15,000+. 25-year residential warranty. See the full [Trex product guide](/trex-decks)." },
      { label: "TimberTech / AZEK", text: "Premium PVC and composite lines with deeper wood-grain textures and the lowest moisture absorption in the category. AZEK Vintage is the gold standard for shaded or wooded lots. See our [TimberTech page](/timbertech-decks)." },
      { label: "Pressure-treated wood", text: "Still the right choice for budget-conscious projects where the homeowner accepts annual staining. We use #1 grade Southern Yellow Pine with ground-contact-rated posts and hot-dipped galvanized hardware. See our [composite vs wood comparison](/composite-deck-vs-wood-deck-virginia)." },
    ],
  },
  {
    title: "Permits, inspections and HOA approvals in Northern Virginia",
    paragraphs: [
      "Every attached deck in Northern Virginia requires a building permit — there is no square-footage exemption for structural additions. We handle the full permit lifecycle: preparing structural drawings, filing the application, scheduling inspections, and resolving any plan-review comments before construction begins.",
      "Permit timelines vary by jurisdiction. [Loudoun County](/deck-permit-loudoun-county-virginia) processes through the LOLA portal in 2–4 weeks for standard residential decks. [Fairfax County](/deck-permit-fairfax-county-virginia) uses FIDO and typically runs 3–5 weeks. [Prince William County](/deck-permit-prince-william-county-virginia) processes in a similar window through their online portal. Screened porch and multi-level projects that require structural engineering review add 1–2 weeks.",
      "For HOA-governed communities — Brambleton, Broadlands, Ashburn Village, Reston Association, South Riding and dozens more — we prepare the architectural review committee (ARC) package with CAD drawings, color samples, material cut sheets and a project narrative. We submit this concurrently with the county permit so you are not waiting months through sequential queues.",
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
      "We build year-round in Northern Virginia. Concrete footings can be poured above 40°F, and composite materials are dimensionally stable in cold weather. Winter builds often benefit from faster permit processing and earlier scheduling. For seasonal guidance, see [the best time to build a deck in Northern Virginia](/best-time-to-build-a-deck-northern-virginia).",
    ],
  },
  {
    title: "Warranty and long-term protection",
    paragraphs: [
      "Every deck we build carries two layers of warranty. The decking manufacturer — Trex, TimberTech or AZEK — provides a 25-to-50-year limited residential warranty on materials, covering fading, staining, structural integrity and manufacturing defects. Our installation carries a separate workmanship warranty covering framing, connections, fasteners and finish quality.",
      "Manufacturer warranties are only valid when the product is installed by a certified contractor following the manufacturer's published installation guide. As a TrexPro Platinum installer and TimberTech Certified contractor, our installations meet the requirements for full warranty coverage — a distinction that matters when you file a claim 10 years from now. For more detail, read our [deck warranty guide](/deck-warranty-guide-northern-virginia).",
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
    q: "Do you handle deck permits and HOA approvals?",
    a: "Yes. We prepare the full permit package — structural drawings, site plan, material specifications — and file with Loudoun County (LOLA), Fairfax County (FIDO) or Prince William County. For HOA-governed communities, we prepare and submit the architectural review committee package concurrently so both approvals move in parallel.",
  },
  {
    q: "What is better — Trex, TimberTech or wood?",
    a: "Each serves a different need. Trex is our most-installed composite — excellent scratch resistance and the widest color range. TimberTech/AZEK offers premium PVC options with the lowest moisture absorption, ideal for shaded lots. Pressure-treated wood is right for budget-conscious projects where annual maintenance is acceptable. We guide material selection based on your budget, maintenance tolerance and yard conditions.",
  },
  {
    q: "Can you build a deck on a sloped yard?",
    a: "Yes. Sloped and walkout-basement lots are among our most common project types in Northern Virginia. Multi-level designs, stepped platforms and elevated structures are engineered to the grade, with footings at varying depths to reach undisturbed soil below the frost line. The grade often creates an opportunity for under-deck living space.",
  },
  {
    q: "What makes your framing different from a general contractor?",
    a: "We size joists to the specific decking material's deflection table, not to a generic span chart. Composite boards require tighter joist spacing than wood. We bolt ledgers on a staggered pattern with proper flashing, pour footings to Virginia's 30-inch frost depth on undisturbed soil, and use hot-dipped galvanized or stainless hardware throughout. Every build passes four county inspections.",
  },
  {
    q: "Do you build year-round?",
    a: "Yes. Concrete footings can be poured above 40°F, and composite materials are dimensionally stable in cold weather. Winter builds often benefit from faster permit processing and earlier scheduling. We adjust gap spacing for thermal expansion based on ambient temperature at installation.",
  },
  {
    q: "What warranty do I get?",
    a: "Two layers: the decking manufacturer (Trex, TimberTech or AZEK) provides a 25-to-50-year limited residential warranty on materials. Our installation carries a separate workmanship warranty covering framing, connections, fasteners and finish quality. As a TrexPro Platinum and TimberTech Certified installer, our builds qualify for full manufacturer warranty coverage.",
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
      <WebPageSchema
        url="https://ldndecks.com/services/new-decks"
        name="Custom Deck Builder Northern Virginia | Loudoun Decks"
        description="Custom deck design and construction in Northern Virginia. Trex, TimberTech, wood. Permits, HOA, footings, framing — full-service builds from $15,000+."
        speakable
      />
      <ServiceSchema
        name="Custom Deck Construction"
        description="Custom residential deck design and construction in Northern Virginia. Composite, PVC and wood decks with permits, HOA approvals, structural engineering and manufacturer warranty."
        price="15000"
        url="https://ldndecks.com/services/new-decks"
      />
      <ServicesHeader
        subtext="Northern Virginia's Full-Service Deck Builder"
        title="Custom Deck Design & Construction"
        description="From structural planning to final inspection — we design and build permitted custom decks tailored to your home, yard and budget across Loudoun, Fairfax and Prince William counties."
      />

      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Loudoun, Fairfax and Prince William counties" lastUpdated="2026-05-26" />
      </section>

      <section style={{ backgroundColor: '#fff5f2', padding: '24px 20px', borderBottom: '1px solid #ffdbd1' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p data-speakable="true" style={{ fontSize: '16px', color: '#d14817', margin: 0, fontWeight: '500' }}>
            <strong style={{ color: '#111', fontSize: '18px' }}>Custom deck projects from $15,000+</strong>
            <br />
            Materials, size, elevation and design complexity affect pricing.{' '}
            <Link href="/deck-payment-estimator" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>Estimate monthly payments</Link>{' · '}
            <Link href="/how-much-does-a-deck-cost-northern-virginia" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>Full cost guide</Link>{' · '}
            <strong style={{ color: '#111' }}>Free in-home estimate included.</strong>
          </p>
        </div>
      </section>

      <ServiceMain
        subtitle="Designed for your home, not from a template"
        title="What a Custom Deck Build Includes"
        description="A custom deck is a permitted structural addition designed for your specific house, yard, grade and lifestyle. We handle every phase — design, materials, permits, construction and inspections — so the homeowner gets a single point of accountability from first conversation to final walkthrough."
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

      <SimpleCTA title="Ready to Start Your Custom Deck?" buttonText="Get Free Estimate" link="/contact" />

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
            ['/how-much-does-a-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
            ['/composite-deck-cost-northern-virginia', 'Composite Deck Cost Breakdown'],
            ['/deck-permit-loudoun-county-virginia', 'Loudoun County Deck Permit Guide'],
            ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK Comparison'],
            ['/deck-footing-code-northern-virginia', 'Virginia Deck Footing Code Guide'],
            ['/deck-warranty-guide-northern-virginia', 'Deck Warranty Guide'],
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
