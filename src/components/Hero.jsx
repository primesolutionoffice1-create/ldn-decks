import styles from './Hero.module.css';
import Image from 'next/image';
import HeroCTA from './HeroCTA';
import { BUSINESS } from '@/lib/business';

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
        <h1 className={styles.title}>
          <span className={styles.titleFull}>Custom Deck Builder Near You in Northern Virginia</span>
          <span className={styles.titleShort}>Composite decks, replacements, and screened porches in Loudoun, Fairfax, and Prince William.</span>
        </h1>
        <p className={styles.heroDescription}>
          <span className={styles.descFull}>
            Need a deck contractor for a new composite deck, replacement, repair, or screened porch?
            Loudoun Decks helps plan design, permits, HOA details, and estimates across Loudoun, Fairfax, and Prince William.
          </span>
          <span className={styles.descShort}>
            Class A licensed. County permits and HOA review are part of the written plan.
          </span>
        </p>
        <HeroCTA />
      </div>
    </section>
  );
}
