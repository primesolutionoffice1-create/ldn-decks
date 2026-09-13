'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import CallLink from '@/components/CallLink';
import { MATERIALS, ADDONS, calculateDeckBudget, formatBudget as fmt } from '@/lib/deckBudgetModel';

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
  const { baseLow, baseHigh, addonLow, addonHigh, low: novaLow, high: novaHigh } = calculateDeckBudget(sqft, material, selectedAddons);

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
              {m.name} <span style={{ color: '#4a5568', fontSize: '0.85rem' }}>({fmt(m.min)}-{fmt(m.max)}/sqft model input)</span>
            </button>
          ))}
        </div>

        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Add-Ons (optional)</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1rem' }}>
          {ADDONS.map((a, i) => (
            <label key={i} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', padding: '0.5rem', borderRadius: 6, background: selectedAddons.includes(i) ? '#ebf8ff' : '#f7fafc', cursor: 'pointer' }}>
              <input type="checkbox" checked={selectedAddons.includes(i)} onChange={() => toggleAddon(i)} />
              <span>{a.name}</span>
              <span style={{ marginLeft: 'auto', color: '#4a5568', fontSize: '0.85rem' }}>{fmt(a.min)}-{fmt(a.max)}</span>
            </label>
          ))}
        </div>
      </div>

      <div style={{ minWidth: 0 }}>
        <div style={{ background: '#f7fafc', borderRadius: 8, padding: '1.25rem', position: 'sticky', top: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.25rem' }}>Illustrative Budget</h3>

          <div style={{ marginBottom: '1rem' }}>
            <p style={{ color: '#4a5568', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Base Deck ({sqft} sqft × {mat.name})</p>
            <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>{fmt(baseLow)} – {fmt(baseHigh)}</p>
          </div>

          {selectedAddons.length > 0 && (
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ color: '#4a5568', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Add-Ons</p>
              <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>+ {fmt(addonLow)} – {fmt(addonHigh)}</p>
            </div>
          )}

          <div style={{ borderTop: '2px solid #cbd5e0', paddingTop: '1rem', marginTop: '1rem' }}>
            <p style={{ color: '#4a5568', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Scenario total with a 25-35% planning adjustment</p>
            <p aria-live="polite" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#d14817', overflowWrap: 'anywhere' }}>
              {fmt(novaLow)} – {fmt(novaHigh)}
            </p>
            <p style={{ color: '#4a5568', fontSize: '0.8rem' }}>Selected options only. Confirm demolition, framing, permit fees and cleanup in your written estimate.</p>
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
              These preset assumptions illustrate how size and options affect a budget; they are not supplier quotes, completed-project prices, or a measured Northern Virginia average.
              The 25-35% adjustment applies to the base and selected add-ons. It is a model assumption, not a verified local premium.
              A property-specific written estimate determines actual scope and price.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
