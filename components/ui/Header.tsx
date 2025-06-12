import Image from "next/image"
import { useState } from 'react';
import { Button } from './button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-purple-100">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="flex items-center gap-2"
        >
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 p-0.5 shadow-lg">
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <Image
                src="/images/Logo.png"
                alt="Ara Plumber House Logo"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            Ara Plumber House
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }}
            className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r from-purple-600 to-blue-500 after:transition-all after:duration-300"
          >
            Services
          </a>
          <a
            href="#gallery"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('gallery');
            }}
            className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r from-purple-600 to-blue-500 after:transition-all after:duration-300"
          >
            Gallery
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
            className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r from-purple-600 to-blue-500 after:transition-all after:duration-300"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r from-purple-600 to-blue-500 after:transition-all after:duration-300"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            <Button className="hidden md:flex bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 shadow-md hover:shadow-lg transition-all duration-300 animate-pulse">
              Get a Quote
            </Button>
          </a>
          
          {/* Mobile menu button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden border-purple-200 hover:bg-purple-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              {isMenuOpen ? (
                // X icon when menu is open
                <>
                  <line x1="18" x2="6" y1="6" y2="18" />
                  <line x1="6" x2="18" y1="6" y2="18" />
                </>
              ) : (
                // Hamburger icon when menu is closed
                <>
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </>
              )}
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-purple-100 shadow-lg">
          <nav className="container px-4 py-4 mx-auto">
            <div className="flex flex-col space-y-1">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
                className="block px-4 py-3 text-sm font-medium hover:bg-purple-50 rounded-lg transition-colors"
              >
                Services
              </a>
              <a
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('gallery');
                }}
                className="block px-4 py-3 text-sm font-medium hover:bg-purple-50 rounded-lg transition-colors"
              >
                Gallery
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className="block px-4 py-3 text-sm font-medium hover:bg-purple-50 rounded-lg transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="block px-4 py-3 text-sm font-medium hover:bg-purple-50 rounded-lg transition-colors"
              >
                Contact
              </a>
              
              {/* Mobile Get a Quote button */}
              <div className="pt-3 border-t border-purple-100 mt-2">
                <Button 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Get a Quote
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}