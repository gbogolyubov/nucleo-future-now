
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, BookOpen, Megaphone } from 'lucide-react';

const Mission = () => {
  const values = [
    {
      icon: Target,
      title: "Science-Based Advocacy",
      description: "We believe in evidence-driven solutions to climate change, backed by rigorous research and data."
    },
    {
      icon: Heart,
      title: "Inclusive Community",
      description: "Nuclear energy affects everyone. We're building a diverse, welcoming movement for all young voices."
    },
    {
      icon: BookOpen,
      title: "Education First",
      description: "Knowledge is power. We break down complex science into accessible, engaging content for everyone."
    },
    {
      icon: Megaphone,
      title: "Youth Leadership",
      description: "Young people will inherit this planet. We deserve a voice in shaping our energy future."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card theme-transition">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-green-600 tokamak:from-pink-400 tokamak:to-purple-400 bg-clip-text text-transparent">Nucleo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            We're not your typical nuclear advocates. We're students, activists, and young professionals who believe 
            nuclear energy is the missing piece in our fight against climate change.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-muted rounded-3xl p-8 md:p-12 mb-16 theme-transition">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6 text-center">Our Story</h3>
            <div className="prose prose-lg text-muted-foreground mx-auto">
              <p className="text-center">
                Started by university students tired of seeing nuclear energy dismissed without discussion, 
                Nucleo emerged from late-night study sessions, climate anxiety, and a frustration with 
                energy debates that ignored the science.
              </p>
              <p className="text-center mt-6">
                We're here to change that narrative. Nuclear isn't scary—it's necessary. 
                And young people aren't just the future of clean energy advocacy; we're the present.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border bg-card theme-transition">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-muted rounded-full">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
