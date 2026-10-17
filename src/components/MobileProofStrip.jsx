import Link from 'next/link';
import { MATERIALS } from '@/lib/deckBudgetModel';
import {
  SAMPLE_APR,
  SAMPLE_PROJECT_AMOUNT,
  SAMPLE_TERM_YEARS,
  sampleMonthlyPayment,
} from '@/lib/sampleFinancing';
import { BUSINESS } from '@/lib/business';
import styles from './MobileProofStrip.module.css';

const MAPS_URL = BUSINESS.sameAs.find((url) => url.includes('google.com/maps/place/Loudoun+Decks'))
  || 'https://www.google.com/maps/place/Loudoun+Decks/';

function perSqft(name) {
  const material = MATERIALS.find((item) => item.name === name);
  if (!material) return null;
  return `$${material.min}–$${material.max}`;
}

export default function MobileProofStrip() {
  const monthly = sampleMonthlyPayment().toLocaleString('en-US');
  const amount = SAMPLE_PROJECT_AMOUNT.toLocaleString('en-US');
  const aprPercent = Math.round(SAMPLE_APR * 100);

  return (
    <section className={styles.strip} aria-label="Deck planning facts" data-proof-strip>
      <div className={styles.inner}>
        <p className={styles.kicker}>Planning facts, not a quote</p>
        <ul className={styles.facts}>
          <li>
            <span className={styles.label}>Pressure-treated wood</span>
            <strong>{perSqft('Pressure-Treated Wood')} / sq ft</strong>
          </li>
          <li>
            <span className={styles.label}>Trex Transcend</span>
            <strong>{perSqft('Trex Transcend')} / sq ft</strong>
          </li>
          <li>
            <span className={styles.label}>Financing example</span>
            <strong>${monthly}/mo</strong>
            <span className={styles.meta}>${amount} at {aprPercent}% for {SAMPLE_TERM_YEARS} years</span>
          </li>
        </ul>
        <p className={styles.note}>
          Ranges come from the public planning model. Railings, stairs, permits, and the site visit change the written estimate. The monthly figure is an illustration, not a lender offer.
        </p>
        <div className={styles.links}>
          <Link href="/tools/deck-cost-estimator-northern-virginia">Open the cost estimator</Link>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">Read public Google reviews</a>
          <Link href="/deck-payment-estimator">Check your rate</Link>
        </div>
      </div>
    </section>
  );
}
