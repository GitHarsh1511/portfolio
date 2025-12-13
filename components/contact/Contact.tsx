"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full max-w-5xl mx-auto px-6 py-28 text-center"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-white mb-6"
      >
        Get In <span className="text-cyan-400">Touch</span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-slate-400 max-w-2xl mx-auto mb-12"
      >
        I’m always open to discussing new projects, opportunities, or
        collaborations. Feel free to reach out — I’d love to connect!
      </motion.p>

      {/* Contact Cards */}
      <div className="grid gap-6 sm:grid-cols-3">
        {/* Email */}
        <motion.a
          href="mailto:yourmail@example.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="
            bg-slate-900/70
            border border-slate-800
            rounded-xl
            p-6
            flex
            flex-col
            items-center
            gap-3
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-cyan-400/60
          "
        >
          <Mail className="w-7 h-7 text-cyan-400" />
          <span className="text-slate-200 font-medium">Email</span>
          <span className="text-sm text-slate-400">
            Connect on Email
          </span>
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/GitHarsh1511"
          target="_blank"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="
            bg-slate-900/70
            border border-slate-800
            rounded-xl
            p-6
            flex
            flex-col
            items-center
            gap-3
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-cyan-400/60
          "
        >
          <Github className="w-7 h-7 text-cyan-400" />
          <span className="text-slate-200 font-medium">GitHub</span>
          <span className="text-sm text-slate-400">
            Connect on GitHub
          </span>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://linkedin.com/in/harshchauhan115"
          target="_blank"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="
            bg-slate-900/70
            border border-slate-800
            rounded-xl
            p-6
            flex
            flex-col
            items-center
            gap-3
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-cyan-400/60
          "
        >
          <Linkedin className="w-7 h-7 text-cyan-400" />
          <span className="text-slate-200 font-medium">LinkedIn</span>
          <span className="text-sm text-slate-400">
            Connect on LinkedIn
          </span>
        </motion.a>
      </div>
    </section>
  );
}
