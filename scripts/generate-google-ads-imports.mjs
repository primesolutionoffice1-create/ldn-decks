import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('google-ads-import');

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
            headlines: ['Trex Platinum Partner', 'Trex Deck Builder', 'Call LDN Decks Today', 'Projects From $15k+', 'Permits & HOA Handled', '5.0 Rated Deck Builder', 'Loudoun Deck Builder', 'Fairfax Deck Builder', 'Composite Deck Experts', 'Free Deck Estimate'],
            descriptions: ['Build a low-maintenance Trex deck with a local 5.0 rated contractor. Projects from $15k+.', 'We handle design, permits, HOA, materials, and installation for premium Trex decks.', 'Serving Loudoun, Fairfax, and Prince William County homeowners. Call for a fast estimate.', 'Upgrade from wood to a cleaner composite deck built for Northern Virginia weather.'],
          },
          {
            headlines: ['Custom Trex Decks', 'Trex Composite Decks', 'Built For NoVA Homes', 'Call For A Deck Quote', '25+ Year Materials', 'Hidden Fasteners', 'Premium Deck Builder', 'Decks Built Right', 'HOA Help Included', 'Schedule A Call'],
            descriptions: ['Get a custom Trex deck built with premium materials, clean details, and a clear process.', 'From layout to final walkthrough, our team manages the full composite deck project.', 'Call-first estimates for serious deck projects in Loudoun, Fairfax, and Prince William.', 'Replace annual staining with a low-maintenance outdoor space built to last.'],
          },
        ],
      },
      {
        name: 'TimberTech/AZEK',
        keywords: [
          '"timbertech deck builder"', '"timbertech deck contractor"', '"azek deck builder"', '"azek deck contractor"',
          '"timbertech deck installer"', '"azek deck installer"', '"timbertech deck builder near me"', '"azek deck builder near me"',
          '[timbertech deck builder]', '[azek deck builder]', '[timbertech deck contractor]', '[azek deck contractor]',
        ],
        rsas: [
          {
            headlines: ['TimberTech Certified', 'AZEK Deck Builder', 'Premium Composite Decks', 'Projects From $15k+', 'Permits & HOA Handled', 'Call LDN Decks', '5.0 Rated Contractor', 'Fairfax Deck Builder', 'Loudoun Deck Builder', 'Free Deck Estimate'],
            descriptions: ['Build a premium TimberTech or AZEK deck with a Northern Virginia composite specialist.', 'Projects from $15k+. We handle permits, HOA coordination, design, and installation.', 'Serving Loudoun, Fairfax, and Prince William County with high-end composite deck builds.', 'Call now to discuss materials, timeline, budget, and the right composite decking option.'],
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
            headlines: ['Composite Deck Builder', 'Custom Composite Decks', 'Projects From $15k+', 'Call LDN Decks Today', 'Permits & HOA Handled', '5.0 Rated Contractor', 'Built For NoVA Homes', 'Low Maintenance Decks', 'Free Deck Estimate', 'Trex & TimberTech'],
            descriptions: ['Custom composite decks for Loudoun, Fairfax, and Prince William County homeowners.', 'Projects from $15k+. Call for a realistic estimate, timeline, and material recommendation.', 'We build low-maintenance decks with permits, HOA, framing, decking, and railings handled.', 'Trex, TimberTech, and AZEK options installed by a local 5.0 rated deck contractor.'],
          },
          {
            headlines: ['Build A Composite Deck', 'No Stain. No Sanding.', 'Northern VA Deck Pros', 'Call For Deck Quote', 'Premium Deck Contractor', 'Hidden Fastener Finish', '25-50 Year Warranties', 'Free Consultation', 'Decks From $15k+', 'HOA Help Included'],
            descriptions: ['Stop maintaining old wood. Build a composite deck designed for long-term NoVA performance.', 'We help homeowners choose the right brand, color, railing, lighting, and layout.', 'Call-first estimates for high-quality custom composite deck projects in three counties.', 'See before-and-after transformations and get a clear path from estimate to build.'],
          },
        ],
      },
      {
        name: 'Composite Deck Cost',
        keywords: [
          '"composite deck cost"', '"composite deck cost near me"', '"cost to build composite deck"', '"composite deck price"',
          '"trex deck cost"', '"timbertech deck cost"', '"azek deck cost"', '"composite deck cost loudoun county"',
          '"composite deck cost fairfax county"', '[composite deck cost]', '[cost to build composite deck]',
          '[trex deck cost]', '[timbertech deck cost]', '[azek deck cost]',
        ],
        rsas: [
          {
            headlines: ['Composite Deck Cost', 'Projects From $15k+', 'Get A Real Deck Quote', 'Call LDN Decks', 'Trex Deck Pricing', 'TimberTech Pricing', 'Permits & HOA Handled', 'No Cheap Patch Work', 'Premium Deck Builder', 'Free Estimate'],
            descriptions: ['Composite deck pricing depends on size, framing, railing, stairs, and material tier.', 'Serious deck projects from $15k+. Call for a clear budget range before you build.', 'We quote full custom composite decks, not small repair-only jobs or DIY material kits.', 'Serving Loudoun, Fairfax, and Prince William County with premium deck estimates.'],
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
            headlines: ['Deck Replacement', 'Projects From $15k+', 'Replace Your Old Deck', 'Call LDN Decks Today', 'Permits & HOA Handled', 'Typical 2-4 Week Build', '5.0 Rated Contractor', 'Composite Upgrades', 'Free Structural Check', 'Northern VA Deck Pros'],
            descriptions: ['Replace an aging wood deck with a safer, low-maintenance composite outdoor space.', 'Projects from $15k+. We handle tear-down, permits, HOA, framing, decking, and railing.', 'Call for a free structural evaluation in Loudoun, Fairfax, or Prince William County.', 'Built for homeowners who want a serious replacement, not a small patch repair.'],
          },
          {
            headlines: ['Rebuild Your Deck', 'Old Deck To New Deck', 'Full Tear-Down & Rebuild', 'Call For Estimate', 'Decks From $15k+', 'HOA Approval Help', 'Trex & TimberTech', 'Before & After Results', 'Safe Code-Compliant Decks', 'Free Deck Evaluation'],
            descriptions: ['If your deck is rotting, bouncing, or unsafe, replacement is often the smarter investment.', 'We rebuild old decks with modern framing, composite boards, railings, and clean details.', 'See before-and-after transformations and get a practical budget and timeline.', 'Serving serious deck replacement projects across three Northern Virginia counties.'],
          },
        ],
      },
      {
        name: 'Deck Resurfacing',
        keywords: [
          '"deck resurfacing"', '"deck resurfacing contractor"', '"deck resurfacing near me"', '"resurface deck with composite"',
          '"deck resurfacing company"', '"composite deck resurfacing"', '"deck board replacement composite"',
          '"deck resurfacing loudoun county"', '"deck resurfacing fairfax county"', '[deck resurfacing]',
          '[deck resurfacing contractor]', '[deck resurfacing near me]', '[resurface deck with composite]', '[composite deck resurfacing]',
        ],
        rsas: [
          {
            headlines: ['Deck Resurfacing', 'Save 40-60% If Frame Is Solid', 'Composite Resurfacing', 'Call For Inspection', 'Projects From $15k+', 'Permits & HOA Handled', '1-2 Week Build Timeline', 'Free Deck Inspection', 'Trex Board Upgrades', 'LDN Decks'],
            descriptions: ['Keep the frame if it passes inspection, then upgrade boards and railings to composite.', 'Resurfacing can save 40-60% versus full replacement when the structure is sound.', 'Call for a free deck inspection and honest resurface vs replacement recommendation.', 'We handle composite boards, railings, permits, HOA details, and cleanup.'],
          },
          {
            headlines: ['Resurface Old Deck', 'Composite Deck Upgrade', 'Keep Frame If Safe', 'Call LDN Decks', 'Free Structural Check', 'Trex & TimberTech Boards', 'Permits Included', 'HOA Help Included', '5.0 Rated Contractor', 'Schedule Inspection'],
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
            headlines: ['Wood To Composite Deck', 'Replace Wood With Trex', 'Projects From $15k+', 'Call LDN Decks Today', 'Low-Maintenance Upgrade', 'No More Staining', 'Permits & HOA Handled', 'Free Deck Inspection', 'Trex & TimberTech', '5.0 Rated Contractor'],
            descriptions: ['Upgrade your old wood deck to composite boards and railings built for NoVA weather.', 'We inspect the frame first, then recommend resurfacing or full replacement.', 'Projects from $15k+. Call for a serious estimate and clear build timeline.', 'Stop sanding and staining. Build a cleaner, safer, low-maintenance outdoor space.'],
          },
          {
            headlines: ['Upgrade To Composite', 'Replace Old Wood Deck', 'Composite Deck Conversion', 'Call For A Quote', 'Before & After Results', 'HOA Approval Help', 'Typical 2-4 Weeks', 'Premium Deck Builder', 'Free Evaluation', 'Built For NoVA'],
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
            headlines: ['LDN Decks', 'Loudoun Decks', 'Call LDN Decks Today', '5.0 Rated Deck Builder', 'Free Deck Estimate', 'Trex Platinum Partner', 'Northern VA Deck Builder', 'Licensed & Insured', 'Composite Deck Experts', 'Contact LDN Decks'],
            descriptions: ['Contact LDN Decks for composite, replacement, resurfacing, and outdoor living projects.', 'Speak with a local Northern Virginia contractor about scope, timeline, and budget.', 'Serving Loudoun, Fairfax, and Prince William County homeowners.', 'Free estimates for serious deck projects from a 5.0 rated local team.'],
          },
          {
            headlines: ['Official LDN Decks Site', 'Loudoun Deck Builder', 'Call Now For Estimate', 'Decks From $15k+', 'Permits & HOA Help', 'Trex & TimberTech', 'Replacement Deck Pros', 'Composite Deck Builder', 'Schedule A Consultation', '5.0 Google Rated'],
            descriptions: ['Looking for LDN Decks? Call now or request a free estimate for your next outdoor project.', 'We build and replace decks across Northern Virginia with premium composite materials.', 'Talk through pricing, timeline, materials, and next steps with our team.', 'Trusted deck contractor for Loudoun, Fairfax, and Prince William County.'],
          },
        ],
      },
      {
        name: 'Brand Phrase',
        keywords: ['"ldn decks reviews"', '"loudoun decks reviews"', '"ldn decks phone number"', '"loudoun decks phone number"', '"ldn decks estimate"', '"loudoun decks estimate"', '"ldn decks contact"', '"loudoun decks contact"'],
        rsas: [
          {
            headlines: ['LDN Decks Reviews', 'Call LDN Decks', 'Get A Deck Estimate', 'Contact Loudoun Decks', '5.0 Rated Contractor', 'Composite Deck Builder', 'Replacement Decks', 'Free Consultation', 'Northern VA Deck Pros', 'Official Website'],
            descriptions: ['Read reviews, call the team, or request an estimate for your deck project.', 'LDN Decks serves Loudoun, Fairfax, and Prince William County homeowners.', 'Call-first estimates for composite, replacement, resurfacing, and outdoor living projects.', 'Get a clear next step for your project timeline and budget.'],
          },
          {
            headlines: ['Loudoun Decks Contact', 'LDN Decks Estimate', 'Call LDN Decks Today', 'Deck Builder Near You', 'Projects From $15k+', 'Permits & HOA Handled', 'Trex Platinum Partner', 'TimberTech Certified', 'Schedule Estimate', 'Trusted Local Builder'],
            descriptions: ['Speak with LDN Decks about your composite deck, replacement, or resurfacing project.', 'Get help with design, materials, permits, HOA coordination, and build planning.', 'Premium composite deck and replacement projects across Northern Virginia.', 'Use the official LDN Decks site to request your free estimate.'],
          },
        ],
      },
    ],
  },
];

