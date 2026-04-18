import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'
import Logo, { LogoIcon } from './Logo'

const Footer = () => {
  const year = new Date().getFullYear()
    return (
<footer className="relative z-10 border-t border-white/5 bg-[#080b14]/80 backdrop-blur-sm">
    <div className="max-w-6xl xl:max-w-7xl 3xl:max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Left - brand */}
      <div className="flex items-center gap-2 sm:gap-3">
        <LogoIcon size={28} className="sm:size-8" />
        <span className="text-slate-500 text-xs sm:text-sm">
          © {year}{' '}
          <span className="text-slate-300 font-medium">Mahmoud Osama</span>
        </span>
      </div>

                {/* Right - social links */}
                <div className="flex items-center gap-1">
                    <a
                        href="https://github.com/Mahmoud-O"
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
                </div>
            </div>
        </footer>
    )
}

export default Footer
