import React from 'react';
import { Calendar } from 'lucide-react';

interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  earned: boolean;
  dateEarned?: string;
}

interface BadgeDisplayProps {
  badge: Badge;
  size?: 'sm' | 'md' | 'lg';
}

const BadgeDisplay: React.FC<BadgeDisplayProps> = ({ badge, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-12 h-12 text-2xl',
    lg: 'w-16 h-16 text-3xl',
  };

  return (
    <div className={`flex items-center space-x-3 ${!badge.earned ? 'opacity-50' : ''}`}>
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg`}>
        <span>{badge.icon}</span>
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{badge.name}</h3>
        <p className="text-sm text-gray-600">{badge.description}</p>
        {badge.earned && badge.dateEarned && (
          <div className="flex items-center space-x-1 text-xs text-gray-500 mt-1">
            <Calendar className="h-3 w-3" />
            <span>Earned on {new Date(badge.dateEarned).toLocaleDateString()}</span>
          </div>
        )}
      </div>
      {badge.earned && (
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      )}
    </div>
  );
};

export default BadgeDisplay;