// llms.txt Standard for AI content discovery
// See: https://llmstxt.org/
export async function GET() {
  const content = `# Loudoun Decks (LDN Decks)

> Top-rated custom deck builder in Northern Virginia. Trex Platinum Partner and TimberTech Certified Installer serving Loudoun, Fairfax, Prince William, Arlington & Stafford counties.

## Company Overview
- **Business**: Loudoun Decks (LDN Decks)
- **Type**: Licensed & insured deck building contractor
- **Location**: Northern Virginia (two offices: Centreville, VA & Manassas, VA)
- **Phone**: (571) 655-7207
- **Website**: https://ldndecks.com
- **Rating**: 5.0/5 stars from 41+ Google reviews
- **Certifications**: Trex Platinum Partner, TimberTech Certified Installer

## Services
- Custom composite deck building (Trex, TimberTech AZEK)
- Pressure-treated wood deck construction
- Deck replacement and resurfacing
- Deck repair and restoration
- Screened porch construction
- Pergola and gazebo building
- Outdoor kitchens
- Patio installation (pavers, stamped concrete, flagstone)
- Deck lighting and railings (cable, composite, aluminum)
- Fence building and cleaning
- Pressure washing (decks, siding, concrete)
- Fire pit construction

## Service Areas
Loudoun County: Ashburn, Leesburg, Sterling, Aldie, Brambleton, Broadlands, Purcellville, South Riding, Lovettsville, Hamilton, Hillsboro, Middleburg, Round Hill, Waterford, Lansdowne
Fairfax County: Reston, Herndon, Fairfax, Centreville, Vienna, McLean, Great Falls, Chantilly, Burke, Springfield, Falls Church, Oakton, Tysons, Alexandria, Lorton, Annandale
Prince William County: Manassas, Woodbridge, Haymarket, Gainesville, Bristow, Dale City, Dumfries, Lake Ridge, Nokesville, Occoquan
Arlington County: Arlington, Crystal City, Ballston, Clarendon, Rosslyn, Pentagon City, Shirlington
Stafford County: Stafford, Aquia Harbour, Falmouth, Garrisonville

## Pricing (2026, Northern Virginia)
- Pressure-treated wood deck: $18–$35 per sqft installed
- Cedar deck: $25–$45 per sqft installed
- Trex Enhance composite: $30–$50 per sqft installed
- Trex Transcend composite: $45–$65 per sqft installed
- TimberTech AZEK: $50–$75 per sqft installed
- Typical 300–500 sqft project: $15,000–$45,000
- Northern Virginia pricing runs 25–35% above state average

## Key Pages
- [Deck Cost Guide](https://ldndecks.com/how-much-does-a-deck-cost-northern-virginia): Detailed 2026 pricing with material comparisons
- [Composite Deck Cost Guide](https://ldndecks.com/composite-deck-cost-northern-virginia): Brand-by-brand composite pricing (Trex, TimberTech, AZEK, Fiberon)
- [Deck Cost Calculator](https://ldndecks.com/deck-cost-calculator): Interactive calculator with instant estimates
- [Deck Financing](https://ldndecks.com/deck-financing): Financing options may be available for new decks, resurfacing, repairs, and composite upgrades; subject to approval and terms may vary
- [Trex vs TimberTech vs AZEK](https://ldndecks.com/trex-vs-timbertech-vs-azek): Brand comparison guide
- [Composite vs Wood](https://ldndecks.com/composite-deck-vs-wood-deck-virginia): Material decision guide
- [Northern Virginia Deck Building Guide](https://ldndecks.com/northern-virginia-deck-building-guide): Complete building guide
- [Services](https://ldndecks.com/services): All services offered
- [Areas We Serve](https://ldndecks.com/areas-we-serve): Full service area map
- [Reviews](https://ldndecks.com/reviews): Customer testimonials
- [FAQs](https://ldndecks.com/faqs): Frequently asked questions
- [Showcase](https://ldndecks.com/showcase): Project gallery
- [Before & After](https://ldndecks.com/before-and-after): Real deck transformations with costs, materials, and timelines
- [Contact](https://ldndecks.com/contact): Free estimate request
- [Screened Porch Cost](https://ldndecks.com/screened-porch-cost-northern-virginia): Screened porch pricing guide
- [How Long Does a Composite Deck Last](https://ldndecks.com/how-long-does-a-composite-deck-last): Lifespan by brand
- [Deck ROI & Home Value](https://ldndecks.com/does-a-deck-add-value-to-your-home): Resale value data
- [HOA Deck Rules](https://ldndecks.com/hoa-deck-rules-northern-virginia): HOA approval guide
- [Deck Permits Loudoun County](https://ldndecks.com/deck-permit-loudoun-county-virginia): Loudoun County permit guide with LOLA portal, costs, setbacks
- [Deck Permits Fairfax County](https://ldndecks.com/deck-permit-fairfax-county-virginia): Fairfax County permit requirements
- [How to Choose a Deck Builder](https://ldndecks.com/how-to-choose-a-deck-builder-northern-virginia): 10 questions + red flags
- [Deck Maintenance Checklist](https://ldndecks.com/deck-maintenance-checklist-virginia): Seasonal maintenance guide
- [Blog](https://ldndecks.com/blog): Expert articles on deck building
- [Certifications & Licenses](https://ldndecks.com/about/certifications-and-licenses): Credentials and verification
- [Our Team](https://ldndecks.com/team): Meet the team behind Loudoun Decks

## Detailed Content
For full extractable content, see: https://ldndecks.com/llms-full.txt
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
