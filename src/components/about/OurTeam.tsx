import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OurTeam() {
  return (
    <section className="bg-[#f7f5f0] py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="mb-8">
          <h2 className="font-[family-name:var(--font-cormorant)] text-[40px] leading-none font-medium md:text-[46px]">
            Our Team
          </h2>

          <div className="mt-4 h-[2px] w-8 bg-[#e69a2d]" />
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[42%_58%] lg:items-center">
          {/* IMAGE */}
          <div className="relative min-h-[420px] overflow-hidden bg-neutral-200">
            <Image
              src="/images/about/ajit.jpg"
              alt="Ajit Mukundan"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>

          {/* CONTENT */}
          <div className="lg:px-8">
            <h3 className="font-[family-name:var(--font-cormorant)] text-[40px] leading-none font-medium uppercase md:text-[46px]">
              Ajit Mukundan
            </h3>

            <p className="mt-3 text-sm font-medium text-[#e69a2d]">
              Managing Partner
            </p>

            <p className="mt-6 max-w-[520px] text-[15px] leading-7 text-neutral-600 md:text-[16px]">
              A successful businessman passionate about the arts, focused on
              connecting stories with their intended audiences.
            </p>

            <Link
              href="/about/ajit-mukundan"
              className="group mt-8 inline-flex min-h-[52px] items-center gap-3 bg-[#e69a2d] px-7 text-sm font-medium text-white transition-colors hover:bg-[#d88b21]"
            >
              Read biography

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}