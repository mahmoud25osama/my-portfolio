import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CustomCursor from './components/layout/CustomCursor'

import HeroSection from './components/sections/Hero'
import AboutSection from './components/sections/About'
import ProjectsSection from './components/sections/Projects'
import ContactSection from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen flex flex-col font-inter antialiased">
      <CustomCursor />
      <Navbar />
      <main className="flex-1 flex flex-col bg-[#080b14] w-full">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
