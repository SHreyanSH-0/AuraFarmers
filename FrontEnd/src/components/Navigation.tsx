import React from 'react';
import { Home, Target, User, Trophy, Users, Leaf, MessageCircle } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'missions', label: 'Missions', icon: Target },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { id: 'community', label: 'Community', icon: Users },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-green-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-green-800">FarmQuest</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-green-100 text-green-700 shadow-sm'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
            
            {/* ✅ Ask AI (Botpress only, desktop) */}
            <button
              onClick={() => {
                if ((window as any).botpress) {
                  (window as any).botpress.open(); // Open Botpress widget
                }
              }}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 text-gray-600 hover:bg-gray-100 hover:text-gray-800"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="font-medium">Ask AI</span>
            </button>
          </div>

          {/* Mobile Nav (📱 no extra chat icon here) */}
          <div className="md:hidden flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
