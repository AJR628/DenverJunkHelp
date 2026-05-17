# Deployment

DenverJunkHelp.com is a static Astro site. Any static host works, but the quote form is currently wired for **Netlify Forms**, so Netlify is the recommended host. Switching to a different host is a small config change — see "Other hosts" below.

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

## Recommended — Netlify (primary)

This is the supported deploy path. The quote form is configured for Netlify Forms in `src/components/QuoteForm.astro`, and the repo already includes a `public/_redirects` file that Netlify will respect.

### 1. Connect the repo

1. In Netlify, **Add new site → Import from Git** and pick `AJR628/DenverJunkHelp`.
2. **Production branch:** `main`.
3. **Build command:** `pnpm install --frozen-lockfile && pnpm --filter @workspace/denver-junk-help run build`
4. **Publish directory:** `artifacts/denver-junk-help/dist`
5. Add the custom domain (`denverjunkhelp.com` and `www.denverjunkhelp.com`) and configure DNS per Netlify's instructions.

### 2. Confirm Netlify Forms detected the quote form

On the first successful deploy:

1. Open the site dashboard in Netlify → **Forms**.
2. You should see a form named `quote-request`.
3. If it's missing: the build didn't include the form's Netlify attributes. Verify `FORM_ACTIVE = true` and `FORM_PROVIDER = "netlify"` in `src/config.ts`, then trigger a redeploy.

### 3. Test a submission

1. Open the deployed URL in a private browsing window.
2. Fill out the form on the homepage or `/contact/` with a real email address.
3. Submit. You should see the green "Request received" success state.
4. Within ~30 seconds, the submission should appear in **Forms → quote-request → Submissions**, including every hidden attribution field (`utm_source`, `gclid`, `referrer`, `landing_page`, `timestamp`, `device_type`, etc.).

### 4. Configure email notifications

So new leads actually reach you:

1. **Forms → Form notifications → Add notification → Email notification.**
2. Pick the `quote-request` form, paste a monitored email address, save.
3. Send another test submission to confirm the email arrives.

Optional: add a **Slack notification** the same way if you have a Slack workspace. The webhook posts a formatted summary of each submission.

### 5. Spam handling

The form ships with a Netlify honeypot field (`bot-field`). Bots that auto-fill all inputs get silently discarded. **No reCAPTCHA needed at launch.** If you start seeing real spam volume in the dashboard later, enable **Forms → Settings → Add reCAPTCHA**.

## Other hosts

If you'd rather not use Netlify, the site builds fine on any static host. The trade-off: you'll need a different form backend. Set `FORM_PROVIDER = "custom"` and `FORM_ENDPOINT` in `src/config.ts` to one of:

- **Formspree** — Easiest. Free tier supports light traffic. Paste the form URL into `FORM_ENDPOINT`.
- **Web3Forms** — Free, generous limits.
- **Basin** — Paid but very polished, good for higher volume.
- **Custom API** — If you eventually run your own backend, point `FORM_ENDPOINT` at it.

The form's custom-backend path submits JSON to that URL (the Netlify path uses URL-encoded form data because that's what Netlify expects).

### Cloudflare Pages

1. In Cloudflare Pages, connect the repo.
2. Production branch: `main`.
3. Build command: `pnpm install --frozen-lockfile && pnpm --filter @workspace/denver-junk-help run build`
4. Build output directory: `artifacts/denver-junk-help/dist`
5. Set `FORM_PROVIDER = "custom"` and configure `FORM_ENDPOINT` before launching.

### Vercel

1. "New Project" → import the repo.
2. Framework preset: Astro (Vercel detects this).
3. Root directory: `artifacts/denver-junk-help`
4. Build command: `astro build` (default) or override to `pnpm --filter @workspace/denver-junk-help run build` if importing from the monorepo root.
5. Output directory: `dist`
6. Set `FORM_PROVIDER = "custom"` and configure `FORM_ENDPOINT` before launching.

## DNS

Whichever host you pick, point the apex (`denverjunkhelp.com`) and the `www` subdomain at it. Most hosts will walk you through it. Use a single canonical version — this codebase assumes `https://denverjunkhelp.com` with trailing slashes on routes (see `astro.config.mjs` and the canonical tags in `BaseLayout.astro`).

## Analytics

Set `GA4_ID` in `src/config.ts` to your `G-XXXXXXXXXX` measurement ID. The base layout only injects analytics when this is set, so you can ship the site without analytics initially. The quote form also fires a `generate_lead` event after a successful submission (with `form_name: "quote-request"` and `method: "netlify_form"` or `"custom_endpoint"`) — but analytics is never required for the form itself to work.

Alternatives: Plausible, Fathom, Cloudflare Web Analytics. Each is a small swap in `BaseLayout.astro` — drop in their script and remove the GA4 block.

## Search Console

After the site is live and serving traffic, verify ownership in Google Search Console:

1. Add the property (Domain or URL prefix — either works).
2. If you use the meta-tag method, paste the value into `SEARCH_CONSOLE_ID` and redeploy.
3. Submit the sitemap: `https://denverjunkhelp.com/sitemap.xml`.

Bing Webmaster Tools is worth setting up too — submission flow is similar.
