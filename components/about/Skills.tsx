"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "Java", icon: "java" },
  { name: "C++", icon: "cplusplus" },
  { name: "Python", icon: "python" },
  { name: "JavaScript", icon: "javascript" },

  { name: "HTML5", icon: "html5" },
  { name: "CSS3", icon: "css3" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "React.js", icon: "react" },

  { name: "Next.js", icon: "nextjs" },
  { name: "React Native", icon: "react" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Flask", icon: "flask" },

  { name: "Java Servlet", icon: "java" },
  { name: "JSP", icon: "java" },
  { name: "Pandas", icon: "pandas" },
  { name: "NumPy", icon: "numpy" },

  { name: "MySQL", icon: "mysql" },
  { name: "Firebase", icon: "firebase" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
];

export default function Skills() {
  return (
    <section className="mt-28">
      {/* Section Heading */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
      >
        Skills &{" "}
        <span className="text-cyan-400">Abilities</span>
      </motion.h3>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            viewport={{ once: true }}
            className="
              group
              bg-linear-to-br from-slate-900/80 to-slate-950
              border border-slate-800
              rounded-2xl
              p-6
              flex
              flex-col
              items-center
              justify-center
              gap-4
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-400/60
              hover:shadow-cyan-500/10
            "
          >
            {/* Skill Logo */}
            <div className="w-12 h-12 relative">
              <Image
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                alt={skill.name}
                fill
                className="object-contain group-hover:scale-110 transition-transform"
              />
            </div>

            {/* Skill Name */}
            <span className="text-sm font-medium text-slate-200 text-center">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
