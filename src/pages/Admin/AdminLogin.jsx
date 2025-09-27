import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy credentials (replace later with backend / Firebase)
    if (email === "admin@dvps.com" && password === "123456") {
      localStorage.setItem("authToken", "dummy-jwt-token");
      navigate("/admin");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-light via-white to-light">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src="/logo.png" alt="School Logo" className="w-20 h-20 mb-2" />
          <h2 className="text-2xl font-bold text-[#174e2b]">DVPS Admin Login</h2>
        </div>

        {/* Error */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-[#b48a2e] text-white py-2 rounded-lg hover:bg-[#946d23] transition"
          >
            Login
          </button>
        </form>

        {/* Back to Website */}
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="inline-block text-[#174e2b] font-medium hover:underline"
          >
            ← Back to Website
          </Link>
        </div>
      </div>
    </section>
  );
}
