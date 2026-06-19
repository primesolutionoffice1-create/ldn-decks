import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('google-ads-import');
const premiumGeoOutDir = path.join(outDir, 'premium-geo-test');
const premiumGeoCampaignName = 'SRCH | Premium Geo | Arlington Alexandria McLean | Leads';

const campaigns = [
  {
    name: 'SRCH | Composite | 3 Counties | Calls',
    type: 'Search',
    budget: 90,
    bidStrategy: 'Maximize conversions',
    finalUrl: 'https://www.ldndecks.com/composite-decks/',
    adGroups: [
      {
        name: 'Trex',
        keywords: [
          '"trex deck builder"', '"trex deck contractor"', '"trex deck installer"', '"trex deck builder near me"',
          '"trex deck builder loudoun county"', '"trex deck builder fairfax county"', '"trex deck builder prince william county"',
          '[trex deck builder]', '[trex deck contractor]', '[trex deck installer]', '[trex deck builder near me]',
        ],
        rsas: [
          {
            headlines: ['Trex Platinum Partner', 'Trex Deck Builder', 'Call LDN Decks Today', 'Projects From $20k+', 'Permits & HOA Handled', '5.0 Rated Deck Builder', 'Loudoun Deck Builder', 'Fairfax Deck Builder', 'Composite Deck Experts', 'Written Deck Estimate'],
            descriptions: ['Build a low-maintenance Trex deck with a local 5.0 rated contractor.', 'We handle design, permits, HOA, materials, and installation for premium Trex decks.', 'Serving Loudoun, Fairfax, and Prince William. Call for a written estimate.', 'Upgrade from wood to a cleaner composite deck built for Northern Virginia weather.'],
          },
          {
            headlines: ['Custom Trex Decks', 'Trex Composite Decks', 'Built For NoVA Homes', 'Call For A Deck Quote', '25+ Year Materials', 'Hidden Fasteners', 'Premium Deck Builder', 'Decks Built Right', 'HOA Help Included', 'Schedule A Call'],
            descriptions: ['Get a custom Trex deck built with premium materials, clean details, and a clear process.', 'From layout to final walkthrough, our team manages the full composite deck project.', 'Call-first estimates for serious deck projects in Loudoun, Fairfax, and Prince William.', 'Replace annual staining with a low-maintenance outdoor space built to last.'],
          },
        ],
      },
      {
        name: 'TimberTech/AZEK',
        finalUrl: 'https://www.ldndecks.com/timbertech-decks/',
        keywords: [
          '"timbertech deck builder"', '"timbertech deck contractor"', '"azek deck builder"', '"azek deck contractor"',
          '"timbertech deck installer"', '"azek deck installer"', '"timbertech deck builder near me"', '"azek deck builder near me"',
          '[timbertech deck builder]', '[azek deck builder]', '[timbertech deck contractor]', '[azek deck contractor]',
        ],
        rsas: [
          {
            headlines: ['TimberTech Certified', 'AZEK Deck Builder', 'Premium Composite Decks', 'Projects From $20k+', 'Permits & HOA Handled', 'Call LDN Decks', '5.0 Rated Contractor', 'Fairfax Deck Builder', 'Loudoun Deck Builder', 'Written Deck Estimate'],
            descriptions: ['Build a premium TimberTech or AZEK deck with a Northern Virginia composite specialist.', 'Premium projects from $20k+. Permits, HOA, design, and installation handled.', 'Serving Loudoun, Fairfax, and Prince William County with high-end composite deck builds.', 'Call now to discuss materials, timeline, budget, and the right composite decking option.'],
          },
          {
            headlines: ['AZEK Composite Decks', 'TimberTech Deck Pros', 'Low-Maintenance Decks', 'Call For Pricing', 'Built In 2-4 Weeks', 'HOA Approval Help', 'Custom Deck Designs', 'Premium Rail Options', 'No Staining Needed', 'Schedule Estimate'],
            descriptions: ['Upgrade to capped composite or PVC decking with hidden fasteners and premium railings.', 'We help with layout, materials, county permits, and HOA submissions from start to finish.', 'Call LDN Decks for a serious deck replacement or new composite build estimate.', 'Designed for Northern Virginia heat, moisture, and long-term curb appeal.'],
          },
        ],
      },
      {
        name: 'Composite Deck Builder',
        keywords: [
          '"composite deck builder"', '"composite deck contractor"', '"composite deck installer"', '"composite decking contractor"',
          '"composite deck builder near me"', '"composite deck contractor near me"', '"composite deck builder loudoun county"',
          '"composite deck builder fairfax county"', '"composite deck builder prince william county"',
          '[composite deck builder]', '[composite deck contractor]', '[composite deck installer]', '[composite deck builder near me]',
        ],
        rsas: [
          {
            headlines: ['Composite Deck Builder', 'Custom Composite Decks', 'Projects From $20k+', 'Call LDN Decks Today', 'Permits & HOA Handled', '5.0 Rated Contractor', 'Built For NoVA Homes', 'Low Maintenance Decks', 'Written Deck Estimate', 'Trex & TimberTech'],
            descriptions: ['Custom composite decks for Loudoun, Fairfax, and Prince William County homeowners.', 'Premium projects from $20k+. Call for a realistic estimate and timeline.', 'We build low-maintenance decks with permits, HOA, framing, decking, and railings handled.', 'Trex, TimberTech, and AZEK options installed by a local 5.0 rated deck contractor.'],
          },
          {
            headlines: ['Build A Composite Deck', 'No Stain. No Sanding.', 'Northern VA Deck Pros', 'Call For Deck Quote', 'Premium Deck Contractor', 'Hidden Fastener Finish', '25-50 Year Warranties', 'Design Call Available', 'Decks From $20k+', 'HOA Help Included'],
            descriptions: ['Stop maintaining old wood. Build a composite deck designed for long-term NoVA performance.', 'We help homeowners choose the right brand, color, railing, lighting, and layout.', 'Call-first estimates for high-quality custom composite deck projects in three counties.', 'See before-and-after transformations and get a clear path from estimate to build.'],
          },
        ],
      },
      {
        name: 'Composite Deck Cost',
        finalUrl: 'https://www.ldndecks.com/composite-deck-cost-northern-virginia/',
        keywords: [
          '"composite deck cost"', '"composite deck cost near me"', '"cost to build composite deck"', '"composite deck price"',
          '"trex deck cost"', '"timbertech deck cost"', '"azek deck cost"', '"composite deck cost loudoun county"',
          '"composite deck cost fairfax county"', '[composite deck cost]', '[cost to build composite deck]',
          '[trex deck cost]', '[timbertech deck cost]', '[azek deck cost]',
        ],
        rsas: [
          {
            headlines: ['Composite Deck Cost', 'Projects From $20k+', 'Get A Real Deck Quote', 'Call LDN Decks', 'Trex Deck Pricing', 'TimberTech Pricing', 'Permits & HOA Handled', 'No Cheap Patch Work', 'Premium Deck Builder', 'Written Estimate'],
            descriptions: ['Composite deck pricing depends on size, framing, railing, stairs, and material tier.', 'Serious composite projects from $20k+. Call for a clear budget range before you build.', 'We quote full custom composite decks, not small repair-only jobs or DIY material kits.', 'Serving Loudoun, Fairfax, and Prince William County with premium deck estimates.'],
          },
          {
            headlines: ['What Will A Deck Cost?', 'Composite Deck Pricing', 'Call For Budget Range', 'Full Builds From $15k+', 'Trex & AZEK Options', 'Deck Estimate Today', 'Built Right The First Time', '5.0 Rated Deck Pros', 'HOA Help Included', 'No Staining Ever'],
            descriptions: ['Compare composite brands, railing options, and project scope with a local deck specialist.', 'Avoid surprise costs with clear scope, timeline, permits, and HOA details.', 'Call now if you are planning a serious composite deck project in Northern Virginia.', 'Premium materials, clean construction, and a realistic estimate before work begins.'],
          },
        ],
      },
    ],
  },
  {
    name: 'SRCH | Deck Builders | 3 Counties | Calls',
    type: 'Search',
    budget: 45,
    bidStrategy: 'Maximize conversions',
    finalUrl: 'https://www.ldndecks.com/deck-builders-loudoun/',
    adGroups: [
      {
        name: 'Deck Builders Near Me',
        keywords: [
          '"deck builders near me"', '"deck builder near me"', '"custom deck builders near me"',
          '"deck builders loudoun county"', '"deck builders fairfax county"', '"deck builders prince william county"',
          '"deck builder loudoun county"', '"deck builder fairfax county"', '"deck builder prince william county"',
          '[deck builders near me]', '[deck builder near me]', '[custom deck builders near me]',
          '[deck builders loudoun county]', '[deck builders fairfax county]', '[deck builders prince william county]',
        ],
        rsas: [
          {
            headlines: ['Deck Builders Near You', 'Custom Deck Builder', 'Call LDN Decks Today', 'Projects From $20k+', 'Permits & HOA Handled', '5.0 Rated Deck Builder', 'Loudoun Deck Builder', 'Fairfax Deck Builder', 'Trex Platinum Partner', 'Written Deck Estimate'],
            descriptions: ['Hire a local deck builder for serious custom projects in Northern Virginia.', 'Premium projects from $20k+. We handle design, permits, HOA, framing, decking, and rails.', 'Serving Loudoun, Fairfax, and Prince William County homeowners with premium decks.', 'Call LDN Decks for a clear estimate, timeline, and material recommendation.'],
          },
          {
            headlines: ['Build A Custom Deck', 'Northern VA Deck Pros', 'Licensed Deck Builder', 'Call For Deck Quote', 'Decks Built Right', 'Composite Deck Options', 'HOA Help Included', 'Design Call Available', 'Premium Deck Contractor', 'Schedule A Call'],
            descriptions: ['From first layout to final walkthrough, LDN Decks manages the full deck build.', 'Choose composite, railing, stairs, lighting, and details with a local specialist.', 'Call-first estimates for homeowners ready to plan a premium deck project.', 'Clean process, realistic pricing, and a deck designed for Northern Virginia homes.'],
          },
        ],
      },
      {
        name: 'Deck Contractors Near Me',
        keywords: [
          '"deck contractors near me"', '"deck contractor near me"', '"deck companies near me"', '"deck company near me"',
          '"deck construction near me"', '"deck installation near me"', '"deck contractor loudoun county"',
          '"deck contractor fairfax county"', '"deck contractor prince william county"', '[deck contractors near me]',
          '[deck contractor near me]', '[deck companies near me]', '[deck construction near me]',
          '[deck installation near me]', '[deck contractor loudoun county]',
        ],
        rsas: [
          {
            headlines: ['Deck Contractors Near You', 'Deck Installation Pros', 'Call LDN Decks Today', 'Projects From $20k+', 'Permits & HOA Handled', 'Licensed & Insured', '5.0 Rated Contractor', 'Northern VA Decks', 'Composite Deck Experts', 'Written Deck Estimate'],
            descriptions: ['Work with a local deck contractor for custom builds, replacements, and upgrades.', 'We manage permits, HOA coordination, materials, framing, decking, and railings.', 'Serving Loudoun, Fairfax, and Prince William County with premium deck projects.', 'Call for a realistic project scope, timeline, and budget before you build.'],
          },
          {
            headlines: ['Custom Deck Contractor', 'Deck Construction Pros', 'Call For Estimate', 'Decks From $20k+', 'Trex & TimberTech', 'Built For NoVA Homes', 'HOA Approval Help', 'Premium Deck Builder', 'Schedule Consultation', 'Written Deck Quote'],
            descriptions: ['LDN Decks builds custom outdoor spaces with durable composite options.', 'Use this campaign for high-intent contractor and installation searches only.', 'Talk through layout, materials, county permits, HOA details, and next steps.', 'Call today if you are ready to plan a serious deck project in Northern Virginia.'],
          },
        ],
      },
    ],
  },
  {
    name: 'SRCH | Replacement + Resurfacing | 3 Counties | Calls',
    type: 'Search',
    budget: 45,
    bidStrategy: 'Maximize conversions',
    finalUrl: 'https://www.ldndecks.com/services/deck-replacement/',
    adGroups: [
      {
        name: 'Deck Replacement',
        keywords: [
          '"deck replacement"', '"deck replacement contractor"', '"deck replacement company"', '"deck replacement near me"',
          '"replace old deck"', '"wood deck replacement"', '"deck rebuild contractor"', '"deck replacement loudoun county"',
          '"deck replacement fairfax county"', '"deck replacement prince william county"', '[deck replacement]',
          '[deck replacement contractor]', '[deck replacement near me]', '[replace old deck]', '[deck rebuild contractor]',
        ],
        rsas: [
          {
            headlines: ['Deck Replacement', 'Projects From $15k+', 'Replace Your Old Deck', 'Call LDN Decks Today', 'Permits & HOA Handled', 'Typical 2-4 Week Build', '5.0 Rated Contractor', 'Composite Upgrades', 'Structural Review', 'Northern VA Deck Pros'],
            descriptions: ['Replace an aging wood deck with a safer, low-maintenance composite outdoor space.', 'Projects from $15k+. We handle tear-down, permits, HOA, framing, decking, and railing.', 'Call for a structural evaluation in Loudoun, Fairfax, or Prince William County.', 'Built for homeowners who want a serious replacement, not a small patch repair.'],
          },
          {
            headlines: ['Rebuild Your Deck', 'Old Deck To New Deck', 'Full Tear-Down & Rebuild', 'Call For Estimate', 'Decks From $15k+', 'HOA Approval Help', 'Trex & TimberTech', 'Before & After Results', 'Safe Code-Compliant Decks', 'Deck Evaluation'],
            descriptions: ['If your deck is rotting, bouncing, or unsafe, replacement is often the smarter investment.', 'We rebuild old decks with modern framing, composite boards, railings, and clean details.', 'See before-and-after transformations and get a practical budget and timeline.', 'Serving serious deck replacement projects across three Northern Virginia counties.'],
          },
        ],
      },
      {
        name: 'Deck Resurfacing',
        finalUrl: 'https://www.ldndecks.com/services/deck-resurfacing/',
        keywords: [
          '"deck resurfacing"', '"deck resurfacing contractor"', '"deck resurfacing near me"', '"resurface deck with composite"',
          '"deck resurfacing company"', '"composite deck resurfacing"', '"deck board replacement composite"',
          '"deck resurfacing loudoun county"', '"deck resurfacing fairfax county"', '[deck resurfacing]',
          '[deck resurfacing contractor]', '[deck resurfacing near me]', '[resurface deck with composite]', '[composite deck resurfacing]',
        ],
        rsas: [
          {
            headlines: ['Deck Resurfacing', 'Save 40-60% If Frame Is Solid', 'Composite Resurfacing', 'Call For Inspection', 'Projects From $15k+', 'Permits & HOA Handled', '1-2 Week Build Timeline', 'Deck Inspection', 'Trex Board Upgrades', 'LDN Decks'],
            descriptions: ['Keep the frame if it passes inspection, then upgrade boards and railings to composite.', 'Resurfacing can save 40-60% versus full replacement when the structure is sound.', 'Call for a deck inspection and honest resurface vs replacement recommendation.', 'We handle composite boards, railings, permits, HOA details, and cleanup.'],
          },
          {
            headlines: ['Resurface Old Deck', 'Composite Deck Upgrade', 'Keep Frame If Safe', 'Call LDN Decks', 'Structural Review', 'Trex & TimberTech Boards', 'Permits Included', 'HOA Help Included', '5.0 Rated Contractor', 'Schedule Inspection'],
            descriptions: ['We inspect joists, posts, footings, ledger, and beams before recommending resurfacing.', 'If the frame is solid, resurfacing can deliver a new look at a lower cost.', 'Ideal for homeowners ready to move from worn wood boards to composite decking.', 'Serving Loudoun, Fairfax, and Prince William County with call-first estimates.'],
          },
        ],
      },
      {
        name: 'Replace Wood With Composite',
        keywords: [
          '"replace wood deck with composite"', '"wood to composite deck"', '"convert wood deck to composite"',
          '"replace deck boards with composite"', '"upgrade wood deck to composite"', '"replace pressure treated deck with composite"',
          '"wood deck to trex"', '"replace wood deck with trex"', '[replace wood deck with composite]',
          '[wood to composite deck]', '[convert wood deck to composite]', '[replace deck boards with composite]', '[wood deck to trex]',
        ],
        rsas: [
          {
            headlines: ['Wood To Composite Deck', 'Replace Wood With Trex', 'Projects From $15k+', 'Call LDN Decks Today', 'Low-Maintenance Upgrade', 'No More Staining', 'Permits & HOA Handled', 'Deck Inspection', 'Trex & TimberTech', '5.0 Rated Contractor'],
            descriptions: ['Upgrade your old wood deck to composite boards and railings built for NoVA weather.', 'We inspect the frame first, then recommend resurfacing or full replacement.', 'Projects from $15k+. Call for a serious estimate and clear build timeline.', 'Stop sanding and staining. Build a cleaner, safer, low-maintenance outdoor space.'],
          },
          {
            headlines: ['Upgrade To Composite', 'Replace Old Wood Deck', 'Composite Deck Conversion', 'Call For A Quote', 'Before & After Results', 'HOA Approval Help', 'Typical 2-4 Weeks', 'Premium Deck Builder', 'Deck Evaluation', 'Built For NoVA'],
            descriptions: ['We help homeowners decide whether to keep the frame or rebuild the full deck.', 'Composite upgrades include material selection, railing options, stairs, and lighting.', 'Call LDN Decks for wood-to-composite projects in Loudoun, Fairfax, and Prince William.', 'Clean process, realistic pricing, and a deck designed for long-term use.'],
          },
        ],
      },
    ],
  },
  {
    name: 'SRCH | Branded | 3 Counties | Calls',
    type: 'Search',
    budget: 15,
    bidStrategy: 'Maximize conversions',
    finalUrl: 'https://www.ldndecks.com/contact/',
    adGroups: [
      {
        name: 'Brand Exact',
        keywords: ['[ldn decks]', '[loudoun decks]', '[loudon decks]', '[ldndecks]', '[loudoun deck company]'],
        rsas: [
          {
            headlines: ['LDN Decks', 'Loudoun Decks', 'Call LDN Decks Today', '5.0 Rated Deck Builder', 'Written Deck Estimate', 'Trex Platinum Partner', 'Northern VA Deck Builder', 'Licensed & Insured', 'Composite Deck Experts', 'Contact LDN Decks'],
            descriptions: ['Contact LDN Decks for composite, replacement, resurfacing, and outdoor living projects.', 'Speak with a local Northern Virginia contractor about scope, timeline, and budget.', 'Serving Loudoun, Fairfax, and Prince William County homeowners.', 'Written estimates for serious deck projects from a 5.0 rated local team.'],
          },
          {
            headlines: ['Official LDN Decks Site', 'Loudoun Deck Builder', 'Call Now For Estimate', 'Decks From $15k+', 'Permits & HOA Help', 'Trex & TimberTech', 'Replacement Deck Pros', 'Composite Deck Builder', 'Schedule A Consultation', '5.0 Google Rated'],
            descriptions: ['Looking for LDN Decks? Call now or request a written deck estimate.', 'We build and replace decks across Northern Virginia with premium composite materials.', 'Talk through pricing, timeline, materials, and next steps with our team.', 'Trusted deck contractor for Loudoun, Fairfax, and Prince William County.'],
          },
        ],
      },
      {
        name: 'Brand Phrase',
        keywords: ['"ldn decks reviews"', '"loudoun decks reviews"', '"ldn decks phone number"', '"loudoun decks phone number"', '"ldn decks estimate"', '"loudoun decks estimate"', '"ldn decks contact"', '"loudoun decks contact"'],
        rsas: [
          {
            headlines: ['LDN Decks Reviews', 'Call LDN Decks', 'Get A Deck Estimate', 'Contact Loudoun Decks', '5.0 Rated Contractor', 'Composite Deck Builder', 'Replacement Decks', 'Design Call Available', 'Northern VA Deck Pros', 'Official Website'],
            descriptions: ['Read reviews, call the team, or request an estimate for your deck project.', 'LDN Decks serves Loudoun, Fairfax, and Prince William County homeowners.', 'Call-first estimates for composite, replacement, resurfacing, and outdoor living projects.', 'Get a clear next step for your project timeline and budget.'],
          },
          {
            headlines: ['Loudoun Decks Contact', 'LDN Decks Estimate', 'Call LDN Decks Today', 'Deck Builder Near You', 'Projects From $15k+', 'Permits & HOA Handled', 'Trex Platinum Partner', 'TimberTech Certified', 'Schedule Estimate', 'Trusted Local Builder'],
            descriptions: ['Speak with LDN Decks about your composite deck, replacement, or resurfacing project.', 'Get help with design, materials, permits, HOA coordination, and build planning.', 'Premium composite deck and replacement projects across Northern Virginia.', 'Use the official LDN Decks site to request your written estimate.'],
          },
        ],
      },
    ],
  },
  {
    name: 'SRCH | Premium Geo | Arlington Alexandria McLean | Leads',
    type: 'Search',
    budget: 50,
    bidStrategy: 'Maximize conversions',
    finalUrl: 'https://ldndecks.com/mclean-great-falls-premium-deck-budget/',
    adGroups: [
      {
        name: 'McLean + Great Falls',
        finalUrl: 'https://ldndecks.com/mclean-great-falls-premium-deck-budget/',
        keywords: [
          '"deck builder mclean va"', '"deck contractor mclean va"',
          '"premium deck builder mclean"', '"deck builder great falls va"', '"deck contractor great falls va"',
          '"premium deck builder great falls"', '"custom deck builder mclean"', '[deck builder mclean va]',
          '[deck contractor mclean va]', '[deck builder great falls va]', '[premium deck builder mclean]',
        ],
        rsas: [
          {
            headlines: ['McLean Deck Builder', 'Great Falls Deck Builder', 'Premium Deck Projects', 'Projects From $30k+', 'Written Deck Estimate', 'Permits & HOA Handled', 'Trex & TimberTech Pros', 'Call LDN Decks Today', 'Estate Home Decks', 'Design Call Available'],
            descriptions: ['Premium decks for McLean and Great Falls homeowners planning serious projects.', 'Composite, replacement, and outdoor living projects from $30k+.', 'We handle design, permits, HOA details, materials, and installation.', 'Request a written estimate for a high-quality Northern Virginia deck project.'],
          },
          {
            headlines: ['Premium Composite Decks', 'McLean Outdoor Living', 'Great Falls Deck Pros', 'Schedule A Design Call', 'Built For Estate Homes', 'AZEK & TimberTech', 'Trex Deck Builder', 'Structural Review', 'Custom Deck Contractor', 'LDN Decks'],
            descriptions: ['Plan a premium composite deck with a contractor built for high-value homes.', 'Ideal for large decks, replacements, railings, stairs, lighting, and covered spaces.', 'Talk through scope, budget, timeline, HOA, and permit details before you build.', 'Serving McLean, Great Falls, Vienna, Oakton, and nearby premium NoVA markets.'],
          },
          {
            headlines: ['McLean Custom Decks', 'Great Falls Deck Pros', 'Premium Composite Decks', 'Estate Deck Builder', 'Trex Deck Contractor', 'TimberTech Deck Pros', 'Decks From $30k+', 'Permit Help Included', 'HOA Help Included', 'Design Build Decks', 'Written Estimate', 'Schedule A Deck Call', 'NoVA Deck Contractor', 'Luxury Outdoor Living', 'LDN Decks'],
            descriptions: ['Premium deck design-build for McLean and Great Falls homeowners planning serious projects.', 'Composite, replacement, railings, stairs, lighting, permits, HOA, and installation.', 'Built for high-value homes that need a polished process and durable materials.', 'Schedule a design call and get a written estimate before you build.'],
          },
        ],
      },
      {
        name: 'Arlington',
        finalUrl: 'https://ldndecks.com/deck-builder-arlington-va/',
        keywords: [
          '"deck builder arlington va"', '"deck contractor arlington va"', '"deck builders arlington va"',
          '"custom deck builder arlington va"', '"deck company arlington va"',
          '[deck builder arlington va]', '[deck contractor arlington va]',
        ],
        rsas: [
          {
            headlines: ['Arlington Deck Builder', 'Arlington Deck Contractor', 'Composite Deck Experts', 'Projects From $25k+', 'Written Deck Estimate', 'Permits & HOA Handled', 'Trex & TimberTech Pros', 'Custom Deck Builder', 'Call LDN Decks Today', 'Design Call Available'],
            descriptions: ['Custom decks and replacements for Arlington homeowners planning quality projects.', 'Composite deck builds from $25k+. Permits, design, and installation handled.', 'Request a written estimate for a serious Arlington deck or outdoor living project.', 'Built for homeowners who want durable materials and a clean construction process.'],
          },
          {
            headlines: ['Arlington Composite Decks', 'Deck Replacement Pros', 'Premium Deck Contractor', 'Schedule A Deck Call', 'Built For NoVA Homes', 'Structural Review', 'Low-Maintenance Decks', '5.0 Rated Contractor', 'LDN Decks Arlington', 'HOA Help Included'],
            descriptions: ['Replace old wood with composite decking designed for Northern Virginia weather.', 'We review project scope, budget, timeline, permits, and HOA requirements.', 'Trex, TimberTech, AZEK, railings, stairs, lighting, and deck replacement work.', 'Serving Arlington homeowners who want a premium deck built correctly.'],
          },
          {
            headlines: ['Arlington Custom Decks', 'Arlington Deck Pros', 'Premium Deck Builder', 'Composite Deck Builder', 'Trex Deck Contractor', 'Decks From $25k+', 'Permit Help Included', 'HOA Help Included', 'Written Deck Estimate', 'Schedule A Deck Call', 'NoVA Deck Contractor', 'Design Build Decks', 'Low-Maintenance Decks', 'Outdoor Living Pros', 'LDN Decks'],
            descriptions: ['Premium deck design-build for Arlington homeowners planning quality composite projects.', 'Permits, HOA details, structural review, materials, and installation handled by one team.', 'Ideal for deck replacements, low-maintenance upgrades, railings, stairs, and lighting.', 'Request a written estimate for a serious Arlington deck project.'],
          },
        ],
      },
      {
        name: 'Alexandria',
        finalUrl: 'https://ldndecks.com/deck-builder-alexandria-va/',
        keywords: [
          '"deck builder alexandria va"', '"deck contractor alexandria va"', '"deck builders alexandria va"',
          '"custom deck builder alexandria va"', '"deck company alexandria va"',
          '[deck builder alexandria va]', '[deck contractor alexandria va]',
        ],
        rsas: [
          {
            headlines: ['Alexandria Deck Builder', 'Alexandria Deck Contractor', 'Composite Deck Experts', 'Projects From $25k+', 'Written Deck Estimate', 'Permits & HOA Handled', 'Trex & TimberTech Pros', 'Custom Deck Builder', 'Call LDN Decks Today', 'Design Call Available'],
            descriptions: ['Custom decks and replacements for Alexandria homeowners planning quality projects.', 'Composite deck builds from $25k+. Permits, design, and installation handled.', 'Request a written estimate for a serious Alexandria deck or outdoor living project.', 'Built for homeowners who want durable materials and a clean construction process.'],
          },
          {
            headlines: ['Alexandria Composite Decks', 'Deck Replacement Pros', 'Premium Deck Contractor', 'Schedule A Deck Call', 'Built For NoVA Homes', 'Structural Review', 'Low-Maintenance Decks', '5.0 Rated Contractor', 'LDN Decks Alexandria', 'HOA Help Included'],
            descriptions: ['Replace old wood with composite decking designed for Northern Virginia weather.', 'We review project scope, budget, timeline, permits, and HOA requirements.', 'Trex, TimberTech, AZEK, railings, stairs, lighting, and deck replacement work.', 'Serving Alexandria homeowners who want a premium deck built correctly.'],
          },
          {
            headlines: ['Alexandria Custom Decks', 'Alexandria Deck Pros', 'Premium Deck Builder', 'Composite Deck Builder', 'Trex Deck Contractor', 'Decks From $25k+', 'Permit Help Included', 'HOA Help Included', 'Written Deck Estimate', 'Schedule A Deck Call', 'NoVA Deck Contractor', 'Design Build Decks', 'Low-Maintenance Decks', 'Outdoor Living Pros', 'LDN Decks'],
            descriptions: ['Premium deck design-build for Alexandria homeowners planning quality composite projects.', 'Permits, HOA details, structural review, materials, and installation handled by one team.', 'Ideal for deck replacements, low-maintenance upgrades, railings, stairs, and lighting.', 'Request a written estimate for a serious Alexandria deck project.'],
          },
        ],
      },
      {
        name: 'Vienna + Oakton',
        finalUrl: 'https://ldndecks.com/deck-builder-vienna-va/',
        keywords: [
          '"deck builder vienna va"', '"deck contractor vienna va"', '"deck builder oakton va"',
          '"deck contractor oakton va"', '"premium deck builder vienna"', '"custom deck builder oakton"', '[deck builder vienna va]',
          '[deck contractor vienna va]', '[deck builder oakton va]', '[deck contractor oakton va]',
        ],
        rsas: [
          {
            headlines: ['Vienna Deck Builder', 'Oakton Deck Builder', 'Premium Deck Projects', 'Projects From $25k+', 'Written Deck Estimate', 'Permits & HOA Handled', 'Trex & TimberTech Pros', 'Call LDN Decks Today', 'Custom Deck Builder', 'Design Call Available'],
            descriptions: ['Premium decks for Vienna and Oakton homeowners planning serious projects.', 'Composite, replacement, and outdoor living projects from $25k+.', 'We handle design, permits, HOA details, materials, and installation.', 'Request a written estimate for a high-quality Northern Virginia deck project.'],
          },
          {
            headlines: ['Premium Composite Decks', 'Vienna Outdoor Living', 'Oakton Deck Pros', 'Schedule A Design Call', 'Built For NoVA Homes', 'AZEK & TimberTech', 'Trex Deck Builder', 'Structural Review', 'Custom Deck Contractor', 'LDN Decks'],
            descriptions: ['Plan a premium composite deck with a contractor built for high-value homes.', 'Ideal for large decks, replacements, railings, stairs, lighting, and covered spaces.', 'Talk through scope, budget, timeline, HOA, and permit details before you build.', 'Serving Vienna, Oakton, McLean, Great Falls, and nearby premium NoVA markets.'],
          },
          {
            headlines: ['Vienna Custom Decks', 'Oakton Deck Builder', 'Premium Composite Decks', 'NoVA Deck Contractor', 'Trex Deck Contractor', 'TimberTech Deck Pros', 'Decks From $25k+', 'Permit Help Included', 'HOA Help Included', 'Design Build Decks', 'Written Estimate', 'Schedule A Deck Call', 'Low-Maintenance Decks', 'Outdoor Living Pros', 'LDN Decks'],
            descriptions: ['Premium deck design-build for Vienna and Oakton homeowners planning serious projects.', 'Composite, replacement, railings, stairs, lighting, permits, HOA, and installation.', 'Built for high-value homes that need a clean process and durable materials.', 'Schedule a design call and get a written estimate before you build.'],
          },
        ],
      },
      {
        name: 'Near Me | Premium Geo',
        finalUrl: 'https://ldndecks.com/deck-builder-northern-virginia/',
        keywords: [
          '"deck builder near me"', '"deck contractor near me"', '"deck company near me"',
          '"custom deck builder near me"', '[deck builder near me]', '[deck contractor near me]',
          '[deck company near me]', '[custom deck builder near me]',
        ],
        rsas: [
          {
            headlines: ['Deck Builder Near You', 'Deck Contractor Near You', 'Premium Deck Builder', 'Composite Deck Experts', 'Trex Deck Contractor', 'TimberTech Deck Pros', 'Decks From $25k+', 'Permit Help Included', 'HOA Help Included', 'Written Deck Estimate', 'Schedule A Deck Call', 'NoVA Deck Contractor', 'Design Build Decks', 'Outdoor Living Pros', 'LDN Decks'],
            descriptions: ['Premium deck design-build for Northern Virginia homeowners planning serious projects.', 'Composite decks, replacements, railings, stairs, lighting, permits, and HOA handled.', 'Built for homeowners who want a clean process and durable low-maintenance materials.', 'Schedule a design call and get a written estimate before you build.'],
          },
          {
            headlines: ['Composite Deck Builder', 'Custom Deck Contractor', 'Near You In NoVA', 'Premium Deck Projects', 'Trex & TimberTech Pros', 'Low-Maintenance Decks', 'Projects From $25k+', 'Written Estimate', 'Permit Help Included', 'HOA Help Included', 'Call LDN Decks Today', 'Design Call Available', 'Deck Replacement Pros', 'Quality Deck Builder', 'LDN Decks'],
            descriptions: ['Plan a premium composite deck with a Northern Virginia contractor built for quality leads.', 'We handle project scope, budget, timeline, permits, HOA, materials, and installation.', 'Ideal for deck replacements, custom composite builds, railings, stairs, and lighting.', 'Request a written estimate for a serious deck or outdoor living project.'],
          },
          {
            headlines: ['NoVA Deck Builder', 'Northern VA Deck Pros', 'Deck Companies Near Me', 'Deck Contractors Near Me', 'Premium Composite Decks', 'Custom Deck Builder', 'Trex Deck Builder', 'TimberTech Contractor', 'Decks From $25k+', 'Written Deck Quote', 'Schedule A Deck Call', 'Permit Help Included', 'HOA Help Included', 'Built For NoVA Homes', 'LDN Decks'],
            descriptions: ['Serving high-intent Northern Virginia homeowners looking for a premium deck contractor.', 'Composite, custom, and replacement decks with permits and HOA coordination handled.', 'Built for larger projects where process, materials, and craftsmanship matter.', 'Call or request a written estimate for a premium deck project.'],
          },
        ],
      },
    ],
  },
];

