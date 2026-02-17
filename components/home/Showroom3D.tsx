'use client'

import { motion } from 'framer-motion'
import { Sparkles, Box, Maximize2 } from 'lucide-react'

const showroomItems = [
    {
        title: "The Architect Hoodie",
        category: "Heavyweight 400 GSM",
        videoPlaceholder: "3D Construction View",
        color: "bg-forge-bone"
    },
    {
        title: "Forge Standard Tee",
        category: "Premium 200 GSM",
        videoPlaceholder: "Fabric Physics Simulation",
        color: "bg-white"
    },
    {
        title: "Urban Utility Pant",
        category: "Reinforced Stitching",
        videoPlaceholder: "360° Rotation",
        color: "bg-forge-bone"
    }
]

export default function Showroom3D() {
    return (
        <section className="py-32 relative overflow-hidden bg-white subtle-grain border-y border-black/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-xl"
                    >
                        <div className="flex items-center gap-3 text-forge-red mb-6">
                            <Box size={18} />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Virtual Engineering</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter leading-[0.85]">
                            3D <span className="text-forge-red">SHOWROOM</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-forge-grey text-lg font-light italic max-w-sm border-l border-black/10 pl-8"
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
                                {/* 3D Video Placeholder Visuals */}
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

                                <div className="absolute bottom-6 right-6 p-4 bg-white text-black opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 cursor-pointer hover:bg-forge-red hover:text-white">
                                    <Maximize2 size={16} />
                                </div>
                            </div>

                            <div className="mt-6 space-y-2">
                                <h4 className="text-black font-black uppercase text-lg tracking-tighter">{item.title}</h4>
                                <p className="text-[10px] font-bold text-forge-red uppercase tracking-widest italic">{item.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
