'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass shadow-elegant' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-stonefast-blue to-stonefast-blue-dark rounded-2xl flex items-center justify-center shadow-elegant group-hover:animate-glow transition-all duration-300">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className={`font-bold text-3xl transition-all duration-300 group-hover:scale-105 ${
              isScrolled ? 'text-stonefast-gray-dark' : 'text-stonefast-white'
            }`}>
              StoneFast
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-all duration-300 font-medium relative group ${
                  isScrolled 
                    ? 'text-stonefast-gray-dark hover:text-stonefast-blue' 
                    : 'text-stonefast-white hover:text-stonefast-gold-light'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-stonefast-blue to-stonefast-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="/reservation/informations"
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                isScrolled
                  ? 'btn-primary'
                  : 'glass border-2 border-white/30 text-white hover:bg-white hover:text-stonefast-blue hover:border-white'
              }`}
            >
              Réserver
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-xl transition-all duration-300 hover:bg-white/10 ${
                isScrolled ? 'text-stonefast-gray-dark' : 'text-stonefast-white'
              }`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className={`px-4 pt-4 pb-6 space-y-2 border-t transition-all duration-500 rounded-b-2xl ${
              isScrolled 
                ? 'glass border-stonefast-gray/20' 
                : 'glass-dark border-white/20'
            }`}>
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:bg-white/10 ${
                    isScrolled 
                      ? 'text-stonefast-gray-dark hover:text-stonefast-blue' 
                      : 'text-stonefast-white hover:text-stonefast-gold-light'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/reservation/informations"
                className={`block px-4 py-3 rounded-xl text-base font-medium mt-4 transition-all duration-300 ${
                  isScrolled
                    ? 'btn-primary'
                    : 'glass border-2 border-white/30 text-white hover:bg-white hover:text-stonefast-blue'
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