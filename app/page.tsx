"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

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
    <div id="home" className="space-y-32">
      {/* HERO SECTION (same as before) */}
      <motion.section
        className="grid gap-10 md:grid-cols-[1.4fr,1fr] items-center"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="space-y-6">
          <motion.p
            className="text-xs uppercase tracking-[0.3em] text-indigo-400"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Computer Engineering · Web · Mobile
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hi, I&apos;m <span className="text-indigo-400">Harsh Chauhan</span>.{" "}
            <br />
            I build clean, fast, and modern digital experiences.
          </motion.h1>

          <motion.p
            className="text-slate-300 text-sm md:text-base max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I&apos;m a developer focused on building real-world projects with
            Next.js, Flutter, and AI tools. I love turning ideas into working
            products with clean code and thoughtful UI.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#projects"
              className="px-4 py-2 rounded-full bg-indigo-500 hover:bg-indigo-400 text-slate-950 text-sm font-medium shadow"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full border border-slate-700 text-slate-200 text-sm hover:border-indigo-400 hover:text-indigo-300"
            >
              Contact me
            </a>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-2 pt-4 text-xs text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="px-2 py-1 rounded-full bg-slate-900 border border-slate-700">
              Next.js
            </span>
            <span className="px-2 py-1 rounded-full bg-slate-900 border border-slate-700">
              Flutter
            </span>
            <span className="px-2 py-1 rounded-full bg-slate-900 border border-slate-700">
              AI / ML
            </span>
            <span className="px-2 py-1 rounded-full bg-slate-900 border border-slate-700">
              Clean UI
            </span>
          </motion.div>
        </div>

        {/* Right gradient card */}
        <motion.div
          className="relative h-64 md:h-80"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-80 blur-2xl"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="relative h-full rounded-3xl bg-slate-900 border border-slate-700/70 flex flex-col items-center justify-center gap-3 shadow-xl"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Portfolio
            </div>
            <div className="text-lg font-semibold">Developer</div>
            <div className="text-xs text-slate-400 px-6 text-center">
              Open to internships, freelance opportunities, and exciting
              collaborations.
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* PROJECTS SECTION (uses shared data) */}
      <motion.section
        id="projects"
        className="space-y-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          variants={fadeUp}
          className="flex items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-2xl font-semibold">Projects</h2>
            <p className="text-slate-400 text-sm">
              A few things I&apos;ve been building recently.
            </p>
          </div>
          <a
            href="/projects"
            className="text-xs text-indigo-400 hover:text-indigo-300 underline-offset-4 hover:underline"
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
              <ul className="text-xs text-slate-400 list-disc list-inside space-y-1">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  className="inline-block text-xs text-indigo-400 hover:underline mt-2"
                >
                  View code on GitHub
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* ABOUT SECTION (unchanged) */}
      {/* ... keep your existing About and Contact code here exactly as before ... */}

      {/* ABOUT SECTION */}
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
          on performance, smooth UI, and clean architecture. I&apos;m constantly
          learning new tools and best practices to write maintainable, scalable
          code.
        </p>

        <div className="grid gap-4 md:grid-cols-2 pt-2 text-sm">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-200">Skills</h3>
            <ul className="text-slate-300 text-xs space-y-1">
              <li>Languages: Dart, Python, JavaScript, Java</li>
              <li>Frameworks: Flutter, Next.js, React</li>
              <li>Tools: Git, VS Code, Android Studio, Firebase</li>
              <li>Concepts: OOP, REST APIs, basic AI/ML</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-200">Soft Skills</h3>
            <ul className="text-slate-300 text-xs space-y-1">
              <li>Strong communication & teamwork</li>
              <li>Problem solving & debugging mindset</li>
              <li>Time management & ownership of tasks</li>
              <li>Curiosity and willingness to learn</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* CONTACT SECTION */}
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
          I&apos;m open to internships, freelance work, and interesting
          collaborations. Feel free to reach out:
        </p>

        <div className="space-y-2 text-sm">
          <p>
            Email:{" "}
            <a
              href="mailto:youremail@example.com"
              className="text-indigo-400 hover:underline"
            >
              workwitharsh@gmail.com
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/GitHarsh1511"
              target="_blank"
              className="text-indigo-400 hover:underline"
            >
              https://github.com/GitHarsh1511
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/harshchauhan115"
              target="_blank"
              className="text-indigo-400 hover:underline"
            >
              www.linkedin.com/in/harshchauhan115
            </a>
          </p>
        </div>
        
      </motion.section>
    </div>
  );
}
