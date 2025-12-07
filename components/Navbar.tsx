// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all ${
        isScrolled
          ? "backdrop-blur-md bg-white/80 border-b border-slate-200 shadow-[0_1px_0_0_rgba(15,23,42,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between gap-3">
        {/* Logo / Name */}
        <a
          href="#home"
          className="font-semibold tracking-tight flex items-center gap-1.5 shrink-0"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-linear-to-tr from-indigo-500 via-purple-500 to-pink-500 text-[11px] font-bold text-slate-950 shadow-lg">
            YC
          </span>
          <span className="text-sm sm:text-base">
            Your <span className="text-indigo-500">Name</span>
          </span>
        </a>

        {/* Navigation links – now visible on mobile too */}
        <div className="flex items-center gap-3 text-[11px] sm:gap-4 sm:text-sm">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="px-1.5 sm:px-2 py-1 text-slate-700 hover:text-indigo-500 transition-colors"
            >
              {section.label}
            </a>
          ))}

          <Link
            href="/resume"
            className="px-1.5 sm:px-2 py-1 text-slate-700 hover:text-indigo-500 transition-colors"
          >
            Resume
          </Link>

          <a
            href="#contact"
            className="hidden xs:inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-medium bg-indigo-500/90 hover:bg-indigo-400 text-white shadow-md"
          >
            Let&apos;s talk
          </a>
        </div>
      </nav>
    </header>
  );
}
