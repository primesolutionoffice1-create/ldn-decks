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

export const metadata = buildMetadata({
  path: '/400-square-foot-deck-cost-northern-virginia',
  title: '400 Square Foot Deck Cost in Northern Virginia (2026) | Loudoun Decks',
  description: 'Real 2026 pricing for a 400 sqft composite deck in Northern Virginia. Trex Enhance $14k–$22k. Trex Transcend $20k–$30k. TimberTech AZEK $24k–$34k. Includes permit, design, and 3-inspection cost.',
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a 400 square foot composite deck cost in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "A 400 sqft composite deck in Northern Virginia costs $14,000–$34,000 installed in 2026. Trex Enhance lands at $14k–$22k. Trex Transcend lands at $20k–$30k. TimberTech AZEK premium PVC lands at $24k–$34k. The range includes design, materials, framing, footings, railings, basic lighting, permit, and the 3 required inspections. Multi-level designs, integrated outdoor kitchens, and premium railings (cable, glass) push above the range." } },
    { "@type": "Question", name: "Is 400 square feet a good size for a Northern Virginia deck?", acceptedAnswer: { "@type": "Answer", text: "400 sqft is one of the most common sizes for Northern Virginia homes — a balanced footprint that accommodates a dining table (typically 8 feet × 4 feet) plus a separate seating area without crowding. A 20-foot-by-20-foot or 16-foot-by-25-foot configuration are the two most popular layouts at this size. Common in Ashburn, Centreville, Vienna, and McLean on quarter-acre lots." } },
    { "@type": "Question", name: "What does the typical 400 sqft deck quote include?", acceptedAnswer: { "@type": "Answer", text: "A proper 400 sqft quote includes: free 3D design rendering, complete material take-off, structural framing (joists, beams, ledger, footings), composite or wood surface boards, railings, stairs, basic post-cap lighting, Fairfax/Loudoun/Arlington/Prince William county building permit, 3 county inspections (footing, framing, final), and 2-year workmanship warranty. Excluded but common add-ons: built-in seating ($1.5–3k), pergola ($8–15k), integrated lighting ($1.5–3k), outdoor kitchen ($15–40k)." } },
    { "@type": "Question", name: "How long does a 400 sqft deck project take?", acceptedAnswer: { "@type": "Answer", text: "From signed contract: 8–12 weeks. County permit review: 2–4 weeks (Loudoun) or 3–6 weeks (Fairfax/Arlington). HOA approval runs in parallel: 1–4 weeks depending on community. Material delivery: 1–3 weeks. Construction on-site: 1–2 weeks for a single-level 400 sqft build; 2–3 weeks for multi-level. Most 400 sqft projects break ground 4–5 weeks after contract." } },
    { "@type": "Question", name: "Should I build 400 sqft, or stretch to 500–600 sqft?", acceptedAnswer: { "@type": "Answer", text: "The marginal cost per square foot drops after 400 sqft because foundation, framing, and permit overhead are largely fixed. Going from 400 to 500 sqft adds maybe $4,000–$7,000 (not 25%). Going from 400 to 600 sqft adds $8,000–$15,000. If you'll use the bigger footprint — dining + lounging + a planter area — the upgrade usually pays off. If the lot or HOA setbacks cap you at 400 sqft, the size is excellent for most NoVA families." } },
    { "@type": "Question", name: "What materials work best at 400 sqft?", acceptedAnswer: { "@type": "Answer", text: "All three composite tiers work at 400 sqft. Trex Enhance (value tier) keeps total project budget closer to $14–22k and is appropriate for shaded yards. Trex Transcend (mid-premium) at $20–30k is the most-requested choice in Ashburn, Brambleton, Centreville, and Vienna — excellent color retention, scratch resistance, and the widest color palette. TimberTech AZEK (premium PVC) at $24–34k is best for south-facing decks with no shade (cooler surface temperature) and homes near pools." } },
    { "@type": "Question", name: "Do I need a permit for a 400 sqft deck?", acceptedAnswer: { "@type": "Answer", text: "Yes — every NoVA county requires a building permit for a 400 sqft deck. Loudoun County's threshold is 200 sqft. Fairfax County's threshold is 256 sqft. Arlington and Prince William have similar rules. Attached decks of any size require a permit regardless. We file every permit as part of every project — see our Loudoun County, Fairfax County, Arlington County, and Prince William County deck permit guides for the county-specific process." } },
  ],
};

