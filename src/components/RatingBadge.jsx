import React from 'react';
import { BUSINESS } from '@/lib/business';

/**
 * RatingBadge — Shows public Google review count as visible trust content only.
 * AggregateRating schema is intentionally not emitted for self-serving reviews.
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
      <span style={{ color: '#f59e0b', fontSize: '1rem' }}>Google reviews</span>
      <span style={{ fontWeight: 600 }}>{BUSINESS.aggregateRating.reviewCount}+</span>
      <span style={{ color: '#888' }}>public reviews</span>
    </div>
  );
}
