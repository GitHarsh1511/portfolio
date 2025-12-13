"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "CleanSphere",
    description:
      "A community-driven urban cleanliness tracker that allows users to report and monitor cleanliness issues.",
    image: "/projects/cleansphere.png", // put image in public/projects
    tech: ["Flutter", "Firebase", "Google Maps"],
    live: "#",
    github: "#",
  },
  {
    title: "Voyager App",
    description:
      "A travel companion app with beautiful UI, animations, and personalized recommendations.",
    image: "/projects/voyager.png",
    tech: ["Flutter", "SharedPreferences"],
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal developer portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
    image: "/projects/portfolio.png",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full max-w-7xl mx-auto px-6 py-28"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        My <span className="text-cyan-400">Projects</span>
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="
              group
              bg-slate-900/70
              border border-slate-800
              rounded-2xl
              overflow-hidden
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-400/60
            "
          >
            {/* Project Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="text-slate-400 mt-2 text-sm">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-6">
                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-cyan-400 hover:underline"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:underline"
                >
                  <Github size={16} />
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
