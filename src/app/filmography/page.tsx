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
        <FilmographyGrid />
        <FilmographyCTA />
      </main>

      <Footer />
    </>
  );
}
