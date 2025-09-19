import { FaTrophy, FaBuilding, FaLeaf, FaChalkboardTeacher } from "react-icons/fa";

const tiles = [
  {
    title: "Achievements",
    desc: "Proven excellence in academics, sports, and cultural activities with consistent MP Board results.",
    icon: <FaTrophy className="text-5xl text-accent mb-4 drop-shadow-md" />,
  },
  {
    title: "Modern Facilities",
    desc: "Smart classrooms, science & computer labs, library, and sports infrastructure for all-round growth.",
    icon: <FaBuilding className="text-5xl text-accent mb-4 drop-shadow-md" />,
  },
  {
    title: "Holistic Development",
    desc: "Balancing academics, creativity, values, and extracurriculars to nurture confident individuals.",
    icon: <FaLeaf className="text-5xl text-accent mb-4 drop-shadow-md" />,
  },
  {
    title: "Experienced Faculty",
    desc: "Dedicated and qualified teachers guiding every student with care and expertise.",
    icon: <FaChalkboardTeacher className="text-5xl text-accent mb-4 drop-shadow-md" />,
  },
];

export default function InfoTiles() {
  return (
    <section className="bg-gradient-to-r from-light via-white to-light py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-heading text-primary mb-4">
          Why Choose <span className="text-accent">DVPS?</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-14 text-lg">
          At Dada Vikram Public School, we bring the standards of quality urban education to a rural setting. With a strong focus on academic excellence, modern facilities, and value-based learning, we strive to empower every child in our community with knowledge, confidence, and opportunities to succeed in life.
        </p>

        {/* USP Tiles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {tiles.map((tile, i) => (
            <div
              key={i}
              className="group bg-white p-10 rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl hover:border-accent transition transform hover:-translate-y-3"
            >
              <div className="flex justify-center">{tile.icon}</div>
              <h3 className="text-2xl font-semibold text-primary mb-3 group-hover:text-accent transition">
                {tile.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition">
                {tile.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
