import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { classifyPlace, resolvePermitLimit, resolvePermitWindow } from './config.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));

// Verified live on 2026-10-08 against
// https://logis.loudoun.gov/gis/rest/services/LMARC/LandMARC_Permits/MapServer/1
// Table "LandMARC Permits Issued". Dates are epoch milliseconds.
export const LOUDOUN_QUERY_URL = 'https://logis.loudoun.gov/gis/rest/services/LMARC/LandMARC_Permits/MapServer/1/query';

// Verified live on 2026-10-08. data.virginia.gov's Building Records PLUS
// package points at this FeatureServer (richer than the county GIS layer,
// which only exposes APPTYPEALIAS, RECORDID, ISSUEDATE, and LINK_URL).
export const FAIRFAX_QUERY_URL = 'https://services1.arcgis.com/ioennV6PpG5Xodq0/arcgis/rest/services/Building_Records_PLUS/FeatureServer/0/query';

export const LOUDOUN_FIELDS = [
  'PermitNumber',
  'PermitType',
  'PermitStatus',
  'PermitWorkClass',
  'CITY',
  'STATE',
  'ISSUEDATE',
  'DESCRIPTION',
  'SQUAREFEET',
  'VALUE',
  'ADDRESSLINE1',
  'ADDRESSLINE2',
  'ADDRESSLINE3',
  'STREETTYPE',
  'PREDIRECTION',
  'POSTDIRECTION',
];

export const FAIRFAX_FIELDS = [
  'RECORDID',
  'APPTYPEALIAS',
  'PROJECT_NAME',
  'RECORD_STATUS',
  'ISSUED_DATE',
  'ADDRESS_1',
  'CITY',
  'STATE',
  'ZIP_CODE',
  'DEVELOPMENT_CENTER',
];

export function loudounWhere({ start, end } = resolvePermitWindow()) {
  return [
    "PermitType = 'Building (Residential)'",
    `ISSUEDATE >= DATE '${start}'`,
    `ISSUEDATE < DATE '${end}'`,
    "(UPPER(PermitWorkClass) LIKE '%DECK%' OR UPPER(PermitWorkClass) LIKE '%PORCH%' OR UPPER(DESCRIPTION) LIKE '%DECK%' OR UPPER(DESCRIPTION) LIKE '%PORCH%' OR UPPER(DESCRIPTION) LIKE '%SCREEN%')",
  ].join(' AND ');
}

export function fairfaxWhere({ start, end } = resolvePermitWindow()) {
  return [
    `ISSUED_DATE >= DATE '${start}'`,
    `ISSUED_DATE < DATE '${end}'`,
    "UPPER(APPTYPEALIAS) LIKE 'RESIDENTIAL%'",
    "(UPPER(PROJECT_NAME) LIKE '%DECK%' OR UPPER(PROJECT_NAME) LIKE '%PORCH%' OR UPPER(PROJECT_NAME) LIKE '%SCREEN%')",
  ].join(' AND ');
}

export function arcgisDateToIso(value) {
  if (value == null || value === '') return null;
  const millis = Number(value);
  if (!Number.isFinite(millis)) return null;
  const date = new Date(millis);
  if (Number.isNaN(date.getTime())) return null;
  return date.toISOString();
}

