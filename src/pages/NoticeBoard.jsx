import { useEffect, useState } from "react";
import { FaBell, FaClock } from "react-icons/fa";

export default function NoticeBoard() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwMxZB89QGhGaG2-hCEbn86XcrQ2rw_BnWqeVIn78mBXM8JDjJiNur7ly8r_JKmMdhn/exec";

  useEffect(() => {
    // Step 1: check localStorage first
    const cached = localStorage.getItem("notices");
    if (cached) {
      setNotices(JSON.parse(cached));
      setLoading(false);
    }

    // Step 2: fetch fresh data in background
    fetch(SCRIPT_URL)
      .then((res) => res.json())
      .then((data) => {
        setNotices(data);
        localStorage.setItem("notices", JSON.stringify(data));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching notices:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-gradient-to-r from-light via-white to-light py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl font-heading text-primary mb-6 flex justify-center items-center gap-2">
          <FaBell className="text-accent" />
          Notice Board
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          Stay updated with the latest announcements and information.
        </p>

        {/* Loader */}
        {loading ? (
          <div className="flex justify-center">
            <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : notices.length === 0 ? (
          <p className="text-gray-500 col-span-3">No notices available.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-10">
            {notices.map((notice, i) => (
              <div
                key={i}
                className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl hover:border-accent transition transform hover:-translate-y-3"
              >
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition">
                  {notice.title}
                </h3>
                <p className="text-gray-600 mb-4">{notice.desc}</p>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <FaClock className="mr-2 text-accent" /> {notice.date}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