const S = {
  h2: { fontSize: '2.2rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--color-dark)', borderLeft: '5px solid var(--color-primary)', paddingLeft: '1rem' },
  h3: { fontSize: '1.4rem', fontWeight: 700, margin: '2rem 0 1rem', color: 'var(--color-primary)' },
  p: { marginBottom: '1.25rem', lineHeight: 1.8, color: '#333', fontSize: '1.05rem' },
  list: { paddingLeft: '1.5rem', marginBottom: '2rem' },
  listItem: { marginBottom: '0.6rem', lineHeight: 1.7 },
  th: { padding: '0.9rem', textAlign: 'left', borderBottom: '3px solid var(--color-primary)', background: '#fcfcfc', fontWeight: 800, fontSize: '0.9rem' },
  td: { padding: '0.9rem', borderBottom: '1px solid #eee', fontSize: '0.95rem' },
};

export default function FourHundredSqftDeckCostPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/400-square-foot-deck-cost-northern-virginia" name="400 Square Foot Deck Cost in Northern Virginia (2026) | Loudoun Decks" description="Real 2026 pricing for a 400 sqft composite deck in Northern Virginia. Brand-by-brand breakdown plus included scope, permit cost, timeline, and common upgrades." speakable />
      <ArticleSchema
        title="400 Square Foot Deck Cost in Northern Virginia (2026)"
        description="Definitive 2026 pricing for a 400 sqft composite deck in Northern Virginia by brand (Trex Enhance, Trex Transcend, TimberTech AZEK), included scope, permit cost, timeline, and most-common upgrades."
        path="/400-square-foot-deck-cost-northern-virginia"
        image="/images/img17.jpeg"
        datePublished="2026-05-27"
        dateModified="2026-05-27"
      />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>400 Square Foot Deck Cost in Northern Virginia (2026)</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Real 2026 prices, brand-by-brand. Includes permit + 3 inspections + 2-year warranty.</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Free Estimate</Link>
          </div>
        </div>
      </section>

      <section data-speakable="true" style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick answer:</p>
          <p>A 400 sqft composite deck in Northern Virginia costs <strong>$14,000–$34,000</strong> installed in 2026, depending on material brand. Trex Enhance $14k–$22k. Trex Transcend $20k–$30k. TimberTech AZEK $24k–$34k. Includes permit, framing, railings, basic lighting, and 3 required inspections.</p>
        </div>
      </section>

      <article style={{ padding: '4rem 0', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={S.h2}>2026 pricing for a 400 sqft deck, by brand</h2>
          <p style={S.p}>A 400 sqft deck is the most-requested footprint in Northern Virginia. Two configurations dominate: 20 ft × 20 ft (square, anchors a single dining + lounging zone) and 16 ft × 25 ft (rectangular, separates dining from seating). Pricing depends primarily on the material tier; the framing and labor underneath are similar across all three brands.</p>

          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={S.th}>Material brand</th>
                  <th style={S.th}>Tier</th>
                  <th style={S.th}>Total installed price (400 sqft)</th>
                  <th style={S.th}>Best for</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={S.td}>Pressure-treated wood</td><td style={S.td}>Budget</td><td style={S.td}>$8,000–$14,000</td><td style={S.td}>Limited budget; willing to refinish every 2–3 years</td></tr>
                <tr><td style={S.td}>Trex Enhance (Naturals)</td><td style={S.td}>Value composite</td><td style={S.td}>$14,000–$22,000</td><td style={S.td}>Shaded yards; budget-conscious composite buyers</td></tr>
                <tr><td style={S.td}>Trex Select</td><td style={S.td}>Mid composite</td><td style={S.td}>$17,000–$25,000</td><td style={S.td}>Mid-range upgrade; broader color palette</td></tr>
                <tr><td style={S.td}>Trex Transcend</td><td style={S.td}>Mid-premium</td><td style={S.td}>$20,000–$30,000</td><td style={S.td}>The Ashburn/Centreville/Vienna baseline — best color retention</td></tr>
                <tr><td style={S.td}>TimberTech PRO</td><td style={S.td}>Mid-premium composite</td><td style={S.td}>$21,000–$31,000</td><td style={S.td}>Same tier as Transcend, alternate color palette</td></tr>
                <tr><td style={S.td}>TimberTech AZEK Vintage</td><td style={S.td}>Premium PVC</td><td style={S.td}>$24,000–$34,000</td><td style={S.td}>South-facing yards, pool decks, premium look</td></tr>
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>What's included in a 400 sqft deck quote</h2>
          <ul style={S.list}>
            <li style={S.listItem}><strong>Design:</strong> free 3D photorealistic rendering before contract</li>
            <li style={S.listItem}><strong>Structural framing:</strong> joists (typically 2×8 or 2×10 depending on span), beams, posts, footings to 24 inches below frost line</li>
            <li style={S.listItem}><strong>Ledger + flashing:</strong> Z-flashing behind siding, hot-dipped galvanized through-bolts to rim joist (or freestanding design if brick veneer)</li>
            <li style={S.listItem}><strong>Surface boards + fasteners:</strong> hidden fasteners on the field; face-screwed at perimeters and stairs</li>
            <li style={S.listItem}><strong>Railings:</strong> composite balustrade, aluminum, or cable depending on selection and price tier</li>
            <li style={S.listItem}><strong>Stairs:</strong> code-compliant rise/run with handrails for 4+ risers</li>
            <li style={S.listItem}><strong>Basic lighting:</strong> 4–8 post-cap lights at stairs + perimeter</li>
            <li style={S.listItem}><strong>Permit + 3 inspections:</strong> we file every permit and meet every inspector on site</li>
            <li style={S.listItem}><strong>2-year workmanship warranty</strong> on top of the manufacturer's 25–50 year material warranty</li>
          </ul>

          <h2 style={S.h2}>Common upgrades and what they add</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={S.th}>Upgrade</th>
                  <th style={S.th}>Added cost</th>
                  <th style={S.th}>Why it's worth it</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={S.td}>Integrated low-voltage lighting</td><td style={S.td}>+$1,500–$3,000</td><td style={S.td}>Doubles usable evening hours; nearly every premium project does this</td></tr>
                <tr><td style={S.td}>Picture-frame border (contrasting boards)</td><td style={S.td}>+$1,500–$3,000</td><td style={S.td}>Designer look; hides end-cut hollows; defines stair perimeters</td></tr>
                <tr><td style={S.td}>Built-in bench seating</td><td style={S.td}>+$1,500–$3,500</td><td style={S.td}>Saves furniture cost; structural integration</td></tr>
                <tr><td style={S.td}>Cable railings instead of composite balustrade</td><td style={S.td}>+$3,000–$5,000</td><td style={S.td}>Preserves view (Donaldson Run, wooded-lot homes)</td></tr>
                <tr><td style={S.td}>Multi-level (split to upper + lower)</td><td style={S.td}>+$5,000–$10,000</td><td style={S.td}>Separates dining from seating; accommodates slope</td></tr>
                <tr><td style={S.td}>Open-rafter cedar pergola (12 × 14 ft)</td><td style={S.td}>+$8,000–$15,000</td><td style={S.td}>Sun control for west-facing Ashburn/Brambleton yards</td></tr>
                <tr><td style={S.td}>Outdoor kitchen island (grill + counter + sink)</td><td style={S.td}>+$15,000–$40,000</td><td style={S.td}>Anchors the outdoor-living experience</td></tr>
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>Where 400 sqft works best — and where to scale up</h2>
          <p style={S.p}>400 sqft is the right size when your lot or HOA setbacks cap your buildable footprint, when your household uses outdoor space primarily for one activity (dining or lounging, not both), or when you want to test outdoor living before committing to a larger build later. Ashburn townhomes in One Loudoun, Brambleton Carriage homes, and Centreville Centre Ridge detached lots routinely land in this size.</p>
          <p style={S.p}>Scale up to <Link href="/600-square-foot-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>600 sqft</Link> if your household needs a dedicated dining zone separate from lounging, if you frequently host 6+ guests, or if your lot has the depth to accommodate a multi-level design that captures more functional area. The marginal cost from 400 to 600 sqft typically lands at $8,000–$15,000 — substantially less than building twice in two phases.</p>
          <p style={S.p}>Scale up to <Link href="/800-square-foot-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>800 sqft</Link> for estate-tier homes (Virginia Run, Belmont Country Club, Loudoun Valley Estates, Lansdowne) where multi-level builds with integrated outdoor kitchens and pergolas are the expectation.</p>

          <h2 style={S.h2}>Permit + inspection cost (included)</h2>
          <p style={S.p}>The 400 sqft deck triggers full permit + 3-inspection requirements in every Northern Virginia county. Permit fees, scaled to construction valuation, typically run $150–$700 depending on county and project complexity. We file every package and coordinate every inspection — fees are included in the project total, not billed separately.</p>
          <ul style={S.list}>
            <li style={S.listItem}><Link href="/deck-permit-loudoun-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun County permit guide</Link> — LandMARC portal, 5-step process</li>
            <li style={S.listItem}><Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Fairfax County permit guide</Link> — Land Development Services portal</li>
            <li style={S.listItem}><Link href="/deck-permit-arlington-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Arlington County permit guide</Link> — CPHD + Permit Arlington portal</li>
            <li style={S.listItem}><Link href="/deck-permit-prince-william-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Prince William County permit guide</Link></li>
          </ul>

          <h2 style={S.h2}>FAQ — 400 sqft deck cost</h2>
          {faqSchema.mainEntity.map((q, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{q.name}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{q.acceptedAnswer.text}</p>
            </details>
          ))}

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '3rem 0 1rem' }}>Related guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.8 }}>
            <li>→ <Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Full Northern Virginia composite deck cost guide</Link></li>
            <li>→ <Link href="/composite-deck-cost-by-size" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Composite cost by size (300/400/500/600 sqft)</Link></li>
            <li>→ <Link href="/monthly-payment-composite-deck-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Monthly payment on a composite deck</Link></li>
            <li>→ <Link href="/deck-lighting-railings-stairs-addon-cost" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Lighting, railings &amp; stairs add-on cost</Link></li>
            <li>→ <Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Interactive deck cost calculator</Link></li>
            <li>→ <Link href="/600-square-foot-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>600 sqft deck cost</Link></li>
            <li>→ <Link href="/800-square-foot-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>800 sqft deck cost</Link></li>
            <li>→ <Link href="/deck-financing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck financing for Northern Virginia</Link></li>
            <li>→ <Link href="/trex-vs-timbertech-vs-azek" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Trex vs TimberTech vs AZEK</Link></li>
          </ul>

        </div>
      </article>

      <SimpleCTA title="Get a free 3D rendering + itemized 400 sqft estimate" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/400-square-foot-deck-cost-northern-virginia" />
      <NamedAuthor context="Northern Virginia deck pricing" lastUpdated="2026-05-27" />
      <ContactHome />
    </>
  );
}
