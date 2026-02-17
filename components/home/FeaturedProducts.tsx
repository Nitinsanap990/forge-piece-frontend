'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { products } from '@/data/products'
import ProductCard from '@/components/products/ProductCard'

export default function FeaturedProducts() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 6)

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-forge-magenta to-forge-purple bg-clip-text text-transparent">
              Featured Drops
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Premium streetwear designs that forge your story. Each piece is a statement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
          className="text-center mt-12"
        >
          <Link href="/shop">
            <button className="btn-primary px-8 py-4 rounded-full">
              View All Products
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
