import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, BookOpen } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white shadow-lg">
              <BookOpen size={24} />
            </div>
            <span className="font-bold text-2xl tracking-tight text-primary dark:text-white">
              Scholar<span className="text-secondary">Sphere</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/" className={`font-medium transition-colors hover:text-secondary ${location.pathname === '/' ? 'text-secondary dark:text-secondary' : 'text-gray-600 dark:text-gray-300'}`}>Home</Link>
            
            {/* Individual Course Buttons */}
            <div className="flex items-center gap-3">
              <Link to="/courses" className="px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors border border-blue-100 dark:border-blue-800">
                Science & Chemistry
              </Link>
              <Link to="/hindi" className="px-4 py-2 rounded-xl bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-bold text-sm hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors border border-orange-100 dark:border-orange-800">
                Hindi Tuition
              </Link>
            </div>

            <Link to="/about" className={`font-medium transition-colors hover:text-secondary ${location.pathname === '/about' ? 'text-secondary dark:text-secondary' : 'text-gray-600 dark:text-gray-300'}`}>About Us</Link>
            <Link to="/results" className={`font-medium transition-colors hover:text-secondary ${location.pathname === '/results' ? 'text-secondary dark:text-secondary' : 'text-gray-600 dark:text-gray-300'}`}>Results</Link>
            <Link to="/contact" className={`font-medium transition-colors hover:text-secondary ${location.pathname === '/contact' ? 'text-secondary dark:text-secondary' : 'text-gray-600 dark:text-gray-300'}`}>Contact</Link>
            


            <Link to="/contact" className="btn-primary py-2 px-5 text-sm">
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-xl border-t border-gray-100 dark:border-gray-800 py-4 px-4 flex flex-col space-y-4">
          <Link to="/" onClick={() => setIsOpen(false)} className={`block text-lg font-medium ${location.pathname === '/' ? 'text-secondary' : 'text-gray-600 dark:text-gray-300'}`}>Home</Link>
          
          <div className="grid grid-cols-2 gap-3 py-2 border-y border-gray-100 dark:border-gray-800">
            <Link to="/courses" onClick={() => setIsOpen(false)} className="px-3 py-2 text-center rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm hover:bg-blue-100 transition-colors">
              Science & Chemistry
            </Link>
            <Link to="/hindi" onClick={() => setIsOpen(false)} className="px-3 py-2 text-center rounded-xl bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-bold text-sm hover:bg-orange-100 transition-colors">
              Hindi Tuition
            </Link>
          </div>

          <Link to="/about" onClick={() => setIsOpen(false)} className={`block text-lg font-medium ${location.pathname === '/about' ? 'text-secondary' : 'text-gray-600 dark:text-gray-300'}`}>About Us</Link>
          <Link to="/results" onClick={() => setIsOpen(false)} className={`block text-lg font-medium ${location.pathname === '/results' ? 'text-secondary' : 'text-gray-600 dark:text-gray-300'}`}>Results</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className={`block text-lg font-medium ${location.pathname === '/contact' ? 'text-secondary' : 'text-gray-600 dark:text-gray-300'}`}>Contact</Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="btn-primary text-center mt-4 inline-block w-full"
          >
            Join Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
