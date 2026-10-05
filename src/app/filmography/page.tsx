import { Suspense } from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FilmographyHero from "@/components/filmography/FilmographyHero";
import FeaturedFilm from "@/components/filmography/FeaturedFilm";
import FilmographyGrid from "@/components/filmography/FilmographyGrid";
import FilmographyCTA from "@/components/filmography/FilmographyCTA";

export default function FilmographyPage() {
  return (
    <>
      <Header />

      <main>
        <FilmographyHero />
        <FeaturedFilm />
        <Suspense fallback={<FilmographyGridFallback />}>
          <FilmographyGrid />
        </Suspense>
        <FilmographyCTA />
      </main>

      <Footer />
    </>
  );
}

function FilmographyGridFallback() {
  return (
    <section className="bg-white pb-16 md:pb-20">
      <div className="mx-auto min-h-[420px] max-w-[1280px] px-5 md:px-8" />
    </section>
  );
}
