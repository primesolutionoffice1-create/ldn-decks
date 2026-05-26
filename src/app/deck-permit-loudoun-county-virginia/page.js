import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ArticleSchema from '@/components/ArticleSchema';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/deck-permit-loudoun-county-virginia',
  title: 'Loudoun County Deck Permit Guide (2026) | Loudoun Decks',
  description: 'Everything you need to know about Loudoun County deck permits, setbacks, and HOA approvals. Fast-track your deck build with our guaranteed permit process.',
  image: '/images/blog-permit-guide.png',
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What size deck can you build without a permit in Virginia?", acceptedAnswer: { "@type": "Answer", text: "You can build without a permit only if the deck is less than 200 square feet, not more than 30 inches above grade, freestanding, and does not serve a required exit door. Attached decks require a permit regardless of size." } },
    { "@type": "Question", name: "How deep do deck footings need to be in Loudoun County?", acceptedAnswer: { "@type": "Answer", text: "Deck footings must be a minimum of 24 inches deep to reach below the frost line and prevent seasonal shifting or frost heave." } },
    { "@type": "Question", name: "Do I need 2x8 or 2x10 joists for my deck?", acceptedAnswer: { "@type": "Answer", text: "It depends on the span. 2x8s typically support up to 10 feet, while 2x10s safely cover 12 to 14 feet. We recommend 12-inch spacing for heavy composite decking like Trex." } },
    { "@type": "Question", name: "Can I attach a deck ledger to brick veneer?", acceptedAnswer: { "@type": "Answer", text: "No. Virginia building code prohibits attaching a ledger board directly to brick veneer or stone siding. It must be attached to the structural rim joist of the house." } },
  ],
};

