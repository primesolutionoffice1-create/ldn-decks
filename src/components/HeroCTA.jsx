"use client";
import { useContact } from '@/context/ContactContext';
import { trackPhoneClick } from '@/lib/tracking';
import styles from './Hero.module.css';

export default function HeroCTA() {
  const { openContact } = useContact();
  return (
    <div className={styles.buttonGroup}>
      <a href="tel:+15716557207" className={styles.ctaButton} onClick={trackPhoneClick}>
        Call Now: (571) 655-7207
      </a>
      <button onClick={openContact} className={styles.ctaButtonAlt}>
        Get Free Estimate
      </button>
    </div>
  );
}
