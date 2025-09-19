// src/components/HeroSection.jsx
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="text-center py-16 bg-light">
      <img src="/logo.png" alt="School Logo" className="mx-auto h-32 mb-6" />
      <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-primary tracking-wide drop-shadow-sm">
  DADA VIKRAM
</h1>
<p className="text-2xl md:text-3xl font-heading font-bold text-accent mt-2 tracking-wider">
  PUBLIC SCHOOL
</p>

      <Link
        to="/admissions"
        className="mt-6 inline-block bg-accent text-white px-6 py-3 rounded-md font-medium hover:bg-primary transition"
      >
        Admissions Open
      </Link>
    </section>
  );
}
