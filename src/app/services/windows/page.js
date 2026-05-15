import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ProcessSteps from '@/components/ProcessSteps';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import ServiceSchema from '@/components/ServiceSchema';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import SimpleCTA from '@/components/SimpleCTA';

import { buildMetadata } from '@/lib/seo';

import NamedAuthor from '@/components/NamedAuthor';
export const metadata = buildMetadata({
  path: "/services/windows",
      title: "Window Replacement Loudoun County | LDN Decks",
  description: "Loudoun Decks provides premium window replacement and installation across Northern Virginia. Improve energy efficiency, quiet, and curb appeal."
});

const windowInclusions = [
  {
    title: "Energy STAR Integration",
    desc: "Installing high-performance glass packages optimized for the Northern Virginia climate to reduce H-VAC strain."
  },
  {
    title: "Precision Weather-Sealing",
    desc: "Multi-point sealing techniques in Loudoun and Fairfax that eliminate drafts and moisture infiltration permanently."
  },
  {
    title: "Premium Aesthetics",
    desc: "Custom trim and color-matching for windows in Arlington and Stafford that enhance your home's curb appeal."
  }
];

const windowFAQs = [
  {
    q: "How much does a typical window replacement cost in Loudoun County?",
    a: "Standard vinyl replacement windows in Loudoun County range from $700 to $1,200 per opening, while high-end wood or fiberglass can exceed $2,000 including installation."
  },
  {
    q: "What is the best type of window for Northern Virginia's climate?",
    a: "Double-pane, Argon-filled windows with Low-E coatings are the gold standard for NoVA, providing maximum insulation during both humid summers and freezing winters."
  },
  {
    q: "How long is the local wait time for custom windows in Fairfax?",
    a: "Manufacturing typically takes 4 to 8 weeks, with installation completed in just 1-2 days once the units arrive at our NoVA warehouse."
  },
  {
    q: "Will new windows really lower my utility bills in Prince William?",
    a: "Yes. Homeowners in Prince William County often see a 15-25% reduction in heating and cooling costs after upgrading from old single-pane or leaky windows."
  },
  {
    q: "Do you offer sound-dampening windows for Arlington homes?",
    a: "Yes. We offer laminated glass packages designed specifically for the higher noise levels in Arlington and near Dulles Airport."
  },
  {
    q: "Are you a 5-Star Google Rated window contractor?",
    a: "Loudoun Decks is a 5-Star Google Rated team known for the same precision in window replacement as we are in our custom deck builds."
  },
  {
    q: "What is the difference between an insert and a full-frame replacement?",
    a: "Insert replacement preserves the existing trim, while full-frame replacement removes everything down to the studs-ideal for older homes with structural rot."
  },
  {
    q: "Do your windows come with a warranty?",
    a: "Yes. We provide a lifetime workmanship warranty along with manufacturer warranties covering glass breakage and seal failure for up to 20+ years."
  }
];

