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
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import PlanningUpdate from '@/components/PlanningUpdate';

export const metadata = buildMetadata({
  path: '/deck-builder-falls-church-va',
  title: 'Deck Builder in Falls Church, VA | Custom Composite Decks | Loudoun Decks',
  description: 'Trusted deck builder in Falls Church, VA. Google reviews. Custom Trex & composite decks for compact lots. City of Falls Church + Fairfax County permits. Free estimate.',
  image: '/social/deck-builder-falls-church-va-social.png',
});

const inclusions = [
  {
    title: "Compact Lot Design Experts",
    desc: "Falls Church properties average 0.1-0.25 acres. We specialize in space-maximizing designs — multi-level builds, bump-outs, and L-shaped layouts that make every square foot count."
  },
  {
    title: "Dual Jurisdiction Permitting",
    desc: "We determine whether your address falls under the City of Falls Church or Fairfax County, then manage the entire permit process for the correct jurisdiction."
  },
  {
    title: "Privacy-Forward Design",
    desc: "Close neighbors are a reality in Falls Church. We integrate glass railings, privacy screens, pergola shade structures, and strategic planting plans into every project."
  }
];

const fallsChurchFAQs = [
  {
    q: "How much does a custom deck cost in Falls Church, VA?",
    a: "Falls Church deck projects typically range from $25,000 to $60,000. Smaller lot sizes keep square footage modest, but homeowners in this market expect premium finishes — Trex Transcend, glass or cable railings, and integrated lighting. Composite decks run $40-$65 per square foot installed depending on material and complexity."
  },
  {
    q: "Do I need a City of Falls Church permit or a Fairfax County permit?",
    a: "It depends on your exact address. The City of Falls Church is an independent city with its own building department, but many addresses with Falls Church zip codes (22042, 22043, 22044) are actually in Fairfax County. We verify your jurisdiction before design begins and handle all permitting for whichever authority applies."
  },
  {
    q: "Can you build a deck on a small Falls Church lot?",
    a: "Absolutely — compact lot design is our specialty in Falls Church. We use multi-level builds, L-shaped layouts, bump-out extensions, and screened porch conversions to maximize outdoor living space on properties as small as 0.1 acres. Setback requirements vary by jurisdiction, and we factor those into every design."
  },
  {
    q: "What about privacy with close neighbors?",
    a: "Privacy is a top concern on smaller Falls Church lots. We address it through elevated deck heights with glass railings for sight-line management, integrated privacy screens or lattice panels, pergola shade structures, and strategic planting recommendations. The goal is creating an outdoor retreat that feels secluded despite the proximity."
  },
  {
    q: "How long does a Falls Church deck project take?",
    a: "Most Falls Church projects take 2-4 weeks for construction. City of Falls Church permits are often faster than Fairfax County — sometimes 10-15 business days versus 3-6 weeks. We manage the entire timeline including permit submissions, HOA coordination if applicable, and final inspections."
  },
  {
    q: "Do Falls Church neighborhoods have HOA restrictions?",
    a: "Fewer Falls Church neighborhoods have formal HOAs compared to outer suburbs, but some have deed covenants or architectural guidelines that affect deck design, materials, or placement. We research your specific property's restrictions before finalizing any plans."
  }
];

const fallsChurchFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": fallsChurchFAQs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};

