import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Experience */}
      <Experience />

      {/* Testimonials (optional) */}
      <Testimonials />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-blue-300/70">
          <p>© {new Date().getFullYear()} Carl Jance “CJ” Mende. Built for a Flames.blue preview.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
