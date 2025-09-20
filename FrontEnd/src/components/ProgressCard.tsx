import React from 'react';
import { Clock, Star } from 'lucide-react';
import { useUser } from '../context/UserContext';

interface Mission {
  id: string;
  title: string;
  description: string;
  category: 'organic' | 'water' | 'soil' | 'biodiversity';
  points: number;
  duration: string;
  difficulty: 'easy' | 'medium' | 'hard';
  completed: boolean;
  progress: number;
}

interface ProgressCardProps {
  mission: Mission;
  icon: React.ComponentType<{ className?: string }>;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ mission, icon: Icon }) => {
  // ✅ hooks must be inside component
  const { updateMissionProgress, completeMission } = useUser();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'organic': return 'text-green-600 bg-green-100';
      case 'water': return 'text-blue-600 bg-blue-100';
      case 'soil': return 'text-amber-600 bg-amber-100';
      case 'biodiversity': return 'text-emerald-600 bg-emerald-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${getCategoryColor(mission.category)}`}>
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{mission.title}</h3>
            <p className="text-sm text-gray-600">{mission.description}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(mission.difficulty)}`}>
            {mission.difficulty}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-gray-600">
              <Clock className="h-4 w-4" />
              <span>{mission.duration}</span>
            </div>
            <div className="flex items-center space-x-1 text-amber-600">
              <Star className="h-4 w-4" />
              <span>{mission.points} pts</span>
            </div>
          </div>
          <span className="font-medium text-gray-700">{mission.progress}%</span>
        </div>

        <div className="bg-gray-200 rounded-full h-2">
          <div
            className="bg-green-600 rounded-full h-2 transition-all duration-300"
            style={{ width: `${mission.progress}%` }}
          />
        </div>

        {!mission.completed ? (
          <div className="flex space-x-2 pt-2">
            <button
              onClick={() => updateMissionProgress(mission.id, mission.progress + 10)}
              className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200 transition-colors"
            >
              Update Progress
            </button>
            {mission.progress >= 90 && (
              <button
                onClick={() => completeMission(mission.id)}
                className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors"
              >
                Mark Complete
              </button>
            )}
          </div>
        ) : (
          <div className="pt-2">
            <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
              Completed
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressCard;
