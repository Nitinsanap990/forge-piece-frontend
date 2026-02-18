'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types'
import { Heart, Sparkles } from 'lucide-react'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100)

  return (
    <Link href={`/shop/${product.slug}`}>
      <motion.div
        whileHover={{ y: -5 }}
        className="group relative cursor-pointer"
      >
        {/* Image Container */}
        <div className="relative aspect-[3/4] bg-white border border-black/5 overflow-hidden shadow-sm group-hover:shadow-2xl transition-luxury mb-6">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-luxury group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-luxury"></div>

          {/* Like Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              setIsLiked(!isLiked)
            }}
            className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm border border-black/10 shadow-md hover:bg-white transition-luxury z-10"
          >
            <Heart
              size={18}
              className={`transition-colors ${isLiked ? 'fill-black text-black' : 'text-black'}`}
            />
          </button>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
            {!product.inStock && (
              <span className="px-3 py-1 bg-black text-white text-[9px] font-black uppercase tracking-widest shadow-md">
                Sold Out
              </span>
            )}
            {product.featured && product.inStock && (
              <span className="px-3 py-1 bg-white text-black border border-black/10 text-[9px] font-black uppercase tracking-widest shadow-sm">
                Featured
              </span>
            )}
            {discount > 0 && product.inStock && (
              <span className="px-3 py-1 bg-black text-white text-[9px] font-black uppercase tracking-widest shadow-md">
                {discount}% Off
              </span>
            )}
          </div>

          {/* Quick View Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-luxury">
            <div className="flex items-center justify-center gap-2 text-white">
              <Sparkles size={14} />
              <span className="text-[9px] font-black uppercase tracking-widest">View Details</span>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-black font-black text-base uppercase tracking-tight leading-tight truncate group-hover:text-forge-accent transition-colors">
                {product.name}
              </h3>
              <p className="text-[10px] font-bold uppercase tracking-widest mt-1" style={{ color: 'rgb(226, 225, 225)' }}>
                {product.category}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-black font-black text-lg">₹{product.price}</span>
            {discount > 0 && (
              <>
                <span className="text-forge-grey text-sm line-through font-medium">₹{product.mrp}</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-black px-2 py-0.5 bg-black/5">
                  Save {discount}%
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-forge-grey">
            <span>{product.gsm}</span>
            <span>•</span>
            <span>{product.fabric}</span>
          </div>

          {!product.inStock && (
            <div className="pt-2">
              <span className="text-[9px] font-black uppercase tracking-widest text-black/40">
                Out of Stock
              </span>
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  )
}
