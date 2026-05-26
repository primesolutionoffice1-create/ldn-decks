import React from 'react';
import Link from 'next/link';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ProcessSteps from '@/components/ProcessSteps';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import SimpleCTA from '@/components/SimpleCTA';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import ServiceSchema from '@/components/ServiceSchema';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/deck-repair-loudoun-county',
  title: 'Deck Repair Loudoun County | Fix Rot, Railings & Ledger Boards',
  description: 'Expert deck repair in Loudoun County, VA. We fix rot, unstable railings, ledger board failures & structural damage. Ashburn, Leesburg, Sterling.',
  image: '/images/img05.jpeg',
});

const inclusions = [
  {
    title: "Loudoun County Structural Repair",
    desc: "We identify and replace rotting joists, beams, ledger boards, and posts throughout Ashburn, Leesburg, Sterling, Brambleton, and all Loudoun County communities."
  },
  {
    title: "Loudoun County Safety Inspections",
    desc: "Comprehensive deck safety audits for Loudoun homeowners - checking railings, stairs, ledger connections, and post footings against current Loudoun County building codes."
  },
  {
    title: "Seamless Material Matching",
    desc: "We source matching pressure-treated lumber, cedar, and composite boards to ensure repairs blend invisibly with your existing deck - protecting your home's curb appeal."
  }
];

const pageFAQs = [
  {
    q: "Do you repair decks throughout Loudoun County?",
    a: "Yes. Loudoun Decks provides deck repair services across all Loudoun County communities including Ashburn, Leesburg, Sterling, Brambleton, Broadlands, One Loudoun, South Riding, Lansdowne, Purcellville, and Middleburg."
  },
  {
    q: "What are the most common deck repair issues in Loudoun County?",
    a: "The most common issues we see in Loudoun County are ledger board rot or improper flashing, rotting deck boards and rim joists, wobbly or loose railing posts, corroded fasteners on older decks, and sinking or shifting concrete pier footings."
  },
  {
    q: "How much does deck repair cost in Loudoun County?",
    a: "Deck repair costs in Loudoun County range from $500 for minor board replacements to $8,000-$15,000 for major structural restoration. We provide free on-site estimates with full itemized proposals so there are no surprises."
  },
  {
    q: "Do you pull permits for deck repairs in Loudoun County?",
    a: "Structural repairs in Loudoun County typically require a permit from Loudoun County Department of Building and Development. Loudoun Decks handles the full permitting process on your behalf, including structural drawings when required."
  },
  {
    q: "How do I know if my Loudoun County deck needs repair or full replacement?",
    a: "If your deck's primary structural members - posts, beams, and ledger board - are sound, repair is usually cost-effective. If more than 30-40% of the structure shows rot or the ledger is compromised, a full replacement may be safer and more economical long-term. We provide honest assessments at every inspection."
  },
  {
    q: "Can you repair composite decks in Loudoun County?",
    a: "Yes. We repair all composite deck brands including Trex, TimberTech, and Fiberon throughout Loudoun County. This includes replacing individual boards, repairing substructure, and addressing fastener or frame issues under composite surfaces."
  },
  {
    q: "How long does deck repair take in Loudoun County?",
    a: "Minor repairs typically take 1-2 days. Major structural restoration or full resurfacing projects can take 3-7 days depending on scope. After a permit is issued by Loudoun County, most repair work is completed quickly to minimize disruption."
  },
  {
    q: "Are you a licensed and insured deck repair contractor in Loudoun County?",
    a: "Yes. Loudoun Decks is a fully licensed and insured contractor operating in Loudoun County, Virginia. We are a 5-Star Google Rated company with deep roots in the Loudoun community and a track record of quality repairs."
  }
];

