import { HashRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import ScrollToTop from './components/ScrollToTop'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './pages/ProjectDetail'

function PortfolioHome() {
  return (
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
  )
}

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<PortfolioHome />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
