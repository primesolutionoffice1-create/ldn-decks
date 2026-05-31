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
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: "/screened-porch-builder-northern-virginia",
  title: "Screened Porch Builder Northern Virginia | Custom Porches | Loudoun Decks",
  description: "Trusted screened porch builder in Northern Virginia. Custom screened-in porches, EZE-Breeze windows, and outdoor living spaces. Serving Loudoun, Fairfax, and Prince William Counties.",
  image: "/images/img01.jpeg",
});

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

const faqs = [
  {
    q: "How much does a screened porch cost in Northern Virginia?",
    a: "A custom screened porch in Northern Virginia typically ranges from $25,000 to $55,000+ depending on size, roof complexity, flooring material, and upgrades like EZE-Breeze panels or fireplaces. A deck-plus-screened-porch combination usually runs $45,000 to $90,000+. We provide itemized written estimates after a site evaluation."
  },
  {
    q: "Do I need a permit to build a screened porch in Virginia?",
    a: "Yes. Every jurisdiction in Northern Virginia requires a building permit for a screened porch because it includes a roofed structure with footings, ledger attachment and structural framing. Loudoun County files through LOLA (3–5 weeks), Fairfax County through FIDO (4–6 weeks), and Prince William County through their online portal. We prepare and file the complete permit package."
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
    a: "EZE-Breeze is a sliding vinyl panel system that looks like glass but is lighter and more impact-resistant. The panels open fully for screen-only airflow or close to block rain, wind and pollen. They typically add $3,000–$8,000 to a screened porch project and extend usability by 2–3 months per year in Northern Virginia. Most homeowners consider them the best value upgrade."
  },
  {
    q: "How long does it take to build a screened porch?",
    a: "Permitting takes 3–6 weeks depending on the county and whether HOA approval is required. Construction on a standard screened porch runs 3–5 weeks from footing pour to final inspection. Multi-level projects or packages with a deck and screened porch may take 5–7 weeks on site."
  },
  {
    q: "Do you handle the HOA approval for screened porches?",
    a: "Yes. In communities like Brambleton, Broadlands, Ashburn Village, Reston Association and South Riding, we prepare the full ARC submission package — CAD drawings, color samples, material cut sheets and project scope description. We submit concurrently with the county permit to avoid sequential delays."
  },
  {
    q: "Can I add a fireplace to my screened porch?",
    a: "Yes. We install both gas and wood-burning stone fireplaces in screened porches. A gas fireplace requires a gas line run (typically $1,500–$3,000 for the line itself) plus the unit, stone surround and structural support. Wood-burning fireplaces require a chimney and additional clearance from combustible screening. Both options make a screened porch usable well into December in Northern Virginia."
  },
];

