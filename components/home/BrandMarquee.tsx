'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const marqueeImages = [
    '/products/architect.jpg',
    '/products/chrome-pac.jpg',
    '/products/demon-drop.jpg',
    '/products/dharma-force.jpg',
    '/products/human-routine.jpg',
    '/products/inferno-match.jpg',
    '/products/shiva-essence.jpg',
    '/products/skate-out.jpg',
]

const brandItems = [
    "FORGE PIECE",
    "/logo.svg",
    "MINDSET",
    "/logo.svg",
    "EST. 2024",
    "/logo.svg",
    "PREMIUM",
    "/logo.svg",
]

export default function BrandMarquee() {
    return (
        <section className="py-24 bg-white overflow-hidden border-y border-black/5">
            {/* Row 1: Product Showcase (Right to Left) */}
            <div className="flex mb-12">
                <motion.div
                    animate={{ x: [0, -2000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                    className="flex gap-8 items-center"
                >
                    {[...marqueeImages, ...marqueeImages, ...marqueeImages].map((src, i) => (
                        <div
                            key={i}
                            className="w-64 h-80 flex-shrink-0 bg-forge-bone relative overflow-hidden border border-black/5 group shadow-sm hover:shadow-xl transition-luxury"
                        >
                            <Image
                                src={src}
                                alt="Product Preview"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Row 2: Brand Identity (Left to Right) */}
            <div className="bg-black py-8 border-y border-black/5">
                <motion.div
                    animate={{ x: [-2000, 0] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                    className="flex gap-20 items-center whitespace-nowrap"
                >
                    {[...brandItems, ...brandItems, ...brandItems, ...brandItems].map((item, i) => (
                        <div key={i} className="flex items-center gap-12">
                            {item.endsWith('.svg') ? (
                                <div className="w-16 h-16 invert brightness-0">
                                    <Image src={item} alt="Logo" width={64} height={64} className="object-contain" />
                                </div>
                            ) : (
                                <span className="text-4xl md:text-6xl font-black text-white uppercase tracking-[0.2em] italic opacity-80 hover:opacity-100 transition-opacity">
                                    {item}
                                </span>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
