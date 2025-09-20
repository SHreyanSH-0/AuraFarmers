import React, { createContext, useContext, useState, ReactNode } from 'react';

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

interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  earned: boolean;
  dateEarned?: string;
}

interface UserProfile {
  name: string;
  location: string;
  farmSize: string;
  primaryCrop: string;
  sustainabilityScore: number;
  level: number;
  totalPoints: number;
  rank: number;
}

interface UserContextType {
  profile: UserProfile;
  missions: Mission[];
  badges: Badge[];
  updateProfile: (profile: Partial<UserProfile>) => void;
  completeMission: (missionId: string) => void;
  updateMissionProgress: (missionId: string, progress: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<UserProfile>({
    name: 'Rajesh Kumar',
    location: 'Kurnool, Andhra Pradesh',
    farmSize: '2.5 acres',
    primaryCrop: 'Cotton',
    sustainabilityScore: 750,
    level: 3,
    totalPoints: 2450,
    rank: 15,
  });

  const [missions, setMissions] = useState<Mission[]>([
    {
      id: '1',
      title: 'Organic Pest Control Challenge',
      description: 'Use neem oil spray for 2 weeks instead of chemical pesticides',
      category: 'organic',
      points: 150,
      duration: '2 weeks',
      difficulty: 'easy',
      completed: false,
      progress: 30,
    },
    {
      id: '2',
      title: 'Water Conservation Mission',
      description: 'Implement drip irrigation in at least 0.5 acres',
      category: 'water',
      points: 300,
      duration: '1 month',
      difficulty: 'medium',
      completed: false,
      progress: 0,
    },
    {
      id: '3',
      title: 'Soil Health Booster',
      description: 'Apply organic compost and test soil pH levels',
      category: 'soil',
      points: 200,
      duration: '3 weeks',
      difficulty: 'medium',
      completed: true,
      progress: 100,
    },
    {
      id: '4',
      title: 'Crop Diversification Quest',
      description: 'Plant intercrop with legumes to improve soil nitrogen',
      category: 'biodiversity',
      points: 250,
      duration: '1 season',
      difficulty: 'hard',
      completed: false,
      progress: 60,
    },
  ]);

  const [badges, setBadges] = useState<Badge[]>([
    {
      id: '1',
      name: 'Organic Pioneer',
      icon: '🌱',
      description: 'Completed first organic farming mission',
      earned: true,
      dateEarned: '2024-01-15',
    },
    {
      id: '2',
      name: 'Water Warrior',
      icon: '💧',
      description: 'Saved 1000+ liters of water through conservation',
      earned: false,
    },
    {
      id: '3',
      name: 'Soil Guardian',
      icon: '🌍',
      description: 'Improved soil health metrics by 20%',
      earned: true,
      dateEarned: '2024-01-08',
    },
    {
      id: '4',
      name: 'Community Leader',
      icon: '👥',
      description: 'Helped 5 farmers adopt sustainable practices',
      earned: false,
    },
  ]);

  const updateProfile = (newProfile: Partial<UserProfile>) => {
    setProfile(prev => ({ ...prev, ...newProfile }));
  };

  const completeMission = (missionId: string) => {
    setMissions(prev =>
      prev.map(mission =>
        mission.id === missionId
          ? { ...mission, completed: true, progress: 100 }
          : mission
      )
    );
  };

  const updateMissionProgress = (missionId: string, progress: number) => {
    setMissions(prev =>
      prev.map(mission =>
        mission.id === missionId
          ? { ...mission, progress: Math.min(100, progress) }
          : mission
      )
    );
  };

  return (
    <UserContext.Provider
      value={{
        profile,
        missions,
        badges,
        updateProfile,
        completeMission,
        updateMissionProgress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};