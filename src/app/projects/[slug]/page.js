import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import ProjectCaseStudy from '@/components/ProjectCaseStudy';
import { getProjectCaseStudy, publishedProjectCaseStudies } from '@/data/projectCaseStudies';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return publishedProjectCaseStudies().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectCaseStudy(slug);
  if (!project) return { title: 'Project not found', robots: { index: false, follow: false } };

  return buildMetadata({
    path: `/projects/${project.slug}`,
    title: `${project.title} in ${project.city} | Loudoun Decks`,
    description: `${project.scope} in ${project.city}, ${project.county}, ${project.state}. ${project.materials.join(', ')}. ${project.completedLabel}. Photos from the published showcase record.`,
    image: project.photos[0]?.src,
  });
}

export default async function ProjectCaseStudyPage({ params }) {
  const { slug } = await params;
  const project = getProjectCaseStudy(slug);
  if (!project) notFound();

  const url = `https://ldndecks.com/projects/${project.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: `${project.title} in ${project.city}`,
    description: `${project.scope} in ${project.city}, ${project.county}. Materials: ${project.materials.join(', ')}. Date on the showcase record: ${project.completedLabel}.`,
    primaryImageOfPage: project.photos[0]?.src ? `https://ldndecks.com${project.photos[0].src}` : undefined,
    about: {
      '@type': 'Service',
      serviceType: project.scope,
      provider: { '@id': 'https://ldndecks.com/#organization' },
      areaServed: { '@type': 'AdministrativeArea', name: `${project.county}, ${project.state}` },
    },
    isPartOf: { '@id': 'https://ldndecks.com/#website' },
  };

  return (
    <main>
      <JsonLd data={schema} />
      <ProjectCaseStudy project={project} />
    </main>
  );
}
