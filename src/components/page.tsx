// 'use client'
// import React, { useState } from 'react'
// import {
//     ChevronUp,
//     ChevronDown,
//     ChevronLeft,
//     ChevronRight,
//     Github,
//     Linkedin,
//     X,
//     Star,
//     Eye,
//     User,
//     Briefcase,
//     Heart,
//     Folder,
//     ChevronRight as ArrowRight,
//     File,
//     Mail,
//     Phone,
//     FileText,
//     Check,
//     ExternalLink,
// } from 'lucide-react'

// const Header = ({ activeTab, setActiveTab, tabs }) => {
//     return (
//         <header className="h-14 border-b border-slate-600 flex justify-between items-center">
//             <div className="flex items-center h-full">
//                 <div className="px-6 py-4 h-full flex items-center">
//                     <span className="text-slate-400 text-base font-normal">
//                         Elias
//                     </span>
//                 </div>

//                 <div className="flex h-full">
//                     {tabs.map((tab, index) => (
//                         <div
//                             key={tab.id}
//                             className={`h-full border-r border-slate-600 flex flex-col ${
//                                 index === 0 ? 'border-l border-slate-600' : ''
//                             }`}
//                         >
//                             <div
//                                 className={`px-8 py-4 h-full flex items-center cursor-pointer ${
//                                     tab.active
//                                         ? 'border-b-2 border-orange-400'
//                                         : ''
//                                 }`}
//                                 onClick={() => setActiveTab(tab.id)}
//                             >
//                                 <span
//                                     className={`text-base ${
//                                         tab.active
//                                             ? 'text-white'
//                                             : 'text-slate-400'
//                                     }`}
//                                 >
//                                     {tab.label}
//                                 </span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className="h-full border-l border-slate-600">
//                 <div
//                     className={`px-8 py-4 h-full flex items-center cursor-pointer ${
//                         tabs.find((tab) => tab.id === '_contact-me')?.active
//                             ? 'border-b-2 border-orange-400'
//                             : ''
//                     }`}
//                     onClick={() => setActiveTab('_contact-me')}
//                 >
//                     <span
//                         className={`text-slate-400 text-base ${
//                             tabs.find((tab) => tab.id === '_contact-me')?.active
//                                 ? 'text-white'
//                                 : ''
//                         }`}
//                     >
//                         _contact-me
//                     </span>
//                 </div>
//             </div>
//         </header>
//     )
// }

// const Footer = () => {
//     return (
//         <footer className="h-14 border-t border-slate-600 flex justify-between items-center">
//             <div className="flex h-full">
//                 <div className="px-6 py-4 h-full flex items-center border-r border-slate-600">
//                     <span className="text-slate-400 text-base">
//                         find me in:
//                     </span>
//                 </div>

//                 <a
//                     href="#"
//                     className="w-14 h-full border-r border-slate-600 flex items-center justify-center hover:bg-slate-800 transition-colors"
//                 >
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//                         <path
//                             d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
//                             fill="#62748E"
//                         />
//                     </svg>
//                 </a>
//                 <a
//                     href="#"
//                     className="w-14 h-full border-r border-slate-600 flex items-center justify-center hover:bg-slate-800 transition-colors"
//                 >
//                     <Linkedin size={24} className="text-slate-500" />
//                 </a>
//             </div>

//             <div className="h-full border-l border-slate-600">
//                 <a
//                     href="#"
//                     className="px-8 py-4 h-full flex items-center gap-2 hover:bg-slate-800 transition-colors"
//                 >
//                     <span className="text-slate-400 text-base">@username</span>
//                     <Github size={24} className="text-slate-500" />
//                 </a>
//             </div>
//         </footer>
//     )
// }

// const SnakeGame = ({
//     snakeFood,
//     gameOver,
//     gameStarted,
//     startGame,
//     restartGame,
//     handleDirectionClick,
// }) => {
//     return (
//         <div className="w-[507px] h-[469px] bg-gradient-to-br from-teal-900/70 to-teal-500/10 border border-slate-600 rounded-lg backdrop-blur-sm shadow-inner p-8 flex gap-6">
//             <div className="relative w-60 h-full">
//                 <div className="w-full h-full bg-slate-800 rounded-lg shadow-inner relative">
//                     <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2">
//                         <div className="flex flex-col gap-1">
//                             {[...Array(8)].map((_, i) => (
//                                 <div
//                                     key={i}
//                                     className="w-6 h-6 bg-orange-400 rounded-sm"
//                                 />
//                             ))}
//                         </div>
//                     </div>

