import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NewsArticle from "@/components/news/NewsArticle";
import NewsCTA from "@/components/news/NewsCTA";
import { getNewsStoryBySlug, newsStories } from "@/data/news";

type NewsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return newsStories.map((story) => ({ slug: story.slug }));
}

export default async function NewsStoryPage({ params }: NewsPageProps) {
  const { slug } = await params;
  const story = getNewsStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <NewsArticle story={story} />
        <NewsCTA />
      </main>
      <Footer />
    </>
  );
}