
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Search, Filter, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";

const Catalog = () => {
  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [duration, setDuration] = useState([0, 20]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Category options
  const categories = [
    "Programming", "Design", "Business", "Marketing", 
    "Personal Development", "Photography", "Music", "Health & Fitness"
  ];
  
  // Level options
  const levels = ["Beginner", "Intermediate", "Advanced"];
  
  // Sample course data
  const allCourses = [
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
      price: 74.99,
    },
    {
      id: 6,
      title: "Photography Masterclass: From Beginner to Pro",
      instructor: "Robert Chen",
      rating: 4.9,
      reviewCount: 678,
      level: "Beginner" as const,
      duration: "8 weeks",
      lessons: 40,
      students: 14260,
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=600",
      category: "Photography",
      price: 84.99,
      discount: 15,
    },
    {
      id: 7,
      title: "Personal Finance: Managing Your Money",
      instructor: "Emily Watson",
      rating: 4.7,
      reviewCount: 423,
      level: "Beginner" as const,
      duration: "4 weeks",
      lessons: 20,
      students: 9820,
      image: "https://images.unsplash.com/photo-1579621970590-9d624316904b?auto=format&fit=crop&q=80&w=600",
      category: "Personal Development",
      price: 59.99,
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
      price: 69.99,
    },
    {
      id: 9,
      title: "Mobile App Development with Flutter",
      instructor: "Mark Williams",
      rating: 4.8,
      reviewCount: 567,
      level: "Advanced" as const,
      duration: "12 weeks",
      lessons: 48,
      students: 8900,
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=600",
      category: "Programming",
      price: 94.99,
      discount: 10,
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
      price: 74.99,
    },
    {
      id: 11,
      title: "Content Marketing: Strategy and Execution",
      instructor: "Daniel Brown",
      rating: 4.6,
      reviewCount: 312,
      level: "Intermediate" as const,
      duration: "6 weeks",
      lessons: 24,
      students: 5680,
      image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=600",
      category: "Marketing",
      price: 64.99,
    },
    {
      id: 12,
      title: "Music Production with Ableton Live",
      instructor: "James Wilson",
      rating: 4.9,
      reviewCount: 378,
      level: "Intermediate" as const,
      duration: "10 weeks",
      lessons: 45,
      students: 7320,
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=600",
      category: "Music",
      price: 89.99,
      discount: 15,
    },
  ];
  
  // Toggle category selection
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  // Toggle level selection
  const toggleLevel = (level: string) => {
    if (selectedLevels.includes(level)) {
      setSelectedLevels(selectedLevels.filter(l => l !== level));
    } else {
      setSelectedLevels([...selectedLevels, level]);
    }
  };
  
  // Filter courses based on selected filters
  const filteredCourses = allCourses.filter(course => {
    // Filter by search query
    if (searchQuery && !course.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by category
    if (selectedCategories.length > 0 && !selectedCategories.includes(course.category)) {
      return false;
    }
    
    // Filter by level
    if (selectedLevels.length > 0 && !selectedLevels.includes(course.level)) {
      return false;
    }
    
    // Filter by duration (weeks)
    const courseDurationWeeks = parseInt(course.duration.split(' ')[0]);
    if (courseDurationWeeks < duration[0] || courseDurationWeeks > duration[1]) {
      return false;
    }
    
    return true;
  });
  
  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setSelectedLevels([]);
    setDuration([0, 20]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Browse All Courses</h1>
            <p className="text-gray-600">Discover the perfect course to enhance your skills and knowledge</p>
          </div>
          
          {/* Search and Filter Bar */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search input */}
              <div className="flex-grow relative">
                <Input
                  type="text"
                  placeholder="Search for courses..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
              
              {/* Filter button (mobile) */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center"
              >
                <Filter className="mr-2 h-5 w-5" />
                Filters
                {(selectedCategories.length > 0 || selectedLevels.length > 0) && (
                  <Badge className="ml-2 bg-primary-500">
                    {selectedCategories.length + selectedLevels.length}
                  </Badge>
                )}
              </Button>
              
              {/* Applied filters */}
              {(selectedCategories.length > 0 || selectedLevels.length > 0) && (
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-sm text-gray-500">Filters:</span>
                  
                  {selectedCategories.map(category => (
                    <Badge key={category} variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-800">
                      {category}
                      <button 
                        onClick={() => toggleCategory(category)}
                        className="ml-1 hover:text-gray-900"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  
                  {selectedLevels.map(level => (
                    <Badge key={level} variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-800">
                      {level}
                      <button 
                        onClick={() => toggleLevel(level)}
                        className="ml-1 hover:text-gray-900"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  
                  <Button 
                    variant="link" 
                    onClick={clearFilters} 
                    className="text-gray-500 hover:text-gray-800 p-0 h-auto text-sm"
                  >
                    Clear all
                  </Button>
                </div>
              )}
            </div>
            
            {/* Filter options (collapsible on mobile) */}
            <div className={`${showFilters || 'hidden md:block'} mt-6`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-gray-900">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => toggleCategory(category)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedCategories.includes(category)
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 text-gray-900">Level</h3>
                  <div className="flex flex-wrap gap-2">
                    {levels.map(level => (
                      <button
                        key={level}
                        onClick={() => toggleLevel(level)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedLevels.includes(level)
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 text-gray-900">Duration (weeks)</h3>
                  <Slider
                    value={duration}
                    min={0}
                    max={20}
                    step={1}
                    onValueChange={setDuration}
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>{duration[0]} weeks</span>
                    <span>{duration[1]} weeks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Results section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">{filteredCourses.length} courses</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select className="text-sm border rounded-md p-1">
                  <option>Most Popular</option>
                  <option>Highest Rated</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>
            
            {/* Course grid */}
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredCourses.map(course => (
                  <CourseCard key={course.id} {...course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <Search className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No courses found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search or filter criteria
                </p>
                <Button onClick={clearFilters}>Clear all filters</Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Catalog;
