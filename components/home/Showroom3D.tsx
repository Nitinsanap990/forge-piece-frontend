'use client'

import { motion } from 'framer-motion'
import { Sparkles, Box, Maximize2, Layers, Hammer } from 'lucide-react'
import Image from 'next/image'

const showroomItems = [
    {
        title: "The Architect Hoodie",
        category: "Heavyweight 400 GSM",
        videoPlaceholder: "3D Construction View",
        color: "bg-forge-card"
    },
    {
        title: "Forge Standard Tee",
        category: "Premium 200 GSM",
        videoPlaceholder: "Fabric Physics Simulation",
        color: "bg-forge-surface"
    },
    {
        title: "Urban Utility Pant",
        category: "Reinforced Stitching",
        videoPlaceholder: "360 Rotation",
        color: "bg-forge-card"
    }
]

export default function Showroom3D() {
    return (
        <section className="py-32 relative overflow-hidden bg-forge-bg subtle-grain border-y border-black/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-xl"
                    >
                        <div className="flex items-center gap-3 text-forge-accent mb-6">
                            <Box size={18} />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Virtual Engineering</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter leading-[0.85]">
                            3D <span style={{ color: 'rgb(226, 225, 225)' }}>SHOWROOM</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-black text-lg font-light italic max-w-sm border-l border-black/10 pl-8"
                    >
                        Every piece is digitally forged and stressed before physical production. Experience the precision in 3D.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {showroomItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className={`relative aspect-[3/4] ${item.color} border border-black/5 overflow-hidden shadow-sm group-hover:shadow-2xl transition-luxury flex flex-col items-center justify-center p-8`}>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative z-10 text-center space-y-6">
                                    <motion.div
                                        animate={{ rotateY: 360 }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                        className="w-40 h-40 mx-auto border-2 border-dashed border-black/10 rounded-full flex items-center justify-center"
                                    >
                                        <Sparkles size={80} className="text-black/5" />
                                    </motion.div>
                                    <p className="text-[10px] font-black text-forge-grey uppercase tracking-widest">{item.videoPlaceholder}</p>
                                </div>
                                <div className="absolute bottom-6 right-6 p-4 bg-black text-white opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 cursor-pointer hover:bg-forge-accent">
                                    <Maximize2 size={16} />
                                </div>
                            </div>
                            <div className="mt-6 space-y-2">
                                <h4 className="text-black font-black uppercase text-lg tracking-tighter">{item.title}</h4>
                                <p className="text-[10px] font-bold text-forge-accent uppercase tracking-widest italic">{item.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Fabric Experience Integration */}
                <div className="mt-32 pt-32 border-t border-black/5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="grid grid-cols-2 gap-6 relative order-2 lg:order-1">
                            {[1, 2, 3, 4].map((num, i) => (
                                <motion.div
                                    key={num}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="aspect-square relative group overflow-hidden border border-black/10 bg-forge-card shadow-lg"
                                >
                                    <Image
                                        src={`/quality/fabric-${num}.jpg`}
                                        alt={`Fabric Quality ${num}`}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-luxury group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-forge-accent/5 opacity-0 group-hover:opacity-100 transition-luxury pointer-events-none"></div>
                                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 px-2 py-1">
                                        <span className="text-[8px] font-black text-white uppercase tracking-widest leading-none">FP-Q{num}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12 order-1 lg:order-2"
                        >
                            <div className="space-y-6">
                                <span className="text-[10px] font-black tracking-[0.6em] text-forge-accent uppercase block">Material Integrity</span>
                                <h2 className="text-5xl md:text-6xl font-black text-black uppercase tracking-tighter leading-[0.85]">
                                    BEYOND THE <br /> <span style={{ color: 'rgb(226, 225, 225)' }}>SURFACE</span>
                                </h2>
                                <p className="text-black text-lg font-light leading-relaxed">
                                    Our obsession with quality begins at the microscopic level. Every fiber is chosen for its ability to represent the Forge mindset.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex gap-6 items-start group">
                                    <div className="p-4 bg-forge-surface border border-white/10 text-forge-accent group-hover:bg-forge-accent group-hover:text-forge-bg transition-luxury">
                                        <Layers size={20} />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-sm font-black text-black uppercase tracking-widest">180 GSM Precision</h3>
                                        <p className="text-black text-xs font-light leading-relaxed">Engineered for the perfect balance of weight and breathability.</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start group">
                                    <div className="p-4 bg-forge-surface border border-white/10 text-forge-accent group-hover:bg-forge-accent group-hover:text-forge-bg transition-luxury">
                                        <Sparkles size={20} />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-sm font-black text-black uppercase tracking-widest">100% Macro Cotton</h3>
                                        <p className="text-black text-xs font-light leading-relaxed">Pure, long-staple cotton fibers for unparalleled softness and lifespan.</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start group">
                                    <div className="p-4 bg-forge-surface border border-white/10 text-forge-accent group-hover:bg-forge-accent group-hover:text-forge-bg transition-luxury">
                                        <Hammer size={20} />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-sm font-black text-black uppercase tracking-widest">Ink Fusion Tech</h3>
                                        <p className="text-black text-xs font-light leading-relaxed">High-density printing that bonds with the fabric for zero cracking.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
