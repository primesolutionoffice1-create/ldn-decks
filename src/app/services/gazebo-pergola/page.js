import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceVisual from '@/components/ServiceVisual';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import SimpleCTA from '@/components/SimpleCTA';
import AboveFoldCTA from '@/components/AboveFoldCTA';
import JsonLd from '@/components/JsonLd';
import ServiceSchema from '@/components/ServiceSchema';

import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

import NamedAuthor from '@/components/NamedAuthor';
export const metadata = buildMetadata({
  path: "/services/gazebo-pergola",
  title: "Gazebo & Pergola Builder | Loudoun VA | LDN Decks",
  description: "Add shade and stunning architectural character to your backyard with custom gazebos and pergolas in Northern Virginia. Expert design and build services.",
  image: "/images/img67.webp",
});

const expansionSections = [
  {
    title: "Understanding the Difference: Pergolas vs Gazebos",
    paragraphs: [
      "When planning to add vertical architecture to your backyard, the terms 'pergola' and 'gazebo' are often used interchangeably, but they serve very different functional purposes.",
      "A pergola is an outdoor structure featuring an open-beam roof supported by vertical columns or pillars. Its primary purpose isn't to block out the rain, but rather to diffuse harsh sunlight, provide a framework for climbing vines, and create a gorgeous architectural transition space. Conversely, a gazebo acts as an outdoor room. It features a fully closed, pitched roof (often shingled to match your house) and provides total shelter from the elements, allowing you to enjoy your backyard even during summer downpours."
    ],
    listItems: [
      { label: "Pergola Function", text: "Best for partial shade, visual definition, and an airy, open environment." },
      { label: "Gazebo Function", text: "Best for complete weather protection and creating a distinctly enclosed outdoor room." },
      { label: "Material Choices", text: "Available in premium natural woods (Cedar, Redwood) or low-maintenance composites and aluminum." },
      { label: "Placement Integration", text: "Can be built freestanding in a garden or structurally tied into an existing deck or patio." }
    ]
  },
  {
    title: "Custom Pergola Designs for Northern Virginia",
    paragraphs: [
      "A pergola is the perfect addition to a bluestone patio or Trex deck. It creates a defined 'ceiling' that instantly makes the outdoor area feel cozy and intentional.",
      "At Loudoun Decks, we don't install flimsy, kit-in-a-box pergolas. Our structures are custom-engineered. We frequently incorporate automated louvered roof systems (allowing you to open and close the roof slits mechanically), integrated lighting, and outdoor ceiling fans to push away the heavy Virginia humidity."
    ],
    listItems: [
      { label: "Attached vs. Freestanding", text: "We can anchor them directly to your home's ledger board or construct them as standalone backyard focal points." },
      { label: "Louvered Roof Systems", text: "High-end mechanical systems that let you control exactly how much sun or rain enters the space." },
      { label: "Privacy Screens", text: "Integrated slatted wood walls on one side of the pergola to block out nosy neighbors." },
      { label: "Lighting Packages", text: "Hardwired LED string lights and post-mounted sconces for nighttime entertaining." }
    ]
  },
  {
    title: "Gazebos: Complete Shelter and Elegance",
    paragraphs: [
      "If your goal is to spend hours outdoors reading, dining, or working regardless of the sun's intensity or passing rainclouds, a custom gazebo is the superior choice.",
      "Our gazebos are built to exact residential building codes, meaning they are engineered to withstand extreme wind and heavy snow loads. We craft octagonal, oval, and rectangular gazebos, often finishing the interior ceilings with beautiful tongue-and-groove pine and fully screened-in walls to keep the mosquitos out."
    ],
    listItems: [
      { label: "Screened Enclosures", text: "Floor-to-ceiling screens provide an insect-free dining experience." },
      { label: "Roof Matching", text: "We match the asphalt shingles or standing seam metal roof to your main house for a cohesive look." },
      { label: "Electrical Rough-Ins", text: "Full electrical wiring for TVs, heaters, fans, and recessed lighting." },
      { label: "Flooring Base", text: "Built directly onto elevated decks, concrete slabs, or custom stonework." }
    ]
  }
];

const faqs = [
  {
    q: "What is the main difference between a gazebo and a pergola?",
    a: "A gazebo typically has a completely solid, pitched roof and provides full shade and rain protection, while a pergola has an open-beam or slatted roof design that provides partial shade and allows air to flow directly upward."
  },
  {
    q: "Do I need a building permit for these structures in Loudoun County?",
    a: "Yes. Almost all permanent vertical structures like gazebos and pergolas require a residential building permit, particularly because they must adhere to setbacks and wind-load engineering requirements. Loudoun Decks handles 100% of the permit process for you."
  },
  {
    q: "Can you build a pergola on top of my existing deck?",
    a: "Yes, but it depends on the foundational framing. Pergolas are heavy. We must first evaluate your deck's joists and footings to ensure they can support the additional structural load and resist wind uplift before proceeding."
  },
  {
    q: "How much maintenance does a wood pergola require?",
    a: "If built with Cedar or Redwood, natural wood pergolas require staining or sealing every 2 to 3 years to maintain their rich color and prevent greying. If you prefer zero maintenance, we highly recommend our vinyl, fiberglass, or heavy-gauge aluminum options."
  }
];

