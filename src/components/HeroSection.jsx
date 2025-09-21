import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-[#174e2b] to-[#0f2d18] text-white py-20 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to Dada Vikram Public School
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Nurturing Excellence, Building Futures
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/admissions"
            className="bg-[#b48a2e] px-6 py-3 rounded-full text-white hover:bg-[#946d23] transition"
          >
            Admissions Open →
          </Link>
          <Link
            to="/contact"
            className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-[#174e2b] transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
