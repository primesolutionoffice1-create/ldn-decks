#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { localDateStamp, localIsoTimestamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs/seo');
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');
const today = localDateStamp();

function readJson(relativePath, fallback = null) {
  try {
    return JSON.parse(fs.readFileSync(path.join(ROOT, relativePath), 'utf8'));
  } catch {
    return fallback;
  }
}

function readLatestOutputJson(prefix, fallback = null) {
  try {
    const files = fs.readdirSync(OUTPUT_DIR)
      .filter((file) => file.startsWith(prefix) && file.endsWith('.json'))
      .sort();
    if (!files.length) return fallback;
    return readJson(path.join('scripts/output', files.at(-1)), fallback);
  } catch {
    return fallback;
  }
}

function readText(relativePath, fallback = '') {
  try {
    return fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
  } catch {
    return fallback;
  }
}

function parseTrailingJson(output) {
  const match = output.match(/\{[\s\S]*?\}\s*$/);
  return match ? JSON.parse(match[0]) : null;
}

function runJsonScript(scriptPath) {
  try {
    const output = execFileSync('node', [scriptPath], {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    return parseTrailingJson(output);
  } catch {
    return null;
  }
}

function escapeCell(value) {
  return String(value ?? '').replaceAll('|', '\\|').replace(/\s+/g, ' ').trim();
}

function csvCell(value) {
  const text = String(value ?? '');
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function priorityWeight(priority) {
  return { P0: 0, P1: 1, P2: 2, P3: 3 }[priority] ?? 9;
}

function statusLabel(item) {
  if (item.status) return item.status;
  return item.ownerNeeded ? 'owner-needed' : 'ready-to-check';
}

function matchString(text, key, fallback = '') {
  const match = text.match(new RegExp(`${key}:\\s*'([^']*)'`));
  return match?.[1] || fallback;
}

function matchArrayBlock(text, key) {
  const match = text.match(new RegExp(`${key}:\\s*\\[([\\s\\S]*?)\\],`));
  return match?.[1] || '';
}

function loadBusiness() {
  const text = readText('src/lib/business.js');
  const sameAsBlock = matchArrayBlock(text, 'sameAs');
  const areaServedBlock = matchArrayBlock(text, 'areaServed');
  const addressBlock = text.match(/address:\s*\{([\s\S]*?)\n\s*\},/)?.[1] || '';

  return {
    name: matchString(text, 'name', 'Loudoun Decks'),
    url: matchString(text, 'url', 'https://ldndecks.com'),
    telephone: matchString(text, 'telephone', '+15716557207'),
    email: matchString(text, 'email', 'office@ldndecks.com'),
    address: {
      streetAddress: matchString(addressBlock, 'streetAddress', '13704 Winding Oak Cir'),
      addressLocality: matchString(addressBlock, 'addressLocality', 'Centreville'),
      addressRegion: matchString(addressBlock, 'addressRegion', 'VA'),
      postalCode: matchString(addressBlock, 'postalCode', '20121'),
    },
    areaServed: [...areaServedBlock.matchAll(/'([^']+)'/g)].map((match) => match[1]),
    sameAs: [...sameAsBlock.matchAll(/'([^']+)'/g)].map((match) => match[1]),
  };
}

function mapPublicProfiles(business) {
  const labels = [
    ['Google Maps', /google\.com\/maps/i],
    ['Houzz', /houzz\.com/i],
    ['Yelp', /yelp\.com/i],
    ['BBB', /bbb\.org/i],
    ['Trustpilot', /trustpilot\.com/i],
    ['BuildZoom', /buildzoom\.com/i],
    ['Loudoun Chamber', /loudounchamber\.org/i],
    ['MapQuest', /mapquest\.com/i],
    ['Facebook', /facebook\.com/i],
    ['Instagram', /instagram\.com/i],
    ['TikTok', /tiktok\.com/i],
    ['X', /x\.com/i],
  ];

  return labels.flatMap(([label, pattern]) => {
    const url = business.sameAs.find((candidate) => pattern.test(candidate));
    return url ? [{ label, url }] : [];
  });
}

function extractCitationRows() {
  const cleanup = readText('docs/seo/local-citation-cleanup-from-yext-scan.md');
  const tracker = readText('docs/seo-ops/citation-backlink-tracker.md');
  const rows = [];

  if (cleanup.includes('MapQuest | Missing listing / not found')) {
    rows.push({
      priority: 'P1',
      lane: 'citations',
      task: 'Re-verify MapQuest after sameAs/profile update',
      page: '/',
      source: 'Yext cleanup doc',
      status: 'owner-verify-live',
      ownerNeeded: true,
      evidenceRequired: 'Screenshot/profile URL showing canonical NAP.',
    });
  }

  for (const platform of ['Facebook', 'MerchantCircle', 'EZlocal', 'CitySquares', 'USCity.net', 'GoLocal247', 'AroundMe', 'Brownbook', 'Growcycle', 'Nextdoor']) {
    if (cleanup.includes(`| ${platform} |`)) {
      if (platform === 'Nextdoor') {
        rows.push({
          priority: 'P1',
          lane: 'citations',
          task: 'Resolve Nextdoor public profile name/contact contamination',
          page: '/',
          source: 'Nextdoor cleanup packet',
          status: 'owner-needed',
          ownerNeeded: true,
          evidenceRequired: `Use docs/seo/nextdoor-citation-cleanup-packet-${today}.md; capture before/after public screenshots showing canonical Loudoun Decks name, office@ldndecks.com or hidden email, clean deck/outdoor-living categories, canonical URL, and claim/admin state if accessible.`,
        });
        continue;
      }
      rows.push({
        priority: platform === 'Facebook' ? 'P0' : 'P1',
        lane: 'citations',
        task: `Resolve ${platform} NAP/name conflict or old Prime Solutions/Ashburn variant`,
        page: '/',
        source: 'Yext cleanup doc',
        status: 'owner-needed',
        ownerNeeded: true,
        evidenceRequired: 'Before/after screenshot or public URL with corrected public identity.',
      });
    }
  }

  if (cleanup.includes('BuildZoom')) {
    rows.push({
      priority: 'P0',
      lane: 'citations',
      task: 'Escalate BuildZoom license verification mismatch',
      page: '/about/certifications-and-licenses',
      source: 'Yext cleanup doc',
      status: 'owner-needed',
      ownerNeeded: true,
      evidenceRequired: 'BuildZoom corrected license state or support thread; do not claim fixed until live.',
    });
  }

  const businessSource = readText('src/lib/business.js');
  const hasNadraProfileUrl = /nadra\.org\/membership\/directory#!biz\/id\/69f274b54078d1282501ee3b/i.test(businessSource);

  for (const platform of ['Bing Places', 'Apple Business Connect', 'Angi', 'Porch', 'Thumbtack', 'Nextdoor Business', 'Trex Find a Builder', 'TimberTech/AZEK directory', 'NADRA directory']) {
    if (tracker.includes(`| ${platform} |`)) {
      if (platform === 'NADRA directory' && hasNadraProfileUrl) {
        rows.push({
          priority: 'P2',
          lane: 'citations',
          task: 'Archive NADRA directory profile proof and confirm badge link uses unique profile URL',
          page: '/',
          source: 'NADRA supplied profile URL',
          status: 'owner-verify-live',
          ownerNeeded: true,
          evidenceRequired: 'Screenshot of live NADRA profile or member dashboard showing Loudoun Decks membership; badge must link to https://www.nadra.org/membership/directory#!biz/id/69f274b54078d1282501ee3b.',
        });
        continue;
      }
      if (platform === 'Nextdoor Business') {
        rows.push({
          priority: 'P2',
          lane: 'citations',
          task: 'Claim or verify Nextdoor Business profile after public cleanup',
          page: '/',
          source: 'Nextdoor cleanup packet',
          status: 'owner-needed',
          ownerNeeded: true,
          evidenceRequired: `Use docs/seo/nextdoor-citation-cleanup-packet-${today}.md; provide live profile URL, claim/admin status screenshot, NAP screenshot, category screenshot, and canonical website field.`,
        });
        continue;
      }
      if (platform === 'Apple Business Connect') {
        rows.push({
          priority: 'P1',
          lane: 'citations',
          task: 'Claim or verify Apple Business Connect profile with canonical NAP',
          page: '/',
          source: 'Apple Business Connect verification packet',
          status: 'owner-needed',
          ownerNeeded: true,
          evidenceRequired: `Use docs/seo/apple-business-connect-verification-packet-${today}.md; capture dashboard claim/verification status, canonical NAP screenshot, category/service screenshot, website field, and public Apple Maps URL if available.`,
        });
        continue;
      }
      if (platform === 'Angi') {
        rows.push({
          priority: 'P2',
          lane: 'citations',
          task: 'Clean up Angi public profile identity and verify canonical NAP',
          page: '/',
          source: 'Angi cleanup packet',
          status: 'owner-needed',
          ownerNeeded: true,
          evidenceRequired: `Use docs/seo/angi-citation-cleanup-packet-${today}.md; capture public/admin before-after screenshots, corrected profile URL, claim status, canonical NAP/website, category screenshot, and duplicate/name cleanup confirmation if Prime Solution LLC remains visible.`,
        });
        continue;
      }
      if (platform === 'Bing Places') {
        rows.push({
          priority: 'P1',
          lane: 'citations',
          task: 'Archive and re-verify Bing Places public listing proof',
          page: '/',
          source: 'Bing Places verification packet',
          status: 'owner-verify-live',
          ownerNeeded: true,
          evidenceRequired: `Use docs/seo/bing-places-verification-packet-${today}.md; capture public Bing Maps screenshot for https://www.bing.com/maps?ss=ypid.YND1AFC4105F09B172&mkt=en-US plus dashboard claim/sync status, canonical NAP/website, category, and email screenshots.`,
        });
        continue;
      }
      rows.push({
        priority: ['Bing Places', 'Apple Business Connect', 'Trex Find a Builder', 'TimberTech/AZEK directory'].includes(platform) ? 'P1' : 'P2',
        lane: 'citations',
        task: `Claim/complete ${platform} profile with canonical NAP and service links`,
        page: '/',
        source: 'citation backlink tracker',
        status: 'owner-needed',
        ownerNeeded: true,
        evidenceRequired: 'Live profile URL, claim status, NAP screenshot, and target service URL used.',
      });
    }
  }

  return rows;
}

function buildEvidenceTasks(coverage, readiness, sprint) {
  const tasks = [
    {
      priority: 'P0',
      lane: 'proof-ops',
      task: 'Run owner evidence sprint checklist before collecting proof',
      page: '/services/deck-repair',
      source: 'owner evidence sprint checklist',
      status: 'owner-needed',
      ownerNeeded: true,
      evidenceRequired: `Use ${sprint?.report || `docs/seo/owner-evidence-sprint-${today}.md`} and ${sprint?.csv || `docs/seo/owner-evidence-sprint-${today}.csv`} to complete repair media, commercial proof, project linkage, privacy, and dry-run blocks.`,
    },
  ];

  for (const page of readiness?.pages || []) {
    if (page.verdict === 'blocked') {
      tasks.push({
        priority: 'P0',
        lane: 'proof',
        task: `Resolve publish blocker for ${page.page}`,
        page: page.page,
        source: 'publish-readiness gate',
        status: 'blocked',
        ownerNeeded: true,
        evidenceRequired: (page.issues || []).map((issue) => issue.message).join(' '),
      });
    } else if (page.verdict === 'proof-incomplete') {
      tasks.push({
        priority: 'P1',
        lane: 'proof',
        task: `Complete partial proof records for ${page.page}`,
        page: page.page,
        source: 'publish-readiness gate',
        status: 'proof-incomplete',
        ownerNeeded: true,
        evidenceRequired: (page.issues || []).map((issue) => issue.message).join(' '),
      });
    }
  }

  const repairPage = (coverage?.pages || []).find((page) => page.page === '/services/deck-repair');
  for (const asset of repairPage?.assets || []) {
    const isDocumentAsset = /permit|inspection|screenshot/i.test(asset);
    tasks.push({
      priority: 'P0',
      lane: 'photo-ingestion',
      task: `Collect original deck repair asset: ${asset}`,
      page: '/services/deck-repair',
      source: 'evidence coverage',
      status: 'missing-asset',
      ownerNeeded: true,
      evidenceRequired: isDocumentAsset
        ? 'Redacted permit/inspection screenshot or document image with private information removed; link it to a real project only if the project is verified.'
        : 'Original project photo only, with city, month/year if known, project linkage, and publication permission.',
    });
  }

  if ((coverage?.warrantyTerms?.total ?? 0) === 0) {
    tasks.push({
      priority: 'P0',
      lane: 'commercial-proof',
      task: 'Verify exact repair workmanship warranty wording',
      page: '/services/deck-repair',
      source: 'evidence coverage',
      status: 'missing',
      ownerNeeded: true,
      evidenceRequired: 'Exact term, coverage scope, exclusions, structural/labor distinction, and resurfacing distinction if any.',
    });
  }

  if ((coverage?.repairCostRanges?.total ?? 0) === 0) {
    tasks.push({
      priority: 'P0',
      lane: 'commercial-proof',
      task: 'Verify deck repair cost ranges from real pricing evidence',
      page: '/services/deck-repair',
      source: 'evidence coverage',
      status: 'missing',
      ownerNeeded: true,
      evidenceRequired: 'Invoices, accepted estimates, calculator data, or owner-approved pricing policy for joist sistering, ledger work, post replacement, and stabilization.',
    });
  }

  return tasks;
}

function buildGbpTasks(business) {
  const canonicalNap = `${business.name}, ${business.address.streetAddress}, ${business.address.addressLocality}, ${business.address.addressRegion} ${business.address.postalCode}, ${business.telephone}`;
  return [
    {
      priority: 'P0',
      lane: 'gbp',
      task: 'Verify GBP public identity matches canonical NAP',
      page: '/',
      source: 'BUSINESS single source of truth',
      status: 'owner-verify-live',
      ownerNeeded: true,
      evidenceRequired: `GBP screenshot showing ${canonicalNap}.`,
    },
    {
      priority: 'P0',
      lane: 'gbp',
      task: 'Upload original project photos tied to evidence ledger priorities',
      page: '/showcase',
      source: 'proof ops board',
      status: 'owner-needed',
      ownerNeeded: true,
      evidenceRequired: 'Original project photos only; include city and month/year metadata where known. No stock imagery.',
    },
    {
      priority: 'P1',
      lane: 'gbp',
      task: 'Publish one weekly GBP post from verified education or project content',
      page: '/services/deck-repair',
      source: 'gbp:this-week workflow',
      status: 'manual-weekly',
      ownerNeeded: true,
      evidenceRequired: 'Published post screenshot or GBP post URL. If project proof is missing, use educational content, not fake project stories.',
    },
    {
      priority: 'P1',
      lane: 'gbp',
      task: 'Review GBP services and categories against current service architecture',
      page: '/services',
      source: 'proof ops board',
      status: 'owner-verify-live',
      ownerNeeded: true,
      evidenceRequired: 'Categories/services screenshot. Keep service list truthful to actual offered services.',
    },
    {
      priority: 'P1',
      lane: 'gbp',
      task: 'Seed or refresh GBP Q&A using owner-controlled truthful answers',
      page: '/faqs',
      source: 'gbp:this-week workflow',
      status: 'manual-weekly',
      ownerNeeded: true,
      evidenceRequired: 'Screenshot of live Q&A. Do not impersonate customers or fabricate customer questions.',
    },
    {
      priority: 'P1',
      lane: 'reviews',
      task: 'Respond to all new Google reviews within 48 hours',
      page: '/reviews',
      source: 'local SEO ops',
      status: 'manual-weekly',
      ownerNeeded: true,
      evidenceRequired: 'Owner response screenshot or review dashboard status. Do not copy review excerpts into site content until source is logged.',
    },
  ];
}

function buildSourceChecklist(business, coverage, readiness, publicProfiles) {
  const canonicalNap = [
    business.name,
    business.url,
    business.telephone,
    business.email,
    `${business.address.streetAddress}, ${business.address.addressLocality}, ${business.address.addressRegion} ${business.address.postalCode}`,
  ];

  const lines = [
    `# Proof Source Checklist — ${today}`,
    '',
    'Purpose: define exactly what can become publishable proof for LDN Decks pages, GBP, Maps, citations, social cards, and AI-citable local examples without fabricating E-E-A-T.',
    '',
    '## Canonical Public Identity',
    '',
    ...canonicalNap.map((item) => `- ${item}`),
    '',
    'Use this identity everywhere. Do not create or keep public variants such as `LDNDECKS`, `Loudoun Decks Builder`, `Prime Solutions`, old Ashburn addresses, or suite/unit variants unless the platform requires a non-public legal entity field.',
    '',
    '## Verified Public Profiles In Repo',
    '',
    '| Profile | URL | Verification rule |',
    '|---|---|---|',
    ...publicProfiles.map((profile) => `| ${profile.label} | ${profile.url} | Confirm live NAP/profile state before using fresh counts or claims. |`),
    '',
    '## Directory Citation Proof Gate',
    '',
    'Directory citations are entity-graph proof only after the public listing or owner/admin dashboard confirms canonical identity. Do not add a directory URL to `sameAs`, trust blocks, proof snippets, or public copy unless the packet below is complete and `npm run seo:directory-citations:validate` passes.',
    '',
    '| Directory | Current status | Source packet | Promotion rule |',
    '|---|---|---|---|',
    `| NADRA directory | Profile URL supplied; badge/sameAs allowed pending screenshot archive | \`docs/seo/nadra-directory-verification-packet-${today}.md\` | Keep in \`sameAs\`; archive live profile or member-dashboard screenshot before treating as resolved proof. |`,
    `| Bing Places | Previously dashboard-verified; fresh screenshot still required | \`docs/seo/bing-places-verification-packet-${today}.md\` | Do not newly promote Bing as fresh public proof until current public/dashboard screenshots confirm canonical NAP. |`,
    `| Apple Business Connect | Owner-needed / not verified | \`docs/seo/apple-business-connect-verification-packet-${today}.md\` | Do not add Apple Maps to \`sameAs\` until dashboard or public place card confirms canonical NAP. |`,
    `| Nextdoor | Public profile contaminated; cleanup required | \`docs/seo/nextdoor-citation-cleanup-packet-${today}.md\` | Do not add Nextdoor to \`sameAs\` until public name/contact/category cleanup is visible. |`,
    `| Angi | Public identity ambiguous; cleanup required | \`docs/seo/angi-citation-cleanup-packet-${today}.md\` | Do not add Angi to \`sameAs\` until corrected public profile URL and canonical NAP are verified. |`,
    '',
    '## Evidence Types And Promotion Rules',
    '',
    '| Evidence type | Acceptable source | Can power | Red gate |',
    '|---|---|---|---|',
    '| Project record | Owner-filled intake row plus reviewed source notes | Case studies, service proof modules, city examples, internal proof snippets | Do not mark `verified` with unknown date, city, scope, materials, permit/HOA status, or unresolved placeholders. |',
    '| Original photo | Owner original file, public permission, project linkage | Before/after pages, showcase, GBP photos, OG assets, service proof | No stock imagery. No proof caption without project linkage. |',
    '| Warranty term | Written owner/company policy or contract language | Warranty trust blocks, deck repair page, financing/estimate reassurance | Do not guess warranty duration or scope. |',
    '| Repair cost range | Invoice, accepted estimate, calculator data, or owner-approved pricing policy | Deck repair cost sections, repair-cost page, AI answer passages | Do not publish low/high ranges without source and status. |',
    '| Public review source | Live third-party profile URL | Reviews page, social proof links, profile verification copy | No self-serving Review/AggregateRating JSON-LD. No copied review excerpts until source is logged. |',
    '| Directory citation | Public listing URL plus screenshot or owner/admin dashboard proof | Organization `sameAs`, trust badges, citation proof, Maps/entity confidence | Do not promote Bing, Apple, Nextdoor, or Angi until the relevant packet confirms canonical public identity. |',
    '| Permit or inspection outcome | Redacted permit, inspection, or owner-confirmed jurisdiction record | Project cards, county permit examples, code discussion | Do not invent permit outcomes or imply approval guarantee. |',
    '',
    '## Minimum Proof Packet Per Project',
    '',
    'Use this as the standard field-ops intake for every new project from this point forward. A project should not become a public case study, GBP post, city proof module, before/after caption, or AI-citable example until the minimum packet is complete or intentionally marked `partial`.',
    '',
    '| Field | Required for verified? | Notes |',
    '|---|---|---|',
    '| City / county | yes | Use city and county, not full address. Neighborhood/community is optional and should be omitted if privacy-sensitive. |',
    '| Month / year | yes | Use `Month YYYY`. Do not publish exact day unless already public and approved. |',
    '| Service type | yes | Example: deck resurfacing, structural repair, deck replacement, screened porch, patio. |',
    '| Scope summary | yes | Concrete work performed, not marketing copy. |',
    '| Materials / systems | yes when material claims are made | Product line, board color, railing system, fasteners, lighting, trim, or `not recorded`. |',
    '| Failure found | yes for repair pages | Example: ledger flashing gap, post rot, stair instability. Leave blank for non-repair projects. |',
    '| Work performed | yes | The repair/build work actually completed. No implied structural outcome beyond evidence. |',
    '| Permit / HOA status | yes | Use source-safe labels: required, not required, submitted by owner, handled by contractor, unknown. Do not claim approval unless documented. |',
    '| Before photo path | yes for before/after proof | Must resolve under `public/` after ingest. |',
    '| After photo path | yes for before/after proof | Must resolve under `public/` after ingest. |',
    '| Publication permission | yes | Owner confirms the image/project can be used publicly without names/full address. |',
    '| Cost or publishable range | only when cost is published | Must come from invoice, accepted estimate, calculator data, or owner-approved pricing policy. |',
    '| Source note | yes | Short internal note naming the evidence source reviewed. Do not expose private details publicly. |',
    '',
    '## Field Photo Naming Standard',
    '',
    'When original photos arrive, normalize filenames before ingesting:',
    '',
    '```text',
    'project-city-service-month-year-before-01.jpg',
    'project-city-service-month-year-after-01.jpg',
    'repair-city-failure-type-month-year-01.jpg',
    '```',
    '',
    'Rules: lowercase, hyphenated, no customer names, no street addresses, no permit numbers, no phone numbers, and no private owner-device filenames if they contain personal data.',
    '',
    '## What Must Stay Non-Citable',
    '',
    '- Exact review counts or ratings unless checked against the live profile at the time of publication.',
    '- Warranty duration, scope, exclusions, or guarantee language unless verified from written terms.',
    '- Permit approval outcomes unless supported by a redacted permit/inspection record or owner-confirmed jurisdiction record.',
    '- Exact project cost unless backed by invoice, accepted estimate, calculator data, or owner-approved pricing policy.',
    '- Completed-project examples unless city, month/year, scope, material, and photo linkage are filled.',
    '- Customer names, addresses, phone numbers, email addresses, unredacted documents, or private permit numbers.',
    '- Technician identities, credentials, certifications, or years of experience unless verified and approved.',
    '- Before/after claims from stock images, inspiration images, manufacturer images, or unlinked project photos.',
    '',
    '## Page-Specific Unlock Rules',
    '',
    '| Page | Minimum unlock requirement |',
    '|---|---|',
    '| `/services/deck-repair` | Verified repair photos, exact repair warranty term, verified repair cost ranges if cost ranges are shown, and no `DO NOT PUBLISH` markers. |',
    '| `/before-and-after` | All four before/after cards tied to real project records, image metadata or owner confirmation, and publishable scope/date/location fields. |',
    '| `/showcase` | Each showcase card either verified or clearly non-proof gallery content with no unsupported completion/cost/timeline claims. |',
    '| `/composite-deck-cost-northern-virginia` | Estimate/invoice-backed records before calling examples “real project examples.” Planning examples may remain clearly labeled as planning scenarios. |',
    '',
    '## Current Proof Blockers',
    '',
    `- Projects: ${coverage?.projects?.total ?? 0} total · ${coverage?.projects?.byStatus?.partial ?? 0} partial · ${coverage?.projects?.byStatus?.verified ?? 0} verified.`,
    `- Assets: ${coverage?.assets?.total ?? 0} total · ${coverage?.assets?.byStatus?.missing ?? 0} missing.`,
    `- Warranty terms: ${coverage?.warrantyTerms?.total ?? 0} recorded.`,
    `- Repair cost ranges: ${coverage?.repairCostRanges?.total ?? 0} recorded.`,
    `- Public review sources: ${coverage?.publicReviewSources?.total ?? 0} total · ${coverage?.publicReviewSources?.byStatus?.verified ?? 0} verified.`,
    '',
    '| Page | Verdict | Evidence needed |',
    '|---|---|---|',
    ...((readiness?.pages || []).map((page) => `| \`${page.page}\` | ${page.verdict} | ${escapeCell((page.issues || []).map((issue) => issue.message).join(' '))} |`)),
    '',
    '## Intake Files To Use',
    '',
    `- \`docs/seo/project-evidence-intake-${today}.csv\``,
    `- \`docs/seo/photo-ingestion-manifest-${today}.csv\``,
    `- \`docs/seo/warranty-terms-intake-${today}.csv\``,
    `- \`docs/seo/repair-cost-ranges-intake-${today}.csv\``,
    `- \`docs/seo/owner-evidence-sprint-${today}.md\``,
    `- \`docs/seo/owner-evidence-sprint-${today}.csv\``,
    `- \`docs/seo/owner-evidence-action-packet-${today}.csv\``,
    '',
    '## Publish Gate',
    '',
    'Before any proof-heavy page becomes deploy-ready, run:',
    '',
    '```bash',
    'npm run seo:evidence-unblock -- --date latest',
    'npm run seo:evidence-sprint',
    'npm run seo:validate-owner-intake',
    'npm run seo:directory-citations',
    'npm run seo:directory-citations:validate',
    'npm run seo:validate-ai-discovery',
    `npm run seo:import-evidence -- --type projects --file docs/seo/project-evidence-intake-${today}.csv --dry-run`,
    `npm run seo:ingest-assets -- --file docs/seo/photo-ingestion-manifest-${today}.csv --preflight`,
    `npm run seo:ingest-assets -- --file docs/seo/photo-ingestion-manifest-${today}.csv --dry-run`,
    `npm run seo:import-evidence -- --type warranty_terms --file docs/seo/warranty-terms-intake-${today}.csv --dry-run`,
    `npm run seo:import-evidence -- --type repair_cost_ranges --file docs/seo/repair-cost-ranges-intake-${today}.csv --dry-run`,
    'npm run seo:validate-evidence',
    'npm run seo:validate-proof-runtime',
    'npm run seo:publish-readiness',
    'npm run seo:prepublish-evidence',
    'npm run build',
    '```',
    '',
    '`seo:prepublish-evidence` is expected to fail until red proof blockers are actually resolved.',
    '',
  ];

  return lines.join('\n');
}

function buildTaskBoard(tasks, business, publicProfiles) {
  const sorted = [...tasks].sort((a, b) => priorityWeight(a.priority) - priorityWeight(b.priority) || a.lane.localeCompare(b.lane) || a.task.localeCompare(b.task));
  const canonicalAddress = `${business.address.streetAddress}, ${business.address.addressLocality}, ${business.address.addressRegion} ${business.address.postalCode}`;

  const lines = [
    `# GBP / Maps / Proof Ops Task Board — ${today}`,
    '',
    'Purpose: operational board for the next owner evidence collection sprint. This is Tier 0 Maps work: it does not claim live Google Business Profile metrics, photo counts, review velocity, or rankings without API/source verification.',
    '',
    '## Canonical NAP',
    '',
    `- Name: ${business.name}`,
    `- Address: ${canonicalAddress}`,
    `- Phone: ${business.telephone}`,
    `- Website: ${business.url}`,
    `- Email: ${business.email}`,
    '',
    '## Public Profile URLs From Site Entity Graph',
    '',
    '| Profile | URL | Next check |',
    '|---|---|---|',
    ...publicProfiles.map((profile) => `| ${profile.label} | ${profile.url} | Verify live NAP, category, photos, and profile status. |`),
    '',
    '## Board Summary',
    '',
    `- Total tasks: ${sorted.length}`,
    `- P0 tasks: ${sorted.filter((task) => task.priority === 'P0').length}`,
    `- P1 tasks: ${sorted.filter((task) => task.priority === 'P1').length}`,
    `- Owner/manual tasks: ${sorted.filter((task) => task.ownerNeeded).length}`,
    '',
    '## Task Board',
    '',
    '| Priority | Lane | Task | Page / target | Status | Evidence required |',
    '|---|---|---|---|---|---|',
    ...sorted.map((task) => `| ${task.priority} | ${task.lane} | ${escapeCell(task.task)} | \`${task.page}\` | ${statusLabel(task)} | ${escapeCell(task.evidenceRequired)} |`),
    '',
    '## Weekly Operating Cadence',
    '',
    '- Monday: run `npm run gbp:this-week`, choose an education-safe or verified-project GBP post, and publish manually.',
    '- Tuesday: upload original project photos tied to the evidence ledger. If no verified project photos are ready, do not use stock photos as proof.',
    '- Wednesday: review GBP Q&A, services, categories, and unanswered questions.',
    '- Thursday: respond to new reviews and log any reusable public review source in the evidence ledger before surfacing it on site.',
    '- Friday: update citation cleanup statuses and attach screenshots/URLs to the owner evidence packet.',
    '',
    '## What Not To Do',
    '',
    '- Do not fabricate project stories, technician names, reviews, certifications, warranty terms, permit outcomes, photo dates, or city proof.',
    '- Do not publish fake customer Q&A. Owner-seeded educational Q&A is acceptable only when it is truthful and controlled.',
    '- Do not add AggregateRating or self-serving Review JSON-LD for LocalBusiness/GeneralContractor.',
    '- Do not claim BuildZoom/license cleanup is resolved until the public profile reflects it.',
    '',
  ];

  return lines.join('\n');
}

function main() {
  const sprint = runJsonScript('scripts/generate-owner-evidence-sprint.mjs');
  const business = loadBusiness();
  const coverage = readJson(`scripts/output/evidence-coverage-${today}.json`, readLatestOutputJson('evidence-coverage-', {}));
  const readiness = readJson(`scripts/output/publish-readiness-${today}.json`, readLatestOutputJson('publish-readiness-', {}));
  const publicProfiles = mapPublicProfiles(business);

  const tasks = [
    ...buildEvidenceTasks(coverage, readiness, sprint),
    ...buildGbpTasks(business),
    ...extractCitationRows(),
  ];

  const checklistMd = buildSourceChecklist(business, coverage, readiness, publicProfiles);
  const taskBoardMd = buildTaskBoard(tasks, business, publicProfiles);
  const csvRows = [
    ['priority', 'lane', 'task', 'page', 'status', 'source', 'owner_needed', 'evidence_required'],
    ...tasks
      .sort((a, b) => priorityWeight(a.priority) - priorityWeight(b.priority) || a.lane.localeCompare(b.lane) || a.task.localeCompare(b.task))
      .map((task) => [task.priority, task.lane, task.task, task.page, statusLabel(task), task.source, task.ownerNeeded ? 'yes' : 'no', task.evidenceRequired]),
  ];

  fs.mkdirSync(DOCS_DIR, { recursive: true });
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const checklistPath = path.join(DOCS_DIR, `proof-source-checklist-${today}.md`);
  const taskBoardPath = path.join(DOCS_DIR, `gbp-maps-proof-ops-board-${today}.md`);
  const taskBoardCsvPath = path.join(DOCS_DIR, `gbp-maps-proof-ops-board-${today}.csv`);
  const jsonPath = path.join(OUTPUT_DIR, `proof-ops-board-${today}.json`);

  fs.writeFileSync(checklistPath, checklistMd);
  fs.writeFileSync(taskBoardPath, taskBoardMd);
  fs.writeFileSync(taskBoardCsvPath, csvRows.map((row) => row.map(csvCell).join(',')).join('\n'));

  const payload = {
    ok: true,
    generated: localIsoTimestamp(),
    checklist: path.relative(ROOT, checklistPath),
    board: path.relative(ROOT, taskBoardPath),
    csv: path.relative(ROOT, taskBoardCsvPath),
    sprintReport: sprint?.report || null,
    sprintCsv: sprint?.csv || null,
    sprintBlocks: sprint?.blocks ?? null,
    tasks: tasks.length,
    p0: tasks.filter((task) => task.priority === 'P0').length,
    p1: tasks.filter((task) => task.priority === 'P1').length,
    ownerNeeded: tasks.filter((task) => task.ownerNeeded).length,
    publicProfiles: publicProfiles.length,
    blockedPages: (readiness?.pages || []).filter((page) => page.verdict === 'blocked').length,
  };

  fs.writeFileSync(jsonPath, `${JSON.stringify(payload, null, 2)}\n`);
  console.log(JSON.stringify(payload, null, 2));
}

main();
