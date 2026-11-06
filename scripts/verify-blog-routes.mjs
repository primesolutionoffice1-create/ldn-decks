// Fails CI if lib/blogRoutes.js and the /blog/deck-builder-*-va redirects in
// next.config.mjs drift apart (internal links or sitemap would hit redirects).
import { readFileSync } from 'node:fs';

const config = readFileSync(new URL('../next.config.mjs', import.meta.url), 'utf8');
const routes = readFileSync(new URL('../src/lib/blogRoutes.js', import.meta.url), 'utf8');

const redirected = new Set();
for (const m of config.matchAll(/source: '\/blog\/(deck-builder-[a-z-]+-va)', destination: '([^']+)'/g)) {
  if (m[2] !== `/${m[1]}`) {
    console.error(`Redirect /blog/${m[1]} goes to ${m[2]}, expected /${m[1]}`);
    process.exit(1);
  }
  redirected.add(m[1]);
}
const listed = new Set([...routes.matchAll(/'(deck-builder-[a-z-]+-va)'/g)].map((m) => m[1]));

const missing = [...redirected].filter((s) => !listed.has(s));
const extra = [...listed].filter((s) => !redirected.has(s));
if (missing.length || extra.length) {
  if (missing.length) console.error('Redirected but missing from ROOT_CITY_BLOG_SLUGS:', missing.join(', '));
  if (extra.length) console.error('In ROOT_CITY_BLOG_SLUGS but not redirected:', extra.join(', '));
  process.exit(1);
}
console.log(`Blog routes OK: ${listed.size} city posts redirected and listed.`);
