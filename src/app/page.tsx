import HeroSection from '@/components/sections/Hero'
import AboutSection from '@/components/sections/About'
import ProjectsSection from '@/components/sections/Projects'
import ContactSection from '@/components/sections/Contact'

export default function Home() {
    return (
        <main className="flex flex-col bg-[#080b14]">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
        </main>
    )
}
