
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Zap, Globe, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-background theme-transition">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* Hero Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-muted text-foreground rounded-full text-sm font-medium mb-8 animate-fade-in theme-transition">
            <Zap className="w-4 h-4 mr-2" />
            Student-Led Nuclear Advocacy
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 tokamak:from-primary tokamak:via-accent tokamak:to-primary bg-clip-text text-transparent">
              Rebranding
            </span>
            <br />
            <span className="text-foreground">Nuclear Energy</span>
            <br />
            <span className="bg-gradient-to-r from-green-600 to-blue-600 tokamak:from-accent tokamak:to-primary bg-clip-text text-transparent">
              for Gen Z
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in">
            We're a student-led movement promoting nuclear power as the <strong className="text-foreground">clean energy solution</strong> our planet needs. 
            Join us in advocating for a carbon-free future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 tokamak:from-primary tokamak:to-accent hover:from-blue-700 hover:to-green-700 tokamak:hover:from-primary/90 tokamak:hover:to-accent/90 text-white font-bold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
              Join the Movement
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-muted font-bold px-8 py-4 rounded-full transition-all duration-200 theme-transition">
              Learn the Truth About Nuclear
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-muted rounded-full">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">20%</div>
              <div className="text-muted-foreground">of US electricity from nuclear</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-muted rounded-full">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">24/7</div>
              <div className="text-muted-foreground">Clean, reliable power</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-muted rounded-full">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">1000+</div>
              <div className="text-muted-foreground">Young advocates worldwide</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
