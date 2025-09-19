import { FaLightbulb, FaBullseye, FaHandshake } from "react-icons/fa";

export default function About() {
  const tiles = [
    {
      title: "Our Vision",
      desc: "To provide quality English-medium education to children in rural areas, bridging the gap between urban and rural learning standards, and empowering every child with knowledge, confidence, and values for a brighter future.",
      icon: <FaLightbulb className="text-5xl text-accent mb-4 drop-shadow-md" />,
    },
    {
      title: "Our Mission",
      desc: (
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-left inline-block">
          <li>Deliver accessible and affordable quality education for rural children.</li>
          <li>
            Build a strong foundation in{" "}
            <span className="font-semibold">
              academics, discipline, and moral values
            </span>.
          </li>
          <li>Encourage creativity, sportsmanship, and cultural awareness.</li>
          <li>Introduce modern learning tools and technology for future readiness.</li>
        </ul>
      ),
      icon: <FaBullseye className="text-5xl text-accent mb-4 drop-shadow-md" />,
    },
    {
      title: "Our Core Values",
      desc: (
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-left inline-block">
          <li>
            <span className="font-semibold">Respect & Discipline:</span> We nurture character, responsibility, and positive conduct in every child.
          </li>
          <li>
            <span className="font-semibold">Community & Collaboration:</span> Working together with parents and society to build a better future.
          </li>
          <li>
            <span className="font-semibold">Opportunity for All:</span> Ensuring equal access to education, regardless of background.
          </li>
          <li>
            <span className="font-semibold">Excellence in Learning:</span> Striving for high standards in academics and holistic growth.
          </li>
        </ul>
      ),
      icon: <FaHandshake className="text-5xl text-accent mb-4 drop-shadow-md" />,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-light via-white to-light py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Top Heading */}
        <h2 className="text-4xl font-heading text-primary mb-6">About Us</h2>

        {/* Intro Text */}
        <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-14">
          <span className="font-semibold">Dada Vikram Public School (DVPS)</span>{" "}
          is a growing institution committed to bringing the standards of
          quality urban education to a rural environment. We provide education
          from <span className="font-semibold">Nursery to Class 8th</span>,
          affiliated with the{" "}
          <span className="font-semibold">
            Madhya Pradesh Board of Secondary Education (MP Board)
          </span>
          . As an English Medium school, DVPS blends modern teaching methods
          with traditional values, ensuring that every child receives the best
          opportunities to excel academically, socially, and personally.
        </p>

        {/* Tiles Section */}
        <div className="grid md:grid-cols-3 gap-10">
          {tiles.map((tile, i) => (
            <div
              key={i}
              className="group bg-white p-10 rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl hover:border-accent transition transform hover:-translate-y-3"
            >
              <div className="flex justify-center">{tile.icon}</div>
              <h3 className="text-2xl font-semibold text-primary mb-3 group-hover:text-accent transition">
                {tile.title}
              </h3>
              <div className="text-gray-600 group-hover:text-gray-800 transition">
                {tile.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
