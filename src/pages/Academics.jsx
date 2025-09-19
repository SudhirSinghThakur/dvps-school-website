import { FaChild, FaBookOpen, FaFlask } from "react-icons/fa";

const classes = [
  {
    title: "Nursery – KG",
    desc: "Early childhood care & joyful learning with play-based activities.",
    icon: <FaChild className="text-5xl text-accent mb-4 drop-shadow-md" />,
  },
  {
    title: "Primary (Class 1 – 5)",
    desc: "Strong foundation in reading, writing, arithmetic, and languages.",
    icon: <FaBookOpen className="text-5xl text-accent mb-4 drop-shadow-md" />,
  },
  {
    title: "Middle (Class 6 – 8)",
    desc: "Advanced academics with Science, Mathematics, Social Studies, and English.",
    icon: <FaFlask className="text-5xl text-accent mb-4 drop-shadow-md" />,
  },
];

export default function Academics() {
  return (
    <section className="bg-gradient-to-r from-light via-white to-light py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-heading text-primary mb-4">Academics</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-14 text-lg">
          DVPS offers a structured learning journey from early childhood to
          middle school, blending modern pedagogy with value-based education.
        </p>

        {/* Class Tiles */}
        <div className="grid md:grid-cols-3 gap-10">
          {classes.map((cls, i) => (
            <div
              key={i}
              className="group bg-white p-10 rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl hover:border-accent transition transform hover:-translate-y-3"
            >
              <div className="flex justify-center">{cls.icon}</div>
              <h3 className="text-2xl font-semibold text-primary mb-3 group-hover:text-accent transition">
                {cls.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition">
                {cls.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Teaching Approach */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-heading text-accent mb-4">
            Teaching Approach
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-left inline-block text-lg">
            <li>Activity-based joyful learning</li>
            <li>Smart classrooms with modern teaching aids</li>
            <li>Continuous evaluation & progress tracking</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
