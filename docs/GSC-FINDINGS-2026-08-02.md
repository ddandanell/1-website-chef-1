# Google Search Console findings — mychef.id (+ guide implications)

**Pulled:** 2026-08-02  
**Sources:**
- Live GSC browser session (logged in as daviddandanell@gmail.com) — Performance, last 28 days  
- GSC CSV exports in Downloads (Performance ~2026-04-27→2026-07-26; Coverage 2026-07-28 + drilldown 2026-08-02; Crawl stats 2026-07-01; Links 2026-07-28)

**Property:** `mychef.id` (domain property)  
**API note:** No working local GSC API credentials under `~/.config/Codex-seo/` in this environment; browser + exports used instead.

---

## 1) Live performance (last 28 days)

| Metric | Value |
|--------|------:|
| Total clicks | **487** |
| Total impressions | **15.5k** |
| Average CTR | **3.1%** |
| Average position | **10.6** |
| Data window (chart) | 4 Jul 2026 → 31 Jul 2026 |
| Last update | ~4 hours before pull |

**Top live query (partial table):** `private chef bali` — 19 clicks / 472 impressions.

---

## 2) Longer window (Performance export ~91 days)

Approx. **665 clicks / 21.5k impressions** (sum of Chart.csv 2026-04-27 → 2026-07-26).

### Top pages by impressions

| Page | Clicks | Imp | Pos | Note |
|------|-------:|----:|----:|------|
| `/` homepage | 225 | 5934 | 9.3 | Dominates brand + head terms |
| `/locations/canggu` | 31 | 1050 | 14.9 | Strong area demand |
| `/private-chef-senayan` | 47 | 974 | 5.8 | Jakarta converter |
| `/blog/private-chef-cost-bali` | 15 | 916 | 5.4 | Cost intent works |
| `/catering/bbq-catering` | 20 | 690 | 10.4 | BBQ demand |
| `/catering` | 7 | 647 | 27.9 | Weak position for hub |
| `/locations/ubud` | 16 | 627 | 18.1 | Needs on-page/links |
| `/bali-wedding-catering-packages` | 4 | 609 | 24.0 | **Huge gap** |
| `/in-villa-service/butlers` | 32 | 579 | 11.5 | Staffing converts |
| `/locations/seminyak` | 14 | 488 | 20.6 | Area gap |
| `/events/weddings` | 0 | 373 | 38.4 | Almost invisible |
| `/blog/wedding-private-chef-bali-planning-guide` | 0 | 271 | 11.9 | Imp without clicks |

### Head / commercial queries (priority)

| Query | Clicks | Imp | CTR | Pos | Priority action |
|-------|-------:|----:|----:|----:|-----------------|
| private chef bali | 21 | 749 | 2.8% | **18.4** | Own on homepage + internal links; title/H1 discipline |
| bali wedding catering | 2 | 424 | 0.5% | **27.9** | Strengthen packages + events + guide deep links |
| private chef | 3 | 266 | 1.1% | 8.2 | Brand/home support |
| bbq catering bali | 1 | 265 | 0.4% | 20.1 | BBQ page + internal mesh |
| private chef jakarta | 19 | 212 | 9.0% | **5.9** | Protect (already converting) |
| private chef canggu | 8 | 136 | 5.9% | 5.9 | Protect + area mesh |
| private chef uluwatu | 7 | 127 | 5.5% | 6.4 | Protect |
| bali villa catering | 0 | 94 | 0% | 15.4 | Guide satellite + `/catering` |
| private chef bali villa | 0 | 94 | 0% | 15.9 | Homepage + private-chef pillar |
| private chef hire bali | 1 | 77 | 1.3% | **41.6** | `/private-chef-bali` ownership |
| catering bali | 0 | 60 | 0% | 38.1 | Long game on `/catering` |
| private chef bali cost | 1 | 20 | 5% | 7.5 | Cost blog + pricing |

### Countries (export)

| Country | Clicks | Imp | CTR |
|---------|-------:|----:|----:|
| Indonesia | 264 | 8670 | 3.0% |
| Australia | 139 | 2393 | 5.8% |
| Singapore | 34 | 730 | 4.7% |
| United States | 29 | 4358 | **0.67%** |
| UK | 23 | 625 | 3.7% |
| New Zealand | 21 | 264 | 8.0% |

US = high impression / low CTR → title/snippet test for international villa guests.

---

## 3) Indexing / coverage (critical)

From Coverage export **2026-07-28**:

| Reason | Pages | Severity |
|--------|------:|----------|
| **Discovered – currently not indexed** | **130** | High — crawl budget / quality / thin pages |
| Crawled – currently not indexed | 23 | High |
| Page with redirect | 22 | Medium — fix chains |
| Not found (404) | 14 | High — waste crawl |
| Excluded by noindex | 3 | Check intent |
| Other 4xx | 1 | Fix |

