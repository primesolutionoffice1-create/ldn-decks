import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import NamedAuthor from '@/components/NamedAuthor';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/deck-cost-20x20-northern-virginia',
  title: '20x20 Deck Cost in Northern Virginia (2026)',
  description: 'How much does a 20x20 deck (400 sq ft) cost in Northern Virginia in 2026? Pressure-treated wood $12,000-$21,000, composite $24,000-$40,000, premium PVC $32,000-$52,000. Permits and HOA notes included.',
});

const articleSchema = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "How Much Does a 20x20 Deck Cost in Northern Virginia (2026)",
  datePublished: "2026-05-23",
  dateModified: "2026-05-23",
  author: { "@type": "Person", name: "Nick", url: "https://ldndecks.com/team" },
  publisher: { "@type": "Organization", "@id": "https://ldndecks.com/#organization", name: "Loudoun Decks", url: "https://ldndecks.com" },
  about: "20x20 deck cost in Northern Virginia",
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a 20x20 deck cost in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "As of May 2026, a 20x20 deck (400 sq ft) in Northern Virginia costs roughly $12,000-$21,000 in pressure-treated wood, $24,000-$40,000 in standard composite (Trex Enhance or Select), and $32,000-$52,000 in premium composite or PVC (Trex Transcend or TimberTech AZEK). At this size many homeowners step up to a multi-level layout, which adds 20-40%." } },
    { "@type": "Question", name: "Is 20x20 too big for one level?", acceptedAnswer: { "@type": "Answer", text: "Not at all — a single-level 20x20 is a popular entertaining deck. But on a sloped Northern Virginia lot, a multi-level 20x20 (a dining tier plus a step-down lounge tier) often uses the grade better and creates clearer zones. The decision is driven by your yard, not the size itself." } },
    { "@type": "Question", name: "What is the price per square foot for a 20x20 deck?", acceptedAnswer: { "@type": "Answer", text: "On a 400 sq ft footprint, expect about $30-$53 per sq ft in pressure-treated wood, $60-$100 per sq ft in standard composite, and $80-$130 per sq ft in premium composite or PVC. Larger spans need bigger beams and more footings, so the per-sq-ft savings versus a 16x20 are modest." } },
    { "@type": "Question", name: "Does a 20x20 deck need extra structural support?", acceptedAnswer: { "@type": "Answer", text: "Often yes. A 20-ft span typically needs an intermediate beam line and additional posts, plus joists sized up (often 2x10 or 2x12 instead of 2x8). For composite, joist spacing usually tightens to 12 inches on-center for the recommended deflection. All of this is engineered to the Virginia Residential Code and verified at framing inspection." } },
    { "@type": "Question", name: "How long does it take to build a 20x20 deck?", acceptedAnswer: { "@type": "Answer", text: "Construction is about 2-3 weeks for a single-level 20x20 once permits are in hand, or 3-4 weeks for a multi-level version. Full timeline including HOA architectural review and the county permit is typically 8-12 weeks from contract signing." } },
    { "@type": "Question", name: "Does a 20x20 deck add resale value?", acceptedAnswer: { "@type": "Answer", text: "Yes, especially on larger Northern Virginia lots where the backyard is a main selling feature. Decks generally recoup roughly 60-75% of cost at resale, and a 400 sq ft composite deck reads to buyers as a genuine outdoor room — not just a platform off the kitchen." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function DeckCost20x20Page() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <WebPageSchema url="https://ldndecks.com/deck-cost-20x20-northern-virginia" name="20x20 Deck Cost in Northern Virginia (2026)" description="How much does a 20x20 deck (400 sq ft) cost in Northern Virginia in 2026? Pressure-treated wood $12,000-$21,000, composite $24,000-$40,000, premium PVC $32,000-" speakable />
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
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get a Free 20x20 Quote</Link>
          </div>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <section data-speakable="true" style={{ background: '#fff8f0', borderLeft: '4px solid var(--color-primary)', padding: '1.25rem 1.5rem', borderRadius: 6, marginBottom: '2rem' }}>
            <p style={{ margin: 0, fontWeight: 600, lineHeight: 1.6 }}><strong>TL;DR:</strong> As of May 2026, a 20x20 deck (400 sq ft) in Northern Virginia costs about <strong>$12,000&ndash;$21,000 in pressure-treated wood</strong>, <strong>$24,000&ndash;$40,000 in standard composite</strong>, and <strong>$32,000&ndash;$52,000 in premium composite or PVC</strong>. A multi-level layout at this size adds 20&ndash;40%. Pricing source: LDN Decks recent Loudoun and Fairfax County project quotes, 2026.</p>
          </section>

          <NamedAuthor context="Northern Virginia 20x20 deck builds" lastUpdated="May 2026" />

          <h2 style={S.h2}>Base Price by Material for a 20x20 Deck</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Material', 'Total (20x20)', 'Per sq ft', 'Typical Lifespan'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Pressure-treated wood', '$12,000–$21,000', '$30–$53', '10–15 years (with annual maintenance)'],
                  ['Standard composite (Trex Enhance / Select)', '$24,000–$40,000', '$60–$100', '25–30 years'],
                  ['Premium composite / PVC (Trex Transcend, TimberTech AZEK)', '$32,000–$52,000', '$80–$130', '30–50 years (fade & stain warranty)'],
                  ['Multi-level upgrade (any material)', '+20% to +40%', '—', 'Same as base material'],
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
          <p style={S.p}>On a sloped Northern Virginia lot, though, a <Link href="/multi-level-deck-builder-northern-virginia" style={{ color: 'var(--color-primary)' }}>multi-level 20x20</Link> often uses the grade better &mdash; a higher dining tier off the kitchen, a step-down lounge tier closer to the yard. It costs 20&ndash;40% more than a single level, but it eliminates the visual problem of a deck floating 6 feet above the lawn.</p>

          <h2 style={S.h2}>What Drives the Final Price on a 20x20?</h2>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Spans and structure</strong> &mdash; a 20-ft span needs an intermediate beam line, additional posts, and joists sized up (often 2x10 or 2x12). For composite, joists tighten to 12 inches on-center.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Elevation</strong> &mdash; a ground-level 20x20 is the cheapest. A second-story 20x20 with walkout-basement access adds $4,000&ndash;$10,000 in posts, footings, and rail.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Multi-level layout</strong> &mdash; stepping the deck adds a second beam line, transition framing, and a connecting stair set, adding 20&ndash;40% to the base.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Railing perimeter</strong> &mdash; about 60 linear feet on a three-sided 20x20. Aluminum or cable adds $2,500&ndash;$7,000 over composite balusters.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Integrated lighting</strong> &mdash; a more substantial low-voltage package (stairs, post caps, perimeter rail strips) adds $2,000&ndash;$4,500.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Under-deck dry space</strong> &mdash; for elevated 20x20s, an above-joist drainage system to create dry patio space below adds $3,000&ndash;$6,500.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Built-in features</strong> &mdash; bench seating, planters, an outdoor kitchen rough-in, or a hot-tub-ready zone push the build further.</li>
          </ol>

          <h2 style={S.h2}>Composite vs Pressure-Treated for a 20x20 &mdash; the 15-Year View</h2>
          <p style={S.p}>The upfront delta on a 20x20 is roughly $12,000&ndash;$19,000 in favor of pressure-treated. But at this size the maintenance load on wood is real &mdash; budget $700&ndash;$1,300 every 2 years to power-wash, sand, and restain DIY, or $1,800&ndash;$3,000 professionally. Across 15 years that&apos;s $5,250&ndash;$22,500 in maintenance, plus board replacement around year 10&ndash;12. Composite removes most of it and looks new the whole time. Full math in our <Link href="/composite-deck-vs-wood-deck-virginia" style={{ color: 'var(--color-primary)' }}>composite vs wood deck guide</Link>.</p>

          <h2 style={S.h2}>Recent 20x20 Projects in Northern Virginia</h2>
          {[
            { price: '$28,400', desc: '20x20 Trex Select, Brambleton', detail: 'Single-level ground-floor 20x20 in Trex Select Saddle, composite balusters, and a cascading 6-step stair. Loudoun County permit, Brambleton HOA approval. 13 calendar days on site.' },
            { price: '$41,200', desc: '20x20 Trex Transcend, Vienna', detail: 'Single-level second-story 20x20 in Trex Transcend Spiced Rum with black aluminum railing, picture-frame border, full perimeter and stair LED lighting. Fairfax County permit. 17 calendar days on site.' },
            { price: '$56,800', desc: '20x20 Multi-Level TimberTech AZEK, Great Falls', detail: 'Two-level 20x20 (240 sq ft upper dining tier + 160 sq ft lower lounge tier) in TimberTech AZEK Vintage Dark Hickory, cable railing, integrated heaters, above-joist drainage with dry patio underneath. Fairfax County permit. 24 calendar days on site.' },
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
            { q: "How much does a 20x20 deck cost in Northern Virginia?", a: "Pressure-treated wood: $12,000-$21,000. Standard composite: $24,000-$40,000. Premium composite / PVC: $32,000-$52,000. Multi-level adds 20-40%. As of May 2026 NoVA pricing." },
            { q: "Is 20x20 too big for one level?", a: "Not at all — single-level 20x20 is a popular entertaining deck. On a sloped lot, a multi-level 20x20 often uses the grade better. The decision is driven by your yard." },
            { q: "What is the price per square foot for a 20x20?", a: "About $30-$53/sqft in PT wood, $60-$100/sqft in standard composite, $80-$130/sqft in premium. Per-sqft savings versus a 16x20 are modest because larger spans need bigger framing." },
            { q: "Does a 20x20 need extra structural support?", a: "Often yes. A 20-ft span typically needs an intermediate beam line, more posts, and joists sized up (2x10 or 2x12). For composite, joists usually tighten to 12 inches on-center." },
            { q: "How long does it take to build?", a: "Single-level: 2-3 weeks of construction. Multi-level: 3-4 weeks. Full timeline including HOA review and the county permit is typically 8-12 weeks from contract." },
            { q: "Does a 20x20 deck add resale value?", a: "Yes, especially on larger lots. Decks recoup roughly 60-75% of cost at resale, and a 400 sq ft composite reads to buyers as a real outdoor room." },
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
              ['/multi-level-deck-builder-northern-virginia', 'Multi-Level Deck Builder'],
              ['/how-much-does-a-deck-cost-northern-virginia', 'Northern Virginia Deck Cost Guide (overview)'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood Deck — 15-Year Cost'],
              ['/deck-permit-loudoun-county-virginia', 'Loudoun County Deck Permit Guide'],
              ['/deck-cost-calculator', 'Free Deck Cost Calculator'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} &rarr;</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Get an Exact 20x20 Quote — Free" buttonText="Request Free Estimate" link="/contact" />
      <ContactHome />
    </>
  );
}
