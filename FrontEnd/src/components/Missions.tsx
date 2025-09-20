import React, { useState } from 'react';
import { Filter, Plus, Clock, Star, Droplets, Leaf, Voicemail as Soil, Bug } from 'lucide-react';
import { useUser } from '../context/UserContext';
import ProgressCard from './ProgressCard';

const Missions: React.FC = () => {
  const { missions } = useUser();
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'organic' | 'water' | 'soil' | 'biodiversity'>('all');

  const categoryIcons = {
    organic: Bug,
    water: Droplets,
    soil: Soil,
    biodiversity: Leaf,
  };

  const filteredMissions = missions.filter(mission => {
    const statusMatch = filter === 'all' || 
      (filter === 'active' && !mission.completed) ||
      (filter === 'completed' && mission.completed);
    
    const categoryMatch = categoryFilter === 'all' || mission.category === categoryFilter;
    
    return statusMatch && categoryMatch;
  });

  const availableMissions = [
    {
      id: 'new1',
      title: 'Rainwater Harvesting Setup',
      description: 'Install and maintain rainwater collection system',
      category: 'water' as const,
      points: 400,
      duration: '6 weeks',
      difficulty: 'hard' as const,
      completed: false,
      progress: 0,
    },
    {
      id: 'new2',
      title: 'Beneficial Insects Habitat',
      description: 'Create habitat areas to attract natural pest predators',
      category: 'biodiversity' as const,
      points: 200,
      duration: '1 month',
      difficulty: 'medium' as const,
      completed: false,
      progress: 0,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Your Missions</h1>
          <p className="text-gray-600">Complete sustainable farming challenges to earn points and badges</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Filter by:</span>
          </div>
          
          <div className="flex space-x-2">
            {['all', 'active', 'completed'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status as any)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  filter === status
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex space-x-2">
            {['all', 'organic', 'water', 'soil', 'biodiversity'].map((category) => (
              <button
                key={category}
                onClick={() => setCategoryFilter(category as any)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  categoryFilter === category
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{missions.filter(m => !m.completed).length}</div>
            <div className="text-sm text-gray-600">Active Missions</div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{missions.filter(m => m.completed).length}</div>
            <div className="text-sm text-gray-600">Completed Missions</div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {missions.reduce((sum, m) => sum + (m.completed ? m.points : 0), 0)}
            </div>
            <div className="text-sm text-gray-600">Points Earned</div>
          </div>
        </div>
      </div>

      {/* Active Missions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          {filter === 'all' ? 'All Missions' : 
           filter === 'active' ? 'Active Missions' : 'Completed Missions'}
        </h2>
        <div className="space-y-4">
          {filteredMissions.map((mission) => {
            const IconComponent = categoryIcons[mission.category];
            return (
              <ProgressCard
                key={mission.id}
                mission={mission}
                icon={IconComponent}
              />
            );
          })}
        </div>
      </div>

      {/* Available New Missions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">Discover New Missions</h2>
          <Plus className="h-5 w-5 text-gray-600" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {availableMissions.map((mission) => {
            const IconComponent = categoryIcons[mission.category];
            return (
              <div
                key={mission.id}
                className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-green-300 hover:bg-green-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-gray-100">
                    <IconComponent className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{mission.title}</h3>
                    <p className="text-sm text-gray-600">{mission.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{mission.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-amber-600">
                      <Star className="h-4 w-4" />
                      <span>{mission.points} pts</span>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs hover:bg-green-200 transition-colors">
                    Start Mission
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Missions;