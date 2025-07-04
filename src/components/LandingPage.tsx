import React from 'react';
import { BookOpen, Users, Award, MapPin, TrendingUp, CheckCircle, Star, ArrowRight, Play, Globe, Shield, Zap } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted, onLogin }) => {
  const features = [
    {
      icon: BookOpen,
      title: 'Personalized Learning',
      description: 'AI-curated content aligned with CBC and KCSE curricula, adapted to your learning pace and location.'
    },
    {
      icon: Award,
      title: 'Gamified Experience',
      description: 'Earn badges, compete on leaderboards, and unlock achievements as you master civic knowledge.'
    },
    {
      icon: MapPin,
      title: 'Local Governance Updates',
      description: 'Stay informed about county policies, youth programs, and civic opportunities in your area.'
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description: 'Connect with peers, join civic actions, and participate in local governance initiatives.'
    }
  ];

  const stats = [
    { number: '47', label: 'Counties Covered', icon: Globe },
    { number: '10K+', label: 'Active Students', icon: Users },
    { number: '500+', label: 'Learning Modules', icon: BookOpen },
    { number: '95%', label: 'Success Rate', icon: TrendingUp }
  ];

  const testimonials = [
    {
      name: 'Amina Wanjiku',
      location: 'Nairobi County',
      grade: 'Form 4',
      quote: 'This platform helped me understand devolution and my rights as a Kenyan citizen. I even participated in my ward\'s development meeting!',
      avatar: 'AW'
    },
    {
      name: 'Brian Kipchoge',
      location: 'Uasin Gishu County',
      grade: 'Form 3',
      quote: 'The gamified learning made studying the Constitution fun. I earned the Constitution Champion badge and improved my History grades!',
      avatar: 'BK'
    },
    {
      name: 'Grace Akinyi',
      location: 'Kisumu County',
      grade: 'Form 2',
      quote: 'I learned about my county government and joined a youth climate action group. Now I\'m making a real difference in my community.',
      avatar: 'GA'
    }
  ];

  const handleQuizSubmit = () => {
    onLogin();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">CivicEd Kenya</h1>
                <p className="text-sm text-gray-500">Empowering Young Kenyans</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button 
                onClick={onLogin}
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Sign In
              </button>
              <button 
                onClick={onGetStarted}
                className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-gray-600">Proudly Kenyan</span>
              </div>
              
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Master Civic Education with 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-blue-600"> AI-Powered Learning</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join thousands of Kenyan students learning about the Constitution, devolution, and civic participation through personalized, gamified education tailored to your county and curriculum.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={onGetStarted}
                  className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <span>Start Learning Free</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-8 py-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>Free for all students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>CBC & KCSE aligned</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>All 47 counties</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-blue-600 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Today's Challenge</h3>
                    <p className="text-sm text-gray-600">Constitution Quiz</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="font-medium text-gray-900 mb-3">
                    Which article establishes devolution in Kenya's Constitution?
                  </p>
                  <div className="space-y-2">
                    {['Article 174', 'Article 1', 'Article 10', 'Article 43'].map((option, index) => (
                      <button
                        key={index}
                        className="w-full text-left p-3 bg-white border rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                      >
                        <span className="font-medium text-blue-600 mr-2">{String.fromCharCode(65 + index)}.</span>
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium">+30 points</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-medium">Level 12</span>
                    </div>
                  </div>
                  <button 
                    onClick={handleQuizSubmit}
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors"
                  >
                    Submit Answer
                  </button>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium">
                🏆 Top Student
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                🇰🇪 Nairobi County
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose CivicEd Kenya?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with deep understanding of Kenyan civic education needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border hover:shadow-lg transition-all duration-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Students Are Saying
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from students across Kenya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.grade} • {testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Become an Informed Kenyan Citizen?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of students already mastering civic education across all 47 counties
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onGetStarted}
              className="bg-white text-gray-800 font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button 
              onClick={onLogin}
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-gray-800 transition-colors"
            >
              Already Have Account?
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-8 text-gray-200">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5" />
              <span>Instant Access</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5" />
              <span>All Counties</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-blue-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">CivicEd Kenya</h3>
                  <p className="text-sm text-gray-400">Empowering Young Kenyans</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Revolutionizing civic education for the next generation of Kenyan leaders.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Learning Modules</a></li>
                <li><a href="#" className="hover:text-white">Civic Actions</a></li>
                <li><a href="#" className="hover:text-white">Achievements</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Constitution Guide</a></li>
                <li><a href="#" className="hover:text-white">County Information</a></li>
                <li><a href="#" className="hover:text-white">Youth Programs</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 CivicEd Kenya. All rights reserved. Made with ❤️ for Kenya.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;