const phraseNegative = keyword => ({ keyword, matchType: 'Phrase' });
const exactNegative = keyword => ({ keyword, matchType: 'Exact' });

const sharedNegatives = [
  'jobs',
  'hiring',
  'career',
  'careers',
  'salary',
  'diy',
  'do it yourself',
  'plans',
  'blueprint',
  'blueprints',
  'cheap',
  'cheapest',
  'free',
  'used',
  'pallets',
  'home depot',
  'lowes',
  "lowe's",
  'materials only',
  'lumber only',
  'deck plans',
  'deck design software',
  'deck calculator',
  'deck cost calculator',
  'stain',
  'staining',
  'paint',
  'painting',
  'sealer',
  'sealing',
  'sanding',
  'powerwash',
  'pressure wash',
  'kit',
  'kits',
  'handyman',
  'small repair',
  'repair only',
  'deck boards',
  'deck screws',
  'wholesale',
].map(phraseNegative);

const campaignNegatives = [
  {
    campaign: 'SRCH | Composite | 3 Counties | Calls',
    negatives: [
      phraseNegative('repair'),
      phraseNegative('deck repair'),
      phraseNegative('deck repair near me'),
      phraseNegative('deck repair company'),
      phraseNegative('deck repair contractor'),
      phraseNegative('deck refinishing'),
      phraseNegative('deck restoration'),
      phraseNegative('deck staining'),
      phraseNegative('deck sealing'),
      phraseNegative('deck painting'),
      phraseNegative('power washing'),
      phraseNegative('pressure washing'),
      phraseNegative('board repair'),
      phraseNegative('railing repair'),
      phraseNegative('stair repair'),
      phraseNegative('decking boards'),
      phraseNegative('decking material'),
      phraseNegative('decking materials'),
      exactNegative('trex decking'),
      exactNegative('trex decking boards'),
      exactNegative('deck trex'),
      exactNegative('fiberon decking'),
    ],
  },
  {
    campaign: 'SRCH | Deck Builders | 3 Counties | Calls',
    negatives: [
      phraseNegative('repair'),
      phraseNegative('deck repair'),
      phraseNegative('deck repair near me'),
      phraseNegative('deck refinishing'),
      phraseNegative('deck restoration'),
      phraseNegative('deck staining'),
      phraseNegative('deck sealing'),
      phraseNegative('deck painting'),
      phraseNegative('power washing'),
      phraseNegative('pressure washing'),
      phraseNegative('patio'),
      phraseNegative('patio contractor'),
      phraseNegative('hardscaping'),
      phraseNegative('fence'),
      phraseNegative('fencing'),
      phraseNegative('screened in porch'),
      phraseNegative('porch'),
      phraseNegative('construction company'),
      phraseNegative('general contractor'),
      phraseNegative('board repair'),
      phraseNegative('railing repair'),
      phraseNegative('stair repair'),
    ],
  },
  {
    campaign: 'SRCH | Replacement + Resurfacing | 3 Counties | Calls',
    negatives: [
      phraseNegative('deck refinishing'),
      phraseNegative('deck restoration'),
      phraseNegative('deck staining'),
      phraseNegative('deck sealing'),
      phraseNegative('deck painting'),
      phraseNegative('power washing'),
      phraseNegative('pressure washing'),
      phraseNegative('board repair'),
      phraseNegative('railing repair'),
      phraseNegative('stair repair'),
      phraseNegative('small deck repair'),
      phraseNegative('minor deck repair'),
      phraseNegative('deck repair cost'),
      exactNegative('sunburst decks'),
      exactNegative('nova deck doctor'),
    ],
  },
  {
    campaign: 'SRCH | Premium Geo | Arlington Alexandria McLean | Leads',
    negatives: [
      phraseNegative('deck repair'),
      phraseNegative('deck repair near me'),
      phraseNegative('minor deck repair'),
      phraseNegative('small deck repair'),
      phraseNegative('deck refinishing'),
      phraseNegative('deck restoration'),
      phraseNegative('deck staining'),
      phraseNegative('deck sealing'),
      phraseNegative('deck painting'),
      phraseNegative('power washing'),
      phraseNegative('pressure washing'),
      phraseNegative('board repair'),
      phraseNegative('railing repair'),
      phraseNegative('stair repair'),
      phraseNegative('fence'),
      phraseNegative('fencing'),
      phraseNegative('handyman'),
      phraseNegative('materials only'),
      phraseNegative('decking boards'),
      phraseNegative('permit only'),
      phraseNegative('cheap'),
      phraseNegative('free'),
      phraseNegative('diy'),
      phraseNegative('do it yourself'),
      phraseNegative('how to'),
      phraseNegative('deck plans'),
      phraseNegative('deck ideas'),
      phraseNegative('deck pictures'),
      phraseNegative('deck photos'),
      phraseNegative('home depot'),
      phraseNegative('lowes'),
      phraseNegative('lumber'),
      phraseNegative('deck kit'),
      phraseNegative('deck kits'),
      phraseNegative('deck material'),
      phraseNegative('deck materials'),
      phraseNegative('wholesale'),
      phraseNegative('used'),
      phraseNegative('jobs'),
      phraseNegative('careers'),
      phraseNegative('salary'),
      phraseNegative('classes'),
      phraseNegative('deck design software'),
      phraseNegative('composite deck builder near me'),
      phraseNegative('composite deck contractor near me'),
      phraseNegative('composite deck builder mclean'),
      phraseNegative('composite deck builder arlington'),
      phraseNegative('composite deck builder alexandria'),
      phraseNegative('composite deck builder vienna'),
      phraseNegative('composite deck builder oakton'),
      phraseNegative('trex deck builder arlington'),
      phraseNegative('trex deck builder alexandria'),
      phraseNegative('deck replacement near me'),
      phraseNegative('deck replacement arlington'),
      phraseNegative('deck replacement alexandria'),
    ],
  },
];

