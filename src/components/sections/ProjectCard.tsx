'use client'
import { projectType } from '@/lib/types'
import Image from 'next/image'

export default function ProjectCard({ project }: { project: projectType }) {
    return (
        <div className="flex flex-col gap-4 group">
            {/* Project Title */}
            <h3 className="text-slate-400 text-md lg:text-base font-mono truncate group-hover:text-indigo-400 transition-colors">
                {project.title}
            </h3>

            {/* Project Card */}
            <div className="relative rounded-lg overflow-hidden border border-slate-600 hover:border-slate-500 transition-all hover:shadow-lg hover:shadow-indigo-500/10">
                {/* Project Image */}
                <div className="w-full h-32 sm:h-36 lg:h-40 bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={project.featured}
                    />
                    {/* Tech Badge */}
                    <div
                        className={`absolute top-4 right-4 w-10 h-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ${project.techIcon?.bg} backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center shadow-2xl ring-1 ring-white/10`}
                    >
                        {project.techIcon?.icon && (
                            <project.techIcon.icon
                                size={26}
                                className={project.techIcon.color}
                            />
                        )}
                    </div>
                </div>

                {/* Project Info */}
                <div className="bg-slate-950 p-6 flex flex-col gap-4">
                    <p className="text-slate-400 text-sm lg:text-base leading-relaxed line-clamp-3">
                        {project.description}
                    </p>

                    {project.liveUrl && (
                        <button
                            onClick={() =>
                                window.open(project.liveUrl, '_blank')
                            }
                            className="cursor-pointer bg-slate-600 text-white px-4 py-2 rounded text-sm  w-fit hover:bg-slate-500 active:bg-slate-700 transition-colors"
                        >
                            Live-Demo
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
