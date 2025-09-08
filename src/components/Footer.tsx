import React from 'react';
import { Twitter, Github, MessageCircle, Send } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  
  const footerLinks = {
    Product: ['Features', 'Product', 'Community', 'Support'],
    Legal: ['Privacy', 'Terms', 'Cookies', 'License']
  };

  const handleSectionClick = (section: string) => {
    // Navigate to home page first if not already there
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        scrollToSection(section);
      }, 100);
    } else {
      scrollToSection(section);
    }
  };

  const scrollToSection = (section: string) => {
    const sectionMap: { [key: string]: string } = {
      'Features': '#features',
      'Product': '#about', // Using About section for Product
      'Community': '#community',
      'Support': '#support'
    };

    const targetId = sectionMap[section];
    if (targetId) {
      const element = document.querySelector(targetId) as HTMLElement;
      if (element) {
        const headerHeight = 80; // Height of fixed header
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/lovable-uploads/32b93810-6223-4b36-aa9b-5da3e562b334.png" 
                alt="Deepbook" 
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-white">Deepbook</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              The most advanced crypto browser for the decentralized web. Trade, browse, and manage your digital assets with unparalleled security and speed.
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/deepbook_ai?s=21" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
             
              <a href="https://t.me/deepbookaichat" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="https://t.me/deepbookai" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => {
                  // Handle Product section links
                  if (category === 'Product') {
                    return (
                      <li key={link}>
                        <button
                          onClick={() => handleSectionClick(link)}
                          className="text-gray-400 hover:text-cyan-400 transition-colors text-left"
                        >
                          {link}
                        </button>
                      </li>
                    );
                  }
                  
                  // Handle Legal section links
                  if (category === 'Legal' && link === 'Privacy') {
                    return (
                      <li key={link}>
                        <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                          {link}
                        </Link>
                      </li>
                    );
                  }
                  if (category === 'Legal' && link === 'Terms') {
                    return (
                      <li key={link}>
                        <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                          {link}
                        </Link>
                      </li>
                    );
                  }
                  return (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Deepbook. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
