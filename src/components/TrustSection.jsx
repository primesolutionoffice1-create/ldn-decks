import React from 'react';
import styles from './TrustSection.module.css';

export default function TrustSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.accreditationRow}>
          <div className={styles.bbbBlock}>
            <p className={styles.label}>Verified Excellence</p>
            <a 
              href="https://www.bbb.org/us/va/centreville/profile/deck-builder/loudoun-decks-0241-236091241/#sealclick" 
              target="_blank" 
              rel="nofollow"
            >
              <img 
                src="https://seal-dc-easternpa.bbb.org/seals/blue-seal-200-65-bbb-236091241.png" 
                className={styles.bbbSealImg}
                alt="Loudoun Decks BBB Business Review" 
              />
            </a>
          </div>
          
          <div className={styles.trexBlock}>
            <p className={styles.trexLabel}>Trex® Partner</p>
            <h3>Engineering Excellence</h3>
            <p className={styles.description}>
              Discover the technology behind the world’s #1 decking brand. 
              Explore the full Trex performance-engineered product line.
            </p>
            <a href="/trex-performance-products" className={styles.trexLink}>
              View Trex Products →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
