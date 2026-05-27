import React from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ArticleSchema from '@/components/ArticleSchema';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import { buildMetadata } from '@/lib/seo';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/deck-permit-arlington-county-virginia',
  title: 'Arlington County Deck Permit Guide (2026) | Loudoun Decks',
  description: 'Complete 2026 Arlington County deck permit guide: CPHD process, Permit Arlington portal, setbacks, historic-district review (Lyon Park, Maywood, Westover), inspection contacts, and timeline. We handle every step.',
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do I need a permit to build a deck in Arlington County?", acceptedAnswer: { "@type": "Answer", text: "Yes. Any deck attached to your house, or any freestanding deck 30 inches or more above grade, requires an Arlington County building permit. Ground-level platforms under 30 inches with no attachment to the house may qualify for an exemption but still must respect zoning setbacks." } },
    { "@type": "Question", name: "How long does Arlington County deck permit review take?", acceptedAnswer: { "@type": "Answer", text: "Plan review averages 3-5 weeks via the Permit Arlington web portal — typically one week longer than Fairfax County. Historic district design review (Lyon Park National Historic District, Maywood, Westover) adds 2-4 weeks if your home is in a protected area." } },
    { "@type": "Question", name: "How much does an Arlington County deck permit cost?", acceptedAnswer: { "@type": "Answer", text: "Arlington County deck permit fees are calculated on construction valuation, typically $200-$700 for residential deck projects. Larger multi-level builds or projects with structural complexity may run higher. We include permit fees in every estimate." } },
    { "@type": "Question", name: "Where do I file an Arlington County deck permit?", acceptedAnswer: { "@type": "Answer", text: "Permit Arlington — the web portal operated by Arlington County CPHD (Department of Community Planning, Housing & Development). All residential building permits, including decks, file through this portal. Inspections coordinated through Arlington Inspection Services at 703-228-3800." } },
    { "@type": "Question", name: "Which Arlington neighborhoods require historic district review?", acceptedAnswer: { "@type": "Answer", text: "Lyon Park (a National Historic District with 1,165 contributing buildings) requires design review for any deck visible from the public right-of-way. Maywood and Westover have similar historic-overlay considerations. Lyon Village, while architecturally significant, does not require the same formal historic design review but its character influences material approval. Confirm your address against the Arlington historic district maps before designing." } },
    { "@type": "Question", name: "What documents does Arlington require for a deck permit?", acceptedAnswer: { "@type": "Answer", text: "Required submission package: (1) site plan with setbacks marked against your certified plat, (2) structural drawings showing footings, beams, joists, ledger attachment, railings, and stairs, (3) deck detail sheet, (4) homeowner authorization signed for the contractor to file, (5) if applicable, historic district design review submission. We prepare every document in-house." } },
    { "@type": "Question", name: "What inspections does Arlington County require for a deck?", acceptedAnswer: { "@type": "Answer", text: "Three required inspections: (1) footing inspection before concrete is poured, (2) framing inspection before decking is installed, (3) final inspection once the structure is complete with railings and stairs in place. All scheduled through Arlington Inspection Services at 703-228-3800. We coordinate every inspection." } },
    { "@type": "Question", name: "What are the deck setback rules in Arlington County?", acceptedAnswer: { "@type": "Answer", text: "Arlington setbacks vary by zoning district and lot size. For most R-zone parcels: 5-foot side setback minimum, 10-foot rear setback minimum. Decks may sometimes extend into setbacks within published limits per Arlington's residential setback documentation. Tighter setbacks than Fairfax County are common in Arlington's older neighborhoods. We verify on every project before designing." } },
    { "@type": "Question", name: "Can I attach a deck ledger to brick veneer in Arlington?", acceptedAnswer: { "@type": "Answer", text: "No. Virginia building code prohibits attaching a structural deck ledger directly to brick veneer or stone siding. The ledger must attach to the home's structural rim joist behind the veneer. Most Arlington homes (1920s-1940s construction in Lyon Park, Lyon Village, Cherrydale) have brick veneer fronts and require either a freestanding deck design or a ledger detail that penetrates to the rim joist with proper flashing." } },
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

