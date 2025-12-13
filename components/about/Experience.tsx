import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Flutter Developer Intern",
    company: "Mobile App Development Internship",
    year: "2024",
    details: [
      "Developed Flutter applications using clean architecture",
      "Implemented authentication & state management",
      "Worked with Firebase, SQLite & SharedPreferences",
      "Enhanced UI with animations and reusable widgets",
    ],
  },
];

export default function Experience() {
  return (
    <div className="relative rounded-2xl bg-slate-900/70 border border-slate-800 p-8">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-8">
        <Briefcase className="w-6 h-6 text-purple-400" />
        <h4 className="text-2xl font-semibold text-purple-400">
          Experience
        </h4>
      </div>

      {/* Timeline */}
      <div className="border-l border-slate-700 pl-6 space-y-8">
        {experiences.map((exp) => (
          <div key={exp.role} className="relative">
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
