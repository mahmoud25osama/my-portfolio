'use client'
import { useEffect, useRef } from 'react'
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

const AboutPage = () => {
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
                { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.1 }
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
        <div className="min-h-screen bg-[#080b14]">
            {/* Hero Section */}
            <section className="relative pt-36 pb-20 px-6 overflow-hidden">
                <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20"
                    style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.5) 0%, transparent 70%)', filter: 'blur(80px)' }}
                />
                <div ref={heroRef} className="max-w-4xl mx-auto" style={{ opacity: 0 }}>
                    <p className="text-sm font-mono text-indigo-400 mb-4 uppercase tracking-widest">
                        // about me
                    </p>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Crafting Digital{' '}
                        <span className="gradient-text">Experiences</span>
                    </h1>
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
            </section>

            {/* Stats */}
            <section className="py-16 px-6 border-y border-white/5">
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
            </section>

            {/* Skills */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <p className="text-sm font-mono text-teal-400 mb-3 uppercase tracking-widest">
                        // tech stack
                    </p>
                    <h2 className="text-3xl font-bold text-white mb-10">Skills & Tools</h2>
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
            </section>

            {/* Timeline */}
            <section className="py-20 px-6 bg-[#0d1120]/50">
                <div className="max-w-4xl mx-auto">
                    <p className="text-sm font-mono text-violet-400 mb-3 uppercase tracking-widest">
                        // journey
                    </p>
                    <h2 className="text-3xl font-bold text-white mb-12">Experience & Education</h2>
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
                                    <h3 className="text-lg font-bold text-white mb-1">{item.role}</h3>
                                    <p className="text-sm font-medium mb-3" style={{ color: item.accent }}>
                                        {item.org}
                                    </p>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact info */}
            <section ref={contactRef} className="py-20 px-6" style={{ opacity: 0 }}>
                <div className="max-w-4xl mx-auto">
                    <p className="text-sm font-mono text-pink-400 mb-3 uppercase tracking-widest">
                        // reach me
                    </p>
                    <h2 className="text-3xl font-bold text-white mb-8">Let&apos;s Connect</h2>
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
            </section>
        </div>
    )
}

export default AboutPage
