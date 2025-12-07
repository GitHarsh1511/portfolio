"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all ${
        isScrolled
          ? "backdrop-blur-md bg-slate-950/80 border-b border-slate-800/70 shadow-[0_1px_0_0_rgba(15,23,42,0.8)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#home" className="font-semibold tracking-tight flex items-center gap-1.5">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-[11px] font-bold text-slate-950 shadow-lg">
            YC
          </span>
          <span className="text-sm sm:text-base text-slate-100">
            Your <span className="text-indigo-400">Name</span>
          </span>
        </a>

        {/* Links */}
        <div className="hidden sm:flex items-center gap-4 text-xs sm:text-sm">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="relative px-2 py-1 text-slate-300 hover:text-indigo-300 transition-colors"
            >
              {section.label}
              <span className="pointer-events-none absolute inset-x-1 -bottom-1 h-px origin-center scale-x-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400 transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
          <Link
            href="#contact"
            className="group inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-500/90 hover:bg-indigo-400 text-slate-950 shadow-lg shadow-indigo-500/25"
          >
            <span>Let&apos;s talk</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
