# Image sources & licenses

A small ledger of every image asset in the site, its source, and its license. Update this file whenever you add, replace, or remove an image.

The point of this file is to keep DenverJunkHelp.com honest. The site is a local resource that should never use unlicensed or misleading imagery. When you replace any of the placeholder assets below with real photography, record the source and license here so future contributors (or your future self) can audit it.

## Current assets

### `artifacts/denver-junk-help/public/images/hero-curbside.svg`

- **What it is:** Editorial line-art illustration of household items neatly staged on a curbside, with subtle Rocky Mountain silhouettes in the distance. Used as the hero illustration on the homepage.
- **Source:** Hand-drawn inline SVG, custom to this project.
- **License:** Owned by DenverJunkHelp.com. No third-party rights, no attribution required, freely modifiable.
- **Why a placeholder?** It's an honest illustration, not a fake photograph. Clearly stylized, makes no claim that DenverJunkHelp.com owns trucks or crews. Suitable to ship at launch; replace with a real licensed photograph (see "Recommended replacements" below) once you have one.

### `artifacts/denver-junk-help/public/favicon.svg`

- **What it is:** A "JH" monogram in the brand forest green (`#2C6E47`), shipped as a 180&times;180 SVG with rounded corners.
- **Source:** Hand-drawn inline SVG, custom to this project.
- **License:** Owned by DenverJunkHelp.com.
- **Replacement plan:** Swap with a polished brand mark when one exists. The current glyph is intentionally simple so it reads at 16&times;16 in a browser tab.

### `artifacts/denver-junk-help/public/opengraph.jpg`

- **What it is:** The Open Graph share image used in `BaseLayout.astro`'s `og:image` meta tag. Rendered when the site is shared on Slack, Facebook, iMessage, Twitter, etc.
- **Source:** Inherited from the original Replit-generated scaffold. Not custom to this site and not audited.
- **License:** &#x26a0;&#xfe0f; **Status unknown.** Treat as placeholder.
- **Replacement plan:** Generate a real 1200&times;630 Open Graph image and replace this file before any meaningful traffic. Suitable directions:
  - A typographic card with the wordmark "Junk Removal Help &mdash; Denver Metro" on a warm cream background
  - The hero illustration above, exported to PNG/JPG at 1200&times;630
  - A real Denver-area landscape silhouette with brand colors
  - Avoid: fake branded trucks, fake crews in uniforms, AI-looking cleanup photos, hoarder-house imagery

## Service-page illustrations

A consistent set of five editorial flat-vector illustrations, generated to match the style language of the homepage hero and the other site illustrations. Same warm cream background, muted forest-green foliage shapes, navy / wood-brown / white / terracotta accent palette. No people, no trucks, no logos. All optimized to ~1600&times;900 WebP at quality 82 (~40-75&nbsp;KB each).

### `artifacts/denver-junk-help/public/images/furniture-removal-items.webp`

- **What it is:** Furniture-page illustration. A navy blue mid-century three-cushion couch, a tall wooden dresser, a single light-wood dining chair, and a brass floor lamp grouped together on a soft cream surface.
- **Source:** AI-generated illustration (Gemini 3.1 Flash Image) commissioned for this project.
- **License:** Owned by DenverJunkHelp.com.
- **Used on:** `/furniture-removal/`
- **Dimensions:** 1600&times;893 WebP, ~39&nbsp;KB.

### `artifacts/denver-junk-help/public/images/appliance-removal-items.webp`

- **What it is:** Appliance-page illustration. White refrigerator, washer/dryer pair with circular doors, a small countertop microwave on a wheeled wooden cart, and a beige window AC unit.
- **Source:** AI-generated illustration (Gemini 3.1 Flash Image) commissioned for this project.
- **License:** Owned by DenverJunkHelp.com.
- **Used on:** `/appliance-removal/`
- **Dimensions:** 1600&times;893 WebP, ~44&nbsp;KB.

### `artifacts/denver-junk-help/public/images/cleanouts-items.webp`

