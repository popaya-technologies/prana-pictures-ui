import Link from "next/link";

export type PolicySection = {
  title: string;
  body: string;
};

type Props = {
  title: string;
  intro: string;
  sections: PolicySection[];
  page: "legal" | "disclaimer";
  relatedPage: "legal" | "disclaimer";
  relatedTitle: string;
};

export default function PolicyPage({
  title,
  intro,
  sections,
  page,
  relatedPage,
  relatedTitle,
}: Props) {
  const pageLinks = [
    { label: "Legal & Privacy", href: "/legal", key: "legal" },
    { label: "Disclaimer", href: "/disclaimer", key: "disclaimer" },
  ] as const;

  return (
    <>
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-8 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b66b0c]">
            Legal
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-cormorant)] text-[52px] leading-[0.95] font-medium md:text-[68px]">
            {title}
          </h1>
          <div className="mt-6 h-[2px] w-8 bg-[#e69a2d]" />
          <p className="mt-6 max-w-[850px] text-xs leading-6 font-medium tracking-[0.1em] text-neutral-700 uppercase md:text-sm">
            {intro}
          </p>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[30%_70%] lg:gap-0">
            <aside className="border-b border-neutral-200 pb-6 lg:sticky lg:top-8 lg:h-fit lg:border-r lg:border-b-0 lg:pr-8">
              <nav aria-label="Legal pages" className="flex gap-6 lg:flex-col lg:gap-2">
                {pageLinks.map((link) => (
                  <Link
                    key={link.key}
                    href={link.href}
                    aria-current={page === link.key ? "page" : undefined}
                    className={`border-l-2 py-2 pl-3 text-sm transition-colors ${
                      page === link.key
                        ? "border-[#e69a2d] font-medium text-[#a85d05]"
                        : "border-transparent text-neutral-600 hover:text-[#a85d05]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-6 hidden border-t border-neutral-200 pt-5 lg:block">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">
                  On this page
                </p>
                <nav className="mt-3 space-y-1">
                  {sections.map((section, index) => (
                    <a
                      key={section.title}
                      href={`#section-${index + 1}`}
                      className="flex min-h-9 items-center gap-3 text-xs text-neutral-600 transition-colors hover:text-[#a85d05]"
                    >
                      <span className="text-neutral-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="lg:pl-10">
              {sections.map((section, index) => (
                <section
                  key={section.title}
                  id={`section-${index + 1}`}
                  className="grid scroll-mt-8 grid-cols-[38px_1fr] gap-4 border-b border-neutral-200 py-6 first:pt-0 last:border-b-0 md:grid-cols-[52px_1fr] md:gap-5 md:py-8"
                >
                  <span className="font-[family-name:var(--font-cormorant)] text-[27px] leading-none text-[#c27d1a] md:text-[32px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-[family-name:var(--font-cormorant)] text-[26px] leading-tight font-medium md:text-[32px]">
                      {section.title}
                    </h2>
                    <p className="mt-3 max-w-[740px] text-sm leading-7 text-neutral-600 md:text-[15px]">
                      {section.body}
                    </p>
                  </div>
                </section>
              ))}

              <div className="mt-6 border border-neutral-200 px-5 py-4 text-sm text-neutral-600 md:px-6">
                Also read: {" "}
                <Link
                  href={relatedPage === "legal" ? "/legal" : "/disclaimer"}
                  className="font-medium text-[#a85d05] hover:underline"
                >
                  {relatedTitle}
                </Link>
              </div>

              <p className="mt-5 text-xs leading-5 text-neutral-500">
                Draft for review. Have the final wording approved before publishing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}