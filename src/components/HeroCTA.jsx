"use client";
import Link from 'next/link';
import styles from './Hero.module.css';
import CallLink from '@/components/CallLink';

export default function HeroCTA() {
  return (
    <div className={styles.buttonGroup}>
      <CallLink className={styles.ctaButton}>
        Call (571) 655-7207
      </CallLink>
      <Link href="/get-estimate" className={styles.ctaButtonAlt}>
        Request Free Estimate
      </Link>
    </div>
  );
}
