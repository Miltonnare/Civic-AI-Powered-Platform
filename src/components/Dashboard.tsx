import React from 'react';
import { User, LearningModule, GovernanceUpdate, CivicAction, Quiz, AuthUser } from '../types';
import { BookOpen, Award, MapPin, TrendingUp, Clock, Users, Star, ChevronRight, Flag, Building, Zap, Target, Crown, Heart } from 'lucide-react';

interface DashboardProps {
  user: AuthUser;
  recentModules: LearningModule[];
  governanceUpdates: GovernanceUpdate[];
  civicActions: CivicAction[];
  dailyQuiz: Quiz;
  onStartLearning: () => void;
  onViewCivicActions: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({
  user,
  recentModules,
  governanceUpdates,
  civicActions,
  dailyQuiz,
  onStartLearning,
  onViewCivicActions
}) => {
  // Generate user stats based on auth user
  const userStats = {
    points: 3250,
    level: 12,
    completedModules: 5,
    badges: 4
  };

  const progressToNextLevel = ((userStats.points % 500) / 500) * 100;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section - Enhanced with vibrant gradient */}
      <div className="bg-gradient-to-br from-emerald-600 via-green-700 to-teal-800 rounded-3xl p-8 text-white mb-8 shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-400/20 rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
                  <Flag className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm font-medium text-yellow-100">Proudly Kenyan 🇰🇪</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                Habari {user.name}!
              </h1>
              <p className="text-xl text-emerald-100 mb-6 font-medium">Ready to strengthen your civic knowledge and serve Kenya?</p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center space-x-2 bg-white/20 rounded-xl px-4 py-2 backdrop-blur-sm">
                  <Star className="w-5 h-5 text-yellow-300" />
                  <span className="font-bold text-lg">{userStats.points}</span>
                  <span className="text-emerald-100">points</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 rounded-xl px-4 py-2 backdrop-blur-sm">
                  <Crown className="w-5 h-5 text-purple-300" />
                  <span className="font-bold text-lg">Level {userStats.level}</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 rounded-xl px-4 py-2 backdrop-blur-sm">
                  <MapPin className="w-5 h-5 text-blue-300" />
                  <span className="font-medium">{user.county} County</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 rounded-xl px-4 py-2 backdrop-blur-sm">
                  <Building className="w-5 h-5 text-orange-300" />
                  <span className="font-medium">{user.constituency}</span>
                </div>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm border border-white/30">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-yellow-300 mb-1">{userStats.level}</div>
                  <div className="text-emerald-100 text-sm">Civic Leader</div>
                </div>
                <p className="text-sm text-emerald-100 mb-3 text-center">Progress to Level {userStats.level + 1}</p>
                <div className="w-48 h-4 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-1000 shadow-lg"
                    style={{ width: `${progressToNextLevel}%` }}
                  ></div>
                </div>
                <p className="text-xs text-emerald-100 mt-2 text-center">{500 - (userStats.points % 500)} points to next level</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Daily Challenge - Enhanced colors */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-100 p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Daily Kenya Quiz Challenge</h2>
                  <p className="text-gray-600">Test your constitutional knowledge</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full border border-blue-200">
                <Zap className="w-5 h-5" />
                <span className="text-sm font-bold">+{dailyQuiz.points} points</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-6 border border-blue-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🇰🇪</span>
                </div>
                <span className="text-sm font-bold text-blue-800 bg-blue-100 px-3 py-1 rounded-full">Constitution Knowledge</span>
              </div>
              <p className="font-bold text-gray-900 mb-4 text-lg">{dailyQuiz.question}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {dailyQuiz.options.map((option, index) => (
                  <button
                    key={index}
                    className="text-left p-4 bg-white border-2 border-blue-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 hover:shadow-md group"
                  >
                    <span className="font-bold text-blue-600 mr-3 group-hover:text-blue-700">{String.fromCharCode(65 + index)}.</span>
                    <span className="text-gray-800 group-hover:text-gray-900">{option}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Learning Modules - Enhanced colors */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-green-100 p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Continue Learning About Kenya</h2>
                  <p className="text-gray-600">Expand your civic knowledge</p>
                </div>
              </div>
              <button 
                onClick={onStartLearning}
                className="text-green-600 hover:text-green-700 font-bold flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-xl hover:bg-green-100 transition-colors"
              >
                <span>View All</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentModules.slice(0, 4).map((module) => (
                <div key={module.id} className="border-2 border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-green-200 transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg ${
                      module.category === 'history' ? 'bg-gradient-to-br from-red-400 to-red-600' :
                      module.category === 'civics' ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                      module.category === 'government' ? 'bg-gradient-to-br from-gray-400 to-gray-600' :
                      module.category === 'constitution' ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
                      module.category === 'devolution' ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                      'bg-gradient-to-br from-gray-400 to-gray-600'
                    }`}>
                      <BookOpen className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex items-center space-x-2">
                      {module.kenyanContext && (
                        <span className="text-xs bg-gradient-to-r from-green-100 to-red-100 text-green-800 px-3 py-1 rounded-full font-bold border border-green-200">🇰🇪 Kenya</span>
                      )}
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                        module.completed ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200' : 'bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 border border-orange-200'
                      }`}>
                        {module.completed ? 'Completed' : `${module.progress}%`}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg hover:text-green-600 transition-colors">{module.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{module.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{module.estimatedTime} min</span>
                    </div>
                    <span className="font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">+{module.points} pts</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span className="bg-gray-100 px-2 py-1 rounded-full">{module.curriculum}</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-full">{module.ageGroup}</span>
                  </div>
                  {!module.completed && (
                    <div className="mt-4">
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-1000 shadow-sm"
                          style={{ width: `${module.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Enhanced colors */}
        <div className="space-y-6">
          {/* User Info Card - Enhanced */}
          <div className="bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 rounded-2xl shadow-xl p-6 text-white">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-white text-2xl font-bold backdrop-blur-sm border-2 border-white/30">
                {user.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">{user.name}</h3>
                <p className="text-indigo-100">{user.grade} • {user.age} years</p>
                <p className="text-indigo-100">{user.school}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm border border-white/30">
                <div className="text-2xl font-bold text-yellow-300">{userStats.level}</div>
                <div className="text-xs text-indigo-100">Level</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm border border-white/30">
                <div className="text-2xl font-bold text-pink-300">{userStats.badges}</div>
                <div className="text-xs text-indigo-100">Badges</div>
              </div>
            </div>
          </div>

          {/* Local Updates - Enhanced */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-orange-100 p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{user.county} County Updates</h3>
            </div>
            <div className="space-y-4">
              {governanceUpdates.slice(0, 3).map((update) => (
                <div key={update.id} className="pb-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 p-3 rounded-lg transition-colors">
                  <div className="flex items-start space-x-3">
                    <div className={`w-3 h-3 rounded-full mt-2 shadow-sm ${
                      update.category === 'policy' ? 'bg-gradient-to-br from-red-400 to-red-600' :
                      update.category === 'program' ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                      update.category === 'initiative' ? 'bg-gradient-to-br from-green-400 to-green-600' :
                      update.category === 'legislation' ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                      'bg-gradient-to-br from-gray-400 to-gray-600'
                    }`}></div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-bold text-gray-900 text-sm">{update.title}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full font-bold ${
                          update.level === 'national' ? 'bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border border-red-200' :
                          update.level === 'county' ? 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200' :
                          update.level === 'constituency' ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200' :
                          'bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800 border border-gray-200'
                        }`}>
                          {update.level}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-2 leading-relaxed">{update.summary}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="font-medium">{update.source}</span>
                        <span>{update.publishedAt.toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Civic Actions - Enhanced */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-purple-100 p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Civic Opportunities in {user.county}</h3>
              </div>
              <button 
                onClick={onViewCivicActions}
                className="text-purple-600 hover:text-purple-700 text-sm font-bold bg-purple-50 px-3 py-1 rounded-lg hover:bg-purple-100 transition-colors"
              >
                View All
              </button>
            </div>
            <div className="space-y-4">
              {civicActions.slice(0, 3).map((action) => (
                <div key={action.id} className="p-4 border-2 border-gray-100 rounded-xl hover:shadow-md hover:border-purple-200 transition-all duration-200 bg-gradient-to-br from-white to-purple-50">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-gray-900 text-sm">{action.title}</h4>
                    <span className={`px-3 py-1 text-xs rounded-full font-bold ${
                      action.difficulty === 'beginner' ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200' :
                      action.difficulty === 'intermediate' ? 'bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border border-yellow-200' :
                      'bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border border-red-200'
                    }`}>
                      {action.difficulty}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">{action.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span className="font-medium">{action.participants} joined</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-gray-100 px-2 py-1 rounded-full">{action.county}</span>
                      {action.deadline && (
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full font-medium">Due {action.deadline.toLocaleDateString()}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;