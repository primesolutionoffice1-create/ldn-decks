#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const WIDTH = 1200;
const HEIGHT = 630;
const OUT_DIR = path.resolve('public/social');

const CARDS = [
  {
    file: 'composite-deck-cost-northern-virginia-social.png',
    kicker: '2026 COST GUIDE',
    title: 'Composite Deck Cost',
    subtitle: 'Northern Virginia pricing, Trex, TimberTech, permits and financing',
    accent: [224, 133, 66],
  },
  {
    file: 'deck-repair-structural-maintenance-social.png',
    kicker: 'INSPECTION FIRST',
    title: 'Deck Repair Near Me',
    subtitle: 'Structural repair, rot, stairs, railings and resurfacing decisions',
    accent: [212, 85, 72],
  },
  {
    file: 'deck-repair-social.png',
    kicker: 'SAFETY + STRUCTURE',
    title: 'Deck Repair',
    subtitle: 'Repair vs replace guidance for Loudoun, Fairfax and Prince William',
    accent: [87, 144, 185],
  },
  {
    file: 'deck-repair-loudoun-county-social.png',
    kicker: 'LOUDOUN COUNTY',
    title: 'Deck Repair',
    subtitle: 'Ledger boards, post rot, stairs, railings and resurfacing',
    accent: [72, 148, 112],
  },
  {
    file: 'deck-financing-social.png',
    kicker: 'PAYMENT PLANNING',
    title: 'Deck Financing',
    subtitle: 'Options for new decks, resurfacing, repairs and composite upgrades',
    accent: [92, 120, 196],
  },
  {
    file: 'deck-permit-loudoun-county-social.png',
    kicker: 'LOUDOUN PERMITS',
    title: 'Deck Permit Guide',
    subtitle: 'LandMARC, setbacks, inspections, HOA review and code planning',
    accent: [191, 130, 62],
  },
  {
    file: 'deck-permit-fairfax-county-social.png',
    kicker: 'FAIRFAX PERMITS',
    title: 'Deck Permit Guide',
    subtitle: 'Plan review, inspections, zoning and submission requirements',
    accent: [122, 112, 184],
  },
  {
    file: 'deck-permit-arlington-county-social.png',
    kicker: 'ARLINGTON PERMITS',
    title: 'Deck Permit Guide',
    subtitle: 'Permit Arlington, CPHD review, setbacks and historic districts',
    accent: [84, 126, 176],
  },
  {
    file: 'deck-permit-prince-william-county-social.png',
    kicker: 'PRINCE WILLIAM',
    title: 'Deck Permit Guide',
    subtitle: '2-4 week review, inspections, costs and county process',
    accent: [86, 142, 112],
  },
  {
    file: 'deck-permit-hoa-cost-loudoun-county-social.png',
    kicker: 'PERMIT + HOA COST',
    title: 'Loudoun Deck Budget',
    subtitle: 'Permit fees, HOA review, engineering and monthly payment planning',
    accent: [191, 130, 62],
  },
  {
    file: 'trex-vs-timbertech-vs-azek-social.png',
    kicker: 'MATERIAL COMPARISON',
    title: 'Trex vs TimberTech',
    subtitle: 'AZEK, Fiberon, pricing, warranty, heat and fade resistance',
    accent: [52, 152, 166],
  },
  {
    file: 'trex-transcend-review-northern-virginia-social.png',
    kicker: 'INSTALLER REVIEW',
    title: 'Trex Transcend Review',
    subtitle: 'Real Northern Virginia durability, heat, fade and cost notes',
    accent: [52, 152, 166],
  },
  {
    file: 'timbertech-azek-deck-cost-northern-virginia-social.png',
    kicker: 'PREMIUM PVC COST',
    title: 'TimberTech + AZEK',
    subtitle: 'EDGE, PRO, Vintage, warranty and monthly payment planning',
    accent: [72, 148, 112],
  },
  {
    file: 'composite-deck-vs-wood-deck-virginia-social.png',
    kicker: '15 YEAR COMPARISON',
    title: 'Composite vs Wood',
    subtitle: 'Virginia cost, maintenance, lifespan and resale value',
    accent: [191, 130, 62],
  },
  {
    file: 'deck-materials-comparison-virginia-social.png',
    kicker: 'BUYER GUIDE',
    title: 'Deck Materials Compared',
    subtitle: 'Trex, TimberTech, AZEK, cedar, IPE, aluminum and wood',
    accent: [122, 112, 184],
  },
  {
    file: 'composite-deck-cost-by-size-social.png',
    kicker: 'COST BY SIZE',
    title: 'Composite Deck Budget',
    subtitle: '300, 400, 500 and 600 square foot pricing examples',
    accent: [224, 133, 66],
  },
  {
    file: 'composite-decks-social.png',
    kicker: 'LOW MAINTENANCE',
    title: 'Composite Deck Builder',
    subtitle: 'Trex, TimberTech and premium composite decks in NoVA',
    accent: [78, 132, 170],
  },
  {
    file: 'trex-decks-social.png',
    kicker: 'TREX SPECIALIST',
    title: 'Trex Deck Builder',
    subtitle: 'Transcend, Lineage, railings, lighting and warranty planning',
    accent: [52, 152, 166],
  },
  {
    file: 'timbertech-decks-social.png',
    kicker: 'TIMBERTECH + AZEK',
    title: 'TimberTech Deck Builder',
    subtitle: 'Certified guidance for PVC, composite, heat and moisture',
    accent: [72, 148, 112],
  },
  {
    file: 'deck-builders-loudoun-social.png',
    kicker: 'LOUDOUN COUNTY',
    title: 'Custom Deck Builder',
    subtitle: 'Ashburn, Leesburg, Brambleton, permits, HOA and Trex builds',
    accent: [72, 148, 112],
  },
  {
    file: 'deck-builder-ashburn-va-social.png',
    kicker: 'ASHBURN VA',
    title: 'Deck Builder',
    subtitle: 'Brambleton, Broadlands, One Loudoun and HOA-ready decks',
    accent: [224, 133, 66],
  },
  {
    file: 'deck-builder-leesburg-va-social.png',
    kicker: 'LEESBURG VA',
    title: 'Deck Builder',
    subtitle: 'River Creek, Lansdowne, historic district and permit planning',
    accent: [191, 130, 62],
  },
  {
    file: 'deck-builder-herndon-va-social.png',
    kicker: 'HERNDON VA',
    title: 'Deck Builder',
    subtitle: 'Town of Herndon, Fairfax permits and premium composite decks',
    accent: [78, 132, 170],
  },
  {
    file: 'deck-builder-reston-va-social.png',
    kicker: 'RESTON VA',
    title: 'Deck Builder',
    subtitle: 'Reston Association DRB, wooded lots and Fairfax permits',
    accent: [90, 142, 102],
  },
  {
    file: 'deck-builder-mclean-va-social.png',
    kicker: 'MCLEAN VA',
    title: 'Luxury Deck Builder',
    subtitle: 'Estate decks, RPA planning, glass railings and premium finishes',
    accent: [122, 112, 184],
  },
  {
    file: 'deck-builder-vienna-va-social.png',
    kicker: 'VIENNA VA',
    title: 'Deck Builder',
    subtitle: 'Town of Vienna permits, Trex, TimberTech and screened porches',
    accent: [174, 114, 76],
  },
  {
    file: 'deck-builder-fairfax-va-social.png',
    kicker: 'FAIRFAX VA',
    title: 'Class A Deck Contractor',
    subtitle: 'City and county permits, composite decks and structural drawings',
    accent: [84, 126, 176],
  },
  {
    file: 'get-estimate-social.png',
    kicker: 'WRITTEN ESTIMATE',
    title: 'Request a Deck Estimate',
    subtitle: 'Composite decks, resurfacing, screened porches and outdoor living',
    accent: [224, 133, 66],
  },
  {
    file: 'deck-builder-alexandria-va-social.png',
    kicker: 'ALEXANDRIA VA',
    title: 'Deck Builder',
    subtitle: 'Historic homes, modern composites, porches and permit planning',
    accent: [84, 126, 176],
  },
  {
    file: 'deck-builder-brambleton-va-social.png',
    kicker: 'BRAMBLETON VA',
    title: 'Deck Builder',
    subtitle: 'BCA design review, builder-grade upgrades and Trex decks',
    accent: [224, 133, 66],
  },
  {
    file: 'deck-builder-bristow-va-social.png',
    kicker: 'BRISTOW VA',
    title: 'Deck Builder',
    subtitle: 'Composite resurfacing, Braemar, Linton Hall and permits',
    accent: [191, 130, 62],
  },
  {
    file: 'deck-builder-chantilly-va-social.png',
    kicker: 'CHANTILLY VA',
    title: 'Deck Builder',
    subtitle: 'Sully District, Route 50 corridor and premium composite decks',
    accent: [78, 132, 170],
  },
  {
    file: 'deck-builder-gainesville-va-social.png',
    kicker: 'GAINESVILLE VA',
    title: 'Deck Builder',
    subtitle: 'Western Prince William decks, HOAs and outdoor living',
    accent: [90, 142, 102],
  },
  {
    file: 'deck-builder-haymarket-va-social.png',
    kicker: 'HAYMARKET VA',
    title: 'Deck Builder',
    subtitle: 'Sloped lots, mountain views, Dominion Valley and Piedmont',
    accent: [122, 112, 184],
  },
  {
    file: 'deck-builder-manassas-va-social.png',
    kicker: 'MANASSAS VA',
    title: 'Deck Builder',
    subtitle: 'Old Town, Bull Run, composite decks and screened porches',
    accent: [174, 114, 76],
  },
  {
    file: 'deck-builder-woodbridge-va-social.png',
    kicker: 'WOODBRIDGE VA',
    title: 'Deck Builder',
    subtitle: 'Prince William permits, HOAs and premium composite decks',
    accent: [72, 148, 112],
  },
  {
    file: 'deck-builder-burke-va-social.png',
    kicker: 'BURKE VA',
    title: 'Deck Builder',
    subtitle: 'Burke Centre, mature canopy lots and composite replacements',
    accent: [90, 142, 102],
  },
  {
    file: 'deck-builder-falls-church-va-social.png',
    kicker: 'FALLS CHURCH',
    title: 'Deck Builder',
    subtitle: 'Compact lot design, privacy and dual-jurisdiction permits',
    accent: [84, 126, 176],
  },
  {
    file: 'deck-builder-lorton-va-social.png',
    kicker: 'LORTON VA',
    title: 'Deck Builder',
    subtitle: 'Laurel Hill, wooded lots and Fairfax County permits',
    accent: [72, 148, 112],
  },
  {
    file: 'deck-builder-oakton-va-social.png',
    kicker: 'OAKTON VA',
    title: 'Premium Deck Builder',
    subtitle: 'Wooded estate lots, RPA planning and multi-level designs',
    accent: [122, 112, 184],
  },
  {
    file: 'deck-builder-purcellville-va-social.png',
    kicker: 'PURCELLVILLE VA',
    title: 'Deck Builder',
    subtitle: 'Western Loudoun, larger lots, cedar, composite and views',
    accent: [191, 130, 62],
  },
  {
    file: 'deck-builder-south-riding-va-social.png',
    kicker: 'SOUTH RIDING',
    title: 'Deck Builder',
    subtitle: 'SRP design review, builder-grade upgrades and deck patios',
    accent: [224, 133, 66],
  },
  {
    file: 'deck-builder-springfield-va-social.png',
    kicker: 'SPRINGFIELD VA',
    title: 'Deck Builder',
    subtitle: 'Kingstowne, Franconia, permits and composite deck ROI',
    accent: [78, 132, 170],
  },
  {
    file: 'deck-builder-northern-virginia-social.png',
    kicker: 'NORTHERN VIRGINIA',
    title: 'Custom Deck Builder',
    subtitle: 'Composite decks, permits, HOA support and outdoor living',
    accent: [52, 152, 166],
  },
  {
    file: 'before-and-after-social.png',
    kicker: 'PROJECT PROOF',
    title: 'Before + After Decks',
    subtitle: 'Real transformations across Loudoun, Fairfax and Prince William',
    accent: [72, 148, 112],
  },
  {
    file: 'ashburn-composite-deck-cost-financing-social.png',
    kicker: 'ASHBURN BUDGET',
    title: 'Deck Cost + Financing',
    subtitle: 'HOA-aware composite deck pricing and monthly payment planning',
    accent: [224, 133, 66],
  },
  {
    file: 'best-time-to-finance-build-deck-northern-virginia-social.png',
    kicker: 'TIMING GUIDE',
    title: 'When to Finance a Deck',
    subtitle: 'Seasonality, permits, lender promos and material lead times',
    accent: [92, 120, 196],
  },
  {
    file: 'credit-score-deck-financing-social.png',
    kicker: 'SOFT PULL PLANNING',
    title: 'Deck Financing Credit Score',
    subtitle: 'APR ranges, approval tips and pre-qualification expectations',
    accent: [78, 132, 170],
  },
  {
    file: 'resurface-or-replace-deck-financing-social.png',
    kicker: 'FINANCE DECISION',
    title: 'Resurface or Replace?',
    subtitle: 'Inspection criteria, project cost and monthly payment math',
    accent: [191, 130, 62],
  },
  {
    file: 'deck-design-ideas-2026-social.png',
    kicker: '2026 DESIGN IDEAS',
    title: 'Deck Design Ideas',
    subtitle: 'Photos, costs, colors, porches, pergolas and outdoor kitchens',
    accent: [122, 112, 184],
  },
  {
    file: 'deck-design-ideas-northern-virginia-2026-social.png',
    kicker: 'NOVA DESIGN TRENDS',
    title: 'Deck Design Ideas',
    subtitle: 'Composite decks, screened porches and pergolas for 2026',
    accent: [78, 132, 170],
  },
  {
    file: 'outdoor-living-northern-virginia-social.png',
    kicker: 'OUTDOOR LIVING',
    title: 'Decks, Patios, Porches',
    subtitle: 'One integrated plan for Northern Virginia outdoor spaces',
    accent: [72, 148, 112],
  },
  {
    file: 'outdoor-living-trends-northern-virginia-2026-social.png',
    kicker: '2026 TRENDS',
    title: 'Outdoor Living Trends',
    subtitle: 'Multi-level decks, outdoor kitchens, cable rail and ROI',
    accent: [174, 114, 76],
  },
  {
    file: 'mclean-great-falls-premium-deck-budget-social.png',
    kicker: 'PREMIUM BUDGET',
    title: 'McLean + Great Falls Decks',
    subtitle: 'AZEK, cable railings, lighting and covered structures',
    accent: [122, 112, 184],
  },
  {
    file: 'covered-deck-cost-northern-virginia-social.png',
    kicker: 'COVERED DECK COST',
    title: 'Covered Deck Budget',
    subtitle: 'Roof types, finishes, permits and monthly payment examples',
    accent: [191, 130, 62],
  },
  {
    file: 'second-story-deck-builder-northern-virginia-social.png',
    kicker: 'ELEVATED DECKS',
    title: 'Second Story Deck Builder',
    subtitle: 'Engineering, permits, safety and cost planning in NoVA',
    accent: [84, 126, 176],
  },
  {
    file: 'deck-roi-calculator-northern-virginia-social.png',
    kicker: 'RESALE VALUE',
    title: 'Deck ROI Calculator',
    subtitle: 'Composite deck return by material, size and county',
    accent: [52, 152, 166],
  },
  {
    file: 'best-deck-stain-sealer-virginia-social.png',
    kicker: 'VIRGINIA WEATHER',
    title: 'Best Deck Stain + Sealer',
    subtitle: 'Oil, water-based, transparent and solid stain guidance',
    accent: [174, 114, 76],
  },
  {
    file: 'composite-deck-builder-loudoun-social.png',
    kicker: 'LOUDOUN COMPOSITE',
    title: 'Composite Deck Builder',
    subtitle: 'Trex, TimberTech, permits, HOA support, railings and stairs',
    accent: [72, 148, 112],
  },
  {
    file: 'deck-lighting-railings-stairs-addon-cost-social.png',
    kicker: 'ADD-ON COSTS',
    title: 'Lighting, Railings + Stairs',
    subtitle: 'Package pricing, linear foot costs and monthly payment impact',
    accent: [78, 132, 170],
  },
  {
    file: 'deck-resurfacing-northern-virginia-social.png',
    kicker: 'FRAME-FIRST UPGRADE',
    title: 'Deck Resurfacing',
    subtitle: 'Keep the frame, upgrade to composite boards and railings',
    accent: [191, 130, 62],
  },
  {
    file: 'deck-warranty-guide-northern-virginia-social.png',
    kicker: 'WARRANTY GUIDE',
    title: 'Deck Warranty Coverage',
    subtitle: 'Trex, TimberTech, workmanship, claims and what voids coverage',
    accent: [122, 112, 184],
  },
  {
    file: 'loudoun-county-hoa-deck-rules-social.png',
    kicker: 'LOUDOUN HOA RULES',
    title: 'HOA Deck Rules',
    subtitle: 'Brambleton, Broadlands, One Loudoun, Ashburn Farm and more',
    accent: [224, 133, 66],
  },
  {
    file: 'rooftop-deck-washington-dc-social.png',
    kicker: 'ROOFTOP BUILD',
    title: 'Washington DC Rooftop Deck',
    subtitle: 'Structural planning, premium materials and city-view outdoor living',
    accent: [84, 126, 176],
  },
  {
    file: 'wood-vs-composite-deck-long-term-cost-social.png',
    kicker: '15 YEAR COST',
    title: 'Wood vs Composite',
    subtitle: 'Maintenance, repairs, financing and resale over the long term',
    accent: [52, 152, 166],
  },
  {
    file: 'faqs-social.png',
    kicker: 'HOMEOWNER ANSWERS',
    title: 'Deck Building FAQs',
    subtitle: 'Costs, permits, timelines, materials, HOA and maintenance',
    accent: [122, 112, 184],
  },
  {
    file: 'services-social.png',
    kicker: 'OUTDOOR LIVING',
    title: 'Deck + Porch Services',
    subtitle: 'Custom decks, porches, pergolas, patios, railings and repairs',
    accent: [72, 148, 112],
  },
  {
    file: 'gazebo-pergola-social.png',
    kicker: 'SHADE STRUCTURES',
    title: 'Gazebo + Pergola Builder',
    subtitle: 'Custom shade, louvered roofs, lighting and backyard design',
    accent: [174, 114, 76],
  },
  {
    file: 'new-decks-social.png',
    kicker: 'CUSTOM BUILD',
    title: 'New Deck Construction',
    subtitle: 'Design, permits, framing, Trex, TimberTech and inspections',
    accent: [224, 133, 66],
  },
  {
    file: 'porches-social.png',
    kicker: 'PORCH BUILDER',
    title: 'Screened + Open Porches',
    subtitle: 'Covered outdoor rooms for Loudoun, Fairfax and Prince William',
    accent: [84, 126, 176],
  },
  {
    file: 'open-porch-social.png',
    kicker: 'COVERED OUTDOOR ROOM',
    title: 'Open Porch Builder',
    subtitle: 'Rooflines, fans, lighting, permits and weather-ready shade',
    accent: [78, 132, 170],
  },
  {
    file: 'front-porch-social.png',
    kicker: 'CURB APPEAL',
    title: 'Front Porch Builder',
    subtitle: 'Porticos, wraparound entries, columns and structural design',
    accent: [191, 130, 62],
  },
  {
    file: 'deck-maintenance-social.png',
    kicker: 'PROTECT THE DECK',
    title: 'Deck Maintenance',
    subtitle: 'Cleaning, sanding, staining, sealing and seasonal inspections',
    accent: [72, 148, 112],
  },
  {
    file: 'deck-resurfacing-service-social.png',
    kicker: 'SERVICE PAGE',
    title: 'Premium Resurfacing',
    subtitle: 'Upgrade a sound frame with TimberTech, railings and lighting',
    accent: [122, 112, 184],
  },
  {
    file: 'about-loudoun-decks-social.png',
    kicker: 'TRUSTED LOCAL BUILDER',
    title: 'About Loudoun Decks',
    subtitle: 'Class A licensed, Trex Platinum, TimberTech certified',
    accent: [84, 126, 176],
  },
  {
    file: 'deck-building-process-social.png',
    kicker: '6 STEP PROCESS',
    title: 'Deck Building Process',
    subtitle: 'Consultation, design, permits, HOA, build and warranty',
    accent: [72, 148, 112],
  },
  {
    file: 'deck-warranty-labor-social.png',
    kicker: '2 YEAR WARRANTY',
    title: 'Labor Warranty',
    subtitle: 'Written workmanship coverage for decks and screened porches',
    accent: [122, 112, 184],
  },
  {
    file: 'why-choose-loudoun-decks-social.png',
    kicker: 'WHY CHOOSE US',
    title: 'Reputation Backed Builder',
    subtitle: 'Local crews, public reviews, certifications and clean process',
    accent: [224, 133, 66],
  },
  {
    file: 'certifications-licenses-social.png',
    kicker: 'VERIFY CREDENTIALS',
    title: 'Certifications + Licenses',
    subtitle: 'Virginia Class A, insured, Trex Pro and BBB profile links',
    accent: [78, 132, 170],
  },
  {
    file: 'contact-loudoun-decks-social.png',
    kicker: 'FREE ESTIMATE',
    title: 'Contact Loudoun Decks',
    subtitle: 'Call, request a written estimate and plan your NoVA deck',
    accent: [191, 130, 62],
  },
  {
    file: 'reviews-social.png',
    kicker: 'PUBLIC PROFILES',
    title: 'Loudoun Decks Reviews',
    subtitle: 'Verify Google, Yelp, BBB and public reputation signals',
    accent: [72, 148, 112],
  },
  {
    file: 'social-profiles-social.png',
    kicker: 'FOLLOW + VERIFY',
    title: 'LDN Decks Online',
    subtitle: 'Social profiles, project updates, reviews and local proof',
    accent: [52, 152, 166],
  },
  {
    file: 'team-social.png',
    kicker: 'OWNER LED CREW',
    title: 'Meet the Team',
    subtitle: 'Nick Zugrav, sales support and master technician crew',
    accent: [174, 114, 76],
  },
  {
    file: 'bbb-accredited-deck-builder-social.png',
    kicker: 'BBB PROFILE',
    title: 'BBB Accredited Builder',
    subtitle: 'Verify accreditation, licensing references and service areas',
    accent: [122, 112, 184],
  },
  {
    file: 'areas-we-serve-social.png',
    kicker: '70+ SERVICE AREAS',
    title: 'Areas We Serve',
    subtitle: 'Loudoun, Fairfax, Prince William, Arlington and Stafford',
    accent: [84, 126, 176],
  },
  {
    file: 'deck-builder-near-you-social.png',
    kicker: 'NORTHERN VIRGINIA',
    title: 'Deck Builder Near You',
    subtitle: 'County hubs, city pages, permits, HOA and local planning',
    accent: [72, 148, 112],
  },
  {
    file: 'loudoun-county-deck-builder-hub-social.png',
    kicker: 'LOUDOUN COUNTY',
    title: 'Deck Builder Hub',
    subtitle: 'Ashburn, Leesburg, Sterling, Brambleton and South Riding',
    accent: [224, 133, 66],
  },
  {
    file: 'fairfax-county-deck-builder-hub-social.png',
    kicker: 'FAIRFAX COUNTY',
    title: 'Deck Builder Hub',
    subtitle: 'Reston, McLean, Vienna, Herndon, Fairfax and Falls Church',
    accent: [78, 132, 170],
  },
  {
    file: 'prince-william-county-deck-builder-hub-social.png',
    kicker: 'PRINCE WILLIAM',
    title: 'Deck Builder Hub',
    subtitle: 'Manassas, Woodbridge, Haymarket, Gainesville and Bristow',
    accent: [191, 130, 62],
  },
  {
    file: 'arlington-county-deck-builder-hub-social.png',
    kicker: 'ARLINGTON COUNTY',
    title: 'Deck Builder Hub',
    subtitle: 'Arlington, Ballston, Clarendon, Rosslyn and Crystal City',
    accent: [122, 112, 184],
  },
  {
    file: 'stafford-county-deck-builder-hub-social.png',
    kicker: 'STAFFORD COUNTY',
    title: 'Deck Builder Hub',
    subtitle: 'Stafford, Aquia Harbour, Falmouth and Garrisonville',
    accent: [174, 114, 76],
  },
  {
    file: 'blog-social.png',
    kicker: 'EXPERT TIPS',
    title: 'Deck Building Blog',
    subtitle: 'Materials, costs, maintenance, design and outdoor living',
    accent: [52, 152, 166],
  },
  {
    file: 'education-hub-social.png',
    kicker: 'HOMEOWNER EDUCATION',
    title: 'Deck Education Center',
    subtitle: 'Safety, permits, materials, costs, HOA and project planning',
    accent: [72, 148, 112],
  },
  {
    file: 'trades-scholarship-social.png',
    kicker: 'SKILLED TRADES',
    title: 'LDN Decks Scholarship',
    subtitle: 'Supporting future builders, carpenters and trade leaders',
    accent: [224, 133, 66],
  },
  {
    file: 'deck-builder-arlington-va-social.png',
    kicker: 'ARLINGTON VA',
    title: 'Premium Deck Builder',
    subtitle: 'Ballston, Clarendon, Rosslyn, permits and rooftop planning',
    accent: [122, 112, 184],
  },
  {
    file: 'deck-builder-centreville-va-social.png',
    kicker: 'CENTREVILLE VA',
    title: 'Home Base Deck Builder',
    subtitle: 'Showroom, Trex samples, permits, HOA and local service',
    accent: [224, 133, 66],
  },
  {
    file: 'deck-builder-great-falls-va-social.png',
    kicker: 'GREAT FALLS VA',
    title: 'Estate Deck Builder',
    subtitle: 'Premium materials, wooded lots, privacy and outdoor living',
    accent: [84, 126, 176],
  },
  {
    file: 'deck-builder-stafford-va-social.png',
    kicker: 'STAFFORD VA',
    title: 'Deck Builder',
    subtitle: 'Composite decks, porches, permits and outdoor upgrades',
    accent: [72, 148, 112],
  },
  {
    file: 'deck-builder-sterling-va-social.png',
    kicker: 'STERLING VA',
    title: 'Deck Builder',
    subtitle: 'Potomac Falls, Countryside, composite decks and repairs',
    accent: [78, 132, 170],
  },
  {
    file: 'deck-builder-tysons-va-social.png',
    kicker: 'TYSONS VA',
    title: 'Urban Deck Builder',
    subtitle: 'Townhomes, rooftops, premium railings and compact spaces',
    accent: [174, 114, 76],
  },
  {
    file: 'deck-cost-12x20-northern-virginia-social.png',
    kicker: '240 SQ FT COST',
    title: '12x20 Deck Cost',
    subtitle: 'Wood, composite, PVC, permits, stairs and railing budgets',
    accent: [191, 130, 62],
  },
  {
    file: 'deck-cost-16x20-northern-virginia-social.png',
    kicker: '320 SQ FT COST',
    title: '16x20 Deck Cost',
    subtitle: 'Pressure-treated, Trex, TimberTech and monthly payment ranges',
    accent: [72, 148, 112],
  },
  {
    file: 'deck-cost-20x20-northern-virginia-social.png',
    kicker: '400 SQ FT COST',
    title: '20x20 Deck Cost',
    subtitle: 'Large-deck pricing, structure, railings, stairs and permits',
    accent: [52, 152, 166],
  },
  {
    file: 'best-time-to-build-deck-social.png',
    kicker: 'SEASONAL PLANNING',
    title: 'Best Time to Build',
    subtitle: 'Permits, weather, contractor schedules and spring readiness',
    accent: [122, 112, 184],
  },
  {
    file: 'ashburn-village-hoa-deck-rules-social.png',
    kicker: 'ASHBURN VILLAGE',
    title: 'HOA Deck Rules',
    subtitle: 'Architectural review, Loudoun permits and approval planning',
    accent: [72, 148, 112],
  },
  {
    file: 'belmont-country-club-hoa-deck-rules-social.png',
    kicker: 'BELMONT HOA',
    title: 'Estate Deck Approval',
    subtitle: 'ARC review, material samples, permits and premium deck planning',
    accent: [122, 112, 184],
  },
  {
    file: 'brambleton-hoa-deck-rules-social.png',
    kicker: 'BRAMBLETON HOA',
    title: 'Deck Approval Guide',
    subtitle: 'Architectural review, permits, timelines and HOA-ready plans',
    accent: [224, 133, 66],
  },
  {
    file: 'broadlands-hoa-deck-rules-social.png',
    kicker: 'BROADLANDS HOA',
    title: 'Deck Rules Guide',
    subtitle: 'Submission packets, Loudoun permits and approval coordination',
    accent: [78, 132, 170],
  },
  {
    file: 'hoa-deck-rules-northern-virginia-social.png',
    kicker: 'NORTHERN VIRGINIA HOA',
    title: 'Deck Rules Guide',
    subtitle: 'Approval packets, common restrictions, permits and timelines',
    accent: [191, 130, 62],
  },
  {
    file: 'lansdowne-hoa-deck-rules-social.png',
    kicker: 'LANSDOWNE HOA',
    title: 'Deck Approval Guide',
    subtitle: 'Conservancy review, material standards and Loudoun permits',
    accent: [84, 126, 176],
  },
  {
    file: 'one-loudoun-hoa-deck-rules-social.png',
    kicker: 'ONE LOUDOUN HOA',
    title: 'Modern Deck Approval',
    subtitle: 'Townhome and estate review, design standards and permits',
    accent: [52, 152, 166],
  },
  {
    file: 'stone-ridge-hoa-deck-rules-social.png',
    kicker: 'STONE RIDGE HOA',
    title: 'Deck Rules Guide',
    subtitle: 'Family-community review, timelines, permits and plan packets',
    accent: [72, 148, 112],
  },
  {
    file: 'sully-station-hoa-deck-rules-social.png',
    kicker: 'SULLY STATION HOA',
    title: 'Deck Approval Guide',
    subtitle: 'Fairfax permits, ARC review, materials and schedule planning',
    accent: [174, 114, 76],
  },
  {
    file: 'virginia-run-hoa-deck-rules-social.png',
    kicker: 'VIRGINIA RUN HOA',
    title: 'Estate Deck Rules',
    subtitle: 'In-person ARC review, engineered drawings and premium decks',
    accent: [122, 112, 184],
  },
  {
    file: 'cable-railing-decks-northern-virginia-social.png',
    kicker: 'RAILING UPGRADE',
    title: 'Cable Railing Guide',
    subtitle: 'Costs, code, HOA review and modern deck visibility',
    accent: [52, 152, 166],
  },
  {
    file: 'covered-deck-builder-northern-virginia-social.png',
    kicker: 'COVERED OUTDOOR LIVING',
    title: 'Covered Deck Builder',
    subtitle: 'Rooflines, permits, fans, lighting and premium finish details',
    accent: [84, 126, 176],
  },
  {
    file: 'deck-enclosure-ideas-northern-virginia-social.png',
    kicker: '3 SEASON PLANNING',
    title: 'Deck Enclosure Ideas',
    subtitle: 'Screens, EZE-Breeze, sunrooms and outdoor season extension',
    accent: [122, 112, 184],
  },
  {
    file: 'deck-footing-code-northern-virginia-social.png',
    kicker: 'CODE + STRUCTURE',
    title: 'Deck Footing Guide',
    subtitle: 'Frost depth, ledger attachment, spans, guardrails and inspections',
    accent: [191, 130, 62],
  },
  {
    file: 'deck-lighting-ideas-northern-virginia-social.png',
    kicker: 'EVENING DECKS',
    title: 'Deck Lighting Ideas',
    subtitle: 'Post caps, stair risers, rails, recessed lights and costs',
    accent: [224, 133, 66],
  },
  {
    file: 'deck-maintenance-checklist-virginia-social.png',
    kicker: 'SEASONAL CARE',
    title: 'Deck Maintenance Checklist',
    subtitle: 'Spring cleaning, summer checks, fall prep and winter protection',
    accent: [72, 148, 112],
  },
  {
    file: 'deck-railing-options-northern-virginia-social.png',
    kicker: 'RAILING OPTIONS',
    title: 'Deck Railing Guide',
    subtitle: 'Composite, aluminum, cable, glass, wood and code planning',
    accent: [78, 132, 170],
  },
  {
    file: 'deck-remodeling-social.png',
    kicker: 'MODERN UPGRADES',
    title: 'Deck Remodeling',
    subtitle: 'Railings, lighting, privacy, built-ins and structural checks',
    accent: [174, 114, 76],
  },
  {
    file: 'deck-resurfacing-vs-replacement-social.png',
    kicker: 'REPAIR DECISION',
    title: 'Resurface or Replace',
    subtitle: 'Frame inspection, cost ranges and Northern Virginia examples',
    accent: [72, 148, 112],
  },
  {
    file: 'deck-safety-inspection-checklist-social.png',
    kicker: 'SAFETY FIRST',
    title: 'Deck Safety Checklist',
    subtitle: 'Rot, ledger, railing, stairs, posts and code compliance',
    accent: [212, 85, 72],
  },
  {
    file: 'deck-staining-northern-virginia-social.png',
    kicker: 'WOOD DECK CARE',
    title: 'Deck Staining',
    subtitle: 'Virginia humidity, UV, freeze-thaw protection and pricing',
    accent: [191, 130, 62],
  },
  {
    file: 'deck-vs-patio-which-is-right-social.png',
    kicker: 'OUTDOOR DECISION',
    title: 'Deck vs Patio',
    subtitle: 'Cost, maintenance, ROI, terrain and best-use comparison',
    accent: [174, 114, 76],
  },
  {
    file: 'does-a-deck-add-value-social.png',
    kicker: 'ROI GUIDE',
    title: 'Does a Deck Add Value',
    subtitle: 'Resale impact, buyer signals and Northern Virginia examples',
    accent: [72, 148, 112],
  },
  {
    file: 'eco-friendly-composite-decking-social.png',
    kicker: 'SUSTAINABLE MATERIALS',
    title: 'Eco Friendly Decking',
    subtitle: 'Recycled composite boards, durability and low-maintenance choices',
    accent: [52, 152, 166],
  },
  {
    file: 'houzz-deck-projects-social.png',
    kicker: 'PROJECT PROOF',
    title: 'LDN Decks on Houzz',
    subtitle: 'Custom decks, porches, patios and outdoor living inspiration',
    accent: [122, 112, 184],
  },
  {
    file: 'composite-deck-lifespan-virginia-social.png',
    kicker: 'LIFESPAN GUIDE',
    title: 'How Long Decks Last',
    subtitle: 'Trex, TimberTech, AZEK and Virginia replacement signals',
    accent: [78, 132, 170],
  },
  {
    file: 'deck-build-timeline-northern-virginia-social.png',
    kicker: 'PROJECT TIMELINE',
    title: 'How Long to Build',
    subtitle: 'Consultation, permits, HOA review, construction and inspections',
    accent: [224, 133, 66],
  },
  {
    file: 'deck-prices-tariffs-2026-social.png',
    kicker: '2026 PRICE SIGNALS',
    title: 'Tariffs and Deck Prices',
    subtitle: 'Material impacts, composite pricing and ways to control cost',
    accent: [212, 85, 72],
  },
  {
    file: 'choose-deck-builder-northern-virginia-social.png',
    kicker: 'HIRING GUIDE',
    title: 'Choose a Deck Builder',
    subtitle: 'License checks, questions to ask, red flags and proof signals',
    accent: [72, 148, 112],
  },
  {
    file: 'northern-virginia-deck-building-guide-social.png',
    kicker: 'COMPLETE 2026 GUIDE',
    title: 'Build a Deck in NoVA',
    subtitle: 'Costs, permits, materials, HOA, timeline and contractor choice',
    accent: [84, 126, 176],
  },
  {
    file: 'concrete-washing-service-social.png',
    kicker: 'EXTERIOR CLEANING',
    title: 'Concrete Washing',
    subtitle: 'Driveways, patios, walkways, algae, oil and surface prep',
    accent: [84, 126, 176],
  },
  {
    file: 'deck-inspection-service-social.png',
    kicker: 'SAFETY AUDIT',
    title: 'Deck Inspection',
    subtitle: 'Rot, settling, ledger, railings, stairs and repair next steps',
    accent: [212, 85, 72],
  },
  {
    file: 'deck-replacement-service-social.png',
    kicker: 'FULL REBUILD',
    title: 'Deck Replacement',
    subtitle: 'Composite rebuilds, permits, HOA, timeline and clean jobsite',
    accent: [72, 148, 112],
  },
  {
    file: 'deck-stair-lighting-service-social.png',
    kicker: 'LED STAIR SAFETY',
    title: 'Deck Stair Lighting',
    subtitle: 'Recessed LEDs, rail lighting, post caps and smart controls',
    accent: [224, 133, 66],
  },
  {
    file: 'deck-washing-service-social.png',
    kicker: 'SAFE SOFT WASH',
    title: 'Deck Washing',
    subtitle: 'Wood and composite cleaning, algae, mold and surface prep',
    accent: [52, 152, 166],
  },
  {
    file: 'entry-doors-service-social.png',
    kicker: 'CURB APPEAL',
    title: 'Entry Door Installation',
    subtitle: 'Security, energy efficiency, full-frame replacement and trim',
    accent: [174, 114, 76],
  },
  {
    file: 'fence-installation-service-social.png',
    kicker: 'BOUNDARY + PRIVACY',
    title: 'Fence Installation',
    subtitle: 'Wood, vinyl, aluminum, HOA compliance and outdoor design',
    accent: [72, 148, 112],
  },
  {
    file: 'fence-cleaning-service-social.png',
    kicker: 'FENCE RESTORATION',
    title: 'Fence Cleaning',
    subtitle: 'Wood and composite fence cleaning, mildew and gray weathering',
    accent: [78, 132, 170],
  },
  {
    file: 'fire-pits-service-social.png',
    kicker: 'YEAR ROUND OUTDOORS',
    title: 'Fire Pit Installation',
    subtitle: 'Gas, wood-burning, stone fire pits and backyard entertainment',
    accent: [191, 130, 62],
  },
  {
    file: 'house-siding-washing-service-social.png',
    kicker: 'CURB APPEAL CLEANING',
    title: 'House Siding Washing',
    subtitle: 'Vinyl, fiber cement, mold, algae and soft-wash protection',
    accent: [122, 112, 184],
  },
  {
    file: 'outdoor-washing-service-social.png',
    kicker: 'OUTDOOR CLEANING',
    title: 'Outdoor Washing',
    subtitle: 'Decks, patios, fences, structures and safe surface cleaning',
    accent: [52, 152, 166],
  },
  {
    file: 'trex-clam-shell-service-social.png',
    kicker: 'TREX RESURFACING',
    title: 'Trex Clam Shell',
    subtitle: 'Frame inspection, joist protection and modern composite finish',
    accent: [78, 132, 170],
  },
  {
    file: 'trex-railings-service-social.png',
    kicker: 'PREMIUM RAILINGS',
    title: 'Trex Railings',
    subtitle: 'Cocktail tops, modern railing systems and deck upgrades',
    accent: [72, 148, 112],
  },
  {
    file: 'under-deck-patios-service-social.png',
    kicker: 'DRY SPACE BELOW',
    title: 'Under Deck Patios',
    subtitle: 'Waterproof ceilings, drainage, lighting and finished patios',
    accent: [84, 126, 176],
  },
  {
    file: 'windows-service-social.png',
    kicker: 'ENERGY + COMFORT',
    title: 'Window Replacement',
    subtitle: 'Weather sealing, glass technology, curb appeal and comfort',
    accent: [122, 112, 184],
  },
  {
    file: 'louvered-pergola-northern-virginia-social.png',
    kicker: 'ADJUSTABLE SHADE',
    title: 'Louvered Pergola',
    subtitle: 'Motorized shade, deck-mounted structures and patio comfort',
    accent: [174, 114, 76],
  },
  {
    file: 'multi-level-deck-builder-northern-virginia-social.png',
    kicker: 'SLOPED LOT SOLUTIONS',
    title: 'Multi Level Decks',
    subtitle: 'Walkout basements, zones, stairs and premium composite builds',
    accent: [72, 148, 112],
  },
  {
    file: 'outdoor-kitchen-builder-northern-virginia-social.png',
    kicker: 'BACKYARD KITCHENS',
    title: 'Outdoor Kitchen Builder',
    subtitle: 'Grill islands, bars, pizza ovens, lighting and permits',
    accent: [191, 130, 62],
  },
  {
    file: 'paver-vs-flagstone-patio-northern-virginia-social.png',
    kicker: 'PATIO MATERIALS',
    title: 'Paver vs Flagstone',
    subtitle: 'Cost, durability, freeze-thaw performance and maintenance',
    accent: [84, 126, 176],
  },
  {
    file: 'pet-friendly-deck-design-social.png',
    kicker: 'FAMILY FRIENDLY DESIGN',
    title: 'Pet Friendly Decks',
    subtitle: 'Composite surfaces, safe railings, gates, shade and wash zones',
    accent: [72, 148, 112],
  },
  {
    file: 'ldn-decks-reviews-yelp-social.png',
    kicker: 'REVIEW PROOF',
    title: 'LDN Decks Reviews',
    subtitle: 'Yelp, customer trust, Trex decks and Northern Virginia projects',
    accent: [212, 85, 72],
  },
  {
    file: 'nova-deck-permit-checklist-social.png',
    kicker: 'FREE CHECKLIST',
    title: 'Deck Permit Checklist',
    subtitle: 'Loudoun, Fairfax, Prince William, Arlington and HOA review',
    accent: [191, 130, 62],
  },
  {
    file: 'press-media-kit-social.png',
    kicker: 'MEDIA KIT',
    title: 'Press Resources',
    subtitle: 'Company facts, logos, media contact and brand information',
    accent: [122, 112, 184],
  },
  {
    file: 'referral-partners-social.png',
    kicker: 'PARTNER NETWORK',
    title: 'Referral Partners',
    subtitle: 'Deck, porch, patio and outdoor living project introductions',
    accent: [72, 148, 112],
  },
  {
    file: 'leave-review-social.png',
    kicker: 'CUSTOMER FEEDBACK',
    title: 'Leave a Review',
    subtitle: 'Google, Yelp, BBB and homeowner confidence signals',
    accent: [224, 133, 66],
  },
  {
    file: 'pool-deck-builder-northern-virginia-social.png',
    kicker: 'POOL OUTDOOR LIVING',
    title: 'Pool Deck Builder',
    subtitle: 'Composite, paver, stamped concrete and code-compliant surrounds',
    accent: [52, 152, 166],
  },
  {
    file: 'porch-repair-vs-replacement-social.png',
    kicker: 'PORCH DECISION',
    title: 'Repair or Replace',
    subtitle: 'Inspection, cost ranges, structure and Northern Virginia examples',
    accent: [174, 114, 76],
  },
  {
    file: 'porch-vs-deck-social.png',
    kicker: 'OUTDOOR ROI',
    title: 'Porch vs Deck',
    subtitle: 'Cost, usable months, maintenance, resale and comfort comparison',
    accent: [84, 126, 176],
  },
  {
    file: 'pressure-washing-deck-northern-virginia-social.png',
    kicker: 'DECK CLEANING',
    title: 'Deck Pressure Washing',
    subtitle: 'Safe PSI, mold, mildew, oxidation, wood and composite decks',
    accent: [52, 152, 166],
  },
  {
    file: 'questions-before-building-deck-social.png',
    kicker: 'PLANNING CHECKLIST',
    title: '20 Questions First',
    subtitle: 'Budget, materials, permits, HOA, timeline and builder choice',
    accent: [72, 148, 112],
  },
  {
    file: 'rooftop-deck-builder-northern-virginia-social.png',
    kicker: 'URBAN OUTDOOR LIVING',
    title: 'Rooftop Deck Builder',
    subtitle: 'Townhomes, condos, pedestal systems and association approval',
    accent: [122, 112, 184],
  },
  {
    file: 'screened-porch-cost-northern-virginia-social.png',
    kicker: '2026 PORCH COST',
    title: 'Screened Porch Cost',
    subtitle: 'Price tables, EZE-Breeze options and project examples',
    accent: [90, 142, 102],
  },
  {
    file: 'showcase-gallery-social.png',
    kicker: 'PROJECT GALLERY',
    title: 'Deck Showcase',
    subtitle: 'Custom decks, porches, patios and outdoor living projects',
    accent: [84, 126, 176],
  },
  {
    file: 'stamped-concrete-patio-northern-virginia-social.png',
    kicker: 'PATIO FINISHES',
    title: 'Stamped Concrete Patio',
    subtitle: 'Slate, flagstone, brick, wood plank and freeze-thaw realities',
    accent: [174, 114, 76],
  },
  {
    file: 'three-season-room-northern-virginia-social.png',
    kicker: '9-10 MONTH COMFORT',
    title: 'Three Season Rooms',
    subtitle: 'Eze-Breeze windows, conversions, decks and screened porches',
    accent: [72, 148, 112],
  },
  {
    file: 'deck-planning-tools-social.png',
    kicker: 'FREE PLANNING TOOLS',
    title: 'Deck Tools',
    subtitle: 'Footings, beams, joists, stairs, costs and payment calculators',
    accent: [52, 152, 166],
  },
  {
    file: 'trex-performance-products-social.png',
    kicker: 'TREX PRODUCTS',
    title: 'Trex Performance',
    subtitle: 'Composite decking, railings, durability and outdoor living systems',
    accent: [78, 132, 170],
  },
  {
    file: 'under-deck-ceiling-ideas-social.png',
    kicker: 'DRY SPACE IDEAS',
    title: 'Under Deck Ceilings',
    subtitle: 'Drainage systems, ceiling panels, lighting and finished patios',
    accent: [84, 126, 176],
  },
  {
    file: 'what-size-deck-should-i-build-social.png',
    kicker: 'SIZE PLANNING',
    title: 'What Size Deck',
    subtitle: 'Couples, families, entertaining, budgets and NoVA lot sizes',
    accent: [191, 130, 62],
  },
  {
    file: 'winterize-deck-northern-virginia-social.png',
    kicker: 'FREEZE THAW CARE',
    title: 'Winterize Your Deck',
    subtitle: 'Wood, composite, cleaning, inspection and winter protection',
    accent: [122, 112, 184],
  },
  {
    file: 'near-you-city-deck-builder-social.png',
    kicker: 'LOCAL SERVICE AREA',
    title: 'Deck Builder Near You',
    subtitle: 'City pages, county context, permits, HOA and custom outdoor living',
    accent: [72, 148, 112],
  },
  {
    file: 'privacy-policy-social.png',
    kicker: 'PRIVACY + TRUST',
    title: 'Privacy Policy',
    subtitle: 'How Loudoun Decks handles project inquiries and site privacy',
    accent: [122, 112, 184],
  },
  {
    file: 'terms-of-service-social.png',
    kicker: 'SERVICE TERMS',
    title: 'Terms of Service',
    subtitle: 'Website use, service terms and project agreement context',
    accent: [84, 126, 176],
  },
  {
    file: 'thank-you-social.png',
    kicker: 'LEAD CONFIRMATION',
    title: 'Thank You',
    subtitle: 'Estimate request received, project review and next steps',
    accent: [224, 133, 66],
  },
  {
    file: 'wood-decks-social.png',
    kicker: 'WOOD DECK BUILDER',
    title: 'Cedar + Hardwood Decks',
    subtitle: 'Pressure-treated, cedar, Ipe, maintenance and Virginia lifespan',
    accent: [191, 130, 62],
  },
  {
    file: 'deck-cost-calculator-social.png',
    kicker: 'FREE COST TOOL',
    title: 'Deck Price Calculator',
    subtitle: 'Northern Virginia 2026 pricing by size, material and add-ons',
    accent: [224, 133, 66],
  },
  {
    file: 'patio-contractor-northern-virginia-social.png',
    kicker: 'PATIO + HARDSCAPE',
    title: 'Patio Contractor',
    subtitle: 'Paver, stone, stamped concrete and outdoor living planning',
    accent: [174, 114, 76],
  },
  {
    file: 'screened-porch-builder-northern-virginia-social.png',
    kicker: 'SCREENED PORCHES',
    title: 'Screened Porch Builder',
    subtitle: 'Custom porch design for Northern Virginia outdoor living',
    accent: [90, 142, 102],
  },
  {
    file: 'deck-cost-estimator-northern-virginia-social.png',
    kicker: 'FREE PLANNING TOOL',
    title: 'Deck Cost Estimator',
    subtitle: 'Northern Virginia pricing by size, material, permits and add-ons',
    accent: [224, 133, 66],
  },
  {
    file: '400-square-foot-deck-cost-northern-virginia-social.png',
    kicker: '400 SQ FT COST',
    title: 'Deck Cost Guide',
    subtitle: 'Trex, TimberTech, permits and realistic Northern Virginia pricing',
    accent: [224, 133, 66],
  },
  {
    file: '600-square-foot-deck-cost-northern-virginia-social.png',
    kicker: '600 SQ FT COST',
    title: 'Deck Cost Guide',
    subtitle: 'Two-zone and multi-level deck pricing for Northern Virginia homes',
    accent: [203, 122, 76],
  },
  {
    file: '800-square-foot-deck-cost-northern-virginia-social.png',
    kicker: '800 SQ FT COST',
    title: 'Estate Deck Budget',
    subtitle: 'Large deck pricing, engineering, outdoor kitchens and permits',
    accent: [172, 104, 78],
  },
  {
    file: 'deck-payment-estimator-social.png',
    kicker: 'MONTHLY PAYMENT',
    title: 'Deck Payment Estimator',
    subtitle: 'Model project amount, APR and term before your written estimate',
    accent: [92, 120, 196],
  },
  {
    file: 'monthly-payment-composite-deck-northern-virginia-social.png',
    kicker: 'COMPOSITE PAYMENT',
    title: 'Monthly Deck Payment',
    subtitle: 'Composite deck payment examples for Northern Virginia budgets',
    accent: [78, 132, 170],
  },
  {
    file: 'trex-deck-cost-monthly-payment-social.png',
    kicker: 'TREX BUDGET',
    title: 'Trex Monthly Payment',
    subtitle: 'Trex deck cost by tier with realistic monthly payment examples',
    accent: [52, 152, 166],
  },
  {
    file: 'deck-load-calculator-virginia-social.png',
    kicker: 'STRUCTURAL PLANNING',
    title: 'Deck Load Calculator',
    subtitle: 'Estimate post loads, beam loads and heavy upgrade warnings',
    accent: [78, 132, 170],
  },
  {
    file: 'deck-stair-calculator-social.png',
    kicker: 'STAIR SAFETY',
    title: 'Deck Stair Calculator',
    subtitle: 'Rise, run, tread depth and inspection planning for Virginia decks',
    accent: [172, 104, 78],
  },
];

