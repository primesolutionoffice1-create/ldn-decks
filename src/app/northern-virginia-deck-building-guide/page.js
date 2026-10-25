import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import { BUSINESS } from '@/lib/business';
import CallLink from '@/components/CallLink';

const PAGE_DESCRIPTION = 'Northern Virginia deck building guide: dated cost benchmarks ($35–$80/sq ft composite, 2026), permits, HOA, materials, timeline and contractor checklist.';

export const metadata = buildMetadata({
  path: '/northern-virginia-deck-building-guide',
  title: 'The Complete Guide to Building a Deck in Northern Virginia (2026)',
  description: PAGE_DESCRIPTION,
  image: '/social/northern-virginia-deck-building-guide-social.png',
});

export default function MegaGuidePage() {
  const linkStyle = { color: 'var(--color-primary)', fontWeight: 600 };
  const sections = [
    { id: 'cost', title: '1. How Much Does a Deck Cost?', content: (
      <>
        For a simple, low-height composite deck with standard railing and no complex stairs, external 2026 benchmarks put installed cost at $35–$80 per square foot (<a href="https://remodelcalculators.com/deck-cost" target="_blank" rel="noopener noreferrer" style={linkStyle}>RemodelCalculators</a>, reviewed October 11, 2026; <a href="https://www.angi.com/articles/how-much-does-it-cost-build-deck.htm" target="_blank" rel="noopener noreferrer" style={linkStyle}>Angi</a> lists $30–$60 per square foot for deck construction, updated September 24, 2026). That is about $14,000–$32,000 for a 20×20 (400 sq ft) deck. Permits, demolition, elevation and complex stairs are excluded; these are external benchmarks, not Loudoun Decks prices, and a written estimate is the only project price. Pressure-treated wood usually costs less upfront than composite and is priced in the written estimate.
      </>
    ), link: '/composite-deck-cost-northern-virginia', linkText: 'Full pricing guide with tables →' },
    { id: 'materials', title: '2. Choosing the Right Material', content: (
      <>
        <a href="https://remodelcalculators.com/deck-cost" target="_blank" rel="noopener noreferrer" style={linkStyle}>RemodelCalculators</a> places Trex Enhance at $35–$60 per sq ft and Transcend at $45–$80 per sq ft (reviewed October 11, 2026). This page does not publish a TimberTech or AZEK price or warranty length. Manufacturer warranty sources are on the Trex vs TimberTech vs AZEK comparison linked below.
      </>
    ), link: '/trex-vs-timbertech-vs-azek', linkText: 'Trex vs TimberTech vs AZEK comparison →' },
    { id: 'composite-vs-wood', title: '3. Composite vs Wood', content: 'Pressure-treated wood needs periodic staining and sealing. Composite needs routine cleaning rather than staining. Lifespan and warranty depend on the product; see the manufacturer documents for the board you choose. Resale recovery is not a fixed percentage, and this page does not publish one for composite or for wood.', link: '/composite-deck-vs-wood-deck-virginia', linkText: 'Full composite vs wood comparison →' },
    { id: 'permits', title: '4. Permits in Northern Virginia', content: (
      <>
        Most decks attached to a house or over 30 inches above grade need a building permit. Review times vary by county and season; check the county&apos;s current guidance. Three inspections may be required: footings, framing, final. Use the footing calculator to understand basic frost-depth planning before permit review. Fees: Loudoun County lists $265 for its Typical Deck detail (2026; <a href="https://www.loudoun.gov/1166/Decks" target="_blank" rel="noopener noreferrer" style={linkStyle}>https://www.loudoun.gov/1166/Decks</a>); Fairfax County calculates fees in PLUS with a minimum base fee of $141.75 plus levy and surcharge (2026 fee schedule, <a href="https://www.fairfaxcounty.gov/landdevelopment/sites/landdevelopment/files/assets/documents/fee-schedule.pdf" target="_blank" rel="noopener noreferrer" style={linkStyle}>https://www.fairfaxcounty.gov/landdevelopment/sites/landdevelopment/files/assets/documents/fee-schedule.pdf</a>). See the <Link href="/composite-deck-cost-northern-virginia" style={linkStyle}>composite deck cost guide</Link> for permit fee detail. A quality builder should help you identify permit triggers, documentation needs, and inspection milestones before construction starts.
      </>
    ), link: '/tools/deck-footing-depth-calculator-virginia', linkText: 'Deck footing depth calculator →' },
    { id: 'hoa', title: '5. HOA Approval', content: 'Submit: site plan, materials list, color samples, railing details. HOA review time depends on the association\'s schedule. Common restrictions: material type, colors, railing profile, setbacks. We prepare HOA submissions around the community guidelines before they are filed.', link: '/hoa-deck-rules-northern-virginia', linkText: 'Complete HOA guide →' },
    { id: 'size', title: '6. What Size Deck to Build', content: 'Couples: 150–200 sqft. Families of 4: 300–400 sqft. Entertainers: 500+ sqft. Don\'t exceed 20–25% of your backyard area. Allow 12×12 ft minimum for a 6-person dining table with walking room.', link: '/what-size-deck-should-i-build', linkText: 'Deck size guide with tables →' },
    { id: 'timeline', title: '7. How Long Does It Take?', content: 'Construction time depends on size, footings, inspections, and weather. Permit and HOA review usually takes longer than the build itself. The written estimate states the schedule.', link: '/how-long-to-build-a-deck-northern-virginia', linkText: 'Full timeline breakdown →' },
    { id: 'best-time', title: '8. Best Time to Build', content: 'Spring and fall are popular build windows. Booking earlier gives more scheduling options. February–April is a common time to start planning. May–August is peak season. September–November is another popular window. Winter builds depend on weather and inspections.', link: '/best-time-to-build-a-deck-northern-virginia', linkText: 'Month-by-month building calendar →' },
    { id: 'railings', title: '9. Railing Options', content: 'Composite: most popular, low maintenance. Aluminum: clean modern look. Cable rail: best view, modern. Glass: premium, unobstructed. Check HOA guidelines; some restrict cable and glass railings.', link: '/deck-railing-options-northern-virginia', linkText: 'All railing options compared →' },
    { id: 'lighting', title: '10. Deck Lighting', content: 'Lighting is priced in the written estimate. Adding it during the initial build is usually simpler than retrofitting. Post cap lights and stair risers cover the basics. Under-rail LED strips are a common package. Recessed lights and smart controls are a premium option.', link: '/deck-lighting-ideas-northern-virginia', linkText: 'Lighting options and costs →' },
    { id: 'choose-builder', title: '11. Choosing a Contractor', content: '10 questions to ask: License? Insurance? Permits? HOA? Materials? References? Warranty? Estimate details? Timeline? Change orders? Red flags: no license, cash-only, no written warranty, suggests skipping permits, price far below others.', link: '/how-to-choose-a-deck-builder-northern-virginia', linkText: '10 questions + 5 red flags →' },
    { id: 'roi', title: '12. Does a Deck Add Value?', content: 'Resale recovery is not a fixed percentage, and this page does not publish one for a composite deck, a screened porch, or a wood deck.', link: '/does-a-deck-add-value-to-your-home', linkText: 'Full ROI data →' },
    { id: 'maintenance', title: '13. Maintenance', content: 'Composite needs routine cleaning, such as washing with soap and water. Wood needs periodic staining or sealing, sanding, and replacement of rotted boards. Virginia freeze-thaw weather and summer humidity make that upkeep more important for wood.', link: '/deck-maintenance-checklist-virginia', linkText: 'Seasonal maintenance checklist →' },
    { id: 'screened-porch', title: '14. Screened Porch Option', content: (
      <>
        Screened porch costs depend mostly on whether a sound roof already exists. Screening an existing roofed structure is about $5–$20 per square foot in HomeAdvisor’s screened-porch guide (updated June 17, 2026; <a href="https://www.homeadvisor.com/cost/outdoor-living/screened-in-porch/" target="_blank" rel="noopener noreferrer" style={linkStyle}>https://www.homeadvisor.com/cost/outdoor-living/screened-in-porch/</a>); new roofed porches are priced in the written estimate. EZE-Breeze windows convert to a 3-season room. Resale recovery is not a fixed percentage, and this page does not publish one. Many clients combine an open deck with a screened porch for the best of both worlds.
      </>
    ), link: '/screened-porch-cost-northern-virginia', linkText: 'Screened porch cost guide →' },
    { id: 'stairs-ledger', title: '15. Stairs, Ledgers, and Safety Details', content: 'The two details that most often decide whether a deck passes inspection are the stair system and the house attachment. Before drawings are finalized, model stair rise and run, confirm handrail and landing requirements, and inspect the ledger area for proper flashing, structural fasteners, and water-control details. Older attached decks should not be resurfaced until stairs, rails, ledgers, posts, beams, joists, and footings are checked as one load path.', link: '/education/deck-stair-code-rise-run-virginia', linkText: 'Virginia deck stair code guide →' },
    { id: 'financing', title: '16. Financing Options', content: 'Financing options may be available for eligible deck projects, subject to approval and provider terms. Start with a clear written scope, then ask about current options for new decks, resurfacing, repairs, and composite upgrades.', link: '/deck-financing', linkText: 'Deck financing options →' },
  ];

  // HowTo JSON-LD was removed 2026-05-27: Google deprecated HowTo rich
  // results in August 2023. The visible 15-section guide below remains;
  // each section has an `id` anchor (from `sections[].id`) enabling
  // AI deep-linking and direct user navigation. See vault Schema
  // Implementation Plan and the HowTo sentinel in
  // scripts/validate-seo-schema.mjs.
  return (
    <>
      <WebPageSchema dateModified="2026-10-25" url="https://ldndecks.com/northern-virginia-deck-building-guide" name="The Complete Guide to Building a Deck in Northern Virginia (2026)" description={PAGE_DESCRIPTION} speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img13.jpeg"
              alt="Professional deck construction in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>The Complete Guide to Building a Deck in Northern Virginia</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Everything you need to know costs, materials, permits, HOA, timeline, contractors, maintenance, and more</p>
          <p style={{ color: '#aaa', marginTop: '1rem', fontSize: '0.9rem' }}>By Loudoun Decks · Updated October 25, 2026 · 16 chapters</p>
        </div>
      </section>

      <nav style={{ background: '#f9f9f9', borderBottom: '1px solid #e5e5e5', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.9rem' }}>Table of Contents</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '0.25rem' }}>
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} style={{ fontSize: '0.85rem', color: 'var(--color-primary)', textDecoration: 'none', padding: '0.2rem 0' }}>{s.title}</a>
            ))}
          </div>
        </div>
      </nav>

      <article style={{ padding: '3rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} style={{ marginBottom: '3rem', paddingTop: '1rem' }}>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-dark)' }}>{s.title}</h2>
              <p style={{ lineHeight: 1.8, marginBottom: '1rem', fontSize: '1rem' }} {...(s.id === 'cost' ? { 'data-speakable': 'true' } : {})}>{s.content}</p>
              <Link href={s.link} style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.95rem' }}>{s.linkText}</Link>
              {i === 7 && (
                <div style={{ background: 'var(--color-primary)', color: '#fff', borderRadius: 8, padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Ready to Start Your Project?</h3>
                  <p style={{ marginBottom: '1rem', opacity: 0.9 }}>Free on-site consultation · Written estimate after the site visit · We handle permits &amp; HOA</p>
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <CallLink style={{ background: '#fff', color: 'var(--color-primary)', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
                    <Link href="/get-estimate" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
                  </div>
                </div>
              )}
            </section>
          ))}

          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '2rem', marginTop: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>About This Guide</h2>
            <p style={{ lineHeight: 1.7, marginBottom: '1rem' }}>This guide is written and maintained by <strong>Loudoun Decks</strong>, a Virginia Class A Licensed contractor and Trex product-line planner based in Centreville, VA. Our team plans and builds decks across Loudoun, Fairfax, and Prince William counties and maintains a public Google review profile that homeowners can verify directly on Google Maps.</p>
            <p style={{ lineHeight: 1.7 }}>Cost figures on this page are dated external benchmarks with sources linked; the written estimate is the only project price. Last reviewed October 25, 2026. Loudoun Decks was founded in 2022 by an owner with 15 years of deck-building experience, backed by a team with 40+ years of combined experience. Questions? <CallLink style={{ color: 'var(--color-primary)', fontWeight: 600 }}>(571) 655-7207</CallLink> or <Link href="/get-estimate" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>request a free consultation</Link>.</p>
          </div>
        </div>
      </article>
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            <li key="/deck-builder-northern-virginia" style={{ marginBottom: '0.5rem' }}><Link href="/deck-builder-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck Builder in Northern Virginia →</Link></li>
            <li key="/composite-deck-cost-northern-virginia" style={{ marginBottom: '0.5rem' }}><Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Composite Deck Cost in Northern Virginia →</Link></li>
            <li key="/how-to-choose-a-deck-builder-northern-virginia" style={{ marginBottom: '0.5rem' }}><Link href="/how-to-choose-a-deck-builder-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>How to Choose a Deck Builder →</Link></li>
            <li key="/deck-permit-loudoun-county-virginia" style={{ marginBottom: '0.5rem' }}><Link href="/deck-permit-loudoun-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun County Deck Permit Guide →</Link></li>
            <li key="/tools/deck-footing-depth-calculator-virginia" style={{ marginBottom: '0.5rem' }}><Link href="/tools/deck-footing-depth-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck Footing Depth Calculator Virginia →</Link></li>
            <li key="/tools/deck-stair-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/tools/deck-stair-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Virginia Deck Stair Calculator →</Link></li>
            <li key="/education/deck-stair-construction-diagram" style={{ marginBottom: '0.5rem' }}><Link href="/education/deck-stair-construction-diagram" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck Stair Construction Diagram →</Link></li>
            <li key="/education/ledger-board-flashing-deck-attachment-virginia" style={{ marginBottom: '0.5rem' }}><Link href="/education/ledger-board-flashing-deck-attachment-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Ledger Board Flashing Guide →</Link></li>
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (Google reviews) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
        </ul>
      </section>

      <SimpleCTA title="Build Your Dream Deck" buttonText="Get Free Estimate" link="/get-estimate" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-10-25" />

      <RelatedGuides currentPath="/northern-virginia-deck-building-guide" />

      <ContactHome />
    </>
  );
}
