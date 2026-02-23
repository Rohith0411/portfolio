import React, { useEffect, useState } from 'react'
import { Code, Menu, X } from 'lucide-react'
import { NAV_LINKS, PERSONAL_INFO } from '../../utilis/Constants'
import { useScrollSpy, scrollToSection } from '../../hooks/UseScrollSpy'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id))

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full py-4 transition-all duration-300
        ${isScrolled ? 'bg-black/30 backdrop-blur-lg' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Code className="w-6 h-6 text-green-400" />
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent"
            >
              {PERSONAL_INFO.name.split(' ')[0]}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-base font-medium transition-colors
                  ${activeSection === link.id
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-7 py-3 bg-white text-black font-medium rounded-[16px] hover:bg-white/90 transition"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-black/80 backdrop-blur-lg rounded-xl p-4 space-y-4">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="block w-full text-left text-white/80 hover:text-white"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full bg-white text-black py-3 rounded-xl"
            >
              Hire Me
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar