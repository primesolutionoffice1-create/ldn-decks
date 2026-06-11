#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { blogPosts } from '../src/lib/blogData.js';
import { educationArticles } from '../src/lib/educationData.js';
import { localDateStamp, localIsoTimestamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const SRC_APP = path.join(ROOT, 'src/app');
const DOCS_DIR = path.join(ROOT, 'docs/seo');
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');
const today = localDateStamp();

const RELATED_GUIDE_CATEGORIES = {
  'deck-core': [
    '/deck-cost-calculator',
    '/composite-deck-cost-northern-virginia',
    '/composite-deck-cost-by-size',
    '/deck-financing',
    '/deck-payment-estimator',
    '/deck-builder-northern-virginia',
  ],
  'blog-commercial': [
    '/deck-builder-northern-virginia',
    '/covered-deck-builder-northern-virginia',
    '/trex-vs-timbertech-vs-azek',
    '/composite-deck-cost-northern-virginia',
    '/services/deck-replacement',
    '/deck-cost-calculator',
  ],
};

const TARGETS = [
  {
    path: '/services/deck-repair',
    label: 'Deck Repair Service Hub',
    minimumInbound: 18,
    suggestedAnchor: 'deck repair service in Northern Virginia',
    intent: 'inspection-first repair lead generation',
    match: /(repair|unsafe|rot|rotted|ledger|stair|railing|inspection|maintenance|resurface|replace|permit|code|old deck)/i,
    preferredSourceClusters: ['repair lifecycle', 'services', 'permit and HOA', 'local pages', 'trust'],
  },
  {
    path: '/deck-cost-calculator',
    label: 'Deck Cost Calculator',
    minimumInbound: 30,
    suggestedAnchor: 'deck cost calculator',
    intent: 'calculator-led commercial investigation',
    match: /(cost|price|pricing|estimate|budget|payment|finance|financing|calculator|quote|material|composite|trex|timbertech)/i,
    preferredSourceClusters: ['cost and financing', 'materials', 'local pages', 'services', 'outdoor living'],
  },
  {
    path: '/composite-deck-cost-northern-virginia',
    label: 'Composite Deck Cost Guide',
    minimumInbound: 35,
    suggestedAnchor: 'composite deck cost in Northern Virginia',
    intent: 'highest-priority cost money page',
    match: /(composite|trex|timbertech|azek|cost|price|pricing|budget|deck|material|payment|financing|roi)/i,
    preferredSourceClusters: ['cost and financing', 'materials', 'local pages', 'services', 'outdoor living'],
  },
  {
    path: '/services/deck-resurfacing',
    label: 'Deck Resurfacing Service',
    minimumInbound: 18,
    suggestedAnchor: 'deck resurfacing service',
    intent: 'wood-to-composite upgrade and save-the-frame leads',
    match: /(resurface|resurfacing|surface|boards|wood-to-composite|composite upgrade|maintenance|stain|replace|old deck|frame)/i,
    preferredSourceClusters: ['repair lifecycle', 'services', 'materials', 'cost and financing', 'local pages'],
  },
  {
    path: '/services/deck-replacement',
    label: 'Deck Replacement Service',
    minimumInbound: 18,
    suggestedAnchor: 'deck replacement service',
    intent: 'full rebuild and repair-vs-replace leads',
    match: /(replace|replacement|rebuild|tear.?down|unsafe|old deck|rot|resurface|inspection|code|permit|composite upgrade)/i,
    preferredSourceClusters: ['repair lifecycle', 'services', 'local pages', 'permit and HOA', 'cost and financing'],
  },
  {
    path: '/education/deck-stair-code-rise-run-virginia',
    label: 'Virginia Deck Stair Code Guide',
    minimumInbound: 18,
    suggestedAnchor: 'Virginia deck stair code guide',
    intent: 'AI-retrievable stair code authority and inspection support',
    match: /(stair|stairs|riser|tread|handrail|guard|landing|inspection|code|permit|safety)/i,
    preferredSourceClusters: ['education', 'tools', 'permit and HOA', 'repair lifecycle', 'services'],
  },
  {
    path: '/education/deck-stair-construction-diagram',
    label: 'Deck Stair Construction Diagram',
    minimumInbound: 18,
    suggestedAnchor: 'deck stair construction diagram',
    intent: 'visual stair construction authority and repair triage',
    match: /(stair|stairs|stringer|tread|riser|diagram|construction|inspection|repair|safety)/i,
    preferredSourceClusters: ['education', 'tools', 'repair lifecycle', 'services', 'permit and HOA'],
  },
  {
    path: '/education/ledger-board-flashing-deck-attachment-virginia',
    label: 'Ledger Board Flashing Guide',
    minimumInbound: 25,
    suggestedAnchor: 'ledger board flashing guide',
    intent: 'structural safety authority for attached decks and repair leads',
    match: /(ledger|flashing|attachment|attached|rot|water|load|structural|repair|inspection|permit)/i,
    preferredSourceClusters: ['education', 'repair lifecycle', 'permit and HOA', 'services', 'tools'],
  },
  {
    path: '/deck-permit-loudoun-county-virginia',
    label: 'Loudoun County Deck Permit Guide',
    minimumInbound: 45,
    suggestedAnchor: 'Loudoun County deck permit guide',
    intent: 'Loudoun permit authority and local conversion support',
    match: /(loudoun|permit|inspection|hoa|code|county|ashburn|leesburg|sterling|brambleton|south riding)/i,
    preferredSourceClusters: ['local pages', 'permit and HOA', 'education', 'services', 'cost and financing'],
  },
  {
    path: '/deck-permit-fairfax-county-virginia',
    label: 'Fairfax County Deck Permit Guide',
    minimumInbound: 40,
    suggestedAnchor: 'Fairfax County deck permit guide',
    intent: 'Fairfax permit authority and local conversion support',
    match: /(fairfax|permit|inspection|hoa|code|county|mclean|vienna|reston|arlington|falls church)/i,
    preferredSourceClusters: ['local pages', 'permit and HOA', 'education', 'services', 'cost and financing'],
  },
  {
    path: '/composite-decks',
    label: 'Composite Deck Service Hub',
    minimumInbound: 22,
    suggestedAnchor: 'composite deck builder',
    intent: 'high-ticket composite deck service demand',
    match: /(composite|trex|timbertech|azek|pvc|material|decking|low-maintenance|cost|replacement)/i,
    preferredSourceClusters: ['materials', 'services', 'local pages', 'cost and financing', 'education'],
  },
  {
    path: '/trex-decks',
    label: 'Trex Deck Service Hub',
    minimumInbound: 15,
    suggestedAnchor: 'Trex deck builder',
    intent: 'Trex branded service demand',
    match: /(trex|composite|decking|transcend|select|enhance|material|cost|replacement)/i,
    preferredSourceClusters: ['materials', 'services', 'local pages', 'cost and financing', 'education'],
  },
  {
    path: '/timbertech-decks',
    label: 'TimberTech and AZEK Deck Service Hub',
    minimumInbound: 10,
    suggestedAnchor: 'TimberTech and AZEK deck builder',
    intent: 'premium TimberTech/AZEK branded service demand',
    match: /(timbertech|azek|pvc|advanced pvc|composite|decking|material|cost|replacement)/i,
    preferredSourceClusters: ['materials', 'services', 'local pages', 'cost and financing', 'education'],
  },
  {
    path: '/trex-vs-timbertech-vs-azek',
    label: 'Trex vs TimberTech vs AZEK Comparison',
    minimumInbound: 18,
    suggestedAnchor: 'Trex vs TimberTech vs AZEK comparison',
    intent: 'premium composite brand decision support and AI retrieval',
    match: /(trex|timbertech|azek|pvc|composite|decking|material|brand|color|fade|warranty|cost)/i,
    preferredSourceClusters: ['materials', 'cost and financing', 'services', 'education', 'local pages'],
  },
  {
    path: '/covered-deck-builder-northern-virginia',
    label: 'Covered Deck Builder Hub',
    minimumInbound: 14,
    suggestedAnchor: 'covered deck builder in Northern Virginia',
    intent: 'high-ticket covered outdoor living and roof structure leads',
    match: /(covered|roof|screened|porch|three-season|outdoor living|shade|rain|pergola|gazebo|kitchen)/i,
    preferredSourceClusters: ['outdoor living', 'services', 'local pages', 'cost and financing', 'education'],
  },
  {
    path: '/deck-builder-northern-virginia',
    label: 'Northern Virginia Deck Builder Hub',
    minimumInbound: 30,
    suggestedAnchor: 'Northern Virginia deck builder',
    intent: 'regional deck builder authority and broad commercial demand',
    match: /(northern virginia|deck builder|custom deck|composite|trex|timbertech|azek|loudoun|fairfax|prince william|permit|replacement)/i,
    preferredSourceClusters: ['local pages', 'services', 'materials', 'cost and financing', 'education', 'trust'],
  },
];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    if (entry.isFile() && /^page\.[jt]sx?$/.test(entry.name)) out.push(full);
  }
  return out;
}

