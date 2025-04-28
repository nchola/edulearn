
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <div className="text-primary-500 text-xl font-bold mr-1">Edu</div>
              <div className="text-accent-500 text-xl font-bold">Learn</div>
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              Empowering students with interactive online learning experiences and quality education accessible to everyone.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-900 mb-4">
              Courses
            </h3>
            <ul className="space-y-2">
              <li><Link to="/catalog" className="text-gray-600 hover:text-primary-500 text-sm transition-colors">All Courses</Link></li>
              <li><Link to="/catalog?category=programming" className="text-gray-600 hover:text-primary-500 text-sm transition-colors">Programming</Link></li>
              <li><Link to="/catalog?category=design" className="text-gray-600 hover:text-primary-500 text-sm transition-colors">Design</Link></li>
              <li><Link to="/catalog?category=business" className="text-gray-600 hover:text-primary-500 text-sm transition-colors">Business</Link></li>
              <li><Link to="/catalog?category=personal-development" className="text-gray-600 hover:text-primary-500 text-sm transition-colors">Personal Development</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-900 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-primary-500 text-sm transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-primary-500 text-sm transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-primary-500 text-sm transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary-500 text-sm transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-900 mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-600 hover:text-primary-500 text-sm transition-colors">Help Center</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-primary-500 text-sm transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-primary-500 text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-primary-500 text-sm transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} EduLearn. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-gray-500 hover:text-gray-900 text-sm">
                Terms
              </Link>
              <Link to="/privacy" className="text-gray-500 hover:text-gray-900 text-sm">
                Privacy
              </Link>
              <Link to="/cookie" className="text-gray-500 hover:text-gray-900 text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
