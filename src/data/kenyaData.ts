import { User, Badge, LearningModule, GovernanceUpdate, CivicAction, Quiz } from '../types';

export const mockKenyanUser: User = {
  id: '1',
  name: 'Amina Wanjiku',
  age: 17,
  location: 'Nairobi',
  county: 'Nairobi',
  constituency: 'Starehe',
  grade: 'Form 4',
  school: 'Nairobi School',
  points: 3250,
  level: 12,
  joinedAt: new Date('2023-09-15'),
  lastActive: new Date(),
  badges: [
    {
      id: '1',
      name: 'Constitution Champion',
      description: 'Mastered all modules on the 2010 Constitution',
      icon: 'scroll',
      earnedAt: new Date('2024-01-15'),
      rarity: 'epic',
      category: 'academic'
    },
    {
      id: '2',
      name: 'Devolution Expert',
      description: 'Completed county government modules',
      icon: 'building',
      earnedAt: new Date('2024-01-20'),
      rarity: 'rare',
      category: 'civic'
    },
    {
      id: '3',
      name: 'Youth Leader',
      description: 'Participated in 10 civic activities',
      icon: 'users',
      earnedAt: new Date('2024-01-25'),
      rarity: 'legendary',
      category: 'leadership'
    },
    {
      id: '4',
      name: 'Harambee Spirit',
      description: 'Organized community service project',
      icon: 'heart',
      earnedAt: new Date('2024-02-01'),
      rarity: 'epic',
      category: 'community'
    }
  ],
  completedModules: ['1', '2', '4', '6', '8']
};

export const kenyanLearningModules: LearningModule[] = [
  {
    id: '1',
    title: 'The Constitution of Kenya 2010',
    description: 'Understanding Kenya\'s supreme law and its key provisions',
    category: 'constitution',
    ageGroup: 'Form 3-4',
    difficulty: 4,
    estimatedTime: 60,
    points: 200,
    completed: true,
    progress: 100,
    kenyanContext: true,
    curriculum: 'KCSE'
  },
  {
    id: '2',
    title: 'Devolution and County Governments',
    description: 'How devolution works in Kenya and the role of county governments',
    category: 'devolution',
    ageGroup: 'Form 2-4',
    difficulty: 3,
    estimatedTime: 45,
    points: 150,
    completed: true,
    progress: 100,
    kenyanContext: true,
    curriculum: 'KCSE'
  },
  {
    id: '3',
    title: 'Kenya\'s Electoral System',
    description: 'Understanding elections, IEBC, and democratic processes',
    category: 'civics',
    ageGroup: 'Form 3-4',
    difficulty: 3,
    estimatedTime: 40,
    points: 130,
    completed: false,
    progress: 75,
    kenyanContext: true,
    curriculum: 'KCSE'
  },
  {
    id: '4',
    title: 'Bill of Rights in Kenya',
    description: 'Your fundamental rights and freedoms under Chapter 4',
    category: 'rights',
    ageGroup: 'Form 1-4',
    difficulty: 2,
    estimatedTime: 35,
    points: 120,
    completed: true,
    progress: 100,
    kenyanContext: true,
    curriculum: 'KCSE'
  },
  {
    id: '5',
    title: 'Kenya\'s Independence Struggle',
    description: 'From colonial rule to independence: Heroes and milestones',
    category: 'history',
    ageGroup: 'Form 2-4',
    difficulty: 3,
    estimatedTime: 50,
    points: 160,
    completed: false,
    progress: 30,
    kenyanContext: true,
    curriculum: 'KCSE'
  },
  {
    id: '6',
    title: 'National Values and Principles',
    description: 'Understanding Kenya\'s core values and national ethos',
    category: 'civics',
    ageGroup: 'Form 1-4',
    difficulty: 2,
    estimatedTime: 30,
    points: 100,
    completed: true,
    progress: 100,
    kenyanContext: true,
    curriculum: 'KCSE'
  },
  {
    id: '7',
    title: 'The Judiciary in Kenya',
    description: 'Court system, rule of law, and access to justice',
    category: 'government',
    ageGroup: 'Form 3-4',
    difficulty: 4,
    estimatedTime: 45,
    points: 140,
    completed: false,
    progress: 0,
    kenyanContext: true,
    curriculum: 'KCSE'
  },
  {
    id: '8',
    title: 'Parliament and Legislation',
    description: 'How laws are made in Kenya: National Assembly and Senate',
    category: 'government',
    ageGroup: 'Form 3-4',
    difficulty: 4,
    estimatedTime: 55,
    points: 170,
    completed: true,
    progress: 100,
    kenyanContext: true,
    curriculum: 'KCSE'
  }
];

