import Link from 'next/link';

/**
 * RelatedGuides — Internal cross-linking component for SEO authority distribution.
 * Shows 4-6 related cornerstone guides at the bottom of every content page.
 * This is the #1 most impactful SEO fix: it passes PageRank to orphaned cornerstone pages.
 *
 * @param {string} currentPath - The current page path (to exclude from related list)
 * @param {string} category - Optional category to prioritize ('cost'|'materials'|'process'|'design'|'location')
 */

const CORNERSTONE_GUIDES = [
  { path: '/deck-builder-northern-virginia', title: 'Deck Builder in Northern Virginia', desc: 'Custom decks, permits, HOA support and local service areas.' },
  { path: '/northern-virginia-deck-building-guide', title: 'Complete Deck Building Guide for NoVA', desc: 'Everything in one place costs, materials, permits, HOA, timeline.' },
  { path: '/how-much-does-a-deck-cost-northern-virginia', title: 'Deck Cost in Northern Virginia (2026)', desc: 'Material pricing, real project costs, and what drives the price.' },
  { path: '/deck-cost-calculator', title: 'Free Deck Cost Calculator', desc: 'Get an instant estimate by material, size, and add-ons.' },
  { path: '/trex-vs-timbertech-vs-azek', title: 'Trex vs TimberTech vs AZEK', desc: 'Side-by-side brand comparison for Virginia climate.' },
  { path: '/timbertech-decks', title: 'TimberTech & AZEK Decks', desc: 'Premium PVC and composite deck options for Northern Virginia.' },
  { path: '/composite-deck-vs-wood-deck-virginia', title: 'Composite vs Wood Deck', desc: '15-year cost comparison composite wins long-term.' },
  { path: '/does-a-deck-add-value-to-your-home', title: 'Does a Deck Add Home Value?', desc: 'ROI data 60-80% recoup at resale in Northern Virginia.' },
  { path: '/how-to-choose-a-deck-builder-northern-virginia', title: 'How to Choose a Deck Builder', desc: '10 questions to ask + 5 red flags to avoid.' },
  { path: '/screened-porch-cost-northern-virginia', title: 'Screened Porch Cost Guide', desc: '$25k-$70k+ with real project examples.' },
  { path: '/deck-permit-fairfax-county-virginia', title: 'Deck Permits in Fairfax County', desc: 'Requirements, timeline, fees, and inspection process.' },
  { path: '/hoa-deck-rules-northern-virginia', title: 'HOA Deck Rules in NoVA', desc: 'Approval process, common restrictions, and tips.' },
  { path: '/best-time-to-build-a-deck-northern-virginia', title: 'Best Time to Build a Deck', desc: 'Month-by-month calendar winter gets 10-15% better pricing.' },
  { path: '/deck-maintenance-checklist-virginia', title: 'Deck Maintenance Checklist', desc: 'Seasonal care guide for Virginia climate.' },
  { path: '/deck-railing-options-northern-virginia', title: 'Deck Railing Options & Costs', desc: 'Composite, aluminum, cable, glass compared.' },
  { path: '/services/fire-pits', title: 'Fire Pit Design & Costs', desc: 'Gas vs wood-burning integration tips.' },
  { path: '/services/gazebo-pergola', title: 'Pergola & Shade Guide', desc: 'Attached vs freestanding costs and permits.' },
  { path: '/louvered-pergola-northern-virginia', title: 'Louvered Pergola Builder', desc: 'Motorized adjustable-roof pergolas over decks and patios.' },
  { path: '/three-season-room-northern-virginia', title: 'Three-Season Room Builder', desc: 'Sliding-window outdoor rooms usable 9-10 months a year.' },
  { path: '/outdoor-living-northern-virginia', title: 'Outdoor Living Contractor', desc: 'Decks, patios, porches and backyard systems planned together.' },
  { path: '/paver-vs-flagstone-patio-northern-virginia', title: 'Paver vs Flagstone', desc: 'Cost and durability comparison for Virginia patios.' },
  { path: '/eco-friendly-composite-decking', title: 'Eco-Friendly Decking Guide', desc: 'Recycled materials and sustainability facts.' },
  { path: '/pool-deck-builder-northern-virginia', title: 'Pool Deck Design & Safety', desc: 'Slip-resistant materials for Northern Virginia pools.' },
  { path: '/stamped-concrete-patio-northern-virginia', title: 'Stamped Concrete Patio Guide', desc: 'Colors, patterns, and cost per square foot.' },
  { path: '/under-deck-ceiling-ideas', title: 'Under-Deck Ceiling Ideas', desc: 'Dry-space solutions for multi-level decks.' },
  { path: '/services/deck-repair-and-structural-maintenance', title: 'Deck Repair & Structural Maintenance', desc: 'Fixing rotted posts and failed inspections in Loudoun & Fairfax.' },
  { path: '/blog/deck-structural-repair-rot-prevention', title: 'Deck Repair & Rot Prevention Guide', desc: 'Surgical structural fixes for Northern Virginia homes.' },
  { path: '/blog/loudoun-county-deck-permit-guide-2026', title: '2026 Loudoun Deck Permit Blueprint', desc: 'Everything you need to know for LandMARC approval.' },
];

export default function RelatedGuides({ currentPath }) {
  // Filter out current page
  const available = CORNERSTONE_GUIDES.filter(g => g.path !== currentPath);

  // Smart rotation: use a hash of currentPath to deterministically select
  // different guides for different pages — so ALL 13 cornerstone pages get exposure
  const hash = currentPath.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const startIdx = hash % available.length;
  const selected = [];
  for (let i = 0; i < 5 && i < available.length; i++) {
    selected.push(available[(startIdx + i) % available.length]);
  }

  return (
    <section style={{ background: '#f8f9fa', padding: '3rem 0', borderTop: '1px solid #e5e5e5' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: '#111' }}>
          Guides Northern Virginia Homeowners Are Reading
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {selected.map((guide) => (
            <Link
              key={guide.path}
              href={guide.path}
              style={{
                display: 'block',
                padding: '1.25rem',
                background: '#fff',
                borderRadius: 8,
                border: '1px solid #e5e5e5',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'border-color 0.2s',
              }}
            >
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.35rem', color: 'var(--color-primary, #d14817)' }}>
                {guide.title}
              </p>
              <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.5, margin: 0 }}>
                {guide.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
