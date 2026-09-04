import React from 'react';
import Link from 'next/link';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ProcessSteps from '@/components/ProcessSteps';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import ServiceSchema from '@/components/ServiceSchema';
import SimpleCTA from '@/components/SimpleCTA';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import CallLink from '@/components/CallLink';
import GeoAnswerBlock from '@/components/GeoAnswerBlock';

const _meta = buildMetadata({
  path: '/deck-repair',
  title: 'Deck Repair | Loudoun County & Fairfax VA | LDN Decks',
  description: 'Professional deck repair in Northern Virginia. Fix rot, wobbly railings, and ledger board failures. Free safety inspection call (571) 655-7207.',
  image: '/social/deck-repair-social.png',
});
export const metadata = {
  ..._meta,
  alternates: { canonical: 'https://ldndecks.com/services/deck-repair' },
};

const inclusions = [
  {
    title: "Structural Restoration",
    desc: "We identify and replace rotting joists, beams, and posts to restore the structural integrity of your deck in Loudoun and Fairfax."
  },
  {
    title: "Safety Audits",
    desc: "Thorough safety inspections across Northern Virginia to ensure stairs and ledgers meet modern NoVA building codes."
  },
  {
    title: "Matching Aesthetics",
    desc: "Swapping out damaged components while matching your existing stain or material profile in Arlington and Stafford."
  }
];

const repairFAQs = [
  {
    q: "What are the common signs of deck rot in Loudoun County?",
    a: "Look for soft spots in the wood, especially around the base of posts or where the deck meets the house. If you can push a screwdriver into the wood easily, you have rot that needs immediate deck repair."
  },
  {
    q: "How much does a professional deck repair cost in Fairfax?",
    a: "Professional deck repair pricing in Fairfax should be confirmed after the deck is inspected. Board replacement, railing stabilization, ledger work, stair repair, joist sistering, and resurfacing all price differently, and structural or permit-triggering work needs a written scope before the number is reliable."
  },
  {
    q: "Is it safer to repair or replace an old deck?",
    a: "If the foundation is sound but the surface is worn, deck resurfacing is a safe and cost-effective choice. If the main support beams are rotting, a full replacement is usually required for safety."
  },
  {
    q: "Do you handle deck ledger board repairs in Prince William County?",
    a: "Yes. The ledger board (where the deck attaches to the house) is the most common point of failure. We specialize in reinforcing and flashing ledger boards to prevent collapse."
  },
  {
    q: "How long will a deck repair last in Virginia's climate?",
    a: "Repair lifespan depends on what failed, how much of the structure is corrected, drainage, fasteners, exposure, and ongoing maintenance. A site inspection should separate a limited repair from resurfacing or full replacement before any lifespan expectation is used for budgeting."
  },
  {
    q: "Do you offer emergency deck safety inspections?",
    a: "Yes, we prioritize safety inspections for homeowners in Arlington and Loudoun who are concerned about wobbly railings or shifting structures."
  },
  {
    q: "Do you document repair findings before quoting?",
    a: "Yes. Deck repair starts with inspection-first documentation so homeowners can understand visible safety issues, repair options, and when replacement may be smarter than repair."
  },
  {
    q: "Will repairing my deck improve my home's value?",
    a: "Absolutely. A well-maintained, safe deck is a major selling point in the Northern Virginia real estate market, while a neglected deck can be a liability during inspections."
  }
];