//                     <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
//                         <div className="relative w-5 h-5">
//                             <div className="absolute inset-0 bg-teal-400 opacity-10 rounded-full" />
//                             <div className="absolute inset-1 bg-teal-400 opacity-20 rounded-full" />
//                             <div className="absolute inset-2 bg-teal-400 rounded-full" />
//                         </div>
//                     </div>

//                     {gameOver && (
//                         <div className="absolute bottom-12 left-0 right-0 bg-slate-900/90 rounded-lg p-4 mx-2">
//                             <div className="text-center">
//                                 <h3 className="text-2xl text-teal-400 font-normal mb-2">
//                                     GAME OVER!
//                                 </h3>
//                                 <button
//                                     onClick={restartGame}
//                                     className="text-sm text-slate-400 hover:text-white transition-colors"
//                                 >
//                                     start-again
//                                 </button>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             <div className="flex flex-col justify-between h-full w-44">
//                 <div className="flex flex-col gap-6">
//                     <div className="bg-slate-800 rounded-lg p-3 flex flex-col items-center gap-3">
//                         <p className="text-white text-sm text-center leading-5">
//                             <br />
//                         </p>

//                         <div className="flex flex-col items-center gap-2">
//                             <button
//                                 className="w-12 h-8 bg-black border border-slate-600 rounded-lg flex items-center justify-center hover:bg-slate-800 transition-colors"
//                                 onClick={() => handleDirectionClick('up')}
//                             >
//                                 <ChevronUp size={18} className="text-white" />
//                             </button>

//                             <div className="flex gap-2">
//                                 <button
//                                     className="w-12 h-8 bg-black border border-slate-600 rounded-lg flex items-center justify-center hover:bg-slate-800 transition-colors"
//                                     onClick={() => handleDirectionClick('left')}
//                                 >
//                                     <ChevronLeft
//                                         size={18}
//                                         className="text-white"
//                                     />
//                                 </button>
//                                 <button
//                                     className="w-12 h-8 bg-black border border-slate-600 rounded-lg flex items-center justify-center hover:bg-slate-800 transition-colors"
//                                     onClick={() => handleDirectionClick('down')}
//                                 >
//                                     <ChevronDown
//                                         size={18}
//                                         className="text-white"
//                                     />
//                                 </button>
//                                 <button
//                                     className="w-12 h-8 bg-black border border-slate-600 rounded-lg flex items-center justify-center hover:bg-slate-800 transition-colors"
//                                     onClick={() =>
//                                         handleDirectionClick('right')
//                                     }
//                                 >
//                                     <ChevronRight
//                                         size={18}
//                                         className="text-white"
//                                     />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="flex flex-col items-center gap-2 px-3">
//                         <div className="flex flex-col gap-2">
//                             <div className="flex gap-2">
//                                 {[...Array(5)].map((_, i) => (
//                                     <div key={i} className="relative w-5 h-5">
//                                         <div className="absolute inset-0 bg-teal-400 opacity-10 rounded-full" />
//                                         <div className="absolute inset-1 bg-teal-400 opacity-20 rounded-full" />
//                                         <div className="absolute inset-2 bg-teal-400 rounded-full" />
//                                     </div>
//                                 ))}
//                             </div>
//                             <div className="flex gap-2">
//                                 {[...Array(5)].map((_, i) => (
//                                     <div
//                                         key={i}
//                                         className={`relative w-5 h-5 ${
//                                             i >= snakeFood ? 'opacity-30' : ''
//                                         }`}
//                                     >
//                                         <div className="absolute inset-0 bg-teal-400 opacity-10 rounded-full" />
//                                         <div className="absolute inset-1 bg-teal-400 opacity-20 rounded-full" />
//                                         <div className="absolute inset-2 bg-teal-400 rounded-full" />
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <button
//                     onClick={startGame}
//                     className="w-14 h-10 border border-white rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
//                 >
//                     <span className="text-white text-sm">skip</span>
//                 </button>
//             </div>
//         </div>
//     )
// }

// const HomePage = ({
//     snakeFood,
//     gameOver,
//     gameStarted,
//     startGame,
//     restartGame,
//     handleDirectionClick,
// }) => {
//     return (
//         <main className="flex-1 flex items-center justify-center relative overflow-hidden">
//             {/* Background Blurs */}
//             <div className="absolute inset-0 overflow-hidden">
//                 <div
//                     className="absolute w-96 h-96 bg-indigo-500 opacity-40 blur-3xl transform rotate-12"
//                     style={{
//                         left: '60%',
//                         top: '20%',
//                         filter: 'blur(87px)',
//                     }}
//                 />
//                 <div
//                     className="absolute w-96 h-96 bg-teal-400 opacity-40 blur-3xl transform -rotate-90"
//                     style={{
//                         left: '40%',
//                         top: '5%',
//                         filter: 'blur(87px)',
//                     }}
//                 />
//             </div>