function routeFromPageFile(filePath) {
  const relative = path.relative(SRC_APP, filePath);
  const route = relative.replace(/\/page\.[jt]sx?$/, '').replace(/^page\.[jt]sx?$/, '');
  return `/${route}`.replace(/\/+/g, '/').replace(/\/$/, '') || '/';
}

function classifyRoute(route) {
  if (route === '/') return 'home';
  if (route.includes('/services')) return 'services';
  if (route.includes('/deck-builder-') || route.includes('/near-you')) return 'local pages';
  if (route.includes('cost') || route.includes('financing') || route.includes('payment')) return 'cost and financing';
  if (route.includes('permit') || route.includes('hoa')) return 'permit and HOA';
  if (route.includes('repair') || route.includes('resurfacing') || route.includes('maintenance') || route.includes('inspection')) return 'repair lifecycle';
  if (route.includes('trex') || route.includes('timbertech') || route.includes('composite') || route.includes('wood') || route.includes('azek')) return 'materials';
  if (route.includes('patio') || route.includes('porch') || route.includes('pergola') || route.includes('outdoor') || route.includes('kitchen')) return 'outdoor living';
  if (route.includes('/blog') || route.includes('/education')) return 'education';
  if (route.includes('review') || route.includes('team') || route.includes('about') || route.includes('bbb') || route.includes('houzz')) return 'trust';
  if (route.includes('/tools')) return 'tools';
  if (route.includes('/showcase') || route.includes('/before-and-after')) return 'proof pages';
  return 'other';
}