const pmax = {
  campaign: 'RMKT | PMax | Visitors 30/60/90d | Calls',
  budget: 10,
  assetGroup: 'Visitors | Deck Estimate | Calls',
  finalUrls: ['https://www.ldndecks.com/composite-decks/', 'https://www.ldndecks.com/services/deck-replacement/', 'https://www.ldndecks.com/services/deck-resurfacing/', 'https://www.ldndecks.com/deck-resurfacing-vs-replacement/', 'https://www.ldndecks.com/before-and-after/', 'https://www.ldndecks.com/contact/'],
  headlines: ['Ready To Build Your Deck?', 'Call LDN Decks Today', 'Composite Deck Experts', 'Replace Your Old Deck', 'Projects From $20k+', 'Permits & HOA Handled', 'Written Deck Estimate', '5.0 Rated Deck Builder', 'Trex & TimberTech Pros', 'Northern VA Deck Builder'],
  longHeadlines: ['Ready to replace your old deck with a premium composite outdoor space?', 'Call LDN Decks for composite deck builds, replacement, and resurfacing.', 'Serving Loudoun, Fairfax, and Prince William County homeowners.', 'Get a realistic deck estimate with permits and HOA details handled.'],
  descriptions: ['Still planning your deck? Call LDN Decks for a written estimate and clear next steps.', 'Composite, replacement, and resurfacing projects from $20k+ in Northern Virginia.', 'We handle design, permits, HOA coordination, materials, and installation.', 'Talk to a local 5.0 rated deck contractor today.'],
};