const S = {
  h2: { fontSize: '2.2rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--color-dark)', borderLeft: '5px solid var(--color-primary)', paddingLeft: '1rem' },
  h3: { fontSize: '1.6rem', fontWeight: 700, margin: '2.5rem 0 1.25rem', color: 'var(--color-primary)' },
  p: { marginBottom: '1.25rem', lineHeight: 1.8, color: '#333', fontSize: '1.05rem' },
  list: { paddingLeft: '1.5rem', marginBottom: '2rem' },
  listItem: { marginBottom: '0.75rem', lineHeight: 1.7 },
  th: { padding: '1.2rem', textAlign: 'left', borderBottom: '3px solid var(--color-primary)', background: '#fcfcfc', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase' },
  td: { padding: '1.2rem', borderBottom: '1px solid #eee', fontSize: '0.95rem' },
  callout: { background: '#f0f7ff', borderLeft: '4px solid #0070f3', padding: '1.5rem', borderRadius: '0 8px 8px 0', margin: '2rem 0' },
};

export default function LoudounPermitPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ArticleSchema
        title="Virginia Deck Building Code: 2026 Loudoun Permit Guide"
        description="Granular technical guide for 2026 Loudoun County deck permits. Footing depths, joist spans, ledger flashing, and LandMARC portal walkthrough."
        path="/deck-permit-loudoun-county-virginia"
        image="/images/blog-permit-guide.png"
        datePublished="2026-04-21"
        dateModified="2026-05-13"
      />

      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(/images/blog-permit-guide.png)', backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff', padding: '8rem 0' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '-1px' }}>2026 Loudoun Permit Guide</h1>
          <p style={{ color: '#fff', fontSize: '1.4rem', maxWidth: '800px', margin: '0 auto', fontWeight: 300, opacity: 0.9 }}>Technical compliance for Virginia residential deck construction. From LandMARC portals to structural load paths.</p>
        </div>
      </section>

      {/* Quick Answer */}
      <section data-speakable="true" style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p><strong>Yes, you need a permit.</strong> Any deck attached to your house, over 256 sqft, or more than 16.5&quot; above grade requires a Loudoun County building permit. Plan review takes <strong>2–4 weeks</strong> via the LOLA portal. Permit costs <strong>$150–$500</strong>. <strong>We handle the entire process</strong> plans, submission, and inspections. <CallLink style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Call (571) 655-7207</CallLink>.</p>
        </div>
      </section>

      <article style={{ padding: '5rem 0', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <ul style={S.list}>
            <li style={S.listItem}><strong>Project Essentials:</strong> Most projects require zoning, HOA, and structural building approvals.</li>
            <li style={S.listItem}>The new digital <strong>LandMARC system</strong> demands specific PDF plan formats.</li>
            <li style={S.listItem}>Unpermitted work voids warranties and disrupts property sales.</li>
            <li style={S.listItem}>We guarantee full code compliance and approval for our clients.</li>
          </ul>

          {/* ===== SECTION 1: Exemptions ===== */}
          <h2 style={S.h2}>What size deck can you build without a permit in Virginia?</h2>
          <p style={S.p}>In Virginia, you can build a deck without a permit <strong>only</strong> if it is less than 200 square feet, not more than 30 inches above grade, freestanding, and does not serve a required exit door. This Virginia building permit requirements exemption applies strictly to small detached platforms. Failing to secure necessary permits for larger attached structures triggers massive liabilities. For the full homeowner version, read <Link href="/blog/do-i-need-a-permit-for-a-deck-loudoun" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>do I need a building permit for a deck in Virginia?</Link></p>

          <div style={S.callout}>
            <p style={{ margin: 0, fontWeight: 600 }}>Important Note:</p>
            <p style={{ margin: '0.5rem 0 0' }}>According to the Virginia Uniform Statewide Building Code (USBC), <strong>any attached structure requires an inspection regardless of size</strong>. Freestanding platforms must still comply with local zoning setbacks even if exempt from building permits.</p>
          </div>

          <ul style={S.list}>
            <li style={S.listItem}>Insurance providers frequently deny injury or structural claims on unpermitted decks; our guide to <Link href="/blog/deck-without-permit-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>building a deck without a permit</Link> explains the resale and enforcement risks.</li>
            <li style={S.listItem}>Unpermitted additions severely complicate home sales and often require demolition before closing.</li>
            <li style={S.listItem}>Code enforcement officers issue costly stop-work orders and significant daily fines.</li>
          </ul>

          {/* ===== SECTION 2: LandMARC Portal ===== */}
          <h2 style={S.h2}>How do I complete a LandMARC deck permit application?</h2>
          <p style={S.p}>The LandMARC deck permit application requires homeowners to digitally upload PDF architectural plans, a plat map showing Loudoun County setback requirements, and specific structural details directly to the county portal. The Loudoun county permit dashboard tracks progress, but any missing HOA clearance or incorrectly formatted document stalls the review indefinitely.</p>

          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', margin: '3rem 0', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
            <Image
              src="/images/permit-portal.png"
              alt="Loudoun County LandMARC digital permit portal interface"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>

          <p style={S.p}>While many recommend DIY permitting to save money, there is a strong case for professional management when facing multi-departmental reviews. Handling <Link href="/hoa-deck-rules-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun County HOA Deck Rules</Link> alone often results in mismatched specifications between the architectural review board and county engineers.</p>

          <h3 style={S.h3}>The 5-Step Approval Process:</h3>
          <ol style={S.list}>
            <li style={S.listItem}><strong>Obtain zoning clearance:</strong> Mark exact setbacks on your certified property plat.</li>
            <li style={S.listItem}><strong>Secure written HOA approval:</strong> Use material samples and preliminary renderings.</li>
            <li style={S.listItem}><strong>Upload engineered drawings:</strong> Include load paths, stair geometry, ledger attachment, flashing, and other structural details. If you want to understand the house connection before permit review, read our <Link href="/education/ledger-board-flashing-deck-attachment-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>ledger board flashing guide</Link>; for stair dimensions, use the <Link href="/education/deck-stair-code-rise-run-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Virginia deck stair code guide</Link>.</li>
            <li style={S.listItem}><strong>Pay county review fees:</strong> Calculated based on construction valuation.</li>
            <li style={S.listItem}><strong>Monitor dashboard:</strong> Address reviewer comments or required corrections immediately.</li>
          </ol>

          {/* ===== SECTION 3: Footings ===== */}
          <h2 style={S.h2}>How deep do deck footings need to be in Virginia?</h2>
          <p style={S.p}>Deck footings in Virginia must be a minimum of <strong>24 inches deep</strong> to reach below the frost line and prevent seasonal shifting. This standard ensures that frost heave cannot lift or destabilize the structural support columns. To meet VRC 2021 standards, hole diameter increases based on the load and soil bearing capacity. We cover the inspection failures and heavy-load exceptions in our guide to <Link href="/blog/deck-footing-depth-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>how deep deck footings need to be in Virginia</Link>.</p>

          <div style={{ overflowX: 'auto', marginBottom: '3rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={S.th}>Tributary Load Area</th>
                  <th style={S.th}>Soil Bearing Capacity</th>
                  <th style={S.th}>Required Footing Diameter</th>
                  <th style={S.th}>Minimum Depth</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={S.td}>20 sq. ft.</td>
                  <td style={S.td}>1,500 psf</td>
                  <td style={S.td}>16 inches</td>
                  <td style={S.td}>24 inches</td>
                </tr>
                <tr style={{ background: '#f9f9f9' }}>
                  <td style={S.td}>40 sq. ft.</td>
                  <td style={S.td}>1,500 psf</td>
                  <td style={S.td}>20 inches</td>
                  <td style={S.td}>24 inches</td>
                </tr>
                <tr>
                  <td style={S.td}>60 sq. ft.</td>
                  <td style={S.td}>1,500 psf</td>
                  <td style={S.td}>24 inches</td>
                  <td style={S.td}>24 inches</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ===== SECTION 4: Joist Spans ===== */}
          <h2 style={S.h2}>Do I need 2x8 or 2x10 joists for my deck?</h2>
          <p style={S.p}>The choice between 2x8 and 2x10 joists depends on your clear span; 2x8s typically support spans up to 10 feet, while 2x10s safely cover 12 to 14 feet. We specify premium framing for heavy composite decking like Trex and TimberTech, which often require <strong>12-inch on-center spacing</strong> rather than the standard 16-inch spacing to prevent structural deflection. For a plain-English span breakdown, see <Link href="/blog/2x8-vs-2x10-deck-joists" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>2x8 vs 2x10 deck joists</Link>.</p>
          <p style={S.p}>Stairs are reviewed as part of the full structural system, especially on elevated decks. Our <Link href="/education/deck-stair-construction-diagram" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck stair construction diagram</Link> shows how treads, risers, stringers, hangers, and landings fit together before the framing inspection, while the <Link href="/education/deck-stair-code-rise-run-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>stair code guide</Link> covers rise, run, handrail, guard, and landing requirements.</p>

          <div style={{ overflowX: 'auto', marginBottom: '3rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={S.th}>Joist Size (Southern Pine)</th>
                  <th style={S.th}>Spacing (On-Center)</th>
                  <th style={S.th}>Maximum Allowable Span</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={S.td}>2x8</td>
                  <td style={S.td}>16 inches</td>
                  <td style={S.td}>10 feet, 6 inches</td>
                </tr>
                <tr style={{ background: '#f9f9f9' }}>
                  <td style={S.td}>2x8</td>
                  <td style={S.td}>12 inches</td>
                  <td style={S.td}>11 feet, 4 inches</td>
                </tr>
                <tr>
                  <td style={S.td}>2x10</td>
                  <td style={S.td}>16 inches</td>
                  <td style={S.td}>13 feet, 4 inches</td>
                </tr>
                <tr style={{ background: '#f9f9f9' }}>
                  <td style={S.td}>2x10</td>
                  <td style={S.td}>12 inches</td>
                  <td style={S.td}>14 feet, 6 inches</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', margin: '3rem 0' }}>
            <Image
              src="/images/deck-inspection.png"
              alt="Professional Loudoun County building inspector checking deck joists and structural hangers"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>

          {/* ===== SECTION 5: Ledger & Safety ===== */}
          <h2 style={S.h2}>Structural Ledger & Moisture Management</h2>
          <p style={S.p}>The biggest pitfall with ledger installation is improper moisture management. As of 2026, stringent flashing rules mandate continuous layers to prevent water intrusion and dry rot. <strong>You cannot attach a ledger board directly to brick veneer or stone siding.</strong></p>
          
          <ul style={S.list}>
            <li style={S.listItem}>Install Z-flashing behind the exterior weather barrier.</li>
            <li style={S.listItem}>Stagger 1/2-inch hot-dipped galvanized bolts according to joist span length.</li>
            <li style={S.listItem}>Ensure solid wood blocking inside the house structure.</li>
            <li style={S.listItem}>Never use standard wood screws for structural ledger attachment.</li>
          </ul>

          <h2 style={S.h2}>Stair and Railing Height Codes</h2>
          <p style={S.p}>Virginia code requires guardrails to be at least <strong>36 inches high</strong> for platforms over 30 inches above grade. Stairs require an <strong>8 1/4-inch maximum riser</strong> and <strong>9-inch minimum tread</strong>. Ensuring code compliance prevents falls and guarantees that rails can withstand a 200-pound concentrated load.</p>

          <div style={{ background: 'var(--color-dark)', color: '#fff', borderRadius: '16px', padding: '3.5rem', textAlign: 'center', marginTop: '4rem' }}>
            <h3 style={{ color: '#fff', fontSize: '2rem', marginTop: 0, marginBottom: '1rem' }}>We Guarantee Full Approval</h3>
            <p style={{ color: '#ccc', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>Navigating LandMARC and Virginia USBC shouldn&apos;t be your full-time job. We handle every drawing, submission, and inspection.</p>
            <Link href="/contact" style={{ background: 'var(--color-primary)', color: '#fff', padding: '1.25rem 3rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 800, display: 'inline-block', fontSize: '1.1rem', transition: 'transform 0.2s' }}>Request Your Technical Consultation</Link>
          </div>

        </div>
      </article>

      <SimpleCTA title="Ready for a Code-Compliant Deck?" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-permit-loudoun-county-virginia" />
      <ContactHome />
    </>
  );
}
