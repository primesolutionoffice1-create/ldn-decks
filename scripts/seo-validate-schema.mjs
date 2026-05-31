import fs from 'node:fs';
import path from 'node:path';

const checks = [
  {
    route: '/deck-financing',
    html: '.next/server/app/deck-financing.html',
    requiredTypes: ['WebPage', 'Service', 'FAQPage', 'BreadcrumbList'],
  },
  {
    route: '/services/gazebo-pergola',
    html: '.next/server/app/services/gazebo-pergola.html',
    requiredTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
  },
  {
    route: '/services/under-deck-patios',
    html: '.next/server/app/services/under-deck-patios.html',
    requiredTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
  },
];

function decodeHtmlJson(text) {
  return text
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function collectTypes(value, types = []) {
  if (!value || typeof value !== 'object') return types;
  if (Array.isArray(value)) {
    value.forEach((item) => collectTypes(item, types));
    return types;
  }
  if (typeof value['@type'] === 'string') types.push(value['@type']);
  Object.values(value).forEach((item) => collectTypes(item, types));
  return types;
}

let failed = false;

for (const check of checks) {
  const htmlPath = path.resolve(process.cwd(), check.html);
  if (!fs.existsSync(htmlPath)) {
    console.error(`schema: missing built HTML for ${check.route}: ${check.html}`);
    failed = true;
    continue;
  }

  const html = fs.readFileSync(htmlPath, 'utf8');
  const scripts = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)]
    .map((match) => decodeHtmlJson(match[1]))
    .map((json) => {
      try {
        return JSON.parse(json);
      } catch {
        return null;
      }
    })
    .filter(Boolean);

  const types = scripts.flatMap((schema) => collectTypes(schema, []));
  const missing = check.requiredTypes.filter((type) => !types.includes(type));

  if (missing.length) {
    console.error(`schema: ${check.route} missing ${missing.join(', ')}`);
    failed = true;
  } else {
    console.log(`schema: ${check.route} OK (${check.requiredTypes.join(', ')})`);
  }
}

if (failed) process.exit(1);
