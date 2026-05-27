import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceVisual from '@/components/ServiceVisual';
import ProcessSteps from '@/components/ProcessSteps';
import SimpleCTA from '@/components/SimpleCTA';

import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

import NamedAuthor from '@/components/NamedAuthor';
import ServiceSchema from '@/components/ServiceSchema';
export const metadata = buildMetadata({
  path: "/services/outdoor-washing",
  title: "Professional Outdoor Power Washing NoVA | Deck & Patio Cleaning",
  description: "Restore your outdoor oasis with professional power washing services in Northern Virginia. We specialize in safe, effective cleaning for decks, patios, and fences."
});

const surfaces = [
  {
    title: "Deck Surfaces",
    desc: "We remove dirt, mildew, and surface contaminants from deck boards before staining, sealing, or resurfacing."
  },
  {
    title: "Concrete & Patios",
    desc: "Refreshing walkways and concrete surfaces where outdoor use causes buildup of dirt and grime."
  },
  {
    title: "Fences & Structures",
    desc: "Cleaning fences and outdoor wood or composite structures to maintain appearance and reduce buildup."
  }
];

const washingFAQs = [
  {
    q: "What is outdoor power washing?",
    a: "Outdoor power washing is a method of cleaning exterior surfaces using controlled water pressure to remove dirt, mold, mildew, and surface buildup."
  },
  {
    q: "Do you power wash decks?",
    a: "Yes - we provide professional power washing for deck surfaces as part of our outdoor surface cleaning services."
  },
  {
    q: "Where do you provide power washing services?",
    a: "We serve homeowners in Loudoun County, Fairfax County, and Prince William County in Northern Virginia."
  },
  {
    q: "Do you offer a free estimate?",
    a: "Yes. We offer a free, no-obligation estimate to discuss your specific outdoor power washing needs."
  }
];

export default function OutdoorWashingPage() {
  return (
    <main>
      <WebPageSchema url="https://ldndecks.com/services/outdoor-washing" name="Professional Outdoor Power Washing NoVA | Deck &amp; Patio Cleaning" description="Restore your outdoor oasis with professional power washing services in Northern Virginia. We specialize in safe, effective cleaning for decks, patios, and fences." speakable />
      <ServiceSchema
        name="Outdoor Power Washing"
        description="Professional outdoor power washing in Northern Virginia — safe, effective cleaning for decks, patios, fences, and exterior surfaces."
        url="https://ldndecks.com/services/outdoor-washing"
        category="Exterior Cleaning"
        lowPrice="200"
        highPrice="1500"
        relatedServices={['https://ldndecks.com/services/deck-washing', 'https://ldndecks.com/services/concrete-washing', 'https://ldndecks.com/services/house-siding-washing']}
      />
      <ServicesHeader
        subtext="Our Services"
        title="Outdoor Power Washing Services"
        description="Loudoun Decks provides professional outdoor power washing for homeowners across Northern Virginia. Refresh your deck, patio, and fences with our trusted cleaning solutions."
      />
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Northern Virginia" lastUpdated="May 2026" />
      </section>

      <ServiceMain
        subtitle="Refresh & Clean"
        title="Professional Cleaning for Every Surface"
        description="Outdoor surfaces can accumulate dirt, pollen, mold, and algae over time. Loudoun Decks offers outdoor power washing to help clean and refresh these areas, significantly improving your home's curb appeal."
        listTitle="Why Choose Power Washing:"
        listItems={[
          "Safely removes harmful mold and algae buildup",
          "Improves the longevity of your wood or composite",
          "Instantly refreshes the look of your home's exterior",
          "Prepares surfaces for new staining or sealing"
        ]}
        image1="/outdoorwashing2.webp"
        image2="/outdoorwashing3.jpg"
      />

      <ServiceVisual image="/outdoorwashing2.webp" />

      <ProcessSteps />

      <ServiceInclusions
        title="Surfaces We Clean"
        description="Our power washing services are designed to safely and effectively remove buildup on all major exterior surfaces."
        items={surfaces}
      />

      <ServiceInclusions
        title="Why Choose Loudoun Decks"
        description="Homeowners trust us for outdoor cleaning because we treat their property like our own."
        items={[
          { title: "Safe Methods", desc: "We use controlled pressure to clean effectively without damaging your wood or composite materials." },
          { title: "Local Service", desc: "A local Northern Virginia provider focused entirely on outdoor living structures." },
          { title: "Free Estimates", desc: "A straightforward, no-obligation estimate process to help you plan your project." }
        ]}
      />

      <ServicesFAQ canonicalUrl="https://ldndecks.com/services/outdoor-washing"
        title="Power Washing FAQs"
        faqs={washingFAQs}
      />

      <SimpleCTA title="Book Your Outdoor Cleaning" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/services/outdoor-washing" />
      <ContactHome />
    </main>
  );
}
