
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Leaf, Zap, Recycle, Rocket, Shield, Clock } from 'lucide-react';

const WhyNuclear = () => {
  const benefits = [
    {
      icon: Leaf,
      title: "Climate Champion",
      description: "Nuclear power produces virtually zero carbon emissions during operation. A single nuclear plant prevents millions of tons of CO2 annually.",
      fact: "Nuclear prevents 2.5B tons of CO2 yearly worldwide",
      color: "green"
    },
    {
      icon: Zap,
      title: "Always On Energy",
      description: "Unlike solar and wind, nuclear plants run 24/7, rain or shine. They provide the reliable baseload power our grid needs.",
      fact: "90%+ capacity factor vs 25% for solar",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Incredibly Safe",
      description: "Modern nuclear is the safest form of energy per unit produced. You're more likely to be struck by lightning than hurt by nuclear power.",
      fact: "Safest energy source by deaths per TWh",
      color: "purple"
    },
    {
      icon: Recycle,
      title: "Minimal Waste",
      description: "All nuclear waste from 60 years of US nuclear power could fit in a football field. Plus, we can recycle 95% of it as fuel.",
      fact: "Used fuel can be recycled indefinitely",
      color: "orange"
    },
    {
      icon: Rocket,
      title: "Innovation Engine",
      description: "Next-gen reactors are smaller, safer, and more efficient. We're talking reactors that can't melt down and run on existing waste.",
      fact: "100+ advanced reactor designs in development",
      color: "red"
    },
    {
      icon: Clock,
      title: "Proven & Ready",
      description: "Nuclear isn't experimental—it's been powering cities for decades. We have the technology today to scale up clean energy fast.",
      fact: "Nuclear provides 20% of US electricity",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: "from-green-500 to-emerald-500 text-green-600 bg-green-100",
      blue: "from-blue-500 to-sky-500 text-blue-600 bg-blue-100",
      purple: "from-purple-500 to-violet-500 text-purple-600 bg-purple-100",
      orange: "from-orange-500 to-amber-500 text-orange-600 bg-orange-100",
      red: "from-red-500 to-pink-500 text-red-600 bg-red-100",
      indigo: "from-indigo-500 to-blue-600 text-indigo-600 bg-indigo-100"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="why-nuclear" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Science-Backed Facts
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Nuclear?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond the myths and misconceptions lies the truth: nuclear energy is clean, safe, and essential 
            for reaching our climate goals. Here's why Gen Z should care.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {benefits.map((benefit, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-full ${getColorClasses(benefit.color).split(' ')[2]}`}>
                          <benefit.icon className={`w-6 h-6 ${getColorClasses(benefit.color).split(' ')[1]}`} />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          FACT
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 flex flex-col h-full">
                      <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                        {benefit.description}
                      </p>
                      <div className={`p-3 rounded-lg ${getColorClasses(benefit.color).split(' ')[2]} border-l-4 border-${benefit.color}-500 mb-4`}>
                        <p className={`text-sm font-semibold ${getColorClasses(benefit.color).split(' ')[1]}`}>
                          💡 {benefit.fact}
                        </p>
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full mt-auto hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors"
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          
          {/* Mobile navigation dots */}
          <div className="flex justify-center mt-6 md:hidden">
            <div className="flex space-x-2">
              {benefits.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-gray-300"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to dive deeper?
            </h3>
            <p className="text-gray-600 mb-6">
              Get our comprehensive guide to nuclear energy myths, facts, and talking points.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
              Download Nuclear Facts Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNuclear;
