'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function BrandVideo() {
  return (
    <section className="py-24 relative overflow-hidden bg-forge-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[10px] font-black tracking-[0.6em] text-forge-accent uppercase mb-4 block">Cinematic Experience</span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-white leading-[0.8]">
            EXPERIENCE <br /> THE <span className="text-forge-accent">FORGE</span>
          </h2>
          <p className="text-forge-grey text-lg max-w-2xl mx-auto font-light italic">
            Visualizing the engineering journey from textile concept to urban masterpiece.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative aspect-video bg-forge-card overflow-hidden border border-white/5 shadow-xl group-hover:shadow-2xl transition-luxury">
              <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 bg-[url('/products/architect.jpg')] bg-cover bg-center opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center bg-white/5 group-hover:bg-transparent transition-luxury">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-forge-accent text-forge-bg flex items-center justify-center shadow-2xl group-hover:scale-110 transition-luxury">
                    <Play size={40} className="ml-1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-forge-surface text-white text-[9px] font-black uppercase tracking-widest">Legacy</span>
                <h4 className="text-white font-black uppercase text-xl tracking-tighter">Vintage Intro</h4>
              </div>
              <p className="text-forge-grey text-base font-light leading-relaxed">A nostalgic analog journey through the early textile printing presses of Mumbai.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative aspect-video bg-forge-card overflow-hidden border border-white/5 shadow-xl group-hover:shadow-2xl transition-luxury">
              <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 bg-[url('/products/architect.jpg')] bg-cover bg-center opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center bg-white/5 group-hover:bg-transparent transition-luxury">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-forge-surface text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-luxury">
                    <Play size={40} className="ml-1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-forge-accent text-forge-bg text-[9px] font-black uppercase tracking-widest">Future</span>
                <h4 className="text-white font-black uppercase text-xl tracking-tighter">Innovation Loop</h4>
              </div>
              <p className="text-forge-grey text-base font-light leading-relaxed">High-definition micro-details of 200 GSM construction and precision stitching.</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative aspect-[21/9] bg-forge-card overflow-hidden border border-white/5 shadow-2xl flex items-center justify-center p-12 group">
            <div className="absolute inset-0 subtle-grain opacity-30"></div>
            <div className="relative z-20 text-center space-y-8 max-w-3xl">
              <div className="space-y-4">
                <span className="text-forge-accent font-black tracking-[0.8em] text-[10px] uppercase opacity-80 block">Coming Soon Teaser</span>
                <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.8]">
                  THE <span className="group-hover:text-forge-accent transition-luxury">PROCESS</span>
                </h3>
              </div>
              <p className="text-forge-grey text-lg font-light leading-relaxed italic">
                Witness the transformation of raw cotton into a forged masterpiece. <br />
                <span className="text-white font-bold uppercase not-italic text-sm tracking-[0.2em] block mt-4">&quot;Master the Forge. Piece by Piece.&quot;</span>
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-12 py-5 bg-forge-accent text-forge-bg font-black text-[10px] tracking-[0.4em] uppercase hover:bg-forge-accent-hover transition-luxury shadow-xl"
              >
                Notify Me of the Drop
              </motion.button>
            </div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-forge-accent/5 rounded-full blur-3xl group-hover:bg-forge-accent/10 transition-luxury"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
