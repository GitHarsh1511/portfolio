"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* ================================
     Glass effect on scroll
  ================================= */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================================
     Active section detection (scroll)
  ================================= */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      const pageHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // ✅ Bottom of page → Contact active
      if (window.scrollY + windowHeight >= pageHeight - 50) {
        setActiveSection("contact");
        return;
      }

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;

        if (
          scrollPosition >= el.offsetTop &&
          scrollPosition < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all backdrop-blur-md ${
        isScrolled
          ? "bg-slate-950/80 shadow-[inset_0_-1px_0_rgba(51,65,85,0.7)] shadow-[0_4px_20px_rgba(15,23,42,0.6)]"
          : "bg-transparent"
      }`}
    >
      <nav className="w-full px-6 sm:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2 shrink-0">
          <Image
            src="/logow.png"
            alt="Harsh Chauhan Logo"
            width={44}
            height={44}
            priority
            className="transition-all duration-300 ease-out group-hover:scale-110"
          />
          <span className="text-sm sm:text-base text-slate-100">
            Harsh<span className="text-indigo-400">Chauhan</span>
          </span>
        </a>

        {/* Nav links */}
        <div className="flex items-center gap-4 sm:gap-6 text-sm sm:text-base">
          {sections.map((section) => {
            const isActive = activeSection === section.id;

            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`
                  group relative px-2 py-1
                  transition-all duration-200
                  ${
                    isActive
                      ? "text-indigo-300 font-semibold"
                      : "text-slate-300 hover:text-indigo-300 hover:font-semibold"
                  }
                `}
              >
                {section.label}

                {/* Hover + Active underline */}
                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] w-full
                    origin-left rounded-full bg-indigo-400
                    transition-transform duration-300
                    ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }
                  `}
                />
              </a>
            );
          })}

          {/* Resume (hover only, no scroll) */}
          <Link
            href="/resume"
            className="
              group relative px-2 py-1
              text-slate-300
              transition-all duration-200
              hover:text-indigo-300 hover:font-semibold
            "
          >
            Resume
            <span
              className="
                absolute left-0 -bottom-1 h-[2px] w-full
                origin-left scale-x-0
                rounded-full bg-indigo-400
                transition-transform duration-300
                group-hover:scale-x-100
              "
            />
          </Link>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-500/90 hover:bg-indigo-400 text-slate-950 shadow-lg shadow-indigo-500/25"
          >
            Let&apos;s talk
          </a>
        </div>
      </nav>
    </header>
  );
}
