import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AdminLayout from "../layout/AdminLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Academics from "../pages/Academics";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import Admissions from "../pages/Admissions";
import NoticeBoard from "../pages/NoticeBoard";
import AdminLogin from "../pages/Admin/AdminLogin";
import RequireAuth from "../components/RequireAuth";

import AdminNotices from "../pages/admin/AdminNotices"; // ✅ real component import kar
// ab tu dummy use kar raha tha

function AdminDashboard() {
  return <h2 className="text-2xl text-[#174e2b]">Welcome Admin</h2>;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Website */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/notice-board" element={<NoticeBoard />} />
        </Route>

        {/* Admin Portal */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <RequireAuth>
              <AdminLayout />
            </RequireAuth>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="notices" element={<AdminNotices />} /> {/* ✅ sirf yaha */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
