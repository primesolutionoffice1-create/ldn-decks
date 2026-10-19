"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import styles from './FinancingTeaser.module.css';
import {
  SAMPLE_APR,
  SAMPLE_PROJECT_AMOUNT,
  SAMPLE_TERM_YEARS,
  calcMonthlyPayment,
} from '@/lib/sampleFinancing';

// Sample financing assumptions used purely for the on-page illustration.
// Actual rate and term are determined by the lender at pre-qualification.
const MIN_AMOUNT = 5000;
const MAX_AMOUNT = 80000;
const DEFAULT_AMOUNT = SAMPLE_PROJECT_AMOUNT;
const QUICK_PICKS = [15000, 25000, 45000, 65000];

function formatUSD(n) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

export default function FinancingTeaser() {
  const [amount, setAmount] = useState(DEFAULT_AMOUNT);

  const monthly = useMemo(
    () => calcMonthlyPayment(amount, SAMPLE_APR, SAMPLE_TERM_YEARS),
    [amount],
  );
  const sliderFillPct = ((amount - MIN_AMOUNT) / (MAX_AMOUNT - MIN_AMOUNT)) * 100;

  return (
    <section className={styles.section} aria-labelledby="financing-teaser-heading">
      <div className={styles.container}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>● Soft Credit Check · No Score Impact</span>
          <h2 id="financing-teaser-heading" className={styles.heading}>
            Financing available — build now, pay monthly
          </h2>
          <p className={styles.lede}>
            Move the slider to illustrate a 10-year payment at about 9% APR. The amount is your input, not a Loudoun Decks price. The lender sets the actual rate, term, and payment.
          </p>
        </div>

        <div className={styles.card} role="group" aria-labelledby="financing-teaser-heading">
          <div className={styles.amountRow}>
            <label htmlFor="financing-amount" className={styles.amountLabel}>Project Amount</label>
            <span className={styles.amountValue}>{formatUSD(amount)}</span>
          </div>

          <input
            id="financing-amount"
            type="range"
            min={MIN_AMOUNT}
            max={MAX_AMOUNT}
            step={1000}
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value, 10))}
            className={styles.slider}
            style={{ '--slider-fill': `${sliderFillPct}%` }}
            aria-label="Project amount in dollars"
          />

          <div className={styles.quickPicks}>
            {QUICK_PICKS.map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setAmount(v)}
                className={`${styles.chip} ${amount === v ? styles.chipActive : ''}`}
                aria-pressed={amount === v}
              >
                {formatUSD(v)}
              </button>
            ))}
          </div>

          <div className={styles.resultRow}>
            <div className={styles.resultBlock}>
              <span className={styles.resultLabel}>Illustrated payment</span>
              <span className={styles.resultValue}>
                {formatUSD(Math.round(monthly))}
                <span className={styles.resultUnit}>/mo</span>
              </span>
              <span className={styles.resultMeta}>at ~9% APR over 10 years</span>
            </div>
            <Link href="/deck-payment-estimator" className={styles.cta}>
              Check My Real Rate →
            </Link>
          </div>

          <p className={styles.disclaimer}>
            For illustration only. Actual rate, term, and monthly payment are determined by the lender based on creditworthiness.
            Loudoun Decks is not a lender and does not earn a commission on financing.
          </p>
        </div>
      </div>
    </section>
  );
}
