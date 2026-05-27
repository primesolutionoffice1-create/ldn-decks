import Link from 'next/link';

const CITY_DATA = {
  brambleton: {
    name: 'Brambleton',
    county: 'Loudoun County',
    permit: '/deck-permit-loudoun-county-virginia',
    nearby: 'Ashburn, South Riding, Stone Ridge and Chantilly',
    intent: 'builder-grade deck upgrades, composite resurfacing and HOA-ready outdoor living plans',
    lot: 'narrower, deeper planned-community lots where traffic flow, stairs and privacy matter',
    materials: 'Trex Transcend, Trex Select and TimberTech composite boards that keep a clean community look without annual staining',
    projectTypes: ['composite resurfacing', 'deck replacement', 'stair rebuilds', 'deck lighting', 'privacy-friendly railing upgrades'],
    localNotes: ['Brambleton ARC expectations', 'Loudoun County inspections', 'older pressure-treated frames from the 2007-2015 build cycle'],
    premium: 'A smart Brambleton deck usually feels organized rather than oversized: a better stair location, cleaner railing lines, lighting at the stairs and a composite color that works with the brick or siding package.',
  },
  bristow: {
    name: 'Bristow',
    county: 'Prince William County',
    permit: '/deck-permit-prince-william-county-virginia',
    nearby: 'Gainesville, Haymarket, Manassas and Nokesville',
    intent: 'family-friendly composite decks, resurfacing and screened porch planning',
    lot: 'suburban Prince William lots where play space, grilling space and stair safety are frequent priorities',
    materials: 'Trex Enhance, Trex Transcend and TimberTech products for durable family-use decks',
    projectTypes: ['builder deck resurfacing', 'new composite decks', 'safe stair rebuilds', 'covered grill zones', 'railing replacement'],
    localNotes: ['Braemar and Linton Hall HOA review', 'Prince William County permit timing', 'older builder-grade frames entering replacement age'],
    premium: 'The best Bristow projects balance budget and durability: preserve sound framing when possible, upgrade surfaces and rails, and solve the stair or landing problems that make an older deck feel tired.',
  },
  burke: {
    name: 'Burke',
    county: 'Fairfax County',
    permit: '/deck-permit-fairfax-county-virginia',
    nearby: 'Springfield, Fairfax Station, Annandale and Lorton',
    intent: 'structural deck replacement, composite upgrades and shaded backyard planning',
    lot: 'mature Fairfax neighborhoods with trees, slopes, walk-out basements and aging deck structures',
    materials: 'TimberTech, Trex and PVC options that hold up against shade, pollen, leaf debris and moisture',
    projectTypes: ['deck replacement', 'structural repair', 'composite resurfacing', 'under-deck drainage', 'screened porch transitions'],
    localNotes: ['Fairfax County plan review', 'tree coverage and moisture exposure', 'older deck ledgers and footings that need inspection'],
    premium: 'A Burke deck often needs structural thinking first: ledger condition, post bases, stair movement and drainage around mature landscaping before the finish boards are selected.',
  },
  fallsChurch: {
    name: 'Falls Church',
    county: 'Fairfax County',
    permit: '/deck-permit-fairfax-county-virginia',
    nearby: 'Arlington, McLean, Vienna and Annandale',
    intent: 'compact premium decks, privacy-conscious outdoor rooms and replacement decks for older homes',
    lot: 'smaller infill lots where setbacks, privacy and efficient layouts drive the design',
    materials: 'premium composite or PVC decking, aluminum railings and low-voltage lighting for tight outdoor spaces',
    projectTypes: ['compact composite decks', 'privacy screens', 'screened porches', 'stair and landing rebuilds', 'deck lighting'],
    localNotes: ['Fairfax County or City of Falls Church jurisdiction checks', 'older home attachment details', 'neighbor visibility and setback planning'],
    premium: 'Falls Church projects win by using space precisely: cleaner circulation, privacy where it matters and materials that make a smaller deck feel intentional rather than squeezed in.',
  },
  haymarket: {
    name: 'Haymarket',
    county: 'Prince William County',
    permit: '/deck-permit-prince-william-county-virginia',
    nearby: 'Gainesville, Bristow, Nokesville and western Prince William',
    intent: 'large composite decks, covered outdoor living and mountain-view backyard projects',
    lot: 'larger western Prince William properties with sun exposure, slopes and entertaining-focused backyards',
    materials: 'Trex, TimberTech and cable or aluminum rail systems that preserve open views',
    projectTypes: ['large composite decks', 'covered decks', 'outdoor kitchens', 'cable railings', 'multi-level layouts'],
    localNotes: ['Prince William County inspections', 'HOA review in planned communities', 'wind and sun exposure on open lots'],
    premium: 'Haymarket homeowners often have room to build the full outdoor system: deck, shade, stairs, lighting and grill space planned together rather than as disconnected add-ons.',
  },
  lorton: {
    name: 'Lorton',
    county: 'Fairfax County',
    permit: '/deck-permit-fairfax-county-virginia',
    nearby: 'Springfield, Burke, Woodbridge and Fairfax Station',
    intent: 'replacement decks, composite upgrades and elevated decks for sloped yards',
    lot: 'sloped Fairfax County lots, walk-out basements and wooded backyards where structure and drainage matter',
    materials: 'composite decking, stronger rail systems and under-deck drainage options for multi-use backyards',
    projectTypes: ['elevated decks', 'deck replacement', 'structural inspection', 'under-deck patios', 'stair rebuilds'],
    localNotes: ['Fairfax County permit review', 'grade changes and stair landings', 'drainage around lower-level patios'],
    premium: 'A strong Lorton deck should make the slope work for the homeowner, turning elevation into usable upper-deck and lower-patio space without ignoring footings, posts and water movement.',
  },
  oakton: {
    name: 'Oakton',
    county: 'Fairfax County',
    permit: '/deck-permit-fairfax-county-virginia',
    nearby: 'Vienna, Fairfax, Reston and Great Falls',
    intent: 'premium composite decks, estate-style outdoor living and careful replacement work',
    lot: 'larger Fairfax lots with wooded edges, custom homes and higher finish expectations',
    materials: 'TimberTech AZEK, Trex Transcend, cable railings, lighting and picture-frame details',
    projectTypes: ['premium composite decks', 'covered decks', 'screened porches', 'multi-level decks', 'deck inspections'],
    localNotes: ['Fairfax County inspection expectations', 'tree shade and leaf-load maintenance', 'custom-home material matching'],
    premium: 'Oakton projects should feel tailored: tighter detailing, better transitions from interior rooms, upgraded railing choices and structure that supports a long-term outdoor living plan.',
  },
  purcellville: {
    name: 'Purcellville',
    county: 'Loudoun County',
    permit: '/deck-permit-loudoun-county-virginia',
    nearby: 'Round Hill, Hamilton, Hillsboro, Bluemont, Lovettsville, Waterford and western Loudoun',
    intent: 'estate-scale decks, countryside screened porches, covered decks and scenic outdoor entertaining spaces',
    lot: 'larger western Loudoun properties with slopes, long views, open sun, wind exposure and room for premium outdoor rooms',
    materials: 'Trex Transcend, TimberTech AZEK, Deckorators mineral-based composite, cable railings and low-maintenance PVC trim details',
    projectTypes: ['large composite decks', 'screened porches', 'covered decks', 'outdoor kitchens', 'hillside or elevated decks', 'cable railing view decks'],
    localNotes: ['Town of Purcellville versus Loudoun County jurisdiction', 'rural driveway access', 'well and septic setbacks', 'Blue Ridge view preservation', 'open-lot wind and sun exposure'],
    premium: 'Purcellville and western Loudoun are premium expansion markets because the homes can support bigger outdoor living ideas: a covered dining zone, a screened porch for bug season, a view-facing deck, a lower patio and a grill or outdoor kitchen that fits the countryside lifestyle.',
    westernLoudoun: true,
  },
  southRiding: {
    name: 'South Riding',
    county: 'Loudoun County',
    permit: '/deck-permit-loudoun-county-virginia',
    nearby: 'Chantilly, Stone Ridge, Brambleton and Aldie',
    intent: 'HOA-ready composite decks, resurfacing and compact outdoor living upgrades',
    lot: 'planned-community yards where HOA approval, privacy and usable square footage drive the design',
    materials: 'Trex and TimberTech composite boards with white, black or bronze rail systems that fit community standards',
    projectTypes: ['HOA-ready composite decks', 'resurfacing', 'privacy screening', 'stair lighting', 'deck replacement'],
    localNotes: ['South Riding Proprietary review', 'Loudoun County permits', 'neighbor sightlines and compact lot planning'],
    premium: 'South Riding decks perform best when they solve practical problems: reduce maintenance, improve privacy, make stairs safer and turn a builder patio door into an outdoor room families use daily.',
  },
  springfield: {
    name: 'Springfield',
    county: 'Fairfax County',
    permit: '/deck-permit-fairfax-county-virginia',
    nearby: 'Burke, Lorton, Annandale and Alexandria',
    intent: 'replacement decks, structural repairs and composite upgrades for established neighborhoods',
    lot: 'older Fairfax neighborhoods with mature trees, walk-out basements and decks that may need structural review before resurfacing',
    materials: 'Trex, TimberTech and pressure-treated structural framing paired with composite surfaces and safer railings',
    projectTypes: ['deck replacement', 'structural repair', 'composite resurfacing', 'stair rebuilds', 'inspection-driven upgrades'],
    localNotes: ['Fairfax County permits', 'older ledgers and posts', 'tree shade, moisture and stair safety concerns'],
    premium: 'In Springfield, the highest-value work is often not the biggest deck; it is the safest, cleanest replacement that fixes structure, improves stairs and gives the home a low-maintenance outdoor space.',
  },
};

