# DenverJunkHelp.com — Launch Checklist

A practical pre-launch checklist. Work top-to-bottom; nothing on this list is hard, but skipping items will hurt trust or SEO.

## Configuration (in `artifacts/denver-junk-help/src/config.ts`)

- [ ] **`PHONE_NUMBER` and `PHONE_HREF`** — Set to a real call-tracking number once you have one. Until set, all phone CTAs and the mobile sticky-call button stay hidden automatically. Do not put a personal cell or fake number here.
- [ ] **`EMAIL`** — Replace `hello@denverjunkhelp.com` with a real, monitored inbox. Set up forwarding so messages actually reach you.
- [ ] **`FORM_ENDPOINT`** — Wire to Formspree, Netlify Forms, Web3Forms, Basin, or a custom API endpoint. The form currently shows a clear amber banner when this is empty; once configured, the banner disappears and submissions are sent.
- [ ] **`GA4_ID`** — Paste your `G-XXXXXXXXXX` measurement ID. The base layout only injects analytics when this is set.
- [ ] **`SEARCH_CONSOLE_ID`** — Paste the verification meta-tag content from Search Console.

## Content review

- [ ] Open each page and read it out loud. Tone should sound like a calm local resource, not a sales script.
- [ ] Confirm the **comparison guide** matches current City of Denver Solid Waste Management program details. The page intentionally hedges with conditional language because city programs change.
- [ ] Confirm the **pricing ranges** on `/pricing-faq/` still look reasonable. They are framed as "general market context, not a quote" — keep that framing.
- [ ] Confirm `BRAND_DISPLAY`, `LOCATION_LABEL`, and `BRAND_LEGAL` look right in the header and footer.

## SEO

- [ ] **Open Graph image** (`public/opengraph.jpg`) — Replace with a real, commercial-use image at 1200x630. Avoid AI-generated cleanup photos, fake branded trucks, fake crews, and any imagery that implies the site owns hauling operations. A clean Denver skyline silhouette, a tidy curbside scene, or a typographic card all work.
- [ ] **Favicon** — A simple monogram is shipped at `public/favicon.svg`. Replace with a real brand mark when one exists.
- [ ] **Sitemap dates** (`public/sitemap.xml`) — `<lastmod>` values are set to the launch date. Bump them as you ship meaningful content updates.
- [ ] **Submit sitemap to Search Console** after launch: `https://denverjunkhelp.com/sitemap.xml`.
- [ ] **Verify canonical URLs** in production exactly match `SITE_URL` (no `www`, no trailing index, trailing slash always).

## Form behavior

- [ ] Submit the form once without `FORM_ENDPOINT` set and confirm the amber "not yet active" banner appears, the success state shows the "not yet sent" disclaimer, and no request is made.
- [ ] Once `FORM_ENDPOINT` is wired, submit a real test from a non-staff browser. Confirm the lead lands in your destination (inbox, Sheet, CRM).
- [ ] Confirm UTM and click-ID attribution fields are present on a tagged URL (e.g. `?utm_source=google&utm_campaign=test&gclid=test123`) by inspecting the submitted payload.

## Trust and transparency

- [ ] Read the **About page** (`/about/`) and confirm it accurately describes how the site works once a provider relationship exists.
- [ ] Update **Privacy Policy** "Last updated" date when you change anything material (form fields, analytics, sharing partners).
- [ ] Confirm no fake reviews, fake ratings, fake "as seen on", fake "X years in business", fake job counts, fake Google badges, fake BBB badges, fake "licensed and insured" claims, or fake business addresses anywhere on the site.

## Accessibility and mobile

- [ ] Tab through the homepage from start to finish on desktop. All focus states should be visible.
- [ ] Open the site on a real phone (not just devtools). Confirm the sticky mobile CTA does not cover the form submit button.
- [ ] Confirm tap targets in the mobile menu are at least ~44px.

## Provider relationship

- [ ] Sign a written agreement with the local provider(s) covering: lead delivery format, response-time expectations, exclusivity, payment terms, and a clean exit path. Without this, you have nothing real to route to.
- [ ] Decide once and document: are you forwarding leads to one provider only, or rotating between multiple? Keep the answer consistent with what the site copy implies (currently: "an independent local provider").

## Deployment

See `docs/DEPLOYMENT.md` for the build and host steps.

## What this site is intentionally not doing yet

These are deferred on purpose. Don't add them until the basics above are in place and there is real traffic:

- A backend, database, or auth layer.
- Provider matching / routing logic.
- Photo upload on the form.
- A blog or content series.
- City-specific suburb microsites (Aurora, Lakewood, etc.). Build real audience first, then expand.
- Schema.org `LocalBusiness` markup. This site is not a business — keep it `Organization` only.
