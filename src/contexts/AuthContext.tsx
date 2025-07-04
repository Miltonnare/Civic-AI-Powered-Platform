import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthUser } from '../types';

interface AuthContextType {
  user: AuthUser | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string, county: string, age: number) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('civicEd_user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        // Ensure all required properties are present with default values
        const normalizedUser: AuthUser = {
          id: parsedUser.id || Date.now().toString(),
          email: parsedUser.email || '',
          name: parsedUser.name || '',
          age: parsedUser.age || 17,
          location: parsedUser.location || parsedUser.county || 'Nairobi',
          county: parsedUser.county || 'Nairobi',
          constituency: parsedUser.constituency || 'Central',
          grade: parsedUser.grade || 'Form 4',
          school: parsedUser.school || 'School',
          points: parsedUser.points || 0,
          level: parsedUser.level || 1,
          badges: Array.isArray(parsedUser.badges) ? parsedUser.badges : [],
          completedModules: Array.isArray(parsedUser.completedModules) ? parsedUser.completedModules : [],
          joinedAt: parsedUser.joinedAt ? new Date(parsedUser.joinedAt) : new Date(),
          lastActive: parsedUser.lastActive ? new Date(parsedUser.lastActive) : new Date(),
          isAuthenticated: true
        };
        setUser(normalizedUser);
      } catch (error) {
        localStorage.removeItem('civicEd_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock authentication - in real app, this would be an API call
    if (email && password.length >= 6) {
      // Get user data from registration or create default
      const savedUserData = localStorage.getItem(`civicEd_userData_${email}`);
      let userData = null;
      
      if (savedUserData) {
        userData = JSON.parse(savedUserData);
      } else {
        // Create default user data for demo
        userData = {
          name: email.split('@')[0].replace(/[^a-zA-Z\s]/g, '').replace(/\b\w/g, l => l.toUpperCase()),
          county: 'Nairobi',
          age: 17,
          constituency: 'Starehe',
          grade: 'Form 4',
          school: 'Nairobi School'
        };
      }
      
      const authUser: AuthUser = {
        id: Date.now().toString(),
        email,
        name: userData.name,
        age: userData.age,
        location: userData.county,
        county: userData.county,
        constituency: userData.constituency,
        grade: userData.grade,
        school: userData.school,
        points: userData.points || 0,
        level: userData.level || 1,
        badges: Array.isArray(userData.badges) ? userData.badges : [],
        completedModules: Array.isArray(userData.completedModules) ? userData.completedModules : [],
        joinedAt: userData.joinedAt ? new Date(userData.joinedAt) : new Date(),
        lastActive: new Date(),
        isAuthenticated: true
      };
      
      setUser(authUser);
      localStorage.setItem('civicEd_user', JSON.stringify(authUser));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const register = async (name: string, email: string, password: string, county: string, age: number): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock registration - in real app, this would be an API call
    if (name && email && password.length >= 6 && county && age >= 10) {
      // Generate additional user data based on county
      const constituencies = {
        'Nairobi': ['Starehe', 'Westlands', 'Dagoretti North', 'Langata', 'Kasarani'],
        'Mombasa': ['Mvita', 'Changamwe', 'Jomba', 'Kisauni', 'Nyali', 'Likoni'],
        'Kisumu': ['Kisumu East', 'Kisumu West', 'Kisumu Central', 'Muhoroni', 'Nyando'],
        'Nakuru': ['Nakuru Town East', 'Nakuru Town West', 'Bahati', 'Subukia', 'Rongai']
      };
      
      const grades = age <= 14 ? 'Form 1-2' : age <= 16 ? 'Form 3' : 'Form 4';
      const constituency = constituencies[county as keyof typeof constituencies]?.[0] || 'Central';
      
      const userData = {
        name,
        county,
        age,
        constituency,
        grade: grades,
        school: `${county} School`,
        points: 0,
        level: 1,
        badges: [],
        completedModules: [],
        joinedAt: new Date(),
        lastActive: new Date()
      };
      
      // Save user data for future logins
      localStorage.setItem(`civicEd_userData_${email}`, JSON.stringify(userData));
      
      const authUser: AuthUser = {
        id: Date.now().toString(),
        email,
        name,
        age,
        location: county,
        county,
        constituency,
        grade: grades,
        school: `${county} School`,
        points: 0,
        level: 1,
        badges: [],
        completedModules: [],
        joinedAt: new Date(),
        lastActive: new Date(),
        isAuthenticated: true
      };
      
      setUser(authUser);
      localStorage.setItem('civicEd_user', JSON.stringify(authUser));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('civicEd_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};