import React from 'react';
import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.notFoundWrapper}>
      {/* Background Floating Orbs */}
      <div className={styles.floatingCircle1}></div>
      <div className={styles.floatingCircle2}></div>

      <div className={styles.container}>
        <div className={styles.textWrap}>
          <h1 className={styles.glitch}>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
        </div>

        <div className={styles.contentArea}>
          <div className={styles.subtextWrapper}>
             <span className={styles.line}></span>
             <span className={styles.subtext}>Page Not Found</span>
             <span className={styles.line}></span>
          </div>
          
          <h2 className={styles.title}>You stepped off the deck!</h2>
          <p className={styles.description}>
            The outdoor space you are looking for doesn&apos;t exist or is currently undergoing renovation. Let&apos;s get you back to sturdy ground.
          </p>

          <Link href="/" className={styles.homeBtn}>
            Return To Homepage
          </Link>

          <div style={{ marginTop: '2.5rem', textAlign: 'left', maxWidth: 400 }}>
            <p style={{ fontWeight: 600, marginBottom: '0.75rem', color: '#ccc', fontSize: '0.9rem' }}>Popular pages:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><Link href="/northern-virginia-deck-building-guide" style={{ color: 'var(--color-primary, #d14817)', textDecoration: 'none', fontSize: '0.9rem' }}>Complete Deck Building Guide</Link></li>
              <li><Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary, #d14817)', textDecoration: 'none', fontSize: '0.9rem' }}>Deck Cost in Northern Virginia</Link></li>
              <li><Link href="/services" style={{ color: 'var(--color-primary, #d14817)', textDecoration: 'none', fontSize: '0.9rem' }}>Our Services</Link></li>
              <li><Link href="/showcase" style={{ color: 'var(--color-primary, #d14817)', textDecoration: 'none', fontSize: '0.9rem' }}>Project Gallery</Link></li>
              <li><Link href="/contact" style={{ color: 'var(--color-primary, #d14817)', textDecoration: 'none', fontSize: '0.9rem' }}>Get a Free Estimate</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
