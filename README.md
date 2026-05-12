# Villa Catering Bali

Marketing site for `villa-catering-bali.online`, built with React, TypeScript, and Vite.

## Local commands

```bash
npm install
npm run build
npm run preview
```

## SEO automation loop

This repository includes a GitHub Actions workflow at `.github/workflows/seo-optimization.yml` that runs every five days and can also be started manually with `workflow_dispatch`.

The workflow does this:

1. Pulls GA4 and Google Search Console reports
2. Reviews the live site in a real browser with Playwright
3. Generates an SEO upgrade plan and bounded file replacements with OpenAI
4. Applies the changes to the allowed content/page files
5. Builds the site and re-checks a local preview in the browser
6. Opens a PR with the upgrade plan if the build succeeds

### Required GitHub secrets

- `SEO_GOOGLE_CLIENT_ID`
- `SEO_GOOGLE_CLIENT_SECRET`
- `SEO_GOOGLE_REFRESH_TOKEN`
- `SEO_GA4_PROPERTY_ID`
- `SEO_GSC_SITE_URL`
- `SEO_OPENAI_API_KEY`

### Optional GitHub variables

- `SEO_SITE_URL` — defaults to `https://www.villa-catering-bali.online`
- `SEO_OPENAI_MODEL` — defaults to `gpt-4.1-mini`
- `SEO_AUTOMATION_AUTO_MERGE` — set to `true` if the bot-created PR should auto-merge after checks pass

### Local helper commands

```bash
npm run seo:collect
npm run seo:browser-review
npm run seo:generate
npm run seo:apply
```

Artifacts are written to `.seo-automation/` during a run and are intentionally ignored by git.
