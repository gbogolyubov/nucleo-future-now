
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building, GraduationCap, Users, Globe, ArrowRight, Handshake } from 'lucide-react';

const PartnerWithUs = () => {
  const partnerTypes = [
    {
      icon: Building,
      title: "NGOs & Organizations",
      description: "Partner with us to amplify nuclear education and advocacy in your environmental or energy justice work.",
      benefits: ["Co-hosted events", "Shared resources", "Joint campaigns", "Media collaboration"],
      color: "blue"
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      description: "Bring nuclear education to your students through workshops, speaker series, and curriculum partnerships.",
      benefits: ["Guest lectures", "Student workshops", "Career guidance", "Research collaboration"],
      color: "green"
    },
    {
      icon: Users,
      title: "Student Organizations",
      description: "Connect your club or society with our network for joint advocacy, events, and resource sharing.",
      benefits: ["Event partnerships", "Resource sharing", "Cross-promotion", "Leadership development"],
      color: "purple"
    },
    {
      icon: Globe,
      title: "International Groups",
      description: "Join our global network of youth nuclear advocates working across borders for clean energy.",
      benefits: ["Global campaigns", "Exchange programs", "International events", "Policy advocacy"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="partners" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            <Handshake className="w-4 h-4 mr-2" />
            Collaboration
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Partner <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">With Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Looking to collaborate on nuclear advocacy, education, or youth engagement? 
            We're always excited to work with like-minded organizations and institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {partnerTypes.map((partner, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full ${getColorClasses(partner.color)} mr-4`}>
                    <partner.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {partner.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {partner.description}
                </p>
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-900 text-sm">Partnership Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {partner.benefits.map((benefit, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold rounded-full group">
                  Start Partnership
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Collaborate?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Whether you're planning an event, developing curriculum, or launching a campaign, 
              we'd love to explore how we can work together to advance nuclear advocacy.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Active partnerships</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">200+</div>
                <div className="text-gray-600">Collaborative events</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">15</div>
                <div className="text-gray-600">Countries represented</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold px-8 py-3 rounded-full">
                Get in Touch
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold px-8 py-3 rounded-full">
                Download Partnership Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;
