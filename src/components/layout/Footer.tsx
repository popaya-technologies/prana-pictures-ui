export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-5 py-8 sm:grid-cols-[1fr_auto] sm:items-center">
          <p className="text-center text-xs text-neutral-500 sm:text-left">
            © {currentYear} Prana Pictures. All rights reserved.
          </p>

          <nav
            aria-label="Social media"
            className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-neutral-600 sm:justify-self-end"
          >
            <a
              href="https://www.instagram.com/pranapictures1/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-[#e69a2d]"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/pranapictures1/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-[#e69a2d]"
            >
              Facebook
            </a>

            <a
              href="https://x.com/pranapictures1"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-[#e69a2d]"
            >
              X
            </a>

            <a
              href="https://letterboxd.com/studio/prana-pictures/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-[#e69a2d]"
            >
              Letterboxd
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
