import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import SelectedFilms from "@/components/home/SelectedFilms";
import AboutSection from "@/components/home/AboutSection";
import AwardsStrip from "@/components/home/AwardsStrip";
import ContactCTA from "@/components/home/ContactCTA";
import { getPublicFilms, type PublicFilm } from "@/lib/api/films";
import { getPageImages } from "@/lib/api/page-images";

export const dynamic = "force-dynamic";

export default async function Home() {
  let films: PublicFilm[] = [];

  // Page images never throw (they fall back to the defaults).
  const [filmsResult, pageImages] = await Promise.all([
    getPublicFilms().then(
      (value) => ({ ok: true as const, value }),
      (error: unknown) => ({ ok: false as const, error }),
    ),
    getPageImages(),
  ]);

  if (filmsResult.ok) {
    films = filmsResult.value;
  } else {
    console.error("Unable to load homepage films:", filmsResult.error);
  }

  return (
    <>
      <Header />

      <main>
        <Hero slides={pageImages.home.heroSlides} />

        <SelectedFilms
          films={films.slice(0, 3)}
          loadFailed={!filmsResult.ok}
        />

        <AboutSection image={pageImages.home.about} />

        <AwardsStrip plain />

        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
