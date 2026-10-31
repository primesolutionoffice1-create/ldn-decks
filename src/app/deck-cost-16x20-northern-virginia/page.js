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
import QuotedPricesBlock from '@/components/QuotedPricesBlock';
import { OPEN_DECK_QUOTED, QUOTE_SOURCE, REVIEWED_ISO, REVIEWED_LABEL, SIZE_320 } from '@/lib/quotedPrices';

const COST_ANSWER = `${QUOTE_SOURCE} ${OPEN_DECK_QUOTED} ${SIZE_320} External benchmarks: for a simple, low-height composite deck with standard railing and without complex stairs or elevation, installed cost is about $35–$80 per square foot, or about $11,200–$25,600 for 320 sq ft (RemodelCalculators, reviewed October 11, 2026, https://remodelcalculators.com/deck-cost). Angi lists $30–$60 per square foot for deck construction (updated September 24, 2026, https://www.angi.com/articles/how-much-does-it-cost-build-deck.htm). These external benchmarks are not Loudoun Decks prices. This page does not publish a separate pressure-treated total for 320 sq ft. A written estimate after a site visit is the only project price.`;
const RATE_ANSWER = `In Loudoun Decks' recent written quotes, a new open deck was about $61–$102 per sq ft, most around $64–$68 per sq ft. ${SIZE_320} External benchmarks are $35–$80 per square foot (RemodelCalculators, reviewed October 11, 2026) and $30–$60 per square foot (Angi, updated September 24, 2026). Those external rates are not Loudoun Decks prices. The written estimate after a site visit is the only project price.`;

export const metadata = buildMetadata({
  path: '/deck-cost-16x20-northern-virginia',
  title: '16x20 Deck Cost in Northern Virginia (2026)',
  description: 'A 16x20 deck is 320 sq ft. Loudoun Decks 2026 quoted prices: about $61–$102 per sq ft, most around $64–$68. Nearby quotes are 304 and 327 sq ft. External benchmarks are labeled below.',
  image: '/social/deck-cost-16x20-northern-virginia-social.png',
});

