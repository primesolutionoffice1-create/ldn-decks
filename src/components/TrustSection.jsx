import React from 'react';
import Image from 'next/image';
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
              <Image
                src="/badges/bbb-a-plus-seal.png"
                className={styles.bbbSealImg}
                alt="Loudoun Decks BBB Business Review"
                width={200}
                height={65}
              />
            </a>
          </div>
          
          <div className={styles.trexBlock}>
            <p className={styles.trexLabel}>Trex® Partner</p>
            <h2>Engineering Excellence</h2>
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
