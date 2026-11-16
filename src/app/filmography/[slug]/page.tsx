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

  const fallbackFilm = getFilmBySlug(slug);
  let apiFilm = null;

  try {
    apiFilm = await getPublicFilmBySlug(slug);
  } catch (error) {
    console.error(`Unable to load film ${slug}:`, error);
  }

  if (!apiFilm && !fallbackFilm) {
    notFound();
  }

  const film = apiFilm
    ? mapPublicFilmToDisplayFilm(apiFilm, fallbackFilm)
    : fallbackFilm;

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
