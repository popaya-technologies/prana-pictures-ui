import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NewsArticle from "@/components/news/NewsArticle";
import NewsCTA from "@/components/news/NewsCTA";
import { getNewsStoryBySlug, newsStories } from "@/data/news";
import {
  getPublicNews,
  mapPublicNewsToStories,
} from "@/lib/api/news";

type NewsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

export default async function NewsStoryPage({ params }: NewsPageProps) {
  const { slug } = await params;
  let stories = newsStories;

  try {
    const apiNews = await getPublicNews();

    if (apiNews.length > 0) {
      stories = [...mapPublicNewsToStories(apiNews), ...newsStories];
    }
  } catch (error) {
    console.error(`Unable to load news story ${slug}:`, error);
  }

  const story =
    stories.find((item) => item.slug === slug) ??
    getNewsStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <NewsArticle story={story} stories={stories} />
        <NewsCTA />
      </main>
      <Footer />
    </>
  );
}
