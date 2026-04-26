import { useEffect, useRef, useState } from 'react'

import gsap from 'gsap'
import { FaArrowRight, FaDownload, FaGithub } from 'react-icons/fa6'
import { techStack, HERO_PHRASES } from '@/lib/constants'

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
        tl.to(
          headlineRef.current.querySelectorAll('span'),
          {
            opacity: 1,
            y: 0,
            duration: 0.06,
            stagger: 0.03,
            ease: 'back.out(1.5)',
          },
          0.2
        )
      }

      tl.fromTo(subRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, 0.55)
      tl.fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.75)
      tl.fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.9)
      tl.fromTo(techRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 1.05)
      tl.fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, 1.3)

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
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="anim-orb-1 absolute rounded-full opacity-30 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px]"
          style={{
            top: '-10%',
            right: '-5%',
            background: 'radial-gradient(circle, rgba(220,38,38,0.55) 0%, rgba(220,38,38,0) 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="anim-orb-2 absolute rounded-full opacity-25 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]"
          style={{
            bottom: '-5%',
            left: '-5%',
            background: 'radial-gradient(circle, rgba(185,28,28,0.45) 0%, rgba(185,28,28,0) 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="anim-orb-3 absolute rounded-full opacity-15 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[450px] xl:h-[450px]"
          style={{
            top: '40%',
            left: '20%',
            background: 'radial-gradient(circle, rgba(220,38,38,0.12) 0%, rgba(220,38,38,0) 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl 3xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 text-center pt-20 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 pb-10 sm:pb-20 md:pb-24 lg:pb-28 xl:pb-32">
        <div
          ref={subRef}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full
                     border border-green-500/25 bg-green-500/8 mb-6 sm:mb-8
                     text-xs sm:text-sm font-mono text-green-400"
          style={{ opacity: 0 }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </div>

        <h1
          ref={headlineRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl 3xl:text-[10rem] font-black text-white mb-4 sm:mb-6 lg:mb-8 tracking-tight leading-[1.05]"
        >
          Mahmoud Osama
        </h1>

        <div className="flex flex-wrap items-baseline justify-center gap-x-1 mb-6 sm:mb-8 lg:mb-10 min-h-[28px] sm:min-h-[40px] lg:min-h-[56px]">
          <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-light text-slate-400 text-center">
            I engineer{' '}
            <span className="gradient-text font-semibold">{text}</span>
          </p>
          <span
            ref={cursorRef}
            className="text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-light text-slate-300"
          >
            |
          </span>
        </div>

        <p
          ref={descRef}
          className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl text-slate-400 max-w-xl md:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 lg:mb-14 px-2 sm:px-0"
          style={{ opacity: 0 }}
        >
          Full Stack MERN Developer specializing in{' '}
          <span className="gradient-text font-medium">React.js</span> &{' '}
          <span className="gradient-text font-medium">Node.js</span>. Passionate
          about crafting pixel-perfect UIs, robust backends, and accessible
          digital experiences.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-5 mb-10 sm:mb-16 lg:mb-20"
          style={{ opacity: 0 }}
        >
          <a
            href="#projects"
            className="btn-primary text-sm sm:text-base lg:text-lg !px-6 sm:!px-7 lg:!px-8 !py-2.5 sm:!py-3 lg:!py-4"
          >
            View My Work
            <FaArrowRight size={14} className="sm:size-4 lg:size-5" />
          </a>
          <a
            href="/Mahmoud_Osama_MERN_Stack.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm sm:text-base lg:text-lg !px-6 sm:!px-7 lg:!px-8 !py-2.5 sm:!py-3 lg:!py-4"
          >
            <FaDownload size={14} className="sm:size-4 lg:size-5" />
            Download CV
          </a>
          <a
            href="https://github.com/Mahmoud-O"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm sm:text-base lg:text-lg !px-6 sm:!px-7 lg:!px-8 !py-2.5 sm:!py-3 lg:!py-4"
          >
            <FaGithub size={16} className="sm:size-4 lg:size-5" />
            GitHub
          </a>
        </div>

        {/* ── Tech stack marquee (CSS — truly seamless) ── */}
        <div ref={techRef} className="w-full mt-2 lg:mt-6" style={{ opacity: 0 }}>
          <p className="text-xs lg:text-sm text-slate-600 uppercase tracking-widest font-mono text-center mb-4">
            Tech Stack
          </p>
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 lg:w-28 z-10
                            bg-gradient-to-r from-[#0a0a0a] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 lg:w-28 z-10
                            bg-gradient-to-l from-[#0a0a0a] to-transparent" />

            {/* forward row */}
            <div
              className="flex gap-3 lg:gap-4 whitespace-nowrap w-max mb-3 animate-marquee-left"
              style={{ animationDuration: '22s' }}
            >
              {[...techStack, ...techStack].map(({ icon: Icon, label, color }, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 rounded-full glass
                             text-xs lg:text-sm text-slate-300 font-mono shrink-0"
                >
                  <Icon size={13} className="lg:size-4" style={{ color }} />
                  {label}
                </span>
              ))}
            </div>

            {/* reverse row */}
            <div
              className="flex gap-3 lg:gap-4 whitespace-nowrap w-max animate-marquee-right"
              style={{ animationDuration: '28s' }}
            >
              {[...techStack, ...techStack].map(({ icon: Icon, label, color }, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 rounded-full glass
                             text-xs lg:text-sm text-slate-300 font-mono shrink-0"
                >
                  <Icon size={13} className="lg:size-4" style={{ color }} />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="animate-bounce-y absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        style={{ opacity: 0 }}
      >
        <span className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-mono">
          Scroll
        </span>
        <div className="w-px h-8 md:h-12 bg-gradient-to-b from-slate-500 to-transparent" />
      </div>
    </section>
  )
}