const expansionSections = [
  {
    title: "Two Jurisdictions — City of Falls Church vs. Fairfax County",
    paragraphs: [
      "Falls Church presents a unique permitting situation that catches many homeowners off guard. The City of Falls Church is one of Virginia's independent cities — a self-governing municipality with its own building department, zoning code, and inspection staff. However, the vast majority of addresses that people consider 'Falls Church' are actually located in Fairfax County. The 22042, 22043, and 22044 zip codes span both jurisdictions, and the boundary is not always intuitive.",
      "This distinction matters for your deck project. The City of Falls Church building department is smaller and often processes permits faster — sometimes in 10-15 business days. Fairfax County's plan review typically takes 3-6 weeks. Setback requirements, lot coverage limits, and zoning rules also differ between the two. A design that complies with City code may need modifications to meet County standards, or vice versa.",
      "At Loudoun Decks, we verify your exact jurisdiction at the start of every Falls Church project. We have working relationships with both the City building department and Fairfax County's permitting office, and we design your deck to comply with the correct authority from day one. No surprises, no delays from filing with the wrong office."
    ]
  },
  {
    title: "Maximizing Small Falls Church Lots",
    paragraphs: [
      "Falls Church is one of the most land-constrained markets we serve. Properties in the City of Falls Church proper and surrounding neighborhoods like Pimmit Hills, Lake Barcroft, and Sleepy Hollow often sit on 0.1 to 0.25 acre lots — a fraction of the space available in Great Falls or Oakton. But smaller lots do not mean smaller ambitions. Falls Church homeowners want functional, beautiful outdoor living spaces, and achieving that requires design expertise that goes beyond standard deck plans.",
      "We approach compact-lot design differently. Multi-level builds use vertical space to create distinct zones — a dining level, a lounging level, a grilling station — without consuming the entire backyard. L-shaped and wraparound layouts follow the home's footprint to add usable space without encroaching on setback lines. Screened porch conversions turn underused side yards into three-season rooms. Every design decision is driven by the goal of maximizing livable square footage.",
      "Privacy is the other critical factor on smaller lots. When your neighbors are 20 feet away, a standard open deck can feel exposed. We integrate glass railings for unobstructed sight lines without sacrificing enclosure, privacy screens on neighbor-facing sides, and pergola structures that provide overhead cover. The result is a deck that feels like a private retreat, even in Falls Church's close-knit neighborhoods."
    ]
  },
  {
    title: "Premium Materials for a Premium Market",
    paragraphs: [
      "Falls Church is one of Northern Virginia's highest-value real estate markets. Modest 1950s-era ramblers on small lots regularly sell for $800,000 to $1.2 million, and new construction teardowns push well beyond that. In this market, homeowners expect materials and finishes that match their property values. We exclusively use premium composite and PVC decking — Trex Transcend, TimberTech AZEK, and similar top-tier products — because they deliver the aesthetics and longevity this market demands.",
      "Glass railings and stainless steel cable systems are among the most popular choices for Falls Church projects. On a compact lot, transparent railings make a small deck feel significantly larger by preserving sight lines to the yard and beyond. Hidden fastener systems eliminate visible screws for a clean, furniture-grade surface. Integrated LED lighting extends the usable hours of your deck through Virginia's long summer evenings.",
      "These premium materials also eliminate the maintenance burden that traditional wood decks impose. In Virginia's humid climate, a pressure-treated wood deck needs sanding and staining every 1-2 years — a significant ongoing expense and inconvenience. Our composite builds are designed to look and perform beautifully for 25 to 50 years with nothing more than occasional cleaning."
    ]
  },
  {
    title: "New Construction and Renovation Deck Integration",
    paragraphs: [
      "Falls Church is one of the most active teardown-and-rebuild markets in Northern Virginia. Buyers purchase older homes from the 1940s-1960s era for their lot value and location, then build new construction. This creates a unique opportunity for deck integration — designing the outdoor living space as part of the new home's architecture rather than as an afterthought.",
      "For new construction, we collaborate with builders and architects during the design phase to ensure the deck's footings, ledger board connections, and drainage systems are incorporated into the home's structural plans. This produces a cleaner integration, better waterproofing, and more seamless indoor-outdoor transitions than retrofitting a deck onto an existing home. We work with several Falls Church builders and can coordinate timing to keep your overall project on schedule.",
      "For existing homes, we specialize in replacing aging concrete patios, deteriorating wood decks, and underperforming outdoor spaces with modern composite builds. Many Falls Church homes still have their original 1950s-era concrete slab patios or first-generation wood decks that are well past their useful life. Our replacement projects typically transform these spaces into elevated composite decks with proper drainage, modern railings, and usable square footage that the original construction never provided."
    ]
  }
];

