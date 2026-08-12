import Link from 'next/link';
import CallLink from '@/components/CallLink';

// Compact conversion bridge rendered mid-article on long-form blog and
// education pages. The end-of-article conclusionBox converts readers who
// finish; this catches engaged readers who never scroll that far. Kept
// deliberately quiet — one line of copy, one button, one phone link — so it
// reads as a helpful aside rather than an interruption.
export default function MidArticleCta() {
  return (
    <aside
      aria-label="Get a free deck estimate"
      style={{
        margin: '40px 0',
        padding: '20px 24px',
        background: '#f9fafb',
        border: '1px solid #e5e7eb',
        borderLeft: '4px solid var(--button-color, #d14817)',
        borderRadius: '8px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '16px',
        justifyContent: 'space-between',
      }}
    >
      <p style={{ margin: 0, flex: '1 1 260px', color: '#333' }}>
        Planning a project in Northern Virginia? Talk to a licensed local deck
        builder — free, no-pressure estimate. Or call{' '}
        <CallLink style={{ color: 'var(--button-color, #d14817)', fontWeight: 700 }} />.
      </p>
      <Link
        href="/get-estimate"
        style={{
          display: 'inline-block',
          padding: '12px 22px',
          background: 'var(--button-color, #d14817)',
          color: '#fff',
          fontWeight: 700,
          borderRadius: '6px',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        Get a Free Estimate
      </Link>
    </aside>
  );
}
