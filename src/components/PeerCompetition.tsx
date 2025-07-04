import React, { useState } from 'react';
import { AuthUser } from '../types';
import { ChevronLeft, Users, Trophy, Plus, Search, Clock, Star, Crown, Target, Zap, MessageSquare, Calendar, Award, Flag, Shield } from 'lucide-react';

interface PeerCompetitionProps {
  user: AuthUser;
  onBack: () => void;
}

interface Competition {
  id: string;
  title: string;
  type: 'quiz' | 'debate' | 'study-group' | 'challenge';
  creator: string;
  participants: number;
  maxParticipants: number;
  status: 'open' | 'active' | 'completed';
  startDate: Date;
  endDate: Date;
  prize: string;
  category: 'constitution' | 'devolution' | 'history' | 'civics' | 'rights';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  county?: string;
  school?: string;
}

interface StudyGroup {
  id: string;
  name: string;
  description: string;
  members: number;
  maxMembers: number;
  subject: string;
  meetingTime: string;
  county: string;
  isPrivate: boolean;
  creator: string;
}

interface Challenge {
  id: string;
  challenger: string;
  challenged: string;
  subject: string;
  status: 'pending' | 'accepted' | 'completed';
  createdAt: Date;
  scheduledFor?: Date;
}

const PeerCompetition: React.FC<PeerCompetitionProps> = ({ user, onBack }) => {
  const [activeTab, setActiveTab] = useState<'competitions' | 'study-groups' | 'challenges' | 'leaderboard'>('competitions');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [createType, setCreateType] = useState<'competition' | 'study-group' | 'challenge'>('competition');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const competitions: Competition[] = [
    {
      id: '1',
      title: 'Constitution Quiz Championship',
      type: 'quiz',
      creator: 'Amina Wanjiku',
      participants: 15,
      maxParticipants: 20,
      status: 'open',
      startDate: new Date('2024-02-10'),
      endDate: new Date('2024-02-15'),
      prize: '500 points + Constitution Master badge',
      category: 'constitution',
      difficulty: 'intermediate',
      description: 'Test your knowledge of Kenya\'s 2010 Constitution in this exciting quiz competition.',
      county: 'Nairobi'
    },
    {
      id: '2',
      title: 'Devolution Debate Tournament',
      type: 'debate',
      creator: 'Brian Kipchoge',
      participants: 8,
      maxParticipants: 16,
      status: 'active',
      startDate: new Date('2024-02-08'),
      endDate: new Date('2024-02-20'),
      prize: '750 points + Debate Champion badge',
      category: 'devolution',
      difficulty: 'advanced',
      description: 'Debate the effectiveness of devolution in Kenya with peers from across the country.',
      county: 'All Counties'
    },
    {
      id: '3',
      title: 'Youth Rights Challenge',
      type: 'challenge',
      creator: 'Grace Akinyi',
      participants: 12,
      maxParticipants: 15,
      status: 'open',
      startDate: new Date('2024-02-12'),
      endDate: new Date('2024-02-18'),
      prize: '400 points + Youth Advocate badge',
      category: 'rights',
      difficulty: 'beginner',
      description: 'Learn about youth rights in Kenya through interactive challenges and scenarios.',
      county: 'Kisumu'
    },
    {
      id: '4',
      title: 'History Heroes Quiz',
      type: 'quiz',
      creator: 'David Mwangi',
      participants: 20,
      maxParticipants: 25,
      status: 'completed',
      startDate: new Date('2024-01-25'),
      endDate: new Date('2024-02-01'),
      prize: '600 points + History Expert badge',
      category: 'history',
      difficulty: 'intermediate',
      description: 'Celebrate Kenya\'s independence heroes and historical milestones.',
      county: 'Kiambu'
    }
  ];

  const studyGroups: StudyGroup[] = [
    {
      id: '1',
      name: 'Constitution Study Circle',
      description: 'Weekly discussions on constitutional articles and their practical applications',
      members: 8,
      maxMembers: 12,
      subject: 'Constitution',
      meetingTime: 'Saturdays 2:00 PM',
      county: 'Nairobi',
      isPrivate: false,
      creator: 'Sarah Njeri'
    },
    {
      id: '2',
      name: 'Devolution Explorers',
      description: 'Understanding county governments and their functions across Kenya',
      members: 6,
      maxMembers: 10,
      subject: 'Devolution',
      meetingTime: 'Sundays 4:00 PM',
      county: 'Mombasa',
      isPrivate: false,
      creator: 'Ali Hassan'
    },
    {
      id: '3',
      name: 'KCSE Civic Prep',
      description: 'Intensive preparation for KCSE History and Government exams',
      members: 15,
      maxMembers: 20,
      subject: 'KCSE Preparation',
      meetingTime: 'Weekdays 6:00 PM',
      county: 'Nakuru',
      isPrivate: true,
      creator: 'Mary Wanjiku'
    }
  ];

  const challenges: Challenge[] = [
    {
      id: '1',
      challenger: 'John Kamau',
      challenged: user.name,
      subject: 'Bill of Rights',
      status: 'pending',
      createdAt: new Date('2024-02-05'),
      scheduledFor: new Date('2024-02-10')
    },
    {
      id: '2',
      challenger: user.name,
      challenged: 'Faith Wanjiru',
      subject: 'Electoral System',
      status: 'accepted',
      createdAt: new Date('2024-02-03'),
      scheduledFor: new Date('2024-02-08')
    },
    {
      id: '3',
      challenger: 'Peter Ochieng',
      challenged: user.name,
      subject: 'Judiciary',
      status: 'completed',
      createdAt: new Date('2024-01-28')
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Amina Wanjiku', county: 'Nairobi', points: 4250, badges: 12, wins: 15 },
    { rank: 2, name: 'Brian Kipchoge', county: 'Uasin Gishu', points: 4100, badges: 11, wins: 14 },
    { rank: 3, name: user.name, county: user.county, points: 3250, badges: 8, wins: 10 },
    { rank: 4, name: 'Grace Akinyi', county: 'Kisumu', points: 3180, badges: 9, wins: 12 },
    { rank: 5, name: 'David Mwangi', county: 'Kiambu', points: 3050, badges: 7, wins: 9 },
    { rank: 6, name: 'Sarah Njeri', county: 'Nairobi', points: 2980, badges: 8, wins: 11 },
    { rank: 7, name: 'Ali Hassan', county: 'Mombasa', points: 2850, badges: 6, wins: 8 },
    { rank: 8, name: 'Mary Wanjiku', county: 'Nakuru', points: 2720, badges: 7, wins: 7 }
  ];

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'constitution', name: 'Constitution' },
    { id: 'devolution', name: 'Devolution' },
    { id: 'history', name: 'History' },
    { id: 'civics', name: 'Civics' },
    { id: 'rights', name: 'Rights' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-blue-100 text-blue-800';
      case 'active': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'accepted': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'constitution': return 'bg-yellow-100 text-yellow-800';
      case 'devolution': return 'bg-purple-100 text-purple-800';
      case 'history': return 'bg-red-100 text-red-800';
      case 'civics': return 'bg-blue-100 text-blue-800';
      case 'rights': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-blue-100 text-blue-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredCompetitions = competitions.filter(comp => {
    const matchesCategory = selectedCategory === 'all' || comp.category === selectedCategory;
    const matchesSearch = comp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         comp.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderCompetitions = () => (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search competitions..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Competitions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompetitions.map((competition) => (
          <div key={competition.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-200">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {competition.type === 'quiz' && <Target className="w-5 h-5 text-blue-600" />}
                  {competition.type === 'debate' && <MessageSquare className="w-5 h-5 text-purple-600" />}
                  {competition.type === 'challenge' && <Zap className="w-5 h-5 text-orange-600" />}
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(competition.status)}`}>
                    {competition.status}
                  </span>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(competition.difficulty)}`}>
                  {competition.difficulty}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{competition.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{competition.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Participants:</span>
                  <span className="font-medium">{competition.participants}/{competition.maxParticipants}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Creator:</span>
                  <span className="font-medium">{competition.creator}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">County:</span>
                  <span className="font-medium">{competition.county}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Ends:</span>
                  <span className="font-medium">{competition.endDate.toLocaleDateString()}</span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-3 mb-4">
                <div className="flex items-center space-x-2 mb-1">
                  <Trophy className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-900">Prize</span>
                </div>
                <p className="text-sm text-blue-800">{competition.prize}</p>
              </div>

              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(competition.category)}`}>
                  {competition.category.toUpperCase()}
                </span>
                <button 
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    competition.status === 'open' 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : competition.status === 'active'
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  }`}
                  disabled={competition.status === 'completed'}
                >
                  {competition.status === 'open' ? 'Join' : 
                   competition.status === 'active' ? 'View' : 'Completed'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStudyGroups = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {studyGroups.map((group) => (
          <div key={group.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-200">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    group.isPrivate ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {group.isPrivate ? 'Private' : 'Public'}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{group.members}/{group.maxMembers}</div>
                  <div className="text-xs text-gray-600">members</div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{group.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{group.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Subject:</span>
                  <span className="font-medium">{group.subject}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Meeting:</span>
                  <span className="font-medium">{group.meetingTime}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">County:</span>
                  <span className="font-medium">{group.county}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Creator:</span>
                  <span className="font-medium">{group.creator}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${(group.members / group.maxMembers) * 100}%` }}
                  ></div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  {group.isPrivate ? 'Request' : 'Join'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderChallenges = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-orange-600" />
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(challenge.status)}`}>
                  {challenge.status}
                </span>
              </div>
              <div className="text-right text-sm text-gray-600">
                {challenge.createdAt.toLocaleDateString()}
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Challenger:</span>
                <span className="font-medium">{challenge.challenger}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Challenged:</span>
                <span className="font-medium">{challenge.challenged}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Subject:</span>
                <span className="font-medium">{challenge.subject}</span>
              </div>
              {challenge.scheduledFor && (
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Scheduled:</span>
                  <span className="font-medium">{challenge.scheduledFor.toLocaleDateString()}</span>
                </div>
              )}
            </div>

            <div className="flex space-x-2">
              {challenge.status === 'pending' && challenge.challenged === user.name && (
                <>
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Accept
                  </button>
                  <button className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Decline
                  </button>
                </>
              )}
              {challenge.status === 'accepted' && (
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Start Challenge
                </button>
              )}
              {challenge.status === 'completed' && (
                <button className="w-full bg-gray-300 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed">
                  View Results
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLeaderboard = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-blue-700 rounded-2xl p-8 text-white">
        <div className="text-center">
          <Crown className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">🏆 Top Competitors</h2>
          <p className="text-gray-200">Leading students in peer-to-peer competitions across Kenya</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="p-6 border-b">
          <h3 className="text-lg font-bold text-gray-900">National Leaderboard</h3>
          <p className="text-gray-600">Rankings based on competition wins and points earned</p>
        </div>
        <div className="divide-y">
          {leaderboard.map((student) => (
            <div key={student.rank} className={`p-6 flex items-center justify-between ${
              student.name === user.name ? 'bg-blue-50' : ''
            }`}>
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                  student.rank === 1 ? 'bg-yellow-500' :
                  student.rank === 2 ? 'bg-gray-400' :
                  student.rank === 3 ? 'bg-orange-500' :
                  'bg-blue-600'
                }`}>
                  {student.rank <= 3 ? (
                    student.rank === 1 ? '🥇' : student.rank === 2 ? '🥈' : '🥉'
                  ) : (
                    student.rank
                  )}
                </div>
                <div>
                  <div className="font-bold text-gray-900 flex items-center space-x-2">
                    <span>{student.name}</span>
                    {student.name === user.name && (
                      <span className="text-blue-600 text-sm">(You)</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600">{student.county} County</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-gray-900">{student.points.toLocaleString()} pts</div>
                <div className="text-sm text-gray-600">{student.wins} wins • {student.badges} badges</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const CreateModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Create New</h2>
          <button 
            onClick={() => setShowCreateModal(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            ×
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 gap-3">
            <button 
              onClick={() => setCreateType('competition')}
              className={`p-4 border-2 rounded-lg text-left transition-colors ${
                createType === 'competition' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Trophy className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="font-medium text-gray-900">Competition</div>
                  <div className="text-sm text-gray-600">Create a quiz, debate, or challenge</div>
                </div>
              </div>
            </button>

            <button 
              onClick={() => setCreateType('study-group')}
              className={`p-4 border-2 rounded-lg text-left transition-colors ${
                createType === 'study-group' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-green-600" />
                <div>
                  <div className="font-medium text-gray-900">Study Group</div>
                  <div className="text-sm text-gray-600">Form a collaborative learning group</div>
                </div>
              </div>
            </button>

            <button 
              onClick={() => setCreateType('challenge')}
              className={`p-4 border-2 rounded-lg text-left transition-colors ${
                createType === 'challenge' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Zap className="w-6 h-6 text-orange-600" />
                <div>
                  <div className="font-medium text-gray-900">Direct Challenge</div>
                  <div className="text-sm text-gray-600">Challenge a specific student</div>
                </div>
              </div>
            </button>
          </div>

          <button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
            Continue
          </button>
        </div>
      </div>
    </div>
  );

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
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Users className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Peer Competition</h1>
              <p className="text-gray-600 mt-2">Compete, collaborate, and learn with fellow students</p>
            </div>
          </div>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-xl transition-colors flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Create</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border mb-8">
        <div className="flex space-x-8 p-6">
          {[
            { id: 'competitions', label: 'Competitions', icon: Trophy },
            { id: 'study-groups', label: 'Study Groups', icon: Users },
            { id: 'challenges', label: 'Challenges', icon: Zap },
            { id: 'leaderboard', label: 'Leaderboard', icon: Crown }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      {activeTab === 'competitions' && renderCompetitions()}
      {activeTab === 'study-groups' && renderStudyGroups()}
      {activeTab === 'challenges' && renderChallenges()}
      {activeTab === 'leaderboard' && renderLeaderboard()}

      {/* Create Modal */}
      {showCreateModal && <CreateModal />}
    </div>
  );
};

export default PeerCompetition;