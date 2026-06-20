import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const appRoot = path.join(repoRoot, 'src/app');

function normalizePath(value) {
  const [withoutHash] = String(value).split('#');
  const [withoutQuery] = withoutHash.split('?');
  if (!withoutQuery || !withoutQuery.startsWith('/')) return null;
  return withoutQuery.replace(/\/$/, '') || '/';
}

function walkStaticRoutes(dir, prefix = '') {
  const routes = new Set();
  const entries = fs.existsSync(dir) ? fs.readdirSync(dir, { withFileTypes: true }) : [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith('_') || entry.name.startsWith('(')) continue;
    if (entry.name.startsWith('[')) continue;

    const routePath = path.join(dir, entry.name);
    const nextPrefix = `${prefix}/${entry.name}`;
    const hasPage = ['page.js', 'page.jsx', 'page.ts', 'page.tsx'].some((file) => (
      fs.existsSync(path.join(routePath, file))
    ));

    if (hasPage) routes.add(normalizePath(nextPrefix));
    for (const child of walkStaticRoutes(routePath, nextPrefix)) routes.add(child);
  }

  return routes;
}

function extractMarkdownLinks(content) {
  const links = [];
  const regex = /(?<!!)\[[^\]]+\]\((\/[^)]+)\)/g;
  let match;
  while ((match = regex.exec(content || '')) !== null) {
    const href = normalizePath(match[1]);
    if (href) links.push(href);
  }
  return links;
}

const [{ blogPosts }, { educationArticles }] = await Promise.all([
  import(pathToFileURL(path.join(repoRoot, 'src/lib/blogData.js')).href),
  import(pathToFileURL(path.join(repoRoot, 'src/lib/educationData.js')).href),
]);

const validRoutes = walkStaticRoutes(appRoot);
validRoutes.add('/');
validRoutes.add('/blog');
validRoutes.add('/education');

for (const post of blogPosts) {
  validRoutes.add(`/blog/${post.slug}`);
}

for (const article of educationArticles) {
  validRoutes.add(`/education/${article.slug}`);
}

const problems = [];

for (const post of blogPosts) {
  for (const href of extractMarkdownLinks(post.content)) {
    if (!validRoutes.has(href)) {
      problems.push({ source: `blog:${post.slug}`, href });
    }
  }
}

for (const article of educationArticles) {
  for (const href of extractMarkdownLinks(article.content)) {
    if (!validRoutes.has(href)) {
      problems.push({ source: `education:${article.slug}`, href });
    }
  }
  for (const item of article.relatedLinks || []) {
    const href = normalizePath(item.href);
    if (href && !validRoutes.has(href)) {
      problems.push({ source: `education:${article.slug}:relatedLinks`, href });
    }
  }
}

const summary = {
  staticRoutes: validRoutes.size,
  blogPosts: blogPosts.length,
  educationArticles: educationArticles.length,
  badCount: problems.length,
  bad: problems,
};

console.log(JSON.stringify(summary, null, 2));

if (problems.length) {
  process.exit(1);
}
