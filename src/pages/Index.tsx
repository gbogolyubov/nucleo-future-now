
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import WhyNuclear from '@/components/WhyNuclear';
import GetInvolved from '@/components/GetInvolved';
import InteractiveFeatures from '@/components/InteractiveFeatures';
import NewsSection from '@/components/NewsSection';
import PartnerWithUs from '@/components/PartnerWithUs';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      <Hero />
      <Mission />
      <WhyNuclear />
      <GetInvolved />
      <InteractiveFeatures />
      <NewsSection />
      <PartnerWithUs />
      <Footer />
    </div>
  );
};

export default Index;
