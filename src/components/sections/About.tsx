'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Skill, TimelineItem, Stat, SkillCategory } from '@/lib/types'
import {
  FaReact, FaGithub, FaGitAlt, FaNodeJs, FaCode, FaServer, FaDatabase, FaRocket,
  FaHtml5, FaCss3Alt, FaDocker, FaNpm, FaFigma, FaLinux, FaPython
} from 'react-icons/fa6'
import { FaJs } from 'react-icons/fa6'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiTypescript, SiFirebase, SiSupabase, SiMongodb, SiExpress, SiPostgresql, SiRedis, SiPrisma, SiGraphql, SiJest, SiWebpack, SiVite, SiPostman, SiJira, SiMysql, SiNestjs } from 'react-icons/si'

gsap.registerPlugin(ScrollTrigger)

const skills: Skill[] = [
  // Frontend
  { icon: FaReact, label: 'React.js', color: '#22d3ee', category: 'Frontend' },
  { icon: RiNextjsFill, label: 'Next.js', color: '#e2e8f0', category: 'Frontend' },
  { icon: SiTypescript, label: 'TypeScript', color: '#60a5fa', category: 'Frontend' },
  { icon: FaJs, label: 'JavaScript', color: '#fcd34d', category: 'Frontend' },
  { icon: RiTailwindCssFill, label: 'Tailwind CSS', color: '#22d3ee', category: 'Frontend' },
  { icon: FaHtml5, label: 'HTML5', color: '#fb923c', category: 'Frontend' },
  { icon: FaCss3Alt, label: 'CSS3', color: '#60a5fa', category: 'Frontend' },
  // Backend
  { icon: FaNodeJs, label: 'Node.js', color: '#22c55e', category: 'Backend' },
  { icon: SiExpress, label: 'Express.js', color: '#e2e8f0', category: 'Backend' },
  { icon: SiNestjs, label: 'Nest.js', color: '#ea284e', category: 'Backend' },
  { icon: SiFirebase, label: 'Firebase', color: '#fbbf24', category: 'Backend' },
  { icon: SiSupabase, label: 'Supabase', color: '#4ade80', category: 'Backend' },
  { icon: SiGraphql, label: 'GraphQL', color: '#f472b6', category: 'Backend' },
  { icon: FaPython, label: 'Python', color: '#3b82f6', category: 'Backend' },
  // Database
  { icon: SiMongodb, label: 'MongoDB', color: '#4ade80', category: 'Database' },
  { icon: SiPostgresql, label: 'PostgreSQL', color: '#60a5fa', category: 'Database' },
  { icon: SiMysql, label: 'MySQL', color: '#60a5fa', category: 'Database' },
  { icon: SiRedis, label: 'Redis', color: '#f87171', category: 'Database' },
  { icon: SiPrisma, label: 'Prisma', color: '#e2e8f0', category: 'Database' },
  // Tools
  { icon: FaGitAlt, label: 'Git', color: '#fb7185', category: 'Tools' },
  { icon: FaGithub, label: 'GitHub', color: '#e2e8f0', category: 'Tools' },
  { icon: FaDocker, label: 'Docker', color: '#60a5fa', category: 'Tools' },
  { icon: SiVite, label: 'Vite', color: '#a78bfa', category: 'Tools' },
  { icon: SiWebpack, label: 'Webpack', color: '#60a5fa', category: 'Tools' },
  { icon: SiJest, label: 'Jest', color: '#fb7185', category: 'Tools' },
  { icon: SiPostman, label: 'Postman', color: '#fb923c', category: 'Tools' },
  { icon: FaNpm, label: 'npm/yarn', color: '#f87171', category: 'Tools' },
  { icon: FaFigma, label: 'Figma', color: '#f472b6', category: 'Tools' },
  { icon: SiJira, label: 'Jira', color: '#60a5fa', category: 'Tools' },
  { icon: FaLinux, label: 'Linux', color: '#fbbf24', category: 'Tools' },
]

const skillCategories: SkillCategory[] = ['Frontend', 'Backend', 'Database', 'Tools']

const timeline: TimelineItem[] = [
  {
    period: 'Jan 2026 – Present',
    role: 'Full Stack MERN Intern',
    org: 'Digilians',
    desc: 'Building real-world scalable platforms using MongoDB, Express, React, and Node.js. Practicing Agile workflows, API integrations, and robust database architectures.',
    accent: '#615fff',
    icon: FaCode,
  },
  {
    period: 'Jul – Sep 2025',
    role: 'Front-End Developer',
    org: 'Information Technology Institute (ITI), Egypt',
    desc: 'Hands-on training building modern web apps using React.js. Agile teamwork, sprint planning, debugging, and performance optimization.',
    accent: '#06b6d4',
    icon: FaRocket,
  },
  {
    period: '2021 – 2025',
    role: 'BSc Computer Science',
    org: 'Banha University, Egypt',
    desc: 'Graduated with a Good grade. Relevant courses: Data Structures, Web Programming, Software Engineering, AI. Graduation Project: "Ali Dynasty Chronicles" — a historical web platform.',
    accent: '#a78bfa',
    icon: FaServer,
  },
]