export default function ArlingtonPermitPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/deck-permit-arlington-county-virginia" name="Arlington County Deck Permit Guide (2026) | Loudoun Decks" description="Complete 2026 Arlington County deck permit guide: CPHD process, Permit Arlington portal, setbacks, historic-district review, inspection contacts, and timeline." speakable />
      <ArticleSchema
        title="Arlington County Deck Permit Guide (2026)"
        description="The full 2026 Arlington County deck-permit process for homeowners and contractors: CPHD requirements, the Permit Arlington portal, setbacks, historic-district review (Lyon Park, Maywood, Westover), and the three required inspections."
        path="/deck-permit-arlington-county-virginia"
        image="/images/blog-permit-guide.png"
        datePublished="2026-05-27"
        dateModified="2026-05-27"
      />

      <section style={{ background: 'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(/images/blog-permit-guide.png)', backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff', padding: '8rem 0' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '-1px' }}>2026 Arlington Permit Guide</h1>
          <p style={{ color: '#fff', fontSize: '1.4rem', maxWidth: '800px', margin: '0 auto', fontWeight: 300, opacity: 0.9 }}>The complete CPHD + Permit Arlington walkthrough, with historic-district review for Lyon Park, Maywood, and Westover.</p>
        </div>
      </section>

      <section data-speakable="true" style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p><strong>Yes, you need a permit.</strong> Any deck attached to your house or any freestanding deck more than 30 inches above grade requires an Arlington County building permit, filed through the Permit Arlington portal operated by the Department of Community Planning, Housing &amp; Development (CPHD). Plan review takes <strong>3–5 weeks</strong>. Permit fees: <strong>$200–$700</strong>. Historic district homes in Lyon Park, Maywood, or Westover need <strong>additional design review</strong>. Inspections coordinated through <strong>703-228-3800</strong>. <strong>We handle every step.</strong> <CallLink style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Call (571) 655-7207</CallLink>.</p>
        </div>
      </section>

      <article style={{ padding: '5rem 0', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <ul style={S.list}>
            <li style={S.listItem}><strong>Project essentials:</strong> Most Arlington deck projects require zoning + structural review through CPHD; historic-district homes add design review.</li>
            <li style={S.listItem}><strong>Setbacks:</strong> Arlington setbacks are typically tighter than Fairfax County — verify on every project before designing.</li>
            <li style={S.listItem}><strong>Lyon Park is a National Historic District</strong> with 1,165 contributing buildings — visible exterior changes go through design review.</li>
            <li style={S.listItem}><strong>We file every package</strong> end to end: site plan, structural drawings, deck details, and (when applicable) historic design submission.</li>
          </ul>

          {/* ===== SECTION 1: When you need a permit ===== */}
          <h2 style={S.h2}>When does Arlington County require a deck permit?</h2>
          <p style={S.p}>Arlington County&apos;s residential building permit rules are straightforward in principle: any deck attached to your house, or any freestanding deck 30 inches or more above grade, requires a permit. The exemption for very small ground-level platforms under 30 inches and not attached to the house is narrow and does not waive the zoning-setback obligation — even an exempt platform must respect property-line setbacks.</p>
          <p style={S.p}>For comparison: Loudoun County&apos;s threshold is 200 sqft and 30 inches. Fairfax County uses 256 sqft and 16.5 inches above grade. Arlington&apos;s 30-inch height threshold is consistent with Loudoun but applies more strictly to any attached structure regardless of size. Read our <Link href="/deck-permit-loudoun-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun County permit guide</Link> or <Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Fairfax County permit guide</Link> for the side-by-side.</p>

          <div style={S.callout}>
            <p style={{ margin: 0, fontWeight: 600 }}>Important note:</p>
            <p style={{ margin: '0.5rem 0 0' }}>Insurance providers regularly deny injury or structural claims on unpermitted Arlington decks. Resale closings in Arlington — particularly in Lyon Park, Lyon Village, Cherrydale, and Donaldson Run — frequently catch unpermitted exterior work during the inspection contingency and force a permit retrofit (or demolition) before closing.</p>
          </div>

          {/* ===== SECTION 2: The Permit Arlington portal ===== */}
          <h2 style={S.h2}>How to file through the Permit Arlington portal</h2>
          <p style={S.p}>Arlington County administers all residential building permits through the <strong>Permit Arlington</strong> web portal, operated by the Department of Community Planning, Housing &amp; Development (CPHD). The portal accepts the full document package digitally; no in-person filing is required for standard residential deck projects.</p>

          <h3 style={S.h3}>The 5-step approval process</h3>
          <ol style={S.list}>
            <li id="how-to-step-1" style={S.listItem}><strong>Verify zoning + setbacks:</strong> Pull your certified plat. Mark the proposed deck&apos;s footprint and confirm it respects the side, rear, and (if applicable) corner-lot setbacks for your zoning district. Arlington setbacks are often tighter than other NoVA counties.</li>
            <li id="how-to-step-2" style={S.listItem}><strong>Confirm historic district status:</strong> If your home is in Lyon Park (National Historic District), Maywood, or Westover, your project requires Arlington Historic Preservation Program design review in addition to the building permit. Lyon Village homes need to demonstrate architectural compatibility but don&apos;t go through the same formal review.</li>
            <li id="how-to-step-3" style={S.listItem}><strong>Upload the document package:</strong> Site plan with setbacks, structural drawings (footings, beams, joists, ledger detail, railings, stairs), homeowner authorization, and historic design review submission if applicable.</li>
            <li id="how-to-step-4" style={S.listItem}><strong>Pay county review fees:</strong> Calculated on construction valuation, typically $200–$700 for residential deck projects.</li>
            <li id="how-to-step-5" style={S.listItem}><strong>Monitor the portal:</strong> Address any reviewer comments or revision requests within the 3–5 week review window. Historic-district projects add 2–4 weeks.</li>
          </ol>

          {/* ===== SECTION 3: Historic district considerations ===== */}
          <h2 style={S.h2}>Historic district design review — Lyon Park, Maywood, Westover</h2>
          <p style={S.p}>Arlington&apos;s historic preservation system protects specific neighborhoods where exterior changes to homes must demonstrate compatibility with the area&apos;s architectural character. The three most active historic-overlay areas for residential deck work:</p>
          <ul style={S.list}>
            <li style={S.listItem}><strong>Lyon Park</strong> is a National Historic District with 1,165 contributing buildings. The neighborhood is dominated by 1920s and 1930s Craftsman bungalows, American Foursquares, Colonial Revivals, Tudor Revivals, and Cape Cods. Decks visible from the public right-of-way require design review for materials, color, railing style, scale, and proportion relative to the original home.</li>
            <li style={S.listItem}><strong>Maywood Historic District</strong> contains early-20th-century residences with strong neighborhood architectural identity. Visible exterior changes follow the historic-overlay process similar to Lyon Park.</li>
            <li style={S.listItem}><strong>Westover Historic District</strong> covers 1930s and 1940s housing stock; historic design review applies to street-facing modifications.</li>
          </ul>
          <p style={S.p}>Our standard Lyon Park / Maywood / Westover design playbook: warm-tone composites that read as period-appropriate (Trex Transcend Tiki Torch, Spiced Rum, Havana Gold), classic balustrade or aluminum-traditional railings rather than cable or glass, deck proportions matched to the home&apos;s original footprint, and visible material samples in every submission. Designed correctly, historic review clears in 3–4 weeks. Designed without that discipline, projects spin in revision cycles for 8–12 weeks and sometimes require full redraws.</p>

          {/* ===== SECTION 4: Setbacks ===== */}
          <h2 style={S.h2}>Arlington deck setback rules</h2>
          <p style={S.p}>Arlington&apos;s residential setback rules vary by zoning district and lot size. The most common R-zone parcels (R-5, R-6, R-8, R-10) carry these typical minimums:</p>
          <div style={{ overflowX: 'auto', marginBottom: '3rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={S.th}>Setback type</th>
                  <th style={S.th}>R-5 / R-6 typical minimum</th>
                  <th style={S.th}>R-8 / R-10 typical minimum</th>
                  <th style={S.th}>Deck-specific extension into setback</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={S.td}>Side setback</td>
                  <td style={S.td}>5 ft (one side often 8 ft)</td>
                  <td style={S.td}>8 ft</td>
                  <td style={S.td}>Up to 4 ft for unenclosed deck per Arlington setback documentation</td>
                </tr>
                <tr style={{ background: '#f9f9f9' }}>
                  <td style={S.td}>Rear setback</td>
                  <td style={S.td}>25 ft</td>
                  <td style={S.td}>25 ft</td>
                  <td style={S.td}>Decks may extend per published limits — verify per parcel</td>
                </tr>
                <tr>
                  <td style={S.td}>Front setback</td>
                  <td style={S.td}>25 ft</td>
                  <td style={S.td}>25 ft</td>
                  <td style={S.td}>Decks at street-facing front rarely permitted in residential zones</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={S.p}>Corner lots, irregular parcels, and lots in historic districts may have different requirements. We pull the official setback sheet for your specific parcel and zoning district on every Arlington project before designing.</p>

          {/* ===== SECTION 5: Inspections ===== */}
          <h2 style={S.h2}>Required Arlington County inspections</h2>
          <p style={S.p}>Every Arlington deck project goes through three required inspections, all scheduled through <strong>Arlington Inspection Services at 703-228-3800</strong>:</p>
          <ol style={S.list}>
            <li style={S.listItem}><strong>Footing inspection</strong> — performed after the footings are excavated but before concrete is poured. Inspector verifies depth (frost line minimum 24 inches), diameter, and reinforcement.</li>
            <li style={S.listItem}><strong>Framing inspection</strong> — performed after the ledger, joists, beams, and posts are installed but before decking is laid down. Inspector verifies ledger flashing, lag-bolt patterns, joist hangers, and stair stringers.</li>
            <li style={S.listItem}><strong>Final inspection</strong> — performed when the deck is complete with railings, stairs, and lighting installed. Inspector verifies guardrail height (36 inches minimum for platforms over 30 inches), stair riser/tread geometry, and overall code compliance.</li>
          </ol>
          <p style={S.p}>We coordinate every inspection and meet the inspector on site. The owner never has to take time off work to be present.</p>

          {/* ===== SECTION 6: Ledger + structural ===== */}
          <h2 style={S.h2}>Structural ledger + moisture management in Arlington</h2>
          <p style={S.p}>Arlington&apos;s pre-1940 housing stock — predominantly in Lyon Park, Lyon Village, and Cherrydale — frequently has brick veneer or stone exterior with a wood-frame structural rim joist underneath. Virginia building code prohibits attaching a structural deck ledger directly to brick veneer or stone siding; the ledger must penetrate to the structural rim joist with proper flashing.</p>
          <ul style={S.list}>
            <li style={S.listItem}>Install Z-flashing behind the exterior weather barrier.</li>
            <li style={S.listItem}>Use 1/2-inch hot-dipped galvanized through-bolts (not lag screws) into the rim joist on staggered centers per Virginia Residential Code (VRC).</li>
            <li style={S.listItem}>Ensure solid wood blocking inside the house structure backing the ledger.</li>
            <li style={S.listItem}>Self-adhered membrane over the top edge of the ledger and behind the siding return.</li>
            <li style={S.listItem}>For brick-veneer homes: consider a freestanding deck design that eliminates the ledger entirely. Often the right call in Lyon Park 1920s bungalows.</li>
          </ul>

          {/* ===== SECTION 7: Stair + railing codes ===== */}
          <h2 style={S.h2}>Stair and railing code requirements</h2>
          <p style={S.p}>Virginia&apos;s Uniform Statewide Building Code (USBC) applies to Arlington along with Arlington-specific zoning overlays. Key residential deck stair/railing requirements:</p>
          <ul style={S.list}>
            <li style={S.listItem}><strong>Guardrail height:</strong> minimum 36 inches for platforms over 30 inches above grade.</li>
            <li style={S.listItem}><strong>Stair riser:</strong> maximum 8 1/4 inches.</li>
            <li style={S.listItem}><strong>Stair tread depth:</strong> minimum 9 inches.</li>
            <li style={S.listItem}><strong>Baluster spacing:</strong> spheres greater than 4 inches must not pass through (4-inch sphere rule).</li>
            <li style={S.listItem}><strong>Concentrated load test:</strong> guardrails must withstand a 200-pound concentrated load at any single point.</li>
            <li style={S.listItem}><strong>Stair handrail:</strong> required for stairs with 4 or more risers; grip diameter and clearance per VRC R311.</li>
          </ul>
          <p style={S.p}>For the full stair-design walkthrough, use our <Link href="/tools/deck-stair-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck stair calculator</Link> or read our <Link href="/education/deck-stair-code-rise-run-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Virginia deck stair code reference</Link>.</p>

          {/* ===== SECTION 8: Why we handle the entire permit ===== */}
          <div style={{ background: 'var(--color-dark)', color: '#fff', borderRadius: '16px', padding: '3.5rem', textAlign: 'center', marginTop: '4rem' }}>
            <h3 style={{ color: '#fff', fontSize: '2rem', marginTop: 0, marginBottom: '1rem' }}>We file every Arlington permit</h3>
            <p style={{ color: '#ccc', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>From the zoning verification through historic design review (when applicable), document upload, fee payment, all three inspections, and the final certificate. You never log into Permit Arlington.</p>
            <Link href="/contact" style={{ background: 'var(--color-primary)', color: '#fff', padding: '1.25rem 3rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 800, display: 'inline-block', fontSize: '1.1rem' }}>Get a free Arlington estimate</Link>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '3rem 0 1rem' }}>Related Arlington resources</h2>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.8 }}>
            <li>→ <Link href="/deck-builder-arlington-va" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Arlington deck builder services + neighborhoods we serve</Link></li>
            <li>→ <Link href="/near-you/arlington-county" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Arlington County overview</Link></li>
            <li>→ <Link href="/hoa-deck-rules-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Northern Virginia HOA deck rules</Link></li>
            <li>→ <Link href="/deck-permit-loudoun-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun County permit guide</Link></li>
            <li>→ <Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Fairfax County permit guide</Link></li>
            <li>→ <Link href="/deck-permit-prince-william-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Prince William County permit guide</Link></li>
          </ul>

        </div>
      </article>

      <SimpleCTA title="Arlington deck project ahead? Skip the permit headache." buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-permit-arlington-county-virginia" />
      <NamedAuthor context="Arlington and Northern Virginia" lastUpdated="2026-05-27" />
      <ContactHome />
    </>
  );
}
