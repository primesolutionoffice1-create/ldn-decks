import Link from 'next/link';
import { BUSINESS } from '@/lib/business';
import styles from './MobileProofStrip.module.css';

const MAPS_URL = BUSINESS.sameAs.find((url) => url.includes('google.com/maps/place/Loudoun+Decks'))
  || 'https://www.google.com/maps/place/Loudoun+Decks/';

export default function MobileProofStrip() {
  return (
    <section className={styles.strip} aria-label="Deck planning facts" data-proof-strip>
      <div className={styles.inner}>
        <p className={styles.kicker}>Plan the scope first</p>
        <ul className={styles.facts}>
          <li>
            <span className={styles.label}>New deck or replacement</span>
            <strong>Written estimate</strong>
          </li>
          <li>
            <span className={styles.label}>Resurfacing</span>
            <strong>After a frame inspection</strong>
          </li>
          <li>
            <span className={styles.label}>Financing</span>
            <strong>Lender sets the payment</strong>
            <Link href="/deck-payment-estimator" className={styles.cardLink}>Check your rate</Link>
          </li>
        </ul>
        <p className={styles.note}>
          Loudoun Decks does not publish a per-square-foot rate. Demolition, structure, stairs, railings, and permits are priced in a written estimate.
        </p>
        <div className={styles.links}>
          <Link href="/tools/deck-cost-estimator-northern-virginia">Open the cost estimator</Link>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">Read public Google reviews</a>
        </div>
      </div>
    </section>
  );
}
