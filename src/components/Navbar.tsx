
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, User, Bell, Book, Home, GraduationCap } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  // For demo purposes, let's assume user is logged in on certain pages
  const isLoggedIn = location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/register";
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/", icon: <Home className="h-4 w-4 mr-2" /> },
    { name: "Courses", path: "/catalog", icon: <Book className="h-4 w-4 mr-2" /> },
    { name: "About", path: "/about", icon: <GraduationCap className="h-4 w-4 mr-2" /> },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="text-primary-500 text-2xl font-bold mr-2">Edu</div>
              <div className="text-accent-500 text-2xl font-bold">Learn</div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="hidden md:flex space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-2 px-3 text-sm font-medium rounded-md transition-colors hover:bg-primary-100 flex items-center ${
                    isActive(link.path) ? "text-primary-500" : "text-gray-700"
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Search bar - Hidden on mobile */}
          <div className="hidden md:block mx-4 flex-grow max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for courses..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Right side - auth or profile */}
          <div className="flex items-center">
            {isLoggedIn ? (
              <>
                {/* Notification icon */}
                <button className="p-2 rounded-full hover:bg-gray-100 relative">
                  <Bell className="h-5 w-5 text-gray-600" />
                  <span className="absolute top-1 right-1 bg-accent-500 rounded-full w-2 h-2"></span>
                </button>
                
                {/* Profile link */}
                <Link to="/profile" className="ml-2">
                  <div className="h-9 w-9 rounded-full bg-primary-200 flex items-center justify-center text-primary-700 font-medium">
                    JS
                  </div>
                </Link>
              </>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="outline" size="sm">
                    Log In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="default" size="sm" className="bg-primary-500 hover:bg-primary-600">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 ml-2 rounded-md hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pt-2 pb-4 border-t">
            {/* Mobile search */}
            <div className="relative mt-3 mb-4">
              <input
                type="text"
                placeholder="Search for courses..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            
            {/* Mobile nav links */}
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-2 px-3 text-sm font-medium rounded-md hover:bg-primary-100 ${
                    isActive(link.path) ? "text-primary-500" : "text-gray-700"
                  } flex items-center`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile auth buttons */}
            {!isLoggedIn && (
              <div className="mt-4 space-y-2">
                <Link to="/login" className="block">
                  <Button variant="outline" className="w-full">
                    Log In
                  </Button>
                </Link>
                <Link to="/register" className="block">
                  <Button className="w-full bg-primary-500 hover:bg-primary-600">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
