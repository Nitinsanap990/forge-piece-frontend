'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import { useCart } from '@/store/useCart'
import CartDrawer from '@/components/cart/CartDrawer'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const totalItems = useCart(state => state.getItemCount())

  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/shop', label: 'PRODUCTS' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/blog', label: 'BLOG' },
    { href: '/contact', label: 'CONTACT' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo variant="icon" />
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  pathname === link.href
                    ? 'text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center gap-6">
            {/* Search Icon */}
            <button
              className="hidden sm:block transition-colors text-gray-600 hover:text-gray-900"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {/* User Icon */}
            <button
              className="hidden sm:block transition-colors text-gray-600 hover:text-gray-900"
              aria-label="Account"
            >
              <User size={20} />
            </button>

            {/* Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative transition-colors text-gray-600 hover:text-gray-900"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={20} />
              {mounted && totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden transition-colors text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <nav className="px-6 py-4 space-y-4">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-sm font-semibold tracking-wide transition-colors ${
                    pathname === link.href
                      ? 'text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  )
}