Drilldown **2026-08-02** (“Discovered – not indexed”) still **130 URLs**, crawl date field `1970-01-01` (never successfully crawled for index).

### Composition of the 130

| Bucket | Count | Interpretation |
|--------|------:|----------------|
| `/private-chef/*` micro-areas | ~59–64 | Long-tail location spam risk / thin templates |
| `/bar-services/*` | 21 | New section not yet trusted |
| `/blog/*` + journal | ~27 | Content not prioritized |
| Other commercial URLs | few | wedding-catering-indonesia, seafood BBQ, etc. |

**Implication:** Google is discovering many URLs (sitemap/links) but choosing **not** to index thin or low-priority URLs. Flooding micro-areas without demand or unique content hurts the whole site.

### Crawl stats (2026-07-01)

| Response | Share |
|----------|------:|
| 200 OK | 83.0% |
| **404** | **8.2%** |
| 304 | 3.7% |
| 301 | 3.4% |
| robots.txt not available | 1.3% |

**8% 404 crawl share is too high** — clean redirects and 404s before pushing more new URLs.

### Enhancements

- Review snippets: **17× missing `itemReviewed`**
- Events: **2× missing `startDate`**

---

## 4) Links

Latest links export (2026-07-28) is very thin; one notable row:

- `https://www.villa-catering-bali.online/` — already recorded as a linking page to mychef.id  

This supports the white-hat satellite strategy — but **deep links** (not homepage-only) matter more. Implemented on guide site 2026-08-02.

---

## 5) What this means for the SEO plan (prioritized)

### P0 — Indexation hygiene (this week)

1. **Reduce 404 crawl waste** — fix/redirect the 14 GSC 404s; re-export crawl.  
2. **Resolve 22 redirect issues** — collapse chains; prefer final 200 URLs in sitemap.  
3. **Do not expand thin `/private-chef/{tiny-village}` pages** until core Bali locations are strong. Prefer noindex or consolidate weak micro-areas.  
4. **Request indexing only for money URLs** after fixes (packages, pricing, 4 main locations, catering, events/weddings) — not all 130.

### P1 — Rank / CTR on proven demand

1. **`private chef bali` @ pos ~18** — homepage + clear primary ownership; internal links from locations/blog/guide with varied anchors.  
2. **`bali wedding catering` @ pos ~28** — `/bali-wedding-catering-packages` + `/events/weddings` + guide wedding resources.  
3. **`bbq catering bali` / `bali villa catering`** — `/catering/bbq-catering` + guide cross-links.  
4. **US CTR** — rewrite titles/meta for villa-guest English (benefit + area + proof), not generic.

### P2 — Satellite guide (villa-catering-bali.online)

GSC already sees the guide as a link source. Next:

1. Promote production deploy of deep-linked guide.  
2. Add guide property in GSC if not present (`sc-domain:villa-catering-bali.online` or URL-prefix).  
3. Use price index / wedding timeline / checklists as linkable assets for outreach (not index spam).

### P3 — Schema cleanup

1. Fix review schema `itemReviewed` (17).  
2. Fix event `startDate` (2).

---

## 6) Alignment with work already done (this session)

| Action | GSC rationale |
|--------|----------------|
| Guide deep links → `/private-chef-bali`, `/pricing`, wedding packages, locations | Targets head terms + money pages with impressions |
| Price index + wedding timeline resources | Supports wedding/catering queries + link bait |
| Area pages Canggu/Seminyak/Ubud/Uluwatu on guide | Matches strong area queries already ranking ~pos 6–15 |
| mychef related-services fix to `/private-chef-bali` | Supports hire intent (pos 41 on “private chef hire bali”) |

---

## 7) Gaps / next live checks

Browser automation was flaky mid-session (tabs closed mid-command). Still worth a manual pass:

1. GSC → **Pages** live totals (indexed vs not indexed)  
2. Confirm whether **villa-catering-bali.online** is a verified property  
3. Export fresh **Performance 28d** CSV (Queries + Pages) after production guide deploy  
4. URL Inspection on: `/`, `/private-chef-bali`, `/bali-wedding-catering-packages`, `/locations/canggu`, `/catering`

---

## 8) Recommended 14-day operator list

1. Fix 404 + redirect clusters (P0)  
2. Prune or noindex weakest micro `/private-chef/*` with zero demand  
3. Ship guide to production with deep links  
4. Strengthen internal links on mychef for: private chef bali, wedding catering, BBQ, villa catering  
5. Schema fixes (reviews + events)  
6. Outreach using price index + wedding timeline (white-hat only)  
7. Re-export GSC Performance + Coverage and compare to this baseline  

**Baseline to beat (28d live):** 487 clicks · 15.5k impressions · 3.1% CTR · pos 10.6
