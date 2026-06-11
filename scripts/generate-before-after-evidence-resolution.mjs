#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs/seo');
const today = localDateStamp();

const rows = [
  {
    project_id: 'before-after-project-1',
    page: '/before-and-after',
    current_status: 'partial',
    known_assets: 'project1before.jpeg; project1after.jpeg',
    evidence_needed: 'month/year; material; scope; frame inspection; final cost or range; timeline; savings claim; permit/HOA status',
    next_action: 'Collect owner project record before removing VERIFY markers',
  },
  {
    project_id: 'before-after-project-2',
    page: '/before-and-after',
    current_status: 'partial',
    known_assets: 'project2before.jpeg; project2after.jpeg',
    evidence_needed: 'month/year; material; structural scope; final cost or range; timeline; permit/HOA status; code-compliance details',
    next_action: 'Collect owner project record before removing VERIFY markers',
  },
  {
    project_id: 'before-after-project-3',
    page: '/before-and-after',
    current_status: 'partial',
    known_assets: 'project3before.jpeg; project3after.jpeg',
    evidence_needed: 'month/year; material; skirting/storage scope; final cost or range; timeline; permit/HOA status',
    next_action: 'Collect owner project record before removing VERIFY markers',
  },
  {
    project_id: 'before-after-project-4',
    page: '/before-and-after',
    current_status: 'partial',
    known_assets: 'project4before.jpeg; project4after.jpeg',
    evidence_needed: 'month/year; material; townhome/HOA requirements; final cost or range; timeline; permit/HOA status; disruption claim',
    next_action: 'Collect owner project record before removing VERIFY markers',
  },
  {
    project_id: 'composite-cost-examples',
    page: '/composite-deck-cost-northern-virginia',
    current_status: 'missing',
    known_assets: 'none linked to evidence ledger',
    evidence_needed: 'estimate/invoice-backed city examples; size; material; rail/stair/light scope; final cost or range; permit/HOA status; matching photo',
    next_action: 'Keep as estimating scenarios until records are verified',
  },
];

