import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-5 md:px-8 lg:grid-cols-[46%_54%] lg:items-center">
        {/* IMAGE */}
        <div className="relative min-h-[280px] overflow-hidden md:min-h-[340px]">
          <Image
            src="/images/about/cta.jpg"
            alt="A still from Bobby"
            fill
            className="object-cover"
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