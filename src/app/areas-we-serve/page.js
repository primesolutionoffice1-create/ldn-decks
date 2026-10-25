import React from 'react';
import Link from 'next/link';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import { counties, getCityLink } from '@/data/cityData';
import CallLink from '@/components/CallLink';
import { AREAS_META_DESCRIPTION, COMMUNITIES_LABEL, COVERAGE_SENTENCE, INDEPENDENT_CITY_PLACES } from '@/lib/serviceArea';

const AREAS_TITLE = 'Areas We Serve | Deck Builder Across Northern Virginia';
const INDEPENDENT_CITIES = INDEPENDENT_CITY_PLACES.map((place) => ({
  name: place.name,
  label: place.label,
  countySlug: place.lookupCountySlug,
}));
const INDEPENDENT_NAMES = new Set(INDEPENDENT_CITIES.map((city) => city.name));
const COUNTY_ORDER = [
  'loudoun-county',
  'fairfax-county',
  'prince-william-county',
  'arlington-county',
  'stafford-county',
];
const COUNTY_NOTES = {
  'fairfax-county': 'Alexandria, Falls Church, and the City of Fairfax are independent cities. They are listed in their own group. Some Fairfax County properties use those names as a mailing address. The mailing name or ZIP does not decide which office issues the building permit.',
  'prince-william-county': 'Manassas and Manassas Park are independent cities. They are listed in their own group, not as part of Prince William County. A mailing address does not decide permit authority.',
};

export const metadata = buildMetadata({
  path: '/areas-we-serve',
  title: AREAS_TITLE,
  description: AREAS_META_DESCRIPTION,
  image: '/social/areas-we-serve-social.png',
});

function CityChip({ countySlug, cityName, label = cityName }) {
  const href = getCityLink(countySlug, cityName);
  const cityChipStyle = {
    display: 'inline-block',
    padding: '0.4rem 0.8rem',
    border: '1px solid #e5e5e5',
    borderRadius: 20,
    fontSize: '0.9rem',
    color: 'var(--color-dark)',
  };
  return href ? (
    <Link href={href} style={{ ...cityChipStyle, textDecoration: 'none' }}>
      {label}, VA
    </Link>
  ) : (
    <span style={cityChipStyle}>{label}, VA</span>
  );
}

