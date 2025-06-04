
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, School, Mic, ArrowRight, MapPin } from 'lucide-react';

const GetInvolved = () => {
  const opportunities = [
    {
      icon: Users,
      title: "Join the Youth Network",
      description: "Connect with like-minded advocates, share resources, and amplify your voice in the nuclear conversation.",
      action: "Join Network",
      highlight: "1000+ members worldwide",
      color: "blue"
    },
    {
      icon: BookOpen,
      title: "Advocacy Toolkit",
      description: "Get talking points, fact sheets, social media templates, and everything you need to advocate effectively.",
      action: "Get Toolkit",
      highlight: "Free resources",
      color: "green"
    },
    {
      icon: School,
      title: "Start a Chapter",
      description: "Bring nuclear advocacy to your school or university. We'll help you organize, plan events, and grow your impact.",
      action: "Start Chapter",
      highlight: "50+ active chapters",
      color: "purple"
    },
    {
      icon: Mic,
      title: "Speaking Opportunities",
      description: "Ready to share your voice? We connect advocates with TEDx talks, Model UN conferences, and speaking events.",
      action: "Apply to Speak",
      highlight: "100+ speaking slots filled",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200 hover:bg-blue-600",
      green: "bg-green-100 text-green-600 border-green-200 hover:bg-green-600",
      purple: "bg-purple-100 text-purple-600 border-purple-200 hover:bg-purple-600",
      orange: "bg-orange-100 text-orange-600 border-orange-200 hover:bg-orange-600"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="get-involved" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Involved</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to make a difference? There are tons of ways to join the nuclear advocacy movement, 
            no matter your experience level or time commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full ${getColorClasses(opportunity.color).split(' ')[0]}`}>
                    <opportunity.icon className={`w-6 h-6 ${getColorClasses(opportunity.color).split(' ')[1]}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {opportunity.highlight}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {opportunity.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {opportunity.description}
                </p>
                <Button className={`w-full font-semibold transition-all duration-300 group-hover:text-white ${getColorClasses(opportunity.color)} border-2`}>
                  {opportunity.action}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chapter Finder */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-full">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Find a Chapter Near You</h3>
            <p className="text-xl text-gray-600 mb-8">
              Connect with local advocates and join chapter events in your area. 
              Can't find one? We'll help you start the first chapter at your school.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full">
                Find a Chapter
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold px-8 py-3 rounded-full">
                Start New Chapter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
