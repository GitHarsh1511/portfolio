"use client";

import { motion } from "framer-motion";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full max-w-7xl mx-auto px-6 py-28"
    >
      {/* Section Heading */}
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
          I am a{" "}
          <span className="text-white font-semibold">
            Flutter & Web Developer
          </span>{" "}
          with hands-on experience in building scalable and user-focused
          applications. I enjoy creating clean UI, smooth interactions, and
          efficient application architectures.
        </p>

        <p className="mt-4">
          Through academic projects and a Flutter development internship, I
          have worked on real-world applications involving authentication,
          state management, databases, and modern UI design.
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
          My academic journey in computer applications has provided me with a
          strong foundation in software development principles. Alongside
          coursework, I focused on practical learning through projects and
          internships to bridge the gap between theory and real-world
          application development.
        </p>
      </motion.div>

      {/* Education & Experience */}
      <div className="mt-24 grid md:grid-cols-2 gap-12">
        <Education />
        <Experience />
      </div>

      {/* Skills Section BELOW Education & Experience */}
      <div className="mt-24">
        <Skills />
      </div>
    </section>
  );
}
