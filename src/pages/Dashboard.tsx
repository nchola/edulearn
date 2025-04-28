
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Clock, Calendar, Award, BookCheck, Bell, Star, Activity } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgressCard from "@/components/ProgressCard";
import CourseCard from "@/components/CourseCard";
import CourseProgressBar from "@/components/CourseProgressBar";
import StatCard from "@/components/StatCard";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Sample in progress courses
  const inProgressCourses = [
    {
      id: 1,
      title: "Mastering Web Development with React & Node.js",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=600",
      progress: 68,
      lastAccessed: "Yesterday",
      nextLesson: "Advanced React Hooks",
      timeRemaining: "6h 20m",
      lessonsCompleted: 28,
      totalLessons: 42,
    },
    {
      id: 3,
      title: "UI/UX Design: Create Beautiful User Experiences",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600",
      progress: 34,
      lastAccessed: "2 days ago",
      nextLesson: "User Research Methods",
      timeRemaining: "12h 45m",
      lessonsCompleted: 10,
      totalLessons: 28,
    },
  ];

  // Sample recommended courses
  const recommendedCourses = [
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

  // Sample upcoming assignments/events
  const upcomingEvents = [
    {
      id: 1,
      title: "React Final Project Due",
      date: "Oct 12, 2023",
      type: "assignment",
      course: "Web Development",
    },
    {
      id: 2,
      title: "Live Q&A Session with Alex Johnson",
      date: "Oct 15, 2023",
      time: "10:00 AM",
      type: "session",
      course: "Web Development",
    },
    {
      id: 3,
      title: "UI/UX Design Practice Quiz",
      date: "Oct 18, 2023",
      type: "quiz",
      course: "UI/UX Design",
    },
  ];

  // Sample notifications
  const notifications = [
    {
      id: 1,
      message: "Alex Johnson replied to your question in Web Development",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      message: "New course added: Advanced CSS Animations",
      time: "Yesterday",
      read: true,
    },
    {
      id: 3,
      message: "Your UI/UX Design assignment was graded",
      time: "2 days ago",
      read: true,
    },
  ];

  // Sample achievements
  const achievements = [
    {
      id: 1,
      title: "Quick Learner",
      description: "Complete 5 lessons in a single day",
      icon: <Clock className="h-8 w-8" />,
      achieved: true,
      date: "Oct 8, 2023",
    },
    {
      id: 2,
      title: "Coding Champion",
      description: "Submit 10 perfect coding assignments",
      icon: <BookCheck className="h-8 w-8" />,
      achieved: true,
      date: "Sep 22, 2023",
    },
    {
      id: 3,
      title: "Discussion Master",
      description: "Participate in 20 forum discussions",
      icon: <Bell className="h-8 w-8" />,
      achieved: false,
      progress: 15,
      total: 20,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto py-8">
          {/* Welcome Section */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, Jason!</h1>
              <p className="text-gray-600">Continue your learning journey and achieve your goals.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link to="/catalog">
                <Button className="bg-primary-500 hover:bg-primary-600">
                  Find New Courses
                </Button>
              </Link>
            </div>
          </div>

          {/* Dashboard Tabs */}
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid grid-cols-3 mb-8 w-full max-w-md">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="progress">My Progress</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                  title="Learning Hours"
                  value="32.5"
                  icon={Clock}
                  description="Total hours this month"
                  change={{ value: 12, positive: true }}
                  color="blue"
                />
                <StatCard
                  title="Courses In Progress"
                  value={inProgressCourses.length}
                  icon={BookOpen}
                  description="2 courses active"
                  color="green"
                />
                <StatCard
                  title="Completed Lessons"
                  value="38"
                  icon={BookCheck}
                  description="Out of 70 total lessons"
                  change={{ value: 8, positive: true }}
                  color="orange"
                />
                <StatCard
                  title="Avg. Quiz Score"
                  value="85%"
                  icon={Activity}
                  description="Last 30 days"
                  change={{ value: 5, positive: true }}
                  color="purple"
                />
              </div>

              {/* In Progress Courses Section */}
              <section>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">In Progress Courses</h2>
                  <Link to="/my-courses" className="text-primary-500 hover:text-primary-600 text-sm flex items-center">
                    View all <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
                <div className="space-y-6">
                  {inProgressCourses.map((course) => (
                    <ProgressCard key={course.id} {...course} />
                  ))}
                </div>
              </section>

              {/* Upcoming Events Section */}
              <section>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Upcoming Events</h2>
                  <Link to="/calendar" className="text-primary-500 hover:text-primary-600 text-sm flex items-center">
                    View calendar <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
                <Card>
                  <CardContent className="p-0">
                    <ul className="divide-y">
                      {upcomingEvents.map((event) => (
                        <li key={event.id} className="p-4 hover:bg-gray-50">
                          <div className="flex items-start">
                            <div className={`p-2 rounded-lg mr-4 ${
                              event.type === 'assignment' ? 'bg-primary-100 text-primary-600' :
                              event.type === 'session' ? 'bg-accent-100 text-accent-600' :
                              'bg-green-100 text-green-600'
                            }`}>
                              {event.type === 'assignment' && <BookCheck className="h-5 w-5" />}
                              {event.type === 'session' && <Monitor className="h-5 w-5" />}
                              {event.type === 'quiz' && <BookOpen className="h-5 w-5" />}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium text-gray-900">{event.title}</h3>
                              <p className="text-sm text-gray-500">{event.course}</p>
                              <div className="flex items-center mt-1 text-sm text-gray-500">
                                <Calendar className="h-3.5 w-3.5 mr-1" />
                                {event.date} {event.time && `• ${event.time}`}
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>

              {/* Recommended Courses */}
              <section>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Recommended For You</h2>
                  <Link to="/catalog" className="text-primary-500 hover:text-primary-600 text-sm flex items-center">
                    Browse all courses <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {recommendedCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              </section>
            </TabsContent>

            {/* Progress Tab */}
            <TabsContent value="progress" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Your Learning Progress</CardTitle>
                  <CardDescription>Track your course completion and weekly learning goals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-medium text-lg mb-3">Weekly Learning Goal</h3>
                      <div className="flex items-center mb-2">
                        <div className="flex-grow mr-4">
                          <CourseProgressBar completed={7} total={10} size="lg" />
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-semibold text-primary-600">7/10</div>
                          <div className="text-sm text-gray-500">hours</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">3 more hours to reach your weekly goal</p>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg mb-3">Course Progress</h3>
                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between mb-1">
                            <h4 className="font-medium">Web Development with React & Node.js</h4>
                            <span className="text-primary-600 font-medium">68%</span>
                          </div>
                          <CourseProgressBar completed={28} total={42} showPercentage={false} />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <h4 className="font-medium">UI/UX Design Fundamentals</h4>
                            <span className="text-primary-600 font-medium">34%</span>
                          </div>
                          <CourseProgressBar completed={10} total={28} showPercentage={false} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg mb-3">Learning Activity</h3>
                      <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">Learning activity chart will be displayed here</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Achievements Tab */}
            <TabsContent value="achievements" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Your Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-4">
                      <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary-100 text-primary-600 mb-4">
                        <Award className="h-10 w-10" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900">12</div>
                      <p className="text-gray-500">Total Achievements</p>
                    </div>
                    <div className="flex justify-between items-center mt-4 text-sm">
                      <div className="text-center">
                        <div className="text-xl font-semibold text-gray-900">4</div>
                        <p className="text-gray-500">This Month</p>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-semibold text-accent-600">75%</div>
                        <p className="text-gray-500">Completion</p>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-semibold text-gray-900">8</div>
                        <p className="text-gray-500">To Unlock</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Recent Achievements</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="divide-y">
                      {achievements.map((achievement) => (
                        <li key={achievement.id} className="p-4">
                          <div className="flex">
                            <div className={`p-2 rounded-lg mr-4 ${achievement.achieved ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
                              {achievement.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                                {achievement.achieved ? (
                                  <span className="flex items-center text-sm text-green-600">
                                    <Star className="h-4 w-4 fill-current mr-1" strokeWidth={0} />
                                    Achieved
                                  </span>
                                ) : (
                                  <span className="text-sm text-gray-600">In Progress</span>
                                )}
                              </div>
                              <p className="text-sm text-gray-500 mt-1">{achievement.description}</p>
                              
                              {achievement.achieved ? (
                                <p className="text-xs text-gray-500 mt-2">Achieved on {achievement.date}</p>
                              ) : (
                                <div className="mt-2">
                                  <CourseProgressBar 
                                    completed={achievement.progress || 0} 
                                    total={achievement.total || 1} 
                                    size="sm" 
                                    showPercentage={false} 
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Notifications Section */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Notifications</h2>
              <button className="text-primary-500 hover:text-primary-600 text-sm">
                Mark all as read
              </button>
            </div>
            <Card>
              <CardContent className="p-0">
                {notifications.length > 0 ? (
                  <ul className="divide-y">
                    {notifications.map((notification) => (
                      <li key={notification.id} className={`p-4 ${notification.read ? "" : "bg-blue-50"}`}>
                        <div className="flex items-start">
                          <div className={`rounded-full h-2 w-2 mt-2 mr-4 ${notification.read ? "bg-gray-300" : "bg-primary-500"}`}></div>
                          <div className="flex-1">
                            <p className={`${notification.read ? "text-gray-700" : "text-gray-900"}`}>
                              {notification.message}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="py-8 text-center text-gray-500">
                    No new notifications
                  </div>
                )}
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;

import { Monitor } from "lucide-react";
