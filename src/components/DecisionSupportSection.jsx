import Link from 'next/link';

export default function DecisionSupportSection({
  eyebrow,
  title,
  intro,
  columns,
  links,
}) {
  return (
    <section style={{ padding: '36px 20px', maxWidth: 1040, margin: '0 auto', lineHeight: 1.65 }}>
      <p style={{ color: 'var(--color-primary)', fontWeight: 800, letterSpacing: 0, margin: '0 0 8px', textTransform: 'uppercase', fontSize: '13px' }}>
        {eyebrow}
      </p>
      <h2 style={{ fontSize: '30px', margin: '0 0 12px', fontWeight: 850, color: '#1f2933' }}>{title}</h2>
      <p style={{ fontSize: '17px', color: '#4b5563', margin: '0 0 22px', maxWidth: 860 }}>{intro}</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', alignItems: 'stretch' }}>
        {columns.map((column) => (
          <article
            key={column.title}
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              background: '#fff',
              padding: '20px',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
            }}
          >
            <h3 style={{ fontSize: '19px', margin: '0 0 10px', color: '#111827', fontWeight: 800 }}>{column.title}</h3>
            <ul style={{ margin: 0, paddingLeft: '18px', color: '#4b5563' }}>
              {column.items.map((item) => (
                <li key={item} style={{ marginBottom: '8px' }}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '18px' }}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              color: 'var(--color-primary)',
              fontWeight: 750,
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
