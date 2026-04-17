import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="relative z-10 border-t border-white/5 bg-[#080b14]/80 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Left - brand */}
                <div className="flex items-center gap-2">
                    <span className="text-slate-500 text-sm">
                        © {year}{' '}
                        <span className="text-slate-300 font-medium">Mahmoud Osama</span>
                        . Crafted with ❤️
                    </span>
                </div>

                {/* Right - social links */}
                <div className="flex items-center gap-1">
                    <a
                        href="https://github.com/mahmoud25osama"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 text-slate-500 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                        aria-label="GitHub"
                    >
                        <FaGithub size={18} />
                    </a>
                    <a
                        href="mailto:mahmoud4h5@gmail.com"
                        className="p-2.5 text-slate-500 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                        aria-label="Email"
                    >
                        <IoMdMail size={18} />
                    </a>
                    <Link
                        href="/contact"
                        className="ml-2 text-sm text-slate-500 hover:text-indigo-400 transition-colors"
                    >
                        _contact-me →
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