export default function AreasWeServePage() {

  return (
    <>
      <WebPageSchema dateModified="2026-10-18" url="https://ldndecks.com/areas-we-serve" name={AREAS_TITLE} description={AREAS_META_DESCRIPTION} speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Areas We Serve</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>{COMMUNITIES_LABEL}</p>
          <p style={{ color: '#aaa', marginTop: '1rem', fontSize: '0.9rem' }}>Public Google review profile · Virginia Class A Contractor, Lic. #2705191673 · Written warranty terms</p>
        </div>
      </section>

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p>{COVERAGE_SENTENCE} If your community is listed below, we build there. If it is not listed, <CallLink style={{ color: 'var(--color-primary)', fontWeight: 600 }}>call us</CallLink> or <Link href="/get-estimate" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>request an estimate</Link> and we will confirm whether we can take the project.</p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          {COUNTY_ORDER.map((slug) => {
            const county = counties[slug];
            const cityNames = county.cities.filter((city) => !INDEPENDENT_NAMES.has(city));
            return (
              <div key={slug} style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.5rem' }}>
                  <Link href={`/near-you/${slug}`} style={{ color: 'var(--color-dark)', textDecoration: 'none' }}>{county.name}</Link>
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {cityNames.map((cityName) => (
                    <CityChip key={cityName} countySlug={slug} cityName={cityName} />
                  ))}
                </div>
                {COUNTY_NOTES[slug] ? (
                  <p style={{ color: '#555', lineHeight: 1.6, marginTop: '0.9rem', fontSize: '0.95rem' }}>{COUNTY_NOTES[slug]}</p>
                ) : null}
              </div>
            );
          })}

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.5rem' }}>Independent cities</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.9rem' }}>
            {INDEPENDENT_CITIES.map((city) => (
              <CityChip key={city.name} countySlug={city.countySlug} cityName={city.name} label={city.label} />
            ))}
          </div>
          <p style={{ color: '#555', lineHeight: 1.6, marginBottom: '3rem', fontSize: '0.95rem' }}>
            Alexandria, Falls Church, the City of Fairfax, Manassas, and Manassas Park are Virginia independent cities. They are not administratively part of Fairfax County or Prince William County. Some nearby properties still use those names on a mailing address. Confirm the parcel before permit paperwork.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2rem' }}>Priority City Pages</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem' }}>
            {[
              ['/deck-builders-loudoun', 'Deck Builders Loudoun County'],
              ['/deck-builder-ashburn-va', 'Deck Builder Ashburn, VA'],
              ['/deck-builder-leesburg-va', 'Deck Builder Leesburg, VA'],
              ['/deck-builder-sterling-va', 'Deck Builder Sterling, VA'],
              ['/deck-builder-purcellville-va', 'Deck Builder Purcellville, VA'],
              ['/deck-builder-reston-va', 'Deck Builder Reston, VA'],
              ['/deck-builder-herndon-va', 'Deck Builder Herndon, VA'],
              ['/deck-builder-mclean-va', 'Deck Builder McLean, VA'],
              ['/deck-builder-vienna-va', 'Deck Builder Vienna, VA'],
              ['/deck-builder-tysons-va', 'Deck Builder Tysons, VA'],
              ['/deck-builder-fairfax-va', 'Deck Builder Fairfax, VA'],
              ['/deck-builder-centreville-va', 'Deck Builder Centreville, VA'],
              ['/deck-builder-chantilly-va', 'Deck Builder Chantilly, VA'],
              ['/deck-builder-burke-va', 'Deck Builder Burke, VA'],
              ['/deck-builder-arlington-va', 'Deck Builder Arlington, VA'],
              ['/deck-builder-alexandria-va', 'Deck Builder Alexandria, VA'],
              ['/deck-builder-manassas-va', 'Deck Builder Manassas, VA'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ display: 'inline-block', padding: '0.4rem 0.8rem', border: '2px solid var(--color-primary)', borderRadius: 20, fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}>{text}</Link>
            ))}
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>County Planning Hubs</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '0.75rem', marginBottom: '3rem' }}>
            {[
              ['/near-you/loudoun-county', 'Loudoun County Deck Builder Hub'],
              ['/near-you/fairfax-county', 'Fairfax County Deck Builder Hub'],
              ['/near-you/prince-william-county', 'Prince William County Deck Builder Hub'],
              ['/near-you/arlington-county', 'Arlington County Deck Builder Hub'],
              ['/near-you/stafford-county', 'Stafford County Deck Builder Hub'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ display: 'block', padding: '0.85rem', background: '#fff', border: '1px solid #e5e5e5', borderRadius: 6, fontSize: '0.9rem', color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 700 }}>{text} →</Link>
            ))}
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Our Services Across All Areas</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
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
            <p style={{ lineHeight: 1.7 }}>If your community is not listed, call <CallLink style={{ color: 'var(--color-primary)', fontWeight: 600 }}>(571) 655-7207</CallLink> or <Link href="/get-estimate" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>request a free estimate</Link>. We will confirm whether the property is in the published service area before scheduling.</p>
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Plan Before We Visit</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
            {[
              ['/deck-cost-calculator', 'Deck Cost Calculator'],
              ['/deck-payment-estimator', 'Deck Payment Estimator'],
              ['/reviews', 'Customer Reviews'],
              ['/bbb-accredited-deck-builder-virginia', 'BBB Accredited Deck Builder'],
              ['/before-and-after', 'Before & After Projects'],
              ['/get-estimate', 'Request a Written Estimate'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ display: 'block', padding: '0.85rem', background: '#fff', border: '1px solid #e5e5e5', borderRadius: 6, fontSize: '0.9rem', color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 700 }}>{text} →</Link>
            ))}
          </div>

        </div>
      </article>
      <SimpleCTA title="Find Us in Your Neighborhood" buttonText="Get Free Estimate" link="/get-estimate" />
      <ContactHome />
    </>
  );
}
