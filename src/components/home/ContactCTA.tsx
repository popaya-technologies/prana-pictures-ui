import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="relative overflow-hidden border border-neutral-200 bg-[#f7f5f0] px-6 py-12 md:px-12 md:py-14 lg:px-16">
          {/* DECORATIVE CIRCLES */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-16 h-[260px] w-[260px] rounded-full border border-[#e69a2d]/20"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-12 -right-5 h-[180px] w-[180px] rounded-full border border-[#e69a2d]/30"
          />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="max-w-[700px] font-[family-name:var(--font-cormorant)] text-[39px] leading-none font-medium tracking-[-0.02em] md:text-[50px]">
                Let&apos;s make something meaningful.
              </h2>

              <p className="mt-5 max-w-[600px] text-[15px] leading-7 text-neutral-600 md:text-[16px]">
                We&apos;re always looking for stories that move us. If you have
                one to tell, we&apos;d love to hear from you.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex min-h-[55px] w-fit shrink-0 items-center justify-center gap-3 bg-neutral-900 px-8 text-sm font-medium text-white transition-colors duration-300 hover:bg-neutral-700"
            >
              Get in touch

              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}