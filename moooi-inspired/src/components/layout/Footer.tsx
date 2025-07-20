'use client';

import { motion } from 'framer-motion';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  Mail, 
  MapPin, 
  Phone,
  ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const footerSections = [
    {
      title: 'Collections',
      links: [
        { name: 'Lighting', href: '/lighting' },
        { name: 'Furniture', href: '/furniture' },
        { name: 'Accessories', href: '/accessories' },
        { name: 'Carpets', href: '/carpets' },
        { name: 'New Arrivals', href: '/new' },
        { name: 'Sale', href: '/sale' },
      ],
    },
    {
      title: 'About',
      links: [
        { name: 'Our Story', href: '/about' },
        { name: 'Designers', href: '/designers' },
        { name: 'Craftsmanship', href: '/craftsmanship' },
        { name: 'Sustainability', href: '/sustainability' },
        { name: 'Press', href: '/press' },
        { name: 'Careers', href: '/careers' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Interior Design', href: '/services/interior-design' },
        { name: 'Custom Projects', href: '/services/custom' },
        { name: 'Showroom Visit', href: '/services/showroom' },
        { name: 'Trade Program', href: '/services/trade' },
        { name: 'Warranty', href: '/services/warranty' },
        { name: 'Care Instructions', href: '/services/care' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'Shipping & Returns', href: '/shipping' },
        { name: 'Size Guide', href: '/size-guide' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-b border-gray-800"
      >
        <div className="container-max section-padding py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="h3 text-white mb-4">
              Stay Inspired
            </h3>
            <p className="body-large text-gray-300 mb-8 max-w-2xl mx-auto">
              Be the first to discover our latest collections, exclusive designs, 
              and stories from the world of extraordinary living.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full flex items-center gap-2 justify-center"
              >
                Subscribe
                <ArrowRight size={16} />
              </motion.button>
            </div>
            
            <p className="text-sm text-gray-400 mt-4">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="container-max section-padding py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <h2 className="text-3xl font-playfair font-bold">Luxora</h2>
            </Link>
            
            <p className="text-gray-300 mb-6 max-w-sm">
              Creating extraordinary living spaces through innovative design, 
              exceptional craftsmanship, and timeless beauty since 2001.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin size={16} />
                <span>123 Design District, New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Mail size={16} />
                <span>hello@luxora.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="font-semibold text-white mb-6 uppercase tracking-wide text-sm">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-gray-800"
      >
        <div className="container-max section-padding py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
              <span>© 2024 Luxora. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-white transition-colors duration-200">
                  Cookie Policy
                </Link>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Currency:</span>
              <select className="bg-transparent border border-gray-700 rounded px-3 py-1 text-gray-300 focus:outline-none focus:border-gray-500">
                <option value="USD">USD $</option>
                <option value="EUR">EUR €</option>
                <option value="GBP">GBP £</option>
              </select>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;