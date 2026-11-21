type FilmImagePlaceholderProps = {
  title: string;
  /** Hide the title when the layout already shows it on top of the image. */
  showTitle?: boolean;
};

/**
 * Shown where a film image would be when none has been uploaded in the admin
 * panel. Fills its (relatively positioned) parent, like `<Image fill />`.
 */
export default function FilmImagePlaceholder({
  title,
  showTitle = true,
}: FilmImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`${title} — image coming soon`}
      className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-[#191919] p-6 text-center"
    >
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 h-72 w-72 rounded-full border border-[#e69a2d]/15"
      />
      <div
        aria-hidden="true"
        className="absolute -top-10 -right-10 h-44 w-44 rounded-full border border-[#e69a2d]/10"
      />

      {showTitle && (
        <>
          <span className="relative font-[family-name:var(--font-cormorant)] text-[30px] leading-none font-medium text-white uppercase md:text-[36px]">
            {title}
          </span>
          <span aria-hidden="true" className="relative mt-4 h-[2px] w-8 bg-[#e69a2d]" />
          <span className="relative mt-4 text-[11px] tracking-[0.25em] text-white/45 uppercase">
            Prana Pictures
          </span>
        </>
      )}
    </div>
  );
}
