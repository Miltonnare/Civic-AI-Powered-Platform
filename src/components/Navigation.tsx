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
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo - Positioned at farthest left */}
          <div className="flex items-center space-x-3 flex-shrink-0 mr-8">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900 whitespace-nowrap">CivicEd Kenya</h1>
              <p className="text-sm text-gray-500 whitespace-nowrap">Empowering Young Kenyans</p>
            </div>
          </div>

          {/* Navigation Items - Centered with proper spacing */}
          <div className="hidden md:flex items-center justify-center flex-1 max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 lg:space-x-4">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`flex items-center space-x-2 px-3 lg:px-4 py-2 rounded-xl transition-all duration-200 font-medium whitespace-nowrap text-sm lg:text-base ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-2 border-blue-200 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-2 border-transparent hover:border-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                    <span className="hidden lg:inline">{tab.label}</span>
                    <span className="lg:hidden text-xs">{tab.label.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side Actions - Positioned at farthest right */}
          <div className="flex items-center space-x-2 lg:space-x-3 flex-shrink-0 ml-4">
            <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors">
              <Bell className="w-5 h-5 lg:w-6 lg:h-6" />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center font-bold text-[10px] lg:text-xs">
                  {notificationCount > 9 ? '9+' : notificationCount}
                </span>
              )}
            </button>
            
            <button 
              onClick={logout}
              className="flex items-center space-x-1 lg:space-x-2 px-2 lg:px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-200"
            >
              <LogOut className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="hidden sm:inline font-medium text-sm lg:text-base">Logout</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Improved layout */}
        <div className="md:hidden border-t bg-white">
          <div className="grid grid-cols-5 gap-1 py-2">
            {tabs.slice(0, 5).map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors ${
                    activeTab === tab.id 
                      ? 'text-blue-700 bg-blue-50' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs mt-1 font-medium">{tab.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
          
          {/* Additional mobile nav items if needed */}
          {tabs.length > 5 && (
            <div className="border-t border-gray-100 py-2">
              <div className="flex justify-center space-x-8">
                {tabs.slice(5).map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => onTabChange(tab.id)}
                      className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                        activeTab === tab.id 
                          ? 'text-blue-700 bg-blue-50' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-xs mt-1 font-medium">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;