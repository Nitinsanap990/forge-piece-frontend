'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { products } from '@/data/products'
import ProductCard from '@/components/products/ProductCard'

export default function FeaturedProducts() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 6)

  return (
    <section className="py-32 relative bg-forge-bg overflow-hidden subtle-grain border-y border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="flex flex-col items-center gap-6">
            <span className="text-[11px] font-black tracking-[0.5em] text-forge-accent uppercase">
              Curated Selection
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.8]">
              FEATURED DROPS
            </h2>
            <div className="h-0.5 w-16 bg-forge-accent"></div>
            <p className="text-forge-grey text-lg sm:text-xl max-w-xl mx-auto leading-relaxed font-light italic">
              Meticulously forged streetwear engineering. <br />
              <span className="text-white font-bold uppercase not-italic text-sm tracking-widest">200 GSM Premium Cotton &bull; Heavyweight Standard</span>
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <Link href="/shop">
            <button className="px-16 py-6 bg-forge-accent text-forge-bg text-[10px] font-black uppercase tracking-[0.4em] hover:bg-forge-accent-hover transition-luxury shadow-2xl active:scale-95">
              Discover Full Collection
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
