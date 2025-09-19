// src/layout/MainLayout.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 px-6">{children}</main>
      <Footer />
    </div>
  );
}
