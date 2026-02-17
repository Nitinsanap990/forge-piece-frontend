'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { products } from '@/data/products'
import ProductCard from '@/components/products/ProductCard'
import { SlidersHorizontal, X } from 'lucide-react'

const categories = ['all', 'tshirt', 'hoodie', 'accessories']

export default function ShopPage() {
    const [activeCategory, setActiveCategory] = useState('all')
    const [showFilters, setShowFilters] = useState(false)

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(p => p.category === activeCategory)

    return (
        <div className="min-h-screen pt-40 pb-32 bg-white subtle-grain">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            className="h-px w-12 bg-forge-red origin-left"
                        ></motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-black leading-[0.8]"
                        >
                            THE <span className="text-forge-red">FORGE</span> SHOP
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-forge-grey max-w-xl text-lg font-light leading-relaxed"
                        >
                            Engineered for durability. Designed for the bold. <br />
                            Premium 100% Cotton. 200 GSM Heavyweight.
                        </motion.p>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center gap-3 px-10 py-5 border border-black/10 bg-white text-black hover:bg-black hover:text-white transition-luxury text-[10px] font-bold tracking-[0.3em] uppercase shadow-sm"
                        >
                            <SlidersHorizontal size={14} />
                            Filter Pieces
                        </button>
                    </div>
                </div>

                {/* Categories Bar */}
                <div className="flex flex-wrap gap-4 mb-20 border-b border-black/5 pb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-10 py-4 text-[10px] font-bold tracking-[0.3em] uppercase transition-luxury border rounded-none ${activeCategory === cat
                                ? 'bg-forge-red border-forge-red text-white shadow-lg shadow-forge-red/20 scale-105'
                                : 'bg-white text-black/40 hover:text-black border-black/5'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-40">
                        <p className="text-black/10 font-bold uppercase tracking-[0.5em] text-xs">Forging new pieces for this category shortly.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
