import React from 'react';
import Link from 'next/link';
import styles from './ServicesFooterInfo.module.css';

export default function ServicesFooterInfo() {
  return (
    <section className={styles.footerInfoSection}>
      <div className={styles.container}>
        <div className={styles.contentWrap}>
           <h2>Serving Northern Virginia Homeowners</h2>
           <p className={styles.mainDesc}>
             Loudoun Decks provides outdoor living services across multiple regions. We are deeply committed to turning local backyards into beautiful focal points.
           </p>

           <div className={styles.countiesWrap}>
             <div className={styles.countyBadge}>Loudoun County</div>
             <div className={styles.countyBadge}>Fairfax County</div>
             <div className={styles.countyBadge}>Prince William County</div>
             <div className={styles.countyBadge}>Arlington County</div>
             <div className={styles.countyBadge}>Stafford County</div>
           </div>

           <p className={styles.citiesText}>
              Independent cities we serve include Alexandria, Falls Church, the City of Fairfax, Manassas, and Manassas Park. They are not part of the neighboring counties. <Link href="/areas-we-serve" style={{ color: 'var(--site-color)', fontWeight: 600 }}>View all service areas</Link>.
           </p>
        </div>
      </div>
    </section>
  );
}
