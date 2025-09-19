import React from "react";

const images = import.meta.glob("/public/gallery/*.{png,jpg,jpeg}", { eager: true });

export default function Gallery() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-heading text-primary mb-6 text-center">School Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Object.values(images).map((img, idx) => (
          <img key={idx} src={img.default} alt={`Gallery ${idx + 1}`} className="rounded-lg shadow-md" />
        ))}
      </div>
    </div>
  );
}