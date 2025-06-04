
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, HelpCircle, Mail, Zap, Users, BookOpen } from 'lucide-react';

const InteractiveFeatures = () => {
  const [activeQuiz, setActiveQuiz] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);

  const quizQuestions = [
    {
      question: "What motivates you most about nuclear energy?",
      options: [
        "Climate action and decarbonization",
        "Energy security and reliability", 
        "Scientific innovation and technology",
        "Economic opportunities and jobs"
      ]
    },
    {
      question: "How do you prefer to advocate?",
      options: [
        "Social media and online content",
        "In-person events and speaking",
        "Research and policy analysis",
        "Community organizing and grassroots"
      ]
    },
    {
      question: "What's your biggest nuclear energy interest?",
      options: [
        "Advanced reactor technologies",
        "Nuclear policy and regulation",
        "Public education and outreach",
        "International nuclear cooperation"
      ]
    }
  ];

  const advocateTypes = {
    "Climate Action Champion": {
      description: "You're driven by the climate crisis and see nuclear as essential for rapid decarbonization.",
      icon: "🌍",
      actions: ["Join climate advocacy campaigns", "Share climate data", "Connect with environmental groups"]
    },
    "Tech Innovation Enthusiast": {
      description: "You're excited by cutting-edge reactor designs and the future of nuclear technology.",
      icon: "🚀", 
      actions: ["Follow reactor development", "Engage with engineers", "Share tech content"]
    },
    "Policy & Research Advocate": {
      description: "You believe in evidence-based policy and want to influence nuclear regulations.",
      icon: "📊",
      actions: ["Analyze energy policy", "Write research briefs", "Engage policymakers"]
    },
    "Community Educator": {
      description: "You excel at making complex topics accessible and building grassroots support.",
      icon: "🎓",
      actions: ["Host educational events", "Create content", "Build local networks"]
    }
  };

  const handleQuizAnswer = (answer: string) => {
    const newAnswers = [...quizAnswers, answer];
    setQuizAnswers(newAnswers);
    
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      // Quiz complete - show results
      setQuizStep(quizStep + 1);
    }
  };

  const getQuizResult = () => {
    const types = Object.keys(advocateTypes);
    return types[Math.floor(Math.random() * types.length)];
  };

  const resetQuiz = () => {
    setActiveQuiz(false);
    setQuizStep(0);
    setQuizAnswers([]);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Interactive <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore nuclear energy in your area, discover your advocacy style, and stay updated with our community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Nuclear Plant Map */}
          <Card className="lg:col-span-1 hover:shadow-xl transition-all duration-300 border-0 bg-white">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-100 rounded-full">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">
                Nuclear Plants Near You
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Discover nuclear plants in your area and learn which ones might be powering your home right now.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <div className="text-2xl font-bold text-blue-600 mb-1">🗺️</div>
                <div className="text-sm text-gray-600">Interactive map coming soon!</div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full">
                Explore Map
              </Button>
            </CardContent>
          </Card>

          {/* Advocacy Quiz */}
          <Card className="lg:col-span-1 hover:shadow-xl transition-all duration-300 border-0 bg-white">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-purple-100 rounded-full">
                  <HelpCircle className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">
                What Kind of Nuclear Advocate Are You?
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!activeQuiz ? (
                <div className="text-center">
                  <p className="text-gray-600 mb-6">
                    Take our quick quiz to discover your advocacy style and get personalized action steps.
                  </p>
                  <Button 
                    onClick={() => setActiveQuiz(true)}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full"
                  >
                    Take Quiz
                  </Button>
                </div>
              ) : quizStep < quizQuestions.length ? (
                <div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">Question {quizStep + 1} of {quizQuestions.length}</span>
                      <Badge variant="secondary">{Math.round(((quizStep) / quizQuestions.length) * 100)}%</Badge>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(quizStep / quizQuestions.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    {quizQuestions[quizStep].question}
                  </h4>
                  <div className="space-y-2">
                    {quizQuestions[quizStep].options.map((option, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        onClick={() => handleQuizAnswer(option)}
                        className="w-full text-left justify-start hover:bg-purple-50 hover:border-purple-300"
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-4xl mb-4">{advocateTypes[getQuizResult() as keyof typeof advocateTypes].icon}</div>
                  <h4 className="font-bold text-gray-900 mb-2">{getQuizResult()}</h4>
                  <p className="text-gray-600 mb-4 text-sm">
                    {advocateTypes[getQuizResult() as keyof typeof advocateTypes].description}
                  </p>
                  <Button 
                    onClick={resetQuiz}
                    variant="outline"
                    className="w-full"
                  >
                    Take Again
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Newsletter Signup */}
          <Card className="lg:col-span-1 hover:shadow-xl transition-all duration-300 border-0 bg-white">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-green-100 rounded-full">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">
                Fission Weekly
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Nuclear news, simplified. Get the latest developments, myth-busting content, and advocacy opportunities delivered to your inbox.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <Zap className="w-4 h-4" />
                  <span>Weekly updates</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <BookOpen className="w-4 h-4" />
                  <span>Exclusive resources</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <Users className="w-4 h-4" />
                  <span>Community spotlights</span>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full">
                  Subscribe to Fission Weekly
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeatures;
