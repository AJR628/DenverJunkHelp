/**
 * Site configuration — update these values before launch.
 * All placeholder values are clearly marked.
 */

/** Phone/call tracking number. Leave empty to hide all phone CTAs until a real number is configured. */
export const PHONE_NUMBER = ""; // TODO: Set to your call tracking number, e.g. "(303) 555-0100"
export const PHONE_HREF = ""; // TODO: e.g. "tel:3035550100"

/**
 * Contact email shown in the footer, contact page, and legal pages.
 *
 * Leave empty (`""`) to hide every email CTA on the site &mdash; same
 * gating pattern as PHONE_NUMBER. The contact form on `/contact/` is the
 * primary path when this is empty; legal pages fall back to the form
 * link automatically.
 *
 * Set to a real, monitored address only. A common zero-cost approach:
 * use Cloudflare Email Routing or ImprovMX to forward
 * "hello@denverjunkhelp.com" to your real inbox (e.g. on Vaiform).
 * Takes ~10 minutes to set up; no second mailbox needed.
 */
export const EMAIL = "";

/**
 * Quote form submission configuration.
 *
 * FORM_ACTIVE — master switch. When false, every input and the submit button render
 *   as disabled, no Netlify form attributes are emitted (so Netlify won't accept
 *   submissions), and a clear "not active yet" notice is shown.
 *
 * FORM_PROVIDER — which backend the form submits to when active.
 *   - "netlify": Netlify Forms. The form is built with `data-netlify="true"` plus a
 *                hidden `form-name="quote-request"` and a honeypot. Submissions are
 *                POSTed to "/" as application/x-www-form-urlencoded, which is the
 *                shape Netlify Forms expects for AJAX submissions. No FORM_ENDPOINT
 *                value is needed in this mode.
 *   - "custom":  Submit JSON to the URL set in FORM_ENDPOINT. Use for Formspree,
 *                Basin, Web3Forms, or a self-hosted endpoint.
 */
export const FORM_ACTIVE = true;
export const FORM_PROVIDER: "netlify" | "custom" = "netlify";

/** Used only when FORM_PROVIDER === "custom". Leave empty otherwise. */
export const FORM_ENDPOINT = "";

/** Google Analytics 4 Measurement ID */
export const GA4_ID = "G-VN7E79M9VF";

/** Google Search Console verification meta tag content value */
export const SEARCH_CONSOLE_ID = "8G-1iJMck7PIca-18rLE4RbUi8RsWNSNUSQz03CNM-4";

/** Canonical site URL — no trailing slash */
export const SITE_URL = "https://denverjunkhelp.com";

/** Legal/SEO brand name (used in meta tags, legal pages, domain) */
export const BRAND_LEGAL = "DenverJunkHelp.com";

/** Display name shown in header and visual UI */
export const BRAND_DISPLAY = "Junk Removal Help";

/** Location label shown alongside brand display name */
export const LOCATION_LABEL = "Denver Metro";
