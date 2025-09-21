import { FaGraduationCap, FaLaptop, FaChalkboardTeacher, FaUsers } from "react-icons/fa";

const data = [
  { title: "Academics", desc: "Strong curriculum, experienced teachers.", icon: <FaGraduationCap size={28}/> },
  { title: "Modern Facilities", desc: "Labs, library, smart classrooms.", icon: <FaLaptop size={28}/> },
  { title: "Experienced Teachers", desc: "Qualified & caring faculty.", icon: <FaChalkboardTeacher size={28}/> },
  { title: "Holistic Growth", desc: "Sports, arts, and life activities.", icon: <FaUsers size={28}/> },
];

export default function HighlightCard() {
  return (
    <section id="about" className="bg-[#f5f9f3] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#174e2b] mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 text-center hover:-translate-y-2 transition">
              <div className="flex justify-center text-[#174e2b] mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-[#174e2b]">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