const sitelinks = [
  ['Composite Decks', 'https://www.ldndecks.com/composite-decks/'],
  ['Deck Replacement', 'https://www.ldndecks.com/services/deck-replacement/'],
  ['Before & After', 'https://www.ldndecks.com/before-and-after/'],
  ['Permits + HOA', 'https://www.ldndecks.com/deck-permit-loudoun-county-virginia/'],
];
const campaignSitelinks = {
  'SRCH | Premium Geo | Arlington Alexandria McLean | Leads': [
    ['McLean Premium Budget', 'https://ldndecks.com/mclean-great-falls-premium-deck-budget/'],
    ['Arlington Deck Builder', 'https://ldndecks.com/deck-builder-arlington-va/'],
    ['Alexandria Deck Builder', 'https://ldndecks.com/deck-builder-alexandria-va/'],
    ['Composite Decks', 'https://ldndecks.com/composite-decks/'],
  ],
};

const callouts = ['Licensed & Insured', '5.0 Google Rated', 'Trex Platinum Partner', 'TimberTech Certified', 'Permits & HOA Handled', 'Projects From $20k+', 'Composite Specialists', 'Structural Review'];
const defaultLocations = [
  'Loudoun County, Virginia, United States',
  'Fairfax County, Virginia, United States',
  'Prince William County, Virginia, United States',
];
const campaignLocations = {
  'SRCH | Premium Geo | Arlington Alexandria McLean | Leads': [
    'Fairfax County, Virginia, United States',
    'Arlington County, Virginia, United States',
    'Alexandria, Virginia, United States',
  ],
};

