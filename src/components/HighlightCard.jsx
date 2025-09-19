// src/components/HighlightCard.jsx
export default function HighlightCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg text-center hover:shadow-lg transition">
      <div className="text-4xl mb-3 text-accent">{icon}</div>
      <h3 className="font-heading text-lg text-primary mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
