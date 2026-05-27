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
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';

export const metadata = buildMetadata({
  path: '/deck-builder-alexandria-va',
  title: 'Deck Builder in Alexandria VA | Trex Certified | Loudoun Decks',
  description: 'Top-rated Alexandria, VA deck builder. Trex Platinum Partner. Custom composite decks, porches & pergolas. Licensed & insured. Free estimate in 24h — (571) 655-7207.',
  image: '/images/img36.jpeg',
});

const inclusions = [
  {
    title: "Alexandria Permit & HOA Expertise",
    desc: "We navigate the requirements of both the City of Alexandria and Fairfax County, as well as local HOAs like Kingstowne, ensuring your deck project is approved quickly and correctly."
  },
  {
    title: "Premium Composite Specialists",
    desc: "As certified Trex Platinum and TimberTech installers, we deliver high-grade composite decking that withstands the variable Virginia weather while looking pristine."
  },
  {
    title: "Historic & Modern Craftsmanship",
    desc: "Building outdoor spaces that elevate Alexandria homes—from historic properties to modern townhomes—with precision engineering, clean lines, and premium materials."
  }
];

const alexandriaFAQs = [
  {
    q: "Do you build custom decks in Alexandria, VA?",
    a: "Yes. Loudoun Decks is a highly trusted deck builder serving all of Alexandria, from the historic districts to suburban neighborhoods like Kingstowne and Mount Vernon."
  },
  {
    q: "What is the cost of a composite deck in Alexandria?",
    a: "A professional composite deck in Alexandria typically ranges from $20,000 to $50,000+, depending on size, materials, multi-level design, and add-ons like screened porches."
  },
  {
    q: "Do you handle the Alexandria permitting process?",
    a: "Yes. Building in Alexandria can involve both City of Alexandria and Fairfax County regulations. We handle the entire permitting and HOA submission process for you."
  },
  {
    q: "How long does it take to build a deck in Alexandria?",
    a: "Permitting typically takes about 2-4 weeks. Once approved by the county and your HOA, most standard deck builds are completed in 1-2 weeks. Complex projects may take 3-4 weeks."
  },
  {
    q: "Are you a Trex certified contractor in Alexandria VA?",
    a: "Yes. Loudoun Decks is a Trex Platinum Partner, the highest certification level, giving our Alexandria clients access to top-tier warranties and expert installation."
  },
  {
    q: "Do you build screened porches in Alexandria?",
    a: "Yes, we specialize in building structurally integrated screened porches, pergolas, and full outdoor living spaces for Alexandria homeowners."
  }
];

