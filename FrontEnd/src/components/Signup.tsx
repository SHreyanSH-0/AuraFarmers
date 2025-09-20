import React, { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    location: "",
    farmSize: "",
    primaryCrop: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      // Save profile in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: formData.name,
        location: formData.location,
        farmSize: formData.farmSize,
        primaryCrop: formData.primaryCrop,
        sustainabilityScore: 0,
        level: 1,
        totalPoints: 0,
        rank: 0,
      });
      alert("Signup successful! Please login.");
    } catch (error) {
      console.error("Signup Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSignup}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-xl font-bold mb-4">Farmer Signup 🌱</h2>
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="w-full border p-2 mb-2 rounded"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        className="w-full border p-2 mb-2 rounded"
      />
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        className="w-full border p-2 mb-2 rounded"
      />
      <input
        name="location"
        placeholder="Location"
        onChange={handleChange}
        className="w-full border p-2 mb-2 rounded"
      />
      <input
        name="farmSize"
        placeholder="Farm Size"
        onChange={handleChange}
        className="w-full border p-2 mb-2 rounded"
      />
      <input
        name="primaryCrop"
        placeholder="Primary Crop"
        onChange={handleChange}
        className="w-full border p-2 mb-4 rounded"
      />
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
