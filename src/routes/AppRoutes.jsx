// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Academics from "../pages/Academics";
//import Admissions from "../pages/Admissions";
// import Gallery from "../pages/Gallery";
//import Notices from "../pages/Notices";
import Contact from "../pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/academics" element={<Academics />} />
      {/* <Route path="/admissions" element={<Admissions />} /> */}
      {/* <Route path="/gallery" element={<Gallery />} /> */}
      {/* <Route path="/notices" element={<Notices />} /> */}
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
