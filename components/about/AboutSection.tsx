"use client";

import { motion } from "framer-motion";
import Education from "./Education";
import Experience from "./Experience";

export default function AboutSection() {
  return (
    <section
      id="about"
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
        About <span className="text-cyan-400">Me</span>
      </motion.h2>

      {/* About Myself */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center text-slate-300 text-lg leading-relaxed"
      >
        <p>
          I am a passionate{" "}
          <span className="text-white font-semibold">
            Flutter & Web Developer
          </span>{" "}
          with a strong interest in building visually appealing, scalable, and
          user-friendly applications.
        </p>

        <p className="mt-4">
          I enjoy transforming ideas into real-world digital solutions using
          modern technologies like Flutter, Next.js, Firebase, and clean UI
          design principles.
        </p>
      </motion.div>

      {/* Academic Journey */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-20 text-center"
      >
        <h3 className="text-3xl font-semibold text-white mb-6">
          Academic Journey
        </h3>

        <p className="text-slate-400 text-lg leading-relaxed">
          My academic journey built a strong foundation in programming,
          software development, and real-world problem solving through
          projects, internships, and continuous learning.
        </p>
      </motion.div>

      {/* Education & Experience */}
      <div className="mt-24 grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Education />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Experience />
        </motion.div>
      </div>
    </section>
  );
}
