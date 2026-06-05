import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import CallLink from '@/components/CallLink';
import ContactHome from '@/components/ContactHome';
import NamedAuthor from '@/components/NamedAuthor';
import RelatedGuides from '@/components/RelatedGuides';
import TrackedLink from '@/components/TrackedLink';
import { BUSINESS, ORG_ID } from '@/lib/business';
import { SITE_URL } from '@/lib/seo';
import { buildCityProfile, servicePageTypes } from '@/data/localServicePages';
import styles from './LocalServicePage.module.css';

function cityIntro(city, service) {
  const profile = buildCityProfile(city);
  return `${city.city} homeowners planning ${service.intro} need a contractor who understands ${profile.context}. Loudoun Decks designs and builds around ${profile.homeStyle}, with ${profile.permit} handled before crews arrive.`;
}

function buildFaqs(city, service) {
  const profile = buildCityProfile(city);
  return [
    {
      q: `Do you build ${service.label.toLowerCase()} in ${city.city}, VA?`,
      a: `Yes. Loudoun Decks serves ${city.city} and nearby ${city.county} communities with ${service.intro}. We review the property, confirm permit and HOA requirements, and prepare a written scope before construction.`,
    },
    {
      q: `What affects the cost of ${service.label.toLowerCase()} in ${city.city}?`,
      a: `The biggest cost drivers are size, elevation, materials, stairs, railings, drainage, utilities, and review requirements. In ${city.city}, we also plan around ${profile.context}, which can affect design details and approval timing.`,
    },
    {
      q: `Can you handle HOA approval for ${city.city} neighborhoods?`,
      a: `Yes. We prepare drawings, material selections, color details, and project descriptions for HOA review. For ${city.city}, common planning considerations include ${profile.permit}.`,
    },
    {
      q: `How soon can a ${service.serviceName.toLowerCase()} project start in ${city.city}?`,
      a: `Most projects begin after design, material selection, permit review, and HOA approval are complete. Smaller projects can move faster, while screened porches, elevated decks, and outdoor living suites need more planning time.`,
    },
  ];
}

function buildQuickAnswers(city, service) {
  const profile = buildCityProfile(city);
  return [
    {
      q: `How much does ${service.label.toLowerCase()} cost in ${city.city}?`,
      a: `Most ${service.label.toLowerCase()} projects in ${city.city} fall between $${Number(service.lowPrice).toLocaleString()} and $${Number(service.highPrice).toLocaleString()} depending on size, elevation, materials, railings, stairs, porch or patio tie-ins, and review requirements.`,
    },
    {
      q: `Do I need a permit in ${city.city}?`,
      a: `${profile.permit}. We confirm the jurisdiction, prepare drawings, and coordinate inspection-ready details before construction starts.`,
    },
    {
      q: 'What material performs best in Northern Virginia?',
      a: `For low-maintenance projects, Trex, TimberTech, and AZEK usually perform best because they handle moisture, shade, freeze-thaw cycles, and heavy family use better than unfinished wood.`,
    },
    {
      q: 'Who handles HOA approval?',
      a: `Loudoun Decks prepares the drawings, material selections, colors, and scope language needed for HOA or architectural review in ${city.city} communities.`,
    },
  ];
}

const relatedLinkLabels = {
  '/composite-decks': 'Composite deck options',
  '/trex-decks': 'Trex decking options',
  '/timbertech-decks': 'TimberTech and AZEK options',
  '/composite-deck-vs-wood-deck-virginia': 'Composite vs. wood guide',
  '/services/new-decks': 'New deck construction',
  '/services/deck-replacement': 'Deck replacement service',
  '/services/deck-repair-and-structural-maintenance': 'Structural deck repair',
  '/deck-safety-inspection-checklist': 'Deck safety inspection checklist',
  '/deck-resurfacing-vs-replacement': 'Resurface or replace guide',
  '/services/deck-resurfacing': 'Deck resurfacing service',
  '/screened-porch-builder-northern-virginia': 'Screened porch builder',
  '/services/porches': 'Porch services',
  '/services/porches/screened-porch': 'Screened porch service',
  '/three-season-room-northern-virginia': 'Three-season room guide',
  '/services/gazebo-pergola': 'Pergola and gazebo service',
  '/louvered-pergola-northern-virginia': 'Louvered pergola guide',
  '/outdoor-living-northern-virginia': 'Outdoor living contractor',
  '/deck-lighting-ideas-northern-virginia': 'Deck lighting ideas',
  '/services/patios': 'Patio services',
  '/stamped-concrete-patio-northern-virginia': 'Stamped concrete patios',
  '/paver-vs-flagstone-patio-northern-virginia': 'Paver vs. flagstone guide',
  '/deck-vs-patio-which-is-right': 'Deck vs. patio guide',
  '/outdoor-kitchen-builder-northern-virginia': 'Outdoor kitchen builder',
  '/services/fire-pits': 'Fire pit service',
  '/deck-design-ideas-northern-virginia-2026': 'Deck design ideas',
  '/wood-decks': 'Wood deck builder',
  '/deck-maintenance-checklist-virginia': 'Deck maintenance checklist',
  '/services/deck-maintenance': 'Deck maintenance service',
};