function csvEscape(value) {
  const text = String(value ?? '');
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function writeCsv(fileName, rows) {
  fs.writeFileSync(path.join(outDir, fileName), `${rows.map(row => row.map(csvEscape).join(',')).join('\n')}\n`);
}

function writeCsvToDir(dir, fileName, rows) {
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, fileName), `${rows.map(row => row.map(csvEscape).join(',')).join('\n')}\n`);
}

function matchType(keyword) {
  if (keyword.startsWith('[')) return 'Exact';
  if (keyword.startsWith('"')) return 'Phrase';
  return 'Broad';
}

function cleanKeyword(keyword) {
  return keyword.replace(/^\[|\]$|^"|"$/g, '');
}

fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(premiumGeoOutDir, { recursive: true });

const searchOnlyNetwork = 'Google Search';

writeCsv('01-campaigns.csv', [
  ['Campaign', 'Campaign type', 'Budget', 'Budget type', 'Bid strategy type', 'Networks', 'Status', 'EU political ads'],
  ...campaigns.map(c => [c.name, c.type, c.budget, 'Daily', c.bidStrategy, searchOnlyNetwork, 'Paused', 'No']),
  [pmax.campaign, 'Performance Max', pmax.budget, 'Daily', 'Maximize conversions', 'All', 'Paused', 'No'],
]);

