import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedFilm() {
  return (
    <section className="bg-white pb-14 md:pb-20">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid overflow-hidden border border-neutral-200 bg-white lg:grid-cols-[62%_38%]">
          {/* IMAGE */}
          <div className="relative min-h-[360px] md:min-h-[460px]">
            <Image
              src="/images/filmography/bobby.jpg"
              alt="Bobby film still"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 62vw"
            />
          </div>

          {/* CONTENT */}
          <div className="flex items-center px-7 py-10 md:px-10 lg:px-12">
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-[46px] leading-none font-medium uppercase md:text-[56px]">
                Bobby
              </h2>

              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-neutral-600">
                <span>2022</span>
                <span>•</span>
                <span>Short / Drama</span>
                <span>•</span>
                <span>21 min</span>
              </div>

              <div className="mt-5 h-[2px] w-8 bg-[#e69a2d]" />

              <p className="mt-6 max-w-[340px] text-[15px] leading-7 text-neutral-600">
                A true story about love, patience and understanding.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/filmography/bobby"
                  className="group inline-flex min-h-[52px] items-center gap-3 bg-[#e69a2d] px-6 text-sm font-medium text-white transition-colors hover:bg-[#d88b21]"
                >
                  View film

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/filmography/bobby"
                  className="group inline-flex min-h-[52px] items-center gap-3 px-2 text-sm font-medium text-neutral-800"
                >
                  Watch trailer

                  <ArrowRight
                    size={18}
                    className="text-[#e69a2d] transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}