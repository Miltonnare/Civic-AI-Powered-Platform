import { User, Badge, LearningModule, GovernanceUpdate, CivicAction, Quiz } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Sarah Johnson',
  age: 16,
  location: 'Austin, Texas',
  grade: '10th Grade',
  points: 2450,
  level: 8,
  badges: [
    {
      id: '1',
      name: 'Constitution Scholar',
      description: 'Completed all constitutional modules',
      icon: 'scroll',
      earnedAt: new Date('2024-01-15'),
      rarity: 'epic'
    },
    {
      id: '2',
      name: 'Community Advocate',
      description: 'Participated in 5 civic actions',
      icon: 'users',
      earnedAt: new Date('2024-01-20'),
      rarity: 'rare'
    },
    {
      id: '3',
      name: 'Quiz Master',
      description: 'Perfect score on 10 quizzes',
      icon: 'brain',
      earnedAt: new Date('2024-01-25'),
      rarity: 'common'
    }
  ],
  completedModules: ['1', '2', '4']
};

export const learningModules: LearningModule[] = [
  {
    id: '1',
    title: 'Understanding the Constitution',
    description: 'Learn about the foundational document of American democracy',
    category: 'government',
    ageGroup: 'High School',
    difficulty: 3,
    estimatedTime: 45,
    points: 150,
    completed: true,
    progress: 100
  },
  {
    id: '2',
    title: 'Your Rights and Responsibilities',
    description: 'Explore your rights as a citizen and civic duties',
    category: 'rights',
    ageGroup: 'High School',
    difficulty: 2,
    estimatedTime: 30,
    points: 100,
    completed: true,
    progress: 100
  },
  {
    id: '3',
    title: 'Local Government Structure',
    description: 'How your city and county governments work',
    category: 'government',
    ageGroup: 'High School',
    difficulty: 2,
    estimatedTime: 35,
    points: 120,
    completed: false,
    progress: 65
  },
  {
    id: '4',
    title: 'American History: Civil Rights Movement',
    description: 'The struggle for equality and justice in America',
    category: 'history',
    ageGroup: 'High School',
    difficulty: 4,
    estimatedTime: 60,
    points: 200,
    completed: true,
    progress: 100
  },
  {
    id: '5',
    title: 'Democratic Processes and Elections',
    description: 'How elections work and why voting matters',
    category: 'civics',
    ageGroup: 'High School',
    difficulty: 3,
    estimatedTime: 40,
    points: 130,
    completed: false,
    progress: 20
  }
];

export const governanceUpdates: GovernanceUpdate[] = [
  {
    id: '1',
    title: 'New Youth Leadership Program Launched',
    summary: 'Austin City Council announces a new program to engage students in local governance through mentorship and internships.',
    category: 'program',
    location: 'Austin, Texas',
    relevanceScore: 95,
    publishedAt: new Date('2024-01-28'),
    source: 'Austin City Council'
  },
  {
    id: '2',
    title: 'Student Voice in School Board Decisions',
    summary: 'New policy allows high school students to participate in school board meetings with voting representation.',
    category: 'policy',
    location: 'Austin, Texas',
    relevanceScore: 90,
    publishedAt: new Date('2024-01-27'),
    source: 'Austin ISD'
  },
  {
    id: '3',
    title: 'Climate Action Plan Public Input Session',
    summary: 'City seeking input from residents, including students, on the updated climate action plan for 2024-2030.',
    category: 'initiative',
    location: 'Austin, Texas',
    relevanceScore: 85,
    publishedAt: new Date('2024-01-26'),
    source: 'Austin Environmental Department'
  }
];

export const civicActions: CivicAction[] = [
  {
    id: '1',
    title: 'Student Government Elections',
    description: 'Run for student council or volunteer as a campaign manager',
    type: 'event',
    location: 'Austin High School',
    difficulty: 'beginner',
    participants: 45,
    deadline: new Date('2024-02-15')
  },
  {
    id: '2',
    title: 'Community Clean-Up Initiative',
    description: 'Join local environmental group for neighborhood beautification',
    type: 'volunteer',
    location: 'Zilker Park',
    difficulty: 'beginner',
    participants: 120,
    deadline: new Date('2024-02-10')
  },
  {
    id: '3',
    title: 'Youth Climate Action Petition',
    description: 'Support petition for increased renewable energy in schools',
    type: 'petition',
    location: 'Online/Austin',
    difficulty: 'beginner',
    participants: 856
  },
  {
    id: '4',
    title: 'City Council Youth Forum',
    description: 'Participate in monthly forum where students present to city council',
    type: 'debate',
    location: 'Austin City Hall',
    difficulty: 'advanced',
    participants: 25,
    deadline: new Date('2024-02-20')
  }
];

export const dailyQuiz: Quiz = {
  id: 'daily-1',
  question: 'Which amendment to the U.S. Constitution guarantees freedom of speech?',
  options: ['First Amendment', 'Second Amendment', 'Fourth Amendment', 'Fifth Amendment'],
  correctAnswer: 0,
  explanation: 'The First Amendment protects freedom of speech, religion, press, assembly, and petition.',
  points: 25
};