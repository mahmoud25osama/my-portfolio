'use client'

import { customStyle, customTheme } from '@/lib/constants'
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
        <div className="w-full border-r border-slate-600 flex px-5 py-6 gap-5">
            <div className="font-mono text-base md:text-2xl leading-7">
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
