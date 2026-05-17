# DenverJunkHelp.com — Launch Checklist

A practical pre-launch checklist. Work top-to-bottom; nothing on this list is hard, but skipping items will hurt trust or SEO.

## Configuration (in `artifacts/denver-junk-help/src/config.ts`)

- [ ] **`PHONE_NUMBER` and `PHONE_HREF`** — Set to a real call-tracking number once you have one. Until set, all phone CTAs and the mobile sticky-call button stay hidden automatically. Page copy that mentions calling is also gated on these values, so leaving them blank just makes the site form-only — no fake numbers anywhere.
- [ ] **`EMAIL`** — Replace `hello@denverjunkhelp.com` with a real, monitored inbox. Set up forwarding so messages actually reach you.
- [ ] **`FORM_ACTIVE` / `FORM_PROVIDER`** — Default ship state: `FORM_ACTIVE = true` and `FORM_PROVIDER = "netlify"`. This activates Netlify Forms on the first deploy to Netlify. See the Netlify Forms section below for what to verify after deploy. Flip `FORM_ACTIVE` to `false` if you ever need to take the form offline (it will render disabled with a clear "not active yet" notice).
- [ ] **`GA4_ID`** — Paste your `G-XXXXXXXXXX` measurement ID. The base layout only injects analytics when this is set. The form also fires a `generate_lead` event after each successful submission, but only if GA4 is configured — analytics is never required for form success.
- [ ] **`SEARCH_CONSOLE_ID`** — Paste the verification meta-tag content from Search Console.

## Netlify Forms — post-deploy verification

The form is wired for Netlify Forms in `src/components/QuoteForm.astro`. Netlify scans the built HTML at deploy time and registers any `<form data-netlify="true">` it finds. Confirm the wiring after your first Netlify deploy:

- [ ] **Form was detected.** In the Netlify dashboard for the site, open **Forms**. You should see a form named `quote-request`. If it's missing, the build didn't include the form attributes — make sure `FORM_ACTIVE` and `FORM_PROVIDER` are set correctly and redeploy.
- [ ] **Submit a real test.** Open the deployed site in a private browsing window (so your IP isn't auto-flagged later). Fill out the form on the homepage or `/contact/` and submit. You should see the green "Request received" success state.
- [ ] **Submission appears in Netlify.** Within ~30 seconds, the submission should show up under **Forms → quote-request → Submissions** with every field including the hidden UTM/click-ID fields.
- [ ] **Email notification set up.** Under **Forms → Form notifications → Add notification**, create an email notification for the `quote-request` form pointing to a monitored inbox. This is how you'll find out about new leads in real time.
- [ ] **Honeypot is working.** The form includes a hidden `bot-field` that humans never see. Bots that auto-fill all visible inputs typically fill this too, and Netlify silently rejects those submissions. You shouldn't need to do anything — but if you start getting obvious spam, enable **Forms → Settings → Add reCAPTCHA**.
- [ ] **(Optional) Test attribution capture.** Visit the site with a query string like `?utm_source=google&utm_campaign=launch_test&gclid=ABC123` and submit a test. The submission in Netlify should show those values in `utm_source`, `utm_campaign`, and `gclid` columns.

## Manual test checklist for each deploy

Run through these once after the first deploy and any time you change form, header, or footer code:

- [ ] Homepage loads at `/`.
- [ ] All nav links work (header desktop + mobile drawer).
- [ ] All sitemap routes return 200 (`/about`, `/what-we-take`, `/service-area`, `/yard-debris`, `/mattress-removal`, `/furniture-removal`, `/appliance-removal`, `/cleanouts`, `/pricing-faq`, `/denver-large-item-pickup-vs-junk-removal`, `/contact`, `/privacy-policy`, `/terms-of-use`).
- [ ] Mobile sticky CTA does not cover the form submit button on a real phone.
- [ ] Mobile sticky-call button is hidden because `PHONE_NUMBER` is empty (or visible because it isn't, your call).
- [ ] Quote form validation: try to submit with empty required fields — should show inline errors.
- [ ] Quote form success: a valid submission shows the green "Request received" state with the honest pre-provider success copy.
- [ ] Quote form failure: temporarily set `FORM_ACTIVE = false`, redeploy, confirm the form renders disabled with the "not active yet" notice and submission does nothing. Flip back to `true` and redeploy.
- [ ] Privacy and Terms pages load and have the current year in the "Last updated" line.
- [ ] 404 page is customer-facing and links back home and to /contact.
- [ ] `robots.txt` is served at `/robots.txt` with the right `Sitemap:` line.
- [ ] `sitemap.xml` is served at `/sitemap.xml` and includes every public page.
- [ ] Open Graph image renders correctly when you paste a URL into Slack / Facebook / Twitter / iMessage.
- [ ] Favicon shows up in the browser tab.

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

## Trust and transparency

- [ ] Read the **About page** (`/about/`) and confirm it accurately describes how the site works once a provider relationship exists.
- [ ] Update **Privacy Policy** "Last updated" date when you change anything material (form fields, analytics, sharing partners).
- [ ] Confirm no fake reviews, fake ratings, fake "as seen on", fake "X years in business", fake job counts, fake Google badges, fake BBB badges, fake "licensed and insured" claims, or fake business addresses anywhere on the site.

## Accessibility and mobile

- [ ] Tab through the homepage from start to finish on desktop. All focus states should be visible.
- [ ] Open the site on a real phone (not just devtools). Confirm the sticky mobile CTA does not cover the form submit button.
- [ ] Confirm tap targets in the mobile menu are at least ~44px.

## Provider relationship

- [ ] **Sign a written agreement with a local provider before forwarding any real lead.** The current success copy says "we'll review the details and may share them with a local provider" — that's accurate while leads sit in Netlify Forms and you manually review them. Do not start forwarding submissions to a third party until there is a written agreement covering: lead delivery format, response-time expectations, exclusivity, payment terms, and a clean exit path.
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
- Paid reCAPTCHA. The Netlify honeypot alone is enough at current volume.
