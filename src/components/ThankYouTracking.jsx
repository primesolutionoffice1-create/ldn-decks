"use client";

import { useEffect, useRef, useState } from 'react';
import { trackLeadConfirmed } from '@/lib/tracking';
import {
  consumeLeadConfirmationReceipt,
  verifyLeadConfirmation,
} from '@/lib/leadConfirmationClient';
import styles from '@/app/thank-you/thank-you.module.css';

export default function ThankYouTracking() {
  const [status, setStatus] = useState('neutral');
  const verificationRef = useRef(undefined);

  useEffect(() => {
    if (verificationRef.current === undefined) {
      const receipt = consumeLeadConfirmationReceipt();
      verificationRef.current = receipt
        ? {
            receipt,
            promise: verifyLeadConfirmation(receipt.eventId, receipt.proof),
          }
        : null;
    }

    const verification = verificationRef.current;
    if (!verification) return undefined;

    let active = true;
    const { receipt } = verification;
    queueMicrotask(() => {
      if (active) setStatus('pending');
    });

    verification.promise.then((isVerified) => {
      if (!active) return;
      if (isVerified) {
        trackLeadConfirmed({ eventId: receipt.eventId });
        setStatus('verified');
      } else {
        setStatus('error');
      }
    }).catch(() => {
      if (active) setStatus('error');
    });

    return () => {
      active = false;
    };
  }, []);

  if (status === 'verified') {
    return (
      <>
        <div className={styles.successBadge} aria-label="Request confirmed">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className={styles.title}>Message Received!</h1>
        <p className={styles.message}>
          Thank you for reaching out to Loudoun Decks. We&apos;ve received your inquiry and our team is reviewing your project details.
        </p>
        <div className={styles.nextSteps}>
          <h3>What happens next?</h3>
          <div className={styles.step}><div className={styles.dot}></div><span>A design expert will review your request</span></div>
          <div className={styles.step}><div className={styles.dot}></div><span>We&apos;ll call you to confirm scope, location, and next steps</span></div>
          <div className={styles.step}><div className={styles.dot}></div><span>You&apos;ll get a detailed design review and written estimate</span></div>
        </div>
      </>
    );
  }

  if (status === 'pending') {
    return (
      <>
        <h1 className={styles.title}>Confirming Your Request</h1>
        <p className={styles.message}>Please wait while we securely confirm that your message was received.</p>
      </>
    );
  }

  if (status === 'error') {
    return (
      <>
        <h1 className={styles.title}>We Couldn&apos;t Confirm This Request</h1>
        <p className={styles.message}>
          No confirmation has been recorded from this page. Please return to the contact form or call us if you still need help.
        </p>
      </>
    );
  }

  return (
    <>
      <h1 className={styles.title}>Plan Your Deck Project</h1>
      <p className={styles.message}>
        This page confirms a request only after a completed form submission. Start with a free project consultation or explore recent work below.
      </p>
    </>
  );
}
