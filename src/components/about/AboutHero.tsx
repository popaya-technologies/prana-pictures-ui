import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="bg-white">
      <div className="grid min-h-[630px] grid-cols-1 lg:grid-cols-[38%_62%]">
        {/* LEFT PANEL */}
        <div className="relative min-h-[540px] overflow-hidden bg-[#111] lg:h-[630px] lg:min-h-0 lg:self-start">
          {/* WHITE CONTENT CARD */}
          <div className="absolute inset-y-0 right-0 flex w-[78%] items-center">
            <div className="w-full bg-white px-7 py-10 shadow-[0_18px_50px_rgba(0,0,0,0.16)] md:px-10 md:py-12 lg:px-11">
              <h1 className="font-[family-name:var(--font-cormorant)] text-[44px] leading-[0.95] font-medium tracking-[-0.02em] md:text-[52px]">
                Stories deserve
                <br />
                to travel.
              </h1>

              <div className="mt-5 h-[2px] w-8 bg-[#e69a2d]" />

              <p className="mt-6 max-w-[280px] text-[15px] leading-7 text-neutral-700 md:text-[16px]">
                We help independent cinema find its audience.
              </p>

              <Link
                href="#who-we-are"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-medium text-[#e69a2d]"
              >
                Discover who we are

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT COLLAGE */}
        <div className="grid min-h-[520px] grid-cols-2 grid-rows-2 gap-px bg-white lg:min-h-[630px]">
          <div className="relative col-span-2 overflow-hidden">
            <Image
              src="/images/about/hero-main.jpg"
              alt="The Bobby cast at a film screening"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 62vw"
            />
          </div>

          <div className="relative overflow-hidden">
            <Image
              src="/images/about/hero-left.jpg"
              alt="A still from Bobby"
              fill
              className="object-cover scale-[1.08] object-[center_35%]"
              sizes="(max-width: 1024px) 50vw, 31vw"
            />
          </div>

          <div className="relative overflow-hidden">
            <Image
              src="/images/about/hero-right.jpg"
              alt="A still from Choices"
              fill
              className="object-cover scale-[1.1] object-[center_40%]"
              sizes="(max-width: 1024px) 50vw, 31vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}