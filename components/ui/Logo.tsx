'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface LogoProps {
  variant?: 'full' | 'icon'
  className?: string
  animated?: boolean
}

export default function Logo({ variant = 'full', className = '', animated = true }: LogoProps) {
  const logoContent = (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Peace Symbol with Dove */}
      <div className="relative">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="peace-symbol"
        >
          {/* Peace Circle */}
          <circle cx="20" cy="20" r="18" stroke="url(#gradient1)" strokeWidth="2" />

          {/* Peace Lines */}
          <line x1="20" y1="20" x2="20" y2="35" stroke="url(#gradient1)" strokeWidth="2" />
          <line x1="20" y1="20" x2="8" y2="30" stroke="url(#gradient1)" strokeWidth="2" />
          <line x1="20" y1="20" x2="32" y2="30" stroke="url(#gradient1)" strokeWidth="2" />

          {/* Dove silhouette integrated */}
          <path
            d="M20 15 C18 12, 15 13, 14 15 C13 17, 15 18, 16 18 C15 19, 14 20, 15 22 L20 20 L25 22 C26 20, 25 19, 24 18 C25 18, 27 17, 26 15 C25 13, 22 12, 20 15 Z"
            fill="url(#gradient2)"
            opacity="0.8"
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d9ff" />
              <stop offset="50%" stopColor="#ff00ff" />
              <stop offset="100%" stopColor="#8b00ff" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#00d9ff" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Text Logo */}
      {variant === 'full' && (
        <div className="flex flex-col leading-none">
          <span className="text-3xl font-bold tracking-tight font-display bg-gradient-to-r from-forge-teal via-forge-magenta to-forge-purple bg-clip-text text-transparent italic">
            FORGE
          </span>
          <div className="flex items-center gap-1">
            <span className="text-base font-bold tracking-[0.4em] text-white/90 font-display">
              P
            </span>
            {/* The 'C' with integrated minimalist dove */}
            <div className="relative flex items-center justify-center">
              <span className="text-base font-bold tracking-[0.4em] text-white/90 font-display">
                C
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -top-1 left-0 text-forge-teal opacity-80"
              >
                <path
                  d="M12 4C10 2 7 3 6 5C5 7 7 8 8 8C7 9 6 10 7 12L12 10L17 12C18 10 17 9 16 8C17 8 19 7 18 5C17 3 14 2 12 4Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="text-base font-bold tracking-[0.4em] text-white/90 font-display">
              E
            </span>
          </div>
        </div>
      )}
    </div>
  )

  if (!animated) {
    return logoContent
  }

  return (
    <Link href="/">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {logoContent}
      </motion.div>
    </Link>
  )
}
