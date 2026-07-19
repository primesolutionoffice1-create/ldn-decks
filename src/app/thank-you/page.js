import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './thank-you.module.css';
import { buildMetadata } from '@/lib/seo';
import ThankYouTracking from '@/components/ThankYouTracking';

export const metadata = {
  ...buildMetadata({
    path: '/thank-you',
    title: 'Thank You | Loudoun Decks',
    description: 'Your message has been successfully sent. We will get back to you shortly to discuss your outdoor project.',
    image: '/social/thank-you-social.png',
  }),
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <div className={styles.thankYouWrapper}>
      <Suspense fallback={null}>
        <ThankYouTracking />
      </Suspense>
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <Image
            src="/thank-you-deck.png"
            alt="Beautiful custom Trex composite deck completed by Loudoun Decks in Northern Virginia"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        
        <div className={styles.contentCol}>
          <div className={styles.successBadge}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <h1 className={styles.title}>Message Received!</h1>
          <p className={styles.message}>
            Thank you for reaching out to Loudoun Decks. We&apos;ve received your inquiry and our team is already reviewing your project details.
          </p>
          
          <div className={styles.nextSteps}>
            <h3>What happens next?</h3>
            <div className={styles.step}>
              <div className={styles.dot}></div>
              <span>A design expert will review your request</span>
            </div>
            <div className={styles.step}>
              <div className={styles.dot}></div>
              <span>We&apos;ll call you to confirm scope, location, and next steps</span>
            </div>
            <div className={styles.step}>
              <div className={styles.dot}></div>
              <span>You&apos;ll get a detailed design review and written estimate</span>
            </div>
          </div>
          
          <div className={styles.buttonGroup}>
            <Link href="/reviews" className={styles.homeBtn}>
              Read Homeowner Reviews
            </Link>
            <Link href="/showcase" className={styles.galleryBtn}>
              View Project Gallery
            </Link>
            <Link href="/before-and-after" className={styles.galleryBtn}>
              Before &amp; After
            </Link>
          </div>

          <div style={{ marginTop: 28, padding: 16, borderRadius: 8, background: '#fff7f1', border: '1px solid #f3d3bd' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#7a3210' }}>While you wait — free download:</p>
            <p style={{ margin: '4px 0 10px', color: '#444', fontSize: 14 }}>
              The 2026 NoVA Deck Permit Checklist — every step from HOA review to final inspection across Loudoun, Fairfax, PWC, and Arlington counties.
            </p>
            <Link href="/lead-magnets/nova-deck-permit-checklist-2026" style={{ color: '#d14817', fontWeight: 600, textDecoration: 'underline' }}>
              Open the printable checklist →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
