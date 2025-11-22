import { useState } from 'react'
import { CiMail } from 'react-icons/ci'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FaChevronDown, FaPhone } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'
type SectionKey = 'contacts' | 'find-me'
const ContactSidebar = () => {
    const [expandedSections, setExpandedSections] = useState({
        contacts: true,
        'find-me': true,
    })
    const contactItems = [
        { name: 'mahmoud4h5@gmail.com', icon: IoMdMail },
        { name: '+201016074277', icon: FaPhone },
    ]

    const socialLinks = [
        { name: 'LinkedIn profile', icon: FaExternalLinkAlt, active: true },
        { name: 'Facebook profile', icon: FaExternalLinkAlt, active: false },
        { name: 'Twitter account', icon: FaExternalLinkAlt, active: false },
        { name: 'Instagram account', icon: FaExternalLinkAlt, active: false },
    ]
    const toggleSection = (sectionKey: SectionKey) => {
        setExpandedSections((prev) => ({
            ...prev,
            [sectionKey]: !prev[sectionKey],
        }))
    }
    return (
        <div className=" h-full flex flex-col border-r border-slate-600">
            <div className="flex flex-col">
                <div
                    className="h-12 border-b border-slate-600 flex items-center px-6 gap-3 cursor-pointer hover:bg-slate-800/30"
                    onClick={() => toggleSection('contacts')}
                >
                    <FaChevronDown size={16} className="text-white" />
                    <span className="text-white text-base">contacts</span>
                </div>

                {expandedSections['contacts'] && (
                    <div className="px-3 py-3 flex flex-col gap-2">
                        {contactItems.map((contact, index) => (
                            <div
                                key={index}
                                className="flex items-center px-3 gap-2 hover:bg-slate-800/30 cursor-pointer py-1"
                            >
                                <contact.icon
                                    size={16}
                                    className="text-slate-500"
                                />
                                <span className="text-slate-400 text-base">
                                    {contact.name}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex flex-col border-t border-slate-600">
                <div
                    className="h-12 border-b border-slate-600 flex items-center px-6 gap-3 cursor-pointer hover:bg-slate-800/30"
                    onClick={() => toggleSection('find-me')}
                >
                    <FaChevronDown size={16} className="text-white" />
                    <span className="text-white text-base">
                        find-me-also-on
                    </span>
                </div>

                {expandedSections['find-me'] && (
                    <div className="px-3 py-3 flex flex-col gap-2">
                        {socialLinks.map((link, index) => (
                            <div
                                key={index}
                                className="flex items-center px-3 gap-2 hover:bg-slate-800/30 cursor-pointer py-1"
                            >
                                <link.icon
                                    size={16}
                                    className="text-slate-500"
                                />
                                <span
                                    className={`text-base ${
                                        link.active
                                            ? 'text-white'
                                            : 'text-slate-400'
                                    }`}
                                >
                                    {link.name}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
export default ContactSidebar
