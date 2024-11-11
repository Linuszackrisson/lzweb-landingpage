import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: '#services', label: 'Tjänster' },
    { href: '#about', label: 'Om oss' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/80 backdrop-blur-lg border-b border-gray-800/50 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-neutral-400 hover:text-blue-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-full transition-colors"
            >
              Kontakta oss
            </a>
          </nav>

          <button 
            className="md:hidden text-neutral-400 hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800/50">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-neutral-400 hover:text-blue-400 transition-colors"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block py-2 text-blue-400 hover:text-blue-300 transition-colors"
              onClick={closeMenu}
            >
              Kontakta oss
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}