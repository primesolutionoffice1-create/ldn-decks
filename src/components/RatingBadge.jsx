import React from 'react';
import { BUSINESS } from '@/lib/business';

/**
 * RatingBadge — Shows the Google rating as visible trust content only.
 * AggregateRating schema is emitted once globally from StructuredData.
 */
export default function RatingBadge() {
  return (
    <div
      data-speakable="true"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: '#fff8f0',
        border: '1px solid #f0d0a0',
        borderRadius: 8,
        padding: '0.5rem 1rem',
        fontSize: '0.85rem',
        color: '#333',
      }}
    >
      <span style={{ color: '#f59e0b', fontSize: '1rem' }}>★★★★★</span>
      <span style={{ fontWeight: 600 }}>5.0</span>
      <span style={{ color: '#888' }}>from {BUSINESS.aggregateRating.reviewCount}+ Google reviews</span>
    </div>
  );
}