//             <div className="flex items-center justify-center gap-36 z-10 w-full max-w-7xl px-8">
//                 <div className="flex flex-col gap-20 w-[504px]">
//                     <div className="flex flex-col gap-1">
//                         <p className="text-slate-400 text-lg leading-relaxed">
//                             Hi all. I am
//                         </p>
//                         <div className="flex flex-col gap-2">
//                             <h1 className="text-6xl leading-tight text-white font-normal">
//                                 Elias
//                             </h1>
//                             <h2 className="text-3xl leading-tight text-indigo-500 font-normal">
//                                 &gt; Front-end developer
//                             </h2>
//                         </div>
//                     </div>

//                     <div className="flex flex-col gap-2">
//                         <p className="text-slate-400 text-base"></p>
//                         <p className="text-slate-400 text-base"></p>
//                         <p className="text-indigo-500 text-base">
//                             <span className="text-slate-400">**</span> const{' '}
//                             <span className="text-slate-400">
//                                 githubLink ={' '}
//                             </span>
//                             <a
//                                 href="#"
//                                 className="text-indigo-500 hover:underline"
//                             ></a>
//                         </p>
//                     </div>
//                 </div>

//                 <SnakeGame
//                     snakeFood={snakeFood}
//                     gameOver={gameOver}
//                     gameStarted={gameStarted}
//                     startGame={startGame}
//                     restartGame={restartGame}
//                     handleDirectionClick={handleDirectionClick}
//                 />
//             </div>

//             {/* Corner Bolts */}
//             <div className="absolute top-3 left-3 w-3 h-3 rounded-full bg-gradient-radial from-teal-600 to-teal-800 shadow-lg" />
//             <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-gradient-radial from-teal-600 to-teal-800 shadow-lg" />
//             <div className="absolute bottom-16 left-3 w-3 h-3 rounded-full bg-gradient-radial from-slate-600 to-slate-800 shadow-lg" />
//             <div className="absolute bottom-16 right-3 w-3 h-3 rounded-full bg-gradient-radial from-indigo-600 to-indigo-800 shadow-lg" />
//         </main>
//     )
// }

// const AboutPage = ({ expandedSections, toggleSection }) => {
//     const personalInfoItems = [
//         {
//             title: 'bio',
//             color: 'text-pink-400',
//             expanded: true,
//             files: [
//                 { name: 'interests.md', icon: 'file' },
//                 { name: 'education.md', icon: 'file' },
//             ],
//         },
//         {
//             title: 'interests',
//             color: 'text-teal-400',
//             expanded: false,
//             files: [],
//         },
//         {
//             title: 'education',
//             color: 'text-indigo-500',
//             expanded: true,
//             files: [
//                 { name: 'high-school.md', icon: 'file' },
//                 { name: 'university.md', icon: 'file' },
//             ],
//         },
//     ]

//     const contactItems = [
//         { name: 'elias@email.com', icon: Mail },
//         { name: '+3598246359', icon: Phone },
//     ]

//     const codeSnippets = [
//         {
//             id: 1,
//             user: {
//                 username: '@eliasnogueira',
//                 timestamp: 'Created 5 months ago',
//                 avatar: '',
//             },
//             actions: {
//                 details: '1 file',
//                 stars: '3 stars',
//             },
//             code: `/**
// * About me
// * I have 5 years of experience in web
// * development lorem ipsum dolor sit amet,
// * consectetur adipiscing elit, sed do eiusmod
// * tempor incididunt ut labore et dolore
// * magna aliqua. Ut enim ad minim veniam,
// * quis nostrud exercitation ullamco laboris
// * nisi ut aliquip ex ea commodo consequat.
// */`,
//             footer: `You can also see my full profile on my Github @eliasnogueira where I have cool projects and stuff.`,
//         },
//         {
//             id: 2,
//             user: {
//                 username: '@eliasnogueira',
//                 timestamp: 'Created 5 months ago',
//                 avatar: '',
//             },
//             actions: {
//                 details: '1 file',
//                 stars: '5 stars',
//             },
//             code: `const button = document.querySelector('#sendBtn');

// const message = {
//   name: "Elias",
//   email: "elias@email.com",
//   message: "Hi, I'd like to get in touch!",
//   date: "2024-01-15"
// }`,
//         },
//     ]

//     const aboutText = `1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16`

//     const aboutContent = `/**
// * About me
// * I have 5 years of experience in web
// * development lorem ipsum dolor sit amet,
// * consectetur adipiscing elit, sed do eiusmod
// * tempor incididunt ut labore et dolore
// * magna aliqua. Ut enim ad minim veniam,
// * quis nostrud exercitation ullamco laboris
// * nisi ut aliquip ex ea commodo consequat.
// * Duis aute irure dolor in reprehenderit in
// * voluptate velit esse cillum dolore eu fugiat
// * nulla pariatur. Excepteur sint occaecat
// * cupidatat non proident, sunt in culpa qui
// * officia deserunt mollit anim id est laborum.
// */`

