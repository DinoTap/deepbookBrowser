import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import WalletConnect from './WalletConnect';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Community', href: '#community' },
    { name: 'Support', href: '#support' },
    { name: 'Search', href: '/search', isRoute: true }
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href) as HTMLElement;
      if (element) {
        const headerHeight = 80; // Height of fixed header
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/32b93810-6223-4b36-aa9b-5da3e562b334.png" 
              alt="Deepbook" 
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-white">Deepbook</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium flex items-center gap-2"
                >
                  {item.name === 'Search' && <Search className="h-4 w-4" />}
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                >
                  {item.name}
                </button>
              )
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <WalletConnect />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-gray-800">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2 flex items-center gap-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name === 'Search' && <Search className="h-4 w-4" />}
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2 text-left"
                  >
                    {item.name}
                  </button>
                )
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <WalletConnect />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
