import { aboutContent } from './constants'

export interface TabType {
    id: string
    label: string
}

export interface SnakePosition {
    x: number
    y: number
}
export type DirectionType = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'
export interface GameState {
    snake: SnakePosition[]
    food: SnakePosition
    direction: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'
    isGameOver: boolean
    score: number
    isPlaying: boolean
}

export type SectionKey = 'personal-info' | 'contacts' | 'find-me'
export type ItemKey = 'bio' | 'education' | 'Skills'
export type PathType = keyof typeof aboutContent
export type Tech = 'react' | 'nextjs' | 'js' | 'html,css' | 'redux' | 'tailwind'

export type projectType = {
    id: string
    title: string
    description: string
    tech: Tech | Tech[] // لو مشروع فيه أكتر من تقنية (زي React + Next.js)
    techIcon?: { icon: any; bg: string } // أيقونات التقنيات مع ألوانها
    image: string
    liveUrl?: string
    githubUrl?: string
    featured?: boolean // لو عايز تعمل featured projects
    year?: number
    buttonText?: string
}
