import { useEffect, useState } from "react";
import { FaPlus, FaTrash, FaEdit, FaSyncAlt } from "react-icons/fa";

const API_URL =
  "https://script.google.com/macros/s/AKfycbxjo-nvlsJgHdgV4F4WDr4-FPVtrWOCZ__QyntYRzjSZyUwbRN8lN3JBu107shV0Iwc/exec";

export default function AdminNotices() {
  const [notices, setNotices] = useState([]);
  const [form, setForm] = useState({ title: "", desc: "", date: "" });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // ✅ Load Notices
  const fetchNotices = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(API_URL, { method: "GET", mode: "cors" });
      const text = await res.text();

      // ✅ Handle Google Apps Script JSON parsing safely
      const data = JSON.parse(text || "[]");
      setNotices(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setError("❌ Failed to load notices. Please check API or CORS.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  // ✅ Submit (Add or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.desc || !form.date) {
      alert("Please fill all fields!");
      return;
    }

    const payload = {
      action: editingId ? "update" : "add",
      id: editingId,
      ...form,
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      const result = JSON.parse(text || "{}");

      if (result.status === "success" || result.status === "updated") {
        setMessage(editingId ? "✅ Notice updated!" : "✅ Notice added!");
      } else {
        setMessage("⚠️ Something went wrong. Try again.");
      }

      setForm({ title: "", desc: "", date: "" });
      setEditingId(null);
      fetchNotices();
    } catch (err) {
      console.error(err);
      setError("❌ Failed to save notice. Check server logs.");
    } finally {
      setTimeout(() => {
        setMessage("");
        setError("");
      }, 4000);
    }
  };

  // ✅ Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this notice?")) return;

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "delete", id }),
      });

      const text = await res.text();
      const result = JSON.parse(text || "{}");

      setMessage(
        result.status === "deleted" ? "🗑️ Notice deleted!" : "❌ Failed to delete"
      );
      fetchNotices();
    } catch (err) {
      console.error(err);
      setError("❌ Could not delete the notice. Try again.");
    } finally {
      setTimeout(() => {
        setMessage("");
        setError("");
      }, 4000);
    }
  };

  // ✅ Edit
  const handleEdit = (n) => {
    setForm({ title: n.title, desc: n.desc, date: n.date });
    setEditingId(n.id);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-[#174e2b]">🛠️ Manage Notices</h2>
        <button
          onClick={fetchNotices}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          <FaSyncAlt /> Refresh
        </button>
      </div>

      {/* ✅ Messages */}
      {message && (
        <p className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center">
          {message}
        </p>
      )}
      {error && (
        <p className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">
          {error}
        </p>
      )}

      {/* 📄 Add / Edit Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow mb-6 grid md:grid-cols-3 gap-4"
      >
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Description"
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <div className="col-span-3">
          <button
            type="submit"
            className="mt-2 flex items-center gap-2 bg-[#b48a2e] text-white px-4 py-2 rounded hover:bg-[#946d23]"
          >
            <FaPlus /> {editingId ? "Update Notice" : "Add Notice"}
          </button>
        </div>
      </form>

      {/* 📋 Notices List */}
      {loading ? (
        <p className="text-gray-500 text-center">Loading notices...</p>
      ) : notices.length === 0 ? (
        <p className="text-gray-500 text-center">📭 No notices available.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {notices.map((n) => (
            <div
              key={n.id}
              className="bg-white p-4 rounded shadow flex flex-col justify-between hover:shadow-lg transition"
            >
              <div>
                <h3 className="text-lg font-bold text-primary">{n.title}</h3>
                <p className="text-gray-600">{n.desc}</p>
                <p className="text-sm text-gray-500 mt-1">📅 {n.date}</p>
              </div>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => handleEdit(n)}
                  className="flex items-center gap-1 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  <FaEdit /> Edit
                </button>
                <button
                  onClick={() => handleDelete(n.id)}
                  className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
