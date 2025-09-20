import React, { useState } from 'react';
import { Trophy, Medal, Crown, MapPin, TrendingUp } from 'lucide-react';

interface FarmerRank {
  id: string;
  name: string;
  location: string;
  sustainabilityScore: number;
  level: number;
  badgeCount: number;
  rank: number;
  isCurrentUser?: boolean;
}

const Leaderboard: React.FC = () => {
  const [timeframe, setTimeframe] = useState<'week' | 'month' | 'all'>('month');
  const [category, setCategory] = useState<'score' | 'badges' | 'level'>('score');

  const farmers: FarmerRank[] = [
    {
      id: '1',
      name: 'Priya Sharma',
      location: 'Nashik, Maharashtra',
      sustainabilityScore: 950,
      level: 5,
      badgeCount: 12,
      rank: 1,
    },
    {
      id: '2',
      name: 'Amit Patel',
      location: 'Anand, Gujarat',
      sustainabilityScore: 920,
      level: 4,
      badgeCount: 11,
      rank: 2,
    },
    {
      id: '3',
      name: 'Sunita Devi',
      location: 'Jaipur, Rajasthan',
      sustainabilityScore: 890,
      level: 4,
      badgeCount: 10,
      rank: 3,
    },
    {
      id: '4',
      name: 'Ramesh Kumar',
      location: 'Coimbatore, Tamil Nadu',
      sustainabilityScore: 860,
      level: 4,
      badgeCount: 9,
      rank: 4,
    },
    {
      id: '15',
      name: 'Rajesh Kumar',
      location: 'Kurnool, Andhra Pradesh',
      sustainabilityScore: 750,
      level: 3,
      badgeCount: 6,
      rank: 15,
      isCurrentUser: true,
    },
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="h-6 w-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="h-6 w-6 text-gray-400" />;
    if (rank === 3) return <Medal className="h-6 w-6 text-amber-600" />;
    return <span className="text-lg font-bold text-gray-600">#{rank}</span>;
  };

  const getRankBg = (rank: number) => {
    if (rank === 1) return 'bg-gradient-to-r from-yellow-400 to-yellow-500';
    if (rank === 2) return 'bg-gradient-to-r from-gray-300 to-gray-400';
    if (rank === 3) return 'bg-gradient-to-r from-amber-400 to-amber-500';
    return 'bg-white';
  };

  const currentUser = farmers.find(f => f.isCurrentUser);
  const topFarmers = farmers.filter(f => !f.isCurrentUser);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Community Leaderboard</h1>
          <p className="text-gray-600">See how you rank against other sustainable farmers</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center space-x-2">
            <Trophy className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">View by:</span>
          </div>
          
          <div className="flex space-x-2">
            {['week', 'month', 'all'].map((time) => (
              <button
                key={time}
                onClick={() => setTimeframe(time as any)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  timeframe === time
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {time === 'all' ? 'All Time' : `This ${time.charAt(0).toUpperCase() + time.slice(1)}`}
              </button>
            ))}
          </div>

          <div className="flex space-x-2">
            {[
              { key: 'score', label: 'Score' },
              { key: 'badges', label: 'Badges' },
              { key: 'level', label: 'Level' },
            ].map((cat) => (
              <button
                key={cat.key}
                onClick={() => setCategory(cat.key as any)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  category === cat.key
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Your Rank Card */}
      {currentUser && (
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-1">Your Current Rank</h2>
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold">#{currentUser.rank}</div>
                <div>
                  <div className="text-green-100">Score: {currentUser.sustainabilityScore}</div>
                  <div className="text-green-100">Level {currentUser.level} • {currentUser.badgeCount} badges</div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-green-100 text-sm">Keep going!</div>
              <div className="flex items-center space-x-1 text-green-100">
                <TrendingUp className="h-4 w-4" />
                <span>+5 ranks this month</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Top 3 Podium */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Top Performers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topFarmers.slice(0, 3).map((farmer, index) => (
            <div
              key={farmer.id}
              className={`relative p-6 rounded-xl text-center text-white ${getRankBg(farmer.rank)}`}
            >
              <div className="mb-4">
                {getRankIcon(farmer.rank)}
              </div>
              <div className="mb-2">
                <h3 className="font-bold text-lg">{farmer.name}</h3>
                <div className="flex items-center justify-center space-x-1 text-sm opacity-90">
                  <MapPin className="h-3 w-3" />
                  <span>{farmer.location}</span>
                </div>
              </div>
              <div className="space-y-1 text-sm">
                <div>Score: {farmer.sustainabilityScore}</div>
                <div>Level {farmer.level} • {farmer.badgeCount} badges</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Leaderboard */}
      <div className="bg-white rounded-xl shadow-sm border border-green-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800">Full Rankings</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {farmers.map((farmer) => (
            <div
              key={farmer.id}
              className={`p-4 flex items-center justify-between hover:bg-gray-50 transition-colors ${
                farmer.isCurrentUser ? 'bg-green-50 border-l-4 border-green-500' : ''
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 flex justify-center">
                  {getRankIcon(farmer.rank)}
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  {farmer.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className={`font-semibold ${farmer.isCurrentUser ? 'text-green-700' : 'text-gray-800'}`}>
                    {farmer.name} {farmer.isCurrentUser && '(You)'}
                  </h3>
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <MapPin className="h-3 w-3" />
                    <span>{farmer.location}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-gray-800">{farmer.sustainabilityScore} pts</div>
                <div className="text-sm text-gray-600">Level {farmer.level} • {farmer.badgeCount} badges</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Goals */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Climb the Ranks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Next Goal</h3>
            <p className="text-sm text-green-700">Earn 110 more points to reach rank #14</p>
            <div className="mt-3 bg-green-200 rounded-full h-2">
              <div className="bg-green-600 rounded-full h-2 w-3/4" />
            </div>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Weekly Challenge</h3>
            <p className="text-sm text-blue-700">Complete 2 missions to earn bonus points</p>
            <div className="mt-3 bg-blue-200 rounded-full h-2">
              <div className="bg-blue-600 rounded-full h-2 w-1/2" />
            </div>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-2">Badge Hunt</h3>
            <p className="text-sm text-purple-700">Earn 3 more badges to unlock special rewards</p>
            <div className="mt-3 bg-purple-200 rounded-full h-2">
              <div className="bg-purple-600 rounded-full h-2 w-2/3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;