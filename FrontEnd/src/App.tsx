import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Missions from './components/Missions';
import Profile from './components/Profile';
import Leaderboard from './components/Leaderboard';
import Community from './components/Community';
import Navigation from './components/Navigation';
import { UserProvider } from './context/UserContext';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'missions':
        return <Missions />;
      case 'profile':
        return <Profile />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'community':
        return <Community />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <UserProvider>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="container mx-auto px-4 py-6">
          {renderActiveComponent()}
        </main>
      </div>
    </UserProvider>
  );
}

export default App;