writeCsv('02-ad-groups.csv', [
  ['Campaign', 'Ad group', 'Status', 'Ad group type'],
  ...campaigns.flatMap(c => c.adGroups.map(ag => [c.name, ag.name, 'Paused', 'Standard'])),
]);

writeCsv('03-keywords.csv', [
  ['Campaign', 'Ad group', 'Keyword', 'Match type', 'Final URL', 'Status'],
  ...campaigns.flatMap(c => c.adGroups.flatMap(ag => ag.keywords.map(k => [c.name, ag.name, cleanKeyword(k), matchType(k), ag.finalUrl || c.finalUrl, 'Paused']))),
]);

writeCsv('04-responsive-search-ads.csv', [
  ['Campaign', 'Ad group', 'Ad type', 'Final URL', ...Array.from({ length: 15 }, (_, i) => `Headline ${i + 1}`), ...Array.from({ length: 4 }, (_, i) => `Description ${i + 1}`), 'Status'],
  ...campaigns.flatMap(c => c.adGroups.flatMap(ag => ag.rsas.map(rsa => [c.name, ag.name, 'Responsive search ad', ag.finalUrl || c.finalUrl, ...Array.from({ length: 15 }, (_, i) => rsa.headlines[i] || ''), ...Array.from({ length: 4 }, (_, i) => rsa.descriptions[i] || ''), 'Paused']))),
]);

