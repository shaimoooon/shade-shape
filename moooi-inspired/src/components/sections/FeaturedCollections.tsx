'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const FeaturedCollections = () => {
  const collections = [
    {
      id: 1,
      title: 'Lighting',
      subtitle: 'Illuminate Your World',
      description: 'Discover our signature lighting pieces that transform spaces with artistic brilliance.',
      image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=2069&auto=format&fit=crop',
      href: '/collections/lighting',
      featured: true,
    },
    {
      id: 2,
      title: 'Furniture',
      subtitle: 'Sculptural Comfort',
      description: 'Exceptional furniture that blends comfort with avant-garde design.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop',
      href: '/collections/furniture',
      featured: false,
    },
    {
      id: 3,
      title: 'Accessories',
      subtitle: 'Finishing Touches',
      description: 'Curated accessories that add personality and sophistication.',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop',
      href: '/collections/accessories',
      featured: false,
    },
    {
      id: 4,
      title: 'Carpets',
      subtitle: 'Ground Breaking Designs',
      description: 'Artistic carpets that serve as the foundation of extraordinary interiors.',
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=2070&auto=format&fit=crop',
      href: '/collections/carpets',
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-max section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="caption text-gray-600 mb-4 block">
            Our Collections
          </span>
          <h2 className="h2 text-gray-900 mb-6">
            Explore Our World of Design
          </h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Each collection tells a unique story, bringing together visionary designers 
            and exceptional craftsmanship to create pieces that define extraordinary living.
          </p>
        </motion.div>

        {/* Collections Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              variants={itemVariants}
              className={`group cursor-pointer ${
                collection.featured 
                  ? 'md:col-span-2 lg:row-span-2' 
                  : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 h-full">
                {/* Image Container */}
                <div className={`relative overflow-hidden ${
                  collection.featured ? 'h-96 lg:h-full' : 'h-64'
                }`}>
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <motion.div
                      initial={false}
                      animate={{
                        y: 0,
                        opacity: 1,
                      }}
                      className="text-white"
                    >
                      <p className="body text-white/90 mb-4">
                        {collection.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide">
                        Explore Collection
                        <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                      {collection.title}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className={`font-playfair font-semibold mb-2 ${
                    collection.featured ? 'text-2xl' : 'text-xl'
                  }`}>
                    {collection.subtitle}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {collection.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors duration-300">
                    View Collection
                    <ArrowUpRight 
                      size={16} 
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center gap-3 mx-auto group"
          >
            View All Collections
            <ArrowUpRight 
              size={18} 
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCollections;