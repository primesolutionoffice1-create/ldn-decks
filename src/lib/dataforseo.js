const DEFAULT_API_ROOT = 'https://api.dataforseo.com';
const DEFAULT_SANDBOX_ROOT = 'https://sandbox.dataforseo.com';
const DEFAULT_LOCATION_CODE = 1023392;
const DEFAULT_LABS_LOCATION_CODE = 2840;
const DEFAULT_TARGET = 'ldndecks.com';
const DEFAULT_TIMEOUT_MS = 20000;

export class DataForSeoError extends Error {
  constructor(message, options = {}) {
    super(message);
    this.name = 'DataForSeoError';
    this.status = options.status || 500;
    this.code = options.code || 'DATAFORSEO_ERROR';
    this.productStatus = options.productStatus || 'error';
    this.details = options.details || null;
  }
}

function getApiRoot(useSandbox = false) {
  const raw = useSandbox
    ? process.env.DATAFORSEO_SANDBOX_URL || DEFAULT_SANDBOX_ROOT
    : process.env.DATAFORSEO_BASE_URL || DEFAULT_API_ROOT;

  return raw.replace(/\/+$/, '').replace(/\/v3$/, '');
}

function getAuthHeader() {
  const login = process.env.DATAFORSEO_LOGIN?.trim();
  const password = process.env.DATAFORSEO_PASSWORD?.trim();

  if (!login || !password) {
    throw new DataForSeoError('DataForSEO credentials are not configured.', {
      status: 503,
      code: 'DATAFORSEO_CREDENTIALS_MISSING',
      productStatus: 'credentials_missing',
    });
  }

  return `Basic ${Buffer.from(`${login}:${password}`).toString('base64')}`;
}

function sanitizeText(value) {
  if (!value) return null;
  const login = process.env.DATAFORSEO_LOGIN;
  const password = process.env.DATAFORSEO_PASSWORD;

  return String(value)
    .replace(login || '__never__', '[redacted-login]')
    .replace(password || '__never__', '[redacted-password]')
    .replace(/Basic\s+[A-Za-z0-9+/=]+/g, 'Basic [redacted]')
    .slice(0, 800);
}

function classifyError(status, text) {
  const message = sanitizeText(text) || 'DataForSEO request failed.';
  const lower = message.toLowerCase();

  if (status === 401 || lower.includes('login') || lower.includes('password')) {
    return new DataForSeoError('DataForSEO authentication failed.', {
      status: 401,
      code: 'DATAFORSEO_AUTH_FAILED',
      productStatus: 'auth_failed',
      details: message,
    });
  }

  if (status === 402 || lower.includes('balance') || lower.includes('funds')) {
    return new DataForSeoError('DataForSEO billing or balance is not ready.', {
      status: 402,
      code: 'DATAFORSEO_BILLING_REQUIRED',
      productStatus: 'billing_required',
      details: message,
    });
  }

  if (status === 403 || lower.includes('not active') || lower.includes('not enabled')) {
    return new DataForSeoError('This DataForSEO product is not active.', {
      status: 403,
      code: 'DATAFORSEO_PRODUCT_NOT_ACTIVE',
      productStatus: 'not_active',
      details: message,
    });
  }

  return new DataForSeoError(`DataForSEO API error ${status}.`, {
    status,
    code: 'DATAFORSEO_API_ERROR',
    details: message,
  });
}

function validateApiResponse(data) {
  const statusCode = Number(data?.status_code);
  if (statusCode && ![20000, 20100].includes(statusCode)) {
    throw classifyError(statusCode >= 50000 ? 502 : 400, data?.status_message);
  }

  const failedTasks = Array.isArray(data?.tasks)
    ? data.tasks.filter((task) => {
        const code = Number(task?.status_code);
        return code && ![20000, 20100].includes(code);
      })
    : [];

  if (failedTasks.length > 0 || Number(data?.tasks_error) > 0) {
    throw new DataForSeoError('One or more DataForSEO tasks returned an error.', {
      status: 400,
      code: 'DATAFORSEO_TASK_ERROR',
      productStatus: 'task_error',
      details: failedTasks.map((task) => ({
        id: task?.id,
        status_code: task?.status_code,
        status_message: sanitizeText(task?.status_message),
        path: task?.path,
      })),
    });
  }
}

