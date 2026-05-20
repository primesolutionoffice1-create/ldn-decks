import React from 'react';
import Link from 'next/link';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';
import { getAllCityPaths } from '@/data/cityData';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/areas-we-serve',
  title: 'Areas We Serve | Deck Builder Across Northern Virginia',
  description: 'Loudoun Decks serves 70+ cities across Loudoun, Fairfax, Prince William, Arlington & Stafford counties. Find your city and get a free deck estimate.',
});

export default function AreasWeServePage() {
  const cities = getAllCityPaths();

  const counties = {
    'loudoun-county': { name: 'Loudoun County', hub: '/near-you/loudoun-county', cities: [] },
    'fairfax-county': { name: 'Fairfax County', hub: '/near-you/fairfax-county', cities: [] },
    'prince-william-county': { name: 'Prince William County', hub: '/near-you/prince-william-county', cities: [] },
    'arlington-county': { name: 'Arlington County', hub: '/near-you/arlington-county', cities: [] },
    'stafford-county': { name: 'Stafford County', hub: '/near-you/stafford-county', cities: [] },
  };

  cities.forEach(({ county, city }) => {
    if (counties[county]) {
      counties[county].cities.push(city);
    }
  });

  return (
    <>
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Areas We Serve</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Custom deck building across 70+ cities in Northern Virginia</p>
          <p style={{ color: '#aaa', marginTop: '1rem', fontSize: '0.9rem' }}>★★★★★ 5.0 on Google · 49 reviews · Licensed &amp; Insured · 2-Year Warranty</p>
        </div>
      </section>

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p>We serve <strong>Loudoun County, Fairfax County, Prince William County, Arlington County, and Stafford County</strong> in Northern Virginia. If your city is listed below, we build there. If it&apos;s not listed, <CallLink style={{ color: 'var(--color-primary)', fontWeight: 600 }}>call us</CallLink> we likely serve your area too.</p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          {Object.entries(counties).map(([slug, county]) => (
            <div key={slug} style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.5rem' }}>
                <Link href={county.hub} style={{ color: 'var(--color-dark)', textDecoration: 'none' }}>{county.name}</Link>
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {county.cities.map((city) => {
                  const cityName = city.charAt(0).toUpperCase() + city.slice(1).replace(/-/g, ' ');
                  return (
                    <Link
                      key={city}
                      href={`/near-you/${slug}/${city}`}
                      style={{
                        display: 'inline-block',
                        padding: '0.4rem 0.8rem',
                        border: '1px solid #e5e5e5',
                        borderRadius: 20,
                        fontSize: '0.9rem',
                        color: 'var(--color-dark)',
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                      }}
                    >
                      {cityName}, VA
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2rem' }}>Standalone City Pages</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem' }}>
            {[
              ['/deck-builders-loudoun', 'Deck Builders Loudoun County'],
              ['/deck-builder-ashburn-va', 'Deck Builder Ashburn, VA'],
              ['/deck-builder-leesburg-va', 'Deck Builder Leesburg, VA'],
              ['/deck-builder-reston-va', 'Deck Builder Reston, VA'],
              ['/deck-builder-mclean-va', 'Deck Builder McLean, VA'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ display: 'inline-block', padding: '0.4rem 0.8rem', border: '2px solid var(--color-primary)', borderRadius: 20, fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}>{text}</Link>
            ))}
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Our Services Across All Areas</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
            {[
              ['/services/new-decks', 'Custom Deck Construction'],
              ['/services/deck-resurfacing', 'Deck Resurfacing'],
              ['/services/porches', 'Screened Porches'],
              ['/services/gazebo-pergola', 'Pergolas & Gazebos'],
              ['/services/patios', 'Patio Building'],
              ['/services/fence', 'Fencing'],
              ['/services/fire-pits', 'Custom Fire Pits'],
              ['/services/deck-washing', 'Deck Washing'],
              ['/outdoor-kitchen-builder-northern-virginia', 'Outdoor Kitchens'],
              ['/deck-staining-northern-virginia', 'Deck Staining'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ display: 'block', padding: '0.75rem', background: '#f9f9f9', borderRadius: 6, fontSize: '0.9rem', color: 'var(--color-dark)', textDecoration: 'none', fontWeight: 500 }}>{text} →</Link>
            ))}
          </div>

          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>Don&apos;t See Your City?</h2>
            <p style={{ lineHeight: 1.7 }}>We serve most of Northern Virginia. If your city isn&apos;t listed, call <CallLink style={{ color: 'var(--color-primary)', fontWeight: 600 }}>(571) 655-7207</CallLink> or <Link href="/contact" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>request a free estimate</Link> we&apos;ll confirm availability for your area within 24 hours.</p>
          </div>

        </div>
      </article>
      <SimpleCTA title="Find Us in Your Neighborhood" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </>
  );
}
