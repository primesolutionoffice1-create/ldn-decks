import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ArticleSchema from '@/components/ArticleSchema';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/deck-warranty-guide-northern-virginia',
  title: 'Deck Warranty Guide | What\'s Covered in Northern Virginia',
  description: 'Trex product warranties by collection, and the separate TrexPro labor warranty. Loudoun Decks does not state a TrexPro level.',
  image: '/social/deck-warranty-guide-northern-virginia-social.png',
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How long is the Trex decking warranty?", acceptedAnswer: { "@type": "Answer", text: "Trex's Decking, Fascia and Cladding Limited Warranty, checked October 18, 2026, lists residential terms by collection: Enhance decking and fascia 25 years, Select decking and fascia 35 years, and Transcend and Signature decking and fascia 50 years. Lineage is not named in that table. Fade and stain coverage has conditions, including Delta E limits and cleaning deadlines. Confirm the collection on the current Trex warranty." } },
    { "@type": "Question", name: "What voids a composite deck warranty?", acceptedAnswer: { "@type": "Answer", text: "Common warranty-voiding actions include improper installation (wrong joist spacing, no gapping), using non-approved fasteners, lack of building permits, improper cleaning with harsh chemicals or pressure washers above 3100 PSI, and failure to maintain adequate ventilation beneath the deck surface." } },
    { "@type": "Question", name: "Does a deck warranty cover labor costs?", acceptedAnswer: { "@type": "Answer", text: "The Trex decking limited warranty's stated remedy is replacement of affected material or a refund of the product purchase price, not installation labor. A separate TrexPro Residential Limited Labor Warranty can cover reasonable labor only when a TrexPro contractor installs eligible products on an individual residence and the warranties are registered. The term depends on contractor level, decking line, and whether decking, railing, and Trex fasteners are installed. Loudoun Decks does not state a TrexPro level, so that labor warranty is not part of the firm's offer." } },
    { "@type": "Question", name: "Is a deck warranty transferable when I sell my home?", acceptedAnswer: { "@type": "Answer", text: "The current Trex decking limited warranty and the TrexPro residential labor warranty each say a residential warranty may be transferred one time within five years of the original purchase. That is a Trex condition, not a Loudoun Decks benefit. Confirm TimberTech or AZEK transfer rules in the current manufacturer warranty for the installed collection." } },
    { "@type": "Question", name: "What does a workmanship warranty cover on a deck?", acceptedAnswer: { "@type": "Answer", text: "A workmanship warranty covers defects in the installation itself — things like improper ledger board attachment, inadequate flashing, incorrect joist spacing, loose railings, or structural settling. The exact term, scope, exclusions, and remedy should be stated in the signed project paperwork." } },
    { "@type": "Question", name: "How do I file a warranty claim on my Trex deck?", acceptedAnswer: { "@type": "Answer", text: "Contact Trex directly at 1-800-289-8739 or file online at trex.com/warranty. You will need your proof of purchase, installation date, photos of the issue, and your installer's information. If your deck was built by a contractor listed in Trex programs, verify current claim steps and documentation requirements directly with Trex." } },
  ],
};

