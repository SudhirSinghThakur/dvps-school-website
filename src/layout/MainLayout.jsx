import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 mt-16">
        {/* Agar children diye gaye hain to unko render karo,
            warna Outlet render hoga (routes ke liye) */}
        {children || <Outlet />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
