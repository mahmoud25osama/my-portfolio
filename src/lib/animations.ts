import { Variants } from 'framer-motion'

export const createCardVariants = (
  hoverY = -8,
  hoverScale = 1.02,
  hoverBoxShadow = '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.12)'
): Variants => ({
  rest: {
    y: 0,
    scale: 1,
    boxShadow: '0 0 0px transparent',
    borderColor: 'rgba(255,255,255,0.07)',
  },
  hover: {
    y: hoverY,
    scale: hoverScale,
    boxShadow: hoverBoxShadow,
    borderColor: 'rgba(255,255,255,0.15)',
    transition: { type: 'spring', stiffness: 340, damping: 22 },
  },
})

export const iconBoxVariants: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: [0, -10, 10, -5, 0],
    scale: 1.25,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
}

export const dotVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.4,
    transition: { type: 'spring', stiffness: 500, damping: 18 },
  },
}

export const badgeVariants: Variants = {
  rest: { scale: 1, opacity: 0.85 },
  hover: { scale: 1.08, opacity: 1, transition: { type: 'spring', stiffness: 400, damping: 20 } },
}

export const featureVariants: Variants = {
  rest: { x: 0, opacity: 1 },
  hover: {
    x: 4,
    transition: { staggerChildren: 0.04 },
  },
}

export const featureItemVariants: Variants = {
  rest: { x: 0, color: 'rgb(107 114 128)' },
  hover: { x: 4, color: 'rgb(203 213 225)', transition: { duration: 0.2 } },
}