const sharedNegatives = ['jobs', 'hiring', 'career', 'careers', 'salary', 'diy', 'do it yourself', 'plans', 'blueprint', 'blueprints', 'cheap', 'cheapest', 'free', 'used', 'pallets', 'home depot', 'lowes', "lowe's", 'materials', 'lumber', 'stain', 'staining', 'paint', 'painting', 'sealer', 'sealing', 'sanding', 'powerwash', 'pressure wash', 'kit', 'kits', 'handyman', 'small repair', 'repair only', 'deck boards', 'deck screws', 'calculator', 'wholesale'];

const campaignNegatives = [
  {
    campaign: 'SRCH | Composite | 3 Counties | Calls',
    negatives: [
      'repair',
      'deck repair',
      'deck repair near me',
      'deck repair company',
      'deck repair contractor',
      'deck refinishing',
      'deck restoration',
      'deck staining',
      'deck sealing',
      'deck painting',
      'power washing',
      'pressure washing',
      'board repair',
      'railing repair',
      'stair repair',
    ],
  },
  {
    campaign: 'SRCH | Replacement + Resurfacing | 3 Counties | Calls',
    negatives: [
      'repair',
      'deck repair',
      'deck repair near me',
      'deck repair company',
      'deck repair contractor',
      'deck refinishing',
      'deck restoration',
      'deck staining',
      'deck sealing',
      'deck painting',
      'power washing',
      'pressure washing',
      'board repair',
      'railing repair',
      'stair repair',
      'small deck repair',
      'minor deck repair',
      'deck repair cost',
    ],
  },
];

