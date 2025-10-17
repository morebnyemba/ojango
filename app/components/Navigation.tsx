'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-full"></div>
            </div>
            <span className="font-bold text-xl text-gray-900">OJANGO</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#stakeholders" className="text-gray-600 hover:text-gray-900 transition-colors">For You</a>
            <a href="#waitlist" className="text-gray-600 hover:text-gray-900 transition-colors">Waitlist</a>
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              Join Waitlist
            </button>
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
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#features" className="block text-gray-600 hover:text-gray-900">Features</a>
            <a href="#stakeholders" className="block text-gray-600 hover:text-gray-900">For You</a>
            <a href="#waitlist" className="block text-gray-600 hover:text-gray-900">Waitlist</a>
            <button className="w-full bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              Join Waitlist
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}