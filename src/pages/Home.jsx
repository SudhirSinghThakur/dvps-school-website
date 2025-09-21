// src/pages/Home.jsx
import HeroSection from "../components/HeroSection";
import HighlightCard from "../components/HighlightCard";
import InfoTiles from "../components/InfoTiles";
import Gallery from "./Gallery";
import { FaTrophy, FaBuilding, FaBullhorn } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <InfoTiles />
      <Gallery />
      {/* <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-heading text-center mb-8 text-primary">Highlights</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <HighlightCard icon={<FaTrophy />} title="Achievements" description="Academic and cultural excellence." />
          <HighlightCard icon={<FaBuilding />} title="Facilities" description="Modern labs, library & sports." />
          <HighlightCard icon={<FaBullhorn />} title="Announcements" description="Stay updated with events & news." />
        </div>
      </section> */}
    </div>
  );
}
