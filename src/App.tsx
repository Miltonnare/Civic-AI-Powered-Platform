import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LandingPage from './components/LandingPage';
import AuthModal from './components/AuthModal';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import LearningModule from './components/LearningModule';
import CivicActions from './components/CivicActions';
import Profile from './components/Profile';
import Challenges from './components/Challenges';
import VideoScenarios from './components/VideoScenarios';
import PeerCompetition from './components/PeerCompetition';
import { kenyanLearningModules, kenyanGovernanceUpdates, kenyanCivicActions, kenyanDailyQuiz } from './data/kenyaData';

const AppContent: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const handleGetStarted = () => {
    setAuthMode('register');
    setShowAuthModal(true);
  };

  const handleLogin = () => {
    setAuthMode('login');
    setShowAuthModal(true);
  };

  if (!user?.isAuthenticated) {
    return (
      <>
        <LandingPage onGetStarted={handleGetStarted} onLogin={handleLogin} />
        <AuthModal 
          isOpen={showAuthModal} 
          onClose={() => setShowAuthModal(false)}
          initialMode={authMode}
        />
      </>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <Dashboard
            user={user}
            recentModules={kenyanLearningModules}
            governanceUpdates={kenyanGovernanceUpdates}
            civicActions={kenyanCivicActions}
            dailyQuiz={kenyanDailyQuiz}
            onStartLearning={() => setActiveTab('learning')}
            onViewCivicActions={() => setActiveTab('civic')}
          />
        );
      case 'learning':
        return (
          <LearningModule
            modules={kenyanLearningModules}
            user={user}
            onBack={() => setActiveTab('dashboard')}
          />
        );
      case 'challenges':
        return (
          <Challenges
            user={user}
            onBack={() => setActiveTab('dashboard')}
          />
        );
      case 'videos':
        return (
          <VideoScenarios
            user={user}
            onBack={() => setActiveTab('dashboard')}
          />
        );
      case 'competition':
        return (
          <PeerCompetition
            user={user}
            onBack={() => setActiveTab('dashboard')}
          />
        );
      case 'civic':
        return (
          <CivicActions
            actions={kenyanCivicActions}
            onBack={() => setActiveTab('dashboard')}
          />
        );
      case 'profile':
        return (
          <Profile
            user={user}
            onBack={() => setActiveTab('dashboard')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        notificationCount={3}
      />
      {/* Add top padding to account for fixed navbar */}
      <div className="pt-16 md:pt-16">
        {renderContent()}
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AppContent />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;