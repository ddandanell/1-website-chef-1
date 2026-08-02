# Villa Catering Bali

Editorial guide for `villa-catering-bali.online` — private chefs, villa dinners, weddings and suppliers across Bali.

Built with React, TypeScript, and Vite. Booking recommendations deep-link to the matching pages on [mychef.id](https://mychef.id) (private chef, pricing, fine dining, weddings, locations) with UTM attribution.

## Live

- Site: https://www.villa-catering-bali.online  
- Resources: https://www.villa-catering-bali.online/resources  
- GitHub: https://github.com/ddandanell/1-website-chef-1

## Local commands

```bash
npm install
npm run build
npm run preview
npm run status:check
```

## Team work status

For internal execution visibility, this repo keeps a single source of truth in:

- `WORK_STATUS.md`

Update this file whenever priorities, blockers, or completion state changes.

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
