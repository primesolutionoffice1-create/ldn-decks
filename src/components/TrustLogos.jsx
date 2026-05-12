import React from 'react';
import Image from 'next/image';
import styles from './TrustLogos.module.css';

const logos = [
  { src: '/images/trust-thumbtack.png', alt: 'Loudoun Decks Thumbtack Top Pro' },
  { src: '/images/trust-buildzoom.png', alt: 'Loudoun Decks BuildZoom Accredited' },
  { src: '/images/trust-hotfrog.png', alt: 'Loudoun Decks Hotfrog Profile' },
  { src: '/images/trust-bbb.png', alt: 'Loudoun Decks BBB Accredited Business' }
];

export default function TrustLogos() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Find Loudoun Decks Online</h2>
        <p className={styles.subtitle}>
          You can also request information or view our business profile on trusted third-party platforms.
        </p>
        
        <div className={styles.logoGrid}>
          {logos.map((logo, idx) => (
            <div key={idx} className={styles.logoWrapper}>
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                width={200} 
                height={80} 
                className={styles.logo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