const expansionSections = [
  {
    title: "Loudoun County's Trusted Deck Repair Contractor",
    paragraphs: [
      "Loudoun County is one of the fastest-growing and most prosperous counties in the United States - and its homeowners expect a high standard when it comes to maintaining their properties. Decks in Loudoun County face a unique combination of environmental stressors: the high humidity and intense summer heat of Northern Virginia, followed by freeze-thaw cycles that expand and contract wood and concrete year after year. Loudoun Decks has spent years repairing and restoring decks in Ashburn, Leesburg, Sterling, Brambleton, and across the county - and we understand exactly what Loudoun homes need.",
      "Many Loudoun County decks were built in the construction boom of the 2000s and early 2010s, using pressure-treated lumber and builder-grade fasteners that are now approaching the end of their effective lifespan. These decks may look fine on the surface, but hidden rot in the ledger board, subframe joists, and post bases is extremely common. Our team performs thorough substructure inspections - crawling under the deck to check every joist, beam, and connection point - before providing a repair proposal.",
      "If you are a Loudoun County homeowner searching for a deck contractor near you who combines local expertise with the highest standards of craftsmanship, Loudoun Decks is the team to call. We are 5-Star Google Rated, fully licensed and insured, and have completed hundreds of repairs throughout the county."
    ]
  },
  {
    title: "Common Deck Repair Issues in Loudoun County Homes",
    paragraphs: [
      "The single most dangerous deck failure point - and the most common issue we encounter in Loudoun County - is the ledger board connection. The ledger board is the structural member that bolts your deck to the house's rim joist. When this connection fails due to rot, inadequate fastening, or missing flashing, the deck can collapse. In Loudoun County, we frequently find ledger boards on older decks that were nailed rather than through-bolted, or that lack proper flashing to prevent water infiltration. Repairing and properly flashing the ledger is one of the most critical safety upgrades we perform.",
      "Railing instability is the second most common repair request from Loudoun County homeowners. Virginia building codes require deck railings to withstand 200 lbs of lateral force at the top rail - a standard that many older railings simply cannot meet. Railing posts that are face-mounted to the outer rim joist rather than through-bolted to the framing are particularly vulnerable. We upgrade railing post connections throughout Ashburn, Leesburg, and Sterling to meet or exceed current Loudoun County building code requirements.",
      "Deck boards themselves - especially older pressure-treated pine - often show significant wear after 10-15 years in Loudoun County's climate. Cupping, checking, splintering, and the beginning of surface rot are all signs that resurfacing may be appropriate. Resurfacing your existing structure with new pressure-treated boards or upgrading to composite decking like Trex or TimberTech is one of the most cost-effective ways to extend your deck's life by 15-25 years."
    ],
    listItems: [
      { label: "Ledger Board Rot & Improper Flashing", text: "The leading cause of deck collapse in Loudoun County - we repair, reinforce, and properly flash every ledger board we work on." },
      { label: "Loose or Unstable Railings", text: "We upgrade railing post connections to through-bolt systems that meet Loudoun County's current building code requirements." },
      { label: "Rotting Joists & Rim Boards", text: "We replace deteriorated framing members with ACQ pressure-treated lumber rated for ground contact where required." },
      { label: "Sinking or Shifted Footings", text: "Concrete pier footings in Loudoun County can shift over time - we re-level, re-shim, or replace footings to restore a stable base." }
    ]
  },
  {
    title: "Deck Resurfacing in Loudoun County: The Cost-Effective Upgrade",
    paragraphs: [
      "For Loudoun County homeowners whose deck's substructure - posts, beams, and joists - is structurally sound but whose surface boards and railings are worn, deck resurfacing is an excellent alternative to full replacement. By removing the old decking surface and replacing it with new material, you can achieve a brand-new appearance and significantly improved safety at a fraction of the cost of demolishing and rebuilding the entire deck.",
      "The most popular resurfacing upgrade in Loudoun County is replacing old pressure-treated pine boards with low-maintenance composite decking from Trex or TimberTech. As a Trex Platinum Partner and TimberTech Certified installer, Loudoun Decks has access to the full range of premium composite products. Composite decking requires no sealing or staining, is highly resistant to moisture and insect damage, and comes with manufacturer warranties of 25-50 years - making it an ideal long-term solution for Loudoun County's climate.",
      "During any resurfacing project, we also take the opportunity to audit and reinforce the existing framing. We add joist hangers where they may be missing, upgrade rim board connections, and address any fastener corrosion we find. This comprehensive approach ensures that your resurfaced deck meets modern Loudoun County building standards and will serve your family safely for decades to come."
    ]
  },
  {
    title: "Loudoun County Deck Repair: Our Process",
    paragraphs: [
      "Every deck repair project in Loudoun County begins with a comprehensive on-site safety assessment. We don't simply quote the work you describe - we perform a full inspection of the visible deck surface, the substructure framing, the ledger connection, the footings, and the railing and stair systems. Our goal is to identify every safety issue and every repair need before we provide a proposal, so you have a complete picture of your deck's condition.",
      "Once the scope is agreed upon, we handle all Loudoun County permit applications for structural work. Our team is experienced with the Loudoun County Department of Building and Development's requirements for deck repairs, including when structural drawings are required. We manage this process entirely on your behalf, and we schedule inspections with the county to ensure every repair is fully permitted and approved.",
      "We serve the full Loudoun County area for deck repairs: Ashburn, Leesburg, Sterling, Brambleton, Broadlands, One Loudoun, South Riding, Lansdowne, Purcellville, Round Hill, Middleburg, Lovettsville, Hamilton, Waterford, Hillsboro, Aldie, Arcola, Potomac Falls, and all surrounding communities. If you have a deck that needs attention anywhere in Loudoun County, Loudoun Decks is your local repair specialist."
    ]
  }
];

