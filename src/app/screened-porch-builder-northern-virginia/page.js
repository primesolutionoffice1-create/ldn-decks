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
import SimpleCTA from '@/components/SimpleCTA';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: "/screened-porch-builder-northern-virginia",
  title: "Screened Porch Builder Northern Virginia | Custom Porches | Loudoun Decks",
  description: "Top-rated screened porch builder in Northern Virginia. Custom screened-in porches, EZE-Breeze windows, and outdoor living spaces. Serving Loudoun, Fairfax, and Prince William Counties.",
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
    a: "A custom screened porch in Northern Virginia typically starts around $25,000 and can range up to $60,000+, depending on size, roof tie-in complexity, flooring material (composite vs. wood), and upgrades like EZE-Breeze windows or outdoor fireplaces."
  },
  {
    q: "Do I need a permit to build a screened porch in VA?",
    a: "Yes. Screened porches require structural plans, roof framing details, and county permits (Loudoun, Fairfax, or Prince William). We handle the entire architectural and permitting process for you."
  },
  {
    q: "Can you build a screened porch over an existing deck?",
    a: "In some cases, yes, if the existing deck footings and structure were originally engineered to support a roof load. However, most standard decks cannot safely support a roof without significant retrofitting or a complete rebuild of the foundation."
  },
  {
    q: "What are EZE-Breeze windows?",
    a: "EZE-Breeze is a sliding panel system made of durable vinyl that looks like glass. It allows you to convert your screened porch into a 3-season room, blocking pollen, rain, and cold wind while opening completely on nice days."
  },
  {
    q: "How long does it take to build a screened porch?",
    a: "Permitting typically takes 3-6 weeks due to the structural review. Once construction begins, a standard screened porch takes about 3-5 weeks to complete, factoring in framing, roofing, electrical, and finishing."
  }
];

const expansionSections = [
  {
    title: "Why Northern Virginia Needs Screened Porches",
    paragraphs: [
      "Northern Virginia's climate offers beautiful springs and falls, but the humid summers bring intense heat, mosquitoes, and sudden thunderstorms. A custom screened porch allows you to enjoy the outdoors without these disruptions. It is the ultimate extension of your home's living space, providing a protected environment for dining, entertaining, or simply relaxing.",
      "At Loudoun Decks, we specialize in building high-end screened porches that look like they were part of your home's original blueprint. We carefully match rooflines, siding, and architectural trim to ensure a seamless transition between indoor and outdoor spaces."
    ]
  },
  {
    title: "Custom Features for Your Screened Porch",
    paragraphs: [
      "Every screened porch we build is custom-designed for the homeowner. We offer a range of premium features to elevate your space:",
      "• EZE-Breeze Enclosures: Transform your porch into a multi-season room.\n• Premium Flooring: Low-maintenance composite decking (Trex or TimberTech) or classic tongue-and-groove wood.\n• Custom Ceilings: Vaulted ceilings, exposed beams, or finished beadboard with integrated recessed lighting and ceiling fans.\n• Outdoor Fireplaces: Gas or wood-burning stone fireplaces for cozy fall evenings."
    ]
  },
  {
    title: "The Deck and Screened Porch Combo",
    paragraphs: [
      "One of our most popular projects in Loudoun and Fairfax counties is the deck and screened porch combination. This design provides the best of both worlds: a covered, bug-free area for dining and an open sun deck for grilling and lounging. If you have a walkout basement, we can even build the screened porch on the upper level and create a dry, usable patio space underneath.",
      "As a premier screened porch builder in Northern Virginia, we manage the complex engineering required for these multi-level structures, ensuring they are safe, beautiful, and fully permitted."
    ]
  }
];

export default function ScreenedPorchBuilderNovaPage() {
  return (
    <main>
      <ServiceSchema name="Screened Porch Construction" description="Custom screened porches and 3-season rooms in Northern Virginia. Protect your outdoor living space from insects and weather." price="25000" />

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
      
      <ServiceContentExpansion sections={expansionSections} />
      
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
