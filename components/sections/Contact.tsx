'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react'
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

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative bg-gradient-to-b from-transparent to-primary-900/10">
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
              <span className="gradient-text">{config.contact.title}</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-4">
              {config.contact.subtitle}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="glass rounded-2xl p-8 mb-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-transparent border-2 border-gray-800 text-gray-800 rounded-none font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 hover:text-white transition-colors"
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="text-center">
              <p className="text-gray-400 mb-6">Or reach out via:</p>
              <div className="flex items-center justify-center gap-6">
                <motion.a
                  href={`mailto:${config.contact.email}`}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 glass rounded-full text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </motion.a>
                <motion.a
                  href={config.contact.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 glass rounded-full text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href={config.contact.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 glass rounded-full text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href={config.contact.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 glass rounded-full text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