function clean(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

export function loudounAddress(attributes) {
  const street = [
    attributes.PREDIRECTION,
    attributes.ADDRESSLINE1,
    attributes.ADDRESSLINE2,
    attributes.ADDRESSLINE3,
    attributes.STREETTYPE,
    attributes.POSTDIRECTION,
  ].map(clean).filter(Boolean).join(' ');
  return street;
}

export function normalizeLoudounFeature(feature) {
  const attributes = feature?.attributes || {};
  const permitNumber = clean(attributes.PermitNumber);
  if (!permitNumber) return null;
  const issuedAt = arcgisDateToIso(attributes.ISSUEDATE);
  const city = clean(attributes.CITY);
  const address = loudounAddress(attributes);
  const description = clean(attributes.DESCRIPTION);
  const place = classifyPlace(city);
  return {
    source: 'loudoun_permit',
    externalId: permitNumber,
    receivedAt: issuedAt || new Date(0).toISOString(),
    contactName: '',
    email: '',
    phone: '',
    city,
    state: clean(attributes.STATE) || 'VA',
    address,
    serviceHint: description || clean(attributes.PermitWorkClass),
    message: [description, clean(attributes.PermitWorkClass), clean(attributes.PermitType)].filter(Boolean).join(' — '),
    raw: {
      county: 'Loudoun',
      permitNumber,
      permitType: clean(attributes.PermitType),
      permitStatus: clean(attributes.PermitStatus),
      workClass: clean(attributes.PermitWorkClass),
      description,
      issuedAt,
      squareFeet: attributes.SQUAREFEET ?? null,
      value: attributes.VALUE ?? null,
      primaryCity: place === 'service_area',
      serviceAreaMatch: true,
      addressParts: {
        line1: clean(attributes.ADDRESSLINE1),
        line2: clean(attributes.ADDRESSLINE2),
        streetType: clean(attributes.STREETTYPE),
      },
    },
  };
}

export function normalizeFairfaxFeature(feature) {
  const attributes = feature?.attributes || {};
  const recordId = clean(attributes.RECORDID);
  if (!recordId) return null;
  const issuedAt = arcgisDateToIso(attributes.ISSUED_DATE);
  const city = clean(attributes.CITY);
  const projectName = clean(attributes.PROJECT_NAME);
  const appType = clean(attributes.APPTYPEALIAS);
  const place = classifyPlace(city);
  return {
    source: 'fairfax_permit',
    externalId: recordId,
    receivedAt: issuedAt || new Date(0).toISOString(),
    contactName: '',
    email: '',
    phone: '',
    city,
    state: clean(attributes.STATE) || 'VA',
    address: clean(attributes.ADDRESS_1),
    serviceHint: projectName || appType,
    message: [projectName, appType, clean(attributes.RECORD_STATUS)].filter(Boolean).join(' — '),
    raw: {
      county: 'Fairfax',
      recordId,
      appType,
      projectName,
      recordStatus: clean(attributes.RECORD_STATUS),
      issuedAt,
      zip: clean(attributes.ZIP_CODE),
      developmentCenter: clean(attributes.DEVELOPMENT_CENTER),
      primaryCity: place === 'service_area',
      serviceAreaMatch: true,
    },
  };
}

function loadFixture(name) {
  const path = join(HERE, 'fixtures', name);
  return JSON.parse(readFileSync(path, 'utf8'));
}

export function loudounFixtureFeatures() {
  return loadFixture('loudoun-permits.json').features;
}

export function fairfaxFixtureFeatures() {
  return loadFixture('fairfax-permits.json').features;
}

async function queryArcGis({ url, where, outFields, offset, limit, fetchImpl }) {
  const params = new URLSearchParams({
    where,
    outFields: outFields.join(','),
    returnGeometry: 'false',
    orderByFields: outFields.includes('ISSUEDATE') ? 'ISSUEDATE ASC' : 'ISSUED_DATE ASC',
    resultOffset: String(offset),
    resultRecordCount: String(limit),
    f: 'json',
  });
  const response = await fetchImpl(`${url}?${params.toString()}`, {
    headers: { Accept: 'application/json' },
    signal: AbortSignal.timeout(25000),
  });
  if (!response.ok) {
    throw new Error(`Permit query failed (${response.status}) for ${url}`);
  }
  const body = await response.json();
  if (body?.error) {
    const message = body.error.message || 'ArcGIS query error';
    throw new Error(`${message}: ${(body.error.details || []).join(' ')}`.trim());
  }
  return {
    features: body.features || [],
    hasMore: body.exceededTransferLimit === true,
  };
}

export async function fetchPermitPage({
  county,
  offset = 0,
  limit,
  window,
  source = 'live',
  fetchImpl = globalThis.fetch,
  env = process.env,
} = {}) {
  const pageLimit = limit || resolvePermitLimit(env);
  const range = window || resolvePermitWindow(env);
  if (county === 'loudoun') {
    if (source === 'fixture') {
      const features = offset > 0 ? [] : loudounFixtureFeatures();
      return {
        county,
        source: 'fixture',
        fetched: features.length,
        hasMore: false,
        leads: features.map(normalizeLoudounFeature).filter(Boolean),
        note: 'Fixture rows are real Loudoun LandMARC building permits from 2000-2004.',
      };
    }
    const page = await queryArcGis({
      url: LOUDOUN_QUERY_URL,
      where: loudounWhere(range),
      outFields: LOUDOUN_FIELDS,
      offset,
      limit: pageLimit,
      fetchImpl,
    });
    return {
      county,
      source: 'live',
      fetched: page.features.length,
      hasMore: page.hasMore,
      leads: page.features.map(normalizeLoudounFeature).filter(Boolean),
      note: null,
    };
  }

  if (county === 'fairfax') {
    if (source === 'fixture') {
      return {
        county,
        source: 'fixture',
        fetched: 0,
        hasMore: false,
        leads: [],
        note: 'Fairfax fixture ingest is empty on purpose. On 2026-10-08 the 2000-2010 residential query returned no deck or porch project names. A 2017 sample is stored for the field parser tests only.',
      };
    }
    const page = await queryArcGis({
      url: FAIRFAX_QUERY_URL,
      where: fairfaxWhere(range),
      outFields: FAIRFAX_FIELDS,
      offset,
      limit: pageLimit,
      fetchImpl,
    });
    return {
      county,
      source: 'live',
      fetched: page.features.length,
      hasMore: page.hasMore,
      leads: page.features.map(normalizeFairfaxFeature).filter(Boolean),
      note: page.features.length === 0
        ? 'No Fairfax residential deck or porch project names in this window. The public layer starts in 2006 and deck language in PROJECT_NAME was not present for 2006-2010 when checked on 2026-10-08.'
        : null,
    };
  }

  throw new Error(`Unknown permit county: ${county}`);
}
