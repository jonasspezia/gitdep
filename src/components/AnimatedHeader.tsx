import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function AnimatedHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-800/95 backdrop-blur-glass' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-metallic-primary">GlassUI</h1>
        
        <div className="hidden md:flex gap-8">
          <a href="#" className="text-metallic-secondary hover:text-white transition-colors">
            Features
          </a>
          <a href="#" className="text-metallic-secondary hover:text-white transition-colors">
            About
          </a>
          <a href="#" className="text-metallic-secondary hover:text-white transition-colors">
            Contact
          </a>
        </div>

        <button 
          className="md:hidden text-metallic-secondary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  )
}
