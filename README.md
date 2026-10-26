# Enjoy Café — website

Arabic-first (RTL) marketing site for **كافيه انچوي / Enjoy Café**, Kafr El Zayat.
Built with **Next.js 16 (App Router) · TypeScript · Tailwind CSS 4**.

Pages: `/` home · `/menu` · `/gallery` · `/visit`

---

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all pages prerendered as static HTML)
npm start          # serve the production build
```

Requires Node.js 20.9 or newer.

---

## Where to edit things

| What | File |
| --- | --- |
| **Menu items & prices** | `src/data/menu.ts` |
| Address, hours, phone, WhatsApp, socials | `src/data/site.ts` |
| Gallery photos & captions | `src/data/gallery.ts` |
| Colours, fonts, glass styles | `src/app/globals.css` |
| Navbar / footer / mobile quick bar | `src/components/site-header.tsx`, `site-footer.tsx`, `quick-actions.tsx` |

### Adding prices
In `src/data/menu.ts`, set `price` on each item (a number in EGP):

```ts
{ id: "espresso", nameAr: "إسبريسو", nameEn: "Espresso", price: 45, ... }
```

Prices are shown in Arabic numerals with "ج.م" automatically. `price: null` hides the price.
Items marked `draft: true` are hidden until their real name is filled in.

### Phone / WhatsApp
In `src/data/site.ts` set `phone` and/or `whatsapp` (digits with country code, e.g. `"201001234567"`).
The call / WhatsApp buttons appear everywhere automatically; until then they link to the Facebook page.

### Domain
Set `site.url` in `src/data/site.ts` to the real domain before launch (used for SEO, sitemap and share previews).

---

## Speed — what's already done

- Every page is **static HTML** generated at build time (`ensureStatic = "navigation"` in `app/layout.tsx`).
- Photos go through `next/image` optimisation (**AVIF/WebP**, responsive `srcset`, lazy loading) via the
  `Photo` component, which renders plain `<img>` with **no client JavaScript** (`src/components/photo.tsx`).
- **Hero video**: the poster frame paints first; the 1.9 MB muted MP4 only starts downloading after the page
  has fully loaded and the browser is idle. It is skipped for data-saver, 2G and reduced-motion users.
  The video is cached for a year (`next.config.ts`).
- **Fonts are self-hosted** (`src/fonts/`, SIL OFL) and split into Arabic / Latin files with `unicode-range`,
  so browsers only download what a page uses. The Arabic files are preloaded.
- Only 4 small client components ship JavaScript: mobile menu, active nav link, hero video toggle,
  menu / gallery filters.

Lighthouse (mobile, simulated slow 4G): Performance 83–97 · Accessibility 100 · Best practices 100 · SEO 100.

---

## SEO

Per-page titles and descriptions, Open Graph share image (`app/opengraph-image.jpg`), `sitemap.xml`,
`robots.txt`, web manifest, app icons, and `CafeOrCoffeeShop` structured data (address, 24/7 hours,
socials) in `app/layout.tsx`.

---

## Deploy

Easiest: push to GitHub and import into **Vercel** (zero config). Any Node host works with
`npm run build && npm start`.

## Replacing media

- Hero video: replace `public/video/hero-720.mp4` (keep it muted, ~720 px wide, a few MB) and the poster
  `src/assets/images/hero-poster.jpg`. To re-encode from the original reel:
  `ffmpeg -i enjoy-hero-reel.mp4 -an -vf "scale=720:-2,fps=30" -c:v libx264 -crf 30 -preset veryslow -movflags +faststart -pix_fmt yuv420p public/video/hero-720.mp4`
- Photos in `src/assets/images/` are copies from Instagram/Facebook at screen resolution (~500–800 px).
  Swap in the original, higher-resolution files under the same names for sharper images.
