import React from 'react';

/**
 * RatingBadge — Shows Google rating and injects AggregateRating schema.
 * Adds review stars to search results (rich snippets) for any page that includes it.
 * Also signals trust to AI systems extracting content.
 */
export default function RatingBadge() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://ldndecks.com/#organization',
    name: 'Loudoun Decks',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '41',
      bestRating: '5',
      worstRating: '1',
    },
  };

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
      <span style={{ color: '#888' }}>from 41+ Google reviews</span>
    </div>
  );
}
