import Link from 'next/link';
import { guideCommercialLinksFor } from '@/lib/guideCommercialLinks';

export default function GuideCommercialLinks({ path }) {
  const guide = guideCommercialLinksFor(path);
  if (!guide) return null;

  return (
    <aside
      data-guide-commercial-links
      style={{
        margin: '2rem 0',
        padding: '1rem 1.1rem',
        border: '1px solid #e4e4e0',
        borderRadius: 8,
        background: '#f8f8f6',
      }}
    >
      <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.15rem' }}>When this becomes a building project</h2>
      <p style={{ margin: '0 0 0.75rem', color: '#333', lineHeight: 1.6 }}>{guide.text}</p>
      <ul style={{ margin: 0, paddingLeft: '1.1rem' }}>
        {guide.links.map((item) => (
          <li key={item.href} style={{ marginBottom: '0.35rem' }}>
            <Link href={item.href} style={{ color: 'var(--color-primary, #d14817)', fontWeight: 700 }}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
