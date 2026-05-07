'use client'
import { useEffect, useRef } from 'react'
<<<<<<< HEAD
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    FaReact, FaHtml5, FaGithub, FaGitAlt,
} from 'react-icons/fa6'
import { FaJs } from 'react-icons/fa6'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiTypescript, SiVercel, SiFirebase, SiSupabase, SiVite } from 'react-icons/si'
import { IoMdMail } from 'react-icons/io'
import { FaPhone } from 'react-icons/fa6'

gsap.registerPlugin(ScrollTrigger)

const skills = [
    { icon: FaReact, label: 'React.js', color: '#22d3ee' },
    { icon: RiNextjsFill, label: 'Next.js', color: '#e2e8f0' },
    { icon: SiTypescript, label: 'TypeScript', color: '#60a5fa' },
    { icon: FaJs, label: 'JavaScript', color: '#fcd34d' },
    { icon: FaHtml5, label: 'HTML5', color: '#fb923c' },
    { icon: RiTailwindCssFill, label: 'Tailwind CSS', color: '#22d3ee' },
    { icon: FaGitAlt, label: 'Git', color: '#fb7185' },
    { icon: FaGithub, label: 'GitHub', color: '#e2e8f0' },
    { icon: SiVercel, label: 'Vercel', color: '#e2e8f0' },
    { icon: SiFirebase, label: 'Firebase', color: '#fbbf24' },
    { icon: SiSupabase, label: 'Supabase', color: '#4ade80' },
    { icon: SiVite, label: 'Vite', color: '#a78bfa' },
]

const timeline = [
    {
        period: '2022 – Present',
        role: 'Self-Learning & Projects',
        org: 'Independent',
        desc: 'Built 15+ real-world projects using React.js, Next.js, and Tailwind CSS. Practiced Git/GitHub workflows and CI/CD deployment pipelines.',
        accent: '#615fff',
    },
    {
        period: 'Jul – Sep 2025',
        role: 'Front-End Developer (Training)',
        org: 'Information Technology Institute (ITI), Egypt',
        desc: 'Hands-on training building modern web apps using React.js. Agile teamwork, sprint planning, debugging, and performance optimization.',
        accent: '#06b6d4',
    },
    {
        period: '2021 – 2025',
        role: 'BSc Computer Science',
        org: 'Banha University, Egypt',
        desc: 'Graduated with a Good grade. Relevant courses: Data Structures, Web Programming, Software Engineering, AI. Graduation Project: "Ali Dynasty Chronicles" — a historical web platform.',
        accent: '#a78bfa',
    },
]

const stats = [
    { value: '15+', label: 'Projects Built' },
    { value: '3+', label: 'Years Experience' },
    { value: '5+', label: 'Technologies' },
    { value: '2025', label: 'CS Graduate' },
]

