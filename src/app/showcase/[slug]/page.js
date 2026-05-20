import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { showcaseProjects } from '@/lib/showcaseData';
import ContactHome from '@/components/ContactHome';
import JsonLd from '@/components/JsonLd';
import styles from './ProjectPage.module.css';

export async function generateStaticParams() {
  return showcaseProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = showcaseProjects.find((p) => p.slug === slug);

  if (!project) return { title: "Project Not Found", robots: { index: false, follow: false } };

  const { buildMetadata } = await import('@/lib/seo');
  const isNoIndex = slug === 'rooftop-deck-washington-dc';

  return buildMetadata({
    path: `/showcase/${project.slug}`,
    title: `${project.title} in ${project.location} | LDN Decks`,
    description: `View our 5-star ${project.title.toLowerCase()} project in ${project.location}. Quality composite & wood construction by Loudoun Decks. Free estimates.`,
    image: project.image,
    robots: isNoIndex ? { index: false, follow: true } : undefined
  });
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = showcaseProjects.find((p) => p.slug === slug);

  if (!project) notFound();

  const city = project.location.split(',')[0];
  const date = project.location.split(',')[1]?.trim();

  // Project page schema describes the completed work as a Service example and
  // references the single canonical org (@id #organization) via `provider`.
  // It must not redefine #organization (doing so minted a per-project address).
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Deck building",
    "name": project.title,
    "description": `${project.title} project completed in ${city}, VA. Professional deck and fence construction by Loudoun Decks.`,
    "image": project.image,
    "provider": { "@id": "https://ldndecks.com/#organization" },
    "areaServed": { "@type": "Place", "name": `${city}, VA` }
  };

  return (
    <main className={styles.projectMain}>
      <JsonLd data={projectSchema} />
      <section className={styles.hero}>
        <div className={styles.container}>
          <Link href="/showcase" className={styles.backLink}>← Back to Showcase</Link>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.location}>{project.location}</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.imageGrid}>
            <div className={styles.mainImage}>
              <Image 
                src={project.image} 
                alt={project.title} 
                width={1200} 
                height={800} 
                className={styles.img}
              />
            </div>
            {/* Placeholder for more project images if available in the future */}
            <div className={styles.sidebar}>
              <div className={styles.detailsBox}>
                <h3>Project Details</h3>
                <ul>
                  <li><strong>Location:</strong> {project.location.split(',')[0]}</li>
                  <li><strong>Date:</strong> {project.location.split(',')[1]}</li>
                  <li><strong>Status:</strong> Completed</li>
                  <li><strong>Category:</strong> {project.title.toLowerCase().includes('deck') ? 'Decking' : 'Fencing'}</li>
                </ul>
                <Link href="/contact" className={styles.ctaButton}>Interested in a similar project?</Link>
              </div>
            </div>
          </div>

          <div className={styles.description}>
            <h2>About this Project</h2>
            <p>
              This {project.title.toLowerCase()} project in {project.location.split(',')[0]} showcases our commitment to quality and attention to detail. 
              Loudoun Decks worked closely with the homeowner to design and build a space that perfectly fits their vision and property.
            </p>
            <p>
              We used premium materials to ensure durability and style, resulting in a beautiful outdoor extension of the home that will last for years to come.
            </p>
          </div>
        </div>
      </section>

      <ContactHome />
    </main>
  );
}
