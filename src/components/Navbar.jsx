"use client"

import { Link } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky mb-10 top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 0L24 12L12 24L0 12L12 0ZM12 3.516L20.484 12L12 20.484L3.516 12L12 3.516Z" />
              </svg>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/3D" className="text-gray-300 hover:text-white transition-colors">
              3D
            </Link>
            <Link to="blog" className="text-gray-300 hover:text-white transition-colors">
              blog
            </Link>
            <Link to="/help" className="text-gray-300 hover:text-white transition-colors">
              Help
            </Link>
            <Link to="/enterprise" className="text-gray-300 hover:text-white transition-colors">
              Enterprise
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                Start
              </Link>
              <Link to="/blog" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                Blog
              </Link>
              <Link to="/resources" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                Resources
              </Link>
              <Link to="/help" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                Help
              </Link>
              <Link to="/enterprise" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                Enterprise
              </Link>
              <Link to="/pricing" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

