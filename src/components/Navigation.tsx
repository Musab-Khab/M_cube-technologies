import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
   <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img
          src="/Leonardo_Lightning_XL_Create_a_modern_futuristic_3D_logo_for_a_0.jpg"
          alt="M Cube Logo"
          className="w-10 h-10 object-cover rounded-full"
        />
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          M cube
        </div>
      </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="https://wa.me/923362159777" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">+923362159777</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-400 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <div className="border-t border-white/10 pt-4 mt-4">
              <a href="https://wa.me/923362159777" className="flex items-center text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                <span>+923362159777</span>
              </a>
              <a href="mailto:musabkhan703@mail.com" className="flex items-center text-gray-300 hover:text-blue-400 px-3 py-2 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                <span>musabkhan703@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;