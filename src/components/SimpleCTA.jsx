"use client";
import React from 'react';
import Link from 'next/link';
import styles from './SimpleCTA.module.css';
import CallLink from '@/components/CallLink';

import { useContact } from '@/context/ContactContext';

export default function SimpleCTA({ title, buttonText, link }) {
  const { openContact } = useContact();

  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2>{title}</h2>
        {link === 'phone' ? (
          <CallLink className={styles.btn}>
            {buttonText}
          </CallLink>
        ) : link === '/contact' ? (
          <button onClick={openContact} className={styles.btn}>
            {buttonText}
          </button>
        ) : (
          <Link href={link} className={styles.btn}>
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
}
