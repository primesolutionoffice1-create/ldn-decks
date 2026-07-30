import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import CallLink from '@/components/CallLink';
import PlanningUpdate from '@/components/PlanningUpdate';
import GeoAnswerBlock from '@/components/GeoAnswerBlock';
import CityLeadFormSection from '@/components/CityLeadFormSection';

export const metadata = buildMetadata({
  path: '/deck-builder-manassas-va',
  title: 'Deck Builder in Manassas, VA | Composite Decks | Loudoun Decks',
  description: 'Manassas deck builder serving Old Town, Wellington, Bull Run and Sudley Springs. Trex and composite deck planning, screened porches and historic-district builds.',
  image: '/social/deck-builder-manassas-va-social.png',
});

const manassasFAQs = [
  {
    q: "Do you build decks in Old Town Manassas or Wellington?",
    a: "Yes. We work across the City of Manassas footprint including Old Town, Wellington, Wellington Estates, Ashleigh and the Sudley Springs corridor. Old Town builds run through the Architectural Review Board for any visible-from-street modifications, and we prepare the elevation drawings and material specs the ARB expects."
  },
  {
    q: "How long does the Prince William County deck permit process take?",
    a: "Prince William County Department of Development Services is currently the fastest jurisdiction in Northern Virginia for deck plan review, typically 2 to 3 weeks for a standard residential submission. The City of Manassas runs slightly longer when the property sits inside the Old Town historic overlay because of the architectural review step."
  },
  {
    q: "What's the typical cost for a composite deck in Manassas?",
    a: "Most Manassas projects land between $18,000 and $35,000 for a 300 to 450 sqft Trex Enhance or Transcend build with aluminum railings. Pricing in Prince William County typically runs 10 to 15 percent below comparable builds in Loudoun or Fairfax due to lower lot acquisition costs feeding into local trade rates."
  },
  {
    q: "Can you handle HOA approvals in Wellington or Bull Run Mountain Estates?",
    a: "Yes. We've submitted to Wellington HOA, Bull Run Mountain Estates and the smaller Stonewall Heights association. We provide the stamped CAD drawings, material color samples and setback diagrams these boards require, and we follow each submission through approval before we break ground."
  },
  {
    q: "Do you replace old wood decks in Manassas's older neighborhoods?",
    a: "Frequently. Many Sudley Springs and Stonewall Heights homes still have pressure-treated decks from the late 80s and 90s where the joists, ledger board or footings have failed. We assess whether a full structural rebuild or a resurface over sound framing is the right call before quoting."
  },
  {
    q: "Will composite decking hold up in Manassas's climate?",
    a: "Yes. Trex and TimberTech AZEK are engineered for the freeze-thaw cycles and humid summers we see in Prince William County. Capped composite resists the surface mildew that destroys uncapped boards on shaded Bull Run lots, and the boards won't cup or splinter the way pressure-treated pine does after five Manassas summers."
  }
];

const manassasFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": manassasFAQs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};

const manassasServices = [
  { title: 'New Composite Decks', range: 'From $18k', link: '/services/new-decks' },
  { title: 'Deck Resurfacing', range: 'From $15k', link: '/services/deck-resurfacing' },
  { title: 'Screened Porches', range: 'From $22k', link: '/services/porches' },
  { title: 'Pergolas & Gazebos', range: 'From $8k', link: '/services/gazebo-pergola' },
  { title: 'Paver Patios', range: 'From $8k', link: '/services/patios' },
  { title: 'Privacy Fencing', range: 'From $4k', link: '/services/fence' },
];

const manassasNeighborhoods = [
  { name: 'Old Town Manassas', desc: 'Historic district with Civil War-era streetscapes. Architectural Review Board governs anything visible from the public right of way, including rear decks on corner lots.' },
  { name: 'Wellington & Wellington Estates', desc: 'Established 80s and 90s subdivision with mature trees and a mix of two-story colonials and ranchers. Active HOA with a clear deck submission packet we know well.' },
  { name: 'Bull Run & Sudley Springs', desc: 'Larger lots backing to wooded buffers along the Bull Run watershed. Common requests are multi-level walkout decks and screened porches that block out summer mosquitos.' },
  { name: 'Ashleigh', desc: 'Newer planned community off Sudley Manor Drive with consistent architectural standards. Composite decks in cool grays and warm browns dominate the approved palette.' },
  { name: 'Stonewall Heights', desc: 'Mature mid-century neighborhood near Liberia Avenue. A high percentage of original wood decks here are now 25+ years old and ready for full structural replacement.' },
  { name: 'Manassas Park', desc: 'Independent city adjacent to Manassas with its own building department. Smaller lots favor compact 250 to 350 sqft single-level builds with integrated bench seating.' },
];