//     return (
//         <main className="flex-1 flex">
//             {/* Sidebar */}
//             <div className="w-[311px] h-full flex">
//                 <div className="w-[66px] h-full border-r border-slate-600 flex flex-col items-center pt-3 gap-8">
//                     <User size={24} className="text-slate-500" />
//                     <Briefcase size={24} className="text-slate-300" />
//                     <Heart size={24} className="text-slate-500" />
//                 </div>

//                 <div className="w-[245px] flex flex-col">
//                     <div className="flex flex-col">
//                         <div
//                             className="h-12 border-b border-slate-600 flex items-center px-6 gap-3 cursor-pointer"
//                             onClick={() => toggleSection('personal-info')}
//                         >
//                             <ChevronDown size={16} className="text-white" />
//                             <span className="text-white text-base">
//                                 personal-info
//                             </span>
//                         </div>

//                         {expandedSections['personal-info'] && (
//                             <div className="px-3 py-3 flex flex-col gap-2">
//                                 {personalInfoItems.map((item, index) => (
//                                     <div key={index}>
//                                         <div className="flex items-center px-3 gap-3">
//                                             <ArrowRight
//                                                 size={16}
//                                                 className="text-slate-500"
//                                             />
//                                             <div className="flex items-center gap-2">
//                                                 <Folder
//                                                     size={16}
//                                                     className={item.color}
//                                                 />
//                                                 <span
//                                                     className={`text-slate-400 text-base ${
//                                                         item.expanded
//                                                             ? 'text-white'
//                                                             : ''
//                                                     }`}
//                                                 >
//                                                     {item.title}
//                                                 </span>
//                                             </div>
//                                         </div>

//                                         {item.expanded &&
//                                             item.files.map(
//                                                 (file, fileIndex) => (
//                                                     <div
//                                                         key={fileIndex}
//                                                         className="ml-7 flex items-center px-3 gap-2 py-1"
//                                                     >
//                                                         <FileText
//                                                             size={16}
//                                                             className="text-slate-500"
//                                                         />
//                                                         <span className="text-slate-400 text-base">
//                                                             {file.name}
//                                                         </span>
//                                                     </div>
//                                                 )
//                                             )}
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>

//                     <div className="flex flex-col border-t border-slate-600">
//                         <div
//                             className="h-12 border-b border-slate-600 flex items-center px-6 gap-3 cursor-pointer"
//                             onClick={() => toggleSection('contacts')}
//                         >
//                             <ChevronDown size={16} className="text-white" />
//                             <span className="text-white text-base">
//                                 contacts
//                             </span>
//                         </div>

//                         {expandedSections['contacts'] && (
//                             <div className="px-3 py-3 flex flex-col gap-2">
//                                 {contactItems.map((contact, index) => (
//                                     <div
//                                         key={index}
//                                         className="flex items-center px-3 gap-2"
//                                     >
//                                         <contact.icon
//                                             size={16}
//                                             className="text-slate-500"
//                                         />
//                                         <span className="text-slate-400 text-base">
//                                             {contact.name}
//                                         </span>
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             {/* Main Content Area */}
//             <div className="flex-1 flex flex-col">
//                 <div className="h-12 border-b border-slate-600 flex">
//                     <div className="w-[242px] h-full border-r border-slate-600 flex items-center px-6 gap-3">
//                         <span className="text-slate-400 text-base">
//                             personal-info
//                         </span>
//                         <X size={16} className="text-slate-400" />
//                     </div>
//                 </div>

//                 <div className="flex-1 flex">
//                     <div className="w-[676px] border-r border-slate-600 flex px-10 py-3 gap-10">
//                         <div className="w-6">
//                             <pre className="text-slate-400 text-lg text-right leading-7">
//                                 {aboutText}
//                             </pre>
//                         </div>
//                         <div className="flex-1">
//                             <pre className="text-slate-400 text-lg leading-7 whitespace-pre-wrap">
//                                 {aboutContent}
//                             </pre>
//                         </div>
//                     </div>

//                     <div className="w-[714px] border-r border-slate-600 px-10 py-3 flex flex-col gap-16">
//                         <h3 className="text-slate-400 text-lg"></h3>

