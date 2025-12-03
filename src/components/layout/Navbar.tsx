'use client'
import { tabs } from '@/lib/constants'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'

const Navbar = () => {
    const router = useRouter()
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Close menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [pathname])

    return (
        <>
            {/* Desktop & Mobile Header */}
            <header className="h-14 border-b border-slate-600 flex justify-between items-center relative z-50 bg-slate-900">
                {/* Logo */}
                <div className="flex items-center gap-[119px]">
                    <div className=" px-6 md:px-8 py-4 h-full flex items-center ">
                        <span className="text-slate-400 text-lg font-normal">
                            Mahmoud-Osama
                        </span>
                    </div>
                    <div className="hidden md:flex items-center h-full">
                        {tabs.slice(0, 3).map((tab, index) => (
                            <div
                                key={tab.id}
                                className={`h-full border-r border-slate-600 flex flex-col ${
                                    index === 0
                                        ? 'border-l border-slate-600'
                                        : ''
                                }`}
                            >
                                <div
                                    className={`px-8 py-4 h-full flex items-center cursor-pointer hover:bg-slate-800/50 transition-colors ${
                                        pathname === `/${tab.id}`
                                            ? 'border-b-2 border-orange-400'
                                            : ''
                                    }`}
                                    onClick={() => router.push(`/${tab.id}`)}
                                >
                                    <span
                                        className={`text-base ${
                                            pathname === `/${tab.id}`
                                                ? 'text-white'
                                                : 'text-slate-400'
                                        }`}
                                    >
                                        {tab.label}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center h-full md:justify-between">
                    <div className="h-full border-l border-slate-600">
                        <div
                            className={`px-8 py-4 h-full flex items-center cursor-pointer hover:bg-slate-800/50 transition-colors ${
                                pathname === '/contact'
                                    ? 'border-b-2 border-orange-400'
                                    : ''
                            }`}
                            onClick={() => router.push('/contact')}
                        >
                            <span
                                className={`text-base ${
                                    pathname === '/contact'
                                        ? 'text-white'
                                        : 'text-slate-400'
                                }`}
                            >
                                _contact-me
                            </span>
                        </div>
                    </div>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden px-6 py-4 h-full flex items-center border-l border-slate-600 hover:bg-slate-800/50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <FaXmark size={24} className="text-slate-400" />
                    ) : (
                        <FaBars size={24} className="text-slate-400" />
                    )}
                </button>
            </header>

            {/* Mobile Menu Overlay - Prevent body scroll with fixed positioning */}
            {isMobileMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 top-14 bg-black/50 z-40 backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu */}
            <nav
                className={`md:hidden fixed top-14 left-0 right-0 bg-slate-900 border-b border-slate-600 z-50 transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                        ? 'translate-y-0 opacity-100'
                        : '-translate-y-full opacity-0 pointer-events-none'
                }`}
            >
                <div className="flex flex-col max-h-[calc(100vh-3.5rem)] overflow-y-auto">
                    {/* Main Tabs */}
                    {tabs.slice(0, 3).map((tab) => (
                        <div
                            key={tab.id}
                            className={`border-b border-slate-600 ${
                                pathname === `/${tab.id}`
                                    ? 'bg-slate-800/50 border-l-4 border-l-orange-400'
                                    : 'border-l-4 border-l-transparent'
                            }`}
                            onClick={() => router.push(`/${tab.id}`)}
                        >
                            <div className="px-6 py-4 cursor-pointer hover:bg-slate-800/50 active:bg-slate-800/70 transition-colors">
                                <span
                                    className={`text-base ${
                                        pathname === `/${tab.id}`
                                            ? 'text-white'
                                            : 'text-slate-400'
                                    }`}
                                >
                                    {tab.label}
                                </span>
                            </div>
                        </div>
                    ))}

                    {/* Contact Tab */}
                    <div
                        className={`border-b border-slate-600 ${
                            pathname === '/contact'
                                ? 'bg-slate-800/50 border-l-4 border-l-orange-400'
                                : 'border-l-4 border-l-transparent'
                        }`}
                        onClick={() => router.push('/contact')}
                    >
                        <div className="px-6 py-4 cursor-pointer hover:bg-slate-800/50 active:bg-slate-800/70 transition-colors">
                            <span
                                className={`text-base ${
                                    pathname === '/contact'
                                        ? 'text-white'
                                        : 'text-slate-400'
                                }`}
                            >
                                _contact-me
                            </span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Prevent body scroll with overlay - CSS only solution */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 -z-10 md:hidden" />
            )}
        </>
    )
}

export default Navbar
