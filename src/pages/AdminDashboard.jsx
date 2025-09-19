import { useState } from "react";

export default function AdminDashboard() {
  const [notice, setNotice] = useState({ title: "", description: "" });
  const [status, setStatus] = useState("");

  const handleChange = e => setNotice({ ...notice, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus("Saving...");
    try {
      const res = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "notice", ...notice })
      });
      if (res.ok) {
        setStatus("✅ Notice added!");
        setNotice({ title: "", description: "" });
      } else {
        setStatus("❌ Failed to add.");
      }
    } catch (err) {
      setStatus("❌ Error: " + err.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-heading text-primary mb-6">Admin Dashboard</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg space-y-4">
        <input type="text" name="title" placeholder="Notice Title" value={notice.title} onChange={handleChange} required className="w-full border p-2 rounded" />
        <textarea name="description" placeholder="Notice Description" value={notice.description} onChange={handleChange} required rows="4" className="w-full border p-2 rounded" />
        <button type="submit" className="bg-accent text-white px-6 py-2 rounded">Save Notice</button>
        {status && <p className="mt-2">{status}</p>}
      </form>
    </div>
  );
}