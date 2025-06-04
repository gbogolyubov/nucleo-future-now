
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, TrendingUp } from 'lucide-react';

const NewsSection = () => {
  const newsItems = [
    {
      title: "Gen Z's Nuclear Awakening: Why Young Climate Activists Are Embracing Atomic Energy",
      excerpt: "A growing number of young environmental advocates are reconsidering nuclear power as essential for rapid decarbonization...",
      date: "2024-06-01",
      category: "Climate Action",
      readTime: "4 min read",
      featured: true
    },
    {
      title: "Breaking Down Nuclear Waste Myths: The Truth About Storage and Recycling",
      excerpt: "Nuclear waste isn't the unsolvable problem many think it is. Here's what the science actually says about storage, recycling, and safety...",
      date: "2024-05-28",
      category: "Education",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "Student Spotlight: How UCLA's Nuclear Advocacy Club Is Changing Campus Conversations",
      excerpt: "Meet the students who transformed nuclear energy from a taboo topic to a hot discussion point on one of America's most progressive campuses...",
      date: "2024-05-25",
      category: "Community",
      readTime: "5 min read",
      featured: false
    },
    {
      title: "Small Modular Reactors: The Future of Clean Energy or Overhyped Tech?",
      excerpt: "SMRs promise safer, cheaper nuclear power. We break down the technology, timeline, and realistic expectations for these next-gen reactors...",
      date: "2024-05-22",
      category: "Technology",
      readTime: "7 min read",
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Climate Action": "bg-green-100 text-green-800",
      "Education": "bg-blue-100 text-blue-800",
      "Community": "bg-purple-100 text-purple-800",
      "Technology": "bg-orange-100 text-orange-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="news" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            <TrendingUp className="w-4 h-4 mr-2" />
            Latest Updates
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            News & <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Explainers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest nuclear energy developments, myth-busting content, 
            and stories from our growing community of young advocates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            {newsItems
              .filter(item => item.featured)
              .map((item, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={getCategoryColor(item.category)}>
                        {item.category}
                      </Badge>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(item.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{item.readTime}</span>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full group">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* Regular Articles */}
          {newsItems
            .filter(item => !item.featured)
            .map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={getCategoryColor(item.category)}>
                      {item.category}
                    </Badge>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(item.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{item.readTime}</span>
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-full group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold px-8 py-3 rounded-full">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
