import React from 'react';
import Link from 'next/link';
import DeckCostCalculatorWidget from '@/components/DeckCostCalculatorWidget';
import FinancingCTA from '@/components/FinancingCTA';
import NamedAuthor from '@/components/NamedAuthor';
import { buildMetadata } from '@/lib/seo';
import { calculatorFaqs } from '@/data/deckCostCalculatorFaqs';

// This page is a LINKABLE ASSET designed to attract backlinks from
// real estate blogs, home improvement sites, and local news.
// Embeddable widget code is included so other sites can frame the calculator.
//
// Calculator UI + math now lives in DeckCostCalculatorWidget and is shared
// with /composite-deck-cost-northern-virginia.

export const metadata = buildMetadata({
  path: '/deck-cost-calculator',
  title: 'Deck Cost Calculator Northern Virginia | Budget Planner',
  description: 'Explore an illustrative deck budget by size, material and selected add-ons. Review model assumptions, then request an itemized Northern Virginia project quote.',
  image: '/social/deck-cost-calculator-social.png',
});

export default function DeckCostCalculator() {
  return (
    <main style={{ background: '#fff' }}>
      <section style={{ background: '#1a202c', color: '#ffffff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Northern Virginia Deck Price Calculator</h1>
          <p style={{ color: '#cbd5e0', fontSize: '1.1rem' }}>Explore an illustrative deck budget by size, material and selected add-ons. These assumptions are not verified Northern Virginia market rates.</p>
        </div>
      </section>

      <section style={{ padding: '2rem 0 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ borderLeft: '4px solid #d14817', background: '#fff8f1', padding: '1.25rem 1.5rem', borderRadius: 8, marginBottom: '1.5rem' }}>
            <p style={{ fontWeight: 700, margin: '0 0 0.5rem', color: '#1a202c' }}>Quick Answer</p>
            <p style={{ margin: 0, color: '#2d3748', lineHeight: 1.7 }}>
              The calculator combines square footage, a material preset and selected add-ons, then applies a 25-35% model adjustment. Stairs and railings are included only when selected; there is no elevation or permit setting. Treat the result as an illustrative scenario, not a guaranteed price, and request an itemized written estimate for your property.
            </p>
          </div>
          <NamedAuthor context="Loudoun, Fairfax, Prince William, Arlington, and Stafford counties" lastUpdated="2026-09-13" />
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <DeckCostCalculatorWidget defaultMaterial={2} defaultSqft={350} ctaLabel="Get Your Free Detailed Quote" />
          <p style={{ marginTop: '1rem', color: '#4a5568', lineHeight: 1.7 }}>
            Want the more consultation-focused version? Use the <Link href="/tools/deck-cost-estimator-northern-virginia" style={{ color: '#d14817', fontWeight: 700 }}>Deck Cost Estimator Northern Virginia</Link> to connect your range with permits, financing and the written estimate process.
          </p>

          <div style={{ margin: '2rem 0' }}>
            <FinancingCTA
              title="Want to compare deck financing options after estimating cost?"
              body="Use this calculator to explore an illustrative budget, then ask us about current financing options for eligible deck builds, resurfacing, repairs, and composite upgrades. Subject to approval. Terms may vary."
            />
          </div>

          <article style={{ marginTop: '4rem', lineHeight: 1.8, color: '#2d3748' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a202c' }}>From an Illustrative Budget to a Written Deck Quote</h2>
            <p>
              A deck budget starts with scope, not a regional average. For a property in Fairfax, Loudoun or elsewhere in Northern Virginia, record the approximate size, preferred decking, stairs and railing needs before requesting a proposal. The calculator can compare those choices, but it cannot inspect the site or establish an installed price.
            </p>
            <p>
              Its material and add-on rates are preset assumptions, not supplier quotes or a dataset of completed local projects. The low scenario adds 25% to the base plus selected add-ons; the high scenario adds 35%. That adjustment is illustrative, not a measured Northern Virginia premium, an itemized fee schedule or a guarantee that every project expense is covered.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem' }}>What Does a Price per Square Foot Include?</h3>
            <p>
              Compare square-foot prices only after matching the scope. A decking-board price, a resurfacing proposal and a new structural deck are different purchases. Ask each contractor to identify these items:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Decking:</strong> manufacturer, product line, layout, fasteners, fascia and installation labor.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Structure:</strong> retained framing, required repairs, new supports and any design work.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Other scope:</strong> demolition, disposal, stairs, railing, access, approvals and cleanup, with exclusions stated.</li>
            </ul>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem' }}>Compare Maintenance Without Assuming a Payback</h3>
            <p>
              Compare actual installation quotes with the care requirements for the selected product. Exposure, cleaning frequency, repair needs and whether you hire maintenance help affect future spending. This calculator does not estimate maintenance savings, resale value or a break-even year.
            </p>
            <p>
              Composite and PVC decking still need care. Check the selected product&apos;s cleaning instructions and warranty terms in the <a href="https://www.trex.com/customer-support/trex-owners/downloads/" style={{ color: '#d14817', textDecoration: 'underline' }}>Trex documents</a> or <a href="https://www.timbertech.com/resources/installation-guides/" style={{ color: '#d14817', textDecoration: 'underline' }}>TimberTech installation and care guides</a>. A product warranty is not a promised service life for the existing frame.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem' }}>Deck Replacement Cost: Resurfacing vs. Full Tear-Down</h3>
            <p>
              Resurfacing replaces the walking surface while retaining suitable framing. It is an option only after the supports, connections, joist layout and proposed materials are reviewed. The calculator has no structural-condition assessment or separate resurfacing mode; it cannot decide whether your frame is reusable.
            </p>
            <p>
              Localized defects may call for defined repairs; extensive deterioration or unsuitable framing may call for replacement. Age alone does not settle that decision. Request separate scopes for feasible options, including how hidden damage will be documented and priced, rather than assuming a fixed savings percentage.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem' }}>Factors Influencing Deck Costs in NoVA</h3>
            <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Height, access and structure:</strong> Confirm deck elevation, equipment access, footing conditions and support design during the site review. These conditions are not calculator inputs.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Permits and HOA review:</strong> Confirm the exact work with the local authority using <a href="https://www.loudoun.gov/1166/Decks" style={{ color: '#d14817', textDecoration: 'underline' }}>Loudoun&apos;s deck guidance</a> or <a href="https://www.fairfaxcounty.gov/landdevelopment/when-permit-required" style={{ color: '#d14817', textDecoration: 'underline' }}>Fairfax&apos;s permit guidance</a>. Ask who handles drawings, applications, fees and inspections. Check HOA requirements separately.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Selected add-ons:</strong> Stairs, railings and other options contribute only when checked. Their preset allowances do not measure stair dimensions, railing lengths or electrical work. Have quantities and specifications itemized in the proposal.
              </li>
            </ol>
            <p>
              Ready to define your project scope? <Link href="/get-estimate" style={{ color: '#d14817', fontWeight: 600, textDecoration: 'underline' }}>Schedule a free on-site design consultation</Link> with the Loudoun Decks team and request a written estimate with assumptions and exclusions.
            </p>
          </article>

          <section style={{ marginTop: '4rem', padding: '2rem', background: '#fff8f1', border: '1px solid #f1d6bd', borderRadius: 8 }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#1a202c' }}>Deck Cost Calculator FAQ</h2>
            <div style={{ display: 'grid', gap: '0.85rem' }}>
              {calculatorFaqs.map((faq) => (
                <details key={faq.q} style={{ background: '#ffffff', border: '1px solid #ead8ca', borderRadius: 8, padding: '1rem' }}>
                  <summary style={{ cursor: 'pointer', fontWeight: 700, color: '#1a202c' }}>{faq.q}</summary>
                  <p style={{ margin: '0.75rem 0 0', color: '#4a5568', lineHeight: 1.7 }}>{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Embed Code Section — this is what makes the page a LINKABLE ASSET */}
          <div style={{ marginTop: '4rem', padding: '2rem', background: '#f7fafc', borderRadius: 12, border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Embed This Calculator on Your Website</h2>
            <p style={{ color: '#4a5568', marginBottom: '1rem', fontSize: '0.9rem' }}>
              Real estate agents, home improvement bloggers, and HOA communities — feel free to embed this calculator. Just copy the code below:
            </p>
            <pre style={{ background: '#1a202c', color: '#68d391', padding: '1rem', borderRadius: 8, overflow: 'auto', fontSize: '0.8rem', lineHeight: 1.5 }}>
              {`<iframe
  src="https://ldndecks.com/deck-cost-calculator"
  width="100%"
  height="900"
  frameborder="0"
  title="Northern Virginia Deck Cost Calculator by Loudoun Decks"
></iframe>
<p style="font-size:12px;color:#888;">
  Calculator by <a href="https://ldndecks.com">Loudoun Decks</a> —
  Northern Virginia's Trusted Deck Builder
</p>`}
            </pre>
          </div>

          {/* Related guides */}
          <div style={{ marginTop: '3rem', padding: '2rem 0', borderTop: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1rem' }}>Learn More About Deck Costs</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              <Link href="/composite-deck-cost-northern-virginia" style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 8, textDecoration: 'none', color: 'inherit' }}>
                <p style={{ fontWeight: 600, color: '#d14817' }}>Deck Cost Guide 2026</p>
                <p style={{ fontSize: '0.85rem', color: '#4a5568' }}>Full pricing breakdown by material</p>
              </Link>
              <Link href="/deck-cost-12x20-northern-virginia" style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 8, textDecoration: 'none', color: 'inherit' }}>
                <p style={{ fontWeight: 600, color: '#d14817' }}>12x20 Deck Cost</p>
                <p style={{ fontSize: '0.85rem', color: '#4a5568' }}>240 sqft pricing by material and permit scope</p>
              </Link>
              <Link href="/deck-cost-16x20-northern-virginia" style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 8, textDecoration: 'none', color: 'inherit' }}>
                <p style={{ fontWeight: 600, color: '#d14817' }}>16x20 Deck Cost</p>
                <p style={{ fontSize: '0.85rem', color: '#4a5568' }}>Family-deck pricing and realistic planning examples</p>
              </Link>
              <Link href="/deck-cost-20x20-northern-virginia" style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 8, textDecoration: 'none', color: 'inherit' }}>
                <p style={{ fontWeight: 600, color: '#d14817' }}>20x20 Deck Cost</p>
                <p style={{ fontSize: '0.85rem', color: '#4a5568' }}>400 sqft entertaining deck cost and structure notes</p>
              </Link>
              <Link href="/trex-vs-timbertech-vs-azek" style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 8, textDecoration: 'none', color: 'inherit' }}>
                <p style={{ fontWeight: 600, color: '#d14817' }}>Trex vs TimberTech vs AZEK vs Fiberon</p>
                <p style={{ fontSize: '0.85rem', color: '#4a5568' }}>Compare brands side by side</p>
              </Link>
              <Link href="/does-a-deck-add-value-to-your-home" style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 8, textDecoration: 'none', color: 'inherit' }}>
                <p style={{ fontWeight: 600, color: '#d14817' }}>Deck ROI &amp; Home Value</p>
                <p style={{ fontSize: '0.85rem', color: '#4a5568' }}>How much value does a deck add?</p>
              </Link>
              <Link href="/deck-payment-estimator" style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 8, textDecoration: 'none', color: 'inherit' }}>
                <p style={{ fontWeight: 600, color: '#d14817' }}>Deck Payment Estimator</p>
                <p style={{ fontSize: '0.85rem', color: '#4a5568' }}>Compare project cost with monthly payment options</p>
              </Link>
              <Link href="/tools/deck-cost-estimator-northern-virginia" style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 8, textDecoration: 'none', color: 'inherit' }}>
                <p style={{ fontWeight: 600, color: '#d14817' }}>Deck Cost Estimator Northern Virginia</p>
                <p style={{ fontSize: '0.85rem', color: '#4a5568' }}>Plan a written estimate by size, materials, permits and add-ons</p>
              </Link>
              <Link href="/composite-deck-cost-by-size" style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 8, textDecoration: 'none', color: 'inherit' }}>
                <p style={{ fontWeight: 600, color: '#d14817' }}>Composite Cost by Size</p>
                <p style={{ fontSize: '0.85rem', color: '#4a5568' }}>300 / 400 / 500 / 600 sqft pricing breakdown</p>
              </Link>
              <Link href="/monthly-payment-composite-deck-northern-virginia" style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 8, textDecoration: 'none', color: 'inherit' }}>
                <p style={{ fontWeight: 600, color: '#d14817' }}>Monthly Payment on a Composite Deck</p>
                <p style={{ fontSize: '0.85rem', color: '#4a5568' }}>$15k–$70k project payment examples</p>
              </Link>
              <Link href="/deck-permit-loudoun-county-virginia" style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 8, textDecoration: 'none', color: 'inherit' }}>
                <p style={{ fontWeight: 600, color: '#d14817' }}>Loudoun Deck Permit Guide</p>
                <p style={{ fontSize: '0.85rem', color: '#4a5568' }}>Permit, inspection, and timeline notes before estimating</p>
              </Link>
              <Link href="/get-estimate" style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 8, textDecoration: 'none', color: 'inherit' }}>
                <p style={{ fontWeight: 600, color: '#d14817' }}>Get a Written Estimate</p>
                <p style={{ fontSize: '0.85rem', color: '#4a5568' }}>Turn the calculator range into an itemized project quote</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