export default function ManassasDeckBuilderPage() {
  return (
    <main>
      <JsonLd data={manassasFaqSchema} />
      <LocalBusinessSchema city="Manassas" url="https://ldndecks.com/deck-builder-manassas-va" />
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/deck-builder-manassas-va" name="Deck Builder in Manassas, VA | Composite Decks | Loudoun Decks" description="Manassas deck builder serving Old Town, Wellington, Bull Run and Sudley Springs. Trex and composite deck planning, screened porches and historic-district builds." speakable />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Deck Builder in Manassas, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Trex and composite deck planning, screened porches and historic-district outdoor living for Manassas, Manassas Park and Prince William County.</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/get-estimate" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
          </div>
        </div>
      </section>
      <CityLeadFormSection
        city="Manassas"
        county="Prince William County / City of Manassas"
        service="deck replacement, composite deck, or historic-area deck"
      />

      <article style={{ padding: '3rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ borderLeft: '4px solid var(--color-primary)', background: '#fff8f1', padding: '1.25rem 1.5rem', borderRadius: 6, marginBottom: '2rem' }}>
            <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Quick Answer</strong>
            <p style={{ margin: 0, lineHeight: 1.65 }}>A custom composite deck in Manassas typically costs $18,000 to $35,000 installed. Prince William County permits average 2 to 3 weeks. We plan Trex product-line options and coordinate Wellington HOA, Bull Run Mountain Estates, and Old Town Architectural Review submission details with the homeowner.</p>
          </div>

          <PlanningUpdate
            market="Manassas decks in 2026"
            notes={[
              "Manassas projects should confirm whether the address is City of Manassas, Manassas Park, or unincorporated Prince William County before permit planning.",
              "Old Town projects may need Architectural Review Board materials, colors, and visibility documentation before the building permit path is complete.",
              "Older Sudley Springs, Stonewall Heights, and Wellington decks should be inspected for ledger, footing, railing, and stair issues before resurfacing is priced."
            ]}
            links={[
              { href: "/deck-permit-prince-william-county-virginia", label: "Prince William permit guide" },
              { href: "/deck-safety-inspection-checklist", label: "Safety checklist" },
              { href: "/deck-resurfacing-vs-replacement", label: "Resurface vs replace" }
            ]}
          />

          <GeoAnswerBlock
            question="What should Manassas homeowners check before a deck replacement?"
            answer="Manassas deck projects should confirm whether the home falls under City of Manassas, Manassas Park, Prince William County, HOA, or historic-area review before pricing is finalized. The safest first step is to inspect framing, ledger flashing, posts, footings, stairs, railings, and drainage, then choose resurfacing or full replacement with composite, PVC, or wood materials."
            facts={[
              'Primary buyer intent: Manassas deck builder, Prince William permit planning, replacement, and composite upgrades.',
              'Conversion path: Prince William permit guide, safety inspection, and written estimate.'
            ]}
            links={[
              { href: '/deck-permit-prince-william-county-virginia', label: 'Prince William permit guide' },
              { href: '/deck-resurfacing-vs-replacement', label: 'Resurface vs replace' },
              { href: '/get-estimate', label: 'Get a Manassas estimate' }
            ]}
          />

          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2.5rem' }}>
            <Image
              src="/images/img35.jpeg"
              alt="Custom Trex composite deck built by Loudoun Decks in Manassas, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>Custom Deck Builder Serving Manassas Homeowners</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Manassas is one of the more architecturally diverse pockets of Northern Virginia. Inside the city limits you have Old Town blocks where the streetscape hasn't changed much since the early 1900s, and ten minutes north you're in Wellington and Ashleigh where the homes were stamped out in the 90s and early 2000s. Building a deck here means knowing the difference between a corner-lot Victorian that needs Architectural Review Board approval and a colonial in Wellington Estates where the HOA already has a stock approved color palette.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>Loudoun Decks structures Manassas scopes around what local homeowners actually need: a clean, durable deck that respects the home's age and architecture without pricing the owner out of the project. Manassas project pricing typically lands 10 to 15 percent below comparable Loudoun and Fairfax builds, and that gap has nothing to do with quality. It's lot economics, trade rates and overhead.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>Trex and TimberTech Composite Decks in Manassas</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>The vast majority of new builds we install in Prince William County are capped composite. Trex Enhance Naturals is the volume choice for Wellington, Ashleigh and Stonewall Heights homeowners who want a 25-year fade and stain warranty without pushing the budget past $25,000 on a 350 sqft footprint. When clients want the deeper grain pattern and the heavier board feel, we step them up to Trex Transcend in Spiced Rum or Lava Rock, or to TimberTech AZEK Vintage on Old Town historic projects where the visual match to the existing trim matters.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>Composite is the right call for Manassas's climate. Bull Run watershed humidity, the freeze-thaw cycles in January, and the heavy summer pollen drops from the oaks around Sudley Springs all chew through pressure-treated wood inside a decade. Capped composite ignores all of it. We use hidden fasteners on every Trex install, breathable flashing tape at the ledger, and stainless lag connections rated for the loads our engineer specs into the structural drawings.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>Deck Replacement and Resurfacing in Manassas, VA</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>A surprising number of Stonewall Heights and Sudley Springs homes still have their original pressure-treated decks from the late 80s. By the time a homeowner calls us, the surface boards are usually splintering, the railings are loose, and the joists may or may not be salvageable. Our first step is always a structural inspection. If the framing is sound, footings are intact, and the ledger is properly flashed, we can resurface with composite for $10,000 to $18,000 and give you a deck that performs like new.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>If the framing is rotted, the ledger was nailed instead of bolted, or the footings have shifted, resurfacing isn't safe. We tear down and rebuild from new footings up. Full replacement on a 350 sqft Manassas project typically runs $22,000 to $30,000 depending on board selection and railing system. We'll tell you which path is appropriate before we quote, with photos.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>Outdoor Living Services in Manassas</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {manassasServices.map((item) => (
              <Link key={item.title} href={item.link} style={{ display: 'block', background: '#f9f9f9', borderRadius: 8, padding: '1.1rem', textDecoration: 'none', color: 'inherit', border: '1px solid #ececec' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.35rem', fontSize: '1rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: 600, margin: 0 }}>{item.range}</p>
              </Link>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>Neighborhoods We Serve in Manassas</h2>
          <div style={{ marginBottom: '2.5rem' }}>
            {manassasNeighborhoods.map((n) => (
              <div key={n.name} style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #ececec' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.35rem' }}>{n.name}</h3>
                <p style={{ margin: 0, lineHeight: 1.65, color: '#444' }}>{n.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>Why Homeowners in Manassas Choose Loudoun Decks</h2>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Three-jurisdiction planning.</strong> City of Manassas, Manassas Park and unincorporated Prince William County each have their own building departments and review expectations. We verify which path applies before plans are filed.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Historic district planning.</strong> Old Town Architectural Review submissions may require elevation drawings, material samples and exterior color justification. We prepare those details before the packet is submitted.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Trex product-line planning.</strong> Our crews train annually on Trex Enhance, Transcend and Signature systems plus the full TimberTech AZEK line.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Honest pricing for the local market.</strong> Manassas projects don't carry Loudoun overhead. Our quotes reflect that, and we'll show you the line items.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Source-verifiable reputation.</strong> We point homeowners to public review profiles and third-party business listings so trust claims can be checked outside our own website.</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>Permits, HOA and Planning Support in Manassas</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Prince William County Department of Development Services handles plan review for the unincorporated areas surrounding the city, and they're currently one of the faster deck-permitting jurisdictions in Northern Virginia at roughly 2 to 3 weeks turnaround. Our submissions include sealed structural drawings, ledger attachment details, footing depths, and the full setback analysis their reviewers expect.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>Inside the City of Manassas the building department runs a similar timeline, but Old Town addresses inside the historic overlay add an Architectural Review Board step. The ARB looks at deck visibility from the street, railing style, and material color, especially on corner lots and rear decks that read from public right of way. We prepare the ARB packet alongside the building permit so the two reviews run in parallel where possible.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>Common Deck Planning Scopes Near Manassas</h2>
          <p style={{ marginBottom: '2.5rem', lineHeight: 1.7 }}>Typical Manassas projects we help with include 350 to 450 sqft Trex Enhance Naturals decks for Wellington and Ashleigh homeowners replacing 20-year-old pressure-treated structures, screened porch additions on Bull Run wooded lots where mosquitos make April-through-October use unpleasant otherwise, and compact two-level walkout decks for Sudley Springs homes built into hillside grade. In Old Town we've also handled smaller historic-district rebuilds where the deck has to read as period-appropriate from the street while delivering modern composite performance behind the railing.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem' }}>Manassas Deck Builder FAQs</h2>
          {manassasFAQs.map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.1rem 1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.02rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '0.85rem', lineHeight: 1.7, color: '#444', marginBottom: 0 }}>{faq.a}</p>
            </details>
          ))}

        </div>
      </article>
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (Google reviews) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
            <li key="/composite-deck-cost-northern-virginia" style={{ marginBottom: '0.5rem' }}><Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>How Much Does a Deck Cost in Northern Virginia? →</Link></li>
        </ul>
      </section>


      <SimpleCTA title="Build Your Manassas Deck With a Composite Deck Team" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/deck-builder-manassas-va" />
      <NamedAuthor context="Manassas and Northern Virginia" lastUpdated="2026-06-01" />
      <ContactHome />
    </main>
  );
}
