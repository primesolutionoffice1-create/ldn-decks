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
          <Suspense
            fallback={(
              <>
                <h1 className={styles.title}>Confirming Your Request</h1>
                <p className={styles.message}>Please wait while we securely confirm that your message was received.</p>
              </>
            )}
          >
            <ThankYouTracking />
          </Suspense>

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
