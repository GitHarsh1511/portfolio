"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectModal from "./ProjectModal";

interface Project {
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tech: string[];
  live: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "CleanSphere",
    shortDescription:
      "A community-driven platform that enables citizens to report, track, and monitor urban cleanliness issues in real time.",
    fullDescription:
      "CleanSphere is a community-driven urban cleanliness tracking platform designed to bridge the gap between citizens and municipal authorities. Users can report cleanliness issues such as garbage accumulation, overflowing bins, and unhygienic public areas using location-based reporting.\n\nThe platform allows real-time monitoring of reported issues, helping authorities prioritize and resolve problems efficiently while promoting civic responsibility and cleaner cities.",
    image: "/projects/cleansphere.png",
    tech: ["React", "Node.js", "MySQL", "Clerk", "Firebase", "Google Maps API"],
    live: "https://www.linkedin.com/posts/harsh-jingar19_cleansphere-smartcity-reactnative-ugcPost-7330876698424430593-ulIu",
    github:
      "https://github.com/GitHarsh1511/CleanSphere---Urban-Cleanliness-Tracker",
  },
  {
    title: "AI News Summarizer with Sentiment Analysis",
    shortDescription:
      "An AI-powered application that summarizes news articles and analyzes their sentiment to help users quickly understand key information and emotional tone.",
    fullDescription:
      "AI News Summarizer with Sentiment Analysis is an intelligent application designed to help users consume news efficiently by extracting meaningful insights from lengthy articles.\n\nThe system uses Natural Language Processing (NLP) techniques to generate concise summaries of news content while simultaneously analyzing the sentiment behind the text, categorizing it as positive, negative, or neutral.\n\nBy combining automatic summarization with sentiment analysis, the platform enables users to quickly understand both the key points and the emotional context of news articles. This makes it especially useful for staying informed without information overload.\n\nThe project demonstrates practical applications of machine learning, text processing, and AI-driven decision support systems in real-world scenarios.",
    image: "/projects/aisum.png",
    tech: [
      "Python",
      "Natural Language Processing (NLP)",
      "Machine Learning",
      "NLTK / spaCy",
      "Transformers",
      "Flask / FastAPI",
    ],
    live: "https://github.com/GitHarsh1511/AI-News-Summarizer",
    github: "https://github.com/GitHarsh1511/AI-News-Summarizer",
  },

  {
    title: "Portfolio Website",
    shortDescription:
      "A personal developer portfolio showcasing projects, skills, and experience.",
    fullDescription:
      "This portfolio website is built to showcase my projects, skills, and professional journey.\n\nIt focuses on clean design, smooth animations, and modern UI practices.",
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
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        My <span className="text-cyan-400">Projects</span>
      </motion.h2>

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
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                {project.shortDescription}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
