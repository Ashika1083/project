import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, User, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
      style={{ transform: isScrolled ? 'translateY(-100%)' : 'translateY(0)', transition: 'transform 0.3s ease-in-out' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-800 hover:text-blue-700 font-medium transition duration-300"
            >
              Home
            </button>
            
            <div className="relative group">
              <button 
                onClick={() => scrollToSection('courses')}
                className="flex items-center text-gray-800 hover:text-blue-700 font-medium"
              >
                Courses <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl shadow-lg">
                <div className="py-2">
                  <DropdownItem onClick={() => scrollToSection('java')} label="Java Full Stack" />
                  <DropdownItem onClick={() => scrollToSection('python')} label="Python Full Stack" />
                  <DropdownItem onClick={() => scrollToSection('mern')} label="MERN Stack" />
                  <DropdownItem onClick={() => scrollToSection('cybersecurity')} label="Cybersecurity" />
                  <DropdownItem onClick={() => scrollToSection('aws')} label="AWS Cloud" />
                  <DropdownItem onClick={() => scrollToSection('data-science')} label="Data Science" />
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => scrollToSection('technologies')}
              className="text-gray-800 hover:text-blue-700 font-medium transition duration-300"
            >
              Technologies
            </button>
            <button 
              onClick={() => scrollToSection('placements')}
              className="text-gray-800 hover:text-blue-700 font-medium transition duration-300"
            >
              Placements
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-800 hover:text-blue-700 font-medium transition duration-300"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-800 hover:text-blue-700 font-medium transition duration-300"
            >
              Contact Us
            </button>
          </nav>
          
          <div className="hidden lg:flex items-center space-x-4">
            <button className="flex items-center text-gray-600 hover:text-blue-700">
              <Search className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-2">
              <Link
                to="/login"
                className="text-gray-800 hover:text-blue-700 font-medium px-4 py-2 rounded-full transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="flex items-center bg-blue-700 text-white px-6 py-2.5 rounded-full hover:bg-blue-800 transition duration-300"
              >
                <User className="h-4 w-4 mr-2" />
                Sign Up
              </Link>
            </div>
          </div>
          
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-blue-700 focus:outline-none"
            >
              {isOpen ? 
                <X className="h-6 w-6" /> : 
                <Menu className="h-6 w-6" />
              }
            </button>
          </div>
        </div>
      </div>
      
      <div 
        className={`lg:hidden bg-white/90 backdrop-blur-md transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-3">
          <MobileNavLink onClick={() => scrollToSection('home')} label="Home" />
          <MobileNavLink onClick={() => scrollToSection('courses')} label="Courses" />
          <MobileNavLink onClick={() => scrollToSection('technologies')} label="Technologies" />
          <MobileNavLink onClick={() => scrollToSection('placements')} label="Placements" />
          <MobileNavLink onClick={() => scrollToSection('about')} label="About Us" />
          <MobileNavLink onClick={() => scrollToSection('contact')} label="Contact Us" />
          <div className="flex flex-col space-y-2 pt-2">
            <Link
              to="/login"
              className="w-full text-center text-gray-800 hover:text-blue-700 font-medium py-2 rounded-full transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="w-full flex justify-center items-center bg-blue-700 text-white px-6 py-2.5 rounded-full hover:bg-blue-800 transition duration-300"
            >
              <User className="h-4 w-4 mr-2" />
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

const DropdownItem = ({ onClick, label }: { onClick: () => void; label: string }) => (
  <button 
    onClick={onClick}
    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
  >
    {label}
  </button>
);

const MobileNavLink = ({ onClick, label }: { onClick: () => void; label: string }) => (
  <button 
    onClick={onClick}
    className="block w-full py-2 text-base font-medium text-gray-800 hover:text-blue-700 border-b border-gray-200"
  >
    {label}
  </button>
);

export default Navbar;