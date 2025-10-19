'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-lg shadow-sm border-b border-primary-200/50' : 'bg-transparent border-b border-transparent'}`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-800 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-gold-400 rounded-full"></div>
            </div>
            <span className="font-bold text-xl text-foreground">OJANGO</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-primary-600 dark:text-primary-300 hover:text-primary-900 dark:hover:text-primary-100 transition-colors">Features</a>
            <a href="#stakeholders" className="text-primary-600 dark:text-primary-300 hover:text-primary-900 dark:hover:text-primary-100 transition-colors">For You</a>
            <a href="#waitlist" className="text-primary-600 dark:text-primary-300 hover:text-primary-900 dark:hover:text-primary-100 transition-colors">Waitlist</a>
            <div className="w-px h-6 bg-primary-200 dark:bg-primary-700"></div>
            <ThemeToggle />
            <a href="#waitlist" className="bg-primary-700 text-white px-6 py-2 rounded-lg hover:bg-primary-800 transition-colors">
              Join Waitlist
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />

            {/* Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-background dark:bg-primary-900 z-50 p-6 md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <span className="font-bold text-lg text-foreground">Menu</span>
                  <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                    <X size={24} className="text-foreground" />
                  </button>
                </div>

                <div className="flex flex-col items-start space-y-6 text-lg">
                  <a href="#features" onClick={() => setIsOpen(false)} className="text-primary-700 dark:text-primary-200 hover:text-primary-900 dark:hover:text-white">Features</a>
                  <a href="#stakeholders" onClick={() => setIsOpen(false)} className="text-primary-700 dark:text-primary-200 hover:text-primary-900 dark:hover:text-white">For You</a>
                  <a href="#waitlist" onClick={() => setIsOpen(false)} className="text-primary-700 dark:text-primary-200 hover:text-primary-900 dark:hover:text-white">Waitlist</a>
                </div>

                <div className="mt-auto space-y-4">
                  <ThemeToggle />
                  <a href="#waitlist" onClick={() => setIsOpen(false)} className="w-full block text-center bg-primary-700 text-white px-6 py-3 rounded-lg hover:bg-primary-800 transition-colors">
                    Join Waitlist
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}