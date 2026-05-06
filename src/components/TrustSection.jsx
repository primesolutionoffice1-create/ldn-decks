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
             <iframe 
                id="dealer-frame" 
                src="https://dealer.trex.com/?utm_id=001RN00000MDR90YAH&max_width=1200" 
                className={styles.trexIframe}
                title="Trex Dealer Profile"
              ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
