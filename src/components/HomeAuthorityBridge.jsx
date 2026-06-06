import Link from 'next/link';
import styles from './HomeAuthorityBridge.module.css';

const authorityGroups = [
  {
    eyebrow: 'Plan with proof',
    title: 'Tools and cost guides before you call',
    text: 'Homeowners can compare budget, payment, framing, load, stair and footing assumptions before requesting an estimate.',
    links: [
      ['Deck payment estimator', '/deck-payment-estimator'],
      ['Composite deck cost guide', '/composite-deck-cost-northern-virginia'],
      ['Deck load calculator', '/tools/deck-load-calculator-virginia'],
      ['Beam span calculator', '/tools/deck-beam-span-calculator-virginia'],
    ],
  },
  {
    eyebrow: 'Build the right scope',
    title: 'Premium deck and outdoor living services',
    text: 'Loudoun Decks focuses on high-value composite projects, covered outdoor rooms, resurfacing, structural repairs and complete replacements.',
    links: [
      ['New custom decks', '/services/new-decks'],
      ['Composite decks', '/composite-decks'],
      ['Covered decks', '/covered-deck-builder-northern-virginia'],
      ['Structural deck repair', '/services/deck-repair'],
    ],
  },
  {
    eyebrow: 'Local authority',
    title: 'Northern Virginia service-area depth',
    text: 'City and county resources connect homeowners with permit, HOA, material and timeline guidance for the communities we serve most often.',
    links: [
      ['Purcellville decks', '/deck-builder-purcellville-va'],
      ['Ashburn decks', '/deck-builder-ashburn-va'],
      ['Loudoun County', '/near-you/loudoun-county'],
      ['Areas we serve', '/areas-we-serve'],
    ],
  },
];

export default function HomeAuthorityBridge() {
  return (
    <section className={styles.section} aria-labelledby="home-authority-bridge-title">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.kicker}>Northern Virginia deck planning hub</p>
          <h2 id="home-authority-bridge-title">Move from research to a buildable deck plan</h2>
          <p>
            The fastest path to a clean estimate is a project scope that already accounts for materials,
            framing, permits, HOA expectations, inspections and real homeowner priorities.
          </p>
        </div>
        <div className={styles.grid}>
          {authorityGroups.map((group) => (
            <article className={styles.panel} key={group.title}>
              <p className={styles.eyebrow}>{group.eyebrow}</p>
              <h3>{group.title}</h3>
              <p>{group.text}</p>
              <div className={styles.links}>
                {group.links.map(([label, href]) => (
                  <Link href={href} key={href}>
                    {label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className={styles.ctaRow}>
          <Link className={styles.primary} href="/get-estimate">Request an estimate</Link>
          <Link className={styles.secondary} href="/reviews">Read homeowner reviews</Link>
        </div>
      </div>
    </section>
  );
}
