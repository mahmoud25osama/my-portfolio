import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Footer: React.FC = () => {
    return (
        <footer className="h-14 border-t border-slate-600 flex justify-between items-center">
            <div className="flex h-full">
                <div className="px-6 py-4 h-full flex items-center border-r border-slate-600">
                    <span className="text-slate-400 text-base">
                        find me in:
                    </span>
                </div>

                {/* <a
                    href="#"
                    className="w-14 h-full border-r border-slate-600 flex items-center justify-center hover:bg-slate-800 transition-colors"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                            fill="#62748E"
                        />
                    </svg>
                </a> */}
                <a
                    href="https://www.linkedin.com/in/ma252002/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-full border-r border-slate-600 flex items-center justify-center hover:bg-slate-800 transition-colors"
                >
                    <FaLinkedinIn size={24} className="text-slate-500" />
                </a>
                <a
                    href="https://github.com/mahmoud25osama"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-full lg:hidden border-r border-slate-600 flex items-center justify-center hover:bg-slate-800 transition-colors"
                >
                    <FaGithub size={24} className="  text-slate-500" />
                </a>
            </div>

            <div className="hidden lg:block h-full border-l border-slate-600">
                <a
                    href="https://github.com/mahmoud25osama"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 h-full flex items-center gap-2 hover:bg-slate-800 transition-colors"
                >
                    <span className=" text-slate-400 text-base">
                        @mahmoud25osama
                    </span>
                    <FaGithub size={24} className="text-slate-500" />
                </a>
            </div>
        </footer>
    )
}
export default Footer
