"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { newsStories, type NewsCategory, type NewsStory } from "@/data/news";

type Filter = "all" | NewsCategory;

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Films", value: "film" },
  { label: "Festivals", value: "festival" },
  { label: "Awards", value: "award" },
];

const initialCount = 6;

export default function NewsFeed() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const feedStories = newsStories.slice(1);
  const filteredStories = feedStories.filter(
    (story) => activeFilter === "all" || story.category === activeFilter,
  );

  function changeFilter(filter: Filter) {
    setActiveFilter(filter);
    setVisibleCount(initialCount);
  }

  return (
    <section className="bg-white pb-14 md:pb-16">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div
          className="mb-5 flex gap-7 overflow-x-auto border-b border-neutral-200"
          role="tablist"
          aria-label="Filter news"
        >
          {filters.map((filter) => {
            const selected = activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => changeFilter(filter.value)}
                className={`shrink-0 border-b-2 pb-3 text-xs font-medium uppercase transition-colors ${
                  selected
                    ? "border-[#e69a2d] text-[#d88b21]"
                    : "border-transparent text-neutral-600 hover:text-[#d88b21]"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {filteredStories.length > 0 ? (
          <div
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6"
            role="tabpanel"
          >
            {filteredStories.slice(0, visibleCount).map((story, index) => (
              <NewsCard key={story.slug} story={story} index={index} />
            ))}
          </div>
        ) : (
          <p className="py-12 text-sm text-neutral-500">No stories in this category yet.</p>
        )}

        {visibleCount < filteredStories.length && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + initialCount)}
              className="min-h-[44px] min-w-[220px] border border-[#e69a2d] px-6 text-sm text-[#b66b0c] transition-colors hover:bg-[#e69a2d] hover:text-white"
            >
              Load more news
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function NewsCard({ story, index }: { story: NewsStory; index: number }) {
  return (
    <article className="border border-neutral-200 bg-white">
      <Link
        href={`/news/${story.slug}`}
        className="group relative block aspect-[2.25/1] overflow-hidden bg-neutral-100"
        aria-label={`Read ${story.title}`}
      >
        <Image
          src={story.image}
          alt={story.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 767px) 100vw, 50vw"
          priority={index < 2}
        />
      </Link>

      <div className="p-4 md:p-5">
        <h2 className="font-[family-name:var(--font-cormorant)] text-[25px] leading-[1.05] font-medium md:text-[28px]">
          <Link href={`/news/${story.slug}`} className="transition-colors hover:text-[#b66b0c]">
            {story.title}
          </Link>
        </h2>
        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#d88b21]">
          {story.categoryLabel}
        </p>
        <p className="mt-3 text-sm leading-6 text-neutral-600">
          {story.excerpt}
        </p>
        <Link
          href={`/news/${story.slug}`}
          className="group mt-4 inline-flex items-center gap-2 text-xs font-medium text-[#b66b0c] transition-colors hover:text-[#8f5008]"
        >
          Read more
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}