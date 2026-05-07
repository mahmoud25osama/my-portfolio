'use client'

import { customTheme } from '@/lib/constants'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

<<<<<<< HEAD
interface CodePreviewProps {
    formData: {
        name: string
        email: string
        message: string
    }
}

const CodePreview: React.FC<CodePreviewProps> = ({ formData }) => {
    const codeContent = `const button = document.querySelector('#sendBtn');

const message = {
  name: "${formData.name || ''}",
  email: "${formData.email || ''}",
  message: "${formData.message || ''}",
  date: "${new Date().toISOString().split('T')[0]}"
}

button.addEventListener('click', () => {
  form.send(message);
});`

    return (
        <div className="w-full border-r border-slate-600 hidden lg:flex px-4 lg:px-5 py-6 gap-5">
            <div className="font-mono text-[1.2rem] md:text-4xl leading-7">
=======
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
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
                <SyntaxHighlighter
                    language="javascript"
                    style={customTheme}
                    customStyle={{
                        background: 'transparent',
<<<<<<< HEAD
                        padding: 'inherit',
                        fontSize: '1.2rem',
                        width: '100%',
                        maxWidth: '100%',
                        overflowX: 'hidden',
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word',
=======
                        padding: 0,
                        margin: 0,
                        fontSize: 'inherit',
                        overflowX: 'auto',
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
                    }}
                    showLineNumbers={true}
                    lineNumberStyle={{
                        color: '#607B96',
<<<<<<< HEAD
                        paddingRight: '1.5rem',
                        userSelect: 'none',
                        minWidth: '2.5em',
                        textAlign: 'right',
                    }}
                    wrapLines={true}
                    lineProps={{
                        style: {
                            wordBreak: 'break-word',
                            whiteSpace: 'pre-wrap',
                        },
=======
                        paddingRight: '1rem',
                        userSelect: 'none',
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
                    }}
                >
                    {codeContent}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default CodePreview
