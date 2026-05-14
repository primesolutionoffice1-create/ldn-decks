import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceProcessHorizontal from '@/components/ServiceProcessHorizontal';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import SimpleCTA from '@/components/SimpleCTA';

import { buildMetadata } from '@/lib/seo';

import NamedAuthor from '@/components/NamedAuthor';
export const metadata = buildMetadata({
  path: "/services/deck-washing",
  title: "Professional Deck Washing Loudoun VA | Safe Soft-Wash Restoration",
  description: "Restore your outdoor wood or composite deck with professional low-pressure soft-washing in Northern Virginia. We safely remove algae, mold, and grime."
});

const expansionSections = [
  {
    title: "Why Your Deck Needs Professional Washing",
    paragraphs: [
      "In Northern Virginia, the combination of intense spring pollen, humid summers, and freeze-thaw winter cycles creates the perfect breeding ground for organic growth on outdoor surfaces. Allowed to fester, mold, mildew, and algae will root deep into the pores of your wood or composite decking.",
      "Beyond looking unsightly, this organic buildup becomes incredibly slippery and dangerous when wet. More importantly, mold feeds on the organic fibers of wood decks, accelerating rot and structurally compromising your investment. Professional washing is not just a cosmetic upgrade; it is critical preventative maintenance."
    ],
    listItems: [
      { label: "Algae & Mildew Eradication", text: "We use eco-friendly chemical soft-washes to kill the root spores of algae, rather than just blasting the top layer away." },
      { label: "Restored Traction", text: "Removing the slippery micro-film of mildew restores the original friction to your stairs and boards, ensuring family safety." },
      { label: "Pollen & Tannin Removal", text: "We lift out the deep-seated yellow oak pollen and naturally occurring tannin stains that discolor your deck's appearance." },
      { label: "Prep for Staining", text: "Wood pores must be completely free of dirt and old oils before applying a new semi-transparent or solid stain. Proper washing is step one." }
    ]
  },
  {
    title: "The Danger of DIY High-Pressure Washing",
    paragraphs: [
      "The most common mistake homeowners make is renting a 3000 PSI pressure washer and blasting their pressure-treated wood or Trex boards at point-blank range.",
      "High pressure water acts like a liquid buzzsaw. On natural wood, it will 'fur' the boards by shredding the cellulose fibers, leading to massive splintering. On composite decks, excessive pressure will strip the protective acrylic capping, voiding the manufacturer's warranty entirely. We utilize specialized 'Soft Washing' techniques that rely on premium detergents and high water volume, not high pressure, to safely lift dirt."
    ],
    listItems: [
      { label: "Wood Furring Prevention", text: "Our low-pressure nozzles ensure the wood grain stays tight and smooth, readying it for sealants." },
      { label: "Composite Safe", text: "We use Trex and TimberTech-approved cleaning agents that will not degrade the synthetic capping." },
      { label: "Environmentally Responsible", text: "The cleaning agents we use are neutralized before rinsing into your yard, protecting your grass, pets, and local waterways." },
      { label: "Consistent Results", text: "We use wide-fan oscillating surface cleaners to prevent the 'zebra striping' marks left by inexperienced operators." }
    ]
  }
];

const washingSteps = [
  {
    title: "Property Protection",
    desc: "We begin by watering down adjacent plants and covering delicate outdoor furniture or exposed electrical outlets."
  },
  {
    title: "Chemical Application",
    desc: "A bespoke mixture of surfactants and mildew-cides is applied at low pressure, allowing it to dwell and break down organic bonds."
  },
  {
    title: "Volume Rinsing",
    desc: "Using high-GPM (Gallons Per Minute) machines, we flush the dirt away using very low pressure (under 800 PSI)."
  },
  {
    title: "Wood Brightening",
    desc: "For natural wood decks, an optional oxalic acid brightener is applied to restore the wood's natural pH and blonde color."
  }
];

