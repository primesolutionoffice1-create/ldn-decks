import Image from 'next/image';
import Link from 'next/link';
import { getVerifiedProofSummary } from '@/lib/verifiedProof';

const styles = {
  section: {
    background: '#f7f4ef',
    border: '1px solid #e4d8cc',
    borderRadius: 8,
    padding: '1.5rem',
    marginBottom: '3rem',
  },
  eyebrow: {
    color: 'var(--color-primary)',
    fontSize: '0.78rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    marginBottom: '0.5rem',
    textTransform: 'uppercase',
  },
  title: {
    color: '#241915',
    fontSize: '1.3rem',
    fontWeight: 700,
    marginBottom: '0.75rem',
  },
  text: {
    color: '#594d45',
    fontSize: '0.95rem',
    lineHeight: 1.7,
    marginBottom: '1rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1rem',
    marginTop: '1rem',
  },
  card: {
    background: '#fff',
    border: '1px solid #eaded2',
    borderRadius: 8,
    overflow: 'hidden',
  },
  imageWrap: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 2,
    height: 150,
  },
  imageCell: {
    position: 'relative',
    minHeight: 150,
  },
  cardBody: {
    padding: '1rem',
  },
  muted: {
    color: '#776b62',
    fontSize: '0.85rem',
    lineHeight: 1.6,
  },
  link: {
    color: 'var(--color-primary)',
    fontWeight: 700,
  },
};

export default function VerifiedProjectProofSection({ compact = false }) {
  const { projects, reviewSources, skippedCount } = getVerifiedProofSummary();

  if (!projects.length) {
    return (
      <section style={styles.section} aria-label="Verified project evidence status">
        <p style={styles.eyebrow}>Verified project evidence</p>
        <h2 style={styles.title}>Formal case studies are added after project records are confirmed.</h2>
        <p style={styles.text}>
          We publish formal case studies only after scope, date, material selection, photo linkage, and permit or HOA status are confirmed in the evidence ledger. Current photo galleries may show transformations with verification notes; they are not treated as formal case studies until that review is complete.
        </p>
        <p style={{ ...styles.muted, margin: 0 }}>
          Current verified project case studies: <strong>0</strong>. Public profile sources available for citation: <strong>{reviewSources.length}</strong>. Records awaiting owner evidence: <strong>{skippedCount}</strong>.
        </p>
      </section>
    );
  }

  return (
    <section style={styles.section} aria-label="Verified project case studies">
      <p style={styles.eyebrow}>Verified project evidence</p>
      <h2 style={styles.title}>{compact ? 'Verified case studies' : 'Verified Northern Virginia case studies'}</h2>
      <p style={styles.text}>
        These case studies are generated only from records marked verified in the evidence ledger.
      </p>
      <div style={styles.grid}>
        {projects.map((project) => (
          <article key={project.project_id} style={styles.card}>
            <div style={styles.imageWrap}>
              <div style={styles.imageCell}>
                <Image src={project.before_photo_path} alt={project.safe_alt_text_before} fill sizes="160px" style={{ objectFit: 'cover' }} />
              </div>
              <div style={styles.imageCell}>
                <Image src={project.after_photo_path} alt={project.safe_alt_text_after} fill sizes="160px" style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div style={styles.cardBody}>
              <h3 style={{ color: '#241915', fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem' }}>{project.suggested_heading}</h3>
              <p style={styles.muted}>{project.suggested_summary}</p>
              <p style={{ ...styles.muted, marginTop: '0.6rem' }}>Permit/HOA: {project.permit_or_hoa_status}</p>
            </div>
          </article>
        ))}
      </div>
      <p style={{ ...styles.muted, marginTop: '1rem' }}>
        Review the full gallery on <Link href="/before-and-after" style={styles.link}>before and after projects</Link>.
      </p>
    </section>
  );
}
