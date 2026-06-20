'use client';

import { useEffect, useState } from 'react';

const modules = [
  ['overview', 'Overview', '/api/seo/overview', 'Status-safe account check.'],
  ['apiErrors', 'API Errors', '/api/seo/api-errors', 'Recent DataForSEO errors.'],
  ['keywordResearch', 'Keyword Research', '/api/seo/keyword-research', 'Search volume, keyword ideas, and site keywords.'],
  ['competitors', 'Competitors', '/api/seo/competitors', 'Labs competitor and relevant-page checks.'],
  ['backlinks', 'Backlinks', '/api/seo/backlinks', 'Summary and referring domains.'],
  ['domainAnalytics', 'Domain Analytics', '/api/seo/domain-analytics', 'Technologies and WHOIS overview.'],
  ['llmMentions', 'AI Mentions', '/api/seo/llm-mentions', 'LLM/GEO mention metrics.'],
];

const defaultKeywords = 'deck builder northern virginia,deck builder loudoun county,composite deck builder,trex deck installer,screened porch builder northern virginia';

const readinessNotes = [
  'Website, lead routing, consent, and lead proof fields are active.',
  'Scaling remains red until answered-call attribution and lead outcome proof are complete.',
  'DataForSEO is read-only here; current blocker is credential replacement if API responses show 401.',
];

function endpointWithParams(endpoint, key, sandbox, refresh) {
  const params = new URLSearchParams({ sandbox: key === 'apiErrors' ? '0' : (sandbox ? '1' : '0') });
  if (refresh) params.set('refresh', '1');

  if (key === 'keywordResearch') {
    params.set('target', 'ldndecks.com');
    params.set('keywords', defaultKeywords);
  }
  if (key === 'competitors') {
    params.set('domains', 'ldndecks.com,nvdecks.com,deckscapesva.com,midatlanticdeckandfence.com,finondecks.com');
  }
  if (['backlinks', 'domainAnalytics', 'llmMentions'].includes(key)) {
    params.set('target', 'ldndecks.com');
  }
  if (key === 'llmMentions') {
    params.set('keyword', 'deck builder northern virginia');
    params.set('platform', 'google');
  }

  return `${endpoint}?${params.toString()}`;
}

