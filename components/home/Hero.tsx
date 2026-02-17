'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, Sparkles } from 'lucide-react'
import Logo from '@/components/ui/Logo'

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20 bg-white subtle-grain">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          {/* Logo Reveal Area */}
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="transform scale-[1.5] sm:scale-[2]">
              <Logo variant="full" />
            </div>
          </div>

          {/* Main Heading & Tagline */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex items-center justify-center gap-4"
            >
              <div className="h-px w-8 bg-black/10"></div>
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.5em] text-forge-grey uppercase">
                Est. 2024 • Mumbai
              </span>
              <div className="h-px w-8 bg-black/10"></div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter text-black leading-[0.85] text-balance"
            >
              FORGING <br /> <span className="text-forge-red">A MINDSET</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-light text-forge-grey italic tracking-wide"
            >
              not just a fit.
            </motion.p>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-sm sm:text-base text-forge-grey max-w-xl mx-auto leading-relaxed font-light"
          >
            Premium 100% Cotton. 200 GSM Heavyweight. <br />
            Meticulously engineered for the streets.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12"
          >
            <Link href="/shop">
              <button className="px-12 py-5 bg-forge-red text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-forge-red-hover transition-luxury shadow-xl shadow-forge-red/20">
                Shop Collection
              </button>
            </Link>

            <Link href="/about">
              <button className="px-12 py-5 border border-black/10 bg-white text-black text-[10px] font-bold uppercase tracking-[0.3em] hover:border-black transition-luxury">
                Our Story
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-black">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-black to-transparent"></div>
      </div>
    </section>
  )
}
