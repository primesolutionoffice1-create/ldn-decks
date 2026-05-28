#!/usr/bin/env node
/**
 * Blog post draft generator
 *
 * Appends a new draft entry to `src/lib/blogData.js`. The file is parsed via
 * regex (the array is a JS literal, not JSON) — we locate the trailing `]`
 * and insert the new object before it. Date is set to today; the post is
 * marked DRAFT in the title until the user removes the prefix.
 *
 * Invocation:
 *   node scripts/new-blog-post.mjs <slug> "<Title>"           # uses defaults
 *   node scripts/new-blog-post.mjs <slug> "<Title>" --image=/images/imgN.jpeg
 *
 * After generation, run `npm run seo:validate-schema` and `npm run build`
 * to confirm the entry doesn't break anything.
 */
import fs from 'node:fs';
import path from 'node:path';

const BLOG_DATA_PATH = path.resolve('src/lib/blogData.js');

function parseArgs() {
  const slug = process.argv[2];
  const title = process.argv[3];
  if (!slug || !title) {
    console.error('Usage: node scripts/new-blog-post.mjs <slug> "<Title>" [--image=/images/imgN.jpeg]');
    process.exit(1);
  }
  if (!/^[a-z0-9-]+$/.test(slug)) {
    console.error(`Invalid slug: ${slug} (must be lowercase alphanumeric + hyphens)`);
    process.exit(1);
  }
  const opts = {};
  for (let i = 4; i < process.argv.length; i++) {
    const m = process.argv[i].match(/^--(\w+)=(.+)$/);
    if (m) opts[m[1]] = m[2];
  }
  return { slug, title, opts };
}

function todayHuman() {
  const d = new Date();
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

function buildEntry({ slug, title, opts }) {
  const id = '__AUTO_ID__';
  const image = opts.image || '/images/img13.jpeg';
  const author = opts.author || 'Nick - Loudoun Decks';
  const category = opts.category || 'Northern Virginia Decks';
  const date = opts.date || todayHuman();
  return `  {
    id: ${id},
    title: '${title.replace(/'/g, "\\'")}',
    slug: '${slug}',
    image: '${image}',
    date: '${date}',
    author: '${author}',
    metaTitle: '${title.replace(/'/g, "\\'")} | Loudoun Decks',
    metaDescription: 'TODO — write a 150–160 character meta description that includes the primary keyword and a clear value proposition.',
    category: '${category}',
    tags: ['TODO-tag-1', 'TODO-tag-2', 'loudoun decks'],
    excerpt: 'TODO — write a 1–2 sentence excerpt that previews the article and uses the primary keyword once. This text renders as the lead paragraph and as the OG description.',
    content: 'TODO — write the article body. Use \\n\\n for paragraph breaks, ## for H2, ### for H3, **bold**, and [label](/internal-or-external-url) for links. Aim for 1,200–2,000 words. End with a "Related:" footer that links 2–3 internal pages.',
    faq: [
      { q: 'TODO question 1?', a: 'TODO answer 1.' },
      { q: 'TODO question 2?', a: 'TODO answer 2.' },
      { q: 'TODO question 3?', a: 'TODO answer 3.' }
    ]
  }`;
}

function main() {
  const args = parseArgs();
  const src = fs.readFileSync(BLOG_DATA_PATH, 'utf8');

  // Reject duplicate slugs
  if (new RegExp(`slug:\\s*['"]${args.slug}['"]`).test(src)) {
    console.error(`Slug already exists: ${args.slug}`);
    process.exit(1);
  }

  // Pick the next id by scanning existing `id:` lines
  const ids = [...src.matchAll(/^\s*id:\s*(\d+)/gm)].map(m => Number(m[1]));
  const nextId = Math.max(0, ...ids) + 1;

  const entry = buildEntry(args).replace('__AUTO_ID__', String(nextId));

  // The file ends with `]` followed by newline. Find the LAST `]` in the file
  // and the `}` immediately preceding it (the closing brace of the last entry)
  // to insert a comma and the new entry between them.
  const trimmed = src.replace(/\s*$/, '');
  const closingBracketIdx = trimmed.lastIndexOf(']');
  if (closingBracketIdx === -1) {
    console.error('Could not locate closing bracket of blogPosts array.');
    process.exit(1);
  }
  // Find the closing brace before that bracket
  const lastBraceIdx = trimmed.lastIndexOf('}', closingBracketIdx);
  if (lastBraceIdx === -1) {
    console.error('Could not locate closing brace of last entry.');
    process.exit(1);
  }
  const before = trimmed.slice(0, lastBraceIdx + 1);
  const after = trimmed.slice(lastBraceIdx + 1);
  const out = `${before},\n${entry}${after}\n`;
  fs.writeFileSync(BLOG_DATA_PATH, out);

  console.log(`Added draft entry id=${nextId} slug=${args.slug}`);
  console.log(`Edit it in src/lib/blogData.js — search for slug: '${args.slug}'`);
  console.log(`Then run: npm run seo:validate-schema && npm run build`);
}

main();