const expansionSections = [
  {
    title: "Why Alexandria Homeowners Choose Loudoun Decks",
    paragraphs: [
      "Alexandria neighborhoods \u2014 from the historic districts to newer developments near Kingstowne \u2014 each have unique characteristics and guidelines. We\u2019ve worked extensively across Alexandria and understand exactly how to design a deck that complements your home while meeting all local building codes and HOA requirements.",
      "Recent Alexandria projects include a multi-level TimberTech deck (2024), a screened porch addition (2025), and a complete backyard transformation with a Trex Transcend deck and under-deck patio."
    ]
  },
  {
    title: "Alexandria's Premier Custom Deck Builder",
    paragraphs: [
      "Alexandria, VA offers a mix of historic charm and modern suburban convenience. As a dedicated deck builder in Alexandria, Loudoun Decks brings premium craftsmanship to every project. We are not a volume builder focused on rushing through jobs; we are a detail-oriented team that prioritizes quality and longevity.",
      "Whether you're looking to replace an old wooden deck with modern composites or build a brand-new outdoor entertainment space from scratch, our team handles the entire process. We manage the Fairfax County/City of Alexandria permits, the HOA architectural review board submissions, and the structural engineering.",
      "If you are looking for a deck builder near you in Alexandria that delivers guaranteed quality and a stress-free experience, Loudoun Decks is your partner. Our 5-Star Google Rating reflects our commitment to our clients."
    ]
  },
  {
    title: "Composite Decking Specialists for Alexandria Homes",
    paragraphs: [
      "The humid Virginia summers make composite decking the ideal choice for Alexandria homeowners. As a Trex Platinum Partner and TimberTech Certified contractor, we install decking that won't warp, splinter, or rot. Projects typically start around $20,000 and scale based on your specific design requirements.",
      "We specialize in designing decks that maximize the usable outdoor space of your property, even on tight townhome lots. Integrated lighting, custom railings, and built-in seating are standard requests that we execute flawlessly.",
      "Every composite deck we build in Alexandria comes with a full manufacturer's warranty backed by our installation certification, ensuring your investment is protected for decades."
    ],
    listItems: [
      { label: "Trex Platinum Partner", text: "Highest certification level for Trex installation in Alexandria and Northern Virginia." },
      { label: "TimberTech Certified", text: "Certified installer for the full TimberTech Pro and AZEK product lines." },
      { label: "Permit Ready", text: "Full handling of all Fairfax County and City of Alexandria permitting." },
      { label: "5-Star Rated", text: "Consistently 5-Star Google Rated by homeowners across Northern Virginia." }
    ]
  },
  {
    title: "Screened Porches and Outdoor Living in Alexandria",
    paragraphs: [
      "Many Alexandria homeowners are expanding their vision beyond just a deck. A screened porch addition allows you to enjoy the Virginia outdoors without the intense summer sun or evening insects. We specialize in screen room additions that look like original extensions of your home.",
      "Pergolas are another excellent addition, providing architectural character and partial shade. We build both traditional open-rafter wood pergolas and modern low-maintenance systems.",
      "Our full outdoor living packages \u2014 combining decks, screened porches, and under-deck dry systems \u2014 deliver a complete transformation of your property's outdoor potential, maximizing your home's resale value in the Alexandria market."
    ]
  }
];

export default function DeckBuilderAlexandriaPage() {
  return (
    <main>
      <LocalBusinessSchema city="Alexandria" url="https://ldndecks.com/deck-builder-alexandria-va" />
      <WebPageSchema url="https://ldndecks.com/deck-builder-alexandria-va" name="Deck Builder in Alexandria VA | Trex Certified | Loudoun Decks" description="Top-rated Alexandria, VA deck builder. Trex Platinum Partner. Custom composite decks, porches &amp; pergolas. Licensed &amp; insured. Free estimate in 24h — (571) 655-7207." speakable />
      <ServicesHeader
        subtext="Alexandria, VA's Trusted Deck Company"
        title="Custom Deck Builder in Alexandria, VA"
        description="Loudoun Decks builds premium composite decks and screened porches in Alexandria. Trex Platinum Partner. 5-Star Google Rated."
      />
      <ServiceMain
        subtitle="Historic & Modern Craftsmanship"
        title="Deck Builder Alexandria VA  -  Premium Quality"
        description="We build the outdoor spaces Alexandria homeowners love. Custom designs, HOA-ready plans, and premium composite materials starting at $20k+."
        listItems={[
          "Trex Platinum & TimberTech Certified",
          "Full Alexandria & Fairfax County Permit management",
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
            alt="Premium custom deck built by LDN Decks in Alexandria, Virginia"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Trex Deck Builder Alexandria</h2>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Alexandria: Expanding Your Outdoor Living Space</h3>
      </div>
      <ServiceInclusions
        title="Why Alexandria Chooses Loudoun Decks"
        description="We are a local Northern Virginia team with deep roots in the community and the credentials to back every build."
        items={inclusions}
      />
      <ProcessSteps />
      <ServicesFAQ
        title="Deck Builder Alexandria VA  -  FAQs"
        faqs={alexandriaFAQs}
        canonicalUrl="https://ldndecks.com/deck-builder-alexandria-va"
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
        
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (5.0★ Google) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
            <li key="/services/new-decks" style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
          </ul>
      </section>
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="Alexandria" /></div></section>
      <SimpleCTA title="Build Your Dream Deck in Alexandria" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-alexandria-va" />
      <NamedAuthor context="Alexandria and Northern Virginia" lastUpdated="2026-05-26" />
      <ContactHome />
    </main>
  );
}