const stats: Stat[] = [
  { value: '15+', label: 'Projects Built', icon: FaCode },
  { value: '3+', label: 'Years Experience', icon: FaServer },
  { value: '25+', label: 'Technologies', icon: FaDatabase },
  { value: '2025', label: 'CS Graduate', icon: FaRocket },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%' },
        }
      )

      // Content reveal
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: contentRef.current, start: 'top 85%' },
        }
      )

      // Stats animation
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.querySelectorAll('.stat-card'),
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.4)',
            scrollTrigger: { trigger: statsRef.current, start: 'top 85%' },
          }
        )
      }

      // Skills animation
      if (skillsRef.current) {
        gsap.fromTo(
          skillsRef.current.querySelectorAll('.skill-item'),
          { opacity: 0, y: 20, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: 'back.out(1.4)',
            scrollTrigger: { trigger: skillsRef.current, start: 'top 80%' },
          }
        )
      }

      // Timeline animation
      if (timelineRef.current) {
        gsap.fromTo(
          timelineRef.current.querySelectorAll('.timeline-card'),
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: { trigger: timelineRef.current, start: 'top 80%' },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen bg-[#080b14] py-24 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute bottom-40 right-10 w-[300px] h-[300px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl xl:max-w-7xl 3xl:max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      {/* Section Header */}
      <div ref={headerRef} className="text-center mb-12 sm:mb-16" style={{ opacity: 0 }}>
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass mb-4 sm:mb-6">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-xs sm:text-sm font-mono text-slate-400">Get to know me</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto px-2 sm:px-0">
          Passionate about building scalable solutions and crafting beautiful user experiences
        </p>
      </div>

        {/* Main Content - Single Column Layout */}
        <div ref={contentRef} className="max-w-6xl mx-auto mb-20" style={{ opacity: 0 }}>
          {/* Bio */}
          <div className="glass rounded-2xl p-8 mb-6 hover:border-indigo-500/30 transition-all duration-500 group">
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
              Full Stack MERN Developer
            </h3>
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
          </div>

          {/* Quote */}
          <div className="glass rounded-2xl p-6 mb-10 border-l-4 border-indigo-500/50">
            <p className="text-slate-300 italic text-lg">
              &ldquo;Code is poetry, and every pixel tells a story.&rdquo;
            </p>
          </div>

          {/* Stats - Horizontal Layout */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(({ value, label, icon: Icon }, index) => (
              <div
                key={label}
                className="stat-card glass rounded-2xl p-5 text-center group hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300 cursor-default"
                style={{ opacity: 0 }}
              >
                <div
                  className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${index % 2 === 0 ? 'rgba(99,102,241,0.2)' : 'rgba(6,182,212,0.2)'} 0%, ${index % 2 === 0 ? 'rgba(6,182,212,0.1)' : 'rgba(99,102,241,0.1)'} 100%)`,
                  }}
                >
                  <Icon
                    size={22}
                    className={`transition-colors ${index % 2 === 0 ? 'text-indigo-400 group-hover:text-cyan-400' : 'text-cyan-400 group-hover:text-indigo-400'}`}
                  />
                </div>
                <p className="text-3xl font-black gradient-text mb-1">{value}</p>
                <p className="text-sm text-slate-500 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div ref={skillsRef} className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-3">Skills & Technologies</h3>
            <p className="text-slate-400">Tools I use to bring ideas to life</p>
          </div>

          <div className="space-y-6">
            {skillCategories.map((category: SkillCategory) => (
              <div key={category} className="space-y-3">
                <h4 className="text-sm font-mono text-slate-500 uppercase tracking-wider ml-1">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map(({ icon: Icon, label, color }) => (
                      <div
                        key={label}
                        className="skill-item group flex items-center gap-3 px-5 py-3 rounded-xl glass hover:bg-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 cursor-default"
                        style={{ opacity: 0 }}
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                          style={{ backgroundColor: `${color}20` }}
                        >
                          <Icon size={20} style={{ color }} />
                        </div>
                        <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                          {label}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div ref={timelineRef}>
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-3">Experience & Education</h3>
            <p className="text-slate-400">My professional journey</p>
          </div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="timeline-card glass rounded-2xl p-6 md:p-8 hover:bg-white/[0.06] transition-all duration-300 group"
                style={{ opacity: 0 }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${item.accent}15` }}
                  >
                    <item.icon size={24} style={{ color: item.accent }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                      <h4 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {item.role}
                      </h4>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-mono"
                        style={{ backgroundColor: `${item.accent}15`, color: item.accent }}
                      >
                        {item.period}
                      </span>
                    </div>
                    <p
                      className="text-sm font-semibold mb-3"
                      style={{ color: item.accent }}
                    >
                      {item.org}
                    </p>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div
                    className="hidden md:flex w-10 h-10 rounded-full items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: `${item.accent}15` }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      style={{ color: item.accent }}
                    >
                      <path
                        d="M3 8H13M13 8L9 4M13 8L9 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
