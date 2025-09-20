import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Leaf } from "lucide-react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally validate credentials
    // For now, just navigate to dashboard
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white/90 rounded-2xl shadow-xl border border-green-100">
        <div className="flex flex-col items-center gap-2">
          <span className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-green-600 to-emerald-500 shadow-lg mb-2">
            <Leaf className="h-8 w-8 text-white" />
          </span>
          <h2 className="text-3xl font-extrabold text-green-700 tracking-tight">
            Welcome Back
          </h2>
          <p className="text-green-500 text-sm">
            Log in to your Farm Quest account
          </p>
        </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-sm font-semibold text-green-700">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border-2 border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-green-50 placeholder-green-400"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold text-green-700">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border-2 border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-green-50 placeholder-green-400"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-500 rounded-lg shadow hover:from-emerald-600 hover:to-green-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