const S = {
  h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' },
  h3: { fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' },
  p: { marginBottom: '1rem', lineHeight: 1.7 },
  th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' },
  td: { padding: '0.75rem', borderBottom: '1px solid #eee' },
};

export default function DeckWarrantyGuidePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema dateModified="2026-10-18" url="https://ldndecks.com/deck-warranty-guide-northern-virginia" name="Deck Warranty Guide | What\" description="Trex product warranties by collection, and the separate TrexPro labor warranty. Loudoun Decks does not state a TrexPro level." speakable />
      <ArticleSchema
        title="Deck Warranty Guide: What's Covered in Northern Virginia"
        description="Trex product warranty terms by collection, the separate TrexPro labor warranty, and why written workmanship terms are a different document."
        path="/deck-warranty-guide-northern-virginia"
        image="/images/img36.jpeg"
        datePublished="2026-04-26"
        dateModified="2026-10-18"
      />

      {/* Hero */}
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Deck Warranty Guide for Northern Virginia Homeowners (2026)</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Manufacturer warranties, written workmanship terms, and what actually protects your investment</p>
        </div>
      </section>

      {/* Quick Answer */}
      <section data-speakable="true" style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p>Trex&apos;s current decking limited warranty lists residential terms by collection, including 25 years for Enhance, 35 years for Select, and 50 years for Transcend and Signature. That product warranty is not a labor warranty. A separate TrexPro® Residential Limited Labor Warranty can apply only when a TrexPro contractor installs eligible products and registers the warranties. Loudoun Decks does not state a TrexPro level on this page, so that labor coverage is not part of the firm&apos;s offer. <CallLink style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Call (571) 655-7207</CallLink> to discuss the written workmanship terms in a project agreement.</p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          {/* Hero Image */}
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img36.jpeg"
              alt="Beautiful composite deck in Northern Virginia protected by manufacturer and workmanship warranties"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>

          {/* ===== SECTION 1: Why Warranties Matter ===== */}
          <p style={S.p}>A new deck is a large project, and Loudoun Decks does not publish a fixed price for it. Warranty coverage still matters: homeowners should know what the product warranty covers, what a separate installer-program labor warranty requires, and what the signed workmanship terms say.</p>
          <p style={S.p}>This guide breaks down every warranty layer that protects (or fails to protect) your deck: manufacturer product warranties, written installer workmanship terms, and the critical role that installer certification can play in keeping your coverage intact. We&apos;ll also cover how to file a claim, the difference between warranty and insurance, and the specific warranty pitfalls we see most often in Loudoun, Fairfax, and Prince William counties.</p>
          <p style={S.p}>Whether you&apos;re comparing quotes, evaluating contractors, or dealing with a deck issue years after installation, this guide gives you the knowledge to protect your investment.</p>

          {/* ===== SECTION 2: Manufacturer Warranty Comparison ===== */}
          <h2 style={S.h2}>Trex Product Warranty by Collection</h2>
          <p style={S.p}>These residential terms come from Trex&apos;s Decking, Fascia &amp; Cladding Limited Warranty, linked from <a href="https://www.trex.com/customer-support/trex-owners/warranty/" style={{ color: 'var(--color-primary)' }}>trex.com/customer-support/trex-owners/warranty</a> and read on October 18, 2026. They are product terms. They do not include installation labor, and they are not a Loudoun Decks warranty.</p>

          <div style={{ overflowX: 'auto', marginBottom: '1rem' }} tabIndex={0} role="region" aria-label="Trex product warranty by collection">
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  {['Collection named by Trex', 'Residential product term', 'Fade and stain', 'Physical integrity', 'Residential transfer', 'Labor in this warranty'].map(h => <th key={h} style={S.th}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Trex Enhance decking and fascia', '25 years', 'Conditional', 'Yes, with exclusions', 'One time, within 5 years', 'No'],
                  ['Trex Select decking and fascia', '35 years', 'Conditional', 'Yes, with exclusions', 'One time, within 5 years', 'No'],
                  ['Trex Transcend and Signature decking and fascia', '50 years', 'Conditional', 'Yes, with exclusions', 'One time, within 5 years', 'No'],
                  ['Trex Refuge decking', '50 years', 'Conditional', 'Yes, with exclusions', 'One time, within 5 years', 'No'],
                  ['TimberTech or AZEK collection', 'See the current TimberTech/AZEK warranty', 'See that warranty', 'See that warranty', 'See that warranty', 'Not a Trex product term'],
                  ['Fiberon collection', 'See the current Fiberon warranty', 'See that warranty', 'See that warranty', 'See that warranty', 'Not a Trex product term'],
                  ['Pressure-treated wood, cedar, or redwood', 'No composite product warranty', 'No', 'No manufacturer deck-board warranty', 'N/A', 'N/A'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ ...S.p, fontSize: '0.85rem', color: '#555' }}>Lineage is not named in the Trex table checked on October 18, 2026. Fade resistance in that warranty is limited to stated Delta E changes, and stain resistance depends on cleaning within one week. Commercial terms are shorter. Source: <a href="https://online.flippingbook.com/view/861215527/" style={{ color: 'var(--color-primary)' }}>Trex Decking, Fascia &amp; Cladding Limited Warranty</a>.</p>

          {/* ===== SECTION 3: What Each Warranty Covers ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>What Each Warranty Type Actually Covers</h2>
          <p style={S.p}>Deck warranties aren&apos;t one-size-fits-all. Understanding the different coverage categories prevents surprises when you need to make a claim.</p>

          <h3 style={S.h3}>Fade Resistance Warranty</h3>
          <p style={S.p}>The current Trex decking warranty measures fade in Delta E units: no more than 5 Delta E for 25 years from purchase, and no more than 15 Delta E for the rest of the warranty period when that period is longer. Trex also says no material is fade-proof. That limit is not a separate 50-year promise for a collection named Lineage.</p>

          <h3 style={S.h3}>Stain Resistance Warranty</h3>
          <p style={S.p}>Covers resistance to food, grease, and mold staining under normal residential use. This doesn&apos;t mean stains never occur &mdash; it means they should clean off with standard composite deck cleaner. Persistent staining that doesn&apos;t respond to approved cleaning methods is a valid warranty claim.</p>

          <h3 style={S.h3}>Structural Warranty</h3>
          <p style={S.p}>Covers the decking board&apos;s structural integrity &mdash; cracking, splitting, splintering, rotting, or termite damage. This is the most straightforward coverage: if a board physically fails under normal use, the manufacturer replaces it. Note that structural failure caused by improper installation (wrong joist spacing, no end support) is typically excluded.</p>

          <h3 style={S.h3}>Workmanship Warranty (Installer)</h3>
          <p style={S.p}>This is separate from the manufacturer warranty and comes from your contractor. It can cover defects in the installation itself &mdash; improper ledger attachment, flashing failures, inadequate drainage, loose railings, joist spacing errors, and structural settling. The exact term, scope, exclusions, and remedy should be written into the project paperwork instead of summarized verbally.</p>

          {/* ===== SECTION 4: What Voids a Warranty ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>What Voids a Deck Warranty</h2>
          <p style={S.p}>This is where most homeowners get burned. Manufacturer warranties have specific conditions that, if violated, void the entire warranty. We see these violations regularly on decks built by unlicensed contractors:</p>

          <h3 style={S.h3}>1. Improper Installation</h3>
          <p style={S.p}>The number-one warranty voider. If joist spacing exceeds 16&rdquo; on center (12&rdquo; for diagonal installations), if end boards lack support within 1&rdquo; of the end, or if gapping specifications aren&apos;t met, the warranty is void. Trex requires specific gapping (3/16&rdquo; side-to-side, 1/8&rdquo; end-to-end at 60&deg;F) that expands or contracts based on installation temperature. Getting this wrong is the most common mistake we see from inexperienced installers.</p>

          <h3 style={S.h3}>2. No Building Permit</h3>
          <p style={S.p}>Trex and TimberTech both require that decks be built in compliance with local building codes. In Loudoun, Fairfax, and Prince William counties, that means a valid building permit. If your deck was built without a permit, you have a potential warranty exposure &mdash; and a code compliance issue. See our <Link href="/deck-permit-loudoun-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun County permit guide</Link> for the full process.</p>

          <h3 style={S.h3}>3. Wrong Fasteners</h3>
          <p style={S.p}>Each manufacturer specifies approved fastener systems. Trex recommends their proprietary hidden fastener clips or approved face screws. Using drywall screws, nails, or incompatible fastener brands can void coverage. We use exclusively manufacturer-approved fastener systems on every project.</p>

          <h3 style={S.h3}>4. Improper Cleaning Methods</h3>
          <p style={S.p}>Pressure washing above 3,100 PSI, using chlorine bleach, or applying unapproved chemical cleaners can damage the protective shell and void the stain/fade warranty. Trex recommends a maximum of 3,100 PSI at a 60-degree fan tip held 8+ inches from the surface. We recommend an even gentler approach: soft bristle brush with Trex-approved cleaner twice per year.</p>

          <h3 style={S.h3}>5. Inadequate Ventilation</h3>
          <p style={S.p}>Composite boards need airflow underneath to prevent moisture buildup. If your deck is too close to grade (under 6 inches of clearance for most brands), or if the underside is sealed without proper ventilation, moisture-related issues may not be covered. This is especially relevant in Northern Virginia&apos;s humid summers.</p>

          <h3 style={S.h3}>6. Unauthorized Modifications</h3>
          <p style={S.p}>Painting, staining, or coating composite decking voids the warranty. The surface shell is engineered to resist UV and moisture &mdash; adding a topcoat interferes with that system. We occasionally see homeowners paint their composite deck to change the color, not realizing they&apos;ve voided 25+ years of coverage.</p>

          {/* ===== SECTION 5: Why Installer Certification Matters ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>TrexPro Labor Warranty Is Separate</h2>
          <p style={S.p}>The product warranty above does not become a labor warranty because an installer uses the word Platinum. Trex publishes a separate TrexPro® Residential Limited Labor Warranty. The copy linked from Trex&apos;s warranty page on October 18, 2026 is copyright 2026 and is available at <a href="https://online.flippingbook.com/view/322590450/" style={{ color: 'var(--color-primary)' }}>the current TrexPro labor warranty</a>.</p>
          <p style={S.p}>That labor warranty pays reasonable labor to replace, remove, and dispose of a defective product only after Trex confirms a covered product defect. It requires all of the following:</p>
          <ul style={{ paddingLeft: '1.2rem', lineHeight: 1.8, marginBottom: '1rem' }}>
            <li>A TrexPro contractor installed the products. Trex names three levels: TrexPro, TrexPro Gold, and TrexPro Platinum.</li>
            <li>The installation is on an individual residence. Commercial installations are excluded.</li>
            <li>The warranties are registered.</li>
            <li>The term depends on the contractor level, the decking line, and whether decking, railing, and Trex fasteners are installed. Trex says the decking line governs the tier when both decking and railing are installed.</li>
            <li>Railing coverage requires rails, infills, and hardware made entirely of eligible Trex railing. The fastener tier also requires Trex-supplied fasteners.</li>
          </ul>
          <p style={S.p}>Loudoun Decks does not state a TrexPro, TrexPro Gold, or TrexPro Platinum level on this page. Do not read any labor term in Trex&apos;s table as a benefit included in a Loudoun Decks proposal. Ask Trex, or the written proposal, which program status applies to that contract.</p>
          <p style={S.p}>The program names are also described on <a href="https://www.trex.com/deck-ideas/what-is-a-trexpro-builder-and-why-should-i-use-one/" style={{ color: 'var(--color-primary)' }}>Trex&apos;s TrexPro builder page</a>. That article is dated August 31, 2023, and its year summary is older than the 2026 labor warranty. Use the 2026 warranty for the term.</p>
          <p style={S.p}><strong>The critical distinction:</strong> Installation that does not follow Trex&apos;s instructions can take the product warranty outside its conditions. A TrexPro labor warranty, when it applies, is still Trex&apos;s warranty. It is not the contractor&apos;s workmanship warranty, and it is not proof that Loudoun Decks holds a particular TrexPro level.</p>
          <p style={S.p}>This is one of the most important factors when <Link href="/how-to-choose-a-deck-builder-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>choosing a deck builder</Link> in Northern Virginia. The cheapest quote can become a liability if the installer cannot document code compliance, manufacturer installation requirements, and clear service terms.</p>

          {/* ===== SECTION 6: Written Workmanship Warranty Terms ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Written Workmanship Warranty Terms: What to Review</h2>
          <p style={S.p}>Beyond the manufacturer warranty, contractor workmanship terms should be documented in the signed project paperwork. Review the exact duration, scope, exclusions, service process, and whether structural, labor, resurfacing, or accessory coverage differs.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 16rem), 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '1.25rem' }}>
              <h3 style={{ fontWeight: 600, marginBottom: '0.75rem', color: '#166534' }}>Covered</h3>
              <ul style={{ paddingLeft: '1.2rem', lineHeight: 1.8 }}>
                <li>Ledger board attachment failure</li>
                <li>Flashing or waterproofing defects</li>
                <li>Structural settling beyond normal tolerance</li>
                <li>Joist or beam connection failures</li>
                <li>Railing post loosening</li>
                <li>Stair stringer separation</li>
                <li>Fastener pop-out or failure</li>
                <li>Drainage or grading issues we created</li>
              
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (Google reviews) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
          </ul>
            </div>
            <div style={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: 8, padding: '1.25rem' }}>
              <h3 style={{ fontWeight: 600, marginBottom: '0.75rem', color: '#9a3412' }}>Not Covered</h3>
              <ul style={{ paddingLeft: '1.2rem', lineHeight: 1.8 }}>
                <li>Manufacturer product defects (covered by their warranty)</li>
                <li>Normal wear and aging</li>
                <li>Damage from misuse or negligence</li>
                <li>Modifications made by others after installation</li>
                <li>Acts of nature (fallen trees, flooding)</li>
                <li>Cosmetic preferences (color variation within spec)</li>
                <li>Issues caused by failure to maintain</li>
                <li>Third-party additions (hot tubs, planters)</li>
              </ul>
            </div>
          </div>
          <p style={S.p}>Ask whether the workmanship warranty is prorated, whether labor and materials are handled differently, what documentation is required for a service request, and whether any maintenance responsibilities affect coverage.</p>

          {/* ===== SECTION 7: How to File a Warranty Claim ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>How to File a Deck Warranty Claim (Step by Step)</h2>
          <p style={S.p}>If you notice an issue with your deck, here is the exact process to follow:</p>

          <h3 style={S.h3}>Step 1: Identify the Issue Type</h3>
          <p style={S.p}>Determine whether the issue is a <strong>product defect</strong> (fading, staining, cracking, splitting &mdash; manufacturer warranty) or an <strong>installation defect</strong> (loose boards, structural movement, water intrusion &mdash; workmanship warranty). This determines who you contact first.</p>

          <h3 style={S.h3}>Step 2: Document Everything</h3>
          <p style={S.p}>Take clear photos in daylight showing the defect from multiple angles. Note the location on the deck, when you first noticed it, and any relevant conditions (recent storm, seasonal change). The more documentation you provide, the faster the claim processes.</p>

          <h3 style={S.h3}>Step 3: Contact the Right Party</h3>
          <p style={S.p}>For product defects, contact the manufacturer directly: Trex at 1-800-289-8739, TimberTech at 1-800-307-7780, or Fiberon at 1-800-573-8841. For installation defects, contact us at (571) 655-7207. If you&apos;re unsure which category applies, call us first &mdash; we&apos;ll help you determine the right path and can often facilitate manufacturer claims on your behalf.</p>

          <h3 style={S.h3}>Step 4: Provide Required Documentation</h3>
          <p style={S.p}>Manufacturers will ask for: proof of purchase or installation contract, installation date, photos of the defect, your installer&apos;s name and certification level, and confirmation that the deck was built with permits. If we built your deck, we can provide all of this documentation from our records.</p>

          <h3 style={S.h3}>Step 5: Inspection and Resolution</h3>
          <p style={S.p}>The manufacturer may send an inspector or request additional photos. Approved claims typically result in replacement materials shipped to your address. Claim timing depends on the manufacturer, product line, documentation quality, and review workload, so homeowners should verify current process details directly with the brand.</p>

          {/* ===== SECTION 8: Warranty vs Insurance ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Warranty vs. Homeowner&apos;s Insurance: What&apos;s the Difference?</h2>
          <p style={S.p}>Homeowners frequently confuse warranty coverage with insurance coverage. They protect against entirely different risks:</p>

          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  {['Factor', 'Manufacturer Warranty', 'Workmanship Warranty', 'Homeowner\'s Insurance'].map(h => <th key={h} style={S.th}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Covers', 'Product defects (fade, stain, split)', 'Installation errors', 'Sudden/accidental damage'],
                  ['Examples', 'Board cracks without cause', 'Ledger pulls away from house', 'Tree falls on deck in storm'],
                  ['Who pays', 'Manufacturer, under that warranty', 'The contractor, only as the signed workmanship terms state', 'The insurer, under the policy'],
                  ['Deductible', 'See the product warranty', 'See the signed terms', 'See the homeowner policy'],
                  ['Duration', 'Collection term in the current warranty', 'Written contractor term', 'Policy term'],
                  ['Claim effect', 'See the product warranty', 'See the signed terms', 'See the policy'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.p}><strong>Key takeaway:</strong> If a board fades excessively, that&apos;s a warranty claim. If a storm destroys your railing, that&apos;s an insurance claim. If your deck sags because the contractor skipped a footing, that&apos;s a workmanship warranty claim. Knowing which path to pursue saves weeks of back-and-forth.</p>

          {/* ===== SECTION 9: Common Warranty Mistakes in NoVA ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Common Warranty Mistakes We See in Northern Virginia</h2>
          <p style={S.p}>After building hundreds of decks in Loudoun, Fairfax, and Prince William counties, we&apos;ve seen recurring warranty issues that are entirely preventable:</p>

          <h3 style={S.h3}>No Permit = No Protection</h3>
          <p style={S.p}>We regularly inspect decks built without permits &mdash; especially in older Ashburn and Centreville neighborhoods. Beyond the code compliance risk, these homeowners discover at claim time that their warranty has a significant vulnerability. Every county in Northern Virginia requires a deck permit. There is no exception for &ldquo;small decks&rdquo; or &ldquo;replacement decks.&rdquo;</p>

          <h3 style={S.h3}>Keeping Your Paperwork</h3>
          <p style={S.p}>Store your installation contract, permit approval, product receipts, and any HOA approval letters together. Digital copies are fine. You may not need them for 10+ years, but when you do, having them readily available can mean the difference between an approved and denied claim.</p>

          <h3 style={S.h3}>Maintenance Matters</h3>
          <p style={S.p}>Composite decks are low-maintenance, not zero-maintenance. Trex recommends cleaning twice annually. Allowing organic debris to accumulate for years creates conditions (mold, staining) that may fall outside warranty coverage because they result from neglect rather than product failure. See our <Link href="/deck-maintenance-checklist-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck maintenance checklist</Link> for the recommended schedule.</p>

          {/* ===== SECTION 10: Warranty as Resale Value ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>How Warranty Coverage Affects Resale Value</h2>
          <p style={S.p}>A transferable product warranty can matter to a later buyer, but it does not set the deck&apos;s resale price. Trex&apos;s current residential transfer rule is one transfer within five years of the original purchase. Confirm the installed collection before describing the remaining term.</p>
          <p style={S.p}>We provide project paperwork designed to keep manufacturer warranty information, written workmanship terms, permit records, and maintenance guidelines organized for future resale conversations.</p>

          {/* ===== SECTION 11: Choosing Materials Based on Warranty ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Choosing Deck Materials Based on Warranty Protection</h2>
          <p style={S.p}>If warranty coverage is a top priority, here is how to think about material selection:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: 2 }}>
            <li><strong>Trex Transcend and Signature:</strong> 50-year residential product term in the warranty checked October 18, 2026. Labor is not included.</li>
            <li><strong>Trex Select:</strong> 35-year residential product term in that same warranty.</li>
            <li><strong>Trex Enhance:</strong> 25-year residential product term. It is not the same term as Transcend, and the page does not state a percentage price difference.</li>
            <li><strong>Lineage:</strong> not named in that Trex table. Confirm the current collection name before citing a term.</li>
            <li><strong>TimberTech, AZEK, and Fiberon:</strong> use the current manufacturer warranty. This page does not assign them a year count.</li>
            <li><strong>Wood:</strong> no composite-style manufacturer warranty on the finished board.</li>
          </ul>
          <p style={S.p}>For a complete material breakdown including cost, lifespan, and performance factors, see our <Link href="/trex-vs-timbertech-vs-azek" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Trex vs TimberTech vs AZEK comparison</Link>.</p>

          {/* ===== SECTION 12: FAQs ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {[
            { q: "How long is the Trex decking warranty?", a: "In the Trex decking warranty checked October 18, 2026, residential terms are 25 years for Enhance, 35 years for Select, and 50 years for Transcend and Signature. Lineage is not named. Fade and stain coverage has conditions. A residential warranty may transfer once within five years of purchase." },
            { q: "What voids a composite deck warranty?", a: "Improper installation (wrong joist spacing, no gapping), non-approved fasteners, lack of building permits, harsh pressure washing above 3,100 PSI, chlorine bleach cleaning, painting or staining the surface, and inadequate ventilation underneath the deck." },
            { q: "Does a deck warranty cover labor costs?", a: "The Trex product warranty does not include installation labor. The separate TrexPro Residential Limited Labor Warranty requires a TrexPro contractor, a residential installation, and registration. Loudoun Decks does not state a TrexPro level, so that labor warranty is not part of the firm's offer." },
            { q: "Is a deck warranty transferable when I sell my home?", a: "The current Trex residential product warranty and TrexPro labor warranty each allow one transfer within five years of the original purchase. Confirm TimberTech or AZEK transfer rules in the warranty for the installed collection." },
            { q: "What does a workmanship warranty cover?", a: "Workmanship terms can cover installation defects such as ledger attachment, flashing, joist spacing, railing post connections, stair stringer separation, fastener failure, or structural settling. Exact coverage depends on the written term, scope, exclusions, and remedy in the signed paperwork." },
            { q: "How do I file a Trex warranty claim?", a: "Contact Trex at 1-800-289-8739 or file at trex.com/warranty. Have your proof of purchase, installation date, photos, and installer information ready. Ask Trex directly whether installer-program status affects the current claim review process." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          {/* ===== SECTION 13: Related Guides ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK — Full Comparison'],
              ['/composite-deck-cost-northern-virginia', 'Composite Deck Cost in Northern Virginia (2026)'],
              ['/how-to-choose-a-deck-builder-northern-virginia', 'How to Choose a Deck Builder in Northern Virginia'],
              ['/deck-maintenance-checklist-virginia', 'Deck Maintenance Checklist for Virginia Homeowners'],
              ['/how-long-does-a-composite-deck-last', 'How Long Does a Composite Deck Last?'],
              ['/deck-permit-loudoun-county-virginia', 'Deck Permit Guide — Loudoun County'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}>
                <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} &rarr;</Link>
              </li>
            ))}
          </ul>

        </div>
      </article>

      <SimpleCTA title="Get Deck Installation With Written Warranty Terms" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/deck-warranty-guide-northern-virginia" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <ContactHome />
    </>
  );
}