async function apiRequest(endpoint, options = {}) {
  const {
    method = 'GET',
    body = null,
    useSandbox = false,
    timeoutMs = DEFAULT_TIMEOUT_MS,
  } = options;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(`${getApiRoot(useSandbox)}/v3${endpoint}`, {
      method,
      signal: controller.signal,
      headers: {
        Authorization: getAuthHeader(),
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
      cache: 'no-store',
    });

    const text = await response.text();
    const data = text ? JSON.parse(text) : null;

    if (!response.ok) throw classifyError(response.status, text);
    validateApiResponse(data);
    return data;
  } catch (error) {
    if (error instanceof DataForSeoError) throw error;
    if (error.name === 'AbortError') {
      throw new DataForSeoError('DataForSEO request timed out.', {
        status: 504,
        code: 'DATAFORSEO_TIMEOUT',
      });
    }
    throw new DataForSeoError('DataForSEO request failed before a usable response was returned.', {
      status: 502,
      code: 'DATAFORSEO_NETWORK_ERROR',
      details: sanitizeText(error.message),
    });
  } finally {
    clearTimeout(timeout);
  }
}

function keywordList(value, max = 25) {
  const keywords = Array.isArray(value) ? value : String(value || '').split(',');
  return keywords.map((keyword) => String(keyword).trim()).filter(Boolean).slice(0, max);
}

function errorMentionsInvalidField(error, field) {
  if (!(error instanceof DataForSeoError)) return false;
  const details = JSON.stringify(error.details || error.message || '').toLowerCase();
  return details.includes('invalid field') && details.includes(String(field).toLowerCase());
}

