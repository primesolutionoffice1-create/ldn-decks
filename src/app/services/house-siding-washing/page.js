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
  path: "/services/house-siding-washing",
  title: "Professional House Siding Washing NoVA | Safe Exterior Cleaning",
  description: "Restore your home's curb appeal with professional house siding washing in Northern Virginia. We safely remove dirt, mold, and algae from vinyl and fiber cement."
});

const inclusions = [
  {
    title: "Vinyl & Fiber Cement",
    desc: "Safe cleaning methods for all popular siding materials, removing years of environmental buildup."
  },
  {
    title: "Mold & Algae Removal",
    desc: "Targeted treatment for green algae and dark mold that typically accumulates on the shady sides of homes."
  },
  {
    title: "Eco-Friendly Solutions",
    desc: "Using cleaning agents that are effective against grime but safe for your landscaping and pets."
  }
];

export default function HouseSidingWashingPage() {
  return (
    <main>
      <ServicesHeader
        subtext="Our Services"
        title="House Siding Washing"
        description="Loudoun Decks provides professional house siding washing for homeowners in Northern Virginia, helping restore the original beauty of your home's exterior."
      />
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Northern Virginia" lastUpdated="May 2026" />
      </section>

      <ServiceMain
        subtitle="Home Refresh"
        title="Safely Restore Your Home's Curb Appeal"
        description="Your home's siding is its first line of defense against the elements. Over time, it can accumulate dirt, pollen, and biological growth that can dull its finish. Our controlled washing process cleans effectively without risking damage to your siding."
        listTitle="Benefits of Siding Washing:"
        listItems={[
          "Removes unsightly algae and mold growth",
          "Protects siding from long-term staining",
          "Instantly improves the look of your property",
          "Prepares siding for painting if needed"
        ]}
        image1="/outdoorwash2.webp"
        image2="/outdoorwash.jpg"
      />

      <ServiceVisual image="/outdoorwashing2.webp" />

      <ServiceInclusions
        title="What's Included"
        description="We focus on a thorough yet gentle cleaning process that covers your entire home's exterior."
        items={inclusions}
      />

      <ServicesFAQ
        title="Siding Washing FAQs"
        faqs={[
          { q: "Is pressure washing safe for my siding?", a: "We use soft-washing or controlled pressure methods specifically designed to clean siding without forcing water behind the panels or causing cracks." },
          { q: "How often should I wash my siding?", a: "Typically, every 1-2 years is recommended in Northern Virginia due to the humidity and seasonal pollen levels." }
        ]}
      />

      <SimpleCTA title="Get Your Siding Cleaned" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/services/house-siding-washing" />
      <ContactHome />
    </main>
  );
}
