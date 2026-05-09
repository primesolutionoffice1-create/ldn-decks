import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ProcessSteps from '@/components/ProcessSteps';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import SimpleCTA from '@/components/SimpleCTA';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import JsonLd from '@/components/JsonLd';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/deck-builder-ashburn-va',
  title: 'Deck Builder in Ashburn, VA | Trex Certified | Loudoun Decks',
  description: 'Top-rated deck builder in Ashburn, VA. Trex Platinum Partner & TimberTech Certified. Custom composite decks, screened porches & pergolas. HOA-approved designs. Free estimate  -  call (571) 655-7207.',
  image: '/images/img36.jpeg',
});

const inclusions = [
  {
    title: "Ashburn HOA Expertise",
    desc: "We navigate the strict HOA requirements of Ashburn communities like Brambleton, Broadlands, and One Loudoun with ease."
  },
  {
    title: "Premium Composite Specialists",
    desc: "Certified Trex Platinum and TimberTech installers delivering the highest-grade composite decking available in the Ashburn market."
  },
  {
    title: "Tech Corridor Craftsmanship",
    desc: "Building outdoor spaces that match the high standards of Ashburn homeowners  -  precision engineering, clean lines, premium materials."
  }
];

const ashburnFAQs = [
  {
    q: "Do you build custom decks in Ashburn, VA?",
    a: "Yes. Loudoun Decks is one of Ashburn's most trusted deck builders. We serve all Ashburn communities including Brambleton, Broadlands, One Loudoun, and the Ashburn Farm corridor."
  },
  {
    q: "What is the cost of a composite deck in Ashburn?",
    a: "A professional composite deck in Ashburn typically ranges from $22,000 to $55,000+, depending on size, materials (Trex vs. TimberTech), multi-level design, and add-ons like pergolas or outdoor kitchens."
  },
  {
    q: "Do Ashburn HOAs approve composite deck designs?",
    a: "Most Ashburn HOAs (Brambleton, Broadlands, etc.) require specific color palettes and structural drawings. We handle all HOA submissions and provide full CAD plans to speed approvals."
  },
  {
    q: "How long does it take to build a deck in Ashburn?",
    a: "Permitting in Loudoun County takes 2-4 weeks. Once approved, most standard decks are completed in 1-2 weeks. Complex multi-level or screened porch projects may take 3-4 weeks of construction."
  },
  {
    q: "Are you a Trex certified contractor in Ashburn VA?",
    a: "Yes. Loudoun Decks is a Trex Platinum Partner, the highest certification level, giving our Ashburn clients access to the best Trex warranties and the full product catalog."
  },
  {
    q: "What outdoor living additions can you build in Ashburn?",
    a: "Beyond decks, we build screened porches, pergolas, outdoor kitchens, fire pit areas, and multi-level entertainment spaces for Ashburn homeowners seeking full outdoor living transformations."
  }
];

const ashburnFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": ashburnFAQs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": a
    }
  }))
};

