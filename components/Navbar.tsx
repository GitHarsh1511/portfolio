"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

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
    if (!isHome) return;

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
  }, [isHome]);

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
          <a
            href={isHome ? "#home" : "/#home"}
            className="
    group flex items-center gap-4 shrink-0
    transition-all duration-300
    hover:-translate-y-0.5
  "
          >
            {/* Logo Image */}
            <div className="transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logow.png"
                alt="Harsh Chauhan Logo"
                width={44}
                height={44}
                priority
              />
            </div>

            {/* Name */}
            <span className="text-xl sm:text-2xl font-semibold transition-colors duration-300 text-white-400 group-hover:text-white">
              Harsh
              <span className="ml-1 text-green-400">Chauhan</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-base">
            {sections.map((section) => {
              const isActive = isHome && activeSection === section.id;

              return (
                <a
                  key={section.id}
                  href={isHome ? `#${section.id}` : `/#${section.id}`}
                  className={`group relative px-2 py-1 ${
                    isActive
                      ? "text-white-400 font-semibold"
                      : "text-white-400 hover:text-green-400"
                  }`}
                >
                  {section.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full bg-green-400 transition-transform duration-300 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              );
            })}

            <a
              href="/resume/Harsh_Chauhan_Resume.pdf"
              download="Harsh_Chauhan_Resume.pdf"
              className="group relative px-2 py-1 text-white-400 hover:text-green-400"
            >
              Resume
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform" />
            </a>
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
              className="fixed top-0 right-0 z-50 h-full w-[75%] max-w-sm bg-slate-950 backdrop-blur-xl p-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logow.png"
                    alt="Harsh Chauhan Logo"
                    width={40}
                    height={40}
                    priority
                  />
                  <span className="text-lg font-semibold text-white-400">
                    Harsh
                    <span className="ml-1 text-green-400">Chauhan</span>
                  </span>
                </div>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white-400"
                  aria-label="Close menu"
                >
                  <X size={26} />
                </button>
              </div>

              {/* Centered Links */}
              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08 } },
                }}
                className="flex flex-col items-center gap-6 text-lg flex-1"
              >
                {sections.map((section) => {
                  const isActive = isHome && activeSection === section.id;

                  return (
                    <motion.a
                      key={section.id}
                      href={isHome ? `#${section.id}` : `/#${section.id}`}
                      onClick={() => setMobileOpen(false)}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0 },
                      }}
                      className={`relative inline-block text-center font-medium ${
                        isActive
                          ? "text-green-400"
                          : "text-white-400 hover:text-green-400"
                      }`}
                    >
                      {section.label}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] w-full bg-green-400 transition-transform duration-300 ${
                          isActive ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </motion.a>
                  );
                })}

                <motion.a
                  href="/resume/Harsh_Chauhan_Resume_2026.pdf"
                  download="Harsh_Chauhan_Resume_2026.pdf"
                  onClick={() => setMobileOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="inline-block text-center font-medium text-white-400 hover:text-green-400"
                >
                  Resume
                </motion.a>
              </motion.div>

              {/* Copyright */}
              <div className="pt-8 text-center text-xs text-green-300">
                © {new Date().getFullYear()} Harsh Chauhan | All rights
                reserved.
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
