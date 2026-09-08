# Captain's Cabin — captainscabinwestcoast.com

Static one-page site for Captain's Cabin Restaurant & Pub, 20 Main Road, Saldanha.
No build step: `index.html` contains all the CSS and JS inline. What's in the repo is
what gets served.

```
index.html          the whole site
images/             35 photos (see images/README.txt — you must add these)
brand/              logo assets
favicon.*  icon-*.png  apple-touch-icon.png  site.webmanifest  og-image.jpg
netlify.toml        tells Netlify to publish the repo root as-is
```

## Deploying

The repo is linked to the `captainscabinwestcoast` project on Netlify. Every push to
`main` redeploys, and any commit can be rolled back from the Deploys page. Publish
directory is `.` and there is no build command — `netlify.toml` already says so.

## Domain

Live at **https://captainscabinwestcoast.com** — registered at Namecheap, Sep 2026.
DNS stays at Namecheap rather than moving to Netlify:

* `ALIAS` on `@` → `apex-loadbalancer.netlify.com`
* `CNAME` on `www` → `captainscabinwestcoast.netlify.app`

Netlify holds the Let's Encrypt certificate for both names. `www` redirects to the
bare domain, and `netlify.toml` 301s the old `captainscabinwestcoast.netlify.app`
address to the real one so search engines only ever index one copy.

## The logo

`brand/logo-cream.svg` is the full lockup traced to vector from the original artwork.
Every white area of that artwork — the paper, the script letters knocked out of the
banner, the sunburst gaps, the rope holes — is real alpha transparency, so the page
background reads straight through it. There is no white plate anywhere.

| file | use |
|---|---|
| `brand/logo-cream.svg` | full lockup, cream ink — what the site uses on its dark backgrounds |
| `brand/logo-ink.svg` | full lockup, near-black — for light backgrounds, menus, print |
| `brand/logo.svg` | full lockup with `fill="currentColor"` — for inlining, inherits CSS `color` |
| `brand/mark-cream.svg` | ship's wheel only, no banner — for small sizes |
| `brand/logo-cream-2048.png` etc. | raster fallbacks for email signatures and print |

Where it appears, and the CSS that controls it (all in the `CAPTAIN'S CABIN LOGO` block
at the end of the `<style>` in `index.html`):

* **Nav** — `.nav .cc-logo`, 58 px, shrinks to 46 px once the nav goes solid on scroll.
* **Hero** — `.hero-emblem`, right-hand side on desktop, above the headline on mobile.
* **Kitchen section** — `.wm > .wm-logo`, watermark at 5% opacity behind the menu grid.
  Add `wm` to any other section's class and drop the same `<span>` in to reuse it.
* **Footer** — `footer .cc-logo`, 150 px.
* **Favicons / social card** — generated from the wheel; `og-image.jpg` is 1200×630.

### Two known trade-offs

**Favicons.** The full artwork can't survive 16–32 px — the rope ring, sunburst rays
and the captain's face turn to mush. The favicons use the wheel alone with slightly
thickened strokes. A genuinely crisp tab icon would need a simplified wheel drawn as
clean geometry.

**Repeated wordmark.** The lockup contains the words "Captain's Cabin", and it now sits
next to the text wordmark in the nav and footer, and beside the giant hero headline.
This was a deliberate choice. If it ever grates, the fix is one word per location:
change `logo-cream.svg` to `mark-cream.svg` and you get the wheel with no script.