function csvEscape(value) {
  const text = String(value ?? '');
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function renderCsv() {
  const headers = ['project_id', 'page', 'current_status', 'known_assets', 'evidence_needed', 'next_action'];
  return `${[
    headers.join(','),
    ...rows.map((row) => headers.map((header) => csvEscape(row[header])).join(',')),
  ].join('\n')}\n`;
}

function renderMarkdown() {
  return `# Before/After Evidence Resolution Sprint

Created: ${today}

## Purpose

This sprint moves \`/before-and-after\` and related cost examples from placeholder-safe content toward verified proof assets without fabricating project details.

Current status:

- Before/after image files exist in \`public/Projectsbeforeandafter\`.
- Four \`/before-and-after\` project cards are now represented in \`seo-blueprint/evidence/project-evidence-ledger.json\`.
- All four are marked \`partial\`, not \`verified\`.
- Public copy keeps \`[VERIFY ...]\` markers for month/year, timeline, final cost, and claim-specific highlights.

## Publish Rule

Do not remove \`[VERIFY ...]\` placeholders or describe these entries as verified case studies until the matching project record has:

- signed estimate, invoice, or owner-confirmed job record
- city and neighborhood, if available
- month/year
- exact service type
- material line and color
- verified scope of work
- final cost or approved publishable cost range
- construction timeline or approved publishable timeline range
- permit or HOA status, if applicable
- before and after photo linkage confirmation

No customer names, street addresses, phone numbers, emails, permit numbers, or unredacted private documents should be stored in the public repo.

## Current Project Cards

### before-after-project-1

Current page label: Wood to Composite Resurfacing

Known:

- City: Leesburg
- Photo pair:
  - \`/Projectsbeforeandafter/project1before.jpeg\`
  - \`/Projectsbeforeandafter/project1after.jpeg\`
- Claimed material on page: Trex Enhance Naturals Foggy Wharf

Needs verification:

- month/year
- neighborhood, if safe to publish
- actual material line and color
- whether this was resurfacing or full replacement
- frame inspection result
- final cost or publishable cost range
- timeline
- savings claim or replacement note
- permit or HOA status

### before-after-project-2

Current page label: Elevated Deck Modernization

Known:

- City: Ashburn
- Photo pair:
  - \`/Projectsbeforeandafter/project2before.jpeg\`
  - \`/Projectsbeforeandafter/project2after.jpeg\`
- Claimed material on page: TimberTech Reserve Collection

Needs verification:

- month/year
- neighborhood or community, if safe to publish
- actual material line and color
- structural scope
- whether frame, ledger, footings, stairs, or railings were replaced
- final cost or publishable cost range
- timeline
- permit or HOA status
- any code-compliance claims

### before-after-project-3

Current page label: Full Backyard Revitalization

Known:

- City: Manassas
- Photo pair:
  - \`/Projectsbeforeandafter/project3before.jpeg\`
  - \`/Projectsbeforeandafter/project3after.jpeg\`
- Claimed material on page: Trex Transcend Lineage

Needs verification:

- month/year
- actual material line and color
- whether skirting and storage access were included
- final cost or publishable cost range
- timeline
- permit or HOA status
- exact work performed

### before-after-project-4

Current page label: Townhome Deck Transformation

Known:

- City: Sterling
- Photo pair:
  - \`/Projectsbeforeandafter/project4before.jpeg\`
  - \`/Projectsbeforeandafter/project4after.jpeg\`
- Claimed material on page: Trex Enhance Basics Clam Shell

Needs verification:

- month/year
- neighborhood/community, if safe to publish
- actual material line and color
- townhome/HOA requirements
- final cost or publishable cost range
- timeline
- permit or HOA status
- any claim about minimal neighbor disruption

## Composite Cost Page Evidence Gap

\`/composite-deck-cost-northern-virginia\` currently treats local examples as estimating scenarios, not verified case studies.

To upgrade them into proof-bearing examples, collect:

- signed estimate or invoice
- city
- month/year
- size
- material line/color
- railing/stair/light scope
- elevation and site conditions
- final installed cost or approved publishable cost band
- permit or HOA status
- at least one matching project photo

## Owner Collection Packet

For each project, ask the owner for:

\`\`\`text
Project ID:
City:
Neighborhood/community:
Month/year:
Service type:
Materials:
Scope performed:
Failure found, if any:
Permit/HOA required?
Final cost or publishable range:
Timeline or publishable range:
Before photo path:
After photo path:
Notes safe to publish:
Private details to omit:
\`\`\`

Prefilled CSV for owner completion:

\`seo-blueprint/evidence/before-after-owner-intake-${today}.csv\`

The owner should replace \`UNKNOWN - OWNER TO FILL\` values and add only facts that can be supported by an estimate, invoice, project record, photo metadata, or direct owner confirmation.

## Next Implementation Step After Evidence Arrives

1. Fill \`seo-blueprint/evidence/project-evidence-intake-template.csv\`.
2. Run dry import:

\`\`\`bash
npm run seo:import-evidence -- --file path/to/owner-filled.csv --dry-run
\`\`\`

3. Inspect each row manually.
4. Import with verified status only if evidence has been inspected:

\`\`\`bash
npm run seo:import-evidence -- --file path/to/owner-filled.csv --allow-verified
\`\`\`

5. Run:

\`\`\`bash
npm run seo:validate-evidence
npm run seo:validate-schema
npm run build
\`\`\`

6. Remove the matching \`[VERIFY ...]\` markers only for records that are actually verified.
`;
}

function main() {
  fs.mkdirSync(DOCS_DIR, { recursive: true });
  const md = `docs/seo/before-after-evidence-resolution-${today}.md`;
  const csv = `docs/seo/before-after-evidence-resolution-${today}.csv`;
  fs.writeFileSync(path.join(ROOT, md), renderMarkdown());
  fs.writeFileSync(path.join(ROOT, csv), renderCsv());
  console.log(JSON.stringify({
    ok: true,
    report: md,
    csv,
    rows: rows.length,
    partialRows: rows.filter((row) => row.current_status === 'partial').length,
    missingRows: rows.filter((row) => row.current_status === 'missing').length,
  }, null, 2));
}

main();
