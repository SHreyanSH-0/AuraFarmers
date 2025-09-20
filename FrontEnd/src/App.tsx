import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Missions from "./components/Missions";
import Profile from "./components/Profile";
import Leaderboard from "./components/Leaderboard";
import Community from "./components/Community";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { UserProvider } from "./context/UserContext";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

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
      default:
        return <Dashboard />;
    }
  };

  return (
    <UserProvider>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={renderActiveComponent()} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
    </UserProvider>
  );
}

export default App;