const FONT = {
  A: ['01110', '10001', '10001', '11111', '10001', '10001', '10001'],
  B: ['11110', '10001', '10001', '11110', '10001', '10001', '11110'],
  C: ['01111', '10000', '10000', '10000', '10000', '10000', '01111'],
  D: ['11110', '10001', '10001', '10001', '10001', '10001', '11110'],
  E: ['11111', '10000', '10000', '11110', '10000', '10000', '11111'],
  F: ['11111', '10000', '10000', '11110', '10000', '10000', '10000'],
  G: ['01111', '10000', '10000', '10111', '10001', '10001', '01111'],
  H: ['10001', '10001', '10001', '11111', '10001', '10001', '10001'],
  I: ['11111', '00100', '00100', '00100', '00100', '00100', '11111'],
  J: ['00111', '00010', '00010', '00010', '10010', '10010', '01100'],
  K: ['10001', '10010', '10100', '11000', '10100', '10010', '10001'],
  L: ['10000', '10000', '10000', '10000', '10000', '10000', '11111'],
  M: ['10001', '11011', '10101', '10101', '10001', '10001', '10001'],
  N: ['10001', '11001', '10101', '10011', '10001', '10001', '10001'],
  O: ['01110', '10001', '10001', '10001', '10001', '10001', '01110'],
  P: ['11110', '10001', '10001', '11110', '10000', '10000', '10000'],
  Q: ['01110', '10001', '10001', '10001', '10101', '10010', '01101'],
  R: ['11110', '10001', '10001', '11110', '10100', '10010', '10001'],
  S: ['01111', '10000', '10000', '01110', '00001', '00001', '11110'],
  T: ['11111', '00100', '00100', '00100', '00100', '00100', '00100'],
  U: ['10001', '10001', '10001', '10001', '10001', '10001', '01110'],
  V: ['10001', '10001', '10001', '10001', '10001', '01010', '00100'],
  W: ['10001', '10001', '10001', '10101', '10101', '11011', '10001'],
  X: ['10001', '10001', '01010', '00100', '01010', '10001', '10001'],
  Y: ['10001', '10001', '01010', '00100', '00100', '00100', '00100'],
  Z: ['11111', '00001', '00010', '00100', '01000', '10000', '11111'],
  0: ['01110', '10001', '10011', '10101', '11001', '10001', '01110'],
  1: ['00100', '01100', '00100', '00100', '00100', '00100', '01110'],
  2: ['01110', '10001', '00001', '00010', '00100', '01000', '11111'],
  3: ['11110', '00001', '00001', '01110', '00001', '00001', '11110'],
  4: ['00010', '00110', '01010', '10010', '11111', '00010', '00010'],
  5: ['11111', '10000', '10000', '11110', '00001', '00001', '11110'],
  6: ['01110', '10000', '10000', '11110', '10001', '10001', '01110'],
  7: ['11111', '00001', '00010', '00100', '01000', '01000', '01000'],
  8: ['01110', '10001', '10001', '01110', '10001', '10001', '01110'],
  9: ['01110', '10001', '10001', '01111', '00001', '00001', '01110'],
  '&': ['01100', '10010', '10100', '01000', '10101', '10010', '01101'],
  '+': ['00000', '00100', '00100', '11111', '00100', '00100', '00000'],
  '-': ['00000', '00000', '00000', '11111', '00000', '00000', '00000'],
  '/': ['00001', '00010', '00010', '00100', '01000', '01000', '10000'],
  '.': ['00000', '00000', '00000', '00000', '00000', '01100', '01100'],
  ',': ['00000', '00000', '00000', '00000', '01100', '00100', '01000'],
  ':': ['00000', '01100', '01100', '00000', '01100', '01100', '00000'],
  ' ': ['00000', '00000', '00000', '00000', '00000', '00000', '00000'],
};