const inclusions = [
  {
    title: "Deep Pores Cleaned",
    desc: "Lifting years of embedded dust, barbecue grease, and muddy paw prints."
  },
  {
    title: "Mildew Sanitization",
    desc: "Safely killing the microscopic mold spores so they don't return six weeks later."
  },
  {
    title: "Railing & Baluster Detailing",
    desc: "Hand-clearing the intricate spaces between your stair balusters and handrails."
  },
  {
    title: "Surface Prep",
    desc: "Opening the wood grain perfectly in preparation for clear coats or penetrating stains."
  }
];

const deckWashingFAQs = [
  {
    q: "How often should I have my deck washed in Virginia?",
    a: "We recommend a professional cleaning at least once every 12 to 18 months, typically scheduled in the late spring after the heavy oak and pine pollen drop has settled."
  },
  {
    q: "Will the cleaning chemicals harm my landscaping or pets?",
    a: "We employ extensive property protection measures. We pre-wet and post-wet all surrounding grass and shrubs. The detergents we use are heavily diluted and break down quickly into harmless salts when flushed with water. It is completely safe for pets once the deck has dried."
  },
  {
    q: "Do composite decks really need to be washed?",
    a: "Yes. While composite decks (like Trex) are highly resistant to moisture, the dirt and pollen that settle on top of them can still grow mold. A bi-annual soft wash keeps them looking brand new and fulfills the maintenance requirements of the manufacturer warranty."
  },
  {
    q: "Do you also apply stain and sealant after washing?",
    a: "Yes, once the organic wood has been thoroughly cleaned, neutralized, and allowed to dry to a proper moisture content level (usually 24-48 hours later depending on sun exposure), we can return to apply premium contractor-grade sealants."
  }
];

const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": deckWashingFAQs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
};

const serviceSchemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional Deck Washing",
  "provider": { "@id": "https://ldndecks.com/#organization" },
  "areaServed": [
    { "@type": "State", "name": "Virginia" }
  ],
  "description": "Professional exterior residential deck cleaning, soft washing, and wood brightening services in Northern Virginia."
};

export default function DeckWashingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemaData) }}
      />

      <ServicesHeader
        subtext="Maintenance & Restoration"
        title="Professional Deck Washing Services"
        description="Safely strip away years of grime, dangerous mildew, and gray oxidation without damaging your wood or composite boards."
      />
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Northern Virginia" lastUpdated="May 2026" />
      </section>

      <ServiceMain
        subtitle="Protect Your Investment"
        title="Safe, Effective Restoration"
        description="Whether you have an expensive IPE hardwood deck or low-maintenance Trex boards, aggressive high-pressure washing can cause irreversible damage. Loudoun Decks employs advanced 'Soft Washing' techniques that rely on high water volume and specialized detergents to melt dirt away effortlessly."
        listTitle="The Benefits of Professional Soft Washing:"
        listItems={[
          "Zero risk of splintering or tearing natural wood grain",
          "Eco-friendly detergents neutralize the root spores of algae",
          "Deep cleans the porous surface properly before applying stains",
          "Instantly raises the curb appeal of your backyard landscape"
        ]}
        image1="/outdoorwashing2.webp"
        image2="/homeimg4.webp"
      />

      <ServiceContentExpansion sections={expansionSections} />

      <ServiceProcessHorizontal
        title="Our Soft Washing Methodology"
        steps={washingSteps}
      />

      <ServiceInclusions
        title="What Our Cleaning Service Includes"
        description="A meticulous approach to restoring your entire outdoor footprint."
        items={inclusions}
      />

      <ServicesFAQ withSchema={false}
        title="Deck Washing FAQs"
        faqs={deckWashingFAQs}
      />

      <ServiceAreasGrid />

      <RelatedGuides currentPath="/services/deck-washing" />
      <SimpleCTA title="Schedule Your Deck Cleaning" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </main>
  );
}
