'use client'
import CodePreview from '@/components/sections/CodePreview'
import ContactForm from '@/components/sections/ContactForm'
import ContactSidebar from '@/components/sections/ContactSidebar'
import { useState } from 'react'
import { FaX } from 'react-icons/fa6'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [isSend, setIsSend] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.name || !formData.email || !formData.message) {
            setError('Please fill in all fields.')
            return
        }

        setError('')
        setIsLoading(true)

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            const data = await res.json()

            if (data.success) {
                setIsSend(true)
                setFormData({ name: '', email: '', message: '' })
            } else {
                setError('Failed to send message.')
            }
        } catch (err) {
            setError('Error sending message.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className=" flex h-[calc(100vh-7rem)]">
            <ContactSidebar />

            <div className="flex-1 flex flex-col lg:py-0 py-6 ">
                <div className="hidden h-12 border-b border-slate-600 lg:flex">
                    <div className="w-[242px] h-full flex items-center px-6 gap-3"></div>
                </div>

                <div className="flex-1 flex flex-col lg:flex-row overflow-auto">
                    {isSend ? (
                        <div className="flex flex-col items-center justify-center gap-6 border-r border-slate-600 px-10">
                            <h2 className="text-2xl font-semibold text-teal-400">
                                Thank you! 🤘
                            </h2>
                            <p className="text-slate-400 text-center">
                                Your message has been accepted. You will receive
                                answer soon!
                            </p>
                            <button
                                onClick={() => setIsSend(false)}
                                className="text-sm px-3 py-2 h-10 bg-orange-400 text-teal-950 rounded-[8px]  cursor-pointer hover:bg-orange-500 transition-colors"
                            >
                                send-new-message
                            </button>
                        </div>
                    ) : (
                        <ContactForm
                            formData={formData}
                            setFormData={setFormData}
                            submitForm={submitForm}
                            isLoading={isLoading}
                            error={error}
                            setError={setError}
                        />
                    )}

                    <CodePreview formData={formData} />

                    <div className="hidden lg:flex w-12 justify-center border-l border-slate-600 py-3 flex-shrink-0">
                        <div className="w-6 h-2 bg-slate-500 rounded" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact
