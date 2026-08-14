import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import CoreStrengths from './components/CoreStrengths'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import OrbBackground from './components/OrbBackground'

export default function App() {
  return (
    <div className="relative min-h-screen font-body text-white">
      <OrbBackground />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <CoreStrengths />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
