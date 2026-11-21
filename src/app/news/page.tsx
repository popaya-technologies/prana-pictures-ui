import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FeaturedNews from "@/components/news/FeaturedNews";
import NewsCTA from "@/components/news/NewsCTA";
import NewsFeed from "@/components/news/NewsFeed";
import NewsHero from "@/components/news/NewsHero";
import { newsStories } from "@/data/news";
import {
  getPublicNews,
  mapPublicNewsToStories,
} from "@/lib/api/news";

export const dynamic = "force-dynamic";

export default async function NewsPage() {
  // The sample stories in src/data/news.ts are only used when the API is
  // unreachable. If the API simply has no enabled news, none are shown.
  let stories = newsStories;

  try {
    const apiNews = await getPublicNews();
    stories = mapPublicNewsToStories(apiNews);
  } catch (error) {
    console.error("Unable to load news:", error);
  }

  return (
    <>
      <Header />
      <main>
        <NewsHero />
        {stories[0] && <FeaturedNews story={stories[0]} />}
        <NewsFeed stories={stories} />
        <NewsCTA />
      </main>
      <Footer />
    </>
  );
}