const crcTable = new Uint32Array(256).map((_, n) => {
  let c = n;
  for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});

function crc32(buffer) {
  let c = 0xffffffff;
  for (const byte of buffer) c = crcTable[(c ^ byte) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data = Buffer.alloc(0)) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])));
  return Buffer.concat([length, typeBuffer, data, crc]);
}

function createCanvas() {
  return Buffer.alloc(WIDTH * HEIGHT * 3);
}

function setPixel(canvas, x, y, color) {
  if (x < 0 || y < 0 || x >= WIDTH || y >= HEIGHT) return;
  const index = (y * WIDTH + x) * 3;
  canvas[index] = color[0];
  canvas[index + 1] = color[1];
  canvas[index + 2] = color[2];
}

function fillRect(canvas, x, y, width, height, color) {
  for (let yy = y; yy < y + height; yy += 1) {
    for (let xx = x; xx < x + width; xx += 1) setPixel(canvas, xx, yy, color);
  }
}

function blend(a, b, t) {
  return a.map((v, i) => Math.round(v + (b[i] - v) * t));
}

function drawBackground(canvas, accent) {
  const darkA = [19, 27, 35];
  const darkB = [43, 50, 58];
  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const t = (x / WIDTH) * 0.7 + (y / HEIGHT) * 0.3;
      setPixel(canvas, x, y, blend(darkA, darkB, t));
    }
  }
  fillRect(canvas, 0, 0, WIDTH, 18, accent);
  fillRect(canvas, 80, 510, 1040, 6, accent);
  fillRect(canvas, 980, 0, 220, HEIGHT, blend(accent, [255, 255, 255], 0.12));
  fillRect(canvas, 1018, 80, 130, 16, blend(accent, [255, 255, 255], 0.4));
  fillRect(canvas, 1018, 125, 130, 16, blend(accent, [255, 255, 255], 0.25));
  fillRect(canvas, 1018, 170, 130, 16, blend(accent, [255, 255, 255], 0.16));
}

