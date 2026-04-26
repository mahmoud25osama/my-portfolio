'use client'

import { motion } from 'framer-motion'
import { LogoIcon } from './Logo'
import Logo from './Logo'
import { HiArrowUpRight } from 'react-icons/hi2'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

/* ─── Marquee ─────────────────────────────────────── */
const STACK = [
  'React', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript',
  'Next.js', 'Tailwind CSS', 'REST APIs', 'Git', 'GSAP',
  'Framer Motion', 'Vite', 'JavaScript', 'HTML & CSS', 'Docker',
]

function Marquee() {
  const items = [...STACK, ...STACK]
  return (
    <div className="relative overflow-hidden py-4 border-y border-white/10 bg-white/[0.02]">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10
                      bg-gradient-to-r from-[#0a0a0a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10
                      bg-gradient-to-l from-[#0a0a0a] to-transparent" />
      <div
        className="flex gap-8 whitespace-nowrap w-max animate-marquee-left"
        style={{ animationDuration: '30s' }}
      >
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-sm font-mono text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com/mahmoud25osama', icon: FaGithub },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/mahmoud25osama', icon: FaLinkedin },
]

/* ─── Footer ──────────────────────────────────────── */
const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 overflow-hidden bg-[#0a0a0a]">
      {/* Floating Back-to-Top Button */}
      {/* top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-3xl h-px
                      bg-gradient-to-r from-transparent via-red-500/50 to-transparent shadow-[0_0_20px_rgba(239,68,68,0.5)]" />

      {/* bg grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* ── Name band & CTAs ──────────────────────────────── */}
      <div className="relative max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-8 pt-24 pb-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4"
        >
          {'// crafted by'}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="flex flex-col items-center gap-4 mb-8"
        >
          <Logo size={100} />
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
          >
            <span className="text-white">Mahmoud</span>{' '}
            <span className="gradient-text drop-shadow-[0_0_25px_rgba(239,68,68,0.3)]">Osama</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8"
        >
          <motion.a
            href="mailto:mahmoud4h5@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 rounded-full bg-red-500 text-white font-medium tracking-wide
                       shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)]
                       transition-shadow flex items-center gap-2 group"
          >
            Start a Project
            <HiArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
          
          <motion.a
            href="mailto:mahmoud4h5@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 text-sm font-mono text-slate-400
                       hover:text-red-400 transition-colors group"
          >
            mahmoud4h5@gmail.com
          </motion.a>
        </motion.div>

        {/* ── Navigation & Socials ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 
                             hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/30 
                             transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* ── Marquee ─────────────────────────────────── */}
      <Marquee />

      {/* ── Bottom bar ──────────────────────────────── */}
      <div className="relative max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-8 py-6
        flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <LogoIcon size={22} />
          <span className="font-mono text-xs text-slate-500">
            © {year}{' '}
            <span className="text-slate-400">Mahmoud Osama</span>
            {' '}— All rights reserved
          </span>
        </div>
        <span className="font-mono text-xs text-slate-500 flex items-center gap-1.5">
          Built with{' '}
          <span className="text-red-500 animate-pulse">♥</span>
          {' '}React · Tailwind · GSAP
        </span>
      </div>
    </footer>
  )
}

export default Footer
