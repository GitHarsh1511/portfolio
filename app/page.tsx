"use client";

import { useEffect, useState } from "react";
import AboutSection from "@/components/about/AboutSection";
import Projects from "@/components/projects/Projects";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail } from "lucide-react";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import { Download, ArrowRight } from "lucide-react";

/* ================= PAGE ================= */

export default function HomePage() {
  /* 🔄 Profile Image Switch */
  const images = ["/img/profile.jpg", "/img/profile1.jpg"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-24 md:space-y-32">
      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative w-full min-h-[calc(100vh-6rem)] overflow-hidden"
      >
        {/* Soft background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 flex h-full items-center">
          <div className="grid w-full grid-cols-1 md:grid-cols-2 items-center gap-14 lg:gap-20">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-5"
            >
              {/* Small Intro */}
              <p className="text-lg md:text-xl font-semibold text-slate-300 leading-tight">
                Heya, I’m
              </p>

              {/* Name */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                Harsh{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Chauhan
                </span>
              </h1>

              {/* Animated Role */}
              <TypeAnimation
                sequence={[
                  "Computer Engineer",
                  2000,
                  "AI / ML Enthusiast",
                  2000,
                  "Data Analyst",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                wrapper="h2"
                className="
    text-lg md:text-xl font-semibold
    bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500
    bg-clip-text text-transparent
  "
              />

              {/* Description */}
              <p className="max-w-xl text-sm md:text-base text-slate-400 leading-relaxed">
                Proactive Computer Engineering student passionate about building
                intelligent, user-focused applications using modern web, mobile,
                and AI-driven technologies.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {/* View Projects */}
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
      inline-flex items-center gap-2
      px-6 py-3 rounded-2xl
      bg-indigo-500
      text-slate-950 font-semibold
      shadow-[0_10px_30px_rgba(99,102,241,0.4)]
      hover:bg-indigo-400
      transition
    "
                >
                  View Projects
                </motion.a>

                {/* Download Resume */}
                <motion.a
                  href="/resume/Harsh_Chauhan_Resume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
      inline-flex items-center gap-2
      px-6 py-3 rounded-2xl
      border border-indigo-400/40
      bg-indigo-500/10
      text-indigo-300 font-semibold
      shadow-[0_0_30px_rgba(99,102,241,0.35)]
      hover:bg-indigo-500/20
      transition
    "
                >
                  <Download size={18} />
                  Download Resume
                </motion.a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 pt-6">
                <a
                  href="https://github.com/GitHarsh1511"
                  target="_blank"
                  aria-label="GitHub"
                  className="
        p-3 rounded-full
        border border-slate-700
        text-slate-400
        hover:text-white hover:border-indigo-400
        hover:shadow-md hover:shadow-indigo-500/30
        transition
      "
                >
                  <Github size={18} />
                </a>

                <a
                  href="https://linkedin.com/in/harshchauhan115"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="
        p-3 rounded-full
        border border-slate-700
        text-slate-400
        hover:text-white hover:border-indigo-400
        hover:shadow-md hover:shadow-indigo-500/30
        transition
      "
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href="mailto:workwitharsh@gmail.com"
                  aria-label="Email"
                  className="
        p-3 rounded-full
        border border-slate-700
        text-slate-400
        hover:text-white hover:border-indigo-400
        hover:shadow-md hover:shadow-indigo-500/30
        transition
      "
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>

            {/* RIGHT IMAGE (AUTO SWITCH) */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex justify-center md:justify-end"
            >
              <div className="group relative flex h-80 w-80 items-center justify-center">
                {/* Rotating glow ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-sm opacity-60"
                />

                {/* Soft inner glow */}
                <div className="absolute inset-12 rounded-full bg-indigo-500/10 blur-xl" />

                {/* Profile Images */}
                <div className="relative z-10 h-64 w-64 overflow-hidden rounded-full border border-slate-800 bg-slate-900 transition-transform duration-500 group-hover:scale-105">
                  {images.map((src, i) => (
                    <Image
                      key={src}
                      src={src}
                      alt="Harsh Chauhan"
                      fill
                      priority={i === 0}
                      className={`absolute inset-0 object-cover rounded-full transition-opacity duration-700 ${
                        index === i ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= MAIN ================= */}
      <main>
        <AboutSection />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
