import React, { useState } from 'react';
import { AuthUser } from '../types';
import { ChevronLeft, Trophy, Star, Clock, Users, Award, Play, CheckCircle, Flag, Scale, Shield, Vote, Gavel, Heart, Globe } from 'lucide-react';

interface ChallengesProps {
  user: AuthUser;
  onBack: () => void;
}

interface Quiz {
  id: string;
  title: string;
  category: 'civic' | 'human-rights' | 'freedom' | 'governance';
  difficulty: 'easy' | 'medium' | 'hard';
  questions: number;
  timeLimit: number;
  points: number;
  description: string;
  completed: boolean;
  score?: number;
}

const Challenges: React.FC<ChallengesProps> = ({ user, onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const categories = [
    { id: 'all', name: 'All Categories', icon: Trophy, color: 'gray' },
    { id: 'civic', name: 'Civic Education', icon: Vote, color: 'blue' },
    { id: 'human-rights', name: 'Human Rights', icon: Scale, color: 'purple' },
    { id: 'freedom', name: 'Freedom & Liberty', icon: Shield, color: 'green' },
    { id: 'governance', name: 'Governance', icon: Gavel, color: 'red' }
  ];

  const quizzes: Quiz[] = [
    {
      id: '1',
      title: 'Kenya Constitution Fundamentals',
      category: 'civic',
      difficulty: 'medium',
      questions: 10,
      timeLimit: 15,
      points: 150,
      description: 'Test your knowledge of Kenya\'s 2010 Constitution and its key provisions',
      completed: true,
      score: 85
    },
    {
      id: '2',
      title: 'Bill of Rights in Kenya',
      category: 'human-rights',
      difficulty: 'medium',
      questions: 8,
      timeLimit: 12,
      points: 120,
      description: 'Explore fundamental rights and freedoms guaranteed by Chapter 4',
      completed: false
    },
    {
      id: '3',
      title: 'Freedom of Expression',
      category: 'freedom',
      difficulty: 'easy',
      questions: 6,
      timeLimit: 10,
      points: 80,
      description: 'Understanding your right to free speech and its limitations',
      completed: true,
      score: 92
    },
    {
      id: '4',
      title: 'Devolution and County Governments',
      category: 'governance',
      difficulty: 'hard',
      questions: 12,
      timeLimit: 20,
      points: 200,
      description: 'Master the complexities of Kenya\'s devolved government system',
      completed: false
    },
    {
      id: '5',
      title: 'Youth Rights and Participation',
      category: 'human-rights',
      difficulty: 'easy',
      questions: 5,
      timeLimit: 8,
      points: 60,
      description: 'Learn about special rights and opportunities for young Kenyans',
      completed: false
    },
    {
      id: '6',
      title: 'Democratic Processes in Kenya',
      category: 'civic',
      difficulty: 'medium',
      questions: 9,
      timeLimit: 15,
      points: 130,
      description: 'Elections, voting, and democratic participation in Kenya',
      completed: false
    },
    {
      id: '7',
      title: 'Gender Equality and Rights',
      category: 'human-rights',
      difficulty: 'medium',
      questions: 7,
      timeLimit: 12,
      points: 100,
      description: 'Understanding gender equality provisions in Kenyan law',
      completed: true,
      score: 78
    },
    {
      id: '8',
      title: 'Freedom of Assembly and Association',
      category: 'freedom',
      difficulty: 'easy',
      questions: 6,
      timeLimit: 10,
      points: 80,
      description: 'Your rights to peaceful assembly and forming associations',
      completed: false
    }
  ];

  const sampleQuestions = [
    {
      question: "Which article of the Constitution establishes Kenya as a sovereign republic?",
      options: ["Article 1", "Article 2", "Article 3", "Article 4"],
      correct: 0
    },
    {
      question: "What is the minimum age for voting in Kenya?",
      options: ["16 years", "18 years", "21 years", "25 years"],
      correct: 1
    },
    {
      question: "Which chapter of the Constitution contains the Bill of Rights?",
      options: ["Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6"],
      correct: 1
    }
  ];

  const filteredQuizzes = selectedCategory === 'all' 
    ? quizzes 
    : quizzes.filter(quiz => quiz.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      civic: 'blue',
      'human-rights': 'purple',
      freedom: 'green',
      governance: 'red'
    };
    return colors[category as keyof typeof colors] || 'gray';
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleStartQuiz = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setQuizStarted(true);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setQuizCompleted(false);
    setScore(0);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === sampleQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleQuizComplete = () => {
    setSelectedQuiz(null);
    setQuizStarted(false);
    setQuizCompleted(false);
  };

  if (selectedQuiz && quizStarted) {
    if (quizCompleted) {
      const percentage = Math.round((score / sampleQuestions.length) * 100);
      return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-2xl shadow-sm border p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quiz Completed! 🎉</h2>
            <p className="text-xl text-gray-600 mb-6">You scored {score} out of {sampleQuestions.length} questions</p>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">{percentage}%</div>
              <div className="text-gray-600">Final Score</div>
            </div>

            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex items-center space-x-2 text-green-600">
                <Star className="w-5 h-5" />
                <span className="font-medium">+{selectedQuiz.points} points earned</span>
              </div>
              {percentage >= 80 && (
                <div className="flex items-center space-x-2 text-purple-600">
                  <Award className="w-5 h-5" />
                  <span className="font-medium">Badge earned!</span>
                </div>
              )}
            </div>

            <button 
              onClick={handleQuizComplete}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Continue Learning
            </button>
          </div>
        </div>
      );
    }

    const currentQ = sampleQuestions[currentQuestion];
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 via-black to-red-600 p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">{selectedQuiz.title}</h2>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{selectedQuiz.timeLimit} min</span>
                </div>
                <Flag className="w-6 h-6" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>Question {currentQuestion + 1} of {sampleQuestions.length}</span>
              <div className="w-48 h-2 bg-white/20 rounded-full">
                <div 
                  className="h-full bg-white rounded-full transition-all"
                  style={{ width: `${((currentQuestion + 1) / sampleQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">{currentQ.question}</h3>
            
            <div className="space-y-3 mb-8">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    selectedAnswer === index
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === index
                        ? 'border-green-500 bg-green-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedAnswer === index && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="font-medium text-green-600 mr-3">{String.fromCharCode(65 + index)}.</span>
                    <span className="text-gray-900">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-between">
              <button 
                onClick={() => setSelectedQuiz(null)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Exit Quiz
              </button>
              <button 
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                {currentQuestion < sampleQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
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
          <Trophy className="w-8 h-8 text-green-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Challenges & Quizzes</h1>
            <p className="text-gray-600 mt-2">Test your civic knowledge and earn points</p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
        <h3 className="font-semibold text-gray-900 mb-4">Quiz Categories</h3>
        <div className="flex flex-wrap gap-3">
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

      {/* Quizzes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredQuizzes.map((quiz) => {
          const color = getCategoryColor(quiz.category);
          return (
            <div 
              key={quiz.id} 
              className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${
                color === 'blue' ? 'from-blue-500 to-blue-600' :
                color === 'purple' ? 'from-purple-500 to-purple-600' :
                color === 'green' ? 'from-green-500 to-green-600' :
                color === 'red' ? 'from-red-500 to-red-600' :
                'from-gray-500 to-gray-600'
              }`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    color === 'blue' ? 'bg-blue-100' :
                    color === 'purple' ? 'bg-purple-100' :
                    color === 'green' ? 'bg-green-100' :
                    color === 'red' ? 'bg-red-100' :
                    'bg-gray-100'
                  }`}>
                    {quiz.category === 'civic' && <Vote className={`w-6 h-6 text-${color}-600`} />}
                    {quiz.category === 'human-rights' && <Scale className={`w-6 h-6 text-${color}-600`} />}
                    {quiz.category === 'freedom' && <Shield className={`w-6 h-6 text-${color}-600`} />}
                    {quiz.category === 'governance' && <Gavel className={`w-6 h-6 text-${color}-600`} />}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(quiz.difficulty)}`}>
                      {quiz.difficulty}
                    </span>
                    {quiz.completed && (
                      <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                        <CheckCircle className="w-3 h-3" />
                        <span>{quiz.score}%</span>
                      </div>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{quiz.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{quiz.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{quiz.questions} questions</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{quiz.timeLimit} min</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 font-medium text-green-600">
                    <Star className="w-4 h-4" />
                    <span>+{quiz.points}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                    color === 'blue' ? 'bg-blue-100 text-blue-800' :
                    color === 'purple' ? 'bg-purple-100 text-purple-800' :
                    color === 'green' ? 'bg-green-100 text-green-800' :
                    color === 'red' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {quiz.category.replace('-', ' ').toUpperCase()}
                  </span>
                  
                  <button 
                    onClick={() => handleStartQuiz(quiz)}
                    className="flex items-center space-x-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <Play className="w-4 h-4" />
                    <span>{quiz.completed ? 'Retake' : 'Start'}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Coming Soon Section */}
      <div className="bg-gradient-to-r from-green-600 via-black to-red-600 rounded-2xl p-8 text-white">
        <div className="text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold mb-4">🏆 Competitions Coming Soon!</h2>
          <p className="text-xl text-green-100 mb-6">
            Get ready for exciting inter-county competitions and national challenges
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <Globe className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Inter-County Championships</h3>
              <p className="text-sm text-green-100">Compete against students from all 47 counties</p>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <Flag className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Constitution Bowl</h3>
              <p className="text-sm text-green-100">National competition on constitutional knowledge</p>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <Heart className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Civic Action Challenges</h3>
              <p className="text-sm text-green-100">Real-world civic engagement competitions</p>
            </div>
          </div>

          <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
            <h3 className="font-bold text-lg mb-3">🎯 What to Expect:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <ul className="space-y-2 text-sm">
                <li>• Live quiz competitions with real-time leaderboards</li>
                <li>• Team-based challenges representing your county</li>
                <li>• Special badges and recognition for winners</li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li>• Scholarship opportunities for top performers</li>
                <li>• Mentorship programs with civic leaders</li>
                <li>• Exclusive access to government internships</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;