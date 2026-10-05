import styles from './Hero.module.css';
import Image from 'next/image';
import HeroCTA from './HeroCTA';

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
        <div className={styles.trustBadge}>
          <span className={styles.stars}>★</span>
          <span className={styles.ratingText}>Google Review Profile | Verify on Google Maps</span>
        </div>
        <h1 className={styles.title}>
          Custom Deck Builder Near You in Northern Virginia
        </h1>
        <p className={styles.heroDescription}>
          Loudoun Decks builds, replaces, resurfaces, and repairs wood and composite decks in Northern Virginia,
          including Leesburg, Ashburn, Sterling, and Centreville across Loudoun, Fairfax, and Prince William counties.
          We plan design, permits, HOA details, and written estimates.
        </p>
        <HeroCTA />
      </div>
    </section>
  );
}
