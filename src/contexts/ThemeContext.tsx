
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Theme {
  name: string;
  displayName: string;
  primary: string;
  secondary: string;
  background: string;
  foreground: string;
  accent: string;
  muted: string;
  description: string;
}

export const themes: Theme[] = [
  {
    name: 'classic',
    displayName: 'Classic',
    primary: '222.2 47.4% 11.2%',
    secondary: '210 40% 96.1%',
    background: '0 0% 100%',
    foreground: '222.2 84% 4.9%',
    accent: '210 40% 96.1%',
    muted: '210 40% 96.1%',
    description: 'Clean and professional blue-green gradient'
  },
  {
    name: 'tokamak',
    displayName: 'Tokamak',
    primary: '270 91% 32%',
    secondary: '240 5% 26%',
    background: '216 6% 15%',
    foreground: '0 0% 98%',
    accent: '270 91% 32%',
    muted: '240 5% 26%',
    description: 'Purple plasma with dark magnetic containment'
  },
  {
    name: 'fusion',
    displayName: 'Fusion',
    primary: '39 100% 50%',
    secondary: '20 14.3% 4.1%',
    background: '20 14.3% 4.1%',
    foreground: '0 0% 95%',
    accent: '39 100% 50%',
    muted: '25 5.3% 44.7%',
    description: 'Golden energy of stellar fusion'
  },
  {
    name: 'reactor',
    displayName: 'Reactor',
    primary: '142 76% 36%',
    secondary: '210 40% 8%',
    background: '222.2 84% 4.9%',
    foreground: '210 40% 98%',
    accent: '142 76% 36%',
    muted: '217.2 32.6% 17.5%',
    description: 'Cooling green glow of control rods'
  },
  {
    name: 'neutron',
    displayName: 'Neutron',
    primary: '200 98% 39%',
    secondary: '215 28% 17%',
    background: '222.2 84% 4.9%',
    foreground: '210 40% 98%',
    accent: '200 98% 39%',
    muted: '215 20.2% 65.1%',
    description: 'Electric blue of neutron bombardment'
  }
];

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeName: string) => void;
  themes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('nucleo-theme');
    if (savedTheme) {
      const theme = themes.find(t => t.name === savedTheme);
      if (theme) {
        setCurrentTheme(theme);
      }
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary', currentTheme.primary);
    root.style.setProperty('--secondary', currentTheme.secondary);
    root.style.setProperty('--background', currentTheme.background);
    root.style.setProperty('--foreground', currentTheme.foreground);
    root.style.setProperty('--accent', currentTheme.accent);
    root.style.setProperty('--muted', currentTheme.muted);
    
    localStorage.setItem('nucleo-theme', currentTheme.name);
  }, [currentTheme]);

  const setTheme = (themeName: string) => {
    const theme = themes.find(t => t.name === themeName);
    if (theme) {
      setCurrentTheme(theme);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
