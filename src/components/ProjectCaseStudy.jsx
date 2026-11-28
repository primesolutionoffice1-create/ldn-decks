import Image from 'next/image';
import Link from 'next/link';
import CallLink from '@/components/CallLink';
import ContactHome from '@/components/ContactHome';
import NamedAuthor from '@/components/NamedAuthor';
import { BUSINESS_PHONE_DISPLAY } from '@/lib/business';
import styles from './ProjectCaseStudy.module.css';

export default function ProjectCaseStudy({ project }) {
  const quote = project.quote && project.quote.text ? project.quote : null;
  const before = project.photos.filter((photo) => photo.role === 'before');
  const after = project.photos.filter((photo) => photo.role === 'after');
  const gallery = project.photos.filter((photo) => photo.role !== 'before' && photo.role !== 'after');
  const shown = before.length || after.length ? [...before, ...after] : gallery;

  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.kicker}>Project case study</p>
        <h1>{project.title}</h1>
        <p className={styles.location}>{project.city}, {project.county}, {project.state}</p>
        <p className={styles.note}>
          Published from the existing showcase record for this project. This page does not add measurements, a homeowner name, or a quote that the record does not contain.
        </p>
      </header>

      <dl className={styles.facts}>
        <div>
          <dt>City</dt>
          <dd>{project.city}</dd>
        </div>
        <div>
          <dt>County</dt>
          <dd>{project.county}</dd>
        </div>
        <div>
          <dt>Materials</dt>
          <dd>{project.materials.join(', ')}</dd>
        </div>
        <div>
          <dt>Scope</dt>
          <dd>{project.scope}</dd>
        </div>
        <div>
          <dt>Date on the showcase record</dt>
          <dd>{project.completedLabel}</dd>
        </div>
      </dl>

      <section className={styles.gallery} aria-label="Project photos">
        <h2>Photos</h2>
        {before.length === 0 ? <p>No before photo is in the published record.</p> : null}
        <div className={styles.grid}>
          {shown.map((photo) => (
            <figure key={photo.src} className={styles.figure}>
              <Image src={photo.src} alt={photo.alt} width={1200} height={800} className={styles.image} />
              <figcaption>{photo.role === 'gallery' ? 'Showcase photo' : photo.role}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {quote ? (
        <blockquote className={styles.quote}>
          <p>{quote.text}</p>
          {quote.attribution ? <footer>{quote.attribution}</footer> : null}
        </blockquote>
      ) : null}

      <NamedAuthor context={`${project.city}, ${project.county}`} lastUpdated="2026-11-28" />

      <section className={styles.cta}>
        <h2>Plan a similar project</h2>
        <p>Call {BUSINESS_PHONE_DISPLAY} or send the property details for a written estimate.</p>
        <div className={styles.actions}>
          <CallLink className={styles.call} ctaLocation="project_case_study" pageContext={{ pageType: 'project_case_study', city: project.city, county: project.county }} />
          <Link href="/get-estimate" className={styles.estimate}>Request a written estimate</Link>
          <Link href={`/showcase/${project.sourceShowcaseSlug}`} className={styles.secondary}>Showcase record</Link>
        </div>
      </section>
      <ContactHome />
    </article>
  );
}
