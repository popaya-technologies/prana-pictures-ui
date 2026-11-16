import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import SelectedFilms from "@/components/home/SelectedFilms";
import AboutSection from "@/components/home/AboutSection";
import AwardsStrip from "@/components/home/AwardsStrip";
import ContactCTA from "@/components/home/ContactCTA";
import { getPublicFilms, type PublicFilm } from "@/lib/api/films";

export const dynamic = "force-dynamic";

export default async function Home() {
  let films: PublicFilm[] = [];

  try {
    films = await getPublicFilms();
  } catch (error) {
    console.error("Unable to load homepage films:", error);
  }

  return (
    <>
      <Header />

      <main>
        <Hero />

        <SelectedFilms films={films.slice(0, 3)} />

        <AboutSection />

        <AwardsStrip plain />

        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
