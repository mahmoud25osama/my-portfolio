'use client'
import {
    aboutContent,
    codeSnippets,
    contactItems,
    personalInfoItems,
} from '@/lib/constants'
import { ItemKey, PathType, SectionKey } from '@/lib/types'

import { useState } from 'react'
import {
    FaArrowDown,
    FaArrowRight,
    FaBars,
    FaBriefcase,
    FaChevronDown,
    FaChevronRight,
    FaEye,
    FaFolder,
    FaHeart,
    FaStar,
    FaUser,
    FaX,
} from 'react-icons/fa6'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const About = () => {
    const [expandedSections, setExpandedSections] = useState({
        'personal-info': true,
        contacts: true,
        'find-me': true,
    })
    const [expandedItem, setExpandedItem] = useState({
        bio: true,
        Skills: true,
        education: true,
    })
    const [activePath, setActivePath] = useState<PathType>('bio/summary')
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

    const toggleSection = (sectionKey: SectionKey) => {
        setExpandedSections((prev) => ({
            ...prev,
            [sectionKey]: !prev[sectionKey],
        }))
    }

    const toggleItem = (itemKey: ItemKey) => {
        setExpandedItem((prev) => ({
            ...prev,
            [itemKey]: !prev[itemKey],
        }))
    }

    const handleFileSelect = (path: PathType) => {
        setActivePath(path)
        setIsMobileSidebarOpen(false) // Close sidebar on mobile after selection
    }

    return (
        <div className="flex overflow-auto  h-[calc(100vh-7rem)]">
            {/* Mobile Sidebar Overlay */}
            {isMobileSidebarOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
                    onClick={() => setIsMobileSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`
                    fixed md:static h-full left-0 z-40 
                    w-[280px] md:w-[25%] flex-shrink-0
                    bg-slate-900 border-r border-slate-600
                    transform transition-transform duration-300 ease-in-out
                    ${
                        isMobileSidebarOpen
                            ? 'translate-x-0'
                            : '-translate-x-full md:translate-x-0'
                    }
                `}
            >
                <div className="flex h-full">
                    {/* Icons Column */}
                    <div className="w-[46px] h-full text-slate-500 border-r border-slate-600 flex flex-col items-center pt-3 gap-8 ">
                        <FaUser
                            size={24}
                            className={`${
                                activePath.includes('bio') && 'text-slate-300'
                            } cursor-pointer`}
                            onClick={() =>
                                handleFileSelect('bio/summary' as PathType)
                            }
                        />
                        <FaBriefcase
                            size={24}
                            className={`${
                                activePath.includes('education') &&
                                'text-slate-300'
                            } cursor-pointer`}
                            onClick={() =>
                                handleFileSelect(
                                    'education/university' as PathType
                                )
                            }
                        />
                        <FaHeart
                            size={24}
                            className={`${
                                activePath.includes('skills') &&
                                'text-slate-300'
                            } cursor-pointer`}
                            onClick={() =>
                                handleFileSelect('skills/front-end' as PathType)
                            }
                        />
                    </div>

                    {/* Menu Content */}
                    <div className="flex-1 flex flex-col overflow-auto">
                        {/* Personal Info Section */}
                        <div className="flex flex-col">
                            <div
                                className="h-10 border-b border-slate-600 flex items-center px-3 gap-3 cursor-pointer hover:bg-slate-800/30"
                                onClick={() => toggleSection('personal-info')}
                            >
                                {expandedSections['personal-info'] ? (
                                    <FaChevronDown
                                        size={16}
                                        className="text-white"
                                    />
                                ) : (
                                    <FaChevronRight
                                        size={16}
                                        className="text-white"
                                    />
                                )}
                                <span className="text-white text-sm lg:text-base">
                                    personal-info
                                </span>
                            </div>

                            {expandedSections['personal-info'] && (
                                <div className="px-2 py-2 flex flex-col gap-1">
                                    {personalInfoItems.map((item, index) => (
                                        <div key={index}>
                                            <div
                                                onClick={() =>
                                                    toggleItem(
                                                        item.title as ItemKey
                                                    )
                                                }
                                                className="flex items-center px-2 gap-2 cursor-pointer hover:bg-slate-800/30 py-1 rounded"
                                            >
                                                {expandedItem[
                                                    item.title as ItemKey
                                                ] ? (
                                                    <FaArrowDown
                                                        size={14}
                                                        className="text-slate-500"
                                                    />
                                                ) : (
                                                    <FaArrowRight
                                                        size={14}
                                                        className="text-slate-500"
                                                    />
                                                )}
                                                <FaFolder
                                                    size={14}
                                                    className={item.folderColor}
                                                />
                                                <span
                                                    className={`text-slate-400 text-sm ${
                                                        expandedItem[
                                                            item.title as ItemKey
                                                        ]
                                                            ? 'text-white'
                                                            : ''
                                                    }`}
                                                >
                                                    {item.title}
                                                </span>
                                            </div>

                                            {expandedItem[
                                                item.title as ItemKey
                                            ] &&
                                                item.files.map(
                                                    (file, fileIndex) => (
                                                        <div
                                                            key={fileIndex}
                                                            onClick={() =>
                                                                handleFileSelect(
                                                                    `${
                                                                        item.title
                                                                    }/${file.name.replace(
                                                                        '.txt',
                                                                        ''
                                                                    )}` as PathType
                                                                )
                                                            }
                                                            className={`ml-6 flex items-center px-2 gap-2 py-1 hover:bg-slate-800/30 cursor-pointer rounded transition-colors ${
                                                                activePath ===
                                                                `${
                                                                    item.title
                                                                }/${file.name.replace(
                                                                    '.txt',
                                                                    ''
                                                                )}`
                                                                    ? 'bg-slate-800/50 '
                                                                    : ''
                                                            }`}
                                                        >
                                                            <file.icon
                                                                size={14}
                                                                className="text-slate-500"
                                                            />
                                                            <span className="text-slate-400 text-sm">
                                                                {file.name}
                                                            </span>
                                                        </div>
                                                    )
                                                )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Contacts Section */}
                        <div className="flex flex-col border-t border-slate-600">
                            <div
                                className="h-10 border-b border-slate-600 flex items-center px-3 gap-3 cursor-pointer hover:bg-slate-800/30"
                                onClick={() => toggleSection('contacts')}
                            >
                                {expandedSections['contacts'] ? (
                                    <FaChevronDown
                                        size={16}
                                        className="text-white"
                                    />
                                ) : (
                                    <FaChevronRight
                                        size={16}
                                        className="text-white"
                                    />
                                )}
                                <span className="text-white text-sm lg:text-base">
                                    contacts
                                </span>
                            </div>

                            {expandedSections['contacts'] && (
                                <div className="px-2 py-2 flex flex-col gap-1">
                                    {contactItems.map((contact, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center px-2 gap-2 hover:bg-slate-800/30 cursor-pointer py-1 rounded"
                                        >
                                            <contact.icon
                                                size={16}
                                                className="text-slate-500"
                                            />
                                            <span className="text-slate-400 text-sm">
                                                {contact.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col h-full overflow-hidden md:ml-0">
                {/* File Tab */}
                {activePath && (
                    <div className="h-10 border-b border-slate-600 flex bg-slate-900">
                        {/* Mobile Sidebar Toggle Button */}
                        <button
                            onClick={() =>
                                setIsMobileSidebarOpen(!isMobileSidebarOpen)
                            }
                            className="md:hidden px-4 py-4 h-full flex items-center border-r border-slate-600 hover:bg-slate-800/50 transition-colors"
                        >
                            <FaBars size={20} className="text-white" />
                        </button>
                        <div className="border-r border-slate-600 flex items-center px-4 gap-3">
                            <span className="text-slate-400 text-sm lg:text-base truncate max-w-[150px] lg:max-w-none">
                                {`${activePath.split('/')[1]}.txt`}
                            </span>
                            <FaX
                                onClick={() => setActivePath('' as PathType)}
                                size={12}
                                className="text-slate-400 cursor-pointer hover:text-white flex-shrink-0"
                            />
                        </div>
                    </div>
                )}

                {/* Content Grid */}
                <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
                    {/* Code Editor */}
                    <div className="flex-1 flex px-3 lg:px-3 py-3 gap-3 lg:gap-4 overflow-auto">
                        <div className="flex-shrink-0 w-6 lg:w-7">
                            {/* aboutText */}
                            <pre className="text-slate-400 text-xs lg:text-sm text-right leading-6 lg:leading-7">
                                {Array.from(
                                    { length: 15 },
                                    (_, i) => i + 1
                                ).join('\n')}
                            </pre>
                        </div>
                        <div className="flex-1 overflow-auto">
                            <pre className="text-green-400 text-xs lg:text-sm leading-6 lg:leading-7 whitespace-pre-wrap break-words">
                                {aboutContent[activePath] ||
                                    '/** Select a file from the sidebar */'}
                            </pre>
                        </div>
                    </div>

                    {/* Code Preview - Hidden on mobile, show on lg+ */}
                    <div className="hidden lg:flex w-[350px] xl:w-[450px] border-l border-slate-600 p-3 flex-col gap-4 overflow-visible flex-shrink-0">
                        <h3 className="text-slate-400 text-sm">
                            // Code snippet showcase:
                        </h3>

                        <div className="flex flex-col gap-4">
                            {codeSnippets.map((snippet) => (
                                <div
                                    key={snippet.id}
                                    className="flex flex-col gap-3"
                                >
                                    {/* User Info */}
                                    <div className="flex justify-between items-start gap-2">
                                        <div className="flex items-center gap-2 flex-1 min-w-0">
                                            <div className="w-8 h-8 bg-slate-600 rounded-full flex-shrink-0" />
                                            <div className="flex flex-col min-w-0">
                                                <span className="text-indigo-500 text-xs font-bold truncate">
                                                    {snippet.user.username}
                                                </span>
                                                <span className="text-slate-400 text-xs truncate">
                                                    {snippet.user.timestamp}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex gap-3 flex-shrink-0">
                                            <div className="flex items-center gap-1">
                                                <FaEye
                                                    size={14}
                                                    className="text-white"
                                                />
                                                <span className="text-white text-xs">
                                                    {snippet.actions.details}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <FaStar
                                                    size={14}
                                                    className="text-slate-400"
                                                />
                                                <span className="text-slate-400 text-xs">
                                                    {snippet.actions.stars}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Code Block */}
                                    <div>
                                        <SyntaxHighlighter
                                            language="typescript"
                                            style={oneDark}
                                            customStyle={{
                                                overflow: 'hidden',
                                                borderRadius: '12px',
                                                padding: '18px',
                                                fontSize: '11.6px',
                                                background: '#020618',
                                            }}
                                            codeTagProps={{
                                                style: {
                                                    background: 'transparent',
                                                },
                                            }}
                                        >
                                            {snippet.code}
                                        </SyntaxHighlighter>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="hidden lg:flex w-10 justify-center border-l border-slate-600 py-3 flex-shrink-0">
                        <div className="w-6 h-2 bg-slate-500 rounded" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
