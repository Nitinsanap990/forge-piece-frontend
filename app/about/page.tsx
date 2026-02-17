'use client'

import { motion } from 'framer-motion'
import { Sparkles, Hammer, ShieldCheck, Heart } from 'lucide-react'

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 bg-forge-bg subtle-grain">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mb-24 rounded-none border border-white/5 shadow-2xl">
                    <div className="absolute inset-0 bg-forge-card z-0"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-forge-bg/80 z-10"></div>
                    <div className="relative z-20 text-center space-y-8 max-w-5xl px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-3 px-6 py-2.5 bg-forge-accent/10 border border-forge-accent/20"
                        >
                            <Sparkles size={18} className="text-forge-accent" />
                            <span className="text-[10px] text-forge-accent font-black tracking-[0.4em] uppercase">Forging a Legacy</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.8]"
                        >
                            WE ARE <br /> <span className="text-forge-accent">FORGE</span> SHOP
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-forge-grey text-xl md:text-2xl font-light italic bg-forge-surface/50 backdrop-blur-sm inline-block px-4"
                        >
                            &quot;Forging a mindset, not just a fit.&quot;
                        </motion.p>
                    </div>
                </section>

                {/* Narrative Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-48">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[0.9]">The Blacksmith&apos;s <br /> <span className="text-forge-accent">Journey</span></h2>
                        <div className="space-y-8 text-forge-grey text-lg leading-relaxed font-light">
                            <p>
                                Forge Piece wasn&apos;t born in a boardroom; it was born in the intense heat of a Mumbai printing press. Our roots lie deep in the craft of premium textile engineering, where precision meets urban passion.
                            </p>
                            <p>
                                We realized streetwear had become disposable. Mass-produced, hollow, and fleeting. We chose a different path. We decided to forge garments that carry weight—metaphorically in spirit, and literally in construction.
                            </p>
                            <p>
                                Every piece is a testament to the hustle. Using only high-density 200 GSM premium cotton, we produce fits that endure, shadowing the resilience of the mindsets that represent us.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-10 pt-8 border-t border-white/5">
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-forge-accent text-forge-bg shadow-lg">
                                    <Hammer size={24} />
                                </div>
                                <div>
                                    <p className="text-white font-black text-sm uppercase tracking-widest">Engineering</p>
                                    <p className="text-forge-grey text-[10px] font-bold uppercase tracking-widest">Heavyweight standard</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-forge-surface text-white shadow-lg">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <p className="text-white font-black text-sm uppercase tracking-widest">Mindset</p>
                                    <p className="text-forge-grey text-[10px] font-bold uppercase tracking-widest">Unfiltered identity</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="aspect-square bg-forge-card border border-white/5 overflow-hidden relative shadow-2xl flex items-center justify-center p-16 group"
                    >
                        <div className="absolute inset-0 subtle-grain opacity-50"></div>
                        <div className="relative z-10 text-center space-y-8">
                            <div className="text-9xl md:text-[12rem] font-black text-white/5 italic group-hover:text-forge-accent/10 transition-luxury">FP</div>
                            <p className="text-white/40 font-black text-xs uppercase tracking-[0.6em]">EST. 2024 • MUMBAI</p>
                        </div>
                    </motion.div>
                </div>

                {/* Cultural Context Section */}
                <section className="mb-48 bg-forge-card p-16 md:p-32 border border-white/5 shadow-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-4xl mx-auto space-y-8 mb-20"
                    >
                        <span className="text-xs font-black tracking-[0.5em] text-forge-accent uppercase">Evolution</span>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.85]">The Language of <br /> the Forge</h2>
                        <p className="text-forge-grey text-xl font-light leading-relaxed max-w-2xl mx-auto">
                            We curate vocabulary to celebrate the global communities that redefined modern self-expression through streetwear.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                title: 'AURA & RIZZ',
                                origin: 'Modern Urban Lexicon',
                                desc: 'Representing the intrinsic energy and magnetism one projects. Aura is the glow of the furnace that shapes your character.'
                            },
                            {
                                title: 'DRIP & FLEX',
                                origin: 'Streetwear Heritage',
                                desc: 'The evolution of personal style and the confidence to display it. Drip is the liquid form of your forged identity.'
                            },
                            {
                                title: 'BET & FACTS',
                                origin: 'Culture Foundations',
                                desc: 'A commitment to authenticity and shared truth. In the forge, facts are the only currency of value.'
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-12 bg-forge-surface border border-white/5 hover:border-forge-accent/30 transition-luxury group shadow-sm hover:shadow-xl"
                            >
                                <h3 className="text-white font-black text-2xl tracking-tighter mb-4 group-hover:text-forge-accent transition-colors uppercase">{item.title}</h3>
                                <div className="text-[10px] text-forge-accent uppercase tracking-[0.3em] mb-6 font-black">{item.origin}</div>
                                <p className="text-forge-grey text-base leading-relaxed font-light">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="relative p-12 md:p-32 bg-forge-dark overflow-hidden text-center space-y-12 mb-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-forge-accent/10 to-transparent pointer-events-none"></div>
                    <Heart size={64} className="text-forge-accent mx-auto opacity-80 animate-pulse" />
                    <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter max-w-5xl mx-auto leading-[0.85]">
                        FORGE A MINDSET, <br /> <span className="text-forge-accent">CLAIM YOUR PIECE.</span>
                    </h2>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-forge-accent text-forge-bg px-16 py-6 text-sm font-black tracking-[0.4em] uppercase shadow-2xl hover:bg-forge-accent-hover transition-luxury"
                    >
                        View Collection
                    </motion.button>
                </section>
            </div>
        </div>
    )
}
