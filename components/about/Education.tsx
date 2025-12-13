import { GraduationCap, Award } from "lucide-react";

const educationData = [
  {
    title: "Bachelor of Technology in Computer Engineering",
    institute: "A. D. Patel Institute of Technology | CVMU",
    duration: "2022 – 2026",
    status: "Pursuing",
    scoreLabel: "CGPA",
    scoreValue: "9.32",
  },
  {
    title: "HSC Science (A Group)",
    institute: "H. B. Kapadiya New High School | GSEB",
    duration: "2021 – 2022",
    status: "Completed",
    scoreLabel: "Percentage",
    scoreValue: "76.61%",
  },
  {
    title: "SSC",
    institute: "Shree Kailash Sikshan Tirth Higher Secondary School | GSEB",
    duration: "2019 – 2020",
    status: "Completed",
    scoreLabel: "Percentage",
    scoreValue: "87.33%",
  },
];

export default function Education() {
  return (
    <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-8">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-12">
        <GraduationCap className="w-6 h-6 text-cyan-400" />
        <h4 className="text-2xl font-semibold text-cyan-400">
          Education
        </h4>
      </div>

      {/* Timeline */}
      <div className="relative space-y-12">
        {/* Vertical line */}
        <span className="absolute left-3.75 top-1.5 bottom-0 w-px bg-slate-700" />

        {educationData.map((edu, index) => (
          <div key={index} className="flex items-start gap-6">
            {/* Dot column */}
            <div className="relative w-8 flex justify-center">
              <span className="w-3 h-3 bg-cyan-400 rounded-full mt-2" />
            </div>

            {/* Card column */}
            <div className="flex-1 bg-slate-950/70 border border-slate-800 rounded-xl p-6 shadow-md">
              <h5 className="text-xl font-semibold text-white">
                {edu.title}
              </h5>

              <p className="text-slate-400 mt-1">
                {edu.institute}
              </p>

              <p className="text-green-400 font-medium mt-3">
                {edu.duration} | {edu.status}
              </p>

              <div className="flex items-center gap-2 mt-4 text-slate-300">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="font-medium">
                  {edu.scoreLabel}:
                </span>
                <span>{edu.scoreValue}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
