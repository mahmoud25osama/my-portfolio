import { Fira_Code } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const firaCode = Fira_Code({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-fira-code',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Mahmoud | Developer Portfolio',
    description: 'Front-end Developer Portfolio with Snake Game',
    keywords: ['portfolio', 'developer', 'frontend', 'nextjs', 'react'],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={firaCode.variable}>
            <body className="min-h-screen flex flex-col g-0 font-mono">
                <Navbar />
                <main className="flex-1 h-[calc(100vh-7rem)] overflow-hidden ">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
