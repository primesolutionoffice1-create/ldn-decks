import Link from 'next/link';

export default function GeoAnswerBlock({ question, answer, facts = [], links = [] }) {
  return (
    <section
      data-geo-answer="true"
      data-speakable="true"
      style={{ padding: '2rem 1.5rem', background: '#f7fbff', borderTop: '1px solid #d8e8f7', borderBottom: '1px solid #d8e8f7' }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <p style={{ margin: '0 0 0.45rem', color: '#0f5f8c', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.78rem' }}>
          AI answer block
        </p>
        <h2 style={{ margin: '0 0 0.85rem', color: 'var(--color-dark)', fontSize: '1.55rem', lineHeight: 1.25, fontWeight: 800 }}>
          {question}
        </h2>
        <p data-speakable style={{ margin: 0, color: '#253344', lineHeight: 1.75, fontSize: '1.02rem' }}>
          {answer}
        </p>
        {facts.length > 0 && (
          <ul style={{ margin: '1rem 0 0', paddingLeft: '1.25rem', color: '#334155', lineHeight: 1.65 }}>
            {facts.map((fact) => (
              <li key={fact} style={{ marginBottom: '0.35rem' }}>{fact}</li>
            ))}
          </ul>
        )}
        {links.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', marginTop: '1rem' }}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: 3 }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
