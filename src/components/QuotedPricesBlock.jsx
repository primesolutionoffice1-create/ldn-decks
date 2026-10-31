import { QUOTE_LABEL, QUOTE_SOURCE } from '@/lib/quotedPrices';

export default function QuotedPricesBlock({ paragraphs = [] }) {
  return (
    <section
      aria-labelledby="ldn-quoted-prices-heading"
      style={{
        border: '1px solid #d7e3d4',
        borderLeft: '4px solid #1f6b3a',
        background: '#f4faf5',
        borderRadius: 8,
        padding: '1.25rem 1.5rem',
        margin: '0 0 1.5rem',
      }}
    >
      <h2 id="ldn-quoted-prices-heading" style={{ margin: '0 0 0.75rem', fontSize: '1.35rem', lineHeight: 1.3, fontWeight: 800 }}>
        {QUOTE_LABEL}
      </h2>
      <p style={{ margin: '0 0 0.75rem', lineHeight: 1.7 }}>{QUOTE_SOURCE}</p>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)} style={{ margin: '0 0 0.75rem', lineHeight: 1.7 }}>
          {paragraph}
        </p>
      ))}
    </section>
  );
}
