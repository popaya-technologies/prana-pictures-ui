import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NewsCTA() {
  return (
    <section className="bg-[#191919] text-white">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-5 py-9 md:px-8 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="font-[family-name:var(--font-cormorant)] text-[30px] leading-tight font-medium md:text-[36px]">
          Follow the stories as they unfold.
        </h2>
        <Link
          href="/filmography"
          className="group inline-flex min-h-[50px] w-fit items-center gap-3 bg-[#e69a2d] px-6 text-sm font-medium text-white transition-colors hover:bg-[#d88b21]"
        >
          Explore our films
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}