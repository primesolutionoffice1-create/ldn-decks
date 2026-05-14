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

      <ServicesFAQ
        title="Fence Cleaning FAQs"
        faqs={[
          { q: "Will cleaning make my grey fence look like new wood again?", a: "Yes! For natural wood fences, our process removes the dead outer fibers (the grey layer) to expose the fresh, original color of the wood." },
          { q: "Is it safe for my plants along the fence line?", a: "We take great care to pre-soak and protect your landscaping, using cleaning solutions that are safe for your greenery." }
        ]}
      />

      <RelatedGuides currentPath="/services/fence-cleaning" />
      <SimpleCTA title="Get Your Fence Cleaned" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </main>
  );
}
