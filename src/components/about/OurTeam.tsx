import Image from "next/image";

import type { PublicTeamMember } from "@/lib/api/team";

type OurTeamProps = {
  members?: PublicTeamMember[];
};

// Shown only when the team API is unavailable or returns no members.
const fallbackMember: PublicTeamMember = {
  _id: "ajit-fallback",
  name: "Ajit Mukundan",
  designation: "Managing Partner",
  shortBio:
    "A successful businessman passionate about the arts, focused on connecting stories with their intended audiences.",
  sortOrder: 1,
  image: { url: "/images/about/ajit.jpg" },
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export default function OurTeam({ members = [] }: OurTeamProps) {
  // Every enabled member, in the display order set in the admin panel.
  const team = members.length > 0 ? members : [fallbackMember];

  return (
    <section className="bg-[#f7f5f0] py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="mb-8">
          <h2 className="font-[family-name:var(--font-cormorant)] text-[40px] leading-none font-medium md:text-[46px]">
            Our Team
          </h2>

          <div className="mt-4 h-[2px] w-8 bg-[#e69a2d]" />
        </div>

        <div className="flex flex-col gap-16 md:gap-20">
          {team.map((member, index) => {
            // Alternate photo left / right on large screens.
            const mirrored = index % 2 === 1;

            return (
              <article
                key={member._id}
                className={`grid grid-cols-1 gap-10 lg:items-center ${
                  mirrored ? "lg:grid-cols-[58%_42%]" : "lg:grid-cols-[42%_58%]"
                }`}
              >
                <div
                  className={`relative min-h-[420px] overflow-hidden bg-neutral-200 ${
                    mirrored ? "lg:order-2" : ""
                  }`}
                >
                  {member.image?.url ? (
                    <Image
                      src={member.image.url}
                      alt={member.image.alt || member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                  ) : (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="font-[family-name:var(--font-cormorant)] text-[120px] leading-none text-neutral-400">
                        {initials(member.name)}
                      </span>
                    </div>
                  )}
                </div>

                <div className={`lg:px-8 ${mirrored ? "lg:order-1" : ""}`}>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-[40px] leading-none font-medium uppercase md:text-[46px]">
                    {member.name}
                  </h3>

                  <p className="mt-3 text-sm font-medium text-[#e69a2d]">
                    {member.designation}
                  </p>

                  <p className="mt-6 max-w-[520px] text-[15px] leading-7 text-neutral-600 md:text-[16px]">
                    {member.shortBio ??
                      "Learn more about the people behind Prana Pictures."}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