export default function DeckRepairLoudounCountyPage() {
  return (
    <main>
      <WebPageSchema url="https://ldndecks.com/deck-repair-loudoun-county" name="Deck Repair Loudoun County | Fix Rot, Railings &amp; Ledger Boards" description="Expert deck repair in Loudoun County, VA. We fix rot, unstable railings, ledger board failures &amp; structural damage. Ashburn, Leesburg, Sterling." speakable />
      <ServiceSchema
        name="Deck Repair & Structural Restoration in Loudoun County, VA"
        description="Expert deck repair across Loudoun County — rot and ledger board repair, joist and beam replacement, railing and stair safety upgrades, and full resurfacing. Free on-site inspections, permitted structural work."
        areaServed={[{ '@type': 'AdministrativeArea', name: 'Loudoun County, VA' }]}
      />
      <ServicesHeader
        subtext="Loudoun County's 5-Star Rated Repair Team"
        title="Deck Repair Loudoun County"
        description="Loudoun Decks repairs decks throughout Ashburn, Leesburg, Sterling, Brambleton and all of Loudoun County. Rot repair, ledger board reinforcement, railing upgrades & full resurfacing. Free estimate."
      />

      {/* Urgent CTA critical for Ads landing page conversion */}
      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <p style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.75rem' }}>Concerned about your deck? Get a free safety inspection in Loudoun County.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <CallLink style={{ display: 'inline-block', background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', fontSize: '1rem' }}>Call (571) 655-7207</CallLink>
            <a href="/contact" style={{ display: 'inline-block', background: 'var(--color-dark)', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', fontSize: '1rem' }}>Get Free Estimate</a>
          </div>
        </div>
      </section>

      <section style={{ background: '#fff8f1', borderLeft: '4px solid var(--color-primary)', padding: '1.25rem 1.5rem', maxWidth: 900, margin: '1.5rem auto', borderRadius: 8 }}>
        <p style={{ margin: 0, lineHeight: 1.7 }}>
          <strong>Beyond Loudoun-specific guidance:</strong> see the full Northern Virginia repair hub for structural decision frameworks, cost ranges by repair type, permit triggers across all NoVA counties, and the repair-vs-replace decision math.{' '}
          <a href="/services/deck-repair-and-structural-maintenance" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Open the NoVA Structural Repair Hub →</a>
        </p>
      </section>

      <ServiceMain
        subtitle="Loudoun County's Local Repair Experts"
        title="Professional Deck Repair & Restoration in Loudoun County, VA"
        description="From minor board replacements to major structural restorations, Loudoun Decks provides comprehensive deck repair services across all Loudoun County communities. Honest assessments, permitted work, 5-Star results."
        listItems={[
          "Ledger board repair & proper flashing",
          "Rotting joist & rim board replacement",
          "Railing post & stair safety upgrades",
          "Full deck resurfacing (wood or composite)",
          "Loudoun County permit management",
          "Free on-site estimates - call (571) 655-7207"
        ]}
        image1="/images/img05.jpeg"
        image2="/images/img06.jpeg"
      />
      <ServiceContentExpansion sections={expansionSections} />
      <section style={{ padding: '20px 20px 40px', maxWidth: 900, margin: '0 auto', lineHeight: 1.7 }}>
        <h2 style={{ fontSize: '30px', marginBottom: '16px', fontWeight: 800 }}>Repair Scope, Permits, and Structural Checks</h2>
        <p style={{ fontSize: '17px', color: '#555', marginBottom: 0 }}>
          For Loudoun County repairs, we check whether existing footings have shifted, whether joists are correctly sized for the span,
          and whether prior work was permitted. If the repair affects structural framing, railings, stairs, or load paths, a permit may be required.
          Useful primers: <Link href="/blog/deck-footing-depth-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck footing depth</Link>,
          {' '}<Link href="/blog/2x8-vs-2x10-deck-joists" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck joist sizing</Link>,
          {' '}<Link href="/blog/deck-without-permit-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>unpermitted decks in Virginia</Link>, and
          {' '}<Link href="/blog/do-i-need-a-permit-for-a-deck-loudoun" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Virginia deck permit requirements</Link>.
        </p>
      </section>
      <ServiceInclusions
        title="Why Loudoun County Homeowners Trust Loudoun Decks for Repairs"
        description="We are local. We are licensed. We are 5-Star Google Rated. And we treat every repair project in Loudoun County with the same care and precision as our premium new builds."
        items={inclusions}
      />
      <ProcessSteps />
      <SimpleCTA title="Deck Needs Repair in Loudoun County?" buttonText="Get Free Inspection" link="/contact" />
      <ServicesFAQ
        title="Deck Repair Loudoun County - FAQs"
        faqs={pageFAQs}
        canonicalUrl="https://ldndecks.com/deck-repair-loudoun-county"
      />
      <section style={{ padding: '3rem 0', background: '#fafafa' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.5rem' }}>Loudoun County Service Map</h2>
          <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '1.5rem' }}>
            We repair decks across Ashburn, Leesburg, Sterling, Brambleton, South Riding, Purcellville, Lansdowne, Round Hill, and every Loudoun County community in between.
          </p>
          <GoogleMapEmbed city="Leesburg" state="VA" height="380px" />
        </div>
      </section>

      <ServiceAreasGrid />
      <RelatedGuides currentPath="/deck-repair-loudoun-county" />
      <NamedAuthor context="Loudoun County" lastUpdated="2026-05-26" />

      <ContactHome />
    </main>
  );
}
