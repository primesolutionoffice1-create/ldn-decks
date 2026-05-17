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
        sizes="(max-width: 768px) 100vw, 100vw"
        quality={70}
        style={{ objectFit: 'cover' }}
      />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.subtextWrapper}>
          <span className={styles.line}></span>
          <span className={styles.subtext}>BUILDING MEMORIES TOGETHER</span>
          <span className={styles.line}></span>
        </div>
        <div className={styles.trustBadge}>
          <span className={styles.stars}>★★★★★</span>
          <span className={styles.ratingText}>5.0 Google Rating | 41 Reviews</span>
        </div>
        <h1 className={styles.title}>
          Custom Deck Builder &amp; Contractor Serving Northern Virginia
        </h1>
        <p className={styles.heroDescription}>
          Custom-designed composite decks, screened porches &amp; patios. 
          Trex Platinum Partner serving Loudoun, Fairfax &amp; Prince William Counties.
        </p>
        <HeroCTA />
      </div>
    </section>
  );
}
