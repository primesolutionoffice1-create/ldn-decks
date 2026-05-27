import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceVisual from '@/components/ServiceVisual';
import SimpleCTA from '@/components/SimpleCTA';

import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

import NamedAuthor from '@/components/NamedAuthor';
import ServiceSchema from '@/components/ServiceSchema';
import ExteriorCleaningAuthority from '@/components/ExteriorCleaningAuthority';
export const metadata = buildMetadata({
  path: "/services/concrete-washing",
  title: "Professional Concrete Washing NoVA | Driveway & Walkway Cleaning",
  description: "Restore your driveways, patios, and walkways with expert concrete washing in Northern Virginia. We remove deep-set stains, oil, and algae."
});

const inclusions = [
  {
    title: "Stain Removal",
    desc: "Lifting deep-set oil, tire marks, and rust stains from driveways and garage floors."
  },
  {
    title: "Algae & Moss Control",
    desc: "Removing slippery biological growth from walkways and shaded patio areas for better safety."
  },
  {
    title: "Surface Sealing Prep",
    desc: "Tapping into the concrete's pores to ensure maximum adhesion for future sealers or coatings."
  }
];

export default function ConcreteWashingPage() {
  return (
    <main>
      <WebPageSchema url="https://ldndecks.com/services/concrete-washing" name="Professional Concrete Washing NoVA | Driveway &amp; Walkway Cleaning" description="Restore your driveways, patios, and walkways with expert concrete washing in Northern Virginia. We remove deep-set stains, oil, and algae." speakable />
      <ServiceSchema
        name="Concrete Washing"
        description="Professional concrete and masonry washing in Northern Virginia — removing oil stains, algae, and ground-in dirt from driveways, patios, and walkways."
        url="https://ldndecks.com/services/concrete-washing"
        category="Exterior Cleaning"
        lowPrice="200"
        highPrice="1000"
        relatedServices={['https://ldndecks.com/services/outdoor-washing', 'https://ldndecks.com/services/deck-washing', 'https://ldndecks.com/services/house-siding-washing']}
      />
      <ServicesHeader
        subtext="Our Services"
        title="Concrete Washing Services"
        description="Loudoun Decks provides expert concrete washing for homeowners in Northern Virginia, restoring the bright, clean look of your masonry."
      />
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Northern Virginia" lastUpdated="May 2026" />
      </section>

      <ServiceMain
        subtitle="Hardscape Refresh"
        title="Restore Your Patios and Walkways"
        description="Concrete and masonry are porous materials that tend to 'soak up' stains and accumulate ground-in dirt. Our high-grade power washing services reach deep into the surface to lift contaminants that a garden hose simply can't touch."
        listTitle="Areas We Clean:"
        listItems={[
          "Residential driveways and aprons",
          "Poured concrete and paver patios",
          "Sidewalks and entry walkways",
          "Pool decks and masonry walls"
        ]}
        image1="/concretewash.jpg"
        image2="/concretewash2.jpg"
      />

      <ServiceVisual image="/outdoorwashing2.webp" />

      <ServiceInclusions
        title="Why Concrete Washing?"
        description="Regular cleaning not only looks better but also prevents the long-term degradation of your hardscape materials."
        items={inclusions}
      />

      <ExteriorCleaningAuthority type="concrete" />

      <ServicesFAQ canonicalUrl="https://ldndecks.com/services/concrete-washing"
        title="Concrete Washing FAQs"
        faqs={[
          { q: "Can you remove oil stains from my driveway?", a: "We use pre-treatment and controlled surface cleaning to significantly reduce oil and grease staining. Complete removal depends on how long the stain has been in the concrete, whether it has penetrated the pores, and whether a previous sealer trapped the discoloration." },
          { q: "Will pressure washing damage my concrete?", a: "We adjust pressure, nozzle distance and cleaning method based on the age and condition of the slab. Newer or softer concrete, spalled areas and decorative surfaces require more care than ordinary broom-finished driveway concrete." },
          { q: "Is concrete washing useful before patio or deck work?", a: "Yes. Cleaning the surrounding hardscape helps expose drainage problems, cracks, settled areas, algae growth and stains before a deck, patio, under-deck or outdoor living project is planned around it." },
          { q: "Which Northern Virginia surfaces do you clean?", a: "We clean driveways, walkways, patios, pool surrounds, under-deck patio areas and concrete aprons across Loudoun, Fairfax and Prince William County when the work fits an outdoor living or exterior refresh project." }
        ]}
      />

      <RelatedGuides currentPath="/services/concrete-washing" />
      <SimpleCTA title="Get Your Concrete Cleaned" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </main>
  );
}
