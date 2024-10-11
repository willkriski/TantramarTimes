'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navigation({ categories }) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false) // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen) // Toggle the menu open/close state
  }

  return (
    <nav className="relative flex items-center justify-between">
      {/* Hamburger Icon on the left side */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <ul className={`flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-4`}>
        <li>
          <Link href="/" className={pathname === '/' ? 'font-bold' : ''}>
            Home
          </Link>
        </li>
        {categories.map((encodedCategory) => {
          const category = encodedCategory.replace(/-/g, ' ')
          return (
            <li key={encodedCategory}>
              <Link
                href={`/category/${encodedCategory}`}
                className={pathname === `/category/${encodedCategory}` ? 'font-bold' : ''}
              >
                {category}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
