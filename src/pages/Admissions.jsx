import { FaUserGraduate, FaFileAlt, FaPhoneAlt } from "react-icons/fa";

export default function Admissions() {
  return (
    <section className="bg-gradient-to-r from-light via-white to-light py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl font-heading text-primary mb-6 flex justify-center items-center gap-2">
          <FaUserGraduate className="text-accent text-4xl drop-shadow-md" />
          Admissions<span className="text-accent"></span>
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          We are excited to welcome new students to Dada Vikram Public School.  
          Admissions are open for Nursery to Class 8 for the new academic session.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div className="group bg-white shadow-md rounded-2xl p-8 border border-gray-200 
                          hover:shadow-2xl hover:border-accent transition transform hover:-translate-y-3">
            <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2 group-hover:text-accent transition">
              📌 Eligibility
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 group-hover:text-gray-800 transition">
              <li>Nursery: Age 3+ years</li>
              <li>KG: Age 4+ years</li>
              <li>Class 1 to 8: Based on previous class report</li>
            </ul>
          </div>

          <div className="group bg-white shadow-md rounded-2xl p-8 border border-gray-200 
                          hover:shadow-2xl hover:border-accent transition transform hover:-translate-y-3">
            <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2 group-hover:text-accent transition">
              <FaFileAlt className="text-accent drop-shadow-md" />
              Documents Required
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 group-hover:text-gray-800 transition">
              <li>Birth Certificate</li>
              <li>2 Passport-size photographs</li>
              <li>Previous school report card (if applicable)</li>
              <li>Aadhar Card copy</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#b48a2e] text-white px-8 py-4 rounded-full 
                       hover:bg-[#946d23] transition text-lg font-medium shadow-md hover:shadow-xl transform hover:-translate-y-2"
          >
            <FaPhoneAlt /> Contact for Admission
          </a>
        </div>
      </div>
    </section>
  );
}
