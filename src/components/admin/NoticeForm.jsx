import { useState, useEffect } from "react";

export default function NoticeForm({ initialData, onSave, onCancel }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDesc(initialData.desc);
      setDate(initialData.date);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc || !date) return;
    onSave({ title, desc, date });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Title"
        className="w-full px-3 py-2 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        className="w-full px-3 py-2 border rounded"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <input
        type="date"
        className="w-full px-3 py-2 border rounded"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <div className="flex gap-3 justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-[#174e2b] text-white rounded hover:bg-green-900"
        >
          Save
        </button>
      </div>
    </form>
  );
}
