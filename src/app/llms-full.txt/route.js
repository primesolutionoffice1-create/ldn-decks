// llms-full.txt extended AI-extractable content.
// Public static file is the source of truth; this route is a fallback surface.
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const CONTENT_PATH = path.join(process.cwd(), 'public', 'llms-full.txt');

export async function GET() {
  const content = await readFile(CONTENT_PATH, 'utf8');

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
