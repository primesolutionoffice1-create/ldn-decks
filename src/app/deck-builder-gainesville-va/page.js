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
import CityAuthorityExpansion from '@/components/CityAuthorityExpansion';
import PlanningUpdate from '@/components/PlanningUpdate';

export const metadata = buildMetadata({
  path: '/deck-builder-gainesville-va',
  title: 'Deck Builder in Gainesville, VA | Trex Certified | Loudoun Decks',
  description: 'Trusted deck builder in Gainesville, VA. Trex product-line planning & TimberTech and AZEK product planning. Custom composite decks, screened porches & pergolas. Free estimate  -  call (571) 655-7207.',
  image: '/social/deck-builder-gainesville-va-social.png',
});

const inclusions = [
  {
    title: "Gainesville HOA & Permit Expertise",
    desc: "We navigate the requirements of Prince William County and local HOAs like Heritage Hunt and Virginia Oaks with permit-ready planning."
  },
  {
    title: "Premium Composite Specialists",
    desc: "With Trex, TimberTech, and AZEK material planning experience, we deliver high-grade composite decking that withstands the variable Virginia weather while looking pristine."
  },
  {
    title: "Western PWC Craftsmanship",
    desc: "Building outdoor spaces that elevate Gainesville homes with precision engineering, clean lines, and premium materials designed to last decades."
  }
];

const gainesvilleFAQs = [
  {
    q: "Do you build custom decks in Gainesville, VA?",
    a: "Yes. Loudoun Decks is a highly trusted deck builder serving all of Gainesville, from Heritage Hunt to neighborhoods bordering Haymarket and Bristow."
  },
  {
    q: "What is the cost of a composite deck in Gainesville?",
    a: "A professional composite deck in Gainesville typically ranges from $20,000 to $50,000+, depending on size, materials, multi-level design, and add-ons like screened porches."
  },
  {
    q: "Do you handle the Gainesville permitting process?",
    a: "Yes. Building in Gainesville involves Prince William County regulations and strict HOA guidelines. We coordinate permitting and HOA submission planning for you."
  },
  {
    q: "How long does it take to build a deck in Gainesville?",
    a: "Permitting typically takes about 2-4 weeks. Once approved by the county and your HOA, most standard deck builds are completed in 1-2 weeks. Complex projects may take 3-4 weeks."
  },
  {
    q: "Are you a Trex certified contractor in Gainesville VA?",
    a: "Loudoun Decks plans Gainesville projects with Trex product-line options, manufacturer warranty documentation, and installation practices aligned with published Trex requirements."
  },
  {
    q: "Do you build screened porches in Gainesville?",
    a: "Yes, we specialize in building structurally integrated screened porches, pergolas, and full outdoor living spaces for Gainesville homeowners."
  }
];

const expansionSections = [
  {
    title: "Why Gainesville Homeowners Choose Loudoun Decks",
    paragraphs: [
      "Gainesville neighborhoods \u2014 from golf course communities to expansive suburban lots \u2014 each have unique characteristics and guidelines. We plan around Western Prince William County permit requirements, HOA expectations, and site conditions so the deck design complements the home while meeting local building codes.",
      "Gainesville project scopes often include multi-level TimberTech decks, screened porch additions, and backyard transformations with Trex Transcend decks and under-deck patios. Specific project examples should be added only from verified owner-supplied evidence."
    ]
  },
  {
    title: "Gainesville's Premier Custom Deck Builder",
    paragraphs: [
      "Gainesville, VA offers large suburban lots perfect for extensive outdoor living spaces. As a dedicated deck builder in Gainesville, Loudoun Decks brings premium craftsmanship to every project. We are not a volume builder focused on rushing through jobs; we are a detail-oriented team that prioritizes quality and longevity.",
      "Whether you're looking to replace an old wooden deck with modern composites or build a brand-new outdoor entertainment space from scratch, our team handles the entire process. We manage the Prince William County permits, the HOA architectural review board submissions, and the structural engineering.",
      "If you are looking for a deck builder near you in Gainesville that prioritizes quality, code-aware planning, and clear communication, Loudoun Decks is your partner. Public review profiles can help homeowners evaluate reputation alongside license, insurance, materials, and scope detail."
    ]
  },
  {
    title: "Composite Decking Specialists for Gainesville Homes",
    paragraphs: [
      "The humid Virginia summers make composite decking the ideal choice for Gainesville homeowners. We plan Trex, TimberTech, and AZEK decking options with low-maintenance boards selected for Virginia humidity and freeze-thaw exposure. Projects typically start around $20,000 and scale based on your specific design requirements.",
      "We specialize in designing decks that maximize the usable outdoor space of your property. Integrated lighting, custom railings, and built-in seating are standard requests that we execute flawlessly.",
      "Every composite deck proposal in Gainesville includes manufacturer warranty information for the selected product line and installation practices aligned with published manufacturer guidance."
    ],
    listItems: [
      { label: "Trex product-line planning", text: "Highest certification level for Trex installation in Gainesville and Prince William County." },
      { label: "TimberTech and AZEK product planning", text: "TimberTech Pro and AZEK product-line planning for premium builds." },
      { label: "Permit Ready", text: "Permit planning support for Prince William County and inspections." },
      { label: "Public Profiles", text: "Homeowners can review public profiles and project documentation before approving a scope." }
    ]
  },
  {
    title: "Screened Porches and Outdoor Living in Gainesville",
    paragraphs: [
      "Many Gainesville homeowners are expanding their vision beyond just a deck. A screened porch addition allows you to enjoy the Virginia outdoors without the intense summer sun or evening insects. We specialize in screen room additions that look like original extensions of your home.",
      "Pergolas are another excellent addition, providing architectural character and partial shade. We build both traditional open-rafter wood pergolas and modern low-maintenance systems.",
      "Our full outdoor living packages \u2014 combining decks, screened porches, and under-deck dry systems \u2014 deliver a complete transformation of your property's outdoor potential, maximizing your home's resale value in the Gainesville market."
    ]
  }
];

