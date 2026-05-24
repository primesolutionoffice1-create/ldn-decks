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
          Expert guides for deck safety, permits, materials, costs, HOA approvals and outdoor living decisions in Loudoun, Fairfax, Prince William, Arlington and Stafford.
        </p>
        <div className={hubStyles.headerActions}>
          <Link href="/contact" className={hubStyles.headerPrimaryBtn}>
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