writeCsv('05-shared-negative-keywords.csv', [
  ['Shared set', 'Keyword', 'Match type'],
  ...sharedNegatives.map(({ keyword, matchType }) => ['PRO Negative Keywords', keyword, matchType]),
]);

writeCsv('11-campaign-negative-keywords.csv', [
  ['Campaign', 'Keyword', 'Match type', 'Type'],
  ...campaignNegatives.flatMap(c => c.negatives.map(({ keyword, matchType }) => [c.campaign, keyword, matchType, 'Campaign negative'])),
]);

writeCsv('06-sitelinks.csv', [
  ['Campaign', 'Sitelink text', 'Final URL', 'Status'],
  ...campaigns.flatMap(c => (campaignSitelinks[c.name] || sitelinks).map(([text, url]) => [c.name, text, url, 'Paused'])),
]);

writeCsv('07-callouts.csv', [
  ['Campaign', 'Callout text', 'Status'],
  ...campaigns.flatMap(c => callouts.map(text => [c.name, text, 'Paused'])),
]);

writeCsv('08-pmax-remarketing-assets.csv', [
  ['Campaign', 'Asset group', 'Final URL', ...Array.from({ length: 15 }, (_, i) => `Headline ${i + 1}`), ...Array.from({ length: 5 }, (_, i) => `Long headline ${i + 1}`), ...Array.from({ length: 5 }, (_, i) => `Description ${i + 1}`), 'Final URL expansion', 'Status'],
  [pmax.campaign, pmax.assetGroup, pmax.finalUrls.join('; '), ...Array.from({ length: 15 }, (_, i) => pmax.headlines[i] || ''), ...Array.from({ length: 5 }, (_, i) => pmax.longHeadlines[i] || ''), ...Array.from({ length: 5 }, (_, i) => pmax.descriptions[i] || ''), 'Off', 'Paused'],
]);

