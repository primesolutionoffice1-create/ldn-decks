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
import QuotedPricesBlock from '@/components/QuotedPricesBlock';
import { OPEN_DECK_QUOTED, QUOTE_SOURCE, REVIEWED_ISO, REVIEWED_LABEL, SIZE_400 } from '@/lib/quotedPrices';

const PATH = '/400-square-foot-deck-cost-northern-virginia';
const UPDATED = REVIEWED_ISO;
const PAGE_NAME = '400 Square Foot Deck Cost in Northern Virginia (2026)';
const META_TITLE = '400 Sq Ft Deck Cost in Northern Virginia | Loudoun Decks';
const PAGE_DESCRIPTION = 'Loudoun Decks 2026 quoted prices: new open decks about $61–$102 per sq ft, most around $64–$68. No exact 400 sq ft quote in this set. External benchmarks are labeled below.';

export const metadata = buildMetadata({
  path: PATH,
  title: META_TITLE,
  description: PAGE_DESCRIPTION,
  image: '/social/400-square-foot-deck-cost-northern-virginia-social.png',
});

const BENCHMARK = `${QUOTE_SOURCE} ${OPEN_DECK_QUOTED} ${SIZE_400} External benchmarks: for a simple, low-height composite deck with standard railing and without complex stairs or elevation, installed cost is about $35–$80 per square foot (RemodelCalculators, reviewed October 11, 2026). For 400 sq ft that is about $14,000–$32,000. Angi lists $30–$60 per square foot for deck construction, updated September 24, 2026. These external benchmarks are not Loudoun Decks prices. Permits, demolition, elevation, and complex stairs are excluded from that external range. A written estimate after a site visit is the only project price.`;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a 400 square foot composite deck cost in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: BENCHMARK } },
    { "@type": "Question", name: "Is 400 square feet a good size for a Northern Virginia deck?", acceptedAnswer: { "@type": "Answer", text: "400 sq ft is a common planning size for Northern Virginia homes. It can fit a dining table, typically about 8 feet by 4 feet, plus a separate seating area. A 20-foot-by-20-foot layout and a 16-foot-by-25-foot layout are two configurations used at this size, including on smaller lots in Ashburn, Centreville, Vienna, and McLean." } },
    { "@type": "Question", name: "What does the typical 400 sq ft deck quote include?", acceptedAnswer: { "@type": "Answer", text: "A 400 sq ft quote can include design, a material take-off, structural framing (joists, beams, ledger, and footings), composite or wood surface boards, railings, stairs, basic post-cap lighting, the county building permit, and inspection coordination. Built-in seating, a pergola, extra lighting, and an outdoor kitchen are separate scope. This page does not publish prices for those add-ons. They are priced in the written estimate." } },
    { "@type": "Question", name: "How long does a 400 sq ft deck project take?", acceptedAnswer: { "@type": "Answer", text: "From a signed contract, many 400 sq ft projects run about 8–12 weeks. County permit review is often about 2–4 weeks in Loudoun County or about 3–6 weeks in Fairfax or Arlington. HOA review can run in parallel and often takes about 1–4 weeks, depending on the community. Material delivery is often about 1–3 weeks. On-site construction is often about 1–2 weeks for a single-level 400 sq ft build and about 2–3 weeks for a multi-level build. Many projects break ground about 4–5 weeks after the contract. The written estimate states the schedule for the specific project." } },
    { "@type": "Question", name: "Should I build 400 sq ft, or stretch to 500–600 sq ft?", acceptedAnswer: { "@type": "Answer", text: "Some framing and permit work is shared across the deck, so a larger footprint does not always cost a straight multiple of the 400 sq ft benchmark. This page does not publish the added cost of going from 400 sq ft to 500 or 600 sq ft. That difference is in the written estimate. A larger footprint can be worth planning when the household will use separate dining and lounging areas. If the lot or HOA setbacks cap the build at 400 sq ft, that size can still fit dining plus seating." } },
    { "@type": "Question", name: "What materials work at 400 sq ft?", acceptedAnswer: { "@type": "Answer", text: "Pressure-treated wood, Trex Enhance, Trex Select, Trex Transcend, TimberTech PRO, and TimberTech AZEK Vintage can all be specified at 400 sq ft. Each product line is priced in the written estimate. Compare product lines for shade, color, and poolside or south-facing exposure, then confirm the project price in that estimate." } },
    { "@type": "Question", name: "Do I need a permit for a 400 sq ft deck?", acceptedAnswer: { "@type": "Answer", text: "Yes. A 400 sq ft deck needs a building permit in Northern Virginia counties. Loudoun County lists $265 for its Typical Deck detail for decks under 1,000 sq ft outside incorporated towns (Loudoun County Decks page, accessed October 18, 2026). Fairfax County calculates the fee in PLUS. The published minimum base fee is $141.75 plus levy and surcharge (2026 fee schedule). Those are county fees, not Loudoun Decks prices, and they are excluded from the $35–$80 per square foot benchmark. Attached decks need a permit regardless of size. See the Loudoun County, Fairfax County, Arlington County, and Prince William County deck permit guides for the county process." } },
  ],
};

