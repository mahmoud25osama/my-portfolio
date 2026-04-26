import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { IconType } from 'react-icons'

export interface SkillCardProps {
  icon: IconType
  label: string
  color: string
}

/**
 * A skill badge with a magnetic hover effect — the card physically follows
 * the cursor, a radial glow tracks the mouse position inside the card,
 * and a shimmer sweep fires on hover enter.
 */
export default function SkillCard({ icon: Icon, label, color }: SkillCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  /* ── Magnetic translate ───────────────────── */
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const springX = useSpring(rawX, { stiffness: 300, damping: 30 })
  const springY = useSpring(rawY, { stiffness: 300, damping: 30 })

  /* ── Cursor-tracked glow position ────────── */
  const glowX = useTransform(springX, [-60, 60], [0, 100])
  const glowY = useTransform(springY, [-40, 40], [0, 100])

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    rawX.set((e.clientX - (rect.left + rect.width  / 2)) * 0.35)
    rawY.set((e.clientY - (rect.top  + rect.height / 2)) * 0.35)
  }

  function onMouseLeave() {
    rawX.set(0)
    rawY.set(0)
    setHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      className="skill-item relative flex items-center gap-3 px-5 py-3 rounded-xl cursor-default overflow-hidden"
      style={{
        x: springX,
        y: springY,
        opacity: 0,
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(12px)',
      }}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onMouseLeave}
      animate={{
        borderColor: hovered ? `${color}55` : 'rgba(255,255,255,0.08)',
        boxShadow: hovered
          ? `0 0 0 1px ${color}33, 0 8px 32px rgba(0,0,0,0.4), 0 0 24px ${color}18`
          : '0 0 0px transparent',
      }}
      transition={{ duration: 0.2 }}
      whileTap={{ scale: 0.96 }}
    >
      {/* Radial glow that follows cursor */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, ${color}22 0%, transparent 65%)`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.2s',
        }}
      />

      {/* Shimmer sweep on hover enter */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="pointer-events-none absolute inset-0"
            initial={{ x: '-100%', opacity: 0.6 }}
            animate={{ x: '200%', opacity: 0 }}
            exit={{}}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            style={{
              background: `linear-gradient(105deg, transparent 40%, ${color}30 50%, transparent 60%)`,
            }}
          />
        )}
      </AnimatePresence>

      {/* Icon box */}
      <motion.div
        className="relative w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${color}18` }}
        animate={hovered
          ? { scale: 1.18, rotate: 10, backgroundColor: `${color}30` }
          : { scale: 1,    rotate: 0,  backgroundColor: `${color}18` }}
        transition={{ type: 'spring', stiffness: 480, damping: 20 }}
      >
        {/* Glow ring */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          animate={hovered
            ? { boxShadow: `0 0 14px ${color}60`, opacity: 1 }
            : { boxShadow: '0 0 0px transparent', opacity: 0 }}
          transition={{ duration: 0.25 }}
        />
        {/* Icon with drop-shadow on hover */}
        <motion.div
          animate={hovered
            ? { scale: 1.2, filter: `drop-shadow(0 0 6px ${color}cc)` }
            : { scale: 1,   filter: 'none' }}
          transition={{ type: 'spring', stiffness: 500, damping: 18 }}
        >
          <Icon size={20} style={{ color }} />
        </motion.div>
      </motion.div>

      {/* Label */}
      <motion.span
        className="font-medium text-sm relative z-10"
        animate={{ color: hovered ? '#f1f5f9' : '#94a3b8' }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.span>
    </motion.div>
  )
}
