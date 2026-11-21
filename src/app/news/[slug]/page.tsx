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
  // Sample stories only when the API is unreachable; otherwise just the
  // news saved in the admin panel (old sample links show "not found").
  let stories = newsStories;
  let apiFailed = false;

  try {
    const apiNews = await getPublicNews();
    stories = mapPublicNewsToStories(apiNews);
  } catch (error) {
    apiFailed = true;
    console.error(`Unable to load news story ${slug}:`, error);
  }

  const story =
    stories.find((item) => item.slug === slug) ??
    (apiFailed ? getNewsStoryBySlug(slug) : undefined);

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
