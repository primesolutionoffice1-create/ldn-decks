import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import NamedAuthor from '@/components/NamedAuthor';
import { buildMetadata } from '@/lib/seo';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/deck-cost-16x20-northern-virginia',
  title: '16x20 Deck Cost in Northern Virginia (2026)',
  description: 'How much does a 16x20 deck (320 sq ft) cost in Northern Virginia in 2026? Pressure-treated wood $9,000-$17,000, composite $20,000-$32,000, premium PVC $26,000-$42,000. Permits and HOA notes included.',
});

const articleSchema = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "How Much Does a 16x20 Deck Cost in Northern Virginia (2026)",
  datePublished: "2026-05-23",
  dateModified: "2026-05-23",
  author: { "@type": "Person", name: "Nick", url: "https://ldndecks.com/team" },
  publisher: { "@type": "Organization", "@id": "https://ldndecks.com/#organization", name: "Loudoun Decks", url: "https://ldndecks.com" },
  about: "16x20 deck cost in Northern Virginia",
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a 16x20 deck cost in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "As of May 2026, a 16x20 deck (320 sq ft) in Northern Virginia costs roughly $9,000-$17,000 in pressure-treated wood, $20,000-$32,000 in standard composite (Trex Enhance or Select), and $26,000-$42,000 in premium composite or PVC (Trex Transcend or TimberTech AZEK). Final pricing depends on elevation, railings, stairs, and HOA-required upgrades." } },
    { "@type": "Question", name: "Is a 16x20 deck big enough for a dining table and a seating area?", acceptedAnswer: { "@type": "Answer", text: "Yes. 320 sq ft comfortably fits a 6-person dining table on one half (about 140 sq ft including chair clearance) and a sofa/chair conversation set on the other (about 100 sq ft), with room for circulation. 16x20 is the most-requested family-deck size in Northern Virginia for exactly this reason." } },
    { "@type": "Question", name: "What is the price per square foot for a 16x20 deck?", acceptedAnswer: { "@type": "Answer", text: "On a 320 sq ft footprint, expect about $28-$53 per sq ft in pressure-treated wood, $63-$100 per sq ft in standard composite, and $81-$131 per sq ft in premium composite or PVC. Per-sq-ft costs are slightly lower than a 12x20 because the fixed costs (design, permitting, footings, stair sets) are spread over more boards." } },
    { "@type": "Question", name: "How long does it take to build a 16x20 deck?", acceptedAnswer: { "@type": "Answer", text: "Construction is about 1.5-2.5 weeks for a 16x20 in Northern Virginia once permits are in hand. The full timeline including HOA architectural review and the county permit is typically 7-11 weeks from contract signing." } },
    { "@type": "Question", name: "Does a 16x20 deck need a permit in Virginia?", acceptedAnswer: { "@type": "Answer", text: "Yes. Virginia requires a permit for any deck attached to the house with a ledger, and a 320 sq ft footprint is well above the 256 sq ft exemption threshold for freestanding low decks. See our Loudoun County deck permit guide for the local process." } },
    { "@type": "Question", name: "Does a 16x20 deck add resale value?", acceptedAnswer: { "@type": "Answer", text: "Yes, and 16x20 is often a sweet spot. National remodeling data shows decks recoup roughly 60-75% of cost at resale, and at 320 sq ft you have enough usable space to genuinely change how buyers see the backyard — without the elevation costs of a much larger deck." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function DeckCost16x20Page() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image src="/images/img17.jpeg" alt="Custom 16x20 composite deck built in Northern Virginia by LDN Decks" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 900px" quality={70} priority />
          </div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>How Much Does a 16x20 Deck Cost in Northern Virginia (2026)</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>320 sq ft &middot; the family-deck sweet spot &middot; permits &amp; HOA included &middot; as of May 2026</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get a Free 16x20 Quote</Link>
          </div>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <section data-speakable="true" style={{ background: '#fff8f0', borderLeft: '4px solid var(--color-primary)', padding: '1.25rem 1.5rem', borderRadius: 6, marginBottom: '2rem' }}>
            <p style={{ margin: 0, fontWeight: 600, lineHeight: 1.6 }}><strong>TL;DR:</strong> As of May 2026, a 16x20 deck (320 sq ft) in Northern Virginia costs about <strong>$9,000&ndash;$17,000 in pressure-treated wood</strong>, <strong>$20,000&ndash;$32,000 in standard composite</strong>, and <strong>$26,000&ndash;$42,000 in premium composite or PVC</strong>. 320 sq ft is the most-requested family-deck size in NoVA. Pricing source: LDN Decks recent Loudoun and Fairfax County project quotes, 2026.</p>
          </section>

          <NamedAuthor context="Northern Virginia 16x20 deck builds" lastUpdated="May 2026" />

          <h2 style={S.h2}>Base Price by Material for a 16x20 Deck</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Material', 'Total (16x20)', 'Per sq ft', 'Typical Lifespan'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Pressure-treated wood', '$9,000–$17,000', '$28–$53', '10–15 years (with annual maintenance)'],
                  ['Standard composite (Trex Enhance / Select)', '$20,000–$32,000', '$63–$100', '25–30 years'],
                  ['Premium composite / PVC (Trex Transcend, TimberTech AZEK)', '$26,000–$42,000', '$81–$131', '30–50 years (fade & stain warranty)'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#888', fontStyle: 'italic' }}>Material details and warranty terms via <a href="https://www.trex.com/" target="_blank" rel="noopener noreferrer">trex.com</a> and <a href="https://www.timbertech.com/" target="_blank" rel="noopener noreferrer">timbertech.com</a>.</p>

          <h2 style={S.h2}>Why 16x20 Is the Family-Deck Sweet Spot</h2>
          <p style={S.p}>320 sq ft is enough room to genuinely zone the deck. A 6-person dining table with chair clearance takes about 10x14 (140 sq ft); a small sofa or two armchairs takes another 8x12 or so. That leaves real circulation space along the slider and to the stairs. Step down to 12x20 and one zone is always crowding the other; step up to 20x20 and you&apos;re into multi-level territory and a steeper price curve. The 16x20 is genuinely the size most NoVA families end up wanting.</p>

          <h2 style={S.h2}>What Drives the Final Price on a 16x20?</h2>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Elevation</strong> &mdash; a ground-level 16x20 is the cheapest case. Second-story decks for walkout-basement homes need 6x6 posts and taller footings, adding $3,500&ndash;$8,000.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Railing perimeter</strong> &mdash; a 16x20 with three open sides is about 52 linear feet of rail. Aluminum or cable railing adds $2,000&ndash;$6,000 over composite balusters.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Stair configuration</strong> &mdash; a single short stair is cheapest. Wide cascading stairs or a switchback add $2,000&ndash;$5,000.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Picture-frame border</strong> &mdash; a contrasting border board around a 16x20 adds $700&ndash;$1,600 in material and labor; it visually anchors the larger field.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Integrated lighting</strong> &mdash; stair riser and post-cap lights on a low-voltage transformer add $1,400&ndash;$3,500.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Under-deck dry space</strong> &mdash; for elevated decks, an above-joist drainage system to keep the basement walkout dry adds $2,500&ndash;$5,000.</li>
          </ol>

          <h2 style={S.h2}>Composite vs Pressure-Treated for a 16x20 &mdash; the 15-Year View</h2>
          <p style={S.p}>On a 16x20 the upfront delta is roughly $11,000&ndash;$15,000 in favor of pressure-treated. But a 16x20 wood deck is bigger to maintain &mdash; budget $500&ndash;$1,000 to power-wash, sand, and restain every 2 years if you DIY, or $1,500&ndash;$2,500 professionally. Over 15 years that&apos;s $3,750&ndash;$18,750 in maintenance, plus likely board replacement around year 10&ndash;12. Composite removes almost all of it. Full breakdown in our <Link href="/composite-deck-vs-wood-deck-virginia" style={{ color: 'var(--color-primary)' }}>composite vs wood deck guide</Link>.</p>

          <h2 style={S.h2}>Recent 16x20 Projects in Northern Virginia</h2>
          {[
            { price: '$23,600', desc: '16x20 Trex Select, Ashburn', detail: 'Ground-level 16x20 in Trex Select Pebble Gray, composite balusters, single 4-step stair set, and standard fascia. Loudoun County permit. 11 calendar days on site.' },
            { price: '$31,800', desc: '16x20 Trex Transcend, Reston', detail: 'Second-story 16x20 in Trex Transcend Island Mist with a Charcoal picture-frame border, black aluminum balusters, integrated stair LED lighting. Fairfax County permit. 14 calendar days on site.' },
            { price: '$36,400', desc: '16x20 TimberTech AZEK Vintage, McLean', detail: 'Second-story 16x20 in TimberTech AZEK Vintage Dark Hickory over an above-joist drainage system that keeps the walkout-basement patio below dry. Fairfax County permit. 17 calendar days on site.' },
          ].map((p, i) => (
            <div key={i} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{p.price} &mdash; {p.desc}</h3>
              <p style={{ lineHeight: 1.7 }}>{p.detail}</p>
            </div>
          ))}

          <h2 style={S.h2}>Permits and HOA Notes for a 16x20</h2>
          <p style={S.p}>A 16x20 attached deck always needs a building permit in Virginia. At 320 sq ft it&apos;s also well above the 256 sq ft exemption for freestanding low decks, so a freestanding 16x20 needs a permit too. See <Link href="/deck-permit-loudoun-county-virginia" style={{ color: 'var(--color-primary)' }}>Loudoun County</Link> or <Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)' }}>Fairfax County</Link> permit guides for the local process; Loudoun deck details and forms are at <a href="https://www.loudoun.gov/2167/Building-Permits" target="_blank" rel="noopener noreferrer">loudoun.gov/Building-Permits</a>.</p>
          <p style={S.p}>HOA architectural review is also almost always required &mdash; covering color, material, railing style, and placement &mdash; before construction. See our <Link href="/loudoun-county-hoa-deck-rules" style={{ color: 'var(--color-primary)' }}>Loudoun County HOA deck rules guide</Link> for the broader picture.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "How much does a 16x20 deck cost in Northern Virginia?", a: "Pressure-treated wood: $9,000-$17,000. Standard composite: $20,000-$32,000. Premium composite / PVC: $26,000-$42,000. As of May 2026 NoVA pricing." },
            { q: "Is a 16x20 big enough for a dining table and a seating area?", a: "Yes. 320 sq ft fits a 6-person dining table (about 140 sq ft) plus a small sofa or two armchairs (about 100 sq ft) with real circulation space — the sweet spot for family decks." },
            { q: "What is the price per square foot for a 16x20?", a: "About $28-$53/sqft in PT wood, $63-$100/sqft in standard composite, $81-$131/sqft in premium. Slightly lower than a 12x20 because fixed costs spread over more boards." },
            { q: "How long does it take to build?", a: "Construction is about 1.5-2.5 weeks once permits are in hand. Full timeline including HOA review and the county permit is typically 7-11 weeks from contract." },
            { q: "Does a 16x20 deck need a permit?", a: "Yes. Attached = permit required. At 320 sq ft, even a freestanding 16x20 is above the 256 sq ft exemption threshold and needs a permit." },
            { q: "Does a 16x20 deck add resale value?", a: "Yes, and 16x20 is often a sweet spot — large enough to genuinely change how buyers see the backyard without the elevation costs of a much larger build." },
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
              ['/deck-cost-20x20-northern-virginia', '20x20 Deck Cost (larger)'],
              ['/how-much-does-a-deck-cost-northern-virginia', 'Northern Virginia Deck Cost Guide (overview)'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood Deck — 15-Year Cost'],
              ['/deck-permit-loudoun-county-virginia', 'Loudoun County Deck Permit Guide'],
              ['/loudoun-county-hoa-deck-rules', 'Loudoun HOA Deck Rules'],
              ['/deck-cost-calculator', 'Free Deck Cost Calculator'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} &rarr;</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Get an Exact 16x20 Quote — Free" buttonText="Request Free Estimate" link="/contact" />
      <ContactHome />
    </>
  );
}
