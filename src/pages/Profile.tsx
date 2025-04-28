
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { 
  Award, 
  Bell, 
  BookOpen, 
  Clock, 
  Edit, 
  FileText, 
  Languages, 
  LogOut, 
  MessageSquare, 
  Settings, 
  Shield, 
  User, 
  BookCheck 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import CourseProgressBar from "@/components/CourseProgressBar";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  
  // Mock user data
  const user = {
    name: "Jason Smith",
    username: "jasonsmith",
    email: "jason.smith@example.com",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Frontend developer passionate about creating beautiful user experiences. Currently learning React and Node.js to become a full-stack developer.",
    location: "San Francisco, CA",
    website: "jasonsmith.dev",
    joined: "January 2023",
    skills: ["JavaScript", "HTML", "CSS", "React", "UI/UX Design"],
    interests: ["Web Development", "Mobile Apps", "Design", "Machine Learning"],
    stats: {
      coursesCompleted: 8,
      coursesInProgress: 2,
      certificates: 6,
      hoursLearned: 124,
    },
  };
  
  // Mock course data
  const completedCourses = [
    {
      id: 5,
      title: "Business Strategy: Formulate a Winning Plan",
      instructor: "Jennifer Lopez",
      rating: 4.6,
      reviewCount: 512,
      level: "Intermediate" as const,
      duration: "5 weeks",
      lessons: 24,
      students: 7840,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600",
      category: "Business",
      completedOn: "September 2023",
      certificate: true,
    },
    {
      id: 8,
      title: "Social Media Marketing Strategy",
      instructor: "Chris Johnson",
      rating: 4.6,
      reviewCount: 345,
      level: "Intermediate" as const,
      duration: "6 weeks",
      lessons: 30,
      students: 6750,
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600",
      category: "Marketing",
      completedOn: "August 2023",
      certificate: true,
    },
    {
      id: 10,
      title: "Graphic Design Fundamentals",
      instructor: "Sophia Lee",
      rating: 4.7,
      reviewCount: 489,
      level: "Beginner" as const,
      duration: "8 weeks",
      lessons: 32,
      students: 11240,
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600",
      category: "Design",
      completedOn: "July 2023",
      certificate: true,
    },
  ];
  
  const inProgressCourses = [
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
      progress: 68,
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
      progress: 34,
    },
  ];
  
  // Mock certificates
  const certificates = [
    {
      id: 1,
      title: "Business Strategy: Formulate a Winning Plan",
      issueDate: "September 15, 2023",
      instructor: "Jennifer Lopez",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 2,
      title: "Social Media Marketing Strategy",
      issueDate: "August 22, 2023",
      instructor: "Chris Johnson",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 3,
      title: "Graphic Design Fundamentals",
      issueDate: "July 10, 2023",
      instructor: "Sophia Lee",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 4,
      title: "Introduction to Digital Marketing",
      issueDate: "June 5, 2023",
      instructor: "Mark Johnson",
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 5,
      title: "Content Writing Masterclass",
      issueDate: "May 18, 2023",
      instructor: "Emma Davis",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 6,
      title: "Email Marketing Strategies",
      issueDate: "April 2, 2023",
      instructor: "Robert Miller",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
    },
  ];
  
  // Mock achievements
  const achievements = [
    {
      id: 1,
      name: "Quick Learner",
      description: "Complete 5 lessons in a single day",
      icon: <Clock className="h-8 w-8" />,
      date: "October 8, 2023",
    },
    {
      id: 2,
      name: "Coding Champion",
      description: "Submit 10 perfect coding assignments",
      icon: <BookCheck className="h-8 w-8" />,
      date: "September 22, 2023",
    },
    {
      id: 3,
      name: "Course Collector",
      description: "Complete 5 courses",
      icon: <BookOpen className="h-8 w-8" />,
      date: "August 15, 2023",
    },
    {
      id: 4,
      name: "Consistent Learner",
      description: "Study for 7 consecutive days",
      icon: <Award className="h-8 w-8" />,
      date: "July 30, 2023",
    },
    {
      id: 5,
      name: "Active Participant",
      description: "Participate in 10 forum discussions",
      icon: <MessageSquare className="h-8 w-8" />,
      date: "June 25, 2023",
    },
    {
      id: 6,
      name: "Perfect Score",
      description: "Get 100% on a quiz",
      icon: <Award className="h-8 w-8" />,
      date: "May 12, 2023",
    },
  ];
  
  // Notification settings
  const notificationSettings = [
    { id: 1, name: "Course updates", description: "Get notified when your enrolled courses have updates", enabled: true },
    { id: 2, name: "New lessons", description: "Get notified when new lessons are available", enabled: true },
    { id: 3, name: "Assignment reminders", description: "Get reminders for upcoming assignments", enabled: true },
    { id: 4, name: "Forum activity", description: "Get notified when someone replies to your posts", enabled: false },
    { id: 5, name: "Promotional emails", description: "Receive special offers and promotions", enabled: false },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Profile header */}
          <div className="bg-white rounded-lg shadow-sm mb-8">
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-8">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-grow text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-bold mb-1">{user.name}</h1>
                      <p className="text-gray-500">@{user.username}</p>
                    </div>
                    
                    <Button className="mt-4 sm:mt-0 bg-primary-500 hover:bg-primary-600">
                      <Edit className="h-4 w-4 mr-2" /> Edit Profile
                    </Button>
                  </div>
                  
                  <p className="text-gray-700 mb-4 max-w-3xl">{user.bio}</p>
                  
                  <div className="flex flex-wrap gap-6 justify-center sm:justify-start text-sm">
                    {user.location && (
                      <div className="flex items-center text-gray-600">
                        <User className="h-4 w-4 mr-1" />
                        {user.location}
                      </div>
                    )}
                    
                    {user.website && (
                      <div className="flex items-center text-gray-600">
                        <FileText className="h-4 w-4 mr-1" />
                        <a href={`https://${user.website}`} target="_blank" rel="noreferrer" className="text-primary-500 hover:underline">
                          {user.website}
                        </a>
                      </div>
                    )}
                    
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      Joined {user.joined}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Bar */}
            <div className="border-t grid grid-cols-2 md:grid-cols-4">
              <div className="p-4 text-center border-r">
                <div className="text-2xl font-bold text-primary-600">{user.stats.coursesCompleted}</div>
                <div className="text-sm text-gray-500">Courses Completed</div>
              </div>
              <div className="p-4 text-center border-r">
                <div className="text-2xl font-bold text-primary-600">{user.stats.coursesInProgress}</div>
                <div className="text-sm text-gray-500">In Progress</div>
              </div>
              <div className="p-4 text-center border-r">
                <div className="text-2xl font-bold text-primary-600">{user.stats.certificates}</div>
                <div className="text-sm text-gray-500">Certificates</div>
              </div>
              <div className="p-4 text-center">
                <div className="text-2xl font-bold text-primary-600">{user.stats.hoursLearned}</div>
                <div className="text-sm text-gray-500">Hours Learned</div>
              </div>
            </div>
          </div>
          
          {/* Profile Content */}
          <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8 w-full">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="courses">My Courses</TabsTrigger>
              <TabsTrigger value="certificates">Certificates</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            
            {/* Profile Tab */}
            <TabsContent value="profile">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left column */}
                <div className="md:col-span-2 space-y-8">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-semibold mb-4">About Me</h2>
                    <p className="text-gray-700">{user.bio}</p>
                    
                    {/* Skills and Interests */}
                    <div className="mt-6">
                      <h3 className="font-medium mb-2">Skills</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {user.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="bg-gray-100">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                      <h3 className="font-medium mb-2">Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {user.interests.map((interest, index) => (
                          <Badge key={index} variant="outline">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Learning Progress */}
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-semibold mb-4">Learning Progress</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium">Web Development with React & Node.js</span>
                          <span className="text-primary-600">68%</span>
                        </div>
                        <CourseProgressBar completed={28} total={42} showPercentage={false} />
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium">UI/UX Design: Create Beautiful User Experiences</span>
                          <span className="text-primary-600">34%</span>
                        </div>
                        <CourseProgressBar completed={10} total={28} showPercentage={false} />
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="font-medium mb-3">Weekly Learning Goal</h3>
                      <div className="flex items-center">
                        <div className="flex-grow mr-4">
                          <CourseProgressBar completed={7} total={10} />
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-primary-600">7/10</div>
                          <div className="text-xs text-gray-500">hours</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">3 more hours to reach your weekly goal</p>
                    </div>
                  </div>
                </div>
                
                {/* Right column */}
                <div className="space-y-8">
                  {/* Latest Achievements */}
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-semibold">Latest Achievements</h2>
                      <Button variant="ghost" size="sm" className="text-primary-500">
                        View all
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      {achievements.slice(0, 3).map((achievement) => (
                        <div key={achievement.id} className="flex items-start">
                          <div className="bg-primary-100 text-primary-600 p-2 rounded-lg mr-3">
                            {achievement.icon}
                          </div>
                          <div>
                            <h4 className="font-medium">{achievement.name}</h4>
                            <p className="text-sm text-gray-500">{achievement.description}</p>
                            <p className="text-xs text-gray-400 mt-1">Earned on {achievement.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Latest Certificates */}
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-semibold">Latest Certificates</h2>
                      <Button variant="ghost" size="sm" className="text-primary-500">
                        View all
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      {certificates.slice(0, 3).map((certificate) => (
                        <div key={certificate.id} className="flex items-center">
                          <div className="w-12 h-12 rounded overflow-hidden mr-3">
                            <img
                              src={certificate.image}
                              alt={certificate.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm line-clamp-1">{certificate.title}</h4>
                            <p className="text-xs text-gray-500">Issued {certificate.issueDate}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* My Courses Tab */}
            <TabsContent value="courses">
              <div className="space-y-8">
                {/* In Progress Courses */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">In Progress ({inProgressCourses.length})</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {inProgressCourses.map((course) => (
                      <div key={course.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                        <div className="relative pt-[56.25%]">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                          />
                          {/* Category badge */}
                          <Badge className="absolute top-3 left-3 bg-white/90 text-gray-700 font-medium hover:bg-white/95">
                            {course.category}
                          </Badge>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                            {course.title}
                          </h3>
                          <p className="text-sm text-gray-500 mb-3">
                            by <span className="font-medium">{course.instructor}</span>
                          </p>
                          
                          <div className="mb-3">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-600">Progress</span>
                              <span className="font-medium text-primary-600">{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                          
                          <Button className="w-full bg-primary-500 hover:bg-primary-600">
                            Continue Learning
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Completed Courses */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Completed ({completedCourses.length})</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {completedCourses.map((course) => (
                      <div key={course.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                        <div className="relative pt-[56.25%]">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                          />
                          {/* Category badge */}
                          <Badge className="absolute top-3 left-3 bg-white/90 text-gray-700 font-medium hover:bg-white/95">
                            {course.category}
                          </Badge>
                          
                          {/* Completed overlay */}
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <Badge className="bg-green-500 text-white px-3 py-1 text-sm">
                              Completed
                            </Badge>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                            {course.title}
                          </h3>
                          <p className="text-sm text-gray-500 mb-3">
                            by <span className="font-medium">{course.instructor}</span>
                          </p>
                          
                          <div className="text-sm text-gray-600 mb-3">
                            Completed on {course.completedOn}
                          </div>
                          
                          <div className="flex space-x-2">
                            {course.certificate && (
                              <Button className="flex-1 bg-primary-500 hover:bg-primary-600">
                                <Award className="h-4 w-4 mr-2" /> View Certificate
                              </Button>
                            )}
                            <Button variant="outline" className="flex-1">
                              Review Course
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Certificates Tab */}
            <TabsContent value="certificates">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-xl font-semibold mb-6">My Certificates ({certificates.length})</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certificates.map((certificate) => (
                    <div key={certificate.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative pt-[56.25%] bg-gray-100">
                        <img
                          src={certificate.image}
                          alt={certificate.title}
                          className="absolute top-0 left-0 w-full h-full object-cover opacity-25"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                          <Award className="h-16 w-16 text-primary-500 mb-2" />
                          <h3 className="text-lg font-semibold text-center">{certificate.title}</h3>
                          <p className="text-sm text-gray-600">Issued {certificate.issueDate}</p>
                        </div>
                      </div>
                      <div className="p-4 flex justify-between items-center">
                        <div className="text-sm text-gray-600">
                          Instructor: {certificate.instructor}
                        </div>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            {/* Achievements Tab */}
            <TabsContent value="achievements">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-xl font-semibold mb-6">My Achievements</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className="border p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                      <div className="bg-primary-100 text-primary-600 p-4 rounded-full inline-flex items-center justify-center mb-4">
                        {achievement.icon}
                      </div>
                      <h3 className="font-semibold text-lg mb-1">{achievement.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{achievement.description}</p>
                      <span className="text-xs text-gray-500">Earned on {achievement.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            {/* Settings Tab */}
            <TabsContent value="settings">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Account Settings */}
                <div className="md:col-span-2 space-y-8">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-semibold">Profile Information</h2>
                      <Button className="bg-primary-500 hover:bg-primary-600">
                        Save Changes
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                          </label>
                          <Input id="name" defaultValue={user.name} />
                        </div>
                        <div>
                          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                            Username
                          </label>
                          <Input id="username" defaultValue={user.username} />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <Input id="email" type="email" defaultValue={user.email} />
                      </div>
                      
                      <div>
                        <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                          Bio
                        </label>
                        <Textarea id="bio" defaultValue={user.bio} rows={4} />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                            Location
                          </label>
                          <Input id="location" defaultValue={user.location} />
                        </div>
                        <div>
                          <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                            Website
                          </label>
                          <Input id="website" defaultValue={user.website} />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Notification Settings */}
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-semibold mb-6">Notification Settings</h2>
                    <div className="space-y-4">
                      {notificationSettings.map((setting) => (
                        <div key={setting.id} className="flex items-center justify-between py-2">
                          <div>
                            <h4 className="font-medium">{setting.name}</h4>
                            <p className="text-sm text-gray-500">{setting.description}</p>
                          </div>
                          <Switch checked={setting.enabled} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Sidebar */}
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold mb-4">Settings</h3>
                    <div className="space-y-2">
                      <button className="w-full text-left py-2 px-3 rounded-md hover:bg-gray-100 flex items-center">
                        <User className="h-5 w-5 mr-3 text-gray-500" />
                        <span>Profile Information</span>
                      </button>
                      <button className="w-full text-left py-2 px-3 rounded-md hover:bg-gray-100 flex items-center">
                        <Bell className="h-5 w-5 mr-3 text-gray-500" />
                        <span>Notifications</span>
                      </button>
                      <button className="w-full text-left py-2 px-3 rounded-md hover:bg-gray-100 flex items-center">
                        <Shield className="h-5 w-5 mr-3 text-gray-500" />
                        <span>Security & Password</span>
                      </button>
                      <button className="w-full text-left py-2 px-3 rounded-md hover:bg-gray-100 flex items-center">
                        <Languages className="h-5 w-5 mr-3 text-gray-500" />
                        <span>Language & Region</span>
                      </button>
                      <button className="w-full text-left py-2 px-3 rounded-md hover:bg-gray-100 flex items-center">
                        <Settings className="h-5 w-5 mr-3 text-gray-500" />
                        <span>Preferences</span>
                      </button>
                      <button className="w-full text-left py-2 px-3 rounded-md hover:bg-gray-100 text-red-600 flex items-center">
                        <LogOut className="h-5 w-5 mr-3" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold mb-4">Danger Zone</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <Button variant="destructive">
                      Delete Account
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
