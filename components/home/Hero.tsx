'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, Sparkles } from 'lucide-react'
import Logo from '@/components/ui/Logo'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-forge-dark via-forge-darker to-forge-dark"></div>

        {/* Animated Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-forge-teal/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-forge-magenta/20 rounded-full blur-3xl"
        />

        {/* Ember Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="ember absolute"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-4px',
            }}
            animate={{
              y: [-10, -300],
              opacity: [0, 1, 0],
              scale: [1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Glitch Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full neon-border bg-forge-dark/50 backdrop-blur-sm"
          >
            <Sparkles size={16} className="text-forge-teal" />
            <span className="text-sm font-medium text-forge-teal tracking-wide">
              PREMIUM STREETWEAR
            </span>
          </motion.div>

          {/* Logo Reveal Area */}
          <div className="flex flex-col items-center justify-center mb-12">
            <motion.div
              initial={{ scale: 0.8, filter: 'brightness(0) saturate(100%) invert(32%) sepia(95%) saturate(1478%) hue-rotate(3deg) brightness(96%) contrast(106%)' }} // Forged orange glow
              animate={{
                scale: 1,
                filter: 'brightness(1) saturate(100%)',
              }}
              transition={{
                duration: 2.5,
                ease: "easeOut",
              }}
              className="relative"
            >
              {/* Forging Sparks Effect around Logo */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute inset-0 bg-forge-gold blur-3xl opacity-20"
              />

              <div className="transform scale-[2] sm:scale-[2.5] md:scale-[3]">
                <Logo variant="full" className="logo-reveal" />
              </div>
            </motion.div>
          </div>

          {/* Main Heading & Tagline */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="text-2xl sm:text-3xl font-display tracking-[0.5em] text-white/50 uppercase"
            >
              FORGE PIECE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight cinematic-text pb-2"
            >
              WE ARE FORGING A MINDSET
            </motion.p>

            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.2 }}
              className="text-2xl sm:text-3xl md:text-4xl font-display text-forge-teal italic"
            >
              NOT JUST A FIT
            </motion.p>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            Urban streetwear with motivational ink and anime glitches. <br />
            For anyone who&apos;s still forging their story.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Link href="/shop">
              <button className="btn-primary flex items-center gap-2 px-8 py-4 rounded-full group">
                Shop Collection
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <Link href="/contact">
              <button className="px-8 py-4 rounded-full border-2 border-forge-teal text-forge-teal font-bold hover:bg-forge-teal hover:text-forge-dark transition-all duration-300 uppercase tracking-wide">
                DM to Claim Yours
              </button>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="pt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="inline-block"
            >
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                <div className="w-1.5 h-3 bg-forge-teal rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-forge-dark to-transparent z-5"></div>
    </section>
  )
}
