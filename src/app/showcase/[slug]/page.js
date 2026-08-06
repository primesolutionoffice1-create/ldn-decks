import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { showcaseProjects } from '@/lib/showcaseData';
import { canonicalCities, slugify } from '@/data/cityData';
import ContactHome from '@/components/ContactHome';
import JsonLd from '@/components/JsonLd';
import styles from './ProjectPage.module.css';

// Quick win #5 (2026-05-26 audit): every /showcase/* page now body-links to
// (a) its city deck-builder page when one exists and (b) the closest matching
// service page. Pushes equity from project galleries into commercial hubs and
// improves internal-link distribution.
function getRelatedLinks(project) {
  const cityName = project.location.split(',')[0].trim();
  const citySlug = slugify(cityName);
  const cityHref = canonicalCities.has(citySlug) ? `/deck-builder-${citySlug}-va` : null;

  const t = project.title.toLowerCase();
  let serviceHref = '/services/new-decks';
  let serviceLabel = 'New deck installation';
  if (t.includes('fence')) {
    serviceHref = '/services/fence';
    serviceLabel = 'Custom fence installation';
  } else if (t.includes('resurfacing')) {
    serviceHref = '/services/deck-resurfacing';
    serviceLabel = 'Deck resurfacing';
  } else if (t.includes('multi') || t.includes('multi-level') || t.includes('balcony')) {
    serviceHref = '/multi-level-deck-builder-northern-virginia';
    serviceLabel = 'Multi-level deck construction';
  } else if (t.includes('composite')) {
    serviceHref = '/composite-decks';
    serviceLabel = 'Composite deck building';
  } else if (t.includes('rooftop')) {
    serviceHref = '/services/new-decks';
    serviceLabel = 'Rooftop deck construction';
  }

  return { cityName, cityHref, serviceHref, serviceLabel };
}

function getProjectCategory(project) {
  const title = project.title.toLowerCase();
  if (title.includes('fence')) return 'custom fence and gate project';
  if (title.includes('resurfacing')) return 'deck resurfacing project';
  if (title.includes('balcony')) return 'balcony or multi-level deck project';
  if (title.includes('composite')) return 'composite deck project';
  if (title.includes('rooftop')) return 'rooftop deck project';
  return 'deck construction project';
}

