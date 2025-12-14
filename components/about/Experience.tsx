"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    role: "Flutter Developer Intern",
    company: "Elsner Technologies Pvt. Ltd. - (Remote)",
    duration: "May 2025 - June 2025",
    description: [
      "Developed mobile applications using Flutter & Dart",
      "Implemented authentication and user workflows",
      "Worked with Firebase, SQLite & SharedPreferences",
      "Improved UI using animations and reusable widgets",
    ],
    highlight: true,
  },
  // {
  //   role: "Academic Projects & Freelance Learning",
  //   company: "Self-driven & University Projects",
  //   duration: "2023 – Present",
  //   description: [
  //     "Built multiple Flutter and web-based applications",
  //     "Focused on clean architecture and scalable UI",
  //     "Hands-on experience with REST APIs and local storage",
  //   ],
  // },
];

export default function Experience() {
  return (
    <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 sm:p-8">
      {/* Section Heading */}
      <div className="flex items-center gap-3 mb-10">
        <Briefcase className="w-6 h-6 text-purple-400" />
        <h4 className="text-2xl font-semibold text-purple-400">Experience</h4>
      </div>

      {/* Timeline */}
      <div className="relative space-y-8 sm:space-y-12">
        {/* Vertical line */}
        <span className="absolute left-4 top-2 bottom-0 w-px bg-slate-700" />

        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 sm:gap-6"
          >
            {/* Dot column */}
            <div className="relative w-8 flex justify-center items-center">
              <motion.span className="w-3 h-3 bg-purple-400 rounded-full" />
            </div>

            {/* Card */}
            <div
              className={`
                flex-1
                bg-slate-950/70
                border border-slate-800
                rounded-xl
                p-4 sm:p-6
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:border-purple-400/60
                ${exp.highlight ? "ring-1 ring-purple-400/30" : ""}
              `}
            >
              <h5 className="text-lg sm:text-xl font-semibold text-white">
                {exp.role}
              </h5>

              <p className="text-slate-400 mt-1">{exp.company}</p>

              <p className="text-green-400 font-medium mt-3">{exp.duration}</p>

              <ul className="list-disc list-inside text-slate-300 mt-4 space-y-1">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
