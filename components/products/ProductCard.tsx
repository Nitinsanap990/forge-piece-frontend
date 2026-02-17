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
      whileHover={{ y: -5 }}
      className="group relative bg-white overflow-hidden border border-black/5 hover:border-black/10 transition-luxury shadow-sm"
    >
      {/* Image Container */}
      <Link href={`/shop/${product.slug}`}>
        <div className="relative aspect-[4/5] bg-forge-bone overflow-hidden">
          {/* Product Image */}
          {product.images && product.images[0] && (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition-luxury group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-luxury flex items-end p-6">
            <button className="w-full bg-black text-white py-4 text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-luxury">
              Quick Add
            </button>
          </div>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {discount > 0 && (
              <span className="px-3 py-1 bg-forge-red text-white text-[9px] font-black tracking-widest uppercase shadow-md">
                {discount}% OFF
              </span>
            )}
            {product.featured && (
              <span className="px-3 py-1 bg-black text-white text-[9px] font-bold tracking-widest uppercase">
                New Arrival
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              setIsWishlisted(!isWishlisted)
            }}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-luxury"
          >
            <Heart
              size={18}
              className={`transition-colors ${isWishlisted ? 'fill-forge-red text-forge-red' : 'text-black/40 hover:text-black'
                }`}
            />
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <div className="space-y-1">
          <Link href={`/shop/${product.slug}`}>
            <h3 className="text-black text-xs font-bold tracking-widest uppercase hover:text-forge-red transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="text-forge-grey text-[10px] uppercase tracking-widest font-medium">100% Cotton • Heavyweight</p>
        </div>

        {/* Price & GSM */}
        <div className="flex items-center justify-between pt-4 border-t border-black/5">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-black text-black">₹{product.price}</span>
            {product.mrp > product.price && (
              <span className="text-[10px] text-forge-grey line-through font-medium">₹{product.mrp}</span>
            )}
          </div>
          <span className="text-[9px] text-forge-red font-black tracking-widest uppercase">{product.gsm}</span>
        </div>
      </div>
    </motion.div>
  )
}
