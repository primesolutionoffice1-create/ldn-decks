#!/usr/bin/env node
/**
 * Normalizes ServiceSchema across all service and brand pages.
 *
 * Three operations:
 * 1. Pages using inline serviceSchema objects → convert to <ServiceSchema> component
 * 2. Pages using <ServiceSchema> component → add missing url prop + relatedServices
 * 3. Pages missing ServiceSchema entirely → add component
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const BASE = resolve(import.meta.dirname, '../src/app');
const SITE = 'https://ldndecks.com';

// === SERVICE CATALOG ===
// Every service page with its normalized schema props
const CATALOG = {
  // --- /services/ pages ---
  'services/new-decks': {
    name: 'Custom Deck Construction',
    description: 'Custom residential deck design and construction in Northern Virginia. Composite, PVC and wood decks with permits, HOA approvals, structural engineering and manufacturer warranty.',
    price: '15000',
    category: 'Deck Construction',
    related: ['/services/deck-replacement', '/services/deck-resurfacing', '/composite-decks', '/trex-decks'],
  },
  'services/deck-replacement': {
    name: 'Deck Replacement and Rebuilding',
    description: 'Professional deck replacement services including structural assessment, old deck removal, and premium composite rebuilds using Trex and TimberTech.',
    lowPrice: '15000', highPrice: '65000',
    category: 'Deck Construction',
    related: ['/services/new-decks', '/services/deck-resurfacing', '/services/deck-repair-and-structural-maintenance'],
  },
  'services/deck-resurfacing': {
    name: 'Custom Deck Resurfacing',
    description: 'Professional deck resurfacing services utilizing TimberTech Vintage Collection composite boards, structural reinforcement, and aluminum railings in Northern Virginia.',
    lowPrice: '10000', highPrice: '35000',
    category: 'Deck Construction',
    related: ['/services/deck-replacement', '/services/deck-repair-and-structural-maintenance', '/services/new-decks'],
  },
  'services/deck-repair-and-structural-maintenance': {
    name: 'Deck Repair & Structural Maintenance',
    description: 'Specialized structural deck repair in Northern Virginia. Fix rotted posts, sinking decks, and code violations. Expert remediation for failed inspections.',
    price: '2500',
    category: 'Deck Repair',
    related: ['/services/deck-inspection', '/services/deck-replacement', '/services/deck-resurfacing'],
  },
  'services/deck-inspection': {
    name: 'Deck Safety Inspection',
    description: 'Professional structural deck inspection in Northern Virginia. Ledger board, posts, joists, railings checked.',
    price: '150',
    category: 'Deck Inspection',
    related: ['/services/deck-repair-and-structural-maintenance', '/services/deck-replacement'],
  },
  'services/deck-maintenance': {
    name: 'Deck Maintenance',
    description: 'Annual deck cleaning, inspection, and maintenance for Northern Virginia homeowners. Wood and composite.',
    price: '300',
    category: 'Deck Maintenance',
    related: ['/services/deck-washing', '/services/deck-inspection'],
  },
  'services/deck-washing': {
    name: 'Professional Deck Washing',
    description: 'Professional exterior residential deck cleaning, soft washing, and wood brightening services in Northern Virginia.',
    lowPrice: '300', highPrice: '1200',
    category: 'Exterior Cleaning',
    related: ['/services/outdoor-washing', '/services/deck-maintenance', '/services/concrete-washing'],
  },
  'services/deck-stair-lighting': {
    name: 'Deck & Stair Lighting',
    description: 'Integrated LED deck lighting, stair riser lights, post cap lights, and under-rail strips for Northern Virginia decks.',
    price: '2000',
    category: 'Deck Accessories',
    related: ['/services/new-decks', '/services/trex-railings'],
  },
  'services/fence': {
    name: 'Fence Installation',
    description: 'Custom fencing in Northern Virginia. Privacy, composite, vinyl, wood, and aluminum options for Loudoun, Fairfax, and Prince William County homes.',
    price: '6000',
    category: 'Fencing',
    related: ['/services/fence-cleaning', '/services/new-decks'],
  },
  'services/fence-cleaning': {
    name: 'Fence Cleaning',
    description: 'Professional wood and composite fence cleaning in Northern Virginia — removing gray weathering, mold, and algae to restore your fencing.',
    lowPrice: '200', highPrice: '800',
    category: 'Exterior Cleaning',
    related: ['/services/fence', '/services/outdoor-washing', '/services/deck-washing'],
  },
  'services/fire-pits': {
    name: 'Custom Fire Pit Installation',
    description: 'Professional custom fire pit design and installation in Northern Virginia. Wood-burning, gas, and built-in stone fire pits with integrated seating areas.',
    lowPrice: '3000', highPrice: '25000',
    category: 'Outdoor Living',
    related: ['/services/patios', '/services/gazebo-pergola', '/outdoor-living-northern-virginia'],
  },
  'services/gazebo-pergola': {
    name: 'Custom Gazebos and Pergolas',
    description: 'Custom design and build services for luxury pergolas, gazebos, and outdoor shade structures in Northern Virginia.',
    lowPrice: '8000', highPrice: '45000',
    category: 'Outdoor Living',
    related: ['/louvered-pergola-northern-virginia', '/services/fire-pits', '/outdoor-living-northern-virginia'],
  },
  'services/patios': {
    name: 'Custom Patio Construction',
    description: 'Professional patio design and installation in Northern Virginia. Pavers, flagstone, stamped concrete, and natural stone patios.',
    lowPrice: '5000', highPrice: '35000',
    category: 'Outdoor Living',
    related: ['/services/fire-pits', '/services/under-deck-patios', '/outdoor-living-northern-virginia'],
  },
  'services/under-deck-patios': {
    name: 'Under-Deck Patio Systems',
    description: 'Dry under-deck patio construction in Northern Virginia. Ceiling drainage systems that create usable space beneath elevated decks.',
    lowPrice: '5000', highPrice: '20000',
    category: 'Outdoor Living',
    related: ['/services/patios', '/services/new-decks'],
  },
  'services/porches': {
    name: 'Porch Construction',
    description: 'Custom front porches, screened porches, and open porches in Northern Virginia. Full design and build service.',
    price: '25000',
    category: 'Porch Construction',
    related: ['/screened-porch-builder-northern-virginia', '/services/porches/screened-porch', '/services/porches/front-porch'],
  },
  'services/porches/screened-porch': {
    name: 'Screened Porch Construction',
    description: 'Custom screened porches in Northern Virginia. EZE-Breeze and four-season options. Trex Platinum and TimberTech certified installer.',
    price: '35000',
    category: 'Porch Construction',
    related: ['/screened-porch-builder-northern-virginia', '/services/porches', '/three-season-room-northern-virginia'],
  },
  'services/porches/front-porch': {
    name: 'Front Porch Construction',
    description: 'Custom front porch design and construction in Northern Virginia. Enhance curb appeal with covered or open porches.',
    lowPrice: '15000', highPrice: '50000',
    category: 'Porch Construction',
    related: ['/services/porches', '/services/porches/open-porch', '/covered-deck-builder-northern-virginia'],
  },
  'services/porches/open-porch': {
    name: 'Open Porch Construction',
    description: 'Open-air porch design and build in Northern Virginia. Covered or uncovered with composite or wood decking.',
    lowPrice: '12000', highPrice: '40000',
    category: 'Porch Construction',
    related: ['/services/porches', '/services/porches/front-porch'],
  },
  'services/trex-railings': {
    name: 'Trex Railing Installation',
    description: 'Trex composite and aluminum railing systems for Northern Virginia decks. Signature, Select, and Transcend rail lines.',
    lowPrice: '1500', highPrice: '8000',
    category: 'Deck Accessories',
    related: ['/trex-decks', '/services/new-decks', '/services/deck-stair-lighting'],
  },
  'services/trex-calm-shell': {
    name: 'Trex Calm Shell Decking',
    description: 'Trex Calm Shell color installation and showcase for Northern Virginia decks. Premium composite decking in a warm beige tone.',
    price: '20000',
    category: 'Deck Construction',
    related: ['/trex-decks', '/services/new-decks', '/composite-decks'],
  },
  'services/outdoor-washing': {
    name: 'Outdoor Power Washing',
    description: 'Professional outdoor power washing in Northern Virginia — safe, effective cleaning for decks, patios, fences, and exterior surfaces.',
    lowPrice: '200', highPrice: '1500',
    category: 'Exterior Cleaning',
    related: ['/services/deck-washing', '/services/concrete-washing', '/services/house-siding-washing'],
  },
  'services/concrete-washing': {
    name: 'Concrete Washing',
    description: 'Professional concrete and masonry washing in Northern Virginia — removing oil stains, algae, and ground-in dirt from driveways, patios, and walkways.',
    lowPrice: '200', highPrice: '1000',
    category: 'Exterior Cleaning',
    related: ['/services/outdoor-washing', '/services/deck-washing', '/services/house-siding-washing'],
  },
  'services/house-siding-washing': {
    name: 'House Siding Washing',
    description: 'Professional house siding washing in Northern Virginia — safely removing dirt, mold, and algae from vinyl and fiber cement siding.',
    lowPrice: '300', highPrice: '1200',
    category: 'Exterior Cleaning',
    related: ['/services/outdoor-washing', '/services/concrete-washing'],
  },
  'services/entry-doors': {
    name: 'Entry Door Installation',
    description: 'Residential entry door replacement and installation in Northern Virginia. Fiberglass, steel, and wood door options.',
    lowPrice: '3000', highPrice: '12000',
    category: 'Exterior Renovation',
    related: ['/services/windows'],
  },
  'services/windows': {
    name: 'Window Installation',
    description: 'Residential window replacement and installation in Northern Virginia. Energy-efficient vinyl, wood, and fiberglass windows.',
    price: '5000',
    category: 'Exterior Renovation',
    related: ['/services/entry-doors'],
  },

  // --- Brand / Landing pages ---
  'composite-decks': {
    name: 'Composite Deck Installation',
    description: 'Expert composite deck installation in Northern Virginia. Trex Platinum Partner and TimberTech Certified. 25-50 year warranties.',
    lowPrice: '20000', highPrice: '80000',
    category: 'Deck Construction',
    related: ['/trex-decks', '/timbertech-decks', '/services/new-decks'],
  },
  'trex-decks': {
    name: 'Trex Deck Installation',
    description: 'Certified Trex Platinum Partner installer in Northern Virginia. Trex Enhance, Select, and Transcend product lines. 25-year warranty.',
    lowPrice: '18000', highPrice: '75000',
    category: 'Deck Construction',
    related: ['/composite-decks', '/timbertech-decks', '/services/new-decks'],
  },
  'timbertech-decks': {
    name: 'TimberTech AZEK Deck Installation',
    description: 'TimberTech and AZEK deck installation in Northern Virginia. Premium composite and PVC decking for Loudoun, Fairfax, and Prince William County homes.',
    lowPrice: '22000', highPrice: '85000',
    category: 'Deck Construction',
    related: ['/composite-decks', '/trex-decks', '/services/new-decks'],
  },
  'wood-decks': {
    name: 'Wood Deck Construction',
    description: 'Custom wood deck building in Northern Virginia. Cedar, IPE, and pressure-treated lumber options with expert craftsmanship.',
    lowPrice: '12000', highPrice: '50000',
    category: 'Deck Construction',
    related: ['/composite-decks', '/services/new-decks'],
  },
  'screened-porch-builder-northern-virginia': {
    name: 'Screened Porch Construction',
    description: 'Custom screened porches and 3-season rooms in Northern Virginia. EZE-Breeze windows, structural engineering, permits and HOA approvals included.',
    lowPrice: '25000', highPrice: '70000',
    category: 'Porch Construction',
    related: ['/three-season-room-northern-virginia', '/covered-deck-builder-northern-virginia', '/services/porches'],
  },
  'covered-deck-builder-northern-virginia': {
    name: 'Covered Deck Construction',
    description: 'Custom covered deck and roof-covered outdoor structures in Northern Virginia. Engineered for weather protection with premium materials.',
    lowPrice: '20000', highPrice: '60000',
    category: 'Outdoor Living',
    related: ['/screened-porch-builder-northern-virginia', '/services/new-decks', '/outdoor-living-northern-virginia'],
  },
  'outdoor-kitchen-builder-northern-virginia': {
    name: 'Outdoor Kitchen Construction',
    description: 'Custom outdoor kitchen design and build in Northern Virginia. Built-in grills, bars, pizza ovens, countertops, and island configurations.',
    lowPrice: '15000', highPrice: '75000',
    category: 'Outdoor Living',
    related: ['/outdoor-living-northern-virginia', '/services/fire-pits', '/services/patios'],
  },
  'louvered-pergola-northern-virginia': {
    name: 'Louvered Pergola Installation',
    description: 'Motorized louvered pergola systems in Northern Virginia. Adjustable aluminum roof structures for year-round outdoor living.',
    lowPrice: '15000', highPrice: '50000',
    category: 'Outdoor Living',
    related: ['/services/gazebo-pergola', '/outdoor-living-northern-virginia', '/covered-deck-builder-northern-virginia'],
  },
  'three-season-room-northern-virginia': {
    name: 'Three-Season Room Construction',
    description: 'Custom three-season room design and build in Northern Virginia. Enclosed outdoor rooms with EZE-Breeze windows for spring-to-fall enjoyment.',
    lowPrice: '30000', highPrice: '80000',
    category: 'Porch Construction',
    related: ['/screened-porch-builder-northern-virginia', '/services/porches', '/covered-deck-builder-northern-virginia'],
  },
  'outdoor-living-northern-virginia': {
    name: 'Outdoor Living Design and Build',
    description: 'Full-service outdoor living contractor in Northern Virginia. Decks, porches, patios, pergolas, outdoor kitchens, and backyard transformations.',
    lowPrice: '15000', highPrice: '100000',
    category: 'Outdoor Living',
    related: ['/services/new-decks', '/screened-porch-builder-northern-virginia', '/outdoor-kitchen-builder-northern-virginia'],
  },
  'deck-repair': {
    name: 'Deck Repair',
    description: 'Deck repair services for Northern Virginia. Board replacement, railing repair, structural fixes, and code compliance remediation.',
    price: '3000',
    category: 'Deck Repair',
    related: ['/services/deck-repair-and-structural-maintenance', '/services/deck-inspection', '/deck-repair-loudoun-county'],
  },
  'deck-repair-loudoun-county': {
    name: 'Deck Repair in Loudoun County',
    description: 'Expert deck repair across Loudoun County — rot and ledger board repair, joist and beam replacement, railing and stair safety upgrades.',
    lowPrice: '1500', highPrice: '15000',
    category: 'Deck Repair',
    area: [{ '@type': 'AdministrativeArea', name: 'Loudoun County, VA' }],
    related: ['/deck-repair', '/services/deck-repair-and-structural-maintenance', '/services/deck-inspection'],
  },
  'deck-remodeling': {
    name: 'Deck Remodeling',
    description: 'Transform your existing deck with new features, materials, and design upgrades in Northern Virginia.',
    lowPrice: '10000', highPrice: '60000',
    category: 'Deck Construction',
    related: ['/services/deck-resurfacing', '/services/deck-replacement', '/services/new-decks'],
  },
  'composite-deck-builder-loudoun': {
    name: 'Composite Deck Building in Loudoun County',
    description: 'Custom composite and wood deck construction across Loudoun County — Ashburn, Leesburg, Sterling, Brambleton and beyond. TrexPro Platinum installer.',
    lowPrice: '18000', highPrice: '75000',
    category: 'Deck Construction',
    area: [{ '@type': 'AdministrativeArea', name: 'Loudoun County, VA' }],
    related: ['/composite-decks', '/trex-decks', '/deck-builders-loudoun'],
  },
  'deck-builders-loudoun': {
    name: 'Custom Deck Building in Loudoun County',
    description: 'Custom composite and wood deck construction across Loudoun County — Ashburn, Leesburg, Sterling, Brambleton. TrexPro Platinum installer, HOA and permit handling.',
    lowPrice: '15000', highPrice: '80000',
    category: 'Deck Construction',
    area: [{ '@type': 'AdministrativeArea', name: 'Loudoun County, VA' }],
    related: ['/composite-deck-builder-loudoun', '/services/new-decks'],
  },
};

function buildProps(key, data) {
  const url = `${SITE}/${key}`;
  const props = [];
  props.push(`name="${data.name}"`);
  props.push(`description="${data.description}"`);
  props.push(`url="${url}"`);
  if (data.category) props.push(`category="${data.category}"`);
  if (data.lowPrice && data.highPrice) {
    props.push(`lowPrice="${data.lowPrice}"`);
    props.push(`highPrice="${data.highPrice}"`);
  } else if (data.price) {
    props.push(`price="${data.price}"`);
  }
  if (data.area) {
    props.push(`areaServed={${JSON.stringify(data.area)}}`);
  }
  if (data.related?.length) {
    const urls = data.related.map(r => `'${SITE}${r}'`);
    props.push(`relatedServices={[${urls.join(', ')}]}`);
  }
  return props;
}

function buildTag(key, data) {
  const props = buildProps(key, data);
  if (props.join(' ').length < 150) {
    return `<ServiceSchema ${props.join(' ')} />`;
  }
  return `<ServiceSchema\n        ${props.join('\n        ')}\n      />`;
}

let updated = 0;
let errors = [];

for (const [key, data] of Object.entries(CATALOG)) {
  const filePath = resolve(BASE, key, 'page.js');
  let content;
  try {
    content = readFileSync(filePath, 'utf8');
  } catch {
    errors.push(`MISSING: ${filePath}`);
    continue;
  }

  let modified = content;
  const newTag = buildTag(key, data);
  const hasImport = modified.includes("import ServiceSchema");
  const hasInlineSchema = /const serviceSchema(?:Data)?\s*=\s*\{[\s\S]*?"@type":\s*"Service"/.test(modified);
  const hasComponentTag = /<ServiceSchema[\s\S]*?\/>/m.test(modified);

  // Case 1: Has inline schema object — remove it and ensure component is used
  if (hasInlineSchema && !hasComponentTag) {
    // Remove the inline schema object
    modified = modified.replace(/const serviceSchema(?:Data)?\s*=\s*\{[\s\S]*?(?:"\s*}\s*\n)/m, (match) => {
      // Find the closing of the object by counting braces
      let depth = 0;
      let end = -1;
      for (let i = match.indexOf('{'); i < match.length; i++) {
        if (match[i] === '{') depth++;
        if (match[i] === '}') depth--;
        if (depth === 0) { end = i + 1; break; }
      }
      if (end > 0) return '';
      return match;
    });

    // Remove <JsonLd data={serviceSchema...} /> usage
    modified = modified.replace(/\s*<JsonLd data=\{serviceSchema(?:Data)?\} \/>/g, '');

    // Add ServiceSchema component tag after WebPageSchema
    const wpMatch = modified.match(/<WebPageSchema[\s\S]*?\/>/);
    if (wpMatch) {
      modified = modified.replace(wpMatch[0], wpMatch[0] + '\n      ' + newTag);
    }

    // Add import if missing
    if (!hasImport) {
      modified = modified.replace(
        /import JsonLd from ['"]@\/components\/JsonLd['"];?/,
        (m) => m + "\nimport ServiceSchema from '@/components/ServiceSchema';"
      );
      // If no JsonLd import, add after first import
      if (!modified.includes("import ServiceSchema")) {
        modified = modified.replace(/(import .* from .*;\n)/, '$1' + "import ServiceSchema from '@/components/ServiceSchema';\n");
      }
    }
  }
  // Case 2: Has component tag — replace it with normalized version
  else if (hasComponentTag) {
    // Replace existing <ServiceSchema ... /> with normalized tag
    modified = modified.replace(/<ServiceSchema[\s\S]*?\/>/m, newTag);
  }
  // Case 3: No Service schema at all — add component
  else {
    // Add import
    if (!hasImport) {
      if (modified.includes("import JsonLd")) {
        modified = modified.replace(
          /import JsonLd from ['"]@\/components\/JsonLd['"];?/,
          (m) => m + "\nimport ServiceSchema from '@/components/ServiceSchema';"
        );
      } else {
        modified = modified.replace(/(import .* from .*;\n)/, '$1' + "import ServiceSchema from '@/components/ServiceSchema';\n");
      }
    }
    // Add tag after WebPageSchema
    const wpMatch = modified.match(/<WebPageSchema[\s\S]*?\/>/);
    if (wpMatch) {
      modified = modified.replace(wpMatch[0], wpMatch[0] + '\n      ' + newTag);
    }
  }

  if (modified !== content) {
    writeFileSync(filePath, modified, 'utf8');
    updated++;
    console.log(`✓ ${key}`);
  } else {
    console.log(`— ${key} (no changes needed)`);
  }
}

console.log(`\nUpdated: ${updated} files`);
if (errors.length) {
  console.log(`Errors: ${errors.join(', ')}`);
}
