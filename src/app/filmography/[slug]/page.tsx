import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import FilmHero from "@/components/film-detail/FilmHero";
import FilmOverview from "@/components/film-detail/FilmOverview";
import AwardsStrip from "@/components/home/AwardsStrip";
import FilmGallery from "@/components/film-detail/FilmGallery";
import FilmCredits from "@/components/film-detail/FilmCredits";
import FilmWatch from "@/components/film-detail/FilmWatch";

import { getFilmBySlug } from "@/data/films";
import {
  getPublicFilmBySlug,
  mapPublicFilmToDisplayFilm,
} from "@/lib/api/films";

type FilmPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

export default async function FilmPage({
  params,
}: FilmPageProps) {
  const { slug } = await params;

  let apiFilm = null;
  let apiFailed = false;

  try {
    apiFilm = await getPublicFilmBySlug(slug);
  } catch (error) {
    apiFailed = true;
    console.error(`Unable to load film ${slug}:`, error);
  }

  // API answered: show exactly what the admin panel has. A disabled or
  // deleted film comes back as 404 → "page not found".
  // API unreachable: fall back to the built-in copy of the original films.
  const film = apiFilm
    ? mapPublicFilmToDisplayFilm(apiFilm)
    : apiFailed
      ? getFilmBySlug(slug)
      : undefined;

  if (!film) {
    notFound();
  }

  return (
    <>
      <Header />

      <main>
        <FilmHero film={film} />

        <FilmOverview film={film} />

        <AwardsStrip />

        <FilmGallery film={film} />

        <FilmCredits film={film} />

        <FilmWatch film={film} />

      </main>

      <Footer />
    </>
  );
}
