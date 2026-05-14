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

import NamedAuthor from '@/components/NamedAuthor';
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

      <ServicesFAQ
        title="Concrete Washing FAQs"
        faqs={[
          { q: "Can you remove oil stains from my driveway?", a: "We have specialized treatments for oil and grease that significantly reduce their appearance, though total removal depends on how long the stain has been set." },
          { q: "Will the pressure damage my concrete?", a: "We adjust our pressure for the age and condition of your concrete to ensure a deep clean without any etching or surface damage." }
        ]}
      />

      <RelatedGuides currentPath="/services/concrete-washing" />
      <SimpleCTA title="Get Your Concrete Cleaned" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </main>
  );
}
