# Deployment

DenverJunkHelp.com is a static Astro site. Any static host works. Below are the three most common options.

## Build output

From the monorepo root:

```bash
pnpm install
pnpm --filter @workspace/denver-junk-help run build
```

The built site lands in `artifacts/denver-junk-help/dist/`.

Locally you can preview it with:

```bash
pnpm --filter @workspace/denver-junk-help run preview
```

## Option A — Cloudflare Pages

Fast, generous free tier, good edge network.

1. In Cloudflare Pages, connect the GitHub repo (`AJR628/DenverJunkHelp`).
2. Production branch: `main`.
3. Build command: `pnpm install --frozen-lockfile && pnpm --filter @workspace/denver-junk-help run build`
4. Build output directory: `artifacts/denver-junk-help/dist`
5. Root directory (advanced settings): leave as repo root.
6. Environment variables: not required for the static build.
7. Add a custom domain (`denverjunkhelp.com` and `www.denverjunkhelp.com`); configure the apex via CNAME flattening or A records as prompted.

## Option B — Netlify

The repo already has a `public/_redirects` file at `artifacts/denver-junk-help/public/_redirects` that Netlify will respect.

1. In Netlify, "Add new site → Import from Git" and pick the repo.
2. Build command: `pnpm install --frozen-lockfile && pnpm --filter @workspace/denver-junk-help run build`
3. Publish directory: `artifacts/denver-junk-help/dist`
4. Production branch: `main`.
5. Add the custom domain and configure DNS per Netlify's instructions.

Netlify Forms is one of the simplest ways to wire the quote form. Set `FORM_ENDPOINT` in `src/config.ts` to your Netlify Form post URL after configuring a hidden `form-name` field if you prefer the native Netlify Forms flow.

## Option C — Vercel

1. "New Project" → import the GitHub repo.
2. Framework preset: Astro (Vercel detects this).
3. Root directory: `artifacts/denver-junk-help`
4. Build command: leave default (`astro build`) — or override to `pnpm --filter @workspace/denver-junk-help run build` if importing from the monorepo root.
5. Output directory: `dist`
6. Production branch: `main`.

## DNS

Whichever host you pick, point the apex (`denverjunkhelp.com`) and the `www` subdomain at it. Most hosts will walk you through it. Use a single canonical version (this codebase assumes `https://denverjunkhelp.com` with trailing slashes on routes — see `astro.config.mjs` and the canonical tags in `BaseLayout.astro`).

## Form backend

Pick one before launch. The form will not actually send anything until `FORM_ENDPOINT` is set in `src/config.ts`.

Common low-cost options:

- **Formspree** — Easiest. Free tier supports light traffic. Paste the form URL into `FORM_ENDPOINT`.
- **Netlify Forms** — Free with Netlify hosting. Native, includes spam filtering.
- **Web3Forms** — Free, generous limits.
- **Basin** — Paid but very polished, good for higher volume.
- **Custom API** — If you eventually run your own backend, point `FORM_ENDPOINT` at it.

Whichever you pick, do a real test submission from a fresh browser before going live.

## Analytics

Set `GA4_ID` in `src/config.ts` to your `G-XXXXXXXXXX` measurement ID. The base layout only injects analytics when this is set, so you can ship the site without analytics initially.

Alternatives: Plausible, Fathom, Cloudflare Web Analytics. Each is a small swap in `BaseLayout.astro` — drop in their script and remove the GA4 block.

## Search Console

After the site is live and serving traffic, verify ownership in Google Search Console:

1. Add the property (Domain or URL prefix — either works).
2. If you use the meta-tag method, paste the value into `SEARCH_CONSOLE_ID` and redeploy.
3. Submit the sitemap: `https://denverjunkhelp.com/sitemap.xml`.

Bing Webmaster Tools is worth setting up too — submission flow is similar.
