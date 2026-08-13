"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-red-900/50 py-3 shadow-[0_4px_30px_rgba(220,38,38,0.15)]"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link
          href="/"
          className="text-white text-2xl font-black tracking-tighter italic uppercase group flex items-center"
        >
          <span className="text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">
            K
          </span>
          <span className="group-hover:text-red-500 transition-colors duration-300">
            UTLUHAN.
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-xs md:text-sm font-bold text-gray-400 uppercase tracking-[0.15em] transition-colors duration-300 hover:text-white group"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 ease-out group-hover:w-full shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Open menu"
          className="md:hidden text-gray-400 hover:text-red-600 transition-colors"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
