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

export const metadata = buildMetadata({
  path: '/deck-permit-prince-william-county-virginia',
  title: 'Prince William County Deck Permit Guide 2026 | Cost & Process',
  description: 'Deck permits in Prince William County, VA: 2–4 week plan review, $150–$500 cost, 3 required inspections. Full process explained — we handle it for you.',
});

const permitFaqs = [
  {
    q: "Do I need a permit for a deck in Prince William County?",
    a: "Yes. Any deck attached to the house, over 200 square feet, more than 30 inches above grade, or located inside a setback/easement review area requires a Prince William County building permit. Ground-level freestanding decks under those thresholds may be exempt, but zoning still has to be checked.",
  },
  {
    q: "How long does a deck permit take in Prince William County?",
    a: "Plan review usually takes 2-4 weeks, and simple deck plans on standard lots can clear faster. We prepare the package, submit it to the right jurisdiction, track reviewer comments, and keep construction timing aligned with approval.",
  },
  {
    q: "How much does a deck permit cost in Prince William County?",
    a: "Prince William County deck permits commonly run $150-$500 depending on project scope and construction valuation. We include permit costs in the estimate so homeowners are not surprised by county fees later.",
  },
  {
    q: "Which Prince William-area jurisdiction reviews my deck?",
    a: "It depends on the property address. Prince William County, the City of Manassas, and the City of Manassas Park each have separate building departments. We verify the correct jurisdiction before drawings are finalized.",
  },
  {
    q: "What inspections are required for a Prince William County deck?",
    a: "Most permitted decks need three inspections: footing before concrete, framing before decking boards are installed, and final after railings, stairs, guards, and hardware are complete. We schedule and coordinate each inspection.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://ldndecks.com/deck-permit-prince-william-county-virginia#faq",
  url: "https://ldndecks.com/deck-permit-prince-william-county-virginia",
  mainEntity: permitFaqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function PWCountyPermitPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/deck-permit-prince-william-county-virginia" name="Prince William County Deck Permit Guide 2026 | Cost &amp; Process" description="Deck permits in Prince William County, VA: 2–4 week plan review, $150–$500 cost, 3 required inspections. Full process explained — we handle it for you." speakable />
      <ArticleSchema
        title="Prince William County Deck Permit Guide for 2026"
        description="Prince William County deck permit requirements, jurisdiction checks, structural details, inspections, timelines, and permit costs for Northern Virginia homeowners."
        path="/deck-permit-prince-william-county-virginia"
        image="/images/blog-permit-guide.png"
        datePublished="2026-04-21"
        dateModified="2026-06-02"
      />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Deck Permit Guide: Prince William County, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>2026 requirements, step-by-step process, costs, and timeline</p>
        </div>
      </section>
      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }} data-speakable="true">
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p data-speakable><strong>Yes permits are required.</strong> Plan review takes <strong>2–4 weeks</strong> (faster than Fairfax). Cost: <strong>$150–$500</strong>. Three inspections: footings, framing, final. <strong>We handle everything.</strong></p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={S.h2}>When Is a Permit Required?</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Attached to the house (ledger board connection)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Over 200 square feet in area</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>More than 30 inches above grade at any point</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Within setback zones or easements</li>
          </ul>
          <p style={S.p}><strong>Exception:</strong> Freestanding, ground-level decks under 200 sqft and under 30 inches may be exempt. We confirm with the county before building. For a broader Virginia overview, read our <Link href="/blog/do-i-need-a-permit-for-a-deck-loudoun" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>statewide deck permit guide</Link>.</p>

          <h2 style={S.h2}>Permit Process (Step by Step)</h2>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Prepare plans:</strong> Site plan showing property lines, setbacks, and deck footprint. Structural drawings with footing sizes, beam/joist specs, ledger details. Material specifications.</li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Submit to PW County Development Services:</strong> Online or in-person submission. Include all required documents.</li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Zoning review:</strong> County checks setback compliance, lot coverage limits, and easement conflicts. PW County is generally faster than Fairfax for this step.</li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Building review:</strong> Structural review ensures code compliance footing depth, joist spacing, beam sizing, post spacing, ledger connection and railing height. See the <Link href="/tools/deck-footing-depth-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck Footing Depth Calculator Virginia</Link>, the <Link href="/tools/deck-joist-span-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck Joist Span Calculator Virginia</Link>, the <Link href="/tools/deck-beam-span-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck Beam Span Calculator Virginia</Link>, our <Link href="/deck-footing-code-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck footing code guide</Link>, <Link href="/education/ledger-board-flashing-deck-attachment-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>ledger board flashing guide</Link>, and <Link href="/blog/2x8-vs-2x10-deck-joists" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>2x8 vs 2x10 deck joists</Link>.</li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Permit issuance:</strong> Once approved, permit must be posted at the job site.</li>
            <li style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Three inspections:</strong> Footing (before concrete), framing (before decking), and final (complete structure). For stair layout before final inspection, use the <Link href="/tools/deck-stair-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Virginia deck stair calculator</Link>, the <Link href="/education/deck-stair-construction-diagram" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck stair construction diagram</Link>, and the <Link href="/education/deck-stair-code-rise-run-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Virginia deck stair code guide</Link>.</li>
          </ol>

          <h2 style={S.h2}>PW County vs Fairfax County Permit Comparison</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Factor', 'Prince William County', 'Fairfax County'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Plan review time', '2–4 weeks', '3–6 weeks'],
                  ['Permit cost', '$150–$500', '$200–$600'],
                  ['Online submission', 'Yes', 'Yes'],
                  ['Inspections', '3 (same)', '3 (same)'],
                  ['Typical setback (rear)', '20–25 ft', '25–35 ft'],
                  ['HOA complexity', 'Moderate', 'Higher (more HOAs)'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{row[0]}</td>
                    <td style={{ ...S.td, fontWeight: 600, color: 'var(--color-primary)' }}>{row[1]}</td>
                    <td style={S.td}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>Important: Three Jurisdictions in PW Area</h2>
          <p style={S.p}>The Manassas/Woodbridge area has <strong>three separate building departments:</strong></p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Prince William County:</strong> Covers Woodbridge, Gainesville, Haymarket, Bristow, Lake Ridge, Dale City, Triangle, Nokesville</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>City of Manassas:</strong> Independent city with its own building department (covers Manassas city limits only)</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>City of Manassas Park:</strong> Also independent with its own department</li>
          </ul>
          <p style={S.p}>Not sure which covers your property? Tell us your address we determine the correct jurisdiction and handle permitting accordingly.</p>

          <h2 style={S.h2}>We Handle Everything</h2>
          <p style={S.p}>Permits are part of our standard scope no extra charge. We prepare plans, submit applications, track review timelines, schedule all inspections, and resolve any reviewer comments. You don&apos;t deal with the county at all. If a deck was already built without approval, start with our guide to <Link href="/blog/deck-without-permit-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>unpermitted decks in Virginia</Link>.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {permitFaqs.map((faq) => (
            <details key={faq.q} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/deck-permit-fairfax-county-virginia', 'Fairfax County Permit Guide'],
              ['/deck-permit-loudoun-county-virginia', 'Loudoun County Permit Guide'],
              ['/hoa-deck-rules-northern-virginia', 'HOA Deck Rules'],
              ['/deck-builder-manassas-va', 'Deck Builder Manassas'],
              ['/deck-builder-woodbridge-va', 'Deck Builder Woodbridge'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Skip the Permit Headache We Handle It" buttonText="Get Free Estimate" link="/contact" />
      <NamedAuthor context="Prince William County" lastUpdated="2026-05-26" />

      <RelatedGuides currentPath="/deck-permit-prince-william-county-virginia" />

      <ContactHome />
    </>
  );
}
