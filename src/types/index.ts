export interface User {
  id: string;
  name: string;
  age: number;
  location: string;
  county: string;
  constituency: string;
  grade: string;
  school?: string;
  points: number;
  level: number;
  badges: Badge[];
  completedModules: string[];
  joinedAt: Date;
  lastActive: Date;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt: Date;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  category: 'academic' | 'civic' | 'leadership' | 'community';
}

export interface LearningModule {
  id: string;
  title: string;
  description: string;
  category: 'history' | 'civics' | 'government' | 'rights' | 'constitution' | 'devolution';
  ageGroup: string;
  difficulty: number;
  estimatedTime: number;
  points: number;
  completed: boolean;
  progress: number;
  kenyanContext: boolean;
  curriculum: 'CBC' | 'KCSE' | 'General';
}

export interface GovernanceUpdate {
  id: string;
  title: string;
  summary: string;
  category: 'policy' | 'initiative' | 'program' | 'announcement' | 'legislation';
  location: string;
  county: string;
  level: 'national' | 'county' | 'ward' | 'constituency';
  relevanceScore: number;
  publishedAt: Date;
  source: string;
  officialLink?: string;
}

export interface CivicAction {
  id: string;
  title: string;
  description: string;
  type: 'event' | 'petition' | 'volunteer' | 'debate' | 'forum' | 'barazas';
  location: string;
  county: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  participants: number;
  deadline?: Date;
  organizer: string;
  ageRestriction?: string;
}

export interface Quiz {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  points: number;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface AuthUser extends User {
  email: string;
  isAuthenticated: boolean;
}