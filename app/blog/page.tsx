'use client'

import { motion } from 'framer-motion'
import { BookOpen, Camera, PencilRuler, Play } from 'lucide-react'
import Image from 'next/image'

const posts = [
    {
        title: 'THE CORE COLLECTION: DESIGN DEEP DIVE',
        category: 'Design',
        icon: <PencilRuler size={20} />,
        date: 'Feb 2024',
        desc: 'Exploring the geometry of the Peace Dove and the meaning behind the Pigeon-C and Dove-E integration.'
    },
    {
        title: 'BEYOND THE SLANG: DEFINING AURA',
        category: 'Culture',
        icon: <BookOpen size={20} />,
        date: 'Feb 2024',
        desc: 'Why "AURA" isn\'t just a word, but the culmination of your journey through the forge.'
    },
    {
        title: 'THE 200 GSM STANDARD',
        category: 'Quality',
        icon: <Camera size={20} />,
        date: 'Jan 2024',
        desc: 'Inside the Mumbai hub: Testing our heavyweight fabrics against the hustle of the city.'
    }
]

export default function BlogPage() {
    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-4 mb-16">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter"
                    >
                        THE <span className="text-forge-teal">PULSE</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/40 max-w-xl font-light italic"
                    >
                        Deep dives into design, culture, and the art of forging a mindset.
                    </motion.p>
                </div>

                {/* Featured Post */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative aspect-[21/9] bg-[#080808] rounded-2xl border border-white/5 overflow-hidden mb-12 group"
                >
                    <div className="absolute inset-0 scanlines opacity-20 z-10 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20"></div>

                    {/* Image Content */}
                    <Image
                        src="/products/architect.jpg"
                        alt="Featured Manifesto"
                        fill
                        className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                    />

                    <div className="absolute bottom-8 left-8 right-8 z-30 space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 bg-forge-teal text-forge-dark text-[10px] font-bold font-display tracking-widest uppercase">Featured Release</span>
                            <span className="text-white/40 text-[10px] uppercase tracking-widest">5 Min Read</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter leading-none group-hover:text-forge-teal transition-colors">
                            WE ARE FORGING A MINDSET, <br /> NOT JUST A FIT.
                        </h2>
                    </div>
                </motion.div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {posts.map((post, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden hover:bg-white/[0.04] transition-all group"
                        >
                            <div className="aspect-video bg-[#0a0a0a] relative flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-forge-teal/10 to-transparent"></div>
                                <div className="text-white/10 group-hover:scale-110 transition-transform">
                                    {post.icon}
                                </div>
                            </div>
                            <div className="p-8 space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-forge-teal text-[10px] font-display font-extrabold tracking-widest uppercase">{post.category}</span>
                                    <span className="text-white/20 text-[10px] uppercase tracking-widest">{post.date}</span>
                                </div>
                                <h3 className="text-xl font-display font-bold uppercase tracking-tight group-hover:text-forge-teal transition-colors leading-tight">
                                    {post.title}
                                </h3>
                                <p className="text-white/40 text-xs leading-relaxed font-light">
                                    {post.desc}
                                </p>
                                <button className="text-[10px] text-white/60 font-display font-bold uppercase tracking-[0.3em] flex items-center gap-2 group-hover:text-forge-magenta transition-colors pt-4">
                                    Read Story <Play size={10} className="fill-current" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Slang Dictionary Highlight */}
                <div className="p-12 md:p-20 rounded-3xl bg-[#080808] border border-white/5 relative overflow-hidden forged-metal">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-forge-magenta/5 to-transparent pointer-events-none"></div>
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-display font-bold uppercase tracking-tighter">THE SLANG <br /> <span className="text-forge-magenta">DICTIONARY</span></h2>
                            <p className="text-white/50 text-base leading-relaxed font-light max-w-md">
                                Understanding the culture behind the fits. From the ballroom scenes of NY to the gaming dens of Mumbai.
                            </p>
                            <button className="px-8 py-3 border border-forge-magenta text-forge-magenta text-[10px] font-display font-bold uppercase tracking-widest hover:bg-forge-magenta hover:text-white transition-all rounded-sm">
                                Explore Glossary
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {['AURA', 'RIZZ', 'BET', 'DRIP'].map((word) => (
                                <div key={word} className="p-6 bg-white/5 border border-white/5 rounded-lg flex flex-col items-center justify-center space-y-2 group hover:border-forge-teal/30 transition-all">
                                    <span className="text-xl font-display font-bold tracking-tighter text-white/40 group-hover:text-forge-teal">{word}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
