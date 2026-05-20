import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './QualityLeader.module.css';

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.checkIcon}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export default function QualityLeader() {
  return (
    <section className={styles.qualitySection}>
      <div className={styles.container}>
        
        {/* Images Mosaic Column */}
        <div className={styles.mosaicGrid}>
          <div className={styles.leftStack}>
            <div className={styles.imgWrapSmallTop}>
               <Image src="/images/img32.jpeg" alt="Top deck view" fill className={styles.imgProps} sizes="(max-width: 768px) 100vw, 300px" />
            </div>
            <div className={styles.imgWrapSmallBottom}>
               <Image src="/images/img33.jpeg" alt="Wide angle deck" fill className={styles.imgProps} sizes="(max-width: 768px) 100vw, 300px" />
            </div>
          </div>
          <div className={styles.rightTall}>
             <div className={styles.imgWrapTall}>
               <Image src="/images/img34.jpeg" alt="Twilight deck vertical" fill className={styles.imgProps} sizes="(max-width: 768px) 100vw, 400px" />
             </div>
          </div>
        </div>

        {/* Content Column */}
        <div className={styles.contentCol}>
          <div className={styles.subtextWrapper}>
            <span className={styles.subtext}>Get to know us</span>
            <span className={styles.line}></span>
          </div>
          
          <h2 className={styles.title}>Recognized Quality Leader in Decking & Fence</h2>
          <p className={styles.description}>
            Every project begins with a free consultation, where we discuss ideas, review the outdoor space, and answer questions. From there, we focus on clear project scope and realistic expectations before construction begins.
          </p>
          
          <ul className={styles.benefitsList}>
            <li>
              <div className={styles.iconBox}><CheckIcon /></div>
              <div className={styles.benefitText}>
                <h4>Professional and Certified</h4>
                <p>Our approach is centered on planning, clarity, and quality workmanship.</p>
              </div>
            </li>
            <li>
              <div className={styles.iconBox}><CheckIcon /></div>
              <div className={styles.benefitText}>
                <h4>We Use Quality Material</h4>
                <p>Focusing on robust builds that add long-term value to homes.</p>
              </div>
            </li>
          </ul>

          <Link href="/services" className={styles.ctaButton}>
            Discover More
          </Link>
        </div>

      </div>
    </section>
  );
}
