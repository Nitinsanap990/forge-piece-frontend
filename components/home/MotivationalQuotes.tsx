'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const quotes = [
  {
    text: "Peace is not the absence of conflict, it's the mastery of it.",
    author: 'The Peace Dove',
    slang: 'AURA',
  },
  {
    text: "They want the fit, but they can't handle the forge.",
    author: 'Blacksmith Wisdom',
    slang: 'RIZZ',
  },
  {
    text: "Forging a mindset isn't a hobby, it's a rebellion.",
    author: 'Forge Manifesto',
    slang: 'FACTS',
  },
  {
    text: 'Silence the noise. Forge your peace. Piece by piece.',
    author: 'Urban Prophet',
    slang: 'SLAY',
  },
]

export default function MotivationalQuotes() {
  return (
    <section className="py-24 relative overflow-hidden bg-forge-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forge-accent/5 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[10px] font-black tracking-[0.6em] text-forge-accent uppercase mb-4 block">Philosophy</span>
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter text-black leading-[0.8]">
            CRAFTING <br /> THE <span style={{ color: 'var(--forge-highlight)' }}>MINDSET</span>
          </h2>
          <p className="text-black text-lg max-w-2xl mx-auto font-light italic">
            Words that fuel the engineering of your daily hustle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative p-12 bg-white border border-black/5 hover:border-forge-accent transition-luxury shadow-sm hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote size={64} className="text-forge-accent rotate-180" />
                </div>
                <div className="relative space-y-8">
                  <p className="text-black text-2xl md:text-3xl font-black leading-tight uppercase tracking-tighter">
                    &ldquo;{quote.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between pt-8 border-t border-white/5">
                    <div>
                      <p className="text-forge-accent text-[10px] font-black tracking-[0.4em] uppercase">{quote.author}</p>
                    </div>
                    <div className="px-5 py-2 bg-forge-bg text-black border border-black/5 shadow-lg">
                      <span className="text-[10px] font-black tracking-[0.5em] uppercase">{quote.slang}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute left-0 top-0 h-full w-1 bg-forge-accent opacity-0 group-hover:opacity-100 transition-luxury"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 max-w-4xl mx-auto text-center"
        >
          <div className="p-12 md:p-16 bg-white border border-black/5 shadow-inner">
            <h3 className="text-2xl font-black text-black mb-6 uppercase tracking-tighter">Verbal Engineering</h3>
            <p className="text-black text-lg leading-relaxed font-light">
              Our vocabulary celebrates the communities that redefined modern expression. From{' '}
              <span className="text-black font-bold uppercase text-sm tracking-widest">Aura</span> to{' '}
              <span className="text-black font-bold uppercase text-sm tracking-widest">Drip</span>,
              these terms aren&apos;t just slang—they are declarations of the high-density construction we live by.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
