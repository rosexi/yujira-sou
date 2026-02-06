"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { NAV_LINKS, KENNEL_NAME } from "@/lib/constants";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.5);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Floating nav bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-stone/90 backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-8 md:px-16 py-6">
          <Link
            href="/"
            className="font-serif text-xl font-light text-charcoal hover:text-bronze transition-colors"
          >
            {KENNEL_NAME}
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            className="font-sans text-[10px] uppercase tracking-[0.3em] text-charcoal hover:text-bronze transition-colors"
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </header>

      {/* Full-screen overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-stone/[0.98] backdrop-blur-sm" />
        <div className="relative h-full flex flex-col">
          {/* Overlay header */}
          <div className="flex items-center justify-between px-8 md:px-16 py-6">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-serif text-xl font-light text-charcoal hover:text-bronze transition-colors"
            >
              {KENNEL_NAME}
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="font-sans text-[10px] uppercase tracking-[0.3em] text-charcoal hover:text-bronze transition-colors"
              aria-label="Close menu"
            >
              Close
            </button>
          </div>

          {/* Nav content */}
          <div className="flex-1 flex items-center px-8 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {/* Links */}
              <nav className="flex flex-col gap-4 md:gap-6" aria-label="Main navigation">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`font-serif text-3xl md:text-5xl font-light transition-colors ${
                      pathname === link.href
                        ? "text-bronze"
                        : "text-charcoal hover:text-bronze"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Decorative image (desktop only) */}
              <div className="hidden md:flex items-center justify-center">
                <div className="w-full max-w-md aspect-[3/4] bg-stone-dark flex items-center justify-center">
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-mist/50">
                    Photo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
