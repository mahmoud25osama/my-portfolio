import SnakeGame from '@/components/sections/SnakeGame'
const HomePage = () => {
    return (
        <main className=" flex h-full items-center justify-center relative  px-8  ">
            <div className="absolute inset-0 ">
                <div
                    className="absolute w-96 h-96 bg-indigo-500 opacity-40 blur-3xl transform rotate-12"
                    style={{ left: '60%', top: '20%', filter: 'blur(87px)' }}
                />
                <div
                    className="absolute w-96 h-96 bg-teal-400 opacity-40 blur-3xl transform -rotate-90"
                    style={{ right: '25%', top: '0%', filter: 'blur(87px)' }}
                />
            </div>

            <div className="flex items-center justify-center gap-36 z-10 w-full max-w-7xl p-8">
                <div className="flex flex-col gap-20 w-[504px]">
                    <div className="flex flex-col gap-1">
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Hi all. I am
                        </p>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-6xl leading-tight text-white font-normal">
                                Mahmoud Osama
                            </h1>
                            <h2 className="text-3xl leading-tight text-indigo-500 font-normal">
                                &gt; Front-end developer
                            </h2>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-slate-400 text-base">
                            // complete the game to continue
                        </p>
                        <p className="text-slate-400 text-base">
                            // find my profile on Github:
                        </p>
                        <p className="text-base">
                            <span className="text-indigo-500">const </span>
                            <span className="text-blue-400">githubLink</span>
                            <span className="text-slate-400"> = </span>
                            <a
                                href="https://github.com/username"
                                className="text-amber-300 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                &quot;https://github.com/username/snake-game&quot;
                            </a>
                        </p>
                    </div>
                </div>
                <SnakeGame />
            </div>
        </main>
    )
}
export default HomePage
