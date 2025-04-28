import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Clock, Award, BookCheck, Monitor, MessageSquare, GraduationCap, Star, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CourseCard from "@/components/CourseCard";
import FeatureCard from "@/components/FeatureCard";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import ProjectShowcaseGenerator from "@/components/ProjectShowcaseGenerator";

const Index = () => {
  // Sample course data
  const popularCourses = [
    {
      id: 1,
      title: "Mastering Web Development with React & Node.js",
      instructor: "Alex Johnson",
      rating: 4.8,
      reviewCount: 856,
      level: "Intermediate" as const,
      duration: "10 weeks",
      lessons: 42,
      students: 15430,
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=600",
      category: "Programming",
      price: 89.99,
      discount: 20,
    },
    {
      id: 2,
      title: "Digital Marketing Fundamentals: SEO, Social Media & More",
      instructor: "Sarah Williams",
      rating: 4.7,
      reviewCount: 735,
      level: "Beginner" as const,
      duration: "8 weeks",
      lessons: 36,
      students: 12876,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      category: "Marketing",
      price: 69.99,
    },
    {
      id: 3,
      title: "UI/UX Design: Create Beautiful User Experiences",
      instructor: "Michael Chen",
      rating: 4.9,
      reviewCount: 423,
      level: "Intermediate" as const,
      duration: "6 weeks",
      lessons: 28,
      students: 9270,
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600",
      category: "Design",
      price: 79.99,
      discount: 15,
    },
    {
      id: 4,
      title: "Python for Data Science and Machine Learning",
      instructor: "David Miller",
      rating: 4.8,
      reviewCount: 912,
      level: "Advanced" as const,
      duration: "12 weeks",
      lessons: 56,
      students: 18540,
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=600",
      category: "Programming",
      price: 99.99,
      discount: 10,
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Interactive Courses",
      description: "Engage with dynamic content, quizzes, and exercises that make learning enjoyable and effective.",
      color: "blue" as const,
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience and proven teaching methods.",
      color: "orange" as const,
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Study at your own pace, anytime and anywhere that fits into your busy lifestyle.",
      color: "green" as const,
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Earn recognized certificates to showcase your skills and boost your career prospects.",
      color: "purple" as const,
    },
    {
      icon: BookCheck,
      title: "Comprehensive Curriculum",
      description: "Follow structured learning paths designed to build your knowledge from basics to advanced topics.",
      color: "blue" as const,
    },
    {
      icon: Monitor,
      title: "Live Sessions",
      description: "Participate in real-time classes with screen sharing and virtual whiteboard features.",
      color: "orange" as const,
    },
    {
      icon: MessageSquare,
      title: "Community Forums",
      description: "Join discussion groups to share ideas, ask questions, and collaborate with peers.",
      color: "green" as const,
    },
    {
      icon: GraduationCap,
      title: "Career Support",
      description: "Access resources and guidance to help you apply your skills in the real world.",
      color: "purple" as const,
    },
  ];

  const testimonials = [
    {
      name: "Jason Lee",
      role: "Software Developer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "EduLearn completely transformed my career. The programming courses were comprehensive and practical, and the instructors were incredibly knowledgeable and supportive.",
      rating: 5,
      company: "Tech Solutions Inc.",
    },
    {
      name: "Emily Chen",
      role: "Marketing Specialist",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      content: "I've tried many online learning platforms, but EduLearn stands out with its interactive approach and quality content. The digital marketing course helped me land my dream job!",
      rating: 5,
      company: "Digital Marketing Pro",
    },
    {
      name: "Marcus Johnson",
      role: "UX Designer",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      content: "The UI/UX design course was exactly what I needed to upskill. The projects were challenging and the feedback from instructors was invaluable for my professional growth.",
      rating: 4,
      company: "Creative Design Studio",
    },
  ];

  const stats = [
    { number: "1M+", label: "Learners" },
    { number: "500+", label: "Courses" },
    { number: "250+", label: "Instructors" },
    { number: "50+", label: "Countries" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" />

        {/* Project Showcase Generator */}
        <section className="section bg-gradient-to-b from-white to-gray-50">
          <ProjectShowcaseGenerator />
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="p-4">
                  <div className="text-3xl md:text-4xl font-bold text-primary-600">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Courses Section */}
        <section className="section">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Popular Courses</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Expand your skills with our most in-demand courses taught by industry experts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/catalog">
                <Button variant="outline" size="lg">
                  Explore All Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose EduLearn</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our platform offers everything you need to succeed in your learning journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  color={feature.color}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-primary-500 text-white">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
              <p className="text-lg mb-8 text-white/90">
                Join thousands of students and begin your learning journey today. Get access to all our courses with a free 7-day trial.
              </p>
              <div className="space-x-4">
                <Link to="/register">
                  <Button size="lg" className="bg-white text-primary-600 hover:bg-white/90">
                    Sign Up For Free
                  </Button>
                </Link>
                <Link to="/catalog">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Browse Courses
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Read testimonials from students who have transformed their careers with EduLearn
              </p>
            </div>

            <div className="max-w-5xl mx-auto px-8">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                      <div className="p-1">
                        <Card className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg border-0 shadow">
                          <CardContent className="p-6">
                            <div className="mb-4 flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <div className="relative">
                                  <Avatar className="h-12 w-12">
                                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <span className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                                    <Badge className="h-2 w-2 bg-white rounded-full" />
                                  </span>
                                </div>
                                <div>
                                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                                  <p className="text-xs text-gray-400">{testimonial.company}</p>
                                </div>
                              </div>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < testimonial.rating 
                                        ? "text-yellow-400 fill-current" 
                                        : "text-gray-300"
                                    }`}
                                    strokeWidth={0}
                                  />
                                ))}
                              </div>
                            </div>
                            <div className="relative">
                              <Quote className="h-8 w-8 text-primary-100 absolute -top-2 -left-2 opacity-25" />
                              <p className="text-gray-700 relative z-10 italic pl-6">
                                "{testimonial.content}"
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden md:flex">
                  <CarouselPrevious className="absolute -left-12" />
                  <CarouselNext className="absolute -right-12" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
