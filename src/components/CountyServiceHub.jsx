import Link from 'next/link';
import { counties, getCityLink } from '@/data/cityData';
import { BUSINESS } from '@/lib/business';
import { PARTNER_SENTENCE } from '@/lib/partnerBrands';
import CallLink from '@/components/CallLink';
import ContactHome from '@/components/ContactHome';
import GeoAnswerBlock from '@/components/GeoAnswerBlock';
import QuotedPricesBlock from '@/components/QuotedPricesBlock';
import ServiceSchema from '@/components/ServiceSchema';
import ServicesFAQ from '@/components/ServicesFAQ';
import WebPageSchema from '@/components/WebPageSchema';

const EXPERIENCE =
  'Loudoun Decks was founded in 2022 by Nick, who brings 15 years of deck-building experience; our crew adds 40+ years of combined experience.';

const HOA_NOTE =
  'The written estimate names the product line, the county permit, and the HOA review.';

const WORKMANSHIP =
  'Project agreements use written workmanship warranty terms.';

export default function CountyServiceHub({
  path,
  name,
  description,
  h1,
  serviceName,
  serviceType,
  category,
  countyName,
  countySlug,
  areaServedName,
  question,
  answer,
  localParagraphs,
  priceParagraphs = [],
  permitHref,
  permitLabel,
  serviceCityLinks = [],
  relatedLinks = [],
  faqs,
}) {
  const url = `https://ldndecks.com${path}`;
  const towns = counties[countySlug]?.cities || [];

  return (
    <main>
      <WebPageSchema
        dateModified="2026-11-01"
        url={url}
        name={name}
        description={description}
        speakable
      />
      <ServiceSchema
        name={serviceName}
        description={description}
        url={url}
        serviceType={serviceType}
        category={category}
        areaServed={[{ '@type': 'AdministrativeArea', name: areaServedName }]}
      />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '3.5rem 1.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ margin: '0 0 0.5rem', letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: '0.8rem', color: '#d7e3d4' }}>
            {countyName}, Virginia
          </p>
          <h1 style={{ margin: 0, fontSize: '2.2rem', lineHeight: 1.2 }}>{h1}</h1>
        </div>
      </section>
      <GeoAnswerBlock
        question={question}
        answer={answer}
        facts={[PARTNER_SENTENCE, EXPERIENCE, WORKMANSHIP]}
        links={[
          { href: permitHref, label: permitLabel },
          { href: '/get-estimate', label: 'Request a written estimate' },
        ]}
      />
      <article style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1.5rem 1rem' }}>
        {priceParagraphs.length > 0 ? <QuotedPricesBlock paragraphs={priceParagraphs} /> : null}
        {localParagraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} style={{ lineHeight: 1.7, margin: '0 0 1rem' }}>
            {paragraph}
          </p>
        ))}
        <h2 style={{ fontSize: '1.45rem', margin: '1.5rem 0 0.75rem' }}>Permit and HOA</h2>
        <p style={{ lineHeight: 1.7 }}>
          Start with the <Link href={permitHref} style={{ color: 'var(--color-primary)', fontWeight: 700 }}>{permitLabel}</Link>.
          {' '}{HOA_NOTE} See the <Link href="/hoa-deck-rules-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Northern Virginia HOA deck rules guide</Link> before you submit colors and drawings.
        </p>
        <h2 style={{ fontSize: '1.45rem', margin: '1.5rem 0 0.75rem' }}>Towns served in {countyName}</h2>
        <ul style={{ lineHeight: 1.7, paddingLeft: '1.2rem' }}>
          {towns.map((town) => {
            const href = getCityLink(countySlug, town);
            return (
              <li key={town}>
                {href ? <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 700 }}>{town} deck builder</Link> : town}
              </li>
            );
          })}
        </ul>
        {serviceCityLinks.length > 0 ? (
          <>
            <h2 style={{ fontSize: '1.45rem', margin: '1.5rem 0 0.75rem' }}>City pages for this service</h2>
            <ul style={{ lineHeight: 1.7, paddingLeft: '1.2rem' }}>
              {serviceCityLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ color: 'var(--color-primary)', fontWeight: 700 }}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </>
        ) : null}
        {relatedLinks.length > 0 ? (
          <>
            <h2 style={{ fontSize: '1.45rem', margin: '1.5rem 0 0.75rem' }}>Related guides</h2>
            <ul style={{ lineHeight: 1.7, paddingLeft: '1.2rem' }}>
              {relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ color: 'var(--color-primary)', fontWeight: 700 }}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </>
        ) : null}
        <h2 style={{ fontSize: '1.45rem', margin: '1.5rem 0 0.75rem' }}>Loudoun Decks</h2>
        <p style={{ lineHeight: 1.7 }}>
          {PARTNER_SENTENCE} {BUSINESS.name}, {BUSINESS.address.streetAddress}, {BUSINESS.address.addressLocality}, {BUSINESS.address.addressRegion} {BUSINESS.address.postalCode}. Phone <CallLink />. Email {BUSINESS.email}.
        </p>
      </article>
      <ServicesFAQ title={`${countyName} questions`} faqs={faqs} canonicalUrl={url} />
      <ContactHome />
    </main>
  );
}
