import Link from 'next/link';
import CallLink from '@/components/CallLink';
import styles from './EducationHub.module.css';

const TRUST_ITEMS = [
  'Permit and HOA planning for Northern Virginia',
  'Composite, Trex and TimberTech comparisons',
  'Deck safety, stairs and structural guidance',
  'Covered deck and outdoor living decisions',
  'Estimate-ready project decisions',
];

const CLUSTERS = [
  {
    title: 'Deck Costs & Financing',
    desc: 'Plan realistic budgets, payment options, scope tradeoffs and the cost questions to answer before requesting an estimate.',
    href: '/deck-payment-estimator',
  },
  {
    title: 'HOA & Permit Guides',
    desc: 'Prepare for county permits, HOA or ARC review, setbacks, drawings, timelines and approval-sensitive deck details.',
    href: '/hoa-deck-rules-northern-virginia',
  },
  {
    title: 'Composite Decking Guides',
    desc: 'Compare wood, composite and PVC decking for maintenance, resale value, weather exposure and long-term performance.',
    href: '/education/deck-material-comparison-2026',
  },
  {
    title: 'Composite Deck Fading & Restoration',
    desc: 'See real sun-faded composite deck photos, before-and-after restoration examples, and when to clean, resurface or replace.',
    href: '/blog/why-composite-trex-decking-fades-sun-solutions',
  },
  {
    title: 'How to Restore Faded Composite Decking',
    desc: 'Learn when cleaning, brightening, spot treatment or resurfacing can improve a faded composite deck.',
    href: '/blog/how-to-restore-faded-composite-decking',
  },
  {
    title: 'Trex vs TimberTech Fade Resistance',
    desc: 'Compare Trex, TimberTech and AZEK fade resistance for full-sun Northern Virginia deck projects.',
    href: '/blog/trex-vs-timbertech-fade-resistance-comparison',
  },
  {
    title: 'Best Composite Deck Colors for Full Sun',
    desc: 'Choose lighter, cooler, more fade-resistant composite deck colors for exposed south- and west-facing decks.',
    href: '/blog/best-composite-deck-colors-full-sun-northern-virginia',
  },
  {
    title: 'Covered Decks & Outdoor Living',
    desc: 'Explore covered decks, screened porches, under-deck drainage, lighting and comfort upgrades as one complete outdoor plan.',
    href: '/covered-deck-builder-northern-virginia',
  },
  {
    title: 'Deck Repairs & Resurfacing',
    desc: 'Decide when resurfacing, structural repair or full replacement is the better path for an aging Northern Virginia deck.',
    href: '/deck-resurfacing-vs-replacement',
  },
  {
    title: 'Resurface vs Replace Composite Deck',
    desc: 'Use a practical inspection framework to decide whether an older composite deck needs resurfacing or full replacement.',
    href: '/blog/resurface-vs-replace-composite-deck-guide',
  },
  {
    title: 'Trex vs TimberTech vs AZEK',
    desc: 'Review premium decking brands by look, maintenance, heat, durability, warranty expectations and project fit.',
    href: '/trex-vs-timbertech-vs-azek',
  },
  {
    title: 'Deck Stair Construction & Code',
    desc: 'Understand stringers, treads, risers, footings, railings and inspection details that affect stair safety.',
    href: '/education/deck-stair-construction-diagram',
  },
  {
    title: 'Design Inspiration & Planning',
    desc: 'Browse layout ideas, design priorities and planning choices before moving into pricing, permits and consultation.',
    href: '/deck-design-ideas-northern-virginia-2026',
  },
];

const LOCAL_GUIDES = [
  { label: 'Ashburn', href: '/deck-builder-ashburn-va' },
  { label: 'Leesburg', href: '/deck-builder-leesburg-va' },
  { label: 'Sterling', href: '/deck-builder-sterling-va' },
  { label: 'Fairfax', href: '/deck-builder-fairfax-va' },
  { label: 'McLean', href: '/deck-builder-mclean-va' },
  { label: 'Reston', href: '/deck-builder-reston-va' },
  { label: 'All service areas', href: '/areas-we-serve' },
];

const TRUST_ROUTES = [
  {
    title: 'Before & After Projects',
    desc: 'Review real deck replacements, composite upgrades and outdoor living work before choosing a path.',
    href: '/before-and-after',
  },
  {
    title: 'Homeowner Reviews',
    desc: 'Read trust signals from Northern Virginia homeowners who hired LDN Decks for deck and outdoor projects.',
    href: '/reviews',
  },
  {
    title: 'How to Choose a Deck Builder',
    desc: 'Use a practical contractor checklist before comparing estimates, permits, timelines and warranties.',
    href: '/how-to-choose-a-deck-builder-northern-virginia',
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
          <p className={styles.sectionEyebrow}>Northern Virginia deck planning paths</p>
          <h2 id="education-clusters" className={styles.sectionTitle}>Find the guide that matches your next deck decision</h2>
          <p className={styles.sectionCopy}>
            Start with the question in front of you: cost, permits, HOA approval, material selection,
            repairs, covered outdoor living or design planning. Each path routes homeowners toward
            clearer research, stronger project decisions and the right estimate step.
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

export function EducationLocalTrustRoutes() {
  return (
    <section className={styles.routeSection} aria-labelledby="education-local-trust">
      <div className={styles.container}>
        <div className={styles.routeGrid}>
          <div className={styles.routePanel}>
            <p className={styles.sectionEyebrow}>Local planning context</p>
            <h2 id="education-local-trust" className={styles.routeTitle}>Use the right local deck guide</h2>
            <p className={styles.routeCopy}>
              Permits, HOA review and project expectations can vary by county, town and neighborhood.
              Start with the local context closest to your home, then use the education guides to prepare
              better questions for consultation.
            </p>
            <div className={styles.localLinkGrid} aria-label="Local deck builder guides">
              {LOCAL_GUIDES.map((guide) => (
                <Link href={guide.href} className={styles.localLink} key={guide.href}>
                  {guide.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.routePanel}>
            <p className={styles.sectionEyebrow}>Proof before consultation</p>
            <h2 className={styles.routeTitle}>Move from research to confidence</h2>
            <div className={styles.proofRouteList}>
              {TRUST_ROUTES.map((route) => (
                <Link href={route.href} className={styles.proofRoute} key={route.href}>
                  <span className={styles.proofRouteTitle}>{route.title}</span>
                  <span className={styles.proofRouteDesc}>{route.desc}</span>
                </Link>
              ))}
            </div>
          </div>
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
          <Link className={styles.primaryBtn} href="/deck-payment-estimator">Use the Deck Payment Estimator</Link>
          <Link className={styles.secondaryBtn} href="/get-estimate">Request a Free Estimate</Link>
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
