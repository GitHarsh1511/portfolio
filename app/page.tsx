"use client";

import { useEffect, useState } from "react";
import AboutSection from "@/components/about/AboutSection";
import Projects from "@/components/projects/Projects";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail } from "lucide-react";
import { projects } from "@/data/projects";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

/* ================= PAGE ================= */

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

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
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 flex h-full items-center">
          <div className="grid w-full grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-16">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-6"
            >
              <p className="text-sm text-slate-300">Heya, I am</p>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Harsh <span className="text-indigo-400">Chauhan</span>
              </h1>

              <TypeAnimation
                sequence={[
                  "Computer Engineering Student",
                  2000,
                  "Flutter Developer",
                  2000,
                  "Next.js Developer",
                  2000,
                  "AI / ML Enthusiast",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                wrapper="h2"
                className="text-lg md:text-xl font-semibold text-slate-300"
              />

              <p className="max-w-xl text-sm md:text-base text-slate-400 leading-relaxed">
                4th-year Computer Engineering student passionate about
                technology and innovation. I build modern web & mobile
                experiences and love turning ideas into impactful products.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#projects"
                  className="px-6 py-2 rounded-full bg-indigo-500 hover:bg-indigo-400 text-slate-950 text-sm font-medium transition"
                >
                  Explore More
                </a>

                <a
                  href="#contact"
                  className="px-6 py-2 rounded-full border border-slate-700 text-slate-200 text-sm hover:border-indigo-400 hover:text-indigo-300 transition"
                >
                  Contact Me
                </a>
              </div>

              <div className="flex gap-4 pt-4 text-slate-400">
                <a
                  href="https://github.com/GitHarsh1511"
                  target="_blank"
                  className="hover:text-indigo-400 transition"
                >
                  <Github />
                </a>
                <a
                  href="https://linkedin.com/in/harshchauhan115"
                  target="_blank"
                  className="hover:text-indigo-400 transition"
                >
                  <Linkedin />
                </a>
                <a
                  href="mailto:workwitharsh@gmail.com"
                  className="hover:text-indigo-400 transition"
                >
                  <Mail />
                </a>
              </div>
            </motion.div>

            {/* RIGHT IMAGE (AUTO SWITCH) */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex justify-center md:justify-end"
            >
              <div className="group relative flex h-80 w-80 items-center justify-center">
                {/* Rotating glow */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full bg-linear-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-sm opacity-70"
                />

                <div className="absolute inset-10 rounded-full bg-indigo-500/15 blur-xl" />

                {/* Profile Images */}
                <div className="relative z-10 h-64 w-64 overflow-hidden rounded-full border-4 border-slate-900 bg-slate-900 transition-transform duration-500 group-hover:scale-110">
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
