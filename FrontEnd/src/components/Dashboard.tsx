import React from "react";
import {
  TrendingUp,
  Award,
  Target,
  Users,
  Droplets,
  Leaf,
  Voicemail as Soil,
  Bug,
} from "lucide-react";
import { useUser } from "../context/UserContext";
import ProgressCard from "../components/ProgressCard";
import BadgeDisplay from "../components/BadgeDisplay";

const Dashboard: React.FC = () => {
  const { profile, missions, badges, loading } = useUser();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-gray-600">
        <p className="text-lg">No profile found.</p>
        <p className="text-sm text-gray-500">Please complete signup.</p>
      </div>
    );
  }

  const activeMissions = missions.filter((m) => m.accepted && !m.completed);
  const completedMissions = missions.filter((m) => m.completed);
  const earnedBadges = badges.filter((b) => b.earned);

  const categoryIcons = {
    organic: Bug,
    water: Droplets,
    soil: Soil,
    biodiversity: Leaf,
  };

  const levelProgress = ((profile.totalPoints ?? 0) % 1000) / 10;

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, {profile.name || "Farmer"}!</h1>
        <p className="text-green-100">Continue your sustainable farming journey</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Sustainability */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
          <p className="text-sm text-gray-600">Sustainability Score</p>
          <p className="text-2xl font-bold text-green-600">{profile.sustainabilityScore ?? 0}</p>
        </div>

        {/* Level */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
          <p className="text-sm text-gray-600">Level</p>
          <p className="text-2xl font-bold text-green-600">{profile.level ?? 1}</p>
          <div className="mt-2 bg-green-100 rounded-full h-2">
            <div className="bg-green-600 rounded-full h-2" style={{ width: `${levelProgress}%` }} />
          </div>
        </div>

        {/* Active Missions */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
          <p className="text-sm text-gray-600">Active Missions</p>
          <p className="text-2xl font-bold text-green-600">{activeMissions.length}</p>
        </div>

        {/* Rank */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
          <p className="text-sm text-gray-600">Community Rank</p>
          <p className="text-2xl font-bold text-green-600">#{profile.rank ?? 0}</p>
        </div>
      </div>

      {/* Active Missions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Active Missions</h2>
        {activeMissions.length > 0 ? (
          <div className="space-y-4">
            {activeMissions.slice(0, 3).map((mission) => {
              const IconComponent = categoryIcons[mission.category];
              return <ProgressCard key={mission.id} mission={mission} icon={IconComponent} />;
            })}
          </div>
        ) : (
          <p className="text-gray-500">No active missions yet.</p>
        )}
      </div>

      {/* Achievements + Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Achievements</h2>
          {earnedBadges.length > 0 ? (
            earnedBadges.slice(0, 3).map((badge) => <BadgeDisplay key={badge.id} badge={badge} />)
          ) : (
            <p className="text-gray-500">No badges earned yet.</p>
          )}
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Progress Summary</h2>
          <p>Missions Completed: {completedMissions.length}/{missions.length}</p>
          <p>Badges Earned: {earnedBadges.length}/{badges.length}</p>
          <p>Total Points: {(profile.totalPoints ?? 0).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
