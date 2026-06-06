import Link from 'next/link';

const CLEANING_DATA = {
  concrete: {
    title: 'Concrete Washing for Northern Virginia Outdoor Living Areas',
    material: 'driveways, patios, walkways, pool surrounds and lower-level hardscape areas',
    problem: 'Virginia clay, leaf tannins, algae, tire marks, rust and shade-driven biological growth can make concrete look older than the surrounding deck or patio.',
    process: [
      'Inspect drainage, cracks, spalling, sealer condition and nearby landscaping before washing.',
      'Pre-treat oil, algae, moss, rust shadows and organic staining where appropriate.',
      'Use controlled pressure and surface-cleaning passes to avoid wand marks or unnecessary etching.',
      'Rinse away from foundations, low spots and newly planted beds whenever site conditions allow.',
    ],
    links: [
      ['/services/patios', 'patio design and hardscape planning'],
      ['/services/deck-washing', 'deck washing'],
      ['/services/outdoor-washing', 'outdoor washing'],
      ['/deck-safety-inspection-checklist', 'deck safety inspection checklist'],
    ],
    cta: 'Concrete washing is often the right first step before sealing, patio upgrades, under-deck improvements or listing a home for sale.',
  },
  siding: {
    title: 'House Siding Washing That Protects Adjacent Decks and Landscaping',
    material: 'vinyl siding, fiber cement siding, trim, soffits and exterior surfaces near decks or patios',
    problem: 'Northern Virginia humidity, pollen and shaded elevations create algae and mildew, especially on north-facing walls and areas around decks, porches and trees.',
    process: [
      'Review siding type, age, oxidation, window seals, exterior outlets and deck-adjacent details.',
      'Use soft-wash or controlled-pressure methods instead of blasting water behind siding panels.',
      'Protect nearby deck boards, railings, plants and outdoor furniture during the rinse path.',
      'Recommend maintenance timing around pollen season, shaded elevations and future exterior upgrades.',
    ],
    links: [
      ['/services/deck-washing', 'deck washing'],
      ['/services/outdoor-washing', 'outdoor washing'],
      ['/services/house-siding-washing', 'siding washing'],
      ['/get-estimate', 'request an exterior cleaning estimate'],
    ],
    cta: 'Siding washing works best when it is coordinated with deck, patio and railing cleaning so the entire outdoor living area presents consistently.',
  },
  fence: {
    title: 'Fence Cleaning for Wood, Vinyl and Composite Backyard Boundaries',
    material: 'wood fences, vinyl panels, composite fencing, gates and privacy sections around decks and patios',
    problem: 'Fences collect algae, gray weathering, sprinkler minerals, leaf debris and soil splash. That can make an otherwise upgraded backyard feel unfinished.',
    process: [
      'Identify fence material, loose boards, gate movement, rot risk and nearby plantings before cleaning.',
      'Use material-appropriate cleaning so wood grain, vinyl finish or composite surface texture is not damaged.',
      'Rinse around deck stairs, patios and planting beds with attention to runoff and neighbor-side visibility.',
      'Recommend staining, sealing or replacement only when cleaning exposes structural or finish issues.',
    ],
    links: [
      ['/services/fence', 'fence installation'],
      ['/services/deck-washing', 'deck washing'],
      ['/services/patios', 'patio planning'],
      ['/before-and-after', 'before and after photo gallery'],
    ],
    cta: 'Fence cleaning is a practical trust signal for the whole backyard: cleaner boundaries make deck resurfacing, patios and outdoor lighting look more finished.',
  },
};

export default function ExteriorCleaningAuthority({ type }) {
  const data = CLEANING_DATA[type];
  if (!data) return null;

  return (
    <section style={{ padding: '3rem 1.5rem', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <p style={{ color: 'var(--color-primary)', fontWeight: 800, fontSize: '0.82rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          Local exterior cleaning context
        </p>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem' }}>
          {data.title}
        </h2>
        <p style={{ lineHeight: 1.75, color: '#334155', marginBottom: '1rem' }}>
          This service is most useful for {data.material}. {data.problem}
        </p>
        <p style={{ lineHeight: 1.75, color: '#334155', marginBottom: '1.5rem' }}>
          Loudoun Decks treats exterior cleaning as part of the larger outdoor living system. A
          clean driveway, patio, fence or siding surface supports the way homeowners experience the
          deck, porch, railing and backyard as one space, not disconnected surfaces.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '1.75rem' }}>
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8, padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.75rem' }}>Cleaning process</h3>
            <ol style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 1.7 }}>
              {data.process.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </div>
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8, padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.75rem' }}>Related services</h3>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.7 }}>
              {data.links.map(([href, label]) => (
                <li key={href}><Link href={href}>{label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <p style={{ lineHeight: 1.75, color: '#334155', margin: 0 }}>
          {data.cta} For larger backyard plans, pair this with <Link href="/services/new-decks">deck construction</Link>,{' '}
          <Link href="/services/deck-resurfacing">deck resurfacing</Link>, <Link href="/services/patios">patio work</Link>,{' '}
          or a <Link href="/get-estimate">professional estimate request</Link>.
        </p>
      </div>
    </section>
  );
}
