"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
 
  return (
    <header className="relative z-50 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-[88px] max-w-[1280px] items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          aria-label="Prana Pictures home"
          className="block h-[72px] w-[152px] shrink-0"
        >
          <Image
            src="/images/brand/prana-lotus.png"
            alt=""
            width={1430}
            height={675}
            priority
            className="h-full w-full object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          <Link
            href="/"
            aria-current={isActive("/") ? "page" : undefined}
            className={`relative py-8 text-sm transition-colors after:absolute after:bottom-5 after:left-0 after:h-[2px] after:w-full after:bg-[#e69a2d] hover:text-[#e69a2d] ${isActive("/") ? "text-[#e69a2d] after:opacity-100" : "text-neutral-700 after:opacity-0"}`}
          >
            Home
          </Link>

          <Link
            href="/filmography"
            aria-current={isActive("/filmography") ? "page" : undefined}
            className={`relative py-8 text-sm transition-colors after:absolute after:bottom-5 after:left-0 after:h-[2px] after:w-full after:bg-[#e69a2d] hover:text-[#e69a2d] ${isActive("/filmography") ? "text-[#e69a2d] after:opacity-100" : "text-neutral-700 after:opacity-0"}`}
          >
            Filmography
          </Link>

          <Link
            href="/news"
            aria-current={isActive("/news") ? "page" : undefined}
            className={`relative py-8 text-sm transition-colors after:absolute after:bottom-5 after:left-0 after:h-[2px] after:w-full after:bg-[#e69a2d] hover:text-[#e69a2d] ${isActive("/news") ? "text-[#e69a2d] after:opacity-100" : "text-neutral-700 after:opacity-0"}`}
          >
            News
          </Link>

          <Link
            href="/about"
            aria-current={isActive("/about") ? "page" : undefined}
            className={`relative py-8 text-sm transition-colors after:absolute after:bottom-5 after:left-0 after:h-[2px] after:w-full after:bg-[#e69a2d] hover:text-[#e69a2d] ${isActive("/about") ? "text-[#e69a2d] after:opacity-100" : "text-neutral-700 after:opacity-0"}`}
          >
            About
          </Link>

          <Link
            href="/contact"
            aria-current={isActive("/contact") ? "page" : undefined}
            className={`relative py-8 text-sm transition-colors after:absolute after:bottom-5 after:left-0 after:h-[2px] after:w-full after:bg-[#e69a2d] hover:text-[#e69a2d] ${isActive("/contact") ? "text-[#e69a2d] after:opacity-100" : "text-neutral-700 after:opacity-0"}`}
          >
            Contact
          </Link>

          <Link
            href="/watch"
            className="bg-black px-6 py-3 text-sm text-white transition-colors hover:bg-neutral-700"
          >
            Watch our work
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="absolute left-0 top-[88px] flex w-full flex-col gap-5 border-b border-neutral-200 bg-white px-6 py-6 md:hidden">
          <Link href="/" onClick={() => setMenuOpen(false)} className={isActive("/") ? "font-medium text-[#d88b21]" : "text-neutral-700"}>
            Home
          </Link>

          <Link href="/filmography" onClick={() => setMenuOpen(false)} className={isActive("/filmography") ? "font-medium text-[#d88b21]" : "text-neutral-700"}>
            Filmography
          </Link>

          <Link href="/news" onClick={() => setMenuOpen(false)} className={isActive("/news") ? "font-medium text-[#d88b21]" : "text-neutral-700"}>
            News
          </Link>

          <Link href="/about" onClick={() => setMenuOpen(false)} className={isActive("/about") ? "font-medium text-[#d88b21]" : "text-neutral-700"}>
            About
          </Link>

          <Link href="/contact" onClick={() => setMenuOpen(false)} className={isActive("/contact") ? "font-medium text-[#d88b21]" : "text-neutral-700"}>
            Contact
          </Link>

          <Link
            href="/watch"
            onClick={() => setMenuOpen(false)}
            className="w-fit bg-neutral-900 px-6 py-3 text-white"
          >
            Watch our work
          </Link>
        </nav>
      )}
    </header>
  );
}
