import {
  getRequiredEnv,
  writeJson,
} from './shared.mjs';

const OAUTH_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GA4_API_BASE = 'https://analyticsdata.googleapis.com/v1beta';
const GSC_API_BASE = 'https://searchconsole.googleapis.com/webmasters/v3';

function isoDate(daysAgo) {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() - daysAgo);
  return date.toISOString().slice(0, 10);
}

async function fetchJson(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Request failed (${response.status}) ${url}\n${body}`);
  }
  return response.json();
}

async function getAccessToken() {
  const body = new URLSearchParams({
    client_id: getRequiredEnv('SEO_GOOGLE_CLIENT_ID'),
    client_secret: getRequiredEnv('SEO_GOOGLE_CLIENT_SECRET'),
    refresh_token: getRequiredEnv('SEO_GOOGLE_REFRESH_TOKEN'),
    grant_type: 'refresh_token',
  });

  const json = await fetchJson(OAUTH_TOKEN_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body,
  });

  return json.access_token;
}

async function runGaReport(accessToken, body) {
  const propertyId = getRequiredEnv('SEO_GA4_PROPERTY_ID');
  return fetchJson(`${GA4_API_BASE}/properties/${propertyId}:runReport`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${accessToken}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

async function runSearchConsole(accessToken, body) {
  const siteUrl = encodeURIComponent(getRequiredEnv('SEO_GSC_SITE_URL'));
  return fetchJson(`${GSC_API_BASE}/sites/${siteUrl}/searchAnalytics/query`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${accessToken}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

function parseMetricRow(row) {
  return {
    dimension: row.dimensionValues?.[0]?.value ?? '(not set)',
    metrics: row.metricValues?.map((metric) => Number(metric.value ?? 0)) ?? [],
  };
}

async function main() {
  const accessToken = await getAccessToken();

  const ranges = {
    current: { startDate: isoDate(28), endDate: isoDate(1) },
    previous: { startDate: isoDate(56), endDate: isoDate(29) },
  };

  const [gaCurrentSummary, gaPreviousSummary, gaTopPages, gscPages, gscQueries] =
    await Promise.all([
      runGaReport(accessToken, {
        dateRanges: [ranges.current],
        metrics: [{ name: 'screenPageViews' }, { name: 'sessions' }, { name: 'totalUsers' }],
      }),
      runGaReport(accessToken, {
        dateRanges: [ranges.previous],
        metrics: [{ name: 'screenPageViews' }, { name: 'sessions' }, { name: 'totalUsers' }],
      }),
      runGaReport(accessToken, {
        dateRanges: [ranges.current],
        dimensions: [{ name: 'pagePath' }],
        metrics: [{ name: 'screenPageViews' }, { name: 'sessions' }, { name: 'totalUsers' }],
        orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
        limit: 10,
      }),
      runSearchConsole(accessToken, {
        startDate: ranges.current.startDate,
        endDate: ranges.current.endDate,
        dimensions: ['page'],
        rowLimit: 10,
      }),
      runSearchConsole(accessToken, {
        startDate: ranges.current.startDate,
        endDate: ranges.current.endDate,
        dimensions: ['query'],
        rowLimit: 10,
      }),
    ]);

  const payload = {
    generatedAt: new Date().toISOString(),
    ranges,
    ga4: {
      summary: {
        current: gaCurrentSummary.rows?.[0]?.metricValues?.map((metric) => Number(metric.value ?? 0)) ?? [],
        previous: gaPreviousSummary.rows?.[0]?.metricValues?.map((metric) => Number(metric.value ?? 0)) ?? [],
        labels: ['screenPageViews', 'sessions', 'totalUsers'],
      },
      topPages: (gaTopPages.rows ?? []).map((row) => ({
        path: row.dimensionValues?.[0]?.value ?? '/',
        pageViews: Number(row.metricValues?.[0]?.value ?? 0),
        sessions: Number(row.metricValues?.[1]?.value ?? 0),
        users: Number(row.metricValues?.[2]?.value ?? 0),
      })),
    },
    searchConsole: {
      topPages: (gscPages.rows ?? []).map((row) => ({
        page: row.keys?.[0] ?? '',
        clicks: row.clicks ?? 0,
        impressions: row.impressions ?? 0,
        ctr: row.ctr ?? 0,
        position: row.position ?? 0,
      })),
      topQueries: (gscQueries.rows ?? []).map((row) => ({
        query: row.keys?.[0] ?? '',
        clicks: row.clicks ?? 0,
        impressions: row.impressions ?? 0,
        ctr: row.ctr ?? 0,
        position: row.position ?? 0,
      })),
    },
  };

  await writeJson('google-reports.json', payload);
  console.log('wrote .seo-automation/google-reports.json');
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
