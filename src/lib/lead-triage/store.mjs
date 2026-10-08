import { randomUUID } from 'node:crypto';
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const EMPTY_META = { cursors: {}, lastSummaryDate: null };

function nowIso() {
  return new Date().toISOString();
}

function stamp(record, created) {
  const timestamp = nowIso();
  return {
    ...record,
    createdAt: created ? (record.createdAt || timestamp) : record.createdAt,
    updatedAt: timestamp,
  };
}

export function createMemoryStore(seed = []) {
  const records = new Map();
  for (const record of seed) records.set(record.id, { ...record });
  let meta = { ...EMPTY_META, cursors: {} };

  return {
    kind: 'memory',
    async upsert(record) {
      const existing = [...records.values()].find((item) => item.source === record.source && item.externalId === record.externalId);
      if (existing) return { record: existing, created: false };
      const stored = stamp({ ...record, id: record.id || randomUUID() }, true);
      records.set(stored.id, stored);
      return { record: stored, created: true };
    },
    async update(id, patch) {
      const current = records.get(id);
      if (!current) return null;
      const next = stamp({ ...current, ...patch, id }, false);
      records.set(id, next);
      return next;
    },
    async getById(id) {
      return records.get(id) || null;
    },
    async list(filter = {}) {
      return filterRecords([...records.values()], filter);
    },
    async getMeta() {
      return structuredClone(meta);
    },
    async setMeta(patch) {
      meta = {
        ...meta,
        ...patch,
        cursors: patch.cursors ? { ...meta.cursors, ...patch.cursors } : meta.cursors,
      };
      return structuredClone(meta);
    },
  };
}

export function filterRecords(records, filter = {}) {
  let rows = [...records];
  if (filter.status) rows = rows.filter((row) => row.status === filter.status);
  if (filter.statuses) rows = rows.filter((row) => filter.statuses.includes(row.status));
  if (filter.createdSince) rows = rows.filter((row) => row.createdAt >= filter.createdSince);
  if (filter.createdUntil) rows = rows.filter((row) => row.createdAt < filter.createdUntil);
  rows.sort((a, b) => {
    const rank = (b.classification?.rank || 0) - (a.classification?.rank || 0);
    if (rank !== 0) return rank;
    return String(b.createdAt).localeCompare(String(a.createdAt));
  });
  if (filter.limit) rows = rows.slice(0, filter.limit);
  return rows;
}

async function readJson(path) {
  try {
    const text = await readFile(path, 'utf8');
    return JSON.parse(text);
  } catch (error) {
    if (error?.code === 'ENOENT') return { records: [], meta: { ...EMPTY_META } };
    throw error;
  }
}

export function createFileStore(filePath) {
  let queue = Promise.resolve();
  const memory = createMemoryStore();
  let loaded = false;

  async function load() {
    if (loaded) return;
    const data = await readJson(filePath);
    for (const record of data.records || []) {
      await memory.upsert({ ...record });
      if (record.status && record.status !== 'pending') {
        await memory.update(record.id, record);
      }
    }
    if (data.meta) await memory.setMeta(data.meta);
    loaded = true;
  }

  async function persist() {
    const records = await memory.list();
    const meta = await memory.getMeta();
    await mkdir(dirname(filePath), { recursive: true });
    const temp = `${filePath}.${process.pid}.tmp`;
    await writeFile(temp, JSON.stringify({ records, meta }, null, 2));
    await rename(temp, filePath);
  }

  function run(fn) {
    const next = queue.then(async () => {
      await load();
      return fn();
    });
    queue = next.then(() => undefined, () => undefined);
    return next;
  }

  return {
    kind: 'file',
    path: filePath,
    async upsert(record) {
      return run(async () => {
        const result = await memory.upsert(record);
        if (result.created) await persist();
        return result;
      });
    },
    async update(id, patch) {
      return run(async () => {
        const result = await memory.update(id, patch);
        if (result) await persist();
        return result;
      });
    },
    async getById(id) {
      return run(() => memory.getById(id));
    },
    async list(filter) {
      return run(() => memory.list(filter));
    },
    async getMeta() {
      return run(() => memory.getMeta());
    },
    async setMeta(patch) {
      return run(async () => {
        const result = await memory.setMeta(patch);
        await persist();
        return result;
      });
    },
  };
}

const RECORD_COLUMNS = [
  'id',
  'source',
  'external_id',
  'received_at',
  'contact_name',
  'email',
  'phone',
  'city',
  'state',
  'address',
  'service_hint',
  'message',
  'raw',
  'status',
  'classification',
  'draft',
  'summary_sent_at',
  'created_at',
  'updated_at',
];

export function rowToRecord(row) {
  if (!row) return null;
  return {
    id: row.id,
    source: row.source,
    externalId: row.external_id,
    receivedAt: toIso(row.received_at),
    contactName: row.contact_name || '',
    email: row.email || '',
    phone: row.phone || '',
    city: row.city || '',
    state: row.state || '',
    address: row.address || '',
    serviceHint: row.service_hint || '',
    message: row.message || '',
    raw: row.raw || {},
    status: row.status,
    classification: row.classification || null,
    draft: row.draft || null,
    summarySentAt: row.summary_sent_at ? toIso(row.summary_sent_at) : null,
    createdAt: toIso(row.created_at),
    updatedAt: toIso(row.updated_at),
  };
}

function toIso(value) {
  if (!value) return null;
  if (value instanceof Date) return value.toISOString();
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? String(value) : date.toISOString();
}

const SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS lead_triage_records (
  id TEXT PRIMARY KEY,
  source TEXT NOT NULL,
  external_id TEXT NOT NULL,
  received_at TIMESTAMPTZ NOT NULL,
  contact_name TEXT,
  email TEXT,
  phone TEXT,
  city TEXT,
  state TEXT,
  address TEXT,
  service_hint TEXT,
  message TEXT,
  raw JSONB NOT NULL DEFAULT '{}'::jsonb,
  status TEXT NOT NULL,
  classification JSONB,
  draft JSONB,
  summary_sent_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (source, external_id)
);
CREATE TABLE IF NOT EXISTS lead_triage_meta (
  id TEXT PRIMARY KEY,
  value JSONB NOT NULL
);
`;

export async function createPostgresStore(connectionString) {
  const pgModule = await import('pg');
  const Pool = pgModule.default?.Pool || pgModule.Pool;
  const pool = new Pool(poolConfig(connectionString));
  let ready;

  function ensure() {
    if (!ready) ready = pool.query(SCHEMA_SQL);
    return ready;
  }

  async function query(text, values) {
    await ensure();
    return pool.query(text, values);
  }

  return {
    kind: 'postgres',
    async upsert(record) {
      const found = await query(
        'SELECT * FROM lead_triage_records WHERE source = $1 AND external_id = $2',
        [record.source, record.externalId],
      );
      if (found.rows[0]) return { record: rowToRecord(found.rows[0]), created: false };
      const id = record.id || randomUUID();
      const timestamp = nowIso();
      const inserted = await query(
        `INSERT INTO lead_triage_records (${RECORD_COLUMNS.join(', ')})
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13::jsonb,$14,$15::jsonb,$16::jsonb,$17,$18,$19)
         RETURNING *`,
        [
          id,
          record.source,
          record.externalId,
          record.receivedAt,
          record.contactName || null,
          record.email || null,
          record.phone || null,
          record.city || null,
          record.state || null,
          record.address || null,
          record.serviceHint || null,
          record.message || null,
          JSON.stringify(record.raw || {}),
          record.status || 'pending',
          record.classification ? JSON.stringify(record.classification) : null,
          record.draft ? JSON.stringify(record.draft) : null,
          record.summarySentAt || null,
          record.createdAt || timestamp,
          timestamp,
        ],
      );
      return { record: rowToRecord(inserted.rows[0]), created: true };
    },
    async update(id, patch) {
      const current = await this.getById(id);
      if (!current) return null;
      const next = { ...current, ...patch, id, updatedAt: nowIso() };
      const updated = await query(
        `UPDATE lead_triage_records SET
           contact_name = $2,
           email = $3,
           phone = $4,
           city = $5,
           state = $6,
           address = $7,
           service_hint = $8,
           message = $9,
           raw = $10::jsonb,
           status = $11,
           classification = $12::jsonb,
           draft = $13::jsonb,
           summary_sent_at = $14,
           updated_at = $15
         WHERE id = $1
         RETURNING *`,
        [
          id,
          next.contactName || null,
          next.email || null,
          next.phone || null,
          next.city || null,
          next.state || null,
          next.address || null,
          next.serviceHint || null,
          next.message || null,
          JSON.stringify(next.raw || {}),
          next.status,
          next.classification ? JSON.stringify(next.classification) : null,
          next.draft ? JSON.stringify(next.draft) : null,
          next.summarySentAt || null,
          next.updatedAt,
        ],
      );
      return rowToRecord(updated.rows[0]);
    },
    async getById(id) {
      const result = await query('SELECT * FROM lead_triage_records WHERE id = $1', [id]);
      return rowToRecord(result.rows[0]);
    },
    async list(filter = {}) {
      const result = await query('SELECT * FROM lead_triage_records', []);
      return filterRecords(result.rows.map(rowToRecord), filter);
    },
    async getMeta() {
      const result = await query('SELECT value FROM lead_triage_meta WHERE id = $1', ['default']);
      return { ...EMPTY_META, ...(result.rows[0]?.value || {}) };
    },
    async setMeta(patch) {
      const current = await this.getMeta();
      const next = {
        ...current,
        ...patch,
        cursors: patch.cursors ? { ...current.cursors, ...patch.cursors } : current.cursors,
      };
      await query(
        `INSERT INTO lead_triage_meta (id, value) VALUES ('default', $1::jsonb)
         ON CONFLICT (id) DO UPDATE SET value = EXCLUDED.value`,
        [JSON.stringify(next)],
      );
      return next;
    },
  };
}

function poolConfig(connectionString) {
  const config = { connectionString, max: 1 };
  const local = /localhost|127\.0\.0\.1/.test(connectionString);
  const declaresSsl = /sslmode=/.test(connectionString);
  if (!local && !declaresSsl) config.ssl = { rejectUnauthorized: false };
  return config;
}

export function resolveStoreKind(env = process.env) {
  const explicit = String(env.LEAD_TRIAGE_STORE || '').trim().toLowerCase();
  if (explicit === 'memory' || explicit === 'file' || explicit === 'postgres') return explicit;
  if (env.DATABASE_URL) return 'postgres';
  return 'file';
}

export function defaultFilePath(env = process.env) {
  if (env.LEAD_TRIAGE_STORE_PATH) return env.LEAD_TRIAGE_STORE_PATH;
  return join(process.cwd(), 'data', 'lead-triage', 'store.json');
}

let singleton;

export async function getStore(env = process.env) {
  if (singleton && singleton.env === env) return singleton.store;
  const kind = resolveStoreKind(env);
  let store;
  if (kind === 'memory') store = createMemoryStore();
  else if (kind === 'postgres') {
    if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
    store = await createPostgresStore(env.DATABASE_URL);
  } else store = createFileStore(defaultFilePath(env));
  singleton = { env, store };
  return store;
}

export function resetStoreForTests() {
  singleton = null;
}
