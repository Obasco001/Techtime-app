import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../Button';

interface NavbarProps {
  onLogin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLogin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary-500 shadow-md py-2' : 'bg-primary-500 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-3xl font-bold text-white italic" style={{ fontFamily: 'cursive' }}>
              TechTime
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/90 hover:text-white font-medium">Home</a>
            <a href="#about" className="text-white/80 hover:text-white font-medium">About Us</a>
            <a href="#courses" className="text-white/80 hover:text-white font-medium">Courses</a>
            <a href="#testimonial" className="text-white/80 hover:text-white font-medium">Testimonial</a>
            <a href="#community" className="text-white/80 hover:text-white font-medium">Community</a>
            <Button variant="white" size="md" onClick={onLogin} className="text-primary-500 font-bold px-8">
              Enroll Now
            </Button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gray-200">
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-600 border-t border-primary-400/30">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#" className="block py-3 text-white hover:bg-white/10 rounded px-2">Home</a>
            <a href="#about" className="block py-3 text-white/90 hover:bg-white/10 rounded px-2">About Us</a>
            <a href="#courses" className="block py-3 text-white/90 hover:bg-white/10 rounded px-2">Courses</a>
            <a href="#testimonial" className="block py-3 text-white/90 hover:bg-white/10 rounded px-2">Testimonial</a>
            <a href="#community" className="block py-3 text-white/90 hover:bg-white/10 rounded px-2">Community</a>
            <div className="pt-4">
              <Button variant="white" className="w-full" onClick={onLogin}>Enroll Now</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};