import { randomBytes } from 'node:crypto';
import { OFFICE_PHONE_DISPLAY } from './config.mjs';

const TOKEN_PATTERN = /^[A-Za-z0-9_-]{22,}$/;
const PREVIEW_BUCKETS = new Set(['passed', 'needs_human_review']);
// Untracked on purpose. CallLink would report the token path as a phone click.
const PREVIEW_PHONE_HREF = 'tel:+15716557207';

export function createPreviewToken() {
  return randomBytes(18).toString('base64url');
}

export function attachPreview(brief, classification, previous) {
  const base = { ...(brief || {}), appliedToPublicSite: false };
  if (!PREVIEW_BUCKETS.has(classification?.bucket)) {
    return { ...base, previewToken: null, previewPath: null };
  }
  const previewToken = previous?.previewToken && TOKEN_PATTERN.test(previous.previewToken)
    ? previous.previewToken
    : createPreviewToken();
  return {
    ...base,
    previewToken,
    previewPath: `/r/${previewToken}`,
  };
}

export function findPreviewRecord(records, token) {
  if (!TOKEN_PATTERN.test(String(token || ''))) return null;
  return (records || []).find((record) => {
    const brief = record?.personalization;
    return brief?.previewToken === token && brief?.previewPath === `/r/${token}`;
  }) || null;
}

export function buildVisitorPreview(record) {
  const brief = record?.personalization;
  if (!brief?.previewToken || brief.previewPath !== `/r/${brief.previewToken}`) return null;
  const first = firstName(record.contactName);
  const city = cleanPlace(record.city) || 'Northern Virginia';
  const job = cleanPlace(brief.job) || 'Deck project';
  const jobPhrase = job.toLowerCase();
  const greeting = first
    ? `${first}, this page is for your ${jobPhrase} in ${city}.`
    : `This page is for a ${jobPhrase} in ${city}.`;
  const body = record.source === 'website'
    ? `Loudoun Decks has the note from the website. Call ${OFFICE_PHONE_DISPLAY} when you want someone to look at the property. The links below open the same city page and service page everyone else can open.`
    : `If this is your home, Loudoun Decks can look at the deck or porch. Call ${OFFICE_PHONE_DISPLAY}. The links below open the same pages everyone else can open.`;
  return {
    path: brief.previewPath,
    title: first ? `${first} — ${job} in ${city} | Loudoun Decks` : `${job} in ${city} | Loudoun Decks`,
    greeting,
    body,
    cityPage: brief.cityPage,
    cityPageNote: brief.cityPageNote || null,
    servicePage: brief.servicePage,
    phone: OFFICE_PHONE_DISPLAY,
    phoneHref: PREVIEW_PHONE_HREF,
    appliedToPublicSite: false,
  };
}

export function renderPreviewDocument(preview) {
  const phoneHref = preview?.phoneHref === PREVIEW_PHONE_HREF ? PREVIEW_PHONE_HREF : '';
  const phone = escapeHtml(preview?.phone);
  const phoneLink = phoneHref
    ? `<a href="${phoneHref}" rel="noreferrer" referrerpolicy="no-referrer">${phone}</a>`
    : phone;
  const note = preview?.cityPageNote ? ` (${escapeHtml(preview.cityPageNote)})` : '';
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow, noarchive">
<meta name="referrer" content="no-referrer">
<title>${escapeHtml(preview?.title)}</title>
<style>
  body{margin:0;background:#f7f4ef;color:#1c1c1c;font-family:Georgia,"Times New Roman",serif}
  main{max-width:40rem;margin:2.5rem auto;padding:0 1.25rem 3rem}
  h1{font-size:1.8rem;line-height:1.3;font-weight:600}
  p{font-size:1.08rem;line-height:1.55}
  a{color:#9a3412}
</style>
</head>
<body>
<main id="main">
<h1>${escapeHtml(preview?.greeting)}</h1>
<p>${escapeHtml(preview?.body)}</p>
<p>${phoneLink}</p>
<p><a href="${escapeHtml(safeInternalPath(preview?.cityPage))}" rel="noreferrer" referrerpolicy="no-referrer">City page</a>${note} · <a href="${escapeHtml(safeInternalPath(preview?.servicePage))}" rel="noreferrer" referrerpolicy="no-referrer">Service page</a></p>
</main>
</body>
</html>`;
}

export function renderPreviewNotFound() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex, nofollow, noarchive">
<meta name="referrer" content="no-referrer">
<title>Page not found | Loudoun Decks</title>
</head>
<body>
<main id="main"><h1>Page not found</h1></main>
</body>
</html>`;
}

function firstName(value) {
  const token = String(value || '').trim().split(/\s+/)[0] || '';
  if (!/^[A-Za-z][A-Za-z'’-]{1,30}$/.test(token)) return null;
  return token;
}

function cleanPlace(value) {
  const text = String(value || '').replace(/[<>]/g, '').trim();
  return text.slice(0, 80);
}

function safeInternalPath(value) {
  const path = String(value || '');
  if (!path.startsWith('/') || path.startsWith('//') || /[\s\\"'<>]/.test(path)) {
    return '/areas-we-serve';
  }
  return path;
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
