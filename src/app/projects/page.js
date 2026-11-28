import Link from 'next/link';
import { publishedProjectCaseStudies } from '@/data/projectCaseStudies';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/projects',
  title: 'Project Case Studies | Loudoun Decks',
  description: 'Published Loudoun Decks project case studies. A project is listed only when the showcase record already has a title, place, and photo.',
});

export default function ProjectsIndexPage() {
  const projects = publishedProjectCaseStudies();

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '2.5rem 1.25rem 4rem' }}>
      <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', lineHeight: 1.15 }}>Project case studies</h1>
      <p style={{ color: '#444', lineHeight: 1.7, maxWidth: '68ch' }}>
        These pages use facts and photos already published in the showcase. A project stays off this list until that record exists.
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: '1.5rem 0 0' }}>
        {projects.map((project) => (
          <li key={project.slug} style={{ marginBottom: '0.75rem' }}>
            <Link href={`/projects/${project.slug}`} style={{ color: 'var(--color-primary, #d14817)', fontWeight: 800 }}>
              {project.title}
            </Link>
            <span style={{ display: 'block', color: '#555' }}>
              {project.city}, {project.county} · {project.completedLabel}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