function labelForRelatedPath(path) {
  if (relatedLinkLabels[path]) return relatedLinkLabels[path];
  return path
    .replace(/^\/+/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function schemaForPage({ city, service, path }) {
  const url = `${SITE_URL}${path}`;
  const profile = buildCityProfile(city);
  const faqs = buildFaqs(city, service);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: `${service.serviceName} in ${city.city}, VA`,
    serviceType: service.serviceName,
    category: service.category,
    description: `${service.serviceName} for homeowners in ${city.city}, ${city.county}. ${service.valueProp}.`,
    url,
    provider: { '@id': ORG_ID },
    areaServed: {
      '@type': 'City',
      name: `${city.city}, VA`,
      containedInPlace: { '@type': 'AdministrativeArea', name: city.county },
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: service.lowPrice,
      highPrice: service.highPrice,
    },
    isRelatedTo: service.related.map((relatedUrl) => ({
      '@type': 'Service',
      '@id': `${SITE_URL}${relatedUrl}#service`,
    })),
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': `${url}#local-business`,
    name: `${BUSINESS.name} - ${city.city} ${service.label}`,
    branchOf: { '@id': ORG_ID },
    url,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    image: `${SITE_URL}${service.image}`,
    priceRange: BUSINESS.priceRange,
    address: { '@type': 'PostalAddress', ...BUSINESS.address },
    geo: { '@type': 'GeoCoordinates', ...BUSINESS.geo },
    areaServed: [
      { '@type': 'City', name: `${city.city}, VA` },
      { '@type': 'AdministrativeArea', name: city.county },
      ...profile.neighborhoods.map((name) => ({ '@type': 'Place', name })),
    ],
    openingHoursSpecification: BUSINESS.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: BUSINESS.sameAs,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: service.label, item: `${SITE_URL}${service.related[0] || '/services'}` },
      { '@type': 'ListItem', position: 3, name: `${city.city}, VA`, item: url },
    ],
  };

  return { faqs, schemas: [serviceSchema, localBusinessSchema, faqSchema, breadcrumbSchema] };
}

