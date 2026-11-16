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
  let stories = newsStories;

  try {
    const apiNews = await getPublicNews();

    if (apiNews.length > 0) {
      stories = mapPublicNewsToStories(apiNews);
    }
  } catch (error) {
    console.error("Unable to load news:", error);
  }

  return (
    <>
      <Header />
      <main>
        <NewsHero />
        <FeaturedNews story={stories[0]} />
        <NewsFeed stories={stories} />
        <NewsCTA />
      </main>
      <Footer />
    </>
  );
}
