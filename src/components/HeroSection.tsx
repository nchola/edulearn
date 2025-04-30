import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Check } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  imageUrl: string;
}

const HeroSection = ({ imageUrl }: HeroSectionProps) => {
  const [showVideo, setShowVideo] = useState(false);

  const features = [
    "Interactive online courses",
    "Expert instructors",
    "Flexible learning schedule",
    "Certificates & achievements",
  ];

  return (
    <div className="relative bg-gradient-to-br from-primary-500 to-primary-700 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-28">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 lg:pr-12 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
              Unlock Your Learning Potential
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto md:mx-0">
              Join thousands of students on EduLearn and transform your future with our interactive courses, expert mentors, and supportive community.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Link to="/catalog">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-white/90 w-full sm:w-auto">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
            </div>
            
            <div className="grid grid-cols-2 gap-3 max-w-md mx-auto md:mx-0">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-accent-500 rounded-full p-1 mr-2">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-white/90 text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl relative">
              {showVideo ? (
                <div className="aspect-video relative">
                  <iframe
                    className="absolute w-full h-full object-cover rounded-lg"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="EduLearn Introduction"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <img
                  src={imageUrl}
                  alt="Students learning online"
                  className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-500"
                />
              )}
              
              {!showVideo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    onClick={() => setShowVideo(true)}
                    className="bg-white/90 hover:bg-white rounded-full p-4 shadow-lg transition-colors"
                  >
                    <Play className="h-8 w-8 text-primary-600 fill-current" />
                  </button>
                </div>
              )}
            </div>
            
            <div className="bg-white absolute -bottom-5 -right-5 md:-bottom-10 md:-right-10 rounded-lg p-4 shadow-lg hidden md:block">
              <div className="flex items-center">
                <div className="mr-3 bg-green-100 text-green-600 font-bold rounded-full h-12 w-12 flex items-center justify-center text-lg">
                  4.9
                </div>
                <div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 mt-1">From 2,500+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import { Star } from "lucide-react";
