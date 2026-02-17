'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ShoppingCart, Heart } from 'lucide-react'
import { Product } from '@/types'
import { useState } from 'react'
import Image from 'next/image'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100)

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-forge-darker/50 rounded-lg overflow-hidden border border-forge-teal/20 hover:border-forge-magenta/40 transition-all duration-300"
    >
      {/* Image Container */}
      <Link href={`/shop/${product.slug}`}>
        <div className="relative aspect-square bg-[#0a0a0a] overflow-hidden holographic">
          {/* Product Image */}
          {product.images && product.images[0] && (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}

          {/* Fallback/Overlay Branding */}
          {!product.images?.[0] && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-2 p-6 z-10">
                <div className="text-7xl font-bold bg-gradient-to-r from-forge-teal to-forge-magenta bg-clip-text text-transparent opacity-80 italic">
                  FP
                </div>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-display">{product.name}</p>
              </div>
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-forge-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4">
              <button className="w-full btn-primary py-3 rounded-lg flex items-center justify-center gap-2">
                <ShoppingCart size={18} />
                Quick Add
              </button>
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {discount > 0 && (
              <span className="px-3 py-1 bg-forge-magenta rounded-full text-white text-xs font-bold">
                {discount}% OFF
              </span>
            )}
            {product.featured && (
              <span className="px-3 py-1 bg-forge-teal rounded-full text-forge-dark text-xs font-bold">
                FEATURED
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              setIsWishlisted(!isWishlisted)
            }}
            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-forge-dark/80 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-forge-teal/20 hover:border-forge-teal transition-all duration-300"
          >
            <Heart
              size={18}
              className={`transition-colors ${isWishlisted ? 'fill-forge-magenta text-forge-magenta' : 'text-white/60'
                }`}
            />
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4 space-y-4">
        <div>
          <Link href={`/shop/${product.slug}`}>
            <h3 className="text-white font-display text-base tracking-widest uppercase hover:text-forge-teal transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="text-white/40 text-[11px] line-clamp-1 mt-1 font-light italic">&quot;Forging a mindset, not just a fit&quot;</p>
        </div>

        {/* Fabric & GSM */}
        <div className="flex items-center gap-3 font-display">
          <span className="text-[10px] font-bold tracking-tighter px-2 py-0.5 bg-forge-teal text-forge-dark skew-x-[-12deg]">
            {product.gsm} HEAVYWEIGHT
          </span>
          <span className="text-[10px] text-white/40 uppercase tracking-[0.2em]">{product.fabric}</span>
        </div>

        {/* Colors */}
        <div className="flex items-center gap-2">
          {product.colors.slice(0, 3).map((color, idx) => (
            <div
              key={idx}
              className="w-6 h-6 rounded-full border-2 border-white/20"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
          {product.colors.length > 3 && (
            <span className="text-xs text-white/40">+{product.colors.length - 3}</span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">₹{product.price}</span>
            {product.mrp > product.price && (
              <span className="text-sm text-white/40 line-through">₹{product.mrp}</span>
            )}
          </div>

          {product.inStock ? (
            <span className="text-xs text-forge-teal font-semibold">IN STOCK</span>
          ) : (
            <span className="text-xs text-forge-magenta font-semibold">SOLD OUT</span>
          )}
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-forge-teal/0 via-forge-magenta/5 to-forge-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  )
}
