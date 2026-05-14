import React from 'react';
import Link from 'next/link';
import styles from './HomeSEOContent.module.css';

const HomeSEOContent = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.item}>
            <h2 className={styles.heading}>Top-Rated Deck Contractor in Northern Virginia</h2>
            <p className={styles.text}>
              Every home in Northern Virginia is unique, from the classic colonials in Vienna to the modern estates in Ashburn. Loudoun Decks is a local <strong>deck contractor</strong> and <strong>deck builder in Northern Virginia</strong> focused on permit-ready designs, clean structural work, and low-maintenance outdoor spaces. If you are comparing deck contractors, start with our <Link href="/how-to-choose-a-deck-builder-northern-virginia">deck builder hiring checklist</Link> and our <Link href="/before-and-after">before-and-after project gallery</Link>.
            </p>
          </div>
          <div className={styles.item}>
            <h2 className={styles.heading}>Composite Deck Builder Near You</h2>
            <p className={styles.text}>
              Ahrefs shows strong local demand for <strong>composite deck builder near me</strong>, and that is exactly where we focus: Trex, TimberTech, and AZEK decks for homeowners in Loudoun, Fairfax, and Prince William counties. Our <Link href="/composite-decks">composite deck building service</Link> covers design, framing, hidden fasteners, railing options, permits, and HOA submissions. For budget planning, use the <Link href="/composite-deck-cost-northern-virginia">Northern Virginia composite deck cost guide</Link>.
            </p>
          </div>
          <div className={styles.item}>
            <h2 className={styles.heading}>Professional Deck Replacement & Resurfacing</h2>
            <p className={styles.text}>
              Is your current deck unsafe or outdated? We specialize in <strong>professional deck replacement</strong> and <strong>deck resurfacing</strong>. If your frame is structurally sound, resurfacing can often save 40-60% compared with a full rebuild. Start with our <Link href="/services/deck-replacement">deck replacement service</Link> or compare options in the <Link href="/deck-resurfacing-vs-replacement">resurfacing vs replacement guide</Link>.
            </p>
          </div>
          <div className={styles.item}>
            <h2 className={styles.heading}>Best Deck Builder for NoVA City Searches</h2>
            <p className={styles.text}>
              Rank Tracker shows city-level wins and near-wins across Ashburn, Sterling, McLean, Vienna, Herndon, Reston, Woodbridge, and Fairfax. Use the local pages for project examples, permit notes, and neighborhood-specific service details: <Link href="/deck-builder-ashburn-va">Ashburn deck builder</Link>, <Link href="/deck-builder-woodbridge-va">Woodbridge deck builder</Link>, <Link href="/deck-builder-mclean-va">McLean deck builder</Link>, and <Link href="/areas-we-serve">all service areas</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSEOContent;
