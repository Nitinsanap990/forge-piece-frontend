'use client'

import { motion } from 'framer-motion'
import { BookOpen, Camera, PencilRuler, Play } from 'lucide-react'
import Image from 'next/image'

const posts = [
    {
        title: 'FORGING A MINDSET NOT JUST A FIT: DESIGN DEEP DIVE',
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
        <div className="min-h-screen pt-40 pb-32 bg-forge-bg subtle-grain">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-8 mb-24 text-center">
                    <span className="text-[10px] font-black tracking-[0.5em] text-forge-accent uppercase">
                        Brand Perspectives
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white uppercase leading-[0.8]">
                        THE <span className="text-forge-accent">PULSE</span>
                    </h1>
                    <div className="h-px w-12 bg-white/10"></div>
                    <p className="text-forge-grey max-w-xl text-lg font-light leading-relaxed">
                        Thought pieces on design, urban culture, and the technical craft of forging streetwear in the heart of Mumbai.
                    </p>
                </div>

                {/* Featured Post */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative aspect-[21/9] bg-forge-card border border-white/5 overflow-hidden mb-20 group shadow-xl"
                >
                    <div className="absolute inset-0 bg-black/30 z-10 group-hover:bg-black/20 transition-luxury"></div>

                    <Image
                        src="/products/architect.jpg"
                        alt="Featured Manifesto"
                        fill
                        className="object-cover transition-luxury grayscale hover:grayscale-0 opacity-90"
                        priority
                    />

                    <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-20">
                        <div className="max-w-4xl space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="px-5 py-2 bg-forge-accent text-forge-bg text-[10px] font-black tracking-[0.3em] uppercase shadow-lg">Manifesto</span>
                                <span className="text-white/40 text-[10px] uppercase font-black tracking-[0.3em]">Special Issue 01</span>
                            </div>
                            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.85] drop-shadow-2xl">
                                WE ARE FORGING A MINDSET, <br /> NOT JUST A FIT.
                            </h2>
                        </div>
                    </div>
                </motion.div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
                    {posts.map((post, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-forge-card border border-white/5 overflow-hidden hover:border-white/10 transition-luxury group shadow-sm hover:shadow-xl"
                        >
                            <div className="aspect-video bg-forge-surface relative flex items-center justify-center overflow-hidden">
                                <div className="text-white/5 group-hover:scale-125 group-hover:text-forge-accent transition-luxury">
                                    {post.icon}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-luxury"></div>
                            </div>
                            <div className="p-10 space-y-6">
                                <div className="flex items-center justify-between">
                                    <span className="text-forge-accent text-[10px] font-black tracking-[0.3em] uppercase border-b-2 border-forge-accent pb-1">{post.category}</span>
                                    <span className="text-forge-grey text-[10px] font-black tracking-[0.3em] uppercase">{post.date}</span>
                                </div>
                                <h3 className="text-2xl font-black tracking-tight text-white uppercase group-hover:text-forge-accent transition-colors leading-tight">
                                    {post.title}
                                </h3>
                                <p className="text-forge-grey text-base leading-relaxed font-light">
                                    {post.desc}
                                </p>
                                <button className="text-[10px] text-white font-black uppercase tracking-[0.4em] flex items-center gap-3 border-b-2 border-transparent hover:border-forge-accent hover:text-forge-accent transition-all pt-4">
                                    Read Article <Play size={10} className="fill-current" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Culture Dictionary Section */}
                <div className="py-24 px-8 md:px-20 bg-forge-card border border-white/5 relative overflow-hidden shadow-inner">
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <span className="text-[10px] font-black tracking-[0.5em] text-forge-accent uppercase">Vernacular</span>
                            <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.85]">
                                THE SLANG <br /> <span className="text-forge-grey">DICTIONARY</span>
                            </h2>
                            <p className="text-forge-grey text-xl leading-relaxed font-light max-w-md">
                                Decoding the language of the forge. Understanding the mindset shared from ballroom scenes to global urban culture.
                            </p>
                            <button className="px-12 py-5 bg-forge-accent text-forge-bg text-[10px] font-black uppercase tracking-[0.3em] hover:bg-forge-accent-hover transition-luxury shadow-lg">
                                Open Glossary
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            {['AURA', 'RIZZ', 'BET', 'DRIP'].map((word) => (
                                <div key={word} className="p-10 bg-forge-surface border border-white/5 flex flex-col items-center justify-center space-y-2 group hover:border-forge-accent transition-luxury shadow-sm hover:shadow-xl hover:scale-105">
                                    <span className="text-3xl font-black tracking-tighter text-white/10 group-hover:text-forge-accent transition-luxury">{word}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
