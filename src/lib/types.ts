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

export type projectType = Array<{
    id: number
    title: string
    description: string
    buttonText: string
    tech: string
}>
