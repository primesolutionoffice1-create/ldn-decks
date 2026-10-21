import styles from './Hero.module.css';
import Image from 'next/image';
import Link from 'next/link';
import HeroCTA from './HeroCTA';
import { BUSINESS } from '@/lib/business';
import { AREAS_HUB_PATH, COVERAGE_SENTENCE } from '@/lib/serviceArea';

const MAPS_URL = BUSINESS.sameAs.find((url) => url.includes('google.com/maps/place/Loudoun+Decks'))
  || 'https://www.google.com/maps/place/Loudoun+Decks/';

// Server component. The image, headline, and trust badge render at build time.
// The two CTAs are isolated in HeroButtons (client) so only that subtree hydrates.
export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <Image
        src="/home-page-ldn.webp"
        alt="Luxury custom composite deck with Trex Transcend boards built by Loudoun Decks in Northern Virginia"
        fill
        priority
        fetchPriority="high"
        sizes="(min-width: 1200px) 1200px, 100vw"
        quality={65}
        style={{ objectFit: 'cover' }}
      />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.subtextWrapper}>
          <span className={styles.line}></span>
          <span className={styles.subtext}>LOCAL DECK BUILDER NEAR YOU</span>
          <span className={styles.line}></span>
        </div>
        <a
          className={styles.trustBadge}
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.stars} aria-hidden="true">★</span>
          <span className={styles.ratingText}>
            <span className={styles.ratingFull}>Google Review Profile | Verify on Google Maps</span>
            <span className={styles.ratingShort}>Public Google reviews</span>
          </span>
        </a>
        <h1 className={styles.title}>Custom Deck Builder Near You in Northern Virginia</h1>
        <p className={styles.subtitle}>Led by owner Nick, with 15 years of hands-on deck building. You work directly with him, from the first visit to the final board.</p>
        <p className={styles.coverage}>
          {COVERAGE_SENTENCE}{' '}
          <Link href={AREAS_HUB_PATH} className={styles.coverageLink}>View all service areas</Link>
        </p>
        <p className={styles.licenseLine}>Class A licensed. County permits and HOA review are part of the written plan.</p>
        <HeroCTA />
      </div>
    </section>
  );
}
