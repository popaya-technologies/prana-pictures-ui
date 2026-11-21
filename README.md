# Website changes (prana-pictures-ui)

Copy everything in this folder over your `prana-pictures-ui` folder (same paths; say yes to replace):
the `src` folder and `next.config.ts`. No new packages, so no `npm install` needed.

## What changed

Team, news and page images
- src/components/about/OurTeam.tsx, src/lib/api/team.ts — every enabled member, each with their own photo
- src/lib/api/news.ts — news category (tabs) and image
- src/app/page.tsx, src/app/contact/page.tsx, src/components/home/Hero.tsx, src/components/home/AboutSection.tsx,
  src/components/about/AboutHero.tsx, src/components/about/AboutCTA.tsx, src/components/contact/ContactHero.tsx,
  src/components/contact/ContactStory.tsx — images from "Page images" in the admin panel
- NEW src/data/page-images.ts — the website's default page images (used when nothing is uploaded)
- NEW src/lib/api/page-images.ts — loads the page images
- src/app/about/page.tsx — page images; hides "Who we are" / "Our vision" when disabled in the admin panel

Films: the admin panel is now the only source
- src/lib/api/films.ts — film pages use only what's saved in the admin panel (no built-in backups mixed in)
- src/app/filmography/[slug]/page.tsx — a disabled or deleted film shows "page not found"
- src/app/filmography/page.tsx, src/app/watch/page.tsx, src/components/home/SelectedFilms.tsx,
  src/components/filmography/FilmographyGrid.tsx, src/components/filmography/FeaturedFilm.tsx,
  src/components/film-detail/FilmHero.tsx — placeholder when a film has no image; landscape spots use the
  hero image first, the poster card on Home uses the poster first
- NEW src/components/films/FilmImagePlaceholder.tsx — the placeholder
- src/data/films.ts — now only used if the API can't be reached

Local development
- next.config.ts (project root, not in src) — lets `npm run dev` load images from s3.pranapictures.com on
  IPv6-only (NAT64) networks such as mobile hotspots; production is unchanged
