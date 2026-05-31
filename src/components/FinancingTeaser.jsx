"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import styles from './FinancingTeaser.module.css';

// Sample financing assumptions used purely for the on-page illustration.
// Actual rate and term are determined by the lender at pre-qualification.
const SAMPLE_APR = 0.09;            // 9% — sits in the middle of the typical NoVA range
const SAMPLE_TERM_YEARS = 10;       // 10 years — most popular term per /monthly-payment-composite-deck-northern-virginia
const MIN_AMOUNT = 5000;
const MAX_AMOUNT = 80000;
const DEFAULT_AMOUNT = 30000;
const QUICK_PICKS = [15000, 25000, 45000, 65000];

function calcMonthly(principal, apr, years) {
  const monthlyRate = apr / 12;
  const months = years * 12;
  if (monthlyRate === 0) return principal / months;
  const factor = Math.pow(1 + monthlyRate, months);
  return (principal * monthlyRate * factor) / (factor - 1);
}

function formatUSD(n) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

export default function FinancingTeaser() {
  const [amount, setAmount] = useState(DEFAULT_AMOUNT);

  const monthly = useMemo(() => calcMonthly(amount, SAMPLE_APR, SAMPLE_TERM_YEARS), [amount]);
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
            Most Northern Virginia composite-deck projects fit a comfortable monthly payment.
            Move the slider to see what a typical 10-year term looks like, then check your real rate
            in 60 seconds with a soft credit pull.
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
              <span className={styles.resultLabel}>As low as</span>
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
