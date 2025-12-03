'use client'

import { customTheme } from '@/lib/constants'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

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
                <SyntaxHighlighter
                    language="javascript"
                    style={customTheme}
                    customStyle={{
                        background: 'transparent',
                        padding: 'inherit',
                        fontSize: '1.2rem',
                        width: '100%',
                        maxWidth: '100%',
                        overflowX: 'hidden',
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word',
                    }}
                    showLineNumbers={true}
                    lineNumberStyle={{
                        color: '#607B96',
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
                    }}
                >
                    {codeContent}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default CodePreview
