// app/resume/page.tsx
export default function ResumePage() {
  const lastUpdated = "Dec 2025"; // change this when you update your resume

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.25em] text-indigo-400">
          Resume
        </p>
        <h1 className="text-3xl font-semibold">My Resume</h1>
        <p className="text-sm text-slate-300 max-w-2xl">
          You can download my latest resume as a PDF, or quickly glance at the
          highlights below. This resume focuses on my experience in Flutter,
          Next.js, and modern web & mobile development.
        </p>
        <p className="text-[11px] text-slate-500">Last updated: {lastUpdated}</p>
      </header>

      {/* Action buttons */}
      <section className="flex flex-wrap gap-3">
        {/* Direct download */}
        <a
          href="/resume.pdf"
          download
          className="px-4 py-2 rounded-full bg-indigo-500 hover:bg-indigo-400 text-slate-950 text-sm font-medium shadow"
        >
          Download PDF
        </a>

        {/* Open in new tab */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full border border-slate-700 text-slate-200 text-sm hover:border-indigo-400 hover:text-indigo-300"
        >
          View in browser
        </a>
      </section>

      {/* Quick summary / highlights */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Profile</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Computer Engineering student with hands-on experience in mobile app
            development using Flutter and Dart, and frontend development with
            Next.js and Tailwind CSS. Passionate about building clean, usable
            interfaces and learning modern tools like Firebase and Vercel.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 text-sm">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-200">
              Skills Snapshot
            </h3>
            <ul className="text-slate-300 text-xs space-y-1">
              <li>Languages: Dart, JavaScript, TypeScript, Python, Java</li>
              <li>Frameworks: Flutter, Next.js, React</li>
              <li>Tools: Git, VS Code, Android Studio, Firebase, Vercel</li>
              <li>Concepts: REST APIs, responsive UI, basic AI/ML</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-200">
              Soft Skills
            </h3>
            <ul className="text-slate-300 text-xs space-y-1">
              <li>Strong communication and teamwork</li>
              <li>Problem-solving and debugging mindset</li>
              <li>Time management and responsibility</li>
              <li>Continuous learning and curiosity</li>
            </ul>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-slate-200">
            Recent Experience & Projects
          </h3>
          <ul className="text-slate-300 text-xs space-y-1">
            <li>
              • Flutter Internship – Built and maintained mobile app features,
              improved UI, and fixed bugs in production code.
            </li>
            <li>
              • CleanSphere – Urban Cleanliness Tracker (Flutter + Firebase
              project for community-driven cleanliness reporting).
            </li>
            <li>
              • Next.js Portfolio – This portfolio site, built with Next.js,
              Tailwind CSS, and deployed on Vercel.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