- **What it is:** Cleanouts-page illustration. Stacked brown cardboard boxes, a rolled-up gray exercise mat, an old red children's bicycle, a low wooden workbench, and a folded navy blue tarp. Intentionally tidy &mdash; not a hoarder-style scene.
- **Source:** AI-generated illustration (Gemini 3.1 Flash Image) commissioned for this project.
- **License:** Owned by DenverJunkHelp.com.
- **Used on:** `/cleanouts/`
- **Dimensions:** 1600&times;893 WebP, ~58&nbsp;KB.

### `artifacts/denver-junk-help/public/images/mattress-removal-items.webp`

- **What it is:** Mattress-page illustration. A quilted white mattress standing on its long edge, a matching box spring leaning behind, a disassembled wooden bed frame, and a folded set of off-white bed linens on a small wooden side table.
- **Source:** AI-generated illustration (Gemini 3.1 Flash Image) commissioned for this project. Generated with a forest-green frame around the edge; frame was cropped during optimization to match the other illustrations' edge-to-edge cream background.
- **License:** Owned by DenverJunkHelp.com.
- **Used on:** `/mattress-removal/`
- **Dimensions:** 1600&times;837 WebP, ~50&nbsp;KB.

### `artifacts/denver-junk-help/public/images/yard-debris-items.webp`

- **What it is:** Yard-debris-page illustration. A bundle of pruned tree branches tied with twine, three filled brown paper yard-waste bags with leaves spilling out, a coiled green garden hose, a weathered wooden fence panel leaning behind, and a small terracotta plant pot.
- **Source:** AI-generated illustration (Gemini 3.1 Flash Image) commissioned for this project.
- **License:** Owned by DenverJunkHelp.com.
- **Used on:** `/yard-debris/`
- **Dimensions:** 1600&times;893 WebP, ~74&nbsp;KB.

## Where images are still needed

Most pages now have dedicated illustrations. Remaining gaps:

| Page | Suggested image direction |
|---|---|
| `/what-we-take/` | Could use a grid of small icon-style illustrations (one per category) instead of one hero. |

## Recommended replacement sources

When you replace any placeholder with a real photograph or illustration, prefer commercial-use sources with clear licensing:

| Source | License model | Notes |
|---|---|---|
| [Unsplash](https://unsplash.com/) | Free for commercial use, no attribution required | Search terms: `couch curbside`, `garage cleanup`, `moving boxes`, `denver skyline` |
| [Pexels](https://www.pexels.com/) | Free for commercial use, no attribution required | Wider photographer base than Unsplash for residential / interior content |
| [Pixabay](https://pixabay.com/) | Pixabay License (commercial OK) | Good for illustrations and vectors |
| [Burst by Shopify](https://burst.shopify.com/) | Free for commercial use | Strong on home and lifestyle |
| Hand-shot photos | All rights owned | If you take photos of real Denver streets or your own setups, you own them outright. Avoid anyone else's branding in the frame. |
| [Adobe Stock](https://stock.adobe.com/) / [Shutterstock](https://www.shutterstock.com/) | Paid, license-per-asset | Use only when free sources don't have what you need. Save the receipt and note the license number here. |

## Hard rules &mdash; what NOT to use

Regardless of where an image comes from, do not ship anything that:

- Shows a branded junk-removal truck, crew uniform, or company logo. The site is a referral resource &mdash; it must not look like a specific hauler's brand.
- Pretends to be a photograph but is obviously AI-generated. Stylized illustration is fine; fake photographs are not.
- Shows extreme hoarder-house conditions, garbage piles, or other imagery that frames the audience negatively.
- Shows specific people whose likeness rights you don't have. Generic silhouettes or no people at all is safer.
- Includes baked-in text or watermarks. Text belongs in the page layout, not in the image.

## Change log

| Date | Change |
|---|---|
| 2026-05-17 | Initial ledger created. `hero-curbside.svg` added as the homepage illustration. `opengraph.jpg` flagged as unaudited; replacement direction noted. |
| 2026-05-17 | Added five service-page illustrations: `furniture-removal-items.webp`, `appliance-removal-items.webp`, `cleanouts-items.webp`, `mattress-removal-items.webp`, `yard-debris-items.webp`. AI-generated, project-owned, matching the existing editorial style. Total payload added across five pages: ~264&nbsp;KB. |
