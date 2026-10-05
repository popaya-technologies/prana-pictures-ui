import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import FilmHero from "@/components/film-detail/FilmHero";
import FilmOverview from "@/components/film-detail/FilmOverview";
import AwardsStrip from "@/components/home/AwardsStrip";
import FilmGallery from "@/components/film-detail/FilmGallery";
import FilmCredits from "@/components/film-detail/FilmCredits";
import FilmWatch from "@/components/film-detail/FilmWatch";

import { films, getFilmBySlug } from "@/data/films";

type FilmPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return films.map((film) => ({
    slug: film.slug,
  }));
}

export default async function FilmPage({
  params,
}: FilmPageProps) {
  const { slug } = await params;

  const film = getFilmBySlug(slug);

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