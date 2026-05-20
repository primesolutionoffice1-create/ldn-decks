'use client';

import { useEffect } from 'react';
import Link from 'next/link';

// Global error boundary. Next renders this whenever a server or client component
// throws during rendering. Sets noindex so error pages never enter search results.
export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Surface to Vercel Analytics / console for triage. Never logs PII.
    if (typeof window !== 'undefined' && window.console) {
      console.error('Page error boundary triggered:', error?.digest || error?.message);
    }
  }, [error]);

  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 24px',
      textAlign: 'center',
      backgroundColor: 'var(--white, #fff)',
    }}>
      <meta name="robots" content="noindex, follow" />
      <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-color, #1a1a1a)' }}>
        Something went wrong
      </h1>
      <p style={{ fontSize: '1.05rem', maxWidth: '480px', color: '#666', marginBottom: '2rem' }}>
        We hit an unexpected error loading this page. Try again, or head back to the homepage.
      </p>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          onClick={() => reset()}
          style={{
            padding: '12px 28px',
            background: 'var(--color-primary, #d14817)',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Try again
        </button>
        <Link
          href="/"
          style={{
            padding: '12px 28px',
            background: 'transparent',
            color: 'var(--color-primary, #d14817)',
            border: '2px solid var(--color-primary, #d14817)',
            borderRadius: '6px',
            fontSize: '1rem',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
