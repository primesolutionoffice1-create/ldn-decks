'use client';

import React, { useState, useMemo, useRef } from 'react';
import { trackEstimatorEvent } from '@/lib/tracking';

function calculateMonthlyPayment(principal, apr, years) {
  const monthlyRate = apr / 100 / 12;
  const months = years * 12;
  if (monthlyRate === 0) return principal / months;
  const m = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  return m;
}

export default function FinancingCalculator() {
  const [amount, setAmount] = useState(35000);
  const [apr, setApr] = useState(8.99);
  const [years, setYears] = useState(15);
  const startedRef = useRef(false);
  const completedRef = useRef(false);
  const touchedInputsRef = useRef(new Set());

  const monthly = useMemo(() => calculateMonthlyPayment(amount, apr, years), [amount, apr, years]);
  const totalPaid = monthly * years * 12;
  const totalInterest = totalPaid - amount;

  const formatMoney = (n) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

  const trackInputChange = ({ inputName, nextAmount = amount, nextApr = apr, nextYears = years }) => {
    if (!startedRef.current) {
      startedRef.current = true;
      trackEstimatorEvent('estimator_started', {
        amount: nextAmount,
        apr: nextApr,
        years: nextYears,
        monthlyPayment: calculateMonthlyPayment(nextAmount, nextApr, nextYears),
        dedupeKey: 'first_interaction',
      });
    }

    if (inputName) {
      touchedInputsRef.current.add(inputName);
    }

    const nextMonthly = calculateMonthlyPayment(nextAmount, nextApr, nextYears);
    const nextTotalInterest = nextMonthly * nextYears * 12 - nextAmount;

    if (inputName === 'term') {
      trackEstimatorEvent('financing_option_selected', {
        amount: nextAmount,
        apr: nextApr,
        years: nextYears,
        monthlyPayment: nextMonthly,
        totalInterest: nextTotalInterest,
        optionType: `${nextYears}_year_term`,
        dedupeKey: `term_${nextYears}`,
      });
    }

    if (!completedRef.current && touchedInputsRef.current.size >= 3) {
      completedRef.current = true;
      trackEstimatorEvent('estimator_completed', {
        amount: nextAmount,
        apr: nextApr,
        years: nextYears,
        monthlyPayment: nextMonthly,
        totalInterest: nextTotalInterest,
        dedupeKey: 'all_inputs_adjusted',
      });
    }
  };

  return (
    <div style={{ maxWidth: 720, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
        <div>
          {/* Amount slider */}
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
              <label style={{ fontSize: '0.85rem', color: '#555', fontWeight: 600 }}>Project Amount</label>
              <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--black)' }}>{formatMoney(amount)}</span>
            </div>
            <input
              type="range"
              min={15000}
              max={100000}
              step={1000}
              value={amount}
              onChange={(e) => {
                const nextAmount = Number(e.target.value);
                setAmount(nextAmount);
                trackInputChange({ inputName: 'amount', nextAmount });
              }}
              style={{ width: '100%', accentColor: 'var(--color-primary, #d14817)', cursor: 'pointer' }}
              aria-label="Project amount"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#999', marginTop: '0.25rem' }}>
              <span>$15K</span>
              <span>$100K</span>
            </div>
          </div>

          {/* APR slider */}
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
              <label style={{ fontSize: '0.85rem', color: '#555', fontWeight: 600 }}>Estimated APR</label>
              <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--black)' }}>{apr.toFixed(2)}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={18}
              step={0.25}
              value={apr}
              onChange={(e) => {
                const nextApr = Number(e.target.value);
                setApr(nextApr);
                trackInputChange({ inputName: 'apr', nextApr });
              }}
              style={{ width: '100%', accentColor: 'var(--color-primary, #d14817)', cursor: 'pointer' }}
              aria-label="Annual percentage rate"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#999', marginTop: '0.25rem' }}>
              <span>0%</span>
              <span>18%</span>
            </div>
          </div>

          {/* Term slider */}
          <div style={{ marginBottom: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
              <label style={{ fontSize: '0.85rem', color: '#555', fontWeight: 600 }}>Loan Term</label>
              <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--black)' }}>{years} {years === 1 ? 'year' : 'years'}</span>
            </div>
            <input
              type="range"
              min={2}
              max={20}
              step={1}
              value={years}
              onChange={(e) => {
                const nextYears = Number(e.target.value);
                setYears(nextYears);
                trackInputChange({ inputName: 'term', nextYears });
              }}
              style={{ width: '100%', accentColor: 'var(--color-primary, #d14817)', cursor: 'pointer' }}
              aria-label="Loan term in years"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#999', marginTop: '0.25rem' }}>
              <span>2 yr</span>
              <span>20 yr</span>
            </div>
          </div>
        </div>

        <div style={{ background: 'var(--color-dark)', color: 'var(--white)', borderRadius: 12, padding: '2rem 1.75rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Estimated Monthly Payment
          </p>
          <p style={{ fontSize: '2.6rem', fontWeight: 800, color: 'var(--white)', margin: '0 0 0.25rem', letterSpacing: '-0.02em', lineHeight: 1 }}>
            {formatMoney(monthly)}
            <span style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>/mo</span>
          </p>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', marginTop: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', marginBottom: '0.4rem' }}>
              <span>Total interest:</span>
              <span style={{ fontWeight: 600 }}>{formatMoney(totalInterest)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>
              <span>Total paid:</span>
              <span style={{ fontWeight: 600 }}>{formatMoney(totalPaid)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
