import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MapPin, Phone, Mail, Globe, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white">
                <BookOpen size={18} />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Scholar<span className="text-secondary">Sphere</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Premium coaching academy dedicated to providing expert guidance for Class 10 Science and Class 11 & 12 Chemistry students.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Globe size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors"><MessageSquare size={18} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-secondary rounded-full transform translate-y-2"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-secondary transition-colors">Our Courses</Link></li>
              <li><Link to="/results" className="hover:text-secondary transition-colors">Results & Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
              Our Courses
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary rounded-full transform translate-y-2"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/courses" className="hover:text-primary transition-colors">Class 10 Science</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition-colors">Class 11 Chemistry</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition-colors">Class 12 Chemistry</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition-colors">Online Batches</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition-colors">Crash Courses</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
              Contact Info
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-secondary rounded-full transform translate-y-2"></span>
            </h3>
            <ul className="space-y-4">

              <li className="flex gap-3 items-center">
                <Phone size={20} className="text-secondary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={20} className="text-secondary shrink-0" />
                <span>info@scholarsphere.edu</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} ScholarSphere Academy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
