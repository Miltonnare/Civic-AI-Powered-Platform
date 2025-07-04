import React, { useState } from 'react';
import { LearningModule, User } from '../types';
import { BookOpen, Clock, Star, Award, ChevronLeft, Play, CheckCircle, Lock, Flag } from 'lucide-react';

interface LearningModuleProps {
  modules: LearningModule[];
  user: User;
  onBack: () => void;
}

const LearningModuleComponent: React.FC<LearningModuleProps> = ({ modules, user, onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedModule, setSelectedModule] = useState<LearningModule | null>(null);

  const categories = [
    { id: 'all', name: 'All Topics', color: 'gray' },
    { id: 'constitution', name: 'Constitution', color: 'yellow' },
    { id: 'devolution', name: 'Devolution', color: 'purple' },
    { id: 'history', name: 'History', color: 'red' },
    { id: 'civics', name: 'Civics', color: 'green' },
    { id: 'government', name: 'Government', color: 'blue' },
    { id: 'rights', name: 'Rights', color: 'orange' }
  ];

  const filteredModules = selectedCategory === 'all' 
    ? modules 
    : modules.filter(module => module.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      constitution: 'yellow',
      devolution: 'purple',
      history: 'red',
      civics: 'green',
      government: 'blue',
      rights: 'orange'
    };
    return colors[category as keyof typeof colors] || 'gray';
  };

  if (selectedModule) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button 
          onClick={() => setSelectedModule(null)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Modules</span>
        </button>

        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
          <div className={`bg-gradient-to-r from-${getCategoryColor(selectedModule.category)}-500 to-${getCategoryColor(selectedModule.category)}-600 p-8 text-white`}>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h1 className="text-3xl font-bold">{selectedModule.title}</h1>
                  {selectedModule.kenyanContext && (
                    <Flag className="w-6 h-6 text-white" />
                  )}
                </div>
                <p className="text-lg text-white/90">{selectedModule.description}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 mt-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{selectedModule.estimatedTime} minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5" />
                <span>Difficulty: {selectedModule.difficulty}/5</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span>+{selectedModule.points} points</span>
              </div>
              <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
                {selectedModule.curriculum}
              </div>
            </div>

            {selectedModule.progress > 0 && !selectedModule.completed && (
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Progress</span>
                  <span className="text-sm font-medium">{selectedModule.progress}%</span>
                </div>
                <div className="w-full h-2 bg-white/20 rounded-full">
                  <div 
                    className="h-full bg-white rounded-full transition-all"
                    style={{ width: `${selectedModule.progress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Module Content</h3>
                <div className="space-y-4">
                  {[
                    'Introduction and Overview',
                    'Key Concepts and Definitions',
                    'Historical Context',
                    'Modern Applications in Kenya',
                    'Interactive Activities',
                    'Assessment and Review'
                  ].map((section, index) => (
                    <div key={index} className={`flex items-center space-x-3 p-4 rounded-lg border ${
                      index < (selectedModule.progress / 100) * 6 ? 'bg-green-50 border-green-200' : 'bg-gray-50'
                    }`}>
                      {index < (selectedModule.progress / 100) * 6 ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : index === Math.floor((selectedModule.progress / 100) * 6) ? (
                        <Play className="w-6 h-6 text-green-600" />
                      ) : (
                        <Lock className="w-6 h-6 text-gray-400" />
                      )}
                      <div>
                        <h4 className="font-medium text-gray-900">{section}</h4>
                        <p className="text-sm text-gray-600">Section {index + 1} of 6</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-4">Learning Objectives</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Understand core Kenyan civic principles</li>
                    <li>• Apply knowledge to real-world scenarios</li>
                    <li>• Develop critical thinking skills</li>
                    <li>• Connect historical and modern perspectives</li>
                    <li>• Prepare for {selectedModule.curriculum} examinations</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-4">Prerequisites</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    This module is designed for {selectedModule.ageGroup} students following the {selectedModule.curriculum} curriculum.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Age-appropriate content</span>
                    </div>
                    {selectedModule.kenyanContext && (
                      <div className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">Kenya-specific context</span>
                      </div>
                    )}
                  </div>
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                  {selectedModule.completed ? 'Review Module' : selectedModule.progress > 0 ? 'Continue Learning' : 'Start Module'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Dashboard</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Kenya Civic Education Modules</h1>
          <p className="text-gray-600 mt-2">Personalized civic education aligned with Kenyan curricula</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Your Progress</p>
          <p className="text-2xl font-bold text-green-600">
            {user.completedModules.length}/{modules.length} Complete
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              selectedCategory === category.id
                ? `bg-${category.color}-100 text-${category.color}-700 border-${category.color}-200 border`
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModules.map((module) => (
          <div 
            key={module.id} 
            className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-200 overflow-hidden group cursor-pointer"
            onClick={() => setSelectedModule(module)}
          >
            <div className={`h-2 bg-gradient-to-r ${
              module.category === 'constitution' ? 'from-yellow-500 to-yellow-600' :
              module.category === 'devolution' ? 'from-purple-500 to-purple-600' :
              module.category === 'history' ? 'from-red-500 to-red-600' :
              module.category === 'civics' ? 'from-green-500 to-green-600' :
              module.category === 'government' ? 'from-blue-500 to-blue-600' :
              'from-orange-500 to-orange-600'
            }`}></div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  module.category === 'constitution' ? 'bg-yellow-100' :
                  module.category === 'devolution' ? 'bg-purple-100' :
                  module.category === 'history' ? 'bg-red-100' :
                  module.category === 'civics' ? 'bg-green-100' :
                  module.category === 'government' ? 'bg-blue-100' :
                  'bg-orange-100'
                }`}>
                  <BookOpen className={`w-6 h-6 ${
                    module.category === 'constitution' ? 'text-yellow-600' :
                    module.category === 'devolution' ? 'text-purple-600' :
                    module.category === 'history' ? 'text-red-600' :
                    module.category === 'civics' ? 'text-green-600' :
                    module.category === 'government' ? 'text-blue-600' :
                    'text-orange-600'
                  }`} />
                </div>
                
                <div className="flex items-center space-x-2">
                  {module.kenyanContext && (
                    <Flag className="w-4 h-4 text-green-600" />
                  )}
                  {module.completed ? (
                    <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                      <CheckCircle className="w-3 h-3" />
                      <span>Completed</span>
                    </div>
                  ) : module.progress > 0 ? (
                    <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                      <Play className="w-3 h-3" />
                      <span>{module.progress}%</span>
                    </div>
                  ) : (
                    <div className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      Not Started
                    </div>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                {module.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{module.description}</p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{module.estimatedTime}min</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>L{module.difficulty}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1 font-medium text-green-600">
                  <Award className="w-4 h-4" />
                  <span>+{module.points}</span>
                </div>
              </div>

              {module.progress > 0 && !module.completed && (
                <div className="mb-4">
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-green-600 rounded-full transition-all"
                      style={{ width: `${module.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                  module.category === 'constitution' ? 'bg-yellow-100 text-yellow-800' :
                  module.category === 'devolution' ? 'bg-purple-100 text-purple-800' :
                  module.category === 'history' ? 'bg-red-100 text-red-800' :
                  module.category === 'civics' ? 'bg-green-100 text-green-800' :
                  module.category === 'government' ? 'bg-blue-100 text-blue-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {module.category.toUpperCase()}
                </span>
                <div className="text-right">
                  <div className="text-xs text-gray-500">{module.curriculum}</div>
                  <div className="text-xs text-gray-500">{module.ageGroup}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredModules.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No modules found</h3>
          <p className="text-gray-600">Try selecting a different category or check back later for new content.</p>
        </div>
      )}
    </div>
  );
};

export default LearningModuleComponent;