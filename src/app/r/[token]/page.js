import Link from 'next/link';
import { notFound } from 'next/navigation';
import { loadPreview } from '@/lib/lead-triage/pipeline.mjs';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const { token } = await params;
  const loaded = await loadPreview(token);
  if (!loaded) {
    return { title: 'Page not found', robots: { index: false, follow: false, nocache: true } };
  }
  return {
    title: loaded.preview.title,
    description: loaded.preview.greeting,
    robots: { index: false, follow: false, nocache: true },
  };
}

export default async function LeadPreviewPage({ params }) {
  const { token } = await params;
  const loaded = await loadPreview(token);
  if (!loaded) notFound();
  const { preview } = loaded;

  return (
    <main id="main" style={{ maxWidth: 720, margin: '2rem auto', padding: '0 1.25rem 3rem' }}>
      <h1 style={{ fontSize: '2rem', lineHeight: 1.25 }}>{preview.greeting}</h1>
      <p style={{ fontSize: '1.05rem', lineHeight: 1.5 }}>{preview.body}</p>
      <p>
        <a href={preview.phoneHref}>{preview.phone}</a>
      </p>
      <p>
        <Link href={preview.cityPage}>City page</Link>
        {preview.cityPageNote ? ` (${preview.cityPageNote})` : ''}
        {' · '}
        <Link href={preview.servicePage}>Service page</Link>
      </p>
    </main>
  );
}
