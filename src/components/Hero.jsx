import styles from './Hero.module.css';
import Image from 'next/image';
import HeroCTA from './HeroCTA';
import { BUSINESS } from '@/lib/business';

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
        sizes="(max-width: 768px) 100vw, 100vw"
        quality={70}
        style={{ objectFit: 'cover' }}
      />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.subtextWrapper}>
          <span className={styles.line}></span>
          <span className={styles.subtext}>LOCAL DECK BUILDER NEAR YOU</span>
          <span className={styles.line}></span>
        </div>
        <div className={styles.trustBadge}>
          <span className={styles.stars}>★</span>
          <span className={styles.ratingText}>Google Review Profile | {BUSINESS.aggregateRating.reviewCount}+ Reviews</span>
        </div>
        <h1 className={styles.title}>
          Custom Deck Builder Near You in Northern Virginia
        </h1>
        <p className={styles.heroDescription}>
          Need a deck contractor for a new composite deck, replacement, repair, or screened porch?
          Loudoun Decks handles design, permits, HOA details, and estimates across Loudoun, Fairfax, and Prince William.
        </p>
        <HeroCTA />
      </div>
    </section>
  );
}
