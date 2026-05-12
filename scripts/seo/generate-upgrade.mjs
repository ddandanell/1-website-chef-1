import {
  ALLOWED_EDIT_FILES,
  loadAllowedFiles,
  readJson,
  writeJson,
  writeText,
} from './shared.mjs';

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
const DEFAULT_MODEL = process.env.SEO_OPENAI_MODEL || 'gpt-4.1-mini';

async function openAiJson(messages) {
  const apiKey = process.env.SEO_OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('Missing required env var: SEO_OPENAI_API_KEY');
  }

  const response = await fetch(OPENAI_API_URL, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${apiKey}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: DEFAULT_MODEL,
      response_format: { type: 'json_object' },
      temperature: 0.4,
      messages,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`OpenAI request failed (${response.status}): ${body}`);
  }

  const json = await response.json();
  return JSON.parse(json.choices[0].message.content);
}

function stringify(value) {
  return JSON.stringify(value, null, 2);
}

function makePlanMarkdown(plan) {
  const tasks = (plan.tasks ?? []).map((task) => `- ${task}`).join('\n');
  const files = (plan.recommended_files ?? []).map((file) => `- \`${file}\``).join('\n');
  const reasons = (plan.rationale ?? []).map((item) => `- ${item}`).join('\n');

  return `# SEO automation upgrade\n\n## Headline\n${plan.headline}\n\n## Summary\n${plan.summary}\n\n## Why now\n${reasons}\n\n## Tasks\n${tasks}\n\n## Target files\n${files}\n`;
}

async function main() {
  const reports = await readJson('google-reports.json');
  const browserReview = await readJson('browser-review.json');

  const plan = await openAiJson([
    {
      role: 'system',
      content:
        'You are an SEO engineer for a Bali villa catering website. Choose a single five-day upgrade cycle with up to 3 target files. Prefer safe, high-leverage content and metadata improvements. Only recommend files from the provided allowlist. Return JSON with keys headline, summary, rationale, tasks, recommended_files.',
    },
    {
      role: 'user',
      content: `Allowlist:\n${ALLOWED_EDIT_FILES.join('\n')}\n\nGoogle reports:\n${stringify(
        reports
      )}\n\nBrowser review:\n${stringify(browserReview)}`,
    },
  ]);

  const recommendedFiles = (plan.recommended_files ?? []).filter((file) =>
    ALLOWED_EDIT_FILES.includes(file)
  );
  if (recommendedFiles.length === 0) {
    throw new Error('Model did not select any allowed files.');
  }

  const repoFiles = await loadAllowedFiles();
  const selectedFiles = Object.fromEntries(
    recommendedFiles.map((file) => [file, repoFiles[file]])
  );

  const replacements = await openAiJson([
    {
      role: 'system',
      content:
        'You are applying the approved SEO upgrade. Return JSON with keys summary and files. files must be an array of objects with path and content. Replace full file contents only for files from the provided set. Do not add files, do not change architecture, do not touch dependencies, and keep the site buildable.',
    },
    {
      role: 'user',
      content: `Approved plan:\n${stringify(plan)}\n\nCurrent file contents:\n${Object.entries(
        selectedFiles
      )
        .map(([file, content]) => `FILE: ${file}\n${content}`)
        .join('\n\n')}`,
    },
  ]);

  await writeJson('upgrade-plan.json', plan);
  await writeText('upgrade-plan.md', makePlanMarkdown(plan));
  await writeJson('replacements.json', replacements);
  console.log('wrote .seo-automation/upgrade-plan.json');
  console.log('wrote .seo-automation/replacements.json');
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
