import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Missions from "./components/Missions";
import Profile from "./components/Profile";
import Leaderboard from "./components/Leaderboard";
import Community from "./components/Community";
import Navigation from "./components/Navigation";
import { UserProvider } from "./context/UserContext";
import Login from "./components/Login";
import { useAuth } from "./context/AuthContext";
import AdminMissions from "./components/AdminMission";

function App() {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const { user, loading } = useAuth();

  // 👇 Whenever user logs in/out, reset to dashboard
  useEffect(() => {
    if (user) {
      setActiveTab("dashboard");
    }
  }, [user]);

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "missions":
        return <Missions />;
      case "profile":
        return <Profile />;
      case "leaderboard":
        return <Leaderboard />;
      case "community":
        return <Community />;
      case "admin":
        return <AdminMissions />;
      default:
        return <Dashboard />;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-500 border-dashed rounded-full animate-spin mx-auto"></div>
          <h1 className="mt-6 text-2xl font-bold text-green-700">🌱 Farmer’s App</h1>
          <p className="mt-2 text-gray-600">Preparing your dashboard...</p>
        </div>
      </div>
    );
  }

  return user ? (
    <UserProvider>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="container mx-auto px-4 py-6">{renderActiveComponent()}</main>
      </div>
    </UserProvider>
  ) : (
    <Login />
  );
}

export default App;