writeCsv('09-call-asset.csv', [
  ['Campaign', 'Phone number', 'Country', 'Schedule', 'Conversion action', 'Status'],
  ...campaigns.map(c => [c.name, '+15716557207', 'US', 'Mon-Fri 08:00-18:00', 'Qualified Call (Ads) - 60s', 'Paused']),
  [pmax.campaign, '+15716557207', 'US', 'Mon-Fri 08:00-18:00', 'Qualified Call (Ads) - 60s', 'Paused'],
]);

writeCsv('10-location-targets.csv', [
  ['Campaign', 'Location', 'Location option', 'Status'],
  ...[...campaigns.map(c => c.name), pmax.campaign].flatMap(campaign => (
    campaignLocations[campaign] || defaultLocations
  ).map(location => [campaign, location, 'Presence', 'Paused'])),
]);

const premiumGeoCampaign = campaigns.find(c => c.name === premiumGeoCampaignName);
if (!premiumGeoCampaign) {
  console.error(`Missing ${premiumGeoCampaignName}`);
  process.exit(1);
}

writeCsvToDir(premiumGeoOutDir, '01-campaign.csv', [
  ['Campaign', 'Campaign type', 'Budget', 'Budget type', 'Bid strategy type', 'Networks', 'Status', 'EU political ads'],
  [premiumGeoCampaign.name, premiumGeoCampaign.type, premiumGeoCampaign.budget, 'Daily', premiumGeoCampaign.bidStrategy, searchOnlyNetwork, 'Paused', 'No'],
]);

writeCsvToDir(premiumGeoOutDir, '02-ad-groups.csv', [
  ['Campaign', 'Ad group', 'Status', 'Ad group type'],
  ...premiumGeoCampaign.adGroups.map(ag => [premiumGeoCampaign.name, ag.name, 'Paused', 'Standard']),
]);

writeCsvToDir(premiumGeoOutDir, '03-keywords.csv', [
  ['Campaign', 'Ad group', 'Keyword', 'Match type', 'Final URL', 'Status'],
  ...premiumGeoCampaign.adGroups.flatMap(ag => ag.keywords.map(k => [premiumGeoCampaign.name, ag.name, cleanKeyword(k), matchType(k), ag.finalUrl || premiumGeoCampaign.finalUrl, 'Paused'])),
]);

writeCsvToDir(premiumGeoOutDir, '04-responsive-search-ads.csv', [
  ['Campaign', 'Ad group', 'Ad type', 'Final URL', ...Array.from({ length: 15 }, (_, i) => `Headline ${i + 1}`), ...Array.from({ length: 4 }, (_, i) => `Description ${i + 1}`), 'Status'],
  ...premiumGeoCampaign.adGroups.flatMap(ag => ag.rsas.map(rsa => [premiumGeoCampaign.name, ag.name, 'Responsive search ad', ag.finalUrl || premiumGeoCampaign.finalUrl, ...Array.from({ length: 15 }, (_, i) => rsa.headlines[i] || ''), ...Array.from({ length: 4 }, (_, i) => rsa.descriptions[i] || ''), 'Paused'])),
]);

writeCsvToDir(premiumGeoOutDir, '05-sitelinks.csv', [
  ['Campaign', 'Sitelink text', 'Final URL', 'Status'],
  ...(campaignSitelinks[premiumGeoCampaign.name] || sitelinks).map(([text, url]) => [premiumGeoCampaign.name, text, url, 'Paused']),
]);

writeCsvToDir(premiumGeoOutDir, '06-callouts.csv', [
  ['Campaign', 'Callout text', 'Status'],
  ...callouts.map(text => [premiumGeoCampaign.name, text, 'Paused']),
]);

writeCsvToDir(premiumGeoOutDir, '07-call-asset.csv', [
  ['Campaign', 'Phone number', 'Country', 'Schedule', 'Conversion action', 'Status'],
  [premiumGeoCampaign.name, '+15716557207', 'US', 'Mon-Fri 08:00-18:00', 'Qualified Call (Ads) - 60s', 'Paused'],
]);

writeCsvToDir(premiumGeoOutDir, '08-location-targets.csv', [
  ['Campaign', 'Location', 'Location option', 'Status'],
  ...(campaignLocations[premiumGeoCampaign.name] || defaultLocations).map(location => [premiumGeoCampaign.name, location, 'Presence', 'Paused']),
]);

writeCsvToDir(premiumGeoOutDir, '09-campaign-negative-keywords.csv', [
  ['Campaign', 'Keyword', 'Match type', 'Type'],
  ...campaignNegatives
    .filter(c => c.campaign === premiumGeoCampaign.name)
    .flatMap(c => c.negatives.map(({ keyword, matchType }) => [c.campaign, keyword, matchType, 'Campaign negative'])),
]);

const allAssets = campaigns.flatMap(c => c.adGroups.flatMap(ag => ag.rsas.flatMap(rsa => [
  ...rsa.headlines.map(text => ({ type: 'headline', text })),
  ...rsa.descriptions.map(text => ({ type: 'description', text })),
])));

const violations = allAssets.filter(asset => asset.text.length > (asset.type === 'headline' ? 30 : 90));
const pmaxViolations = [
  ...pmax.headlines.map(text => ({ type: 'pmax headline', text, max: 30 })),
  ...pmax.longHeadlines.map(text => ({ type: 'pmax long headline', text, max: 90 })),
  ...pmax.descriptions.map(text => ({ type: 'pmax description', text, max: 90 })),
].filter(asset => asset.text.length > asset.max);

if (violations.length || pmaxViolations.length) {
  console.error([...violations, ...pmaxViolations].map(v => `${v.type}: ${v.text.length}/${v.max || (v.type === 'headline' ? 30 : 90)} ${v.text}`).join('\n'));
  process.exit(1);
}

console.log(`Wrote Google Ads import files to ${outDir}`);
