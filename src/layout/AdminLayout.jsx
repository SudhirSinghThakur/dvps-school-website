import { Outlet, Link, useNavigate } from "react-router-dom";
import {
  FaBell,
  FaUsers,
  FaChalkboardTeacher,
  FaClipboardList,
  FaMoneyBill,
  FaCog,
} from "react-icons/fa";

export default function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // localStorage se token remove kar do
    localStorage.removeItem("authToken");

    // redirect to login page
    navigate("/admin/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-[#174e2b] text-white flex flex-col">
        <div className="p-6 font-bold text-lg border-b border-green-900">
          DVPS Admin
        </div>
        <nav className="flex-1 p-4 space-y-3">
          <Link
            to="/admin"
            className="flex items-center gap-2 p-2 rounded hover:bg-green-800 transition"
          >
            <FaBell /> Dashboard
          </Link>
          <Link
            to="/admin/notices"
            className="flex items-center gap-2 p-2 rounded hover:bg-green-800 transition"
          >
            <FaClipboardList /> Notices
          </Link>
          <Link
            to="/admin/students"
            className="flex items-center gap-2 p-2 rounded hover:bg-green-800 transition"
          >
            <FaUsers /> Students
          </Link>
          <Link
            to="/admin/teachers"
            className="flex items-center gap-2 p-2 rounded hover:bg-green-800 transition"
          >
            <FaChalkboardTeacher /> Teachers
          </Link>
          <Link
            to="/admin/fees"
            className="flex items-center gap-2 p-2 rounded hover:bg-green-800 transition"
          >
            <FaMoneyBill /> Fees
          </Link>
          <Link
            to="/admin/settings"
            className="flex items-center gap-2 p-2 rounded hover:bg-green-800 transition"
          >
            <FaCog /> Settings
          </Link>
        </nav>
        <div className="p-4 border-t border-green-900 text-sm">© DVPS 2025</div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-[#174e2b]">
            Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="bg-[#b48a2e] px-4 py-2 rounded text-white hover:bg-[#946d23] transition"
          >
            Logout
          </button>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
