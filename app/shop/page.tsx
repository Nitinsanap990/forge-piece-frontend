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
        <div className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div className="space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter"
                        >
                            The Collection
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-white/40 max-w-xl font-light italic"
                        >
                            Forging apparel that speaks your truth. Premium 180-200 GSM quality for those who outwork the noise.
                        </motion.p>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors uppercase text-xs font-display tracking-widest"
                        >
                            <SlidersHorizontal size={16} />
                            Filters
                        </button>
                    </div>
                </div>

                {/* Categories Bar */}
                <div className="flex flex-wrap gap-4 mb-12 border-b border-white/5 pb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-xs font-display tracking-widest uppercase transition-all ${activeCategory === cat
                                    ? 'bg-forge-teal text-forge-dark font-bold'
                                    : 'bg-white/5 text-white/40 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-40">
                        <p className="text-white/20 font-display uppercase tracking-[0.5em]">Nothing forged in this category yet.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
