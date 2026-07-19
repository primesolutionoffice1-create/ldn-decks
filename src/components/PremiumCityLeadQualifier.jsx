import Link from 'next/link';

export default function PremiumCityLeadQualifier({
  city,
  county,
  intro,
  projectTypes = [],
  planningSignals = [],
  links = [],
}) {
  return (
    <section
      aria-labelledby={`${city.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-premium-project-fit`}
      style={{ background: '#111827', color: '#fff', padding: '2.75rem 1.5rem' }}
    >
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>
        <div style={{ maxWidth: 760 }}>
          <p style={{ margin: '0 0 0.45rem', color: '#f97316', fontSize: '0.78rem', fontWeight: 900, textTransform: 'uppercase' }}>
            Premium {city} project fit
          </p>
          <h2
            id={`${city.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-premium-project-fit`}
            style={{ margin: 0, fontSize: 'clamp(1.55rem, 2.6vw, 2.25rem)', lineHeight: 1.15, fontWeight: 900 }}
          >
            Built for homeowners comparing serious deck replacement, composite, and outdoor living scopes in {county}
          </h2>
          <p style={{ margin: '1rem 0 0', color: '#d1d5db', lineHeight: 1.7, fontSize: '1.02rem' }}>
            {intro}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginTop: '1.75rem' }}>
          <div style={{ border: '1px solid rgba(255,255,255,0.16)', borderRadius: 8, padding: '1.2rem', background: 'rgba(255,255,255,0.06)' }}>
            <h3 style={{ margin: '0 0 0.75rem', fontSize: '1rem', fontWeight: 850 }}>Best-fit project types</h3>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#e5e7eb', lineHeight: 1.65 }}>
              {projectTypes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.16)', borderRadius: 8, padding: '1.2rem', background: 'rgba(255,255,255,0.06)' }}>
            <h3 style={{ margin: '0 0 0.75rem', fontSize: '1rem', fontWeight: 850 }}>What makes the estimate stronger</h3>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#e5e7eb', lineHeight: 1.65 }}>
              {planningSignals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {links.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem', marginTop: '1.5rem' }}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: link.primary ? '#111827' : '#fff',
                  background: link.primary ? '#f97316' : 'transparent',
                  border: link.primary ? '1px solid #f97316' : '1px solid rgba(255,255,255,0.34)',
                  borderRadius: 6,
                  padding: '0.7rem 1rem',
                  fontWeight: 850,
                  textDecoration: 'none',
                }}
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
