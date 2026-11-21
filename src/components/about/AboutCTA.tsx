import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { defaultPageImages, type SiteImage } from "@/data/page-images";

type AboutCTAProps = {
  // From the admin panel (Page images), or the website's default.
  image?: SiteImage;
};

export default function AboutCTA({
  image = defaultPageImages.about.cta,
}: AboutCTAProps) {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-5 md:px-8 lg:grid-cols-[46%_54%] lg:items-center">
        {/* IMAGE */}
        <div className="relative min-h-[280px] overflow-hidden md:min-h-[340px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className={`object-cover ${image.className ?? ""}`}
            sizes="(max-width: 1024px) 100vw, 46vw"
          />
        </div>

        {/* CONTENT */}
        <div className="lg:px-8">
          <h2 className="max-w-[520px] font-[family-name:var(--font-cormorant)] text-[40px] leading-[1.05] font-medium tracking-[-0.02em] md:text-[50px]">
            Let&apos;s bring meaningful stories to wider audiences.
          </h2>

          <Link
            href="/contact"
            className="group mt-8 inline-flex min-h-[54px] items-center gap-3 bg-[#e69a2d] px-7 text-sm font-medium text-white transition-colors hover:bg-[#d88b21]"
          >
            Start a conversation

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}