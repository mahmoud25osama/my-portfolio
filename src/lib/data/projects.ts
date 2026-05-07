import { FaJsSquare } from 'react-icons/fa'
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa6'
import { RiNextjsFill } from 'react-icons/ri'
<<<<<<< HEAD

export const projects = [
    {
        id: '1',
        title: '// _ShopFlow-ECommerce',
=======
import { Project } from '@/lib/types'

export const projects: Project[] = [
    
    {
        id: '1',
        title: 'ShopFlow-ECommerce',
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
        description:
            'Full-featured e-commerce platform built with React, Redux Toolkit, React Query & Tailwind CSS.',
        tech: 'react',
        techIcon: {
            icon: FaReact,
<<<<<<< HEAD
            bg: 'bg-cyan-500/20',
            color: 'text-cyan-400',
        },
        image: '/img/Ecommerce.png',
        liveUrl: 'https://shopflow-ecommerce.netlify.app/',
        githubUrl: 'https://github.com/mahmoud25osama/ShopFlow-ECommerce',
=======
            bg: 'bg-sky-500/10',
            color: 'text-sky-400',
        },
        image: '/img/Ecommerce.png',
        liveUrl: 'https://shopflow-ecommerce.netlify.app/',
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
        featured: true,
        year: 2024,
    },
    {
        id: '2',
<<<<<<< HEAD
        title: '// _TaskFlow-Task-Manager',
=======
        title: 'TaskFlow-Task-Manager',
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
        description:
            'Clean & minimal To-Do app with localStorage persistence using Vanilla JavaScript.',
        tech: 'js',
        techIcon: {
            icon: FaJsSquare,
            bg: 'bg-yellow-500/20',
            color: 'text-yellow-400',
        },
        image: '/img/Screenshot 2025-12-03 at 16-35-38 To-Do List.png',
        liveUrl: 'https://mahmoud25osama.github.io/To-Do-List/',
<<<<<<< HEAD
        githubUrl: 'https://github.com/mahmoud25osama/To-Do-List',
=======
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
        featured: true,
        year: 2025,
    },
    {
        id: '3',
<<<<<<< HEAD
        title: '// _CreatorPreneur-Landing-Page',
=======
        title: 'CreatorPreneur-Landing-Page',
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
        description:
            'Modern landing page with React, Tailwind, Sanity CMS, RTL support & dark mode.',
        tech: 'react',
        techIcon: {
            icon: FaReact,
<<<<<<< HEAD
            bg: 'bg-cyan-500/20',
            color: 'text-cyan-400',
=======
            bg: 'bg-sky-500/10',
            color: 'text-sky-400',
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
        },
        image: '/img/CreatorPreneur Academy.png',
        liveUrl: 'https://creatorpreneur-academy.netlify.app/',
        featured: true,
        year: 2024,
    },
    {
        id: '4',
<<<<<<< HEAD
        title: '// _Portfolio-V1',
=======
        title: 'Portfolio-V1',
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
        description:
            'My first professional portfolio built with Next.js and Tailwind CSS.',
        tech: 'nextjs',
        techIcon: {
            icon: RiNextjsFill,
            bg: 'bg-white/10',
            color: 'text-white',
        },
        image: '/img/Portfolio.png',
        liveUrl: 'https://github.com/mahmoud25osama/Portfolio-V1',
<<<<<<< HEAD
        githubUrl: 'https://github.com/mahmoud25osama/Portfolio-V1',
=======
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
        year: 2024,
    },
    {
        id: '5',
<<<<<<< HEAD
        title: '// _Weather-App',
=======
        title: 'Weather-App',
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
        description:
            'Beautiful glassmorphism weather dashboard with real-time data and forecasts.',
        tech: 'js',
        techIcon: {
            icon: FaJsSquare,
            bg: 'bg-yellow-500/20',
            color: 'text-yellow-400',
        },
        image: '/img/dark Weather Dashboard.png',
        liveUrl: 'https://mahmoud25osama.github.io/Weather-Dashboard/',
<<<<<<< HEAD
        githubUrl: 'https://github.com/mahmoud25osama/Weather-Dashboard',
=======
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
        year: 2024,
    },
    {
        id: '6',
<<<<<<< HEAD
        title: '// _Streamflix-Clone',
=======
        title: 'Streamflix-Clone',
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
        description:
            'Netflix clone with authentication, protected routes, search & pixel-perfect UI.',
        tech: 'react',
        techIcon: {
            icon: FaReact,
<<<<<<< HEAD
            bg: 'bg-cyan-500/20',
            color: 'text-cyan-400',
=======
            bg: 'bg-sky-500/10',
            color: 'text-sky-400',
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
        },
        image: '/img/Subnail StreamFlix - Stream Movies & TV Shows.png',
        liveUrl: 'https://streamflix25.netlify.app',
        year: 2025,
    },
    {
        id: '7',
<<<<<<< HEAD
        title: '// _Ali-Dynasty-Chronicles',
=======
        title: 'Ali-Dynasty-Chronicles',
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
        description:
            'Interactive bilingual website about Muhammad Ali Pasha dynasty (1805-1952).',
        tech: 'react',
        techIcon: {
            icon: FaReact,
<<<<<<< HEAD
            bg: 'bg-cyan-500/20',
            color: 'text-cyan-400',
=======
            bg: 'bg-sky-500/10',
            color: 'text-sky-400',
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
        },
        image: '/img/sm Family Ali.png',
        liveUrl: 'https://ali-dynasty-chronicles.netlify.app/',
        year: 2025,
    },
    {
        id: '8',
<<<<<<< HEAD
        title: '// _Meal-Explorer',
=======
        title: 'Meal-Explorer',
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
        description:
            'Recipe discovery app with meal categories and detailed cooking instructions.',
        tech: 'react',
        techIcon: {
            icon: FaReact,
<<<<<<< HEAD
            bg: 'bg-cyan-500/20',
            color: 'text-cyan-400',
=======
            bg: 'bg-sky-500/10',
            color: 'text-sky-400',
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
        },
        image: '/img/Screenshot 2025-09-01 at 01-52-20 Meal Explorer.png',
        liveUrl: 'https://meal25explorer.netlify.app/',
        year: 2025,
    },
    {
        id: '9',
<<<<<<< HEAD
        title: '// _Text-Color-Range',
=======
        title: 'Text-Color-Range',
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
        description:
            'Real-time text color changer using RGB sliders (Vanilla JS + Bootstrap).',
        tech: 'js',
        techIcon: {
            icon: FaJsSquare,
            bg: 'bg-yellow-500/20',
            color: 'text-yellow-400',
        },
        image: '/img/Text Color Range.png',
        liveUrl: 'https://mahmoud25osama.github.io/Text-Color-Range/',
        year: 2025,
    },
    {
        id: '10',
<<<<<<< HEAD
        title: '// _Library-App',
=======
        title: 'Library-App',
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
        description:
            'Simple book library app with add/remove functionality and localStorage.',
        tech: 'js',
        techIcon: {
            icon: FaJsSquare,
            bg: 'bg-yellow-500/20',
            color: 'text-yellow-400',
        },
        image: '/img/Library.png',
        liveUrl: 'https://mahmoud25osama.github.io/Library/',
        year: 2025,
    },
    {
        id: '11',
<<<<<<< HEAD
        title: '// _Dashboard-HTML&CSS',
        description:
            'Fully responsive dashboard template built with pure HTML & CSS.',
        tech: ['html,css'],
=======
        title: 'Dashboard-HTML&CSS',
        description:
            'Fully responsive dashboard template built with pure HTML & CSS.',
        tech: 'html,css',
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
        techIcon: {
            icon: FaHtml5,
            bg: 'bg-orange-500/20',
            color: 'text-orange-500',
        },
        image: '/img/Dashboard Project.png',
        liveUrl: 'https://mahmoud25osama.github.io/Dashboard_Html_Css/',
        year: 2025,
    },
    {
        id: '12',
<<<<<<< HEAD
        title: '// _Leon-Agency-Template',
=======
        title: 'Leon-Agency-Template',
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
        description:
            'Modern flat agency landing page converted from PSD to HTML/CSS.',
        tech: 'html,css',
        techIcon: {
            icon: FaCss3Alt,
            bg: 'bg-blue-500/20',
            color: 'text-blue-400',
        },
        image: '/img/Leon Template One.png',
        liveUrl: 'https://mahmoud25osama.github.io/Html_Css_Template_one/',
        year: 2025,
    },
    {
        id: '13',
<<<<<<< HEAD
        title: '// _Kasper-Creative-Template',
=======
        title: 'Kasper-Creative-Template',
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
        description: 'Creative one-page portfolio template converted from PSD.',
        tech: 'html,css',
        techIcon: {
            icon: FaCss3Alt,
            bg: 'bg-blue-500/20',
            color: 'text-blue-400',
        },
        image: '/img/Kasper Template two.png',
        liveUrl: 'https://mahmoud25osama.github.io/HTML_CSS_Template_Two/',
        year: 2025,
    },
    {
        id: '14',
<<<<<<< HEAD
        title: '// _Elrouby-World-Template',
=======
        title: 'Elrouby-World-Template',
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
        description:
            'Clean agency/portfolio template converted from PSD to code.',
        tech: 'html,css',
        techIcon: {
            icon: FaHtml5,
            bg: 'bg-orange-500/20',
            color: 'text-orange-500',
        },
        image: '/img/ElRouby.png',
        liveUrl:
            'https://mahmoud25osama.github.io/HTML_And_CSS_Template_Three/',
        year: 2025,
    },
    {
        id: '15',
<<<<<<< HEAD
        title: '// _Animated-Login-Form',
=======
        title: 'Animated-Login-Form',
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
        description:
            'A lightweight, responsive animated login component built with HTML, CSS . This repository contains a simple, accessible login form with smooth animations that you can drop into any project or use as a starting point for a custom authentication UI.',
        tech: 'html,css',
        techIcon: {
            icon: FaHtml5,
            bg: 'bg-orange-500/20',
            color: 'text-orange-500',
        },
        image: '/img/Animated_Login.png',
        liveUrl: 'https://mahmoud25osama.github.io/Animated-Login/',
        year: 2025,
    },
<<<<<<< HEAD
=======
    {
        id: '16',
        title: 'PrepYou.ai',
        description:
            'full-pipeline AI interview preparation platform built for software engineers. It simulates the real hiring process end-to-end — candidates choose their tech major and experience level, submit a job description, assign a target company, then go through AI-powered stages including CV review, MCQ assessment, HR interview, and a live technical interview with a coding challenge. At the end, the platform generates a detailed performance report with actionable feedback.',
        tech: 'react',
        techIcon: {
            icon: FaReact,
            bg: 'bg-blue-500/10',
            color: 'text-blue-400',
        },
        image: "/img/PrepYou.ai — We'll PrepYou To Pass Your Interview.png",
        liveUrl: 'https://prepyouai-waiting-list.vercel.app/',
        featured: true,
        year: 2026,
    },
>>>>>>> 9a21abc488d24c764ea9adb13813ece089b99597
]
