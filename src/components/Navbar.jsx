import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/academics", label: "Academics" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
    { to: "/admissions", label: "Admissions" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="School Logo" className="w-12 h-12" />
          <div>
            <h1 className="text-[#174e2b] font-bold text-lg">DADA VIKRAM</h1>
            <p className="text-gray-500 text-sm">PUBLIC SCHOOL</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`relative pb-1 transition ${
                  location.pathname === to
                    ? "text-primary font-semibold"
                    : "hover:text-primary"
                }`}
              >
                {label}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-accent transition-all duration-300 ${
                    location.pathname === to ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </li>
          ))}

          {/* Admin Button */}
          <li>
            <Link
              to="/admin"
              className="bg-[#b48a2e] px-4 py-2 rounded-full text-white hover:bg-[#946d23] transition shadow-md"
            >
              Admin
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-primary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-6 animate-slide-down">
          <ul className="space-y-4 font-medium text-gray-700">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={`block py-1 ${
                    location.pathname === to
                      ? "text-primary font-semibold"
                      : "hover:text-primary"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}

            {/* Mobile Admin Button */}
            <li>
              <Link
                to="/admin"
                onClick={() => setIsOpen(false)}
                className="block bg-[#b48a2e] text-white text-center px-4 py-2 rounded-full hover:bg-[#946d23] transition shadow-md"
              >
                Admin
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
