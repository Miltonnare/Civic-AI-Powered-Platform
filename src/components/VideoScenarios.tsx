import React, { useState } from 'react';
import { AuthUser } from '../types';
import { ChevronLeft, Play, Clock, Users, Star, Filter, Search, BookOpen, Shield, Scale, Gavel, AlertTriangle, Eye, ThumbsUp, Share2 } from 'lucide-react';

interface VideoScenariosProps {
  user: AuthUser;
  onBack: () => void;
}

interface VideoScenario {
  id: string;
  title: string;
  description: string;
  category: 'rights' | 'safety' | 'legal' | 'civic' | 'emergency';
  scenario: string;
  duration: string;
  views: number;
  likes: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  thumbnailUrl: string;
  constitutionalArticles: string[];
  keyLearnings: string[];
  relatedLaws: string[];
}

const VideoScenarios: React.FC<VideoScenariosProps> = ({ user, onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<VideoScenario | null>(null);

  const categories = [
    { id: 'all', name: 'All Scenarios', icon: BookOpen, color: 'gray' },
    { id: 'rights', name: 'Your Rights', icon: Scale, color: 'blue' },
    { id: 'safety', name: 'Personal Safety', icon: Shield, color: 'green' },
    { id: 'legal', name: 'Legal Procedures', icon: Gavel, color: 'purple' },
    { id: 'civic', name: 'Civic Duties', icon: Users, color: 'orange' },
    { id: 'emergency', name: 'Emergency Response', icon: AlertTriangle, color: 'red' }
  ];

  const videoScenarios: VideoScenario[] = [
    {
      id: '1',
      title: 'What to Do When Robbed: Your Constitutional Rights',
      description: 'Learn your rights during and after a robbery incident, including police procedures and legal protections under Kenyan law.',
      category: 'safety',
      scenario: 'You are walking home when someone demands your phone and money. What are your rights and what should you do?',
      duration: '8:45',
      views: 15420,
      likes: 1240,
      difficulty: 'beginner',
      thumbnailUrl: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg',
      constitutionalArticles: ['Article 29 (Right to freedom and security)', 'Article 50 (Fair hearing)', 'Article 48 (Access to justice)'],
      keyLearnings: [
        'Your right to personal security under Article 29',
        'How to report crimes to police effectively',
        'Your rights during police questioning',
        'Legal procedures for recovering stolen property',
        'When and how to seek legal aid'
      ],
      relatedLaws: ['Penal Code Cap 63', 'Criminal Procedure Code', 'National Police Service Act']
    },
    {
      id: '2',
      title: 'Police Stop and Search: Know Your Rights',
      description: 'Understanding your constitutional rights during police encounters, including lawful search procedures and your right to remain silent.',
      category: 'rights',
      scenario: 'Police officers stop you on the street and want to search you. What are your rights and what should you expect?',
      duration: '6:30',
      views: 12850,
      likes: 980,
      difficulty: 'intermediate',
      thumbnailUrl: 'https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg',
      constitutionalArticles: ['Article 31 (Right to privacy)', 'Article 49 (Rights of arrested person)', 'Article 50 (Fair hearing)'],
      keyLearnings: [
        'When police can legally search you',
        'Your right to ask for identification',
        'What to do if you feel your rights are violated',
        'How to file a complaint against police misconduct',
        'Understanding reasonable suspicion vs. harassment'
      ],
      relatedLaws: ['National Police Service Act', 'Criminal Procedure Code', 'Independent Policing Oversight Authority Act']
    },
    {
      id: '3',
      title: 'Domestic Violence: Legal Protection and Support',
      description: 'Understanding legal protections against domestic violence, how to seek help, and your rights under Kenyan law.',
      category: 'safety',
      scenario: 'Someone you know is experiencing domestic violence. What legal options and support systems are available?',
      duration: '10:15',
      views: 8960,
      likes: 750,
      difficulty: 'intermediate',
      thumbnailUrl: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg',
      constitutionalArticles: ['Article 29 (Right to freedom and security)', 'Article 53 (Children\'s rights)', 'Article 45 (Family rights)'],
      keyLearnings: [
        'Protection orders and how to obtain them',
        'Emergency contact numbers and safe houses',
        'Legal aid and counseling services',
        'Rights of children in domestic violence situations',
        'Community support systems and reporting mechanisms'
      ],
      relatedLaws: ['Protection Against Domestic Violence Act', 'Children Act', 'Sexual Offences Act']
    },
    {
      id: '4',
      title: 'Corruption Encounter: How to Report and Protect Yourself',
      description: 'What to do when faced with corruption, your rights to refuse bribes, and how to report corrupt officials safely.',
      category: 'civic',
      scenario: 'A government official asks for a bribe to process your documents. How should you respond and what are your options?',
      duration: '7:20',
      views: 11200,
      likes: 890,
      difficulty: 'advanced',
      thumbnailUrl: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg',
      constitutionalArticles: ['Article 73 (Leadership and integrity)', 'Article 232 (Values and principles of public service)', 'Article 10 (National values)'],
      keyLearnings: [
        'Your right to corruption-free services',
        'How to report corruption anonymously',
        'Protection for whistleblowers',
        'Alternative ways to get services without bribes',
        'Understanding the Ethics and Anti-Corruption Commission (EACC)'
      ],
      relatedLaws: ['Anti-Corruption and Economic Crimes Act', 'Public Officer Ethics Act', 'Whistleblower Protection Act']
    },
    {
      id: '5',
      title: 'Workplace Rights: Harassment and Discrimination',
      description: 'Understanding your rights in the workplace, including protection from harassment, discrimination, and unfair treatment.',
      category: 'rights',
      scenario: 'You\'re experiencing harassment or discrimination at work. What are your rights and how can you seek redress?',
      duration: '9:10',
      views: 7650,
      likes: 620,
      difficulty: 'intermediate',
      thumbnailUrl: 'https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg',
      constitutionalArticles: ['Article 27 (Equality and non-discrimination)', 'Article 41 (Labour relations)', 'Article 28 (Human dignity)'],
      keyLearnings: [
        'Types of workplace discrimination and harassment',
        'How to document incidents properly',
        'Internal complaint procedures',
        'Role of Employment and Labour Relations Court',
        'Protection against retaliation'
      ],
      relatedLaws: ['Employment Act', 'Labour Relations Act', 'Occupational Safety and Health Act']
    },
    {
      id: '6',
      title: 'Student Rights: Discipline and Due Process in Schools',
      description: 'Understanding your rights as a student, including fair disciplinary procedures and protection from excessive punishment.',
      category: 'rights',
      scenario: 'You\'re facing disciplinary action at school. What are your rights and what constitutes fair treatment?',
      duration: '6:45',
      views: 9340,
      likes: 780,
      difficulty: 'beginner',
      thumbnailUrl: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg',
      constitutionalArticles: ['Article 53 (Children\'s rights)', 'Article 43 (Right to education)', 'Article 50 (Fair hearing)'],
      keyLearnings: [
        'Your right to education and fair treatment',
        'Proper disciplinary procedures in schools',
        'When corporal punishment is illegal',
        'How to appeal disciplinary decisions',
        'Role of parents and guardians in school discipline'
      ],
      relatedLaws: ['Children Act', 'Education Act', 'Basic Education Act']
    },
    {
      id: '7',
      title: 'Medical Emergency: Rights and Consent',
      description: 'Understanding your rights during medical emergencies, including consent, treatment refusal, and access to healthcare.',
      category: 'emergency',
      scenario: 'You or someone you know needs emergency medical care. What are your rights and what should you expect?',
      duration: '8:00',
      views: 6890,
      likes: 540,
      difficulty: 'intermediate',
      thumbnailUrl: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
      constitutionalArticles: ['Article 43 (Right to health)', 'Article 28 (Human dignity)', 'Article 31 (Right to privacy)'],
      keyLearnings: [
        'Right to emergency medical treatment',
        'Medical consent and informed decision-making',
        'Patient confidentiality and privacy rights',
        'When treatment can be refused',
        'Rights of minors in medical situations'
      ],
      relatedLaws: ['Health Act', 'Mental Health Act', 'Medical Practitioners and Dentists Act']
    },
    {
      id: '8',
      title: 'Peaceful Assembly: Organizing and Participating in Protests',
      description: 'Your constitutional right to peaceful assembly, how to organize lawful demonstrations, and police interaction protocols.',
      category: 'civic',
      scenario: 'You want to organize or participate in a peaceful protest. What are your rights and legal requirements?',
      duration: '7:55',
      views: 10500,
      likes: 850,
      difficulty: 'advanced',
      thumbnailUrl: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg',
      constitutionalArticles: ['Article 37 (Right to assembly)', 'Article 33 (Freedom of expression)', 'Article 36 (Freedom of association)'],
      keyLearnings: [
        'How to notify authorities about peaceful assemblies',
        'Your rights during protests',
        'When police can intervene in assemblies',
        'Difference between peaceful and unlawful assembly',
        'Legal consequences of participating in riots'
      ],
      relatedLaws: ['Public Order Act', 'Penal Code', 'National Police Service Act']
    }
  ];

  const filteredVideos = videoScenarios.filter(video => {
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.scenario.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      rights: 'blue',
      safety: 'green',
      legal: 'purple',
      civic: 'orange',
      emergency: 'red'
    };
    return colors[category as keyof typeof colors] || 'gray';
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-blue-100 text-blue-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (selectedVideo) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button 
          onClick={() => setSelectedVideo(null)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Videos</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="bg-black rounded-xl overflow-hidden mb-6">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-medium">Video Player</p>
                  <p className="text-sm opacity-70">Click to play: {selectedVideo.title}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{selectedVideo.title}</h1>
                  <p className="text-gray-600 mb-4">{selectedVideo.description}</p>
                </div>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${getDifficultyColor(selectedVideo.difficulty)}`}>
                  {selectedVideo.difficulty}
                </span>
              </div>

              <div className="flex items-center space-x-6 mb-6 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{selectedVideo.views.toLocaleString()} views</span>
                </div>
                <div className="flex items-center space-x-1">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{selectedVideo.likes.toLocaleString()} likes</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{selectedVideo.duration}</span>
                </div>
                <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700">
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <h3 className="font-bold text-blue-900 mb-2">🎯 Scenario</h3>
                <p className="text-blue-800">{selectedVideo.scenario}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">📚 Key Learning Points</h3>
                  <ul className="space-y-2">
                    {selectedVideo.keyLearnings.map((learning, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-3">⚖️ Constitutional Articles</h3>
                  <div className="space-y-2">
                    {selectedVideo.constitutionalArticles.map((article, index) => (
                      <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <span className="text-blue-800 font-medium">{article}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-3">📖 Related Laws</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedVideo.relatedLaws.map((law, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {law}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="font-bold text-gray-900 mb-4">📞 Emergency Contacts</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Police Emergency:</span>
                  <span className="font-medium">999 / 911</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Gender Violence:</span>
                  <span className="font-medium">1195</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Child Helpline:</span>
                  <span className="font-medium">116</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Legal Aid:</span>
                  <span className="font-medium">0800 720 710</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="font-bold text-gray-900 mb-4">🏛️ Key Institutions</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-gray-900">Kenya National Commission on Human Rights</div>
                  <div className="text-gray-600">Human rights violations</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Ethics and Anti-Corruption Commission</div>
                  <div className="text-gray-600">Report corruption</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Independent Policing Oversight Authority</div>
                  <div className="text-gray-600">Police misconduct</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">National Legal Aid Service</div>
                  <div className="text-gray-600">Free legal assistance</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-blue-700 rounded-xl p-6 text-white">
              <h3 className="font-bold mb-3">🇰🇪 Know Your Rights</h3>
              <p className="text-sm text-gray-200 mb-4">
                Every Kenyan has fundamental rights protected by the Constitution. Understanding these rights empowers you to seek justice and live with dignity.
              </p>
              <button className="bg-white/20 hover:bg-white/30 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors">
                Download Rights Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
          <Play className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Constitutional Rights Scenarios</h1>
            <p className="text-gray-600 mt-2">Learn what to do in real-life situations using Kenya's Constitution</p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search Scenarios</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by situation, rights, or keywords..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category.id
                        ? `bg-${category.color}-100 text-${category.color}-700 border border-${category.color}-200`
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Video */}
      {filteredVideos.length > 0 && (
        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-blue-700 rounded-2xl p-8 text-white mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Star className="w-6 h-6 text-yellow-300" />
            <h2 className="text-2xl font-bold">Featured Scenario</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-3">{filteredVideos[0].title}</h3>
              <p className="text-gray-200 mb-4">{filteredVideos[0].description}</p>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{filteredVideos[0].duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-5 h-5" />
                  <span>{filteredVideos[0].views.toLocaleString()} views</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>{filteredVideos[0].difficulty}</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedVideo(filteredVideos[0])}
                className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Watch Now</span>
              </button>
            </div>
            <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="font-bold mb-3">🎯 Scenario Preview</h4>
              <p className="text-gray-200 text-sm">{filteredVideos[0].scenario}</p>
            </div>
          </div>
        </div>
      )}

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => {
          const color = getCategoryColor(video.category);
          return (
            <div 
              key={video.id} 
              className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-200 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative">
                <img 
                  src={video.thumbnailUrl} 
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-12 h-12 text-white" />
                </div>
                <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
                <div className={`absolute top-3 left-3 h-1 bg-${color}-500 rounded-full w-full max-w-[60px]`}></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    color === 'blue' ? 'bg-blue-100 text-blue-800' :
                    color === 'green' ? 'bg-green-100 text-green-800' :
                    color === 'purple' ? 'bg-purple-100 text-purple-800' :
                    color === 'orange' ? 'bg-orange-100 text-orange-800' :
                    color === 'red' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {video.category.toUpperCase()}
                  </span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(video.difficulty)}`}>
                    {video.difficulty}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{video.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{(video.views / 1000).toFixed(1)}k</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{video.likes}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-blue-600">
                    <BookOpen className="w-4 h-4" />
                    <span>{video.constitutionalArticles.length} Articles</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 font-medium mb-1">Scenario:</p>
                  <p className="text-sm text-gray-800 line-clamp-2">{video.scenario}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <Play className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No videos found</h3>
          <p className="text-gray-600">Try adjusting your search or category filters.</p>
        </div>
      )}
    </div>
  );
};

export default VideoScenarios;