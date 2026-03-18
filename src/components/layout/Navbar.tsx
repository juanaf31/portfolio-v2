"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "py-3 bg-bg-primary/80 backdrop-blur-xl border-b"
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-container mx-auto px-6 flex items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="text-xl font-bold tracking-tight text-text-primary">
          JUAN
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {isHome ? (
            NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            ))
          ) : (
            <Link
              href="/"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Home
            </Link>
          )}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-9 h-9 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={cn(
                "w-5 h-0.5 bg-text-primary transition-all duration-300",
                mobileOpen && "rotate-45 translate-y-1"
              )}
            />
            <span
              className={cn(
                "w-5 h-0.5 bg-text-primary transition-all duration-300",
                mobileOpen && "-rotate-45 -translate-y-1"
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 py-4 bg-bg-primary/95 backdrop-blur-xl border-b flex flex-col gap-4">
          {isHome ? (
            NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            ))
          ) : (
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Home
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
