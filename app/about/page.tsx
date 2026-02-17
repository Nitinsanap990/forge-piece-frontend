'use client'

import { motion } from 'framer-motion'
import { Sparkles, Hammer, ShieldCheck, Heart } from 'lucide-react'

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden rounded-3xl mb-20">
                    <div className="absolute inset-0 bg-[#0a0a0a] forged-metal opacity-50 z-0"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>
                    <div className="relative z-20 text-center space-y-6 max-w-4xl px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-forge-teal/10 border border-forge-teal/30 rounded-full"
                        >
                            <Sparkles size={16} className="text-forge-teal" />
                            <span className="text-[10px] text-forge-teal font-display tracking-[0.3em] uppercase">Forging a Legacy</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tighter leading-none"
                        >
                            WE ARE <span className="text-forge-teal">FORGE</span> PIECE
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-white/60 text-lg md:text-xl font-light italic"
                        >
                            &quot;We are forging a mindset, not just a fit.&quot;
                        </motion.p>
                    </div>
                </section>

                {/* Narrative Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight">The Blacksmith&apos;s Journey</h2>
                        <div className="space-y-6 text-white/50 leading-relaxed font-light">
                            <p>
                                Forge Piece wasn&apos;t born in a boardroom; it was born in the heat of a printing press. Our roots lie deep in the art of premium t-shirt printing, where precision meets passion.
                            </p>
                            <p>
                                We realized that streetwear had become hollow. It was all about the label, never about the person wearing it. We decided to change that. We decided to forge pieces that carry weight—metaphorically and literally.
                            </p>
                            <p>
                                Every garment we create is a testament to the hustle. Using only the highest quality 180-200 GSM cotton, we ensure that our fits stand the test of time, just like the mindsets of those who wear them.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-8 pt-6">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-forge-teal/10 rounded-full border border-forge-teal/20 text-forge-teal">
                                    <Hammer size={24} />
                                </div>
                                <div>
                                    <p className="text-white font-display text-sm uppercase">Craftsmanship</p>
                                    <p className="text-white/40 text-[10px]">Hand-forged quality</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-forge-magenta/10 rounded-full border border-forge-magenta/20 text-forge-magenta">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <p className="text-white font-display text-sm uppercase">Mindset</p>
                                    <p className="text-white/40 text-[10px]">Unbreakable trust</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="aspect-square bg-[#080808] border border-white/5 rounded-2xl overflow-hidden relative holographic flex items-center justify-center p-12"
                    >
                        <div className="text-center space-y-6">
                            <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-forge-teal to-forge-magenta bg-clip-text text-transparent italic opacity-20">FP</div>
                            <p className="text-white/20 font-display text-xs uppercase tracking-[0.5em]">Established 2024</p>
                        </div>
                    </motion.div>
                </div>

                {/* Slang Origins Section */}
                <section className="mb-40">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto space-y-6 mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter">The Language of the Culture</h2>
                        <p className="text-white/40 font-light leading-relaxed">
                            We don&apos;t use slang for the sake of it. We use it to celebrate the communities that forged modern self-expression.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'AURA & RIZZ',
                                origin: 'AAVE & Digital Culture',
                                desc: 'Rooted in African American Vernacular English, these terms represent the unseen energy and charisma that one carries. For us, Aura is the glow of the forge.'
                            },
                            {
                                title: 'SLAY & DRIP',
                                origin: 'Ballroom Culture',
                                desc: 'Born from the Black and LGBTQ+ ballroom scenes, "Slay" is a declaration of excellence. "Drip" is the modern evolution of style and "swag".'
                            },
                            {
                                title: 'BET & FACTS',
                                origin: 'Street & Gaming Roots',
                                desc: 'Emerging from street basketball and gaming communities, these terms are about truth and agreement. In the forge, facts are non-negotiable.'
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] transition-all group"
                            >
                                <h3 className="text-forge-teal font-display text-lg tracking-widest mb-4 group-hover:text-forge-magenta transition-colors">{item.title}</h3>
                                <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-4 font-bold">{item.origin}</div>
                                <p className="text-white/50 text-xs leading-relaxed font-light">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="relative p-12 md:p-24 rounded-3xl bg-[#080808] border border-white/5 overflow-hidden text-center space-y-8 forged-metal">
                    <div className="absolute inset-0 bg-gradient-to-tr from-forge-teal/10 via-transparent to-forge-magenta/10 pointer-events-none"></div>
                    <Heart size={48} className="text-forge-teal mx-auto opacity-50" />
                    <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter max-w-2xl mx-auto">
                        JOIN THE REBELLION. <br /> FORGE YOUR PEACE.
                    </h2>
                    <button className="btn-primary px-12 py-5 rounded-full text-sm font-display font-bold tracking-widest uppercase">
                        Explore the collection
                    </button>
                </section>
            </div>
        </div>
    )
}
