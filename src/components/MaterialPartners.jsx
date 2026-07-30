import React from 'react';
import styles from './MaterialPartners.module.css';

const materials = [
  { name: 'Trex', sub: 'Product planning' },
  { name: 'TimberTech', sub: 'Product planning' },
  { name: 'Fiberon', sub: 'Decking options' },
  { name: 'AZEK', sub: 'PVC options' },
  { name: 'Wolf Home Products', sub: 'Outdoor living options' }
];

export default function MaterialPartners() {
  const allMaterials = [...materials, ...materials]; // Double for seamless loop

  return (
    <section className={styles.partnersSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Composite & PVC Decking Options We Build With</h2>
        <div className={styles.ticker}>
          <div className={styles.tickerTrack}>
            {allMaterials.map((material, index) => (
              <div key={index} className={styles.partnerCard}>
                <span className={styles.partnerName}>{material.name}</span>
                <span className={styles.partnerSub}>{material.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
