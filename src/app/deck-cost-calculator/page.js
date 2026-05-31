'use client';
import React from 'react';
import Link from 'next/link';
import DeckCostCalculatorWidget from '@/components/DeckCostCalculatorWidget';
import FinancingCTA from '@/components/FinancingCTA';

// This page is a LINKABLE ASSET designed to attract backlinks from
// real estate blogs, home improvement sites, and local news.
// Embeddable widget code is included so other sites can frame the calculator.
//
// Calculator UI + math now lives in DeckCostCalculatorWidget and is shared
// with /composite-deck-cost-northern-virginia.

export default function DeckCostCalculator() {
  return (
    <main style={{ background: '#fff' }}>
      <section style={{ background: '#1a202c', color: '#ffffff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Northern Virginia Deck Price Calculator</h1>
          <p style={{ color: '#cbd5e0', fontSize: '1.1rem' }}>Get an instant estimate for your deck project. Prices reflect 2026 Northern Virginia market rates.</p>
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
              body="Use this calculator to frame the project range, then ask us about current financing options for eligible deck builds, resurfacing, repairs, and composite upgrades. Subject to approval. Terms may vary."
            />
          </div>

          <article style={{ marginTop: '4rem', lineHeight: 1.8, color: '#2d3748' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a202c' }}>How Much Does a Deck Cost in Northern Virginia? (2026 Guide)</h2>
            <p>
              If you are planning a backyard renovation in Fairfax, Loudoun, or Prince William County, understanding the <strong>cost to build a deck</strong> is likely your first priority. In 2026, Northern Virginia remains one of the most competitive and premium markets for outdoor construction in the United States.
            </p>
            <p>
              The average <strong>deck installation cost</strong> for a professional project in our region typically ranges from <strong>$15,000 to $45,000</strong>. However, high-end luxury builds with integrated kitchens, masonry, and multi-level architecture can exceed $80,000. Use our calculator above to get a baseline estimate for your specific square footage and material preferences.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem' }}>Breaking Down Deck Price per Square Foot</h3>
            <p>
              When comparing quotes from different contractors, you will often hear about <strong>deck price per square foot</strong>. This metric varies significantly based on the height of the structure, soil conditions, and the complexity of the framing.
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Pressure-Treated Wood:</strong> $25 - $40 per sq. ft. (installed)</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Standard Composite (Trex Enhance):</strong> $45 - $65 per sq. ft.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Premium PVC (TimberTech AZEK):</strong> $70 - $95 per sq. ft.</li>
            </ul>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem' }}>The Cost of Trex Decking vs. Traditional Wood</h3>
            <p>
              Many homeowners ask: <em>Is the cost of Trex decking worth it?</em> While the upfront <strong>composite deck cost</strong> is 40% to 60% higher than pressure-treated pine, the long-term ROI is indisputable. A wood deck requires professional power-washing, sanding, and staining every two years—a service that costs roughly $1,500 - $2,500 per visit in Northern Virginia.
            </p>
            <p>
              Over a 10-year period, the &quot;cheaper&quot; wood deck actually becomes more expensive than a premium composite installation due to these hidden maintenance taxes. Additionally, composite materials like Trex and TimberTech carry 25-year to 50-year fade and stain warranties, protecting your home&apos;s appraisal value far better than natural wood.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem' }}>Deck Replacement Cost: Resurfacing vs. Full Tear-Down</h3>
            <p>
              If you have an existing structure that is fading or splintering, you may be looking for the <strong>deck replacement cost</strong>. If your underlying frame (posts, beams, and joists) is still structurally sound, we can often perform a &quot;resurface.&quot; This involves removing the old boards and installing new composite decking and railings on the existing skeleton.
            </p>
            <p>
              A resurface project can save you 30% to 50% compared to a full tear-down and rebuild. However, if your deck was built before modern Virginia building codes or shows signs of deep-seated rot, a full replacement is required for safety and permit compliance.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem' }}>Factors Influencing Deck Costs in NoVA</h3>
            <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Elevation &amp; Height:</strong> Second-story decks require massive 6x6 engineered posts and increased labor for safety rigging, adding $3,000 - $7,000 to the base price.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Permits &amp; HOAs:</strong> Fairfax and Loudoun County have some of the strictest permitting offices in the country. Professional architectural drawings and permit fees typically range from $800 - $1,500.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Lighting &amp; Add-ons:</strong> Low-voltage LED lighting systems, custom built-in benches, and picture-frame borders are the details that transform a standard deck into a luxury retreat.
              </li>
            </ol>
            <p>
              Ready for a precise estimate? <Link href="/contact" style={{ color: '#d14817', fontWeight: 600, textDecoration: 'underline' }}>Schedule a free on-site design consultation</Link> with the Loudoun Decks team today.
            </p>
          </article>

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
              <Link href="/composite-deck-cost-northern-virginia" style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 8, textDecoration: 'none', color: 'inherit' }}>
                <p style={{ fontWeight: 600, color: '#d14817' }}>Composite Deck Cost NoVA</p>
                <p style={{ fontSize: '0.85rem', color: '#4a5568' }}>Brand-by-brand 2026 pricing</p>
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
