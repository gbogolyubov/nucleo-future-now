import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Zap, Globe, Users } from 'lucide-react';
const Hero = () => {
  return <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 bg-zinc-800">
          {/* Hero Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Zap className="w-4 h-4 mr-2" />
            Student-Led Nuclear Advocacy
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Rebranding
            </span>
            <br />
            <span className="text-gray-50">Nuclear Energy</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              for Gen Z
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in">
            We're a student-led movement promoting nuclear power as the <strong>clean energy solution</strong> our planet needs. 
            Join us in advocating for a carbon-free future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
              Join the Movement
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-full transition-all duration-200">
              Learn the Truth About Nuclear
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white-900 mb-1 bg-transparent">20%</div>
              <div className="text-gray-600">of US electricity from nuclear</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-green-100 rounded-full">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
              <div className="text-gray-600">Clean, reliable power</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">1000+</div>
              <div className="text-gray-600">Young advocates worldwide</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>;
};
export default Hero;