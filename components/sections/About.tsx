'use client'

import { motion } from 'framer-motion'
import { config } from '@/lib/config'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl tracking-tight mb-4">
            <span className="gradient-text">{config.about.title}</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
          </motion.div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              {config.about.description.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={itemVariants}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            {/* Image/Visual */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden glass p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl" />
                <div className="relative h-full flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="w-full h-full bg-gradient-to-br from-primary-500/30 to-accent-500/30 rounded-xl flex items-center justify-center"
                  >
                    <span className="text-6xl">👨‍💻</span>
                  </motion.div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-500/20 rounded-full blur-xl -z-10" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


