import React from "react";
import { useUser } from "../context/UserContext";
import { Target } from "lucide-react";

const Missions: React.FC = () => {
  const { missions, loading, acceptMission } = useUser();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Available Missions</h1>
        <p className="text-green-100">
          Accept missions and earn points towards your sustainable farming journey.
        </p>
      </div>

      {/* Missions List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {missions.map((mission) => (
          <div
            key={mission.id}
            className="bg-white rounded-xl p-6 shadow-sm border border-green-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center mb-2">
                <Target className="h-6 w-6 text-green-600 mr-2" />
                <h2 className="text-lg font-bold text-gray-800">{mission.title}</h2>
              </div>
              <p className="text-gray-600 mb-3">{mission.description}</p>

              <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                <span>Category: {mission.category}</span>
                <span>Points: {mission.points}</span>
                <span>Duration: {mission.duration}</span>
                <span>Difficulty: {mission.difficulty}</span>
              </div>
            </div>

            {/* Status / Actions */}
            <div className="mt-4">
              {mission.completed ? (
                <span className="px-4 py-2 rounded-lg bg-green-100 text-green-700 text-sm font-medium">
                  Completed
                </span>
              ) : mission.accepted ? (
                <span className="px-4 py-2 rounded-lg bg-blue-100 text-blue-700 text-sm font-medium">
                  Added
                </span>
              ) : (
                <button
                  onClick={() => acceptMission(mission.id)}
                  className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 text-sm font-medium"
                >
                  Accept Mission
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Missions;