export default function FallsChurchDeckBuilderPage() {
  return (
    <main>
      <JsonLd data={fallsChurchFaqSchema} />
      <LocalBusinessSchema city="Falls Church" url="https://ldndecks.com/deck-builder-falls-church-va" />
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/deck-builder-falls-church-va" name="Deck Builder in Falls Church, VA | Custom Composite Decks | Loudoun Decks" description="Trusted deck builder in Falls Church, VA. Google reviews. Custom Trex &amp; composite decks for compact lots. City of Falls Church + Fairfax County permits. Free estimate." speakable />
      <ServicesHeader
        subtext="Falls Church, VA's Compact Lot Deck Specialists"
        title="Custom Deck Builder in Falls Church, VA"
        description="Loudoun Decks builds premium composite decks, screened porches, and outdoor living spaces for Falls Church homeowners. City of Falls Church + Fairfax County permits handled. publicly documented reputation."
      />

      {/* Pricing Anchor - Conversion Filtering */}
      <section style={{ backgroundColor: '#fff5f2', padding: '24px 20px', borderBottom: '1px solid #ffdbd1' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#d14817', margin: 0, fontWeight: '500' }}>
            <strong style={{ color: '#111', fontSize: '18px' }}>New custom build minimum: $5,000+</strong>
            <br />
            We focus on <strong style={{ color: '#111' }}>full custom Falls Church builds</strong>. Need a repair instead? Visit our <a href="/services/deck-repair" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>deck repair service</a> for board replacement, railings, and structural fixes.
          </p>
        </div>
      </section>

      <ServiceMain
        subtitle="Falls Church's Trusted Choice"
        title="Deck Builder Falls Church VA - Smart Design for Compact Lots"
        description="We design and build premium outdoor living spaces that maximize Falls Church's smaller properties. Custom composite builds, dual-jurisdiction permitting, and privacy-first design from $25k+."
        listItems={[
          "Trex Platinum & TimberTech Certified",
          "City of Falls Church + Fairfax County permit experts",
          "Compact lot specialists — multi-level & L-shaped designs",
          "Glass railings, privacy screens & integrated lighting",
          "Public reviews - call (571) 655-7207"
        ]}
        image1="/images/img64.jpeg"
        image2="/images/img21.jpeg"
      />
      <PlanningUpdate
        market="Falls Church decks in 2026"
        notes={[
          "Falls Church projects should verify City of Falls Church vs Fairfax County jurisdiction before plans are drawn.",
          "Compact lots need early planning around setbacks, privacy, railing type, stair placement, drainage, and neighbor-facing sightlines.",
          "Older patio or deck replacements should confirm whether the new structure changes height, footprint, railings, or permit scope."
        ]}
        links={[
          { href: "/deck-permit-fairfax-county-virginia", label: "Fairfax permit guide" },
          { href: "/deck-vs-patio-which-is-right", label: "Deck vs patio" },
          { href: "/deck-cost-calculator", label: "Deck cost calculator" }
        ]}
      />
      <ServiceContentExpansion sections={expansionSections} />

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
          <Image
            src="/images/img17.jpeg"
            alt="Premium custom deck built by LDN Decks in Falls Church, Virginia"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Falls Church Planning Example: Compact-Lot Patio-to-Deck Upgrade</h2>
        <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>
          A compact Falls Church upgrade might replace an aging patio or small rear platform with a low-maintenance composite deck,
          glass or aluminum railing, and a layout designed around privacy and limited yard depth. Final scope should be confirmed
          after jurisdiction, setbacks, height, drainage, and permit requirements are reviewed. Verified project examples should
          be added here only after owner-supplied photos, scope, date, and permit details are available.
        </p>
      </div>

      <ServiceInclusions
        title="Why Falls Church Chooses Loudoun Decks"
        description="Compact lot expertise, dual-jurisdiction permitting, and premium materials built for Falls Church properties."
        items={inclusions}
      />
      <ProcessSteps />
      <ServicesFAQ canonicalUrl="https://ldndecks.com/deck-builder-falls-church-va" withSchema={false}
        title="Deck Builder Falls Church VA - FAQs"
        faqs={fallsChurchFAQs}
      />
      <ServiceAreasGrid />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            ['/composite-deck-builder-loudoun', 'Composite Deck Builder in Loudoun County'],
            ['/screened-porch-builder-northern-virginia', 'Screened Porch Builder Northern Virginia'],
            ['/deck-permit-fairfax-county-virginia', 'Fairfax County Deck Permit Guide'],
            ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
            ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK Comparison'],
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
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="Falls Church" /></div></section>
      <SimpleCTA title="Maximize Your Falls Church Outdoor Space" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/deck-builder-falls-church-va" />
      <NamedAuthor context="Falls Church and Northern Virginia" lastUpdated="2026-06-01" />
      <ContactHome />
    </main>
  );
}
