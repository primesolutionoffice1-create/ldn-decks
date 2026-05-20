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
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/deck-builder-reston-va',
  title: 'Expert Deck Builders in Reston VA | Custom Trex Decks',
  description: "Reston's trusted deck contractors. Transform your Reston backyard with a luxury Trex composite deck, screened porch, or patio. View our local project gallery!",
  image: '/images/img36.jpeg',
});

const inclusions = [
  {
    title: "Reston Association (RA) Expertise",
    desc: "We understand the strict architectural guidelines and DRB (Design Review Board) submission processes required by the Reston Association to get your deck approved."
  },
  {
    title: "Premium Composite Specialists",
    desc: "As certified Trex Platinum and TimberTech installers, we deliver high-grade composite decking that blends perfectly with Reston's natural, wooded aesthetic."
  },
  {
    title: "Fairfax County Craftsmanship",
    desc: "Building outdoor spaces that elevate Reston homes with precision engineering, clean lines, and premium materials designed to last decades."
  }
];

const restonFAQs = [
  {
    q: "Do you build custom decks in Reston, VA?",
    a: "Yes. Loudoun Decks is a highly trusted deck builder serving all of Reston, including North Reston, South Lakes, and the neighborhoods around Lake Anne and Lake Audubon."
  },
  {
    q: "What is the cost of a composite deck in Reston?",
    a: "A professional composite deck in Reston typically ranges from $22,000 to $55,000+, depending on size, materials, multi-level design, and add-ons like screened porches."
  },
  {
    q: "Do you handle the Reston Association DRB approval process?",
    a: "Yes. The Reston Association Design Review Board (DRB) has strict guidelines for decking materials and colors. We provide the necessary CAD plans and material samples to facilitate the HOA submission process."
  },
  {
    q: "How long does it take to build a deck in Reston?",
    a: "Permitting in Fairfax County takes about 2-4 weeks. Once approved by the county and the Reston Association, most standard deck builds are completed in 1-2 weeks. Complex projects may take 3-4 weeks."
  },
  {
    q: "Are you a Trex certified contractor in Reston VA?",
    a: "Yes. Loudoun Decks is a Trex Platinum Partner, the highest certification level, giving our Reston clients access to top-tier warranties and expert installation."
  },
  {
    q: "Do you build screened porches in Reston?",
    a: "Yes, screened porches are very popular in Reston's wooded neighborhoods. We specialize in building structurally integrated screened porches and outdoor living spaces."
  }
];