export default function DeckBuilderGainesvillePage() {
  return (
    <main>
      <LocalBusinessSchema city="Gainesville" url="https://ldndecks.com/deck-builder-gainesville-va" />
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/deck-builder-gainesville-va" name="Deck Builder in Gainesville, VA | Trex Certified | Loudoun Decks" description="Trusted deck builder in Gainesville, VA. Trex product-line planning &amp; TimberTech and AZEK product planning. Custom composite decks, screened porches &amp; pergolas. Free estimate  -  call (571) 655-7207." speakable />
      <ServicesHeader
        subtext="Gainesville, VA's Trusted Deck Company"
        title="Custom Deck Builder in Gainesville, VA"
        description="Loudoun Decks builds premium composite decks and screened porches in Gainesville. Trex product-line planning. publicly documented reputation."
      />
      <ServiceMain
        subtitle="Prince William County Craftsmanship"
        title="Deck Builder Gainesville VA  -  Premium Quality"
        description="We build the outdoor spaces Gainesville homeowners love. Custom designs, HOA-ready plans, and premium composite materials starting at $20k+."
        listItems={[
          "Trex, TimberTech and AZEK material planning",
          "Full Gainesville & Prince William County Permit management",
          "Custom multi-level and single-level designs",
          "Screened porches, pergolas & under-deck patios",
          "Public reviews - call (571) 655-7207"
        ]}
        image1="/images/img36.jpeg"
        image2="/images/img37.jpeg"
      />
      <PlanningUpdate
        market="Gainesville decks in 2026"
        notes={[
          "Gainesville projects often involve Prince William County permits plus HOA review in communities such as Heritage Hunt, Virginia Oaks, and nearby Haymarket/Bristow neighborhoods.",
          "For active-adult and golf-course communities, stair comfort, railing safety, shade, and low-maintenance composite materials should be decided early.",
          "Older deck replacements should start with a framing inspection so resurfacing is only recommended when the substructure is safe."
        ]}
        links={[
          { href: "/deck-permit-prince-william-county-virginia", label: "Prince William permit guide" },
          { href: "/deck-resurfacing-vs-replacement", label: "Resurface vs replace" },
          { href: "/composite-deck-cost-northern-virginia", label: "Composite deck cost" }
        ]}
      />
      <ServiceContentExpansion sections={expansionSections} />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
          <Image
            src="/images/img17.jpeg"
            alt="Premium custom deck built by LDN Decks in Gainesville, Virginia"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Trex Deck Builder Gainesville</h2>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Gainesville: Expanding Your Outdoor Living Space</h3>
      </div>
      <ServiceInclusions
        title="Why Gainesville Chooses Loudoun Decks"
        description="We are a local Northern Virginia team with deep roots in Prince William County and the credentials to back every build."
        items={inclusions}
      />
      <ProcessSteps />
      <ServicesFAQ
        title="Deck Builder Gainesville VA  -  FAQs"
        faqs={gainesvilleFAQs}
        canonicalUrl="https://ldndecks.com/deck-builder-gainesville-va"
      />
      <ServiceAreasGrid />
      <CityAuthorityExpansion cityKey="gainesville" />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            ['/hoa-deck-rules-northern-virginia', 'HOA Deck Rules in Northern Virginia'],
            ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
            ['/composite-deck-vs-wood-deck-virginia', 'Composite Deck vs Wood Deck'],
          ].map(([href, text]) => (
            <li key={href} style={{ marginBottom: '0.5rem' }}>
              <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link>
            </li>
          ))}
        
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (Google reviews) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
            <li key="/services/new-decks" style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
          </ul>
      </section>
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="Gainesville" /></div></section>
      <SimpleCTA title="Build Your Dream Deck in Gainesville" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/deck-builder-gainesville-va" />
      <NamedAuthor context="Gainesville and Northern Virginia" lastUpdated="2026-06-01" />
      <ContactHome />
    </main>
  );
}
