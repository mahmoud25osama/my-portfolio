'use client'
import { projects } from '@/lib/constants'
import { useState } from 'react'
import {
    FaCheck,
    FaChevronDown,
    FaCss3,
    FaFilter,
    FaHtml5,
    FaJs,
    FaReact,
    FaXmark,
} from 'react-icons/fa6'
import { RiNextjsFill } from 'react-icons/ri'

const Projects = () => {
    const [selectedTech, setSelectedTech] = useState(['react'])
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

    const toggleTechnology = (techId: string) => {
        setSelectedTech((prev) =>
            prev.includes(techId)
                ? prev.filter((id) => id !== techId)
                : [...prev, techId]
        )
    }

    const technologies = [
        { id: 'react', name: 'React', icon: FaReact },
        { id: 'html', name: 'HTML', icon: FaHtml5 },
        { id: 'css', name: 'CSS', icon: FaCss3 },
        { id: 'nextjs', name: 'NextJs', icon: RiNextjsFill },
        { id: 'js', name: 'Js', icon: FaJs },
    ]

    // Filter projects based on selected technologies
    const filteredProjects = projects.filter((project) =>
        selectedTech.length === 0 ? true : selectedTech.includes(project.tech)
    )

    return (
        <main className="flex-1 flex flex-col lg:flex-row overflow-hidden h-[calc(100vh-7rem)]">
            {/* Mobile Filter Toggle Button */}
            <button
                onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
                className="lg:hidden fixed bottom-16 right-4 z-50 w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-600 transition-colors"
                aria-label="Toggle filters"
            >
                <FaFilter size={20} className="text-white" />
                {selectedTech.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-400 rounded-full flex items-center justify-center text-xs text-white font-bold">
                        {selectedTech.length}
                    </span>
                )}
            </button>

            {/* Mobile Sidebar Overlay */}
            {isMobileSidebarOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
                    onClick={() => setIsMobileSidebarOpen(false)}
                />
            )}

            {/* Sidebar - Filters */}
            <div
                className={`
                    fixed lg:static inset-y-0 left-0 z-40
                    w-[280px] md:w-[25%] flex-shrink-0
                    bg-slate-900 border-r border-slate-600
                    transform transition-transform duration-300 ease-in-out
                    overflow-auto
                    ${
                        isMobileSidebarOpen
                            ? 'translate-x-0'
                            : '-translate-x-full lg:translate-x-0'
                    }
                `}
            >
                <div className="flex flex-col h-full lg:pt-0 pt-14">
                    {/* Filter Header */}
                    <div className="h-10 border-b border-slate-600 flex items-center justify-between px-4 lg:px-6 gap-3 flex-shrink-0">
                        <div className="flex items-center gap-3">
                            <FaChevronDown size={16} className="text-white" />
                            <span className="text-white text-sm lg:text-base font-medium">
                                projects
                            </span>
                        </div>

                        {/* Clear All Button - Mobile */}
                        {selectedTech.length > 0 && (
                            <button
                                onClick={() => setSelectedTech([])}
                                className="lg:hidden text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                            >
                                Clear
                            </button>
                        )}
                    </div>

                    {/* Technologies Filter */}
                    <div className="flex-1 px-3 py-4 flex flex-col gap-2 overflow-auto">
                        <div className="flex items-center justify-between px-3 mb-2">
                            <span className="text-slate-400 text-xs uppercase tracking-wide">
                                Filter by:
                            </span>
                            {selectedTech.length > 0 && (
                                <button
                                    onClick={() => setSelectedTech([])}
                                    className="hidden lg:block text-xs text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
                                >
                                    Clear all
                                </button>
                            )}
                        </div>

                        {technologies.map((tech) => (
                            <div
                                key={tech.id}
                                className={`
                                    flex items-center px-3 gap-4 cursor-pointer 
                                    hover:bg-slate-800/50 active:bg-slate-800/70
                                    py-2 rounded-lg transition-all
                                    ${
                                        selectedTech.includes(tech.id)
                                            ? 'bg-slate-800/30 border-l-2 border-l-indigo-500'
                                            : 'border-l-2 border-l-transparent'
                                    }
                                `}
                                onClick={() => toggleTechnology(tech.id)}
                            >
                                {/* Checkbox */}
                                <div className="w-5 h-5 relative flex-shrink-0">
                                    <div
                                        className={`absolute inset-0 border-2 rounded transition-colors ${
                                            selectedTech.includes(tech.id)
                                                ? 'bg-indigo-500 border-indigo-500'
                                                : 'bg-slate-900 border-slate-500'
                                        }`}
                                    />
                                    {selectedTech.includes(tech.id) && (
                                        <FaCheck
                                            size={14}
                                            className="absolute top-0.5 left-0.5 text-white"
                                        />
                                    )}
                                </div>

                                {/* Tech Info */}
                                <div className="flex items-center gap-2 flex-1 min-w-0">
                                    <span className="text-lg lg:text-xl flex-shrink-0">
                                        {typeof tech.icon === 'string' ? (
                                            <span>{tech.icon}</span>
                                        ) : (
                                            <tech.icon size={16} />
                                        )}
                                    </span>
                                    <span className="text-white text-sm lg:text-base truncate">
                                        {tech.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Selected Count - Mobile */}
                    <div className="lg:hidden h-12 border-t border-slate-600 flex items-center justify-between px-4 py-3 flex-shrink-0">
                        <span className="text-slate-400 text-sm">
                            {selectedTech.length} selected
                        </span>
                        <button
                            onClick={() => setIsMobileSidebarOpen(false)}
                            className="px-4 py-1 bg-indigo-500 text-white text-sm rounded-lg hover:bg-indigo-600 transition-colors cursor-pointer"
                        >
                            Apply
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Projects Header */}
                <div className="h-10 border-b border-slate-600 flex items-center flex-shrink-0 bg-slate-900">
                    <div className="flex h-full items-center justify-between px-4 lg:px-6 gap-3 w-full lg:w-auto lg:border-r lg:border-slate-600">
                        <div className="flex items-center gap-3">
                            <span className="text-slate-400 text-sm lg:text-base">
                                {selectedTech.join(',') || 'all technologies'}
                            </span>
                            {filteredProjects.length !== projects.length && (
                                <span className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                                    {filteredProjects.length} of{' '}
                                    {projects.length}
                                </span>
                            )}
                        </div>
                        <FaXmark
                            size={16}
                            className="text-slate-400 cursor-pointer hover:text-white transition-colors"
                        />
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="flex-1 flex overflow-hidden">
                    <div className="flex-1 overflow-auto">
                        {/* No Results Message */}
                        {filteredProjects.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full p-8">
                                <div className="text-center max-w-md">
                                    <div className="text-6xl mb-4">🔍</div>
                                    <h3 className="text-xl text-white mb-2">
                                        No projects found
                                    </h3>
                                    <p className="text-slate-400 mb-6">
                                        Try adjusting your filters to see more
                                        results
                                    </p>
                                    <button
                                        onClick={() => setSelectedTech([])}
                                        className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
                                    >
                                        Clear Filters
                                    </button>
                                </div>
                            </div>
                        ) : (
                            /* Projects Grid */
                            <div className="p-4 sm:p-6 lg:p-8 xl:p-12">
                                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-8">
                                    {filteredProjects.map((project) => (
                                        <div
                                            key={project.id}
                                            className="flex flex-col gap-4 group"
                                        >
                                            {/* Project Title */}
                                            <h3 className="text-indigo-500 text-sm lg:text-base font-bold truncate group-hover:text-indigo-400 transition-colors">
                                                {project.title}
                                            </h3>

                                            {/* Project Card */}
                                            <div className="relative rounded-2xl overflow-hidden border border-slate-600 hover:border-slate-500 transition-all hover:shadow-lg hover:shadow-indigo-500/10">
                                                {/* Project Image */}
                                                <div className="w-full h-32 sm:h-36 lg:h-40 bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                                                    {/* Tech Badge */}
                                                    <div className="absolute top-3 right-3 w-8 h-8 bg-indigo-300 rounded-lg flex items-center justify-center shadow-lg">
                                                        <span className="text-slate-900 text-xl">
                                                            ⚛️
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Project Info */}
                                                <div className="bg-slate-950 p-6 flex flex-col gap-4">
                                                    <p className="text-slate-400 text-sm lg:text-base leading-relaxed line-clamp-3">
                                                        {project.description}
                                                    </p>

                                                    <button className="bg-slate-600 text-white px-4 py-2 rounded-lg text-sm w-full sm:w-auto hover:bg-slate-500 active:bg-slate-700 transition-colors">
                                                        {project.buttonText}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Scroll Indicator - Desktop Only */}
                    <div className="hidden lg:flex w-10 justify-center py-3 border-l border-slate-600 flex-shrink-0">
                        <div className="w-6 h-2 bg-slate-500 rounded" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Projects
