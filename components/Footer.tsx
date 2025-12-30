'use client'

import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { config } from '@/lib/config'
import { motion } from 'framer-motion'

const socialLinks = [
  { icon: Github, href: config.personal.github, label: 'GitHub' },
  { icon: Linkedin, href: config.personal.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: config.personal.twitter, label: 'Twitter' },
  { icon: Mail, href: `mailto:${config.personal.email}`, label: 'Email' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="section-padding border-t border-white/10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {currentYear} {config.personal.name}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Made with */}
          <p className="text-gray-400 text-sm">
            Made with <span className="text-red-500">♥</span> using Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}


