import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        body: JSON.stringify({ type: "contact", ...formData }),
        headers: { "Content-Type": "application/json" }
      });
      if (res.ok) {
        setStatus("✅ Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send.");
      }
    } catch (err) {
      setStatus("❌ Error: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg max-w-lg mx-auto space-y-4">
      <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full border p-2 rounded" />
      <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full border p-2 rounded" />
      <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required rows="4" className="w-full border p-2 rounded" />
      <button type="submit" className="bg-primary text-white px-6 py-2 rounded">Send</button>
      {status && <p className="text-center text-sm mt-2">{status}</p>}
    </form>
  );
}