//                         <div className="flex flex-col gap-8">
//                             {codeSnippets.map((snippet) => (
//                                 <div
//                                     key={snippet.id}
//                                     className="flex flex-col gap-4"
//                                 >
//                                     <div className="flex justify-between items-center">
//                                         <div className="flex items-center gap-3">
//                                             <div className="w-9 h-9 bg-slate-600 rounded-full" />
//                                             <div className="flex flex-col">
//                                                 <span className="text-indigo-500 text-sm font-bold">
//                                                     {snippet.user.username}
//                                                 </span>
//                                                 <span className="text-slate-400 text-sm">
//                                                     {snippet.user.timestamp}
//                                                 </span>
//                                             </div>
//                                         </div>

//                                         <div className="flex gap-4">
//                                             <div className="flex items-center gap-2">
//                                                 <Eye
//                                                     size={16}
//                                                     className="text-white"
//                                                 />
//                                                 <span className="text-white text-sm">
//                                                     {snippet.actions.details}
//                                                 </span>
//                                             </div>
//                                             <div className="flex items-center gap-2">
//                                                 <Star
//                                                     size={16}
//                                                     className="text-slate-400"
//                                                 />
//                                                 <span className="text-slate-400 text-sm">
//                                                     {snippet.actions.stars}
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="bg-slate-950 border border-slate-600 rounded-2xl p-4">
//                                         <pre className="text-pink-300 text-sm leading-5 whitespace-pre-wrap">
//                                             {snippet.code}
//                                         </pre>
//                                     </div>

//                                     {snippet.footer && (
//                                         <div className="border-t border-slate-600 pt-4 flex justify-between items-start">
//                                             <p className="text-slate-400 text-sm leading-5 flex-1">
//                                                 {snippet.footer}
//                                             </p>
//                                             <X
//                                                 size={24}
//                                                 className="text-slate-500"
//                                             />
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     <div className="w-10 flex justify-center py-3">
//                         <div className="w-6 h-2 bg-slate-500 rounded" />
//                     </div>
//                 </div>
//             </div>
//         </main>
//     )
// }

// const ContactForm = ({ formData, setFormData, submitForm }) => {
//     const handleInputChange = (field, value) => {
//         setFormData((prev) => ({
//             ...prev,
//             [field]: value,
//         }))
//     }

//     return (
//         <div className="w-[632px] h-full border-r border-slate-600 flex flex-col items-center justify-center px-10">
//             <form
//                 className="w-[372px] flex flex-col gap-6"
//                 onSubmit={submitForm}
//             >
//                 {/* Name Input */}
//                 <div className="flex flex-col gap-2">
//                     <label className="text-slate-400 text-base">_name:</label>
//                     <input
//                         type="text"
//                         value={formData.name}
//                         onChange={(e) =>
//                             handleInputChange('name', e.target.value)
//                         }
//                         className="w-full h-12 px-3 bg-slate-950 border border-slate-300 rounded-lg text-slate-400 text-base focus:outline-none focus:border-slate-400"
//                         placeholder=""
//                     />
//                 </div>

//                 {/* Email Input */}
//                 <div className="flex flex-col gap-2">
//                     <label className="text-slate-400 text-base">_email:</label>
//                     <input
//                         type="email"
//                         value={formData.email}
//                         onChange={(e) =>
//                             handleInputChange('email', e.target.value)
//                         }
//                         className="w-full h-12 px-3 bg-slate-950 border border-slate-600 rounded-lg text-slate-400 text-base focus:outline-none focus:border-slate-400"
//                         placeholder=""
//                     />
//                 </div>

//                 {/* Message Textarea */}
//                 <div className="flex flex-col gap-2">
//                     <label className="text-slate-400 text-base">
//                         _message:
//                     </label>
//                     <textarea
//                         value={formData.message}
//                         onChange={(e) =>
//                             handleInputChange('message', e.target.value)
//                         }
//                         className="w-full h-[120px] px-3 py-3 bg-slate-950 border border-slate-600 rounded-lg text-slate-400 text-base resize-none focus:outline-none focus:border-slate-400"
//                         placeholder=""
//                     />
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                     type="submit"
//                     className="w-[142px] h-10 bg-slate-600 text-slate-500 px-3 py-2 rounded-lg text-sm hover:bg-slate-500 transition-colors"
//                 >
//                     submit-message
//                 </button>
//             </form>
//         </div>
//     )
// }

// const CodePreview = ({ formData }) => {
//     const lineNumbers = Array.from({ length: 12 }, (_, i) => i + 1).join('\n')

//     const codeContent = `const button = document.querySelector('#sendBtn');

// const message = {
//   name: "${formData.name || ''}",
//   email: "${formData.email || ''}",
//   message: "${formData.message || ''}",
//   date: "${new Date().toISOString().split('T')[0]}"
// }`

