import React from 'react';
import { Home, BookOpen, Trophy, MapPin, User, Bell, LogOut, Play, Users } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  notificationCount?: number;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange, notificationCount = 0 }) => {
  const { logout } = useAuth();
  
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'learning', label: 'Learning', icon: BookOpen },
    { id: 'challenges', label: 'Challenges', icon: Trophy },
    { id: 'videos', label: 'Scenarios', icon: Play },
    { id: 'competition', label: 'Compete', icon: Users },
    { id: 'civic', label: 'Civic Action', icon: MapPin },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="min-w-0">
              <h1 className="text-xl font-bold text-gray-900 truncate">CivicEd Kenya</h1>
              <p className="text-sm text-gray-500 truncate">Empowering Young Kenyans</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6 flex-1 justify-center max-w-4xl">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 font-medium whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-2 border-blue-200 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-2 border-transparent'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden lg:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center space-x-3 flex-shrink-0">
            <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors">
              <Bell className="w-6 h-6" />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {notificationCount > 9 ? '9+' : notificationCount}
                </span>
              )}
            </button>
            
            <button 
              onClick={logout}
              className="flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline font-medium">Logout</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t bg-white">
          <div className="flex justify-around py-2 overflow-x-auto">
            {tabs.slice(0, 5).map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex flex-col items-center p-2 min-w-0 flex-shrink-0 ${
                    activeTab === tab.id ? 'text-blue-700' : 'text-gray-600'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs mt-1 truncate">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;