const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
};

const inclusions = [
  {
    title: "Architectural Design Phase",
    desc: "We provide 3D renderings of the proposed structure, ensuring the rooflines, scale, and materials perfectly complement your property."
  },
  {
    title: "Structural Engineering",
    desc: "Rigorous wind-load and snow-load calculations to ensure your freestanding roof remains immovable during severe Virginia storms."
  },
  {
    title: "Turnkey Installation",
    desc: "From pouring massive concrete footings to the final coat of stain, we manage the entire build using in-house master carpenters."
  },
  {
    title: "Integrated Electronics",
    desc: "Safe, hidden conduit routing for all electrical needs, including outdoor fans, heaters, and lighting arrays."
  }
];

export default function GazeboPergolaPage() {
  return (
    <main>
      <JsonLd data={faqSchemaData} />
      <WebPageSchema url="https://ldndecks.com/services/gazebo-pergola" name="Gazebo &amp; Pergola Builder | Loudoun VA | LDN Decks" description="Add shade and stunning architectural character to your backyard with custom gazebos and pergolas in Northern Virginia. Expert design and build services." speakable />
      <ServiceSchema
        name="Custom Gazebos and Pergolas"
        description="Custom design and build services for luxury pergolas, gazebos, and outdoor shade structures in Northern Virginia."
        url="https://ldndecks.com/services/gazebo-pergola"
        category="Outdoor Living"
        lowPrice="8000"
        highPrice="45000"
        relatedServices={['https://ldndecks.com/louvered-pergola-northern-virginia', 'https://ldndecks.com/services/fire-pits', 'https://ldndecks.com/outdoor-living-northern-virginia']}
      />

      <ServicesHeader
        subtext="Gazebos & Pergolas Loudoun VA"
        title="Custom Built Shade & Structure"
        description="Add lasting value, incredible shade, and stunning architectural character to your outdoor space with a custom gazebo or pergola engineered by Loudoun Decks."
      />
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Loudoun, Fairfax, and Prince William counties" lastUpdated="May 2026" />
      </section>

      <AboveFoldCTA headline="Custom gazebo or pergola in Northern Virginia? Talk to a NoVA outdoor-structure specialist today." />

      <ServiceMain
        subtitle="Vertical Outdoor Living"
        title="Define Your Backyard Experience"
        description="Gazebos and pergolas do more than just provide shade—they fundamentally change how a backyard feels by creating a 'ceiling' outdoors. Whether anchored over a sprawling patio or acting as a secluded garden retreat, these structures serve as the ultimate focal point for entertaining."
        listTitle="Benefits of Vertical Structures:"
        listItems={[
          "Extend your outdoor living season by shielding intense heat or rain",
          "Create a defined, intimate dining space within a larger yard",
          "Provide necessary structural framework for outdoor lighting and fans",
          "Significantly raise property value and neighborhood curb appeal"
        ]}
        image1="/images/img23.jpeg"
        image2="/images/img67.webp"
      />

      <ServiceContentExpansion sections={expansionSections} />

      <section style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Pergola Options & Pricing</h2>
        <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#f5f5f5' }}>
                {['Type', 'Size Range', 'Material', 'Price Range', 'Best For'].map(h => (
                  <th key={h} style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Basic attached', '8x10 to 12x14', 'Pressure-treated wood', '$8k–$14k', 'Budget shade over deck'],
                ['Standard attached', '10x12 to 14x16', 'Vinyl/composite/cedar', '$12k–$22k', 'Most popular low maintenance'],
                ['Freestanding', '10x10 to 16x20', 'Vinyl/composite/wood', '$14k–$28k', 'Garden focal point, patio shade'],
                ['Louvered roof (motorized)', '10x12 to 16x20', 'Aluminum + composite', '$20k–$35k+', 'Adjustable shade + rain protection'],
                ['Pergola + deck combo', 'Varies', 'Matches deck material', '$30k–$55k total', 'Complete outdoor room'],
              ].map((row, i) => (
                <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: '0.75rem', borderBottom: '1px solid #eee', fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <ServiceVisual image="/gazeboandparagols.webp" />

      <ServiceInclusions
        title="Our Complete Build Services"
        description="Professional installation requiring expert carpentry and deep structural knowledge."
        items={inclusions}
      />

      <ServicesFAQ canonicalUrl="https://ldndecks.com/services/gazebo-pergola" withSchema={false}
        title="Gazebos and Pergolas FAQs"
        faqs={faqs}
      />

      <ServiceAreasGrid />

      <RelatedGuides currentPath="/services/gazebo-pergola" />
      <SimpleCTA title="Design Your Pergola or Gazebo" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </main>
  );
}
