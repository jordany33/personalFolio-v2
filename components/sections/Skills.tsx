'use client'

import { motion } from 'framer-motion'
import { config } from '@/lib/config'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative bg-gradient-to-b from-transparent to-primary-900/10">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl tracking-tight mb-4">
              <span className="gradient-text">{config.skills.title}</span>
            </h2>
            <p className="text-gray-700 text-lg mb-4">{config.skills.subtitle}</p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {config.skills.categories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl mb-6 text-primary-800">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 bg-primary-500/20 text-primary-800 rounded-full text-sm font-medium border border-primary-500/30 hover:bg-primary-500/30 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


