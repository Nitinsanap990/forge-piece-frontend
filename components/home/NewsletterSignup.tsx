'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, CheckCircle } from 'lucide-react'

export default function NewsletterSignup() {
    const [email, setEmail] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitted(true)
        setTimeout(() => {
            setEmail('')
            setIsSubmitted(false)
        }, 3000)
    }

    return (
        <section className="py-24 relative overflow-hidden bg-forge-bg">
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.03, 0.05, 0.03],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute -top-24 -left-24 w-[40rem] h-[40rem] bg-forge-accent rounded-full blur-[100px]"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative p-10 md:p-20 bg-white border border-black/5 shadow-2xl overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-forge-accent"></div>
                        <div className="text-center space-y-10">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-forge-bg border border-black/5 shadow-inner">
                                <Mail size={32} className="text-forge-accent" />
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black leading-[0.85]">
                                    JOIN THE <br /> <span style={{ color: 'rgb(226, 225, 225)' }}>FORGE</span> PULSE
                                </h2>
                                <p className="text-forge-grey text-lg font-light tracking-wide max-w-xl mx-auto italic">
                                    Be first in line for limited drops, exclusive engineering reveals, and forge mindset culture.
                                </p>
                            </div>

                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="max-w-lg mx-auto pt-6">
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="ENTER YOUR EMAIL"
                                            required
                                            className="flex-1 px-8 py-5 bg-white border border-black/10 text-black font-bold placeholder:text-black/30 outline-none focus:border-black transition-luxury shadow-inner uppercase text-xs tracking-widest"
                                        />
                                        <button
                                            type="submit"
                                            className="bg-black text-white px-10 py-5 text-xs font-black tracking-[0.4em] uppercase hover:bg-black/90 transition-luxury shadow-xl active:scale-95"
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                    <p className="text-white/30 text-[9px] font-black uppercase tracking-[0.2em] mt-6">
                                        MEMBER EXCLUSIVE - NO SPAM - FORGED QUALITY
                                    </p>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center gap-4 py-8"
                                >
                                    <div className="w-16 h-16 bg-forge-accent text-forge-bg flex items-center justify-center shadow-lg">
                                        <CheckCircle size={32} />
                                    </div>
                                    <p className="text-forge-accent font-black text-2xl uppercase tracking-tighter">
                                        Access Granted.
                                    </p>
                                </motion.div>
                            )}

                            <div className="grid grid-cols-3 gap-8 pt-16 border-t border-white/5">
                                <div className="text-center">
                                    <div className="text-3xl md:text-5xl font-black text-black tracking-tighter">12</div>
                                    <div className="text-forge-accent text-[10px] font-black uppercase tracking-[0.3em] mt-2">Active Drops</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl md:text-5xl font-black text-black tracking-tighter">200</div>
                                    <div className="text-forge-grey text-[10px] font-bold uppercase tracking-[0.3em] mt-2">GSM Premium</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl md:text-5xl font-black text-black tracking-tighter">100%</div>
                                    <div className="text-forge-grey text-[10px] font-bold uppercase tracking-[0.3em] mt-2">COTTON</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
