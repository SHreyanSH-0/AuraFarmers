import React, { useState } from 'react';
import { MapPin, Crop, Edit2, Save, X } from 'lucide-react';
import { useUser } from '../context/UserContext';
import BadgeDisplay from './BadgeDisplay';

const Profile: React.FC = () => {
  const { profile, badges, updateProfile, loading } = useUser();

if (loading) {
  return <p>Loading...</p>;
}

if (!profile) {
  return <p>No profile found</p>;
}
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: profile.name,
    location: profile.location,
    farmSize: profile.farmSize,
    primaryCrop: profile.primaryCrop,
  });

  const handleSave = () => {
    updateProfile(editForm);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm({
      name: profile.name,
      location: profile.location,
      farmSize: profile.farmSize,
      primaryCrop: profile.primaryCrop,
    });
    setIsEditing(false);
  };

  const earnedBadges = badges.filter(b => b.earned);
  const totalBadges = badges.length;

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-2xl font-bold text-white">
              {profile.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{profile.name}</h1>
              <p className="text-gray-600">Level {profile.level} Farmer</p>
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Crop className="h-4 w-4" />
                  <span>{profile.primaryCrop} • {profile.farmSize}</span>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center space-x-2 px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
          >
            <Edit2 className="h-4 w-4" />
            <span>Edit Profile</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{profile.sustainabilityScore}</div>
            <div className="text-sm text-gray-600">Sustainability Score</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">#{profile.rank}</div>
            <div className="text-sm text-gray-600">Community Rank</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">{profile.totalPoints.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Points</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">{earnedBadges.length}/{totalBadges}</div>
            <div className="text-sm text-gray-600">Badges Earned</div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">Edit Profile</h2>
              <button
                onClick={handleCancel}
                className="text-gray-600 hover:text-gray-800"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) => setEditForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  value={editForm.location}
                  onChange={(e) => setEditForm(prev => ({ ...prev, location: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Farm Size</label>
                <input
                  type="text"
                  value={editForm.farmSize}
                  onChange={(e) => setEditForm(prev => ({ ...prev, farmSize: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Primary Crop</label>
                <input
                  type="text"
                  value={editForm.primaryCrop}
                  onChange={(e) => setEditForm(prev => ({ ...prev, primaryCrop: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            
            <div className="flex space-x-3 mt-6">
              <button
                onClick={handleSave}
                className="flex-1 flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Save className="h-4 w-4" />
                <span>Save Changes</span>
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Achievements */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Achievements & Badges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {badges.map((badge) => (
            <BadgeDisplay key={badge.id} badge={badge} />
          ))}
        </div>
      </div>

      {/* Progress Overview */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Your Journey</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Level Progress</span>
              <span className="text-sm text-gray-600">Level {profile.level}</span>
            </div>
            <div className="bg-gray-200 rounded-full h-3">
              <div
                className="bg-green-600 rounded-full h-3 transition-all duration-500"
                style={{ width: `${((profile.totalPoints % 1000) / 1000) * 100}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {1000 - (profile.totalPoints % 1000)} points to next level
            </p>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Badge Collection</span>
              <span className="text-sm text-gray-600">{earnedBadges.length}/{totalBadges}</span>
            </div>
            <div className="bg-gray-200 rounded-full h-3">
              <div
                className="bg-yellow-500 rounded-full h-3 transition-all duration-500"
                style={{ width: `${(earnedBadges.length / totalBadges) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;