const articleSchema = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "How Much Does a 16x20 Deck Cost in Northern Virginia (2026)",
  datePublished: "2026-05-23",
  dateModified: REVIEWED_ISO,
  author: { "@type": "Person", "@id": FOUNDER_ID, name: BUSINESS.founder.name, alternateName: "Nick", url: "https://ldndecks.com/team" },
  publisher: { "@type": "Organization", "@id": "https://ldndecks.com/#organization", name: "Loudoun Decks", url: "https://ldndecks.com" },
  about: "16x20 deck cost in Northern Virginia",
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a 16x20 deck cost in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: COST_ANSWER } },
    { "@type": "Question", name: "Is a 16x20 deck big enough for a dining table and a seating area?", acceptedAnswer: { "@type": "Answer", text: "Yes. 320 sq ft fits a 6-person dining table on one half and a seating group on the other, with room to walk between them." } },
    { "@type": "Question", name: "What is the price per square foot for a 16x20 deck?", acceptedAnswer: { "@type": "Answer", text: RATE_ANSWER } },
    { "@type": "Question", name: "How long does it take to build a 16x20 deck?", acceptedAnswer: { "@type": "Answer", text: "Construction is about 1.5-2.5 weeks for a 16x20 in Northern Virginia once permits are in hand. The full timeline including HOA architectural review and the county permit is typically 7-11 weeks from contract signing." } },
    { "@type": "Question", name: "Does a 16x20 deck need a permit in Virginia?", acceptedAnswer: { "@type": "Answer", text: "Yes. Virginia requires a permit for any deck attached to the house with a ledger, and a 320 sq ft footprint is well above the 256 sq ft exemption threshold for freestanding low decks. See our Loudoun County deck permit guide for the local process." } },
    { "@type": "Question", name: "Does a 16x20 deck add resale value?", acceptedAnswer: { "@type": "Answer", text: "Resale recovery is not a fixed percentage, and this page does not publish one. At 320 sq ft the deck is large enough to change how the backyard is used." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function DeckCost16x20Page() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <WebPageSchema dateModified={REVIEWED_ISO} url="https://ldndecks.com/deck-cost-16x20-northern-virginia" name="16x20 Deck Cost in Northern Virginia (2026)" description="A 16x20 deck is 320 sq ft. Loudoun Decks 2026 quoted prices: about $61–$102 per sq ft, most around $64–$68. External benchmarks are labeled below." speakable />
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
            <Link href="/get-estimate" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get a Free 16x20 Quote</Link>
          </div>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <section data-speakable="true" style={{ background: '#fff8f0', borderLeft: '4px solid var(--color-primary)', padding: '1.25rem 1.5rem', borderRadius: 6, marginBottom: '2rem' }}>
            <p style={{ margin: 0, fontWeight: 600, lineHeight: 1.6 }}><strong>TL;DR:</strong> {COST_ANSWER}</p>
          </section>

          <QuotedPricesBlock paragraphs={[OPEN_DECK_QUOTED, SIZE_320]} />
          <NamedAuthor context="Northern Virginia 16x20 deck builds" lastUpdated={REVIEWED_LABEL} />

          <h2 style={S.h2}>Base Price by Material for a 16x20 Deck</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Material', 'Total (16x20)', 'Per sq ft', 'Typical Lifespan'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
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

          <h2 style={S.h2}>Why 16x20 Is the Family-Deck Sweet Spot</h2>
          <p style={S.p}>320 sq ft is enough room to genuinely zone the deck. A 6-person dining table with chair clearance takes about 10x14 (140 sq ft); a small sofa or two armchairs takes another 8x12 or so. That leaves real circulation space along the slider and to the stairs. Step down to 12x20 and one zone is always crowding the other; step up to 20x20 and you&apos;re into multi-level territory and a steeper price curve. The 16x20 is genuinely the size most NoVA families end up wanting.</p>

          <h2 style={S.h2}>What Drives the Final Price on a 16x20?</h2>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Elevation</strong> &mdash; a ground-level 16x20 is the cheapest case. Second-story decks for walkout-basement homes need 6x6 posts and taller footings, adding the amount in a written estimate.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Railing perimeter</strong> &mdash; a 16x20 with three open sides is about 52 linear feet of rail. Aluminum or cable railing adds the amount in a written estimate over composite balusters.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Stair configuration</strong> &mdash; a single short stair is cheapest. Wide cascading stairs or a switchback add the amount in a written estimate.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Picture-frame border</strong> &mdash; a contrasting border board around a 16x20 adds the amount in a written estimate in material and labor; it visually anchors the larger field.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Integrated lighting</strong> &mdash; stair riser and post-cap lights on a low-voltage transformer add the amount in a written estimate.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Under-deck dry space</strong> &mdash; for elevated decks, an above-joist drainage system to keep the basement walkout dry adds the amount in a written estimate.</li>
          </ol>

          <h2 style={S.h2}>Composite vs Pressure-Treated for a 16x20 &mdash; the 15-Year View</h2>
          <p style={S.p}>On a 16x20 the upfront delta is roughly the amount in a written estimate in favor of pressure-treated. But a 16x20 wood deck is bigger to maintain &mdash; budget the amount in a written estimate to power-wash, sand, and restain every 2 years if you DIY, or the amount in a written estimate professionally. Over 15 years that&apos;s the amount in a written estimate in maintenance, plus likely board replacement around year 10&ndash;12. Composite removes almost all of it. Full breakdown in our <Link href="/composite-deck-vs-wood-deck-virginia" style={{ color: 'var(--color-primary)' }}>composite vs wood deck guide</Link>.</p>

          <h2 style={S.h2}>16x20 Deck Planning Scenarios to Verify Before Case Study Use</h2>
          <p style={S.p}>
            These are planning scenarios for scope and budget comparison. They should not be republished as
            source-verified examples until owner evidence confirms city, month/year, final scope, permit or HOA status, photos,
            and invoice-backed pricing.
          </p>
          {[
            { price: 'a written estimate', desc: '16x20 Trex Select, Ashburn-style scope', detail: 'Ground-level 16x20 planning scenario in Trex Select Pebble Gray with composite balusters, a single short stair set, and standard fascia. Verify Loudoun permit path and source evidence before use as a source-verified example.' },
            { price: 'a written estimate', desc: '16x20 Trex Transcend, Reston-style scope', detail: 'Second-story 16x20 planning scenario in Trex Transcend Island Mist with a Charcoal picture-frame border, black aluminum balusters, and stair LED allowance. Verify Fairfax permit, timeline, and photos before publishing as a formal case study.' },
            { price: 'a written estimate', desc: '16x20 TimberTech AZEK Vintage, McLean-style scope', detail: 'Second-story 16x20 planning scenario using TimberTech AZEK Vintage-style PVC over an above-joist drainage system. Confirm engineering, drainage scope, permit status, and final owner evidence before treating as a source-verified work example.' },
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
          {faqSchema.mainEntity.map((item) => (
            <details key={item.name} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{item.name}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{item.acceptedAnswer.text}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/deck-cost-12x20-northern-virginia', '12x20 Deck Cost (smaller)'],
              ['/deck-cost-20x20-northern-virginia', '20x20 Deck Cost (larger)'],
              ['/deck-payment-estimator', 'Deck Payment Estimator'],
              ['/composite-deck-cost-by-size', 'Composite Deck Cost by Size'],
              ['/composite-deck-cost-northern-virginia', 'composite deck cost in Northern Virginia'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood Deck — 15-Year Cost'],
              ['/deck-permit-loudoun-county-virginia', 'Loudoun County Deck Permit Guide'],
              ['/loudoun-county-hoa-deck-rules', 'Loudoun HOA Deck Rules'],
              ['/deck-cost-calculator', 'Free Deck Cost Calculator'],
              ['/get-estimate', 'Get a Written 16x20 Estimate'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} &rarr;</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Get an Exact 16x20 Quote — Free" buttonText="Request Free Estimate" link="/get-estimate" />
      <ContactHome />
    </>
  );
}
