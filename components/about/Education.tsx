const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "CVM University",
    year: "2022 – 2025",
    details: [
      "Strong foundation in programming & software development",
      "Worked on Flutter, Web & Database projects",
      "Focused on real-world application building",
    ],
  },
];

export default function Education() {
  return (
    <div className="relative rounded-2xl bg-slate-900/70 border border-slate-800 p-8">
      <h4 className="text-2xl font-semibold text-cyan-400 mb-8">
        Education
      </h4>

      <div className="border-l border-slate-700 pl-6 space-y-8">
        {education.map((edu) => (
          <div key={edu.degree} className="relative">
            {/* Dot */}
            <span className="absolute -left-[33px] top-1 w-3 h-3 bg-cyan-400 rounded-full" />

            <h5 className="text-xl font-medium text-white">
              {edu.degree}
            </h5>

            <p className="text-slate-400">
              {edu.institute} • {edu.year}
            </p>

            <ul className="list-disc list-inside text-slate-300 mt-3 space-y-1">
              {edu.details.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
