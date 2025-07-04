import React from 'react';
import { AuthUser } from '../types';
import { ChevronLeft, MapPin, Award, Star, Calendar, Settings, BookOpen, Trophy, Users, Target } from 'lucide-react';

interface ProfileProps {
  user: AuthUser;
  onBack: () => void;
}

const Profile: React.FC<ProfileProps> = ({ user, onBack }) => {
  // Generate user stats and achievements based on auth user
  const userStats = {
    points: 3250,
    level: 12,
    completedModules: 5,
    badges: 4
  };

  const badges = [
    {
      id: '1',
      name: 'Constitution Champion',
      description: 'Mastered all modules on the 2010 Constitution',
      earnedAt: new Date('2024-01-15'),
      rarity: 'epic'
    },
    {
      id: '2',
      name: 'Devolution Expert',
      description: 'Completed county government modules',
      earnedAt: new Date('2024-01-20'),
      rarity: 'rare'
    },
    {
      id: '3',
      name: 'Youth Leader',
      description: 'Participated in 10 civic activities',
      earnedAt: new Date('2024-01-25'),
      rarity: 'legendary'
    },
    {
      id: '4',
      name: 'Harambee Spirit',
      description: 'Organized community service project',
      earnedAt: new Date('2024-02-01'),
      rarity: 'epic'
    }
  ];

  const getBadgeRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'from-yellow-400 to-yellow-600';
      case 'epic': return 'from-purple-400 to-purple-600';
      case 'rare': return 'from-blue-400 to-blue-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const stats = [
    { label: 'Total Points', value: userStats.points, icon: Star, color: 'text-yellow-600' },
    { label: 'Current Level', value: userStats.level, icon: Trophy, color: 'text-purple-600' },
    { label: 'Modules Completed', value: userStats.completedModules, icon: BookOpen, color: 'text-green-600' },
    { label: 'Badges Earned', value: userStats.badges, icon: Award, color: 'text-blue-600' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ChevronLeft className="w-5 h-5" />
        <span>Back to Dashboard</span>
      </button>

      {/* Profile Header */}
      <div className="bg-gradient-to-r from-green-600 via-black to-red-600 rounded-2xl p-8 text-white mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-3xl font-bold">
              {user.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
              <div className="flex items-center space-x-4 text-green-100">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>{user.county} County, {user.constituency}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>{user.age} years old</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>{user.grade}</span>
                </div>
              </div>
              {user.school && (
                <p className="text-green-100 mt-2">{user.school}</p>
              )}
            </div>
          </div>
          <button className="mt-6 md:mt-0 bg-white/20 hover:bg-white/30 text-white font-medium px-6 py-3 rounded-xl transition-colors flex items-center space-x-2">
            <Settings className="w-5 h-5" />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm border p-6 text-center">
                  <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Level Progress */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Level Progress</h2>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">Level {userStats.level}</div>
                <div className="text-sm text-gray-600">Civic Leader</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Progress to Level {userStats.level + 1}</span>
                <span className="font-medium">{userStats.points % 500}/500 points</span>
              </div>
              <div className="w-full h-4 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-red-500 rounded-full transition-all duration-1000"
                  style={{ width: `${((userStats.points % 500) / 500) * 100}%` }}
                ></div>
              </div>
              <div className="text-sm text-gray-600">
                You need {500 - (userStats.points % 500)} more points to reach the next level
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Next Level Benefits</h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Unlock advanced learning modules</li>
                <li>• Access to leadership opportunities</li>
                <li>• Exclusive civic engagement events</li>
                <li>• Priority in community programs</li>
              </ul>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Completed "Understanding the Constitution"</p>
                  <p className="text-sm text-gray-600">Earned 150 points • 2 days ago</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Earned "Community Advocate" badge</p>
                  <p className="text-sm text-gray-600">For participating in 5 civic actions • 1 week ago</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Joined "Youth Climate Action Petition"</p>
                  <p className="text-sm text-gray-600">Civic engagement activity • 1 week ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Achievements */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Achievements</h3>
            <div className="space-y-4">
              {badges.map((badge) => (
                <div key={badge.id} className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getBadgeRarityColor(badge.rarity)} flex items-center justify-center`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{badge.name}</p>
                    <p className="text-sm text-gray-600">{badge.description}</p>
                    <p className="text-xs text-gray-500">
                      Earned {badge.earnedAt.toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    badge.rarity === 'legendary' ? 'bg-yellow-100 text-yellow-800' :
                    badge.rarity === 'epic' ? 'bg-purple-100 text-purple-800' :
                    badge.rarity === 'rare' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {badge.rarity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Goals */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Current Goals</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">Complete 5 More Modules</h4>
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600 mb-3">Progress: 3/5 completed</p>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="w-3/5 h-full bg-blue-600 rounded-full"></div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">Reach Level 15</h4>
                  <Trophy className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-sm text-gray-600 mb-3">Progress: Level {userStats.level}/15</p>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-purple-600 rounded-full"
                    style={{ width: `${(userStats.level / 15) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Settings</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Email Notifications</span>
                <button className="w-10 h-6 bg-green-600 rounded-full flex items-center justify-end pr-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Daily Reminders</span>
                <button className="w-10 h-6 bg-gray-300 rounded-full flex items-center justify-start pl-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Public Profile</span>
                <button className="w-10 h-6 bg-green-600 rounded-full flex items-center justify-end pr-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;