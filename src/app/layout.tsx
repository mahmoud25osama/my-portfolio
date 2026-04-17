import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/layout/CustomCursor'

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-inter',
    display: 'swap',
})

const firaCode = Fira_Code({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-fira-code',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Mahmoud Osama | Front-end Developer',
    description:
        'Front-end Developer specializing in React.js, Next.js & modern web experiences.',
    keywords: [
        'portfolio',
        'frontend developer',
        'react',
        'nextjs',
        'typescript',
        'mahmoud osama',
    ],
    openGraph: {
        title: 'Mahmoud Osama — Front-end Developer',
        description: 'Building fast, beautiful, and accessible web experiences.',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
<<<<<<< HEAD
        <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
            <body className="min-h-screen flex flex-col font-inter antialiased">
                <CustomCursor />
                <Navbar />
                <main className="flex-1">
=======
        <html lang="en" className={firaCode.variable}>
            <body className="h-screen flex flex-col overflow-hidden font-mono">
                <Navbar />
                <main className="flex-1 overflow-hidden">
>>>>>>> 0e4d5c11257e9fdd67006d55efcb506dd2c1894c
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}