export default function SeoAdminPage() {
  const [checking, setChecking] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [active, setActive] = useState('overview');
  const [sandbox, setSandbox] = useState(true);
  const [loading, setLoading] = useState('');
  const [responses, setResponses] = useState({});
  const activeModule = modules.find(([key]) => key === active) || modules[0];

  useEffect(() => {
    fetch('/api/seo/auth', { cache: 'no-store' })
      .then((response) => response.json())
      .then((data) => setAuthenticated(Boolean(data.authenticated)))
      .finally(() => setChecking(false));
  }, []);

  async function login(event) {
    event.preventDefault();
    const response = await fetch('/api/seo/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    setAuthenticated(response.ok);
    if (response.ok) setPassword('');
  }

  async function fetchModule(key, refresh = false) {
    const selectedModule = modules.find(([moduleKey]) => moduleKey === key);
    if (!selectedModule) return;

    setLoading(key);
    const [, , endpoint] = selectedModule;
    const response = await fetch(endpointWithParams(endpoint, key, sandbox, refresh), { cache: 'no-store' });
    const data = await response.json();
    setResponses((current) => ({ ...current, [key]: { status: response.status, data, at: new Date().toISOString() } }));
    setLoading('');
  }

  async function checkAll() {
    setLoading('all');
    for (const [key] of modules) await fetchModule(key, false);
    setLoading('');
  }

  if (checking) return <main style={styles.center}>Loading...</main>;

  if (!authenticated) {
    return (
      <main style={styles.center}>
        <form onSubmit={login} style={styles.card}>
          <h1 style={styles.title}>LDN SEO Admin</h1>
          <input style={styles.input} type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Admin password" />
          <button style={styles.primary} type="submit">Sign in</button>
        </form>
      </main>
    );
  }

  const overview = responses.overview?.data;
  const accountStatus = overview?.data?.account?.status || 'checking';

  return (
    <main style={styles.layout}>
      <aside style={styles.sidebar}>
        <h1 style={styles.logo}>LDN SEO</h1>
        {modules.map(([key, label]) => (
          <button key={key} style={key === active ? styles.navActive : styles.nav} onClick={() => setActive(key)} type="button">{label}</button>
        ))}
      </aside>
      <section style={styles.main}>
        <h1 style={styles.title}>DataForSEO Dashboard</h1>
        <p style={styles.muted}>Live SEO, reputation, competitor, backlink, and AI visibility controls for ldndecks.com.</p>
        <div style={styles.statusGrid}>
          <div style={styles.statusCard}>Credentials: <b>{accountStatus}</b></div>
          <div style={styles.statusCard}>API protection: <b>enabled</b></div>
          <div style={styles.statusCard}>Sandbox: <b>{sandbox ? 'on' : 'off/live'}</b></div>
          <div style={styles.statusCard}>API errors: <b>live read-only</b></div>
          <div style={styles.statusCard}>Growth scaling gate: <b style={{ color: '#f87171' }}>RED</b></div>
        </div>
        <div style={styles.notice}>
          {readinessNotes.map((note) => (
            <p key={note} style={styles.noticeLine}>{note}</p>
          ))}
        </div>
        <div style={styles.actions}>
          <label style={styles.toggle}><input type="checkbox" checked={sandbox} onChange={(event) => setSandbox(event.target.checked)} /> Use sandbox</label>
          <button style={styles.secondary} type="button" disabled={Boolean(loading)} onClick={checkAll}>Check all modules</button>
          <button style={styles.secondary} type="button" disabled={Boolean(loading)} onClick={() => fetchModule(active, false)}>Status check</button>
          <button style={styles.primary} type="button" disabled={Boolean(loading)} onClick={() => fetchModule(active, true)}>Refresh selected</button>
        </div>
        <div style={styles.grid}>
          {modules.map(([key, label, , description]) => (
            <article key={key} style={styles.cardButton} onClick={() => setActive(key)}>
              <h2 style={styles.cardTitle}>{label}</h2>
              <p style={styles.muted}>{description}</p>
              <b>{responses[key]?.data?.productStatus || responses[key]?.data?.status || responses[key]?.data?.mode || 'idle'}</b>
            </article>
          ))}
        </div>
        <section style={styles.panel}>
          <h2 style={styles.cardTitle}>{activeModule[1]}</h2>
          <p style={styles.muted}>{activeModule[3]}</p>
          {active === 'apiErrors' ? <p style={styles.muted}>API Errors always reads the live error log. This endpoint is read-only and does not create SEO tasks.</p> : null}
          {active === 'apiErrors' ? <a style={styles.link} href="https://app.dataforseo.com/api-errors" target="_blank" rel="noreferrer">Open DataForSEO API Errors</a> : null}
          {loading ? <p>Loading {loading}...</p> : null}
          <pre style={styles.pre}>{JSON.stringify(responses[active]?.data || { status: 'No data loaded yet' }, null, 2).slice(0, 9000)}</pre>
        </section>
      </section>
    </main>
  );
}

const styles = {
  center: { minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#0b1020', color: '#e5e7eb', fontFamily: 'system-ui, sans-serif' },
  layout: { minHeight: '100vh', display: 'flex', background: '#0b1020', color: '#e5e7eb', fontFamily: 'system-ui, sans-serif' },
  sidebar: { width: 250, padding: 24, borderRight: '1px solid rgba(255,255,255,.12)', background: '#111827' },
  main: { flex: 1, padding: 32 },
  logo: { fontSize: 22, margin: '0 0 24px' },
  title: { margin: '0 0 8px', fontSize: 28 },
  muted: { color: '#9ca3af', margin: '0 0 16px' },
  nav: { width: '100%', textAlign: 'left', padding: '11px 12px', marginBottom: 6, border: 0, borderRadius: 8, background: 'transparent', color: '#cbd5e1', cursor: 'pointer' },
  navActive: { width: '100%', textAlign: 'left', padding: '11px 12px', marginBottom: 6, border: 0, borderRadius: 8, background: '#2563eb', color: 'white', cursor: 'pointer' },
  card: { width: 380, padding: 28, borderRadius: 12, background: '#111827', border: '1px solid rgba(255,255,255,.12)' },
  input: { width: '100%', padding: 12, margin: '16px 0', borderRadius: 8, border: '1px solid #374151', background: '#020617', color: '#e5e7eb' },
  primary: { padding: '10px 14px', borderRadius: 8, border: 0, background: '#2563eb', color: 'white', fontWeight: 700, cursor: 'pointer' },
  secondary: { padding: '10px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,.15)', background: '#1f2937', color: '#e5e7eb', fontWeight: 700, cursor: 'pointer' },
  toggle: { display: 'inline-flex', gap: 8, alignItems: 'center', padding: '10px 12px', borderRadius: 8, background: '#111827' },
  actions: { display: 'flex', flexWrap: 'wrap', gap: 10, margin: '20px 0' },
  statusGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 10, margin: '20px 0' },
  statusCard: { padding: 14, borderRadius: 8, background: '#111827', border: '1px solid rgba(255,255,255,.12)' },
  notice: { padding: 14, borderRadius: 8, background: '#181f2f', border: '1px solid rgba(147,197,253,.22)', color: '#cbd5e1' },
  noticeLine: { margin: '0 0 6px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 },
  cardButton: { padding: 16, borderRadius: 10, background: '#111827', border: '1px solid rgba(255,255,255,.12)', cursor: 'pointer' },
  cardTitle: { margin: '0 0 8px', fontSize: 18 },
  panel: { marginTop: 24, padding: 18, borderRadius: 10, background: '#111827', border: '1px solid rgba(255,255,255,.12)' },
  pre: { overflow: 'auto', maxHeight: 520, padding: 16, background: '#020617', borderRadius: 8, color: '#cbd5e1', whiteSpace: 'pre-wrap' },
  link: { display: 'inline-block', color: '#93c5fd', marginBottom: 16 },
};
