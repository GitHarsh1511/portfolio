"use client";
import Image from "next/image";
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
          ? "backdrop-blur-md bg-slate-950/80 border-b border-slate-800/70 shadow-[0_1px_0_0_rgba(15,23,42,0.8)]"
          : "bg-transparent"
      }`}
    >
      <nav className="w-full px-6 sm:px-10 h-20 flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#home" className="group flex items-center gap-2 shrink-0">
          <Image
            src="/logow.png" // make sure logo is inside /public
            alt="Your Logo"
            width={36}
            height={36}
            priority
            className="
      transition-all duration-300 ease-out
      group-hover:scale-110
      group-hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.6)]
    "
          />
          <span className="text-sm sm:text-base text-slate-100">
            Harsh<span className="text-indigo-400">Chauhan</span>
          </span>
        </a>

        {/* Links */}
        <div className="flex items-center gap-4 text-xs sm:text-sm">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="relative px-2 py-1 text-slate-300 hover:text-indigo-300 transition-colors"
            >
              {section.label}
            </a>
          ))}

          {/* Resume = separate page */}
          <Link
            href="/resume"
            className="relative px-2 py-1 text-slate-300 hover:text-indigo-300 transition-colors"
          >
            Resume
          </Link>

          <a
            href="#contact"
            className="group inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-500/90 hover:bg-indigo-400 text-slate-950 shadow-lg shadow-indigo-500/25"
          >
            Let&apos;s talk
          </a>
        </div>
      </nav>
    </header>
  );
}
