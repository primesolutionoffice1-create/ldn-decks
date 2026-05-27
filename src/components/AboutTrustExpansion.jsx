import Link from 'next/link';
import styles from './AboutTrustExpansion.module.css';

const standards = [
  'Written scopes that separate materials, labor, permit expectations and optional upgrades.',
  'Composite, PVC and pressure-treated recommendations based on exposure, height, use and budget.',
  'Framing, stair, railing, ledger and footing review before a project is treated as build-ready.',
  'Northern Virginia permit and HOA planning for Loudoun, Fairfax and Prince William County homes.',
];

const proofLinks = [
  ['Reviews from homeowners', '/reviews'],
  ['Before and after projects', '/before-and-after'],
  ['Certifications and licenses', '/about/certifications-and-licenses'],
  ['Deck planning tools', '/tools'],
  ['Composite cost guide', '/composite-deck-cost-northern-virginia'],
  ['Contact Loudoun Decks', '/contact'],
];

export default function AboutTrustExpansion() {
  return (
    <section className={styles.section} aria-labelledby="about-trust-title">
      <div className={styles.container}>
        <div className={styles.story}>
          <p className={styles.kicker}>Built for serious outdoor living projects</p>
          <h2 id="about-trust-title">A local deck builder with a planning-first process</h2>
          <p>
            Loudoun Decks is built around one practical idea: premium deck projects go better when the
            homeowner understands the structure, material choices, timeline and approval path before work
            begins. That is why our site includes cost guides, permit guides, calculators, inspection
            checklists and real project proof alongside the estimate request path.
          </p>
          <p>
            The focus is Northern Virginia residential outdoor living: custom decks, composite deck
            replacements, covered decks, screened porches, railings, lighting, patios and structural deck
            repairs for homeowners who want a buildable plan instead of a vague ballpark.
          </p>
        </div>
        <div className={styles.grid}>
          <div className={styles.panel}>
            <h3>Quality standards</h3>
            <ul>
              {standards.map((standard) => (
                <li key={standard}>{standard}</li>
              ))}
            </ul>
          </div>
          <div className={styles.panel}>
            <h3>Local service focus</h3>
            <p>
              We serve Loudoun County, Fairfax County, Prince William County and nearby Northern Virginia
              communities, with special depth in Ashburn, Leesburg, Sterling, Reston, McLean, Vienna,
              Great Falls, Purcellville and Western Loudoun.
            </p>
            <p>
              For estate-style homes, hillside lots and larger countryside backyards, the planning process
              pays special attention to elevation, drainage, access, material durability and outdoor
              entertaining patterns.
            </p>
          </div>
        </div>
        <div className={styles.proofBlock}>
          <h3>Trust and planning resources</h3>
          <div className={styles.links}>
            {proofLinks.map(([label, href]) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
