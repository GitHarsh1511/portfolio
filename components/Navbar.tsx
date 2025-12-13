"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ================= Scroll blur ================= */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= Active section ================= */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      const pageHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

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

  /* ================= Lock body scroll ================= */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all backdrop-blur-md ${
          isScrolled
            ? "bg-slate-950/80 shadow-[inset_0_-1px_0_rgba(51,65,85,0.7)] shadow-[0_4px_20px_rgba(15,23,42,0.6)]"
            : "bg-transparent"
        }`}
      >
        <nav className="w-full px-6 sm:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-4 shrink-0">
            <Image
              src="/logow.png"
              alt="Harsh Chauhan Logo"
              width={44}
              height={44}
              priority
              className="transition-all duration-300 group-hover:scale-110"
            />
            <span className="flex items-center text-xl sm:text-2xl font-semibold leading-none text-slate-100 transition-all duration-300 group-hover:text-indigo-300">
              Harsh
              <span className="ml-1 text-indigo-400 group-hover:text-indigo-300">
                Chauhan
              </span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-base">
            {sections.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`group relative px-2 py-1 transition ${
                    isActive
                      ? "text-indigo-300 font-semibold"
                      : "text-slate-300 hover:text-indigo-300 hover:font-semibold"
                  }`}
                >
                  {section.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left rounded-full bg-indigo-400 transition-transform duration-300 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              );
            })}

            <Link
              href="/resume"
              className="group relative px-2 py-1 text-slate-300 hover:text-indigo-300 hover:font-semibold"
            >
              Resume
              <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 rounded-full bg-indigo-400 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-slate-200"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </nav>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              className="fixed top-0 right-0 z-50 h-full w-[45%] max-w-sm bg-slate-950 backdrop-blur-xl p-6 flex flex-col justify-center"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Close button */}
              <button
                onClick={() => setMobileOpen(false)}
                className="self-end text-slate-200 mb-6"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>

              {/* Mobile Links */}
              <div className="flex flex-col gap-6 text-lg items-center text-center">
                {sections.map((section) => {
                  const isActive = activeSection === section.id;

                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={() => setMobileOpen(false)}
                      className={`relative font-medium transition ${
                        isActive
                          ? "text-indigo-300"
                          : "text-slate-300 hover:text-indigo-300"
                      }`}
                    >
                      {section.label}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left rounded-full bg-indigo-400 transition-transform duration-300 ${
                          isActive ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </a>
                  );
                })}

                <Link
                  href="/resume"
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-300 hover:text-indigo-300"
                >
                  Resume
                </Link>

                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-6 inline-flex justify-center rounded-full bg-indigo-500 px-4 py-2 text-sm font-medium text-slate-950"
                >
                  Let&apos;s talk
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
