'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { products } from '@/data/products'
import { ShoppingCart, Heart, ShieldCheck, Truck, RotateCcw, Info, Check } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useCart } from '@/store/useCart'
import Image from 'next/image'

export default function ProductDetail() {
    const { slug } = useParams()
    const product = products.find((p) => p.slug === slug)
    const [selectedSize, setSelectedSize] = useState('')
    const [selectedColor, setSelectedColor] = useState(product?.colors[0]?.name || '')
    const [isAdded, setIsAdded] = useState(false)
    const [mainImage, setMainImage] = useState(product?.images[0] || '')
    const addItem = useCart((state) => state.addItem)

    useEffect(() => {
        if (product) {
            setMainImage(product.images[0])
            setSelectedColor(product.colors[0]?.name || '')
        }
    }, [product])

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size')
            return
        }
        if (!product) return

        addItem(product, selectedSize, selectedColor)
        setIsAdded(true)
        setTimeout(() => setIsAdded(false), 2000)
    }

    if (!product) return <div className="pt-40 text-center">Product not found.</div>

    const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100)

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="space-y-4"
                    >
                        <div className="aspect-square bg-[#0a0a0a] rounded-lg border border-white/5 holographic flex items-center justify-center relative group overflow-hidden">
                            {mainImage ? (
                                <Image
                                    src={mainImage}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            ) : (
                                <div className="text-9xl font-bold bg-gradient-to-br from-white/10 to-transparent bg-clip-text text-transparent italic select-none">
                                    FORGE
                                </div>
                            )}

                            {/* Label for Back Print */}
                            <div className="absolute top-6 right-6 px-3 py-1 bg-forge-teal/20 border border-forge-teal/40 rounded-sm z-10">
                                <span className="text-[10px] text-forge-teal font-display tracking-widest uppercase">Signature Back Print</span>
                            </div>
                        </div>

                        {product.images.length > 1 && (
                            <div className="grid grid-cols-4 gap-4">
                                {product.images.map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setMainImage(img)}
                                        className={`aspect-square bg-white/5 border rounded-sm overflow-hidden hover:border-forge-teal transition-colors relative ${mainImage === img ? 'border-forge-teal' : 'border-white/10'
                                            }`}
                                    >
                                        <Image
                                            src={img}
                                            alt={`${product.name} thumb ${i + 1}`}
                                            fill
                                            className="object-cover"
                                            sizes="10vw"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </motion.div>

                    {/* Product Details */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-2"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <span className="px-3 py-1 bg-forge-teal text-forge-dark text-[10px] font-bold font-display tracking-widest uppercase skew-x-[-12deg]">
                                    {product.gsm} Heavyweight
                                </span>
                                {discount > 0 && (
                                    <span className="text-forge-magenta text-[10px] font-bold font-display tracking-widest uppercase">
                                        Save {discount}%
                                    </span>
                                )}
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tighter leading-none">
                                {product.name}
                            </h1>
                            <p className="text-white/40 text-sm font-light italic">&quot;Forging a mindset, not just a fit.&quot;</p>
                        </motion.div>

                        <div className="flex items-baseline gap-4">
                            <span className="text-4xl font-bold text-white font-display">₹{product.price}</span>
                            {product.mrp > product.price && (
                                <span className="text-xl text-white/30 line-through">₹{product.mrp}</span>
                            )}
                        </div>

                        <p className="text-white/60 text-base leading-relaxed max-w-xl">
                            {product.description}
                        </p>

                        {/* Size Selection */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-display tracking-widest uppercase text-white/50">Select Size</span>
                                <button className="text-[10px] text-forge-teal uppercase tracking-widest hover:underline flex items-center gap-1">
                                    <Info size={12} /> Size Guide
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {product.sizes.map((s) => (
                                    <button
                                        key={s.size}
                                        disabled={!s.inStock}
                                        onClick={() => setSelectedSize(s.size)}
                                        className={`w-14 h-14 border flex items-center justify-center text-xs font-display tracking-widest transition-all ${!s.inStock
                                            ? 'border-white/5 text-white/10 cursor-not-allowed bg-transparent'
                                            : selectedSize === s.size
                                                ? 'border-forge-teal bg-forge-teal text-forge-dark font-bold'
                                                : 'border-white/10 text-white/60 hover:border-white/30'
                                            }`}
                                    >
                                        {s.size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Color Selection */}
                        {product.colors.length > 1 && (
                            <div className="space-y-4">
                                <span className="text-xs font-display tracking-widest uppercase text-white/50">Select Color</span>
                                <div className="flex flex-wrap gap-3">
                                    {product.colors.map((c) => (
                                        <button
                                            key={c.name}
                                            disabled={!c.inStock}
                                            onClick={() => setSelectedColor(c.name)}
                                            className={`px-4 py-2 border text-[10px] font-display tracking-widest uppercase transition-all ${!c.inStock
                                                ? 'border-white/5 text-white/10 cursor-not-allowed bg-transparent'
                                                : selectedColor === c.name
                                                    ? 'border-forge-teal bg-forge-teal/10 text-forge-teal font-bold'
                                                    : 'border-white/10 text-white/60 hover:border-white/30'
                                                }`}
                                        >
                                            {c.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button
                                onClick={handleAddToCart}
                                disabled={isAdded}
                                className={`flex-1 py-5 rounded-sm flex items-center justify-center gap-3 text-sm font-display font-bold tracking-widest uppercase transition-all active:scale-95 ${isAdded
                                    ? 'bg-forge-teal text-forge-dark'
                                    : 'btn-primary'
                                    }`}
                            >
                                {isAdded ? <Check size={18} /> : <ShoppingCart size={18} />}
                                {isAdded ? 'Added' : 'Add to Cart'}
                            </button>
                            <button className="w-full sm:w-16 h-16 border border-white/10 flex items-center justify-center rounded-sm hover:bg-white/5 transition-colors group">
                                <Heart size={20} className="text-white/40 group-hover:text-forge-magenta" />
                            </button>
                        </div>

                        {/* Product Meta / Specs */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 border-t border-white/5">
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-display tracking-[0.3em] text-white/30 uppercase">The Craft</h4>
                                <ul className="space-y-3">
                                    {product.features.map((f, i) => (
                                        <li key={i} className="flex items-center gap-3 text-xs text-white/60">
                                            <ShieldCheck size={16} className="text-forge-teal shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h4 className="text-[10px] font-display tracking-[0.3em] text-white/30 uppercase">Shipping & Returns</h4>
                                    <div className="space-y-4">
                                        <div className="flex gap-3 text-xs text-white/60">
                                            <Truck size={16} className="text-forge-teal shrink-0" />
                                            <span>Ships within 24-48 hours. Free shipping across India.</span>
                                        </div>
                                        <div className="flex gap-3 text-xs text-white/60">
                                            <RotateCcw size={16} className="text-forge-teal shrink-0" />
                                            <span>7-day easy exchange. No questions asked.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Legal / Compliance Info for Product */}
                        <div className="p-6 bg-white/[0.02] border border-white/5 rounded-sm space-y-3">
                            <h4 className="text-[10px] font-display tracking-[0.2em] text-white/50 uppercase flex items-center gap-2">
                                <Info size={14} className="text-forge-teal" /> Compliance Information
                            </h4>
                            <div className="grid grid-cols-2 gap-4 text-[10px] text-white/30 uppercase tracking-widest leading-relaxed">
                                <div>
                                    <p>MFG By: Forge Piece Apparel</p>
                                    <p>Packed At: Mumbai, MH 400001</p>
                                </div>
                                <div>
                                    <p>Material: {product.fabric}</p>
                                    <p>Generic Name: Men&apos;s T-shirt</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
