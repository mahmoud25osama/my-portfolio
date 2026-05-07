'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { FaArrowRight, FaDownload, FaGithub } from 'react-icons/fa6'
import { FaReact, FaJs, FaHtml5 } from 'react-icons/fa6'
import { RiNextjsFill } from 'react-icons/ri'
import { SiTypescript, SiTailwindcss } from 'react-icons/si'

const techStack = [
    { icon: FaReact, label: 'React', color: '#22d3ee' },
    { icon: RiNextjsFill, label: 'Next.js', color: '#e2e8f0' },
    { icon: SiTypescript, label: 'TypeScript', color: '#60a5fa' },
    { icon: FaJs, label: 'JavaScript', color: '#fcd34d' },
    { icon: SiTailwindcss, label: 'Tailwind', color: '#22d3ee' },
    { icon: FaHtml5, label: 'HTML/CSS', color: '#fb923c' },
]

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const headlineRef = useRef<HTMLHeadingElement>(null)
    const subRef = useRef<HTMLDivElement>(null)
    const descRef = useRef<HTMLParagraphElement>(null)
    const ctaRef = useRef<HTMLDivElement>(null)
    const techRef = useRef<HTMLDivElement>(null)
    const scrollRef = useRef<HTMLDivElement>(null)
    const cursorRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

            // Stagger in heading characters
            if (headlineRef.current) {
                const text = headlineRef.current.textContent || ''
                headlineRef.current.innerHTML = text
                    .split('')
                    .map((ch) =>
                        ch === ' '
                            ? `<span style="display:inline-block;width:0.3em">&nbsp;</span>`
                            : `<span style="display:inline-block;opacity:0;transform:translateY(60px)">${ch}</span>`
                    )
                    .join('')
                tl.to(headlineRef.current.querySelectorAll('span'), {
                    opacity: 1,
                    y: 0,
                    duration: 0.06,
                    stagger: 0.03,
                    ease: 'back.out(1.5)',
                }, 0.3)
            }

            // Sub-title, desc, cta, tech
            tl.fromTo(subRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, 0.55)
            tl.fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.75)
            tl.fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.9)
            tl.fromTo(techRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 1.05)
            tl.fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 1.3)

            // Cursor blink
            gsap.to(cursorRef.current, {
                opacity: 0,
                duration: 0.6,
                repeat: -1,
                yoyo: true,
                ease: 'steps(1)',
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id="hero" ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-grid">
            {/* Decorative orbs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                    className="anim-orb-1 absolute rounded-full opacity-30"
                    style={{
                        width: 600,
                        height: 600,
                        top: '-15%',
                        right: '-10%',
                        background:
                            'radial-gradient(circle, rgba(99,102,241,0.6) 0%, rgba(99,102,241,0) 70%)',
                        filter: 'blur(60px)',
                    }}
                />
                <div
                    className="anim-orb-2 absolute rounded-full opacity-25"
                    style={{
                        width: 500,
                        height: 500,
                        bottom: '-10%',
                        left: '-5%',
                        background:
                            'radial-gradient(circle, rgba(6,182,212,0.5) 0%, rgba(6,182,212,0) 70%)',
                        filter: 'blur(60px)',
                    }}
                />
                <div
                    className="anim-orb-3 absolute rounded-full opacity-15"
                    style={{
                        width: 350,
                        height: 350,
                        top: '40%',
                        left: '30%',
                        background:
                            'radial-gradient(circle, rgba(124,58,237,0.5) 0%, rgba(124,58,237,0) 70%)',
                        filter: 'blur(80px)',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-32 pb-20">
                {/* Tag line */}
                <div
                    ref={subRef}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm font-mono text-teal-400"
                    style={{ opacity: 0 }}
                >
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                    Available for opportunities
                </div>

                {/* Headline */}
                <h1
                    ref={headlineRef}
                    className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-tight"
                >
                    Mahmoud Osama
                </h1>

                {/* Role */}
                <div className="flex items-center justify-center gap-2 mb-8">
                    <p className="text-2xl md:text-3xl font-light text-slate-400">
                        I build{' '}
                        <span className="gradient-text font-semibold">
                            fast, beautiful
                        </span>{' '}
                        web experiences
                    </p>
                    <span
                        ref={cursorRef}
                        className="text-2xl md:text-3xl font-light text-indigo-400"
                    >
                        |
                    </span>
                </div>

                {/* Description */}
                <p
                    ref={descRef}
                    className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12"
                    style={{ opacity: 0 }}
                >
                    Front-end Developer specializing in{' '}
                    <span className="text-indigo-400 font-medium">React.js</span> &{' '}
                    <span className="text-teal-400 font-medium">Next.js</span>. Passionate
                    about crafting pixel-perfect UIs, smooth animations, and accessible
                    digital experiences.
                </p>

                {/* CTA buttons */}
                <div
                    ref={ctaRef}
                    className="flex flex-wrap items-center justify-center gap-4 mb-16"
                    style={{ opacity: 0 }}
                >
                    <Link href="#projects" className="btn-primary">
                        View My Work
                        <FaArrowRight size={14} />
                    </Link>
                    <a
                        href="/Mahmoud Osama .pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                        <FaDownload size={14} />
                        Download CV
                    </a>
                    <a
                        href="https://github.com/mahmoud25osama"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                        <FaGithub size={16} />
                        GitHub
                    </a>
                </div>

                {/* Tech stack */}
                <div ref={techRef} className="flex flex-col items-center gap-4" style={{ opacity: 0 }}>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-mono">
                        Tech Stack
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {techStack.map(({ icon: Icon, label, color }) => (
                            <div
                                key={label}
                                className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-300 hover:scale-110 transition-transform cursor-default"
                            >
                                <Icon size={16} style={{ color }} />
                                {label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                ref={scrollRef}
                className="animate-bounce-y absolute bottom-8 left-1/2 flex flex-col items-center gap-2"
                style={{ opacity: 0 }}
            >
                <span className="text-xs text-slate-600 uppercase tracking-widest font-mono">
                    Scroll
                </span>
                <div className="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent" />
            </div>
        </section>
    )
}
