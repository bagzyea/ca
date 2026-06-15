# Constitutional Africa

A platform for African thought — examining the continent through the lens of
**African Constitutional Economics**: the idea that constitutional and institutional
design are not downstream of prosperity, but its precondition.

Built with **React 18** + **Vite 5** + **React Router 6**. Styling uses a custom
design system (IBM Plex type, indigo/brass/jade palette) defined in `src/index.css`.

## Stack

- React 18, React Router 6 (multi-page SPA)
- Vite 5 build tooling
- No backend required — content lives in `src/data/`, newsletter posts to an
  external provider, podcast uses embed players.

## Project structure

```
public/
  images/            # Photography (served from web root)
  _redirects         # SPA fallback for static hosts (Cloudflare/Netlify)
src/
  main.jsx           # Entry — mounts <BrowserRouter><App/></BrowserRouter>
  App.jsx            # Route table
  index.css          # Design system + global styles
  components/        # Layout, Nav, Footer, Newsletter, cards, shared ui.jsx
  data/              # Content: site, pillars, episodes, articles
  pages/             # Home, Work, PillarDetail, Framework, Listen,
                     # EpisodeDetail, Articles, ArticleDetail, About, Join, NotFound
```

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev      # dev server at http://localhost:6600
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Editing content

No CMS yet — edit the data files directly:

- **Pillars** → `src/data/pillars.js`
- **Podcast episodes** → `src/data/episodes.js` (paste a Spotify embed URL into
  `spotifyEmbed` to enable the inline player)
- **Writing / briefs** → `src/data/articles.js`
- **Site config** (email, nav, socials, newsletter endpoint) → `src/data/site.js`

To make the newsletter live, set `newsletterAction` in `src/data/site.js` to your
Mailchimp / Buttondown / ConvertKit form-action URL. Until then it simulates success.

Image guidance is in [IMAGES.md](IMAGES.md).

## Deployment — Cloudflare Pages (pages.dev)

This is a static SPA, so any static host works. Recommended: **Cloudflare Pages**.

### 1. Push to GitHub

```bash
git add -A
git commit -m "Prepare for deployment"
git branch -M main
git remote add origin https://github.com/<you>/constitutional-africa.git
git push -u origin main
```

### 2. Connect Cloudflare Pages

1. In the Cloudflare dashboard go to **Workers & Pages → Create → Pages →
   Connect to Git** and select the repository.
2. Set the build configuration:
   - **Framework preset:** `Vite` (or "None")
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variable:** `NODE_VERSION = 20` (also pinned via `.nvmrc`)
3. **Save and Deploy.** The site builds and goes live at
   `https://<project>.pages.dev`.

Every push to `main` triggers a production deploy; other branches get preview URLs.

Client-side routes (e.g. `/work`, `/pillar/institutions`) are handled by
`public/_redirects` (`/* /index.html 200`), which Cloudflare Pages honours
automatically.

### Custom domain (optional)

In the Pages project → **Custom domains → Set up a domain**, add your domain and
follow the DNS instructions.

## License

TBD