function isInternalRoute(value) {
  return value.startsWith('/') &&
    !value.startsWith('//') &&
    !value.startsWith('/_next') &&
    !value.startsWith('/api/') &&
    !/\.(?:png|jpe?g|webp|gif|svg|ico|pdf|xml|txt|webmanifest)$/i.test(value);
}

function normalizeHref(value) {
  const clean = value.split('#')[0].split('?')[0].replace(/\/$/, '') || '/';
  return isInternalRoute(clean) ? clean : null;
}

function extractInternalLinks(text) {
  const links = new Set();
  const patterns = [
    /href\s*=\s*["'](\/[^"']+)["']/g,
    /\[[^\]]+\]\((\/[^)\s]+)\)/g,
    /["'`](\/[a-z0-9][^"'`\s]*)["'`]/gi,
  ];

  for (const pattern of patterns) {
    for (const match of text.matchAll(pattern)) {
      const normalized = normalizeHref(match[1]);
      if (normalized) links.add(normalized);
    }
  }

  return [...links].sort();
}

function relatedGuideLinks(currentPath, category) {
  return (RELATED_GUIDE_CATEGORIES[category] || [])
    .filter((href) => href !== currentPath)
    .map((href) => normalizeHref(href))
    .filter(Boolean);
}

function dataDrivenEducationPages() {
  return educationArticles.map((article) => {
    const route = `/education/${article.slug}`;
    const contentLinks = extractInternalLinks(article.content || '');
    const relatedLinks = (article.relatedLinks || [])
      .map((item) => normalizeHref(item.href))
      .filter(Boolean);
    const templateLinks = relatedGuideLinks(route, 'deck-core');

    return {
      route,
      file: 'src/lib/educationData.js',
      cluster: 'education',
      links: [...new Set([...contentLinks, ...relatedLinks, ...templateLinks])].sort(),
      searchText: stripCodeNoise([
        route,
        article.title,
        article.metaTitle,
        article.metaDescription,
        article.excerpt,
        article.category,
        ...(article.tags || []),
        article.content,
      ].filter(Boolean).join(' ')).toLowerCase(),
    };
  });
}

function dataDrivenBlogPages() {
  return blogPosts.map((post) => {
    const route = `/blog/${post.slug}`;
    const contentLinks = extractInternalLinks(post.content || '');
    const sourceLinks = (post.sourceLinks || [])
      .map((item) => normalizeHref(item.href))
      .filter(Boolean);
    const templateLinks = relatedGuideLinks(route, 'blog-commercial');

    return {
      route,
      file: 'src/lib/blogData.js',
      cluster: 'education',
      links: [...new Set([...contentLinks, ...sourceLinks, ...templateLinks])].sort(),
      searchText: stripCodeNoise([
        route,
        post.title,
        post.metaTitle,
        post.metaDescription,
        post.excerpt,
        post.category,
        ...(post.tags || []),
        post.content,
      ].filter(Boolean).join(' ')).toLowerCase(),
    };
  });
}

function stripCodeNoise(text) {
  return text
    .replace(/import\s+[^;]+;/g, ' ')
    .replace(/export\s+const\s+metadata[\s\S]*?(?=\nconst|\nfunction|\nexport default|\n\nconst|\n\nfunction|$)/g, ' ')
    .replace(/\s+/g, ' ');
}

function scoreCandidate(page, target, inboundRoutes) {
  if (page.route === target.path) return 0;
  if (inboundRoutes.has(page.route)) return 0;

  let score = 0;
  if (target.preferredSourceClusters.includes(page.cluster)) score += 8;
  if (target.match.test(page.route)) score += 5;
  if (target.match.test(page.searchText)) score += 5;
  if (page.cluster === 'home') score += 10;
  if (page.cluster === 'local pages') score += 3;
  if (page.cluster === 'cost and financing' && target.path.includes('cost')) score += 5;
  if (page.route.includes('deck-builder-ashburn') || page.route.includes('deck-builder-leesburg') || page.route.includes('deck-builder-fairfax')) score += 2;
  if (page.route.includes('privacy') || page.route.includes('terms') || page.route.includes('thank-you') || page.route.includes('/admin')) score = 0;

  return score;
}

function actionFor(page, target) {
  const clusterActions = {
    home: `Add a short-path card or footer/context link using anchor "${target.suggestedAnchor}".`,
    'local pages': `Add one local planning sentence linking to "${target.suggestedAnchor}" where the page discusses scope, budget, repair, or replacement.`,
    services: `Add a related-service link to "${target.suggestedAnchor}" in the decision/CTA area.`,
    'cost and financing': `Add a budgeting sentence that sends users to "${target.suggestedAnchor}" when they need the next step.`,
    'permit and HOA': `Add a process link to "${target.suggestedAnchor}" where permits, inspection, or code risk are discussed.`,
    'repair lifecycle': `Add a repair-vs-replace or inspection-first link to "${target.suggestedAnchor}".`,
    materials: `Add a material-cost context link to "${target.suggestedAnchor}".`,
    'outdoor living': `Add a planning/cost context link to "${target.suggestedAnchor}" where decks connect to patios, porches, or pergolas.`,
    trust: `Add a trust-safe link to "${target.suggestedAnchor}" only if the page naturally discusses service selection or verification.`,
    tools: `Add a next-step link to "${target.suggestedAnchor}" near calculator results or warnings.`,
    education: `Add a related guide link to "${target.suggestedAnchor}" near the most relevant educational section.`,
  };
  return clusterActions[page.cluster] || `Add a contextual internal link to "${target.suggestedAnchor}" if it is natural for the page intent.`;
}

function main() {
  const staticPages = walk(SRC_APP).map((file) => {
    const text = fs.readFileSync(file, 'utf8');
    const route = routeFromPageFile(file);
    return {
      route,
      file: path.relative(ROOT, file),
      cluster: classifyRoute(route),
      links: extractInternalLinks(text),
      searchText: stripCodeNoise(`${route} ${text}`).toLowerCase(),
    };
  });

  const pages = [
    ...staticPages.filter((page) => !['/education/[slug]', '/blog/[slug]'].includes(page.route)),
    ...dataDrivenEducationPages(),
    ...dataDrivenBlogPages(),
  ].sort((a, b) => a.route.localeCompare(b.route));

  const reports = TARGETS.map((target) => {
    const inbound = pages
      .filter((page) => page.route !== target.path && page.links.includes(target.path))
      .map((page) => ({
        route: page.route,
        file: page.file,
        cluster: page.cluster,
      }));
    const inboundRoutes = new Set(inbound.map((page) => page.route));
    const recommendations = pages
      .map((page) => ({
        route: page.route,
        file: page.file,
        cluster: page.cluster,
        score: scoreCandidate(page, target, inboundRoutes),
        action: actionFor(page, target),
      }))
      .filter((page) => page.score > 0)
      .sort((a, b) => b.score - a.score || a.route.localeCompare(b.route))
      .slice(0, 12);

    return {
      ...target,
      inboundCount: inbound.length,
      gap: Math.max(0, target.minimumInbound - inbound.length),
      status: inbound.length >= target.minimumInbound ? 'healthy' : 'needs-links',
      inbound,
      recommendations,
    };
  });
  const gapReports = reports.filter((report) => report.gap > 0);

  const md = [
    `# Internal Link Gap Report — ${today}`,
    '',
    'Purpose: push internal authority toward the highest-intent LDN Decks money pages without creating new claims, fake proof, or doorway-style links.',
    '',
    '## Summary',
    '',
    `- Pages scanned: ${pages.length}`,
    `- Priority targets: ${TARGETS.length}`,
    `- Targets needing links: ${reports.filter((report) => report.status === 'needs-links').length}`,
    '',
    '| Target | Current inbound page links | Minimum target | Gap | Status |',
    '|---|---:|---:|---:|---|',
    ...reports.map((report) => `| \`${report.path}\` | ${report.inboundCount} | ${report.minimumInbound} | ${report.gap} | ${report.status} |`),
    '',
    '## Rules',
    '',
    '- Add only links that help the user choose the next useful step.',
    '- Do not add proof links to pages that still have evidence blockers as if they are verified case studies.',
    '- Use varied, natural anchors. Do not repeat exact-match anchors mechanically.',
    '- Prefer contextual links inside cost, repair, permit, local, and service sections over footer-only links.',
    '- If a page is already linking to a target, do not add a duplicate link unless there is a clear UX reason.',
    '',
    ...reports.flatMap((report) => [
      `## ${report.label}`,
      '',
      `- Target: \`${report.path}\``,
      `- Intent: ${report.intent}`,
      `- Suggested anchor family: "${report.suggestedAnchor}" plus natural variants`,
      `- Current inbound page links: ${report.inboundCount}`,
      `- Recommended minimum: ${report.minimumInbound}`,
      `- Gap: ${report.gap}`,
      '',
      '### Best New Link Opportunities',
      '',
      report.recommendations.length
        ? '| Source page | Cluster | Action |'
        : '- No strong source gaps found by current scanner.',
      report.recommendations.length ? '|---|---|---|' : '',
      ...report.recommendations.map((page) => `| \`${page.route}\` | ${page.cluster} | ${page.action} |`),
      '',
      '### Current Inbound Sources',
      '',
      report.inbound.length
        ? '| Source page | Cluster |'
        : '- No inbound source pages found by current scanner.',
      report.inbound.length ? '|---|---|' : '',
      ...report.inbound.slice(0, 40).map((page) => `| \`${page.route}\` | ${page.cluster} |`),
      '',
    ]),
    '## Next Implementation Order',
    '',
    ...(gapReports.length
      ? gapReports.map((report, index) => `${index + 1}. Add ${Math.min(report.gap, 8)} contextual link(s) into \`${report.path}\` from the recommended source pages above.`)
      : ['1. No priority target is below the current inbound-link threshold. Keep links natural and monitor after major content edits.']),
    `${gapReports.length + 1}. Keep already-healthy targets healthy with useful calculator, cost, repair, and service CTAs. Do not force extra exact-match links where user intent is weak.`,
    `${gapReports.length + 2}. Re-run \`npm run seo:internal-link-gap\` and \`npm run seo:link-audit\` after implementation.`,
    '',
  ].join('\n');

  const summary = {
    ok: true,
    generated: localIsoTimestamp(),
    report: `docs/seo/internal-link-gap-report-${today}.md`,
    json: `scripts/output/internal-link-gap-report-${today}.json`,
    pagesScanned: pages.length,
    targets: reports.map((report) => ({
      path: report.path,
      inboundCount: report.inboundCount,
      minimumInbound: report.minimumInbound,
      gap: report.gap,
      status: report.status,
      recommendations: report.recommendations.length,
    })),
  };

  fs.mkdirSync(DOCS_DIR, { recursive: true });
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(ROOT, summary.report), `${md}\n`);
  fs.writeFileSync(path.join(ROOT, summary.json), `${JSON.stringify({ ...summary, reports }, null, 2)}\n`);
  console.log(JSON.stringify(summary, null, 2));
}

main();
