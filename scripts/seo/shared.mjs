import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

export const REPO_ROOT = process.cwd();
export const ARTIFACT_DIR = path.join(REPO_ROOT, '.seo-automation');
export const DEFAULT_SITE_URL = 'https://www.villa-catering-bali.online';
export const ALLOWED_EDIT_FILES = [
  'src/content/areas.ts',
  'src/content/homeFaq.ts',
  'src/content/recommendations.ts',
  'src/content/topics.ts',
  'src/pages/About.tsx',
  'src/pages/Home.tsx',
];

export async function ensureArtifactDir() {
  await fs.mkdir(ARTIFACT_DIR, { recursive: true });
  await fs.mkdir(path.join(ARTIFACT_DIR, 'screenshots'), { recursive: true });
}

export function getEnv(name, fallback = undefined) {
  return process.env[name] ?? fallback;
}

export function getRequiredEnv(name) {
  const value = getEnv(name);
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

export async function writeJson(fileName, value) {
  await ensureArtifactDir();
  const filePath = path.join(ARTIFACT_DIR, fileName);
  await fs.writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
  return filePath;
}

export async function readJson(fileName) {
  const filePath = path.join(ARTIFACT_DIR, fileName);
  return JSON.parse(await fs.readFile(filePath, 'utf8'));
}

export async function writeText(fileName, value) {
  await ensureArtifactDir();
  const filePath = path.join(ARTIFACT_DIR, fileName);
  await fs.writeFile(filePath, value, 'utf8');
  return filePath;
}

export async function readRepoFile(relativePath) {
  return fs.readFile(path.join(REPO_ROOT, relativePath), 'utf8');
}

export async function loadAllowedFiles() {
  const entries = await Promise.all(
    ALLOWED_EDIT_FILES.map(async (relativePath) => ({
      path: relativePath,
      content: await readRepoFile(relativePath),
    }))
  );

  return Object.fromEntries(entries.map((entry) => [entry.path, entry.content]));
}

export function normalizePathname(pathname) {
  if (!pathname) return '/';
  if (pathname.startsWith('http://') || pathname.startsWith('https://')) {
    const url = new URL(pathname);
    return url.pathname || '/';
  }
  return pathname.startsWith('/') ? pathname : `/${pathname}`;
}

export function uniquePaths(paths) {
  return [...new Set(paths.map(normalizePathname))];
}
