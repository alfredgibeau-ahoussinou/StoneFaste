'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effet de scroll pour changer l'apparence de la navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '/', label: 'Accueil' },
    { href: '/vehicules', label: 'Nos véhicules' },
    { href: '/comment-ca-marche', label: 'Comment ça marche ?' },
    { href: '/contact', label: 'Contact' },
    { href: '/a-propos', label: 'À propos' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-stonefast-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-stonefast-blue rounded-lg flex items-center justify-center">
              <span className="text-stonefast-white font-bold text-xl">S</span>
            </div>
            <span className={`font-bold text-2xl transition-colors duration-300 ${
              isScrolled ? 'text-stonefast-blue' : 'text-stonefast-white'
            }`}>
              StoneFast
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-200 font-medium ${
                  isScrolled 
                    ? 'text-stonefast-gray-dark hover:text-stonefast-blue' 
                    : 'text-stonefast-white hover:text-stonefast-gray-light'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/reservation/informations"
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                isScrolled
                  ? 'bg-stonefast-blue text-stonefast-white hover:bg-stonefast-blue-dark'
                  : 'bg-stonefast-white/20 text-stonefast-white border border-stonefast-white/30 hover:bg-stonefast-white/30'
              }`}
            >
              Réserver
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-200 ${
                isScrolled ? 'text-stonefast-gray-dark' : 'text-stonefast-white'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t transition-all duration-300 ${
              isScrolled 
                ? 'bg-stonefast-white/95 backdrop-blur-md border-stonefast-gray' 
                : 'bg-black/20 backdrop-blur-md border-stonefast-white/20'
            }`}>
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isScrolled 
                      ? 'text-stonefast-gray-dark hover:text-stonefast-blue' 
                      : 'text-stonefast-white hover:text-stonefast-gray-light'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/reservation/informations"
                className={`block px-3 py-2 rounded-md text-base font-medium mt-4 transition-all duration-200 ${
                  isScrolled
                    ? 'bg-stonefast-blue text-stonefast-white'
                    : 'bg-stonefast-white/20 text-stonefast-white border border-stonefast-white/30'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Réserver
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 