import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { showcaseProjects } from '@/lib/showcaseData';
import { counties, slugify } from '@/data/cityData';

/**
 * CountyRecentProjects — data-driven Recent Projects section for county hub pages.
 *
 * Reads showcaseProjects (lib/showcaseData) + filters to projects whose
 * location city falls within the requested county per cityData. Renders
 * nothing if no matching projects exist, so Arlington and Stafford county
 * hubs degrade gracefully until showcase entries are added for those areas.
 *
 * Equity flow: county hub → showcase project → city page + service page.
 * The closed loop signals geographic + portfolio authority to Google.
 *
 * @param {string} countySlug — one of: loudoun-county, fairfax-county,
 *   prince-william-county, arlington-county, stafford-county
 */
export default function CountyRecentProjects({ countySlug, limit = 6 }) {
  const county = counties[countySlug];
  if (!county) return null;

  // Build a quick-lookup set of city slugs for this county.
  const countyCitySlugs = new Set(county.cities.map(c => slugify(c)));

  // Filter showcase projects to those whose location city matches a county city.
  const matching = showcaseProjects
    .filter(project => {
      const projectCity = project.location.split(',')[0].trim();
      return countyCitySlugs.has(slugify(projectCity));
    })
    .slice(0, limit);

  if (matching.length === 0) return null;

  return (
    <section style={{ padding: '3rem 1.5rem', background: '#fafafa' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          Recent Projects in {county.name}
        </h2>
        <p style={{ color: '#666', marginBottom: '2rem', lineHeight: 1.6 }}>
          Selected completed projects from our {county.name} portfolio. Each links to the full project page with photos and specifications.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {matching.map((project) => {
            const city = project.location.split(',')[0].trim();
            const date = project.location.split(',')[1]?.trim() || '';
            return (
              <Link
                key={project.slug}
                href={`/showcase/${project.slug}`}
                style={{ display: 'block', background: '#fff', borderRadius: 8, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', textDecoration: 'none', color: 'inherit' }}
              >
                <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                  <Image
                    src={project.image}
                    alt={`${project.title} in ${city}, Virginia`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                </div>
                <div style={{ padding: '1rem 1.25rem' }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {city}{date ? ` · ${date}` : ''}
                  </p>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, lineHeight: 1.4, marginBottom: '0.5rem' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                    View project →
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <Link href="/showcase" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.95rem' }}>
            See our full project showcase →
          </Link>
        </div>
      </div>
    </section>
  );
}
