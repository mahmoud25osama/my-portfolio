import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa6'
import { IconType } from 'react-icons'

export interface MagneticLinkProps {
  icon: IconType
  label: string
  value: string
  href: string
  accent: string
  bg: string
}

/**
 * A contact link card with a magnetic hover effect —
 * the card physically follows the cursor with a spring animation.
 */
export default function MagneticLink({ icon: Icon, label, value, href, accent, bg }: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 280, damping: 18 })
  const springY = useSpring(y, { stiffness: 280, damping: 18 })

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    x.set((e.clientX - (rect.left + rect.width  / 2)) * 0.3)
    y.set((e.clientY - (rect.top  + rect.height / 2)) * 0.3)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.04 }}
      className="flex items-center gap-4 p-5 rounded-2xl gradient-border cursor-pointer group"
    >
      <span
        className="p-3 rounded-xl shrink-0 transition-all group-hover:scale-110"
        style={{ background: bg, color: accent }}
      >
        <Icon size={20} />
      </span>

      <div>
        <p className="text-xs text-slate-500 mb-0.5 uppercase tracking-widest font-mono">
          {label}
        </p>
        <p className="text-slate-200 text-sm font-medium">{value}</p>
      </div>

      <FaArrowRight
        size={12}
        className="ml-auto text-slate-600 group-hover:text-slate-400 group-hover:translate-x-1 transition-all"
      />
    </motion.a>
  )
}
