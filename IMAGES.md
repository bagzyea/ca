# Images

Photos live in [`public/images/`](public/images/) and are served from the web root
(e.g. `/images/hero-parliament.jpg`). This is the robust approach — no CORS, no
hotlink blocking, and Vite copies the folder into `dist/` automatically on build.

## How images are wired

All image paths are declared at the top of [`src/App.jsx`](src/App.jsx):

- `IMAGES.hero` — hero panel
- `IMAGES.framework` — full-bleed parallax band (the `ImageBand` section)
- `PILLAR_IMAGES[]` — one per pillar card (index matches the `PILLARS` array)
- `PODCAST_IMAGES[]` — one per episode card

Each image sits under a brand-tinted gradient overlay so text stays legible and the
indigo/brass palette reads consistently.

## Current set (downloaded from Unsplash, free to use)

Imagery is intentionally African — African people and African geography.

| File | Subject | Used for |
|------|---------|----------|
| hero-capetown.jpg | Cape Town aerial (Table Mountain) | Hero |
| courts-justice.jpg | Scales of justice | Pillar I — Institutions |
| belonging-woman.jpg | African woman, silhouette | Pillar II — Belonging |
| heritage-sahara.jpg | Sahara caravan | Pillar III — Culture/Heritage |
| youth-man.jpg | Young African man (national jersey) | Pillar IV — Youth |
| enterprise-market.jpg | Market stall | Pillar V — Enterprise |
| integration-joburg.jpg | Johannesburg skyline | Pillar VI — Integration |
| infrastructure-port.jpg | Container port | Framework band |
| guest-woman-1.jpg | African woman, Ankara print | Podcast — Janine Mukiza |
| guest-man.jpg | African man, studio | Podcast — Kofi Anane |
| guest-woman-2.jpg | African woman, rooftop | Podcast — Amara Okonkwo |

## Swapping an image

1. Drop a new file into `public/images/` (keep it ~1400px wide, JPEG, <500 KB).
2. Point the matching entry in `src/App.jsx` at it.
3. That's it — no rebuild needed in dev; the page hot-reloads.

> The older `IMAGE_*.md`, `QUICK_REFERENCE.md`, `RESOLUTION_SUMMARY.md`, and
> `WHAT_YOU_SEE_NOW.md` files describe an earlier (external-URL) approach that has been
> superseded by this one. They can be deleted.
