import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { NewsStory } from "@/data/news";

type Props = {
  story: NewsStory;
};

export default function FeaturedNews({ story }: Props) {
  return (
    <section className="bg-white pb-10 md:pb-12">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <article className="grid gap-7 border border-neutral-200 p-4 md:p-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-10">
          <Link
            href={`/news/${story.slug}`}
            className="group relative block aspect-[1.55/1] overflow-hidden bg-neutral-100"
            aria-label={`Read ${story.title}`}
          >
            <Image
              src={story.image}
              alt={story.imageAlt}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Link>

          <div className="py-2 lg:py-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#d88b21]">
              {story.categoryLabel}
            </p>
            <h2 className="mt-4 max-w-[560px] font-[family-name:var(--font-cormorant)] text-[34px] leading-[1.05] font-medium md:text-[42px]">
              {story.title}
            </h2>
            <p className="mt-5 max-w-[520px] text-sm leading-7 text-neutral-600 md:text-[15px]">
              {story.excerpt}
            </p>
            <Link
              href={`/news/${story.slug}`}
              className="group mt-6 inline-flex min-h-[48px] items-center gap-3 bg-[#e69a2d] px-6 text-sm font-medium text-white transition-colors hover:bg-[#d88b21]"
            >
              Read story
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}