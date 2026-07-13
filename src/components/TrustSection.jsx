import React from 'react';
import Image from 'next/image';
import { BUSINESS } from '@/lib/business';
import styles from './TrustSection.module.css';

export default function TrustSection() {
  const nadraMembership = BUSINESS.memberships.find((membership) => membership.alternateName === 'NADRA');
  const nadraDirectoryUrl = nadraMembership?.directoryUrl || 'https://www.nadra.org/membership/directory#!biz/id/69f274b54078d1282501ee3b';

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
            <a
              href={nadraDirectoryUrl}
              target="_blank"
              rel="noopener nofollow"
              className={styles.nadraCard}
              aria-label="View Loudoun Decks NADRA Proud Member profile"
              title="View Loudoun Decks NADRA Proud Member profile"
            >
              {nadraMembership?.logoPath ? (
                <Image
                  src={nadraMembership.logoPath}
                  className={styles.nadraLogo}
                  alt="Loudoun Decks NADRA Proud Member"
                  width={220}
                  height={90}
                />
              ) : (
                <span className={styles.nadraKicker}>NADRA Proud Member</span>
              )}
              <span className={styles.nadraTitle}>Deck Builder / Contractor / Remodeler</span>
              <span className={styles.nadraMeta}>Member since 2026</span>
              <span className={styles.nadraProfileLink}>View NADRA member profile</span>
            </a>
          </div>
          
          <div className={styles.trexBlock}>
            <Image
              src="/images/img13.jpeg"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 600px"
              quality={65}
              className={styles.trexImage}
            />
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
