import Link from 'next/link';

export default function PlanningUpdate({ market, title = '2026 Planning Update', notes = [], links = [] }) {
  if (!notes.length) return null;

  return (
    <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
      <div style={{ border: '1px solid #ead8cc', borderLeft: '4px solid var(--color-primary)', borderRadius: 8, background: '#fffaf6', padding: '1.25rem 1.5rem' }}>
        <p style={{ margin: '0 0 0.35rem', color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          {title}
        </p>
        <h2 style={{ margin: '0 0 0.85rem', fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-dark)' }}>
          What changed for {market}
        </h2>
        <ul style={{ margin: '0 0 0.85rem', paddingLeft: '1.2rem', lineHeight: 1.7, color: '#444' }}>
          {notes.map((note) => (
            <li key={note} style={{ marginBottom: '0.35rem' }}>{note}</li>
          ))}
        </ul>
        {links.length > 0 && (
          <p style={{ margin: 0, lineHeight: 1.7 }}>
            {links.map((link, index) => (
              <span key={link.href}>
                {index > 0 ? ' · ' : ''}
                <Link href={link.href} style={{ color: 'var(--color-primary)', fontWeight: 700 }}>{link.label}</Link>
              </span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}