export default function AboutSection() {
    const heroRef = useRef<HTMLDivElement>(null)
    const skillsRef = useRef<HTMLDivElement>(null)
    const timelineRef = useRef<HTMLDivElement>(null)
    const statsRef = useRef<HTMLDivElement>(null)
    const contactRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero entrance
            gsap.fromTo(
                heroRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.1,
                  scrollTrigger: { trigger: heroRef.current, start: 'top 85%' }
                }
            )

            // Stats counter animation
            if (statsRef.current) {
                gsap.fromTo(
                    statsRef.current.querySelectorAll('.stat-item'),
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out',
                        scrollTrigger: {
                            trigger: statsRef.current,
                            start: 'top 85%',
                        },
                    }
                )
            }

            // Skills stagger
            if (skillsRef.current) {
                gsap.fromTo(
                    skillsRef.current.querySelectorAll('.skill-badge'),
                    { opacity: 0, scale: 0.7, y: 20 },
                    {
                        opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'back.out(1.4)',
                        scrollTrigger: {
                            trigger: skillsRef.current,
                            start: 'top 80%',
                        },
                    }
                )
            }

            // Timeline reveal
            if (timelineRef.current) {
                gsap.fromTo(
                    timelineRef.current.querySelectorAll('.timeline-item'),
                    { opacity: 0, x: -40 },
                    {
                        opacity: 1, x: 0, duration: 0.7, stagger: 0.2, ease: 'power3.out',
                        scrollTrigger: {
                            trigger: timelineRef.current,
                            start: 'top 80%',
                        },
                    }
                )
            }

            // Contact reveal
            if (contactRef.current) {
                gsap.fromTo(
                    contactRef.current,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
                        scrollTrigger: {
                            trigger: contactRef.current,
                            start: 'top 85%',
                        },
                    }
                )
            }
        })

        return () => ctx.revert()
    }, [])

    return (
        <section id="about" className="min-h-screen bg-[#080b14] relative z-10 pt-20">
            {/* Hero Section */}
            <div className="relative pt-16 pb-20 px-6 overflow-hidden">
                <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20"
                    style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.5) 0%, transparent 70%)', filter: 'blur(80px)' }}
                />
                <div ref={heroRef} className="max-w-4xl mx-auto" style={{ opacity: 0 }}>
                    <p className="text-sm font-mono text-indigo-400 mb-4 uppercase tracking-widest">
                        // about me
                    </p>
                    <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Crafting Digital{' '}
                        <span className="gradient-text">Experiences</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
                        I&apos;m a passionate Front-End Developer from Egypt, specializing in building
                        beautiful, performant, and accessible web applications. I love turning
                        complex problems into clean, elegant code.
                    </p>
                    {/* Quote */}
                    <div className="pl-4 border-l-2 border-indigo-500/50">
                        <p className="text-slate-300 italic">
                            &ldquo;Code is poetry, and every pixel tells a story.&rdquo;
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="py-16 px-6 border-y border-white/5">
                <div ref={statsRef} className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map(({ value, label }) => (
                        <div
                            key={label}
                            className="stat-item text-center p-6 rounded-2xl glass"
                            style={{ opacity: 0 }}
                        >
                            <p className="text-4xl font-black gradient-text mb-1">{value}</p>
                            <p className="text-sm text-slate-500">{label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Skills */}
            <div className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <p className="text-sm font-mono text-teal-400 mb-3 uppercase tracking-widest">
                        // tech stack
                    </p>
                    <h3 className="text-3xl font-bold text-white mb-10">Skills & Tools</h3>
                    <div ref={skillsRef} className="flex flex-wrap gap-3">
                        {skills.map(({ icon: Icon, label, color }) => (
                            <div
                                key={label}
                                className="skill-badge flex items-center gap-2.5 px-5 py-3 rounded-xl glass text-slate-300 text-sm font-medium hover:scale-105 transition-transform"
                                style={{ opacity: 0 }}
                            >
                                <Icon size={18} style={{ color }} />
                                {label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="py-20 px-6 bg-[#0d1120]/50">
                <div className="max-w-4xl mx-auto">
                    <p className="text-sm font-mono text-violet-400 mb-3 uppercase tracking-widest">
                        // journey
                    </p>
                    <h3 className="text-3xl font-bold text-white mb-12">Experience & Education</h3>
                    <div ref={timelineRef} className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-6 top-2 bottom-2 w-px bg-white/10" />
                        <div className="flex flex-col gap-12">
                            {timeline.map((item, i) => (
                                <div
                                    key={i}
                                    className="timeline-item relative pl-16"
                                    style={{ opacity: 0 }}
                                >
                                    {/* Dot */}
                                    <div
                                        className="absolute left-4 top-2 w-4 h-4 rounded-full border-2 border-[#080b14]"
                                        style={{ background: item.accent, boxShadow: `0 0 12px ${item.accent}` }}
                                    />
                                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2 block">
                                        {item.period}
                                    </span>
                                    <h4 className="text-lg font-bold text-white mb-1">{item.role}</h4>
                                    <p className="text-sm font-medium mb-3" style={{ color: item.accent }}>
                                        {item.org}
                                    </p>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact info */}
            <div ref={contactRef} className="py-20 px-6" style={{ opacity: 0 }}>
                <div className="max-w-4xl mx-auto">
                    <p className="text-sm font-mono text-pink-400 mb-3 uppercase tracking-widest">
                        // reach me
                    </p>
                    <h3 className="text-3xl font-bold text-white mb-8">Let&apos;s Connect</h3>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="mailto:mahmoud4h5@gmail.com"
                            className="flex items-center gap-3 px-6 py-4 rounded-xl glass hover:border-indigo-500/40 transition-all group"
                            style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                        >
                            <span className="p-2 rounded-lg bg-indigo-500/15 text-indigo-400 group-hover:bg-indigo-500/25 transition-colors">
                                <IoMdMail size={18} />
                            </span>
                            <div>
                                <p className="text-xs text-slate-500 mb-0.5">Email</p>
                                <p className="text-sm text-slate-200">mahmoud4h5@gmail.com</p>
                            </div>
                        </a>
                        <a
                            href="tel:+201016074277"
                            className="flex items-center gap-3 px-6 py-4 rounded-xl glass hover:border-teal-500/40 transition-all group"
                            style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                        >
                            <span className="p-2 rounded-lg bg-teal-500/15 text-teal-400 group-hover:bg-teal-500/25 transition-colors">
                                <FaPhone size={16} />
                            </span>
                            <div>
                                <p className="text-xs text-slate-500 mb-0.5">Phone</p>
                                <p className="text-sm text-slate-200">+20 101 607 4277</p>
                            </div>
                        </a>
                        <a
                            href="https://github.com/mahmoud25osama"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-6 py-4 rounded-xl glass hover:border-slate-500/60 transition-all group"
                            style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                        >
                            <span className="p-2 rounded-lg bg-white/5 text-slate-300 group-hover:bg-white/10 transition-colors">
                                <FaGithub size={18} />
                            </span>
                            <div>
                                <p className="text-xs text-slate-500 mb-0.5">GitHub</p>
                                <p className="text-sm text-slate-200">mahmoud25osama</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
=======
import { motion } from 'framer-motion'
import SkillCard from '@/components/ui/SkillCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skills, skillCategories, stats, categoryColor } from '@/lib/constants'
import { createCardVariants, iconBoxVariants } from '@/lib/animations'

gsap.registerPlugin(ScrollTrigger)

const cardVariants = createCardVariants(-6, 1, '0 20px 60px rgba(200,53,58,0.18), 0 4px 24px rgba(0,0,0,0.5)');
/* ── Main Component ──────────────────────────────── */
export default function AboutSection() {
  const sectionRef  = useRef<HTMLElement>(null)
  const headerRef   = useRef<HTMLDivElement>(null)
  const contentRef  = useRef<HTMLDivElement>(null)
  const statsRef    = useRef<HTMLDivElement>(null)
  const skillsRef   = useRef<HTMLDivElement>(null)



  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%' } })

      gsap.fromTo(contentRef.current, { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: contentRef.current, start: 'top 85%' } })

      if (statsRef.current) {
        gsap.fromTo(statsRef.current.querySelectorAll('.stat-card'),
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1,
            ease: 'back.out(1.4)', scrollTrigger: { trigger: statsRef.current, start: 'top 85%' } })
      }

      if (skillsRef.current) {
        gsap.fromTo(skillsRef.current.querySelectorAll('.skill-item'),
          { opacity: 0, y: 24, scale: 0.88 },
          { opacity: 1, y: 0,  scale: 1,    duration: 0.45, stagger: 0.04,
            ease: 'back.out(1.7)', scrollTrigger: { trigger: skillsRef.current, start: 'top 78%' } })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])


  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen bg-[#0a0a0a] py-24 overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(200,53,58,0.4) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-40 right-10 w-[300px] h-[300px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(158,42,47,0.4) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className="relative z-10 max-w-6xl xl:max-w-7xl 3xl:max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

        {/* ── Section Header ─────────────────── */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16" style={{ opacity: 0 }}>
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-crimson-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-mono text-crimson-300">Get to know me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto px-2 sm:px-0">
            Passionate about building scalable solutions and crafting beautiful user experiences
          </p>
        </div>

        {/* ── Bio + Stats ─────────────────────── */}
        <div ref={contentRef} className="max-w-6xl mx-auto mb-20" style={{ opacity: 0 }}>
          <motion.div className="glass rounded-2xl p-8 mb-6 border border-white/[0.08] cursor-default"
            initial="rest" whileHover="hover" variants={cardVariants}>
            <h3 className="text-2xl font-bold text-white mb-4">Full Stack MERN Developer</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              I&apos;m a passionate developer from Egypt, specializing in building robust, scalable
              web applications from the ground up. I love architecting RESTful APIs, designing
              secure database schemas, and crafting seamless, pixel-perfect user interfaces using
              modern JavaScript frameworks.
            </p>
            <p className="text-slate-400 leading-relaxed">
              With hands-on experience in the MERN stack, I transform complex problems into
              elegant, efficient solutions. Every project is an opportunity to learn, grow,
              and push the boundaries of what&apos;s possible on the web.
            </p>
          </motion.div>

          <motion.div className="glass rounded-2xl p-6 mb-10 border-l-4 border-crimson-500/60 cursor-default"
            initial={{ opacity: 0.85 }}
            whileHover={{ opacity: 1, x: 6, borderLeftColor: 'rgba(200,53,58,1)', transition: { duration: 0.25 } }}>
            <p className="text-slate-300 italic text-lg">
              &ldquo;Code is poetry, and every pixel tells a story.&rdquo;
            </p>
          </motion.div>

          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(({ value, label, icon: Icon }, index) => (
              <motion.div key={label}
                className="stat-card glass rounded-2xl p-5 text-center cursor-default border border-white/[0.06]"
                initial="rest" whileHover="hover" variants={cardVariants} style={{ opacity: 0 }}>
                <motion.div className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center"
                  variants={iconBoxVariants}
                  style={{ background: `linear-gradient(135deg, ${index % 2 === 0 ? 'rgba(200,53,58,0.2)' : 'rgba(158,42,47,0.2)'} 0%, ${index % 2 === 0 ? 'rgba(158,42,47,0.1)' : 'rgba(200,53,58,0.1)'} 100%)` }}>
                  <Icon size={22} className={index % 2 === 0 ? 'text-slate-300' : 'text-slate-400'} />
                </motion.div>
                <p className="text-3xl font-black gradient-text mb-1">{value}</p>
                <p className="text-sm text-slate-500 font-medium">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Skills Section ─────────────────── */}
        <div ref={skillsRef} className="mb-20">
          {/* Sub-header */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">Skills &amp; Technologies</h3>
            <p className="text-slate-500 text-sm">Tools I use to bring ideas to life</p>
          </div>

          {/* Skill grid grouped by category */}
          <div className="space-y-8">
            {skillCategories.map((category) => {
              const accent = categoryColor[category]
              return (
                <div key={category}>
                  {/* Category heading */}
                  <div className="flex items-center gap-3 mb-4">
                    <motion.span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: accent }}
                      animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    />
                    <h4 className="text-xs font-mono uppercase tracking-widest"
                      style={{ color: accent }}>
                      {category}
                    </h4>
                    <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, ${accent}40, transparent)` }} />
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {skills
                      .filter((s) => s.category === category)
                      .map((skill) => (
                        <SkillCard key={skill.label} icon={skill.icon} label={skill.label} color={skill.color} />
                      ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Skill count badge */}
          <motion.p
            className="text-center text-xs text-slate-600 font-mono mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {skills.length} technologies
          </motion.p>
        </div>
      </div>
    </section>
  )
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
}