function drawChar(canvas, char, x, y, scale, color) {
  const glyph = FONT[char] || FONT[' '];
  for (let row = 0; row < glyph.length; row += 1) {
    for (let col = 0; col < glyph[row].length; col += 1) {
      if (glyph[row][col] === '1') {
        fillRect(canvas, x + col * scale, y + row * scale, scale, scale, color);
      }
    }
  }
}

function drawText(canvas, text, x, y, scale, color) {
  let cursor = x;
  for (const char of text.toUpperCase()) {
    drawChar(canvas, char, cursor, y, scale, color);
    cursor += char === ' ' ? scale * 4 : scale * 6;
  }
}

function textWidth(text, scale) {
  return [...text.toUpperCase()].reduce((sum, char) => sum + (char === ' ' ? scale * 4 : scale * 6), 0);
}

function wrapText(text, scale, maxWidth) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = '';
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (textWidth(next, scale) <= maxWidth || !line) {
      line = next;
    } else {
      lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function encodePng(canvas) {
  const raw = Buffer.alloc((WIDTH * 3 + 1) * HEIGHT);
  for (let y = 0; y < HEIGHT; y += 1) {
    const rowStart = y * (WIDTH * 3 + 1);
    raw[rowStart] = 0;
    canvas.copy(raw, rowStart + 1, y * WIDTH * 3, (y + 1) * WIDTH * 3);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(WIDTH, 0);
  ihdr.writeUInt32BE(HEIGHT, 4);
  ihdr[8] = 8;
  ihdr[9] = 2;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND'),
  ]);
}

