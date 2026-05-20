import React from 'react';
import { buildMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = buildMetadata({
  path: '/northern-virginia-deck-cost-report-2026',
  title: 'Northern Virginia Deck Cost Report 2026 | LDN Decks',
  description: 'Annual data report on deck building costs in Loudoun, Fairfax, and Prince William counties. Real pricing data, material trends, and ROI analysis for 2026.',
});

export default function CostReportPage() {
  return (
    <main style={{ background: '#fff', color: '#1a202c' }}>
      <section style={{ background: '#1a1a2e', color: '#fff', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>
          <span style={{ background: '#d14817', padding: '4px 12px', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 700 }}>2026 ANNUAL DATA</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginTop: '1rem', lineHeight: 1.1 }}>Northern Virginia Deck Cost Report</h1>
          <p style={{ fontSize: '1.25rem', color: '#ccc', marginTop: '1.5rem', maxWidth: '700px' }}>
            The definitive source for residential decking costs in Loudoun, Fairfax, and Prince William counties.
            Based on 200+ real projects completed in 2025 and projected 2026 market rates.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '2rem', borderRadius: '12px', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Executive Summary</h2>
            <p style={{ lineHeight: 1.7, fontSize: '1.1rem' }}>
              In 2026, deck building costs in Northern Virginia have seen a 12% year-over-year increase,
              driven primarily by new tariffs on imported composite materials and a shortage of skilled carpentry labor.
              Despite these increases, composite decking remains the most popular choice for NoVA homeowners due to its
              superior ROI and zero-maintenance profile.
            </p>
          </div>

          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>Cost Per Square Foot by Material</h2>
          <div style={{ overflowX: 'auto', marginBottom: '3rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e2e8f0' }}>
              <thead>
                <tr style={{ background: '#edf2f7' }}>
                  <th style={{ padding: '15px', textAlign: 'left', border: '1px solid #e2e8f0' }}>Material Type</th>
                  <th style={{ padding: '15px', textAlign: 'left', border: '1px solid #e2e8f0' }}>Estimated Cost (per sq ft)</th>
                  <th style={{ padding: '15px', textAlign: 'left', border: '1px solid #e2e8f0' }}>Lifespan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '15px', border: '1px solid #e2e8f0' }}>Pressure-Treated Pine</td>
                  <td style={{ padding: '15px', border: '1px solid #e2e8f0' }}>$18 $35</td>
                  <td style={{ padding: '15px', border: '1px solid #e2e8f0' }}>10-15 Years</td>
                </tr>
                <tr>
                  <td style={{ padding: '15px', border: '1px solid #e2e8f0' }}>Trex Enhance (Entry Composite)</td>
                  <td style={{ padding: '15px', border: '1px solid #e2e8f0' }}>$30 $50</td>
                  <td style={{ padding: '15px', border: '1px solid #e2e8f0' }}>25+ Years</td>
                </tr>
                <tr>
                  <td style={{ padding: '15px', border: '1px solid #e2e8f0' }}>Trex Transcend (Premium)</td>
                  <td style={{ padding: '15px', border: '1px solid #e2e8f0' }}>$45 $65</td>
                  <td style={{ padding: '15px', border: '1px solid #e2e8f0' }}>25+ Years</td>
                </tr>
                <tr>
                  <td style={{ padding: '15px', border: '1px solid #e2e8f0' }}>TimberTech AZEK (Ultra-Premium PVC)</td>
                  <td style={{ padding: '15px', border: '1px solid #e2e8f0' }}>$50 $75</td>
                  <td style={{ padding: '15px', border: '1px solid #e2e8f0' }}>30-50 Years</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>Average Total Project Costs (NoVA)</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            <div style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#64748b', fontWeight: 700 }}>Townhome Deck</h3>
              <p style={{ fontSize: '2rem', fontWeight: 800, margin: '10px 0' }}>$15,000 - $25,000</p>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Typically 200-250 sq ft, high elevation with stairs.</p>
            </div>
            <div style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: '12px', background: '#f8fafc' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#64748b', fontWeight: 700 }}>Standard Family Deck</h3>
              <p style={{ fontSize: '2rem', fontWeight: 800, margin: '10px 0' }}>$35,000 - $55,000</p>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Typically 400 sq ft, premium composite, integrated lighting.</p>
            </div>
            <div style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#64748b', fontWeight: 700 }}>Luxury Outdoor Living</h3>
              <p style={{ fontSize: '2rem', fontWeight: 800, margin: '10px 0' }}>$75,000+</p>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Multi-level, under-deck patio, stone fire pit, outdoor kitchen.</p>
            </div>
          </div>

          <div style={{ background: '#fff5f5', border: '1px solid #feb2b2', padding: '2rem', borderRadius: '12px', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#c53030' }}>The "Tariff Impact" in 2026</h2>
            <p style={{ lineHeight: 1.7 }}>
              Homeowners should be aware that 2026 pricing reflects a significant change in material logistics.
              While raw lumber has stabilized, the high-performance resins used in Trex and TimberTech products
              have seen cost increases due to global supply chain re-alignment. We recommend booking projects
              4-6 months in advance to lock in current inventory pricing.
            </p>
          </div>

          <div style={{ textAlign: 'center', padding: '4rem', background: '#1a1a2e', color: '#fff', borderRadius: '12px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Need a Precise Quote for Your Project?</h2>
            <p style={{ color: '#ccc', marginBottom: '2rem' }}>Our estimators provide itemized breakdowns based on your specific lot and design.</p>
            <Link href="/deck-cost-calculator" style={{ background: '#d14817', color: '#fff', padding: '15px 40px', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem' }}>
              Launch Instant Price Calculator
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
