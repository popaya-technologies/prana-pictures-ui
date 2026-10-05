import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="grid min-h-[620px] grid-cols-1 lg:grid-cols-[42%_58%]">
        {/* LEFT CONTENT */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[560px] px-6 py-14 md:px-10 lg:px-12">
            <h1 className="font-[family-name:var(--font-cormorant)] text-[58px] leading-[0.93] font-medium tracking-[-0.03em] md:text-[72px] lg:text-[78px]">
              Stories that
              <br />
              stay with you.
            </h1>

            <div className="mt-6 h-[3px] w-8 bg-[#e69a2d]" />

            <p className="mt-7 max-w-[420px] text-[16px] leading-7 text-neutral-600 md:text-[17px]">
              Across the globe from the US to India.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/filmography"
                className="group inline-flex min-h-[54px] items-center justify-center gap-3 bg-[#e69a2d] px-7 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#d88b21]"
              >
                Explore our films

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/about"
                className="inline-flex min-h-[54px] items-center justify-center border border-neutral-400 px-7 text-sm font-medium transition-colors duration-300 hover:bg-neutral-100"
              >
                Our story
              </Link>
            </div>

            <p className="mt-10 text-sm text-neutral-500 lg:mt-16">
              Independent stories. Global audiences.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative min-h-[420px] overflow-hidden md:min-h-[550px] lg:min-h-[620px]">
          <Image
            src="/images/home/hero.jpg"
            alt="Prana Pictures film scene"
            fill
            priority
            className="object-cover scale-y-[1.35]"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
        </div>
      </div>
    </section>
  );
}