const S = {
  h2: { fontSize: '2.2rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--color-dark)', borderLeft: '5px solid var(--color-primary)', paddingLeft: '1rem' },
  p: { marginBottom: '1.25rem', lineHeight: 1.8, color: '#333', fontSize: '1.05rem' },
  list: { paddingLeft: '1.5rem', marginBottom: '2rem' },
  listItem: { marginBottom: '0.6rem', lineHeight: 1.7 },
  th: { padding: '0.9rem', textAlign: 'left', borderBottom: '3px solid var(--color-primary)', background: '#fcfcfc', fontWeight: 800, fontSize: '0.9rem' },
  td: { padding: '0.9rem', borderBottom: '1px solid #eee', fontSize: '0.95rem' },
  link: { color: 'var(--color-primary)', fontWeight: 600 },
};

const materials = [
  ['Pressure-treated wood', 'Budget', 'Homeowners who plan regular refinishing'],
  ['Trex Enhance (Naturals)', 'Value composite', 'Shaded yards'],
  ['Trex Select', 'Mid composite', 'Homeowners comparing a broader composite color range'],
  ['Trex Transcend', 'Mid-premium composite', 'Homeowners comparing a wider composite color palette'],
  ['TimberTech PRO', 'Mid-premium composite', 'An alternate composite palette in a similar tier'],
  ['TimberTech AZEK Vintage', 'Premium PVC', 'South-facing yards and pool decks'],
];

const upgrades = [
  ['Integrated low-voltage lighting', 'Extends evening use of the deck'],
  ['Picture-frame border (contrasting boards)', 'Frames the field boards and stair edges'],
  ['Built-in bench seating', 'Adds seating that is part of the structure'],
  ['Cable railings instead of a composite balustrade', 'Keeps more of the view open'],
  ['Multi-level (upper and lower)', 'Separates dining from seating and can follow a slope'],
  ['Open-rafter cedar pergola (12 × 14 ft)', 'Adds overhead shade on a west-facing yard'],
  ['Outdoor kitchen island (grill, counter, and sink)', 'Adds a cooking and serving zone'],
];

export default function FourHundredSqftDeckCostPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema dateModified={UPDATED} url={`https://ldndecks.com${PATH}`} name={PAGE_NAME} description={PAGE_DESCRIPTION} speakable />
      <ArticleSchema
        title="400 Square Foot Deck Cost in Northern Virginia (2026)"
        description={PAGE_DESCRIPTION}
        path={PATH}
        image="/images/img17.jpeg"
        datePublished="2026-05-27"
        dateModified={UPDATED}
      />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>400 Square Foot Deck Cost in Northern Virginia (2026)</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Loudoun Decks 2026 quoted prices for a new open deck, then external benchmarks for 400 sq ft. The written estimate is the project price.</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/get-estimate" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Free Estimate</Link>
          </div>
        </div>
      </section>

      <section data-speakable="true" style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick answer:</p>
          <p>{BENCHMARK}</p>
        </div>
      </section>

      <article style={{ padding: '4rem 0', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <QuotedPricesBlock paragraphs={[OPEN_DECK_QUOTED, SIZE_400]} />
          <p style={S.p}>Last reviewed: {REVIEWED_LABEL}.</p>
          <h2 style={S.h2}>External benchmarks for a 400 sq ft deck</h2>
          <p style={S.p}>A 400 sq ft deck is a common footprint in Northern Virginia. Two configurations used at this size are 20 ft × 20 ft, which can hold dining and lounging in one zone, and 16 ft × 25 ft, which can separate dining from seating. The $35–$80 per square foot figure is an external benchmark for a simple composite deck. It is not a Loudoun Decks price and it is not a brand-by-brand quote.</p>

          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={S.th}>Material</th>
                  <th style={S.th}>Tier</th>
                  <th style={S.th}>Project price</th>
                  <th style={S.th}>Often considered for</th>
                </tr>
              </thead>
              <tbody>
                {materials.map((row) => (
                  <tr key={row[0]}>
                    <td style={S.td}>{row[0]}</td>
                    <td style={S.td}>{row[1]}</td>
                    <td style={S.td}>Written estimate</td>
                    <td style={S.td}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.p}>Each product line above is priced in the written estimate. The $35–$80 per square foot benchmark is a national planning range for a simple composite deck, not a Loudoun Decks price for a named brand.</p>

          <h2 style={S.h2}>What a 400 sq ft deck quote can include</h2>
          <ul style={S.list}>
            <li style={S.listItem}><strong>Design:</strong> drawings and a material take-off before the contract</li>
            <li style={S.listItem}><strong>Structural framing:</strong> joists (often 2×8 or 2×10, depending on span), beams, posts, and footings to the depth the county requires</li>
            <li style={S.listItem}><strong>Ledger and flashing:</strong> flashing at the house wall and structural fasteners to the rim, or a freestanding design where the wall construction calls for it</li>
            <li style={S.listItem}><strong>Surface boards and fasteners:</strong> hidden fasteners in the field, with face screws at perimeters and stairs when the product requires them</li>
            <li style={S.listItem}><strong>Railings:</strong> composite balustrade, aluminum, or cable, depending on the selection</li>
            <li style={S.listItem}><strong>Stairs:</strong> rise and run that meet the code path for the project, with handrails where required</li>
            <li style={S.listItem}><strong>Basic lighting:</strong> post-cap lights at stairs and the perimeter when that package is in the scope</li>
            <li style={S.listItem}><strong>Permit and inspections:</strong> permit paperwork and coordination of the inspections the county schedules</li>
          </ul>

          <h2 style={S.h2}>Common upgrades</h2>
          <p style={S.p}>Each upgrade below changes the scope. This page does not publish an add-on price. The amount is in the written estimate.</p>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={S.th}>Upgrade</th>
                  <th style={S.th}>Where it is priced</th>
                  <th style={S.th}>What it changes</th>
                </tr>
              </thead>
              <tbody>
                {upgrades.map((row) => (
                  <tr key={row[0]}>
                    <td style={S.td}>{row[0]}</td>
                    <td style={S.td}>Written estimate</td>
                    <td style={S.td}>{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>Where 400 sq ft fits, and when to plan a larger deck</h2>
          <p style={S.p}>400 sq ft is a practical size when the lot or HOA setbacks limit the footprint, when the household mainly uses the deck for one activity, or when a later addition is still an open question. Townhome and smaller detached lots in Ashburn, Brambleton, and Centreville often land near this size.</p>
          <p style={S.p}>
            Plan a <Link href="/600-square-foot-deck-cost-northern-virginia" style={S.link}>600 sq ft</Link> deck when the household wants dining separate from lounging, when the deck needs room for larger gatherings, or when the lot can hold a multi-level layout. The added cost from 400 to 600 sq ft is in the written estimate. It is not a second copy of the $14,000–$32,000 benchmark.
          </p>
          <p style={S.p}>
            Plan an <Link href="/800-square-foot-deck-cost-northern-virginia" style={S.link}>800 sq ft</Link> deck when the lot and the program call for more than one level, an outdoor kitchen, or a pergola. This page does not publish an 800 sq ft total.
          </p>

          <h2 style={S.h2}>Permit fees (not included in the benchmark)</h2>
          <p style={S.p}>
            A 400 sq ft deck is large enough to need a building permit in Northern Virginia counties. Loudoun County lists $265 for its Typical Deck detail for decks under 1,000 sq ft outside incorporated towns (
            <a href="https://www.loudoun.gov/1166/Decks" target="_blank" rel="noopener noreferrer" style={S.link}>Loudoun County Decks</a>
            , accessed October 18, 2026). Fairfax County calculates the fee in PLUS. The published minimum base fee is $141.75 plus levy and surcharge (
            <a href="https://www.fairfaxcounty.gov/landdevelopment/sites/landdevelopment/files/assets/documents/fee-schedule.pdf" target="_blank" rel="noopener noreferrer" style={S.link}>2026 fee schedule</a>
            ). Those are county fees, not Loudoun Decks prices, and they are excluded from the $35–$80 per square foot benchmark. Permit paperwork and inspection coordination are part of the project scope. The fee itself is a county charge.
          </p>
          <ul style={S.list}>
            <li style={S.listItem}><Link href="/deck-permit-loudoun-county-virginia" style={S.link}>Loudoun County permit guide</Link></li>
            <li style={S.listItem}><Link href="/deck-permit-fairfax-county-virginia" style={S.link}>Fairfax County permit guide</Link></li>
            <li style={S.listItem}><Link href="/deck-permit-arlington-county-virginia" style={S.link}>Arlington County permit guide</Link></li>
            <li style={S.listItem}><Link href="/deck-permit-prince-william-county-virginia" style={S.link}>Prince William County permit guide</Link></li>
          </ul>

          <h2 style={S.h2}>FAQ — 400 sq ft deck cost</h2>
          {faqSchema.mainEntity.map((q, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{q.name}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{q.acceptedAnswer.text}</p>
            </details>
          ))}

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '3rem 0 1rem' }}>Related guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.8 }}>
            <li>→ <Link href="/composite-deck-cost-northern-virginia" style={S.link}>composite deck cost in Northern Virginia</Link></li>
            <li>→ <Link href="/composite-deck-cost-by-size" style={S.link}>Composite cost by size (300/400/500/600 sq ft)</Link></li>
            <li>→ <Link href="/monthly-payment-composite-deck-northern-virginia" style={S.link}>Monthly payment on a composite deck</Link></li>
            <li>→ <Link href="/deck-lighting-railings-stairs-addon-cost" style={S.link}>Lighting, railings, and stairs</Link></li>
            <li>→ <Link href="/deck-cost-calculator" style={S.link}>Interactive deck cost calculator</Link></li>
            <li>→ <Link href="/600-square-foot-deck-cost-northern-virginia" style={S.link}>600 sq ft deck cost</Link></li>
            <li>→ <Link href="/800-square-foot-deck-cost-northern-virginia" style={S.link}>800 sq ft deck cost</Link></li>
            <li>→ <Link href="/deck-financing" style={S.link}>Deck financing for Northern Virginia</Link></li>
            <li>→ <Link href="/trex-vs-timbertech-vs-azek" style={S.link}>Trex vs TimberTech vs AZEK</Link></li>
          </ul>

        </div>
      </article>

      <SimpleCTA title="Get a 3D rendering and an itemized 400 sq ft estimate" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath={PATH} />
      <NamedAuthor context="Northern Virginia deck pricing" lastUpdated={REVIEWED_LABEL} />
      <ContactHome />
    </>
  );
}
