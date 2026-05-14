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
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/deck-builder-woodbridge-va',
  title: 'Deck Builder in Woodbridge, VA | Trex Certified | Loudoun Decks',
  description: 'Top-rated deck builder in Woodbridge, VA. Trex Platinum Partner & TimberTech Certified. Custom composite decks, screened porches & pergolas. Free estimate  -  call (571) 655-7207.',
  image: '/images/img36.jpeg',
});

const inclusions = [
  {
    title: "Woodbridge HOA Expertise",
    desc: "We navigate the requirements of Prince William County HOAs like Lake Ridge, Belmont Bay, and Montclair to ensure your deck project is approved quickly."
  },
  {
    title: "Premium Composite Specialists",
    desc: "As certified Trex Platinum and TimberTech installers, we deliver high-grade composite decking that withstands the variable Virginia weather near the Potomac."
  },
  {
    title: "Prince William Craftsmanship",
    desc: "Building outdoor spaces that elevate Woodbridge homes with precision engineering, clean lines, and premium materials designed to last decades."
  }
];

const woodbridgeFAQs = [
  {
    q: "Do you build custom decks in Woodbridge, VA?",
    a: "Yes. Loudoun Decks is a highly trusted deck builder serving all of Woodbridge, including Lake Ridge, Occoquan, Montclair, and Belmont Bay."
  },
  {
    q: "What is the cost of a composite deck in Woodbridge?",
    a: "A professional composite deck in Woodbridge typically ranges from $20,000 to $50,000+, depending on size, materials, multi-level design, and add-ons like screened porches."
  },
  {
    q: "Do Woodbridge HOAs approve composite deck designs?",
    a: "Yes. Most Woodbridge HOAs, including Lake Ridge Parks and Recreation Association (LRPRA), have specific guidelines for decking materials and colors. We handle the HOA submission process for you."
  },
  {
    q: "How long does it take to build a deck in Woodbridge?",
    a: "Permitting in Prince William County takes about 2-4 weeks. Once approved, most standard deck builds are completed in 1-2 weeks. Complex projects may take 3-4 weeks."
  },
  {
    q: "Are you a Trex certified contractor in Woodbridge VA?",
    a: "Yes. Loudoun Decks is a Trex Platinum Partner, the highest certification level, giving our Woodbridge clients access to top-tier warranties and expert installation."
  },
  {
    q: "Do you build screened porches in Woodbridge?",
    a: "Yes, we specialize in building structurally integrated screened porches, pergolas, and full outdoor living spaces for Woodbridge homeowners."
  }
];

