'use client'

import { customTheme } from '@/lib/constants'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const CodePreview: React.FC = () => {
    const codeContent = `class Developer {
  constructor() {
    this.name = "Mahmoud Osama";
    this.role = "Full Stack MERN Developer";
    this.location = "Egypt";
    this.passion = "Building scalable web & digital experiences";
  }

  getSkills() {
    return [
      "MongoDB", "Express.js", "React.js",
      "Node.js", "TypeScript", "TailwindCSS"
    ];
  }

  codeIsPoetry() {
    return "Every pixel tells a story.";
  }
}

const me = new Developer();
me.codeIsPoetry();`

    return (
        <div className="w-full border border-slate-700/50 rounded-2xl bg-black/50 overflow-hidden shadow-2xl p-4">
            <div className="flex gap-2 mb-4 px-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="font-mono text-sm md:text-base leading-relaxed">
                <SyntaxHighlighter
                    language="javascript"
                    style={customTheme}
                    customStyle={{
                        background: 'transparent',
                        padding: 0,
                        margin: 0,
                        fontSize: 'inherit',
                        overflowX: 'auto',
                    }}
                    showLineNumbers={true}
                    lineNumberStyle={{
                        color: '#607B96',
                        paddingRight: '1rem',
                        userSelect: 'none',
                    }}
                >
                    {codeContent}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default CodePreview
