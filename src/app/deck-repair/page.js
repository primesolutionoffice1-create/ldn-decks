import React from 'react';
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
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/deck-repair',
  title: 'Deck Repair | Loudoun County & Fairfax VA | LDN Decks',
  description: 'Professional deck repair in Northern Virginia. Fix rot, wobbly railings, and ledger board failures. Free safety inspection call (571) 655-7207.',
  image: '/images/img05.jpeg',
});

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
    a: "Small repairs like board replacement start at $500, while major structural restoration or resurfacing can range from $5,000 to $15,000 depending on the square footage."
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
    a: "A professional structural repair using high-grade pressure-treated lumber or composite can extend the life of your deck by 10-15 years or more."
  },
  {
    q: "Do you offer emergency deck safety inspections?",
    a: "Yes, we prioritize safety inspections for homeowners in Arlington and Loudoun who are concerned about wobbly railings or shifting structures."
  },
  {
    q: "Are you a 5-Star Google Rated repair contractor?",
    a: "Loudoun Decks is a 5-Star Google Rated deck builder known for honesty and quality in both new builds and complex restorations."
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
      "Residential decks in Northern Virginia are subject to extreme environmental stress. Between the high humidity of our summers and the snow and ice cycles of winter, even the best-built decks eventually require professional attention. As a leading deck builder in Loudoun County, Fairfax County, and Prince William County, Loudoun Decks understands that deck repair is not just about aesthetics-it's about preserving a critical structural component of your home.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. We have seen countless decks in Ashburn and Leesburg that look healthy on the surface but have significant rot hidden beneath the decking boards. This is why we advocate for proactive maintenance and professional safety audits. Catching a loose ledger or a rotting post early can save you thousands of dollars in full replacement costs and prevent potentially dangerous structural failures.",
      "If you are searching for a deck contractor near you who values safety and structural integrity, look no further. Our team provides comprehensive restoration services designed specifically for the unique architectural styles and building codes found across NoVA and Stafford."
    ]
  },
  {
    title: "Identifying Red Flags: When Your Deck Becomes a Hazard",
    paragraphs: [
      "Many homeowners in regions like Fairfax Station and Burke overlook the subtle signs of deck degradation. The most common 'red flag' is wobbly or loose railings. In Virginia, building codes have become much stricter regarding railing attachment methods because railings are responsible for preventing falls. If your railing posts are through-bolted rather than just nailed, you are in much better shape. If they move when you lean on them, you need immediate deck repair.",
      "Another critical area is the stair system. Over time, the 'stringers' (the side supports of the stairs) can pull away from the deck or rot at the base where they touch the ground. We frequently handle stair restorations in Sterling and Herndon, reinforcing these high-traffic areas with custom steel brackets and new pressure-treated timber. Ensuring your stairs are level and secure is a top priority for any 5-Star Google Rated contractor.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. As your custom deck builder and restoration expert, we perform deep-dive inspections to identify these hazards before they escalate into emergencies."
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
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. Whether you need a simple board swap or a massive structural overhaul, we approach every repair project with the same level of care and precision as our new $50k+ custom builds."
    ]
  },
  {
    title: "The Loudoun Decks Restoration Protocol",
    paragraphs: [
      "Our deck repair process begins with a comprehensive safety audit. We don't just quote you for what you asked for; we tell you what you *need* to be safe. Our technicians crawl into the substructure to check for rot and fastener integrity. In areas like Gainesville and Manassas, where older neighborhoods often feature decks built 20+ years ago, these audits are literally lifesavers.",
      "Once we identify the scope, we source materials that match your existing deck as closely as possible. We specialize in working with aged cedar, pressure-treated pine, and all major composite brands. Our goal is for the repair to be as invisible as possible, maintaining the cohesive look of your outdoor space. We also provide advice on staining and sealing to ensure the new wood integrates perfectly with the old.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. We are proud to be the premier deck company near you for restorations, helping Northern Virginia homeowners protect their families and their real estate investments."
    ]
  }
];

export default function DeckRepairPage() {
  return (
    <main>
      <ServiceSchema name="Deck Repair" description="Deck repair services for Northern Virginia. Board replacement, railing repair, structural fixes." price="3000" />
      <ServicesHeader
        subtext="5-Star Google Rated Restoration"
        title="Professional Deck Repair & Structural Restoration"
        description="Loudoun Decks provides expert deck repair services across Loudoun County, Fairfax County, and Prince William County. Restore your deck's safety and beauty with NoVA's local experts."
      />

      {/* Urgent CTA critical for Ads landing page conversion */}
      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <p style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.75rem' }}>Worried about your deck&apos;s safety? Get a free inspection.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <CallLink style={{ display: 'inline-block', background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', fontSize: '1rem' }}>Call (571) 655-7207</CallLink>
            <a href="/contact" style={{ display: 'inline-block', background: 'var(--color-dark)', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', fontSize: '1rem' }}>Get Free Estimate</a>
          </div>
        </div>
      </section>

      <section style={{ background: '#fff8f1', borderLeft: '4px solid var(--color-primary)', padding: '1.25rem 1.5rem', maxWidth: 900, margin: '1.5rem auto', borderRadius: 8 }}>
        <p style={{ margin: 0, lineHeight: 1.7 }}>
          <strong>Deep dive into structural repair scope, cost ranges, permit triggers, and the repair-vs-replace decision framework:</strong>{' '}
          <a href="/services/deck-repair-and-structural-maintenance" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Full Northern Virginia Structural Repair Hub →</a>
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

      <SimpleCTA title="Deck Needs Repair? We Can Help." buttonText="Get Free Inspection" link="/contact" />

      <ServicesFAQ canonicalUrl="https://ldndecks.com/deck-repair"
        title="Deck Repair & Maintenance FAQs"
        faqs={repairFAQs}
      />

      <section style={{ padding: '3rem 0', background: '#fafafa' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.5rem' }}>Deck Repair Service Area</h2>
          <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '1.5rem' }}>
            Based in Centreville, VA we serve Loudoun, Fairfax, Prince William, Arlington, and Stafford counties same-day estimates within a 40-mile radius.
          </p>
          <GoogleMapEmbed city="Centreville" state="VA" height="380px" />
        </div>
      </section>

      <ServiceAreasGrid />

      <RelatedGuides currentPath="/deck-repair" />
      <ContactHome />
    </main>
  );
}