const pmax = {
  campaign: 'RMKT | PMax | Visitors 30/60/90d | Calls',
  budget: 10,
  assetGroup: 'Visitors | Deck Estimate | Calls',
  finalUrls: ['https://www.ldndecks.com/composite-decks/', 'https://www.ldndecks.com/services/deck-replacement/', 'https://www.ldndecks.com/deck-resurfacing-vs-replacement/', 'https://www.ldndecks.com/before-and-after/', 'https://www.ldndecks.com/contact/'],
  headlines: ['Ready To Build Your Deck?', 'Call LDN Decks Today', 'Composite Deck Experts', 'Replace Your Old Deck', 'Projects From $15k+', 'Permits & HOA Handled', 'Free Deck Estimate', '5.0 Rated Deck Builder', 'Trex & TimberTech Pros', 'Northern VA Deck Builder'],
  longHeadlines: ['Ready to replace your old deck with a premium composite outdoor space?', 'Call LDN Decks for composite deck builds, replacement, and resurfacing.', 'Serving Loudoun, Fairfax, and Prince William County homeowners.', 'Get a realistic deck estimate with permits and HOA details handled.'],
  descriptions: ['Still planning your deck? Call LDN Decks for a free estimate and clear next steps.', 'Composite, replacement, and resurfacing projects from $15k+ in Northern Virginia.', 'We handle design, permits, HOA coordination, materials, and installation.', 'Talk to a local 5.0 rated deck contractor today.'],
};

