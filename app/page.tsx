"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail } from "lucide-react";
import { projects } from "@/data/projects";

/* ---------------- Animations ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/* ================= PAGE ================= */

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="space-y-32">
      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="relative w-full min-h-[calc(100vh-6rem)] px-6 sm:px-12 overflow-hidden"
      >
        <div className="mx-auto flex h-full max-w-7xl items-center">
          <div className="grid w-full grid-cols-1 md:grid-cols-2 items-center gap-16">
            {/* LEFT CONTENT */}
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

              {/* Typing animation */}
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

              {/* Buttons */}
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

              {/* Social icons */}
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

            {/* RIGHT IMAGE */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex justify-center md:justify-end"
            >
              {/* Shared alignment wrapper */}
              <div className="group relative flex items-center justify-center h-80 w-80">
                {/* Rotating gradient ring (smaller) */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
        absolute inset-0 rounded-full
        bg-linear-to-tr from-indigo-500 via-purple-500 to-pink-500
        blur-sm opacity-75
        transition-opacity duration-300
        group-hover:opacity-60
      "
                />

                {/* Inner soft glow */}
                <div className="absolute inset-10 rounded-full bg-indigo-500/15 blur-xl" />

                {/* Profile image */}
                <div
                  className="
        relative z-10 overflow-hidden rounded-full
        border-4 border-slate-900 bg-slate-900
        h-64 w-64
        transition-transform duration-500 ease-out
        group-hover:scale-110
      "
                >
                  <Image
                    src="/img/profile.jpg"
                    alt="Harsh Chauhan"
                    width={256}
                    height={256}
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <motion.section
        id="about"
        className="space-y-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          I&apos;m a computer engineering student with a strong interest in
          Flutter, Next.js, and AI/ML. I enjoy building projects end-to-end with
          clean UI and maintainable code.
        </p>
      </motion.section>

      {/* ================= PROJECTS ================= */}
      <motion.section
        id="projects"
        className="space-y-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div variants={fadeUp}>
          <h2 className="text-2xl font-semibold">Projects</h2>
          <p className="text-slate-400 text-sm">
            A few things I&apos;ve been building recently.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              variants={cardVariant}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className={`rounded-2xl border border-slate-800 bg-slate-900/40 p-5 space-y-3 ${
                index === 2 ? "md:col-span-2" : ""
              }`}
            >
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-xs text-slate-400">{project.tech}</p>
              <p className="text-sm text-slate-300">{project.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* ================= CONTACT ================= */}
      <motion.section
        id="contact"
        className="space-y-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-sm text-slate-300">
          I&apos;m open to internships, freelance work, and collaborations.
        </p>

        <div className="space-y-2 text-sm">
          <p>
            Email:{" "}
            <a
              href="mailto:workwitharsh@gmail.com"
              className="text-indigo-400 hover:underline"
            >
              workwitharsh@gmail.com
            </a>
          </p>
        </div>
      </motion.section>
    </div>
  );
}