//     return (
//         <div className="w-[798px] border-r border-slate-600 flex px-10 py-3 gap-10">
//             <div className="w-6">
//                 <pre className="text-slate-400 text-lg text-right leading-7">
//                     {lineNumbers}
//                 </pre>
//             </div>
//             <div className="flex-1">
//                 <pre className="text-purple-300 text-lg leading-7 whitespace-pre-wrap">
//                     {codeContent}
//                 </pre>
//             </div>
//         </div>
//     )
// }

// const ContactSidebar = ({ expandedSections, toggleSection }) => {
//     const contactItems = [
//         { name: 'elias@email.com', icon: Mail },
//         { name: '+3598246359', icon: Phone },
//     ]

//     const socialLinks = [
//         { name: 'LinkedIn profile', icon: ExternalLink, active: true },
//         { name: 'Facebook profile', icon: ExternalLink, active: false },
//         { name: 'Twitter account', icon: ExternalLink, active: false },
//         { name: 'Instagram account', icon: ExternalLink, active: false },
//     ]

//     return (
//         <div className="w-[311px] h-full flex flex-col">
//             {/* Contacts Section */}
//             <div className="flex flex-col">
//                 <div
//                     className="h-12 border-b border-slate-600 flex items-center px-6 gap-3 cursor-pointer"
//                     onClick={() => toggleSection('contacts')}
//                 >
//                     <ChevronDown size={16} className="text-slate-900" />
//                     <span className="text-slate-900 text-base">contacts</span>
//                 </div>

//                 {expandedSections['contacts'] && (
//                     <div className="px-3 py-3 flex flex-col gap-2">
//                         {contactItems.map((contact, index) => (
//                             <div
//                                 key={index}
//                                 className="flex items-center px-3 gap-2"
//                             >
//                                 <contact.icon
//                                     size={16}
//                                     className="text-slate-500"
//                                 />
//                                 <span className="text-slate-400 text-base">
//                                     {contact.name}
//                                 </span>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>

//             {/* Find Me Also Section */}
//             <div className="flex flex-col border-t border-slate-600">
//                 <div
//                     className="h-12 border-b border-slate-600 flex items-center px-6 gap-3 cursor-pointer"
//                     onClick={() => toggleSection('find-me')}
//                 >
//                     <ChevronDown size={16} className="text-slate-900" />
//                     <span className="text-slate-900 text-base">
//                         find-me-also-on
//                     </span>
//                 </div>

//                 {expandedSections['find-me'] && (
//                     <div className="px-3 py-3 flex flex-col gap-2">
//                         {socialLinks.map((link, index) => (
//                             <div
//                                 key={index}
//                                 className="flex items-center px-3 gap-2"
//                             >
//                                 <link.icon
//                                     size={16}
//                                     className="text-slate-500"
//                                 />
//                                 <span
//                                     className={`text-base ${
//                                         link.active
//                                             ? 'text-white'
//                                             : 'text-slate-400'
//                                     }`}
//                                 >
//                                     {link.name}
//                                 </span>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

// const ProjectsPage = ({ selectedTechnologies, toggleTechnology, projects }) => {
//     const technologies = [
//         { id: 'react', name: 'React', checked: true, icon: '⚛️' },
//         { id: 'html', name: 'HTML', checked: false, icon: '🌐' },
//         { id: 'css', name: 'CSS', checked: false, icon: '🎨' },
//         { id: 'vue', name: 'Vue', checked: false, icon: '💚' },
//         { id: 'angular', name: 'Angular', checked: false, icon: '🔴' },
//         { id: 'gatsby', name: 'Gatsby', checked: false, icon: '🟣' },
//         { id: 'flutter', name: 'Flutter', checked: false, icon: '💙' },
//     ]

//     return (
//         <main className="flex-1 flex">
//             {/* Projects Sidebar */}
//             <div className="w-[311px] h-full border-r border-slate-600">
//                 <div className="flex flex-col">
//                     <div className="h-12 border-b border-slate-600 flex items-center px-6 gap-3">
//                         <ChevronDown size={16} className="text-white" />
//                         <span className="text-white text-base">projects</span>
//                     </div>

//                     <div className="px-3 py-3 flex flex-col gap-2">
//                         {technologies.map((tech) => (
//                             <div
//                                 key={tech.id}
//                                 className="flex items-center px-3 gap-6"
//                             >
//                                 <div className="w-5 h-5 relative">
//                                     <div
//                                         className={`absolute inset-0 border border-slate-500 rounded-sm ${
//                                             selectedTechnologies.includes(
//                                                 tech.id
//                                             )
//                                                 ? 'bg-slate-500'
//                                                 : 'bg-slate-900'
//                                         }`}
//                                     />
//                                     {selectedTechnologies.includes(tech.id) && (
//                                         <Check
//                                             size={12}
//                                             className="absolute top-0.5 left-0.5 text-white"
//                                         />
//                                     )}
//                                     <input
//                                         type="checkbox"
//                                         className="absolute inset-0 opacity-0 cursor-pointer"
//                                         checked={selectedTechnologies.includes(
//                                             tech.id
//                                         )}
//                                         onChange={() =>
//                                             toggleTechnology(tech.id)
//                                         }
//                                     />
//                                 </div>

