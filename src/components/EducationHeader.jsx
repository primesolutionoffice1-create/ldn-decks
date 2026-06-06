import Link from 'next/link';
import styles from './BlogHeader.module.css';
import hubStyles from './EducationHub.module.css';

export default function EducationHeader() {
  return (
    <section className={styles.headerSection}>
      <div className={styles.container}>
        <div className={styles.subtextWrapper}>
          <span className={styles.subtext}>Expert Deck Guides</span>
          <span className={styles.line}></span>
        </div>
        <h1 className={`${styles.title} ${hubStyles.educationTitle}`}>Northern Virginia Deck Education Center</h1>
        <p className={`${styles.description} ${hubStyles.educationDescription}`}>
          Practical deck planning guides for Northern Virginia homeowners who want to understand deck permits,
          HOA approvals, composite vs wood options, Trex and TimberTech materials, deck costs, deck safety
          and covered deck decisions before requesting an estimate. Use this education center to compare
          project paths, prepare better questions and move from research to a clearer consultation with LDN Decks.
        </p>
        <div className={hubStyles.headerActions}>
          <Link href="/deck-payment-estimator" className={hubStyles.headerPrimaryBtn}>
            Use the Deck Payment Estimator
          </Link>
          <Link href="/get-estimate" className={hubStyles.headerSecondaryBtn}>
            Get a Permit-Ready Estimate
          </Link>
          <Link href="/education/deck-material-comparison-2026" className={hubStyles.headerSecondaryBtn}>
            Compare Deck Materials
          </Link>
        </div>
        <p className={hubStyles.headerProofLine}>
          Built for homeowners comparing structure, permits, HOA review, composite materials, stairs, railings, lighting, drainage and long-term value.
        </p>
      </div>
    </section>
  );
}
