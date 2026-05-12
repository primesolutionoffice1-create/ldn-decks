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
  title: 'Loudoun County Deck Permit Guide 2026 | Cost & LOLA Process',
  description: 'Need a deck permit in Loudoun County? Costs $150–$500, takes 2–4 weeks via LOLA portal. Setbacks, inspections & approvals explained. We handle it for you.',
  image: '/images/img20.jpeg',
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do I need a permit to build a deck in Loudoun County?", acceptedAnswer: { "@type": "Answer", text: "Yes any deck attached to a house, exceeding 256 square feet, or more than 16.5 inches above grade requires a building permit in Loudoun County. This covers virtually all functional residential decks." } },
    { "@type": "Question", name: "How long does a Loudoun County deck permit take?", acceptedAnswer: { "@type": "Answer", text: "Plan review through the LOLA portal typically takes 2-4 weeks. Simple residential decks using standard Loudoun County deck details are reviewed faster. Complex multi-level or commercial-grade projects may take 4-6 weeks." } },
    { "@type": "Question", name: "How much does a deck permit cost in Loudoun County?", acceptedAnswer: { "@type": "Answer", text: "Loudoun County deck permits cost $150-$500 depending on project scope and valuation. The fee is calculated based on the estimated construction cost. We include all permit fees in our project estimates." } },
    { "@type": "Question", name: "What inspections does Loudoun County require for a deck?", acceptedAnswer: { "@type": "Answer", text: "Three inspections: (1) footing inspection before concrete is poured, (2) framing inspection after joists, beams, and ledger are installed but before decking, and (3) final inspection of the completed structure including railings, stairs, and all connections." } },
    { "@type": "Question", name: "Can I build a deck without a permit in Loudoun County?", acceptedAnswer: { "@type": "Answer", text: "Only very small freestanding platforms under 256 sqft that are less than 16.5 inches above grade may be exempt. Building without a required permit is illegal, can result in fines, forced demolition, and creates serious problems when selling your home." } },
    { "@type": "Question", name: "What is the LOLA portal for Loudoun County permits?", acceptedAnswer: { "@type": "Answer", text: "LOLA (Loudoun Online Land Applications) is Loudoun County's online portal for submitting building permit applications, uploading plans, tracking review status, and scheduling inspections. All deck permit applications go through LOLA." } },
  ],
};