const expansionSections = [
  {
    title: "The Critical Importance of Deck Maintenance in Northern Virginia",
    paragraphs: [
      "Residential decks in Northern Virginia face humidity, rain, freeze-thaw cycles, and heavy seasonal use. Deck repair is not just about appearance; it is about understanding whether the boards, railings, stairs, ledger, posts, beams, joists, and footings are still performing safely.",
      "Loudoun Decks serves Loudoun County, Fairfax County, and Prince William County with inspection-first repair planning. A deck can look healthy on the surface while hiding rot beneath boards or around structural connections. Finding a loose ledger, rotted post, or unsafe stair detail early can help homeowners choose repair, resurfacing, or replacement before the scope grows.",
      "If you are searching for a deck contractor near you who values safety and structural integrity, start with the full structural repair hub linked on this page. It explains the repair-versus-replacement decision in more detail."
    ]
  },
  {
    title: "Identifying Red Flags: When Your Deck Becomes a Hazard",
    paragraphs: [
      "Many homeowners in regions like Fairfax Station and Burke overlook the subtle signs of deck degradation. The most common 'red flag' is wobbly or loose railings. In Virginia, building codes have become much stricter regarding railing attachment methods because railings are responsible for preventing falls. If your railing posts are through-bolted rather than just nailed, you are in much better shape. If they move when you lean on them, you need immediate deck repair.",
      "Another critical area is the stair system. Over time, stair stringers can pull away from the deck or rot at the base where they touch the ground. Ensuring your stairs are level, secure, and documented before repair begins is a core part of an inspection-first repair process.",
      "Loudoun Decks serves Loudoun County, Fairfax County, and Prince William County with repair review that looks for structural warning signs before they become larger project issues."
    ],
    listItems: [
      { label: "Ledger Board Failures", text: "The #1 cause of deck collapses; we ensure your deck is physically bolted to the house's rim joist." },
      { label: "Wood Rot", text: "Fungal decay that eats through structural timber; we replace affected areas with ACQ-treated wood." },
      { label: "Corroded Fasteners", text: "In older decks, galvanized nails can rust away; we upgrade to stainless steel or ceramic-coated screws." },
      { label: "Unstable Foundations", text: "Shifting concrete piers can cause a deck to sag; we provide leveling and re-shimming services." }
    ]
  },
  {
    title: "Resurfacing vs. Full Replacement: The Cost-Effective Path",
    paragraphs: [
      "One of our most popular services for homeowners in Loudoun County and Arlington is 'Deck Resurfacing.' This process is ideal if your deck's 'skeleton'-the posts, beams, and joists-is still structurally sound but the top boards are splintering or warped. By removing the surface material and replacing it with brand-new wood or low-maintenance composite like Trex, you can get a 'new deck' look for a fraction of the cost of a full knockdown and rebuild.",
      "During a resurfacing project, we also take the opportunity to reinforce the existing structure. We add 'joist hangers' where they might be missing and double-up on beams to bring the deck in line with modern safety standards. This hybrid approach is extremely popular in Great Falls and Mclean, where large existing footprints make full replacements prohibitively expensive or complicated with modern zoning setbacks.",
      "Loudoun Decks serves Loudoun County, Fairfax County, and Prince William County with repair, resurfacing, and replacement planning so homeowners can approve the right scope instead of guessing from surface wear alone."
    ]
  },
  {
    title: "The Loudoun Decks Restoration Protocol",
    paragraphs: [
      "Our deck repair process begins with a safety-focused inspection. We do not want to quote a cosmetic repair when the substructure needs attention, so the review includes visible rot, fastener condition, railings, stairs, ledger attachment, and support posts.",
      "Once we identify the scope, we source materials that match your existing deck as closely as possible. We specialize in working with aged cedar, pressure-treated pine, and all major composite brands. Our goal is for the repair to be as invisible as possible, maintaining the cohesive look of your outdoor space. We also provide advice on staining and sealing to ensure the new wood integrates perfectly with the old.",
      "Loudoun Decks serves Loudoun County, Fairfax County, and Prince William County with repair and restoration planning for homeowners who need a practical path from safety concern to written scope."
    ]
  }
];

