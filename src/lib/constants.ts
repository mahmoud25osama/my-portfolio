import { FaFileAlt } from 'react-icons/fa'
import { SnakePosition, TabType } from './types'
import { FaPhone } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'

export const GRID_SIZE = 15
export const CELL_SIZE = 16
export const INITIAL_SNAKE: SnakePosition[] = [
    { x: 7, y: 7 },
    { x: 7, y: 8 },
    { x: 7, y: 9 },
]

export const tabs: TabType[] = [
    { id: '', label: '_hello' },
    {
        id: 'about',
        label: '_about-me',
    },
    {
        id: 'projects',
        label: '_projects',
    },
]
// About Content
export const aboutContent = {
    'bio/summary': `/**
* About Me
*  Passionate and results-driven Front-End Web Developer
*  with expertise in modern web technologies including
*  React.js, Next.js, and TypeScript.
*  Focused on building responsive, user-centric applications
*  with clean and maintainable code.
*  Strong foundation in JavaScript (ES6+), HTML5, CSS3,
*  and UI/UX principles.
*/`,

    'bio/soft-skills': `/**
* Soft Skills
*  Problem-solving: Analytical mindset with focus on clean solutions.
*  Communication: Strong collaboration and feedback skills.
*  Teamwork: Experienced in Agile environments and code reviews.
*  Time Management: Efficient in meeting deadlines under pressure.
*  Adaptability: Always open to learning new tools and frameworks.
*/`,

    'bio/interests': `/**
* Interests & Goals
*  Creating accessible and inclusive web experiences.
*  Exploring advanced React patterns and performance optimization.
*  Contributing to open-source projects and developer communities.
*  Continuous improvement and keeping up with modern technologies.
*/`,

    // 💻 Skills
    'skills/front-end': `/**
* Front-End Technologies
*  JavaScript (ES6+), TypeScript,
*  HTML5, CSS3, React.js, Next.js,
*  Context API, React Hooks, Tailwind CSS,
*  Responsive Design, CSS Grid, Flexbox.
*/`,

    'skills/tools': `/**
* Tools & Platforms
*  Git, GitHub (CI/CD & Collaboration),
*  VS Code, npm, Vite, RESTful APIs,
*  JSON, Fetch API, Supabase, Firebase,
*  Vercel, Netlify, GitHub Pages.
*/`,

    'skills/professional-skills': `/**
* Professional Skills
*  Agile/Scrum Workflows, Sprint Planning,
*  Testing & Debugging (Chrome DevTools),
*  Performance Optimization, SEO Best Practices,
*  Team Communication, Code Reviews, Documentation.
*/`,

    // 🎓 Education
    'education/university': `/**
* Education
*  Banha University – Faculty of Science, Egypt
*  Bachelor of Science in Computer Science (2025)
*  Grade: Good
*  Relevant Coursework:
*   - Data Structures & Algorithms
*   - Web Programming
*   - Software Engineering
*   - Database Systems
*   - AI & Computer Networks
*  Graduation Project:
*   "Ali Dynasty Chronicles" – A historical web platform
*   built with React.js and Tailwind CSS.
*/`,

    'education/training': `/**
* Training & Certifications
*  Information Technology Institute (ITI), Egypt
*  Front-End Developer Track (Jul – Sep 2025)
*  - Hands-on with HTML, CSS, JS, and React.js
*  - Agile teamwork, sprint planning, and debugging.
*  Certifications:
*   - 2025 ITI Summer Training Certificate
*   - 2022 React.js, Next.js, Tailwind CSS (Self-Learning)
*/`,

    // 💼 Experience
    'experience/iti-training': `/**
* Experience
*  Information Technology Institute (ITI)
*  Front-End Developer (Training)
*  Duration: Jul – Sep 2025
*  - Built modern web apps using React.js.
*  - Worked in Agile teams and real-world projects.
*  - Focused on debugging, testing, and optimization.
*/`,

    'experience/self-learning': `/**
* Self-Learning & Project Development
*  Duration: 2022 – Present
*  - Completed 15+ real-world projects using React.js & Next.js.
*  - Practiced Git/GitHub workflows and CI/CD deployment.
*  - Focused on scalable, performant, and user-friendly UIs.
*  - Continuous learner following industry best practices.
*/`,
}
export const personalInfoItems = [
    {
        title: 'bio',
        color: 'text-pink-400',
        folderColor: 'text-pink-500',
        files: [
            { name: 'summary.txt', icon: FaFileAlt },
            { name: 'interests.txt', icon: FaFileAlt },
        ],
    },
    {
        title: 'skills',
        color: 'text-teal-400',
        folderColor: 'text-teal-500',
        files: [
            { name: 'front-end.txt', icon: FaFileAlt },
            { name: 'tools.txt', icon: FaFileAlt },
            { name: 'professional-skills.txt', icon: FaFileAlt },
            { name: 'soft-skills.txt', icon: FaFileAlt },
        ],
    },
    {
        title: 'education',
        color: 'text-indigo-400',
        folderColor: 'text-indigo-500',
        files: [
            { name: 'university.txt', icon: FaFileAlt },
            { name: 'training.txt', icon: FaFileAlt },
        ],
    },
    {
        title: 'experience',
        color: 'text-amber-200',
        folderColor: 'text-amber-500',
        files: [
            { name: 'iti-training.txt', icon: FaFileAlt },
            {
                name: 'self-learning.txt',
                icon: FaFileAlt,
                path: 'self-learning',
            },
        ],
    },
]
export const contactItems = [
    { name: 'mahmoud4h5@gmail.com', icon: IoMdMail },
    { name: '+201016074277', icon: FaPhone },
]
export const codeSnippets = [
    {
        id: 1,
        user: {
            username: '@mahmoud25osama',
            timestamp: 'Created 5 months ago',
        },
        actions: {
            details: '1 file',
            stars: '3 stars',
        },
        code: `
function initializeModelChunk(chunk){
  const value = parseModel(chunk._response,chunk._value);
  const initializedChunk = (chunk);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}`,
    },
    {
        id: 2,
        user: {
            username: '@mahmoud25osama',
            timestamp: 'Created 5 months ago',
        },
        actions: {
            details: '1 file',
            stars: '5 stars',
        },
        code: `
export function parseModelTuple(
  response: Response,
  value: {+[key: string]: JSONValue},): any {
  const tuple: [mixed, mixed, mixed, mixed] = (value:any);`,
    },
]

export const projects = [
    {
        id: 1,
        title: 'Project 1 // _ui-animations',
        description: 'Duis aute irure dolor in velit esse cillum dolore.',
        buttonText: 'view-project',
        tech: 'react',
    },
    {
        id: 2,
        title: 'Project 2 // _tetris-game',
        description: 'Duis aute irure dolor in velit esse cillum dolore.',
        buttonText: 'view-project',
        tech: 'react js',
    },
    {
        id: 3,
        title: 'Project 3 // _weather-app',
        description: 'Duis aute irure dolor in velit esse cillum dolore.',
        buttonText: 'view-project',
        tech: 'react',
    },
]
