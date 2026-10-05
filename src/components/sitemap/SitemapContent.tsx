import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const sections = [
  {
    number: "01",
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "Filmography", href: "/filmography" },
      { label: "News", href: "/news" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    number: "02",
    title: "Films",
    links: [
      { label: "Bobby", href: "/filmography/bobby" },
      { label: "Choices", href: "/filmography/choices" },
      { label: "Arrangement", href: "/filmography/arrangement" },
      { label: "All films", href: "/filmography" },
    ],
  },
  {
    number: "03",
    title: "Company",
    links: [
      { label: "About Prana Pictures", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "News", href: "/news" },
    ],
  },
  {
    number: "04",
    title: "Information",
    links: [
      { label: "Legal & Privacy", href: "/legal" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Sitemap", href: "#site-map" },
    ],
  },
];

export default function SitemapContent() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 lg:grid-cols-[42%_58%]">
          <div className="flex min-h-[320px] items-center px-5 py-12 md:px-8 lg:min-h-[420px] lg:py-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b66b0c]">
                Navigation
              </p>
              <h1 className="mt-5 font-[family-name:var(--font-cormorant)] text-[54px] leading-[0.95] font-medium md:text-[72px]">
                Find your way.
              </h1>
              <div className="mt-6 h-[2px] w-8 bg-[#e69a2d]" />
              <p className="mt-5 max-w-[340px] text-[15px] leading-7 text-neutral-600 md:text-base">
                Explore the films, stories and information across Prana Pictures.
              </p>
            </div>
          </div>

          <div className="relative min-h-[260px] overflow-hidden md:min-h-[340px] lg:min-h-[420px]">
            <Image
              src="/images/filmography/hero.jpg"
              alt="A scene from a Prana Pictures film"
              fill
              priority
              className="object-cover object-[center_42%]"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/35 to-transparent" />
          </div>
        </div>
      </section>

      <section id="site-map" className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="grid grid-cols-1 border-l border-t border-neutral-200 sm:grid-cols-2">
            {sections.map((section) => (
              <section
                key={section.number}
                className="border-r border-b border-neutral-200 px-6 py-7 md:px-10 md:py-9"
              >
                <p className="font-[family-name:var(--font-cormorant)] text-[34px] leading-none text-[#c27d1a]">
                  {section.number}
                </p>
                <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-[32px] leading-none font-medium md:text-[38px]">
                  {section.title}
                </h2>
                <div className="mt-4 h-[2px] w-8 bg-[#e69a2d]" />
                <ul className="mt-5 space-y-1">
                  {section.links.map((link) => (
                    <li key={`${section.number}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="group inline-flex min-h-10 items-center gap-3 text-sm text-neutral-600 transition-colors hover:text-[#a85d05]"
                      >
                        {link.label}
                        <ArrowRight
                          size={16}
                          className="text-[#c27d1a] transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#191919] text-white">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-5 py-8 md:px-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[28px] leading-tight md:text-[34px]">
              Still looking for something?
            </h2>
            <p className="mt-2 text-sm text-white/75">We’re here to help. Reach out anytime.</p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex min-h-[48px] w-fit items-center gap-3 bg-[#e69a2d] px-6 text-sm font-medium text-white transition-colors hover:bg-[#d88b21]"
          >
            Contact us
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}