// src/components/Footer.jsx
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6 mt-16">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Dada Vikram Public School</p>
        <div className="flex justify-center space-x-6 mt-3">
          <a href="https://www.facebook.com/DVPSSamaswara" target="_blank"><FaFacebook /></a>
          <a href="https://www.instagram.com/dvpssamaswara" target="_blank"><FaInstagram /></a>
          <a href="https://www.youtube.com/@dvpssamaswara" target="_blank"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
}
