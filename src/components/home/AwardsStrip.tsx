import {
  Award,
  Clapperboard,
  PenLine,
  Star,
} from "lucide-react";

const awards = [
  {
    icon: Award,
    title: "Audience Award",
  },
  {
    icon: PenLine,
    title: "Best Screenplay",
  },
  {
    icon: Clapperboard,
    title: "Official Selections",
  },
  {
    icon: Star,
    title: "Cast Recognition",
  },
];

type Props = {
  plain?: boolean;
};

export default function AwardsStrip({ plain = false }: Props) {
  if (plain) {
    return <div className="h-[36px] bg-[#191919] md:h-[40px]" aria-hidden="true" />;
  }

  return (
    <section className="bg-[#191919] text-white">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 px-5 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
        {awards.map(({ icon: Icon, title }) => (
          <div
            key={title}
            className="flex min-h-[120px] items-center justify-center gap-4 border-b border-white/15 py-7 sm:border-r lg:border-b-0 last:border-b-0 lg:last:border-r-0"
          >
            <Icon
              size={32}
              strokeWidth={1.4}
              className="shrink-0 text-[#e69a2d]"
            />

            <span className="text-sm tracking-wide text-white/90">
              {title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
