"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

/* ---------------- Animations ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="space-y-32">
      {/* ================= HERO SECTION ================= */}
      <motion.section
        id="home"
        className="grid min-h-[calc(100vh-6rem)] gap-16 md:grid-cols-[1.3fr,1fr] items-center"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7 }}
      >
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-slate-300"
          >
            Heya, I am
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Harsh <span className="text-indigo-400">Chauhan</span>
          </motion.h1>

          <motion.h2
            className="text-lg md:text-xl font-semibold text-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Computer Engineering Student
          </motion.h2>

          <motion.p
            className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            4th-year Computer Engineering student passionate about technology and
            innovation. I build modern web & mobile experiences and love turning
            ideas into impactful products.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 pt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="#projects"
              className="px-6 py-2 rounded-full bg-indigo-500 hover:bg-indigo-400 text-slate-950 text-sm font-medium shadow transition"
            >
              Explore More
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-slate-700 text-slate-200 text-sm hover:border-indigo-400 hover:text-indigo-300 transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Outer glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
          </div>

          {/* Gradient ring */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-md opacity-80" />
            <div className="relative h-64 w-64 rounded-full border-4 border-slate-900 bg-slate-900 overflow-hidden">
              <Image
                src="/profile.jpg" // put image in /public
                alt="Harsh Chauhan"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* ================= ABOUT SECTION ================= */}
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
          mobile development (Flutter), modern web apps (Next.js), and AI/ML.
          I enjoy building projects end-to-end – from planning and UI design to
          backend integration and deployment.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          During my internship, I worked on Flutter-based applications, focusing
          on performance, smooth UI, and clean architecture.
        </p>
      </motion.section>

      {/* ================= PROJECTS SECTION ================= */}
      <motion.section
        id="projects"
        className="space-y-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div variants={fadeUp} className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Projects</h2>
            <p className="text-slate-400 text-sm">
              A few things I&apos;ve been building recently.
            </p>
          </div>
          <a
            href="/projects"
            className="text-xs text-indigo-400 hover:underline"
          >
            View all projects →
          </a>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              variants={cardVariant}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className={`rounded-2xl border border-slate-800 bg-slate-900/40 p-5 space-y-3 hover:border-indigo-500/60 transition ${
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

      {/* ================= CONTACT SECTION ================= */}
      <motion.section
        id="contact"
        className="space-y-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-sm text-slate-300">
          Feel free to reach out for internships, freelance work, or
          collaborations.
        </p>
        <p className="text-sm">
          Email:{" "}
          <a
            href="mailto:workwitharsh@gmail.com"
            className="text-indigo-400 hover:underline"
          >
            workwitharsh@gmail.com
          </a>
        </p>
      </motion.section>
    </div>
  );
}
