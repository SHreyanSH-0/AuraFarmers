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
import ProgressCard from "./ProgressCard";
import BadgeDisplay from "./BadgeDisplay";

const Dashboard: React.FC = () => {
  const { profile, missions, badges, loading } = useUser();

  // 🔹 Show spinner while loading Firestore data
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  // 🔹 If profile is missing (e.g., not created yet)
  if (!profile) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-gray-600">
        <p className="text-lg">No profile found.</p>
        <p className="text-sm text-gray-500">Please complete signup.</p>
      </div>
    );
  }

  // 🔹 Safe to access profile here
  const activeMissions = missions.filter((m) => !m.completed);
  const completedMissions = missions.filter((m) => m.completed);
  const earnedBadges = badges.filter((b) => b.earned);

  const categoryIcons = {
    organic: Bug,
    water: Droplets,
    soil: Soil,
    biodiversity: Leaf,
  };

  const levelProgress = ((profile.totalPoints % 1000) / 1000) * 100;

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, {profile.name}!</h1>
        <p className="text-green-100">
          Continue your sustainable farming journey
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Sustainability Score */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Sustainability Score</p>
              <p className="text-2xl font-bold text-green-600">
                {profile.sustainabilityScore}
              </p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        {/* Level */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Level</p>
              <p className="text-2xl font-bold text-green-600">{profile.level}</p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Award className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-3">
            <div className="bg-green-100 rounded-full h-2">
              <div
                className="bg-green-600 rounded-full h-2 transition-all duration-500"
                style={{ width: `${levelProgress}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {1000 - (profile.totalPoints % 1000)} points to level{" "}
              {profile.level + 1}
            </p>
          </div>
        </div>

        {/* Active Missions */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Missions</p>
              <p className="text-2xl font-bold text-green-600">
                {activeMissions.length}
              </p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Target className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        {/* Community Rank */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Community Rank</p>
              <p className="text-2xl font-bold text-green-600">
                #{profile.rank}
              </p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Active Missions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Active Missions</h2>
        <div className="space-y-4">
          {activeMissions.slice(0, 3).map((mission) => {
            const IconComponent = categoryIcons[mission.category];
            return (
              <ProgressCard key={mission.id} mission={mission} icon={IconComponent} />
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Achievements */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Recent Achievements
          </h2>
          <div className="space-y-3">
            {earnedBadges.slice(0, 3).map((badge) => (
              <BadgeDisplay key={badge.id} badge={badge} />
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Progress Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Missions Completed</span>
              <span className="font-semibold text-green-600">
                {completedMissions.length}/{missions.length}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Badges Earned</span>
              <span className="font-semibold text-green-600">
                {earnedBadges.length}/{badges.length}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Points</span>
              <span className="font-semibold text-green-600">
                {profile.totalPoints.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
