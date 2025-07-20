'use client';

import { motion } from 'framer-motion';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: 'Heracleum II Pendant',
      designer: 'Bertjan Pot',
      category: 'Lighting',
      price: 2850,
      image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=2069&auto=format&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1493728021479-d3296d45c2bc?q=80&w=2070&auto=format&fit=crop',
      isNew: true,
      colors: ['#000000', '#FFFFFF', '#B8860B'],
    },
    {
      id: 2,
      name: 'Rabbit Lamp',
      designer: 'Front',
      category: 'Lighting',
      price: 695,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop',
      isNew: false,
      colors: ['#FFFFFF', '#000000'],
    },
    {
      id: 3,
      name: 'Raimond Dome',
      designer: 'Raimond Puts',
      category: 'Lighting',
      price: 1250,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop',
      isNew: false,
      colors: ['#C0C0C0', '#B8860B'],
    },
    {
      id: 4,
      name: 'Container Table',
      designer: 'Marcel Wanders',
      category: 'Furniture',
      price: 3200,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop',
      isNew: true,
      colors: ['#8B4513', '#000000', '#FFFFFF'],
    },
    {
      id: 5,
      name: 'Random Light',
      designer: 'Bertjan Pot',
      category: 'Lighting',
      price: 890,
      image: 'https://images.unsplash.com/photo-1493728021479-d3296d45c2bc?q=80&w=2070&auto=format&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=2069&auto=format&fit=crop',
      isNew: false,
      colors: ['#FFFFFF', '#000000', '#8B4513'],
    },
    {
      id: 6,
      name: 'Blow Away Vase',
      designer: 'Front',
      category: 'Accessories',
      price: 425,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop',
      isNew: false,
      colors: ['#FFFFFF', '#000000', '#4169E1'],
    },
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
    hidden: { opacity: 0, y: 30 },
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
    <section className="py-24 bg-white">
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
            Featured Products
          </span>
          <h2 className="h2 text-gray-900 mb-6">
            Exceptional Pieces
          </h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Handpicked designs that embody our commitment to innovation, beauty, 
            and the extraordinary. Each piece tells its own unique story.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={hoveredProduct === product.id ? product.hoverImage : product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                        New
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                    >
                      <Heart size={16} className="text-gray-700" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                    >
                      <ShoppingBag size={16} className="text-gray-700" />
                    </motion.button>
                  </div>

                  {/* Quick View */}
                  <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-white/95 backdrop-blur-sm text-gray-900 py-3 rounded-full text-sm font-medium uppercase tracking-wide hover:bg-white transition-colors duration-200"
                    >
                      Quick View
                    </motion.button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-xs uppercase tracking-wider text-gray-500 mb-1 block">
                      {product.category}
                    </span>
                    <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      by {product.designer}
                    </p>
                  </div>

                  {/* Colors */}
                  <div className="flex items-center gap-2 mb-4">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full border border-gray-200"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold text-gray-900">
                      ${product.price.toLocaleString()}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                    >
                      <ArrowRight size={16} className="text-gray-700" />
                    </motion.button>
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
            className="btn-secondary flex items-center gap-3 mx-auto group"
          >
            View All Products
            <ArrowRight 
              size={18} 
              className="transition-transform duration-300 group-hover:translate-x-1" 
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;