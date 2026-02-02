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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
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
              <span className="gradient-text">{config.experience.title}</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-4">
              {config.experience.subtitle}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
          </motion.div>

          {/* Experience List */}
          <div className="max-w-3xl mx-auto space-y-12">
            {config.experience.items.map((item) => (
              <motion.div
                key={`${item.company}-${item.role}`}
                variants={itemVariants}
                className="border-l-2 border-primary-500/30 pl-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.role}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {item.duration}
                  </span>
                </div>

                <p className="text-gray-600 font-medium mb-2">
                  {item.company}
                </p>

                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