export function normalizeDomain(value, fallback = DEFAULT_TARGET) {
  const raw = String(value || fallback).trim().toLowerCase();
  const withoutProtocol = raw.replace(/^https?:\/\//, '').split('/')[0].replace(/^www\./, '');
  if (/^[a-z0-9.-]+\.[a-z]{2,}$/.test(withoutProtocol) && withoutProtocol.length <= 253) {
    return withoutProtocol;
  }
  return fallback;
}

export function isDataForSeoConfigured() {
  return Boolean(process.env.DATAFORSEO_LOGIN?.trim() && process.env.DATAFORSEO_PASSWORD?.trim());
}

export function serializeDataForSeoError(error) {
  if (error instanceof DataForSeoError) {
    return {
      message: error.message,
      code: error.code,
      status: error.status,
      productStatus: error.productStatus,
      details: error.details,
    };
  }
  return {
    message: sanitizeText(error?.message) || 'Unknown DataForSEO error.',
    code: 'UNKNOWN_ERROR',
    status: 500,
    productStatus: 'error',
  };
}

export async function getUserData(options = {}) {
  return apiRequest('/appendix/user_data', options);
}

export async function getKeywordSearchVolume(keywords, options = {}) {
  return apiRequest('/keywords_data/google_ads/search_volume/live', {
    method: 'POST',
    body: [{
      keywords: keywordList(keywords, 100),
      location_code: DEFAULT_LOCATION_CODE,
      language_code: 'en',
    }],
    ...options,
  });
}

export async function getKeywordsForKeywords(keywords, options = {}) {
  return apiRequest('/keywords_data/google_ads/keywords_for_keywords/live', {
    method: 'POST',
    body: [{
      keywords: keywordList(keywords, 20),
      location_code: DEFAULT_LOCATION_CODE,
      language_code: 'en',
      sort_by: 'search_volume',
      include_adult_keywords: false,
    }],
    timeoutMs: 30000,
    ...options,
  });
}

export async function getKeywordsForSite(target = DEFAULT_TARGET, options = {}) {
  return apiRequest('/keywords_data/google_ads/keywords_for_site/live', {
    method: 'POST',
    body: [{
      target: normalizeDomain(target),
      location_code: DEFAULT_LOCATION_CODE,
      language_code: 'en',
      include_adult_keywords: false,
    }],
    timeoutMs: 30000,
    ...options,
  });
}

export async function getBacklinksSummary(target = DEFAULT_TARGET, options = {}) {
  return apiRequest('/backlinks/summary/live', {
    method: 'POST',
    body: [{ target: normalizeDomain(target), internal_list_limit: 10 }],
    ...options,
  });
}

export async function getBacklinksReferringDomains(target = DEFAULT_TARGET, options = {}) {
  return apiRequest('/backlinks/referring_domains/live', {
    method: 'POST',
    body: [{ target: normalizeDomain(target), limit: 25, order_by: ['rank,desc'] }],
    ...options,
  });
}

export async function getDomainMetrics(domain, options = {}) {
  const target = normalizeDomain(domain);
  const baseTask = { target, language_code: 'en', limit: 1 };
  try {
    return await apiRequest('/dataforseo_labs/google/relevant_pages/live', {
      method: 'POST',
      body: [{ ...baseTask, location_code: DEFAULT_LABS_LOCATION_CODE }],
      ...options,
    });
  } catch (error) {
    if (!errorMentionsInvalidField(error, 'location_code')) throw error;
    return apiRequest('/dataforseo_labs/google/relevant_pages/live', {
      method: 'POST',
      body: [baseTask],
      ...options,
    });
  }
}

export async function getCompetitorDomains(domain = DEFAULT_TARGET, options = {}) {
  const target = normalizeDomain(domain);
  const baseTask = { target, language_code: 'en', limit: 20 };
  try {
    return await apiRequest('/dataforseo_labs/google/competitors_domain/live', {
      method: 'POST',
      body: [{ ...baseTask, location_code: DEFAULT_LABS_LOCATION_CODE }],
      ...options,
    });
  } catch (error) {
    if (!errorMentionsInvalidField(error, 'location_code')) throw error;
    return apiRequest('/dataforseo_labs/google/competitors_domain/live', {
      method: 'POST',
      body: [baseTask],
      ...options,
    });
  }
}

export async function getDomainTechnologies(domain = DEFAULT_TARGET, options = {}) {
  return apiRequest('/domain_analytics/technologies/domain_technologies/live', {
    method: 'POST',
    body: [{ target: normalizeDomain(domain) }],
    ...options,
  });
}

export async function getDomainWhoisOverview(domain = DEFAULT_TARGET, options = {}) {
  const target = normalizeDomain(domain);
  try {
    return await apiRequest('/domain_analytics/whois/overview/live', {
      method: 'POST',
      body: [{ limit: 1, filters: ['domain', '=', target] }],
      timeoutMs: 30000,
      ...options,
    });
  } catch (error) {
    if (!errorMentionsInvalidField(error, 'filters')) throw error;
    return apiRequest('/domain_analytics/whois/overview/live', {
      method: 'POST',
      body: [{ limit: 10, order_by: ['metrics.organic.count,desc'] }],
      timeoutMs: 30000,
      ...options,
    });
  }
}

export async function getLlmMentionMetrics({ target = DEFAULT_TARGET, keyword = 'deck builder northern virginia', platform = 'google' } = {}, options = {}) {
  return apiRequest('/ai_optimization/llm_mentions/aggregated_metrics/live', {
    method: 'POST',
    body: [{
      language_code: 'en',
      location_code: 2840,
      platform,
      target: [
        { domain: normalizeDomain(target), search_filter: 'include' },
        { keyword, search_scope: ['answer'], search_filter: 'include' },
      ],
      internal_list_limit: 10,
    }],
    ...options,
  });
}

export async function getApiErrors(path, options = {}) {
  return apiRequest(`/${String(path).replace(/^\/+|\/+$/g, '')}/errors`, {
    method: 'POST',
    body: [{ limit: 10, offset: 0 }],
    timeoutMs: 30000,
    ...options,
  });
}
