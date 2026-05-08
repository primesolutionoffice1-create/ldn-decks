"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './PromoModal.module.css';
import { useContact } from '@/context/ContactContext';
import { trackPhoneClick } from '@/lib/tracking';

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.06 21 2 12.94 2 3C2 2.45 2.45 2 3 2H6.5C7.05 2 7.5 2.45 7.5 3C7.5 4.25 7.7 5.45 8.07 6.57C8.18 6.92 8.1 7.31 7.82 7.59L5.62 9.79L6.62 10.79Z" />
  </svg>
);

export default function PromoModal() {
  const { openContact } = useContact();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only show once per session so it isn't an annoyance when navigating
    try {
      const isBrowser = typeof window !== 'undefined';
      const hasSeenModal = isBrowser && window.sessionStorage ? sessionStorage.getItem('promoModalSeen') : 'true';
      
      if (!hasSeenModal || hasSeenModal === 'false') {
        const timer = setTimeout(() => {
          setIsOpen(true);
          if (isBrowser && window.sessionStorage) {
            sessionStorage.setItem('promoModalSeen', 'true');
          }
        }, 10000); // Trigger after exactly 10 seconds
        return () => clearTimeout(timer);
      }
    } catch (e) {
      console.warn("Session storage not available", e);
    }
  }, []);

  const handleGetEstimate = () => {
    setIsOpen(false);
    openContact();
  };

  // Prevent background scrolling while modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()} /* Prevent close when clicking inner content */
      >
        <button
          className={styles.closeBtn}
          onClick={() => setIsOpen(false)}
          aria-label="Close modal"
        >
          <CloseIcon />
        </button>
        <div className={styles.imageContainer}>
          <Image
            src="/images/img63.jpeg"
            alt="Beautiful Custom Deck"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 600px) 100vw, 400px"
          />
          <div className={styles.logoOverlay}>
            <Image
              src="/ldndecks-logo.webp"
              alt="Loudoun Decks"
              width={140}
              height={50}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        <div className={styles.textContent}>
          <h2>Ready for Your Dream Deck?</h2>
          <p>
            Transform your outdoor living space with Northern Virginia&apos;s premier custom deck builder.
            We specialize in top-tier composite decking, customized patios, and beautiful pergolas!
          </p>
          <p className={styles.highlightText}>Unlock your free, no-obligation estimate today!</p>

          <div className={styles.buttonGroup}>
            <a href="tel:+15716557207" className={styles.callBtn} onClick={trackPhoneClick}>
              <PhoneIcon />
              Call Us
            </a>
            <button onClick={handleGetEstimate} className={styles.estimateBtn}>
              Get Free Estimate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
