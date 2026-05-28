import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';

export const metadata = buildMetadata({
  path: '/deck-permit-fairfax-county-virginia',
  title: 'Fairfax County Deck Permits Made Easy | Loudoun Decks',
  description: 'Navigate the 2026 Fairfax County deck permit process without the headache. We handle drawings, county zoning approvals, and inspections from start to finish.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do I need a permit to build a deck in Fairfax County?", acceptedAnswer: { "@type": "Answer", text: "Yes any deck attached to a house, over 200 square feet, or more than 18 inches above grade requires a building permit in Fairfax County. Ground-level decks under 18 inches may be exempt." } },
    { "@type": "Question", name: "How long does the Fairfax County deck permit take?", acceptedAnswer: { "@type": "Answer", text: "Plan review typically takes 3-6 weeks depending on seasonal demand. Simple deck plans on standard lots process faster. We submit on your behalf and track the timeline." } },
    { "@type": "Question", name: "How much does a deck permit cost in Fairfax County?", acceptedAnswer: { "@type": "Answer", text: "Fairfax County deck permits cost $150-$600 depending on project value and scope. We include permit costs in our estimates." } },
    { "@type": "Question", name: "What inspections are required for a Fairfax County deck?", acceptedAnswer: { "@type": "Answer", text: "Three inspections: footing inspection (before concrete), framing inspection (before decking), and final inspection (complete structure). We coordinate all inspections directly with the county." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, h3: { fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 } };

export default function FairfaxPermitPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/deck-permit-fairfax-county-virginia" name="Fairfax County Deck Permits Made Easy | Loudoun Decks" description="Navigate the 2026 Fairfax County deck permit process without the headache. We handle drawings, county zoning approvals, and inspections from start to finish." speakable />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Do You Need a Permit to Build a Deck in Fairfax County?</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>2026 requirements, step-by-step process, costs, and what we handle for you</p>
        </div>
      </section>

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }} data-speakable="true">
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p data-speakable><strong>Yes</strong> any deck attached to a house, over 200 sqft, or more than 18&quot; above grade needs a Fairfax County building permit. Plan review takes 3–6 weeks. Permit costs $150–$600. <strong>We handle everything.</strong></p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img20.jpeg"
              alt="Structural deck framing and footing detail for Fairfax County permit inspection"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>

          <h2 style={S.h2}>When Is a Permit Required?</h2>
          <p style={S.p}>Fairfax County requires a building permit for decks that meet any of these criteria:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Attached to the house (ledger board connection)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Over 200 square feet in area</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>More than 18 inches above grade at any point</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Within a setback zone or easement</li>
          </ul>
          <p style={S.p}><strong>Exception:</strong> Ground-level, freestanding decks under 18 inches with no attached railings may be exempt. However, we recommend confirming with the county before building. For the statewide threshold logic, see our guide to <Link href="/blog/do-i-need-a-permit-for-a-deck-loudoun" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Virginia deck permit requirements</Link>.</p>

          <h2 style={S.h2}>Fairfax County Permit Process (Step by Step)</h2>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Prepare plans and documents:</strong> Site plan showing deck footprint, property lines, and setbacks. Structural drawings with footing sizes, beam spans, joist spacing. Material specifications. For decks meeting the Fairfax County Typical Deck Detail, simplified plans are accepted.</li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Zoning review:</strong> Fairfax County reviews your deck&apos;s position relative to setback lines, lot coverage limits, and any applicable proffers or easements. This is the step that catches most homeowners off guard setbacks in Fairfax are often 25–35 feet from the rear property line.</li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Building plan review:</strong> A structural reviewer checks your plans for code compliance footing depth (below 30&quot; frost line), joist spacing, beam sizing, ledger connection, railing height (36&quot; minimum, 42&quot; if over 30&quot; above grade), and stair specifications. We also explain the foundation side in the <Link href="/tools/deck-footing-depth-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck Footing Depth Calculator Virginia</Link> and <Link href="/deck-footing-code-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck footing code guide</Link>, framing assumptions with the <Link href="/tools/deck-joist-span-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck Joist Span Calculator Virginia</Link> and <Link href="/tools/deck-beam-span-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck Beam Span Calculator Virginia</Link>, the house-attachment side in our <Link href="/education/ledger-board-flashing-deck-attachment-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>ledger board flashing guide</Link>, and stair dimensions with the <Link href="/tools/deck-stair-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Virginia deck stair calculator</Link> and <Link href="/education/deck-stair-code-rise-run-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Virginia deck stair code guide</Link>.</li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Permit issuance:</strong> Once approved, the permit is issued and must be posted visibly at the job site during construction.</li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Three inspections during construction:</strong>
              <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem' }}>
                <li>Footing inspection holes dug, before concrete is poured</li>
                <li>Framing inspection joists, beams, ledger, hardware installed, before decking goes on. If you are comparing framing options, read <Link href="/blog/2x8-vs-2x10-deck-joists" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>2x8 vs 2x10 deck joists</Link>.</li>
                <li>Final inspection complete structure including railings, stairs, and fasteners. For stair terminology and layout, use the <Link href="/tools/deck-stair-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Virginia deck stair calculator</Link> and see our <Link href="/education/deck-stair-construction-diagram" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck stair construction diagram</Link>; for inspection dimensions, see the <Link href="/education/deck-stair-code-rise-run-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>stair code guide</Link>; and for homeowner red flags before final review, use the <Link href="/education/deck-stair-safety-inspection-checklist" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck stair safety checklist</Link>.</li>
              </ul>
            </li>
          </ol>

          <h2 style={S.h2}>Timeline</h2>
          <p style={S.p}><strong>Plan review:</strong> 3–6 weeks (longer during spring/summer peak). Simple decks on standard lots process faster.</p>
          <p style={S.p}><strong>Inspections:</strong> Schedule 24–48 hours in advance. Each takes 15–30 minutes on site.</p>
          <p style={S.p}><strong>Total from submission to build start:</strong> 4–8 weeks typically. We can submit HOA and permit applications in parallel to reduce wait time.</p>

          <h2 style={S.h2}>Permit Costs</h2>
          <p style={S.p}>Fairfax County deck permits cost <strong>$150–$600</strong> based on project value. Additional fees may apply for expedited review or revised plans. We include all permit costs in our estimates no surprises.</p>

          <h2 style={S.h2}>Common Reasons for Permit Denial</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Deck extends into setback zone (most common)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Missing structural details on plans</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Lot coverage exceeded (deck + house + hardscape &gt; allowed %)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Easement conflict (drainage, utility, or conservation)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Incomplete application package</li>
          </ul>
          <p style={S.p}>We review all of these before submitting. Our permit approval rate in Fairfax County is 100% because we check compliance first.</p>

          <h2 style={S.h2}>What Happens If You Build Without a Permit?</h2>
          <p style={S.p}>We cover the full risk profile in <Link href="/blog/deck-without-permit-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>what happens if you build a deck without a permit in Virginia</Link>, but the practical issues usually show up as enforcement, insurance, and resale problems.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Stop-work order if discovered during construction</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Fines from Fairfax County code enforcement</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Required to retroactively permit (with penalties) or demolish</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Title/sale issues unpermitted structures must be disclosed and may kill a deal</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Insurance won&apos;t cover injuries or damage on unpermitted structures</li>
          </ul>

          <h2 style={S.h2}>We Handle Everything</h2>
          <p style={S.p}>Permits are part of our standard scope no extra charge. We prepare plans, submit applications, coordinate zoning and building review, schedule all inspections, and resolve any reviewer comments. You don&apos;t deal with the county at all.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {[
            { q: "Do I need a permit for a deck in Fairfax County?", a: "Yes if attached to house, over 200 sqft, or over 18\" above grade. Ground-level freestanding decks under 18\" may be exempt." },
            { q: "How long does the permit take?", a: "3-6 weeks for plan review. We submit and track the timeline for you." },
            { q: "How much does the permit cost?", a: "$150-$600 depending on project value. Included in our estimates." },
            { q: "What inspections are needed?", a: "Three: footing (before concrete), framing (before decking), and final. We coordinate all inspections." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/deck-permit-loudoun-county-virginia', 'Deck Permit Guide: Loudoun County'],
              ['/education/common-deck-stair-inspection-failures-virginia', 'Common Deck Stair Inspection Failures'],
              ['/education/deck-stair-safety-inspection-checklist', 'Deck Stair Safety Checklist PDF'],
              ['/hoa-deck-rules-northern-virginia', 'HOA Deck Rules in NoVA'],
              ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost?'],
              ['/near-you/fairfax-county', 'Deck Builder in Fairfax County'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>

      <SimpleCTA title="Skip the Permit Headache We Handle It" buttonText="Get Free Estimate" link="/contact" />
      <NamedAuthor context="Fairfax County" lastUpdated="2026-05-26" />

      <ContactHome />
    </>
  );
}