const sitelinks = [
  ['Composite Decks', 'https://www.ldndecks.com/composite-decks/'],
  ['Deck Replacement', 'https://www.ldndecks.com/services/deck-replacement/'],
  ['Before & After', 'https://www.ldndecks.com/before-and-after/'],
  ['Permits + HOA', 'https://www.ldndecks.com/deck-permit-loudoun-county-virginia/'],
];

const callouts = ['Licensed & Insured', '5.0 Google Rated', 'Trex Platinum Partner', 'TimberTech Certified', 'Permits & HOA Handled', 'Projects From $15k+', 'Composite Specialists', 'Free Structural Check'];

function csvEscape(value) {
  const text = String(value ?? '');
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function writeCsv(fileName, rows) {
  fs.writeFileSync(path.join(outDir, fileName), `${rows.map(row => row.map(csvEscape).join(',')).join('\n')}\n`);
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

writeCsv('01-campaigns.csv', [
  ['Campaign', 'Campaign type', 'Budget', 'Budget type', 'Bid strategy type', 'Networks', 'Status'],
  ...campaigns.map(c => [c.name, c.type, c.budget, 'Daily', c.bidStrategy, 'Google search; Search partners: off; Display network: off', 'Paused']),
  [pmax.campaign, 'Performance Max', pmax.budget, 'Daily', 'Maximize conversions', 'All', 'Paused'],
]);

writeCsv('02-ad-groups.csv', [
  ['Campaign', 'Ad group', 'Status', 'Ad group type'],
  ...campaigns.flatMap(c => c.adGroups.map(ag => [c.name, ag.name, 'Paused', 'Standard'])),
]);

writeCsv('03-keywords.csv', [
  ['Campaign', 'Ad group', 'Keyword', 'Match type', 'Final URL', 'Status'],
  ...campaigns.flatMap(c => c.adGroups.flatMap(ag => ag.keywords.map(k => [c.name, ag.name, cleanKeyword(k), matchType(k), c.finalUrl, 'Paused']))),
]);

writeCsv('04-responsive-search-ads.csv', [
  ['Campaign', 'Ad group', 'Final URL', ...Array.from({ length: 15 }, (_, i) => `Headline ${i + 1}`), ...Array.from({ length: 4 }, (_, i) => `Description ${i + 1}`), 'Status'],
  ...campaigns.flatMap(c => c.adGroups.flatMap(ag => ag.rsas.map(rsa => [c.name, ag.name, c.finalUrl, ...Array.from({ length: 15 }, (_, i) => rsa.headlines[i] || ''), ...Array.from({ length: 4 }, (_, i) => rsa.descriptions[i] || ''), 'Paused']))),
]);

writeCsv('05-shared-negative-keywords.csv', [
  ['Shared set', 'Keyword', 'Match type'],
  ...sharedNegatives.map(k => ['PRO Negative Keywords', k, 'Broad']),
]);

writeCsv('11-campaign-negative-keywords.csv', [
  ['Campaign', 'Keyword', 'Match type', 'Status'],
  ...campaignNegatives.flatMap(c => c.negatives.map(k => [c.campaign, k, 'Broad', 'Paused'])),
]);

writeCsv('06-sitelinks.csv', [
  ['Campaign', 'Sitelink text', 'Final URL', 'Status'],
  ...campaigns.flatMap(c => sitelinks.map(([text, url]) => [c.name, text, url, 'Paused'])),
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
  ...[...campaigns.map(c => c.name), pmax.campaign].flatMap(campaign => [
    [campaign, 'Loudoun County, Virginia, United States', 'Presence', 'Paused'],
    [campaign, 'Fairfax County, Virginia, United States', 'Presence', 'Paused'],
    [campaign, 'Prince William County, Virginia, United States', 'Presence', 'Paused'],
  ]),
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
