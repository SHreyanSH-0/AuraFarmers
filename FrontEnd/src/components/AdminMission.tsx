import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const AdminMissions: React.FC = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "organic",
    points: 0,
    duration: "",
    difficulty: "easy",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      await addDoc(collection(db, "missions"), {
        ...form,
        points: Number(form.points),
      });
      setSuccess("✅ Mission added successfully!");
      setForm({
        title: "",
        description: "",
        category: "organic",
        points: 0,
        duration: "",
        difficulty: "easy",
      });
    } catch (err) {
      console.error("Error adding mission:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Add New Mission</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Mission Title"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Mission Description"
          value={form.description}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="organic">Organic</option>
          <option value="water">Water</option>
          <option value="soil">Soil</option>
          <option value="biodiversity">Biodiversity</option>
        </select>
        <input
          type="number"
          name="points"
          placeholder="Points"
          value={form.points}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration (e.g. 2 weeks)"
          value={form.duration}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <select
          name="difficulty"
          value={form.difficulty}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          {loading ? "Adding..." : "Add Mission"}
        </button>
        {success && <p className="text-green-600 text-sm mt-2">{success}</p>}
      </form>
    </div>
  );
};

export default AdminMissions;
