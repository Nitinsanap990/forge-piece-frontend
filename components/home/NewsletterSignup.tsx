'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, CheckCircle } from 'lucide-react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter signup logic
    setIsSubmitted(true)
    setTimeout(() => {
      setEmail('')
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-forge-magenta/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-8 md:p-12 rounded-2xl bg-[#080808] border border-white/5 backdrop-blur-sm forged-metal">
            <div className="text-center space-y-6">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 group-hover:border-forge-teal transition-colors">
                <Mail size={24} className="text-white opacity-80" />
              </div>

              {/* Heading */}
              <div className="space-y-3">
                <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter">
                  JOIN THE FORGE
                </h2>
                <p className="text-white/40 text-sm md:text-base font-light tracking-wide max-w-xl mx-auto italic">
                  Be the first to know about new drops, exclusive designs, and forge mindset content.
                </p>
              </div>

              {/* Form */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto pt-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-6 py-4 rounded-full bg-forge-darker/80 border border-forge-teal/30 text-white placeholder:text-white/40 focus:outline-none focus:border-forge-teal transition-colors"
                    />
                    <button
                      type="submit"
                      className="btn-primary px-8 py-4 rounded-full whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="text-white/40 text-xs mt-3">
                    No spam. Unsubscribe anytime. We respect your inbox.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-3 py-4"
                >
                  <CheckCircle size={24} className="text-forge-teal" />
                  <p className="text-forge-teal font-semibold text-lg">
                    You&apos;re in! Check your email.
                  </p>
                </motion.div>
              )}

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-12 border-t border-white/5">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-forge-teal">12</div>
                  <div className="text-white/30 text-[10px] uppercase tracking-widest mt-1">Designs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-forge-magenta">200+</div>
                  <div className="text-white/30 text-[10px] uppercase tracking-widest mt-1">GSM Quality</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-forge-purple">100%</div>
                  <div className="text-white/30 text-[10px] uppercase tracking-widest mt-1">Premium</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
