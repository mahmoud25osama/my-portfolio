import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/Hero'
import AboutSection from './components/sections/About'
import ExperienceSection from './components/sections/Experience'
import ServicesSection from './components/sections/Services'
import ProjectsSection from './components/sections/Projects'
import ContactSection from './components/sections/Contact'
import BackToTop from './components/ui/BackToTop'

function App() {
  return (
    <div className="min-h-screen flex flex-col font-inter antialiased bg-[#0a0a0a]">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