export const kenyanGovernanceUpdates: GovernanceUpdate[] = [
  {
    id: '1',
    title: 'New Youth Enterprise Development Fund Guidelines',
    summary: 'The Ministry of Public Service, Youth and Gender Affairs has released new guidelines for youth accessing development funds with simplified application processes.',
    category: 'program',
    location: 'Nairobi',
    county: 'Nairobi',
    level: 'national',
    relevanceScore: 95,
    publishedAt: new Date('2024-01-28'),
    source: 'Ministry of Public Service, Youth and Gender Affairs',
    officialLink: 'https://www.youth.go.ke'
  },
  {
    id: '2',
    title: 'Nairobi County Student Bursary Program 2024',
    summary: 'Nairobi County Government announces Ksh 500 million bursary allocation for needy students in secondary schools and universities.',
    category: 'program',
    location: 'Nairobi',
    county: 'Nairobi',
    level: 'county',
    relevanceScore: 90,
    publishedAt: new Date('2024-01-27'),
    source: 'Nairobi County Government'
  },
  {
    id: '3',
    title: 'Digital Literacy Program in Schools',
    summary: 'Government launches nationwide digital literacy program targeting 1 million students with free tablets and internet connectivity.',
    category: 'initiative',
    location: 'Kenya',
    county: 'All Counties',
    level: 'national',
    relevanceScore: 85,
    publishedAt: new Date('2024-01-26'),
    source: 'Ministry of Education'
  },
  {
    id: '4',
    title: 'Climate Change Act Implementation',
    summary: 'New regulations under the Climate Change Act 2016 require all counties to develop climate action plans with youth participation.',
    category: 'legislation',
    location: 'Kenya',
    county: 'All Counties',
    level: 'national',
    relevanceScore: 80,
    publishedAt: new Date('2024-01-25'),
    source: 'Ministry of Environment and Forestry'
  }
];

export const kenyanCivicActions: CivicAction[] = [
  {
    id: '1',
    title: 'Nairobi Youth Climate Summit 2024',
    description: 'Join young climate activists to discuss environmental challenges and solutions for Nairobi County',
    type: 'event',
    location: 'KICC, Nairobi',
    county: 'Nairobi',
    difficulty: 'intermediate',
    participants: 250,
    deadline: new Date('2024-02-15'),
    organizer: 'Kenya Youth Climate Network',
    ageRestriction: '16-35 years'
  },
  {
    id: '2',
    title: 'Mathare Clean-Up Initiative',
    description: 'Community service project to clean up Mathare River and surrounding areas',
    type: 'volunteer',
    location: 'Mathare, Nairobi',
    county: 'Nairobi',
    difficulty: 'beginner',
    participants: 180,
    deadline: new Date('2024-02-10'),
    organizer: 'Mathare Youth Group'
  },
  {
    id: '3',
    title: 'Petition: Free Sanitary Towels in Schools',
    description: 'Support petition to ensure all public schools provide free sanitary towels to girl students',
    type: 'petition',
    location: 'Online/Kenya',
    county: 'All Counties',
    difficulty: 'beginner',
    participants: 15420,
    organizer: 'Kenya Girl Child Network'
  },
  {
    id: '4',
    title: 'Ward Development Committee Meeting',
    description: 'Participate in your ward\'s development planning meeting and voice youth concerns',
    type: 'forum',
    location: 'Starehe Constituency',
    county: 'Nairobi',
    difficulty: 'advanced',
    participants: 45,
    deadline: new Date('2024-02-20'),
    organizer: 'Starehe Constituency Office'
  },
  {
    id: '5',
    title: 'Youth Baraza on Education',
    description: 'Traditional baraza meeting focusing on education challenges in Nairobi County',
    type: 'barazas',
    location: 'Uhuru Park, Nairobi',
    county: 'Nairobi',
    difficulty: 'intermediate',
    participants: 120,
    deadline: new Date('2024-02-18'),
    organizer: 'Nairobi County Government',
    ageRestriction: '18-35 years'
  }
];

export const kenyanDailyQuiz: Quiz = {
  id: 'daily-kenya-1',
  question: 'Which article of the Constitution of Kenya 2010 establishes devolution?',
  options: ['Article 174', 'Article 1', 'Article 10', 'Article 43'],
  correctAnswer: 0,
  explanation: 'Article 174 of the Constitution establishes devolution as a system of government, outlining the objects and principles of devolved government.',
  points: 30,
  category: 'constitution',
  difficulty: 'medium'
};

// Kenya-specific counties for location data
export const kenyanCounties = [
  'Baringo', 'Bomet', 'Bungoma', 'Busia', 'Elgeyo-Marakwet', 'Embu', 'Garissa', 'Homa Bay',
  'Isiolo', 'Kajiado', 'Kakamega', 'Kericho', 'Kiambu', 'Kilifi', 'Kirinyaga', 'Kisii',
  'Kisumu', 'Kitui', 'Kwale', 'Laikipia', 'Lamu', 'Machakos', 'Makueni', 'Mandera',
  'Marsabit', 'Meru', 'Migori', 'Mombasa', 'Murang\'a', 'Nairobi', 'Nakuru', 'Nandi',
  'Narok', 'Nyamira', 'Nyandarua', 'Nyeri', 'Samburu', 'Siaya', 'Taita-Taveta', 'Tana River',
  'Tharaka-Nithi', 'Trans Nzoia', 'Turkana', 'Uasin Gishu', 'Vihiga', 'Wajir', 'West Pokot'
];