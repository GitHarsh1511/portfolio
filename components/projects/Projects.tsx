"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectModal from "./ProjectModal";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  live: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "CleanSphere",
    description:
      "A community-driven urban cleanliness tracker that allows users to report and monitor cleanliness issues.",
    image: "/projects/cleansphere.png",
    tech: ["Flutter", "Firebase", "Google Maps"],
    live: "https://example.com",
    github: "https://github.com/GitHarsh1511",
  },
  {
    title: "Voyager App",
    description:
      "A travel companion app with beautiful UI, animations, and personalized recommendations.",
    image: "/projects/voyager.png",
    tech: ["Flutter", "SharedPreferences"],
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal developer portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
    image: "/projects/portfolio.png",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    live: "https://example.com",
    github: "https://github.com",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60"
          >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Subtle CTA */}
              {/* <span className="inline-block mt-4 text-sm text-cyan-400">
                View Details →
              </span> */}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
