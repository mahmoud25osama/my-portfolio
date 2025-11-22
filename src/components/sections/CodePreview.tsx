const CodePreview: React.FC<{
    formData: { name: string; email: string; message: string }
}> = ({ formData }) => {
    const lineNumbers = Array.from({ length: 12 }, (_, i) => i + 1).join('\n')

    const codeContent = `const button = document.querySelector('#sendBtn');
        const message = {
        name: "${formData.name || ''}",
        email: "${formData.email || ''}",
        message: "${formData.message || ''}",
        date: "${new Date().toISOString().split('T')[0]}"
        }`

    return (
        <div className=" border-r border-slate-600 flex px-5 py-6 gap-5">
            <div className="w-6">
                <pre className="text-slate-400 text-lg text-right leading-7">
                    {lineNumbers}
                </pre>
            </div>
            <div className="flex-1">
                <pre className="text-purple-300 text-md leading-7 ">
                    {codeContent}
                </pre>
            </div>
        </div>
    )
}
export default CodePreview