function renderList(items) {
  return items.map((item) => <li key={item}>{item}</li>);
}

export default function CityAuthorityExpansion({ cityKey }) {
  const city = CITY_DATA[cityKey];
  if (!city) return null;

  return (
    <section style={{ background: '#f8fafc', padding: '3rem 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <p style={{ color: 'var(--color-primary)', fontWeight: 800, fontSize: '0.82rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          Local planning notes
        </p>
        <h2 style={{ fontSize: '1.9rem', lineHeight: 1.2, fontWeight: 800, marginBottom: '1rem', color: '#111827' }}>
          Building Better Decks for {city.name} Homes
        </h2>
        <p style={{ lineHeight: 1.75, color: '#334155', marginBottom: '1rem' }}>
          Homeowners in {city.name} usually need more than a generic deck estimate. The right plan
          has to match {city.lot}, the local permit path in {city.county}, material performance,
          stair safety, privacy, drainage and the way the family actually uses the backyard.
        </p>
        <p style={{ lineHeight: 1.75, color: '#334155', marginBottom: '1.5rem' }}>
          Loudoun Decks focuses this page on {city.intent}. That means connecting the local page to
          real service intent: <Link href="/services/new-decks">new deck construction</Link>,{' '}
          <Link href="/services/deck-replacement">deck replacement</Link>,{' '}
          <Link href="/services/deck-resurfacing">deck resurfacing</Link>,{' '}
          <Link href="/services/deck-inspection">deck inspections</Link>, and the technical tools
          homeowners use before they request an estimate.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8, padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.75rem' }}>Best-fit projects</h3>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.7 }}>{renderList(city.projectTypes)}</ul>
          </div>
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8, padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.75rem' }}>Local review factors</h3>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.7 }}>{renderList(city.localNotes)}</ul>
          </div>
        </div>

        <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', color: '#111827' }}>
          Materials, Structure and Code Context
        </h3>
        <p style={{ lineHeight: 1.75, color: '#334155', marginBottom: '1rem' }}>
          For {city.name}, the strongest material choices are usually {city.materials}. Material
          selection should be tied to the frame underneath: joist spacing, beam span, post loads,
          footing depth, ledger attachment, stair landings and rail-post blocking. Start with the{' '}
          <Link href="/tools/deck-load-calculator-virginia">deck load calculator</Link>,{' '}
          <Link href="/tools/deck-joist-span-calculator-virginia">joist span calculator</Link>,{' '}
          <Link href="/tools/deck-beam-span-calculator-virginia">beam span calculator</Link>, and{' '}
          <Link href="/tools/deck-footing-depth-calculator-virginia">footing depth calculator</Link>{' '}
          for planning context, then confirm the final structure through plans and inspection.
        </p>
        <p style={{ lineHeight: 1.75, color: '#334155', marginBottom: '1rem' }}>
          Permit and inspection requirements should be checked before design is finalized. The
          relevant starting point for this page is the <Link href={city.permit}>{city.county} deck permit guide</Link>,
          supported by the <Link href="/education/deck-understructure-guide">deck understructure guide</Link>,{' '}
          <Link href="/education/understanding-deck-load-paths">deck load path guide</Link>, and{' '}
          <Link href="/education/ledger-board-flashing-deck-attachment-virginia">ledger flashing guide</Link>.
        </p>

        {city.westernLoudoun && (
          <div style={{ background: '#111827', color: '#fff', borderRadius: 8, padding: '1.5rem', margin: '2rem 0' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem' }}>
              Western Loudoun Premium Outdoor Living
            </h3>
            <p style={{ lineHeight: 1.75, color: 'rgba(255,255,255,0.84)', marginBottom: '1rem' }}>
              Purcellville, Round Hill, Hamilton, Hillsboro, Bluemont, Lovettsville and rural
              Loudoun properties deserve a different kind of outdoor living plan. The goal is often
              not just a deck; it is a view-facing entertainment platform, a shaded dining area, a
              screened porch for summer evenings, a covered grill zone and a structure that handles
              slope, drainage, wind exposure and long-term low maintenance.
            </p>
            <p style={{ lineHeight: 1.75, color: 'rgba(255,255,255,0.84)', margin: 0 }}>
              For estate-style homes and countryside lots, we prioritize premium composite or PVC
              decking, cable railing where views matter, covered-deck transitions, outdoor kitchen
              coordination, stronger framing review and clean architectural lines that fit the
              western Loudoun landscape without feeling suburban or generic.
            </p>
          </div>
        )}

        <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', color: '#111827' }}>
          Conversion Path for {city.name} Homeowners
        </h3>
        <p style={{ lineHeight: 1.75, color: '#334155', marginBottom: '1rem' }}>
          {city.premium} The next step is to compare scope and budget using the{' '}
          <Link href="/composite-deck-cost-northern-virginia">Northern Virginia deck cost guide</Link>, review
          local trust signals on the <Link href="/reviews">reviews page</Link>, and request an estimate
          when the project is ready for a site visit.
        </p>
        <p style={{ lineHeight: 1.75, color: '#334155', margin: 0 }}>
          We also serve nearby communities including {city.nearby}, which helps reinforce local
          service-area relevance without creating thin duplicate city pages.
        </p>
      </div>
    </section>
  );
}
