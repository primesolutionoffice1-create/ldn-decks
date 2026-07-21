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
import GeoAnswerBlock from '@/components/GeoAnswerBlock';
import PaidSearchLeadForm from '@/components/PaidSearchLeadForm';
import PremiumCityLeadQualifier from '@/components/PremiumCityLeadQualifier';

export const metadata = buildMetadata({
  path: '/deck-builder-alexandria-va',
  title: 'Deck Builder in Alexandria VA | Trex Certified | Loudoun Decks',
  description: 'Trusted Alexandria, VA deck builder. Trex, TimberTech, and AZEK material planning. Custom composite decks, porches & pergolas. Licensed & insured. Free written estimate — (571) 655-7207.',
  image: '/social/deck-builder-alexandria-va-social.png',
});

const inclusions = [
  {
    title: "Alexandria Permit & HOA Expertise",
    desc: "We navigate the requirements of both the City of Alexandria and Fairfax County, as well as local HOAs like Kingstowne, with permit-ready planning and clear submission details."
  },
  {
    title: "Premium Composite Specialists",
    desc: "With Trex, TimberTech, and AZEK material planning experience, we deliver high-grade composite decking that withstands the variable Virginia weather while looking pristine."
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
    a: "Yes. Building in Alexandria can involve both City of Alexandria and Fairfax County regulations. We coordinate permitting and HOA submission planning for you."
  },
  {
    q: "How long does it take to build a deck in Alexandria?",
    a: "Permitting typically takes about 2-4 weeks. Once approved by the county and your HOA, most standard deck builds are completed in 1-2 weeks. Complex projects may take 3-4 weeks."
  },
  {
    q: "Are you a Trex certified contractor in Alexandria VA?",
    a: "Loudoun Decks plans Alexandria projects with Trex product-line options, manufacturer warranty documentation, and installation practices aligned with published Trex requirements."
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
      "Alexandria neighborhoods \u2014 from the historic districts to newer developments near Kingstowne \u2014 each have unique characteristics and guidelines. We plan around City of Alexandria, Fairfax County, HOA, and site constraints so the deck design complements the home while meeting local building codes.",
      "Alexandria project scopes often include multi-level TimberTech decks, screened porch additions, and backyard transformations with Trex Transcend decks and under-deck patios. Specific project examples should be added only from verified owner-supplied evidence."
    ]
  },
  {
    title: "Alexandria's Premier Custom Deck Builder",
    paragraphs: [
      "Alexandria, VA offers a mix of historic charm and modern suburban convenience. As a dedicated deck builder in Alexandria, Loudoun Decks brings premium craftsmanship to every project. We are not a volume builder focused on rushing through jobs; we are a detail-oriented team that prioritizes quality and longevity.",
      "Whether you're looking to replace an old wooden deck with modern composites or build a brand-new outdoor entertainment space from scratch, our team handles the entire process. We manage the Fairfax County/City of Alexandria permits, the HOA architectural review board submissions, and the structural engineering.",
      "If you are looking for a deck builder near you in Alexandria that prioritizes quality, code-aware planning, and clear communication, Loudoun Decks is your partner. Public review profiles can help homeowners evaluate reputation alongside license, insurance, materials, and scope detail."
    ]
  },
  {
    title: "Composite Decking Specialists for Alexandria Homes",
    paragraphs: [
      "The humid Virginia summers make composite decking the ideal choice for Alexandria homeowners. We plan Trex, TimberTech, and AZEK decking options with low-maintenance boards selected for Virginia humidity and freeze-thaw exposure. Projects typically start around $20,000 and scale based on your specific design requirements.",
      "We specialize in designing decks that maximize the usable outdoor space of your property, even on tight townhome lots. Integrated lighting, custom railings, and built-in seating are standard requests that we execute flawlessly.",
      "Every composite deck proposal in Alexandria includes manufacturer warranty information for the selected product line and installation practices aligned with published manufacturer guidance."
    ],
    listItems: [
      { label: "Trex product-line planning", text: "Trex product-line familiarity and manufacturer-aligned installation practices for Alexandria and Northern Virginia." },
      { label: "TimberTech and AZEK product planning", text: "TimberTech Pro and AZEK product-line planning for premium builds." },
      { label: "Permit Ready", text: "Permit planning support for Fairfax County and City of Alexandria." },
      { label: "Public Profiles", text: "Homeowners can review public profiles and project documentation before approving a scope." }
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
  const paidSearchContext = {
    city: 'Alexandria',
    county: 'Alexandria / Fairfax County',
    service: 'Deck replacement or composite deck',
    pageType: 'paid_search_city_landing_page',
  };

  return (
    <main>
      <LocalBusinessSchema city="Alexandria" url="https://ldndecks.com/deck-builder-alexandria-va" />
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/deck-builder-alexandria-va" name="Deck Builder in Alexandria VA | Trex Certified | Loudoun Decks" description="Trusted Alexandria, VA deck builder. Trex, TimberTech, and AZEK material planning. Custom composite decks, porches &amp; pergolas. Licensed &amp; insured. Free written estimate — (571) 655-7207." speakable />
      <ServicesHeader
        subtext="Alexandria, VA's Trusted Deck Company"
        title="Custom Deck Builder in Alexandria, VA"
        description="Loudoun Decks builds premium composite decks and screened porches in Alexandria. Trex product-line planning. publicly documented reputation."
      />
      <ServiceMain
        subtitle="Historic & Modern Craftsmanship"
        title="Deck Builder Alexandria VA  -  Premium Quality"
        description="We build the outdoor spaces Alexandria homeowners love. Custom designs, HOA-ready plans, and premium composite materials starting at $20k+."
        listItems={[
          "Trex, TimberTech and AZEK material planning",
          "Full Alexandria & Fairfax County Permit management",
          "Custom multi-level and single-level designs",
          "Screened porches, pergolas & under-deck patios",
          "Public reviews - call (571) 655-7207"
        ]}
        image1="/images/img36.jpeg"
        image2="/images/img37.jpeg"
      />
      <section style={{ background: '#fff7f2', padding: '2.25rem 1.5rem' }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ margin: '0 0 0.4rem', color: '#d14817', fontSize: '0.78rem', fontWeight: 900, textTransform: 'uppercase' }}>
              Alexandria homeowner estimate path
            </p>
            <h2 style={{ margin: 0, color: '#181818', fontSize: 'clamp(1.45rem, 2.3vw, 2rem)', lineHeight: 1.2, fontWeight: 900 }}>
              Deck Replacement and Composite Deck Estimates in Alexandria
            </h2>
            <p style={{ margin: '0.8rem auto 0', color: '#5c514b', lineHeight: 1.65, maxWidth: 700 }}>
              Use this short form if you are comparing Alexandria deck builders for a replacement deck, composite deck, screened porch, or full outdoor living project. The form keeps paid-search attribution attached to the lead.
            </p>
          </div>
          <PaidSearchLeadForm
            service="Alexandria deck replacement or composite deck"
            formLocation="paid_search_alexandria_deck_builder"
            heading="Request an Alexandria deck estimate"
            pageContext={paidSearchContext}
          />
        </div>
      </section>
      <PlanningUpdate
        market="Alexandria decks in 2026"
        notes={[
          "Alexandria projects should verify whether the property is City of Alexandria, Fairfax County, or an HOA-controlled community such as Kingstowne before permit planning.",
          "Townhome and historic-area decks need earlier planning around visibility, setbacks, railings, and material color than a typical suburban rear-yard build.",
          "Older decks near Mount Vernon, Kingstowne, and the Potomac corridor should be inspected for ledger flashing, stair safety, and moisture exposure before resurfacing is priced."
        ]}
        links={[
          { href: "/deck-permit-fairfax-county-virginia", label: "Fairfax permit guide" },
          { href: "/deck-safety-inspection-checklist", label: "Safety checklist" },
          { href: "/composite-deck-cost-northern-virginia", label: "Composite deck cost" }
        ]}
      />
      <GeoAnswerBlock
        question="What should Alexandria homeowners check before planning a deck?"
        answer="Alexandria deck projects should start by confirming whether the property follows City of Alexandria, Fairfax County, HOA, or historic-area requirements. Homeowners should also review lot access, drainage, privacy, railing style, screened porch options, and whether composite resurfacing or full deck replacement is the safer path before approving a written estimate."
        facts={[
          'Primary buyer intent: Alexandria deck builder, historic or HOA planning, composite replacement, and screened porches.',
          'Conversion path: permit planning, material comparison, and written estimate.'
        ]}
        links={[
          { href: '/deck-permit-fairfax-county-virginia', label: 'Fairfax permit guide' },
          { href: '/deck-resurfacing-vs-replacement', label: 'Resurface vs replace' },
          { href: '/get-estimate', label: 'Get an Alexandria estimate' }
        ]}
      />
      <PremiumCityLeadQualifier
        city="Alexandria"
        county="Alexandria and Fairfax County"
        intro="Alexandria leads are highest quality when the estimate starts with the jurisdiction, existing deck condition, HOA or historic-area requirements, and whether the homeowner wants a simple replacement, composite upgrade, screened porch, or a larger outdoor living plan."
        projectTypes={[
          'Composite deck replacement near Kingstowne, Mount Vernon, and Old Town-adjacent neighborhoods',
          'Screened porches and covered-deck additions',
          'Townhome and compact-lot deck rebuilds',
          'Resurfacing decisions where framing condition must be checked first',
        ]}
        planningSignals={[
          'Current deck photos and visible framing concerns',
          'Whether the address is City of Alexandria or Fairfax County',
          'HOA documents, historic-area notes, or community guidelines',
          'Preferred scope: resurfacing, full replacement, screened porch, or phased outdoor living',
        ]}
        links={[
          { href: '/get-estimate', label: 'Request Alexandria estimate', primary: true },
          { href: '/deck-resurfacing-vs-replacement', label: 'Resurface vs replace' },
          { href: '/screened-porch-builder-northern-virginia', label: 'Screened porch planning' },
        ]}
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
      <CityAuthorityExpansion cityKey="alexandria" />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            ['/deck-permit-fairfax-county-virginia', 'Fairfax County Deck Permit Guide'],
            ['/hoa-deck-rules-northern-virginia', 'HOA Deck Rules in Northern Virginia'],
            ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
            ['/composite-deck-vs-wood-deck-virginia', 'Composite Deck vs Wood Deck'],
            ['/outdoor-living-mount-vernon-alexandria-va', 'Mount Vernon & Alexandria Outdoor Living Planning'],
            ['/premium-composite-deck-replacement-arlington-alexandria-mclean-va', 'Premium Composite Replacement for Arlington, Alexandria & McLean'],
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
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="Alexandria" /></div></section>
      <SimpleCTA title="Build Your Dream Deck in Alexandria" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/deck-builder-alexandria-va" />
      <NamedAuthor context="Alexandria and Northern Virginia" lastUpdated="2026-06-01" />
      <ContactHome />
    </main>
  );
}
