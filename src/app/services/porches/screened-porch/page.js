import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ProcessSteps from '@/components/ProcessSteps';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import ServiceSchema from '@/components/ServiceSchema';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceVisual from '@/components/ServiceVisual';
import SimpleCTA from '@/components/SimpleCTA';
import AboveFoldCTA from '@/components/AboveFoldCTA';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
    path: "/services/porches/screened-porch",
    title: "Screened-In Porch Construction | Bug-Free Outdoor Living",
    description: "Protect your outdoor experience with a custom screened-in porch. High-quality craftsmanship and professional installation in Northern Virginia.",
});

const inclusions = [
  {
        title: "Insect Protection",
        desc: "We use high-durability screening materials that provide maximum airflow while keeping pests out."
  },
  {
        title: "Year-Round Comfort",
        desc: "Optional features like outdoor fireplaces and motorized screens to extend your porch usage across seasons."
  },
  {
        title: "Structural Integrity",
        desc: "Engineered specifically to support roof loads and withstand local wind and weather conditions."
  }
  ];

const faqs = [
  { q: "Can I choose different screen materials?", a: "Yes, we offer standard mesh, pet-resistant screens, and even high-visibility mesh that disappears from view." },
  { q: "Do you handle the permit process for screened porches?", a: "Absolutely. We manage all plans, engineering, and county submissions to ensure your build is 100% legal and safe." }
  ];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};

export default function ScreenedPorchPage() {
    return (
          <main>
      <ServiceSchema name="Screened Porch Construction" description="Custom screened porches in Northern Virginia. Extend your outdoor season to 9-10 months. EZE-Breeze options available." price="25000" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <ServicesHeader
          subtext="Porch Services"
          title="Custom Screened-In Porches"
          description="Enjoy the beauty of the outdoors without the nuisance of insects or direct elements in a custom-built screened porch."
        />
      <AboveFoldCTA headline="Planning a screened-in porch in Northern Virginia? Talk to a Class A licensed porch specialist today." />
                  <ServiceMain
          subtitle="Relaxation Redefined"
          title="Professional Screened-In Porch Solutions"
          description="A screened-in porch is the ultimate Virginia outdoor living space. It offers the perfect venue for morning coffee or evening dinners, protected from bugs and weather. We specialize in high-end screened porch builds."
          listTitle="Custom Features:"
          listItems={[
                      "High-visibility screening",
                      "Knee-wall or floor-to-ceiling options",
                      "Integrated sound and lighting",
                      "Composite or natural wood flooring"
                    ]}
          image1="/images/img01.jpeg"
          image2="/images/img11.jpeg"
        />
                  <ServiceVisual image="/images/img28.jpeg" />
                  <ServiceInclusions
          title="What Our Team Delivers"
          description="We focus on creating a space that matches your lifestyle and enhances your home's architecture."
          items={inclusions}
        />
                  <ProcessSteps />
                  <ServicesFAQ title="Screened Porch FAQs" faqs={faqs} />
                  <SimpleCTA title="Build Your Screened Porch" buttonText="Get Free Estimate" link="/contact" />
                  <RelatedGuides currentPath="/services/porches/screened-porch" />
      <ContactHome />
            </main>
    );
}
