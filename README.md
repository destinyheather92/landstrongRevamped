# LandStrong Coaching & Consulting — Website

A redesigned, static marketing site for LandStrong Coaching & Consulting, built with React, TypeScript, and React Router. No backend, no database, no build-time CMS — just a fast, accessible, responsive front end that's easy to deploy anywhere that serves static files.

## Tech stack

- **React 19 + TypeScript** — component-based UI with typed props/data
- **Vite** — dev server and static build
- **React Router v7** — real client-side routes (`/`, `/about`, `/coaching`, `/workshops`, `/resources`, `/contact`)
- **Plain CSS** — design tokens (`src/styles/tokens.css`) + a small global reset, one stylesheet per component
- **oxlint** — fast linting

## Getting started

```bash
npm install
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build locally
npm run lint      # lint the codebase
```

## Project structure

```
src/
  components/
    layout/    Navbar, Footer, Layout (shared shell), ScrollToTop
    ui/        Button, SectionHeading, ServiceCard, QuoteBlock, ContentSection,
               VisualPanel, CTASection, Accordion, Badge, Divider, Blob
    icons/     Small hand-drawn-feel line icon set (leaf, sun, heart, sparkle, wave, star)
  pages/       One file + stylesheet per route (Home, About, Coaching, Workshops,
               Resources, Contact, NotFound)
  data/        siteContent.ts — all real business copy/content in one place, typed via types.ts
  hooks/       usePageMeta — sets document title + meta description per page
  styles/      tokens.css (design tokens/CSS variables) + global.css (reset + utilities)
```

### Editing content

Almost everything editorial — business info, nav links, service descriptions, the
founder bio, testimonials, workshop topics, FAQs, resource article teasers — lives in
**`src/data/siteContent.ts`**. Update copy there rather than hunting through page
components.

Key values you'll likely need to update over time:

- `businessInfo.bookingUrl` — the Acuity Scheduling link used by every "Book a
  Consultation" button/link site-wide
- `businessInfo.email` / `phone` / `address` — used in the footer, Contact page, and
  the mailto-based contact form
- `socialLinks` — Instagram/LinkedIn/Facebook URLs (footer + Contact page)

### Design system

Colors, type scale, spacing, radii, shadows, and motion durations are all CSS custom
properties in `src/styles/tokens.css`. Change a token there and it updates everywhere.
Components only use the semantic color tokens (`--background`, `--primary`,
`--button-primary`, `--footer-bg`, …), never raw palette values.

#### Temporary: color theme comparison

A neutral bar above the navbar switches the whole site between the **Current design**
and **Lavender Dusk**, a candidate palette defined in `src/styles/themes.css`. Only
colors change; layout, copy and imagery stay identical. Add `?theme=lavender-dusk` or
`?theme=current` to any URL to open a specific look.

- **Adjust a shade or font:** edit the palette and typography variables at the top of
  the Lavender Dusk block in `themes.css` (`--dusk-soft-pink`, `--font-display`, …).
- **Lavender Dusk's design layer** — the photographic hero, torn-paper and mountain-ridge
  section edges, editorial cards and quote band — lives in `src/styles/lavender-dusk.css`,
  scoped so it only applies while that theme is active. Its shapes and hero photo are in
  `src/assets/lavender-dusk/`.
- **Brand mountain watermark:** set `--brand-mountain` at the top of
  `lavender-dusk.css` to the mountain asset's `url()` and it appears, faded, behind the
  feature sections, the closing CTA and the footer.
- **Hero photo:** "Hazy mountain layers at sunrise" by
  [Daniil Silantev](https://unsplash.com/photos/l9XWp3S9yuk) on Unsplash (Unsplash
  License — free for commercial use, no attribution required). Swap it via the `url()`
  in the `--hero-bg` token.
- **Adopt the palette:** copy the block's declarations from `themes.css` into the
  theme-token section of `tokens.css`, then remove the comparison (below).
- **Remove the comparison:** delete `<ThemeSwitcher />` from
  `src/components/layout/Layout.tsx`, the `src/components/theme/` folder,
  `src/styles/themes.css` and its `@import` in `global.css`. With no theme applied, the
  site renders its current styling.

There is no photography in this build — in its place, `VisualPanel` and `Blob`
render warm, layered organic shapes as a stand-in for photos. Swap a `VisualPanel`
for a real `<img>` (with meaningful `alt` text) once brand photography exists; the
surrounding `ContentSection` layout doesn't need to change.

### Contact form

The Contact page's message form is fully client-side: submitting it opens a
pre-filled `mailto:` link in the visitor's own email client. Nothing is sent to or
stored by this site — there's no backend to wire up later unless you want one.

## Deployment

This builds to a static `dist/` folder (`npm run build`) that can be hosted on any
static host (Netlify, Vercel, GitHub Pages, S3 + CloudFront, etc.).

Because routing is client-side (React Router, `BrowserRouter`), the host needs to
serve `index.html` for unknown paths so a hard refresh on e.g. `/coaching` doesn't
404:

- **Netlify** — `public/_redirects` (already included) handles this automatically.
- **Vercel** — `vercel.json` (already included) rewrites all paths to `index.html`.
- **Other static hosts** — configure an equivalent "SPA fallback" / catch-all rewrite
  to `index.html`.

## Accessibility notes

- Semantic landmarks (`header`, `nav`, `main`, `footer`, `address`) throughout
- Visible focus states, a "Skip to main content" link, and `aria-expanded`/
  `aria-controls` on the mobile menu toggle
- The FAQ accordion and mobile nav are fully keyboard-operable (Escape closes the
  mobile menu)
- Color choices target WCAG AA contrast for body text; decorative icons and shapes
  are `aria-hidden`