function getProjectPlanningNotes(project, related) {
  const category = getProjectCategory(project);
  const isFence = category.includes('fence');
  const isComposite = category.includes('composite');
  const isResurfacing = category.includes('resurfacing');
  const isBalcony = category.includes('balcony') || category.includes('multi-level') || project.title.toLowerCase().includes('multi');

  const definition = isFence
    ? `This ${category} in ${related.cityName}, Virginia shows how exterior privacy, gate placement, property access, and finish details should be planned before installation begins.`
    : `This ${category} in ${related.cityName}, Virginia shows the type of structural planning, material selection, access review, and finishing decisions that matter before a Northern Virginia homeowner approves a deck scope.`;

  const facts = [
    `Market: ${related.cityName}, Virginia`,
    `Project category: ${category}`,
    `Public proof status: gallery record only until project evidence, owner permission, and final scope details are confirmed`,
    isFence
      ? 'Planning focus: property lines, gate swing, post layout, privacy, grade changes, and finish consistency'
      : 'Planning focus: framing condition, footings, ledger attachment, stairs, railings, material exposure, and permit path',
    isComposite
      ? 'Material note: composite deck planning should compare board tier, color, heat exposure, hidden fasteners, fascia, and railing package'
      : isResurfacing
        ? 'Resurfacing note: resurfacing is appropriate only when the existing frame, ledger, footings, stairs, and rails are safe for reuse'
        : isBalcony
          ? 'Structural note: elevated or balcony projects need careful load-path review, guardrail planning, and inspection-ready details'
          : 'Material note: final deck material should be selected after sun exposure, maintenance expectations, budget, and railing style are reviewed',
  ];

  const steps = isFence
    ? [
        'Confirm property lines, utilities, HOA rules, gate locations, and access needs.',
        'Select post spacing, height, privacy level, hardware, and finish details.',
        'Prepare a written scope that separates required installation details from optional upgrades.',
        'Schedule installation after materials, access, and homeowner approvals are clear.',
      ]
    : [
        'Inspect the existing site, grade, access path, and any current deck framing before pricing.',
        'Confirm permit, HOA, setback, stair, railing, and inspection requirements for the jurisdiction.',
        'Choose the right material package, including boards, fascia, railings, lighting, and fasteners.',
        'Prepare a written scope that separates structural requirements from optional finish upgrades.',
      ];

  const faqs = [
    {
      q: `Is this ${related.cityName} project a verified case study?`,
      a: 'This page is a public gallery record. It should not be used as a formal case study until project scope, photos, date, location, and owner permission are verified in the evidence ledger.',
    },
    {
      q: `Can Loudoun Decks build a similar project in ${related.cityName}?`,
      a: `Yes. Homeowners can use this gallery page as a starting point, then request a written estimate so the team can review site access, scope, materials, budget, timeline, and local requirements for ${related.cityName}.`,
    },
    {
      q: 'What information makes the estimate more accurate?',
      a: 'Send photos of the current outdoor area, approximate dimensions, desired materials, railing preferences, stair or access concerns, HOA documents if available, and whether the project is repair, resurfacing, replacement, or new construction.',
    },
  ];

  return { category, definition, facts, steps, faqs };
}

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
    description: `View our ${project.title.toLowerCase()} project in ${project.location}. Quality composite & wood construction by Loudoun Decks. Free estimates.`,
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
  const related = getRelatedLinks(project);
  const planning = getProjectPlanningNotes(project, related);

  // Project page schema describes the completed work as a Service example and
  // references the single canonical org (@id #organization) via `provider`.
  // It must not redefine #organization (doing so minted a per-project address).
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Deck building",
    "name": project.title,
    "description": `${project.title} project profile for ${city}, VA. Verify project evidence, photos, and completion details before using this page as formal proof.`,
    "image": project.image,
    "provider": { "@id": "https://ldndecks.com/#organization" },
    "areaServed": { "@type": "Place", "name": `${city}, VA` }
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": planning.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <main className={styles.projectMain}>
      <JsonLd data={projectSchema} />
      <JsonLd data={faqSchema} />
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
                <Link href="/get-estimate" className={styles.ctaButton}>Interested in a similar project?</Link>
              </div>
            </div>
          </div>

          <div className={styles.description}>
            <h2>About this Project</h2>
            <p>
              {planning.definition}
            </p>
            <p>
              Loudoun Decks uses project gallery pages to help homeowners understand scope, planning questions, and local context before requesting an estimate. Formal case-study claims, customer quotes, ratings, and detailed project outcomes are added only after owner permission and evidence are confirmed.
            </p>

            <h2>Project planning facts</h2>
            <ul style={{ paddingLeft: '1.25rem', lineHeight: 1.75, color: '#444', marginBottom: '2rem' }}>
              {planning.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>

            <h2>How a similar project is planned</h2>
            <ol style={{ paddingLeft: '1.25rem', lineHeight: 1.75, color: '#444', marginBottom: '2rem' }}>
              {planning.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>

            <h2>Estimate preparation for {related.cityName} homeowners</h2>
            <p>
              The strongest estimate starts with the address, photos, rough dimensions, preferred material direction, budget range, timeline, and any HOA or permit notes. For elevated decks, resurfacing, balcony work, or structural replacement, the frame and load path should be reviewed before finish materials are selected.
            </p>
            <p>
              Homeowners comparing contractors should verify public profiles, ask how permit and inspection responsibilities are handled, and confirm whether the proposal separates required structural work from optional finish upgrades.
            </p>

            <h2>Project FAQ</h2>
            {planning.faqs.map((faq) => (
              <details key={faq.q} style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: '1rem', marginBottom: '0.75rem', background: '#fff' }}>
                <summary style={{ cursor: 'pointer', fontWeight: 700 }}>{faq.q}</summary>
                <p style={{ marginTop: '0.75rem', marginBottom: 0 }}>{faq.a}</p>
              </details>
            ))}

            <h3 style={{ marginTop: '2rem', marginBottom: '0.75rem' }}>Related on Loudoun Decks</h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.8 }}>
              {related.cityHref ? (
                <li>
                  → Browse our <Link href={related.cityHref} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck builder services in {related.cityName}, VA</Link>
                </li>
              ) : null}
              <li>
                → Learn more about our <Link href={related.serviceHref} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{related.serviceLabel}</Link> service
              </li>
              <li>
                → See more project galleries in our <Link href="/showcase" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>full showcase gallery</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <ContactHome />
    </main>
  );
}
