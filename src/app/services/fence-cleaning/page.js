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
  path: "/services/fence-cleaning",
  title: "Professional Fence Cleaning NoVA | Wood & Composite Restoration",
  description: "Restore your fence with professional cleaning services in Northern Virginia. We safely remove gray weathering, mold, and algae from wood and composite fencing."
});

const inclusions = [
  {
    title: "Wood Restoration",
    desc: "Removing the grey, weathered layer from wood fences to reveal the fresh, natural grain underneath."
  },
  {
    title: "Composite Care",
    desc: "Targeted cleaning for composite fences to remove stubborn stains and environmental film without scratching."
  },
  {
    title: "Mildew Prevention",
    desc: "Treating surfaces to kill biological growth at the source, helping your fence stay cleaner for longer."
  }
];

export default function FenceCleaningPage() {
  return (
    <main>
      <WebPageSchema url="https://ldndecks.com/services/fence-cleaning" name="Professional Fence Cleaning NoVA | Wood &amp; Composite Restoration" description="Restore your fence with professional cleaning services in Northern Virginia. We safely remove gray weathering, mold, and algae from wood and composite fencing." speakable />
      <ServiceSchema
        name="Fence Cleaning"
        description="Professional wood and composite fence cleaning in Northern Virginia — removing gray weathering, mold, and algae to restore your fencing."
        url="https://ldndecks.com/services/fence-cleaning"
        category="Exterior Cleaning"
        lowPrice="200"
        highPrice="800"
        relatedServices={['https://ldndecks.com/services/fence', 'https://ldndecks.com/services/outdoor-washing', 'https://ldndecks.com/services/deck-washing']}
      />
      <ServicesHeader
        subtext="Our Services"
        title="Fence Cleaning Services"
        description="Loudoun Decks provides professional fence cleaning for homeowners in Northern Virginia, helping maintain the integrity and appearance of your property boundaries."
      />
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Northern Virginia" lastUpdated="May 2026" />
      </section>

      <ServiceMain
        subtitle="Boundary Refresh"
        title="Restore the Life of Your Fencing"
        description="Fences are constantly exposed to the elements and often the first part of your home to show signs of weathering. Whether you have natural wood or modern composite fencing, our professional cleaning services can strip away years of exposure and leave your fence looking new."
        listTitle="Why Clean Your Fence?"
        listItems={[
          "Protects wood from rot and premature decay",
          "Removes gray weathering and restores natural color",
          "Cleans composite surfaces without abrasive scrubbing",
          "Increases the aesthetic appeal of your backyard"
        ]}
        image1="/fensewash.jpg"
        image2="/fensewash1.jpg"
      />

      <ServiceVisual image="/fenasewash2.jpg" />

      <ServiceInclusions
        title="Our Fence Cleaning Approach"
        description="We use specialized techniques tailored to the specific material of your fence to ensure a thorough clean without any structural damage."
        items={inclusions}
      />

      <ExteriorCleaningAuthority type="fence" />

      <ServicesFAQ canonicalUrl="https://ldndecks.com/services/fence-cleaning"
        title="Fence Cleaning FAQs"
        faqs={[
          { q: "Will cleaning make my gray fence look like new wood again?", a: "For natural wood fences, cleaning can remove much of the gray weathered surface layer and reveal warmer wood color underneath. The final result depends on age, sun exposure, previous stain, rot and how deeply weathering has penetrated." },
          { q: "Is fence cleaning safe for plants along the fence line?", a: "We pre-rinse and protect landscaping where needed, then control the cleaning and rinse process around planting beds. Dense vines, delicate shrubs and neighbor-side plantings are reviewed before the work begins." },
          { q: "Can you clean composite or vinyl fencing?", a: "Yes. Composite and vinyl fencing need a different approach than wood. We focus on removing algae, dirt film, sprinkler mineral marks and surface staining without abrasive scrubbing that could dull the finish." },
          { q: "When should a fence be cleaned before a deck or patio project?", a: "Fence cleaning is useful before deck resurfacing, patio installation, lighting upgrades or backyard photography because a dirty boundary can make a newly improved outdoor living area look unfinished." }
        ]}
      />

      <RelatedGuides currentPath="/services/fence-cleaning" />
      <SimpleCTA title="Get Your Fence Cleaned" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </main>
  );
}
