'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { FaArrowRight, FaDownload, FaGithub } from 'react-icons/fa6'
import { FaReact, FaJs, FaHtml5 } from 'react-icons/fa6'
import { RiNextjsFill } from 'react-icons/ri'
import { SiTypescript, SiTailwindcss } from 'react-icons/si'

const techStack = [
    { icon: FaReact, label: 'React', color: '#22d3ee' },
    { icon: RiNextjsFill, label: 'Next.js', color: '#e2e8f0' },
    { icon: SiTypescript, label: 'TypeScript', color: '#60a5fa' },
    { icon: FaJs, label: 'JavaScript', color: '#fcd34d' },
    { icon: SiTailwindcss, label: 'Tailwind', color: '#22d3ee' },
    { icon: FaHtml5, label: 'HTML/CSS', color: '#fb923c' },
]

const HERO_PHRASES = [
    'scalable, robust web architectures',
    'modern full-stack solutions',
    'fast, beautiful web applications',
]

export default function HeroSection() {
    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [typingSpeed, setTypingSpeed] = useState(150)

    const containerRef = useRef<HTMLDivElement>(null)
    const headlineRef = useRef<HTMLHeadingElement>(null)
    const subRef = useRef<HTMLDivElement>(null)
    const descRef = useRef<HTMLParagraphElement>(null)
    const ctaRef = useRef<HTMLDivElement>(null)
    const techRef = useRef<HTMLDivElement>(null)
    const scrollRef = useRef<HTMLDivElement>(null)
    const cursorRef = useRef<HTMLSpanElement>(null)

    // Typing effect
    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % HERO_PHRASES.length
            const fullText = HERO_PHRASES[i]

            setText(
                isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1)
            )

            setTypingSpeed(isDeleting ? 40 : 80)

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2500)
            } else if (isDeleting && text === '') {
                setIsDeleting(false)
                setLoopNum(loopNum + 1)
                setTypingSpeed(400)
            }
        }
        const timer = setTimeout(handleTyping, typingSpeed)
        return () => clearTimeout(timer)
    }, [text, isDeleting, loopNum, typingSpeed])

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

            // Stagger in heading characters
            if (headlineRef.current) {
                const text = headlineRef.current.textContent || ''
                headlineRef.current.innerHTML = text
                    .split('')
                    .map((ch) =>
                        ch === ' '
                            ? `<span style="display:inline-block;width:0.3em">&nbsp;</span>`
                            : `<span style="display:inline-block;opacity:0;transform:translateY(60px)">${ch}</span>`
                    )
                    .join('')
                tl.to(headlineRef.current.querySelectorAll('span'), {
                    opacity: 1,
                    y: 0,
                    duration: 0.06,
                    stagger: 0.03,
                    ease: 'back.out(1.5)',
                }, 0.2)
            }

            // Sub-title, desc, cta, tech
            tl.fromTo(subRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, 0.55)
            tl.fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.75)
            tl.fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.9)
            tl.fromTo(techRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 1.05)
            tl.fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, 1.3)

            // Cursor blink
            gsap.to(cursorRef.current, {
                opacity: 0,
                duration: 0.25,
                repeat: -1,
                yoyo: true,
                ease: 'steps(1)',
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id="hero" ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-grid">
  {/* Decorative orbs - responsive sizing */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="anim-orb-1 absolute rounded-full opacity-30 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px]"
          style={{
            top: '-10%',
            right: '-5%',
            background:
              'radial-gradient(circle, rgba(99,102,241,0.6) 0%, rgba(99,102,241,0) 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="anim-orb-2 absolute rounded-full opacity-25 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]"
          style={{
            bottom: '-5%',
            left: '-5%',
            background:
              'radial-gradient(circle, rgba(6,182,212,0.5) 0%, rgba(6,182,212,0) 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="anim-orb-3 absolute rounded-full opacity-15 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[450px] xl:h-[450px]"
          style={{
            top: '40%',
            left: '20%',
            background:
              'radial-gradient(circle, rgba(124,58,237,0.5) 0%, rgba(124,58,237,0) 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

  {/* Content - Responsive sizing for all screens */}
      <div className="relative z-10 max-w-4xl xl:max-w-5xl 3xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
        {/* Tag line */}
        <div
          ref={subRef}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass mb-6 sm:mb-8 text-xs sm:text-sm font-mono text-teal-400"
          style={{ opacity: 0 }}
        >
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          Available for opportunities
        </div>

        {/* Headline - Responsive text sizes */}
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 3xl:text-9xl font-black text-white mb-4 sm:mb-6 tracking-tight leading-[1.1]"
        >
          Mahmoud Osama
        </h1>

        {/* Role - Responsive */}
        <div className="flex items-center justify-center mb-6 sm:mb-8 min-h-[32px] sm:min-h-[40px]">
          <p className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-light text-slate-400 text-center">
            I engineer{' '}
            <span className="gradient-text font-semibold">
              {text}
            </span>
          </p>
          <span
            ref={cursorRef}
            className="text-2xl sm:text-3xl md:text-4xl font-light text-indigo-400 -ml-1"
          >
            |
          </span>
        </div>

        {/* Description - Responsive width and text */}
        <p
          ref={descRef}
          className="text-sm sm:text-base md:text-lg xl:text-xl text-slate-400 max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-2 sm:px-0"
          style={{ opacity: 0 }}
        >
          Full Stack MERN Developer specializing in{' '}
          <span className="text-indigo-400 font-medium">React.js</span> &{' '}
          <span className="text-teal-400 font-medium">Node.js</span>. Passionate
          about crafting pixel-perfect UIs, robust backends, and accessible
          digital experiences.
        </p>

        {/* CTA buttons - Responsive sizing */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
          style={{ opacity: 0 }}
        >
          <a href="#projects" className="btn-primary text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3">
            View My Work
            <FaArrowRight size={14} className="sm:size-4" />
          </a>
          <a
            href="/Mahmoud Osama .pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3"
          >
            <FaDownload size={14} className="sm:size-4" />
            Download CV
          </a>
          <a
            href="https://github.com/Mahmoud-O"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3"
          >
            <FaGithub size={16} className="sm:size-4" />
            GitHub
          </a>
        </div>

        {/* Tech stack - Responsive */}
        <div ref={techRef} className="flex flex-col items-center gap-3 sm:gap-4" style={{ opacity: 0 }}>
          <p className="text-xs text-slate-500 uppercase tracking-widest font-mono">
            Tech Stack
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
            {techStack.map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass text-xs sm:text-sm text-slate-300 hover:scale-110 transition-transform cursor-default"
              >
                <Icon size={14} className="sm:size-4" style={{ color }} />
                <span className="hidden xs:inline">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

            {/* Scroll indicator */}
            <div
                ref={scrollRef}
                className="animate-bounce-y absolute bottom-8 left-1/2 flex flex-col items-center gap-2"
                style={{ opacity: 0 }}
            >
                <span className="text-xs text-slate-600 uppercase tracking-widest font-mono">
                    Scroll
                </span>
                <div className="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent" />
            </div>
        </section>
    )
}
