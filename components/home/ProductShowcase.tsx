'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const showcaseProducts = [
    { name: 'The Architect', image: '/products/architect.jpg', tag: 'Limited Drop' },
    { name: 'Chrome Pac', image: '/products/chrome-pac.jpg', tag: 'New Arrival' },
    { name: 'Demon Drop', image: '/products/demon-drop.jpg', tag: 'Bestseller' },
    { name: 'Dharma Force', image: '/products/dharma-force.jpg', tag: 'Premium' },
    { name: 'Human Routine', image: '/products/human-routine.jpg', tag: 'Exclusive' },
    { name: 'Inferno Match', image: '/products/inferno-match.jpg', tag: 'Hot Drop' },
    { name: 'Shiva Essence', image: '/products/shiva-essence.jpg', tag: 'Iconic' },
    { name: 'Skate Out', image: '/products/skate-out.jpg', tag: 'Street Ready' },
]

export default function ProductShowcase() {
    return (
        <section className="pt-32 pb-24 bg-forge-bg subtle-grain overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <span className="text-[10px] font-black tracking-[0.6em] text-forge-accent uppercase mb-4 block">The Collection</span>
                    <h2 className="text-5xl sm:text-7xl md:text-8xl font-black mb-4 uppercase tracking-tighter text-white leading-[0.8]">
                        FORGED <span className="text-forge-accent">PIECES</span>
                    </h2>
                    <p className="text-forge-grey text-lg max-w-xl mx-auto font-light italic">
                        Engineered for durability. Designed for the bold.
                    </p>
                </motion.div>
            </div>

            {/* Row 1 - scrolling left */}
            <div className="relative mb-8">
                <motion.div
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'linear' } }}
                    className="flex gap-6 w-max"
                >
                    {[...showcaseProducts, ...showcaseProducts].map((product, i) => (
                        <Link key={i} href="/shop" className="group relative flex-shrink-0 w-72 aspect-[3/4] bg-forge-card border border-white/5 overflow-hidden shadow-md hover:shadow-2xl transition-luxury">
                            <Image src={product.image} alt={product.name} fill className="object-cover transition-luxury group-hover:scale-105 opacity-80 group-hover:opacity-100" sizes="288px" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                                <span className="text-[9px] font-black tracking-[0.3em] text-forge-accent uppercase">{product.tag}</span>
                                <h3 className="text-white font-black text-lg uppercase tracking-tighter">{product.name}</h3>
                            </div>
                        </Link>
                    ))}
                </motion.div>
            </div>

            {/* Row 2 - scrolling right */}
            <div className="relative mb-16">
                <motion.div
                    animate={{ x: ['-50%', '0%'] }}
                    transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 35, ease: 'linear' } }}
                    className="flex gap-6 w-max"
                >
                    {[...showcaseProducts.slice().reverse(), ...showcaseProducts.slice().reverse()].map((product, i) => (
                        <Link key={i} href="/shop" className="group relative flex-shrink-0 w-72 aspect-[3/4] bg-forge-card border border-white/5 overflow-hidden shadow-md hover:shadow-2xl transition-luxury">
                            <Image src={product.image} alt={product.name} fill className="object-cover transition-luxury group-hover:scale-105 opacity-80 group-hover:opacity-100" sizes="288px" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                                <span className="text-[9px] font-black tracking-[0.3em] text-forge-accent uppercase">{product.tag}</span>
                                <h3 className="text-white font-black text-lg uppercase tracking-tighter">{product.name}</h3>
                            </div>
                        </Link>
                    ))}
                </motion.div>
            </div>

            {/* Brand bar */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center gap-6 py-8 border-t border-white/5">
                    <span className="text-[10px] font-black tracking-[0.8em] text-white/20 uppercase">Forge Piece</span>
                    <div className="w-2 h-2 bg-forge-accent"></div>
                    <span className="text-[10px] font-black tracking-[0.8em] text-white/20 uppercase">Mumbai</span>
                </div>
            </div>
        </section>
    )
}
