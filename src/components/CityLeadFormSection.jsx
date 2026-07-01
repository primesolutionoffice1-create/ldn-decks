import PaidSearchLeadForm from '@/components/PaidSearchLeadForm';

export default function CityLeadFormSection({
  city,
  county,
  service = 'Deck replacement or composite deck',
  formLocation,
  heading,
  pageType = 'local_city_landing_page',
}) {
  const cityService = `${city} ${service}`;

  return (
    <section style={{ background: '#fff7f2', padding: '2.25rem 1.5rem' }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ margin: '0 0 0.4rem', color: '#d14817', fontSize: '0.78rem', fontWeight: 900, textTransform: 'uppercase' }}>
            {city} homeowner estimate path
          </p>
          <h2 style={{ margin: 0, color: '#181818', fontSize: 'clamp(1.45rem, 2.3vw, 2rem)', lineHeight: 1.2, fontWeight: 900 }}>
            Deck Replacement and Composite Deck Estimates in {city}
          </h2>
          <p style={{ margin: '0.8rem auto 0', color: '#5c514b', lineHeight: 1.65, maxWidth: 700 }}>
            Use this short form if you are planning a serious {city} deck replacement, composite deck, screened porch, or outdoor living project. We prioritize homeowner requests with clear project scope, location, and budget range.
          </p>
        </div>
        <PaidSearchLeadForm
          service={cityService}
          formLocation={formLocation || `local_city_${city.toLowerCase().replace(/[^a-z0-9]+/g, '_')}_deck_builder`}
          leadSource="Local SEO city page"
          heading={heading || `Request a ${city} deck estimate`}
          pageContext={{
            city,
            county,
            service: cityService,
            pageType,
          }}
        />
      </div>
    </section>
  );
}
