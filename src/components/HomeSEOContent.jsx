import React from 'react';
import Link from 'next/link';
import styles from './HomeSEOContent.module.css';

const HomeSEOContent = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.item}>
            <h2 className={styles.heading}>Trusted Deck Contractor in Northern Virginia</h2>
            <p className={styles.text}>
              Every home in Northern Virginia is unique, from the classic colonials in Vienna to the modern estates in Ashburn. Loudoun Decks is a local <strong>deck contractor</strong> and <strong>deck builder in Northern Virginia</strong> focused on permit-ready designs, clean structural work, and low-maintenance outdoor spaces. If you are comparing deck contractors, start with our <Link href="/how-to-choose-a-deck-builder-northern-virginia">deck builder hiring checklist</Link> and our <Link href="/before-and-after">before-and-after project gallery</Link>.
            </p>
          </div>
          <div className={styles.item}>
            <h2 className={styles.heading}>Composite Deck Builder Near You</h2>
            <p className={styles.text}>
              Homeowners searching for a <strong>composite deck builder near me</strong> usually need a clear path from ideas to a real estimate. We build Trex, TimberTech, and AZEK decks for Loudoun, Fairfax, and Prince William homes, including design, framing, hidden fasteners, railing options, permits, and HOA submissions. Compare materials in our <Link href="/composite-decks">composite deck building service</Link>, then use the <Link href="/deck-cost-calculator">deck cost calculator</Link> or the <Link href="/composite-deck-cost-northern-virginia">Northern Virginia composite deck cost guide</Link>.
            </p>
          </div>
          <div className={styles.item}>
            <h2 className={styles.heading}>Deck Repair Near Me, Replacement & Resurfacing</h2>
            <p className={styles.text}>
              Is your current deck unsafe, soft underfoot, or outdated? We specialize in <strong>deck repair near me</strong> searches that turn into structural repairs, inspections, resurfacing, and full replacement. Start with <Link href="/deck-repair-loudoun-county">deck repair in Loudoun County</Link>, review our <Link href="/services/deck-inspection">deck inspection service</Link>, or compare options in the <Link href="/deck-resurfacing-vs-replacement">resurfacing vs replacement guide</Link>.
            </p>
          </div>
          <div className={styles.item}>
            <h2 className={styles.heading}>Local Deck Builders for NoVA City Searches</h2>
            <p className={styles.text}>
              If you are comparing local deck builders in Ashburn, Leesburg, Sterling, McLean, Vienna, Herndon, Reston, Woodbridge, or Fairfax, use our city pages for planning examples, permit notes, and neighborhood-specific service details: <Link href="/deck-builder-ashburn-va">deck builder in Ashburn, VA</Link>, <Link href="/deck-builder-leesburg-va">deck builder in Leesburg, VA</Link>, <Link href="/deck-builder-woodbridge-va">Woodbridge deck builder</Link>, <Link href="/deck-builder-mclean-va">McLean deck builder</Link>, and <Link href="/areas-we-serve">all service areas</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSEOContent;