//                                 <div className="flex items-center gap-2">
//                                     <span className="text-xl">{tech.icon}</span>
//                                     <span className="text-white text-base">
//                                         {tech.name}
//                                     </span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* Main Projects Area */}
//             <div className="flex-1 flex flex-col">
//                 <div className="h-12 border-b border-slate-600 flex">
//                     <div className="w-[242px] h-full border-r border-slate-600 flex items-center px-6 gap-3">
//                         <span className="text-slate-400 text-base">
//                             projects
//                         </span>
//                         <X size={16} className="text-slate-400" />
//                     </div>
//                 </div>

//                 <div className="flex-1 flex">
//                     <div className="flex-1 px-16 py-16 flex flex-wrap gap-10 content-start">
//                         {projects.map((project) => (
//                             <div
//                                 key={project.id}
//                                 className="w-[407px] flex flex-col gap-4"
//                             >
//                                 <h3 className="text-indigo-500 text-base font-bold">
//                                     {project.title}
//                                 </h3>

//                                 <div className="relative">
//                                     <div className="w-full h-36 bg-slate-600 rounded-t-2xl border border-slate-600" />

//                                     <div className="absolute top-5 right-5 w-7 h-7 bg-indigo-300 rounded flex items-center justify-center">
//                                         <span className="text-slate-900 text-xl">
//                                             ⚛️
//                                         </span>
//                                     </div>

//                                     <div className="bg-slate-950 border-l border-r border-b border-slate-600 rounded-b-2xl p-8 flex flex-col gap-5">
//                                         <p className="text-slate-400 text-lg leading-7">
//                                             {project.description}
//                                         </p>

//                                         <button className="bg-slate-600 text-white px-3 py-2 rounded-lg text-sm w-32 hover:bg-slate-500 transition-colors">
//                                             {project.buttonText}
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="w-10 flex justify-center py-3">
//                         <div className="w-6 h-2 bg-slate-500 rounded" />
//                     </div>
//                 </div>
//             </div>
//         </main>
//     )
// }
// const ContactPage = ({ expandedSections, toggleSection }) => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: '',
//     })

//     const submitForm = (e) => {
//         e.preventDefault()
//         console.log('Form submitted:', formData)
//     }

//     return (
//         <main className="flex-1 flex">
//             <ContactSidebar
//                 expandedSections={expandedSections}
//                 toggleSection={toggleSection}
//             />

//             <div className="flex-1 flex flex-col">
//                 <div className="h-12 border-b border-l border-slate-600" />

//                 <div className="flex-1 flex">
//                     <ContactForm
//                         formData={formData}
//                         setFormData={setFormData}
//                         submitForm={submitForm}
//                     />

//                     <CodePreview formData={formData} />

//                     <div className="w-10 flex justify-center py-3">
//                         <div className="w-6 h-2 bg-slate-500 rounded" />
//                     </div>
//                 </div>
//             </div>
//         </main>
//     )
// }

// const DeveloperPortfolio = () => {
//     const [activeTab, setActiveTab] = useState('_hello')
//     const [snakeFood, setSnakeFood] = useState(5)
//     const [gameStarted, setGameStarted] = useState(false)
//     const [gameOver, setGameOver] = useState(true)
//     const [expandedSections, setExpandedSections] = useState({
//         'personal-info': true,
//         contacts: true,
//         'find-me': true,
//     })
//     const [selectedTechnologies, setSelectedTechnologies] = useState(['react'])

//     const tabs = [
//         { id: '_hello', label: '_hello', active: activeTab === '_hello' },
//         {
//             id: '_about-me',
//             label: '_about-me',
//             active: activeTab === '_about-me',
//         },
//         {
//             id: '_projects',
//             label: '_projects',
//             active: activeTab === '_projects',
//         },
//         {
//             id: '_contact-me',
//             label: '_contact-me',
//             active: activeTab === '_contact-me',
//         },
//     ]

//     const projects = [
//         {
//             id: 1,
//             description: 'Duis aute irure dolor in velit esse cillum dolore.',
//             buttonText: 'view-project',
//             tech: 'react',
//         },
//         {
//             id: 2,
//             description: 'Duis aute irure dolor in velit esse cillum dolore.',
//             buttonText: 'view-project',
//             tech: 'react',
//         },
//     ]

