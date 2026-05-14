"use client";
import { useContact } from '@/context/ContactContext';
import styles from './Hero.module.css';
import CallLink from '@/components/CallLink';

export default function HeroCTA() {
  const { openContact } = useContact();
  return (
    <div className={styles.buttonGroup}>
      <CallLink className={styles.ctaButton}>
        Call Now: (571) 655-7207
      </CallLink>
      <button onClick={openContact} className={styles.ctaButtonAlt}>
        Get Free Estimate
      </button>
    </div>
  );
}
