'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const quotes = [
  {
    text: 'Peace is not the absence of conflict, it\'s the mastery of it.',
    author: 'The Peace Dove',
    slang: 'AURA',
  },
  {
    text: "They want the fit, but they can't handle the forge.",
    author: 'Blacksmith Wisdom',
    slang: 'RIZZ',
  },
  {
    text: 'Forging a mindset isn\'t a hobby, it\'s a rebellion.',
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
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forge-teal/5 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-forge-teal via-white to-forge-teal bg-clip-text text-transparent">
              The Forge Mentality
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Words that fuel the hustle and forge the mindset
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative p-8 rounded-lg bg-forge-dark/50 border border-forge-teal/20 backdrop-blur-sm hover:border-forge-magenta/40 transition-all duration-300 card-hover">
                {/* Quote icon */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Quote size={40} className="text-forge-teal rotate-180" />
                </div>

                {/* Content */}
                <div className="relative space-y-6">
                  <p className="text-white text-xl md:text-2xl font-light leading-relaxed italic cinematic-text">
                    &ldquo;{quote.text}&rdquo;
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div>
                      <p className="text-forge-teal text-xs font-display tracking-[0.2em] uppercase">{quote.author}</p>
                    </div>
                    <div className="px-4 py-1 rounded-sm bg-forge-magenta/10 border border-forge-magenta/30 holographic">
                      <span className="text-white text-[10px] font-display font-bold tracking-[0.3em]">
                        {quote.slang}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-forge-teal/0 via-forge-magenta/5 to-forge-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gen Z Slang Origins */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <div className="p-6 rounded-lg bg-forge-darker/80 border border-forge-purple/20 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-forge-purple mb-3">The Language of the Culture</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Our language is rooted in{' '}
              <span className="text-forge-teal font-semibold">African American Vernacular English</span>,{' '}
              <span className="text-forge-magenta font-semibold">Black and LGBTQ+ ballroom culture</span>,{' '}
              <span className="text-forge-purple font-semibold">gaming communities</span>, and{' '}
              <span className="text-forge-teal font-semibold">social media innovation</span>.
              Words like rizz, aura, drip, and slay aren&apos;t just slang—they&apos;re a celebration of the communities that shaped modern culture.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