const expansionSections = [
  {
    title: "The Energy Efficiency Imperative: Window Replacement in NoVA",
    paragraphs: [
      "In the diverse climate of Northern Virginia-where temperatures can swing from the single digits in January to over 100 degrees in July-your home's windows are the most critical bridge between your comfort and the elements. As a leading home improvement specialist in Loudoun County, Fairfax County, and Prince William County, Loudoun Decks understands that window replacement is more than just an aesthetic upgrade. It is an investment in your home's thermal envelope and long-term utility savings.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. We apply the same level of structural engineering and 5-Star attention to detail to our window projects as we do to our multi-level deck builds. Whether you are living in the historic districts of Leesburg or the modern developments of Ashburn, we help you select window systems that are specifically designed for the Mid-Atlantic’s specific humidity and solar exposure patterns.",
      "Searching for a window contractor near you often leads to 'national' chains that use a one-size-fits-all approach. At Loudoun Decks, we prioritize local expertise. We know which glass coatings work best for west-facing rooms in Sterling and which frame materials provide the best longevity for the wooded lots in Great Falls and Mclean."
    ]
  },
  {
    title: "Vinyl vs. Fiberglass vs. Wood: Navigating Material Lifespans",
    paragraphs: [
      "Choosing the right frame material is the first step toward a successful installation. Vinyl remains the most popular choice for homeowners in Fairfax and Vienna due to its exceptional value and low-maintenance profile. Modern vinyl frames are reinforced with multi-chambered interiors that provide excellent insulation and won't rot or corrode in the Virginia humidity. For those looking for the ultimate in architectural luxury, fiberglass windows offer unmatched strength and extremely slim profiles, allowing for maximum glass area.",
      "Natural Wood windows are often mandatory for historical restoration projects in areas like Arlington and Leesburg. They provide an organic warmth and beauty that 'synthetic' materials simply cannot match. However, they do require more maintenance in terms of painting and sealing over time. Our team helps you weigh these factors against your project's budget and your long-term plans for the property.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. As your custom deck builder and window specialist, we ensure that your new windows are perfectly integrated with your home’s existing architecture, whether you are in a classic brick colonial in Gainesville or a contemporary townhouse in Reston."
    ],
    listItems: [
      { label: "Vinyl Windows", text: "Cost-effective, energy-efficient, and virtually maintenance-free; the #1 choice for NoVA families." },
      { label: "Fiberglass Windows", text: "Extremely strong, won't expand or contract, and allows for the largest possible glass views." },
      { label: "Wood Windows", text: "The premium aesthetic choice for historical homes and high-end luxury remodels." },
      { label: "Low-E Coatings", text: "Microscopic metallic layers that reflect heat while letting in natural light, mandatory for energy savings." }
    ]
  },
  {
    title: "The Science of Comfort: Glass Technology and Insulation",
    paragraphs: [
      "The 'magic' of a modern window replacement lies in the glass. We primarily install double-pane units filled with Argon gas-a heavy, clear, non-toxic gas that acts as a powerful insulator between the panes. In high-stakes markets like Arlington and Herndon, adding Low-E (Low Emissivity) coatings can drastically reduce the amount of UV light entering your home. This does more than just lower your cooling bills; it prevents your furniture, flooring, and artwork from fading due to sun exposure.",
      "Noise reduction is another major benefit of professional window installation. For our clients near Dulles Airport or busy corridors like I-66 and the Capital Beltway, we offer specialized sound-dampening glass packages. These use varied glass thicknesses and laminated layers to disrupt sound waves, turning a noisy street into a quiet sanctuary. This 5-Star functionality is what sets premium window systems apart from budget-grade alternatives.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. We take pride in being a deck company near you that also understands the thermal dynamics of your home’s interior, providing a holistic approach to your property's overall performance and value."
    ]
  },
  {
    title: "Precision Installation: The Loudoun Decks Difference",
    paragraphs: [
      "Even the most expensive window in the world will fail if it's not installed correctly. Shoddy installation leads to air leaks, water infiltration, and operational issues within just a few years. At Loudoun Decks, our installation protocol is rigorous. We use precision laser leveling to ensure every window is perfectly square and plumb. We utilize high-grade expanding foam and professional-grade flashing to create a triple-layered seal against Virginia's heavy rains.",
      "We manage the entire project from initial measurements to final walkthrough. Our 'Full projects only' philosophy ensures that we are responsible for every detail, including the permit process in Stafford County and coordination with local building inspectors in Arlington. When we leave the job site, we ensure all debris is removed and your home is as clean as when we arrived, leaving only beautiful new views.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. Choosing a 5-Star Google Rated contractor for your window replacement project means you are choosing peace of mind, professional communication, and a result that will look and perform flawlessly for decades."
    ]
  }
];

export default function WindowsPage() {
  return (
    <main>
      <ServiceSchema name="Window Installation" description="Residential window replacement and installation in Northern Virginia." price="5000" />
      <ServicesHeader 
        subtext="5-Star Google Rated Experts"
        title="Window Replacement & Installation"
        description="Loudoun Decks provides premium energy-efficient window replacement for homeowners in Loudoun County, Fairfax County, and Prince William County. Enhance your home with 1,500+ words of expertise."
      />
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Northern Virginia" lastUpdated="May 2026" />
      </section>

      <ServiceMain 
        subtitle="Efficiency & Style"
        title="Professional Window Solutions Serving NoVA"
        description="Upgrade your home's comfort and curb appeal. We specialize in high-performance window installation for residential homes in Arlington, Stafford, and beyond."
        listItems={[
          "Energy STAR® certified window systems",
          "High-performance vinyl, wood, and fiberglass",
          "Sound-dampening and Low-E glass packages",
          "Full custom framing and architectural trim",
          "Expert weather-tight precision installation"
        ]}
        image1="/images/img14.jpeg"
        image2="/images/img15.jpeg"
      />

      <ServiceContentExpansion sections={expansionSections} />

      <ServiceInclusions 
        title="Engineered for the Mid-Atlantic"
        description="Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. Our windows are built for heat, cold, and quiet."
        items={windowInclusions}
      />

      <ProcessSteps />

      <ServicesFAQ canonicalUrl="https://ldndecks.com/services/windows"
        title="Window Installation & Technology FAQs"
        faqs={windowFAQs}
      />

      <ServiceAreasGrid />

      <SimpleCTA title="Get Your Window Quote" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/services/windows" />
      <ContactHome />
    </main>
  );
}
