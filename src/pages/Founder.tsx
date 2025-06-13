
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Founder = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 tokamak:from-gray-950 tokamak:via-purple-950/20 tokamak:to-gray-950">
      <Navigation />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 tokamak:bg-pink-900/30 text-blue-800 dark:text-blue-200 tokamak:text-pink-200 rounded-full text-sm font-medium mb-8">
              <GraduationCap className="w-4 h-4 mr-2" />
              Meet Our Founder
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 tokamak:from-pink-400 tokamak:to-purple-400 bg-clip-text text-transparent">
                Grisha Bogolyubov
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 tokamak:text-purple-200 mb-8 max-w-3xl mx-auto">
              Passionate advocate for nuclear energy and sustainable technology solutions, 
              leading the next generation of clean energy innovators.
            </p>
          </div>

          {/* Profile Card */}
          <Card className="mb-12 shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 tokamak:bg-gray-900/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 tokamak:from-pink-500 tokamak:to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  GB
                </div>
                <div className="text-center md:text-left">
                  <CardTitle className="text-2xl mb-2">Grisha Bogolyubov</CardTitle>
                  <CardDescription className="text-lg mb-4">
                    Founder & Nuclear Energy Advocate
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 tokamak:bg-pink-900/30 tokamak:text-pink-200">
                      Student Leader
                    </Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 tokamak:bg-purple-900/30 tokamak:text-purple-200">
                      Clean Energy Advocate
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 tokamak:bg-pink-900/30 tokamak:text-pink-200">
                      Nuclear Innovation
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-blue-600 tokamak:text-pink-400" />
                    Professional Focus
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 tokamak:text-purple-200 mb-4">
                    Grisha is dedicated to transforming public perception of nuclear energy 
                    through education, advocacy, and student-led initiatives. He believes 
                    in the critical role of nuclear power in achieving global decarbonization goals.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2 text-green-600 tokamak:text-purple-400" />
                    Mission & Vision
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 tokamak:text-purple-200 mb-4">
                    Leading Nucleo with a vision to create a generation of informed nuclear 
                    advocates who can drive policy change and public acceptance of clean nuclear energy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Achievements */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6 shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 tokamak:bg-gray-900/80 backdrop-blur-sm">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 tokamak:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600 tokamak:text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Student Leadership</h3>
              <p className="text-gray-600 dark:text-gray-300 tokamak:text-purple-200 text-sm">
                Building and leading student organizations focused on nuclear energy advocacy
              </p>
            </Card>

            <Card className="text-center p-6 shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 tokamak:bg-gray-900/80 backdrop-blur-sm">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 tokamak:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-green-600 tokamak:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Policy Advocacy</h3>
              <p className="text-gray-600 dark:text-gray-300 tokamak:text-purple-200 text-sm">
                Engaging with policymakers and stakeholders to promote nuclear energy solutions
              </p>
            </Card>

            <Card className="text-center p-6 shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 tokamak:bg-gray-900/80 backdrop-blur-sm">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 tokamak:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-purple-600 tokamak:text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Global Impact</h3>
              <p className="text-gray-600 dark:text-gray-300 tokamak:text-purple-200 text-sm">
                Connecting with international nuclear advocates and organizations worldwide
              </p>
            </Card>
          </div>

          {/* Quote Section */}
          <Card className="mb-12 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 tokamak:from-pink-900/20 tokamak:to-purple-900/20">
            <CardContent className="p-8 text-center">
              <blockquote className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 tokamak:text-purple-100 mb-4">
                "Nuclear energy isn't just about technology—it's about securing a sustainable future 
                for our planet. We need young voices to lead this transformation."
              </blockquote>
              <cite className="text-gray-600 dark:text-gray-400 tokamak:text-purple-300">
                — Grisha Bogolyubov, Founder of Nucleo
              </cite>
            </CardContent>
          </Card>

          {/* Connect Section */}
          <Card className="text-center shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 tokamak:bg-gray-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Connect with Grisha</CardTitle>
              <CardDescription>
                Get in touch to discuss nuclear energy advocacy, collaboration opportunities, 
                or join the movement for clean energy.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.open('https://linkedin.com/in/grisha-bogolyubov', '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn Profile
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-blue-600 tokamak:border-pink-400 text-blue-600 tokamak:text-pink-400 hover:bg-blue-50 tokamak:hover:bg-pink-950/20"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get in Touch
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Founder;