export default function DeckRepairPage() {
  return (
    <main>
      <WebPageSchema dateModified="2026-09-04" url="https://ldndecks.com/deck-repair" name="Deck Repair | Loudoun County &amp; Fairfax VA | LDN Decks" description="Professional deck repair in Northern Virginia. Fix rot, wobbly railings, and ledger board failures. Free safety inspection call (571) 655-7207." speakable />
      <ServiceSchema
        name="Deck Repair"
        description="Deck repair services for Northern Virginia. Board replacement, railing repair, structural fixes, and code compliance remediation."
        url="https://ldndecks.com/deck-repair"
        category="Deck Repair"
        relatedServices={['https://ldndecks.com/services/deck-repair', 'https://ldndecks.com/services/deck-inspection', 'https://ldndecks.com/deck-repair-loudoun-county']}
      />
      <ServicesHeader
        subtext="Inspection-First Restoration"
        title="Professional Deck Repair & Structural Restoration"
        description="Loudoun Decks provides inspection-first deck repair services across Loudoun County, Fairfax County, and Prince William County. Start here, then use the structural repair hub for deeper repair-vs-replacement guidance."
      />

      <GeoAnswerBlock
        question="Should I use this deck repair page or the structural repair hub?"
        answer="This page introduces deck repair services, while the full structural repair hub at /services/deck-repair is the preferred guide for repair-versus-replacement decisions. Use the hub when the issue involves rot, loose railings, failing stairs, ledger movement, sinking posts, failed inspection items, or uncertainty about whether resurfacing is safe."
        facts={[
          'Canonical repair authority: /services/deck-repair',
          'Best use: route homeowners from basic repair interest to inspection-first structural guidance',
        ]}
        links={[
          { href: '/services/deck-repair', label: 'Structural repair hub' },
          { href: '/deck-resurfacing-vs-replacement', label: 'Resurface vs replace' },
          { href: '/services/deck-replacement', label: 'Deck replacement' },
        ]}
      />

      {/* Urgent CTA critical for Ads landing page conversion */}
      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <p style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.75rem' }}>Worried about your deck&apos;s safety? Get a free inspection.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <CallLink style={{ display: 'inline-block', background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', fontSize: '1rem' }}>Call (571) 655-7207</CallLink>
            <a href="/get-estimate" style={{ display: 'inline-block', background: 'var(--color-dark)', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', fontSize: '1rem' }}>Get Free Estimate</a>
          </div>
        </div>
      </section>

      <section style={{ background: '#fff8f1', borderLeft: '4px solid var(--color-primary)', padding: '1.25rem 1.5rem', maxWidth: 900, margin: '1.5rem auto', borderRadius: 8 }}>
        <p style={{ margin: 0, lineHeight: 1.7 }}>
          <strong>Deep dive into structural repair scope, permit triggers, and the repair-vs-replace decision framework:</strong>{' '}
          <a href="/services/deck-repair" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Full Northern Virginia Structural Repair Hub →</a>
          {' '}For an inspection-first service overview, start with our{' '}
          <a href="/services/deck-repair" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck repair service in Northern Virginia</a>.
          {' '}If posts or piers are part of the concern, use the{' '}
          <a href="/tools/deck-footing-depth-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck Footing Depth Calculator Virginia</a>
          {' '}to understand footing depth, diameter, frost and soil-bearing planning before repair review.
        </p>
      </section>

      <ServiceMain
        subtitle="Safety First"
        title="Expert Deck Contractor Serving Northern Virginia"
        description="Don't compromise on your family's safety. We specialize in identifying rot, reinforcing structures, and professional resurfacing for homeowners in Arlington, Stafford, and beyond."
        listItems={[
          "Replacement of rotting structural timber",
          "Ledger board reinforcement and flashing",
          "Stair and railing safety stabilization",
          "Full-scale deck resurfacing (Wood to Composite)",
          "Professional safety audits and inspections"
        ]}
        image1="/images/img05.jpeg"
        image2="/images/img06.jpeg"
      />

      <ServiceContentExpansion sections={expansionSections} />

      <ServiceInclusions
        title="Restoring Integrity to Every Board"
        description="Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. Our repairs are engineered to last."
        items={inclusions}
      />

      <ProcessSteps />

      <SimpleCTA title="Deck Needs Repair? We Can Help." buttonText="Get Free Inspection" link="/get-estimate" />

      <ServicesFAQ canonicalUrl="https://ldndecks.com/deck-repair"
        title="Deck Repair & Maintenance FAQs"
        faqs={repairFAQs}
      />

      <section style={{ padding: '2rem 0', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '1.45rem', fontWeight: 700, marginBottom: '0.75rem' }}>Repair Planning Tools</h2>
          <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
            Repair pricing is inspection-first, but planning tools can help you compare whether a repair, resurfacing, or replacement conversation makes sense before the site visit.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.5rem' }}>
            <li><Link href="/deck-resurfacing-vs-replacement" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Compare repair, resurfacing, and full replacement →</Link></li>
            <li><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Use the deck cost calculator for replacement/resurfacing planning →</Link></li>
            <li><Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Estimate monthly payment scenarios after scope is known →</Link></li>
          </ul>
        </div>
      </section>

      <section style={{ padding: '3rem 0', background: '#fafafa' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.5rem' }}>Deck Repair Service Area</h2>
          <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '1.5rem' }}>
            Based in Centreville, VA, we serve Loudoun, Fairfax, Prince William, Arlington, and Stafford counties. Appointment availability depends on project type, schedule, distance, and scope.
          </p>
          <GoogleMapEmbed city="Centreville" state="VA" height="380px" />
        </div>
      </section>

      <ServiceAreasGrid />

      <RelatedGuides currentPath="/deck-repair" category="structural-repair" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-09-04" />

      <ContactHome />
    </main>
  );
}
