"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    /* ===== PAGE SECTION WRAPPER (IMPORTANT) ===== */
    <section
      id="about"
      className="relative z-10 w-full py-28 md:py-36"
    >
      {/* ===== CONTENT CONTAINER ===== */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* ===== ABOUT HEADING ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-indigo-400">Me</span>
          </h2>

          <p className="max-w-2xl mx-auto text-slate-400 text-sm md:text-base leading-relaxed">
            A brief overview of my background, interests, and academic journey.
          </p>
        </motion.div>

        {/* ===== STACKED CARDS ===== */}
        <div className="flex flex-col gap-8">
          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="
              bg-slate-900/70
              border border-slate-800
              rounded-2xl
              p-6 sm:p-8
              backdrop-blur
            "
          >
            <h3 className="text-lg font-semibold text-white mb-3 text-center">
              Computer Engineering Student
            </h3>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              I am a proactive and detail-oriented Computer Engineering student
              with a strong interest in Artificial Intelligence and Machine
              Learning. I enjoy working on AI-driven solutions, focusing on data
              analysis, model development, and problem-solving using Python.
            </p>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-4">
              I bring a strong analytical mindset along with the ability to
              collaborate effectively in team environments. I am highly motivated
              to continuously learn, adapt, and explore innovative technologies
              to build impactful and intelligent applications.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true }}
            className="
              bg-slate-900/70
              border border-slate-800
              rounded-2xl
              p-6 sm:p-8
              backdrop-blur
            "
          >
            <h3 className="text-lg font-semibold text-white mb-3 text-center">
              Academic Journey
            </h3>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              My academic journey in computer applications has provided me with a
              strong foundation in software development principles. Alongside
              coursework, I focused on practical learning through projects and
              internships to bridge the gap between theory and real-world
              application development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
