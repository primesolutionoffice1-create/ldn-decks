import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import ServiceSchema from '@/components/ServiceSchema';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import SimpleCTA from '@/components/SimpleCTA';
import JsonLd from '@/components/JsonLd';

import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

import NamedAuthor from '@/components/NamedAuthor';
export const metadata = buildMetadata({
  path: "/services/fence",
      title: "Fence Installation Loudoun County | LDN Decks",
  description: "Loudoun Decks provides expert fence installation for homeowners in Loudoun County, Fairfax, and Prince William. Custom wood, vinyl, and aluminum fencing.",
  image: "/social/fence-installation-service-social.png",
});

const inclusions = [
  {
    title: "Privacy & Boundary Layouts",
    desc: "Precision property staking and boundary fencing designed to define your outdoor sanctuary in Loudoun and Fairfax."
  },
  {
    title: "Eco-Friendly Material Sourcing",
    desc: "Sustainable wood and 100% recyclable vinyl and aluminum options for environmentally conscious Northern Virginia families."
  },
  {
    title: "HOA Compliance Support",
    desc: "Guidance on the complex fence height and material restrictions common in Arlington, Stafford, and Prince William County."
  }
];

const fenceFAQs = [
  {
    q: "How much does a privacy fence cost in Loudoun County?",
    a: "Standard 6-foot wood privacy fences in Loudoun County typically cost between $35 and $65 per linear foot, while vinyl and aluminum options range from $50 to $90+."
  },
  {
    q: "Do I need a building permit for a fence in Fairfax County?",
    a: "Standard fences under 7 feet tall generally do not require a building permit in Fairfax County, though you must still comply with setback and HOA requirements."
  },
  {
    q: "What is the best fencing material for pets in NoVA?",
    a: "Vinyl and aluminum are excellent low-maintenance choices, as they cannot be chewed like wood and don't splinter. For larger yards in Prince William, traditional wood picket remains a popular choice."
  },
  {
    q: "How long does professional fence installation take?",
    a: "Most residential fence projects in Northern Virginia are completed in 2 to 4 days once the materials are delivered and the utility markings (Miss Utility) are finalized."
  },
  {
    q: "Do you install pool fences in Arlington and Stafford?",
    a: "Yes. We specialize in code-compliant pool safety fencing (BOCA compliant) designed to meet the strict safety regulations in Arlington and Stafford Counties."
  },
  {
    q: "Is wood or vinyl better for the Virginia climate?",
    a: "Vinyl is superior for longevity as it won't rot or warp in Virginia's humidity. However, many homeowners in Leesburg and Ashburn still prefer the natural aesthetics of Western Red Cedar."
  },
  {
    q: "Do you provide written fence scopes and warranty terms?",
    a: "Yes. Fence proposals include a written scope, material selections, installation assumptions, and applicable warranty terms so homeowners know what is included before approving the project."
  },
  {
    q: "Will a new fence increase my home's resale value?",
    a: "Private, secure yards are a top priority for families in the NoVA real estate market, often providing a 50-70% return on investment (ROI)."
  }
];

const expansionSections = [
  {
    title: "Defining Your Sanctuary: Premium Fence Installation in NoVA",
    paragraphs: [
      "In the bustling residential landscapes of Northern Virginia, a professional fence is more than just a property line-it is the foundation of your family's privacy and security. As a leading outdoor living specialist in Loudoun County, Fairfax County, and Prince William County, Loudoun Decks provides custom fencing solutions that go beyond basic 'cookie-cutter' panels. We understand that your yard is an extension of your home, and the right fence should enhance both its function and its curb appeal.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. We have seen a massive surge in demand for integrated outdoor design, where the fence style perfectly matches the custom deck or porch architecture. Whether you are living in the dense suburban developments of Ashburn or the expansive properties of western Loudoun, we tailor our installation techniques to your specific soil conditions and wind-load requirements.",
      "Choosing a fence contractor near you who handles the entire process-including utility marking and HOA coordination-is vital. Our team documents layout, post spacing, gate locations, material selections, and site conditions before installation so every post has a clear standard to meet."
    ]
  },
  {
    title: "Material Science: Wood, Vinyl, and Aluminum Pros & Cons",
    paragraphs: [
      "Selecting the right material for your Northern Virginia home depends on your maintenance tolerance and aesthetic goals. Natural Wood remains the most popular choice in areas like Fairfax and Leesburg. We primarily use Western Red Cedar and Pressure-Treated Pine. These materials offer an organic feel and can be stained to match your home's trim. However, wood does require a biannual maintenance cycle of cleaning and sealing to prevent the graying and rot common in the NoVA humidity.",
      "Vinyl (PVC) fencing is the ultimate high-ticket solution for busy families in Arlington and Stafford. Modern vinyl is engineered with UV inhibitors that prevent yellowing and brittle breakdown. It is a 'set it and forget it' material that only requires a seasonal wash with a hose. For those looking for a contemporary look, we often install black aluminum fencing, which provides a sophisticated, 'wrought iron' look that won't rust and offers maximum visibility into the surrounding landscape.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. As your custom deck builder and fencing expert, we help you weigh these material choices against your property's specific needs-whether that’s absolute privacy from neighbors or a secure perimeter for your dog to roam freely in Gainesville or Manassas."
    ],
    listItems: [
      { label: "Wood Fencing", text: "Classic, versatile, and highly customizable; requires regular staining to maintain its natural beauty." },
      { label: "Vinyl Fencing", text: "Virtually maintenance-free, rot-proof, and available in multiple privacy and picket styles." },
      { label: "Aluminum Fencing", text: "Elegant, durable, and perfect for sloped yards or pool enclosures; provides an open feel with zero rust." },
      { label: "Composite Fencing", text: "Combines the look of wood with the durability of vinyl; a premium choice for high-end NoVA properties." }
    ]
  },
  {
    title: "The NoVA HOA Challenge: Navigating Rules and Regulations",
    paragraphs: [
      "One of the biggest hurdles for homeowners in Loudoun and Fairfax is navigating the Homeowners Association (HOA) approval process. Most NoVA neighborhoods have strict rules regarding fence height, material type, and even the 'active side' (good side) placement. In towns like Reston and Herndon, failing to follow these guidelines can result in expensive fines or the requirement to remove the structure entirely. Loudoun Decks takes the guesswork out of this phase.",
      "We provide the detailed site plans, material specifications, and architectural drawings required by many HOA boards. Our project managers are familiar with common submission requirements across Northern Virginia, which helps homeowners submit cleaner applications and reduce avoidable back-and-forth.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. By managing the permitting and zoning requirements for our larger service area-including Arlington and Stafford-we ensure that your fence installation is legal, insured, and compliant with all local ordinances."
    ]
  },
  {
    title: "Integrated Design: Fencing for Decks and Patios",
    paragraphs: [
      "The best outdoor living spaces follow a cohesive design language. When we build a custom deck in Ashburn or a screened porch in Great Falls, we often design the surrounding fence to match the railing profile or the decking color. This 'total yard integration' is what sets Loudoun Decks apart as a premium custom builder. Using matching materials creates a seamless flow that makes your entire lot feel like a single, well-planned luxury retreat.",
      "For instance, we can integrate custom gates that match your deck's 'picture frame' border, or add low-voltage post lighting to your fence that syncs with your deck's Step lights. In Prince William County, we often build transition areas where the fence naturally leads into a custom patio or pergola structure. This holistic approach ensures that every dollar you invest into your property contributes to a unified, high-value result.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. Our 'Full projects only' philosophy means we focus on these complex, integrated builds that require professional engineering and a Premium eye for detail. We are the premier fence company near you for homeowners who refuse to settle for standard, uninspired property boundaries."
    ]
  }
];

const fenceFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": fenceFAQs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};

export default function FencePage() {
  return (
    <main>
      <ServiceSchema
        name="Fence Installation"
        description="Custom fencing in Northern Virginia. Privacy, composite, vinyl, wood, and aluminum options for Loudoun, Fairfax, and Prince William County homes."
        url="https://ldndecks.com/services/fence"
        category="Fencing"
        price="6000"
        relatedServices={['https://ldndecks.com/services/fence-cleaning', 'https://ldndecks.com/services/new-decks']}
      />
      <JsonLd data={fenceFaqSchema} />
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/services/fence" name="Fence Installation Loudoun County | LDN Decks" description="Loudoun Decks provides expert fence installation for homeowners in Loudoun County, Fairfax, and Prince William. Custom wood, vinyl, and aluminum fencing." speakable />
      <ServicesHeader
        subtext="Documented Fence Installation"
        title="Custom Fence Design & Installation"
        description="Loudoun Decks provides premier fence construction for homeowners in Loudoun County, Fairfax County, and Prince William County. Secure, private, and beautiful yard sanctuaries."
      />
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Loudoun, Fairfax, and Prince William counties" lastUpdated="2026-06-01" />
      </section>

      <ServiceMain
        subtitle="Privacy & Beauty"
        title="Expert Fence Contractor Serving Northern Virginia"
        description="Define your property with a custom-engineered fence. We specialize in high-quality wood, vinyl, and aluminum designs for residential homes in Arlington, Stafford, and total NoVA."
        listItems={[
          "Custom wood privacy and picket styles",
          "Low-maintenance vinyl & PVC fencing",
          "Ornamental aluminum & pool-safe designs",
          "Complete HOA and permit assistance",
          "Professional post-setting and leveling"
        ]}
        image1="/fence.webp"
        image2="/fence2.avif"
      />

      <ServiceContentExpansion sections={expansionSections} />

      <section style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Bundle: Fence + Deck = Save 15-25%</h2>
        <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Building a fence and deck at the same time saves money through shared mobilization, site prep, material delivery, and dumpster costs. Many homeowners add privacy fencing when they build or replace their deck.</p>
        <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Example: 350 sqft Deck + 120 ft Privacy Fence</h3>
          <p style={{ marginBottom: '0.5rem' }}>Separate projects: $30,000 (deck) + $6,000 (fence) = $36,000</p>
          <p style={{ marginBottom: '0.5rem' }}>Bundled together: $30,500 total <strong>saves $5,500 (15%)</strong></p>
          <p style={{ fontSize: '0.9rem', color: '#555' }}>Same materials, same quality, same warranty just smarter scheduling.</p>
        </div>
      </section>

      <ServiceInclusions
        title="Security Built for Virginia Families"
        description="Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. Our fences are built to last in the Mid-Atlantic climate."
        items={inclusions}
      />

      <ServicesFAQ canonicalUrl="https://ldndecks.com/services/fence" withSchema={false}
        title="Fence Installation & Design FAQs"
        faqs={fenceFAQs}
      />

      <ServiceAreasGrid />

      <RelatedGuides currentPath="/services/fence" />
      <SimpleCTA title="Get Your Fence Quote" buttonText="Get Free Estimate" link="/get-estimate" />
      <ContactHome />
    </main>
  );
}