const expansionSections = [
  {
    title: "Why Northern Virginia homeowners build screened porches",
    paragraphs: [
      "Northern Virginia's climate delivers roughly 200 days per year where outdoor time is pleasant — spring through fall, with mild winter weekends mixed in. But the humid summers from June through September bring mosquitoes, gnats, pollen counts above 1,000 grains per cubic meter, and sudden afternoon thunderstorms that can end a dinner party in minutes. A screened porch removes every one of those interruptions while keeping the open-air feeling intact.",
      "The screened porch is the single highest-ROI outdoor addition in the Mid-Atlantic market. Remodeling Magazine's 2025 Cost vs. Value report puts the recoup rate for a porch addition in the South Atlantic region above 65%, and in premium Northern Virginia neighborhoods like [McLean](/deck-builder-mclean-va), [Great Falls](/deck-builder-great-falls-va) and [Vienna](/deck-builder-vienna-va), that number runs higher because buyer expectations include finished outdoor living space.",
      "At Loudoun Decks, we build screened porches that look like they were part of the original house — matched rooflines, continuous siding, and architectural trim that tie the addition into the existing structure rather than bolting it on as an afterthought."
    ]
  },
  {
    title: "Screened porch vs. three-season room vs. sunroom",
    paragraphs: [
      "Homeowners often ask which enclosed outdoor space is right for their home. The choice comes down to usage season, budget and permit complexity. A screened porch uses fine-mesh screening and a roof to create a bug-free outdoor room that works from late March through November in Northern Virginia. A [three-season room](/three-season-room-northern-virginia) adds glass or vinyl panels (like EZE-Breeze) that block wind, rain and pollen while still ventilating in warm weather. A full sunroom is a conditioned addition with insulated walls, HVAC and windows — essentially a new room of the house.",
      "Most of our Northern Virginia clients choose a screened porch with the option to add EZE-Breeze panels later, which converts the space into a three-season room without a second construction project. This staged approach keeps the initial investment in the $25,000–$45,000 range while leaving a clear upgrade path. A full sunroom addition starts at $50,000+ and requires HVAC, insulation and a more intensive permit review.",
    ],
    listItems: [
      { label: "Screened porch", text: "$25,000–$55,000. Screening + roof. 9–10 month use. Simplest permit path." },
      { label: "Three-season room", text: "$35,000–$65,000. EZE-Breeze or glass panels. 10–11 month use. Moderate permit." },
      { label: "Sunroom addition", text: "$50,000–$100,000+. Full HVAC, insulation. 12 month use. Full building permit + energy code." },
    ]
  },
  {
    title: "Screened porch cost breakdown for Northern Virginia",
    paragraphs: [
      "Screened porch pricing in Northern Virginia depends on square footage, roof complexity, flooring material, electrical scope and whether the structure ties into an existing deck or starts from new footings. Here is how our recent projects break down:",
    ],
    listItems: [
      { label: "Standard screened porch (200–300 sq ft)", text: "$25,000–$38,000. Single-pitch roof, composite floor, basic electrical (fan + outlets), standard screening." },
      { label: "Mid-range screened porch (300–450 sq ft)", text: "$38,000–$55,000. Gable or hip roof tied into existing roofline, EZE-Breeze panels, upgraded composite floor, recessed lighting + fan." },
      { label: "Premium outdoor living package", text: "$55,000–$90,000+. Large screened porch + open deck, vaulted ceiling with exposed beams, stone fireplace or gas insert, full lighting package, [under-deck ceiling system](/under-deck-ceiling-ideas)." },
    ]
  },
  {
    title: "Permits, structural engineering and HOA approvals",
    paragraphs: [
      "A screened porch is a roofed structure, and every jurisdiction in Northern Virginia treats it as a building addition — not a simple deck. That means a structural engineering plan, a building permit, and in most cases an HOA architectural review. The permit process is more involved than a standard deck because the county reviews roof load calculations, ledger attachment to the house, footing depth for roof-bearing posts, and wind uplift resistance.",
      "In [Loudoun County](/deck-permit-loudoun-county-virginia), screened porch permits are filed through the LOLA portal and typically take 3–5 weeks for plan review. [Fairfax County](/deck-permit-fairfax-county-virginia) uses FIDO and runs 4–6 weeks for structural reviews. [Prince William County](/deck-permit-prince-william-county-virginia) processes similar timelines through their online portal. We prepare and file the complete permit package — structural drawings, site plan, material specs and manufacturer data sheets — so the homeowner never has to visit the county office.",
      "For [HOA-governed communities](/hoa-deck-rules-northern-virginia) in Ashburn, Brambleton, Broadlands, Reston and South Riding, the architectural review committee (ARC) typically requires a separate submission with CAD drawings, color samples and material cut sheets. We prepare this package concurrently with the county permit to avoid sequential delays."
    ]
  },
  {
    title: "The deck and screened porch combination",
    paragraphs: [
      "Our most-requested project type in Loudoun and Fairfax counties is the [composite deck](/composite-deck-builder-loudoun) with an attached screened porch. This design gives homeowners both a covered, insect-free dining area and an open sun deck for grilling and lounging. If the home has a walkout basement, we build the screened porch on the upper level and install a dry-space ceiling system underneath, creating a shaded patio on the lower level at no additional square-footage cost.",
      "Multi-level deck-and-porch combinations require careful structural planning because the roof posts must carry down through the deck frame to independent footings — they cannot transfer roof load through the deck joists. We engineer these connections from the start so the structure meets Virginia's IRC residential code requirements and passes the framing and final inspections without revision.",
      "Typical deck-plus-screened-porch packages in Northern Virginia land between $45,000 and $90,000 depending on total square footage, materials, roof complexity and feature level. We publish a [full cost guide for Northern Virginia decks](/composite-deck-cost-northern-virginia) and a [monthly payment estimator](/deck-payment-estimator) for budgeting."
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
      <WebPageSchema url="https://ldndecks.com/screened-porch-builder-northern-virginia" name="Screened Porch Builder Northern Virginia" description="Custom screened porches and 3-season rooms in Northern Virginia. EZE-Breeze, deck combos, permits handled. From $25,000." speakable />
      <ServiceSchema
        name="Screened Porch Construction"
        description="Custom screened porches and 3-season rooms in Northern Virginia. EZE-Breeze windows, structural engineering, permits and HOA approvals included."
        url="https://ldndecks.com/screened-porch-builder-northern-virginia"
        category="Porch Construction"
        lowPrice="25000"
        highPrice="70000"
        relatedServices={['https://ldndecks.com/three-season-room-northern-virginia', 'https://ldndecks.com/covered-deck-builder-northern-virginia', 'https://ldndecks.com/services/porches']}
      />

      <ServicesHeader
        subtext="Northern Virginia's Premier Porch Builder"
        title="Screened Porch Builder Northern Virginia"
        description="Enjoy the Virginia outdoors without the bugs. Custom screened-in porches, EZE-Breeze enclosures, and complete outdoor living transformations."
      />
      
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
        <NamedAuthor context="Loudoun, Fairfax and Prince William counties" lastUpdated="2026-05-26" />
      </div>
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
      
      <SimpleCTA 
        title="Start Your Screened Porch Project" 
        buttonText="Get Free Estimate" 
        link="/contact" 
      />
      
      <RelatedGuides currentPath="/screened-porch-builder-northern-virginia" />
      <ContactHome />
    </main>
  );
}
