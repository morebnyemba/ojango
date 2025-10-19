'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-primary-200/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-800 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-gold-400 rounded-full"></div>
            </div>
            <span className="font-bold text-xl text-foreground">OJANGO</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-primary-600 hover:text-primary-900 transition-colors">Features</a>
            <a href="#stakeholders" className="text-primary-600 hover:text-primary-900 transition-colors">For You</a>
            <a href="#waitlist" className="text-primary-600 hover:text-primary-900 transition-colors">Waitlist</a>
            <a href="#waitlist" className="bg-primary-800 text-white px-6 py-2 rounded-lg hover:bg-primary-900 transition-colors">
              Join Waitlist
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 text-center">
            <a href="#features" className="block py-2 text-primary-600 hover:text-primary-900">Features</a>
            <a href="#stakeholders" className="block py-2 text-primary-600 hover:text-primary-900">For You</a>
            <a href="#waitlist" className="block py-2 text-primary-600 hover:text-primary-900">Waitlist</a>
            <a href="#waitlist" className="w-full block text-center bg-primary-800 text-white px-6 py-3 rounded-lg hover:bg-primary-900 transition-colors">
              Join Waitlist
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}