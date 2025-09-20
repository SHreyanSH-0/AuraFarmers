import React, { useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Extra signup fields
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [farmSize, setFarmSize] = useState("");
  const [primaryCrop, setPrimaryCrop] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isSignup) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        // ✅ Save signup form values into Firestore
        await setDoc(doc(db, "users", user.uid), {
          profile: {
            name: name,
            location: location,
            farmSize: farmSize,
            primaryCrop: primaryCrop,
            sustainabilityScore: 0,
            level: 1,
            totalPoints: 0,
            rank: 0,
          },
          missions: [],
          badges: [],
        });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isSignup ? "Sign Up" : "Log In"}
        </h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        {/* Signup extra fields */}
        {isSignup && (
          <>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border px-3 py-2 rounded mb-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full border px-3 py-2 rounded mb-4"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Farm Size (e.g., 2.5 acres)"
              className="w-full border px-3 py-2 rounded mb-4"
              value={farmSize}
              onChange={(e) => setFarmSize(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Primary Crop"
              className="w-full border px-3 py-2 rounded mb-4"
              value={primaryCrop}
              onChange={(e) => setPrimaryCrop(e.target.value)}
              required
            />
          </>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full border px-3 py-2 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border px-3 py-2 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded transition 
            ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-green-700"}`}
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Loading...</span>
            </>
          ) : isSignup ? (
            "Create Account"
          ) : (
            "Log In"
          )}
        </button>

        <p className="mt-4 text-center text-sm">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            className="text-green-700 cursor-pointer font-medium"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Log in" : "Sign up"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
