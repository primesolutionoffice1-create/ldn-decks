'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import CallLink from '@/components/CallLink';

// Single source of truth for the deck cost calculator UI + math.
// Used on /deck-cost-calculator (full-page linkable asset) and embedded
// inline on /composite-deck-cost-northern-virginia.
// NoVA premium of 25-35% is applied to the materials-only base range.

export const MATERIALS = [
  { name: 'Pressure-Treated Wood', min: 18, max: 35, lifespan: '10-15 years' },
  { name: 'Cedar', min: 25, max: 45, lifespan: '15-20 years' },
  { name: 'Trex Enhance', min: 30, max: 50, lifespan: '25+ years' },
  { name: 'Trex Transcend', min: 45, max: 65, lifespan: '25+ years' },
  { name: 'TimberTech AZEK', min: 50, max: 75, lifespan: '30-50 years' },
];

export const ADDONS = [
  { name: 'Stairs (per flight)', min: 1500, max: 4000 },
  { name: 'Composite Railings', min: 3000, max: 8000 },
  { name: 'Cable Railings', min: 5000, max: 12000 },
  { name: 'Built-in Lighting', min: 1500, max: 4000 },
  { name: 'Pergola', min: 5000, max: 15000 },
  { name: 'Screened Porch Conversion', min: 15000, max: 40000 },
];

const fmt = (n) => '$' + n.toLocaleString();

export default function DeckCostCalculatorWidget({
  defaultMaterial = 3, // composite default per /composite-deck-cost-northern-virginia spec — Trex Transcend
  defaultSqft = 350,
  ctaLabel = 'Estimate Your Exact Deck Cost',
  ctaHref = '/contact',
}) {
  const [sqft, setSqft] = useState(defaultSqft);
  const [material, setMaterial] = useState(defaultMaterial);
  const [selectedAddons, setSelectedAddons] = useState([]);

  const mat = MATERIALS[material];
  const baseLow = sqft * mat.min;
  const baseHigh = sqft * mat.max;
  const addonLow = selectedAddons.reduce((sum, i) => sum + ADDONS[i].min, 0);
  const addonHigh = selectedAddons.reduce((sum, i) => sum + ADDONS[i].max, 0);
  const totalLow = baseLow + addonLow;
  const totalHigh = baseHigh + addonHigh;
  const novaLow = Math.round(totalLow * 1.25);
  const novaHigh = Math.round(totalHigh * 1.35);

  const toggleAddon = (i) => {
    setSelectedAddons(prev =>
      prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]
    );
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
      <div>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.25rem' }}>Configure Your Deck</h3>

        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
          Deck Size: {sqft} sq ft
        </label>
        <input
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
              {m.name} <span style={{ color: '#4a5568', fontSize: '0.85rem' }}>({fmt(m.min)}-{fmt(m.max)}/sqft · {m.lifespan})</span>
            </button>
          ))}
        </div>

        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Add-Ons (optional)</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1rem' }}>
          {ADDONS.map((a, i) => (
            <label key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem', borderRadius: 6, background: selectedAddons.includes(i) ? '#ebf8ff' : '#f7fafc', cursor: 'pointer' }}>
              <input type="checkbox" checked={selectedAddons.includes(i)} onChange={() => toggleAddon(i)} />
              <span>{a.name}</span>
              <span style={{ marginLeft: 'auto', color: '#4a5568', fontSize: '0.85rem' }}>{fmt(a.min)}-{fmt(a.max)}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <div style={{ background: '#f7fafc', borderRadius: 12, padding: '2rem', position: 'sticky', top: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.25rem' }}>Your Estimate</h3>

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
            <p style={{ color: '#4a5568', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Northern Virginia Estimate (incl. 25-35% regional premium)</p>
            <p style={{ fontSize: '2rem', fontWeight: 700, color: '#d14817' }}>
              {fmt(novaLow)} – {fmt(novaHigh)}
            </p>
            <p style={{ color: '#4a5568', fontSize: '0.8rem' }}>Includes materials, labor, permits & cleanup</p>
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

          <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#fff', borderRadius: 8, border: '1px solid #e2e8f0' }}>
            <p style={{ fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.5rem' }}>About this estimate</p>
            <p style={{ fontSize: '0.8rem', color: '#4a5568', lineHeight: 1.6 }}>
              Based on 2026 Northern Virginia market rates from 200+ completed projects by Loudoun Decks.
              Actual costs vary by site conditions, HOA requirements, and design complexity.
              For an exact price, request a free on-site consultation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
