import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FilmographyHero from "@/components/filmography/FilmographyHero";
import FeaturedFilm from "@/components/filmography/FeaturedFilm";
import FilmographyGrid from "@/components/filmography/FilmographyGrid";
import FilmographyCTA from "@/components/filmography/FilmographyCTA";
import {
  getPublicFilms,
  mapPublicFilmToDisplayFilm,
  type PublicFilm,
} from "@/lib/api/films";
import { getFilmBySlug } from "@/data/films";

export const dynamic = "force-dynamic";

export default async function FilmographyPage() {
  let films: PublicFilm[] = [];
  let loadFailed = false;

  try {
    films = await getPublicFilms();
  } catch (error) {
    loadFailed = true;
    console.error("Unable to load films:", error);
  }

  const featuredApiFilm =
    films.find((film) => film.slug === "bobby") ?? films[0];
  const featuredFallback = featuredApiFilm
    ? getFilmBySlug(featuredApiFilm.slug)
    : getFilmBySlug("bobby");
  const featuredFilm = featuredApiFilm
    ? mapPublicFilmToDisplayFilm(featuredApiFilm, featuredFallback)
    : featuredFallback;

  return (
    <>
      <Header />

      <main>
        <FilmographyHero />
        {featuredFilm && <FeaturedFilm film={featuredFilm} />}
        <FilmographyGrid films={films} loadFailed={loadFailed} />
        <FilmographyCTA />
      </main>

      <Footer />
    </>
  );
}
