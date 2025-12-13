const experiences = [
  {
    role: "Flutter Developer Intern",
    company: "Mobile App Development Internship",
    year: "2024",
    details: [
      "Built mobile applications using Flutter & Dart",
      "Implemented authentication and user flows",
      "Worked with Firebase, SharedPreferences & SQLite",
      "Improved UI using animations and clean layouts",
    ],
  },
];

export default function Experience() {
  return (
    <div className="relative rounded-2xl bg-slate-900/70 border border-slate-800 p-8">
      <h4 className="text-2xl font-semibold text-purple-400 mb-8">
        Experience
      </h4>

      <div className="border-l border-slate-700 pl-6 space-y-8">
        {experiences.map((exp) => (
          <div key={exp.role} className="relative">
            {/* Dot */}
            <span className="absolute -left-[33px] top-1 w-3 h-3 bg-purple-400 rounded-full" />

            <h5 className="text-xl font-medium text-white">
              {exp.role}
            </h5>

            <p className="text-slate-400">
              {exp.company} • {exp.year}
            </p>

            <ul className="list-disc list-inside text-slate-300 mt-3 space-y-1">
              {exp.details.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
