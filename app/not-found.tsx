// app/not-found.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-3"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-indigo-400">
          404
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold">
          This page could not be found.
        </h1>
        <p className="text-sm md:text-base text-slate-400 max-w-md mx-auto">
          The page you&apos;re looking for might have been moved, renamed, or
          never existed. Let&apos;s get you back to something real.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <Link
          href="/"
          className="px-4 py-2 rounded-full bg-indigo-500 hover:bg-indigo-400 text-slate-950 text-sm font-medium shadow"
        >
          Go home
        </Link>
        <a
          href="/projects"
          className="px-4 py-2 rounded-full border border-slate-700 text-slate-200 text-sm hover:border-indigo-400 hover:text-indigo-300"
        >
          View my projects
        </a>
      </motion.div>
    </div>
  );
}