//     const toggleSection = (sectionKey) => {
//         setExpandedSections((prev) => ({
//             ...prev,
//             [sectionKey]: !prev[sectionKey],
//         }))
//     }

//     const toggleTechnology = (techId) => {
//         setSelectedTechnologies((prev) =>
//             prev.includes(techId)
//                 ? prev.filter((id) => id !== techId)
//                 : [...prev, techId]
//         )
//     }

//     const handleDirectionClick = (direction) => {}

//     const startGame = () => {
//         setGameStarted(true)
//         setGameOver(false)
//         setSnakeFood(10)
//     }

//     const restartGame = () => {
//         setGameOver(true)
//         setGameStarted(false)
//         setSnakeFood(5)
//     }

//     const renderCurrentPage = () => {
//         switch (activeTab) {
//             case '_hello':
//                 return (
//                     <HomePage
//                         snakeFood={snakeFood}
//                         gameOver={gameOver}
//                         gameStarted={gameStarted}
//                         startGame={startGame}
//                         restartGame={restartGame}
//                         handleDirectionClick={handleDirectionClick}
//                     />
//                 )
//             case '_about-me':
//                 return (
//                     <AboutPage
//                         expandedSections={expandedSections}
//                         toggleSection={toggleSection}
//                     />
//                 )
//             case '_projects':
//                 return (
//                     <ProjectsPage
//                         selectedTechnologies={selectedTechnologies}
//                         toggleTechnology={toggleTechnology}
//                         projects={projects}
//                     />
//                 )
//             case '_contact-me':
//                 return (
//                     <ContactPage
//                         expandedSections={expandedSections}
//                         toggleSection={toggleSection}
//                     />
//                 )
//             default:
//                 return <HomePage />
//         }
//     }

//     return (
//         <div className="w-full h-screen bg-slate-900 text-white font-mono overflow-hidden">
//             <div className="w-full h-full border border-slate-600 rounded-lg bg-slate-900 flex flex-col">
//                 <Header
//                     activeTab={activeTab}
//                     setActiveTab={setActiveTab}
//                     tabs={tabs}
//                 />

//                 {renderCurrentPage()}

//                 <Footer />
//             </div>
//         </div>
//     )
// }

// export default DeveloperPortfolio
// ==================== TYPES ====================

// ==================== CONSTANTS ====================

// ==================== HEADER COMPONENT ====================

// ==================== FOOTER COMPONENT ====================

// ==================== SNAKE GAME COMPONENT ====================

// ==================== HOME PAGE ====================

// ==================== ABOUT PAGE ====================

// ==================== CONTACT COMPONENTS ====================

// ==================== PROJECTS PAGE ====================

// ==================== MAIN PORTFOLIO COMPONENT ====================
// const DeveloperPortfolio: React.FC = () => {
//     const [expandedSections, setExpandedSections] = useState({
//         'personal-info': true,
//         contacts: true,
//         'find-me': true,
//     })
//     const [selectedTechnologies, setSelectedTechnologies] = useState(['react'])

//

//     const toggleTechnology = (techId: string) => {
//         setSelectedTechnologies((prev) =>
//             prev.includes(techId)
//                 ? prev.filter((id) => id !== techId)
//                 : [...prev, techId]
//         )
//     }

//     // const renderCurrentPage = () => {
//     //     switch (activeTab) {
//     //         case '_hello':
//     //             return <HomePage onGameComplete={handleGameComplete} />
//     //         case '_about-me':
//     //             return (
//     //                 <AboutPage
//     //                     expandedSections={expandedSections}
//     //                     toggleSection={toggleSection}
//     //                 />
//     //             )
//     //         case '_projects':
//     //             return (
//     //                 <ProjectsPage
//     //                     selectedTechnologies={selectedTechnologies}
//     //                     toggleTechnology={toggleTechnology}
//     //                     projects={projects}
//     //                 />
//     //             )
//     //         case '_contact-me':
//     //             return (
//     //                 <ContactPage
//     //                     expandedSections={expandedSections}
//     //                     toggleSection={toggleSection}
//     //                 />
//     //             )
//     //         default:
//     //             return <HomePage onGameComplete={handleGameComplete} />
//     //     }
//     // }

//     return (
//         <div className="w-full h-screen bg-slate-900 text-white font-mono overflow-hidden">
//             <div className="w-full h-full border border-slate-600 rounded-lg bg-slate-900 flex flex-col">
//                 <Header
//                     activeTab={activeTab}
//                     setActiveTab={setActiveTab}
//                     tabs={tabs}
//                 />
//                 {/* {renderCurrentPage()} */}
//                 <Footer />
//             </div>
//         </div>
//     )
// }

// export default DeveloperPortfolio
