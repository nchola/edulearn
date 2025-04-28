import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, Clock, BookOpen, Award, Play, CheckCircle, Calendar, MessageSquare, Download, Video, FileText, Monitor, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const CourseDetail = () => {
  const { id } = useParams();
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  
  // Mock course data (in a real app, you would fetch this data based on the ID)
  const course = {
    id: parseInt(id || "1"),
    title: "Mastering Web Development with React & Node.js",
    subtitle: "Complete guide to building modern web applications with React and Node.js",
    instructor: {
      name: "Alex Johnson",
      title: "Senior Web Developer",
      bio: "Alex is a senior web developer with over 10 years of experience in building web applications. He's worked with companies like Google, Facebook, and Amazon, and has taught over 50,000 students online.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    rating: 4.8,
    reviewCount: 856,
    studentCount: 15430,
    lastUpdated: "October 2023",
    language: "English",
    level: "Intermediate",
    duration: "10 weeks",
    lessons: 42,
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1200",
    price: 89.99,
    discount: 20,
    category: "Programming",
    tags: ["React", "Node.js", "JavaScript", "Web Development"],
    description: `This comprehensive course will take you from beginner to advanced in modern web development. You'll build real-world projects using React and Node.js, and learn how to deploy them to production.

Learn how to build full-stack applications with React and Node.js, understand state management with Redux, implement authentication and authorization, and work with databases like MongoDB and PostgreSQL. By the end of this course, you'll have a portfolio of projects to showcase your skills to potential employers.

The course is constantly updated with the latest industry trends and best practices, so you can be confident you're learning the most relevant skills for today's job market.`,
    whatYouWillLearn: [
      "Build robust and scalable web applications with React and Node.js",
      "Implement authentication and authorization using JWT",
      "Work with databases like MongoDB and PostgreSQL",
      "Deploy your applications to production environments",
      "Create responsive and accessible user interfaces",
      "Implement state management with Redux and Context API",
      "Write clean, maintainable, and testable code",
      "Understand modern JavaScript features and practices",
    ],
    prerequisites: [
      "Basic knowledge of HTML, CSS, and JavaScript",
      "Familiarity with ES6+ features",
      "Understanding of basic programming concepts",
    ],
    curriculum: [
      {
        id: "module-1",
        title: "Introduction to Modern Web Development",
        lessons: [
          { id: 1, title: "Course Overview", duration: "8:42", type: "video" },
          { id: 2, title: "Setting Up Your Development Environment", duration: "15:20", type: "video" },
          { id: 3, title: "Modern JavaScript Essentials", duration: "22:15", type: "video" },
        ],
      },
      {
        id: "module-2",
        title: "React Fundamentals",
        lessons: [
          { id: 4, title: "Introduction to React", duration: "18:30", type: "video" },
          { id: 5, title: "Components and Props", duration: "25:12", type: "video" },
          { id: 6, title: "State and Lifecycle", duration: "28:45", type: "video" },
          { id: 7, title: "Handling Events", duration: "20:10", type: "video" },
          { id: 8, title: "React Hooks: useState and useEffect", duration: "35:20", type: "video" },
          { id: 9, title: "Building Your First React Application", duration: "45:00", type: "project" },
        ],
      },
      {
        id: "module-3",
        title: "Node.js Fundamentals",
        lessons: [
          { id: 10, title: "Introduction to Node.js", duration: "16:40", type: "video" },
          { id: 11, title: "Working with Modules", duration: "22:35", type: "video" },
          { id: 12, title: "Building a Simple Web Server", duration: "28:15", type: "video" },
          { id: 13, title: "Express.js Fundamentals", duration: "32:20", type: "video" },
          { id: 14, title: "RESTful API Design", duration: "40:18", type: "video" },
          { id: 15, title: "Building a CRUD API", duration: "55:30", type: "project" },
        ],
      },
      {
        id: "module-4",
        title: "MongoDB and Data Persistence",
        lessons: [
          { id: 16, title: "Introduction to MongoDB", duration: "18:25", type: "video" },
          { id: 17, title: "Setting up MongoDB Atlas", duration: "12:40", type: "video" },
          { id: 18, title: "CRUD Operations with MongoDB", duration: "30:15", type: "video" },
          { id: 19, title: "MongoDB with Node.js and Mongoose", duration: "35:50", type: "video" },
          { id: 20, title: "Building a Data-Driven Application", duration: "50:00", type: "project" },
        ],
      },
      {
        id: "module-5",
        title: "Authentication and Authorization",
        lessons: [
          { id: 21, title: "Authentication Concepts", duration: "22:10", type: "video" },
          { id: 22, title: "Implementing JWT Authentication", duration: "38:45", type: "video" },
          { id: 23, title: "Role-Based Authorization", duration: "28:20", type: "video" },
          { id: 24, title: "Securing React Applications", duration: "32:15", type: "video" },
          { id: 25, title: "Building a Secure User System", duration: "60:00", type: "project" },
        ],
      },
      // Additional modules...
    ],
    reviews: [
      {
        id: 1,
        name: "Sarah Miller",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
        rating: 5,
        date: "October 15, 2023",
        text: "This course exceeded my expectations. Alex is an amazing instructor who explains complex concepts in a way that's easy to understand. The projects are challenging but extremely rewarding. I feel much more confident in my web development skills now.",
      },
      {
        id: 2,
        name: "John Davis",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        rating: 4,
        date: "October 10, 2023",
        text: "Great course with lots of practical examples. I especially enjoyed the sections on authentication and state management. The only reason I'm not giving 5 stars is because some of the content could be updated with the very latest React features.",
      },
      {
        id: 3,
        name: "Emily Chang",
        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        rating: 5,
        date: "October 5, 2023",
        text: "I've taken several web development courses before, but this one stands out for its comprehensive coverage and real-world applications. Alex is clearly very knowledgeable and passionate about teaching. Highly recommend!",
      },
    ],
    faqs: [
      {
        id: 1,
        question: "Do I need prior React or Node.js experience for this course?",
        answer: "No, the course is designed to take you from the basics to advanced concepts. However, having a good understanding of JavaScript fundamentals will make the learning process smoother.",
      },
      {
        id: 2,
        question: "How long do I have access to the course materials?",
        answer: "Once you purchase the course, you have lifetime access to all course materials, including future updates and additional content that may be added later.",
      },
      {
        id: 3,
        question: "Are there any assignments or projects in this course?",
        answer: "Yes, the course includes several hands-on projects that will help you apply what you've learned. These projects are designed to simulate real-world scenarios and will be great additions to your portfolio.",
      },
      {
        id: 4,
        question: "Will I receive a certificate upon completion?",
        answer: "Yes, upon completing the course, you will receive a certificate of completion that you can share on your LinkedIn profile or with potential employers.",
      },
      {
        id: 5,
        question: "What if I have questions during the course?",
        answer: "You can post your questions in the course discussion forum. Both the instructor and the community of students are active in answering questions and providing support.",
      },
    ],
  };
  
  const discountedPrice = course.discount ? course.price - (course.price * course.discount / 100) : course.price;
  
  // Calculate lesson count and total duration
  const totalLessons = course.curriculum.reduce((total, module) => total + module.lessons.length, 0);
  
  const totalDurationMinutes = course.curriculum.reduce((total, module) => {
    return total + module.lessons.reduce((moduleTotal, lesson) => {
      const [minutes, seconds] = lesson.duration.split(":").map(Number);
      return moduleTotal + minutes + seconds / 60;
    }, 0);
  }, 0);
  
  const totalHours = Math.floor(totalDurationMinutes / 60);
  const remainingMinutes = Math.round(totalDurationMinutes % 60);
  
  const renderRatingStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
            strokeWidth={0}
          />
        ))}
        <span className="ml-1 text-sm font-medium text-gray-900">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Course Header */}
        <div className="bg-gray-900 text-white">
          <div className="container mx-auto py-12 px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Course Info */}
              <div className="lg:w-2/3">
                <div className="mb-4 space-x-2">
                  {course.tags.map((tag, index) => (
                    <Badge key={index} className="bg-primary-600">{tag}</Badge>
                  ))}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-3">{course.title}</h1>
                <p className="text-xl text-gray-300 mb-6">{course.subtitle}</p>
                
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6">
                  <div className="flex items-center">
                    {renderRatingStars(course.rating)}
                    <span className="ml-2 text-gray-300">({course.reviewCount} reviews)</span>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <Users className="h-4 w-4 mr-1" />
                    {course.studentCount.toLocaleString()} students
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration} ({totalHours}h {remainingMinutes}m)
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {totalLessons} lessons
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-gray-300">Created by</p>
                    <p className="font-medium">{course.instructor.name}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Last updated: {course.lastUpdated}
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    {course.language}
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-1" />
                    {course.level} level
                  </div>
                </div>
              </div>
              
              {/* Course Card */}
              <div className="lg:w-1/3">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden text-gray-900">
                  <div className="relative pt-[56.25%]">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors cursor-pointer group">
                      <div className="h-16 w-16 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center">
                        <Play className="h-8 w-8 text-primary-600 fill-current ml-1" />
                      </div>
                      <span className="sr-only">Play preview</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold">${discountedPrice.toFixed(2)}</span>
                        {course.discount && (
                          <>
                            <span className="ml-2 text-lg text-gray-500 line-through">${course.price.toFixed(2)}</span>
                            <span className="ml-2 text-accent-600 font-semibold">
                              {course.discount}% off
                            </span>
                          </>
                        )}
                      </div>
                      <div className="mt-1 text-sm text-gray-500">
                        <span className="font-medium">Limited time offer</span> - 2 days left at this price!
                      </div>
                    </div>
                    
                    <Button className="w-full mb-3 bg-primary-500 hover:bg-primary-600 text-white">
                      Enroll Now
                    </Button>
                    
                    <Button variant="outline" className="w-full mb-6">
                      Try For Free
                    </Button>
                    
                    <div className="text-sm">
                      <h4 className="font-semibold mb-2">This course includes:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Video className="h-4 w-4 text-gray-500 mr-2" />
                          {totalHours}h {remainingMinutes}m of on-demand video
                        </li>
                        <li className="flex items-center">
                          <FileText className="h-4 w-4 text-gray-500 mr-2" />
                          15 articles and resources
                        </li>
                        <li className="flex items-center">
                          <Download className="h-4 w-4 text-gray-500 mr-2" />
                          48 downloadable resources
                        </li>
                        <li className="flex items-center">
                          <Monitor className="h-4 w-4 text-gray-500 mr-2" />
                          5 coding exercises
                        </li>
                        <li className="flex items-center">
                          <Award className="h-4 w-4 text-gray-500 mr-2" />
                          Certificate of completion
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Content */}
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <Tabs defaultValue="overview" className="mb-8">
                <TabsList className="mb-6 w-full max-w-md">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                
                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">About This Course</h2>
                    <div className="prose max-w-none">
                      {course.description.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="mb-4 text-gray-700">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">What You'll Learn</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {course.whatYouWillLearn.map((item, i) => (
                        <div key={i} className="flex">
                          <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
                    <ul className="space-y-2">
                      {course.prerequisites.map((item, i) => (
                        <li key={i} className="flex">
                          <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full">
                      {course.faqs.map((faq) => (
                        <AccordionItem key={faq.id} value={`faq-${faq.id}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </TabsContent>
                
                {/* Curriculum Tab */}
                <TabsContent value="curriculum" className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-2xl font-semibold">Course Content</h2>
                      <p className="text-gray-500">
                        {course.curriculum.length} modules • {totalLessons} lessons • {totalHours}h {remainingMinutes}m total length
                      </p>
                    </div>
                    
                    <Button variant="ghost" className="text-primary-500">
                      Expand all
                    </Button>
                  </div>
                  
                  <Accordion
                    type="single"
                    collapsible
                    value={selectedModule}
                    onValueChange={setSelectedModule}
                    className="w-full"
                  >
                    {course.curriculum.map((module) => (
                      <AccordionItem key={module.id} value={module.id} className="border rounded-md overflow-hidden mb-4 border-gray-200">
                        <AccordionTrigger className="px-4 py-3 hover:bg-gray-50">
                          <div className="flex justify-between w-full text-left">
                            <span className="font-medium">{module.title}</span>
                            <span className="text-gray-500 text-sm">
                              {module.lessons.length} lessons
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="divide-y border-t">
                            {module.lessons.map((lesson) => (
                              <li key={lesson.id} className="px-4 py-3 hover:bg-gray-50">
                                <div className="flex justify-between items-center">
                                  <div className="flex items-center">
                                    {lesson.type === 'video' ? (
                                      <Play className="h-4 w-4 text-gray-400 mr-3" />
                                    ) : (
                                      <FileText className="h-4 w-4 text-gray-400 mr-3" />
                                    )}
                                    <span className={`text-sm ${lesson.type === 'project' ? 'font-medium' : ''}`}>
                                      {lesson.title}
                                    </span>
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {lesson.duration}
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
                
                {/* Instructor Tab */}
                <TabsContent value="instructor" className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-24 h-24 rounded-full overflow-hidden mr-6">
                      <img
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold mb-1">{course.instructor.name}</h2>
                      <p className="text-gray-600 mb-4">{course.instructor.title}</p>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-sm">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" strokeWidth={0} />
                          <span>4.8 Instructor Rating</span>
                        </div>
                        <div className="flex items-center">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          <span>1,245 Reviews</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          <span>50,000+ Students</span>
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-1" />
                          <span>15 Courses</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700">
                        {course.instructor.bio}
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                {/* Reviews Tab */}
                <TabsContent value="reviews" className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Rating summary */}
                    <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg">
                      <div className="text-center mb-6">
                        <div className="text-5xl font-bold text-gray-900 mb-2">{course.rating.toFixed(1)}</div>
                        <div className="flex justify-center mb-1">
                          {renderRatingStars(course.rating)}
                        </div>
                        <p className="text-gray-500">Course Rating</p>
                      </div>
                      
                      <div className="space-y-3">
                        {[5, 4, 3, 2, 1].map((star) => {
                          const percentage = star === 5 ? 78 : star === 4 ? 15 : star === 3 ? 5 : star === 2 ? 1.5 : 0.5;
                          return (
                            <div key={star} className="flex items-center">
                              <div className="w-3 text-sm text-gray-600">{star}</div>
                              <Star className="h-3 w-3 text-yellow-400 fill-current mx-1" strokeWidth={0} />
                              <div className="flex-grow mx-2">
                                <Progress value={percentage} className="h-2" />
                              </div>
                              <div className="text-sm text-gray-500">{percentage}%</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                    {/* Reviews list */}
                    <div className="md:w-2/3">
                      <h2 className="text-2xl font-semibold mb-4">Student Reviews</h2>
                      
                      <div className="space-y-6">
                        {course.reviews.map((review) => (
                          <div key={review.id} className="border-b pb-6">
                            <div className="flex items-start">
                              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                <img
                                  src={review.avatar}
                                  alt={review.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-grow">
                                <div className="flex justify-between">
                                  <h4 className="font-medium">{review.name}</h4>
                                  <span className="text-gray-500 text-sm">{review.date}</span>
                                </div>
                                <div className="my-1">{renderRatingStars(review.rating)}</div>
                                <p className="text-gray-700 mt-2">{review.text}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6">
                        <Button className="bg-primary-500 hover:bg-primary-600 text-white">
                          See More Reviews
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="lg:w-1/3">
              {/* Other Recommendations */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4">You Might Also Like</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex">
                      <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
                        <img
                          src={`https://images.unsplash.com/photo-151587920${i}367-8466d910aaa4?auto=format&fit=crop&q=80&w=200`}
                          alt="Course thumbnail"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium text-sm line-clamp-2">Advanced React Patterns and Best Practices</h4>
                        <div className="flex items-center mt-1 mb-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" strokeWidth={0} />
                          <span className="text-xs ml-1">4.7</span>
                        </div>
                        <span className="text-sm font-medium">$79.99</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 text-sm">
                  View More
                </Button>
              </div>
              
              {/* Course Tags */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-4">Topics Covered</h3>
                <div className="flex flex-wrap gap-2">
                  {[...course.tags, "Web Development", "Frontend", "Backend", "Database", "API", "Redux", "MERN Stack", "Express", "Authentication"].map((tag, i) => (
                    <Badge key={i} variant="outline" className="bg-white">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CourseDetail;