const expansionSections = [
  {
    title: "Why Reston Homeowners Choose Loudoun Decks",
    paragraphs: [
      "Reston is known for its beautiful wooded lots, scenic lakes, and strict architectural standards set by the Reston Association (RA). We’ve worked extensively in Reston and understand exactly how to design a deck that complements the natural surroundings while meeting all DRB requirements and Fairfax County building codes.",
      "Recent Reston projects include a multi-level TimberTech deck overlooking Lake Audubon (2024), a screened porch addition in North Reston (2025), and a complete backyard transformation with a Trex Transcend deck and under-deck patio near South Lakes."
    ]
  },
  {
    title: "Reston's Premier Custom Deck Builder",
    paragraphs: [
      "Reston, VA is one of the premier planned communities in America. As a dedicated deck builder in Reston, Loudoun Decks brings premium craftsmanship to every project. We are not a volume builder focused on rushing through jobs; we are a detail-oriented team that prioritizes quality, aesthetics, and longevity.",
      "Whether you're looking to replace an old wooden deck with modern composites or build a brand-new outdoor entertainment space from scratch, our team handles the entire process. We manage the Fairfax County permits, the Reston DRB architectural review board submissions, and the structural engineering.",
      "If you are looking for a deck builder near you in Reston that delivers guaranteed quality and a stress-free experience, Loudoun Decks is your partner. Our 5-Star Google Rating reflects our commitment to our clients."
    ]
  },
  {
    title: "Composite Decking Specialists for Reston Homes",
    paragraphs: [
      "Reston's mature trees provide beautiful shade but can cause maintenance issues for traditional wood decks. This makes composite decking the ideal choice for Reston homeowners. As a Trex Platinum Partner and TimberTech Certified contractor, we install decking that won't rot, splinter, or require constant staining. Projects typically start around $22,000 and scale based on your specific design requirements.",
      "We specialize in designing decks that maximize the usable outdoor space of your property, whether you have a steep sloped yard or a flat lot. Integrated lighting, custom railings (like glass or cable to preserve lake or woodland views), and built-in seating are standard requests that we execute flawlessly.",
      "Every composite deck we build in Reston comes with a full manufacturer's warranty backed by our installation certification, ensuring your investment is protected for decades."
    ],
    listItems: [
      { label: "Trex Platinum Partner", text: "Highest certification level for Trex installation in Reston and Northern Virginia." },
      { label: "TimberTech Certified", text: "Certified installer for the full TimberTech Pro and AZEK product lines." },
      { label: "Reston Association Ready", text: "Full handling of all Fairfax County permitting and RA DRB submissions." },
      { label: "5-Star Rated", text: "Consistently 5-Star Google Rated by homeowners across Northern Virginia." }
    ]
  },
  {
    title: "Screened Porches and Outdoor Living in Reston",
    paragraphs: [
      "Given Reston's heavily wooded environment, many homeowners expand their vision beyond just a deck. A screened porch addition allows you to enjoy the Virginia outdoors without the intense summer sun, falling leaves, or evening insects. We specialize in screen room additions that look like original extensions of your home's architecture.",
      "Pergolas are another excellent addition, providing architectural character and partial shade. We build both traditional open-rafter wood pergolas and modern low-maintenance systems.",
      "Our full outdoor living packages \u2014 combining decks, screened porches, and under-deck dry systems \u2014 deliver a complete transformation of your property's outdoor potential, maximizing your home's resale value in the Reston real estate market."
    ]
  }
];

export default function DeckBuilderRestonPage() {
  return (
    <main>
      <LocalBusinessSchema city="Reston" url="https://ldndecks.com/deck-builder-reston-va" />
      <ServicesHeader
        subtext="Reston, VA's Trusted Deck Company"
        title="Custom Deck Builder in Reston, VA"
        description="Loudoun Decks builds premium composite decks and screened porches in Reston. Trex Platinum Partner. Reston Association DRB experts. 5-Star Google Rated."
      />
      <ServiceMain
        subtitle="Fairfax County's Choice"
        title="Deck Builder Reston VA  -  Premium Craftsmanship"
        description="We build the outdoor spaces Reston homeowners love. Custom designs, RA DRB-ready plans, and premium composite materials starting at $22k+."
        listItems={[
          "Trex Platinum & TimberTech Certified",
          "Full Fairfax County Permit & Reston DRB management",
          "Custom multi-level and single-level designs",
          "Screened porches, pergolas & under-deck patios",
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
            alt="Premium custom deck built by LDN Decks in Reston, Virginia"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Trex Deck Builder Reston</h2>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Reston: Harmonizing Outdoor Living with Nature</h3>
      </div>
      <ServiceInclusions
        title="Why Reston Chooses Loudoun Decks"
        description="We are a local Northern Virginia team with deep roots in Fairfax County and the credentials to back every build."
        items={inclusions}
      />
      <ProcessSteps />
      <ServicesFAQ
        title="Deck Builder Reston VA  -  FAQs"
        faqs={restonFAQs}
        canonicalUrl="https://ldndecks.com/deck-builder-reston-va"
      />
      <ServiceAreasGrid />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            ['/deck-permit-fairfax-county-virginia', 'Fairfax County Deck Permit Guide'],
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
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="Reston" /></div></section>
      <SimpleCTA title="Build Your Dream Deck in Reston" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-reston-va" />
      <ContactHome />
    </main>
  );
}
