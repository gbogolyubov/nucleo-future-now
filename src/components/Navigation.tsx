
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
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Atom className="w-8 h-8 text-primary" />
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 tokamak:from-primary tokamak:to-accent bg-clip-text text-transparent">
              Nucleo
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-muted-foreground hover:text-primary font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <UserProfile />
            <Button className="bg-gradient-to-r from-blue-600 to-green-600 tokamak:from-primary tokamak:to-accent hover:from-blue-700 hover:to-green-700 tokamak:hover:from-primary/90 tokamak:hover:to-accent/90 text-white font-semibold px-6 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
              Join the Movement
            </Button>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <UserProfile />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in bg-background/95 backdrop-blur-md border-t border-border theme-transition">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-muted-foreground hover:text-primary font-medium py-2 transition-colors text-left"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Theme Selection */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2 mb-3">
                  <Palette className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Theme</span>
                </div>
                <div className="space-y-2">
                  {themes.map((themeOption) => (
                    <button
                      key={themeOption.value}
                      onClick={() => handleThemeChange(themeOption.value as 'light' | 'dark' | 'tokamak')}
                      className="flex items-center justify-between w-full py-2 px-3 rounded-md text-left text-muted-foreground hover:bg-muted transition-colors theme-transition"
                    >
                      <span>{themeOption.name}</span>
                      {theme === themeOption.value && (
                        <Check className="w-4 h-4 text-primary" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <Button className="bg-gradient-to-r from-blue-600 to-green-600 tokamak:from-primary tokamak:to-accent text-white font-semibold mt-4 rounded-full">
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
