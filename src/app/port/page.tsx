// components/Portfolio.tsx
'use client'

import React, { useState } from 'react'

import {
    FaChevronDown,
    FaCode,
    FaGithub,
    FaGithubAlt,
    FaLinkedin,
    FaMessage,
    FaUser,
} from 'react-icons/fa6'
import { FaExternalLinkAlt, FaMailBulk, FaMailchimp } from 'react-icons/fa'

interface Project {
    id: number
    title: string
    description: string
    image: string
    technologies: string[]
    githubUrl: string
    liveUrl: string
}

interface Experience {
    id: number
    position: string
    company: string
    duration: string
    description: string
}

const Portfolio: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('home')

    const projects: Project[] = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description:
                'Full-stack e-commerce solution with Next.js, TypeScript, and Stripe integration',
            image: '/api/placeholder/400/300',
            technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe'],
            githubUrl: 'https://github.com',
            liveUrl: 'https://example.com',
        },
        {
            id: 2,
            title: 'Task Management App',
            description:
                'Modern task management application with drag-and-drop functionality',
            image: '/api/placeholder/400/300',
            technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
            githubUrl: 'https://github.com',
            liveUrl: 'https://example.com',
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            description:
                'Real-time weather dashboard with beautiful data visualizations',
            image: '/api/placeholder/400/300',
            technologies: ['Vue.js', 'D3.js', 'Express', 'Weather API'],
            githubUrl: 'https://github.com',
            liveUrl: 'https://example.com',
        },
    ]

    const experiences: Experience[] = [
        {
            id: 1,
            position: 'Senior Frontend Developer',
            company: 'Tech Solutions Inc.',
            duration: '2022 - Present',
            description:
                'Leading frontend development team, implementing modern React applications with TypeScript and Next.js',
        },
        {
            id: 2,
            position: 'Full Stack Developer',
            company: 'StartupXYZ',
            duration: '2020 - 2022',
            description:
                'Developed and maintained web applications using MERN stack, collaborated with design team on UI/UX',
        },
        {
            id: 3,
            position: 'Frontend Developer',
            company: 'Digital Agency',
            duration: '2019 - 2020',
            description:
                'Created responsive websites and web applications using modern JavaScript frameworks',
        },
    ]

    const skills = [
        { name: 'JavaScript/TypeScript', level: 95 },
        { name: 'React/Next.js', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'AWS/Cloud', level: 75 },
        { name: 'UI/UX Design', level: 70 },
    ]

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId)
        const element = document.getElementById(sectionId)
        element?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Portfolio
                        </div>
                        <div className="hidden md:flex space-x-8">
                            {[
                                'Home',
                                'About',
                                'Experience',
                                'Projects',
                                'Contact',
                            ].map((item) => (
                                <button
                                    key={item}
                                    onClick={() =>
                                        scrollToSection(item.toLowerCase())
                                    }
                                    className={`transition-colors hover:text-blue-400 ${
                                        activeSection === item.toLowerCase()
                                            ? 'text-blue-400'
                                            : 'text-gray-300'
                                    }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                id="home"
                className="min-h-screen flex items-center justify-center px-6 pt-20"
            >
                <div className="text-center max-w-4xl mx-auto">
                    <div className="mb-8">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 mx-auto mb-8 flex items-center justify-center text-4xl font-bold">
                            JD
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        John Developer
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-300">
                        Full Stack Developer & UI/UX Enthusiast
                    </p>
                    <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
                        I create exceptional digital experiences through clean
                        code, innovative design, and cutting-edge technologies.
                        Let's build something amazing together.
                    </p>
                    <div className="flex justify-center space-x-6 mb-12">
                        <a
                            href="#"
                            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full transition-colors flex items-center space-x-2"
                        >
                            <FaMailchimp size={20} />
                            <span>Get In Touch</span>
                        </a>
                        <a
                            href="#"
                            className="border border-gray-600 hover:border-gray-400 px-8 py-3 rounded-full transition-colors flex items-center space-x-2"
                        >
                            <FaGithub size={20} />
                            <span>View GitHub</span>
                        </a>
                    </div>
                    <div
                        onClick={() => scrollToSection('about')}
                        className="cursor-pointer animate-bounce"
                    >
                        <FaChevronDown
                            size={32}
                            className="mx-auto text-gray-400"
                        />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold mb-12 text-center">
                        About Me
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                I'm a passionate full-stack developer with over
                                5 years of experience creating digital solutions
                                that make a difference. My journey in technology
                                started with curiosity and has evolved into
                                expertise across modern web technologies.
                            </p>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                I specialize in React ecosystem, Node.js, and
                                cloud technologies. I love turning complex
                                problems into simple, beautiful, and intuitive
                                solutions.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    <FaLinkedin size={24} />
                                </a>
                                <a
                                    href="#"
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    <FaGithubAlt size={24} />
                                </a>
                                <a
                                    href="#"
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    <FaMailBulk size={24} />
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">
                                Skills
                            </h3>
                            <div className="space-y-4">
                                {skills.map((skill, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-300">
                                                {skill.name}
                                            </span>
                                            <span className="text-blue-400">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                                                style={{
                                                    width: `${skill.level}%`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20 px-6 bg-black/20">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold mb-12 text-center">
                        Experience
                    </h2>
                    <div className="space-y-8">
                        {experiences.map((exp) => (
                            <div
                                key={exp.id}
                                className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-blue-400">
                                            {exp.position}
                                        </h3>
                                        <p className="text-xl text-gray-300">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <span className="text-purple-400 font-medium">
                                        {exp.duration}
                                    </span>
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold mb-12 text-center">
                        Featured Projects
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all group hover:transform hover:scale-105"
                            >
                                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                                    <FaCode
                                        size={48}
                                        className="text-blue-400"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map(
                                            (tech, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs"
                                                >
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                    <div className="flex space-x-4">
                                        <a
                                            href={project.githubUrl}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            <FaGithub size={20} />
                                        </a>
                                        <a
                                            href={project.liveUrl}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            <FaExternalLinkAlt size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-6 bg-black/20">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold mb-8">
                        Let's Work Together
                    </h2>
                    <p className="text-xl text-gray-300 mb-12">
                        Have a project in mind? Let's discuss how we can bring
                        your ideas to life.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
                            <FaMailchimp
                                size={32}
                                className="mx-auto mb-4 text-blue-400"
                            />
                            <h3 className="text-xl font-semibold mb-2">
                                Email
                            </h3>
                            <p className="text-gray-300">
                                hello@johndeveloper.com
                            </p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
                            <FaMessage
                                size={32}
                                className="mx-auto mb-4 text-purple-400"
                            />
                            <h3 className="text-xl font-semibold mb-2">
                                Phone
                            </h3>
                            <p className="text-gray-300">+1 (555) 123-4567</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
                            <FaUser
                                size={32}
                                className="mx-auto mb-4 text-pink-400"
                            />
                            <h3 className="text-xl font-semibold mb-2">
                                Location
                            </h3>
                            <p className="text-gray-300">San Francisco, CA</p>
                        </div>
                    </div>
                    <a
                        href="mailto:hello@johndeveloper.com"
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-12 py-4 rounded-full text-lg font-semibold transition-all inline-block"
                    >
                        Start a Project
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-white/10">
                <div className="container mx-auto text-center">
                    <p className="text-gray-400">
                        © 2024 John Developer. Built with Next.js and Tailwind
                        CSS.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Portfolio
