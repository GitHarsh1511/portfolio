"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <motion.header
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        className="space-y-2"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-indigo-400">
          Work
        </p>

        <h1 className="text-3xl font-semibold">Projects</h1>

        <p className="text-sm text-slate-300 max-w-2xl">
          A deeper look at the apps, tools, and experiments I’ve built using
          modern technologies like Flutter, Next.js, Firebase, and Python.
        </p>
      </motion.header>

      {/* List of Projects */}
      <section className="space-y-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.slug}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 px-5 py-4 md:px-6 md:py-5 space-y-3 hover:border-indigo-500/60 transition"
          >
            {/* Title + Tech + Buttons */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <p className="text-xs text-slate-400 mt-0.5">{project.tech}</p>
              </div>

              {/* Buttons */}
              {project.links && (
                <div className="flex flex-wrap gap-2 text-xs">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      className="px-3 py-1 rounded-full bg-slate-800 text-slate-100 hover:bg-slate-700 transition"
                    >
                      Live demo
                    </a>
                  )}

                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      className="px-3 py-1 rounded-full border border-slate-600 text-slate-200 hover:border-indigo-400 hover:text-indigo-300 transition"
                    >
                      View code
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-slate-300">{project.description}</p>

            {/* Bullets */}
            <ul className="text-xs text-slate-400 list-disc list-inside space-y-1">
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </section>
    </div>
  );
}
