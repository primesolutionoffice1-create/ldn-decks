import Link from 'next/link';
import CallLink from '@/components/CallLink';
import styles from './EducationHub.module.css';

const TRUST_ITEMS = [
  'Structural planning for safer decks',
  'Trex, TimberTech and AZEK guidance',
  'Loudoun and Fairfax permit context',
  'HOA and ARC approval planning',
  'Estimate-ready project decisions',
];

const CLUSTERS = [
  {
    title: 'Safety & Structural Integrity',
    desc: 'Understand load paths, posts, beams, joists, footings, stairs and warning signs before investing in repairs or replacement.',
    href: '/education/understanding-deck-load-paths',
  },
  {
    title: 'Costs, Financing & ROI',
    desc: 'Compare budget ranges, financing options and long-term value before choosing the size, material and scope.',
    href: '/how-much-does-a-deck-cost-northern-virginia',
  },
  {
    title: 'Materials',
    desc: 'Compare wood, composite, PVC, Trex, TimberTech and AZEK for Northern Virginia weather, maintenance and resale expectations.',
    href: '/education/deck-material-comparison-2026',
  },
  {
    title: 'Permits, HOA & Code',
    desc: 'Prepare for county permit review, HOA/ARC approval, setbacks, stair requirements and inspection-sensitive details.',
    href: '/deck-permit-loudoun-county-virginia',
  },
  {
    title: 'Outdoor Living',
    desc: 'Plan lighting, drainage, dry under-deck space, railings and comfort upgrades as part of the full deck system.',
    href: '/education/deck-drainage-systems-guide',
  },
];

export function EducationTrustBar() {
  return (
    <section className={styles.trustBar} aria-label="Education center trust signals">
      <div className={styles.trustInner}>
        {TRUST_ITEMS.map((item) => (
          <div className={styles.trustItem} key={item}>{item}</div>
        ))}
      </div>
    </section>
  );
}

export function EducationClusterNav() {
  return (
    <section className={styles.clusterSection} aria-labelledby="education-clusters">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>Choose your guide path</p>
          <h2 id="education-clusters" className={styles.sectionTitle}>Start with the decision you need to make next</h2>
          <p className={styles.sectionCopy}>
            If you are replacing an older deck, start with safety and structure. If you are planning a new premium outdoor space, start with materials, costs and permits.
          </p>
        </div>
        <div className={styles.clusterGrid}>
          {CLUSTERS.map((cluster) => (
            <Link className={styles.clusterCard} href={cluster.href} key={cluster.title}>
              <h3 className={styles.clusterTitle}>{cluster.title}</h3>
              <p className={styles.clusterDesc}>{cluster.desc}</p>
              <span className={styles.clusterLink}>View guides</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EducationLeadCTA() {
  return (
    <section className={styles.leadCta} aria-labelledby="education-lead-cta">
      <div className={styles.leadCtaInner}>
        <div>
          <h2 id="education-lead-cta" className={styles.leadCtaTitle}>Planning a deck, replacement or structural repair?</h2>
          <p className={styles.leadCtaCopy}>
            Use the guides to get informed, then let LDN Decks turn the right plan into a permit-ready estimate for your Northern Virginia home.
          </p>
          <p className={styles.leadQualifier}>
            Best fit: composite decks, deck replacement, structural repair, covered decks, railings, lighting and high-value outdoor living projects.
          </p>
        </div>
        <div className={styles.leadButtons}>
          <Link className={styles.primaryBtn} href="/contact">Request a Free Estimate</Link>
          <CallLink className={styles.secondaryBtn}>Call (571) 655-7207</CallLink>
        </div>
      </div>
    </section>
  );
}

export function EducationSourceNote() {
  return (
    <section className={styles.sourceNote} aria-label="Education source note">
      <div className={styles.sourceNoteInner}>
        <p className={styles.sourceNoteText}>
          Permit, code, financing and safety topics can change by county, town, HOA and project scope. LDN Decks uses these guides for homeowner education; final requirements should be confirmed through the relevant county, town, HOA or licensed professional review.
        </p>
        <div className={styles.sourceLinks} aria-label="Official reference links">
          <a href="https://www.loudoun.gov/1166/Decks" target="_blank" rel="noopener noreferrer">Loudoun deck permits</a>
          <a href="https://www.fairfaxcounty.gov/landdevelopment/sites/landdevelopment/files/Assets/Documents/PDF/publications/deck-details.pdf" target="_blank" rel="noopener noreferrer">Fairfax deck details</a>
          <a href="https://www.dhcd.virginia.gov/virginia-uniform-statewide-building-code-usbc" target="_blank" rel="noopener noreferrer">Virginia USBC</a>
          <a href="https://www.irs.gov/publications/p936" target="_blank" rel="noopener noreferrer">IRS home interest guide</a>
        </div>
      </div>
    </section>
  );
}
