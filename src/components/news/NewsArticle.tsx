import Image from "next/image";
import Link from "next/link";

import NewsActions from "@/components/news/NewsActions";
import { newsStories, type NewsStory } from "@/data/news";

type Props = {
  story: NewsStory;
};

export default function NewsArticle({ story }: Props) {
  const relatedStories = newsStories
    .filter((item) => item.slug !== story.slug)
    .slice(0, 3);

  return (
    <>
      <article className="bg-white pb-14 md:pb-20">
        <div className="mx-auto max-w-[1180px] px-5 pt-8 md:px-8 md:pt-12">
          <nav aria-label="Breadcrumb" className="text-xs text-neutral-500">
            <Link href="/news" className="text-[#b66b0c] hover:underline">
              News
            </Link>
            <span className="px-3">/</span>
            <span>{story.categoryLabel}</span>
          </nav>

          <header className="pt-8 md:pt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#b66b0c]">
              {story.categoryLabel}
            </p>
            <h1 className="mt-3 max-w-[1000px] font-[family-name:var(--font-cormorant)] text-[44px] leading-[0.98] font-medium md:text-[68px] lg:text-[82px]">
              {story.title}
            </h1>
            <div className="mt-6 h-[2px] w-8 bg-[#e69a2d]" />
            <p className="mt-6 max-w-[920px] text-[15px] leading-7 text-neutral-600 md:text-[17px]">
              {story.excerpt}
            </p>
          </header>

          <figure className="mt-8 md:mt-10">
            <div className="relative aspect-[1.75/1] overflow-hidden bg-neutral-100">
              <Image
                src={story.image}
                alt={story.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1180px"
              />
            </div>
            <figcaption className="mt-2 text-xs text-neutral-500">
              Preview imagery from the Prana Pictures film collection.
            </figcaption>
          </figure>

          <div className="mx-auto mt-10 max-w-[760px] md:mt-14">
            <p className="text-[15px] leading-7 text-neutral-700 md:text-[17px] md:leading-8">
              Full article copy, acknowledgements and festival details will be
              added after approval by Prana Pictures.
            </p>

            <blockquote className="relative mt-10 border-l border-[#e69a2d] py-2 pl-8 md:mt-14 md:pl-12">
              <span
                aria-hidden="true"
                className="absolute top-0 left-3 font-[family-name:var(--font-cormorant)] text-[42px] leading-none text-[#c27d1a]"
              >
                “
              </span>
              <p className="font-[family-name:var(--font-cormorant)] text-[27px] leading-tight italic md:text-[38px]">
                {story.quote}
              </p>
              <span
                aria-hidden="true"
                className="absolute right-0 bottom-0 font-[family-name:var(--font-cormorant)] text-[42px] leading-none text-[#c27d1a]"
              >
                ”
              </span>
            </blockquote>

            <div className="mt-8 max-w-[280px] border-t border-[#d7a05d] pt-3">
              <NewsActions />
            </div>
          </div>
        </div>
      </article>

      <section className="border-t border-neutral-200 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1180px] px-5 md:px-8">
          <div className="mb-7">
            <h2 className="font-[family-name:var(--font-cormorant)] text-[34px] leading-none font-medium md:text-[42px]">
              Related stories
            </h2>
            <div className="mt-4 h-[2px] w-8 bg-[#e69a2d]" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedStories.map((related) => (
              <Link
                key={related.slug}
                href={`/news/${related.slug}`}
                className="group min-w-0"
              >
                <div className="relative aspect-[1.5/1] overflow-hidden bg-neutral-100">
                  <Image
                    src={related.image}
                    alt={related.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <span className="mt-3 flex items-start justify-between gap-3 font-[family-name:var(--font-cormorant)] text-[22px] leading-tight font-medium transition-colors group-hover:text-[#a85d05]">
                  {related.title}
                  <span aria-hidden="true" className="shrink-0 text-[#c27d1a]">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}