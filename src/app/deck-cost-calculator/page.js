'use client';
import React, { useState } from 'react';
import Link from 'next/link';

// This page is a LINKABLE ASSET designed to attract backlinks from
// real estate blogs, home improvement sites, and local news.
// Embeddable widget code at the bottom encourages other sites to link back.

const materials = [
  { name: 'Pressure-Treated Wood', min: 18, max: 35, lifespan: '10-15 years' },
  { name: 'Cedar', min: 25, max: 45, lifespan: '15-20 years' },
  { name: 'Trex Enhance', min: 30, max: 50, lifespan: '25+ years' },
  { name: 'Trex Transcend', min: 45, max: 65, lifespan: '25+ years' },
  { name: 'TimberTech AZEK', min: 50, max: 75, lifespan: '30-50 years' },
];

const addons = [
  { name: 'Stairs (per flight)', min: 1500, max: 4000 },
  { name: 'Composite Railings', min: 3000, max: 8000 },
  { name: 'Cable Railings', min: 5000, max: 12000 },
  { name: 'Built-in Lighting', min: 1500, max: 4000 },
  { name: 'Pergola', min: 5000, max: 15000 },
  { name: 'Screened Porch Conversion', min: 15000, max: 40000 },
];

export default function DeckCostCalculator() {
  const [sqft, setSqft] = useState(350);
  const [material, setMaterial] = useState(2);
  const [selectedAddons, setSelectedAddons] = useState([]);

  const mat = materials[material];
  const baseLow = sqft * mat.min;
  const baseHigh = sqft * mat.max;
  const addonLow = selectedAddons.reduce((sum, i) => sum + addons[i].min, 0);
  const addonHigh = selectedAddons.reduce((sum, i) => sum + addons[i].max, 0);
  const totalLow = baseLow + addonLow;
  const totalHigh = baseHigh + addonHigh;
  // NoVA premium: 25-35%
  const novaLow = Math.round(totalLow * 1.25);
  const novaHigh = Math.round(totalHigh * 1.35);

  const fmt = (n) => '$' + n.toLocaleString();

  const toggleAddon = (i) => {
    setSelectedAddons(prev =>
      prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]
    );
  };

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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Left: Inputs */}
            <div>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem' }}>Configure Your Deck</h2>

              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                Deck Size: {sqft} sq ft
              </label>
              <input
                type="range"
                min={100}
                max={800}
                value={sqft}
                onChange={(e) => setSqft(Number(e.target.value))}
                style={{ width: '100%', marginBottom: '1.5rem' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#4a5568', marginTop: '-1rem', marginBottom: '1.5rem' }}>
                <span>100 sqft</span><span>800 sqft</span>
              </div>

              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Material</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {materials.map((m, i) => (
                  <button
                    key={i}
                    onClick={() => setMaterial(i)}
                    style={{
                      padding: '0.75rem 1rem',
                      border: i === material ? '2px solid #d14817' : '1px solid #cbd5e0',
                      borderRadius: 8,
                      background: i === material ? '#fff3e0' : '#fff',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontWeight: i === material ? 600 : 400,
                    }}
                  >
                    {m.name} <span style={{ color: '#4a5568', fontSize: '0.85rem' }}>({fmt(m.min)}-{fmt(m.max)}/sqft · {m.lifespan})</span>
                  </button>
                ))}
              </div>

              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Add-Ons (optional)</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1.5rem' }}>
                {addons.map((a, i) => (
                  <label key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem', borderRadius: 6, background: selectedAddons.includes(i) ? '#ebf8ff' : '#f7fafc', cursor: 'pointer' }}>
                    <input type="checkbox" checked={selectedAddons.includes(i)} onChange={() => toggleAddon(i)} />
                    <span>{a.name}</span>
                    <span style={{ marginLeft: 'auto', color: '#4a5568', fontSize: '0.85rem' }}>{fmt(a.min)}-{fmt(a.max)}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Right: Results */}
            <div>
              <div style={{ background: '#f7fafc', borderRadius: 12, padding: '2rem', position: 'sticky', top: '2rem' }}>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem' }}>Your Estimate</h2>

                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ color: '#4a5568', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Base Deck ({sqft} sqft × {mat.name})</p>
                  <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>{fmt(baseLow)} – {fmt(baseHigh)}</p>
                </div>

                {selectedAddons.length > 0 && (
                  <div style={{ marginBottom: '1rem' }}>
                    <p style={{ color: '#4a5568', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Add-Ons</p>
                    <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>+ {fmt(addonLow)} – {fmt(addonHigh)}</p>
                  </div>
                )}

                <div style={{ borderTop: '2px solid #cbd5e0', paddingTop: '1rem', marginTop: '1rem' }}>
                  <p style={{ color: '#4a5568', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Northern Virginia Estimate (incl. 25-35% regional premium)</p>
                  <p style={{ fontSize: '2rem', fontWeight: 700, color: '#d14817' }}>
                    {fmt(novaLow)} – {fmt(novaHigh)}
                  </p>
                  <p style={{ color: '#4a5568', fontSize: '0.8rem' }}>Includes materials, labor, permits & cleanup</p>
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                  <Link
                    href="/contact"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      background: '#d14817',
                      color: '#ffffff',
                      padding: '1rem',
                      borderRadius: 8,
                      fontWeight: 700,
                      textDecoration: 'none',
                      fontSize: '1.1rem',
                    }}
                  >
                    Get Your Free Detailed Quote
                  </Link>
                  <p style={{ textAlign: 'center', color: '#4a5568', fontSize: '0.8rem', marginTop: '0.5rem' }}>Or call (571) 655-7207</p>
                </div>

                <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#fff', borderRadius: 8, border: '1px solid #e2e8f0' }}>
                  <p style={{ fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.5rem' }}>About this estimate</p>
                  <p style={{ fontSize: '0.8rem', color: '#4a5568', lineHeight: 1.6 }}>
                    Based on 2026 Northern Virginia market rates from 200+ completed projects by Loudoun Decks.
                    Actual costs vary by site conditions, HOA requirements, and design complexity.
                    For an exact price, request a free on-site consultation.
                  </p>
                </div>
              </div>
            </div>
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
              Over a 10-year period, the "cheaper" wood deck actually becomes more expensive than a premium composite installation due to these hidden maintenance taxes. Additionally, composite materials like Trex and TimberTech carry 25-year to 50-year fade and stain warranties, protecting your home's appraisal value far better than natural wood.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem' }}>Deck Replacement Cost: Resurfacing vs. Full Tear-Down</h3>
            <p>
              If you have an existing structure that is fading or splintering, you may be looking for the <strong>deck replacement cost</strong>. If your underlying frame (posts, beams, and joists) is still structurally sound, we can often perform a "resurface." This involves removing the old boards and installing new composite decking and railings on the existing skeleton. 
            </p>
            <p>
              A resurface project can save you 30% to 50% compared to a full tear-down and rebuild. However, if your deck was built before modern Virginia building codes or shows signs of deep-seated rot, a full replacement is required for safety and permit compliance.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem' }}>Factors Influencing Deck Costs in NoVA</h3>
            <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Elevation & Height:</strong> Second-story decks require massive 6x6 engineered posts and increased labor for safety rigging, adding $3,000 - $7,000 to the base price.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Permits & HOAs:</strong> Fairfax and Loudoun County have some of the strictest permitting offices in the country. Professional architectural drawings and permit fees typically range from $800 - $1,500.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Lighting & Add-ons:</strong> Low-voltage LED lighting systems, custom built-in benches, and picture-frame borders are the details that transform a standard deck into a luxury retreat.
              </li>
            </ol>
            <p>
              Ready for a precise estimate? <Link href="/contact" style={{ color: '#d14817', fontWeight: 600, textDecoration: 'underline' }}>Schedule a free on-site design consultation</Link> with the Loudoun Decks team today.
            </p>
          </article>

          {/* Embed Code Section this is what makes it a LINKABLE ASSET */}
          <div style={{ marginTop: '4rem', padding: '2rem', background: '#f7fafc', borderRadius: 12, border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Embed This Calculator on Your Website</h2>
            <p style={{ color: '#4a5568', marginBottom: '1rem', fontSize: '0.9rem' }}>
              Real estate agents, home improvement bloggers, and HOA communities feel free to embed this calculator. Just copy the code below:
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
  Calculator by <a href="https://ldndecks.com">Loudoun Decks</a>
  Northern Virginia's Top-Rated Deck Builder
</p>`}
            </pre>
          </div>

          {/* Related guides */}
          <div style={{ marginTop: '3rem', padding: '2rem 0', borderTop: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1rem' }}>Learn More About Deck Costs</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              <Link href="/how-much-does-a-deck-cost-northern-virginia" style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 8, textDecoration: 'none', color: 'inherit' }}>
                <p style={{ fontWeight: 600, color: '#d14817' }}>Deck Cost Guide 2026</p>
                <p style={{ fontSize: '0.85rem', color: '#4a5568' }}>Full pricing breakdown by material</p>
              </Link>
              <Link href="/trex-vs-timbertech-vs-azek" style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 8, textDecoration: 'none', color: 'inherit' }}>
                <p style={{ fontWeight: 600, color: '#d14817' }}>Trex vs TimberTech vs AZEK</p>
                <p style={{ fontSize: '0.85rem', color: '#4a5568' }}>Compare brands side by side</p>
              </Link>
              <Link href="/does-a-deck-add-value-to-your-home" style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 8, textDecoration: 'none', color: 'inherit' }}>
                <p style={{ fontWeight: 600, color: '#d14817' }}>Deck ROI & Home Value</p>
                <p style={{ fontSize: '0.85rem', color: '#4a5568' }}>How much value does a deck add?</p>
              </Link>
            </div>
          </div>
          {/* Sharing and Embedding Tools */}
          <div style={{ marginTop: '4rem', padding: '2rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem', color: '#1a202c' }}>Share or Use This Tool</h3>
            <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>
              Are you a real estate agent or homeowner? You can share these results or embed this calculator on your own website.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <button
                onClick={() => {
                  const text = `Deck Price Estimate for ${sqft} sq ft: ${fmt(novaLow)} - ${fmt(novaHigh)}\nMaterial: ${materials[material].name}\nCalculated at: https://ldndecks.com/deck-cost-calculator`;
                  navigator.clipboard.writeText(text);
                  alert('Results copied to clipboard!');
                }}
                style={{
                  padding: '12px',
                  background: '#2d3748',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Copy Results to Clipboard
              </button>

              <button
                onClick={() => {
                  const embedCode = `<iframe src="https://ldndecks.com/deck-cost-calculator" width="100%" height="800px" frameborder="0"></iframe>\n<p>Calculator provided by <a href="https://ldndecks.com">LDN Decks</a></p>`;
                  navigator.clipboard.writeText(embedCode);
                  alert('Embed code copied to clipboard!');
                }}
                style={{
                  padding: '12px',
                  background: '#fff',
                  color: '#2d3748',
                  border: '2px solid #2d3748',
                  borderRadius: '6px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Copy Embed Code
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