const expansionSections = [
  {
    title: "Why Ashburn Homeowners Choose Loudoun Decks",
    paragraphs: [
      "Ashburn\u2019s HOA communities \u2014 from Brambleton to One Loudoun \u2014 have strict architectural guidelines for decks and outdoor structures. We\u2019ve worked with dozens of Ashburn HOAs and have a 100% approval rate on submissions. We know what Brambleton HOA allows, what colors are approved in Ryan Homes communities, and how to get your permit through Loudoun County\u2019s LOLA portal without delays.",
      "Recent Ashburn projects include a 480 sqft Trex Transcend deck in Brambleton (2025), a screened porch addition in One Loudoun (2025), and a deck replacement with cable railing in Moorefield Station (2024)."
    ]
  },
  {
    title: "Ashburn's Premier Custom Deck Builder",
    paragraphs: [
      "Ashburn, VA is one of Northern Virginia's fastest-growing and most affluent communities  -  and the outdoor spaces of Ashburn homes reflect that standard. As a dedicated deck builder in Ashburn, Loudoun Decks has spent years building the premium custom decks and outdoor living spaces that Ashburn homeowners demand. We are not a volume builder. We are a craftsmanship-first company that takes on a selective number of full projects each year.",
      "From the sprawling new construction neighborhoods near One Loudoun to the established communities of Broadlands and Brambleton, we understand what it takes to build in Ashburn. Every community has its own HOA requirements, architectural standards, and aesthetic expectations. Our team handles all of this, from the initial HOA submission to the final walk-through.",
      "If you are looking for a deck builder near you in Ashburn that understands the local market and delivers premium results, Loudoun Decks is your team. Our 5-Star Google Rated reputation speaks for itself."
    ]
  },
  {
    title: "Composite Decking Specialists for Ashburn Homes",
    paragraphs: [
      "Ashburn homeowners consistently choose composite decking for its low-maintenance performance and premium appearance. As a Trex Platinum Partner and TimberTech Certified contractor, we are qualified to install the highest-grade materials available. Our clients in Ashburn are not looking for the cheapest option  -  they are looking for the best. Projects typically start at $22,000 and scale based on size, design complexity, and features.",
      "Multi-level decks are extremely popular in Ashburn, particularly on lots backing to common areas or wooded buffers. We specialize in designing decks that maximize the usable outdoor square footage of your property. Integrated outdoor kitchens, built-in seating, pergola covers, and LED lighting systems are standard requests from our Ashburn clientele.",
      "Every composite deck we build comes with a full manufacturer's warranty backed by our installation certification. This means your investment is protected  -  not just by the material's 25-year warranty, but by a builder with the credentials and local track record to honor it."
    ],
    listItems: [
      { label: "Trex Platinum Partner", text: "Highest certification level for Trex installation in Ashburn and Northern Virginia." },
      { label: "TimberTech Certified", text: "Certified installer for the full TimberTech Pro and AZEK product lines." },
      { label: "HOA Ready", text: "Full CAD drawings and site plans provided for all Ashburn HOA submissions." },
      { label: "5-Star Rated", text: "Consistently 5-Star Google Rated by Ashburn homeowners across every neighborhood." }
    ]
  },
  {
    title: "Screened Porches and Outdoor Living in Ashburn",
    paragraphs: [
      "Decks are just the beginning. Many Ashburn homeowners are transforming their backyards into complete outdoor living environments. A screened porch addition to your deck allows you to enjoy the Loudoun County outdoors without the insects  -  expanding your usable living space by hundreds of square feet. We specialize in screen room additions that are structurally integrated with your new or existing deck.",
      "Pergolas are another popular addition in Ashburn, providing shade, architectural character, and a defined outdoor room feel. We build both traditional open-rafter pergolas and louvered pergola systems that give you full weather control at the push of a button. These structures add significant curb appeal and resale value to Ashburn properties.",
      "Our full outdoor living packages  -  deck + screened porch + pergola + outdoor kitchen  -  are among the most requested projects in Ashburn and Brambleton. These comprehensive builds typically range from $45,000 to $90,000+ and deliver a complete transformation of your property's outdoor potential."
    ]
  }
];

export default function DeckBuilderAshburnPage() {
  return (
    <main>
      <LocalBusinessSchema city="Ashburn" url="https://ldndecks.com/deck-builder-ashburn-va" />
      <JsonLd data={ashburnFaqSchema} />
      <ServicesHeader
        subtext="Ashburn, VA's #1 Rated Builder"
        title="Custom Deck Builder in Ashburn, VA"
        description="Loudoun Decks builds premium composite and wood decks in Ashburn, Brambleton, Broadlands, and One Loudoun. Trex Platinum Partner. 5-Star Google Rated."
      />
      <ServiceMain
        subtitle="Ashburn's Trusted Choice"
        title="Deck Builder Ashburn VA  -  Premium Craftsmanship"
        description="We build the outdoor spaces Ashburn homeowners are proud to show off. Custom designs, HOA-ready plans, and premium materials from $22k+."
        listItems={[
          "Trex Platinum & TimberTech Certified",
          "Full HOA submission management",
          "Custom multi-level and single-level designs",
          "Screened porches, pergolas & outdoor kitchens",
          "5-Star Google Rated  -  call (571) 655-7207"
        ]}
        image1="/images/img36.jpeg"
        image2="/images/img37.jpeg"
      />
      <ServiceContentExpansion sections={expansionSections} />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
          <Image
            src="/images/img17.jpeg"
            alt="Premium custom deck built by LDN Decks in Ashburn, Virginia"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 900px"
            priority
          />
        </div>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Trex Deck Builder Ashburn</h2>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Ashburn: The Heart of Loudoun Luxury Outdoor Living</h3>
      </div>
      <ServiceInclusions
        title="Why Ashburn Chooses Loudoun Decks"
        description="We are not a franchise. We are a local Loudoun County team with deep roots in Ashburn and the credentials to back every build."
        items={inclusions}
      />
      <ProcessSteps />
      <ServicesFAQ
        title="Deck Builder Ashburn VA  -  FAQs"
        faqs={ashburnFAQs}
      />
      <ServiceAreasGrid />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            ['/deck-permit-loudoun-county-virginia', 'Loudoun County Deck Permit Guide'],
            ['/hoa-deck-rules-northern-virginia', 'HOA Deck Rules in Northern Virginia'],
            ['/how-much-does-a-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
            ['/composite-deck-vs-wood-deck-virginia', 'Composite Deck vs Wood Deck'],
          ].map(([href, text]) => (
            <li key={href} style={{ marginBottom: '0.5rem' }}>
              <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link>
            </li>
          ))}
        </ul>
      </section>
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="Ashburn" /></div></section>
      <SimpleCTA title="Build Your Dream Deck in Ashburn" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-ashburn-va" />
      <ContactHome />
    </main>
  );
}
