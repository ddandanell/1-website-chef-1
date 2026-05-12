import path from 'node:path';
import { chromium } from 'playwright';
import {
  ARTIFACT_DIR,
  DEFAULT_SITE_URL,
  ensureArtifactDir,
  getEnv,
  readJson,
  uniquePaths,
  writeJson,
} from './shared.mjs';

function collectPaths(report) {
  const defaults = ['/', '/catering', '/guide', '/about'];
  const gaPaths = report?.ga4?.topPages?.slice(0, 4).map((page) => page.path) ?? [];
  const gscPaths =
    report?.searchConsole?.topPages
      ?.slice(0, 4)
      .map((page) => {
        try {
          return new URL(page.page).pathname;
        } catch {
          return page.page;
        }
      }) ?? [];

  return uniquePaths([...defaults, ...gaPaths, ...gscPaths]).slice(0, 8);
}

function deriveIssues(pageAudit) {
  const issues = [];
  if (!pageAudit.title || pageAudit.title.length < 30) {
    issues.push('Title is missing or too short.');
  }
  if (!pageAudit.metaDescription || pageAudit.metaDescription.length < 70) {
    issues.push('Meta description is missing or too short.');
  }
  if (!pageAudit.canonical) {
    issues.push('Canonical link is missing.');
  }
  if (pageAudit.imageCount > 0 && pageAudit.imagesMissingAlt > 0) {
    issues.push('Some images are missing alt text.');
  }
  if (pageAudit.wordCount < 250 && pageAudit.path !== '/') {
    issues.push('Page content is thin for a non-home route.');
  }
  if (pageAudit.mychefLinks === 0) {
    issues.push('No mychef.id conversion link found on this page.');
  }
  return issues;
}

async function auditPage(page, siteUrl, pathname) {
  const targetUrl = new URL(pathname, siteUrl).toString();
  const response = await page.goto(targetUrl, { waitUntil: 'networkidle' });
  const safeName = pathname === '/' ? 'home' : pathname.replace(/[^\w-]+/g, '_');
  const screenshotPath = path.join(ARTIFACT_DIR, 'screenshots', `${safeName}.png`);
  await page.screenshot({ path: screenshotPath, fullPage: true });

  const data = await page.evaluate(() => {
    const metaDescription = document
      .querySelector('meta[name="description"]')
      ?.getAttribute('content');
    const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');
    const h1 = document.querySelector('h1')?.textContent?.trim() ?? '';
    const bodyText = document.body?.innerText ?? '';
    const imageCount = document.querySelectorAll('img').length;
    const imagesMissingAlt = [...document.querySelectorAll('img')].filter(
      (img) => !img.getAttribute('alt')
    ).length;
    const mychefLinks = [...document.querySelectorAll('a')].filter((a) =>
      (a.getAttribute('href') ?? '').includes('mychef.id')
    ).length;
    const headingCount = document.querySelectorAll('h2, h3').length;
    const buttonCount = document.querySelectorAll('button, a[role="button"]').length;
    const wordCount = bodyText.trim().split(/\s+/).filter(Boolean).length;

    return {
      title: document.title,
      metaDescription,
      canonical,
      h1,
      headingCount,
      buttonCount,
      wordCount,
      imageCount,
      imagesMissingAlt,
      mychefLinks,
    };
  });

  const audit = {
    path: pathname,
    url: targetUrl,
    status: response?.status() ?? 0,
    ...data,
  };
  audit.issues = deriveIssues(audit);
  return audit;
}

async function main() {
  await ensureArtifactDir();
  const siteUrl = getEnv('SEO_SITE_URL', DEFAULT_SITE_URL);
  const report = await readJson('google-reports.json').catch(() => null);
  const paths = collectPaths(report);
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const audits = [];

  for (const pathname of paths) {
    audits.push(await auditPage(page, siteUrl, pathname));
  }

  await browser.close();
  const payload = {
    generatedAt: new Date().toISOString(),
    siteUrl,
    auditedPaths: paths,
    pages: audits,
  };

  await writeJson('browser-review.json', payload);
  console.log('wrote .seo-automation/browser-review.json');
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
