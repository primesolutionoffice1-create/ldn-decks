import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import NamedAuthor from '@/components/NamedAuthor';
import { buildMetadata } from '@/lib/seo';
import { BUSINESS, FOUNDER_ID } from '@/lib/business';
import WebPageSchema from '@/components/WebPageSchema';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/deck-cost-12x20-northern-virginia',
  title: '12x20 Deck Cost in Northern Virginia (2026)',
  description: 'A 12x20 deck is 240 sq ft. This page does not publish a project total. External benchmarks are labeled with their source.',
  image: '/social/deck-cost-12x20-northern-virginia-social.png',
});

const articleSchema = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "How Much Does a 12x20 Deck Cost in Northern Virginia (2026)",
  datePublished: "2026-05-23",
  dateModified: "2026-10-18",
  author: { "@type": "Person", "@id": FOUNDER_ID, name: BUSINESS.founder.name, alternateName: "Nick", url: "https://ldndecks.com/team" },
  publisher: { "@type": "Organization", "@id": "https://ldndecks.com/#organization", name: "Loudoun Decks", url: "https://ldndecks.com" },
  about: "12x20 deck cost in Northern Virginia",
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a 12x20 deck cost in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "This page does not publish a pressure-treated, composite, or PVC total for a 12x20 deck. The summary cites an external per-square-foot benchmark with its publisher and date. That figure is not a Loudoun Decks price. A written estimate is the project price." } },
    { "@type": "Question", name: "What is the price per square foot for a 12x20 deck?", acceptedAnswer: { "@type": "Answer", text: "This page does not publish a Loudoun Decks price per square foot. The summary cites an external benchmark with its publisher and date. A written estimate is the project price." } },
    { "@type": "Question", name: "Is a 12x20 deck worth it in composite over wood?", acceptedAnswer: { "@type": "Answer", text: "This page does not publish an upfront multiple for composite versus wood. Wood needs recurring washing, sanding, and staining. A written estimate compares the two scopes." } },
    { "@type": "Question", name: "Does a 12x20 deck need a permit in Virginia?", acceptedAnswer: { "@type": "Answer", text: "Almost always. Virginia requires a building permit for any deck attached to the house with a ledger board, and for any deck more than 16 inches above grade. A 12x20 deck attached to a house clearly meets both. See our Loudoun County deck permit guide for the local process." } },
    { "@type": "Question", name: "How long does it take to build a 12x20 deck?", acceptedAnswer: { "@type": "Answer", text: "Construction itself runs about 1-2 weeks for a 12x20 in Northern Virginia once permits are in hand. The full timeline including HOA architectural review and the county permit is typically 6-10 weeks from contract signing." } },
    { "@type": "Question", name: "Does a 12x20 deck add home value?", acceptedAnswer: { "@type": "Answer", text: "Resale recovery is not a fixed percentage, and this page does not publish one." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function DeckCost12x20Page() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <WebPageSchema dateModified="2026-10-18" url="https://ldndecks.com/deck-cost-12x20-northern-virginia" name="12x20 Deck Cost in Northern Virginia (2026)" description="A 12x20 deck is 240 sq ft. This page does not publish a project total. External benchmarks are labeled with their source." speakable />
      <JsonLd data={faqSchema} />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image src="/images/img13.jpeg" alt="Custom 12x20 composite deck built in Northern Virginia by LDN Decks" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 900px" quality={70} priority />
          </div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>How Much Does a 12x20 Deck Cost in Northern Virginia (2026)</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>240 sq ft &middot; pressure-treated, composite, and PVC &middot; permits &amp; HOA included &middot; as of May 2026</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/get-estimate" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get a Free 12x20 Quote</Link>
          </div>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <section data-speakable="true" style={{ background: '#fff8f0', borderLeft: '4px solid var(--color-primary)', padding: '1.25rem 1.5rem', borderRadius: 6, marginBottom: '2rem' }}>
            <p style={{ margin: 0, fontWeight: 600, lineHeight: 1.6 }}><strong>TL;DR:</strong> A 12x20 deck is 240 sq ft. This page does not publish a 12x20 total. External 2026 benchmarks put a simple, low-height composite deck at $35–$80 per square foot (RemodelCalculators, reviewed October 11, 2026, https://remodelcalculators.com/deck-cost). That rate is not a Loudoun Decks price. A written estimate is the only project price.</p>
          </section>

          <NamedAuthor context="Northern Virginia 12x20 deck builds" lastUpdated="May 2026" />

          <h2 style={S.h2}>Base Price by Material for a 12x20 Deck</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Material', 'Total (12x20)', 'Per sq ft', 'Typical Lifespan'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Pressure-treated wood', 'Not published', 'See the written estimate', 'See the manufacturer'],
                  ['Standard composite (Trex Enhance / Select)', 'Not published', 'See the written estimate', 'See the manufacturer'],
                  ['Premium composite / PVC (Trex Transcend, TimberTech AZEK)', 'Not published', 'See the written estimate', 'See the manufacturer'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#888', fontStyle: 'italic' }}>Material details and warranty terms via <a href="https://www.trex.com/" target="_blank" rel="noopener noreferrer">trex.com</a> and <a href="https://www.timbertech.com/" target="_blank" rel="noopener noreferrer">timbertech.com</a>.</p>

          <h2 style={S.h2}>What Drives the Final Price on a 12x20?</h2>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Elevation</strong> &mdash; a ground-level 12x20 is the cheapest case. A second-story 12x20 needs 6x6 support posts, taller footings, and full guardrails, adding the amount in a written estimate.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Stairs</strong> &mdash; a single short stair set is standard. Wide cascading stairs or a switchback add the amount in a written estimate.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Railing system</strong> &mdash; basic composite balusters are baseline. Aluminum, cable, or glass rails add the amount in a written estimate per linear foot. A 12x20 with three open sides is roughly 44 linear feet of rail.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Border / picture frame</strong> &mdash; a contrasting border board (e.g., Charcoal around Island Mist) adds the amount in a written estimate in material and labor but visually anchors the deck.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Integrated LED lighting</strong> &mdash; stair riser and post lighting tied to a low-voltage transformer adds the amount in a written estimate.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>HOA-required upgrades</strong> &mdash; some Loudoun communities require specific colors, hidden fasteners, or skirting that nudges the build into the premium tier.</li>
          </ol>

          <h2 style={S.h2}>Composite vs Pressure-Treated for a 12x20 &mdash; the 15-Year View</h2>
          <p style={S.p}>On a 12x20 footprint the upfront delta is roughly the amount in a written estimate in favor of pressure-treated wood. But pressure-treated decks in Virginia&apos;s humid summers and freeze-thaw winters require power-washing, sanding, and re-staining roughly every 2 years &mdash; budget the amount in a written estimate each cycle if you DIY, or the amount in a written estimate professionally. Across 15 years that&apos;s the amount in a written estimate in maintenance, plus typical board replacement around year 10&ndash;12. Composite eliminates almost all of it. We break the math down in detail in our <Link href="/composite-deck-vs-wood-deck-virginia" style={{ color: 'var(--color-primary)' }}>composite vs wood deck guide</Link>.</p>

          <h2 style={S.h2}>12x20 Deck Planning Scenarios to Verify Before Case Study Use</h2>
          <p style={S.p}>
            These examples are planning scenarios for budget comparison, not published case studies. Before any item is
            reused as a source-verified example, confirm the actual city, month/year, scope, permit or HOA status,
            photos, and final estimate or invoice.
          </p>
          {[
            { price: 'a written estimate', desc: '12x20 Trex Select, Sterling-style scope', detail: 'Ground-level 12x20 planning scenario in Trex Select Pebble Gray with composite balusters, a single short stair set, and standard fascia. Verify jurisdiction, permit path, and timeline before using as a source-verified example.' },
            { price: 'a written estimate', desc: '12x20 Trex Transcend, Vienna-style scope', detail: 'Second-story 12x20 planning scenario in Trex Transcend Spiced Rum with a Charcoal picture-frame border, black aluminum balusters, and stair-riser lighting allowance. Verify Fairfax permit, engineering, and source evidence before publishing as a formal example.' },
            { price: 'a written estimate', desc: '12x20 pressure-treated, Manassas-style scope', detail: 'Ground-level 12x20 pressure-treated planning scenario with standard wood balusters and a short lawn stair. Verify Prince William permit triggers and final quote evidence before treating as a source-verified example.' },
          ].map((p, i) => (
            <div key={i} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{p.price} &mdash; {p.desc}</h3>
              <p style={{ lineHeight: 1.7 }}>{p.detail}</p>
            </div>
          ))}

          <h2 style={S.h2}>Permits and HOA Notes for a 12x20</h2>
          <p style={S.p}>A 12x20 attached to your house is large enough and almost always elevated enough to require a building permit in Virginia. Inspections cover footings, framing, and final. See the local process in our <Link href="/deck-permit-loudoun-county-virginia" style={{ color: 'var(--color-primary)' }}>Loudoun County deck permit guide</Link> or <Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)' }}>Fairfax County deck permit guide</Link>. County deck details and forms are published by the local building department; for Loudoun, see <a href="https://www.loudoun.gov/2167/Building-Permits" target="_blank" rel="noopener noreferrer">loudoun.gov/Building-Permits</a>.</p>
          <p style={S.p}>If your home is in an HOA community, you also need architectural review approval &mdash; covering color, material, railing style, and placement &mdash; before construction. See our <Link href="/loudoun-county-hoa-deck-rules" style={{ color: 'var(--color-primary)' }}>Loudoun County HOA deck rules guide</Link> for the broader picture.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "How much does a 12x20 deck cost in Northern Virginia?", a: "This page does not publish a pressure-treated, composite, or PVC total for a 12x20 deck. The summary cites an external per-square-foot benchmark with its publisher and date. That figure is not a Loudoun Decks price. A written estimate is the project price." },
            { q: "What is the price per square foot for a 12x20?", a: "This page does not publish a Loudoun Decks price per square foot. The summary cites an external benchmark with its publisher and date. A written estimate is the project price." },
            { q: "Is composite worth it on a 12x20?", a: "This page does not publish an upfront multiple for composite versus wood. Wood needs recurring washing, sanding, and staining. A written estimate compares the two scopes." },
            { q: "Does a 12x20 deck need a permit in Virginia?", a: "Almost always. Attached to the house = permit required. Over 16 inches above grade = permit required. A 12x20 attached to a house clearly meets both." },
            { q: "How long does it take to build a 12x20 deck?", a: "Construction is about 1-2 weeks once permits are in hand. Full timeline including HOA review and the county permit is typically 6-10 weeks from contract." },
            { q: "Does a 12x20 deck add resale value?", a: "Resale recovery is not a fixed percentage, and this page does not publish one." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/deck-cost-16x20-northern-virginia', '16x20 Deck Cost (next size up)'],
              ['/deck-cost-20x20-northern-virginia', '20x20 Deck Cost (large)'],
              ['/deck-payment-estimator', 'Deck Payment Estimator'],
              ['/composite-deck-cost-by-size', 'Composite Deck Cost by Size'],
              ['/composite-deck-cost-northern-virginia', 'composite deck cost in Northern Virginia'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood Deck — 15-Year Cost'],
              ['/deck-permit-loudoun-county-virginia', 'Loudoun County Deck Permit Guide'],
              ['/loudoun-county-hoa-deck-rules', 'Loudoun HOA Deck Rules'],
              ['/deck-cost-calculator', 'Free Deck Cost Calculator'],
              ['/get-estimate', 'Get a Written 12x20 Estimate'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} &rarr;</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Get an Exact 12x20 Quote — Free" buttonText="Request Free Estimate" link="/get-estimate" />
      <ContactHome />
    </>
  );
}