export default function LocalServicePage({ city, serviceKey }) {
  const service = servicePageTypes[serviceKey];
  const profile = buildCityProfile(city);
  const path = `/${service.path}/${city.citySlug}`;
  const { faqs, schemas } = schemaForPage({ city, service, path });
  const quickAnswers = buildQuickAnswers(city, service);
  const nearbyCities = profile.neighborhoods.slice(0, 4);
  const proofAreas = profile.affluentAreas || profile.neighborhoods.slice(0, 3);
  const allServices = Object.values(servicePageTypes).filter((item) => item.path !== service.path);
  const relatedMoneyLinks = [...new Set(service.related)].map((href) => ({
    href,
    label: labelForRelatedPath(href),
  }));
  const pageContext = {
    city: city.city,
    county: city.county,
    service: service.label,
    pageType: 'local_service',
  };

  return (
    <main className={styles.page}>
      {schemas.map((schema) => <JsonLd key={schema['@id'] || schema['@type']} data={schema} />)}

      <section className={styles.hero}>
        <div className={styles.heroText}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href={service.related[0] || '/services'}>{service.label}</Link>
            <span>/</span>
            <span>{city.city}</span>
          </nav>
          <p className={styles.kicker}>{city.county} Local Service Page</p>
          <h1>{service.h1Noun} in {city.city}, VA</h1>
          <p className={styles.lead}>{cityIntro(city, service)}</p>
          <div className={styles.trustStrip} aria-label="Loudoun Decks trust signals">
            <span>TrexPro Platinum</span>
            <span>TimberTech Certified</span>
            <span>VA Class A Licensed</span>
            <span>BBB Accredited</span>
          </div>
          <div className={styles.ctaRow}>
            <TrackedLink href="/get-estimate" ctaLocation={`${service.path}_${city.citySlug}_hero`} ctaLabel="Request Local Estimate" pageContext={pageContext} className={styles.primaryCta}>
              Request Local Estimate
            </TrackedLink>
            <CallLink className={styles.secondaryCta} ctaLocation={`${service.path}_${city.citySlug}_hero_phone`} pageContext={pageContext}>Call {city.city} Team</CallLink>
          </div>
        </div>
        <div className={styles.heroImageWrap}>
          <Image
            src={service.image}
            alt={`${service.label} project inspiration for ${city.city} VA homeowners`}
            fill
            sizes="(max-width: 900px) 100vw, 44vw"
            priority
            className={styles.heroImage}
          />
        </div>
      </section>

      <section className={styles.quickGrid} aria-label={`${service.label} planning facts for ${city.city}`}>
        <div>
          <span>Local Review</span>
          <strong>{profile.permit}</strong>
        </div>
        <div>
          <span>Best Fit</span>
          <strong>{profile.homeStyle}</strong>
        </div>
        <div>
          <span>Materials</span>
          <strong>{service.materialFocus}</strong>
        </div>
        <div>
          <span>Project Fit</span>
          <strong>{profile.projectFit}</strong>
        </div>
      </section>

      <section className={styles.contentBand}>
        <div className={styles.contentGrid}>
          <article>
            <h2>{city.city} {service.titleNoun}: Local Planning That Prevents Expensive Rework</h2>
            <p>
              A strong {service.label.toLowerCase()} project in {city.city} starts before the first footing or base excavation. We look at access, drainage, sun exposure, existing elevations, stair placement, door thresholds, property lines, and how the new space will connect to daily life inside the home.
            </p>
            <p>
              In {city.county}, the small details matter: permit notes, railing height, footing depth, ledger flashing, HOA color rules, stormwater patterns, and inspection expectations. Loudoun Decks builds these items into the design package so the finished project feels polished and passes review cleanly.
            </p>
            <p>
              For {city.city} addresses near {proofAreas.join(', ')}, we plan the scope around the way the property is actually used: sun exposure, privacy, stair traffic, furniture zones, maintenance expectations, and the level of finish the neighborhood supports.
            </p>
            <h3>Common {city.city} Projects</h3>
            <ul>
              {service.projectTypes.map((type) => <li key={type}>{type} for {profile.homeStyle}</li>)}
            </ul>
          </article>

          <aside className={styles.sidePanel}>
            <h2>Connect This Page</h2>
            <p>Explore the related service and city pages most relevant to {city.city} homeowners.</p>
            <div className={styles.linkList}>
              {allServices.slice(0, 7).map((item) => (
                <Link key={item.path} href={`/${item.path}/${city.citySlug}`}>
                  {item.label} in {city.city}
                </Link>
              ))}
              <Link href={`/near-you/${city.countySlug}`}>{city.county} service area</Link>
              <Link href="/contact">Contact Loudoun Decks</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.answerSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>Fast Answers</p>
          <h2>What {city.city} Homeowners Ask Before Booking</h2>
        </div>
        <div className={styles.answerGrid}>
          {quickAnswers.map((item) => (
            <article key={item.q} className={styles.answerCard}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.localSection}>
        <div>
          <p className={styles.kicker}>Neighborhood-Aware Design</p>
          <h2>Built Around {nearbyCities.join(', ')}</h2>
          <p>
            Around {city.city}, outdoor projects often need to satisfy both the homeowner and the community review process. We tailor drawings, material selections, and scope language for the neighborhoods and property types around {nearbyCities.join(', ')} so the project reads as intentional from the street, the rear yard, and the inspection record.
          </p>
          <p>{profile.proofAngle}</p>
        </div>
        <div className={styles.checklist}>
          <h3>What We Optimize</h3>
          <ul>
            <li>HOA-ready material and color selections</li>
            <li>County permit notes and inspection-friendly details</li>
            <li>Drainage, grading, and traffic flow</li>
            <li>Lighting, stairs, privacy, and usable furniture zones</li>
          </ul>
        </div>
      </section>

      <section className={styles.moneyPathSection} aria-label={`${service.label} planning links for ${city.city}`}>
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>Plan The Details</p>
          <h2>Next Pages for a Better {city.city} Scope</h2>
          <p>
            Use these guides to compare materials, repair paths, porch options, and full outdoor living upgrades before requesting a final {city.city} estimate.
          </p>
        </div>
        <div className={styles.moneyPathGrid}>
          {relatedMoneyLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/get-estimate">Request a written estimate</Link>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>Local FAQ</p>
          <h2>{service.label} Questions in {city.city}</h2>
        </div>
        <div className={styles.faqGrid}>
          {faqs.map((faq) => (
            <article key={faq.q} className={styles.faqCard}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.finalCta}>
        <div>
          <h2>Plan Your {city.city} {service.label} Project</h2>
          <p>Send a few details and we will respond with the right next step for your address, scope, and review requirements.</p>
        </div>
        <div className={styles.ctaRow}>
          <TrackedLink href="/get-estimate" ctaLocation={`${service.path}_${city.citySlug}_final`} ctaLabel="Get Free Estimate" pageContext={pageContext} className={styles.primaryCta}>
            Get Free Estimate
          </TrackedLink>
          <TrackedLink href="mailto:office@ldndecks.com" ctaLocation={`${service.path}_${city.citySlug}_email`} ctaLabel="Email Office" pageContext={pageContext} className={styles.secondaryCta}>
            Email Office
          </TrackedLink>
        </div>
      </section>

      <div className={styles.mobileActionBar} aria-label={`${city.city} ${service.label} contact actions`}>
        <TrackedLink href="/get-estimate" ctaLocation={`${service.path}_${city.citySlug}_mobile_sticky`} ctaLabel="Estimate" pageContext={pageContext}>
          Estimate
        </TrackedLink>
        <CallLink ctaLocation={`${service.path}_${city.citySlug}_mobile_phone`} pageContext={pageContext}>
          Call
        </CallLink>
      </div>

      <NamedAuthor context={`${service.label} in ${city.city}, ${city.county}`} lastUpdated="2026-06-01" />
      <RelatedGuides currentPath={path} />
      <ContactHome pageContext={pageContext} />
    </main>
  );
}
