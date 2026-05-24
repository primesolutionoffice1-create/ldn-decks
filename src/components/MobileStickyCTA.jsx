"use client";

import Link from 'next/link';
import CallLink from './CallLink';
import styles from './MobileStickyCTA.module.css';

export default function MobileStickyCTA({
  estimateHref = '/get-estimate',
  microcopy = 'Premium composite decks from $15k+',
}) {
  return (
    <aside className={styles.wrapper} aria-label="Mobile contact options">
      <p className={styles.microcopy}>{microcopy}</p>
      <div className={styles.actions}>
        <CallLink className={styles.callButton} ariaLabel="Call Loudoun Decks now">
          Call Now
        </CallLink>
        <Link className={styles.estimateButton} href={estimateHref} aria-label="Request a free deck estimate">
          Free Estimate
        </Link>
      </div>
    </aside>
  );
}
