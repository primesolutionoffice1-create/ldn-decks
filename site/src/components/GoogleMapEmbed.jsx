import React from 'react';

export default function GoogleMapEmbed({ city, state = 'VA', height = '400px' }) {
  const query = encodeURIComponent(`${city}, ${state}`);
  const src = `https://maps.google.com/maps?q=${query}&t=&z=12&ie=UTF8&iwloc=&output=embed`;

  return (
    <div style={{ marginBottom: '2rem' }}>
      <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem', fontWeight: 600 }}>
        Service Area: {city}, {state}
      </p>
      <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e5e5' }}>
        <iframe
          title={`Map of ${city}, ${state} — Loudoun Decks service area`}
          src={src}
          width="100%"
          height={height}
          style={{ border: 0, display: 'block' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}
