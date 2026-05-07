'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaGithub, FaCircleCheck, FaArrowRight } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'
import { FaPhone } from 'react-icons/fa6'

gsap.registerPlugin(ScrollTrigger)

const contactLinks = [
    {
        icon: IoMdMail,
        label: 'Email',
        value: 'mahmoud4h5@gmail.com',
        href: 'mailto:mahmoud4h5@gmail.com',
        accent: '#615fff',
        bg: 'rgba(97,95,255,0.1)',
    },
    {
        icon: FaPhone,
        label: 'Phone',
        value: '+20 101 607 4277',
        href: 'tel:+201016074277',
        accent: '#06b6d4',
        bg: 'rgba(6,182,212,0.1)',
    },
    {
        icon: FaGithub,
        label: 'GitHub',
        value: 'github.com/mahmoud25osama',
        href: 'https://github.com/mahmoud25osama',
        accent: '#e2e8f0',
        bg: 'rgba(255,255,255,0.06)',
    },
]

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const leftRef = useRef<HTMLDivElement>(null)
    const rightRef = useRef<HTMLDivElement>(null)
    const successRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(leftRef.current, { opacity: 0, x: -50 }, {
                opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.1
            })
            gsap.fromTo(rightRef.current, { opacity: 0, x: 50 }, {
                opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.25
            })
        })
        return () => ctx.revert()
    }, [])

    // Animate success state
    useEffect(() => {
        if (status === 'success' && successRef.current) {
            gsap.fromTo(
                successRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.4)' }
            )
        }
    }, [status])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
            if (res.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', message: '' })
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    return (
        <div className="min-h-screen bg-[#080b14] pt-32 pb-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[600px] opacity-10 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.7) 0%, transparent 70%)', filter: 'blur(80px)' }}
            />
            <div className="pointer-events-none absolute top-0 left-0 w-[400px] h-[400px] opacity-10 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%)', filter: 'blur(80px)' }}
            />

            <div className="max-w-5xl mx-auto px-6">
                {/* Page header */}
                <div className="text-center mb-16">
                    <p className="text-sm font-mono text-teal-400 mb-4 uppercase tracking-widest">
                        // contact
                    </p>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
                        Let&apos;s <span className="gradient-text">Work Together</span>
                    </h1>
                    <p className="text-slate-400 max-w-xl mx-auto text-base">
                        Have a project in mind? I&apos;d love to hear about it. Send me a message and
                        let&apos;s build something great.
                    </p>
                </div>

                <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 items-start">
                    {/* Left: Contact info */}
                    <div ref={leftRef} className="flex flex-col gap-5" style={{ opacity: 0 }}>
                        {contactLinks.map((link) => {
                            const Icon = link.icon
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith('http') ? '_blank' : undefined}
                                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="flex items-center gap-4 p-5 rounded-2xl gradient-border transition-all hover:scale-[1.02] group"
                                >
                                    <span
                                        className="p-3 rounded-xl shrink-0 transition-all group-hover:scale-110"
                                        style={{ background: link.bg, color: link.accent }}
                                    >
                                        <Icon size={20} />
                                    </span>
                                    <div>
                                        <p className="text-xs text-slate-500 mb-0.5 uppercase tracking-widest font-mono">
                                            {link.label}
                                        </p>
                                        <p className="text-slate-200 text-sm font-medium">{link.value}</p>
                                    </div>
                                    <FaArrowRight size={12} className="ml-auto text-slate-600 group-hover:text-slate-400 transition-colors" />
                                </a>
                            )
                        })}

                        {/* Fun note */}
                        <div className="p-5 rounded-2xl glass mt-2">
                            <p className="text-xs font-mono text-slate-500 mb-2">// response time</p>
                            <p className="text-slate-300 text-sm">
                                I typically reply within{' '}
                                <span className="text-teal-400 font-semibold">24 hours</span>.
                                Looking forward to your message! 🚀
                            </p>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div ref={rightRef} style={{ opacity: 0 }}>
                        {status === 'success' ? (
                            <div
                                ref={successRef}
                                className="flex flex-col items-center justify-center text-center p-12 rounded-2xl gradient-border gap-5"
                                style={{ opacity: 0 }}
                            >
                                <span className="text-green-400">
                                    <FaCircleCheck size={52} />
                                </span>
                                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                                <p className="text-slate-400 text-sm max-w-xs">
                                    Thanks for reaching out. I&apos;ll get back to you as soon as
                                    possible.
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="btn-secondary !py-2.5 !px-6 !text-sm"
                                >
                                    Send another →
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="p-8 rounded-2xl gradient-border flex flex-col gap-5"
                            >
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        required
                                        className="input-field"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        required
                                        className="input-field"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project..."
                                        required
                                        rows={5}
                                        className="input-field resize-none"
                                    />
                                </div>

                                {status === 'error' && (
                                    <p className="text-pink-400 text-sm">
                                        Something went wrong. Please try again or email me directly.
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="btn-primary justify-center"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                                            Sending…
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <FaArrowRight size={14} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
