import { FaJsSquare } from 'react-icons/fa'
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa6'
import { RiNextjsFill } from 'react-icons/ri'

export const projects = [
    {
        id: '1',
        title: '// _ShopFlow-ECommerce',
        description:
            'Full-featured e-commerce platform built with React, Redux Toolkit, React Query & Tailwind CSS.',
        tech: ['react', 'redux', 'tailwind'],
        techIcon: {
            icon: FaReact,
            bg: 'bg-cyan-500/20',
            color: 'text-cyan-400',
        },
        image: '/img/Ecommerce.png',
        liveUrl: 'https://shopflow-ecommerce.netlify.app/',
        githubUrl: 'https://github.com/mahmoud25osama/ShopFlow-ECommerce',
        featured: true,
        year: 2024,
    },
    {
        id: '2',
        title: '// _TaskFlow-Task-Manager',
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
        githubUrl: 'https://github.com/mahmoud25osama/To-Do-List',
        featured: true,
        year: 2025,
    },
    {
        id: '3',
        title: '// _CreatorPreneur-Landing-Page',
        description:
            'Modern landing page with React, Tailwind, Sanity CMS, RTL support & dark mode.',
        tech: ['react', 'tailwind'],
        techIcon: {
            icon: FaReact,
            bg: 'bg-cyan-500/20',
            color: 'text-cyan-400',
        },
        image: '/img/CreatorPreneur Academy.png',
        liveUrl: 'https://creatorpreneur-academy.netlify.app/',
        featured: true,
        year: 2024,
    },
    {
        id: '4',
        title: '// _Portfolio-V1',
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
        githubUrl: 'https://github.com/mahmoud25osama/Portfolio-V1',
        year: 2024,
    },
    {
        id: '5',
        title: '// _Weather-App',
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
        githubUrl: 'https://github.com/mahmoud25osama/Weather-Dashboard',
        year: 2024,
    },
    {
        id: '6',
        title: '// _Streamflix-Clone',
        description:
            'Netflix clone with authentication, protected routes, search & pixel-perfect UI.',
        tech: 'react',
        techIcon: {
            icon: FaReact,
            bg: 'bg-cyan-500/20',
            color: 'text-cyan-400',
        },
        image: '/img/Subnail StreamFlix - Stream Movies & TV Shows.png',
        liveUrl: 'https://streamflix25.netlify.app',
        year: 2025,
    },
    {
        id: '7',
        title: '// _Ali-Dynasty-Chronicles',
        description:
            'Interactive bilingual website about Muhammad Ali Pasha dynasty (1805-1952).',
        tech: 'react',
        techIcon: {
            icon: FaReact,
            bg: 'bg-cyan-500/20',
            color: 'text-cyan-400',
        },
        image: '/img/sm Family Ali.png',
        liveUrl: 'https://ali-dynasty-chronicles.netlify.app/',
        year: 2025,
    },
    {
        id: '8',
        title: '// _Meal-Explorer',
        description:
            'Recipe discovery app with meal categories and detailed cooking instructions.',
        tech: 'react',
        techIcon: {
            icon: FaReact,
            bg: 'bg-cyan-500/20',
            color: 'text-cyan-400',
        },
        image: '/img/Screenshot 2025-09-01 at 01-52-20 Meal Explorer.png',
        liveUrl: 'https://meal25explorer.netlify.app/',
        year: 2025,
    },
    {
        id: '9',
        title: '// _Text-Color-Range',
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
        title: '// _Library-App',
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
        title: '// _Dashboard-HTML&CSS',
        description:
            'Fully responsive dashboard template built with pure HTML & CSS.',
        tech: ['html,css'],
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
        title: '// _Leon-Agency-Template',
        description:
            'Modern flat agency landing page converted from PSD to HTML/CSS.',
        tech: ['html,css'],
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
        title: '// _Kasper-Creative-Template',
        description: 'Creative one-page portfolio template converted from PSD.',
        tech: ['html,css'],
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
        title: '// _Elrouby-World-Template',
        description:
            'Clean agency/portfolio template converted from PSD to code.',
        tech: ['html,css'],
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
]
