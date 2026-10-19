'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import CallLink from '@/components/CallLink';
import { MATERIALS, ADDONS } from '@/lib/deckBudgetModel';
import styles from './DeckCostCalculatorWidget.module.css';

export { MATERIALS, ADDONS } from '@/lib/deckBudgetModel';

export default function DeckCostCalculatorWidget({
  defaultMaterial = 3, // composite default per /composite-deck-cost-northern-virginia spec — Trex Transcend
  defaultSqft = 350,
  defaultAddons = [],
  ctaLabel = 'Request a Written Estimate',
  ctaHref = '/get-estimate',
}) {
  const [sqft, setSqft] = useState(defaultSqft);
  const [material, setMaterial] = useState(defaultMaterial);
  const [selectedAddons, setSelectedAddons] = useState(defaultAddons);

  const mat = MATERIALS[material];
  const selectedNames = selectedAddons.map((index) => ADDONS[index].name);

  const toggleAddon = (i) => {
    setSelectedAddons(prev =>
      prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]
    );
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
      <div style={{ minWidth: 0 }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.25rem' }}>Configure Your Deck</h3>

        <label htmlFor="deck-budget-size" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
          Deck Size: {sqft} sq ft
        </label>
        <input
          id="deck-budget-size"
          type="range"
          min={100}
          max={800}
          value={sqft}
          onChange={(e) => setSqft(Number(e.target.value))}
          style={{ width: '100%', marginBottom: '1.5rem' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#4a5568', marginTop: '-1rem', marginBottom: '1.5rem' }}>
          <span>100 sqft</span><span>800 sqft</span>
        </div>

        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Material</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {MATERIALS.map((m, i) => (
            <button
              key={i}
              type="button"
              aria-pressed={i === material}
              onClick={() => setMaterial(i)}
              style={{
                padding: '0.75rem 1rem',
                border: i === material ? '2px solid #d14817' : '1px solid #cbd5e0',
                borderRadius: 8,
                background: i === material ? '#fff3e0' : '#fff',
                cursor: 'pointer',
                textAlign: 'left',
                fontWeight: i === material ? 600 : 400,
              }}
            >
              {m.name}
            </button>
          ))}
        </div>

        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Add-Ons (optional)</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1rem' }}>
          {ADDONS.map((a, i) => (
            <label key={i} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', padding: '0.5rem', borderRadius: 6, background: selectedAddons.includes(i) ? '#ebf8ff' : '#f7fafc', cursor: 'pointer' }}>
              <input type="checkbox" checked={selectedAddons.includes(i)} onChange={() => toggleAddon(i)} />
              <span>{a.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div style={{ minWidth: 0 }}>
        <div className={styles.result}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.25rem' }}>Scope for a written estimate</h3>

          <div style={{ marginBottom: '1rem' }}>
            <p style={{ color: '#4a5568', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Floor area and material</p>
            <p aria-live="polite" style={{ fontSize: '1.2rem', fontWeight: 600, overflowWrap: 'anywhere' }}>{sqft} sq ft · {mat.name}</p>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <p style={{ color: '#4a5568', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Selected options</p>
            <p style={{ fontSize: '1.05rem', fontWeight: 600, overflowWrap: 'anywhere' }}>{selectedNames.length ? selectedNames.join(', ') : 'None selected'}</p>
          </div>

          <div style={{ borderTop: '2px solid #cbd5e0', paddingTop: '1rem', marginTop: '1rem' }}>
            <p style={{ color: '#4a5568', fontSize: '0.85rem', lineHeight: 1.6 }}>This planner does not calculate a price. Demolition, framing, stairs, railings, permits, and site access are confirmed in a written estimate.</p>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <Link
              href={ctaHref}
              style={{
                display: 'block',
                textAlign: 'center',
                background: '#d14817',
                color: '#ffffff',
                padding: '1rem',
                borderRadius: 8,
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '1.05rem',
              }}
            >
              {ctaLabel}
            </Link>
            <p style={{ textAlign: 'center', color: '#4a5568', fontSize: '0.8rem', marginTop: '0.5rem' }}>Or call <CallLink style={{ color: '#d14817', fontWeight: 600 }}>(571) 655-7207</CallLink></p>
          </div>

          <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #e2e8f0' }}>
            <p style={{ fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.5rem' }}>About this estimate</p>
            <p style={{ fontSize: '0.8rem', color: '#4a5568', lineHeight: 1.6 }}>
              Loudoun Decks does not publish a per-square-foot rate or a typical project total. The selections above describe scope only. A written estimate prices demolition, structure, materials, stairs, railings, permits, and the measured site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
