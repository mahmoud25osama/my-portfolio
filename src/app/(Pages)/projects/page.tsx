'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '@/lib/data/projects'
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'

gsap.registerPlugin(ScrollTrigger)

type FilterId = 'all' | 'react' | 'js' | 'nextjs' | 'html,css'

const filters: { id: FilterId; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'react', label: 'React' },
    { id: 'nextjs', label: 'Next.js' },
    { id: 'js', label: 'JavaScript' },
    { id: 'html,css', label: 'HTML/CSS' },
]

const ProjectsPage = () => {
    const [activeFilter, setActiveFilter] = useState<FilterId>('all')
    const gridRef = useRef<HTMLDivElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)
    const filterBarRef = useRef<HTMLDivElement>(null)
    const activeLineRef = useRef<HTMLDivElement>(null)

    // Normalize tech to string
    const getTech = (p: typeof projects[0]): string => {
        if (Array.isArray(p.tech)) return p.tech[0]
        return p.tech
    }

    const filtered =
        activeFilter === 'all'
            ? projects
            : projects.filter((p) => getTech(p) === activeFilter)

    // Header entrance
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headerRef.current, { opacity: 0, y: 40 }, {
                opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.1
            })
            gsap.fromTo(filterBarRef.current, { opacity: 0, y: 20 }, {
                opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.35
            })
        })
        return () => ctx.revert()
    }, [])

    // Animate grid cards when filter changes
    useEffect(() => {
        if (!gridRef.current) return
        const cards = gridRef.current.querySelectorAll('.project-card')
        gsap.fromTo(
            cards,
            { opacity: 0, y: 40, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out' }
        )
    }, [activeFilter])

    return (
        <div className="min-h-screen bg-[#080b14] pt-32 pb-24">
            {/* Background orb */}
            <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%)', filter: 'blur(80px)' }}
            />

            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div ref={headerRef} className="mb-12 text-center" style={{ opacity: 0 }}>
                    <p className="text-sm font-mono text-indigo-400 mb-4 uppercase tracking-widest">
                        // my work
                    </p>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h1>
                    <p className="text-base text-slate-400 max-w-xl mx-auto">
                        A collection of real-world projects I&apos;ve built — from full-stack apps to
                        creative UI experiments.
                    </p>
                </div>

                {/* Filter bar */}
                <div ref={filterBarRef} className="flex justify-center mb-12" style={{ opacity: 0 }}>
                    <div className="inline-flex items-center gap-1 p-1.5 rounded-2xl glass">
                        {filters.map((f) => (
                            <button
                                key={f.id}
                                onClick={() => setActiveFilter(f.id)}
                                className={`relative px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                                    activeFilter === f.id
                                        ? 'text-white'
                                        : 'text-slate-400 hover:text-slate-200'
                                }`}
                            >
                                {activeFilter === f.id && (
                                    <span
                                        className="absolute inset-0 rounded-xl"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(99,102,241,0.3),rgba(6,182,212,0.15))',
                                            border: '1px solid rgba(99,102,241,0.4)',
                                        }}
                                    />
                                )}
                                <span className="relative z-10">{f.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div
                    ref={gridRef}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {filtered.map((project) => {
                        const Icon = project.techIcon.icon
                        return (
                            <div
                                key={project.id}
                                className="project-card group relative flex flex-col rounded-2xl overflow-hidden gradient-border"
                                style={{ background: 'rgba(255,255,255,0.03)', opacity: 0 }}
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden bg-slate-800/50">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-[#080b14]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-xl glass-strong text-white hover:scale-110 transition-transform"
                                            aria-label="View live"
                                        >
                                            <FaArrowUpRightFromSquare size={16} />
                                        </a>
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 rounded-xl glass-strong text-white hover:scale-110 transition-transform"
                                                aria-label="View source"
                                            >
                                                <FaGithub size={16} />
                                            </a>
                                        )}
                                    </div>
                                    {/* Year badge */}
                                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-mono bg-[#080b14]/70 text-slate-400 backdrop-blur-sm">
                                        {project.year}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-1 p-5 gap-3">
                                    <div className="flex items-start justify-between gap-2">
                                        <h3 className="text-base font-semibold text-slate-100 font-mono leading-tight line-clamp-2">
                                            {project.title}
                                        </h3>
                                        <div
                                            className={`shrink-0 p-1.5 rounded-lg ${project.techIcon.bg}`}
                                        >
                                            <Icon
                                                size={14}
                                                className={project.techIcon.color}
                                            />
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 flex-1">
                                        {project.description}
                                    </p>
                                    {/* Links row */}
                                    <div className="flex items-center gap-3 pt-1 border-t border-white/5 mt-auto">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                                        >
                                            <FaArrowUpRightFromSquare size={10} />
                                            Live Demo
                                        </a>
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 transition-colors"
                                            >
                                                <FaGithub size={10} />
                                                Source
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Empty state */}
                {filtered.length === 0 && (
                    <div className="text-center py-24 text-slate-600">
                        <p className="text-4xl mb-3">🔍</p>
                        <p className="text-lg">No projects in this category yet.</p>
                    </div>
                )}
            </div>

            <div ref={activeLineRef} />
        </div>
    )
}

export default ProjectsPage
