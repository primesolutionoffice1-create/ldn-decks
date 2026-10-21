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
  path: '/deck-cost-20x20-northern-virginia',
  title: '20x20 Deck Cost in Northern Virginia (2026)',
  description: 'A 20x20 deck is 400 sq ft. Dollar figures on this page are external benchmarks, not a Loudoun Decks price.',
  image: '/social/deck-cost-20x20-northern-virginia-social.png',
});

const articleSchema = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "How Much Does a 20x20 Deck Cost in Northern Virginia (2026)",
  datePublished: "2026-05-23",
  dateModified: "2026-10-18",
  author: { "@type": "Person", "@id": FOUNDER_ID, name: BUSINESS.founder.name, alternateName: "Nick", url: "https://ldndecks.com/team" },
  publisher: { "@type": "Organization", "@id": "https://ldndecks.com/#organization", name: "Loudoun Decks", url: "https://ldndecks.com" },
  about: "20x20 deck cost in Northern Virginia",
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a 20x20 deck cost in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "This page does not publish a pressure-treated, composite, or PVC total for a 20x20 deck, and it does not publish a multi-level percentage. The summary cites external benchmarks with the publisher and date. Those figures are not a Loudoun Decks price. A written estimate is the project price." } },
    { "@type": "Question", name: "Is 20x20 too big for one level?", acceptedAnswer: { "@type": "Answer", text: "Not at all — a single-level 20x20 is a popular entertaining deck. But on a sloped Northern Virginia lot, a multi-level 20x20 (a dining tier plus a step-down lounge tier) often uses the grade better and creates clearer zones. The decision is driven by your yard, not the size itself." } },
    { "@type": "Question", name: "What is the price per square foot for a 20x20 deck?", acceptedAnswer: { "@type": "Answer", text: "This page does not publish a Loudoun Decks price per square foot. The summary cites external benchmarks with the publisher and date. Larger spans need bigger beams and more footings. A written estimate is the project price." } },
    { "@type": "Question", name: "Does a 20x20 deck need extra structural support?", acceptedAnswer: { "@type": "Answer", text: "Often yes. A 20-ft span typically needs an intermediate beam line and additional posts, plus joists sized up (often 2x10 or 2x12 instead of 2x8). For composite, joist spacing usually tightens to 12 inches on-center for the recommended deflection. All of this is engineered to the Virginia Residential Code and verified at framing inspection." } },
    { "@type": "Question", name: "How long does it take to build a 20x20 deck?", acceptedAnswer: { "@type": "Answer", text: "Construction is about 2-3 weeks for a single-level 20x20 once permits are in hand, or 3-4 weeks for a multi-level version. Full timeline including HOA architectural review and the county permit is typically 8-12 weeks from contract signing." } },
    { "@type": "Question", name: "Does a 20x20 deck add resale value?", acceptedAnswer: { "@type": "Answer", text: "Resale recovery is not a fixed percentage, and this page does not publish one." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function DeckCost20x20Page() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <WebPageSchema dateModified="2026-10-18" url="https://ldndecks.com/deck-cost-20x20-northern-virginia" name="20x20 Deck Cost in Northern Virginia (2026)" description="A 20x20 deck is 400 sq ft. Dollar figures on this page are external benchmarks, not a Loudoun Decks price." speakable />
      <JsonLd data={faqSchema} />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image src="/images/img26.jpeg" alt="Custom 20x20 composite deck built in Northern Virginia by LDN Decks" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 900px" quality={70} priority />
          </div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>How Much Does a 20x20 Deck Cost in Northern Virginia (2026)</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>400 sq ft &middot; entertaining-scale &middot; single-level or multi-level &middot; as of May 2026</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/get-estimate" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get a Free 20x20 Quote</Link>
          </div>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <section data-speakable="true" style={{ background: '#fff8f0', borderLeft: '4px solid var(--color-primary)', padding: '1.25rem 1.5rem', borderRadius: 6, marginBottom: '2rem' }}>
            <p style={{ margin: 0, fontWeight: 600, lineHeight: 1.6 }}><strong>TL;DR:</strong> A 20×20 deck is 400 sq ft. For a simple, low-height composite deck with standard railing and without complex stairs or elevation, external 2026 benchmarks put installed cost at $35–$80 per square foot, or about $14,000–$32,000 (RemodelCalculators, reviewed October 11, 2026, https://remodelcalculators.com/deck-cost). Angi lists $30–$60 per square foot for deck construction (updated September 24, 2026, https://www.angi.com/articles/how-much-does-it-cost-build-deck.htm). These are national planning estimates, not Loudoun Decks prices. This page does not publish a pressure-treated total or a multi-level percentage. A written estimate is the only project price.</p>
          </section>

          <NamedAuthor context="Northern Virginia 20x20 deck builds" lastUpdated="May 2026" />

          <h2 style={S.h2}>Base Price by Material for a 20x20 Deck</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Material', 'Total (20x20)', 'Per sq ft', 'Typical Lifespan'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Pressure-treated wood', 'Not published', 'See the written estimate', 'See the manufacturer'],
                  ['Standard composite (Trex Enhance / Select)', 'Not published', 'See the written estimate', 'See the manufacturer'],
                  ['Premium composite / PVC (Trex Transcend, TimberTech AZEK)', 'Not published', 'See the written estimate', 'See the manufacturer'],
                  ['Multi-level upgrade (any material)', 'Not published', '—', 'Same structure as the base'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#888', fontStyle: 'italic' }}>Material details and warranty terms via <a href="https://www.trex.com/" target="_blank" rel="noopener noreferrer">trex.com</a> and <a href="https://www.timbertech.com/" target="_blank" rel="noopener noreferrer">timbertech.com</a>.</p>

          <h2 style={S.h2}>Single-Level or Multi-Level at 20x20?</h2>
          <p style={S.p}>At 400 sq ft you can comfortably zone a single-level deck into dining, lounging, and a grill area without crowding. On a flat lot a single-level 20x20 is the most cost-effective answer.</p>
          <p style={S.p}>On a sloped Northern Virginia lot, a <Link href="/multi-level-deck-builder-northern-virginia" style={{ color: 'var(--color-primary)' }}>multi-level 20x20</Link> often uses the grade better: a higher dining tier off the kitchen and a step-down lounge tier closer to the yard. This page does not publish a percentage for that layout. The difference is in the written estimate.</p>

          <h2 style={S.h2}>What Drives the Final Price on a 20x20?</h2>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Spans and structure</strong> &mdash; a 20-ft span needs an intermediate beam line, additional posts, and joists sized up (often 2x10 or 2x12). For composite, joists tighten to 12 inches on-center.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Elevation</strong> &mdash; a ground-level 20x20 is the cheapest. A second-story 20x20 with walkout-basement access adds the amount in a written estimate in posts, footings, and rail.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Multi-level layout</strong> &mdash; stepping the deck adds a second beam line, transition framing, and a connecting stair set. This page does not publish a percentage for that work. The amount is in the written estimate.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Railing perimeter</strong> &mdash; about 60 linear feet on a three-sided 20x20. Aluminum or cable adds the amount in a written estimate over composite balusters.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Integrated lighting</strong> &mdash; a more substantial low-voltage package (stairs, post caps, perimeter rail strips) adds the amount in a written estimate.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Under-deck dry space</strong> &mdash; for elevated 20x20s, an above-joist drainage system to create dry patio space below adds the amount in a written estimate.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Built-in features</strong> &mdash; bench seating, planters, an outdoor kitchen rough-in, or a hot-tub-ready zone push the build further.</li>
          </ol>

          <h2 style={S.h2}>Composite vs Pressure-Treated for a 20x20 &mdash; the 15-Year View</h2>
          <p style={S.p}>The upfront delta on a 20x20 is roughly the amount in a written estimate in favor of pressure-treated. But at this size the maintenance load on wood is real &mdash; budget the amount in a written estimate every 2 years to power-wash, sand, and restain DIY, or the amount in a written estimate professionally. Across 15 years that&apos;s the amount in a written estimate in maintenance, plus board replacement around year 10&ndash;12. Composite removes most of it and looks new the whole time. Full math in our <Link href="/composite-deck-vs-wood-deck-virginia" style={{ color: 'var(--color-primary)' }}>composite vs wood deck guide</Link>.</p>

          <h2 style={S.h2}>20x20 Deck Planning Scenarios to Verify Before Case Study Use</h2>
          <p style={S.p}>
            These examples are planning scenarios, not formal case studies. To convert any scenario into a
            published source-verified example, first verify source evidence for the city, month/year, photos, permit or HOA
            status, final material list, and invoice-backed pricing.
          </p>
          {[
            { price: 'a written estimate', desc: '20x20 Trex Select, Brambleton-style scope', detail: 'Single-level 20x20 planning scenario in Trex Select Saddle with composite balusters and cascading stair allowance. Verify Loudoun permit path, HOA status, timeline, and source evidence before using as a source-verified example.' },
            { price: 'a written estimate', desc: '20x20 Trex Transcend, Vienna-style scope', detail: 'Second-story 20x20 planning scenario in Trex Transcend Spiced Rum with black aluminum railing, picture-frame border, and perimeter/stair lighting allowance. Verify Fairfax permit, engineering, and owner evidence before publishing as a formal case study.' },
            { price: 'a written estimate', desc: '20x20 multi-level TimberTech AZEK, Great Falls-style scope', detail: 'Two-level 20x20 planning scenario with upper dining tier, lower lounge tier, TimberTech AZEK Vintage-style PVC, cable railing, above-joist drainage, and premium outdoor-living allowances. Confirm final scope, permit status, photos, and invoice evidence first.' },
          ].map((p, i) => (
            <div key={i} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{p.price} &mdash; {p.desc}</h3>
              <p style={{ lineHeight: 1.7 }}>{p.detail}</p>
            </div>
          ))}

          <h2 style={S.h2}>Permits and HOA Notes for a 20x20</h2>
          <p style={S.p}>A 20x20 always needs a building permit in Virginia &mdash; both because it&apos;s typically attached and because at 400 sq ft it&apos;s well above the 256 sq ft exemption for freestanding low decks. Inspections cover footings, framing (where the bigger beams and tighter joist spacing get verified), and final. See <Link href="/deck-permit-loudoun-county-virginia" style={{ color: 'var(--color-primary)' }}>Loudoun County</Link> or <Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)' }}>Fairfax County</Link> permit guides; Loudoun deck details are at <a href="https://www.loudoun.gov/2167/Building-Permits" target="_blank" rel="noopener noreferrer">loudoun.gov/Building-Permits</a>.</p>
          <p style={S.p}>HOA architectural review is almost always required &mdash; covering color, material, railing style, and placement &mdash; and on a deck this size committees often look closely at lot coverage and the back-fence sight line. See our <Link href="/loudoun-county-hoa-deck-rules" style={{ color: 'var(--color-primary)' }}>Loudoun County HOA deck rules guide</Link>.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "How much does a 20x20 deck cost in Northern Virginia?", a: "This page does not publish a pressure-treated, composite, or PVC total for a 20x20 deck, and it does not publish a multi-level percentage. The summary cites external benchmarks with the publisher and date. Those figures are not a Loudoun Decks price. A written estimate is the project price." },
            { q: "Is 20x20 too big for one level?", a: "Not at all — single-level 20x20 is a popular entertaining deck. On a sloped lot, a multi-level 20x20 often uses the grade better. The decision is driven by your yard." },
            { q: "What is the price per square foot for a 20x20?", a: "This page does not publish a Loudoun Decks price per square foot. The summary cites external benchmarks with the publisher and date. Larger spans need bigger beams and more footings. A written estimate is the project price." },
            { q: "Does a 20x20 need extra structural support?", a: "Often yes. A 20-ft span typically needs an intermediate beam line, more posts, and joists sized up (2x10 or 2x12). For composite, joists usually tighten to 12 inches on-center." },
            { q: "How long does it take to build?", a: "Single-level: 2-3 weeks of construction. Multi-level: 3-4 weeks. Full timeline including HOA review and the county permit is typically 8-12 weeks from contract." },
            { q: "Does a 20x20 deck add resale value?", a: "Resale recovery is not a fixed percentage, and this page does not publish one." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/deck-cost-12x20-northern-virginia', '12x20 Deck Cost (smaller)'],
              ['/deck-cost-16x20-northern-virginia', '16x20 Deck Cost (mid)'],
              ['/deck-payment-estimator', 'Deck Payment Estimator'],
              ['/composite-deck-cost-by-size', 'Composite Deck Cost by Size'],
              ['/multi-level-deck-builder-northern-virginia', 'Multi-Level Deck Builder'],
              ['/composite-deck-cost-northern-virginia', 'composite deck cost in Northern Virginia'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood Deck — 15-Year Cost'],
              ['/deck-permit-loudoun-county-virginia', 'Loudoun County Deck Permit Guide'],
              ['/deck-cost-calculator', 'Free Deck Cost Calculator'],
              ['/get-estimate', 'Get a Written 20x20 Estimate'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} &rarr;</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Get an Exact 20x20 Quote — Free" buttonText="Request Free Estimate" link="/get-estimate" />
      <ContactHome />
    </>
  );
}
