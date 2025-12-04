'use client'
import { useState } from 'react'
import TechSidebar from '@/components/sections/TechSidebar'
import ProjectCard from '@/components/sections/ProjectCard'
import { projects } from '@/lib/data/projects'
import { FaXmark } from 'react-icons/fa6'
import { projectType } from '@/lib/types'

export default function ProjectsPage() {
    const [selectedTech, setSelectedTech] = useState<string[]>(['react'])
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

    const filteredProjects =
        selectedTech.length === 0
            ? projects
            : projects.filter((p) =>
                  Array.isArray(p.tech)
                      ? p.tech.some((tech: string) =>
                            selectedTech.includes(tech)
                        )
                      : selectedTech.includes(p.tech as string)
              )

    return (
        <main className="flex-1 flex flex-col lg:flex-row overflow-hidden h-[calc(100vh-7rem)]">
            <TechSidebar
                selectedTech={selectedTech}
                onTechChange={setSelectedTech}
                isMobileOpen={isMobileSidebarOpen}
                onMobileToggle={() =>
                    setIsMobileSidebarOpen(!isMobileSidebarOpen)
                }
                onMobileClose={() => setIsMobileSidebarOpen(false)}
            />

            <section className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="h-10 border-b border-slate-600 flex items-center flex-shrink-0 bg-slate-900">
                    <div className="flex h-full items-center justify-between px-4 lg:px-6 gap-3 w-full lg:w-auto lg:border-r lg:border-slate-600">
                        <span className="text-slate-300 font-medium">
                            {selectedTech.length === 0
                                ? 'All Projects'
                                : selectedTech.join(' • ')}
                        </span>
                        <span className="text-xs bg-indigo-600/20 text-indigo-400 px-3 py-1 rounded-full">
                            {filteredProjects.length} project
                            {filteredProjects.length !== 1 ? 's' : ''}
                        </span>
                        <FaXmark
                            size={16}
                            onClick={() => setSelectedTech([])}
                            className="text-slate-400 cursor-pointer hover:text-white transition-colors"
                        />
                    </div>
                </header>

                {/* Grid */}

                <div className="flex-1 flex overflow-hidden">
                    <div className="flex-1 overflow-auto">
                        {/* Projects Grid */}
                        <div className="p-4 sm:p-6 lg:p-8 xl:p-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-18 max-w-7xl mx-auto px-6">
                                {filteredProjects.map((project) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project as projectType}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Scroll Indicator - Desktop Only */}
                    <div className="hidden lg:flex w-8 justify-center py-3 border-l border-slate-600 flex-shrink-0"></div>
                </div>
            </section>
        </main>
    )
}
