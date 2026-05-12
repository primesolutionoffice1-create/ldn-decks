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
            alt="Beautiful custom deck celebration"
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
              <span>We&apos;ll call you to schedule a free on-site visit</span>
            </div>
            <div className={styles.step}>
              <div className={styles.dot}></div>
              <span>You&apos;ll get a detailed 3D design &amp; quote</span>
            </div>
          </div>
          
          <div className={styles.buttonGroup}>
            <Link href="/" className={styles.homeBtn}>
              Back to Home
            </Link>
            <Link href="/showcase" className={styles.galleryBtn}>
              View Project Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