function drawCard(card) {
  const canvas = createCanvas();
  drawBackground(canvas, card.accent);
  drawText(canvas, 'LDN DECKS', 80, 62, 9, [255, 255, 255]);
  drawText(canvas, card.kicker, 82, 150, 7, card.accent);

  const titleScale = textWidth(card.title, 12) > 1500 ? 10 : 12;
  const titleLineHeight = titleScale * 8;
  const titleLines = wrapText(card.title, titleScale, titleScale === 10 ? 870 : 810);
  titleLines.forEach((line, index) => {
    drawText(canvas, line, 80, 220 + index * titleLineHeight, titleScale, [255, 255, 255]);
  });

  const subtitleLines = wrapText(card.subtitle, 6, 680).slice(0, 2);
  const subtitleY = Math.min(448, 220 + titleLines.length * titleLineHeight + 34);
  subtitleLines.forEach((line, index) => {
    drawText(canvas, line, 82, subtitleY + index * 48, 6, [232, 226, 216]);
  });

  drawText(canvas, 'NORTHERN VIRGINIA', 80, 558, 6, [255, 255, 255]);
  return encodePng(canvas);
}

fs.mkdirSync(OUT_DIR, { recursive: true });
for (const card of CARDS) {
  const out = path.join(OUT_DIR, card.file);
  fs.writeFileSync(out, drawCard(card));
  console.log(`wrote ${path.relative(process.cwd(), out)}`);
}
