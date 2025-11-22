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

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        alert('Message sent successfully!')
    }
    return (
        <div className=" flex h-[calc(100vh-7rem)]">
            <ContactSidebar />

            <div className="flex-1 flex flex-col">
                <div className="h-12 border-b border-slate-600 flex">
                    <div className="w-[242px] h-full border-r border-slate-600 flex items-center px-6 gap-3">
                        <span className="text-slate-400 text-base">
                            personal-info
                        </span>
                        <FaX size={16} className="text-slate-400" />
                    </div>
                </div>

                <div className="flex-1 flex">
                    <ContactForm
                        formData={formData}
                        setFormData={setFormData}
                        submitForm={submitForm}
                    />

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
