import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import Testimonials from '@/components/Testimonials';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import ContactHome from '@/components/ContactHome';
import ServiceSchema from '@/components/ServiceSchema';
import RelatedGuides from '@/components/RelatedGuides';
import ServicesFAQ from '@/components/ServicesFAQ';
import SimpleCTA from '@/components/SimpleCTA';

import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

import NamedAuthor from '@/components/NamedAuthor';
export const metadata = buildMetadata({
  path: "/services/deck-maintenance",
  title: "Professional Deck Maintenance NoVA | Staining & Sealing Services",
  description: "Protect your outdoor investment with expert deck maintenance in Northern Virginia. We specialize in wood staining, sealing, and structural care.",
  image: "/images/img14.jpeg",
});

const maintenanceProcess = [
  {
    title: "1. Comprehensive Assessment",
    desc: "We perform a thorough check of the decking boards, railings, stairs, and structural joists to identify any areas needing immediate repair or specialized care."
  },
  {
    title: "2. Deep Cleaning & Prep",
    desc: "Using professional-grade cleaners and low-pressure washing techniques, we safely remove dirt, mildew, algae, and previous failing sealants without damaging the wood fibers."
  },
  {
    title: "3. Wood Conditioning",
    desc: "If necessary, we neutralize the wood to restore its natural pH balance and brighten the grain, preparing it for maximum stain absorption."
  },
  {
    title: "4. Professional Sanding (If required)",
    desc: "For older decks with splinters or stubborn finishes, we sand the surface to create a smooth, beautiful canvas."
  },
  {
    title: "5. Premium Sealing & Staining",
    desc: "We apply high-quality, commercial-grade stains and sealers uniquely chosen for your deck's material to protect against UV fading and water intrusion."
  }
];

const maintenanceExpansionSections = [
  {
    title: "Annual maintenance checklist for Northern Virginia decks",
    paragraphs: [
      "Northern Virginia's climate — humid summers, freeze-thaw winters, and heavy spring pollen — demands a consistent annual maintenance routine. Following a seasonal checklist keeps small problems from becoming expensive structural failures.",
    ],
    listItems: [
      { label: "Spring inspection", text: "After the last frost, walk the entire deck looking for popped fasteners, new cracks, soft spots, and any boards that shifted over winter." },
      { label: "Cleaning schedule", text: "Clean the deck surface and between board gaps in April or May to remove pollen, leaf debris, and mildew buildup before it stains permanently." },
      { label: "Mold and mildew prevention", text: "Shaded decks in Ashburn, Reston, and Sterling are especially prone to mold. A mildewcide treatment after cleaning prevents regrowth through the humid summer months." },
      { label: "Drainage check", text: "Confirm that water drains freely between boards and away from the ledger. Clogged gaps trap moisture against the framing and accelerate rot." },
      { label: "Hardware tightening", text: "Re-torque lag bolts at the ledger and post bases, tighten railing connections, and replace any corroded joist hangers or fasteners." },
    ]
  },
  {
    title: "Composite vs wood maintenance",
    paragraphs: [
      "Composite and wood decks share the same climate but require very different care routines. Understanding the distinction helps you budget accurately and avoid unnecessary work.",
      "Composite decking like Trex, TimberTech, and Fiberon needs periodic cleaning with a composite-safe cleaner to remove organic staining, but it never requires sanding, staining, or sealing. Over five years, composite maintenance typically costs $400 to $800 total.",
      "Pressure-treated or hardwood decks need annual cleaning plus staining and sealing every one to two years. Over the same five-year period, professional wood maintenance averages $2,500 to $4,000 — but it preserves the natural beauty and structural life of the lumber.",
    ]
  },
  {
    title: "What maintenance prevents",
    paragraphs: [
      "Consistent maintenance is the most cost-effective investment you can make in your deck. Skipping even a year or two in Northern Virginia's climate can trigger problems that are far more expensive to fix than the maintenance itself.",
    ],
    listItems: [
      { label: "Rot and decay", text: "Unsealed wood absorbs moisture that feeds fungal growth inside the grain, leading to soft, structurally compromised boards and framing." },
      { label: "Structural failure", text: "Corroded fasteners, loose ledger connections, and weakened joists from water damage can lead to partial or full deck collapse." },
      { label: "Warranty voiding", text: "Most composite decking warranties require regular cleaning. Neglect can void coverage on products that cost thousands to install." },
      { label: "Costly full replacement", text: "A $500 annual maintenance visit prevents the $15,000 to $30,000 cost of a full deck replacement. Our [deck maintenance checklist for Virginia](/deck-maintenance-checklist-virginia) walks you through what to watch for between professional visits." },
    ]
  },
  {
    title: "When maintenance isn't enough",
    paragraphs: [
      "Sometimes a deck has deteriorated past the point where cleaning and sealing can restore it. Recognizing these signs early saves you from spending money on maintenance that cannot fix the underlying problem.",
      "If you notice multiple soft or spongy joists, a ledger board pulling away from the house, posts leaning more than half an inch, or widespread surface rot across more than 30 percent of the boards, it is time to evaluate [structural repair](/services/deck-repair-and-structural-maintenance) or a full [deck resurfacing](/services/deck-resurfacing). Our team can assess whether targeted repairs will extend the deck's life or whether replacement is the better investment.",
    ]
  },
];

const faqs = [
  {
    q: "How much does professional deck maintenance cost in Northern Virginia?",
    a: "Deck maintenance in Loudoun County, Fairfax County, and Prince William County typically ranges from $300 to $900 depending on deck size, condition, and the services needed. A full clean, sand, and stain on a 400 sq ft wood deck averages around $500–$700."
  },
  {
    q: "How often should I have my deck professionally maintained?",
    a: "Most wood decks in NoVA should be cleaned and resealed every 1–2 years due to the region's humid summers and freeze-thaw winter cycles. Composite decks require less frequent care — typically a professional cleaning every 2–3 years."
  },
  {
    q: "Is composite deck maintenance different from wood deck maintenance?",
    a: "Yes. Composite decking like Trex does not need staining or sealing, but it still benefits from regular cleaning to prevent mold, mildew, and organic staining — especially in shaded yards common across Ashburn, Sterling, and Reston. Wood decks require full sealing and staining to prevent rot and UV damage."
  },
  {
    q: "What is the best season to schedule deck maintenance in Northern Virginia?",
    a: "Late spring (April–May) or early fall (September–October) are ideal in NoVA. These windows avoid the peak summer humidity and the freezing temperatures that can prevent stains and sealers from curing properly."
  },
  {
    q: "Can I do deck maintenance myself, or should I hire a professional?",
    a: "DIY cleaning is possible, but professional maintenance ensures proper pressure levels that won't damage wood fibers, correct product selection for your deck material, and even application for lasting results. For homeowners in Leesburg, Chantilly, or Herndon, professional service can double the life of a wood deck."
  },
  {
    q: "What happens if I skip deck maintenance for several years?",
    a: "Neglected decks in Northern Virginia's climate develop deep moisture damage, rot, and structural instability. What starts as a $500 maintenance job can escalate into a $10,000–$20,000 full deck replacement. Annual or biannual maintenance is the most cost-effective way to protect your investment."
  }
];

export default function DeckMaintenancePage() {
  return (
    <main>
      <WebPageSchema url="https://ldndecks.com/services/deck-maintenance" name="Professional Deck Maintenance NoVA | Staining &amp; Sealing Services" description="Protect your outdoor investment with expert deck maintenance in Northern Virginia. We specialize in wood staining, sealing, and structural care." speakable />
      <ServiceSchema
        name="Deck Maintenance"
        description="Annual deck cleaning, inspection, and maintenance for Northern Virginia homeowners. Wood and composite."
        url="https://ldndecks.com/services/deck-maintenance"
        category="Deck Maintenance"
        price="300"
        relatedServices={['https://ldndecks.com/services/deck-washing', 'https://ldndecks.com/services/deck-inspection']}
      />
      <ServicesHeader
        subtext="Deck Maintenance Services"
        title="Professional Deck Maintenance & Care"
        description="Routine maintenance is the key to extending the life of your deck. Protect your outdoor living investment from sun damage, moisture, and extreme seasonal weather."
      />
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Northern Virginia" lastUpdated="May 2026" />
      </section>

      <ServiceMain
        subtitle="Protect Your Outdoor Living Space"
        title="Why Routine Maintenance Matters"
        description="A beautiful deck requires ongoing care. Without proper sealing and protection, harsh UV rays break down the lignin in wood, leading to fading, cracking, and eventual rot. Our specialized maintenance programs ensure your deck remains safe, structurally sound, and visually stunning year after year."
        listTitle="The Benefits of Professional Maintenance"
        listItems={[
          "Prevents deeply ingrained moisture and dry rot",
          "Protects against severe UV fading and discoloration",
          "Eliminates slippery algae, mold, and mildew growth",
          "Saves thousands of dollars by preventing full deck replacements",
          "Restores the original, rich beauty of wood grain"
        ]}
        image1="/images/img26.jpeg"
        image2="/images/img14.jpeg"
      />

      <ServiceContentExpansion sections={maintenanceExpansionSections} />

      <ServiceInclusions
        title="Our Complete Maintenance Process"
        description="We don't just wash your deck; we restore and protect it using a proven, meticulous multi-step system."
        items={maintenanceProcess}
      />

      <Testimonials />
      <ServiceAreasGrid />
      <RelatedGuides currentPath="/services/deck-maintenance" />
      <ServicesFAQ canonicalUrl="https://ldndecks.com/services/deck-maintenance" title="Deck Maintenance FAQs" faqs={faqs} />
      <SimpleCTA title="Book Your Deck Maintenance" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </main>
  );
}
