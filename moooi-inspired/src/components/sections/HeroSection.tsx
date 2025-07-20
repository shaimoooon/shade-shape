'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="relative w-full h-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
            alt="Luxury interior design"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </div>

      <div className="relative z-10 container-max section-padding w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Tagline */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="caption text-white/80 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full">
              A Life Extraordinary
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="h1 text-white mb-8 max-w-3xl"
          >
            Where Creative Luxury
            <br />
            <span className="text-white/80">Meets Innovation</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="body-large text-white/90 mb-12 max-w-2xl"
          >
            Discover our breathtaking collection of lighting, furniture, and accessories 
            that transform everyday spaces into extraordinary experiences. Each piece is 
            carefully curated to inspire and seduce with its innovative design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary bg-white text-black hover:bg-gray-100 flex items-center gap-3 group"
            >
              Explore Collection
              <ArrowRight 
                size={18} 
                className="transition-transform duration-300 group-hover:translate-x-1" 
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary border-white text-white hover:bg-white hover:text-black flex items-center gap-3 group"
            >
              <Play size={18} />
              Watch Story
            </motion.button>
          </motion.div>

          {/* Statistics */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20"
          >
            <div>
              <div className="h3 text-white mb-2">20+</div>
              <div className="body-small text-white/70 uppercase tracking-wide">
                Years of Excellence
              </div>
            </div>
            <div>
              <div className="h3 text-white mb-2">500+</div>
              <div className="body-small text-white/70 uppercase tracking-wide">
                Unique Designs
              </div>
            </div>
            <div>
              <div className="h3 text-white mb-2">50+</div>
              <div className="body-small text-white/70 uppercase tracking-wide">
                Award-Winning Pieces
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute top-1/4 right-8 hidden xl:block"
      >
        <div className="glass-effect p-6 rounded-xl">
          <div className="w-16 h-16 bg-white/20 rounded-full mb-4" />
          <div className="w-24 h-2 bg-white/20 rounded mb-2" />
          <div className="w-16 h-2 bg-white/20 rounded" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-1/3 left-8 hidden xl:block"
      >
        <div className="glass-effect p-4 rounded-lg">
          <div className="w-12 h-12 bg-white/20 rounded-full mb-3" />
          <div className="w-20 h-1.5 bg-white/20 rounded mb-1.5" />
          <div className="w-14 h-1.5 bg-white/20 rounded" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;