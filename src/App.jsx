import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import InteractiveAssistant from './pages/InteractiveAssistant'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/portafolio" element={<Portfolio />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/asistente" element={<InteractiveAssistant />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App