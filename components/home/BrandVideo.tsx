'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function BrandVideo() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-forge-teal to-forge-magenta bg-clip-text text-transparent">
              Experience the Forge
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Watch our cinematic journey from concept to creation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Video 1: Vintage 1980s Style */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative aspect-video bg-gradient-to-br from-forge-dark to-forge-darker rounded-lg overflow-hidden neon-border card-hover">
              {/* Placeholder for video */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-forge-teal/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-forge-teal/50 group-hover:bg-forge-teal/40 transition-all duration-300">
                    <Play size={32} className="text-forge-teal ml-1" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Vintage Era</h3>
                    <p className="text-white/60 text-sm">1980s TV Commercial Style</p>
                  </div>
                </div>
              </div>

              {/* CRT Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent crt-effect pointer-events-none"></div>

              {/* Scanlines */}
              <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,217,255,0.3) 2px, rgba(0,217,255,0.3) 4px)',
                }}
              ></div>
            </div>

            <div className="mt-4 space-y-2">
              <h4 className="text-white font-semibold">Classic Forge Intro</h4>
              <p className="text-white/60 text-sm">Dark studio, CRT TV, analog glitches. A nostalgic journey through time.</p>
            </div>
          </motion.div>

          {/* Video 2: Gen Z Style */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative aspect-video bg-gradient-to-br from-forge-dark to-forge-darker rounded-lg overflow-hidden neon-border card-hover">
              {/* Placeholder for video */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-forge-magenta/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-forge-magenta/50 group-hover:bg-forge-magenta/40 transition-all duration-300">
                    <Play size={32} className="text-forge-magenta ml-1" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Gen Z Edition</h3>
                    <p className="text-white/60 text-sm">Holographic Display & Neon</p>
                  </div>
                </div>
              </div>

              {/* Holographic Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-forge-teal/10 via-transparent to-forge-magenta/10 pointer-events-none"></div>
            </div>

            <div className="mt-4 space-y-2">
              <h4 className="text-white font-semibold">Future Forge Vision</h4>
              <p className="text-white/60 text-sm">Holographic display, neon lights, digital glitches. The future of streetwear.</p>
            </div>
          </motion.div>
        </div>

        {/* Coming Soon Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="relative aspect-video bg-[#050505] rounded-lg overflow-hidden border border-white/5 shadow-2xl shadow-forge-gold/5 forged-metal">
            {/* Overlay for cinematic feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 z-10"></div>

            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center space-y-6 px-12">
                <motion.div
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(255, 215, 0, 0)',
                      '0 0 30px rgba(255, 215, 0, 0.5)',
                      '0 0 20px rgba(255, 215, 0, 0)',
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="space-y-2"
                >
                  <span className="text-forge-gold font-display tracking-[0.8em] text-xs uppercase opacity-70">Coming Soon Teaser</span>
                  <h3 className="text-5xl md:text-7xl font-bold cinematic-text tracking-tighter">
                    THE FORGE
                  </h3>
                </motion.div>

                <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
                  A muscular blacksmith in a dimly lit forge hammering a t-shirt in ultra slow-motion. Witness the glowing logo reveal as the metal cools. <br />
                  <span className="text-forge-teal font-medium mt-2 block italic italic">&quot;We are forging a mindset, not just a fit.&quot;</span>
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 bg-white/5 border border-white/10 text-white font-display text-xs tracking-widest uppercase hover:bg-white/10 transition-colors"
                >
                  Notify Me of the Drop
                </motion.button>
              </div>
            </div>

            {/* Ember effects */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="ember absolute"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  bottom: '0',
                }}
                animate={{
                  y: [0, -200],
                  opacity: [0, 1, 0],
                  scale: [1, 0.3],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                  ease: 'easeOut',
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
