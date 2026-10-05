import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FilmographyCTA() {
  return (
    <section className="bg-[#191919] text-white">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-5 py-10 md:px-8 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="font-[family-name:var(--font-cormorant)] text-[32px] leading-tight font-medium md:text-[38px]">
          Every film begins with a question.
        </h2>

        <Link
          href="/contact"
          className="group inline-flex min-h-[54px] w-fit items-center gap-3 bg-[#e69a2d] px-7 text-sm font-medium text-white transition-colors hover:bg-[#d88b21]"
        >
          Start a conversation

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}