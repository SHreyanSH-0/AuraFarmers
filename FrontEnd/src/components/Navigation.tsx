import React from "react";
import {
  Home,
  Target,
  User,
  Trophy,
  Users,
  Leaf,
  MessageCircle,
  Shield
} from "lucide-react";
import ChatBot from "./ChatBot";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useAuth } from "../context/AuthContext";

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  const { user } = useAuth();

  // ✅ Replace this email with your real admin account
  const isAdmin = user?.email == "tiwari@gmail.com";

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "missions", label: "Missions", icon: Target },
    { id: "profile", label: "Profile", icon: User },
    { id: "leaderboard", label: "Leaderboard", icon: Trophy },
    { id: "community", label: "Community", icon: Users },
  ];

  // ✅ Add admin tab only if owner logged in
  if (isAdmin) {
    navItems.push({ id: "admin", label: "Admin", icon: Shield });
  }

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-green-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
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
                        ? "bg-green-100 text-green-700 shadow-sm"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}

              {/* Ask AI button */}
              <button
                onClick={() => setIsChatOpen(true)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 text-gray-600 hover:bg-gray-100 hover:text-gray-800"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="font-medium">Ask AI</span>
              </button>
            </div>

            {/* Right side: mobile AI + logout */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsChatOpen(true)}
                className="p-2 rounded-lg transition-all duration-200 text-gray-600 hover:bg-gray-100"
              >
                <MessageCircle className="h-5 w-5" />
              </button>

              {/* Mobile nav icons */}
              <div className="md:hidden flex space-x-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`p-2 rounded-lg transition-all duration-200 ${
                        activeTab === item.id
                          ? "bg-green-100 text-green-700"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </button>
                  );
                })}
              </div>

              {/* Logout button */}
              <button
                onClick={() => signOut(auth)}
                className="flex items-center gap-2 bg-green-500 text-white font-medium px-4 py-2 rounded-full shadow-md hover:bg-red-600 hover:shadow-lg transition duration-300 ease-in-out"
              >
                <span>🚪</span>
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Chatbot Modal */}
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default Navigation;