const expansionSections = [
  {
    title: "Why Woodbridge Homeowners Choose Loudoun Decks",
    paragraphs: [
      "Woodbridge neighborhoods \u2014 from the established woods of Lake Ridge to the waterfront homes of Belmont Bay \u2014 each have unique characteristics and HOA guidelines. We\u2019ve worked across Prince William County and understand exactly how to design a deck that complements your home while meeting all local building codes and HOA requirements.",
      "Recent Woodbridge projects include a multi-level TimberTech deck in Lake Ridge (2024), a screened porch addition near Occoquan (2025), and a complete backyard transformation with a Trex Transcend deck and under-deck patio in Montclair."
    ]
  },
  {
    title: "Woodbridge's Premier Custom Deck Builder",
    paragraphs: [
      "Woodbridge, VA offers a mix of historic charm and modern suburban living. As a dedicated deck builder in Woodbridge, Loudoun Decks brings premium craftsmanship to every project. We are not a volume builder focused on rushing through jobs; we are a detail-oriented team that prioritizes quality and longevity.",
      "Whether you're looking to replace an old wooden deck with modern composites or build a brand-new outdoor entertainment space from scratch, our team handles the entire process. We manage the Prince William County permits, the HOA architectural review board submissions, and the structural engineering.",
      "If you are looking for a deck builder near you in Woodbridge that delivers guaranteed quality and a stress-free experience, Loudoun Decks is your partner. Our 5-Star Google Rating reflects our commitment to our clients."
    ]
  },
  {
    title: "Composite Decking Specialists for Woodbridge Homes",
    paragraphs: [
      "The humidity and seasonal weather changes near the Potomac River make composite decking the ideal choice for Woodbridge homeowners. As a Trex Platinum Partner and TimberTech Certified contractor, we install decking that won't warp, splinter, or rot. Projects typically start around $20,000 and scale based on your specific design requirements.",
      "We specialize in designing decks that maximize the usable outdoor space of your property, whether you have a steep sloped yard in Lake Ridge or a flat lot. Integrated lighting, custom railings, and built-in seating are standard requests that we execute flawlessly.",
      "Every composite deck we build in Woodbridge comes with a full manufacturer's warranty backed by our installation certification, ensuring your investment is protected for decades."
    ],
    listItems: [
      { label: "Trex Platinum Partner", text: "Highest certification level for Trex installation in Woodbridge and Northern Virginia." },
      { label: "TimberTech Certified", text: "Certified installer for the full TimberTech Pro and AZEK product lines." },
      { label: "Prince William Permits", text: "Full handling of all Prince William County permitting and inspections." },
      { label: "5-Star Rated", text: "Consistently 5-Star Google Rated by homeowners across Northern Virginia." }
    ]
  },
  {
    title: "Screened Porches and Outdoor Living in Woodbridge",
    paragraphs: [
      "Many Woodbridge homeowners are expanding their vision beyond just a deck. A screened porch addition allows you to enjoy the Virginia outdoors without the intense summer sun or evening insects. We specialize in screen room additions that look like original extensions of your home.",
      "Pergolas are another excellent addition, providing architectural character and partial shade. We build both traditional open-rafter wood pergolas and modern low-maintenance systems.",
      "Our full outdoor living packages \u2014 combining decks, screened porches, and under-deck dry systems \u2014 deliver a complete transformation of your property's outdoor potential, maximizing your home's resale value in the Woodbridge market."
    ]
  }
];

export default function DeckBuilderWoodbridgePage() {
  return (
    <main>
      <ServicesHeader
        subtext="Woodbridge, VA's Trusted Deck Company"
        title="Custom Deck Builder in Woodbridge, VA"
        description="Loudoun Decks builds premium composite decks and screened porches in Woodbridge, Lake Ridge, and Montclair. Trex Platinum Partner. 5-Star Google Rated."
      />
      <ServiceMain
        subtitle="Prince William's Choice"
        title="Deck Builder Woodbridge VA  -  Premium Craftsmanship"
        description="We build the outdoor spaces Woodbridge homeowners love. Custom designs, HOA-ready plans, and premium composite materials starting at $20k+."
        listItems={[
          "Trex Platinum & TimberTech Certified",
          "Full Prince William HOA & Permit management",
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
            alt="Premium custom deck built by LDN Decks in Woodbridge, Virginia"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 900px"
            priority
          />
        </div>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Trex Deck Builder Woodbridge</h2>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Woodbridge: Elevating Outdoor Living Near the Potomac</h3>
      </div>
      <ServiceInclusions
        title="Why Woodbridge Chooses Loudoun Decks"
        description="We are a local Northern Virginia team with deep roots in Prince William County and the credentials to back every build."
        items={inclusions}
      />
      <ProcessSteps />
      <ServicesFAQ
        title="Deck Builder Woodbridge VA  -  FAQs"
        faqs={woodbridgeFAQs}
        canonicalUrl="https://ldndecks.com/deck-builder-woodbridge-va"
      />
      <ServiceAreasGrid />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
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
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="Woodbridge" /></div></section>
      <SimpleCTA title="Build Your Dream Deck in Woodbridge" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-woodbridge-va" />
      <ContactHome />
    </main>
  );
}
