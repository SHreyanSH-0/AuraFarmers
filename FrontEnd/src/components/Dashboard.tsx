import React from "react";
import { useUser } from "../context/UserContext";
import ProgressCard from "../components/ProgressCard";
import ImpactCard from "../components/ImpactCard";

const Dashboard: React.FC = () => {
  const { profile, missions, loading } = useUser();

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;

  const acceptedMissions = missions.filter((m) => m.accepted);

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl p-6 shadow-md text-white">
        <h1 className="text-3xl font-bold">Welcome back, {profile?.name} 👋</h1>
        <p className="text-green-100 mt-2">
          Let’s continue making a positive impact today!
        </p>
      </div>

      {/* Missions Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            🌱 Your Active Missions
          </h2>
          <span className="text-sm text-gray-500">
            {acceptedMissions.length} active
          </span>
        </div>

        {acceptedMissions.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-6 text-center border border-gray-200">
            <p className="text-gray-600">
              You haven’t accepted any missions yet. Head over to the{" "}
              <span className="font-semibold text-green-600">Missions</span>{" "}
              page to get started!
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {acceptedMissions.map((mission) => (
              <ProgressCard key={mission.id} mission={mission} icon={() => <></>} />
            ))}
          </div>
        )}
      </div>

      {/* Impact Section */}
      <ImpactCard />
    </div>
  );
};

export default Dashboard;
