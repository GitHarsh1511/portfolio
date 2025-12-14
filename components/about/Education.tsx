"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const educationData = [
  {
    title: "Bachelor of Engineering in Computer Engineering",
    institute: "A. D. Patel Institute of Technology | CVMU",
    duration: "2021 – 2026",
    scoreLabel: "CGPA",
    scoreValue: "9.12",
    highlight: true,
  },
  {
    title: "HSC Science (A Group)",
    institute: "Anand High School | GSEB",
    duration: "2020 – 2021",
    scoreLabel: "Percentage",
    scoreValue: "77.08%",
  },
  {
    title: "SSC",
    institute: "Anand High School | GSHSEB",
    duration: "2018 – 2019",
    scoreLabel: "Percentage",
    scoreValue: "87.5%",
  },
];

export default function Education() {
  return (
    <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 sm:p-8">
      {/* Section Heading */}
      <div className="flex items-center gap-3 mb-10">
        <GraduationCap className="w-6 h-6 text-cyan-400" />
        <h4 className="text-2xl font-semibold text-cyan-400">Education</h4>
      </div>

      {/* Timeline */}
      <div className="relative space-y-8 sm:space-y-12">
        {/* Vertical line */}
        <span className="absolute left-4 top-2 bottom-0 w-px bg-slate-700" />

        {educationData.map((edu, index) => (
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
              <span className="w-3 h-3 bg-cyan-400 rounded-full" />
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
                hover:border-cyan-400/60
                ${edu.highlight ? "ring-1 ring-cyan-400/30" : ""}
              `}
            >
              <h5 className="text-lg sm:text-xl font-semibold text-white">
                {edu.title}
              </h5>

              <p className="text-slate-400 mt-1">{edu.institute}</p>

              <p className="text-green-400 font-medium mt-3">
                {edu.duration}
              </p>

              <div className="flex items-center gap-2 mt-4 text-slate-300">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="font-medium">{edu.scoreLabel}:</span>
                <span>{edu.scoreValue}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
