
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Zap, Globe, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* Hero Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 tokamak:bg-pink-900/30 text-blue-800 dark:text-blue-200 tokamak:text-pink-200 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Zap className="w-4 h-4 mr-2" />
            Student-Led Nuclear Advocacy
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 tokamak:from-pink-400 tokamak:via-purple-400 tokamak:to-pink-300 bg-clip-text text-transparent">
              Rebranding
            </span>
            <br />
            <span className="text-gray-900 dark:text-white tokamak:text-purple-100">Nuclear Energy</span>
            <br />
            <span className="bg-gradient-to-r from-green-600 to-blue-600 tokamak:from-purple-400 tokamak:to-pink-400 bg-clip-text text-transparent">
              for Gen Z
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 tokamak:text-purple-200 mb-12 max-w-3xl mx-auto animate-fade-in">
            We're a student-led movement promoting nuclear power as the <strong>clean energy solution</strong> our planet needs. 
            Join us in advocating for a carbon-free future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 tokamak:from-pink-500 tokamak:to-purple-500 hover:from-blue-700 hover:to-green-700 tokamak:hover:from-pink-600 tokamak:hover:to-purple-600 text-white font-bold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
              Join the Movement
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-blue-600 tokamak:border-pink-400 text-blue-600 tokamak:text-pink-400 hover:bg-blue-50 tokamak:hover:bg-pink-950/20 font-bold px-8 py-4 rounded-full transition-all duration-200">
              Learn the Truth About Nuclear
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 tokamak:bg-pink-900/30 rounded-full">
                  <Globe className="w-6 h-6 text-blue-600 tokamak:text-pink-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white tokamak:text-purple-100 mb-1">20%</div>
              <div className="text-gray-600 dark:text-gray-400 tokamak:text-purple-300">of US electricity from nuclear</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 tokamak:bg-purple-900/30 rounded-full">
                  <Zap className="w-6 h-6 text-green-600 tokamak:text-purple-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white tokamak:text-purple-100 mb-1">24/7</div>
              <div className="text-gray-600 dark:text-gray-400 tokamak:text-purple-300">Clean, reliable power</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 tokamak:bg-pink-900/30 rounded-full">
                  <Users className="w-6 h-6 text-purple-600 tokamak:text-pink-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white tokamak:text-purple-100 mb-1">1000+</div>
              <div className="text-gray-600 dark:text-gray-400 tokamak:text-purple-300">Young advocates worldwide</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400 tokamak:text-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
