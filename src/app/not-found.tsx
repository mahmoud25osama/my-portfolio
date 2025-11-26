'use client'

import { customStyle, customTheme } from '@/lib/constants'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function NotFound() {
    const codeString = `const page = findPage('you-were-looking-for');

if (!page) {
  console.log("Oops! Looks like you took a wrong turn in the codebase.");
  console.log("But hey, since you're here ...");
  console.log("👈 Go back to the homepage and explore more cool stuff!");
  throw new Error("404: PageNotFoundError 😕");
}

/* Suggestions:
   * - Check the URL for typos
   * - Use the site navigation
   * - Or hit CMD+Z in real life 😀
   */

redirect('home');`

    return (
        <div className="min-h-[calc(100vh-7rem)] flex items-center justify-center p-4 md:p-8">
            <div className="flex lg:pl-24 items-center justify-center gap-8 md:gap-16 lg:gap-24 max-w-7xl w-full flex-col lg:flex-row">
                {/* ASCII Art 404 */}
                <div className="font-mono text-[#607B96] whitespace-pre text-sm md:text-base lg:text-lg leading-tight">
                    {`██╗  ██╗ ██████╗ ██╗  ██╗
██║  ██║██╔═████╗██║  ██║
███████║██║██╔██║███████║
╚════██║████╔╝██║╚════██║
     ██║╚██████╔╝     ██║
     ╚═╝ ╚═════╝      ╚═╝
`}
                </div>

                {/* Code Block */}
                <div className="w-full max-w-3xl font-mono text-sm md:text-base">
                    <SyntaxHighlighter
                        language="javascript"
                        style={customTheme}
                        customStyle={customStyle}
                        showLineNumbers={true}
                        lineNumberStyle={{
                            color: '#607B96',
                            paddingRight: '1.5rem',
                            userSelect: 'none',
                            minWidth: '2.5em',
                        }}
                        wrapLines={true}
                        lineProps={{
                            style: {
                                wordBreak: 'break-word',
                                whiteSpace: 'pre-wrap',
                            },
                        }}
                    >
                        {codeString}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    )
}
