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
