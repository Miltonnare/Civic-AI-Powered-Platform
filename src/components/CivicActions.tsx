import React, { useState } from 'react';
import { CivicAction } from '../types';
import { ChevronLeft, MapPin, Users, Calendar, Clock, ExternalLink, Star, Trophy, Heart, MessageSquare, Building, Flag } from 'lucide-react';

interface CivicActionsProps {
  actions: CivicAction[];
  onBack: () => void;
}

const CivicActions: React.FC<CivicActionsProps> = ({ actions, onBack }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const filters = [
    { id: 'all', name: 'All Actions', icon: Star },
    { id: 'event', name: 'Events', icon: Calendar },
    { id: 'volunteer', name: 'Volunteer', icon: Heart },
    { id: 'petition', name: 'Petitions', icon: MessageSquare },
    { id: 'debate', name: 'Debates', icon: Trophy },
    { id: 'forum', name: 'Forums', icon: Users },
    { id: 'barazas', name: 'Barazas', icon: Building }
  ];

  const difficulties = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const filteredActions = actions.filter(action => {
    const matchesFilter = selectedFilter === 'all' || action.type === selectedFilter;
    const matchesDifficulty = selectedDifficulty === 'all' || action.difficulty === selectedDifficulty;
    return matchesFilter && matchesDifficulty;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'event': return Calendar;
      case 'volunteer': return Heart;
      case 'petition': return MessageSquare;
      case 'debate': return Trophy;
      case 'forum': return Users;
      case 'barazas': return Building;
      default: return Star;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'event': return 'blue';
      case 'volunteer': return 'green';
      case 'petition': return 'purple';
      case 'debate': return 'red';
      case 'forum': return 'yellow';
      case 'barazas': return 'orange';
      default: return 'gray';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-4"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Dashboard</span>
        </button>
        <div className="flex items-center space-x-3 mb-4">
          <Flag className="w-8 h-8 text-green-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Civic Action Opportunities in Kenya</h1>
            <p className="text-gray-600 mt-2">Get involved in your community and make a difference across all 47 counties</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Action Type</h3>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => {
                const Icon = filter.icon;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedFilter === filter.id
                        ? 'bg-green-100 text-green-700 border border-green-200'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{filter.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Difficulty Level</h3>
            <div className="flex flex-wrap gap-2">
              {difficulties.map((difficulty) => (
                <button
                  key={difficulty.id}
                  onClick={() => setSelectedDifficulty(difficulty.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedDifficulty === difficulty.id
                      ? 'bg-green-100 text-green-700 border border-green-200'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {difficulty.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Action */}
      {filteredActions.length > 0 && (
        <div className="bg-gradient-to-r from-green-600 via-black to-red-600 rounded-2xl p-8 text-white mb-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Featured Opportunity</h2>
                  <p className="text-green-100">Highly recommended for young Kenyans</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{filteredActions[0].title}</h3>
              <p className="text-green-100 mb-4">{filteredActions[0].description}</p>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>{filteredActions[0].location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building className="w-5 h-5" />
                  <span>{filteredActions[0].county} County</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>{filteredActions[0].participants} participants</span>
                </div>
                {filteredActions[0].deadline && (
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span>Due {filteredActions[0].deadline.toLocaleDateString()}</span>
                  </div>
                )}
              </div>
              <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors">
                Get Involved
              </button>
            </div>
            <div className="ml-8 text-center">
              <div className="bg-white/20 rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">{filteredActions[0].participants}</div>
                <div className="text-sm text-green-100">Kenyans Joined</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredActions.map((action) => {
          const Icon = getTypeIcon(action.type);
          const color = getTypeColor(action.type);
          
          return (
            <div 
              key={action.id} 
              className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-200 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${
                color === 'blue' ? 'from-blue-500 to-blue-600' :
                color === 'green' ? 'from-green-500 to-green-600' :
                color === 'purple' ? 'from-purple-500 to-purple-600' :
                color === 'red' ? 'from-red-500 to-red-600' :
                color === 'yellow' ? 'from-yellow-500 to-yellow-600' :
                color === 'orange' ? 'from-orange-500 to-orange-600' :
                'from-gray-500 to-gray-600'
              }`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    color === 'blue' ? 'bg-blue-100' :
                    color === 'green' ? 'bg-green-100' :
                    color === 'purple' ? 'bg-purple-100' :
                    color === 'red' ? 'bg-red-100' :
                    color === 'yellow' ? 'bg-yellow-100' :
                    color === 'orange' ? 'bg-orange-100' :
                    'bg-gray-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      color === 'blue' ? 'text-blue-600' :
                      color === 'green' ? 'text-green-600' :
                      color === 'purple' ? 'text-purple-600' :
                      color === 'red' ? 'text-red-600' :
                      color === 'yellow' ? 'text-yellow-600' :
                      color === 'orange' ? 'text-orange-600' :
                      'text-gray-600'
                    }`} />
                  </div>
                  
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(action.difficulty)}`}>
                    {action.difficulty}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {action.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{action.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{action.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Building className="w-4 h-4" />
                    <span>{action.county} County</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{action.participants} people joined</span>
                  </div>
                  {action.deadline && (
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>Deadline: {action.deadline.toLocaleDateString()}</span>
                    </div>
                  )}
                  {action.ageRestriction && (
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>Age: {action.ageRestriction}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                    color === 'blue' ? 'bg-blue-100 text-blue-800' :
                    color === 'green' ? 'bg-green-100 text-green-800' :
                    color === 'purple' ? 'bg-purple-100 text-purple-800' :
                    color === 'red' ? 'bg-red-100 text-red-800' :
                    color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                    color === 'orange' ? 'bg-orange-100 text-orange-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {action.type.toUpperCase()}
                  </span>
                  
                  <button className="flex items-center space-x-1 text-green-600 hover:text-green-700 text-sm font-medium">
                    <span>Learn More</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                    Organized by {action.organizer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredActions.length === 0 && (
        <div className="text-center py-12">
          <Trophy className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No opportunities found</h3>
          <p className="text-gray-600">Try adjusting your filters or check back later for new opportunities.</p>
        </div>
      )}
    </div>
  );
};

export default CivicActions;