const S = {
  h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' },
  h3: { fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' },
  p: { marginBottom: '1rem', lineHeight: 1.7 },
  th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' },
  td: { padding: '0.75rem', borderBottom: '1px solid #eee' },
};

export default function LoudounPermitPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ArticleSchema
        title="Loudoun County Deck Permit Guide 2026: Everything You Need to Know"
        description="Complete guide to deck permits in Loudoun County, VA. Requirements, costs, LOLA portal, timeline, inspections, and HOA coordination."
        path="/deck-permit-loudoun-county-virginia"
        image="/images/img20.jpeg"
        datePublished="2026-04-21"
        dateModified="2026-04-23"
      />

      {/* Hero */}
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Loudoun County Deck Permit Guide (2026)</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Requirements, costs, timeline, LOLA portal walkthrough &amp; what we handle for you</p>
        </div>
      </section>

      {/* Quick Answer */}
      <section data-speakable="true" style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p><strong>Yes, you need a permit.</strong> Any deck attached to your house, over 256 sqft, or more than 16.5&quot; above grade requires a Loudoun County building permit. Plan review takes <strong>2–4 weeks</strong> via the LOLA portal. Permit costs <strong>$150–$500</strong>. <strong>We handle the entire process</strong> plans, submission, and inspections. <CallLink style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Call (571) 655-7207</CallLink>.</p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          {/* Hero Image */}
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img20.jpeg"
              alt="Deck framing and footing detail during Loudoun County building inspection"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>

          {/* ===== SECTION 1: When Required ===== */}
          <h2 style={S.h2}>When Is a Deck Permit Required in Loudoun County?</h2>
          <p style={S.p}>Under the Virginia Uniform Statewide Building Code (VUSBC), which Loudoun County enforces, a building permit is required when your deck meets <strong>any</strong> of the following criteria:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Attached to the house</strong> any deck connected to your home via a ledger board</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Over 256 square feet</strong> this includes the total footprint of the deck surface</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>More than 16.5 inches above grade</strong> measured at the highest point above the ground</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Will support concentrated loads</strong> hot tubs, outdoor kitchens, or heavy planters</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Located within a setback zone or easement</strong></li>
          </ul>
          <p style={S.p}>In practice, this means <strong>virtually every functional residential deck in Loudoun County requires a permit</strong>. Even deck resurfacing projects may require a permit if the existing structure doesn&apos;t meet current code (e.g., missing joist hangers, undersized footings, or no ledger flashing).</p>

          <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: '1.25rem', marginBottom: '2rem' }}>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#991b1b' }}>What happens if you build without a permit?</p>
            <p style={{ lineHeight: 1.7, color: '#7f1d1d', margin: 0 }}>Building without a required permit in Loudoun County is a Class 1 misdemeanor. The county can issue stop-work orders, require demolition, and impose fines. Unpermitted structures also create serious complications during home sales title companies and buyer inspectors flag them, and lenders may refuse to finance the purchase until the issue is resolved.</p>
          </div>

          {/* ===== SECTION 2: What You Need ===== */}
          <h2 style={S.h2}>Documents Required for a Loudoun County Deck Permit</h2>
          <p style={S.p}>A complete deck permit application in Loudoun County requires the following:</p>

          <h3 style={S.h3}>1. Site Plan (Plot Plan)</h3>
          <p style={S.p}>A scaled drawing of your property showing the proposed deck footprint, property lines, setback lines, easements, and distances from all structures. Loudoun County requires that you show the deck&apos;s position relative to side, rear, and front setbacks. In most residential zones (R-1 through R-8), the rear setback is 25 feet from the property line. The deck cannot encroach into this setback without a variance.</p>

          <h3 style={S.h3}>2. Structural Drawings</h3>
          <p style={S.p}>Construction plans must include:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Footing sizes and depths (minimum 24 inches below grade in Loudoun County to clear the frost line)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Beam sizes and span tables</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Joist sizes, spacing, and span</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Ledger board attachment detail (lag bolts or through-bolts with proper flashing)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Railing height (36&quot; minimum; 42&quot; if deck surface is more than 30&quot; above grade)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Stair details (width, rise, run, handrail)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Material specifications (decking brand, framing lumber grade)</li>
          </ul>

          <h3 style={S.h3}>3. Contractor License Verification</h3>
          <p style={S.p}>Loudoun County requires that any contractor performing work valued over $1,000 hold a valid Virginia Class A, B, or C contractor&apos;s license. We provide our license information as part of every permit application we submit.</p>

          <h3 style={S.h3}>4. HOA Approval (If Applicable)</h3>
          <p style={S.p}>If your property is in an HOA community and in Loudoun County, most are you typically need HOA architectural review board approval <strong>before</strong> submitting your county permit application. We handle HOA submissions with full CAD renderings and material specs. More on this below.</p>

          {/* ===== SECTION 3: LOLA Portal ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>How to Submit: The LOLA Portal</h2>
          <p style={S.p}>All Loudoun County building permit applications are submitted through the <strong>LOLA (Loudoun Online Land Applications)</strong> portal. Here&apos;s the step-by-step process:</p>

          <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Create a LOLA account</strong> Register at the Loudoun County Department of Building and Development website.</li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Start a new application</strong> Select &ldquo;Building Permit&rdquo; → &ldquo;Residential&rdquo; → &ldquo;Deck/Porch.&rdquo;</li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Upload required documents</strong> Site plan (PDF), structural drawings (PDF), material specifications, and contractor license information.</li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Pay application fee</strong> The initial fee is paid at submission. The total fee depends on project valuation.</li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Track review status</strong> LOLA shows real-time status. Reviewers may submit &ldquo;correction notices&rdquo; if plans need revision. You resubmit corrected plans through the same portal.</li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Receive approved permit</strong> Once approved, print the permit and post it visibly at the job site for the duration of construction.</li>
          </ol>

          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '1.25rem', marginBottom: '2rem' }}>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#166534' }}>We handle all of this for you</p>
            <p style={{ lineHeight: 1.7, color: '#14532d', margin: 0 }}>When you build with LDN Decks, we prepare every document, submit through LOLA, respond to any correction notices, and coordinate all inspections. You never visit the county office or log into the portal. This is included in your project cost at no additional fee.</p>
          </div>

          {/* ===== SECTION 4: Costs ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Loudoun County Deck Permit Costs</h2>
          <p style={S.p}>Permit fees in Loudoun County are calculated based on the estimated construction value of the project:</p>

          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  {['Project Value', 'Typical Permit Fee', 'Example Project'].map(h => <th key={h} style={S.th}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['$5,000–$15,000', '$150–$250', 'Small pressure-treated wood deck (200 sqft)'],
                  ['$15,000–$30,000', '$250–$350', 'Mid-size composite deck (300 sqft)'],
                  ['$30,000–$50,000', '$350–$450', 'Large Trex Transcend deck with stairs and lighting'],
                  ['$50,000+', '$400–$500+', 'Multi-level deck + screened porch combination'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.p}>Fees also include any required re-inspection fees if initial inspections don&apos;t pass. We include all permit costs in our project estimates so there are no surprises.</p>

          {/* ===== SECTION 5: Timeline ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Permit Timeline: How Long Does It Take?</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  {['Phase', 'Duration', 'Notes'].map(h => <th key={h} style={S.th}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['HOA approval (if applicable)', '1–4 weeks', 'Varies by community. Some HOAs meet monthly; others review weekly.'],
                  ['LOLA plan review', '2–4 weeks', 'Standard residential decks. Faster in winter, slower in spring peak.'],
                  ['Correction resubmittal (if needed)', '1–2 weeks', 'Only applies if the reviewer flags issues. We rarely get corrections.'],
                  ['Permit issuance', '1–2 business days', 'After approval, the permit is available for pickup or download.'],
                  ['Total typical timeline', '3–6 weeks', 'From first HOA submission to permit in hand.'],
                ].map((row, i) => {
                  const isTotal = i === 4;
                  return (
                    <tr key={i} style={{ background: isTotal ? '#f0f0f0' : (i % 2 ? '#fafafa' : '#fff') }}>
                      {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: isTotal || j === 0 ? 600 : 400 }}>{cell}</td>)}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p style={S.p}><strong>Pro tip:</strong> Start your design consultation 8–10 weeks before your desired build start date. This gives us time to design, submit to your HOA, receive approval, submit to the county, and have the permit in hand before the build crew arrives.</p>

          {/* ===== SECTION 6: Inspections ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Required Inspections During Construction</h2>
          <p style={S.p}>Loudoun County requires three inspections during deck construction. We schedule and attend all of them:</p>

          <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
            {[
              {
                num: '1',
                title: 'Footing Inspection',
                when: 'After holes are dug, before concrete is poured',
                what: 'Inspector verifies footing hole depth (24" minimum below grade for frost line), diameter, and location match the approved plans. Soil conditions are checked if the inspector finds fill dirt or unstable soil, deeper footings or helical piers may be required.',
              },
              {
                num: '2',
                title: 'Framing Inspection',
                when: 'After framing is complete, before decking boards are installed',
                what: 'Inspector checks ledger board attachment (proper flashing, lag bolts or through-bolts), joist hangers, beam-to-post connections, lateral bracing, and that all framing lumber matches the approved plan specifications. This is the most detailed inspection.',
              },
              {
                num: '3',
                title: 'Final Inspection',
                when: 'After all work is complete',
                what: 'Inspector verifies railing height and spacing (4" max baluster gap), stair dimensions (consistent rise/run, proper handrail), decking fastener pattern, and overall structural integrity. Once passed, the county issues a Certificate of Completion.',
              },
            ].map((insp) => (
              <div key={insp.num} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', borderLeft: '4px solid var(--color-primary)' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>Inspection #{insp.num}: {insp.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.75rem' }}>{insp.when}</p>
                <p style={{ lineHeight: 1.7, margin: 0 }}>{insp.what}</p>
              </div>
            ))}
          </div>

          {/* ===== SECTION 7: Setbacks ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Loudoun County Setback Requirements</h2>
          <p style={S.p}>One of the most common reasons deck permits are delayed or denied is setback violations. Your deck cannot extend into the required setback zone the buffer between your structure and the property line.</p>

          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  {['Zoning District', 'Rear Setback', 'Side Setback', 'Common Areas'].map(h => <th key={h} style={S.th}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['R-1 (1 acre lots)', '35 ft', '15 ft', 'Aldie, Purcellville, western Loudoun'],
                  ['R-2 (0.5 acre lots)', '25 ft', '12 ft', 'Leesburg outskirts, Hamilton'],
                  ['R-4 (0.25 acre lots)', '25 ft', '10 ft', 'Ashburn Farm, Lansdowne'],
                  ['R-8 (0.125 acre lots)', '20 ft', '8 ft', 'Brambleton, One Loudoun, Broadlands'],
                  ['R-16/R-24 (townhome)', '15–20 ft', '5–8 ft', 'Ashburn Village, Moorefield Station'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.p}><strong>Important:</strong> In higher-density neighborhoods like Brambleton (R-8), the rear setback of 20 feet can significantly limit deck size. We measure your property during the free on-site consultation and design within your allowable building envelope from day one preventing costly redesigns after submission.</p>

          {/* ===== SECTION 8: HOA ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>HOA Coordination in Loudoun County</h2>
          <p style={S.p}>The majority of residential properties in eastern Loudoun County are governed by HOAs with architectural review boards. The HOA process runs <strong>separately from and before</strong> the county permit process.</p>

          <h3 style={S.h3}>Common Loudoun County HOA Requirements</h3>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Color restrictions:</strong> Many HOAs (Brambleton, Broadlands, Ashburn Farm) limit decking colors to earth tones. We bring sample boards to your consultation.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Railing style:</strong> Some communities require specific railing profiles no cable rail, specific spindle spacing, etc.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Height limits:</strong> Pergolas and porch roof structures may have maximum height restrictions.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Material requirements:</strong> Certain HOAs require composite only (no pressure-treated wood).</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Neighbor notification:</strong> Some boards require adjacent homeowner sign-off before approval.</li>
          </ul>
          <p style={S.p}>We&apos;ve successfully navigated HOA approvals in dozens of Loudoun County communities. We prepare the full submission package 3D renders, material specs, color samples, and structural drawings and submit on your behalf. Read our <Link href="/hoa-deck-rules-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>complete HOA deck rules guide</Link> for more detail.</p>

          {/* ===== SECTION 9: Common Code Requirements ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Key Building Code Requirements in Loudoun County</h2>
          <p style={S.p}>These are the structural requirements that Loudoun County inspectors check most closely:</p>

          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  {['Element', 'Requirement', 'Why It Matters'].map(h => <th key={h} style={S.th}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Footing depth', '24" minimum below grade', 'Below Virginia\'s frost line prevents heaving in freeze-thaw cycles'],
                  ['Footing diameter', '16-24" depending on load', 'Must support beam + joist + deck + live load (40 psf) + snow load (25 psf)'],
                  ['Ledger attachment', 'Lag bolts or through-bolts with flashing', 'Ledger failure is the #1 cause of deck collapses nationally'],
                  ['Joist hangers', 'Simpson Strong-Tie or equivalent at every connection', 'Prevents lateral separation under load'],
                  ['Railing height', '36" (standard) or 42" (if >30" above grade)', 'Fall protection most common inspection failure point'],
                  ['Baluster spacing', '4" maximum gap', 'Prevents children from passing through the railing'],
                  ['Stair rise/run', '7.75" max rise, 10" min run, consistent within 3/8"', 'Inconsistent stairs are a trip hazard and automatic failure'],
                  ['Guard post attachment', 'Bolted through rim joist, not surface-mounted', 'Surface-mounted posts fail under lateral force'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ===== SECTION 10: Deck Resurfacing Permits ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Do You Need a Permit for Deck Resurfacing?</h2>
          <p style={S.p}>This is one of the most common questions we get. The answer depends on what&apos;s underneath:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>If the existing subframe meets current code</strong> proper ledger attachment, adequate joist hangers, compliant footings then a cosmetic resurfacing (replacing boards and railings only) may not require a new permit.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>If the existing subframe does NOT meet current code</strong> missing flashing, undersized joists, inadequate footings the county may require a permit and structural upgrades before new decking can be installed.</li>
          </ul>
          <p style={S.p}>We always inspect the existing structure before quoting a <Link href="/deck-resurfacing-vs-replacement" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>resurfacing project</Link>. If a permit is needed, we handle it. If not, we document the inspection for your records.</p>

          {/* ===== SECTION 11: FAQs ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {[
            { q: "Do I need a permit to build a deck in Loudoun County?", a: "Yes any deck attached to a house, exceeding 256 sqft, or more than 16.5 inches above grade requires a building permit. This covers virtually all functional residential decks." },
            { q: "How long does a Loudoun County deck permit take?", a: "Plan review through LOLA takes 2-4 weeks. Simple decks using standard Loudoun County deck details review faster. Complex multi-level projects may take 4-6 weeks." },
            { q: "How much does a deck permit cost in Loudoun County?", a: "Permit fees range from $150-$500 depending on project scope and valuation. We include all permit costs in our project estimates." },
            { q: "What inspections are required?", a: "Three: footing inspection (before concrete), framing inspection (before decking), and final inspection (complete structure). We coordinate all inspections." },
            { q: "Can I build a deck without a permit?", a: "Only very small freestanding platforms under 256 sqft and less than 16.5\" above grade may be exempt. Building without a required permit is illegal and creates serious issues when selling your home." },
            { q: "What is the LOLA portal?", a: "LOLA (Loudoun Online Land Applications) is the county's online system for submitting permit applications, uploading plans, tracking review status, and scheduling inspections." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          {/* ===== SECTION 12: Related Guides ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/deck-permit-fairfax-county-virginia', 'Fairfax County Deck Permit Guide'],
              ['/deck-permit-prince-william-county-virginia', 'Prince William County Deck Permit Guide'],
              ['/hoa-deck-rules-northern-virginia', 'HOA Deck Rules in Northern Virginia'],
              ['/how-much-does-a-deck-cost-northern-virginia', 'How Much Does a Deck Cost?'],
              ['/how-long-to-build-a-deck-northern-virginia', 'How Long Does It Take to Build a Deck?'],
              ['/how-to-choose-a-deck-builder-northern-virginia', 'How to Choose a Deck Builder'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}>
                <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} &rarr;</Link>
              </li>
            ))}
          </ul>

        </div>
      </article>

      <SimpleCTA title="We Handle Your Loudoun County Deck Permit" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-permit-loudoun-county-virginia" />
      <ContactHome />
    </>
  );
}
