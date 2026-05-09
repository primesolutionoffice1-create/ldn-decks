import React from 'react';
import styles from './MaterialPartners.module.css';

const partners = [
  { name: 'Trex', sub: 'Platinum Partner' },
  { name: 'TimberTech', sub: 'Certified Installer' },
  { name: 'Fiberon', sub: 'Premium Decking' },
  { name: 'Azek', sub: 'High-Performance' },
  { name: 'Wolf Home Products', sub: 'Outdoor Living' }
];

export default function MaterialPartners() {
  const allPartners = [...partners, ...partners]; // Double for seamless loop

  return (
    <section className={styles.partnersSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Trusted Material Partners</h2>
        <div className={styles.ticker}>
          <div className={styles.tickerTrack}>
            {allPartners.map((partner, index) => (
              <div key={index} className={styles.partnerCard}>
                <span className={styles.partnerName}>{partner.name}</span>
                <span className={styles.partnerSub}>{partner.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
