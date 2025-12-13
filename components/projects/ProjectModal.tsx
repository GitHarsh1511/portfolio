"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X, Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  live: string;
  github: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // ⛔ Disable background scroll + ESC close
  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = "hidden";

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [project, onClose]);

  // 🚫 Don’t render modal if no project
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      {/* Click outside closes modal */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* Modal Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="
          relative
          z-10
          w-full
          max-w-3xl
          bg-slate-950
          border border-slate-800
          rounded-2xl
          shadow-2xl
          overflow-hidden
        "
      >
        {/* ❌ Close Button (NOW WORKS) */}
        <button
          onClick={onClose}
          className="
            absolute
            top-4
            right-4
            z-20
            text-slate-400
            hover:text-white
            transition
          "
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        {/* Image */}
        <div className="relative h-56 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-white">
            {project.title}
          </h3>

          <p className="text-slate-400 mt-3">
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

          {/* Actions */}
          <div className="flex gap-6 mt-6">
            <a
              href={project.live}
              target="_blank"
              className="flex items-center gap-2 text-cyan-400 hover:underline"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 text-slate-300 hover:underline"
            >
              <Github size={18} />
              Source Code
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
