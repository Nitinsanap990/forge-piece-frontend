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
    const [isWishlisted, setIsWishlisted] = useState(false)
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

    if (!product) return <div className="pt-40 text-center text-white">Product not found.</div>

    const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100)

    return (
        <div className="min-h-screen pt-40 pb-20 bg-forge-bg subtle-grain">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <div className="aspect-[4/5] bg-forge-card border border-white/5 flex items-center justify-center relative group overflow-hidden shadow-sm">
                            {mainImage ? (
                                <Image
                                    src={mainImage}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-luxury group-hover:scale-105"
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            ) : (
                                <div className="text-6xl font-black text-white/5 uppercase tracking-tighter select-none">
                                    Forge
                                </div>
                            )}

                            {/* Luxury Label */}
                            <div className="absolute top-8 right-8 px-5 py-2 bg-forge-surface/90 backdrop-blur-md border border-white/10 z-10 shadow-sm">
                                <span className="text-[10px] text-white font-black tracking-[0.3em] uppercase">Premium Series</span>
                            </div>
                        </div>

                        {product.images.length > 1 && (
                            <div className="grid grid-cols-4 gap-4">
                                {product.images.map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setMainImage(img)}
                                        className={`aspect-square bg-forge-card border overflow-hidden hover:border-forge-accent transition-luxury relative shadow-sm ${mainImage === img ? 'border-forge-accent ring-1 ring-forge-accent' : 'border-white/5'
                                            }`}
                                    >
                                        <Image
                                            src={img}
                                            alt={`${product.name} thumb ${i + 1}`}
                                            fill
                                            className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                                            sizes="10vw"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </motion.div>

                    {/* Product Details */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] font-black tracking-[0.4em] text-forge-accent uppercase border-b-2 border-forge-accent pb-1">
                                    {product.gsm} Heavyweight
                                </span>
                                <span className="text-[10px] font-bold tracking-[0.4em] text-forge-grey uppercase">
                                    100% Premium Cotton
                                </span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white tracking-tighter leading-[0.85] uppercase">
                                {product.name}
                            </h1>
                        </motion.div>

                        <div className="flex items-baseline gap-6">
                            <span className="text-5xl font-black text-white">₹{product.price}</span>
                            {product.mrp > product.price && (
                                <span className="text-xl text-forge-grey line-through font-medium">₹{product.mrp}</span>
                            )}
                        </div>

                        <p className="text-forge-grey text-xl leading-relaxed max-w-xl font-light">
                            {product.description}
                        </p>

                        {/* Size Selection */}
                        <div className="space-y-8 pt-8 border-t border-white/5">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/40">Select Size</span>
                                <button className="text-[9px] text-white font-black uppercase tracking-widest hover:text-forge-accent transition-all flex items-center gap-2">
                                    Size Guide <Info size={12} />
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                {product.sizes.map((s) => (
                                    <button
                                        key={s.size}
                                        disabled={!s.inStock}
                                        onClick={() => setSelectedSize(s.size)}
                                        className={`w-16 h-16 flex items-center justify-center text-xs font-black tracking-widest transition-luxury rounded-none ${!s.inStock
                                            ? 'text-white/10 cursor-not-allowed bg-white/[0.02]'
                                            : selectedSize === s.size
                                                ? 'bg-forge-accent text-forge-bg shadow-lg scale-110 z-10'
                                                : 'bg-forge-surface text-white hover:border-white border border-white/10'
                                            }`}
                                    >
                                        {s.size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button
                                onClick={handleAddToCart}
                                disabled={isAdded}
                                className={`flex-1 py-6 flex items-center justify-center gap-4 text-xs font-black tracking-[0.3em] uppercase transition-luxury active:scale-[0.98] shadow-xl ${isAdded
                                    ? 'bg-forge-surface text-white'
                                    : 'bg-forge-accent text-forge-bg hover:bg-forge-accent-hover'
                                    }`}
                            >
                                {isAdded ? (
                                    <>
                                        <Check size={16} /> Item Added
                                    </>
                                ) : (
                                    <>
                                        <ShoppingCart size={16} /> Add to Collection
                                    </>
                                )}
                            </button>
                            <button
                                onClick={() => setIsWishlisted(!isWishlisted)}
                                className="w-full sm:w-20 h-20 bg-forge-card border border-white/10 flex items-center justify-center hover:border-white transition-luxury group"
                            >
                                <Heart size={20} className={`transition-luxury ${isWishlisted ? 'fill-forge-accent text-forge-accent scale-110' : 'text-white/20 group-hover:text-white'}`} />
                            </button>
                        </div>

                        {/* Technical Specs */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-16 border-t border-white/5">
                            <div className="space-y-6">
                                <h4 className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase">Technical Specs</h4>
                                <ul className="space-y-5">
                                    <li className="flex items-center gap-4 text-xs text-forge-grey uppercase tracking-widest font-medium">
                                        <ShieldCheck size={16} className="text-forge-accent" />
                                        100% Premium Cotton
                                    </li>
                                    <li className="flex items-center gap-4 text-xs text-forge-grey uppercase tracking-widest font-medium">
                                        <Info size={16} className="text-forge-accent" />
                                        {product.gsm} Heavyweight Fabric
                                    </li>
                                    <li className="flex items-center gap-4 text-xs text-forge-grey uppercase tracking-widest font-medium">
                                        <Check size={16} className="text-forge-accent" />
                                        Reinforced Stitching
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase">Logistics</h4>
                                <div className="space-y-5">
                                    <div className="flex items-center gap-4 text-xs text-forge-grey uppercase tracking-widest font-medium">
                                        <Truck size={16} className="text-white" />
                                        Pan-India Delivery
                                    </div>
                                    <div className="flex items-center gap-4 text-xs text-forge-grey uppercase tracking-widest font-medium">
                                        <RotateCcw size={16} className="text-white" />
                                        7-Day Easy Exchange
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Legal/Compliance */}
                        <div className="py-10 border-t border-white/5 opacity-40">
                            <div className="flex flex-wrap gap-8 text-[10px] text-white font-bold tracking-[0.3em] uppercase">
                                <span>MRP Incl. of taxes</span>
                                <span>Hustle in Mumbai</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
