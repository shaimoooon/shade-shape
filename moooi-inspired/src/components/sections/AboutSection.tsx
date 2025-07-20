'use client';

import { motion } from 'framer-motion';
import { Award, Users, Globe, Sparkles } from 'lucide-react';
import Image from 'next/image';

const AboutSection = () => {
  const achievements = [
    {
      icon: Award,
      number: '50+',
      label: 'Design Awards',
      description: 'International recognition for innovation',
    },
    {
      icon: Users,
      number: '100+',
      label: 'Designers',
      description: 'Collaborating visionaries worldwide',
    },
    {
      icon: Globe,
      number: '60+',
      label: 'Countries',
      description: 'Global presence and distribution',
    },
    {
      icon: Sparkles,
      number: '20+',
      label: 'Years',
      description: 'Of extraordinary craftsmanship',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
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
    <section className="py-24 overflow-hidden">
      <div className="container-max section-padding">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <motion.div variants={itemVariants}>
              <span className="caption text-gray-600 mb-4 block">
                Our Philosophy
              </span>
              <h2 className="h2 text-gray-900 mb-6">
                A Life Extraordinary
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 mb-8">
              <p className="body-large text-gray-600">
                When our founders started Luxora in 2001, they promised each other 
                to create a legendary brand. Today, after more than twenty years, we 
                continue to inspire and seduce the world with breathtaking, innovative designs.
              </p>
              
              <p className="body text-gray-600">
                Our collection is always original, unexpected, eclectic, rebellious and 
                sophisticated, always on the edge of commercial reality and cultural interest. 
                A well-curated mix of lighting, furniture and accessories that outlast everyday 
                interiors, define personalities of spaces, and deliver the extra touch of 
                creativity and beauty.
              </p>

              <p className="body text-gray-600">
                We are intrinsically drawn to beauty and always on the lookout for original 
                ideas. We don't tell designers what to do; we listen to what they want to 
                make and realise their dreams.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Our Story
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Meet Our Designers
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop"
                alt="Luxora design studio"
                fill
                className="object-cover"
              />
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-xs"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <Sparkles size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Innovation</div>
                    <div className="text-sm text-gray-600">at its core</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Every piece we create pushes the boundaries of design and craftsmanship.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-black transition-colors duration-300"
              >
                <achievement.icon 
                  size={24} 
                  className="text-gray-700 group-hover:text-white transition-colors duration-300" 
                />
              </motion.div>
              
              <div className="h3 text-gray-900 mb-2">
                {achievement.number}
              </div>
              
              <div className="font-semibold text-gray-900 mb-2">
                {achievement.label}
              </div>
              
              <p className="text-sm text-gray-600">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 text-center max-w-4xl mx-auto"
        >
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-playfair text-gray-900 leading-relaxed mb-8">
            "We believe that good design should not only be beautiful, 
            but also tell a story and evoke emotions. Every piece we create 
            is a conversation between art and function."
          </blockquote>
          
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
                alt="Founder"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">Marcel Wanders</div>
              <div className="text-sm text-gray-600">Co-Founder & Creative Director</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;