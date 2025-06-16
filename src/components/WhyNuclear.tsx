
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
      green: "from-green-500 to-emerald-500 text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/20 tokamak:text-green-400 tokamak:bg-green-900/20",
      blue: "from-blue-500 to-sky-500 text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/20 tokamak:text-blue-400 tokamak:bg-blue-900/20",
      purple: "from-purple-500 to-violet-500 text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900/20 tokamak:text-primary tokamak:bg-primary/20",
      orange: "from-orange-500 to-amber-500 text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/20 tokamak:text-orange-400 tokamak:bg-orange-900/20",
      red: "from-red-500 to-pink-500 text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/20 tokamak:text-red-400 tokamak:bg-red-900/20",
      indigo: "from-indigo-500 to-blue-600 text-indigo-600 bg-indigo-100 dark:text-indigo-400 dark:bg-indigo-900/20 tokamak:text-indigo-400 tokamak:bg-indigo-900/20"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="why-nuclear" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/50 to-accent/10 theme-transition">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 theme-transition">
            Science-Backed Facts
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why <span className="bg-gradient-to-r from-blue-600 to-green-600 tokamak:from-primary tokamak:to-accent bg-clip-text text-transparent">Nuclear?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                  <Card className="group hover:shadow-xl transition-all duration-300 border bg-card overflow-hidden h-full theme-transition">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-full ${getColorClasses(benefit.color).split(' ')[2]} ${getColorClasses(benefit.color).split(' ')[3]} ${getColorClasses(benefit.color).split(' ')[4]} ${getColorClasses(benefit.color).split(' ')[5]} ${getColorClasses(benefit.color).split(' ')[6]} ${getColorClasses(benefit.color).split(' ')[7]}`}>
                          <benefit.icon className={`w-6 h-6 ${getColorClasses(benefit.color).split(' ')[1]} ${getColorClasses(benefit.color).split(' ')[4]} ${getColorClasses(benefit.color).split(' ')[6]}`} />
                        </div>
                        <Badge variant="secondary" className="text-xs theme-transition">
                          FACT
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors theme-transition">
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 flex flex-col h-full">
                      <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                        {benefit.description}
                      </p>
                      <div className={`p-3 rounded-lg ${getColorClasses(benefit.color).split(' ')[2]} ${getColorClasses(benefit.color).split(' ')[3]} ${getColorClasses(benefit.color).split(' ')[4]} ${getColorClasses(benefit.color).split(' ')[5]} ${getColorClasses(benefit.color).split(' ')[6]} ${getColorClasses(benefit.color).split(' ')[7]} border-l-4 border-primary mb-4 theme-transition`}>
                        <p className={`text-sm font-semibold ${getColorClasses(benefit.color).split(' ')[1]} ${getColorClasses(benefit.color).split(' ')[4]} ${getColorClasses(benefit.color).split(' ')[6]}`}>
                          💡 {benefit.fact}
                        </p>
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full mt-auto hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors theme-transition"
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
                  className="w-2 h-2 rounded-full bg-muted-foreground/30"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border theme-transition">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to dive deeper?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get our comprehensive guide to nuclear energy myths, facts, and talking points.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-green-600 tokamak:from-primary tokamak:to-accent hover:from-blue-700 hover:to-green-700 tokamak:hover:from-primary/90 tokamak:hover:to-accent/90 text-white font-bold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
              Download Nuclear Facts Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNuclear;
