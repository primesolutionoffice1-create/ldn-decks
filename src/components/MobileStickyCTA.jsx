"use client";

import Link from 'next/link';
import styles from './MobileStickyCTA.module.css';

export default function MobileStickyCTA({
  phoneHref = 'tel:5716557207',
  estimateHref = '/get-estimate',
  microcopy = 'Premium composite decks from $15k+',
}) {
  return (
    <aside className={styles.wrapper} aria-label="Mobile contact options">
      <p className={styles.microcopy}>{microcopy}</p>
      <div className={styles.actions}>
        <a className={styles.callButton} href={phoneHref} aria-label="Call Loudoun Decks now">
          Call Now
        </a>
        <Link className={styles.estimateButton} href={estimateHref} aria-label="Request a free deck estimate">
          Free Estimate
        </Link>
      </div>
    </aside>
  );
}
