
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Atom, Palette, Check } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import UserProfile from './UserProfile';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Why Nuclear?', href: '#why-nuclear' },
    { name: 'Get Involved', href: '#get-involved' },
    { name: 'News', href: '#news' },
    { name: 'Partners', href: '#partners' }
  ];

  const themes = [
    { name: 'Light', value: 'light' },
    { name: 'Dark', value: 'dark' },
    { name: 'Tokamak', value: 'tokamak' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'tokamak') => {
    setTheme(newTheme);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 tokamak:bg-gray-950/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 tokamak:border-purple-900/30 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Atom className="w-8 h-8 text-blue-600 tokamak:text-pink-400" />
              <div className="absolute inset-0 bg-blue-600/20 tokamak:bg-pink-400/20 rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 tokamak:from-pink-400 tokamak:to-purple-400 bg-clip-text text-transparent">
              Nucleo
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 dark:text-gray-300 tokamak:text-purple-200 hover:text-blue-600 dark:hover:text-blue-400 tokamak:hover:text-pink-400 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 tokamak:bg-pink-400 transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <UserProfile />
            <Button className="bg-gradient-to-r from-blue-600 to-green-600 tokamak:from-pink-500 tokamak:to-purple-500 hover:from-blue-700 hover:to-green-700 tokamak:hover:from-pink-600 tokamak:hover:to-purple-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
              Join the Movement
            </Button>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <UserProfile />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 tokamak:text-purple-200 hover:text-blue-600 dark:hover:text-blue-400 tokamak:hover:text-pink-400 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in bg-white/95 dark:bg-gray-900/95 tokamak:bg-gray-950/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 tokamak:border-purple-900/30">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-700 dark:text-gray-300 tokamak:text-purple-200 hover:text-blue-600 dark:hover:text-blue-400 tokamak:hover:text-pink-400 font-medium py-2 transition-colors text-left"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Theme Selection */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 tokamak:border-purple-900/30">
                <div className="flex items-center space-x-2 mb-3">
                  <Palette className="w-4 h-4 text-gray-600 dark:text-gray-400 tokamak:text-purple-300" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 tokamak:text-purple-300">Theme</span>
                </div>
                <div className="space-y-2">
                  {themes.map((themeOption) => (
                    <button
                      key={themeOption.value}
                      onClick={() => handleThemeChange(themeOption.value as 'light' | 'dark' | 'tokamak')}
                      className="flex items-center justify-between w-full py-2 px-3 rounded-md text-left text-gray-700 dark:text-gray-300 tokamak:text-purple-200 hover:bg-gray-100 dark:hover:bg-gray-800 tokamak:hover:bg-purple-900/20 transition-colors"
                    >
                      <span>{themeOption.name}</span>
                      {theme === themeOption.value && (
                        <Check className="w-4 h-4 text-blue-600 tokamak:text-pink-400" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <Button className="bg-gradient-to-r from-blue-600 to-green-600 tokamak:from-pink-500 tokamak:to-purple-500 text-white font-semibold mt-4 rounded-full">
                Join the Movement
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
