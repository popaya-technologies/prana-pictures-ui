import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="border-t border-neutral-200 bg-[#f7f5f0]">
      <div className="grid grid-cols-1 lg:grid-cols-[42%_58%]">
        {/* LEFT CONTENT */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[540px] px-6 py-16 md:px-10 md:py-20 lg:px-12 lg:py-24">
            <h2 className="font-[family-name:var(--font-cormorant)] text-[42px] leading-[0.95] font-medium tracking-[-0.02em] md:text-[52px]">
              Cinema with
              <br />
              a pulse.
            </h2>

            <div className="mt-5 h-[2px] w-8 bg-[#e69a2d]" />

            <div className="mt-8 max-w-[440px] space-y-5 text-[15px] leading-7 text-neutral-600 md:text-[16px]">
              <p>
                We make films about people and places seldom seen, and emotions
                we all carry.
              </p>

              <p>
                Across Kolkata and California, our work is rooted in
                collaboration, curiosity and craft.
              </p>

              <p>
                We believe cinema can open hearts, bridge worlds and leave a
                mark.
              </p>
            </div>

            {/* QUOTE */}
            <div className="mt-9 flex gap-4">
              <Quote
                size={30}
                strokeWidth={1.4}
                className="mt-1 shrink-0 text-[#e69a2d]"
              />

              <p className="font-[family-name:var(--font-cormorant)] text-[24px] leading-[1.25] italic text-neutral-800 md:text-[27px]">
                We don&apos;t just tell stories.
                <br />
                We hold a mirror to life.
              </p>
            </div>

            <Link
              href="/about"
              className="group mt-9 inline-flex items-center gap-3 text-sm font-medium text-[#d8881c]"
            >
              More about us

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative min-h-[430px] overflow-hidden md:min-h-[520px] lg:min-h-[610px]">
          <Image
            src="/images/home/about.jpg"
            alt="A still from Chances"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
        </div>
      </div>
    </section>
  );
}