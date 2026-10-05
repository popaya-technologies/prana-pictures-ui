import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FeaturedNews from "@/components/news/FeaturedNews";
import NewsCTA from "@/components/news/NewsCTA";
import NewsFeed from "@/components/news/NewsFeed";
import NewsHero from "@/components/news/NewsHero";
import { newsStories } from "@/data/news";

export default function NewsPage() {
  return (
    <>
      <Header />
      <main>
        <NewsHero />
        <FeaturedNews story={newsStories[0]} />
        <NewsFeed />
        <NewsCTA />
      </main>
      <Footer />
    </>
  );
}