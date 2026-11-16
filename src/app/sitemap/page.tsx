import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SitemapContent from "@/components/sitemap/SitemapContent";
import { getPublicFilms, type PublicFilm } from "@/lib/api/films";

export const dynamic = "force-dynamic";

export default async function SitemapPage() {
  let films: PublicFilm[] = [];

  try {
    films = await getPublicFilms();
  } catch (error) {
    console.error("Unable to load films for sitemap:", error);
  }

  return (
    <>
      <Header />
      <main>
        <SitemapContent films={films} />
      </main>
      <Footer />
    </>
  );
}
