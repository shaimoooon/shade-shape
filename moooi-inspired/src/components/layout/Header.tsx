'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, ShoppingBag, User } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Lighting', href: '/lighting' },
    { name: 'Furniture', href: '/furniture' },
    { name: 'Accessories', href: '/accessories' },
    { name: 'Collections', href: '/collections' },
    { name: 'Designers', href: '/designers' },
    { name: 'About', href: '/about' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const searchVariants = {
    closed: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      width: '300px',
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-max section-padding">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <h1 className="text-2xl md:text-3xl font-playfair font-bold tracking-tight">
                Luxora
              </h1>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-sm uppercase tracking-wider font-medium hover:text-gray-600 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <div className="flex items-center">
              <motion.div
                initial={false}
                animate={isSearchOpen ? 'open' : 'closed'}
                variants={searchVariants}
                className="overflow-hidden"
              >
                <input
                  type="text"
                  placeholder="Search products..."
                  className="px-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-gray-400"
                  onBlur={() => setIsSearchOpen(false)}
                />
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <Search size={20} />
              </motion.button>
            </div>

            {/* User Account */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <User size={20} />
            </motion.button>

            {/* Shopping Bag */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 relative"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="py-6 space-y-4">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block text-lg font-medium hover:text-gray-600 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Actions */}
                <div className="pt-4 border-t border-gray-100 flex items-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  >
                    <Search size={20} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  >
                    <User size={20} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 relative"
                  >
                    <ShoppingBag size={20} />
                    <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      0
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;