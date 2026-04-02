import { ThemeProvider } from './context/ThemeContext'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 min-h-screen font-sans transition-colors duration-300">
        <Nav />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
