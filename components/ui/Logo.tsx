'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface LogoProps {
  variant?: 'full' | 'icon'
  className?: string
  animated?: boolean
}

export default function Logo({ variant = 'full', className = '', animated = true }: LogoProps) {
  const size = variant === 'full' ? 360 : 140

  const logoContent = (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative group">
        <Image
          src="/logo.svg"
          alt="Forge Piece Logo"
          width={size}
          height={size}
          className="object-contain transition-luxury group-hover:scale-105"
          priority
        />
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-forge-accent/0 group-hover:bg-forge-accent/5 rounded-full blur-2xl transition-all duration-700 -z-10" />
      </div>
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
